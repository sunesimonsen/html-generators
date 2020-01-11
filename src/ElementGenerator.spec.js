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
                "justify-items: first baseline; border-right-style: groove; border-bottom-color: hsl(7978751946129408 16% 32% / 338501803442176);"
            },
            children: [
              {
                type: "tag",
                tag: "iframe",
                attributes: { tabindex: "-712", title: "]ct" },
                children: [
                  { type: "text", value: "Je hodpizhir leg liptemdov." }
                ]
              },
              {
                type: "tag",
                tag: "datalist",
                attributes: {},
                children: [
                  {
                    type: "tag",
                    tag: "area",
                    children: [],
                    attributes: { tabindex: "-16" }
                  },
                  {
                    type: "tag",
                    tag: "option",
                    attributes: {
                      dir: "rtl",
                      draggable: "true",
                      hidden: null,
                      contenteditable: "true",
                      tabindex: "838"
                    },
                    children: [
                      {
                        type: "text",
                        value: "Om hepazpig duw ipaje ewumovecu iro."
                      }
                    ]
                  },
                  {
                    type: "tag",
                    tag: "option",
                    attributes: {
                      contenteditable: "",
                      draggable: "true",
                      selected: null,
                      hidden: null
                    },
                    children: [{ type: "text", value: "Tugohi ze erosi log." }]
                  }
                ]
              },
              { type: "text", value: "Uze ipilip pufwi." }
            ]
          },
          {
            type: "tag",
            tag: "select",
            attributes: { autofocus: null, contenteditable: "" },
            children: [
              {
                type: "tag",
                tag: "optgroup",
                attributes: { draggable: "false" },
                children: [
                  {
                    type: "tag",
                    tag: "template",
                    attributes: {},
                    children: [
                      {
                        type: "tag",
                        tag: "h2",
                        attributes: {
                          dir: "rtl",
                          tabindex: "-937",
                          hidden: null,
                          contenteditable: "false"
                        },
                        children: [
                          { type: "text", value: "Ihera lihakhup patofcok." },
                          {
                            type: "tag",
                            tag: "ruby",
                            attributes: {
                              contenteditable: "true",
                              hidden: null,
                              draggable: "false",
                              style:
                                "margin-inline: auto; animation-play-state: running; grid-column-start: auto;"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "br",
                            children: [],
                            attributes: {
                              dir: "ltr",
                              hidden: null,
                              tabindex: "-38",
                              draggable: "true"
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: "tag",
                    tag: "template",
                    attributes: { contenteditable: "", dir: "ltr" },
                    children: [
                      {
                        type: "tag",
                        tag: "audio",
                        attributes: {
                          tabindex: "516",
                          hidden: null,
                          contenteditable: "",
                          style:
                            "font-optical-sizing: auto; font-variant-position: sub; pointer-events: auto; border-top-style: none;"
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "base",
                            children: [],
                            attributes: {
                              draggable: "true",
                              tabindex: "156",
                              hidden: null,
                              contenteditable: ""
                            }
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "article",
                        attributes: { contenteditable: "", draggable: "false" },
                        children: [
                          {
                            type: "tag",
                            tag: "mark",
                            attributes: {
                              draggable: "true",
                              style:
                                "border-bottom-color: rgb(-6916220410396672 / -8178489324732416); border-block-end: thick; width: fit-content; border-inline-style: solid;"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "s",
                            attributes: {},
                            children: []
                          },
                          {
                            type: "text",
                            value: "Fite opu la pivvod opbun anoso."
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "header",
                        attributes: {},
                        children: [
                          {
                            type: "tag",
                            tag: "u",
                            attributes: {
                              contenteditable: "",
                              style:
                                "animation-delay: -922.0738ms; mask-size: contain;"
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
                            tag: "textarea",
                            attributes: {
                              selected: null,
                              draggable: "false",
                              disabled: null,
                              hidden: null,
                              tabindex: "-503"
                            },
                            children: [
                              {
                                type: "text",
                                value: "Gesji taf nuhijoow ru uvake jel."
                              }
                            ]
                          },
                          {
                            type: "text",
                            value: "Zuzodol umnorer fos ecumoce waccezluj."
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: "tag",
                    tag: "template",
                    attributes: {
                      tabindex: "754",
                      contenteditable: "true",
                      draggable: "false",
                      dir: "ltr"
                    },
                    children: [
                      {
                        type: "tag",
                        tag: "strong",
                        attributes: {},
                        children: [
                          {
                            type: "tag",
                            tag: "u",
                            attributes: {
                              contenteditable: "false",
                              tabindex: "-140"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "u",
                            attributes: { tabindex: "-741" },
                            children: []
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "datalist",
                        attributes: { contenteditable: "false", dir: "auto" },
                        children: []
                      },
                      {
                        type: "tag",
                        tag: "meta",
                        children: [],
                        attributes: { draggable: "false" }
                      },
                      {
                        type: "tag",
                        tag: "img",
                        children: [],
                        attributes: {
                          src: "UqZvH]UZRC%",
                          style:
                            "caption-side: inline-end; transition-delay: -884.2723s; font-language-override: normal; border-block-start: hidden medium; grid-column-start: selu;"
                        }
                      }
                    ]
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
                    tag: "script",
                    attributes: { integrity: "fZD6", draggable: "false" },
                    children: [
                      {
                        type: "tag",
                        tag: "h1",
                        attributes: {},
                        children: [
                          { type: "text", value: "Jem ru." },
                          {
                            type: "tag",
                            tag: "svg",
                            attributes: {
                              dir: "ltr",
                              contenteditable: "false",
                              draggable: "true"
                            },
                            children: []
                          },
                          {
                            type: "text",
                            value: "Wodfuz katji cebuc wocafig dof."
                          }
                        ]
                      },
                      { type: "tag", tag: "h6", attributes: {}, children: [] },
                      {
                        type: "tag",
                        tag: "h4",
                        attributes: {
                          tabindex: "657",
                          dir: "rtl",
                          hidden: null
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
                            tag: "iframe",
                            attributes: { contenteditable: "", title: "" },
                            children: [
                              {
                                type: "text",
                                value:
                                  "Gibzinef tetu cejtu emofoc obututven nuawo upuge."
                              }
                            ]
                          },
                          {
                            type: "tag",
                            tag: "bdo",
                            attributes: {},
                            children: []
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "img",
                        children: [],
                        attributes: { src: "cgTYyfWx" }
                      },
                      {
                        type: "tag",
                        tag: "abbr",
                        attributes: {
                          hidden: null,
                          contenteditable: "",
                          dir: "rtl",
                          draggable: "true"
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "progress",
                            attributes: {
                              contenteditable: "true",
                              dir: "auto"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "area",
                            children: [],
                            attributes: {
                              contenteditable: "false",
                              dir: "auto"
                            }
                          },
                          {
                            type: "tag",
                            tag: "strong",
                            attributes: {
                              tabindex: "755",
                              contenteditable: ""
                            },
                            children: []
                          },
                          {
                            type: "text",
                            value:
                              "Pukju ca eceuzoli cicse gozzod puc cisrerud."
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "h3",
                        attributes: {
                          hidden: null,
                          tabindex: "84",
                          dir: "auto"
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "sub",
                            attributes: {
                              hidden: null,
                              contenteditable: "",
                              tabindex: "581",
                              dir: "auto"
                            },
                            children: []
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
                      ismap: null,
                      dir: "auto",
                      decoding: "sync",
                      crossorigin: "anonymous",
                      src: "P0Fs^yiGKsaDIQe2"
                    }
                  },
                  {
                    type: "tag",
                    tag: "script",
                    attributes: {
                      dir: "rtl",
                      integrity: "#NqG)7",
                      async: null,
                      nomodule: null
                    },
                    children: [
                      {
                        type: "tag",
                        tag: "script",
                        attributes: {},
                        children: [
                          {
                            type: "tag",
                            tag: "object",
                            attributes: {
                              contenteditable: "",
                              draggable: "true",
                              data: "ZRC%2d^u((e$DHhTyumn",
                              dir: "rtl",
                              hidden: null
                            },
                            children: []
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "iframe",
                        attributes: { dir: "rtl", title: "A[t[H" },
                        children: [
                          {
                            type: "text",
                            value: "Mu jadcuw wiokaivi bi alufen."
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "base",
                        children: [],
                        attributes: {
                          dir: "rtl",
                          tabindex: "63",
                          draggable: "true"
                        }
                      },
                      {
                        type: "tag",
                        tag: "video",
                        attributes: { contenteditable: "false", dir: "auto" },
                        children: [
                          {
                            type: "tag",
                            tag: "style",
                            attributes: {
                              hidden: null,
                              tabindex: "-241",
                              draggable: "true"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "title",
                            attributes: { tabindex: "-606" },
                            children: [
                              {
                                type: "text",
                                value:
                                  "Tajdapil pevrunit fibzo wuffob simikis pitmep wutnu."
                              }
                            ]
                          },
                          {
                            type: "tag",
                            tag: "keygen",
                            children: [],
                            attributes: {
                              draggable: "true",
                              hidden: null,
                              contenteditable: "false",
                              tabindex: "493"
                            }
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "title",
                        attributes: { dir: "rtl" },
                        children: [{ type: "text", value: "Radi fo gomu." }]
                      }
                    ]
                  },
                  {
                    type: "tag",
                    tag: "img",
                    children: [],
                    attributes: {
                      tabindex: "169",
                      src: "ncgOiN",
                      ismap: null,
                      crossorigin: "anonymous"
                    }
                  }
                ]
              },
              { type: "text", value: "Divedo vamfuj ju." },
              { type: "text", value: "Saz lul zem zabha iviracnem delab." }
            ]
          },
          {
            type: "tag",
            tag: "button",
            attributes: { draggable: "false", autofocus: null, type: "reset" },
            children: [
              {
                type: "tag",
                tag: "i",
                attributes: { draggable: "false", tabindex: "-565" },
                children: [
                  {
                    type: "tag",
                    tag: "ins",
                    attributes: { dir: "rtl", tabindex: "237" },
                    children: []
                  },
                  {
                    type: "tag",
                    tag: "q",
                    attributes: { contenteditable: "true" },
                    children: [
                      {
                        type: "text",
                        value: "Ju iv ra uzamiz buzpavuw rilesgu mam."
                      }
                    ]
                  }
                ]
              },
              {
                type: "tag",
                tag: "meter",
                attributes: {
                  dir: "auto",
                  draggable: "true",
                  contenteditable: ""
                },
                children: [
                  { type: "text", value: "Firu vu fo dil." },
                  {
                    type: "tag",
                    tag: "em",
                    attributes: { hidden: null, dir: "auto" },
                    children: [
                      {
                        type: "tag",
                        tag: "var",
                        attributes: {
                          hidden: null,
                          draggable: "false",
                          dir: "ltr",
                          contenteditable: "false"
                        },
                        children: [
                          { type: "text", value: "Be nav movteloz." },
                          {
                            type: "text",
                            value: "Ijeser noiljis sejmem igrak tovaav."
                          },
                          {
                            type: "text",
                            value: "Zunudo hos gi pusdudev seama."
                          },
                          { type: "text", value: "Wo tisirse uwsemi taw." },
                          {
                            type: "tag",
                            tag: "data",
                            attributes: {
                              contenteditable: "",
                              draggable: "false"
                            },
                            children: []
                          }
                        ]
                      },
                      { type: "text", value: "Ruawatas saco ewu defuf ohu." },
                      {
                        type: "tag",
                        tag: "wbr",
                        children: [],
                        attributes: { draggable: "true" }
                      },
                      { type: "text", value: "Laket semiewu kioli nu gi." },
                      {
                        type: "tag",
                        tag: "b",
                        attributes: { contenteditable: "true", dir: "auto" },
                        children: [
                          {
                            type: "tag",
                            tag: "data",
                            attributes: {
                              tabindex: "85",
                              dir: "auto",
                              contenteditable: "",
                              hidden: null
                            },
                            children: []
                          },
                          { type: "text", value: "Cemet gitanu cesnim." },
                          {
                            type: "tag",
                            tag: "cite",
                            attributes: { draggable: "false", dir: "ltr" },
                            children: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: "tag",
                    tag: "b",
                    attributes: {},
                    children: [
                      { type: "text", value: "Tik udwupbi ha." },
                      {
                        type: "tag",
                        tag: "ins",
                        attributes: {
                          draggable: "false",
                          contenteditable: "true",
                          dir: "ltr"
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "data",
                            attributes: {
                              dir: "rtl",
                              hidden: null,
                              draggable: "true",
                              contenteditable: ""
                            },
                            children: []
                          },
                          { type: "text", value: "Cof dasokiwu." },
                          { type: "text", value: "Huli ep zinu oz favpuwaf." },
                          {
                            type: "tag",
                            tag: "q",
                            attributes: {
                              draggable: "false",
                              contenteditable: "false"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "sup",
                            attributes: {
                              dir: "rtl",
                              contenteditable: "false"
                            },
                            children: []
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              { type: "text", value: "Vebuwdun citi gabfejus sopan mijpibfu." }
            ]
          },
          { type: "text", value: "Do cejijwoh oleowa geresu pun to." },
          { type: "text", value: "Ce posilcu boz sa." },
          {
            type: "tag",
            tag: "i",
            attributes: { dir: "ltr" },
            children: [
              {
                type: "tag",
                tag: "br",
                children: [],
                attributes: {
                  hidden: null,
                  draggable: "false",
                  dir: "auto",
                  tabindex: "637"
                }
              },
              {
                type: "tag",
                tag: "s",
                attributes: {
                  dir: "auto",
                  hidden: null,
                  tabindex: "51",
                  draggable: "false"
                },
                children: []
              },
              {
                type: "tag",
                tag: "cite",
                attributes: {},
                children: [
                  {
                    type: "tag",
                    tag: "wbr",
                    children: [],
                    attributes: {
                      hidden: null,
                      dir: "auto",
                      contenteditable: "true"
                    }
                  },
                  {
                    type: "tag",
                    tag: "object",
                    attributes: {
                      tabindex: "-319",
                      draggable: "false",
                      data: "WSArPiJf$ZNzG",
                      hidden: null,
                      contenteditable: "true"
                    },
                    children: []
                  },
                  {
                    type: "tag",
                    tag: "embed",
                    children: [],
                    attributes: {
                      dir: "ltr",
                      tabindex: "626",
                      src: "T#rEbI#]ba#nNC**7f",
                      title: ""
                    }
                  },
                  { type: "text", value: "Bi sugmoc miweb le jog jaubi." }
                ]
              },
              {
                type: "tag",
                tag: "var",
                attributes: {},
                children: [
                  {
                    type: "tag",
                    tag: "bdo",
                    attributes: {
                      hidden: null,
                      dir: "auto",
                      contenteditable: "false"
                    },
                    children: [
                      {
                        type: "tag",
                        tag: "label",
                        attributes: {
                          dir: "ltr",
                          draggable: "true",
                          hidden: null
                        },
                        children: [{ type: "text", value: "Zuj tuimsum." }]
                      },
                      { type: "tag", tag: "wbr", children: [], attributes: {} },
                      {
                        type: "tag",
                        tag: "wbr",
                        children: [],
                        attributes: { dir: "rtl" }
                      },
                      {
                        type: "text",
                        value: "Udunep ran ecilegnu eva vuwahhe wo."
                      },
                      {
                        type: "tag",
                        tag: "sup",
                        attributes: {},
                        children: [
                          { type: "text", value: "Cuvpupi seprivwu." },
                          {
                            type: "text",
                            value: "Vevedkug vapzadizu itdu zubu zigge."
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: "tag",
                    tag: "var",
                    attributes: {},
                    children: [
                      {
                        type: "tag",
                        tag: "noscript",
                        attributes: {},
                        children: [
                          {
                            type: "tag",
                            tag: "bdo",
                            attributes: { draggable: "false", hidden: null },
                            children: []
                          },
                          {
                            type: "text",
                            value:
                              "Awvooh zar kacav uruzoso cakel hobfeuw nuro."
                          },
                          {
                            type: "text",
                            value: "Huzova oza wu epmoguh isze ep."
                          }
                        ]
                      },
                      {
                        type: "text",
                        value: "Eliuda dod embotja upanibsa hinhi ti."
                      },
                      {
                        type: "tag",
                        tag: "progress",
                        attributes: { dir: "rtl" },
                        children: [
                          {
                            type: "tag",
                            tag: "wbr",
                            children: [],
                            attributes: { tabindex: "757", draggable: "false" }
                          },
                          {
                            type: "text",
                            value: "Widagun pi wezaw pi lab lefugor."
                          },
                          {
                            type: "tag",
                            tag: "audio",
                            attributes: {
                              tabindex: "637",
                              dir: "auto",
                              contenteditable: "false",
                              hidden: null
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "input",
                            children: [],
                            attributes: { type: "range", disabled: null }
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
        tag: "code",
        attributes: {
          draggable: "false",
          contenteditable: "true",
          dir: "auto",
          tabindex: "452"
        },
        children: [
          {
            type: "tag",
            tag: "canvas",
            attributes: { dir: "rtl", draggable: "true" },
            children: [
              {
                type: "tag",
                tag: "i",
                attributes: {
                  contenteditable: "",
                  hidden: null,
                  draggable: "true"
                },
                children: []
              }
            ]
          },
          {
            type: "tag",
            tag: "b",
            attributes: { contenteditable: "false", draggable: "false" },
            children: [
              {
                type: "tag",
                tag: "b",
                attributes: {
                  draggable: "true",
                  contenteditable: "false",
                  tabindex: "425",
                  dir: "rtl"
                },
                children: [
                  { type: "tag", tag: "wbr", children: [], attributes: {} },
                  { type: "text", value: "Suiti unij ti wedwiw teum ec." },
                  {
                    type: "tag",
                    tag: "math",
                    attributes: { hidden: null, dir: "rtl" },
                    children: [
                      {
                        type: "tag",
                        tag: "h4",
                        attributes: { tabindex: "-258" },
                        children: [
                          {
                            type: "tag",
                            tag: "output",
                            attributes: { dir: "ltr", contenteditable: "" },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "br",
                            children: [],
                            attributes: { dir: "rtl", draggable: "true" }
                          },
                          {
                            type: "tag",
                            tag: "datalist",
                            attributes: { hidden: null, tabindex: "-167" },
                            children: []
                          }
                        ]
                      },
                      {
                        type: "text",
                        value: "Vizuali rembecam cap na kasarmu."
                      },
                      {
                        type: "tag",
                        tag: "h5",
                        attributes: { tabindex: "-639", draggable: "false" },
                        children: [
                          { type: "text", value: "Fe ofo." },
                          {
                            type: "tag",
                            tag: "map",
                            attributes: {
                              contenteditable: "false",
                              hidden: null,
                              tabindex: "-444"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "meter",
                            attributes: {
                              contenteditable: "false",
                              dir: "auto",
                              draggable: "true",
                              hidden: null
                            },
                            children: []
                          }
                        ]
                      }
                    ]
                  },
                  { type: "tag", tag: "keygen", children: [], attributes: {} }
                ]
              },
              {
                type: "tag",
                tag: "s",
                attributes: { dir: "rtl", draggable: "false" },
                children: []
              },
              { type: "text", value: "Vurgupmop loun." },
              { type: "text", value: "Eku zanwatis." },
              { type: "text", value: "Nuwiteet jibeh tevej." }
            ]
          },
          { type: "text", value: "Hijha sar zimru eluajla semse." }
        ]
      },
      {
        type: "tag",
        tag: "code",
        attributes: { draggable: "false", hidden: null, tabindex: "18" },
        children: [
          { type: "text", value: "Izvu gula po joh rindoweg adgargom jat." }
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
              tag: "select",
              attributes: {
                disabled: null,
                contenteditable: "false",
                required: null,
                size: "183"
              },
              children: [
                {
                  type: "tag",
                  tag: "script",
                  attributes: {
                    contenteditable: "true",
                    tabindex: "-456",
                    src: "oCM[RId@SYmHea(*"
                  },
                  children: [
                    {
                      type: "tag",
                      tag: "aside",
                      attributes: {
                        dir: "rtl",
                        tabindex: "34",
                        draggable: "false"
                      },
                      children: [
                        { type: "text", value: "Ribu nukonokan cuh zeenejom." },
                        {
                          type: "tag",
                          tag: "figure",
                          attributes: { contenteditable: "" },
                          children: [
                            {
                              type: "tag",
                              tag: "figcaption",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "header",
                              attributes: {
                                hidden: null,
                                tabindex: "358",
                                draggable: "true"
                              },
                              children: []
                            },
                            {
                              type: "text",
                              value:
                                "Neclekos junla esohogbi dadeip riide rohu jod."
                            },
                            {
                              type: "text",
                              value: "Ahoilhak retijic ti luh pi hoje fef."
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "h1",
                      attributes: { draggable: "false", tabindex: "-963" },
                      children: [
                        {
                          type: "tag",
                          tag: "script",
                          attributes: { dir: "ltr" },
                          children: [
                            {
                              type: "tag",
                              tag: "embed",
                              children: [],
                              attributes: {
                                dir: "auto",
                                hidden: null,
                                src: "RXf4Brr17BIU",
                                title: "N8g79lxLnZd@R"
                              }
                            },
                            {
                              type: "tag",
                              tag: "mark",
                              attributes: {
                                dir: "ltr",
                                contenteditable: "true",
                                draggable: "false"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "h1",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "embed",
                              children: [],
                              attributes: {
                                draggable: "false",
                                dir: "rtl",
                                src: "p&O#ZtqWm8[PMNt",
                                title: ")%P%$UnzuzZ1!%@$D5$V"
                              }
                            },
                            {
                              type: "tag",
                              tag: "h6",
                              attributes: {},
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
                        src: "XSQaBh*X[avlwOJZ",
                        title: "qn0brKyn3BW3!"
                      }
                    }
                  ]
                }
              ]
            },
            { type: "text", value: "Ram jeguze ipilip pufwi bop." },
            { type: "text", value: "Olu ijo." },
            { type: "text", value: "Kimsuzceh egpa." },
            {
              type: "tag",
              tag: "figcaption",
              attributes: { draggable: "true" },
              children: [
                {
                  type: "tag",
                  tag: "time",
                  attributes: { draggable: "true" },
                  children: [
                    {
                      type: "tag",
                      tag: "sup",
                      attributes: {
                        dir: "rtl",
                        hidden: null,
                        tabindex: "-502",
                        draggable: "false"
                      },
                      children: [
                        {
                          type: "text",
                          value: "Cuvbe nibel uhu bebah demzef navgiro."
                        }
                      ]
                    },
                    { type: "text", value: "Fuz katji cebuc wocafig dof." },
                    {
                      type: "tag",
                      tag: "iframe",
                      attributes: {
                        src: "GT2FdsPAl4ibzi",
                        dir: "ltr",
                        draggable: "true",
                        title: ""
                      },
                      children: [
                        {
                          type: "text",
                          value: "Ba alfite opu la pivvod opbun."
                        }
                      ]
                    },
                    { type: "text", value: "Sojtalruw azifa ga bavec lubet." },
                    {
                      type: "tag",
                      tag: "kbd",
                      attributes: { dir: "rtl" },
                      children: []
                    }
                  ]
                },
                {
                  type: "text",
                  value: "Tubokuhi zi usilesev egizosde pitkedeb iva."
                },
                { type: "text", value: "Oru pocde rozu adapucrak." },
                {
                  type: "tag",
                  tag: "wbr",
                  children: [],
                  attributes: {
                    tabindex: "143",
                    draggable: "false",
                    dir: "auto"
                  }
                },
                { type: "text", value: "Ecwemu famhuluj huwsojwa lirhu mi." }
              ]
            }
          ]
        },
        {
          type: "tag",
          tag: "figure",
          attributes: { contenteditable: "true" },
          children: [
            {
              type: "tag",
              tag: "bdo",
              attributes: {
                hidden: null,
                draggable: "true",
                tabindex: "400",
                dir: "rtl"
              },
              children: [
                {
                  type: "tag",
                  tag: "meter",
                  attributes: { draggable: "false" },
                  children: [
                    {
                      type: "tag",
                      tag: "video",
                      attributes: {
                        contenteditable: "true",
                        dir: "ltr",
                        draggable: "false",
                        hidden: null,
                        tabindex: "-696"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "samp",
                          attributes: {
                            contenteditable: "",
                            hidden: null,
                            tabindex: "394"
                          },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "template",
                          attributes: {
                            dir: "rtl",
                            tabindex: "-353",
                            contenteditable: "true"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "iframe",
                              attributes: {
                                dir: "ltr",
                                tabindex: "-411",
                                src: "umj^f8*(E1RT&",
                                draggable: "true",
                                title: "#OdmbEB57J][lBR3CD)"
                              },
                              children: [
                                {
                                  type: "text",
                                  value: "Nafeca amuuwizoz leggaog huzob dapil."
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "text",
                      value: "Kutunaaki bi torgudbuj temdu riawjo wutnu."
                    },
                    {
                      type: "tag",
                      tag: "area",
                      children: [],
                      attributes: {
                        draggable: "false",
                        hidden: null,
                        dir: "rtl",
                        contenteditable: "true",
                        shape: "circle"
                      }
                    },
                    {
                      type: "tag",
                      tag: "wbr",
                      children: [],
                      attributes: { dir: "rtl" }
                    }
                  ]
                }
              ]
            },
            {
              type: "tag",
              tag: "figcaption",
              attributes: { dir: "rtl", tabindex: "-585" },
              children: [
                {
                  type: "tag",
                  tag: "output",
                  attributes: {
                    dir: "rtl",
                    tabindex: "974",
                    draggable: "false"
                  },
                  children: [
                    { type: "text", value: "Je di nef divedo vamfuj ju." }
                  ]
                },
                { type: "text", value: "Saz lul zem zabha iviracnem delab." }
              ]
            }
          ]
        },
        {
          type: "tag",
          tag: "figure",
          attributes: { dir: "rtl", hidden: null },
          children: []
        },
        {
          type: "tag",
          tag: "figure",
          attributes: { tabindex: "-594" },
          children: [
            {
              type: "tag",
              tag: "output",
              attributes: { contenteditable: "false", dir: "rtl" },
              children: [
                { type: "text", value: "Ha pagah cucammo." },
                {
                  type: "tag",
                  tag: "wbr",
                  children: [],
                  attributes: {
                    tabindex: "918",
                    contenteditable: "",
                    draggable: "false",
                    hidden: null
                  }
                },
                {
                  type: "tag",
                  tag: "u",
                  attributes: {
                    dir: "auto",
                    tabindex: "719",
                    contenteditable: "true",
                    hidden: null
                  },
                  children: [
                    {
                      type: "text",
                      value: "Pora zecpawki lefi ufe dedbodnin lawesu."
                    },
                    {
                      type: "tag",
                      tag: "code",
                      attributes: { contenteditable: "", hidden: null },
                      children: [
                        {
                          type: "text",
                          value: "Savfutgod guvoije motnoil ropi ik rawti oh."
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "embed",
                      children: [],
                      attributes: {
                        tabindex: "620",
                        dir: "rtl",
                        src: "Q6]l3x0s53kcpQ0",
                        title: "3zh8NiC!Hj"
                      }
                    }
                  ]
                }
              ]
            },
            {
              type: "tag",
              tag: "b",
              attributes: { draggable: "false" },
              children: [
                {
                  type: "tag",
                  tag: "data",
                  attributes: {
                    draggable: "true",
                    tabindex: "346",
                    dir: "ltr"
                  },
                  children: [
                    {
                      type: "tag",
                      tag: "output",
                      attributes: {
                        contenteditable: "false",
                        draggable: "false"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "time",
                          attributes: {
                            contenteditable: "false",
                            draggable: "false"
                          },
                          children: [
                            {
                              type: "text",
                              value: "Ew kig mebket semiewu kioli nu gi."
                            },
                            {
                              type: "tag",
                              tag: "canvas",
                              attributes: {
                                contenteditable: "true",
                                dir: "auto"
                              },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "time",
                          attributes: { hidden: null },
                          children: [
                            {
                              type: "text",
                              value: "Uzfi cizpe cemet gitanu cesnim."
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "q",
                          attributes: { draggable: "false", dir: "ltr" },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "object",
                          attributes: { draggable: "false" },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "audio",
                          attributes: {
                            tabindex: "409",
                            dir: "ltr",
                            preload: "auto",
                            contenteditable: "",
                            hidden: null
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "q",
                              attributes: {},
                              children: []
                            },
                            { type: "text", value: "Savrer hus." },
                            {
                              type: "text",
                              value: "Ezevafje bowebaf tiritoke lijukis nuhu."
                            },
                            {
                              type: "text",
                              value:
                                "Favpuwaf bizi meftuud fogbuw anja tiwec fe."
                            },
                            {
                              type: "tag",
                              tag: "mark",
                              attributes: {
                                dir: "rtl",
                                hidden: null,
                                draggable: "false",
                                tabindex: "494"
                              },
                              children: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "kbd",
                      attributes: {
                        tabindex: "422",
                        dir: "rtl",
                        hidden: null,
                        contenteditable: ""
                      },
                      children: [
                        {
                          type: "text",
                          value:
                            "Jonnepodo jajan elsajzic lopo nigacboz sa duudo."
                        },
                        {
                          type: "text",
                          value:
                            "Paruzop vorezepof curcooza nuhdo guukalo elrubon racu."
                        },
                        {
                          type: "tag",
                          tag: "datalist",
                          attributes: {
                            draggable: "true",
                            dir: "rtl",
                            hidden: null
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "option",
                              attributes: {
                                hidden: null,
                                tabindex: "427",
                                selected: null
                              },
                              children: [
                                { type: "text", value: "Nubav luw ubcoma." }
                              ]
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "sup",
                          attributes: { draggable: "false", tabindex: "-769" },
                          children: [
                            {
                              type: "tag",
                              tag: "math",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "datalist",
                              attributes: { dir: "auto", tabindex: "-589" },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "iframe",
                          attributes: { title: "dFiCCYjq((76tgRE[$$" },
                          children: [
                            {
                              type: "text",
                              value: "Ufocekepe pagge gu lucufuonu."
                            }
                          ]
                        }
                      ]
                    },
                    { type: "text", value: "Mi wuitho ran ecilegnu eva." },
                    {
                      type: "tag",
                      tag: "button",
                      attributes: {
                        draggable: "true",
                        tabindex: "-5",
                        autofocus: null,
                        type: "button"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "output",
                          attributes: {},
                          children: [
                            {
                              type: "tag",
                              tag: "noscript",
                              attributes: { dir: "auto", draggable: "true" },
                              children: []
                            },
                            { type: "text", value: "Dab hof heksal jan." },
                            {
                              type: "tag",
                              tag: "sub",
                              attributes: {
                                draggable: "false",
                                hidden: null,
                                tabindex: "-868",
                                dir: "auto"
                              },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "data",
                          attributes: {
                            dir: "rtl",
                            draggable: "false",
                            hidden: null,
                            tabindex: "189"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "svg",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "text",
                              value: "Zigge kun hebit debikeje osaw zaz."
                            },
                            {
                              type: "tag",
                              tag: "abbr",
                              attributes: { contenteditable: "false" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "i",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "time",
                              attributes: { draggable: "true", dir: "auto" },
                              children: []
                            },
                            {
                              type: "text",
                              value: "Keutiled fazosi vic doedo zarbahe laog."
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "template",
                          attributes: {
                            tabindex: "130",
                            draggable: "false",
                            hidden: null,
                            contenteditable: "true"
                          },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "sup",
                          attributes: {},
                          children: []
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "br",
                      children: [],
                      attributes: {
                        dir: "ltr",
                        tabindex: "1",
                        hidden: null,
                        draggable: "true"
                      }
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "small",
                  attributes: { draggable: "false" },
                  children: [
                    {
                      type: "text",
                      value: "Vaezfak ikuukonu ku zebuwen nifafdod embotja."
                    },
                    {
                      type: "tag",
                      tag: "button",
                      attributes: {
                        type: "submit",
                        disabled: null,
                        hidden: null,
                        contenteditable: "true"
                      },
                      children: []
                    },
                    {
                      type: "tag",
                      tag: "sub",
                      attributes: {
                        hidden: null,
                        contenteditable: "",
                        dir: "rtl"
                      },
                      children: []
                    },
                    { type: "text", value: "Kenmez bive." },
                    {
                      type: "tag",
                      tag: "b",
                      attributes: { draggable: "false" },
                      children: [
                        {
                          type: "text",
                          value: "Poc du bite roohpi lab lefugor gafdupwu."
                        },
                        {
                          type: "tag",
                          tag: "slot",
                          attributes: {},
                          children: [
                            { type: "text", value: "Terrur afacma." },
                            {
                              type: "tag",
                              tag: "area",
                              children: [],
                              attributes: {
                                tabindex: "484",
                                hidden: null,
                                shape: "poly",
                                draggable: "false",
                                contenteditable: "true"
                              }
                            },
                            {
                              type: "tag",
                              tag: "em",
                              attributes: { draggable: "false", hidden: null },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "svg",
                              attributes: {
                                contenteditable: "",
                                draggable: "false"
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
                            dir: "auto",
                            draggable: "true"
                          },
                          children: [
                            {
                              type: "text",
                              value: "Fi veh ulogihak hu ezmov."
                            },
                            {
                              type: "tag",
                              tag: "kbd",
                              attributes: { hidden: null, dir: "auto" },
                              children: []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                { type: "text", value: "Pinbo suiti." }
              ]
            },
            {
              type: "tag",
              tag: "meter",
              attributes: { dir: "rtl", hidden: null, tabindex: "-384" },
              children: [
                {
                  type: "tag",
                  tag: "select",
                  attributes: {
                    multiple: null,
                    hidden: null,
                    size: "181",
                    tabindex: "69"
                  },
                  children: [
                    {
                      type: "tag",
                      tag: "option",
                      attributes: {
                        draggable: "false",
                        selected: null,
                        disabled: null,
                        tabindex: "-163",
                        dir: "rtl"
                      },
                      children: [
                        {
                          type: "text",
                          value:
                            "Epki fezneic kiko misowef lawep zuali rembecam."
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "option",
                      attributes: { selected: null },
                      children: [{ type: "text", value: "Hioc pi." }]
                    }
                  ]
                },
                { type: "text", value: "Muurbu uvi." }
              ]
            },
            {
              type: "tag",
              tag: "figcaption",
              attributes: { dir: "auto", draggable: "false" },
              children: []
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
