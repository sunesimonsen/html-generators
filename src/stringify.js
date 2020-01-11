const escapeHtml = str =>
  str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");

const stringify = ({ type, tag, value, attributes, children }, isCdata) => {
  if (type === "tag") {
    const stringifiedAttributes = Object.keys(attributes)
      .map(attributeName =>
        attributes[attributeName] === null
          ? ` ${attributeName}`
          : ` ${attributeName}="${escapeHtml(attributes[attributeName])}"`
      )
      .join("");
    return `<${tag}${stringifiedAttributes}>${children
      .map(child => stringify(child, tag === "script" || tag === "style"))
      .join("")}</${tag}>`;
  } else {
    // type === 'text'
    if (isCdata) {
      return value;
    } else {
      return escapeHtml(value);
    }
  }
};

module.exports = stringify;
