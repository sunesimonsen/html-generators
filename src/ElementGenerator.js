const {
  categories,
  categoryField,
  elementsByCategory,
  elementsByTag
} = require("./elements");

const Generator = require("chance-generators/lib/Generator");

const generateTextFromRegep = (chance, regex) => {
  switch (regex) {
    case "/.*/":
      return chance.string({ length: chance.natural({ min: 0, max: 20 }) });
    case "/.+/":
      return chance.string({ length: chance.natural({ min: 1, max: 20 }) });
    case "/\\d+/":
      return String(chance.natural({ min: 0, max: 1000 }));
    case "/-?\\d+/":
      return `${chance.bool() ? "-" : ""}${chance.natural({
        min: 0,
        max: 1000
      })}`;
    default:
      throw new Error(`Unknown regex: ${regex}`);
  }
};

const isRegex = value => value.startsWith("/");

class ElementGenerator extends Generator {
  constructor({
    excludedDescendants = new Set(),
    minChildren = 0,
    maxChildren = 5,
    maxDepth = 5,
    name = "element",
    parentTag,
    tag = "html"
  } = {}) {
    super(name, {
      tag,
      parentTag,
      minChildren,
      maxChildren,
      maxDepth,
      excludedDescendants
    });

    const element = elementsByTag[tag];
    (element.permittedDescendants || []).forEach(({ exclude }) => {
      if (typeof exclude === "string") {
        excludedDescendants.add(exclude);
      } else {
        exclude.forEach(tag => {
          excludedDescendants.add(tag);
        });
      }
    });

    this.options.excludedDescendants = excludedDescendants;
    this.options.element = element;
    this.options.parentElement = parentTag && elementsByTag[parentTag];
  }

  generate(chance) {
    const {
      element,
      excludedDescendants,
      minChildren,
      maxChildren,
      maxDepth,
      parentElement,
      tag
    } = this.options;

    const attributeNames = new Set(
      chance.pickset(
        Object.keys(element.attributes),
        chance.natural({ max: element.attributes.length - 1 })
      )
    );

    (element.requiredAttributes || []).forEach(attribute => {
      attributeNames.add(attribute);
    });

    const attributes = Array.from(attributeNames).reduce(
      (result, attributeName) => {
        const attributeValues = (
          element.attributes[attributeName] || ["/.*/"]
        ).map(value =>
          isRegex(value) ? generateTextFromRegep(chance, value) : value
        );

        if (attributeValues.length === 0) {
          result[attributeName] = "";
        } else {
          result[attributeName] = chance.pickone(attributeValues);
        }

        return result;
      },
      {}
    );

    if (element.void) {
      return { type: "tag", tag, children: [], attributes };
    }

    const permittedOrder = element.transparent
      ? parentElement.permittedOrder
      : element.permittedOrder;

    const requiredContent = new Set(
      (element.transparent
        ? parentElement.requiredContent
        : element.requiredContent) || []
    );

    const permittedContent = (
      (element.transparent
        ? parentElement && parentElement.permittedContent
        : element.permittedContent) || categories
    )
      .filter(item => !excludedDescendants.has(item.replace(/\?$/, "")))
      .map(item => {
        const allowMultiple = !item.endsWith("?");
        const value = allowMultiple ? item : item.slice(0, -1);

        return {
          value,
          category: item.startsWith("@"),
          required: requiredContent.has(value),
          allowMultiple
        };
      });

    const children = Array.from(requiredContent) || [];

    const numberOfChildren = chance.natural({
      min: minChildren,
      max: maxChildren
    });

    const childrenLeft =
      maxDepth > 0 ? Math.max(0, numberOfChildren - children.length) : 0;

    const contentCandidates = permittedContent.filter(
      ({ value, required, allowMultiple, category }) =>
        (allowMultiple || !required) && (category || elementsByTag[value])
    );

    for (let i = 0; i < childrenLeft && contentCandidates.length > 0; i += 1) {
      const index = chance.natural({ max: contentCandidates.length - 1 });
      const item = contentCandidates[index];
      if (item.category) {
        if (
          (item.value === "@phrasing" || item.value === "@flow") &&
          chance.bool({ likelihood: 30 })
        ) {
          children.push("#text");
        } else {
          const possibleTags = elementsByCategory[item.value]
            .map(({ tag }) => tag)
            .filter(tag => !excludedDescendants.has(tag));

          children.push(chance.pickone(possibleTags));
        }
      } else if (item.allowMultiple) {
        children.push(item.value);
      } else {
        children.push(item.value);
        contentCandidates.splice(index, 1);
      }
    }

    const getOrderIndexes = tag =>
      (permittedOrder || [])
        .map((item, i) => {
          if (tag === "#text") {
            return item === "@phrasing" || item === "@flow" ? i : -1;
          }

          if (item.startsWith("@")) {
            return elementsByTag[tag] && elementsByTag[tag][categoryField[item]]
              ? i
              : -1;
          }

          return tag === item ? i : -1;
        })
        .filter(i => i !== -1);

    const getOrder = tag => {
      const orderIndexes = getOrderIndexes(tag);
      return orderIndexes.length > 0 ? chance.pickone(orderIndexes) : -1;
    };

    const childrenWithOrder = children.map(tag => ({
      tag,
      order: getOrder(tag)
    }));

    // Bubble sort ordered children
    for (let i = 0; i < children.length; i += 1) {
      if (childrenWithOrder[i].order !== -1) {
        for (let j = i + 1; j < children.length; j += 1) {
          if (
            childrenWithOrder[j].order !== -1 &&
            childrenWithOrder[j].order < childrenWithOrder[i].order
          ) {
            const tmp = childrenWithOrder[i];
            childrenWithOrder[i] = childrenWithOrder[j];
            childrenWithOrder[j] = tmp;
          }
        }
      }
    }

    const orderedChildren = childrenWithOrder.map(({ tag }) => tag);

    return {
      type: "tag",
      tag,
      attributes,
      children: orderedChildren.map(child =>
        child === "#text"
          ? {
              type: "text",
              value: chance.sentence({
                words: chance.natural({ min: 2, max: 7 })
              })
            }
          : new ElementGenerator({
              parentTag: tag,
              tag: child,
              minChildren,
              maxChildren,
              maxDepth: maxDepth - 1,
              excludedDescendants: new Set(excludedDescendants)
            }).generate(chance)
      )
    };
  }
}

module.exports = ElementGenerator;
