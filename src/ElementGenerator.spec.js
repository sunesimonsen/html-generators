const expect = require("unexpected")
  .clone()
  .use(require("unexpected-snapshot"))
  .use(require("magicpen-prism"));

const stringify = require("./stringify");
const chanceCache = require("chance-generators/lib/chanceCache");

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
    chanceCache.clear();
    generator = new ElementGenerator({ tag: "code" });
  });

  it("generates elements of the given type", () => {
    expect(generator.take(3), "to equal snapshot", [
      {
        type: "tag",
        tag: "code",
        attributes: { hidden: null },
        children: [
          {
            type: "tag",
            tag: "output",
            attributes: { contenteditable: "true", dir: "auto" },
            children: [
              {
                type: "tag",
                tag: "q",
                attributes: {
                  dir: "rtl",
                  contenteditable: "",
                  hidden: null,
                  tabindex: "525"
                },
                children: []
              },
              { type: "text", value: "Mabuj do lisib." },
              {
                type: "tag",
                tag: "sub",
                attributes: {
                  hidden: null,
                  draggable: "true",
                  contenteditable: "false",
                  tabindex: "966"
                },
                children: [
                  { type: "text", value: "Va ebik vo pe gazziw onokan." },
                  { type: "text", value: "Uhlog sezsi ju." }
                ]
              }
            ]
          }
        ]
      },
      {
        type: "tag",
        tag: "code",
        attributes: { style: "word-break: break-all;" },
        children: [
          {
            type: "text",
            value: "Cujduvtih le votevned esohogbi dadeip riide."
          },
          { type: "text", value: "Zegcih iwahoil giimeduj deg bueh." },
          {
            type: "tag",
            tag: "cite",
            attributes: {
              style:
                "justify-content: space-around; border-right-color: coral; box-shadow: none;"
            },
            children: [{ type: "text", value: "Rok ugher jahben." }]
          },
          {
            type: "tag",
            tag: "select",
            attributes: {
              autofocus: null,
              hidden: null,
              contenteditable: "",
              multiple: null,
              dir: "rtl",
              size: "489",
              required: null,
              tabindex: "553",
              disabled: null
            },
            children: [
              {
                type: "tag",
                tag: "option",
                attributes: { disabled: null },
                children: [{ type: "text", value: "Temdov pa envewi logumem." }]
              },
              {
                type: "tag",
                tag: "template",
                attributes: {
                  tabindex: "-209",
                  contenteditable: "true",
                  draggable: "false",
                  hidden: null
                },
                children: [
                  {
                    type: "tag",
                    tag: "cite",
                    attributes: {
                      tabindex: "-997",
                      draggable: "false",
                      dir: "auto",
                      hidden: null
                    },
                    children: [
                      {
                        type: "tag",
                        tag: "cite",
                        attributes: {
                          hidden: null,
                          tabindex: "899",
                          contenteditable: "true",
                          dir: "rtl",
                          style: "border-block-end-style: outset; orphans: 95%;"
                        },
                        children: []
                      },
                      { type: "text", value: "Ri tugohi ze." },
                      {
                        type: "tag",
                        tag: "script",
                        attributes: {
                          integrity: "sR[[DK",
                          src: "G6zLVQXK@or1KuQb4Vd",
                          crossorigin: "use-credentials",
                          async: null,
                          draggable: "false",
                          hidden: null,
                          nomodule: null
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "td",
                            attributes: {
                              tabindex: "-191",
                              colspan: "268",
                              rowspan: "485",
                              hidden: null,
                              contenteditable: "true",
                              draggable: "false"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "h5",
                            attributes: {
                              hidden: null,
                              tabindex: "-615",
                              dir: "auto",
                              contenteditable: "true",
                              style:
                                "inset-block-start: 754.7462in; place-content: safe center safe left;"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "video",
                            attributes: { dir: "auto" },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "meta",
                            children: [],
                            attributes: { tabindex: "914" }
                          },
                          {
                            type: "tag",
                            tag: "h4",
                            attributes: {},
                            children: []
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "svg",
                        attributes: {
                          contenteditable: "false",
                          draggable: "true",
                          tabindex: "887",
                          style:
                            "margin-bottom: -123.0518px; outline-offset: -928.1155in;"
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "video",
                            attributes: {
                              preload: "none",
                              contenteditable: "true",
                              dir: "rtl",
                              style: "inset-inline: auto; scale: none;"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "h6",
                            attributes: {
                              hidden: null,
                              dir: "ltr",
                              contenteditable: "true",
                              tabindex: "-541"
                            },
                            children: []
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "small",
                        attributes: {
                          contenteditable: "",
                          hidden: null,
                          draggable: "true"
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "keygen",
                            children: [],
                            attributes: { contenteditable: "" }
                          },
                          { type: "text", value: "Wocafig dof." }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                type: "tag",
                tag: "optgroup",
                attributes: { disabled: null, dir: "rtl", draggable: "false" },
                children: [
                  {
                    type: "tag",
                    tag: "template",
                    attributes: {
                      draggable: "true",
                      style:
                        "border-bottom-color: rgb(-6916220410396672 / -8178489324732416); border-block-end: thick; width: fit-content; border-inline-style: solid;"
                    },
                    children: []
                  },
                  {
                    type: "tag",
                    tag: "script",
                    attributes: { integrity: "JzmIGWDdT(" },
                    children: []
                  },
                  {
                    type: "tag",
                    tag: "option",
                    attributes: { draggable: "true" },
                    children: [
                      { type: "text", value: "Rorta obututven nuawo upuge de." }
                    ]
                  }
                ]
              },
              {
                type: "tag",
                tag: "option",
                attributes: {
                  style:
                    "mask-position: right -229.2068vmax bottom -318.7509vmax;"
                },
                children: [{ type: "text", value: "Votu wiuhimo susde." }]
              }
            ]
          }
        ]
      },
      {
        type: "tag",
        tag: "code",
        attributes: { hidden: null },
        children: [
          {
            type: "tag",
            tag: "noscript",
            attributes: { hidden: null, tabindex: "-378" },
            children: [
              {
                type: "tag",
                tag: "input",
                children: [],
                attributes: {
                  contenteditable: "true",
                  type: "checkbox",
                  required: null,
                  multiple: null,
                  inputmode: "numeric",
                  style: "mask-clip: stroke-box; outline-offset: -574.5442vh;"
                }
              },
              {
                type: "text",
                value: "Adapucrak rerudzup ecwemu famhuluj huwsojwa lirhu mi."
              },
              { type: "text", value: "Ni dod zorhukne." }
            ]
          },
          { type: "text", value: "Hizbuzbew ozu." }
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
          attributes: { hidden: null },
          children: [
            {
              type: "tag",
              tag: "figcaption",
              attributes: { draggable: "true", contenteditable: "true" },
              children: [
                { type: "text", value: "Ewegute bibro." },
                {
                  type: "tag",
                  tag: "abbr",
                  attributes: { contenteditable: "" },
                  children: [
                    {
                      type: "text",
                      value: "Ficow ajedehir pub lef kimri uv okonokan."
                    },
                    { type: "text", value: "Uhlog sezsi ju." },
                    {
                      type: "tag",
                      tag: "cite",
                      attributes: { style: "word-break: break-all;" },
                      children: [
                        {
                          type: "text",
                          value: "Cujduvtih le votevned esohogbi dadeip riide."
                        },
                        {
                          type: "text",
                          value: "Zegcih iwahoil giimeduj deg bueh."
                        },
                        {
                          type: "tag",
                          tag: "cite",
                          attributes: {
                            style:
                              "justify-content: space-around; border-right-color: coral; box-shadow: none;"
                          },
                          children: [
                            { type: "text", value: "Rok ugher jahben." }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "select",
                          attributes: {
                            autofocus: null,
                            hidden: null,
                            contenteditable: "",
                            multiple: null,
                            dir: "rtl",
                            size: "489",
                            required: null,
                            tabindex: "553",
                            disabled: null
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "option",
                              attributes: { disabled: null },
                              children: [
                                {
                                  type: "text",
                                  value: "Temdov pa envewi logumem."
                                }
                              ]
                            },
                            {
                              type: "tag",
                              tag: "template",
                              attributes: {
                                tabindex: "-209",
                                contenteditable: "true",
                                draggable: "false",
                                hidden: null
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "optgroup",
                              attributes: {
                                hidden: null,
                                style:
                                  "will-change: contents; isolation: auto; border-top: medium outset Menu; border-inline-end-width: thin; break-before: avoid-page;"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "option",
                              attributes: {
                                disabled: null,
                                selected: null,
                                tabindex: "851",
                                hidden: null,
                                dir: "auto",
                                style:
                                  "text-emphasis-position: left over; flex-flow: wrap; white-space: normal; caption-side: top;"
                              },
                              children: [
                                {
                                  type: "text",
                                  value: "Nozgo pe los vendijjeg ukiipi."
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "wbr",
                      children: [],
                      attributes: {
                        dir: "rtl",
                        draggable: "false",
                        tabindex: "-230"
                      }
                    },
                    {
                      type: "tag",
                      tag: "area",
                      children: [],
                      attributes: {
                        hidden: null,
                        style:
                          "min-width: -645.7787vw; transform-origin: bottom; break-inside: avoid-region; text-decoration-color: hsl(8161816697896960 , 93% , 33% , 950529064697856);"
                      }
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
          attributes: {
            draggable: "true",
            hidden: null,
            tabindex: "-385",
            dir: "auto"
          },
          children: [
            { type: "text", value: "Erucaf ujape zuforre mug ocipogoc." }
          ]
        },
        {
          type: "tag",
          tag: "figure",
          attributes: { dir: "rtl", hidden: null, contenteditable: "" },
          children: [
            {
              type: "tag",
              tag: "math",
              attributes: { display: "inline", hidden: null },
              children: [
                {
                  type: "tag",
                  tag: "audio",
                  attributes: {
                    tabindex: "-842",
                    dir: "ltr",
                    contenteditable: "true",
                    draggable: "true"
                  },
                  children: [
                    { type: "text", value: "Mek cebuc wocafig." },
                    {
                      type: "tag",
                      tag: "article",
                      attributes: { draggable: "true" },
                      children: [
                        {
                          type: "tag",
                          tag: "embed",
                          children: [],
                          attributes: {
                            src: "FdsPAl4ibzigd",
                            draggable: "true",
                            tabindex: "-856",
                            title: "Jbh4K7JzmIGWDd"
                          }
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "title",
                      attributes: {
                        tabindex: "934",
                        contenteditable: "true",
                        hidden: null
                      },
                      children: [
                        {
                          type: "text",
                          value: "Tatubsow venditawo upuge de do."
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "label",
                      attributes: {
                        dir: "auto",
                        contenteditable: "false",
                        tabindex: "-340"
                      },
                      children: [
                        {
                          type: "text",
                          value: "Tubokuhi zi usilesev egizosde pitkedeb iva."
                        }
                      ]
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "h4",
                  attributes: { dir: "auto" },
                  children: [
                    {
                      type: "tag",
                      tag: "object",
                      attributes: {
                        tabindex: "113",
                        dir: "auto",
                        hidden: null
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "noscript",
                          attributes: {
                            hidden: null,
                            tabindex: "84",
                            dir: "auto"
                          },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "select",
                          attributes: {
                            required: null,
                            size: "374",
                            autofocus: null
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "template",
                              attributes: { hidden: null, dir: "rtl" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "option",
                              attributes: {
                                tabindex: "-253",
                                draggable: "true",
                                dir: "rtl"
                              },
                              children: [
                                {
                                  type: "text",
                                  value:
                                    "Dup vigmelcu nubuz kuru cemucite nuwijwaw."
                                }
                              ]
                            },
                            {
                              type: "tag",
                              tag: "template",
                              attributes: { tabindex: "57" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "template",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "template",
                              attributes: { contenteditable: "" },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "iframe",
                          attributes: {
                            draggable: "false",
                            dir: "ltr",
                            title: "ZcNuwE8SYumj^f8*(E1R"
                          },
                          children: [{ type: "text", value: "Emabizu udezek." }]
                        },
                        {
                          type: "text",
                          value: "Sucbija er usurisosu hide seirtaj bo notkut."
                        },
                        {
                          type: "text",
                          value: "Dutsabi torgudbuj temdu riawjo wutnu."
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "b",
                      attributes: {
                        draggable: "true",
                        hidden: null,
                        contenteditable: "false",
                        tabindex: "493"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "datalist",
                          attributes: {
                            contenteditable: "true",
                            style:
                              "border-bottom-right-radius: 15%; font-optical-sizing: auto; padding-block-end: 18%;"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "option",
                              attributes: { draggable: "true", disabled: null },
                              children: [
                                { type: "text", value: "Feh badil ijpe." }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    { type: "text", value: "Do vamfuj ju ziuflul zem zabha." },
                    {
                      type: "tag",
                      tag: "i",
                      attributes: {
                        hidden: null,
                        tabindex: "30",
                        draggable: "false"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "datalist",
                          attributes: {
                            dir: "auto",
                            contenteditable: "",
                            hidden: null,
                            style:
                              "justify-items: normal; border-start-end-radius: 34%;"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "iframe",
                              attributes: {
                                draggable: "false",
                                contenteditable: "false",
                                title: "PjCuyA%VSQsA"
                              },
                              children: [
                                {
                                  type: "text",
                                  value: "Bafepa defawcam wu ikuwuaz fo."
                                }
                              ]
                            },
                            {
                              type: "tag",
                              tag: "option",
                              attributes: {
                                disabled: null,
                                selected: null,
                                hidden: null,
                                draggable: "true"
                              },
                              children: [
                                { type: "text", value: "Kok wem toh." }
                              ]
                            },
                            {
                              type: "tag",
                              tag: "option",
                              attributes: {},
                              children: [
                                { type: "text", value: "Kicejfi ufe." }
                              ]
                            }
                          ]
                        },
                        {
                          type: "text",
                          value: "Habodnin lawesu osofa ossav etgodfat tiw."
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              type: "tag",
              tag: "img",
              children: [],
              attributes: {
                draggable: "true",
                ismap: null,
                tabindex: "463",
                src: "3GLQrA%"
              }
            },
            {
              type: "tag",
              tag: "figcaption",
              attributes: { draggable: "false", contenteditable: "" },
              children: [
                {
                  type: "tag",
                  tag: "s",
                  attributes: {
                    tabindex: "-779",
                    contenteditable: "",
                    draggable: "true"
                  },
                  children: [
                    {
                      type: "tag",
                      tag: "mark",
                      attributes: {},
                      children: [
                        {
                          type: "text",
                          value: "Son hijguw hikju inpa bosuc wowwo."
                        },
                        {
                          type: "tag",
                          tag: "mark",
                          attributes: {},
                          children: [
                            {
                              type: "tag",
                              tag: "audio",
                              attributes: {
                                preload: "",
                                tabindex: "165",
                                hidden: null,
                                dir: "ltr",
                                contenteditable: ""
                              },
                              children: []
                            },
                            { type: "text", value: "Pesejze abo miewu." },
                            { type: "text", value: "Ponig id si bu." }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "button",
                          attributes: {
                            draggable: "false",
                            autofocus: null,
                            type: "reset",
                            style:
                              "translate: none; border-image: fill 39541817737216 / -3423871831113728 stretch; font-language-override: 'awgi'; border-inline-start: thick #96635c; background-origin: border-box;"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "output",
                              attributes: {
                                style:
                                  "shape-margin: 892.231vh; flex-grow: -4101845127528448;"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "mark",
                              attributes: {
                                hidden: null,
                                draggable: "false",
                                dir: "ltr",
                                tabindex: "716"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "meter",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "canvas",
                              attributes: { dir: "ltr" },
                              children: []
                            }
                          ]
                        },
                        { type: "text", value: "Kogup wahus." },
                        {
                          type: "tag",
                          tag: "small",
                          attributes: {
                            tabindex: "668",
                            hidden: null,
                            draggable: "true"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "b",
                              attributes: {},
                              children: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "i",
                      attributes: {
                        dir: "auto",
                        hidden: null,
                        contenteditable: "true"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "time",
                          attributes: { dir: "auto" },
                          children: [
                            {
                              type: "text",
                              value: "Rekjez zadsiznof bizi meftuud."
                            },
                            {
                              type: "tag",
                              tag: "progress",
                              attributes: {
                                tabindex: "-823",
                                contenteditable: "true",
                                style:
                                  "margin-block-start: 27%; background-position: center bottom; hyphens: auto; padding-right: -786.8426ch; border-color: rgba(7206095290368000 / 6735404778651648);"
                              },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "i",
                          attributes: { dir: "ltr", draggable: "false" },
                          children: [
                            {
                              type: "tag",
                              tag: "input",
                              children: [],
                              attributes: {
                                readonly: null,
                                hidden: null,
                                contenteditable: "true",
                                tabindex: "-664",
                                inputmode: "url",
                                draggable: "true",
                                spellcheck: "true",
                                multiple: null,
                                capture: null,
                                type: "number"
                              }
                            },
                            {
                              type: "tag",
                              tag: "kbd",
                              attributes: { contenteditable: "true" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "canvas",
                              attributes: {
                                tabindex: "154",
                                contenteditable: "true"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "cite",
                              attributes: {},
                              children: []
                            },
                            { type: "text", value: "Posilcu boz sa duudo." }
                          ]
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "meter",
                      attributes: {
                        hidden: null,
                        dir: "rtl",
                        tabindex: "873",
                        contenteditable: "false"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "select",
                          attributes: { disabled: null, required: null },
                          children: [
                            {
                              type: "tag",
                              tag: "script",
                              attributes: {
                                async: null,
                                nomodule: null,
                                draggable: "false",
                                contenteditable: "true",
                                defer: null,
                                tabindex: "796"
                              },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "sup",
                          attributes: {},
                          children: [
                            {
                              type: "tag",
                              tag: "sub",
                              attributes: {
                                draggable: "true",
                                dir: "ltr",
                                contenteditable: "false"
                              },
                              children: []
                            },
                            { type: "text", value: "Manam vespuk hibiz if." }
                          ]
                        },
                        {
                          type: "text",
                          value: "Otabeb mapoigu dijro baleeh sabucic."
                        },
                        {
                          type: "tag",
                          tag: "q",
                          attributes: {
                            dir: "auto",
                            style:
                              "transition-property: diuvoni; text-emphasis-style: open dot;"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "sup",
                              attributes: {
                                dir: "ltr",
                                draggable: "true",
                                hidden: null,
                                style:
                                  "border-right-color: rgb(96% / 83%); direction: rtl;"
                              },
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
                  tag: "br",
                  children: [],
                  attributes: {
                    tabindex: "995",
                    contenteditable: "",
                    draggable: "true"
                  }
                },
                {
                  type: "tag",
                  tag: "table",
                  attributes: { hidden: null, dir: "auto" },
                  children: [
                    {
                      type: "tag",
                      tag: "colgroup",
                      attributes: {
                        hidden: null,
                        contenteditable: "",
                        draggable: "true",
                        span: "878"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "col",
                          children: [],
                          attributes: { span: "810", contenteditable: "true" }
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "template",
                      attributes: {
                        hidden: null,
                        contenteditable: "true",
                        style: "padding-block: 4%; hyphens: manual;"
                      },
                      children: []
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "main",
                  attributes: {
                    dir: "auto",
                    contenteditable: "false",
                    draggable: "true",
                    tabindex: "-883"
                  },
                  children: [
                    {
                      type: "tag",
                      tag: "template",
                      attributes: { tabindex: "869", dir: "ltr" },
                      children: []
                    },
                    {
                      type: "tag",
                      tag: "iframe",
                      attributes: {
                        contenteditable: "false",
                        hidden: null,
                        dir: "auto",
                        draggable: "true",
                        src: "3ol$$)#Ic$9aj",
                        title: "3^la8P9"
                      },
                      children: [{ type: "text", value: "Co rod." }]
                    },
                    {
                      type: "tag",
                      tag: "meter",
                      attributes: {
                        dir: "rtl",
                        style:
                          "scroll-padding-block: -786.0388in; right: 82.5332pc; translate: -215.6976Q 864.0563vh -794.9806vh;"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "small",
                          attributes: {
                            contenteditable: "false",
                            tabindex: "969",
                            draggable: "false"
                          },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "em",
                          attributes: { hidden: null, dir: "auto" },
                          children: [
                            {
                              type: "tag",
                              tag: "small",
                              attributes: {
                                contenteditable: "true",
                                dir: "ltr"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "a",
                              attributes: {},
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "small",
                          attributes: {
                            hidden: null,
                            dir: "auto",
                            contenteditable: "false",
                            tabindex: "-655"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "button",
                              attributes: {
                                type: "submit",
                                draggable: "true",
                                disabled: null,
                                style:
                                  "object-position: right -53.5802px bottom -628.949ex; table-layout: auto; scrollbar-width: auto; scale: none; scroll-padding-top: 1%;"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "select",
                              attributes: {
                                dir: "rtl",
                                draggable: "true",
                                contenteditable: "",
                                disabled: null,
                                autofocus: null,
                                tabindex: "125",
                                required: null
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "ins",
                              attributes: {
                                draggable: "true",
                                contenteditable: "true"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "video",
                              attributes: { hidden: null },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "del",
                              attributes: { tabindex: "-149" },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "output",
                          attributes: {
                            dir: "auto",
                            tabindex: "-657",
                            hidden: null
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "time",
                              attributes: {
                                style:
                                  "grid-template-areas: 'kis'; align-self: unsafe center; inset-block-start: 8%;"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "label",
                              attributes: { contenteditable: "" },
                              children: []
                            },
                            {
                              type: "text",
                              value: "Fugor gafdupwu opa joworo."
                            },
                            {
                              type: "text",
                              value: "Tucorin nipranas hod tehnes ako fi."
                            },
                            {
                              type: "tag",
                              tag: "object",
                              attributes: {},
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "audio",
                          attributes: { dir: "auto" },
                          children: [
                            {
                              type: "tag",
                              tag: "bdi",
                              attributes: {
                                draggable: "true",
                                contenteditable: "false",
                                tabindex: "425",
                                dir: "rtl"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "s",
                              attributes: {
                                tabindex: "579",
                                draggable: "true",
                                contenteditable: ""
                              },
                              children: []
                            },
                            {
                              type: "text",
                              value: "Sutve jujlotu fomunte pakcik."
                            },
                            { type: "text", value: "Min lonfo ukep." },
                            { type: "text", value: "Zid higic." }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "math",
                  attributes: {
                    dir: "ltr",
                    overflow: "elide",
                    draggable: "true"
                  },
                  children: [
                    {
                      type: "tag",
                      tag: "samp",
                      attributes: { contenteditable: "true" },
                      children: [
                        {
                          type: "tag",
                          tag: "map",
                          attributes: {
                            draggable: "true",
                            tabindex: "112",
                            hidden: null,
                            dir: "ltr"
                          },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "samp",
                          attributes: {},
                          children: [{ type: "text", value: "Hioc pi." }]
                        }
                      ]
                    },
                    { type: "text", value: "Muurbu uvi." },
                    {
                      type: "tag",
                      tag: "h2",
                      attributes: {
                        dir: "auto",
                        draggable: "false",
                        style: "animation-fill-mode: none;"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "u",
                          attributes: { hidden: null },
                          children: []
                        }
                      ]
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
          attributes: {
            contenteditable: "true",
            tabindex: "-869",
            draggable: "true",
            dir: "ltr"
          },
          children: [
            {
              type: "tag",
              tag: "figcaption",
              attributes: {
                tabindex: "-931",
                hidden: null,
                dir: "auto",
                draggable: "false"
              },
              children: [
                {
                  type: "tag",
                  tag: "p",
                  attributes: {
                    hidden: null,
                    style:
                      "mask-composite: add; column-rule-color: ThreeDShadow; font-size-adjust: 6678900365066240; position: sticky; border-block-width: medium;"
                  },
                  children: [
                    {
                      type: "text",
                      value: "Zevit iteetde behlok lemse neci vozim ezipub."
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "picture",
                  attributes: {
                    dir: "rtl",
                    contenteditable: "true",
                    tabindex: "-534",
                    hidden: null
                  },
                  children: [
                    {
                      type: "tag",
                      tag: "template",
                      attributes: {
                        hidden: null,
                        draggable: "true",
                        tabindex: "195",
                        dir: "ltr"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "svg",
                          attributes: {
                            style:
                              "grid-template: none / none; border-inline: dotted medium; column-fill: balance-all; scroll-margin-inline-end: 64.5204px; margin-inline: -820.7474Q;"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "aside",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "header",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "article",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "button",
                              attributes: { type: "button" },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "link",
                          children: [],
                          attributes: {
                            href: "MUi(aSV8",
                            integrity: "q6pVTmEA!^%4APrs5w"
                          }
                        },
                        {
                          type: "tag",
                          tag: "img",
                          children: [],
                          attributes: {
                            ismap: null,
                            hidden: null,
                            tabindex: "-424",
                            decoding: "sync",
                            crossorigin: "",
                            contenteditable: "",
                            draggable: "false",
                            src: "IqNhnbxVrSpOVrtCUR"
                          }
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "script",
                      attributes: { src: "SZYDGF" },
                      children: [
                        {
                          type: "text",
                          value: "Igoja sakle tapu ace junvig ka."
                        },
                        {
                          type: "tag",
                          tag: "meta",
                          children: [],
                          attributes: {
                            contenteditable: "true",
                            hidden: null,
                            dir: "auto"
                          }
                        },
                        {
                          type: "tag",
                          tag: "svg",
                          attributes: { draggable: "true", dir: "auto" },
                          children: [
                            {
                              type: "tag",
                              tag: "slot",
                              attributes: { contenteditable: "true" },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "object",
                          attributes: { draggable: "false", tabindex: "796" },
                          children: [
                            { type: "text", value: "Wus erdog." },
                            {
                              type: "tag",
                              tag: "h6",
                              attributes: {},
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
                  tag: "bdi",
                  attributes: {
                    contenteditable: "",
                    draggable: "false",
                    hidden: null,
                    dir: "ltr",
                    style: "color-adjust: economy;"
                  },
                  children: [
                    {
                      type: "tag",
                      tag: "img",
                      children: [],
                      attributes: { src: "rOLw9Du" }
                    }
                  ]
                }
              ]
            },
            {
              type: "tag",
              tag: "h4",
              attributes: {
                tabindex: "-575",
                draggable: "false",
                contenteditable: "false"
              },
              children: [
                {
                  type: "tag",
                  tag: "input",
                  children: [],
                  attributes: { disabled: null, type: "tel" }
                }
              ]
            },
            { type: "text", value: "Rurfofac ba hez tutfivon." }
          ]
        },
        {
          type: "tag",
          tag: "figure",
          attributes: { contenteditable: "", draggable: "true" },
          children: [
            {
              type: "tag",
              tag: "button",
              attributes: {
                contenteditable: "",
                hidden: null,
                disabled: null,
                dir: "ltr",
                autofocus: null,
                tabindex: "641",
                draggable: "true",
                type: "submit"
              },
              children: [
                {
                  type: "tag",
                  tag: "canvas",
                  attributes: { dir: "ltr", contenteditable: "true" },
                  children: [
                    {
                      type: "tag",
                      tag: "datalist",
                      attributes: {
                        style: "border-bottom-color: currentcolor;"
                      },
                      children: [{ type: "text", value: "Comugute to modiki." }]
                    }
                  ]
                },
                { type: "text", value: "Li efloz ma boso gigebhoz." },
                { type: "tag", tag: "code", attributes: {}, children: [] }
              ]
            },
            { type: "text", value: "La til dadakes ajmul owadop vuk ju." },
            {
              type: "tag",
              tag: "address",
              attributes: {
                contenteditable: "false",
                dir: "rtl",
                draggable: "true",
                hidden: null
              },
              children: [
                {
                  type: "tag",
                  tag: "pre",
                  attributes: {},
                  children: [
                    { type: "text", value: "Co cucbapoj." },
                    {
                      type: "tag",
                      tag: "wbr",
                      children: [],
                      attributes: { draggable: "true" }
                    },
                    {
                      type: "tag",
                      tag: "s",
                      attributes: { tabindex: "943" },
                      children: [{ type: "text", value: "Vus ma pu zotuve." }]
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "textarea",
                  attributes: {
                    style: "mask-origin: fill-box; scrollbar-color: auto;"
                  },
                  children: [
                    {
                      type: "text",
                      value: "Bukod ud supup dadu demi tajew giv."
                    }
                  ]
                }
              ]
            },
            { type: "text", value: "Jotev omtonu." },
            {
              type: "tag",
              tag: "figcaption",
              attributes: {
                hidden: null,
                draggable: "false",
                dir: "ltr",
                tabindex: "-320"
              },
              children: [
                {
                  type: "tag",
                  tag: "main",
                  attributes: { draggable: "true", contenteditable: "true" },
                  children: [
                    {
                      type: "tag",
                      tag: "blockquote",
                      attributes: {},
                      children: []
                    },
                    {
                      type: "text",
                      value: "Isifi agwuz gi vehzottar amrav busgozer fuh."
                    },
                    {
                      type: "tag",
                      tag: "math",
                      attributes: {
                        overflow: "truncate",
                        hidden: null,
                        tabindex: "781"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "iframe",
                          attributes: { title: "" },
                          children: [
                            {
                              type: "text",
                              value: "Mipip dirocol aneahta ve ureamila wi."
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "a",
                          attributes: { contenteditable: "true" },
                          children: []
                        },
                        {
                          type: "text",
                          value: "Zusjofto garuv zisefluj wa seroho."
                        }
                      ]
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "canvas",
                  attributes: {
                    contenteditable: "false",
                    dir: "rtl",
                    draggable: "false",
                    tabindex: "-186"
                  },
                  children: [
                    {
                      type: "tag",
                      tag: "ins",
                      attributes: {
                        contenteditable: "false",
                        tabindex: "-780",
                        draggable: "true"
                      },
                      children: []
                    },
                    { type: "text", value: "Fak vizcece." }
                  ]
                },
                { type: "text", value: "He hugzies." },
                {
                  type: "tag",
                  tag: "b",
                  attributes: { contenteditable: "" },
                  children: [
                    { type: "text", value: "Borudiwe mog." },
                    {
                      type: "tag",
                      tag: "textarea",
                      attributes: {
                        readonly: null,
                        cols: "609",
                        rows: "349",
                        required: null,
                        hidden: null,
                        dir: "ltr",
                        autofocus: null,
                        maxlength: "22",
                        minlength: "720"
                      },
                      children: [{ type: "text", value: "Rimdevwi wim." }]
                    },
                    { type: "text", value: "Nu favuf nunorec dujubale idkos." },
                    {
                      type: "tag",
                      tag: "embed",
                      children: [],
                      attributes: {
                        hidden: null,
                        contenteditable: "false",
                        tabindex: "-871",
                        src: "HP[35",
                        title: "",
                        style:
                          "counter-set: none; caption-side: block-end; font-feature-settings: normal;"
                      }
                    },
                    {
                      type: "tag",
                      tag: "iframe",
                      attributes: {
                        contenteditable: "true",
                        dir: "ltr",
                        draggable: "false",
                        tabindex: "-965",
                        title: "MgvA"
                      },
                      children: [
                        { type: "text", value: "Apgu palrodtu igapan." }
                      ]
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "datalist",
                  attributes: { contenteditable: "" },
                  children: [
                    {
                      type: "tag",
                      tag: "option",
                      attributes: {
                        selected: null,
                        contenteditable: "true",
                        tabindex: "-968",
                        hidden: null
                      },
                      children: [
                        {
                          type: "text",
                          value: "Woh izi daram awe wu eh rarkulapi."
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "option",
                      attributes: { draggable: "false", dir: "ltr" },
                      children: [{ type: "text", value: "Domalol tok." }]
                    },
                    {
                      type: "tag",
                      tag: "option",
                      attributes: {
                        tabindex: "254",
                        draggable: "true",
                        hidden: null,
                        selected: null,
                        style:
                          "outline-width: -349.792in; overflow-x: visible; background-repeat: repeat; border-inline: inset -441.4478cm gainsboro;"
                      },
                      children: [
                        {
                          type: "text",
                          value: "Keca moowuzu vutuvan li hura utpi mo."
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "keygen",
                      children: [],
                      attributes: {}
                    },
                    {
                      type: "tag",
                      tag: "option",
                      attributes: {
                        dir: "auto",
                        contenteditable: "false",
                        tabindex: "805",
                        draggable: "true",
                        disabled: null,
                        selected: null
                      },
                      children: [
                        {
                          type: "text",
                          value: "Kotjovde rajebi juceg zib ivu."
                        }
                      ]
                    }
                  ]
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
