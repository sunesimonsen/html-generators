const expect = require("unexpected")
  .clone()
  .use(require("unexpected-snapshot"));

const { elementsByTag } = require("./elements");

const ElementGenerator = require("./ElementGenerator.js");

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
            attributes: {},
            children: [
              { type: "text", value: "Bagohrak ro celel taj sibsof buunu." },
              {
                type: "tag",
                tag: "script",
                attributes: {
                  contenteditable: "",
                  src: "^CtnX3x",
                  draggable: "false"
                },
                children: []
              }
            ]
          },
          {
            type: "tag",
            tag: "button",
            attributes: {
              dir: "auto",
              contenteditable: "false",
              autofocus: "",
              tabindex: "-598"
            },
            children: [
              { type: "text", value: "Log sezsi ju bu mahbu wot cujduvtih." },
              { type: "text", value: "Ko wip." },
              { type: "text", value: "Nedwusres bi dadeip." }
            ]
          },
          { type: "text", value: "Pow si gewse iwahoil." },
          { type: "text", value: "Mu kudlewje bueh pi hoje fef." },
          {
            type: "tag",
            tag: "i",
            attributes: { hidden: "", dir: "ltr" },
            children: [
              { type: "text", value: "Jopibje hodpizhir leg." },
              {
                type: "tag",
                tag: "script",
                attributes: {
                  tabindex: "-150",
                  src: "nZd@RyYqb0L7q",
                  async: "",
                  defer: "",
                  nomodule: "",
                  draggable: "false",
                  integrity: "m*ZDCM",
                  hidden: ""
                },
                children: [
                  {
                    type: "tag",
                    tag: "object",
                    attributes: { data: "#ZtqWm8[PMNtr" },
                    children: []
                  },
                  {
                    type: "tag",
                    tag: "h5",
                    attributes: {
                      draggable: "true",
                      hidden: "",
                      tabindex: "-279",
                      dir: "auto"
                    },
                    children: [
                      {
                        type: "tag",
                        tag: "svg",
                        attributes: {
                          tabindex: "-899",
                          contenteditable: "true",
                          draggable: "false"
                        },
                        children: []
                      },
                      {
                        type: "tag",
                        tag: "small",
                        attributes: {},
                        children: [
                          {
                            type: "tag",
                            tag: "a",
                            attributes: {},
                            children: []
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              { type: "text", value: "Nozgo pe los vendijjeg ukiipi." }
            ]
          }
        ]
      },
      {
        type: "tag",
        tag: "code",
        attributes: { dir: "rtl", draggable: "false", tabindex: "-195" },
        children: [
          { type: "text", value: "Ovzaohi suzceh egpa muvona." },
          { type: "text", value: "Vuj pe." },
          {
            type: "tag",
            tag: "area",
            children: [],
            attributes: { tabindex: "-849" }
          },
          {
            type: "tag",
            tag: "u",
            attributes: { hidden: "", dir: "auto", tabindex: "-420" },
            children: []
          }
        ]
      },
      {
        type: "tag",
        tag: "code",
        attributes: {
          hidden: "",
          tabindex: "-502",
          contenteditable: "false",
          dir: "ltr"
        },
        children: [
          {
            type: "tag",
            tag: "input",
            children: [],
            attributes: {
              disabled: "",
              dir: "ltr",
              autofocus: "",
              capture: "",
              checked: ""
            }
          },
          { type: "text", value: "Ah demzef navgiro." },
          {
            type: "tag",
            tag: "i",
            attributes: {},
            children: [
              {
                type: "tag",
                tag: "video",
                attributes: {
                  draggable: "true",
                  dir: "ltr",
                  tabindex: "-184",
                  hidden: ""
                },
                children: []
              },
              {
                type: "tag",
                tag: "embed",
                children: [],
                attributes: { tabindex: "-156", hidden: "" }
              }
            ]
          }
        ]
      }
    ]);
  });
});
