const {
  categories,
  categoryField,
  elementsByCategory,
  elementsByTag
} = require("./elements");

const { declarationList, stylesheet } = require("css-generators");

const Generator = require("chance-generators/lib/Generator");
const { constant } = require("chance-generators");

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
    maxAttributes = 5,
    name = "element",
    parentTag,
    tag = "html"
  } = {}) {
    super(name, {
      tag,
      parentTag,
      maxAttributes,
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

  shrink(value) {
    const { maxAttributes, minChildren, maxChildren, maxDepth } = this.options;
    if (maxAttributes === 0 && maxDepth === 0 && minChildren === maxChildren) {
      return constant(value);
    }

    return new ElementGenerator({
      ...this.options,
      maxAttributes: Math.max(0, maxAttributes - 1),
      maxChildren: Math.max(minChildren, maxChildren - 1),
      maxDepth: Math.max(0, maxDepth - 1)
    });
  }

  generate(chance) {
    const {
      element,
      excludedDescendants,
      maxAttributes,
      minChildren,
      maxChildren,
      maxDepth,
      parentElement,
      tag
    } = this.options;

    const possibleElementAttributes = Object.keys(element.attributes);
    const requiredAttributes = element.requiredAttributes || [];
    const maxExtraAttributes = Math.max(
      0,
      Math.min(
        maxAttributes - requiredAttributes.length,
        possibleElementAttributes.length - 1
      )
    );
    const attributeNames = new Set(
      maxExtraAttributes === 0
        ? []
        : chance.pickset(
            possibleElementAttributes,
            chance.natural({
              max: maxExtraAttributes
            })
          )
    );

    requiredAttributes.forEach(attribute => {
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
          result[attributeName] = null;
        } else {
          result[attributeName] = chance.pickone(attributeValues);
        }

        return result;
      },
      {}
    );
    if (chance.bool({ likelihood: 20 })) {
      attributes.style = declarationList.generate(chance);
    }

    if (tag === "style") {
      return {
        type: "tag",
        tag,
        children: [{ type: "text", value: stylesheet.generate(chance) }],
        attributes
      };
    } else if (tag === "script") {
      return {
        type: "tag",
        tag,
        children: [{ type: "text", value: 'console.log("hello")' }],
        attributes
      };
    }

    if (element.void) {
      return { type: "tag", tag, children: [], attributes };
    }

    const excludedCategories = Array.from(excludedDescendants).filter(exclude =>
      exclude.startsWith("@")
    );

    const isExcluded = tag => {
      const element = elementsByTag[tag];

      if (excludedDescendants.has(tag)) {
        return true;
      }

      return excludedCategories.some(category =>
        element.categories.has(category)
      );
    };

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
    ).map(item => {
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
      if (excludedDescendants.has(item.value)) {
        // Excludes categories and plain tags
        contentCandidates.splice(index, 1);
      } else if (item.category) {
        if (
          (item.value === "@phrasing" || item.value === "@flow") &&
          chance.bool({ likelihood: 30 })
        ) {
          children.push("#text");
        } else {
          const possibleTags = elementsByCategory[item.value]
            .map(({ tag }) => tag)
            // Excludes tags selected from a categories
            .filter(tag => !isExcluded(tag));

          children.push(chance.pickone(possibleTags));
        }
      } else if (isExcluded(item.value)) {
        // Excludes plain tags that is part of an excluded category
        contentCandidates.splice(index, 1);
      } else if (item.allowMultiple) {
        children.push(item.value);
      } else {
        children.push(item.value);
        contentCandidates.splice(index, 1);
      }
    }

    if (contentCandidates.length === 0 && children.length === 0) {
      children.push("#text");
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
              maxAttributes,
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
