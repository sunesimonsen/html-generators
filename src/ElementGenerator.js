const { categories, elementsByTag, elementsByCategory } = require("./elements");
const Generator = require("chance-generators/lib/Generator");

const generateTextFromRegep = (chance, regex) => {
  switch (regex) {
    case "/.+/":
      return chance.string();
    case "/\\d+/":
      return String(chance.natural({ min: 0, max: 1000 }));
    case "/-?\\d+/":
      return `-${chance.natural({ min: 0, max: 1000 })}`;
    default:
      throw new Error(`Unknown regex: ${regex}`);
  }
};

const isRegex = value => value.startsWith("/");

class ElementGenerator extends Generator {
  constructor({ name = "element", tag, parentTag, min = 0, max = 5 } = {}) {
    super(name, { tag, parentTag, min, max });

    this.options.element = elementsByTag[tag];
    this.options.parentElement = parentTag && elementsByTag[parentTag];
  }

  generate(chance) {
    // TODO honour required attributes

    const { element, parentElement, max, min, tag } = this.options;

    const attributeNames = Object.keys(element.attributes);
    const attributes = chance
      .pickset(
        attributeNames,
        chance.natural({ max: attributeNames.length - 1 })
      )
      .reduce((result, attributeName) => {
        const attributeValues = element.attributes[attributeName].map(value =>
          isRegex(value) ? generateTextFromRegep(chance, value) : value
        );

        if (attributeValues.length === 0) {
          result[attributeName] = "";
        } else {
          result[attributeName] = chance.pickone(attributeValues);
        }

        return result;
      }, {});

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

    const children = Array.from(requiredContent) || [];

    const numberOfChildren = chance.natural({ min, max });
    let childrenLeft = Math.max(0, numberOfChildren - children.length);

    const permittedContent = (
      (element.transparent
        ? parentElement && parentElement.permittedContent
        : element.permittedContent) || categories
    ).filter(
      item => !item.endsWith("?") || !requiredContent.has(item.slice(0, -1))
    );

    for (var i = 0; i < childrenLeft; i += 1) {
      const index = chance.natural({ max: permittedContent.length - 1 });
      const item = permittedContent[index];
      if (item.endsWith("?")) {
        children.push(item.slice(0, -1));
        permittedContent.splice(index, 1);
      } else if (item.startsWith("@")) {
        if (
          (item === "@phrasing" || item === "@flow") &&
          chance.bool({ likelihood: 30 })
        ) {
          children.push("@text");
        } else {
          children.push(chance.pickone(elementsByCategory[item]).tag);
        }
      } else {
        children.push(item);
      }
    }

    console.log(tag, children);

    return {
      type: "tag",
      tag,
      attributes,
      children: children.map(child =>
        child === "@text"
          ? {
              type: "text",
              value: chance.sentence({
                words: chance.natural({ min: 2, max: 7 })
              })
            }
          : new ElementGenerator({
              parentTag: tag,
              tag: child,
              min,
              max: chance.natural({ min, max })
            }).generate(chance)
      )
    };
  }
}

module.exports = ElementGenerator;
