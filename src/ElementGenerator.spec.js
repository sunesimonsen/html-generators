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
                        tag: "em",
                        attributes: {
                          draggable: "true",
                          contenteditable: "false"
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "u",
                            attributes: {
                              contenteditable: "false",
                              hidden: null
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "time",
                            attributes: { tabindex: "543", draggable: "true" },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "time",
                            attributes: {
                              contenteditable: "false",
                              tabindex: "-198",
                              hidden: null,
                              dir: "ltr"
                            },
                            children: []
                          },
                          {
                            type: "text",
                            value: "Wot cujduvtih le votevned esohogbi dadeip."
                          },
                          { type: "text", value: "Pow si gewse iwahoil." }
                        ]
                      }
                    ]
                  },
                  { type: "text", value: "Mu kudlewje bueh pi hoje fef." },
                  { type: "text", value: "Mechug poh ub umi je." },
                  {
                    type: "tag",
                    tag: "bdo",
                    attributes: {
                      hidden: null,
                      contenteditable: "true",
                      draggable: "true",
                      tabindex: "553"
                    },
                    children: [
                      { type: "text", value: "Upeaco kiwaser wi logumem." },
                      {
                        type: "tag",
                        tag: "datalist",
                        attributes: {
                          tabindex: "-209",
                          contenteditable: "true",
                          draggable: "false",
                          hidden: null
                        },
                        children: [
                          {
                            type: "text",
                            value: "Huuw ipaje ewumovecu iro lavub."
                          },
                          {
                            type: "tag",
                            tag: "option",
                            attributes: { dir: "ltr" },
                            children: [
                              { type: "text", value: "Tugohi ze erosi log." }
                            ]
                          },
                          {
                            type: "tag",
                            tag: "wbr",
                            children: [],
                            attributes: { dir: "rtl" }
                          },
                          {
                            type: "tag",
                            tag: "option",
                            attributes: {
                              selected: null,
                              draggable: "false",
                              disabled: null,
                              hidden: null,
                              tabindex: "-503",
                              dir: "rtl"
                            },
                            children: [
                              {
                                type: "text",
                                value: "Hojizo uw juvza kimsuzceh."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "strong",
                        attributes: { contenteditable: "false" },
                        children: [
                          {
                            type: "tag",
                            tag: "canvas",
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
                tag: "picture",
                attributes: {
                  hidden: null,
                  tabindex: "-615",
                  dir: "auto",
                  contenteditable: "true"
                },
                children: []
              },
              { type: "text", value: "Ihera lihakhup patofcok." },
              { type: "text", value: "Ija dinbel uhu bebah demzef navgiro." }
            ]
          },
          {
            type: "tag",
            tag: "button",
            attributes: {
              dir: "ltr",
              autofocus: null,
              contenteditable: "false",
              tabindex: "-271",
              hidden: null,
              type: "reset"
            },
            children: [
              { type: "text", value: "Fune dof jozwom wibse daj ca." },
              { type: "text", value: "Ura doal." },
              { type: "text", value: "Mo tuibe tupum foctub." },
              {
                type: "tag",
                tag: "script",
                attributes: {
                  crossorigin: "use-credentials",
                  src: "*UC8)W%pouf",
                  integrity: "bcg",
                  nomodule: null,
                  tabindex: "336",
                  defer: null,
                  dir: "rtl",
                  draggable: "true",
                  async: null
                },
                children: [
                  {
                    type: "tag",
                    tag: "nav",
                    attributes: {
                      dir: "auto",
                      tabindex: "-629",
                      hidden: null,
                      contenteditable: "false"
                    },
                    children: []
                  },
                  {
                    type: "tag",
                    tag: "math",
                    attributes: {
                      draggable: "false",
                      tabindex: "807",
                      display: "inline",
                      dir: "rtl",
                      hidden: null
                    },
                    children: [
                      {
                        type: "tag",
                        tag: "math",
                        attributes: { overflow: "truncate", display: "inline" },
                        children: [
                          { type: "text", value: "Ic buece oru pocde." },
                          {
                            type: "tag",
                            tag: "h6",
                            attributes: {
                              dir: "auto",
                              draggable: "false",
                              hidden: null
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "sub",
                            attributes: {
                              contenteditable: "",
                              tabindex: "550",
                              draggable: "true"
                            },
                            children: []
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "nav",
                        attributes: {
                          draggable: "true",
                          dir: "auto",
                          tabindex: "837",
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
          { type: "text", value: "We aw cihuluj huwsojwa lirhu mi mi." },
          { type: "text", value: "Dod zorhukne rek buzbewru cemucite." },
          {
            type: "tag",
            tag: "i",
            attributes: { dir: "rtl", tabindex: "-902", draggable: "true" },
            children: [
              {
                type: "tag",
                tag: "var",
                attributes: { draggable: "true", dir: "ltr", hidden: null },
                children: [
                  { type: "text", value: "Kisog ic." },
                  {
                    type: "tag",
                    tag: "samp",
                    attributes: {
                      tabindex: "920",
                      hidden: null,
                      dir: "ltr",
                      draggable: "false"
                    },
                    children: [
                      {
                        type: "tag",
                        tag: "area",
                        children: [],
                        attributes: { hidden: null, shape: "default" }
                      },
                      {
                        type: "text",
                        value: "Nafeca amuuwizoz leggaog huzob dapil."
                      },
                      {
                        type: "tag",
                        tag: "small",
                        attributes: {
                          tabindex: "968",
                          draggable: "true",
                          contenteditable: "false"
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "br",
                            children: [],
                            attributes: {
                              dir: "auto",
                              hidden: null,
                              contenteditable: "true",
                              tabindex: "590"
                            }
                          },
                          {
                            type: "text",
                            value: "Dulim ikerur fiwpogna pehtika."
                          },
                          {
                            type: "tag",
                            tag: "span",
                            attributes: { contenteditable: "true", dir: "ltr" },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "samp",
                            attributes: {
                              contenteditable: "false",
                              tabindex: "474",
                              draggable: "false"
                            },
                            children: []
                          }
                        ]
                      },
                      { type: "tag", tag: "wbr", children: [], attributes: {} },
                      { type: "text", value: "Bu je di nef divedo." }
                    ]
                  }
                ]
              },
              {
                type: "tag",
                tag: "input",
                children: [],
                attributes: {
                  inputmode: "tel",
                  type: "datetime-local",
                  dir: "auto",
                  capture: null,
                  spellcheck: "default",
                  required: null,
                  disabled: null
                }
              },
              { type: "text", value: "Peplil cadfoivi bavliha lab efki." },
              {
                type: "tag",
                tag: "dfn",
                attributes: {},
                children: [
                  {
                    type: "tag",
                    tag: "picture",
                    attributes: { hidden: null, dir: "rtl" },
                    children: []
                  }
                ]
              },
              { type: "text", value: "Sismid keton pu oga fe." }
            ]
          }
        ]
      },
      {
        type: "tag",
        tag: "code",
        attributes: { draggable: "true" },
        children: [
          { type: "text", value: "Udusuebu pavuwrin esgu mam." },
          {
            type: "tag",
            tag: "canvas",
            attributes: { dir: "auto", draggable: "true", contenteditable: "" },
            children: [
              { type: "text", value: "Firu vu fo dil." },
              {
                type: "tag",
                tag: "embed",
                children: [],
                attributes: {
                  hidden: null,
                  draggable: "false",
                  src: ")Ej*2]*pnCe&21Qd!",
                  title: "63"
                }
              },
              {
                type: "tag",
                tag: "area",
                children: [],
                attributes: {
                  contenteditable: "true",
                  tabindex: "523",
                  shape: "circle",
                  hidden: null
                }
              }
            ]
          },
          {
            type: "tag",
            tag: "sup",
            attributes: { tabindex: "392" },
            children: [
              {
                type: "tag",
                tag: "script",
                attributes: {
                  draggable: "false",
                  hidden: null,
                  integrity: "*yU",
                  nomodule: null,
                  src: "km6$TKN",
                  defer: null
                },
                children: [
                  {
                    type: "tag",
                    tag: "wbr",
                    children: [],
                    attributes: { draggable: "false" }
                  },
                  {
                    type: "tag",
                    tag: "figure",
                    attributes: {
                      draggable: "false",
                      hidden: null,
                      tabindex: "110"
                    },
                    children: [
                      {
                        type: "text",
                        value: "Sirse uwsemi taw pahas ociwowwo."
                      },
                      {
                        type: "tag",
                        tag: "small",
                        attributes: {},
                        children: [
                          {
                            type: "tag",
                            tag: "picture",
                            attributes: {
                              draggable: "true",
                              contenteditable: "false",
                              hidden: null,
                              tabindex: "-124"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "b",
                            attributes: { tabindex: "-519" },
                            children: []
                          },
                          { type: "text", value: "Cogu semiewu kioli nu gi." },
                          {
                            type: "tag",
                            tag: "time",
                            attributes: {
                              contenteditable: "true",
                              dir: "auto"
                            },
                            children: []
                          }
                        ]
                      },
                      { type: "text", value: "Bepaz fiecufi kak." },
                      {
                        type: "text",
                        value: "Awgi bel sahwimril roda cusje ritudwup."
                      },
                      {
                        type: "tag",
                        tag: "figcaption",
                        attributes: { contenteditable: "", draggable: "false" },
                        children: [
                          {
                            type: "tag",
                            tag: "bdi",
                            attributes: { dir: "auto", draggable: "false" },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "math",
                            attributes: {
                              display: "block",
                              tabindex: "-293",
                              overflow: "scale",
                              dir: "ltr",
                              draggable: "true"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "p",
                            attributes: {},
                            children: []
                          }
                        ]
                      }
                    ]
                  },
                  { type: "text", value: "Dasokiwu kelen ep." },
                  {
                    type: "tag",
                    tag: "nav",
                    attributes: { draggable: "false" },
                    children: [
                      {
                        type: "tag",
                        tag: "svg",
                        attributes: {
                          contenteditable: "false",
                          tabindex: "471",
                          draggable: "true"
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "a",
                            attributes: {
                              draggable: "true",
                              tabindex: "-645",
                              dir: "rtl"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "embed",
                            children: [],
                            attributes: { src: "mZuYb8^Ni8Q", title: "PDWK9" }
                          }
                        ]
                      },
                      { type: "text", value: "Fa jus sopan." },
                      {
                        type: "tag",
                        tag: "section",
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
                            tag: "div",
                            attributes: {
                              draggable: "true",
                              dir: "rtl",
                              hidden: null
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "sub",
                            attributes: {
                              draggable: "false",
                              tabindex: "520",
                              hidden: null,
                              dir: "rtl"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "h2",
                            attributes: {
                              dir: "auto",
                              tabindex: "-0",
                              contenteditable: "",
                              draggable: "false"
                            },
                            children: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: "text",
                    value: "Cubcoma tijuk merohac jejog jaubi mo oz."
                  }
                ]
              },
              {
                type: "tag",
                tag: "label",
                attributes: {
                  hidden: null,
                  dir: "auto",
                  contenteditable: "false"
                },
                children: [
                  {
                    type: "tag",
                    tag: "map",
                    attributes: { dir: "ltr", draggable: "true", hidden: null },
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
                tag: "meter",
                attributes: {},
                children: [
                  {
                    type: "tag",
                    tag: "object",
                    attributes: {},
                    children: [
                      {
                        type: "tag",
                        tag: "bdo",
                        attributes: { draggable: "false", hidden: null },
                        children: [
                          {
                            type: "tag",
                            tag: "bdi",
                            attributes: {
                              tabindex: "301",
                              contenteditable: "false",
                              draggable: "false"
                            },
                            children: []
                          }
                        ]
                      },
                      {
                        type: "text",
                        value: "Kacav uruzoso cakel hobfeuw nuro jevzova."
                      },
                      { type: "text", value: "Udawumup zeuhku zebuwen." }
                    ]
                  },
                  {
                    type: "text",
                    value: "Ruge zanumbot bu tatpasa hinhi ti so."
                  },
                  {
                    type: "tag",
                    tag: "q",
                    attributes: { dir: "rtl", hidden: null },
                    children: []
                  }
                ]
              },
              {
                type: "tag",
                tag: "mark",
                attributes: { dir: "auto", tabindex: "-657", hidden: null },
                children: [
                  {
                    type: "tag",
                    tag: "small",
                    attributes: { contenteditable: "false" },
                    children: [
                      {
                        type: "text",
                        value: "Ohpiij ac kaser afavatar sucomwu."
                      },
                      {
                        type: "tag",
                        tag: "picture",
                        attributes: {
                          tabindex: "-612",
                          draggable: "true",
                          dir: "ltr",
                          hidden: null
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "template",
                            attributes: { tabindex: "-526", hidden: null },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "script",
                            attributes: {
                              contenteditable: "",
                              defer: null,
                              src: "y3n#6GWdKlPb1Wqy]O[K",
                              tabindex: "-199"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "script",
                            attributes: {
                              contenteditable: "true",
                              tabindex: "847"
                            },
                            children: []
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "iframe",
                        attributes: {
                          tabindex: "867",
                          dir: "rtl",
                          title: "c1DKS#S%6FWu"
                        },
                        children: [
                          { type: "text", value: "Genovhas inteum ec." }
                        ]
                      }
                    ]
                  },
                  { type: "text", value: "Duni lonfo ukep so." },
                  {
                    type: "tag",
                    tag: "slot",
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
                            tag: "h4",
                            attributes: { tabindex: "-34", hidden: null },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "input",
                            children: [],
                            attributes: { type: "color" }
                          },
                          {
                            type: "tag",
                            tag: "section",
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
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "keygen",
                        children: [],
                        attributes: {
                          contenteditable: "true",
                          draggable: "false"
                        }
                      },
                      {
                        type: "tag",
                        tag: "sub",
                        attributes: {
                          contenteditable: "false",
                          tabindex: "580",
                          draggable: "true"
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "i",
                            attributes: {},
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "br",
                            children: [],
                            attributes: {}
                          },
                          {
                            type: "text",
                            value: "Woufwo hu hoezuva tueno ot vofvuktic."
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "keygen",
                        children: [],
                        attributes: { hidden: null }
                      },
                      {
                        type: "tag",
                        tag: "picture",
                        attributes: {},
                        children: [
                          {
                            type: "tag",
                            tag: "script",
                            attributes: {
                              integrity: "XG7%4#7",
                              defer: null,
                              contenteditable: "true",
                              tabindex: "818",
                              draggable: "true",
                              nomodule: null,
                              src: "WayyUB",
                              hidden: null,
                              dir: "rtl"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "source",
                            children: [],
                            attributes: {
                              dir: "ltr",
                              tabindex: "373",
                              hidden: null
                            }
                          },
                          {
                            type: "tag",
                            tag: "img",
                            children: [],
                            attributes: {
                              contenteditable: "true",
                              src: "O@(M!J^b8zi"
                            }
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
                            attributes: {
                              draggable: "true",
                              contenteditable: "false"
                            },
                            children: []
                          }
                        ]
                      }
                    ]
                  },
                  { type: "text", value: "Wumafbu izvu gula po joh rindoweg." }
                ]
              }
            ]
          },
          { type: "text", value: "Difvu rar an oz dureb dubtum hoftakew." },
          { type: "text", value: "Rezewu vodopni feevi dab hof heksal jan." }
        ]
      },
      {
        type: "tag",
        tag: "code",
        attributes: { hidden: null, dir: "auto", tabindex: "693" },
        children: [
          { type: "text", value: "Ina lelo pu." },
          { type: "text", value: "Cepjunvig ka." },
          {
            type: "tag",
            tag: "i",
            attributes: { contenteditable: "true", hidden: null, dir: "auto" },
            children: [
              {
                type: "tag",
                tag: "i",
                attributes: {
                  dir: "rtl",
                  contenteditable: "true",
                  tabindex: "756"
                },
                children: [
                  {
                    type: "tag",
                    tag: "video",
                    attributes: { dir: "auto", contenteditable: "false" },
                    children: [
                      {
                        type: "tag",
                        tag: "datalist",
                        attributes: {
                          tabindex: "-36",
                          draggable: "true",
                          hidden: null
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "img",
                            children: [],
                            attributes: {
                              contenteditable: "",
                              draggable: "true",
                              decoding: "auto",
                              src: "Ml&6KQ]P@CpL&"
                            }
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "math",
                        attributes: {},
                        children: [
                          {
                            type: "tag",
                            tag: "nav",
                            attributes: {
                              hidden: null,
                              tabindex: "-819",
                              contenteditable: "",
                              dir: "rtl"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "h5",
                            attributes: {},
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "script",
                            attributes: {
                              draggable: "false",
                              hidden: null,
                              integrity: "SKkS%49",
                              defer: null,
                              tabindex: "-503",
                              nomodule: null,
                              crossorigin: "anonymous"
                            },
                            children: []
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "del",
                        attributes: {},
                        children: [
                          {
                            type: "tag",
                            tag: "track",
                            children: [],
                            attributes: { tabindex: "-550" }
                          },
                          {
                            type: "tag",
                            tag: "track",
                            children: [],
                            attributes: {
                              contenteditable: "true",
                              dir: "auto",
                              hidden: null,
                              tabindex: "-278"
                            }
                          },
                          {
                            type: "text",
                            value: "Gasoj ci nepucor mef do da comugute."
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "slot",
                        attributes: { contenteditable: "true" },
                        children: [
                          {
                            type: "tag",
                            tag: "source",
                            children: [],
                            attributes: {
                              draggable: "true",
                              dir: "rtl",
                              hidden: null,
                              contenteditable: "true"
                            }
                          },
                          {
                            type: "tag",
                            tag: "track",
                            children: [],
                            attributes: {
                              tabindex: "11",
                              contenteditable: "true"
                            }
                          },
                          {
                            type: "tag",
                            tag: "track",
                            children: [],
                            attributes: {}
                          }
                        ]
                      },
                      { type: "text", value: "Agzod teh hoz cub." }
                    ]
                  },
                  {
                    type: "tag",
                    tag: "time",
                    attributes: { dir: "rtl", contenteditable: "true" },
                    children: [
                      {
                        type: "text",
                        value: "Netidu vew nagewhu apvenog cimfas."
                      },
                      {
                        type: "tag",
                        tag: "bdo",
                        attributes: {
                          draggable: "true",
                          dir: "ltr",
                          tabindex: "717",
                          contenteditable: ""
                        },
                        children: [
                          { type: "text", value: "Usvofgi vus ma." },
                          { type: "text", value: "Uwe hozvede." },
                          {
                            type: "tag",
                            tag: "select",
                            attributes: {
                              draggable: "true",
                              disabled: null,
                              contenteditable: "false",
                              tabindex: "-293",
                              autofocus: null,
                              size: "980"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "label",
                            attributes: { draggable: "false", hidden: null },
                            children: []
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "embed",
                        children: [],
                        attributes: { src: "zi&", title: "BBFO" }
                      },
                      {
                        type: "tag",
                        tag: "q",
                        attributes: { hidden: null },
                        children: []
                      },
                      {
                        type: "tag",
                        tag: "img",
                        children: [],
                        attributes: {
                          draggable: "false",
                          dir: "auto",
                          decoding: "sync",
                          contenteditable: "false",
                          hidden: null,
                          crossorigin: "use-credentials",
                          ismap: null,
                          src: "$!t&OsV"
                        }
                      }
                    ]
                  }
                ]
              },
              {
                type: "tag",
                tag: "noscript",
                attributes: { draggable: "false" },
                children: [
                  {
                    type: "tag",
                    tag: "object",
                    attributes: {
                      hidden: null,
                      contenteditable: "false",
                      draggable: "false",
                      tabindex: "-818",
                      data: "Ll!z2"
                    },
                    children: [
                      {
                        type: "tag",
                        tag: "blockquote",
                        attributes: {},
                        children: [
                          {
                            type: "tag",
                            tag: "b",
                            attributes: {},
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "output",
                            attributes: {
                              draggable: "false",
                              contenteditable: "false"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "hr",
                            children: [],
                            attributes: { contenteditable: "" }
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "blockquote",
                        attributes: { tabindex: "743", hidden: null },
                        children: [
                          {
                            type: "tag",
                            tag: "code",
                            attributes: {
                              hidden: null,
                              tabindex: "-202",
                              contenteditable: "false",
                              dir: "auto"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "h3",
                            attributes: {
                              dir: "rtl",
                              hidden: null,
                              contenteditable: "false"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "map",
                            attributes: {
                              contenteditable: "false",
                              dir: "auto",
                              hidden: null,
                              tabindex: "217"
                            },
                            children: []
                          },
                          { type: "text", value: "Boba lalak pipcan wib." }
                        ]
                      },
                      { type: "text", value: "Sunbu ta ve ureamila wi." }
                    ]
                  },
                  { type: "text", value: "Ha wozoho to." },
                  { type: "text", value: "Douvlon ganujbo ene ohocevhu." },
                  {
                    type: "tag",
                    tag: "meter",
                    attributes: { tabindex: "-186" },
                    children: [
                      {
                        type: "tag",
                        tag: "u",
                        attributes: { tabindex: "57", dir: "ltr" },
                        children: [
                          { type: "text", value: "Ca je." },
                          {
                            type: "tag",
                            tag: "time",
                            attributes: { dir: "auto" },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "var",
                            attributes: { tabindex: "-371" },
                            children: []
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "br",
                        children: [],
                        attributes: { tabindex: "-853", hidden: null }
                      },
                      { type: "text", value: "Ina kiscu." },
                      {
                        type: "tag",
                        tag: "textarea",
                        attributes: {
                          contenteditable: "false",
                          minlength: "494",
                          maxlength: "980"
                        },
                        children: [
                          {
                            type: "text",
                            value: "Gineonu dawe durim huwiar tagel."
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: "tag",
                    tag: "del",
                    attributes: { contenteditable: "", tabindex: "97" },
                    children: [
                      {
                        type: "tag",
                        tag: "h3",
                        attributes: { draggable: "false" },
                        children: []
                      },
                      {
                        type: "tag",
                        tag: "meter",
                        attributes: {
                          hidden: null,
                          dir: "auto",
                          contenteditable: ""
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "small",
                            attributes: {
                              hidden: null,
                              tabindex: "-947",
                              contenteditable: "true",
                              dir: "auto"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "a",
                            attributes: {
                              draggable: "true",
                              contenteditable: "true",
                              dir: "auto"
                            },
                            children: []
                          },
                          {
                            type: "text",
                            value: "Acvi lanufgi lo johtefimi wi."
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "h1",
                        attributes: {
                          contenteditable: "false",
                          dir: "auto",
                          hidden: null
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
                      {
                        type: "tag",
                        tag: "blockquote",
                        attributes: { contenteditable: "" },
                        children: [
                          {
                            type: "tag",
                            tag: "p",
                            attributes: { draggable: "false" },
                            children: []
                          },
                          {
                            type: "text",
                            value: "Idu kuzpuvo fuuko bo raawe wu eh."
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "svg",
                        attributes: {
                          tabindex: "-989",
                          draggable: "false",
                          contenteditable: "false",
                          dir: "rtl"
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "h3",
                            attributes: {
                              tabindex: "113",
                              dir: "ltr",
                              hidden: null,
                              contenteditable: ""
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "strong",
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
                tag: "var",
                attributes: { hidden: null },
                children: [
                  {
                    type: "tag",
                    tag: "picture",
                    attributes: { dir: "auto", draggable: "false" },
                    children: [
                      {
                        type: "tag",
                        tag: "script",
                        attributes: {},
                        children: []
                      }
                    ]
                  },
                  {
                    type: "tag",
                    tag: "progress",
                    attributes: {
                      hidden: null,
                      contenteditable: "",
                      tabindex: "-682"
                    },
                    children: [
                      {
                        type: "tag",
                        tag: "data",
                        attributes: {
                          tabindex: "-694",
                          contenteditable: "true",
                          hidden: null,
                          draggable: "true"
                        },
                        children: [{ type: "text", value: "Jip iveataigo." }]
                      }
                    ]
                  }
                ]
              },
              {
                type: "tag",
                tag: "s",
                attributes: {
                  tabindex: "-390",
                  draggable: "true",
                  contenteditable: "true",
                  dir: "ltr"
                },
                children: [
                  { type: "tag", tag: "br", children: [], attributes: {} },
                  {
                    type: "tag",
                    tag: "video",
                    attributes: {
                      preload: "auto",
                      dir: "auto",
                      contenteditable: "false",
                      draggable: "false",
                      tabindex: "805"
                    },
                    children: []
                  },
                  {
                    type: "text",
                    value: "Wihemeila dic ha neh cegwocaw irekuzta etbi."
                  },
                  {
                    type: "tag",
                    tag: "a",
                    attributes: { dir: "rtl", hidden: null },
                    children: [
                      {
                        type: "text",
                        value: "Ibo cuzbirce nosefif tinwog fagalvez noz."
                      },
                      { type: "text", value: "Maw la cudji kitati gi." },
                      {
                        type: "tag",
                        tag: "bdo",
                        attributes: {
                          draggable: "true",
                          contenteditable: "false"
                        },
                        children: []
                      }
                    ]
                  },
                  {
                    type: "tag",
                    tag: "select",
                    attributes: {
                      dir: "ltr",
                      draggable: "true",
                      required: null,
                      hidden: null,
                      tabindex: "278",
                      multiple: null,
                      autofocus: null,
                      contenteditable: "false"
                    },
                    children: []
                  }
                ]
              }
            ]
          },
          {
            type: "tag",
            tag: "dfn",
            attributes: { hidden: null },
            children: [
              {
                type: "tag",
                tag: "iframe",
                attributes: { title: "j&umDCF2E$^X0tSXwv81" },
                children: [
                  {
                    type: "text",
                    value: "Epcoec ire lul damis malomop lunbipod."
                  }
                ]
              },
              {
                type: "tag",
                tag: "output",
                attributes: {
                  contenteditable: "",
                  hidden: null,
                  tabindex: "903"
                },
                children: []
              },
              { type: "text", value: "Fubmih cicu rej apalov vare siglulsus." },
              {
                type: "tag",
                tag: "samp",
                attributes: { contenteditable: "true", dir: "rtl" },
                children: [
                  {
                    type: "tag",
                    tag: "ins",
                    attributes: {},
                    children: [
                      { type: "text", value: "Katepke mih eni hiznar." },
                      {
                        type: "tag",
                        tag: "small",
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
                      checked: null,
                      hidden: null,
                      contenteditable: "true",
                      readonly: null,
                      autofocus: null,
                      multiple: null,
                      disabled: null,
                      dir: "ltr",
                      draggable: "true",
                      required: null,
                      inputmode: "none",
                      tabindex: "-756",
                      spellcheck: "false",
                      type: "number"
                    }
                  },
                  { type: "text", value: "Ede kinozruc ude." }
                ]
              }
            ]
          },
          { type: "text", value: "Komfim fogeke." }
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
                              tag: "meter",
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
                              tag: "noscript",
                              attributes: {
                                contenteditable: "",
                                draggable: "false"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "em",
                              attributes: {
                                tabindex: "923",
                                contenteditable: "false"
                              },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "b",
                          attributes: {},
                          children: [
                            {
                              type: "tag",
                              tag: "q",
                              attributes: {
                                draggable: "true",
                                contenteditable: "false",
                                hidden: null,
                                tabindex: "-124"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "bdi",
                              attributes: { tabindex: "-519" },
                              children: []
                            },
                            {
                              type: "text",
                              value: "Cogu semiewu kioli nu gi."
                            },
                            {
                              type: "tag",
                              tag: "time",
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
                          tag: "slot",
                          attributes: { hidden: null },
                          children: [
                            {
                              type: "text",
                              value: "Uzfi cizpe cemet gitanu cesnim."
                            }
                          ]
                        },
                        {
                          type: "text",
                          value: "Mizac ec legtikbud epireha bicanip."
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "embed",
                      children: [],
                      attributes: {
                        dir: "auto",
                        hidden: null,
                        contenteditable: "true",
                        src: "9)D*XkpEvx%gaUg2p!",
                        title: "#R"
                      }
                    },
                    {
                      type: "tag",
                      tag: "area",
                      children: [],
                      attributes: { tabindex: "-259", shape: "circle" }
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "input",
                  children: [],
                  attributes: {
                    disabled: null,
                    contenteditable: "false",
                    hidden: null,
                    inputmode: "email",
                    capture: null,
                    type: "tel"
                  }
                },
                { type: "tag", tag: "section", attributes: {}, children: [] },
                {
                  type: "text",
                  value: "Uwaf bizi meftuud fogbuw anja tiwec fe."
                }
              ]
            },
            {
              type: "tag",
              tag: "progress",
              attributes: {
                dir: "rtl",
                hidden: null,
                draggable: "false",
                tabindex: "494"
              },
              children: [
                {
                  type: "tag",
                  tag: "ins",
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
                  tag: "small",
                  attributes: { dir: "auto" },
                  children: []
                },
                {
                  type: "tag",
                  tag: "area",
                  children: [],
                  attributes: { shape: "default" }
                }
              ]
            },
            {
              type: "text",
              value: "Diuvoni ufocekepe pagge gu lucufuonu hezir."
            }
          ]
        },
        {
          type: "tag",
          tag: "figure",
          attributes: {
            contenteditable: "true",
            hidden: null,
            draggable: "true",
            tabindex: "537"
          },
          children: [
            {
              type: "tag",
              tag: "figcaption",
              attributes: { tabindex: "-810", contenteditable: "true" },
              children: [
                {
                  type: "tag",
                  tag: "b",
                  attributes: {},
                  children: [
                    {
                      type: "text",
                      value: "Vosug povhudfoj wudorgav ilaabakes buesiba te."
                    },
                    {
                      type: "tag",
                      tag: "b",
                      attributes: {
                        draggable: "false",
                        tabindex: "-540",
                        contenteditable: "false",
                        hidden: null
                      },
                      children: []
                    },
                    {
                      type: "tag",
                      tag: "audio",
                      attributes: {},
                      children: [
                        {
                          type: "text",
                          value: "Ejegus ofo ohwowi cocu uruzoso."
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "map",
                      attributes: { contenteditable: "" },
                      children: []
                    },
                    {
                      type: "tag",
                      tag: "textarea",
                      attributes: {
                        autocomplete: "on",
                        wrap: "soft",
                        autofocus: null,
                        minlength: "163",
                        maxlength: "795",
                        draggable: "false",
                        rows: "298",
                        contenteditable: "false",
                        hidden: null,
                        dir: "ltr",
                        readonly: null,
                        required: null,
                        cols: "773"
                      },
                      children: [
                        { type: "text", value: "Ez biowituk numewes bu livni." }
                      ]
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "div",
                  attributes: {
                    contenteditable: "false",
                    tabindex: "-771",
                    hidden: null,
                    dir: "auto"
                  },
                  children: [
                    {
                      type: "tag",
                      tag: "dd",
                      attributes: {},
                      children: [
                        {
                          type: "tag",
                          tag: "object",
                          attributes: { hidden: null, dir: "rtl" },
                          children: [
                            { type: "text", value: "Co puwep." },
                            {
                              type: "tag",
                              tag: "hr",
                              children: [],
                              attributes: {
                                hidden: null,
                                tabindex: "-725",
                                draggable: "false"
                              }
                            },
                            {
                              type: "tag",
                              tag: "iframe",
                              attributes: { title: "h]Q" },
                              children: [
                                {
                                  type: "text",
                                  value: "Gojzaw pi lab lefugor."
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
                            contenteditable: "false",
                            src: "*",
                            hidden: null,
                            decoding: "sync",
                            draggable: "false"
                          }
                        },
                        {
                          type: "text",
                          value: "Ovu atealaimi alibid cosefiv kuko."
                        },
                        {
                          type: "tag",
                          tag: "blockquote",
                          attributes: {},
                          children: [
                            {
                              type: "tag",
                              tag: "p",
                              attributes: {
                                draggable: "false",
                                tabindex: "-72",
                                contenteditable: "",
                                hidden: null
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "canvas",
                              attributes: { tabindex: "-174" },
                              children: []
                            },
                            {
                              type: "text",
                              value: "Ekowe pampinbo suiti unij ti wedwiw."
                            },
                            {
                              type: "tag",
                              tag: "del",
                              attributes: {
                                contenteditable: "true",
                                draggable: "true",
                                tabindex: "-855"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "map",
                              attributes: {
                                dir: "rtl",
                                contenteditable: "true"
                              },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "div",
                          attributes: { hidden: null },
                          children: [
                            { type: "text", value: "Hubensak neicfe kofil." },
                            {
                              type: "tag",
                              tag: "dt",
                              attributes: { draggable: "false" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "dt",
                              attributes: {
                                dir: "ltr",
                                contenteditable: "true",
                                tabindex: "357"
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
                      attributes: { hidden: null, tabindex: "865" },
                      children: [
                        {
                          type: "tag",
                          tag: "bdo",
                          attributes: {},
                          children: [
                            {
                              type: "tag",
                              tag: "area",
                              children: [],
                              attributes: {
                                contenteditable: "false",
                                dir: "ltr",
                                shape: "circle",
                                tabindex: "480",
                                draggable: "false"
                              }
                            },
                            {
                              type: "tag",
                              tag: "bdo",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "canvas",
                              attributes: {
                                dir: "rtl",
                                draggable: "true",
                                hidden: null,
                                tabindex: "522"
                              },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "text",
                          value: "Daka gorufwo hu hoezuva tueno ot."
                        },
                        {
                          type: "text",
                          value: "Sewekosaj unku uvzanwa mohvitzut et jibeh."
                        }
                      ]
                    },
                    { type: "text", value: "Mirli hijha sar zimru eluajla." }
                  ]
                },
                { type: "text", value: "Hilmom wozbufbu izvu gula." },
                { type: "tag", tag: "s", attributes: {}, children: [] },
                {
                  type: "tag",
                  tag: "main",
                  attributes: { hidden: null, dir: "ltr" },
                  children: [
                    {
                      type: "tag",
                      tag: "blockquote",
                      attributes: {
                        draggable: "true",
                        hidden: null,
                        contenteditable: "false",
                        dir: "auto"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "code",
                          attributes: {
                            dir: "ltr",
                            contenteditable: "false",
                            draggable: "false"
                          },
                          children: [
                            {
                              type: "text",
                              value: "Taz tum hoftakew ligzewu."
                            },
                            {
                              type: "tag",
                              tag: "noscript",
                              attributes: {
                                draggable: "false",
                                tabindex: "149",
                                hidden: null,
                                dir: "rtl"
                              },
                              children: []
                            }
                          ]
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
                      tag: "h1",
                      attributes: {},
                      children: [
                        {
                          type: "tag",
                          tag: "svg",
                          attributes: { dir: "ltr", draggable: "false" },
                          children: [
                            {
                              type: "text",
                              value: "Hesal jan mikwobuj dos igoja."
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "script",
                      attributes: {
                        nomodule: null,
                        async: null,
                        dir: "rtl",
                        hidden: null,
                        draggable: "false",
                        crossorigin: "use-credentials",
                        integrity: "7f"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "embed",
                          children: [],
                          attributes: {
                            dir: "rtl",
                            src: "Xd]CWAP",
                            title: "IyeQPg()mUZ3omN"
                          }
                        },
                        {
                          type: "tag",
                          tag: "script",
                          attributes: { tabindex: "-822" },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "meter",
                          attributes: { dir: "rtl" },
                          children: [
                            {
                              type: "tag",
                              tag: "u",
                              attributes: {
                                draggable: "true",
                                contenteditable: "true",
                                tabindex: "-89"
                              },
                              children: []
                            },
                            {
                              type: "text",
                              value: "Amo cad je dehim mel imaalisuk oka."
                            },
                            {
                              type: "tag",
                              tag: "video",
                              attributes: {
                                tabindex: "722",
                                hidden: null,
                                dir: "ltr"
                              },
                              children: []
                            },
                            { type: "text", value: "Cek fo uz." },
                            {
                              type: "tag",
                              tag: "u",
                              attributes: { hidden: null, tabindex: "-862" },
                              children: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "h2",
                      attributes: {
                        draggable: "false",
                        contenteditable: "",
                        dir: "ltr"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "sub",
                          attributes: {
                            contenteditable: "",
                            draggable: "false"
                          },
                          children: [
                            { type: "text", value: "Bebsojla gifpu." },
                            {
                              type: "tag",
                              tag: "embed",
                              children: [],
                              attributes: {
                                contenteditable: "",
                                hidden: null,
                                draggable: "true",
                                src: "i5w",
                                title: "ZZ"
                              }
                            },
                            {
                              type: "tag",
                              tag: "template",
                              attributes: {
                                draggable: "true",
                                tabindex: "221",
                                hidden: null
                              },
                              children: []
                            },
                            { type: "text", value: "Ekoav vali efloz ma boso." }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "img",
                          children: [],
                          attributes: {
                            dir: "rtl",
                            src: "7e)dKBitOVHK!thlKjl@",
                            hidden: null,
                            decoding: "sync",
                            ismap: null,
                            tabindex: "652"
                          }
                        },
                        {
                          type: "text",
                          value: "Mulaz ocvewaka ew it tipil tuni."
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              type: "tag",
              tag: "b",
              attributes: {
                contenteditable: "true",
                tabindex: "47",
                draggable: "true",
                dir: "ltr"
              },
              children: [
                {
                  type: "tag",
                  tag: "audio",
                  attributes: {
                    draggable: "false",
                    dir: "auto",
                    tabindex: "662",
                    contenteditable: ""
                  },
                  children: [
                    {
                      type: "tag",
                      tag: "bdo",
                      attributes: {
                        contenteditable: "",
                        dir: "rtl",
                        hidden: null
                      },
                      children: [
                        { type: "text", value: "Zaumi uho nu." },
                        {
                          type: "tag",
                          tag: "datalist",
                          attributes: {},
                          children: [
                            {
                              type: "tag",
                              tag: "textarea",
                              attributes: {
                                maxlength: "389",
                                wrap: "hard",
                                draggable: "false",
                                dir: "ltr",
                                contenteditable: "",
                                hidden: null,
                                required: null,
                                disabled: null,
                                tabindex: "121",
                                spellcheck: "true",
                                readonly: null,
                                autofocus: null
                              },
                              children: [
                                {
                                  type: "text",
                                  value:
                                    "Uho evhumto uv rofcahzug bodfoduz pa wizistec."
                                }
                              ]
                            },
                            {
                              type: "tag",
                              tag: "option",
                              attributes: {
                                dir: "auto",
                                tabindex: "-160",
                                contenteditable: "true"
                              },
                              children: [
                                { type: "text", value: "Zouhamu gemwupgoj." }
                              ]
                            },
                            {
                              type: "tag",
                              tag: "option",
                              attributes: { disabled: null, hidden: null },
                              children: [
                                { type: "text", value: "Beszerza nuudeno." }
                              ]
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "input",
                          children: [],
                          attributes: {
                            readonly: null,
                            required: null,
                            draggable: "true",
                            checked: null,
                            dir: "ltr",
                            hidden: null,
                            autofocus: null,
                            inputmode: "email",
                            contenteditable: "true",
                            tabindex: "-402",
                            type: "time"
                          }
                        },
                        { type: "text", value: "Wachir sisun ah cackot." },
                        {
                          type: "text",
                          value:
                            "Atpijde hahaaso ohomopof muv zisefluj wa seroho."
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "sub",
                      attributes: {
                        contenteditable: "false",
                        dir: "rtl",
                        draggable: "false",
                        tabindex: "-186"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "time",
                          attributes: { tabindex: "57", dir: "ltr" },
                          children: [
                            { type: "text", value: "Ca je." },
                            {
                              type: "tag",
                              tag: "textarea",
                              attributes: {
                                tabindex: "33",
                                rows: "62",
                                readonly: null
                              },
                              children: [
                                {
                                  type: "text",
                                  value: "Re kawbo udioka agwizhap gineonu."
                                }
                              ]
                            },
                            {
                              type: "tag",
                              tag: "u",
                              attributes: { contenteditable: "" },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "button",
                          attributes: { autofocus: null, type: "submit" },
                          children: [
                            {
                              type: "text",
                              value: "Devwi wim hipid vuf nunorec."
                            },
                            {
                              type: "tag",
                              tag: "picture",
                              attributes: {
                                draggable: "false",
                                contenteditable: "",
                                tabindex: "787"
                              },
                              children: []
                            }
                          ]
                        },
                        { type: "text", value: "Fih zibduidu ol zonra." },
                        {
                          type: "tag",
                          tag: "template",
                          attributes: {},
                          children: [
                            {
                              type: "tag",
                              tag: "h6",
                              attributes: {
                                hidden: null,
                                contenteditable: "false"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "h5",
                              attributes: { contenteditable: "false" },
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
                  value: "Gi lo johtefimi wi koluwfu sege vudnoucu."
                },
                {
                  type: "text",
                  value: "Zih mizvokaz modbodib ifawuku oma kulapile evefer."
                },
                {
                  type: "tag",
                  tag: "mark",
                  attributes: {},
                  children: [
                    { type: "text", value: "Tok lovnuz bas kebarfu." },
                    { type: "text", value: "Ece kov keca moowuzu vutuvan." },
                    { type: "text", value: "Ne ejdek dikbibuz." },
                    {
                      type: "tag",
                      tag: "select",
                      attributes: { dir: "auto", multiple: null },
                      children: []
                    }
                  ]
                }
              ]
            },
            {
              type: "tag",
              tag: "h5",
              attributes: {
                tabindex: "830",
                draggable: "true",
                hidden: null,
                dir: "rtl"
              },
              children: [
                { type: "text", value: "Jesah wo." },
                {
                  type: "tag",
                  tag: "bdo",
                  attributes: { contenteditable: "false", tabindex: "330" },
                  children: [
                    {
                      type: "tag",
                      tag: "cite",
                      attributes: { dir: "rtl", hidden: null },
                      children: [
                        {
                          type: "tag",
                          tag: "span",
                          attributes: { tabindex: "-599" },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "math",
                          attributes: {
                            contenteditable: "",
                            hidden: null,
                            tabindex: "956",
                            overflow: "linebreak",
                            draggable: "false"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "audio",
                              attributes: {
                                draggable: "false",
                                tabindex: "445",
                                contenteditable: "false"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "h6",
                              attributes: {
                                dir: "ltr",
                                draggable: "true",
                                tabindex: "488"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "input",
                              children: [],
                              attributes: {
                                type: "button",
                                hidden: null,
                                checked: null
                              }
                            },
                            {
                              type: "tag",
                              tag: "article",
                              attributes: { hidden: null, contenteditable: "" },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "text",
                          value: "Nigin nepib cebucki semebjet tu kum bircul."
                        }
                      ]
                    },
                    { type: "text", value: "Femoiw horjuozu." }
                  ]
                },
                {
                  type: "text",
                  value: "Tab ecsuhap nojdi zucce okovoj samfudfuf."
                },
                { type: "text", value: "Zucum abmihpa cuan no cujekicem ani." },
                { type: "text", value: "Alsusde bejbokrem mo." }
              ]
            }
          ]
        },
        { type: "tag", tag: "figure", attributes: {}, children: [] }
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
