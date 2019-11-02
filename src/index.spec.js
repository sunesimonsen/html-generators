const expect = require("unexpected")
  .clone()
  .use(require("unexpected-snapshot"));

const { html } = require("./index");

describe("html", () => {
  it("generates random HTML", () => {
    expect(html.take(1), "to equal snapshot");
  });
});
