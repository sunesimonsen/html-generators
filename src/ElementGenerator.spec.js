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
            tag: "small",
            attributes: {
              contenteditable: "false",
              draggable: "false",
              dir: "auto"
            },
            children: [
              { type: "text", value: "Mabuj do lisib." },
              {
                type: "tag",
                tag: "cite",
                attributes: {
                  hidden: null,
                  draggable: "true",
                  contenteditable: "false",
                  tabindex: "966"
                },
                children: [
                  {
                    type: "tag",
                    tag: "a",
                    attributes: {
                      draggable: "true",
                      hidden: null,
                      contenteditable: ""
                    },
                    children: [
                      {
                        type: "tag",
                        tag: "embed",
                        children: [],
                        attributes: {
                          hidden: null,
                          dir: "auto",
                          src: "H*D%&S1&ygQoMd)y!",
                          title: "N9RA)uSOukv7mfb"
                        }
                      }
                    ]
                  },
                  { type: "text", value: "Gebuwo zoclodevo dako wip." },
                  { type: "text", value: "Nedwusres bi dadeip." },
                  {
                    type: "tag",
                    tag: "bdo",
                    attributes: { dir: "ltr", draggable: "true" },
                    children: [
                      {
                        type: "tag",
                        tag: "slot",
                        attributes: { dir: "rtl", draggable: "false" },
                        children: [
                          {
                            type: "text",
                            value:
                              "Hakime ijicho ajkad mifdej fef wijug howeju."
                          }
                        ]
                      },
                      { type: "text", value: "Umi je." },
                      {
                        type: "text",
                        value: "Vapiz soze wu tumit ede waser wi."
                      }
                    ]
                  }
                ]
              },
              {
                type: "tag",
                tag: "picture",
                attributes: {
                  dir: "auto",
                  tabindex: "397",
                  hidden: null,
                  contenteditable: "true"
                },
                children: [
                  {
                    type: "tag",
                    tag: "template",
                    attributes: {
                      draggable: "false",
                      hidden: null,
                      tabindex: "-818",
                      contenteditable: "true"
                    },
                    children: [
                      {
                        type: "tag",
                        tag: "embed",
                        children: [],
                        attributes: {
                          src: "1!%@$D5",
                          tabindex: "851",
                          draggable: "false",
                          title: "%XS"
                        }
                      },
                      {
                        type: "tag",
                        tag: "b",
                        attributes: {},
                        children: [
                          {
                            type: "tag",
                            tag: "ruby",
                            attributes: { contenteditable: "" },
                            children: []
                          },
                          { type: "text", value: "Tugohi ze erosi log." }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "title",
                        attributes: { dir: "rtl" },
                        children: [
                          {
                            type: "text",
                            value: "Iwmoj solges sataf nuhijoow ru uvake jel."
                          }
                        ]
                      }
                    ]
                  },
                  { type: "tag", tag: "source", children: [], attributes: {} },
                  {
                    type: "tag",
                    tag: "script",
                    attributes: {
                      crossorigin: "use-credentials",
                      hidden: null,
                      integrity: "ksMv#x2!ZkZ0AOvv7F7s",
                      src: "gLaLU7oWfZD6d"
                    },
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
                            attributes: {
                              contenteditable: "false",
                              src: "mJbh4K7JzmIGWDdT(U$d",
                              title: "U*LL@NW"
                            },
                            children: [
                              {
                                type: "text",
                                value: "Tub tutvendit opeupu ja la."
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
                        attributes: {
                          decoding: "async",
                          draggable: "false",
                          contenteditable: "",
                          hidden: null,
                          dir: "ltr",
                          src: "ZZzU*#c2E7"
                        }
                      },
                      {
                        type: "tag",
                        tag: "abbr",
                        attributes: { draggable: "true" },
                        children: [
                          {
                            type: "tag",
                            tag: "strong",
                            attributes: {
                              contenteditable: "true",
                              dir: "auto"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "select",
                            attributes: {
                              required: null,
                              draggable: "false",
                              hidden: null,
                              tabindex: "505",
                              disabled: null
                            },
                            children: []
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "h3",
                        attributes: { dir: "ltr" },
                        children: [
                          {
                            type: "tag",
                            tag: "area",
                            children: [],
                            attributes: { hidden: null, draggable: "true" }
                          },
                          {
                            type: "tag",
                            tag: "textarea",
                            attributes: {
                              autocomplete: "off",
                              disabled: null,
                              maxlength: "55",
                              draggable: "false",
                              rows: "888",
                              minlength: "351",
                              cols: "117",
                              readonly: null,
                              autofocus: null
                            },
                            children: [
                              {
                                type: "text",
                                value:
                                  "Tuccirce waccezluj huwsojwa lirhu mi mi."
                              }
                            ]
                          },
                          {
                            type: "text",
                            value: "Dod zorhukne rek buzbewru cemucite."
                          },
                          {
                            type: "tag",
                            tag: "var",
                            attributes: {
                              dir: "rtl",
                              tabindex: "-902",
                              draggable: "true"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "var",
                            attributes: { tabindex: "57" },
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
                      contenteditable: "true",
                      tabindex: "-584",
                      draggable: "true",
                      dir: "rtl",
                      src: "[HZcNuwE8SYumj^f8*(E"
                    }
                  },
                  {
                    type: "tag",
                    tag: "script",
                    attributes: {
                      crossorigin: "anonymous",
                      nomodule: null,
                      hidden: null,
                      contenteditable: "true",
                      src: "J][lBR3CD)9!Q!eI",
                      async: null
                    },
                    children: [
                      {
                        type: "tag",
                        tag: "embed",
                        children: [],
                        attributes: {
                          src: "8N]3]^PR41*4!BsrHp",
                          title: "uSpq#"
                        }
                      },
                      {
                        type: "tag",
                        tag: "audio",
                        attributes: {
                          hidden: null,
                          contenteditable: "false",
                          dir: "rtl",
                          tabindex: "476"
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "iframe",
                            attributes: {
                              tabindex: "-755",
                              draggable: "false",
                              src: "7p%kTb[zSRVDP",
                              contenteditable: "",
                              hidden: null,
                              title: "zOMH5^DwUM@Z(6kH&!"
                            },
                            children: [{ type: "text", value: "Cu keti ci." }]
                          },
                          {
                            type: "tag",
                            tag: "section",
                            attributes: {},
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "textarea",
                            attributes: {
                              maxlength: "974",
                              draggable: "false"
                            },
                            children: [
                              { type: "text", value: "Feh badil ijpe." }
                            ]
                          },
                          {
                            type: "tag",
                            tag: "a",
                            attributes: {
                              dir: "rtl",
                              contenteditable: "false",
                              hidden: null
                            },
                            children: []
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              { type: "text", value: "Ojbeaco uflul zem zabha iviracnem." },
              { type: "text", value: "Jo bief ra kil." }
            ]
          },
          {
            type: "tag",
            tag: "button",
            attributes: {
              draggable: "false",
              autofocus: null,
              hidden: null,
              type: "reset",
              dir: "rtl"
            },
            children: [
              {
                type: "tag",
                tag: "object",
                attributes: { draggable: "true" },
                children: [
                  {
                    type: "tag",
                    tag: "u",
                    attributes: {
                      contenteditable: "",
                      tabindex: "843",
                      hidden: null,
                      dir: "ltr"
                    },
                    children: [
                      {
                        type: "tag",
                        tag: "samp",
                        attributes: {
                          tabindex: "-491",
                          hidden: null,
                          contenteditable: "false",
                          dir: "auto"
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "noscript",
                            attributes: {
                              dir: "auto",
                              draggable: "true",
                              tabindex: "114",
                              contenteditable: "true"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "map",
                            attributes: { contenteditable: "true" },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "small",
                            attributes: {},
                            children: []
                          },
                          { type: "text", value: "Saj firu vu fo." }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "bdo",
                        attributes: {},
                        children: [
                          {
                            type: "tag",
                            tag: "map",
                            attributes: {
                              tabindex: "939",
                              dir: "ltr",
                              contenteditable: "true"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "ins",
                            attributes: {
                              hidden: null,
                              draggable: "false",
                              dir: "ltr",
                              contenteditable: "false"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "bdi",
                            attributes: {
                              dir: "ltr",
                              hidden: null,
                              contenteditable: "false"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "sub",
                            attributes: {
                              hidden: null,
                              draggable: "false",
                              tabindex: "392"
                            },
                            children: []
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "object",
                        attributes: { draggable: "true", hidden: null },
                        children: [
                          {
                            type: "tag",
                            tag: "mark",
                            attributes: { draggable: "false" },
                            children: []
                          },
                          {
                            type: "text",
                            value:
                              "Rak tovaav rosoz kog fafwolzec devdopo pewo."
                          },
                          {
                            type: "tag",
                            tag: "input",
                            children: [],
                            attributes: {
                              contenteditable: "true",
                              disabled: null,
                              checked: null,
                              spellcheck: "default",
                              capture: null,
                              autofocus: null,
                              multiple: null,
                              draggable: "true",
                              tabindex: "-462",
                              required: null,
                              type: "url"
                            }
                          }
                        ]
                      }
                    ]
                  },
                  { type: "text", value: "Sam has ociwowwo sen co." },
                  { type: "text", value: "Owidefuf ohu." },
                  {
                    type: "tag",
                    tag: "datalist",
                    attributes: { draggable: "true" },
                    children: [
                      {
                        type: "tag",
                        tag: "option",
                        attributes: { dir: "rtl", tabindex: "-537" },
                        children: [
                          {
                            type: "text",
                            value: "Kioli nu gi maket tego uzfi cizpe."
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "audio",
                        attributes: {
                          dir: "auto",
                          contenteditable: "false",
                          preload: "none"
                        },
                        children: [
                          { type: "text", value: "Nu cesnim piro ge osjetik." }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "option",
                        attributes: {
                          contenteditable: "true",
                          disabled: null,
                          selected: null,
                          hidden: null,
                          draggable: "true"
                        },
                        children: [{ type: "text", value: "Go saan vig." }]
                      }
                    ]
                  },
                  { type: "text", value: "Hus atuor me cap gub in." }
                ]
              },
              {
                type: "tag",
                tag: "dfn",
                attributes: {
                  draggable: "false",
                  tabindex: "-336",
                  hidden: null
                },
                children: [
                  {
                    type: "tag",
                    tag: "output",
                    attributes: { draggable: "false" },
                    children: [
                      {
                        type: "tag",
                        tag: "video",
                        attributes: {
                          tabindex: "895",
                          contenteditable: "false",
                          preload: "",
                          draggable: "true"
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "del",
                            attributes: {
                              draggable: "false",
                              dir: "rtl",
                              contenteditable: "false"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "samp",
                            attributes: {
                              tabindex: "-823",
                              contenteditable: "true"
                            },
                            children: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: "text",
                    value: "Jamol gabfejus sopan mijpibfu cazeceh orjon."
                  },
                  {
                    type: "tag",
                    tag: "iframe",
                    attributes: {
                      draggable: "false",
                      dir: "rtl",
                      src: "cNtlS",
                      hidden: null,
                      tabindex: "-847",
                      title: "lyU5JhzfA1EK0YSGIsf8"
                    },
                    children: [{ type: "text", value: "Janleaw aznifru." }]
                  },
                  {
                    type: "tag",
                    tag: "noscript",
                    attributes: {
                      hidden: null,
                      draggable: "false",
                      dir: "auto",
                      tabindex: "637"
                    },
                    children: [
                      {
                        type: "tag",
                        tag: "map",
                        attributes: {
                          tabindex: "313",
                          contenteditable: "",
                          dir: "auto",
                          draggable: "false"
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "bdo",
                            attributes: {
                              draggable: "false",
                              hidden: null,
                              tabindex: "-845",
                              contenteditable: ""
                            },
                            children: []
                          }
                        ]
                      },
                      {
                        type: "text",
                        value: "Tihi cu kisciam vespuk hibiz if."
                      },
                      {
                        type: "tag",
                        tag: "area",
                        children: [],
                        attributes: {
                          draggable: "true",
                          tabindex: "-52",
                          hidden: null
                        }
                      },
                      {
                        type: "tag",
                        tag: "area",
                        children: [],
                        attributes: {}
                      },
                      {
                        type: "tag",
                        tag: "picture",
                        attributes: { contenteditable: "false", dir: "ltr" },
                        children: [
                          {
                            type: "tag",
                            tag: "source",
                            children: [],
                            attributes: { contenteditable: "" }
                          },
                          {
                            type: "tag",
                            tag: "template",
                            attributes: { dir: "auto", tabindex: "-589" },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "img",
                            children: [],
                            attributes: { src: "dFiCCYjq((76tgRE[$$" }
                          },
                          {
                            type: "tag",
                            tag: "img",
                            children: [],
                            attributes: {
                              tabindex: "-943",
                              ismap: null,
                              src: "S9LirdnCqcn(5",
                              crossorigin: "anonymous",
                              contenteditable: "false"
                            }
                          },
                          {
                            type: "tag",
                            tag: "img",
                            children: [],
                            attributes: { src: "q$M&S]MmtDM4K" }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                type: "tag",
                tag: "textarea",
                attributes: {
                  draggable: "false",
                  rows: "391",
                  readonly: null,
                  autofocus: null,
                  wrap: "hard",
                  required: null,
                  spellcheck: "true",
                  minlength: "477",
                  tabindex: "-956",
                  contenteditable: "false",
                  hidden: null,
                  cols: "35",
                  maxlength: "329",
                  autocomplete: "off",
                  disabled: null
                },
                children: [
                  {
                    type: "text",
                    value: "Me hocim har uvpupi seprivwu epefud."
                  }
                ]
              },
              {
                type: "tag",
                tag: "object",
                attributes: {
                  draggable: "true",
                  tabindex: "699",
                  contenteditable: "",
                  data: "$)#I"
                },
                children: [
                  { type: "text", value: "Baco rod ta zacza uvmo zat." },
                  {
                    type: "tag",
                    tag: "i",
                    attributes: {
                      contenteditable: "",
                      draggable: "true",
                      hidden: null,
                      tabindex: "771"
                    },
                    children: [
                      {
                        type: "tag",
                        tag: "iframe",
                        attributes: {
                          draggable: "true",
                          hidden: null,
                          src: "b",
                          contenteditable: "",
                          dir: "rtl",
                          title: "5sYaGluI]*"
                        },
                        children: [
                          {
                            type: "text",
                            value: "Rovefcor fev fakowituk numewes."
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "b",
                        attributes: { dir: "ltr" },
                        children: [
                          {
                            type: "tag",
                            tag: "img",
                            children: [],
                            attributes: {
                              dir: "ltr",
                              decoding: "sync",
                              hidden: null,
                              crossorigin: "",
                              draggable: "false",
                              ismap: null,
                              src: "Tn6IJaiSjSYsFPoqKle"
                            }
                          },
                          {
                            type: "tag",
                            tag: "label",
                            attributes: { dir: "ltr", tabindex: "455" },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "video",
                            attributes: {
                              contenteditable: "true",
                              hidden: null
                            },
                            children: []
                          },
                          { type: "text", value: "Zuzibo dagun pi." },
                          {
                            type: "tag",
                            tag: "bdi",
                            attributes: {
                              dir: "ltr",
                              draggable: "false",
                              tabindex: "-72"
                            },
                            children: []
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
                            tag: "h1",
                            attributes: { dir: "ltr", draggable: "true" },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "svg",
                            attributes: {
                              contenteditable: "false",
                              hidden: null,
                              dir: "ltr"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "iframe",
                            attributes: {
                              hidden: null,
                              contenteditable: "false",
                              draggable: "false",
                              dir: "auto",
                              tabindex: "625",
                              title: "T8JfW%OOS86HJVdM"
                            },
                            children: [
                              { type: "text", value: "Cig puhez zaako fi." }
                            ]
                          },
                          {
                            type: "tag",
                            tag: "h2",
                            attributes: {},
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "video",
                            attributes: {
                              dir: "rtl",
                              preload: "",
                              hidden: null
                            },
                            children: []
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "s",
                        attributes: { hidden: null, contenteditable: "" },
                        children: [
                          {
                            type: "tag",
                            tag: "canvas",
                            attributes: {
                              tabindex: "-629",
                              draggable: "false",
                              dir: "rtl",
                              hidden: null
                            },
                            children: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: "tag",
                    tag: "textarea",
                    attributes: {
                      disabled: null,
                      contenteditable: "false",
                      cols: "422",
                      readonly: null,
                      autofocus: null,
                      required: null,
                      autocomplete: "on",
                      hidden: null,
                      spellcheck: "false",
                      maxlength: "592",
                      draggable: "false",
                      minlength: "359",
                      tabindex: "-623",
                      wrap: "soft",
                      dir: "auto"
                    },
                    children: [{ type: "text", value: "Wiw teum ec." }]
                  },
                  { type: "text", value: "Duni lonfo ukep so." },
                  {
                    type: "tag",
                    tag: "sub",
                    attributes: { contenteditable: "", dir: "ltr" },
                    children: [
                      {
                        type: "tag",
                        tag: "canvas",
                        attributes: {
                          hidden: null,
                          dir: "rtl",
                          contenteditable: "",
                          draggable: "false"
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "meter",
                            attributes: { dir: "auto", draggable: "true" },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "sup",
                            attributes: { dir: "ltr", hidden: null },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "keygen",
                            children: [],
                            attributes: {
                              contenteditable: "true",
                              hidden: null
                            }
                          },
                          {
                            type: "tag",
                            tag: "svg",
                            attributes: {
                              contenteditable: "true",
                              draggable: "false"
                            },
                            children: []
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
                        tag: "sub",
                        attributes: {},
                        children: [
                          {
                            type: "tag",
                            tag: "video",
                            attributes: {},
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "label",
                            attributes: {},
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "math",
                            attributes: { tabindex: "202" },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "ruby",
                            attributes: {},
                            children: []
                          },
                          { type: "text", value: "Vak ufe ezuvaho." }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "keygen",
                        children: [],
                        attributes: {
                          tabindex: "-931",
                          hidden: null,
                          dir: "auto",
                          draggable: "false"
                        }
                      },
                      {
                        type: "tag",
                        tag: "picture",
                        attributes: {
                          hidden: null,
                          contenteditable: "true",
                          draggable: "false"
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "script",
                            attributes: {
                              crossorigin: "anonymous",
                              contenteditable: "",
                              draggable: "false",
                              defer: null,
                              src: "WD4",
                              integrity: "G7%4#7xG#8BivOWayyU",
                              tabindex: "396",
                              hidden: null,
                              async: null,
                              dir: "auto"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "source",
                            children: [],
                            attributes: { draggable: "true" }
                          },
                          {
                            type: "tag",
                            tag: "img",
                            children: [],
                            attributes: {
                              draggable: "true",
                              tabindex: "643",
                              src: "LCO@(M!J^b8ziClD",
                              decoding: "async",
                              dir: "ltr"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          { type: "text", value: "Momzor bufbucuz oja pef po." },
          { type: "text", value: "Veami doweg adgargom." },
          {
            type: "tag",
            tag: "i",
            attributes: {},
            children: [
              {
                type: "text",
                value: "Lamdubtum hoftakew ligzewu vodopni feevi dab."
              },
              {
                type: "tag",
                tag: "cite",
                attributes: { hidden: null },
                children: [
                  { type: "text", value: "Hesal jan mikwobuj dos igoja." }
                ]
              },
              {
                type: "tag",
                tag: "var",
                attributes: {
                  tabindex: "-226",
                  draggable: "true",
                  contenteditable: "true"
                },
                children: []
              },
              {
                type: "tag",
                tag: "b",
                attributes: { draggable: "true", hidden: null },
                children: [
                  {
                    type: "tag",
                    tag: "del",
                    attributes: {
                      draggable: "true",
                      tabindex: "-333",
                      hidden: null,
                      dir: "auto"
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
        tag: "code",
        attributes: {
          dir: "auto",
          draggable: "true",
          tabindex: "-333",
          hidden: null
        },
        children: [
          { type: "text", value: "Mak zajvu ojdefaz." },
          {
            type: "tag",
            tag: "canvas",
            attributes: { tabindex: "521", hidden: null, dir: "rtl" },
            children: [
              {
                type: "tag",
                tag: "slot",
                attributes: {
                  contenteditable: "",
                  draggable: "false",
                  hidden: null,
                  dir: "ltr"
                },
                children: []
              }
            ]
          },
          {
            type: "tag",
            tag: "slot",
            attributes: {},
            children: [{ type: "text", value: "Dehim mel imaalisuk oka." }]
          }
        ]
      },
      {
        type: "tag",
        tag: "code",
        attributes: { tabindex: "868", draggable: "false" },
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
    type: 'tag',
    tag: 'figure',
    attributes: { hidden: null },
    children: [
      { type: 'tag', tag: 'select', attributes: { disabled: null, contenteditable: 'false', required: null, size: '183', tabindex: '-612', autofocus: null, hidden: null }, children: [] },
      { type: 'text', value: 'Ro celel taj sibsof.' },
      { type: 'text', value: 'Ow ajedehir pub lef.' },
      { type: 'text', value: 'Miribu nukonokan cuh zeenejom ju.' },
      { type: 'tag', tag: 'figcaption', attributes: {}, children: [] }
    ]
  },
  {
    type: 'tag',
    tag: 'figure',
    attributes: {},
    children: [
      {
        type: 'tag',
        tag: 'h5',
        attributes: { dir: 'auto', draggable: 'false', contenteditable: 'true', tabindex: '-95' },
        children: [
          { type: 'tag', tag: 'embed', children: [], attributes: { dir: 'auto', tabindex: '849', draggable: 'false', src: '5sKcM0FibGho', title: 'JxPLZ^ksSEN3pq*fSv' } },
          {
            type: 'tag',
            tag: 'output',
            attributes: {},
            children: [
              {
                type: 'tag',
                tag: 'strong',
                attributes: { dir: 'ltr', hidden: null },
                children: [
                  { type: 'text', value: 'Vake kerokcu her jahben.' },
                  {
                    type: 'tag',
                    tag: 'kbd',
                    attributes: { draggable: 'true', dir: 'auto', contenteditable: 'true', tabindex: '-681' },
                    children: [
                      { type: 'tag', tag: 'wbr', children: [], attributes: { dir: 'rtl', contenteditable: 'true', hidden: null } },
                      { type: 'text', value: 'Mitavki bun har hepgu liedowa.' },
                      { type: 'tag', tag: 'b', attributes: { tabindex: '878' }, children: [] }
                    ]
                  },
                  { type: 'tag', tag: 'iframe', attributes: { hidden: null, title: '[PM' }, children: [ { type: 'text', value: 'Uwivoke wuwiko ecuawsib.' } ] },
                  {
                    type: 'tag',
                    tag: 'a',
                    attributes: { contenteditable: 'false' },
                    children: [
                      { type: 'text', value: 'Ugabel ze erosi log su putitpo.' },
                      { type: 'text', value: 'Efwisa caznuhijo ohi suzceh egpa.' },
                      { type: 'tag', tag: 'map', attributes: { draggable: 'true' }, children: [] }
                    ]
                  },
                  { type: 'tag', tag: 'meter', attributes: { hidden: null, tabindex: '-615', dir: 'auto', contenteditable: 'true' }, children: [] }
                ]
              },
              {
                type: 'tag',
                tag: 'bdi',
                attributes: { draggable: 'true' },
                children: [
                  { type: 'tag', tag: 'sup', attributes: { dir: 'rtl', hidden: null, tabindex: '-502', draggable: 'false' }, children: [ { type: 'text', value: 'Cuvbe nibel uhu bebah demzef navgiro.' } ] },
                  { type: 'text', value: 'Fuz katji cebuc wocafig dof.' },
                  { type: 'tag', tag: 'iframe', attributes: { src: 'GT2FdsPAl4ibzi', dir: 'ltr', draggable: 'true', title: '' }, children: [ { type: 'text', value: 'Ba alfite opu la pivvod opbun.' } ] },
                  { type: 'text', value: 'Sojtalruw azifa ga bavec lubet.' },
                  { type: 'tag', tag: 'kbd', attributes: { dir: 'rtl' }, children: [] }
                ]
              },
              {
                type: 'tag',
                tag: 'strong',
                attributes: { hidden: null, dir: 'ltr', tabindex: '418' },
                children: [
                  {
                    type: 'tag',
                    tag: 'canvas',
                    attributes: { draggable: 'false', dir: 'ltr', tabindex: '-680' },
                    children: [
                      { type: 'text', value: 'Lauwdeh vulpocde rozu.' },
                      {
                        type: 'tag',
                        tag: 'textarea',
                        attributes: {
                          required: null, readonly: null, dir: 'auto', rows: '117', spellcheck: 'true', autocomplete: 'off', maxlength: '762', contenteditable: 'true', cols: '867', hidden: null, disabled: null,
                          draggable: 'false'
                        },
                        children: [ { type: 'text', value: 'Ceirapa sev aguuno waze.' } ]
                      },
                      { type: 'tag', tag: 'mark', attributes: { hidden: null, dir: 'ltr' }, children: [] },
                      { type: 'tag', tag: 'embed', children: [], attributes: { dir: 'auto', contenteditable: '', src: '8W33YRr)DBJvg#Nq', title: 'a[)Pdx$dN&]&fsOZ)fMm' } }
                    ]
                  },
                  {
                    type: 'tag',
                    tag: 'object',
                    attributes: { tabindex: '-454' },
                    children: [
                      {
                        type: 'tag',
                        tag: 'input',
                        children: [],
                        attributes: {
                          type: 'email', contenteditable: 'true', readonly: null, tabindex: '-77', autofocus: null, dir: 'auto', multiple: null, draggable: 'true', inputmode: 'url', capture: null, spellcheck: 'false',
                          checked: null, disabled: null, required: null
                        }
                      },
                      { type: 'tag', tag: 'area', children: [], attributes: { contenteditable: 'true', draggable: 'false', dir: 'ltr', shape: 'rect' } },
                      { type: 'text', value: 'Awmonoka emabizu.' }
                    ]
                  },
                  { type: 'tag', tag: 'wbr', children: [], attributes: { tabindex: '381', hidden: null } },
                  { type: 'tag', tag: 'br', children: [], attributes: { tabindex: '-36', hidden: null, dir: 'ltr', draggable: 'true' } },
                  { type: 'text', value: 'Er usurisosu.' }
                ]
              },
              { type: 'text', value: 'Ne og huzob dapil.' },
              {
                type: 'tag',
                tag: 'template',
                attributes: { tabindex: '968', draggable: 'true', contenteditable: 'false' },
                children: [
                  {
                    type: 'tag',
                    tag: 'h4',
                    attributes: { hidden: null, draggable: 'true', tabindex: '14' },
                    children: [ { type: 'tag', tag: 'q', attributes: {}, children: [] }, { type: 'tag', tag: 'keygen', children: [], attributes: { dir: 'auto', draggable: 'true', tabindex: '-622' } } ]
                  },
                  { type: 'tag', tag: 'img', children: [], attributes: { decoding: 'sync', ismap: null, crossorigin: '', contenteditable: 'true', draggable: 'true', hidden: null, tabindex: '621', src: 'pUQrzfN' } },
                  { type: 'tag', tag: 'img', children: [], attributes: { dir: 'auto', tabindex: '-412', src: 'MX[mSoqd8mzuzncgOi', draggable: 'true' } },
                  {
                    type: 'tag',
                    tag: 'nav',
                    attributes: { dir: 'auto' },
                    children: [ { type: 'tag', tag: 'form', attributes: {}, children: [] }, { type: 'tag', tag: 'area', children: [], attributes: { hidden: null, shape: 'default' } } ]
                  }
                ]
              }
            ]
          }
        ]
      },
      { type: 'text', value: 'Ju ziuflul zem zabha.' },
      { type: 'text', value: 'Emobavli delab efki ij vetil ron.' },
      {
        type: 'tag',
        tag: 'ruby',
        attributes: { hidden: null, draggable: 'true' },
        children: [ { type: 'tag', tag: 'rb', attributes: { tabindex: '608' }, children: [ { type: 'tag', tag: 'wbr', children: [], attributes: { hidden: null } } ] } ]
      },
      { type: 'tag', tag: 'figcaption', attributes: { dir: 'rtl', contenteditable: '', hidden: null, draggable: 'true' }, children: [] }
    ]
  },
  {
    type: 'tag',
    tag: 'figure',
    attributes: { contenteditable: '', tabindex: '843', hidden: null, dir: 'ltr' },
    children: [
      {
        type: 'tag',
        tag: 'figcaption',
        attributes: { tabindex: '-491', hidden: null, contenteditable: 'false', dir: 'auto' },
        children: [
          {
            type: 'tag',
            tag: 'mark',
            attributes: { dir: 'auto', draggable: 'true', tabindex: '114', contenteditable: 'true' },
            children: [
              { type: 'text', value: 'Firu vu fo dil.' },
              {
                type: 'tag',
                tag: 'button',
                attributes: { tabindex: '965', draggable: 'true', type: 'button' },
                children: [
                  {
                    type: 'tag',
                    tag: 'code',
                    attributes: { hidden: null, contenteditable: '', draggable: 'false', dir: 'ltr' },
                    children: [
                      { type: 'text', value: 'Vuno nohzim luli igrak tovaav rosoz kog.' },
                      { type: 'text', value: 'Bewolzec devdopo pewo tisirse uwsemi taw.' },
                      { type: 'tag', tag: 'math', attributes: { contenteditable: 'false', hidden: null, overflow: 'elide', draggable: 'false' }, children: [] },
                      { type: 'tag', tag: 'embed', children: [], attributes: { src: '5QBSfFf2h*!&^H', hidden: null, tabindex: '-236', title: 'nj9' } }
                    ]
                  },
                  {
                    type: 'tag',
                    tag: 'audio',
                    attributes: { preload: 'none' },
                    children: [
                      { type: 'tag', tag: 'picture', attributes: { hidden: null, contenteditable: 'true', dir: 'rtl', tabindex: '864' }, children: [] },
                      { type: 'tag', tag: 'area', children: [], attributes: { draggable: 'false', dir: 'ltr' } },
                      { type: 'tag', tag: 'code', attributes: {}, children: [] }
                    ]
                  },
                  {
                    type: 'tag',
                    tag: 'script',
                    attributes: { dir: 'auto', draggable: 'false', src: 'qapXMn', tabindex: '459', hidden: null, contenteditable: 'true', nomodule: null, async: null, defer: null, crossorigin: 'anonymous' },
                    children: [
                      { type: 'tag', tag: 'math', attributes: { draggable: 'true', dir: 'rtl', hidden: null, tabindex: '-378', display: 'inline' }, children: [] },
                      { type: 'tag', tag: 'link', children: [], attributes: { contenteditable: 'true', draggable: 'true', tabindex: '-497', hidden: null, href: 'hny@f(3Buu%VME7b' } },
                      { type: 'tag', tag: 'figure', attributes: {}, children: [] },
                      {
                        type: 'tag', tag: 'iframe', attributes: { src: 'oXLbSh', hidden: null, dir: 'auto', contenteditable: 'true', title: 'WPr' },
                        children: [ { type: 'text', value: 'Wov ukufekku ta ebgutir apehuli ep.' } ]
                      }
                    ]
                  },
                  { type: 'text', value: 'Rekjez zadsiznof bizi meftuud.' }
                ]
              },
              { type: 'tag', tag: 'embed', children: [], attributes: { src: 'Ni8QKuePDWK91phak', contenteditable: '', draggable: 'false', title: '2SsSU' } },
              { type: 'tag', tag: 'area', children: [], attributes: { dir: 'rtl', draggable: 'false' } }
            ]
          },
          { type: 'tag', tag: 'input', children: [], attributes: { capture: null, contenteditable: '', tabindex: '-356', dir: 'auto', multiple: null, checked: null, readonly: null, type: 'search' } },
          {
            type: 'tag',
            tag: 'section',
            attributes: { hidden: null },
            children: [
              {
                type: 'tag',
                tag: 'h5',
                attributes: { dir: 'ltr' },
                children: [
                  { type: 'text', value: 'To kawi vikha abugadeh oza.' },
                  { type: 'tag', tag: 'area', children: [], attributes: { shape: 'poly', hidden: null, dir: 'auto', tabindex: '759' } },
                  {
                    type: 'tag',
                    tag: 'var',
                    attributes: { tabindex: '850', hidden: null, dir: 'ltr' },
                    children: [
                      { type: 'tag', tag: 'data', attributes: { draggable: 'true', dir: 'auto' }, children: [] },
                      { type: 'tag', tag: 'area', children: [], attributes: { dir: 'auto' } },
                      { type: 'tag', tag: 'area', children: [], attributes: {} },
                      { type: 'tag', tag: 'output', attributes: { draggable: 'false', hidden: null, tabindex: '-845', contenteditable: '' }, children: [] },
                      { type: 'tag', tag: 'canvas', attributes: { hidden: null, contenteditable: '', dir: 'rtl', draggable: 'true' }, children: [] }
                    ]
                  }
                ]
              },
              {
                type: 'tag',
                tag: 'time',
                attributes: {},
                children: [
                  {
                    type: 'tag',
                    tag: 'i',
                    attributes: { hidden: null, draggable: 'false', tabindex: '-417' },
                    children: [ { type: 'tag', tag: 'abbr', attributes: { dir: 'auto', hidden: null }, children: [] }, { type: 'tag', tag: 'cite', attributes: { contenteditable: 'false' }, children: [] } ]
                  },
                  {
                    type: 'tag',
                    tag: 'ins',
                    attributes: { contenteditable: 'false', dir: 'ltr' },
                    children: [
                      { type: 'tag', tag: 'bdi', attributes: { dir: 'auto' }, children: [] },
                      { type: 'tag', tag: 'kbd', attributes: { dir: 'auto', draggable: 'false', contenteditable: '' }, children: [] },
                      { type: 'tag', tag: 'select', attributes: { hidden: null }, children: [] },
                      { type: 'text', value: 'Oz hanuvoni ufocekepe pagge gu lucufuonu.' },
                      { type: 'tag', tag: 'iframe', attributes: { dir: 'auto', src: '%8IqUq3NcR%Q@gH#Ctuj', tabindex: '44', title: 'c7yW&O2guEsBatZ1d' }, children: [ { type: 'text', value: 'Docuvpu sutkor.' } ] }
                    ]
                  },
                  { type: 'tag', tag: 'embed', children: [], attributes: { hidden: null, tabindex: '869', dir: 'ltr', src: '#l0y9rZ&YhTZ3ol$$)', title: '$9aj8yq3^' } },
                  {
                    type: 'tag',
                    tag: 'meter',
                    attributes: {},
                    children: [
                      { type: 'tag', tag: 'slot', attributes: { dir: 'ltr', hidden: null, tabindex: '-634' }, children: [] },
                      { type: 'text', value: 'Debikeje osaw zaz wo sij cav.' },
                      { type: 'text', value: 'Vultanlac kel hobfeuw nuro jevzova oza wu.' },
                      { type: 'text', value: 'Tukjiz ku zebuwen nifafdod embotja upanibsa hinhi.' }
                    ]
                  },
                  { type: 'tag', tag: 'embed', children: [], attributes: { src: 'Ry', title: 'Gw[HlaIfYDDJ' } }
                ]
              },
              { type: 'tag', tag: 'ins', attributes: { hidden: null, dir: 'auto', tabindex: '780' }, children: [] }
            ]
          },
          { type: 'text', value: 'Dagun pi wezaw pi lab lefugor.' }
        ]
      },
      {
        type: 'tag',
        tag: 'progress',
        attributes: { tabindex: '-952', contenteditable: '', hidden: null, draggable: 'false' },
        children: [
          {
            type: 'tag',
            tag: 'u',
            attributes: { hidden: null, dir: 'ltr', tabindex: '895', draggable: 'false' },
            children: [
              { type: 'tag', tag: 'keygen', children: [], attributes: { draggable: 'true', contenteditable: 'true', tabindex: '-479' } },
              { type: 'tag', tag: 'area', children: [], attributes: { dir: 'ltr', shape: 'default', hidden: null } },
              { type: 'text', value: 'Cidbop um tamoci hu ezmov kojuma.' }
            ]
          },
          { type: 'text', value: 'Sikwesu akoun lej tuhas inteum.' },
          {
            type: 'tag',
            tag: 'em',
            attributes: {},
            children: [
              { type: 'text', value: 'Nisepdap ukep.' },
              {
                type: 'tag',
                tag: 'datalist',
                attributes: {},
                children: [
                  { type: 'tag', tag: 'option', attributes: { tabindex: '-884', contenteditable: 'true', dir: 'ltr', hidden: null, disabled: null }, children: [ { type: 'text', value: 'Vumi tur la sovi erusu.' } ] }
                ]
              }
            ]
          },
          { type: 'tag', tag: 'template', attributes: { draggable: 'true', contenteditable: 'false', dir: 'ltr', hidden: null }, children: [] },
          {
            type: 'tag',
            tag: 'picture',
            attributes: { dir: 'ltr', hidden: null },
            children: [
              {
                type: 'tag',
                tag: 'img',
                children: [],
                attributes: { contenteditable: 'false', draggable: 'true', src: 'ab(xV[#QHsMMKzXNkjcj', hidden: null, ismap: null, decoding: 'sync', tabindex: '940', crossorigin: 'use-credentials' }
              }
            ]
          }
        ]
      },
      { type: 'text', value: 'Gas neufevuz vahoevi duvurgup vodepun uv.' }
    ]
  },
  { type: 'tag', tag: 'figure', attributes: { tabindex: '288', hidden: null }, children: [] },
  {
    type: 'tag',
    tag: 'figure',
    attributes: { hidden: null, dir: 'auto', draggable: 'true', contenteditable: 'false' },
    children: [
      {
        type: 'tag',
        tag: 'figcaption',
        attributes: { dir: 'rtl', draggable: 'true', hidden: null },
        children: [
          {
            type: 'tag',
            tag: 'h3',
            attributes: { hidden: null, contenteditable: 'false' },
            children: [
              {
                type: 'tag',
                tag: 'meter',
                attributes: { draggable: 'true', hidden: null, contenteditable: 'true', dir: 'ltr' },
                children: [
                  {
                    type: 'tag',
                    tag: 'datalist',
                    attributes: { hidden: null },
                    children: [
                      { type: 'tag', tag: 'option', attributes: { selected: null, hidden: null, contenteditable: 'false', disabled: null, tabindex: '71' }, children: [ { type: 'text', value: 'Lafpef po joh.' } ] },
                      {
                        type: 'tag',
                        tag: 'option',
                        attributes: { disabled: null, hidden: null, draggable: 'false', tabindex: '400', contenteditable: 'false', selected: null },
                        children: [ { type: 'text', value: 'Gar amwean oz dureb dubtum hoftakew.' } ]
                      },
                      {
                        type: 'tag',
                        tag: 'option',
                        attributes: { disabled: null, draggable: 'true', selected: null, contenteditable: 'false', hidden: null, dir: 'auto' },
                        children: [ { type: 'text', value: 'Acofikfag eledabte rohe cidjan.' } ]
                      }
                    ]
                  },
                  {
                    type: 'tag',
                    tag: 'picture',
                    attributes: { hidden: null, dir: 'auto', tabindex: '693' },
                    children: [
                      { type: 'tag', tag: 'source', children: [], attributes: { dir: 'rtl', hidden: null, contenteditable: 'false', draggable: 'false' } },
                      { type: 'tag', tag: 'source', children: [], attributes: {} },
                      { type: 'tag', tag: 'template', attributes: { dir: 'rtl', tabindex: '-442' }, children: [] },
                      { type: 'tag', tag: 'img', children: [], attributes: { src: 'frVNu$RWYNryHy' } },
                      { type: 'tag', tag: 'script', attributes: { contenteditable: '', nomodule: null, hidden: null, async: null, draggable: 'false', integrity: '()mUZ3omNEhF', tabindex: '756' }, children: [] }
                    ]
                  }
                ]
              },
              { type: 'tag', tag: 'math', attributes: { tabindex: '-399', display: 'block' }, children: [] }
            ]
          },
          { type: 'text', value: 'Zigvichat dotzarba je dehim mel imaalisuk oka.' },
          { type: 'text', value: 'Loveruaf cek fo uz otipu.' }
        ]
      },
      {
        type: 'tag',
        tag: 'footer',
        attributes: { tabindex: '487' },
        children: [
          {
            type: 'tag',
            tag: 'sub',
            attributes: {},
            children: [
              { type: 'text', value: 'Rodinom jatafto fero.' },
              {
                type: 'tag',
                tag: 'abbr',
                attributes: {},
                children: [
                  { type: 'text', value: 'Jukfa ah.' },
                  {
                    type: 'tag',
                    tag: 'slot',
                    attributes: { contenteditable: '' },
                    children: [
                      { type: 'text', value: 'Fo ekoav vali efloz ma.' },
                      { type: 'tag', tag: 'progress', attributes: { draggable: 'false', contenteditable: 'false' }, children: [] },
                      { type: 'text', value: 'Gebhoz cub detil.' },
                      { type: 'text', value: 'Fi eh tit mulaz ocvewaka ew it.' }
                    ]
                  }
                ]
              },
              { type: 'text', value: 'Pojnogici faspir ba vatdaom.' }
            ]
          },
          { type: 'tag', tag: 'keygen', children: [], attributes: { dir: 'rtl', tabindex: '775', hidden: null } },
          {
            type: 'tag',
            tag: 'sub',
            attributes: { hidden: null, contenteditable: '', dir: 'rtl' },
            children: [
              { type: 'tag', tag: 'audio', attributes: { preload: 'metadata', tabindex: '382', dir: 'ltr' }, children: [] },
              { type: 'tag', tag: 'abbr', attributes: {}, children: [ { type: 'text', value: 'Umi uho nu piw apodadu demi.' } ] },
              { type: 'text', value: 'Fugod putuvu ive hosnuzon.' }
            ]
          }
        ]
      },
      {
        type: 'tag',
        tag: 'span',
        attributes: { contenteditable: 'true', draggable: 'false', tabindex: '269' },
        children: [
          {
            type: 'tag',
            tag: 'canvas',
            attributes: { tabindex: '342', contenteditable: 'true', dir: 'rtl', draggable: 'false' },
            children: [
              { type: 'tag', tag: 'picture', attributes: { contenteditable: 'false', hidden: null, dir: 'rtl' }, children: [] },
              { type: 'text', value: 'Bugwuz gi.' },
              { type: 'text', value: 'Gemwupgoj rimes esgozer fuh pudli zuffep vabo.' }
            ]
          },
          { type: 'text', value: 'Ajmi pocanro sisun.' },
          { type: 'tag', tag: 'bdi', attributes: { contenteditable: 'false' }, children: [ { type: 'tag', tag: 'b', attributes: {}, children: [] } ] }
        ]
      },
      { type: 'text', value: 'Azoat nedko deci zusjofto garuv zisefluj.' },
      { type: 'tag', tag: 'output', attributes: {}, children: [] }
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
