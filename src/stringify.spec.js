const stringify = require("./stringify");
const expect = require("unexpected");

describe("stringify", () => {
  it("should entitify the contents of a regular element", () => {
    expect(
      stringify({
        type: "tag",
        tag: "div",
        attributes: {},
        children: [{ type: "text", value: 'Milk & "cookies"' }]
      }),
      "to equal",
      "<div>Milk &amp; &quot;cookies&quot;</div>"
    );
  });

  describe("with elements that have CDATA contents", () => {
    it("should not entitify the contents of <style>", () => {
      expect(
        stringify({
          type: "tag",
          tag: "style",
          attributes: {},
          children: [{ type: "text", value: '@charset "Amiga-1252";' }]
        }),
        "to equal",
        '<style>@charset "Amiga-1252";</style>'
      );
    });

    it("should not entitify the contents of <script>", () => {
      expect(
        stringify({
          type: "tag",
          tag: "script",
          attributes: {},
          children: [{ type: "text", value: "a = b && c;" }]
        }),
        "to equal",
        "<script>a = b && c;</script>"
      );
    });
  });
});
