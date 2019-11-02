const ElementGenerator = require("./ElementGenerator");
const createGeneratorFacade = require("chance-generators/lib/createGeneratorFacade");

module.exports = {
  html: createGeneratorFacade(ElementGenerator)
};
