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
                size: "183",
                tabindex: "-612",
                autofocus: null,
                hidden: null
              },
              children: []
            },
            { type: "text", value: "Ro celel taj sibsof." },
            { type: "text", value: "Ow ajedehir pub lef." },
            { type: "text", value: "Miribu nukonokan cuh zeenejom ju." },
            { type: "tag", tag: "figcaption", attributes: {}, children: [] }
          ]
        },
        {
          type: "tag",
          tag: "figure",
          attributes: {},
          children: [
            {
              type: "tag",
              tag: "h5",
              attributes: {
                dir: "auto",
                draggable: "false",
                contenteditable: "true",
                tabindex: "-95"
              },
              children: [
                {
                  type: "tag",
                  tag: "embed",
                  children: [],
                  attributes: {
                    dir: "auto",
                    tabindex: "849",
                    draggable: "false",
                    src: "5sKcM0FibGho",
                    title: "JxPLZ^ksSEN3pq*fSv"
                  }
                },
                {
                  type: "tag",
                  tag: "output",
                  attributes: {},
                  children: [
                    {
                      type: "tag",
                      tag: "strong",
                      attributes: { dir: "ltr", hidden: null },
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
                              tag: "wbr",
                              children: [],
                              attributes: {
                                dir: "rtl",
                                contenteditable: "true",
                                hidden: null
                              }
                            },
                            {
                              type: "text",
                              value: "Mitavki bun har hepgu liedowa."
                            },
                            {
                              type: "tag",
                              tag: "b",
                              attributes: { tabindex: "878" },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "iframe",
                          attributes: { hidden: null, title: "[PM" },
                          children: [
                            { type: "text", value: "Uwivoke wuwiko ecuawsib." }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "a",
                          attributes: { contenteditable: "false" },
                          children: [
                            {
                              type: "text",
                              value: "Ugabel ze erosi log su putitpo."
                            },
                            {
                              type: "text",
                              value: "Efwisa caznuhijo ohi suzceh egpa."
                            },
                            {
                              type: "tag",
                              tag: "map",
                              attributes: { draggable: "true" },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "meter",
                          attributes: {
                            hidden: null,
                            tabindex: "-615",
                            dir: "auto",
                            contenteditable: "true"
                          },
                          children: []
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "bdi",
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
                        {
                          type: "text",
                          value: "Sojtalruw azifa ga bavec lubet."
                        },
                        {
                          type: "tag",
                          tag: "kbd",
                          attributes: { dir: "rtl" },
                          children: []
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "strong",
                      attributes: { hidden: null, dir: "ltr", tabindex: "418" },
                      children: [
                        {
                          type: "tag",
                          tag: "canvas",
                          attributes: {
                            draggable: "false",
                            dir: "ltr",
                            tabindex: "-680"
                          },
                          children: [
                            { type: "text", value: "Lauwdeh vulpocde rozu." },
                            {
                              type: "tag",
                              tag: "textarea",
                              attributes: {
                                required: null,
                                readonly: null,
                                dir: "auto",
                                rows: "117",
                                spellcheck: "true",
                                autocomplete: "off",
                                maxlength: "762",
                                contenteditable: "true",
                                cols: "867",
                                hidden: null,
                                disabled: null,
                                draggable: "false"
                              },
                              children: [
                                {
                                  type: "text",
                                  value: "Ceirapa sev aguuno waze."
                                }
                              ]
                            },
                            {
                              type: "tag",
                              tag: "mark",
                              attributes: { hidden: null, dir: "ltr" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "embed",
                              children: [],
                              attributes: {
                                dir: "auto",
                                contenteditable: "",
                                src: "8W33YRr)DBJvg#Nq",
                                title: "a[)Pdx$dN&]&fsOZ)fMm"
                              }
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "object",
                          attributes: { tabindex: "-454" },
                          children: [
                            {
                              type: "tag",
                              tag: "input",
                              children: [],
                              attributes: {
                                type: "email",
                                contenteditable: "true",
                                readonly: null,
                                tabindex: "-77",
                                autofocus: null,
                                dir: "auto",
                                multiple: null,
                                draggable: "true",
                                inputmode: "url",
                                capture: null,
                                spellcheck: "false",
                                checked: null,
                                disabled: null,
                                required: null
                              }
                            },
                            {
                              type: "tag",
                              tag: "area",
                              children: [],
                              attributes: {
                                contenteditable: "true",
                                draggable: "false",
                                dir: "ltr",
                                shape: "rect"
                              }
                            },
                            { type: "text", value: "Awmonoka emabizu." }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "wbr",
                          children: [],
                          attributes: { tabindex: "381", hidden: null }
                        },
                        {
                          type: "tag",
                          tag: "br",
                          children: [],
                          attributes: {
                            tabindex: "-36",
                            hidden: null,
                            dir: "ltr",
                            draggable: "true"
                          }
                        },
                        { type: "text", value: "Er usurisosu." }
                      ]
                    },
                    { type: "text", value: "Ne og huzob dapil." },
                    {
                      type: "tag",
                      tag: "template",
                      attributes: {
                        tabindex: "968",
                        draggable: "true",
                        contenteditable: "false"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "h4",
                          attributes: {
                            hidden: null,
                            draggable: "true",
                            tabindex: "14"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "q",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "keygen",
                              children: [],
                              attributes: {
                                dir: "auto",
                                draggable: "true",
                                tabindex: "-622"
                              }
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "img",
                          children: [],
                          attributes: {
                            decoding: "sync",
                            ismap: null,
                            crossorigin: "",
                            contenteditable: "true",
                            draggable: "true",
                            hidden: null,
                            tabindex: "621",
                            src: "pUQrzfN"
                          }
                        },
                        {
                          type: "tag",
                          tag: "img",
                          children: [],
                          attributes: {
                            dir: "auto",
                            tabindex: "-412",
                            src: "MX[mSoqd8mzuzncgOi",
                            draggable: "true"
                          }
                        },
                        {
                          type: "tag",
                          tag: "nav",
                          attributes: { dir: "auto" },
                          children: [
                            {
                              type: "tag",
                              tag: "form",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "area",
                              children: [],
                              attributes: { hidden: null, shape: "default" }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            { type: "text", value: "Ju ziuflul zem zabha." },
            { type: "text", value: "Emobavli delab efki ij vetil ron." },
            {
              type: "tag",
              tag: "ruby",
              attributes: { hidden: null, draggable: "true" },
              children: [
                {
                  type: "tag",
                  tag: "rb",
                  attributes: { tabindex: "608" },
                  children: [
                    {
                      type: "tag",
                      tag: "wbr",
                      children: [],
                      attributes: { hidden: null }
                    }
                  ]
                }
              ]
            },
            {
              type: "tag",
              tag: "figcaption",
              attributes: {
                dir: "rtl",
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
          tag: "figure",
          attributes: {
            contenteditable: "",
            tabindex: "843",
            hidden: null,
            dir: "ltr"
          },
          children: [
            {
              type: "tag",
              tag: "figcaption",
              attributes: {
                tabindex: "-491",
                hidden: null,
                contenteditable: "false",
                dir: "auto"
              },
              children: [
                {
                  type: "tag",
                  tag: "mark",
                  attributes: {
                    dir: "auto",
                    draggable: "true",
                    tabindex: "114",
                    contenteditable: "true"
                  },
                  children: [
                    { type: "text", value: "Firu vu fo dil." },
                    {
                      type: "tag",
                      tag: "button",
                      attributes: {
                        tabindex: "965",
                        draggable: "true",
                        type: "button"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "code",
                          attributes: {
                            hidden: null,
                            contenteditable: "",
                            draggable: "false",
                            dir: "ltr"
                          },
                          children: [
                            {
                              type: "text",
                              value: "Vuno nohzim luli igrak tovaav rosoz kog."
                            },
                            {
                              type: "text",
                              value: "Bewolzec devdopo pewo tisirse uwsemi taw."
                            },
                            {
                              type: "tag",
                              tag: "math",
                              attributes: {
                                contenteditable: "false",
                                hidden: null,
                                overflow: "elide",
                                draggable: "false"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "embed",
                              children: [],
                              attributes: {
                                src: "5QBSfFf2h*!&^H",
                                hidden: null,
                                tabindex: "-236",
                                title: "nj9"
                              }
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "audio",
                          attributes: { preload: "none" },
                          children: [
                            {
                              type: "tag",
                              tag: "picture",
                              attributes: {
                                hidden: null,
                                contenteditable: "true",
                                dir: "rtl",
                                tabindex: "864"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "area",
                              children: [],
                              attributes: { draggable: "false", dir: "ltr" }
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
                          tag: "script",
                          attributes: {
                            dir: "auto",
                            draggable: "false",
                            src: "qapXMn",
                            tabindex: "459",
                            hidden: null,
                            contenteditable: "true",
                            nomodule: null,
                            async: null,
                            defer: null,
                            crossorigin: "anonymous"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "math",
                              attributes: { dir: "rtl", tabindex: "-378" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "link",
                              children: [],
                              attributes: {
                                tabindex: "441",
                                contenteditable: "true",
                                dir: "rtl",
                                hidden: null,
                                href: "lhny@f(3Buu%"
                              }
                            },
                            {
                              type: "text",
                              value: "Budwup reha bicanip wahus atuor."
                            },
                            {
                              type: "tag",
                              tag: "audio",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "h5",
                              attributes: { dir: "rtl", tabindex: "-736" },
                              children: []
                            }
                          ]
                        },
                        { type: "text", value: "In wuape." }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "embed",
                      children: [],
                      attributes: {
                        dir: "ltr",
                        tabindex: "624",
                        src: "OAG@vq([4",
                        title: "#P"
                      }
                    },
                    {
                      type: "tag",
                      tag: "area",
                      children: [],
                      attributes: {
                        shape: "rect",
                        draggable: "false",
                        hidden: null,
                        contenteditable: "",
                        tabindex: "542"
                      }
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "input",
                  children: [],
                  attributes: {
                    capture: null,
                    hidden: null,
                    draggable: "true",
                    dir: "auto",
                    checked: null,
                    disabled: null,
                    spellcheck: "true",
                    multiple: null,
                    contenteditable: "true",
                    type: "color"
                  }
                },
                {
                  type: "tag",
                  tag: "section",
                  attributes: {
                    draggable: "true",
                    dir: "rtl",
                    contenteditable: "true",
                    tabindex: "720"
                  },
                  children: []
                },
                { type: "text", value: "Ju wig." }
              ]
            },
            {
              type: "tag",
              tag: "progress",
              attributes: { hidden: null, draggable: "false", dir: "auto" },
              children: [
                {
                  type: "tag",
                  tag: "small",
                  attributes: { contenteditable: "false" },
                  children: [
                    { type: "text", value: "Wohsul owapeg jan elsajzic." },
                    {
                      type: "tag",
                      tag: "small",
                      attributes: { contenteditable: "true" },
                      children: [
                        {
                          type: "tag",
                          tag: "script",
                          attributes: {
                            contenteditable: "false",
                            crossorigin: "use-credentials",
                            integrity: "(ZH",
                            draggable: "true",
                            src: "(#",
                            hidden: null,
                            nomodule: null,
                            dir: "auto"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "nav",
                              attributes: { tabindex: "-647" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "samp",
                              attributes: {
                                contenteditable: "false",
                                hidden: null,
                                draggable: "false",
                                tabindex: "1000"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "video",
                              attributes: {
                                draggable: "false",
                                tabindex: "-192",
                                dir: "ltr"
                              },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "kbd",
                          attributes: { tabindex: "-845", hidden: null },
                          children: [
                            {
                              type: "tag",
                              tag: "q",
                              attributes: {},
                              children: []
                            }
                          ]
                        },
                        {
                          type: "text",
                          value: "Racu kisciam vespuk hibiz if."
                        },
                        {
                          type: "tag",
                          tag: "b",
                          attributes: { dir: "auto", hidden: null },
                          children: []
                        }
                      ]
                    },
                    { type: "text", value: "Dib tijuk merohac jejog." },
                    {
                      type: "tag",
                      tag: "dfn",
                      attributes: { contenteditable: "", dir: "rtl" },
                      children: []
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "area",
                  children: [],
                  attributes: { draggable: "false", hidden: null }
                }
              ]
            },
            { type: "text", value: "Si izoipfoz mu hotdeble ut acufuonu." }
          ]
        },
        {
          type: "tag",
          tag: "figure",
          attributes: { contenteditable: "true", dir: "auto" },
          children: [
            {
              type: "tag",
              tag: "figcaption",
              attributes: { dir: "ltr" },
              children: []
            },
            { type: "text", value: "Ovbuhomo me hocim har." },
            {
              type: "tag",
              tag: "span",
              attributes: {
                contenteditable: "false",
                hidden: null,
                draggable: "true",
                tabindex: "593"
              },
              children: [
                {
                  type: "tag",
                  tag: "ruby",
                  attributes: {
                    tabindex: "160",
                    draggable: "true",
                    contenteditable: "false"
                  },
                  children: [
                    {
                      type: "tag",
                      tag: "rt",
                      attributes: {
                        hidden: null,
                        contenteditable: "",
                        dir: "ltr",
                        draggable: "false"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "label",
                          attributes: {},
                          children: [
                            {
                              type: "tag",
                              tag: "slot",
                              attributes: {
                                dir: "ltr",
                                hidden: null,
                                tabindex: "-634"
                              },
                              children: []
                            },
                            {
                              type: "text",
                              value: "Debikeje osaw zaz wo sij cav."
                            },
                            {
                              type: "text",
                              value:
                                "Vultanlac kel hobfeuw nuro jevzova oza wu."
                            },
                            {
                              type: "text",
                              value:
                                "Tukjiz ku zebuwen nifafdod embotja upanibsa hinhi."
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "sub",
                          attributes: {},
                          children: []
                        },
                        {
                          type: "text",
                          value: "Jimez bive unjor otuwidag sab."
                        },
                        {
                          type: "tag",
                          tag: "data",
                          attributes: { draggable: "false", tabindex: "9" },
                          children: [
                            {
                              type: "tag",
                              tag: "meter",
                              attributes: {},
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "button",
                          attributes: {
                            contenteditable: "false",
                            type: "reset"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "strong",
                              attributes: {
                                dir: "auto",
                                contenteditable: "true",
                                hidden: null,
                                tabindex: "-707"
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
                  tag: "object",
                  attributes: {
                    data: "#(0U75zT8JfW%OO",
                    hidden: null,
                    contenteditable: "false"
                  },
                  children: [
                    {
                      type: "tag",
                      tag: "q",
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
                      tag: "canvas",
                      attributes: {
                        contenteditable: "false",
                        draggable: "false"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "param",
                          children: [],
                          attributes: {
                            draggable: "true",
                            contenteditable: "false",
                            tabindex: "425",
                            dir: "rtl"
                          }
                        },
                        {
                          type: "tag",
                          tag: "param",
                          children: [],
                          attributes: {
                            dir: "rtl",
                            hidden: null,
                            draggable: "false"
                          }
                        },
                        {
                          type: "tag",
                          tag: "param",
                          children: [],
                          attributes: { draggable: "true", tabindex: "-606" }
                        },
                        {
                          type: "text",
                          value: "Mogsewge tuhas inteum ec hamin."
                        },
                        { type: "text", value: "Vifo ukep so mune cif." }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "b",
                      attributes: { draggable: "true" },
                      children: [
                        {
                          type: "tag",
                          tag: "button",
                          attributes: {
                            tabindex: "-606",
                            disabled: null,
                            type: "reset",
                            dir: "rtl"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "sup",
                              attributes: { dir: "auto", draggable: "true" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "keygen",
                              children: [],
                              attributes: { dir: "ltr", hidden: null }
                            },
                            {
                              type: "tag",
                              tag: "svg",
                              attributes: { draggable: "true" },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "datalist",
                          attributes: {},
                          children: [
                            {
                              type: "tag",
                              tag: "output",
                              attributes: {},
                              children: []
                            }
                          ]
                        }
                      ]
                    },
                    { type: "text", value: "Purbu uvi." }
                  ]
                },
                { type: "text", value: "Pij fabkaofo ufwone gerezuva." },
                {
                  type: "tag",
                  tag: "math",
                  attributes: { dir: "ltr", hidden: null, tabindex: "-931" },
                  children: [
                    {
                      type: "tag",
                      tag: "style",
                      attributes: {
                        hidden: null,
                        draggable: "true",
                        contenteditable: "false"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "iframe",
                          attributes: {
                            tabindex: "-879",
                            hidden: null,
                            contenteditable: "true",
                            dir: "auto",
                            src: "XG7%4#7",
                            title: "8BivOWayy"
                          },
                          children: [
                            {
                              type: "text",
                              value: "Vejnig neci vozim ezipub demihil."
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "template",
                          attributes: {
                            dir: "auto",
                            hidden: null,
                            tabindex: "956"
                          },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "h6",
                          attributes: {
                            contenteditable: "",
                            dir: "auto",
                            tabindex: "243",
                            hidden: null
                          },
                          children: [
                            {
                              type: "text",
                              value: "Kut secwok mud dogom jat."
                            },
                            {
                              type: "tag",
                              tag: "map",
                              attributes: {
                                contenteditable: "true",
                                dir: "ltr"
                              },
                              children: []
                            },
                            {
                              type: "text",
                              value: "Bidub amuhof gijiwo hetjo mordopni feevi."
                            },
                            { type: "text", value: "Gate rohe cidjan." },
                            {
                              type: "tag",
                              tag: "del",
                              attributes: {
                                hidden: null,
                                dir: "auto",
                                tabindex: "693"
                              },
                              children: []
                            }
                          ]
                        }
                      ]
                    },
                    { type: "text", value: "Dos igoja sakle tapu." },
                    {
                      type: "tag",
                      tag: "style",
                      attributes: {},
                      children: [
                        {
                          type: "tag",
                          tag: "article",
                          attributes: { dir: "rtl" },
                          children: [
                            {
                              type: "tag",
                              tag: "article",
                              attributes: {
                                dir: "auto",
                                draggable: "true",
                                tabindex: "-333",
                                hidden: null
                              },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "main",
                          attributes: {
                            contenteditable: "false",
                            hidden: null
                          },
                          children: [
                            {
                              type: "text",
                              value: "Jo nujdefaz zigvichat dotzarba je dehim."
                            },
                            {
                              type: "tag",
                              tag: "img",
                              children: [],
                              attributes: {
                                ismap: null,
                                hidden: null,
                                src: "KQ]P@CpL&DiN8UCX#N#"
                              }
                            },
                            {
                              type: "tag",
                              tag: "img",
                              children: [],
                              attributes: {
                                dir: "ltr",
                                decoding: "sync",
                                src: "z([QV*8QjJ@x&S",
                                ismap: null,
                                tabindex: "-606",
                                contenteditable: "false",
                                hidden: null
                              }
                            },
                            {
                              type: "tag",
                              tag: "select",
                              attributes: {
                                dir: "ltr",
                                draggable: "true",
                                tabindex: "-506",
                                disabled: null,
                                required: null,
                                multiple: null,
                                contenteditable: "",
                                size: "964"
                              },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "nav",
                          attributes: {
                            tabindex: "506",
                            contenteditable: "true",
                            dir: "ltr"
                          },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "meter",
                          attributes: {
                            hidden: null,
                            contenteditable: "true",
                            tabindex: "365",
                            draggable: "true"
                          },
                          children: []
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "aside",
                      attributes: { hidden: null, contenteditable: "true" },
                      children: [
                        {
                          type: "text",
                          value: "Da comugute to modiki lemit loz."
                        },
                        {
                          type: "tag",
                          tag: "fieldset",
                          attributes: {},
                          children: [
                            {
                              type: "tag",
                              tag: "legend",
                              attributes: {},
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "dfn",
                          attributes: {
                            contenteditable: "false",
                            hidden: null
                          },
                          children: []
                        },
                        { type: "text", value: "Gebhoz cub detil." },
                        {
                          type: "text",
                          value: "Fi eh tit mulaz ocvewaka ew it."
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              type: "tag",
              tag: "main",
              attributes: { tabindex: "450", draggable: "true" },
              children: [
                { type: "tag", tag: "base", children: [], attributes: {} },
                {
                  type: "tag",
                  tag: "input",
                  children: [],
                  attributes: {
                    type: "button",
                    checked: null,
                    autofocus: null,
                    disabled: null,
                    contenteditable: "",
                    multiple: null,
                    inputmode: "url",
                    readonly: null,
                    required: null,
                    tabindex: "738",
                    hidden: null
                  }
                },
                {
                  type: "tag",
                  tag: "link",
                  children: [],
                  attributes: { hidden: null, draggable: "false", href: "mEhO" }
                }
              ]
            },
            {
              type: "tag",
              tag: "template",
              attributes: {
                hidden: null,
                contenteditable: "",
                tabindex: "-515",
                draggable: "false"
              },
              children: [
                {
                  type: "tag",
                  tag: "nav",
                  attributes: { hidden: null },
                  children: [
                    {
                      type: "tag",
                      tag: "data",
                      attributes: { contenteditable: "", hidden: null },
                      children: [
                        {
                          type: "tag",
                          tag: "bdo",
                          attributes: {
                            draggable: "false",
                            tabindex: "657",
                            hidden: null
                          },
                          children: []
                        }
                      ]
                    },
                    { type: "text", value: "Onde rita." },
                    {
                      type: "tag",
                      tag: "dl",
                      attributes: {
                        dir: "ltr",
                        contenteditable: "true",
                        draggable: "false",
                        hidden: null
                      },
                      children: []
                    },
                    {
                      type: "text",
                      value: "Vuevhum zel zongobki jumwafo azpiej."
                    },
                    {
                      type: "tag",
                      tag: "label",
                      attributes: {
                        draggable: "false",
                        tabindex: "297",
                        hidden: null
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "bdi",
                          attributes: {},
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "q",
                          attributes: {
                            draggable: "false",
                            contenteditable: "false"
                          },
                          children: [
                            {
                              type: "text",
                              value: "Let ravebu gozerza nuudeno ifimobo."
                            },
                            {
                              type: "tag",
                              tag: "template",
                              attributes: {},
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
                              tag: "slot",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "progress",
                              attributes: {},
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "kbd",
                          attributes: { contenteditable: "true" },
                          children: [
                            {
                              type: "tag",
                              tag: "math",
                              attributes: {
                                tabindex: "602",
                                hidden: null,
                                contenteditable: ""
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "audio",
                              attributes: { draggable: "false" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "data",
                              attributes: {},
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
          attributes: { dir: "ltr", draggable: "false", hidden: null },
          children: [
            {
              type: "tag",
              tag: "figcaption",
              attributes: {},
              children: [
                {
                  type: "tag",
                  tag: "section",
                  attributes: { hidden: null, draggable: "true" },
                  children: [
                    {
                      type: "tag",
                      tag: "sub",
                      attributes: { dir: "auto", hidden: null },
                      children: []
                    },
                    {
                      type: "tag",
                      tag: "samp",
                      attributes: { tabindex: "299", draggable: "false" },
                      children: []
                    },
                    {
                      type: "tag",
                      tag: "meter",
                      attributes: { tabindex: "-225" },
                      children: [
                        {
                          type: "tag",
                          tag: "cite",
                          attributes: { tabindex: "-49", dir: "auto" },
                          children: [
                            {
                              type: "tag",
                              tag: "span",
                              attributes: {
                                contenteditable: "",
                                tabindex: "-752",
                                hidden: null
                              },
                              children: []
                            },
                            { type: "text", value: "Ceceje it jes esca." }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "kbd",
                          attributes: {
                            tabindex: "562",
                            contenteditable: "true"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "small",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "text",
                              value: "Divmat hosuz vo se uzuja."
                            },
                            { type: "text", value: "We durim." }
                          ]
                        }
                      ]
                    },
                    {
                      type: "text",
                      value:
                        "Ek corrocnu favuf nunorec dujubale idkos bedvudhez."
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "time",
                  attributes: { draggable: "true", hidden: null },
                  children: [
                    { type: "text", value: "Loakdo gefdej sepapgu palrodtu." },
                    {
                      type: "tag",
                      tag: "time",
                      attributes: { tabindex: "277" },
                      children: [
                        { type: "text", value: "Tucidu kuzpuvo fuuko." },
                        { type: "text", value: "Vi bot." },
                        {
                          type: "text",
                          value: "Lo kuawdos nut kepu kifwadar fu nastip."
                        },
                        {
                          type: "tag",
                          tag: "select",
                          attributes: {
                            hidden: null,
                            disabled: null,
                            required: null,
                            autofocus: null,
                            draggable: "true"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "script",
                              attributes: {
                                contenteditable: "",
                                src: "zZ",
                                crossorigin: "anonymous",
                                dir: "ltr",
                                defer: null,
                                async: null,
                                hidden: null
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "option",
                              attributes: {
                                dir: "auto",
                                contenteditable: "false"
                              },
                              children: [
                                {
                                  type: "text",
                                  value: "Ata howvan li hura utpi mo uha."
                                }
                              ]
                            },
                            {
                              type: "tag",
                              tag: "optgroup",
                              attributes: {
                                tabindex: "805",
                                dir: "ltr",
                                hidden: null,
                                draggable: "false",
                                disabled: null
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "optgroup",
                              attributes: {
                                tabindex: "-635",
                                draggable: "true",
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
                            contenteditable: "true",
                            hidden: null,
                            type: "reset",
                            autofocus: null,
                            dir: "ltr"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "b",
                              attributes: { dir: "ltr" },
                              children: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "input",
                      children: [],
                      attributes: {
                        disabled: null,
                        contenteditable: "",
                        spellcheck: "false",
                        multiple: null,
                        inputmode: "text",
                        type: "text",
                        checked: null,
                        autofocus: null,
                        draggable: "false",
                        hidden: null,
                        dir: "ltr"
                      }
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "cite",
                  attributes: {},
                  children: [
                    { type: "text", value: "Cetsi diw eta sammahmis kud." },
                    {
                      type: "tag",
                      tag: "svg",
                      attributes: {
                        contenteditable: "true",
                        draggable: "false"
                      },
                      children: [
                        { type: "text", value: "Jugnozjok haj sa heulni." },
                        {
                          type: "tag",
                          tag: "br",
                          children: [],
                          attributes: {
                            contenteditable: "true",
                            dir: "ltr",
                            hidden: null
                          }
                        },
                        {
                          type: "tag",
                          tag: "embed",
                          children: [],
                          attributes: {
                            hidden: null,
                            draggable: "true",
                            contenteditable: "false",
                            src: "h",
                            title: "7GQqLDv"
                          }
                        },
                        {
                          type: "tag",
                          tag: "h5",
                          attributes: {
                            dir: "rtl",
                            tabindex: "113",
                            draggable: "true",
                            contenteditable: "false"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "abbr",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "samp",
                              attributes: { contenteditable: "true" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "keygen",
                              children: [],
                              attributes: { hidden: null, dir: "auto" }
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
              tag: "h3",
              attributes: { hidden: null },
              children: [
                { type: "text", value: "Huc ire." },
                {
                  type: "tag",
                  tag: "var",
                  attributes: {},
                  children: [
                    {
                      type: "tag",
                      tag: "label",
                      attributes: { hidden: null, tabindex: "-355" },
                      children: [
                        {
                          type: "tag",
                          tag: "q",
                          attributes: {
                            contenteditable: "",
                            hidden: null,
                            tabindex: "903"
                          },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "iframe",
                          attributes: {
                            hidden: null,
                            tabindex: "-533",
                            contenteditable: "true",
                            draggable: "true",
                            title: "D"
                          },
                          children: [{ type: "text", value: "Gelapalov vare." }]
                        },
                        {
                          type: "tag",
                          tag: "picture",
                          attributes: {
                            hidden: null,
                            draggable: "true",
                            dir: "auto",
                            contenteditable: "true"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "script",
                              attributes: {
                                contenteditable: "",
                                hidden: null,
                                nomodule: null,
                                tabindex: "-430",
                                src: "$4z",
                                defer: null
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "template",
                              attributes: { contenteditable: "true" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "template",
                              attributes: { hidden: null },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "source",
                              children: [],
                              attributes: { dir: "ltr" }
                            },
                            {
                              type: "tag",
                              tag: "img",
                              children: [],
                              attributes: {
                                hidden: null,
                                tabindex: "218",
                                draggable: "false",
                                contenteditable: "true",
                                src: "Ymk)Jqc[LN",
                                ismap: null,
                                dir: "ltr"
                              }
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "q",
                          attributes: { contenteditable: "" },
                          children: [
                            {
                              type: "tag",
                              tag: "img",
                              children: [],
                              attributes: {
                                dir: "ltr",
                                hidden: null,
                                contenteditable: "false",
                                src: "B(BxJ$GS]9O[gvS)l"
                              }
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "bdo",
                          attributes: {},
                          children: [
                            {
                              type: "tag",
                              tag: "small",
                              attributes: {
                                draggable: "true",
                                tabindex: "839"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "button",
                              attributes: {
                                disabled: null,
                                dir: "auto",
                                type: "submit"
                              },
                              children: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "bdi",
                      attributes: {
                        tabindex: "583",
                        draggable: "false",
                        dir: "rtl",
                        contenteditable: ""
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "code",
                          attributes: {
                            dir: "ltr",
                            draggable: "false",
                            hidden: null
                          },
                          children: [
                            {
                              type: "text",
                              value: "Fuinori foracvel ozoluci pihpegis sipen."
                            },
                            {
                              type: "tag",
                              tag: "script",
                              attributes: {
                                nomodule: null,
                                integrity: "Jo]ie@aGV!w%rex$s",
                                src: ")",
                                hidden: null,
                                draggable: "true",
                                crossorigin: "use-credentials",
                                tabindex: "19"
                              },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "wbr",
                          children: [],
                          attributes: {
                            hidden: null,
                            contenteditable: "true",
                            draggable: "true",
                            dir: "rtl"
                          }
                        },
                        {
                          type: "tag",
                          tag: "em",
                          attributes: { hidden: null },
                          children: [
                            {
                              type: "tag",
                              tag: "i",
                              attributes: { tabindex: "-677", hidden: null },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "code",
                              attributes: {},
                              children: []
                            }
                          ]
                        }
                      ]
                    },
                    { type: "tag", tag: "kbd", attributes: {}, children: [] }
                  ]
                },
                {
                  type: "tag",
                  tag: "script",
                  attributes: {},
                  children: [
                    {
                      type: "tag",
                      tag: "h6",
                      attributes: {
                        tabindex: "700",
                        draggable: "true",
                        hidden: null
                      },
                      children: []
                    },
                    {
                      type: "tag",
                      tag: "audio",
                      attributes: { draggable: "true", hidden: null },
                      children: []
                    },
                    {
                      type: "tag",
                      tag: "audio",
                      attributes: {},
                      children: [
                        {
                          type: "tag",
                          tag: "h4",
                          attributes: {},
                          children: [
                            {
                              type: "tag",
                              tag: "u",
                              attributes: { tabindex: "842", dir: "ltr" },
                              children: []
                            },
                            { type: "text", value: "Co jegjit fig kiegtez." },
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
                      tag: "section",
                      attributes: { dir: "rtl" },
                      children: [
                        { type: "text", value: "Ticvig huhjin fuwek juap." },
                        {
                          type: "tag",
                          tag: "ruby",
                          attributes: {
                            contenteditable: "",
                            dir: "ltr",
                            draggable: "true"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "rt",
                              attributes: {
                                tabindex: "-340",
                                contenteditable: "false",
                                dir: "auto"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "dfn",
                              attributes: { tabindex: "-827" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "rp",
                              attributes: { draggable: "false" },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "iframe",
                          attributes: {
                            hidden: null,
                            title: "$*GF^BB*)XgiYdKP"
                          },
                          children: [
                            {
                              type: "text",
                              value: "Vadhovaz dur jeczouba ujeki goze."
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                { type: "tag", tag: "q", attributes: {}, children: [] }
              ]
            },
            {
              type: "text",
              value: "Mimurlo wugorsah opwo tak nancebva zijavbej ebdukpo."
            },
            {
              type: "tag",
              tag: "i",
              attributes: { dir: "ltr", draggable: "false" },
              children: [
                {
                  type: "tag",
                  tag: "area",
                  children: [],
                  attributes: {
                    dir: "rtl",
                    draggable: "true",
                    hidden: null,
                    contenteditable: "false"
                  }
                },
                {
                  type: "tag",
                  tag: "s",
                  attributes: {
                    contenteditable: "true",
                    draggable: "false",
                    tabindex: "-120",
                    hidden: null
                  },
                  children: [{ type: "text", value: "Zo losa vouvu." }]
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
