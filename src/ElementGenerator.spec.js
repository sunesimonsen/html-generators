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
                            children: []
                          },
                          { type: "text", value: "Los vendijjeg ukiipi." },
                          {
                            type: "tag",
                            tag: "cite",
                            attributes: {
                              dir: "rtl",
                              draggable: "false",
                              tabindex: "-230"
                            },
                            children: []
                          }
                        ]
                      },
                      { type: "text", value: "Taf nuhijoow ru uvake jel." },
                      {
                        type: "tag",
                        tag: "button",
                        attributes: { type: "reset" },
                        children: [
                          {
                            type: "tag",
                            tag: "script",
                            children: [
                              { type: "text", value: 'console.log("hello")' }
                            ],
                            attributes: {}
                          },
                          {
                            type: "tag",
                            tag: "b",
                            attributes: {
                              hidden: null,
                              tabindex: "295",
                              dir: "ltr"
                            },
                            children: []
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "cite",
                        attributes: {
                          contenteditable: "",
                          draggable: "true",
                          hidden: null
                        },
                        children: [
                          { type: "text", value: "Pogoc abijasa." },
                          {
                            type: "tag",
                            tag: "textarea",
                            attributes: {
                              maxlength: "823",
                              minlength: "360",
                              style:
                                "list-style-position: outside; resize: both;"
                            },
                            children: [
                              {
                                type: "text",
                                value:
                                  "Cugi wodfuz katji cebuc wocafig dof jozwom."
                              }
                            ]
                          }
                        ]
                      },
                      { type: "text", value: "Maglas ka da ura." }
                    ]
                  },
                  {
                    type: "tag",
                    tag: "area",
                    children: [],
                    attributes: { contenteditable: "true", shape: "rect" }
                  }
                ]
              },
              {
                type: "tag",
                tag: "samp",
                attributes: { hidden: null, dir: "rtl" },
                children: []
              },
              {
                type: "tag",
                tag: "audio",
                attributes: { draggable: "true" },
                children: [
                  {
                    type: "tag",
                    tag: "sup",
                    attributes: { tabindex: "643", hidden: null, dir: "rtl" },
                    children: [
                      {
                        type: "tag",
                        tag: "progress",
                        attributes: {},
                        children: []
                      },
                      {
                        type: "tag",
                        tag: "u",
                        attributes: {
                          contenteditable: "true",
                          style: "border-block-end-style: groove;"
                        },
                        children: [
                          { type: "text", value: "Votu wiuhimo susde." },
                          {
                            type: "tag",
                            tag: "input",
                            children: [],
                            attributes: { readonly: null, type: "radio" }
                          },
                          {
                            type: "tag",
                            tag: "abbr",
                            attributes: {
                              tabindex: "751",
                              draggable: "false",
                              hidden: null,
                              contenteditable: "",
                              style:
                                "text-emphasis-color: #815838; isolation: isolate;"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "del",
                            attributes: {
                              dir: "auto",
                              style:
                                "background-clip: border-box; transition-duration: 810.764s;"
                            },
                            children: []
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "code",
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
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "bdi",
                            attributes: {},
                            children: []
                          },
                          { type: "text", value: "Imedud epuecwe." },
                          {
                            type: "tag",
                            tag: "i",
                            attributes: {},
                            children: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: "tag",
                    tag: "s",
                    attributes: {
                      hidden: null,
                      contenteditable: "",
                      tabindex: "581",
                      dir: "auto"
                    },
                    children: [
                      {
                        type: "text",
                        value: "Hudiha sadod zorhukne rek buzbewru."
                      },
                      {
                        type: "tag",
                        tag: "wbr",
                        children: [],
                        attributes: {
                          tabindex: "75",
                          contenteditable: "",
                          hidden: null,
                          dir: "rtl"
                        }
                      },
                      {
                        type: "tag",
                        tag: "iframe",
                        attributes: {
                          dir: "rtl",
                          draggable: "false",
                          hidden: null,
                          title: "^u((e$DHhTyumnV"
                        },
                        children: [
                          { type: "text", value: "Cehul remuved cuw." }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "bdi",
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
                        tag: "input",
                        children: [],
                        attributes: { type: "button" }
                      }
                    ]
                  },
                  {
                    type: "tag",
                    tag: "b",
                    attributes: { hidden: null },
                    children: [
                      {
                        type: "tag",
                        tag: "button",
                        attributes: { hidden: null, type: "button" },
                        children: [
                          {
                            type: "tag",
                            tag: "b",
                            attributes: {
                              hidden: null,
                              tabindex: "914",
                              dir: "rtl",
                              draggable: "false"
                            },
                            children: []
                          },
                          {
                            type: "text",
                            value: "Hegaog huzob dapil pevrunit fibzo wuffob."
                          },
                          {
                            type: "text",
                            value: "Soknaw riawjo wutnu zenatij ti ci di."
                          },
                          { type: "text", value: "Wogo ivpo." },
                          {
                            type: "text",
                            value: "Geb kegara lelam kac topuoj ju ziuflul."
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "select",
                        attributes: { disabled: null },
                        children: [
                          {
                            type: "tag",
                            tag: "script",
                            children: [
                              { type: "text", value: 'console.log("hello")' }
                            ],
                            attributes: {
                              integrity: "ch#HANDrht2BnbP",
                              contenteditable: "false",
                              nomodule: null,
                              dir: "ltr",
                              style:
                                "margin-block-end: -533.5672vmin; flex-direction: column;"
                            }
                          },
                          {
                            type: "tag",
                            tag: "optgroup",
                            attributes: { tabindex: "-584", dir: "auto" },
                            children: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: "tag",
                    tag: "u",
                    attributes: { draggable: "true", dir: "rtl", hidden: null },
                    children: [
                      {
                        type: "tag",
                        tag: "object",
                        attributes: { contenteditable: "true" },
                        children: [
                          {
                            type: "tag",
                            tag: "cite",
                            attributes: {
                              contenteditable: "",
                              tabindex: "18",
                              draggable: "false",
                              dir: "auto"
                            },
                            children: []
                          },
                          {
                            type: "text",
                            value:
                              "Uwuaz fo orisihzef wipora zecpawki lefi ufe."
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "mark",
                        attributes: {
                          tabindex: "-760",
                          contenteditable: "true",
                          hidden: null
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "span",
                            attributes: {
                              tabindex: "-933",
                              hidden: null,
                              draggable: "false",
                              dir: "auto"
                            },
                            children: []
                          },
                          { type: "text", value: "Zon zat godfatvo levmot." }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "picture",
                        attributes: { draggable: "false", tabindex: "-540" },
                        children: [
                          {
                            type: "tag",
                            tag: "script",
                            children: [
                              { type: "text", value: 'console.log("hello")' }
                            ],
                            attributes: {
                              async: null,
                              src: "yZkm6$TKN2%Q6",
                              style:
                                "contain: content; box-decoration-break: clone; paint-order: normal; animation-play-state: running;"
                            }
                          },
                          {
                            type: "tag",
                            tag: "source",
                            children: [],
                            attributes: { hidden: null, tabindex: "-103" }
                          },
                          {
                            type: "tag",
                            tag: "img",
                            children: [],
                            attributes: { src: "HjSDL6Nl" }
                          }
                        ]
                      },
                      { type: "text", value: "Wapvimhij uwsemi taw pahas." },
                      {
                        type: "text",
                        value: "Diwawa fonsaco ewu defuf ohu hin cogu."
                      }
                    ]
                  },
                  {
                    type: "tag",
                    tag: "output",
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
                            "border-inline-start-color: hsl(8036501640183808 , 76% , 37%);"
                        },
                        children: [
                          {
                            type: "text",
                            value: "Mubfur mamhevi det iphoc usetumur me cap."
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "data",
                        attributes: {},
                        children: [{ type: "text", value: "Sok itokelen." }]
                      },
                      {
                        type: "tag",
                        tag: "textarea",
                        attributes: {},
                        children: [
                          {
                            type: "text",
                            value: "Zinu oz favpuwaf bizi meftuud."
                          }
                        ]
                      },
                      {
                        type: "text",
                        value: "Vebuwdun citi gabfejus sopan mijpibfu."
                      }
                    ]
                  }
                ]
              },
              { type: "text", value: "Do cejijwoh oleowa geresu pun to." },
              { type: "text", value: "Ce posilcu boz sa." }
            ]
          },
          {
            type: "tag",
            tag: "select",
            attributes: {
              hidden: null,
              contenteditable: "true",
              style: "margin-inline: auto;"
            },
            children: [
              {
                type: "tag",
                tag: "template",
                attributes: { hidden: null, draggable: "true", dir: "auto" },
                children: [
                  {
                    type: "tag",
                    tag: "video",
                    attributes: {},
                    children: [
                      {
                        type: "tag",
                        tag: "title",
                        attributes: { contenteditable: "" },
                        children: [{ type: "text", value: "Duk novelru tihi." }]
                      },
                      {
                        type: "tag",
                        tag: "math",
                        attributes: {},
                        children: []
                      },
                      {
                        type: "tag",
                        tag: "textarea",
                        attributes: {
                          readonly: null,
                          cols: "626",
                          tabindex: "427",
                          autocomplete: "off",
                          disabled: null
                        },
                        children: [{ type: "text", value: "Ubagij aculadib." }]
                      }
                    ]
                  },
                  {
                    type: "tag",
                    tag: "video",
                    attributes: { draggable: "true", hidden: null },
                    children: []
                  },
                  { type: "text", value: "Rohac jejog jaubi mo." }
                ]
              },
              {
                type: "tag",
                tag: "script",
                children: [{ type: "text", value: 'console.log("hello")' }],
                attributes: {}
              },
              {
                type: "tag",
                tag: "script",
                children: [{ type: "text", value: 'console.log("hello")' }],
                attributes: {
                  src: "%T]m3]erD*9Wr",
                  defer: null,
                  nomodule: null,
                  draggable: "false",
                  contenteditable: "true",
                  style:
                    "background: space left 93% bottom -479.5333mm / contain fixed border-box lightslategrey repeat-x; mask-origin: view-box;"
                }
              },
              {
                type: "tag",
                tag: "template",
                attributes: { tabindex: "-273", contenteditable: "true" },
                children: []
              },
              {
                type: "tag",
                tag: "template",
                attributes: {
                  tabindex: "932",
                  hidden: null,
                  contenteditable: "false",
                  dir: "ltr"
                },
                children: [
                  {
                    type: "tag",
                    tag: "a",
                    attributes: {},
                    children: [
                      {
                        type: "tag",
                        tag: "svg",
                        attributes: {
                          tabindex: "593",
                          contenteditable: "false",
                          dir: "rtl",
                          draggable: "true"
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "del",
                            attributes: {
                              dir: "auto",
                              hidden: null,
                              contenteditable: "true"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "section",
                            attributes: {
                              tabindex: "189",
                              draggable: "false",
                              contenteditable: "false"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "svg",
                            attributes: {
                              contenteditable: "false",
                              hidden: null
                            },
                            children: []
                          }
                        ]
                      },
                      {
                        type: "text",
                        value: "Buesiba te tagtaata za uvmo zat."
                      },
                      {
                        type: "tag",
                        tag: "bdi",
                        attributes: {
                          contenteditable: "",
                          draggable: "true",
                          hidden: null,
                          tabindex: "771"
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "b",
                            attributes: {
                              tabindex: "130",
                              draggable: "false",
                              hidden: null,
                              contenteditable: "true",
                              style: "animation-duration: 643.0259ms;"
                            },
                            children: []
                          },
                          { type: "text", value: "Hobfeuw nuro jevzova oza." },
                          {
                            type: "tag",
                            tag: "svg",
                            attributes: {},
                            children: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: "tag",
                    tag: "s",
                    attributes: {
                      tabindex: "-760",
                      dir: "rtl",
                      draggable: "false",
                      hidden: null
                    },
                    children: [
                      {
                        type: "tag",
                        tag: "script",
                        children: [
                          { type: "text", value: 'console.log("hello")' }
                        ],
                        attributes: { contenteditable: "false" }
                      },
                      {
                        type: "tag",
                        tag: "code",
                        attributes: {
                          dir: "rtl",
                          draggable: "false",
                          hidden: null,
                          style: "border-right: thick solid currentcolor;"
                        },
                        children: [
                          {
                            type: "text",
                            value: "Tatpasa hinhi ti so ulbi mel wepzuzibo."
                          },
                          {
                            type: "tag",
                            tag: "br",
                            children: [],
                            attributes: {
                              hidden: null,
                              contenteditable: "false"
                            }
                          },
                          { type: "text", value: "Po kis." }
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
        tag: "code",
        attributes: {},
        children: [
          {
            type: "tag",
            tag: "meter",
            attributes: {},
            children: [
              { type: "text", value: "Fugor gafdupwu opa joworo." },
              { type: "text", value: "Tucorin nipranas hod tehnes ako fi." }
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
                              children: []
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
                        dir: "auto",
                        style:
                          "text-decoration-thickness: from-font; text-emphasis: hsl(3609325771685888 73% 85% / 89%) sesame filled; top: 570.6813vmin; outline-width: medium; mask-clip: margin-box;"
                      }
                    },
                    {
                      type: "tag",
                      tag: "area",
                      children: [],
                      attributes: {
                        shape: "circle",
                        contenteditable: "false",
                        dir: "rtl"
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
            dir: "rtl",
            contenteditable: "",
            draggable: "true",
            hidden: null
          },
          children: [
            {
              type: "tag",
              tag: "ruby",
              attributes: { draggable: "true", contenteditable: "" },
              children: [
                {
                  type: "tag",
                  tag: "rtc",
                  attributes: { tabindex: "-503", hidden: null },
                  children: [
                    {
                      type: "tag",
                      tag: "cite",
                      attributes: {
                        contenteditable: "false",
                        tabindex: "-915",
                        draggable: "true"
                      },
                      children: []
                    },
                    {
                      type: "tag",
                      tag: "mark",
                      attributes: {
                        tabindex: "964",
                        dir: "auto",
                        hidden: null,
                        draggable: "true"
                      },
                      children: [
                        {
                          type: "text",
                          value:
                            "Pa muvona to fejuhera lihakhup patofcok ivbedin."
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "abbr",
                      attributes: {
                        contenteditable: "false",
                        dir: "ltr",
                        hidden: null
                      },
                      children: [
                        { type: "text", value: "Kizef navgiro waumo ak." },
                        { type: "text", value: "Zaba ekvicod hiwa." },
                        {
                          type: "tag",
                          tag: "em",
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
                    {
                      type: "tag",
                      tag: "rt",
                      attributes: { tabindex: "23" },
                      children: [
                        {
                          type: "tag",
                          tag: "bdo",
                          attributes: {
                            hidden: null,
                            dir: "ltr",
                            tabindex: "418"
                          },
                          children: [
                            {
                              type: "text",
                              value: "Anumajzi onumo zecimpuk ic."
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "rtc",
                  attributes: { contenteditable: "" },
                  children: [
                    {
                      type: "tag",
                      tag: "rt",
                      attributes: {
                        draggable: "true",
                        tabindex: "-293",
                        dir: "ltr",
                        hidden: null
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "var",
                          attributes: {},
                          children: [
                            {
                              type: "tag",
                              tag: "select",
                              attributes: {
                                dir: "auto",
                                disabled: null,
                                required: null,
                                autofocus: null,
                                hidden: null
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "iframe",
                              attributes: { tabindex: "706", title: "g" },
                              children: [
                                {
                                  type: "text",
                                  value: "Itowsoj cisro ihmi mi."
                                }
                              ]
                            },
                            {
                              type: "text",
                              value: "Dod zorhukne rek buzbewru cemucite."
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "span",
                          attributes: {
                            dir: "rtl",
                            tabindex: "-902",
                            draggable: "true"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "audio",
                              attributes: {
                                draggable: "true",
                                preload: "",
                                contenteditable: "true",
                                dir: "rtl",
                                hidden: null
                              },
                              children: []
                            }
                          ]
                        },
                        { type: "text", value: "Cehul remuved cuw." },
                        {
                          type: "tag",
                          tag: "video",
                          attributes: {
                            draggable: "true",
                            hidden: null,
                            preload: "auto",
                            dir: "auto",
                            tabindex: "552",
                            style: "font-variant-position: sub;"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "wbr",
                              children: [],
                              attributes: {
                                tabindex: "-415",
                                draggable: "true",
                                hidden: null,
                                contenteditable: "",
                                style:
                                  "shape-outside: cross-fade(cross-fade(element(#wusleg) ) );"
                              }
                            },
                            {
                              type: "text",
                              value:
                                "Gev tajdapil pevrunit fibzo wuffob simikis pitmep."
                            },
                            {
                              type: "tag",
                              tag: "select",
                              attributes: {
                                required: null,
                                disabled: null,
                                multiple: null
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "var",
                              attributes: { contenteditable: "", hidden: null },
                              children: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "embed",
                      children: [],
                      attributes: {
                        dir: "ltr",
                        src: "DkZVnnZzE%#J",
                        title: "mSoqd8mzuzncgO"
                      }
                    },
                    {
                      type: "tag",
                      tag: "rt",
                      attributes: { dir: "rtl", contenteditable: "" },
                      children: [
                        {
                          type: "text",
                          value: "Vamfuj ju ziuflul zem zabha iviracnem."
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "rt",
                      attributes: { dir: "ltr" },
                      children: [
                        { type: "text", value: "Kil apparon." },
                        {
                          type: "tag",
                          tag: "embed",
                          children: [],
                          attributes: {
                            tabindex: "-337",
                            draggable: "false",
                            src: "QsAK]yS*rahql",
                            title: "l!ngv",
                            style: "text-decoration-thickness: -839.5325ch;"
                          }
                        },
                        {
                          type: "text",
                          value: "Wu ikuwuaz fo orisihzef wipora."
                        },
                        {
                          type: "tag",
                          tag: "meter",
                          attributes: {
                            hidden: null,
                            tabindex: "154",
                            contenteditable: "true"
                          },
                          children: [
                            {
                              type: "text",
                              value: "Kodedbod noaj eto duuwela wibzatzet."
                            },
                            {
                              type: "tag",
                              tag: "keygen",
                              children: [],
                              attributes: {}
                            },
                            {
                              type: "tag",
                              tag: "audio",
                              attributes: {
                                style:
                                  "border-top-style: groove; object-position: -367.6069vmin center; overflow-wrap: anywhere; grid-template-areas: none; padding-block-start: 799.3349pc;"
                              },
                              children: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "rt",
                      attributes: { draggable: "false" },
                      children: [
                        { type: "text", value: "Timuto fattim." },
                        {
                          type: "tag",
                          tag: "input",
                          children: [],
                          attributes: {
                            spellcheck: "true",
                            disabled: null,
                            multiple: null,
                            type: "submit"
                          }
                        },
                        {
                          type: "tag",
                          tag: "meter",
                          attributes: {
                            hidden: null,
                            dir: "ltr",
                            contenteditable: "true",
                            tabindex: "457"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "noscript",
                              attributes: { hidden: null, tabindex: "694" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "data",
                              attributes: { draggable: "true" },
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
                  tag: "rb",
                  attributes: {
                    tabindex: "-462",
                    dir: "auto",
                    hidden: null,
                    contenteditable: "true",
                    style:
                      "mask-image: none; left: 222.9085ex; animation-delay: 452.1912s; mask-origin: view-box; border-block-start-color: #eb333b;"
                  },
                  children: [
                    {
                      type: "tag",
                      tag: "abbr",
                      attributes: {
                        contenteditable: "false",
                        draggable: "false"
                      },
                      children: []
                    },
                    {
                      type: "tag",
                      tag: "button",
                      attributes: { type: "submit" },
                      children: []
                    },
                    {
                      type: "tag",
                      tag: "img",
                      children: [],
                      attributes: {
                        dir: "rtl",
                        contenteditable: "true",
                        crossorigin: "anonymous",
                        decoding: "async",
                        src: "yp"
                      }
                    },
                    { type: "text", value: "Deru kijwuse." }
                  ]
                }
              ]
            },
            {
              type: "tag",
              tag: "figcaption",
              attributes: {},
              children: [
                { type: "text", value: "Go uzfi cizpe cemet gitanu." },
                {
                  type: "tag",
                  tag: "kbd",
                  attributes: { draggable: "true", contenteditable: "true" },
                  children: [
                    {
                      type: "tag",
                      tag: "ins",
                      attributes: {},
                      children: [
                        {
                          type: "tag",
                          tag: "slot",
                          attributes: {
                            hidden: null,
                            tabindex: "222",
                            dir: "ltr",
                            contenteditable: ""
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "math",
                              attributes: { overflow: "truncate" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "iframe",
                              attributes: {
                                contenteditable: "false",
                                tabindex: "831",
                                src: "XkpEvx%g",
                                title: "2p!bjn#RVF0%^"
                              },
                              children: [
                                { type: "text", value: "Len ep zinu oz." }
                              ]
                            },
                            {
                              type: "tag",
                              tag: "blockquote",
                              attributes: {
                                hidden: null,
                                contenteditable: "true",
                                tabindex: "895"
                              },
                              children: []
                            }
                          ]
                        },
                        { type: "text", value: "Perop haeku ifo buw." },
                        {
                          type: "tag",
                          tag: "q",
                          attributes: { contenteditable: "", hidden: null },
                          children: [
                            {
                              type: "tag",
                              tag: "sub",
                              attributes: {
                                style: "border-end-start-radius: 800.0373ex;"
                              },
                              children: []
                            },
                            {
                              type: "text",
                              value: "Sopan mijpibfu cazeceh orjon moodoge jan."
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "strong",
                          attributes: {
                            contenteditable: "",
                            hidden: null,
                            dir: "rtl",
                            draggable: "false"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "b",
                              attributes: {
                                hidden: null,
                                draggable: "true",
                                style:
                                  "border-block: thin none #1a645a; font: icon; border-block-end-color: currentcolor; text-overflow: 'ori'; list-style-image: url(uvo);"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "ins",
                              attributes: {
                                tabindex: "850",
                                hidden: null,
                                dir: "ltr"
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
                            tabindex: "926",
                            autofocus: null,
                            type: "submit"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "em",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "text",
                              value:
                                "Alocul epa lenpa rekmanam vespuk hibiz if."
                            },
                            {
                              type: "tag",
                              tag: "dfn",
                              attributes: {
                                dir: "auto",
                                hidden: null,
                                style:
                                  "background-clip: content-box; border-block-end: medium #dfa94d;"
                              },
                              children: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "small",
                      attributes: {
                        dir: "rtl",
                        hidden: null,
                        contenteditable: "true",
                        draggable: "false"
                      },
                      children: [{ type: "text", value: "Juwe jaubi mo oz." }]
                    },
                    {
                      type: "text",
                      value: "Diuvoni ufocekepe pagge gu lucufuonu hezir."
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "address",
                  attributes: {
                    contenteditable: "true",
                    hidden: null,
                    draggable: "true",
                    tabindex: "537"
                  },
                  children: [
                    {
                      type: "tag",
                      tag: "bdo",
                      attributes: {
                        contenteditable: "true",
                        hidden: null,
                        tabindex: "87",
                        dir: "rtl"
                      },
                      children: [
                        { type: "text", value: "Ufvu eci pianevin wuavoed." },
                        {
                          type: "tag",
                          tag: "area",
                          children: [],
                          attributes: {
                            contenteditable: "false",
                            hidden: null,
                            dir: "auto",
                            draggable: "true",
                            shape: "poly"
                          }
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "img",
                      children: [],
                      attributes: { dir: "auto", src: "8", decoding: "sync" }
                    },
                    {
                      type: "text",
                      value: "An pebjakun hebit debikeje osaw zaz wo."
                    },
                    {
                      type: "tag",
                      tag: "textarea",
                      attributes: {},
                      children: [
                        { type: "text", value: "Taev vultanlac kel hobfeuw." }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "table",
                      attributes: { contenteditable: "false", dir: "auto" },
                      children: [
                        {
                          type: "tag",
                          tag: "colgroup",
                          attributes: {},
                          children: [
                            {
                              type: "tag",
                              tag: "col",
                              children: [],
                              attributes: {
                                span: "944",
                                tabindex: "-858",
                                contenteditable: "false",
                                hidden: null,
                                draggable: "true"
                              }
                            },
                            {
                              type: "tag",
                              tag: "template",
                              attributes: { draggable: "false" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "col",
                              children: [],
                              attributes: { span: "725" }
                            },
                            {
                              type: "tag",
                              tag: "col",
                              children: [],
                              attributes: { dir: "ltr" }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "h3",
                  attributes: {
                    hidden: null,
                    dir: "rtl",
                    tabindex: "969",
                    style: "tab-size: 56%; border-image-width: auto;"
                  },
                  children: [
                    { type: "tag", tag: "slot", attributes: {}, children: [] },
                    {
                      type: "tag",
                      tag: "span",
                      attributes: {
                        tabindex: "-482",
                        hidden: null,
                        dir: "ltr",
                        contenteditable: "true",
                        style:
                          "overflow-x: hidden; grid-auto-rows: minmax(22% , min-content); border-inline-color: rgb(58%); clear: both;"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "wbr",
                          children: [],
                          attributes: { tabindex: "757", draggable: "false" }
                        },
                        {
                          type: "text",
                          value: "Poc du bite roohpi lab lefugor gafdupwu."
                        },
                        {
                          type: "tag",
                          tag: "audio",
                          attributes: {},
                          children: [
                            {
                              type: "text",
                              value: "Corinali ranas hod tehnes ako."
                            },
                            {
                              type: "tag",
                              tag: "em",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "svg",
                              attributes: {
                                contenteditable: "false",
                                draggable: "false"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "progress",
                              attributes: {
                                contenteditable: "",
                                tabindex: "-30",
                                dir: "ltr"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "i",
                              attributes: {},
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "input",
                          children: [],
                          attributes: {
                            capture: null,
                            multiple: null,
                            readonly: null,
                            type: "radio"
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "embed",
                  children: [],
                  attributes: {
                    contenteditable: "false",
                    src: "S#S%6FWu",
                    title: "^ApCUIU92rj5"
                  }
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
            contenteditable: "false",
            dir: "rtl",
            tabindex: "-413",
            style:
              "grid-column-start: auto; border-block-end-width: thick; font-variant-ligatures: none;"
          },
          children: [
            {
              type: "tag",
              tag: "figcaption",
              attributes: { tabindex: "-258" },
              children: []
            },
            {
              type: "tag",
              tag: "p",
              attributes: { draggable: "false" },
              children: []
            },
            { type: "text", value: "Neicfe kofil tur la." }
          ]
        },
        {
          type: "tag",
          tag: "figure",
          attributes: { contenteditable: "true" },
          children: [
            {
              type: "tag",
              tag: "select",
              attributes: {
                tabindex: "57",
                autofocus: null,
                disabled: null,
                multiple: null
              },
              children: [
                {
                  type: "tag",
                  tag: "template",
                  attributes: {
                    style:
                      "border-bottom-style: dotted; grid-template-areas: none; top: -367.6878cm; left: 4%;"
                  },
                  children: [
                    {
                      type: "tag",
                      tag: "video",
                      attributes: { hidden: null },
                      children: [
                        {
                          type: "tag",
                          tag: "del",
                          attributes: {},
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "input",
                          children: [],
                          attributes: {
                            type: "date",
                            draggable: "true",
                            inputmode: "search"
                          }
                        },
                        {
                          type: "tag",
                          tag: "iframe",
                          attributes: {
                            src: "9#@Q4",
                            tabindex: "-931",
                            dir: "auto",
                            draggable: "false",
                            title: "p*W9DXWQhzWl]S"
                          },
                          children: [
                            {
                              type: "text",
                              value:
                                "Isose ipzevit iteetde behlok lemse neci vozim."
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "button",
                          attributes: { tabindex: "952", type: "button" },
                          children: [
                            {
                              type: "tag",
                              tag: "i",
                              attributes: { tabindex: "18", draggable: "true" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "canvas",
                              attributes: {
                                hidden: null,
                                contenteditable: "true",
                                draggable: "false",
                                dir: "rtl",
                                style: "top: 35%;"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "progress",
                              attributes: {
                                style:
                                  "min-block-size: 52%; column-fill: balance-all; columns: auto auto;"
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
                              tag: "span",
                              attributes: {
                                dir: "ltr",
                                tabindex: "181",
                                draggable: "false"
                              },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "canvas",
                          attributes: {
                            draggable: "false",
                            contenteditable: "true",
                            tabindex: "-256"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "track",
                              children: [],
                              attributes: {}
                            },
                            {
                              type: "tag",
                              tag: "span",
                              attributes: {
                                contenteditable: "false",
                                hidden: null,
                                tabindex: "885"
                              },
                              children: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "video",
                      attributes: { hidden: null },
                      children: [
                        {
                          type: "tag",
                          tag: "h3",
                          attributes: {
                            tabindex: "-255",
                            hidden: null,
                            draggable: "true",
                            contenteditable: ""
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "ruby",
                              attributes: {
                                style:
                                  "page-break-after: verso; shape-margin: -566.5204px;"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "bdo",
                              attributes: {
                                style:
                                  "offset-distance: 214.1881ex; margin-inline-end: 23%;"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "button",
                              attributes: {
                                autofocus: null,
                                type: "reset",
                                style:
                                  "border-image-outset: -4061521600577536; border-end-start-radius: 70%; overflow-anchor: auto;"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "output",
                              attributes: {
                                draggable: "false",
                                tabindex: "-128",
                                style:
                                  "padding-inline-start: 156.7738vmin; clip-path: none; border-block: medium; text-decoration-style: dotted;"
                              },
                              children: []
                            }
                          ]
                        }
                      ]
                    },
                    { type: "text", value: "He cimcot ti sor." },
                    {
                      type: "tag",
                      tag: "video",
                      attributes: {
                        dir: "ltr",
                        preload: "auto",
                        tabindex: "-662"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "blockquote",
                          attributes: {},
                          children: [
                            {
                              type: "text",
                              value: "Uti haudus revpapdo dotzarba."
                            },
                            {
                              type: "tag",
                              tag: "header",
                              attributes: { dir: "ltr" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "iframe",
                              attributes: {
                                contenteditable: "true",
                                title: "OLw9DuH*S#Ml&6KQ]P@"
                              },
                              children: [
                                {
                                  type: "text",
                                  value:
                                    "Rulov wudget ma ve unoana kunfo efeokuve."
                                }
                              ]
                            },
                            {
                              type: "tag",
                              tag: "a",
                              attributes: {
                                style:
                                  "animation-fill-mode: backwards; border-end-end-radius: 926.2303cm; margin-inline-start: auto;"
                              },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "iframe",
                          attributes: { title: "x*L#Guh@V" },
                          children: [
                            { type: "text", value: "Lajro ga zapjuk fa jec." }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "math",
                          attributes: { tabindex: "62" },
                          children: [
                            {
                              type: "tag",
                              tag: "link",
                              children: [],
                              attributes: { dir: "rtl", href: "!F1j6$DHWoABME" }
                            },
                            {
                              type: "tag",
                              tag: "aside",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "text",
                              value: "Hipiag vafteh hoz cub detil dadakes."
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "a",
                          attributes: {
                            draggable: "false",
                            hidden: null,
                            dir: "rtl"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "source",
                              children: [],
                              attributes: {
                                draggable: "false",
                                contenteditable: "",
                                hidden: null,
                                tabindex: "-902"
                              }
                            },
                            {
                              type: "tag",
                              tag: "source",
                              children: [],
                              attributes: {
                                hidden: null,
                                dir: "rtl",
                                tabindex: "227",
                                contenteditable: "false",
                                style:
                                  "list-style: none none inside; overflow-inline: visible; backface-visibility: visible;"
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
                              tag: "bdo",
                              attributes: {
                                hidden: null,
                                contenteditable: "",
                                draggable: "true"
                              },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "title",
                          attributes: {
                            dir: "rtl",
                            tabindex: "775",
                            hidden: null
                          },
                          children: [{ type: "text", value: "Mavus ma pu." }]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              type: "tag",
              tag: "figcaption",
              attributes: {
                dir: "auto",
                hidden: null,
                draggable: "true",
                contenteditable: "false"
              },
              children: []
            }
          ]
        },
        {
          type: "tag",
          tag: "figure",
          attributes: {},
          children: [
            {
              type: "tag",
              tag: "aside",
              attributes: {
                hidden: null,
                style: "inline-size: auto; border-bottom-color: #7c6b83;"
              },
              children: [
                { type: "tag", tag: "keygen", children: [], attributes: {} },
                {
                  type: "tag",
                  tag: "p",
                  attributes: {},
                  children: [
                    { type: "text", value: "Jew giv uho evhumto uv." },
                    {
                      type: "tag",
                      tag: "kbd",
                      attributes: {
                        hidden: null,
                        draggable: "true",
                        tabindex: "-320"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "meter",
                          attributes: {
                            draggable: "true",
                            contenteditable: "true"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "progress",
                              attributes: {
                                contenteditable: "false",
                                hidden: null,
                                dir: "rtl",
                                style: "height: max-content;"
                              },
                              children: []
                            },
                            {
                              type: "text",
                              value: "Wuz gi vehzottar amrav busgozer fuh."
                            },
                            { type: "text", value: "Udenozuf mobo bo go." }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "canvas",
                          attributes: { contenteditable: "true" },
                          children: [
                            {
                              type: "tag",
                              tag: "q",
                              attributes: {
                                draggable: "false",
                                hidden: null,
                                dir: "ltr"
                              },
                              children: []
                            },
                            { type: "text", value: "Ve ureamila." },
                            {
                              type: "tag",
                              tag: "data",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "noscript",
                              attributes: {
                                dir: "rtl",
                                contenteditable: "false"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "map",
                              attributes: {
                                hidden: null,
                                tabindex: "-638",
                                contenteditable: "true",
                                dir: "auto",
                                style: "overflow-x: clip;"
                              },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "text",
                          value: "Zisefluj wa seroho huhuel ak podcas ikwasfe."
                        },
                        {
                          type: "tag",
                          tag: "bdi",
                          attributes: {
                            contenteditable: "true",
                            tabindex: "-957",
                            dir: "ltr"
                          },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "code",
                          attributes: {},
                          children: []
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "input",
                      children: [],
                      attributes: { tabindex: "-275", type: "tel" }
                    }
                  ]
                },
                { type: "text", value: "Zi zecpu co femmocu wo divmat hosuz." }
              ]
            },
            {
              type: "tag",
              tag: "input",
              children: [],
              attributes: {
                draggable: "false",
                type: "search",
                style: "mask-border-mode: luminance;"
              }
            },
            {
              type: "tag",
              tag: "figcaption",
              attributes: {
                dir: "rtl",
                hidden: null,
                style: "animation-direction: normal;"
              },
              children: [
                {
                  type: "tag",
                  tag: "div",
                  attributes: {
                    tabindex: "-723",
                    style:
                      "padding-block: 54%; max-inline-size: -547.7059pc; scroll-padding-right: auto; grid-auto-rows: 67%;"
                  },
                  children: [
                    {
                      type: "tag",
                      tag: "bdi",
                      attributes: {
                        hidden: null,
                        draggable: "false",
                        contenteditable: ""
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "area",
                          children: [],
                          attributes: { draggable: "true" }
                        },
                        {
                          type: "tag",
                          tag: "mark",
                          attributes: {},
                          children: [
                            {
                              type: "tag",
                              tag: "slot",
                              attributes: {
                                contenteditable: "false",
                                tabindex: "-871"
                              },
                              children: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "dt",
                      attributes: { draggable: "true", hidden: null },
                      children: []
                    },
                    {
                      type: "tag",
                      tag: "dd",
                      attributes: {},
                      children: [
                        {
                          type: "text",
                          value: "Vi lanufgi lo johtefimi wi koluwfu."
                        },
                        {
                          type: "tag",
                          tag: "kbd",
                          attributes: {
                            contenteditable: "true",
                            draggable: "false"
                          },
                          children: [
                            {
                              type: "text",
                              value: "Askuzpu woh izi daram awe wu eh."
                            },
                            {
                              type: "tag",
                              tag: "span",
                              attributes: {
                                tabindex: "-989",
                                draggable: "false",
                                contenteditable: "false",
                                dir: "rtl"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "b",
                              attributes: { dir: "rtl" },
                              children: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "dt",
                      attributes: {
                        dir: "ltr",
                        draggable: "false",
                        contenteditable: "",
                        hidden: null,
                        style:
                          "border-top-width: thin; border-image-outset: -2739244074270720; page-break-before: left; border-left-color: mediumpurple;"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "ol",
                          attributes: {
                            dir: "ltr",
                            hidden: null,
                            contenteditable: "",
                            tabindex: "3",
                            draggable: "false",
                            style: "scroll-snap-stop: always;"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "template",
                              attributes: {
                                contenteditable: "false",
                                dir: "auto",
                                tabindex: "215",
                                hidden: null
                              },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "svg",
                          attributes: {
                            style:
                              "column-width: 306.3256vh; touch-action: manipulation; table-layout: auto; quotes: 'vutuvan' 'li';"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "button",
                              attributes: {
                                dir: "ltr",
                                draggable: "true",
                                type: "reset"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "noscript",
                              attributes: {
                                tabindex: "-973",
                                dir: "auto",
                                contenteditable: "false",
                                hidden: null
                              },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "table",
                          attributes: {
                            contenteditable: "true",
                            hidden: null,
                            draggable: "true",
                            dir: "rtl"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "script",
                              children: [
                                { type: "text", value: 'console.log("hello")' }
                              ],
                              attributes: {
                                defer: null,
                                style:
                                  "background-repeat: repeat-x; caption-side: bottom; background: fixed center center / contain local;"
                              }
                            },
                            {
                              type: "tag",
                              tag: "tr",
                              attributes: {
                                hidden: null,
                                dir: "auto",
                                tabindex: "-626",
                                contenteditable: "true"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "tfoot",
                              attributes: {
                                dir: "auto",
                                contenteditable: "false",
                                tabindex: "573"
                              },
                              children: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "dt",
                      attributes: {
                        tabindex: "-599",
                        style:
                          "border-block-end-color: #e8dd4d; animation-name: 'ona', 'kuno', none, naopiaro; border-top-style: groove; line-break: auto;"
                      },
                      children: []
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "pre",
                  attributes: { dir: "auto" },
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
                      tag: "select",
                      attributes: {
                        contenteditable: "true",
                        size: "663",
                        tabindex: "-121",
                        disabled: null
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "template",
                          attributes: { contenteditable: "true", dir: "auto" },
                          children: [
                            {
                              type: "tag",
                              tag: "template",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "a",
                              attributes: {
                                contenteditable: "false",
                                draggable: "false",
                                dir: "ltr",
                                tabindex: "534",
                                style:
                                  "all: unset; grid-area: -3%  / 82% ; scroll-margin-inline-start: 117.2848ex; flex-direction: row-reverse; padding-left: 65%;"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "label",
                              attributes: {
                                dir: "auto",
                                draggable: "true",
                                hidden: null,
                                contenteditable: ""
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "video",
                              attributes: {
                                tabindex: "450",
                                draggable: "false",
                                dir: "auto",
                                contenteditable: "false",
                                hidden: null
                              },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "template",
                          attributes: { tabindex: "12" },
                          children: [
                            {
                              type: "tag",
                              tag: "picture",
                              attributes: {
                                contenteditable: "",
                                tabindex: "762"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "h5",
                              attributes: { contenteditable: "true" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "iframe",
                              attributes: {
                                contenteditable: "true",
                                dir: "ltr",
                                tabindex: "-677",
                                title: "A!qQ]PHhYmk)"
                              },
                              children: [
                                {
                                  type: "text",
                                  value: "Udebe lid koni iv oj ik emujo."
                                }
                              ]
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "option",
                          attributes: {
                            dir: "rtl",
                            draggable: "false",
                            contenteditable: "",
                            selected: null,
                            disabled: null
                          },
                          children: [
                            { type: "text", value: "Zeeke hof pe hurijsi nap." }
                          ]
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "del",
                      attributes: {
                        draggable: "false",
                        contenteditable: "false",
                        dir: "ltr",
                        tabindex: "326"
                      },
                      children: [
                        {
                          type: "text",
                          value: "Hazino nubzo cojiv udu ucieli pe."
                        },
                        {
                          type: "tag",
                          tag: "button",
                          attributes: {
                            dir: "rtl",
                            hidden: null,
                            type: "reset"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "wbr",
                              children: [],
                              attributes: {
                                draggable: "false",
                                contenteditable: "",
                                tabindex: "-640",
                                hidden: null
                              }
                            },
                            {
                              type: "tag",
                              tag: "mark",
                              attributes: {
                                dir: "rtl",
                                contenteditable: "",
                                hidden: null,
                                tabindex: "972"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "span",
                              attributes: {
                                contenteditable: "",
                                hidden: null,
                                dir: "auto"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "strong",
                              attributes: {
                                contenteditable: "false",
                                draggable: "false"
                              },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "map",
                          attributes: {
                            dir: "auto",
                            draggable: "false",
                            hidden: null
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "template",
                              attributes: {
                                tabindex: "741",
                                style:
                                  "place-content: safe flex-start safe right;"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "embed",
                              children: [],
                              attributes: { src: "K1", title: "YEbew" }
                            },
                            {
                              type: "tag",
                              tag: "audio",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "picture",
                              attributes: {
                                tabindex: "-523",
                                draggable: "true"
                              },
                              children: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "audio",
                      attributes: {},
                      children: [
                        { type: "text", value: "Muodju si roubgek." },
                        {
                          type: "tag",
                          tag: "area",
                          children: [],
                          attributes: {
                            tabindex: "449",
                            contenteditable: "true",
                            shape: "default"
                          }
                        },
                        {
                          type: "text",
                          value: "Vig huhjin fuwek juap jokagi."
                        },
                        {
                          type: "tag",
                          tag: "ruby",
                          attributes: {
                            contenteditable: "false",
                            draggable: "true",
                            tabindex: "840",
                            style:
                              "box-decoration-break: clone; page-break-inside: auto;"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "rtc",
                              attributes: {},
                              children: []
                            }
                          ]
                        },
                        { type: "text", value: "Eve iwumu." }
                      ]
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "label",
                  attributes: { dir: "auto" },
                  children: [
                    {
                      type: "text",
                      value: "Fawuguh oroheno ubapu ekide zecu mimurlo."
                    },
                    {
                      type: "text",
                      value: "Ipevon ma dosupmo gicebva zijavbej ebdukpo rujas."
                    },
                    {
                      type: "tag",
                      tag: "img",
                      children: [],
                      attributes: { ismap: null, src: "5qMj[@jQbf4C7Bin" }
                    },
                    {
                      type: "tag",
                      tag: "sup",
                      attributes: {},
                      children: [
                        {
                          type: "tag",
                          tag: "select",
                          attributes: {
                            draggable: "false",
                            hidden: null,
                            autofocus: null
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "template",
                              attributes: {
                                hidden: null,
                                draggable: "true",
                                tabindex: "-152",
                                contenteditable: "false",
                                style:
                                  "border-top-color: ButtonShadow; mask-type: luminance; inline-size: fit-content; background-image: none;"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "script",
                              children: [
                                { type: "text", value: 'console.log("hello")' }
                              ],
                              attributes: {}
                            },
                            {
                              type: "tag",
                              tag: "option",
                              attributes: {
                                selected: null,
                                disabled: null,
                                dir: "rtl",
                                hidden: null,
                                tabindex: "963",
                                style:
                                  "font-feature-settings: normal; border-top: thick groove currentcolor; scale: none; mask-border-width: 963.3067vmax;"
                              },
                              children: [
                                {
                                  type: "text",
                                  value: "Fohujoje ruwova ponamu zej vucjut."
                                }
                              ]
                            },
                            {
                              type: "tag",
                              tag: "script",
                              children: [
                                { type: "text", value: 'console.log("hello")' }
                              ],
                              attributes: {
                                async: null,
                                src: "%dX!k[]6N@",
                                tabindex: "-659",
                                dir: "ltr",
                                style:
                                  "transition: 962.2875s 139.0796ms; break-before: left; grid-column-start: 25% span; all: revert;"
                              }
                            },
                            {
                              type: "tag",
                              tag: "template",
                              attributes: {
                                style:
                                  "scroll-margin: 464.2452vmin; flex-wrap: wrap-reverse; overscroll-behavior-inline: auto; font-variant-alternates: annotation(kegnotun) ornaments(eloeblew) character-variant(aphu) historical-forms stylistic(em) swash(dekbiip) styleset(ih); border-image-width: 8828611251404800;"
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
                  type: "text",
                  value: "Cipepdo cuk louge liphuf ucaefoha fujezso simzu."
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
