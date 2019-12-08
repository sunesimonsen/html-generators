const { HtmlValidate } = require("html-validate");
const htmlValidator = new HtmlValidate();

const expect = require("unexpected")
  .clone()
  .use(require("unexpected-snapshot"))
  .use(require("unexpected-check"))
  .addAssertion(
    "<chance-generator> to shrink towards <any>",
    (expect, subject, value) => {
      expect.errorMode = "nested";

      let count = 0;
      const iterator = subject.values();
      while (iterator.isShrinkable && count < 100) {
        const value = iterator.next();
        iterator.shrink(value);
        count++;
      }

      if (count === 100) {
        expect.fail("Could not shrink in 100 iterations");
      }

      expect(iterator.next(), "to equal", value);
    }
  )
  .addAssertion("<string> to be valid html", (expect, html) => {
    expect.errorMode = "bubble";
    const validationResult = htmlValidator.validateString(html);
    if (!validationResult.valid) {
      const messages = validationResult.results.map(({ messages }) => messages);
      expect.fail("Invalid: {0}", messages);
    }
  });

module.exports = expect;
