const ElementGenerator = require("./ElementGenerator");
const ElementStringGenerator = require("./ElementStringGenerator");
const createGeneratorFacade = require("chance-generators/lib/createGeneratorFacade");

module.exports = {
  html: createGeneratorFacade(ElementGenerator),
  htmlString: createGeneratorFacade(ElementStringGenerator)
};
