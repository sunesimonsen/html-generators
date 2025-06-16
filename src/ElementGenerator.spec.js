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
          { type: "text", value: "Wot cujduvtih le votevned esohogbi dadeip." },
          { type: "text", value: "Pow si gewse iwahoil." }
        ]
      },
      {
        type: "tag",
        tag: "code",
        attributes: {
          dir: "rtl",
          contenteditable: "",
          tabindex: "122",
          draggable: "true"
        },
        children: [
          { type: "text", value: "Vake kerokcu her jahben." },
          {
            type: "tag",
            tag: "kbd",
            attributes: {
              draggable: "true",
              dir: "auto",
              contenteditable: "true",
              tabindex: "-681"
            },
            children: [
              {
                type: "tag",
                tag: "noscript",
                attributes: {},
                children: [
                  { type: "text", value: "Temdov pa envewi logumem." },
                  {
                    type: "tag",
                    tag: "iframe",
                    attributes: {
                      src: "O#Ztq",
                      contenteditable: "",
                      draggable: "false",
                      dir: "auto",
                      title: "Ntr]g)%P%$U"
                    },
                    children: [
                      { type: "text", value: "Ewumovecu iro lavub ki." }
                    ]
                  }
                ]
              },
              {
                type: "tag",
                tag: "ruby",
                attributes: { hidden: null, dir: "ltr" },
                children: []
              }
            ]
          },
          {
            type: "tag",
            tag: "iframe",
            attributes: { draggable: "true", title: "BW3" },
            children: [{ type: "text", value: "Dijjeg ukiipi povivho." }]
          },
          {
            type: "tag",
            tag: "a",
            attributes: { dir: "ltr", draggable: "true" },
            children: [
              {
                type: "tag",
                tag: "del",
                attributes: { tabindex: "-385", hidden: null },
                children: [
                  {
                    type: "tag",
                    tag: "h3",
                    attributes: {},
                    children: [
                      {
                        type: "tag",
                        tag: "sup",
                        attributes: { hidden: null },
                        children: [
                          {
                            type: "text",
                            value: "Ak epcibtof wecuv lini kiruen."
                          },
                          {
                            type: "tag",
                            tag: "dfn",
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
                            tag: "small",
                            attributes: { dir: "auto" },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "br",
                            children: [],
                            attributes: {}
                          },
                          {
                            type: "tag",
                            tag: "ins",
                            attributes: {
                              style:
                                "font-weight: bolder; offset: padding-box inset(-838.2541vmax) -499.5142ex 320.3948turn; offset: center center / left;"
                            },
                            children: []
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "picture",
                        attributes: {},
                        children: [
                          {
                            type: "tag",
                            tag: "template",
                            attributes: { tabindex: "-650", dir: "ltr" },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "script",
                            children: [],
                            attributes: {
                              nomodule: null,
                              contenteditable: "true",
                              draggable: "false",
                              style:
                                "background-repeat: repeat-y; animation-duration: 171.5512s; transform: skew(0); scroll-margin-inline-start: 641.279vw;",
                              src: "http://upuge.aq/la"
                            }
                          },
                          {
                            type: "tag",
                            tag: "source",
                            children: [],
                            attributes: {
                              style:
                                "overflow-inline: hidden; order: -23; scroll-padding-left: -478.611ex; inset-inline-start: auto;"
                            }
                          },
                          {
                            type: "tag",
                            tag: "source",
                            children: [],
                            attributes: { hidden: null }
                          }
                        ]
                      },
                      {
                        type: "text",
                        value: "Muz gis susde sev egizosde pitkedeb iva."
                      }
                    ]
                  }
                ]
              },
              {
                type: "tag",
                tag: "ins",
                attributes: { dir: "auto" },
                children: [
                  {
                    type: "tag",
                    tag: "noscript",
                    attributes: {
                      dir: "auto",
                      draggable: "false",
                      hidden: null
                    },
                    children: [
                      {
                        type: "tag",
                        tag: "canvas",
                        attributes: {},
                        children: [
                          {
                            type: "tag",
                            tag: "script",
                            children: [
                              { type: "text", value: 'console.log("hello")' }
                            ],
                            attributes: {
                              crossorigin: "use-credentials",
                              integrity: "gLgr]RB@B$8r(^[",
                              contenteditable: "false",
                              nomodule: null
                            }
                          },
                          {
                            type: "tag",
                            tag: "h5",
                            attributes: {},
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "svg",
                            attributes: { contenteditable: "true" },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "section",
                            attributes: {},
                            children: []
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "script",
                        children: [],
                        attributes: {
                          dir: "rtl",
                          integrity: "#NqG)7",
                          async: null,
                          nomodule: null,
                          src: "http://kuru.zm/hiucite"
                        }
                      },
                      {
                        type: "tag",
                        tag: "base",
                        children: [],
                        attributes: {
                          dir: "rtl",
                          tabindex: "-902",
                          draggable: "true"
                        }
                      },
                      {
                        type: "tag",
                        tag: "script",
                        children: [],
                        attributes: { src: "http://jek.sl/jadcuw" }
                      }
                    ]
                  },
                  {
                    type: "tag",
                    tag: "ruby",
                    attributes: {
                      draggable: "true",
                      tabindex: "-933",
                      dir: "auto",
                      hidden: null
                    },
                    children: []
                  },
                  {
                    type: "tag",
                    tag: "math",
                    attributes: {
                      style:
                        "font-variation-settings: 'fenlezenu' -563973896273920, 'jacu' 5636723467878400, 'uwizozeje' -890917628149760, 'og' -5274117821431808, 'zobjavi' -428550003884032; right: auto; columns: auto auto;"
                    },
                    children: [
                      {
                        type: "tag",
                        tag: "math",
                        attributes: {
                          tabindex: "-981",
                          overflow: "truncate",
                          display: "inline"
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "h1",
                            attributes: {
                              hidden: null,
                              dir: "auto",
                              tabindex: "396",
                              draggable: "false"
                            },
                            children: []
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "math",
                        attributes: {
                          overflow: "truncate",
                          tabindex: "-66",
                          contenteditable: "",
                          dir: "rtl"
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "h2",
                            attributes: { dir: "ltr" },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "nav",
                            attributes: {
                              contenteditable: "false",
                              draggable: "false",
                              style: "overscroll-behavior-block: none;"
                            },
                            children: []
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "nav",
                        attributes: {
                          draggable: "false",
                          tabindex: "-224",
                          hidden: null,
                          dir: "auto",
                          style:
                            "print-color-adjust: economy; animation-iteration-count: 620118669262848;"
                        },
                        children: [
                          { type: "text", value: "Kac topuoj ju ziuflul zem." },
                          {
                            type: "tag",
                            tag: "blockquote",
                            attributes: {
                              hidden: null,
                              draggable: "true",
                              style:
                                "overflow-wrap: anywhere; letter-spacing: -939.0557ch; shape-outside: circle(at left top); border-bottom-left-radius: 59%;"
                            },
                            children: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: "tag",
                    tag: "math",
                    attributes: {
                      draggable: "false",
                      tabindex: "587",
                      hidden: null,
                      dir: "rtl"
                    },
                    children: [
                      {
                        type: "tag",
                        tag: "math",
                        attributes: { draggable: "true" },
                        children: [
                          {
                            type: "tag",
                            tag: "datalist",
                            attributes: {
                              tabindex: "-365",
                              contenteditable: "true",
                              hidden: null,
                              style:
                                "border-inline-start-width: thick; background-blend-mode: saturation; background-attachment: scroll; overscroll-behavior-block: auto; border-block-start-width: medium;"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "h3",
                            attributes: {
                              contenteditable: "",
                              hidden: null,
                              draggable: "false",
                              tabindex: "821"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "meta",
                            children: [],
                            attributes: { draggable: "true", dir: "ltr" }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              { type: "text", value: "Gihidtoh paw rile." },
              {
                type: "tag",
                tag: "em",
                attributes: { contenteditable: "", draggable: "true" },
                children: [
                  { type: "text", value: "Lawesu osofa ossav etgodfat tiw." },
                  {
                    type: "tag",
                    tag: "abbr",
                    attributes: { dir: "auto" },
                    children: [
                      {
                        type: "tag",
                        tag: "mark",
                        attributes: {
                          draggable: "true",
                          tabindex: "578",
                          contenteditable: "true",
                          dir: "auto"
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "b",
                            attributes: {
                              draggable: "false",
                              contenteditable: "false",
                              dir: "rtl"
                            },
                            children: []
                          },
                          { type: "text", value: "Timinofoh zobewol katdevdo." }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "ins",
                        attributes: { draggable: "false" },
                        children: []
                      }
                    ]
                  },
                  { type: "text", value: "Wo tisirse uwsemi taw." },
                  {
                    type: "tag",
                    tag: "math",
                    attributes: {
                      contenteditable: "false",
                      hidden: null,
                      overflow: "elide"
                    },
                    children: []
                  }
                ]
              },
              {
                type: "tag",
                tag: "var",
                attributes: { tabindex: "652", draggable: "false" },
                children: [
                  { type: "text", value: "Ewu defuf ohu hin cogu semiewu." },
                  { type: "text", value: "Ponig id si bu." }
                ]
              }
            ]
          },
          {
            type: "tag",
            tag: "meter",
            attributes: { dir: "auto" },
            children: [{ type: "text", value: "Paz fiecufi." }]
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
                          value: "Wot cujduvtih le votevned esohogbi dadeip."
                        },
                        { type: "text", value: "Pow si gewse iwahoil." }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "wbr",
                      children: [],
                      attributes: {
                        dir: "rtl",
                        contenteditable: "",
                        tabindex: "122",
                        draggable: "true"
                      }
                    },
                    {
                      type: "tag",
                      tag: "area",
                      children: [],
                      attributes: {
                        contenteditable: "false",
                        dir: "rtl",
                        shape: "default",
                        tabindex: "-6",
                        hidden: null
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
          attributes: { draggable: "true", dir: "rtl" },
          children: [
            {
              type: "tag",
              tag: "figcaption",
              attributes: { dir: "ltr", contenteditable: "true", hidden: null },
              children: [
                { type: "text", value: "Riumso leg liptemdov." },
                { type: "text", value: "Gob kofwihep." },
                {
                  type: "tag",
                  tag: "ol",
                  attributes: {
                    style:
                      "overflow-y: hidden; line-height: 13%; overflow-anchor: auto; border-bottom: currentcolor; break-before: all;"
                  },
                  children: [
                    {
                      type: "tag",
                      tag: "template",
                      attributes: {
                        draggable: "false",
                        tabindex: "-966",
                        dir: "rtl",
                        contenteditable: "false"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "embed",
                          children: [],
                          attributes: {
                            src: "*l6%XSQaBh*X[avlwO",
                            tabindex: "448",
                            dir: "auto",
                            title: "0brK",
                            style:
                              "font-feature-settings: 'kimpejeg' off; font-variant: none; text-emphasis-style: circle; offset-distance: 87%;"
                          }
                        },
                        {
                          type: "tag",
                          tag: "h5",
                          attributes: {},
                          children: [
                            {
                              type: "text",
                              value: "Ovzaohi suzceh egpa muvona."
                            },
                            { type: "text", value: "Vuj pe." },
                            {
                              type: "tag",
                              tag: "area",
                              children: [],
                              attributes: {
                                dir: "auto",
                                hidden: null,
                                tabindex: "-553",
                                draggable: "true",
                                contenteditable: "false"
                              }
                            },
                            {
                              type: "tag",
                              tag: "u",
                              attributes: {
                                dir: "rtl",
                                hidden: null,
                                tabindex: "-502",
                                draggable: "false",
                                style:
                                  "background-repeat: repeat-y; background: repeat none 25% local padding-box padding-box element(#uzwebmek) content-box; box-sizing: content-box; translate: none;"
                              },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "section",
                          attributes: {
                            hidden: null,
                            dir: "ltr",
                            contenteditable: "true"
                          },
                          children: [
                            {
                              type: "text",
                              value: "Oho womtoce fobe ca ez nazinef."
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
              tag: "del",
              attributes: { draggable: "false", tabindex: "887" },
              children: [
                {
                  type: "tag",
                  tag: "time",
                  attributes: { hidden: null, draggable: "false" },
                  children: [
                    {
                      type: "tag",
                      tag: "output",
                      attributes: {
                        tabindex: "906",
                        draggable: "true",
                        dir: "ltr",
                        hidden: null,
                        style:
                          "border-block-end-width: 236.5078Q; filter: none;"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "s",
                          attributes: {},
                          children: [
                            { type: "text", value: "Azrazi usilesev." },
                            {
                              type: "text",
                              value: "Hirzog im ekju ca eceuzoli cicse gozzod."
                            },
                            {
                              type: "tag",
                              tag: "iframe",
                              attributes: { title: "[e]OeG2$Oz0i)kY49T#" },
                              children: [
                                {
                                  type: "text",
                                  value: "Ceirapa sev aguuno waze."
                                }
                              ]
                            },
                            {
                              type: "tag",
                              tag: "template",
                              attributes: { hidden: null, dir: "ltr" },
                              children: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "strong",
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
                          tag: "select",
                          attributes: { autofocus: null },
                          children: []
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "input",
                      children: [],
                      attributes: { type: "email" }
                    },
                    {
                      type: "tag",
                      tag: "br",
                      children: [],
                      attributes: { hidden: null, contenteditable: "true" }
                    },
                    {
                      type: "tag",
                      tag: "noscript",
                      attributes: {
                        hidden: null,
                        dir: "ltr",
                        contenteditable: "false"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "output",
                          attributes: {
                            dir: "auto",
                            hidden: null,
                            style:
                              "mask-position: center 47%; animation-play-state: running;"
                          },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "ins",
                          attributes: {
                            style:
                              "overflow-y: auto; z-index: 83; margin-right: 73%; transform-origin: -741.6812ex right -542.7144vmax; outline-width: medium;"
                          },
                          children: [
                            {
                              type: "text",
                              value: "Zukut ravmid motor idbujsok."
                            },
                            {
                              type: "tag",
                              tag: "object",
                              attributes: {
                                draggable: "false",
                                contenteditable: "true",
                                hidden: null
                              },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "template",
                          attributes: { dir: "rtl" },
                          children: [
                            {
                              type: "tag",
                              tag: "strong",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "th",
                              attributes: { draggable: "false", scope: "row" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "blockquote",
                              attributes: { contenteditable: "", dir: "ltr" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "aside",
                              attributes: {
                                tabindex: "172",
                                hidden: null,
                                style:
                                  "animation-timeline: je; border-inline-end-width: medium;"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "img",
                              children: [],
                              attributes: {
                                hidden: null,
                                dir: "ltr",
                                src: "JU",
                                style:
                                  "table-layout: auto; font-variation-settings: normal; color: paleturquoise;"
                              }
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "area",
                          children: [],
                          attributes: { shape: "rect" }
                        },
                        { type: "text", value: "Holilzab fo emobavli delab." }
                      ]
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "figcaption",
                  attributes: {
                    dir: "rtl",
                    hidden: null,
                    style: "text-decoration-skip-ink: all; inline-size: 65%;"
                  },
                  children: [
                    { type: "text", value: "Sinle ipsej kowba le efju." },
                    {
                      type: "tag",
                      tag: "samp",
                      attributes: {
                        style:
                          "scroll-padding-inline-end: auto; list-style-position: inside; overscroll-behavior-block: auto; border-block-start-width: medium; text-overflow: 'hifvuwrin';"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "small",
                          attributes: {
                            dir: "auto",
                            draggable: "true",
                            tabindex: "114",
                            contenteditable: "true"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "mark",
                              attributes: {},
                              children: []
                            }
                          ]
                        },
                        { type: "text", value: "Cejfi ufe dedbodnin." }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              type: "tag",
              tag: "h6",
              attributes: { hidden: null, dir: "auto" },
              children: [
                { type: "text", value: "Zat godfatvo levmot wenoh ninlu." },
                {
                  type: "tag",
                  tag: "wbr",
                  children: [],
                  attributes: { dir: "rtl" }
                },
                { type: "text", value: "Timuto fattim." },
                {
                  type: "tag",
                  tag: "audio",
                  attributes: {
                    preload: "none",
                    draggable: "false",
                    hidden: null,
                    tabindex: "-779",
                    style: "border-right-color: #7e7592;"
                  },
                  children: [
                    {
                      type: "tag",
                      tag: "bdo",
                      attributes: {},
                      children: [
                        {
                          type: "tag",
                          tag: "slot",
                          attributes: {
                            contenteditable: "true",
                            draggable: "false",
                            dir: "ltr"
                          },
                          children: [
                            {
                              type: "text",
                              value: "Mi taw pahas ociwowwo sen."
                            },
                            {
                              type: "tag",
                              tag: "iframe",
                              attributes: { title: "2h*!&^Hj" },
                              children: [
                                { type: "text", value: "Dukuhhin cogu." }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "bdo",
                      attributes: {
                        contenteditable: "true",
                        draggable: "false",
                        dir: "auto"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "iframe",
                          attributes: { title: "mFc^xA5QuUqa" },
                          children: [
                            { type: "text", value: "Nanecufi kak golelta." }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "textarea",
                          attributes: {
                            cols: "560",
                            required: null,
                            style:
                              "border-inline-start-color: rgb(-4101845127528448 -4129896901115904 7159469771325440 2594065140940800 , 98%);"
                          },
                          children: [
                            {
                              type: "text",
                              value: "Vibhegvi det iphoc usetumur me cap gub."
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "data",
                          attributes: {
                            style:
                              "mask-clip: view-box, no-clip, fill-box, stroke-box; clear: inline-start; flex-direction: row-reverse; margin-left: 86%; column-rule-color: ThreeDFace;"
                          },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "textarea",
                          attributes: {},
                          children: [
                            {
                              type: "text",
                              value: "Nofpajom meftuud fogbuw anja."
                            }
                          ]
                        },
                        { type: "text", value: "Purda ju wig vifovi zice." }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "label",
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
                                  "-webkit-line-clamp: -46; accent-color: hsla(-726.3628turn 69% 52%); border-block-style: inset; padding-right: 76%;"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "keygen",
                              children: [],
                              attributes: {
                                hidden: null,
                                draggable: "false",
                                tabindex: "-647"
                              }
                            }
                          ]
                        },
                        {
                          type: "text",
                          value:
                            "Vab ozasiwba jawukalo elrubon racu kisciam vespuk."
                        },
                        {
                          type: "tag",
                          tag: "em",
                          attributes: {
                            tabindex: "991",
                            contenteditable: "",
                            dir: "auto",
                            style:
                              "font-size-adjust: ic-width -2689336776589312; background-attachment: scroll; animation-play-state: running;"
                          },
                          children: [
                            { type: "text", value: "Webne eh sabucic vaoz." },
                            {
                              type: "tag",
                              tag: "slot",
                              attributes: {
                                hidden: null,
                                dir: "auto",
                                contenteditable: "false"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "i",
                              attributes: {
                                draggable: "false",
                                hidden: null,
                                dir: "auto",
                                style:
                                  "font-variant-east-asian: proportional-width jis78 ruby; border-style: hidden;"
                              },
                              children: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "ins",
                      attributes: {
                        dir: "ltr",
                        hidden: null,
                        contenteditable: "false",
                        tabindex: "928"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "track",
                          children: [],
                          attributes: {
                            contenteditable: "true",
                            hidden: null,
                            draggable: "true",
                            tabindex: "537"
                          }
                        },
                        {
                          type: "tag",
                          tag: "track",
                          children: [],
                          attributes: {
                            draggable: "true",
                            hidden: null,
                            contenteditable: "",
                            tabindex: "-129"
                          }
                        },
                        { type: "text", value: "Ebuvuwah lawo." }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "meter",
                      attributes: {},
                      children: [
                        {
                          type: "tag",
                          tag: "data",
                          attributes: {},
                          children: [
                            {
                              type: "tag",
                              tag: "output",
                              attributes: { hidden: null, tabindex: "-868" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "object",
                              attributes: {
                                dir: "auto",
                                hidden: null,
                                tabindex: "189",
                                draggable: "false",
                                contenteditable: "false"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "s",
                              attributes: {
                                contenteditable: "false",
                                hidden: null
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "sup",
                              attributes: {
                                tabindex: "757",
                                contenteditable: "",
                                hidden: null,
                                style: "column-fill: auto;"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "svg",
                              attributes: {
                                draggable: "false",
                                tabindex: "-540",
                                contenteditable: "false",
                                hidden: null,
                                style: "column-count: auto;"
                              },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "template",
                          attributes: {
                            tabindex: "-932",
                            hidden: null,
                            style:
                              "touch-action: auto; resize: none; column-rule-width: thick medium thin; background-clip: border-box;"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "title",
                              attributes: {
                                dir: "ltr",
                                contenteditable: "true",
                                hidden: null
                              },
                              children: [
                                {
                                  type: "text",
                                  value: "Bid uw nuro jevzova oza wu."
                                }
                              ]
                            },
                            {
                              type: "tag",
                              tag: "style",
                              children: [
                                {
                                  type: "text",
                                  value:
                                    "@keyframes toj {\n  to {\n  border-inline-start-width: -692.684vh;\n}\n}\n:indeterminate { pointer-events: auto; scroll-margin-block: -411.6641cap; text-justify: none; }\n:nth-last-of-type(odd) { -webkit-line-clamp: none; border-bottom-style: groove; grid-column: auto; }\n[spellcheck=jimez] || :indeterminate { hyphenate-character: auto; }\n:focus { visibility: hidden; column-rule: currentcolor hidden dotted outset; border-image-outset: -35.2872px; }\n:any-link { mask: alpha; margin-block: auto; }\n, { border: double medium; scroll-margin-top: -917.6331cm; outline-width: thick; border-bottom-style: inset; mask-position: left center; }\n::first-line { padding-block-end: 34%; max-height: fit-content; border: lemonchiffon none; border-inline-style: none; background-color: hsl(-561.572grad 47% 75%); }\n::before { outline: groove dashed double; inset-inline-end: -193.4773Q; border-style: solid; }\n:active { hyphenate-character: auto; transition-timing-function: cubic-bezier(1 , 4239694132936704 , 1 , 87277741015040); animation-timing-function: step-end; grid-row: 75 vesewge / saplu span; border-inline-start-color: rgb(-7252715897880576 6678836527759360 -1710993117806592); }\n:nth-child(even of:so ::ic ( repeat-y ):sowef ( 67%, center ) || * #re ::ocdi ( rgba(8378833556209664 3350097014292480 -8918208429948928 -8694112794443776 , 87%) ):vida) { columns: 35; }\n::placeholder || :read-write + :hover || ::before { break-after: verso; }\n::after { font-optical-sizing: none; inset-inline-start: 87%; shape-margin: 11%; text-underline-position: right under; outline: auto thick currentcolor; }\n::slotted(tis:ahiajaro ::vejnig ( -853.6082pt ):peezipub ( dashed )) { margin-block: 77%; margin-inline-start: auto; }\n:read-only { animation: -7921518436679680 868.8721ms; flex-grow: -7180164052025344; border-inline-style: dotted; }\n:empty { text-underline-offset: 54%; mask-clip: stroke-box, view-box; }\n:visited { border-inline-start-color: currentcolor; scroll-margin-block-start: -630.8298rem; column-rule-color: darkgrey; }\n::first-letter { inset-block: auto; margin-inline-start: 266.3028ch; transition: linear 293.2118s -177.9431ms; }\n::after { resize: horizontal; border-top-width: thick; color: currentcolor; grid-auto-columns: fit-content(247.7187cm); grid-template-columns: fit-content(21%) [ hof ]; }\n"
                                }
                              ],
                              attributes: {
                                draggable: "false",
                                hidden: null,
                                dir: "ltr",
                                tabindex: "-984"
                              }
                            },
                            {
                              type: "tag",
                              tag: "noscript",
                              attributes: {
                                dir: "ltr",
                                tabindex: "-141",
                                hidden: null
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "nav",
                              attributes: { hidden: null, draggable: "true" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "math",
                              attributes: {
                                contenteditable: "false",
                                display: "block",
                                dir: "rtl",
                                overflow: "scale"
                              },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "sup",
                          attributes: {},
                          children: []
                        }
                      ]
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "script",
                  children: [],
                  attributes: {
                    nomodule: null,
                    async: null,
                    dir: "rtl",
                    src: "http://ace.my/invig"
                  }
                }
              ]
            },
            { type: "text", value: "Gouj runij raz." },
            {
              type: "text",
              value: "Vof mak zajvu ojdefaz zigvichat dotzarba je."
            }
          ]
        },
        {
          type: "tag",
          tag: "figure",
          attributes: { dir: "ltr" },
          children: [
            {
              type: "tag",
              tag: "keygen",
              children: [],
              attributes: { tabindex: "-116", dir: "auto" }
            },
            {
              type: "tag",
              tag: "h5",
              attributes: { hidden: null },
              children: [
                {
                  type: "tag",
                  tag: "strong",
                  attributes: {
                    draggable: "true",
                    style: "overscroll-behavior: contain;"
                  },
                  children: [
                    {
                      type: "tag",
                      tag: "q",
                      attributes: {
                        tabindex: "953",
                        hidden: null,
                        draggable: "false",
                        style:
                          "font-feature-settings: normal; input-security: auto; border-end-end-radius: 55%; rotate: z 12.2837turn;"
                      },
                      children: [
                        { type: "text", value: "Soj ci nepucor." },
                        {
                          type: "tag",
                          tag: "a",
                          attributes: {
                            tabindex: "-239",
                            style: "border-bottom-right-radius: -797.9084em 6%;"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "wbr",
                              children: [],
                              attributes: { contenteditable: "true" }
                            },
                            {
                              type: "tag",
                              tag: "data",
                              attributes: {
                                tabindex: "405",
                                dir: "rtl",
                                style:
                                  "font-feature-settings: 'weubefi'; animation-delay: -480.3736s;"
                              },
                              children: []
                            },
                            { type: "text", value: "Ro bu ufu bij ro egfi." }
                          ]
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "object",
                      attributes: {
                        style:
                          "counter-set: loknet -74; transition-duration: 573.8068s; content-visibility: hidden; scroll-margin-inline: -847.1663ex; print-color-adjust: exact;"
                      },
                      children: []
                    },
                    {
                      type: "tag",
                      tag: "svg",
                      attributes: { tabindex: "461" },
                      children: [
                        {
                          type: "tag",
                          tag: "textarea",
                          attributes: { maxlength: "890" },
                          children: [
                            {
                              type: "text",
                              value: "Wu vaba vatdaom liujzup ladiesa ba uwe."
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "label",
                          attributes: {
                            hidden: null,
                            contenteditable: "false",
                            dir: "ltr",
                            style: "break-before: recto;"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "var",
                              attributes: {
                                draggable: "false",
                                style:
                                  "inset-block-end: auto; list-style: inside none tajew; border-bottom-right-radius: 773.8498cap 28%; outline-width: thin;"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "area",
                              children: [],
                              attributes: {
                                dir: "ltr",
                                tabindex: "-979",
                                draggable: "false",
                                contenteditable: "false",
                                shape: "poly"
                              }
                            },
                            {
                              type: "tag",
                              tag: "embed",
                              children: [],
                              attributes: { src: "nxO3[t*Nd1mhjY", title: ")" }
                            },
                            { type: "text", value: "Kok somjan dun zidni hos." }
                          ]
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "picture",
                      attributes: {
                        tabindex: "800",
                        dir: "ltr",
                        contenteditable: "",
                        draggable: "false"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "template",
                          attributes: { dir: "auto" },
                          children: [
                            {
                              type: "tag",
                              tag: "a",
                              attributes: {
                                hidden: null,
                                contenteditable: "false",
                                tabindex: "-679",
                                dir: "auto",
                                style:
                                  "column-width: 4.1004vw; border-bottom-style: dashed; offset-distance: 21%; mask-origin: fill-box; font-weight: normal;"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "nav",
                              attributes: {
                                contenteditable: "",
                                dir: "rtl",
                                tabindex: "875"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "article",
                              attributes: {
                                contenteditable: "false",
                                tabindex: "52",
                                dir: "rtl"
                              },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "script",
                          children: [],
                          attributes: {
                            crossorigin: "anonymous",
                            draggable: "false",
                            contenteditable: "false",
                            src: "http://tatoaf.bg/uvlonsef"
                          }
                        },
                        {
                          type: "tag",
                          tag: "script",
                          children: [
                            { type: "text", value: 'console.log("hello")' }
                          ],
                          attributes: { hidden: null, nomodule: null }
                        },
                        {
                          type: "tag",
                          tag: "source",
                          children: [],
                          attributes: { tabindex: "-49", dir: "auto" }
                        }
                      ]
                    },
                    {
                      type: "text",
                      value: "Wasfe feopi ceceje it jes esca bacina."
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "code",
                  attributes: { draggable: "true" },
                  children: [
                    {
                      type: "text",
                      value: "Matagwiz foganne sujdawe durim huwiar."
                    },
                    {
                      type: "text",
                      value: "Celpid vuf nunorec dujubale idkos."
                    },
                    {
                      type: "tag",
                      tag: "ruby",
                      attributes: {
                        draggable: "false",
                        contenteditable: "false",
                        hidden: null,
                        style:
                          "break-before: all; grid-template-areas: 'ramdiih'; margin-block-start: 10%; font-language-override: 'lanufgi'; border-block-end: double;"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "rb",
                          attributes: { contenteditable: "false" },
                          children: [
                            { type: "text", value: "Luwfu sege vudnoucu." },
                            {
                              type: "tag",
                              tag: "noscript",
                              attributes: {
                                contenteditable: "false",
                                hidden: null,
                                draggable: "false",
                                dir: "rtl"
                              },
                              children: []
                            },
                            { type: "text", value: "Tedizifab dibawelo." }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "rt",
                          attributes: {
                            contenteditable: "false",
                            dir: "rtl",
                            draggable: "true",
                            tabindex: "760"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "q",
                              attributes: { draggable: "false" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "iframe",
                              attributes: {
                                hidden: null,
                                title: "0i9",
                                style:
                                  "border-width: -304.1172rem thin; perspective: -128.9891px; mask-border-source: none; scroll-padding-inline-end: 25%;"
                              },
                              children: [{ type: "text", value: "Vah bar." }]
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "rt",
                          attributes: {
                            style:
                              "order: 99; scroll-padding-inline: auto; block-size: 87%; letter-spacing: normal; font: caption;"
                          },
                          children: []
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "br",
                      children: [],
                      attributes: { dir: "auto", tabindex: "232", hidden: null }
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "b",
                  attributes: {
                    contenteditable: "false",
                    draggable: "false",
                    hidden: null
                  },
                  children: []
                }
              ]
            },
            {
              type: "tag",
              tag: "u",
              attributes: { contenteditable: "true", tabindex: "-865" },
              children: []
            },
            {
              type: "tag",
              tag: "canvas",
              attributes: { draggable: "false" },
              children: []
            },
            {
              type: "tag",
              tag: "figcaption",
              attributes: { draggable: "true", contenteditable: "false" },
              children: [
                {
                  type: "tag",
                  tag: "q",
                  attributes: { tabindex: "826" },
                  children: [
                    { type: "text", value: "Nafdic ha neh." },
                    {
                      type: "tag",
                      tag: "progress",
                      attributes: {
                        draggable: "false",
                        contenteditable: "false",
                        hidden: null,
                        tabindex: "48"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "s",
                          attributes: {
                            hidden: null,
                            dir: "ltr",
                            contenteditable: "false",
                            draggable: "false"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "audio",
                              attributes: {
                                contenteditable: "false",
                                draggable: "true",
                                hidden: null,
                                preload: "auto"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "code",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "bdo",
                              attributes: {
                                contenteditable: "false",
                                dir: "ltr"
                              },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "i",
                          attributes: {
                            contenteditable: "true",
                            dir: "rtl",
                            tabindex: "789",
                            hidden: null
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "br",
                              children: [],
                              attributes: {}
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "cite",
                          attributes: { hidden: null },
                          children: [
                            {
                              type: "text",
                              value: "La cudji kitati gi bubhu dej nifmeb."
                            },
                            {
                              type: "text",
                              value: "Ac adi pivpo ulogme muwwen juozubup we."
                            },
                            {
                              type: "tag",
                              tag: "slot",
                              attributes: {
                                contenteditable: "",
                                tabindex: "-665",
                                dir: "auto",
                                draggable: "true"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "del",
                              attributes: {
                                style:
                                  "grid: subgrid / auto-flow dense minmax(auto , 92%); border-bottom-color: currentcolor; padding-inline-end: 804.9066pt;"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "audio",
                              attributes: {
                                hidden: null,
                                tabindex: "-533",
                                contenteditable: "true",
                                draggable: "true",
                                style:
                                  "font-variant-caps: normal; border-bottom-right-radius: 34% 633.4464Q; background-position: right center;"
                              },
                              children: []
                            }
                          ]
                        },
                        { type: "text", value: "Kut hoal." },
                        {
                          type: "text",
                          value: "Zicin lo mom fakfaw odbilob cose eni."
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "em",
                      attributes: { tabindex: "-580" },
                      children: [
                        {
                          type: "tag",
                          tag: "canvas",
                          attributes: { contenteditable: "false" },
                          children: [
                            { type: "text", value: "Mabefil iv." },
                            { type: "text", value: "Lelnoz uceudelu." },
                            {
                              type: "text",
                              value: "Udirifhuv juwa pe hurijsi."
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "map",
                          attributes: {},
                          children: [
                            {
                              type: "tag",
                              tag: "strong",
                              attributes: { hidden: null, tabindex: "326" },
                              children: []
                            },
                            { type: "text", value: "Mab wihazino nubzo cojiv." }
                          ]
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "meter",
                      attributes: {},
                      children: [
                        {
                          type: "tag",
                          tag: "keygen",
                          children: [],
                          attributes: { dir: "rtl", draggable: "false" }
                        },
                        {
                          type: "tag",
                          tag: "bdi",
                          attributes: { dir: "auto", draggable: "true" },
                          children: [
                            {
                              type: "tag",
                              tag: "small",
                              attributes: {
                                draggable: "false",
                                contenteditable: "",
                                tabindex: "-640",
                                hidden: null
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "strong",
                              attributes: { contenteditable: "" },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "svg",
                          attributes: {
                            contenteditable: "false",
                            draggable: "false",
                            style:
                              "input-security: none; animation-iteration-count: 490463291244544; border-end-end-radius: -282.569vh 28%; padding-right: 914.8961vh;"
                          },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "em",
                          attributes: {
                            tabindex: "-294",
                            contenteditable: "",
                            draggable: "true",
                            dir: "auto"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "audio",
                              attributes: {
                                hidden: null,
                                contenteditable: "",
                                tabindex: "-407",
                                dir: "rtl",
                                style: "column-width: -778.0038px;"
                              },
                              children: []
                            },
                            {
                              type: "text",
                              value: "Cazruva ete cawijeg muodju si."
                            },
                            {
                              type: "tag",
                              tag: "small",
                              attributes: {
                                dir: "ltr",
                                draggable: "false",
                                tabindex: "-358",
                                contenteditable: "true"
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
                              tag: "sup",
                              attributes: { tabindex: "555", dir: "rtl" },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "dfn",
                          attributes: { draggable: "false" },
                          children: [
                            {
                              type: "tag",
                              tag: "em",
                              attributes: {
                                draggable: "true",
                                style:
                                  "text-decoration: -456.9059rem; font-variant-east-asian: normal;"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "math",
                              attributes: { hidden: null },
                              children: []
                            },
                            {
                              type: "text",
                              value: "Wuc najos oc deeveawu muluvad piopwob."
                            },
                            {
                              type: "tag",
                              tag: "select",
                              attributes: {
                                style:
                                  "padding-block-end: 97%; print-color-adjust: exact;"
                              },
                              children: []
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
          attributes: {
            hidden: null,
            tabindex: "-782",
            contenteditable: "true"
          },
          children: []
        },
        {
          type: "tag",
          tag: "figure",
          attributes: {},
          children: [
            {
              type: "tag",
              tag: "figcaption",
              attributes: { contenteditable: "true", tabindex: "-52" },
              children: [
                {
                  type: "tag",
                  tag: "strong",
                  attributes: { tabindex: "472", draggable: "false" },
                  children: [
                    {
                      type: "tag",
                      tag: "slot",
                      attributes: {
                        contenteditable: "true",
                        dir: "ltr",
                        hidden: null
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "q",
                          attributes: { contenteditable: "true" },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "s",
                          attributes: {
                            contenteditable: "",
                            hidden: null,
                            dir: "auto",
                            draggable: "false",
                            style: "font-size: 71%; border-bottom-style: solid;"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "i",
                              attributes: { contenteditable: "false" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "output",
                              attributes: {
                                contenteditable: "",
                                draggable: "true",
                                dir: "auto",
                                hidden: null
                              },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "cite",
                          attributes: { draggable: "true" },
                          children: [
                            {
                              type: "tag",
                              tag: "a",
                              attributes: { dir: "rtl" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "input",
                              children: [],
                              attributes: {
                                hidden: null,
                                tabindex: "-547",
                                type: "text"
                              }
                            },
                            {
                              type: "tag",
                              tag: "bdo",
                              attributes: {
                                hidden: null,
                                dir: "ltr",
                                tabindex: "-900"
                              },
                              children: []
                            },
                            {
                              type: "text",
                              value:
                                "Pis va uwerup unaleg tatutse amo fohujoje."
                            },
                            {
                              type: "text",
                              value: "Icocod ponamu zej vucjut rimira pecovuz."
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "b",
                          attributes: {
                            draggable: "false",
                            hidden: null,
                            dir: "ltr",
                            style:
                              "transition: 139.0796ms cubic-bezier(0 , -5152891958460416 , 0 , -8751574054600704) 658.7833s all; overscroll-behavior-block: auto; list-style: element(#ti) outside 'pobbojom'; border-top-left-radius: 22% 17%;"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "strong",
                              attributes: {},
                              children: []
                            },
                            { type: "text", value: "Ozuci lodooc." },
                            {
                              type: "text",
                              value:
                                "Jepuge liphuf ucaefoha fujezso simzu li ovumoalu."
                            },
                            {
                              type: "tag",
                              tag: "map",
                              attributes: {
                                draggable: "true",
                                contenteditable: ""
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "a",
                              attributes: {
                                contenteditable: "",
                                tabindex: "-941",
                                dir: "rtl",
                                hidden: null
                              },
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
              tag: "svg",
              attributes: {},
              children: [
                {
                  type: "tag",
                  tag: "article",
                  attributes: {
                    contenteditable: "",
                    draggable: "true",
                    hidden: null,
                    tabindex: "-425",
                    style:
                      "border-bottom-width: thick; -webkit-line-clamp: -88;"
                  },
                  children: [
                    { type: "text", value: "Ne couhwo muste." },
                    {
                      type: "tag",
                      tag: "data",
                      attributes: {
                        dir: "ltr",
                        hidden: null,
                        draggable: "true",
                        contenteditable: ""
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "strong",
                          attributes: {
                            hidden: null,
                            dir: "rtl",
                            tabindex: "-78"
                          },
                          children: [
                            { type: "text", value: "Lojor rat." },
                            {
                              type: "text",
                              value: "Feznudgoc odowu jacadge fudzor omke."
                            },
                            {
                              type: "tag",
                              tag: "output",
                              attributes: {
                                contenteditable: "false",
                                draggable: "true",
                                style: "scale: -8801511228309504;"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "progress",
                              attributes: {
                                hidden: null,
                                tabindex: "-559",
                                draggable: "false"
                              },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "data",
                          attributes: { draggable: "false", hidden: null },
                          children: [
                            {
                              type: "tag",
                              tag: "bdo",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "strong",
                              attributes: {
                                contenteditable: "",
                                draggable: "false",
                                tabindex: "673",
                                dir: "auto",
                                style:
                                  "content: none; mask-border-repeat: space;"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "var",
                              attributes: {
                                hidden: null,
                                contenteditable: "",
                                tabindex: "-549",
                                dir: "ltr"
                              },
                              children: []
                            },
                            { type: "text", value: "Tumo saajci vecge." }
                          ]
                        }
                      ]
                    },
                    { type: "text", value: "Tortafmos uhju ubapu um." }
                  ]
                },
                {
                  type: "tag",
                  tag: "h5",
                  attributes: {},
                  children: [
                    {
                      type: "tag",
                      tag: "cite",
                      attributes: { dir: "rtl" },
                      children: []
                    },
                    {
                      type: "tag",
                      tag: "kbd",
                      attributes: { hidden: null },
                      children: [
                        {
                          type: "tag",
                          tag: "del",
                          attributes: {
                            contenteditable: "",
                            draggable: "false",
                            dir: "auto",
                            tabindex: "-297",
                            style:
                              "mask-repeat: repeat-y; offset-rotate: auto -253.4804grad; mask-border: 25% 87% / round alpha; text-decoration: spelling-error;"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "area",
                              children: [],
                              attributes: {
                                shape: "rect",
                                dir: "auto",
                                tabindex: "214",
                                draggable: "false",
                                hidden: null,
                                style:
                                  "align-items: baseline; text-decoration-skip-ink: none; text-orientation: sideways;"
                              }
                            },
                            {
                              type: "tag",
                              tag: "a",
                              attributes: {
                                dir: "rtl",
                                hidden: null,
                                tabindex: "-997",
                                draggable: "true"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "u",
                              attributes: {
                                hidden: null,
                                contenteditable: "",
                                draggable: "false",
                                style:
                                  "text-align-last: auto; text-justify: auto; box-shadow: none; all: inherit; box-shadow: -569.3113px 194.1915Q 189.6064ch -255.5992vw  rosybrown;"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "keygen",
                              children: [],
                              attributes: { draggable: "false" }
                            }
                          ]
                        },
                        { type: "text", value: "Zespec musokev ivoat tuto." },
                        {
                          type: "tag",
                          tag: "s",
                          attributes: {
                            draggable: "true",
                            dir: "auto",
                            hidden: null,
                            tabindex: "64"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "keygen",
                              children: [],
                              attributes: {
                                draggable: "false",
                                contenteditable: "",
                                style: "position: sticky; align-self: baseline;"
                              }
                            },
                            { type: "text", value: "Pa opiruvic." },
                            {
                              type: "tag",
                              tag: "output",
                              attributes: {
                                dir: "rtl",
                                contenteditable: "true",
                                hidden: null,
                                tabindex: "536"
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
                  tag: "small",
                  attributes: { contenteditable: "false" },
                  children: [
                    {
                      type: "tag",
                      tag: "code",
                      attributes: {
                        tabindex: "-877",
                        style:
                          "font-variant: normal; scroll-padding-block-start: 717.6336vh; overflow-anchor: none; flex-direction: column-reverse; perspective: none;"
                      },
                      children: []
                    },
                    {
                      type: "tag",
                      tag: "var",
                      attributes: {
                        dir: "ltr",
                        contenteditable: "false",
                        tabindex: "385"
                      },
                      children: []
                    },
                    {
                      type: "tag",
                      tag: "progress",
                      attributes: {
                        contenteditable: "true",
                        draggable: "false"
                      },
                      children: [
                        { type: "text", value: "Ive ta dise ce." },
                        {
                          type: "text",
                          value: "Ke sozmisim mosgimi tamdondu."
                        },
                        { type: "text", value: "Urgak vesokoto viruhor bos." }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "mark",
                      attributes: {
                        draggable: "false",
                        hidden: null,
                        tabindex: "203",
                        style:
                          "column-fill: balance-all; grid-template-areas: 'mulbalo';"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "dfn",
                          attributes: {},
                          children: [
                            {
                              type: "tag",
                              tag: "audio",
                              attributes: { dir: "rtl", tabindex: "-70" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "wbr",
                              children: [],
                              attributes: {
                                contenteditable: "true",
                                draggable: "false",
                                dir: "ltr"
                              }
                            },
                            {
                              type: "tag",
                              tag: "input",
                              children: [],
                              attributes: {
                                multiple: null,
                                type: "url",
                                style:
                                  "border-start-end-radius: 48% 263.9774vh; border-block-end-color: lch(77% 865274014203904 none / none);"
                              }
                            },
                            {
                              type: "tag",
                              tag: "wbr",
                              children: [],
                              attributes: {
                                hidden: null,
                                contenteditable: "true"
                              }
                            }
                          ]
                        },
                        {
                          type: "text",
                          value:
                            "Vaik igsikzuv todni jefkagguk wisrawaj nozmem."
                        },
                        {
                          type: "text",
                          value: "Tuteh afve sug zut zuacwoj ga."
                        },
                        {
                          type: "tag",
                          tag: "input",
                          children: [],
                          attributes: { hidden: null, type: "month" }
                        }
                      ]
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "h4",
                  attributes: { tabindex: "325" },
                  children: [
                    {
                      type: "tag",
                      tag: "sub",
                      attributes: { tabindex: "707" },
                      children: []
                    },
                    {
                      type: "tag",
                      tag: "slot",
                      attributes: {
                        tabindex: "807",
                        hidden: null,
                        contenteditable: "false",
                        dir: "ltr"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "area",
                          children: [],
                          attributes: {}
                        },
                        {
                          type: "tag",
                          tag: "embed",
                          children: [],
                          attributes: { src: "!5EPbxfWxrbbb4^U04", title: "" }
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
