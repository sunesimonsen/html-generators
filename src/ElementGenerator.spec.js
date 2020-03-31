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
                "margin-block-end: 48%; border-style: groove; border-bottom-right-radius: -324.7697ex;"
            },
            children: [
              {
                type: "tag",
                tag: "data",
                attributes: { hidden: null },
                children: [
                  { type: "text", value: "Ip fil." },
                  {
                    type: "tag",
                    tag: "area",
                    children: [],
                    attributes: { shape: "default", draggable: "true" }
                  },
                  {
                    type: "tag",
                    tag: "video",
                    attributes: { tabindex: "368" },
                    children: [
                      {
                        type: "tag",
                        tag: "meter",
                        attributes: {
                          draggable: "false",
                          dir: "rtl",
                          tabindex: "226",
                          contenteditable: "true",
                          style: "transform: skew(35.5027turn , 351.3803grad);"
                        },
                        children: [
                          {
                            type: "text",
                            value: "Pigucinu gehwoivu ipuod vonlavub ki nozgo."
                          },
                          {
                            type: "tag",
                            tag: "svg",
                            attributes: {},
                            children: [
                              { type: "text", value: "Los vendijjeg ukiipi." }
                            ]
                          },
                          {
                            type: "text",
                            value: "Tiref pen taf nuhijoow ru uvake."
                          },
                          {
                            type: "tag",
                            tag: "cite",
                            attributes: {},
                            children: []
                          }
                        ]
                      },
                      { type: "text", value: "Liov sactolag ihera." },
                      {
                        type: "tag",
                        tag: "button",
                        attributes: {
                          autofocus: null,
                          draggable: "true",
                          hidden: null,
                          type: "button"
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "abbr",
                            attributes: { contenteditable: "true" },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "strong",
                            attributes: { draggable: "true", tabindex: "982" },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "b",
                            attributes: {
                              contenteditable: "",
                              dir: "rtl",
                              tabindex: "127",
                              draggable: "false"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "strong",
                            attributes: { dir: "auto" },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "template",
                            attributes: {},
                            children: [
                              { type: "text", value: "Rofod pohakmi haucmor." }
                            ]
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "cite",
                        attributes: { contenteditable: "", tabindex: "-549" },
                        children: [
                          {
                            type: "tag",
                            tag: "dfn",
                            attributes: {
                              tabindex: "-612",
                              draggable: "true",
                              hidden: null,
                              style:
                                "mask-border-mode: luminance; border-inline-end: -816.4019ch rgb(31% / 71%) hidden;"
                            },
                            children: []
                          }
                        ]
                      },
                      { type: "text", value: "Pul nimap." }
                    ]
                  },
                  {
                    type: "tag",
                    tag: "area",
                    children: [],
                    attributes: {
                      hidden: null,
                      tabindex: "934",
                      contenteditable: "true",
                      shape: "default",
                      draggable: "false"
                    }
                  }
                ]
              },
              {
                type: "tag",
                tag: "samp",
                attributes: {
                  contenteditable: "false",
                  draggable: "true",
                  tabindex: "586"
                },
                children: [
                  {
                    type: "tag",
                    tag: "input",
                    children: [],
                    attributes: { required: null, type: "week" }
                  },
                  {
                    type: "tag",
                    tag: "br",
                    children: [],
                    attributes: {
                      dir: "ltr",
                      contenteditable: "true",
                      hidden: null,
                      draggable: "true",
                      style: "min-block-size: min-content;"
                    }
                  },
                  {
                    type: "tag",
                    tag: "noscript",
                    attributes: { contenteditable: "true" },
                    children: [
                      {
                        type: "tag",
                        tag: "abbr",
                        attributes: { draggable: "true" },
                        children: [
                          {
                            type: "tag",
                            tag: "u",
                            attributes: {
                              contenteditable: "true",
                              dir: "auto"
                            },
                            children: []
                          },
                          { type: "text", value: "Ziew hirzog." },
                          {
                            type: "tag",
                            tag: "strong",
                            attributes: {},
                            children: []
                          },
                          {
                            type: "text",
                            value: "Ekju ca eceuzoli cicse gozzod."
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "del",
                        attributes: {},
                        children: [
                          {
                            type: "text",
                            value:
                              "Rak rerudzup ecwemu famhuluj huwsojwa lirhu mi."
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: "tag",
                    tag: "progress",
                    attributes: { contenteditable: "true" },
                    children: [
                      {
                        type: "tag",
                        tag: "bdo",
                        attributes: {
                          hidden: null,
                          draggable: "true",
                          contenteditable: "true"
                        },
                        children: []
                      },
                      {
                        type: "text",
                        value: "Nubuz kuru cemucite nuwijwaw ocu doja nej."
                      },
                      {
                        type: "tag",
                        tag: "slot",
                        attributes: {
                          draggable: "true",
                          style: "visibility: visible; word-break: break-all;"
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "dfn",
                            attributes: {
                              contenteditable: "false",
                              hidden: null,
                              draggable: "false",
                              dir: "rtl"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "strong",
                            attributes: {},
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "del",
                            attributes: {
                              draggable: "true",
                              contenteditable: "false",
                              hidden: null,
                              tabindex: "480"
                            },
                            children: [
                              { type: "text", value: "Lezenu bi ba vum." }
                            ]
                          },
                          {
                            type: "text",
                            value: "Omiwusleg dejof vop ja pil pevrunit fibzo."
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                type: "tag",
                tag: "audio",
                attributes: {
                  hidden: null,
                  preload: "metadata",
                  tabindex: "-981"
                },
                children: [
                  {
                    type: "tag",
                    tag: "noscript",
                    attributes: { draggable: "true", dir: "rtl" },
                    children: [
                      {
                        type: "tag",
                        tag: "source",
                        children: [],
                        attributes: {}
                      },
                      {
                        type: "tag",
                        tag: "source",
                        children: [],
                        attributes: {
                          draggable: "false",
                          dir: "ltr",
                          contenteditable: "true",
                          style:
                            "border-collapse: collapse; border-collapse: separate; border-image-source: none;"
                        }
                      },
                      {
                        type: "tag",
                        tag: "source",
                        children: [],
                        attributes: {}
                      },
                      {
                        type: "tag",
                        tag: "source",
                        children: [],
                        attributes: {
                          contenteditable: "false",
                          tabindex: "474",
                          draggable: "false"
                        }
                      },
                      {
                        type: "tag",
                        tag: "th",
                        attributes: {
                          scope: "colgroup",
                          style:
                            "backdrop-filter: drop-shadow(-442.8193mm); animation-name: lelam;"
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "address",
                            attributes: {},
                            children: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: "text",
                    value: "Puojbe conuflul zem zabha iviracnem."
                  },
                  {
                    type: "tag",
                    tag: "iframe",
                    attributes: { dir: "ltr", title: "BnbPx" },
                    children: [{ type: "text", value: "Husi apparon sinle." }]
                  }
                ]
              },
              { type: "text", value: "Tonli subafe fu ju." },
              { type: "text", value: "Eca moudu uwuaz." }
            ]
          },
          {
            type: "tag",
            tag: "select",
            attributes: { tabindex: "-723" },
            children: [
              {
                type: "tag",
                tag: "script",
                attributes: { nomodule: null },
                children: [{ type: "text", value: "Wipora zecpawki lefi." }]
              },
              {
                type: "tag",
                tag: "script",
                attributes: {},
                children: [{ type: "text", value: "Ace bod noaj." }]
              },
              {
                type: "tag",
                tag: "script",
                attributes: {},
                children: [
                  {
                    type: "text",
                    value: "Mawuwela wibzatzet fat tiw invu wenoh."
                  }
                ]
              },
              {
                type: "tag",
                tag: "script",
                attributes: {
                  integrity: "qU",
                  tabindex: "-431",
                  nomodule: null
                },
                children: [
                  {
                    type: "text",
                    value: "Fattim sozzehos gi pusdudev seama mowap."
                  }
                ]
              },
              {
                type: "tag",
                tag: "optgroup",
                attributes: {
                  tabindex: "-827",
                  draggable: "false",
                  disabled: null
                },
                children: [
                  {
                    type: "tag",
                    tag: "script",
                    attributes: {
                      tabindex: "256",
                      src: "R&hP^Z6&b0Wl5QB",
                      style:
                        "border: thick outset hsla(-4757494052159488 99% 16% / -6761476060610560); scroll-padding-inline-start: 739.7928in; list-style: outside;"
                    },
                    children: [{ type: "text", value: "Ket semiewu kioli nu." }]
                  },
                  {
                    type: "tag",
                    tag: "option",
                    attributes: {},
                    children: [
                      { type: "text", value: "Maket tego uzfi cizpe cemet." }
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
        tag: "code",
        attributes: {
          dir: "ltr",
          contenteditable: "true",
          tabindex: "-837",
          hidden: null
        },
        children: []
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
                              "margin-block-end: 48%; border-style: groove; border-bottom-right-radius: -324.7697ex;"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "data",
                              attributes: { hidden: null },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "samp",
                              attributes: { contenteditable: "" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "audio",
                              attributes: { hidden: null },
                              children: []
                            },
                            {
                              type: "text",
                              value: "Je hodpizhir leg liptemdov."
                            },
                            { type: "text", value: "Gob kofwihep." }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "select",
                          attributes: {
                            style:
                              "overscroll-behavior: none; font-stretch: semi-expanded; touch-action: manipulation; border-end-start-radius: 34%; page-break-after: auto;"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "template",
                              attributes: {
                                tabindex: "-818",
                                draggable: "false"
                              },
                              children: [
                                { type: "text", value: "Duw ipaje ewumovecu." }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    { type: "tag", tag: "wbr", children: [], attributes: {} },
                    {
                      type: "tag",
                      tag: "area",
                      children: [],
                      attributes: {
                        tabindex: "664",
                        hidden: null,
                        draggable: "true",
                        contenteditable: "",
                        shape: "rect"
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
          attributes: { draggable: "true", tabindex: "-712" },
          children: [
            {
              type: "text",
              value: "Vendijjeg ukiipi povivho sataf nuhijoow ru."
            },
            {
              type: "tag",
              tag: "figcaption",
              attributes: { tabindex: "-385", hidden: null },
              children: [
                {
                  type: "tag",
                  tag: "cite",
                  attributes: { draggable: "true" },
                  children: [
                    {
                      type: "tag",
                      tag: "object",
                      attributes: {
                        dir: "auto",
                        hidden: null,
                        tabindex: "-553",
                        draggable: "true",
                        contenteditable: "false"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "picture",
                          attributes: {},
                          children: []
                        },
                        {
                          type: "text",
                          value: "Cuvbe nibel uhu bebah demzef navgiro."
                        },
                        { type: "text", value: "Fuz katji cebuc wocafig dof." },
                        {
                          type: "tag",
                          tag: "span",
                          attributes: {
                            tabindex: "657",
                            dir: "rtl",
                            hidden: null
                          },
                          children: [
                            { type: "text", value: "Be waldoal." },
                            {
                              type: "tag",
                              tag: "iframe",
                              attributes: { dir: "rtl", title: "DdT(U$dtB" },
                              children: [
                                {
                                  type: "text",
                                  value: "Rorta obututven nuawo upuge de."
                                }
                              ]
                            },
                            {
                              type: "tag",
                              tag: "bdo",
                              attributes: {
                                style: "min-block-size: min-content;"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "bdo",
                              attributes: {},
                              children: []
                            }
                          ]
                        }
                      ]
                    },
                    { type: "text", value: "Betjivo ovamuz gis susde." },
                    {
                      type: "tag",
                      tag: "ruby",
                      attributes: { hidden: null },
                      children: [
                        {
                          type: "tag",
                          tag: "rtc",
                          attributes: { tabindex: "755", contenteditable: "" },
                          children: [
                            {
                              type: "tag",
                              tag: "rt",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "rt",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "input",
                              children: [],
                              attributes: {
                                dir: "rtl",
                                tabindex: "-554",
                                spellcheck: "default",
                                readonly: null,
                                type: "submit"
                              }
                            },
                            {
                              type: "text",
                              value:
                                "Dawucrak rerudzup ecwemu famhuluj huwsojwa lirhu."
                            },
                            {
                              type: "tag",
                              tag: "rt",
                              attributes: { contenteditable: "true" },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "rtc",
                          attributes: {},
                          children: [
                            {
                              type: "tag",
                              tag: "rt",
                              attributes: {
                                contenteditable: "false",
                                hidden: null,
                                dir: "rtl"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "bdo",
                              attributes: { dir: "rtl", tabindex: "-436" },
                              children: []
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
                        tabindex: "-528",
                        draggable: "false",
                        contenteditable: "false",
                        hidden: null,
                        style: "margin-right: auto; unicode-bidi: normal;"
                      }
                    },
                    {
                      type: "tag",
                      tag: "em",
                      attributes: {
                        contenteditable: "true",
                        draggable: "false"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "textarea",
                          attributes: {
                            autofocus: null,
                            wrap: "hard",
                            dir: "auto",
                            disabled: null,
                            tabindex: "-987"
                          },
                          children: [
                            {
                              type: "text",
                              value: "Mu jadcuw wiokaivi bi alufen."
                            }
                          ]
                        },
                        {
                          type: "text",
                          value: "Utsuc maba vum uwizozeje ga jof."
                        },
                        { type: "text", value: "Zobjavi zukut ravmid." },
                        {
                          type: "tag",
                          tag: "audio",
                          attributes: {
                            contenteditable: "false",
                            draggable: "false"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "a",
                              attributes: { draggable: "true", dir: "rtl" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "picture",
                              attributes: {
                                tabindex: "492",
                                hidden: null,
                                contenteditable: "",
                                style:
                                  "background: fixed repeat-x left bottom none border-box padding-box center 47% / contain ButtonFace; mask-size: 643.5813em; flex-direction: row-reverse;"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "input",
                              children: [],
                              attributes: {
                                type: "button",
                                style:
                                  "border-bottom-right-radius: 46%; flex-wrap: nowrap; text-decoration-style: double;"
                              }
                            },
                            {
                              type: "tag",
                              tag: "bdi",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "iframe",
                              attributes: {
                                dir: "auto",
                                contenteditable: "",
                                tabindex: "874",
                                title: "eau#7g3Sn[pNB&JrT4B"
                              },
                              children: [
                                {
                                  type: "text",
                                  value: "Fe vuv racnem delab efki ij."
                                }
                              ]
                            }
                          ]
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
          attributes: { draggable: "true", tabindex: "-87" },
          children: [
            {
              type: "tag",
              tag: "figcaption",
              attributes: {
                draggable: "true",
                contenteditable: "true",
                dir: "auto"
              },
              children: []
            },
            { type: "tag", tag: "meter", attributes: {}, children: [] },
            {
              type: "tag",
              tag: "blockquote",
              attributes: {
                dir: "rtl",
                style:
                  "border-inline-start-width: -429.8097vmax; border-inline-end-style: none; text-decoration-thickness: -839.5325ch; list-style-position: inside; font-variant-position: super;"
              },
              children: [
                {
                  type: "text",
                  value: "Orisihzef wipora zecpawki lefi ufe dedbodnin."
                },
                {
                  type: "tag",
                  tag: "math",
                  attributes: {
                    display: "inline",
                    draggable: "true",
                    style:
                      "padding-right: 94%; border-right-color: rgba(-7809309110960128 / 72%); mask-border-slice: 6157839831662592 fill; border-image: space -5649225631137792 fill paint(levmot); grid-column-start: -8% zim;"
                  },
                  children: [{ type: "text", value: "Memcug diwto fattim." }]
                },
                {
                  type: "tag",
                  tag: "svg",
                  attributes: {
                    tabindex: "312",
                    draggable: "true",
                    hidden: null
                  },
                  children: [{ type: "text", value: "So isdudev." }]
                },
                {
                  type: "tag",
                  tag: "var",
                  attributes: { contenteditable: "true", draggable: "true" },
                  children: [
                    {
                      type: "tag",
                      tag: "small",
                      attributes: {
                        contenteditable: "true",
                        draggable: "false",
                        dir: "ltr"
                      },
                      children: [
                        { type: "text", value: "Mi taw pahas ociwowwo sen." },
                        { type: "tag", tag: "i", attributes: {}, children: [] }
                      ]
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "cite",
                  attributes: {
                    contenteditable: "true",
                    hidden: null,
                    draggable: "true",
                    style:
                      "will-change: auto; scroll-padding-inline-start: auto;"
                  },
                  children: []
                }
              ]
            },
            {
              type: "text",
              value: "Ihhinla gubojmi oweki nignuha fioh sepbe guzfi."
            }
          ]
        },
        {
          type: "tag",
          tag: "figure",
          attributes: {
            tabindex: "299",
            contenteditable: "",
            style:
              "perspective-origin: left -589.7207pt; border-left-color: #095b51;"
          },
          children: [
            {
              type: "tag",
              tag: "figcaption",
              attributes: { hidden: null, dir: "rtl", tabindex: "-401" },
              children: [
                { type: "text", value: "Ritudwup reha bicanip." },
                {
                  type: "tag",
                  tag: "svg",
                  attributes: { dir: "auto", draggable: "false" },
                  children: [
                    {
                      type: "text",
                      value: "Murgiku ta ebgutir apehuli ep zinu."
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "script",
                  attributes: { draggable: "false" },
                  children: [
                    { type: "text", value: "En ilomi jom meftuud fogbuw anja." }
                  ]
                },
                { type: "text", value: "Purda ju wig vifovi zice." }
              ]
            },
            {
              type: "tag",
              tag: "mark",
              attributes: {},
              children: [
                { type: "text", value: "Wohsul owapeg jan elsajzic." },
                {
                  type: "tag",
                  tag: "small",
                  attributes: { contenteditable: "true" },
                  children: [
                    {
                      type: "tag",
                      tag: "s",
                      attributes: {
                        contenteditable: "false",
                        style:
                          "-webkit-line-clamp: 94%; clip: rect(180.4613cm , -278.0522in , -816.8359vmax , 834.6272vw); border-end-start-radius: 95%; overflow-y: clip;"
                      },
                      children: [
                        {
                          type: "text",
                          value: "Wopugute curcooza nuhdo guukalo elrubon racu."
                        },
                        {
                          type: "tag",
                          tag: "template",
                          attributes: {
                            draggable: "true",
                            dir: "rtl",
                            hidden: null
                          },
                          children: [
                            {
                              type: "text",
                              value: "Vespuk hibiz if owcub zabi."
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "q",
                          attributes: { hidden: null, draggable: "true" },
                          children: []
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "label",
                      attributes: { dir: "ltr", tabindex: "-110" },
                      children: [
                        {
                          type: "tag",
                          tag: "em",
                          attributes: {
                            dir: "auto",
                            draggable: "false",
                            contenteditable: ""
                          },
                          children: []
                        }
                      ]
                    }
                  ]
                },
                { type: "text", value: "Dezate muv siwufocek tenpagge." },
                {
                  type: "tag",
                  tag: "dfn",
                  attributes: { contenteditable: "" },
                  children: [
                    {
                      type: "tag",
                      tag: "strong",
                      attributes: { contenteditable: "true", dir: "auto" },
                      children: []
                    },
                    {
                      type: "tag",
                      tag: "video",
                      attributes: {
                        tabindex: "34",
                        draggable: "false",
                        contenteditable: "true",
                        dir: "auto",
                        hidden: null,
                        style:
                          "text-align-last: end; caret-color: auto; border-collapse: collapse;"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "sup",
                          attributes: {
                            dir: "auto",
                            tabindex: "-496",
                            style:
                              "border-start-start-radius: 366.5175vmin; border: InactiveCaption medium double; text-emphasis-style: 'vosug'; padding-top: 52%; scroll-margin-block-start: 736.3216Q;"
                          },
                          children: [
                            {
                              type: "text",
                              value: "Kug vapzadizu itdu zubu zigge kun hebit."
                            }
                          ]
                        },
                        { type: "text", value: "Jo muv tazat voohwo sij cav." },
                        {
                          type: "tag",
                          tag: "ruby",
                          attributes: {
                            tabindex: "648",
                            hidden: null,
                            draggable: "false",
                            dir: "auto"
                          },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "select",
                          attributes: {
                            style:
                              "cursor: url(asva) pointer; clip-path: content-box inset(80% round 30%); scroll-padding-inline-end: auto; right: auto; border-top-left-radius: 13%;"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "template",
                              attributes: {
                                tabindex: "910",
                                contenteditable: "false",
                                hidden: null,
                                draggable: "false"
                              },
                              children: [
                                {
                                  type: "text",
                                  value: "Uh isze ep runifaf zanumbot bu."
                                }
                              ]
                            }
                          ]
                        },
                        {
                          type: "text",
                          value: "Golbador re fa kenmez bive unjor otuwidag."
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "math",
                      attributes: {},
                      children: [{ type: "text", value: "Po kis." }]
                    },
                    { type: "tag", tag: "wbr", children: [], attributes: {} }
                  ]
                }
              ]
            }
          ]
        },
        {
          type: "tag",
          tag: "figure",
          attributes: { contenteditable: "true" },
          children: []
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
