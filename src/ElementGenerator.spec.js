const expect = require("unexpected")
  .clone()
  .use(require("unexpected-snapshot"))
  .use(require("magicpen-prism"));

const stringify = require("./stringify");

const ElementGenerator = require("./ElementGenerator.js");

function containsElement(html, elementName) {
  if (html.type === "tag") {
    return (
      html.tag === elementName ||
      html.children.some(child => containsElement(child, elementName))
    );
  } else {
    return false;
  }
}

expect.addAssertion(
  "<object> [not] to contain element <string>",
  (expect, html, elementName) => {
    expect.subjectOutput = output => output.code(stringify(html), "html");
    expect.argsOutput[0] = output =>
      output.code(
        stringify({
          type: "tag",
          tag: elementName,
          attributes: [],
          children: []
        }),
        "html"
      );
    expect(containsElement(html, elementName), "[not] to be true");
  }
);

describe("ElementGenerator", () => {
  let generator;

  beforeEach(() => {
    generator = new ElementGenerator({ tag: "code" });
  });

  it("generates elements of the given type", () => {
    expect(generator.take(3), "to equal snapshot", [
      {
        type: "tag",
        tag: "code",
        attributes: { hidden: "" },
        children: [
          {
            type: "tag",
            tag: "small",
            attributes: { hidden: "" },
            children: [
              { type: "text", value: "Gu jom be mabuj do lisib valbuunu." },
              {
                type: "tag",
                tag: "sub",
                attributes: { contenteditable: "" },
                children: []
              }
            ]
          },
          {
            type: "tag",
            tag: "button",
            attributes: { hidden: "", type: "button" },
            children: []
          },
          { type: "text", value: "Bawha kimri uv okonokan cuh." },
          {
            type: "text",
            value: "Jitluh jahfab zejaaf woscujduv neclekos junla esohogbi."
          },
          {
            type: "tag",
            tag: "i",
            attributes: { contenteditable: "" },
            children: [
              { type: "text", value: "Pow si gewse iwahoil." },
              {
                type: "tag",
                tag: "q",
                attributes: { contenteditable: "true" },
                children: [
                  {
                    type: "tag",
                    tag: "embed",
                    children: [],
                    attributes: { hidden: "", src: "8A@wamLNE", title: "itys" }
                  },
                  { type: "text", value: "Pi lahugwi febenpib." },
                  {
                    type: "tag",
                    tag: "embed",
                    children: [],
                    attributes: {
                      draggable: "false",
                      src: "YkNKH[OrRXf4B",
                      title: "7BIU["
                    }
                  },
                  { type: "text", value: "Dovki bun har hepgu." }
                ]
              }
            ]
          }
        ]
      },
      {
        type: "tag",
        tag: "code",
        attributes: { dir: "rtl" },
        children: [
          {
            type: "tag",
            tag: "br",
            children: [],
            attributes: { tabindex: "258" }
          },
          {
            type: "tag",
            tag: "select",
            attributes: { required: "" },
            children: [
              {
                type: "tag",
                tag: "script",
                attributes: { src: "%P" },
                children: [{ type: "text", value: "Wo eviipuod vonlavub ki." }]
              },
              {
                type: "tag",
                tag: "script",
                attributes: { tabindex: "995" },
                children: []
              },
              {
                type: "tag",
                tag: "script",
                attributes: { draggable: "true" },
                children: []
              }
            ]
          },
          { type: "text", value: "Towohram jeguze ipilip." }
        ]
      },
      {
        type: "tag",
        tag: "code",
        attributes: { hidden: "" },
        children: [
          { type: "text", value: "Zogu ohijoow ru." },
          {
            type: "tag",
            tag: "mark",
            attributes: { tabindex: "75" },
            children: [
              {
                type: "text",
                value: "Pa muvona to fejuhera lihakhup patofcok ivbedin."
              }
            ]
          }
        ]
      }
    ]);
  });

  describe("on a tag with required and ordered content", () => {
    beforeEach(() => {
      generator = new ElementGenerator({ tag: "figure" });
    });

    it("honors the required elements and the order", () => {
      expect(generator.take(5), "to equal snapshot", [
        {
          type: "tag",
          tag: "figure",
          attributes: { contenteditable: "" },
          children: [
            {
              type: "tag",
              tag: "video",
              attributes: { contenteditable: "false" },
              children: []
            },
            {
              type: "tag",
              tag: "nav",
              attributes: { contenteditable: "" },
              children: [
                {
                  type: "tag",
                  tag: "em",
                  attributes: { hidden: "" },
                  children: []
                }
              ]
            }
          ]
        },
        {
          type: "tag",
          tag: "figure",
          attributes: { tabindex: "-194" },
          children: [
            {
              type: "tag",
              tag: "br",
              children: [],
              attributes: { draggable: "false" }
            },
            {
              type: "tag",
              tag: "figcaption",
              attributes: { hidden: "" },
              children: []
            }
          ]
        },
        {
          type: "tag",
          tag: "figure",
          attributes: { draggable: "true" },
          children: [
            {
              type: "tag",
              tag: "figcaption",
              attributes: { contenteditable: "true" },
              children: []
            },
            { type: "text", value: "Waoho womtoce fobe." },
            { type: "text", value: "Da ura." },
            {
              type: "tag",
              tag: "hr",
              children: [],
              attributes: { contenteditable: "false" }
            }
          ]
        },
        {
          type: "tag",
          tag: "figure",
          attributes: { tabindex: "-346" },
          children: [
            {
              type: "tag",
              tag: "h6",
              attributes: { dir: "ltr" },
              children: []
            },
            {
              type: "tag",
              tag: "u",
              attributes: { draggable: "false" },
              children: [
                {
                  type: "tag",
                  tag: "button",
                  attributes: { tabindex: "941", type: "reset" },
                  children: []
                },
                { type: "text", value: "Ditawo upuge de do." },
                {
                  type: "tag",
                  tag: "u",
                  attributes: { contenteditable: "true" },
                  children: [
                    {
                      type: "tag",
                      tag: "s",
                      attributes: { tabindex: "-282" },
                      children: []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          type: "tag",
          tag: "figure",
          attributes: { hidden: "" },
          children: [
            {
              type: "tag",
              tag: "area",
              children: [],
              attributes: { dir: "rtl" }
            },
            {
              type: "tag",
              tag: "figcaption",
              attributes: { hidden: "" },
              children: [
                {
                  type: "tag",
                  tag: "wbr",
                  children: [],
                  attributes: { contenteditable: "true" }
                }
              ]
            }
          ]
        }
      ]);
    });
  });

  describe("with excludedDescendants", function() {
    beforeEach(() => {
      generator = new ElementGenerator({
        excludedDescendants: new Set(["script"])
      });
    });

    it("does not generate that element", function() {
      for (const html of generator.take(100)) {
        expect(html, "not to contain element", "script");
      }
    });
  });
});
