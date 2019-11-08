const escapeHtml = str =>
  str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");

const stringify = ({ type, tag, value, attributes, children }) => {
  if (type === "tag") {
    const stringifiedAttributes = Object.keys(attributes)
      .map(attributeName =>
        attributes[attributeName] === null
          ? ` ${attributeName}`
          : ` ${attributeName}="${escapeHtml(attributes[attributeName])}"`
      )
      .join("");
    return `<${tag}${stringifiedAttributes}>${children
      .map(stringify)
      .join("")}</${tag}>`;
  } else {
    // type === 'text'
    return escapeHtml(value);
  }
};

module.exports = stringify;
