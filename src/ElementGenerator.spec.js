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
                "justify-items: baseline; border-right-style: groove; border-bottom-color: hsl(7978751946129408 16% 32%);"
            },
            children: [
              {
                type: "tag",
                tag: "ins",
                attributes: {
                  dir: "ltr",
                  tabindex: "-285",
                  draggable: "true",
                  contenteditable: ""
                },
                children: [
                  {
                    type: "tag",
                    tag: "area",
                    children: [],
                    attributes: {
                      hidden: null,
                      dir: "rtl",
                      draggable: "true",
                      shape: "rect",
                      contenteditable: "false"
                    }
                  },
                  { type: "text", value: "Upeaco kiwaser wi logumem." },
                  {
                    type: "tag",
                    tag: "progress",
                    attributes: {
                      tabindex: "-209",
                      contenteditable: "true",
                      draggable: "false",
                      hidden: null
                    },
                    children: [
                      {
                        type: "tag",
                        tag: "canvas",
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
                              style:
                                "border-block-end-style: outset; outline-color: invert;"
                            },
                            children: []
                          },
                          { type: "text", value: "Ri tugohi ze." },
                          {
                            type: "tag",
                            tag: "select",
                            attributes: {
                              multiple: null,
                              size: "636",
                              autofocus: null
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "svg",
                            attributes: { tabindex: "631", hidden: null },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "span",
                            attributes: { hidden: null, draggable: "true" },
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
                    attributes: { dir: "ltr", draggable: "true" }
                  },
                  {
                    type: "tag",
                    tag: "keygen",
                    children: [],
                    attributes: {
                      draggable: "true",
                      hidden: null,
                      contenteditable: "false",
                      dir: "ltr"
                    }
                  }
                ]
              },
              { type: "text", value: "Ru uvake jel re wundevuj pe zuforre." },
              { type: "text", value: "Agtucbip tamobija dinbel." }
            ]
          },
          {
            type: "tag",
            tag: "select",
            attributes: {},
            children: [
              {
                type: "tag",
                tag: "optgroup",
                attributes: { contenteditable: "" },
                children: [
                  {
                    type: "tag",
                    tag: "script",
                    attributes: { dir: "auto", hidden: null, tabindex: "-194" },
                    children: [
                      {
                        type: "tag",
                        tag: "br",
                        children: [],
                        attributes: { hidden: null, dir: "ltr" }
                      },
                      {
                        type: "tag",
                        tag: "article",
                        attributes: {
                          hidden: null,
                          contenteditable: "false",
                          style:
                            "font-variant-ligatures: discretionary-ligatures common-ligatures historical-ligatures; border-top: medium outset; break-inside: avoid-column; transition-duration: 33.3925s; orphans: 11%;"
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "header",
                            attributes: {
                              dir: "rtl",
                              contenteditable: "",
                              style: "border-block-end: thick;"
                            },
                            children: []
                          },
                          {
                            type: "text",
                            value: "Ba alfite opu la pivvod opbun."
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "title",
                        attributes: {
                          tabindex: "643",
                          hidden: null,
                          dir: "rtl"
                        },
                        children: [
                          {
                            type: "text",
                            value: "Luziface ba vec lubet pa lowbokuhi."
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                type: "tag",
                tag: "template",
                attributes: {},
                children: [
                  {
                    type: "tag",
                    tag: "select",
                    attributes: {
                      autofocus: null,
                      hidden: null,
                      disabled: null,
                      multiple: null
                    },
                    children: [
                      {
                        type: "tag",
                        tag: "option",
                        attributes: {
                          hidden: null,
                          draggable: "true",
                          tabindex: "-53"
                        },
                        children: [
                          {
                            type: "text",
                            value:
                              "Ku olitade rozu adapucrak rerudzup ecwemu famhuluj."
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "option",
                        attributes: {
                          disabled: null,
                          dir: "rtl",
                          tabindex: "-708",
                          hidden: null,
                          draggable: "true"
                        },
                        children: [
                          {
                            type: "text",
                            value: "Hudiha sadod zorhukne rek buzbewru."
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "optgroup",
                        attributes: {
                          disabled: null,
                          contenteditable: "",
                          dir: "rtl",
                          hidden: null,
                          draggable: "true"
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "template",
                            attributes: { draggable: "false" },
                            children: []
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "template",
                        attributes: { dir: "ltr", hidden: null },
                        children: [
                          {
                            type: "tag",
                            tag: "svg",
                            attributes: {
                              draggable: "true",
                              dir: "ltr",
                              hidden: null
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "h3",
                            attributes: { tabindex: "-698" },
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
                            tag: "h2",
                            attributes: { contenteditable: "" },
                            children: []
                          },
                          {
                            type: "text",
                            value: "Monokaivi bi alufen muenuna jacu rusomiwus."
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: "tag",
                    tag: "select",
                    attributes: {
                      hidden: null,
                      draggable: "true",
                      dir: "ltr",
                      size: "879",
                      multiple: null
                    },
                    children: [
                      {
                        type: "tag",
                        tag: "option",
                        attributes: {
                          style:
                            "image-orientation: -47.5786turn; scroll-padding-inline-end: 704.363vmax; list-style: outside 'pazo' none; min-width: min-content;"
                        },
                        children: [
                          { type: "text", value: "Talonmik wem awjo." }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "optgroup",
                        attributes: {
                          disabled: null,
                          hidden: null,
                          tabindex: "842"
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "option",
                            attributes: {
                              contenteditable: "true",
                              disabled: null
                            },
                            children: [
                              { type: "text", value: "Did mataf munirfof af." }
                            ]
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "optgroup",
                        attributes: { dir: "ltr", disabled: null },
                        children: [
                          {
                            type: "tag",
                            tag: "script",
                            attributes: {
                              tabindex: "81",
                              dir: "auto",
                              src: "Beau",
                              draggable: "false",
                              integrity: "Sn"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "option",
                            attributes: { selected: null, draggable: "true" },
                            children: [{ type: "text", value: "Ha iviracnem." }]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: "tag",
                    tag: "h1",
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
                          style: "text-emphasis-position: right under;"
                        }
                      },
                      { type: "text", value: "Uzamiz buzpavuw." },
                      {
                        type: "tag",
                        tag: "meter",
                        attributes: {
                          draggable: "false",
                          tabindex: "205",
                          dir: "auto"
                        },
                        children: [
                          { type: "text", value: "Paw rile raufe." },
                          {
                            type: "tag",
                            tag: "datalist",
                            attributes: {
                              tabindex: "-760",
                              contenteditable: "true",
                              hidden: null
                            },
                            children: []
                          },
                          {
                            type: "text",
                            value: "Lawesu osofa ossav etgodfat tiw."
                          },
                          {
                            type: "tag",
                            tag: "small",
                            attributes: { dir: "auto" },
                            children: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: "tag",
                    tag: "h2",
                    attributes: { tabindex: "463", dir: "ltr", hidden: null },
                    children: [
                      {
                        type: "tag",
                        tag: "object",
                        attributes: {
                          dir: "ltr",
                          hidden: null,
                          draggable: "false",
                          contenteditable: "false",
                          tabindex: "-694",
                          style:
                            "text-decoration-color: #7ed415; justify-items: legacy; text-emphasis-color: #c9e181; z-index: auto;"
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "datalist",
                            attributes: { tabindex: "110", hidden: null },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "br",
                            children: [],
                            attributes: {}
                          },
                          { type: "text", value: "Ralmo bonsirse uwsemi taw." },
                          {
                            type: "tag",
                            tag: "slot",
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
                        tag: "textarea",
                        attributes: {
                          dir: "ltr",
                          disabled: null,
                          required: null,
                          maxlength: "737",
                          rows: "935"
                        },
                        children: [
                          { type: "text", value: "Hu gav ihhinla gubojmi." }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "meter",
                        attributes: { tabindex: "-481", hidden: null },
                        children: [
                          { type: "text", value: "Si bu." },
                          {
                            type: "tag",
                            tag: "time",
                            attributes: { dir: "auto" },
                            children: []
                          }
                        ]
                      },
                      { type: "text", value: "Go uzfi cizpe cemet gitanu." }
                    ]
                  }
                ]
              },
              {
                type: "tag",
                tag: "script",
                attributes: {
                  crossorigin: "anonymous",
                  contenteditable: "true",
                  draggable: "false"
                },
                children: []
              },
              {
                type: "tag",
                tag: "template",
                attributes: { style: "tab-size: 90%; resize: horizontal;" },
                children: [
                  {
                    type: "tag",
                    tag: "output",
                    attributes: { draggable: "false", hidden: null },
                    children: [
                      {
                        type: "tag",
                        tag: "abbr",
                        attributes: { hidden: null },
                        children: [
                          {
                            type: "tag",
                            tag: "noscript",
                            attributes: {
                              hidden: null,
                              style:
                                "border-top-color: ThreeDDarkShadow; mask-image: url(ukufekku); border-block-style: none; min-height: 471.8092ex; scroll-snap-type: none;"
                            },
                            children: []
                          }
                        ]
                      },
                      { type: "text", value: "Tiritoke lijukis nuhu." },
                      {
                        type: "text",
                        value: "Favpuwaf bizi meftuud fogbuw anja tiwec fe."
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
                        children: [
                          {
                            type: "tag",
                            tag: "ins",
                            attributes: {
                              style:
                                "scrollbar-width: auto; background-position: -125.6132mm 72%; color: #90ffe4; transition-delay: -47.8992ms;"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "math",
                            attributes: {
                              overflow: "elide",
                              contenteditable: "",
                              hidden: null,
                              dir: "ltr",
                              display: "inline"
                            },
                            children: []
                          },
                          {
                            type: "text",
                            value:
                              "Sajzic lopo nigacboz sa duudo nifruzop vorezepof."
                          },
                          {
                            type: "text",
                            value: "Orcooza nuhdo guukalo elrubon racu kisciam."
                          },
                          {
                            type: "tag",
                            tag: "cite",
                            attributes: { hidden: null, draggable: "false" },
                            children: []
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "bdi",
                        attributes: {
                          tabindex: "991",
                          contenteditable: "",
                          dir: "auto",
                          style:
                            "font: status-bar; touch-action: manipulation; background-repeat: repeat;"
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "b",
                            attributes: {
                              draggable: "false",
                              tabindex: "-769"
                            },
                            children: []
                          },
                          { type: "text", value: "Webne eh sabucic vaoz." }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                type: "tag",
                tag: "option",
                attributes: {
                  disabled: null,
                  dir: "auto",
                  contenteditable: "false",
                  draggable: "false"
                },
                children: [
                  { type: "text", value: "Zuhiepe pagge gu lucufuonu hezir." }
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
          contenteditable: "true",
          hidden: null,
          draggable: "true",
          tabindex: "537"
        },
        children: [
          {
            type: "tag",
            tag: "bdi",
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
            tag: "input",
            children: [],
            attributes: {
              draggable: "false",
              type: "time",
              readonly: null,
              style: "scroll-padding-block-end: 76%;"
            }
          },
          { type: "text", value: "Ge kun hebit debikeje osaw." },
          {
            type: "tag",
            tag: "template",
            attributes: {},
            children: [
              {
                type: "tag",
                tag: "video",
                attributes: { contenteditable: "false", hidden: null },
                children: [
                  {
                    type: "tag",
                    tag: "noscript",
                    attributes: { style: "scroll-padding-bottom: auto;" },
                    children: [
                      {
                        type: "tag",
                        tag: "source",
                        children: [],
                        attributes: {
                          contenteditable: "false",
                          dir: "auto",
                          tabindex: "-102"
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
                  {
                    type: "tag",
                    tag: "nav",
                    attributes: {
                      tabindex: "-773",
                      draggable: "true",
                      contenteditable: "true",
                      style: "text-align: match-parent; translate: none;"
                    },
                    children: []
                  },
                  {
                    type: "tag",
                    tag: "math",
                    attributes: { display: "block", overflow: "truncate" },
                    children: [
                      {
                        type: "tag",
                        tag: "meta",
                        children: [],
                        attributes: {
                          hidden: null,
                          contenteditable: "",
                          draggable: "false",
                          tabindex: "715"
                        }
                      },
                      {
                        type: "tag",
                        tag: "h2",
                        attributes: {
                          draggable: "true",
                          dir: "ltr",
                          hidden: null,
                          tabindex: "91",
                          style:
                            "grid-auto-flow: dense row; max-height: fit-content; border-bottom-style: dotted; animation-iteration-count: 7581320825798656;"
                        },
                        children: [
                          { type: "text", value: "Hico jimez bive unjor." },
                          {
                            type: "tag",
                            tag: "map",
                            attributes: {
                              tabindex: "480",
                              hidden: null,
                              draggable: "true",
                              style:
                                "border-block-end-width: thick; margin-block-start: -963.2648pt;"
                            },
                            children: []
                          },
                          { type: "text", value: "Kis kam ijbu me ser." },
                          {
                            type: "text",
                            value: "Gafdupwu opa joworo kotcorin nipranas hod."
                          },
                          {
                            type: "tag",
                            tag: "del",
                            attributes: { tabindex: "-337", draggable: "true" },
                            children: []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: "tag",
                    tag: "aside",
                    attributes: { hidden: null, contenteditable: "" },
                    children: [
                      { type: "tag", tag: "wbr", children: [], attributes: {} },
                      {
                        type: "tag",
                        tag: "ins",
                        attributes: {
                          dir: "ltr",
                          contenteditable: "false",
                          tabindex: "-174"
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "sub",
                            attributes: { tabindex: "-725", draggable: "true" },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "h1",
                            attributes: { tabindex: "592", hidden: null },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "section",
                            attributes: { dir: "rtl" },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "area",
                            children: [],
                            attributes: {
                              tabindex: "602",
                              dir: "rtl",
                              contenteditable: "",
                              draggable: "true",
                              shape: "default"
                            }
                          }
                        ]
                      },
                      { type: "text", value: "Cikdu silon te." }
                    ]
                  }
                ]
              },
              {
                type: "tag",
                tag: "h1",
                attributes: { tabindex: "-258" },
                children: []
              },
              {
                type: "tag",
                tag: "audio",
                attributes: { hidden: null },
                children: [
                  {
                    type: "tag",
                    tag: "img",
                    children: [],
                    attributes: { ismap: null, src: "my" }
                  },
                  {
                    type: "tag",
                    tag: "link",
                    children: [],
                    attributes: { crossorigin: "use-credentials", href: "HsR" }
                  },
                  {
                    type: "tag",
                    tag: "embed",
                    children: [],
                    attributes: {
                      dir: "rtl",
                      contenteditable: "false",
                      src: "NJ5!07HR",
                      title: "pNict]ejNr*dcVjqHn",
                      style:
                        "border-block-end-width: medium; margin-inline-start: 376.4158em;"
                    }
                  }
                ]
              },
              {
                type: "tag",
                tag: "map",
                attributes: {
                  tabindex: "-966",
                  style: "transition-delay: -353.7387s;"
                },
                children: [
                  {
                    type: "tag",
                    tag: "script",
                    attributes: { style: "column-gap: normal;" },
                    children: [
                      {
                        type: "tag",
                        tag: "link",
                        children: [],
                        attributes: {
                          dir: "rtl",
                          hidden: null,
                          href: "*BYbKsT9#@Q4ci&6Z"
                        }
                      },
                      {
                        type: "tag",
                        tag: "nav",
                        attributes: {
                          dir: "auto",
                          hidden: null,
                          tabindex: "577"
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "noscript",
                            attributes: {
                              hidden: null,
                              tabindex: "109",
                              contenteditable: "true",
                              dir: "rtl"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "video",
                            attributes: {
                              tabindex: "317",
                              draggable: "false",
                              hidden: null,
                              preload: "auto",
                              dir: "rtl",
                              style:
                                "line-break: strict; align-content: baseline;"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "wbr",
                            children: [],
                            attributes: { hidden: null }
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "code",
                        attributes: { hidden: null, dir: "rtl" },
                        children: [
                          {
                            type: "tag",
                            tag: "data",
                            attributes: {
                              hidden: null,
                              draggable: "true",
                              tabindex: "864"
                            },
                            children: []
                          },
                          {
                            type: "text",
                            value: "Ajlari nok asoomagib cuzvuca."
                          },
                          {
                            type: "tag",
                            tag: "canvas",
                            attributes: {
                              draggable: "true",
                              dir: "rtl",
                              contenteditable: "",
                              tabindex: "285"
                            },
                            children: []
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "picture",
                        attributes: {
                          draggable: "false",
                          tabindex: "716",
                          dir: "ltr",
                          contenteditable: "false"
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "source",
                            children: [],
                            attributes: {
                              draggable: "false",
                              contenteditable: "true",
                              tabindex: "-256"
                            }
                          },
                          {
                            type: "tag",
                            tag: "script",
                            attributes: { async: null, contenteditable: "" },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "source",
                            children: [],
                            attributes: {
                              draggable: "true",
                              hidden: null,
                              dir: "rtl",
                              contenteditable: "true",
                              style:
                                "flex: content 1020282567393280; border-top-width: thick; column-count: 47%;"
                            }
                          },
                          {
                            type: "tag",
                            tag: "source",
                            children: [],
                            attributes: {
                              tabindex: "-767",
                              dir: "ltr",
                              draggable: "true",
                              hidden: null
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
                      contenteditable: "true",
                      src: "hnbxV",
                      title: "OVrtCUReKk]u"
                    }
                  },
                  {
                    type: "tag",
                    tag: "input",
                    children: [],
                    attributes: {
                      multiple: null,
                      autofocus: null,
                      spellcheck: "true",
                      type: "hidden"
                    }
                  },
                  {
                    type: "tag",
                    tag: "iframe",
                    attributes: {
                      dir: "auto",
                      hidden: null,
                      contenteditable: "true",
                      tabindex: "-401",
                      title: "zATfGM9"
                    },
                    children: [{ type: "text", value: "Rev vigne." }]
                  },
                  { type: "tag", tag: "br", children: [], attributes: {} }
                ]
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
                tag: "noscript",
                attributes: {
                  dir: "auto",
                  contenteditable: "false",
                  style:
                    "padding-block: 20%; border-inline-color: #68d38a; border-block-end-color: hsla(512.3267deg 35% 30% / 80%); grid-template: 'mu' / [ revpapdo ] fit-content(12%) [ zarbahe ];"
                },
                children: [
                  {
                    type: "tag",
                    tag: "b",
                    attributes: { draggable: "true", dir: "auto" },
                    children: [
                      { type: "text", value: "Terrur afacma." },
                      {
                        type: "tag",
                        tag: "map",
                        attributes: {
                          style:
                            "border-right-style: dashed; transition-property: anaeh; text-underline-offset: from-font; hanging-punctuation: none;"
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "sub",
                            attributes: {},
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "mark",
                            attributes: {
                              style:
                                "animation-duration: 12.2151ms; border-start-end-radius: 8%; list-style: none symbols() outside;"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "sub",
                            attributes: { dir: "ltr", contenteditable: "" },
                            children: []
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "object",
                        attributes: {
                          draggable: "true",
                          contenteditable: "true",
                          dir: "ltr",
                          style:
                            "writing-mode: sideways-rl; background-color: #b1edd4; color: InactiveBorder;"
                        },
                        children: [{ type: "text", value: "Jec vap." }]
                      },
                      {
                        type: "tag",
                        tag: "code",
                        attributes: {
                          hidden: null,
                          tabindex: "221",
                          style:
                            "order: 5%; scroll-snap-type: none; page-break-before: auto; scroll-margin-inline: 773.2085pc;"
                        },
                        children: [
                          { type: "text", value: "Gojube piag vafteh hoz." },
                          {
                            type: "tag",
                            tag: "math",
                            attributes: { display: "block" },
                            children: []
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "input",
                        children: [],
                        attributes: {
                          autofocus: null,
                          dir: "ltr",
                          type: "email"
                        }
                      }
                    ]
                  },
                  {
                    type: "tag",
                    tag: "data",
                    attributes: {
                      draggable: "false",
                      hidden: null,
                      dir: "rtl"
                    },
                    children: [
                      {
                        type: "tag",
                        tag: "br",
                        children: [],
                        attributes: { contenteditable: "", dir: "ltr" }
                      },
                      {
                        type: "text",
                        value: "Tipil tuni dopirba woc daomlel lus."
                      },
                      {
                        type: "tag",
                        tag: "embed",
                        children: [],
                        attributes: {
                          hidden: null,
                          src: "W9",
                          contenteditable: "",
                          title: "bggM)"
                        }
                      },
                      {
                        type: "tag",
                        tag: "strong",
                        attributes: {
                          hidden: null,
                          contenteditable: "false",
                          dir: "ltr",
                          style: "border-top-width: medium;"
                        },
                        children: [
                          {
                            type: "text",
                            value: "Nawkodnu piw apodadu demi tajew."
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              { type: "tag", tag: "keygen", children: [], attributes: {} }
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
                              "justify-items: baseline; border-right-style: groove; border-bottom-color: hsl(7978751946129408 16% 32%);"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "ins",
                              attributes: {
                                dir: "ltr",
                                tabindex: "-285",
                                draggable: "true",
                                contenteditable: ""
                              },
                              children: []
                            },
                            {
                              type: "text",
                              value: "Beip fil rencoj wu tumit."
                            },
                            { type: "text", value: "Femwaser wi." }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "select",
                          attributes: {
                            draggable: "false",
                            hidden: null,
                            autofocus: null,
                            contenteditable: "false",
                            style:
                              "counter-set: none; border-block-start-width: 849.3873px; text-decoration: wavy grammar-error from-font; inset-inline: 26%;"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "template",
                              attributes: {},
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
                      attributes: { tabindex: "-349", hidden: null }
                    },
                    {
                      type: "tag",
                      tag: "area",
                      children: [],
                      attributes: {
                        shape: "poly",
                        tabindex: "84",
                        hidden: null,
                        dir: "ltr",
                        draggable: "false"
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
            hidden: null,
            draggable: "false",
            contenteditable: "true"
          },
          children: []
        },
        {
          type: "tag",
          tag: "figure",
          attributes: { contenteditable: "" },
          children: [
            {
              type: "tag",
              tag: "figcaption",
              attributes: {
                contenteditable: "false",
                tabindex: "-650",
                dir: "auto"
              },
              children: [
                {
                  type: "tag",
                  tag: "map",
                  attributes: { dir: "rtl" },
                  children: [
                    {
                      type: "tag",
                      tag: "template",
                      attributes: { hidden: null },
                      children: [
                        {
                          type: "text",
                          value: "Gunuh lobohiunu cehguki re wundevuj pe."
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "i",
                      attributes: {
                        dir: "auto",
                        draggable: "false",
                        hidden: null,
                        tabindex: "-553"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "del",
                          attributes: {},
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "time",
                          attributes: {
                            dir: "rtl",
                            hidden: null,
                            contenteditable: ""
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "object",
                              attributes: {
                                data: "c8wANj",
                                dir: "rtl",
                                hidden: null
                              },
                              children: []
                            },
                            { type: "text", value: "Tic girofod pohakmi." },
                            {
                              type: "tag",
                              tag: "button",
                              attributes: {
                                contenteditable: "false",
                                dir: "auto",
                                type: "reset",
                                style: "text-rendering: auto;"
                              },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "a",
                          attributes: {
                            dir: "rtl",
                            style:
                              "border-inline-end-style: groove; transform: none; min-inline-size: fill-available; inset-inline: auto;"
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
                              tag: "b",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "i",
                              attributes: {
                                style: "animation-timing-function: linear;"
                              },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "span",
                          attributes: {
                            hidden: null,
                            contenteditable: "false",
                            dir: "rtl",
                            tabindex: "473",
                            style:
                              "font-variant-position: sub; font-optical-sizing: auto; mask-repeat: round;"
                          },
                          children: [
                            {
                              type: "text",
                              value: "Tub tutvendit opeupu ja la."
                            },
                            { type: "text", value: "Vec lubet." },
                            {
                              type: "tag",
                              tag: "mark",
                              attributes: {
                                dir: "rtl",
                                style:
                                  "padding-block-start: 257.8857vw; text-decoration: hsla(-435.9309rad , 17% , 42% , 81%); margin-bottom: auto; perspective-origin: left;"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "meter",
                              attributes: {
                                draggable: "false",
                                dir: "ltr",
                                tabindex: "-680"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "button",
                              attributes: {
                                contenteditable: "true",
                                type: "button"
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
                      attributes: { tabindex: "-389", dir: "ltr" },
                      children: [
                        { type: "text", value: "Se gozzod puc cisrerud." },
                        {
                          type: "tag",
                          tag: "var",
                          attributes: {
                            hidden: null,
                            tabindex: "84",
                            dir: "auto"
                          },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "var",
                          attributes: {
                            tabindex: "706",
                            style:
                              "border-block-color: rgba(1464668166029312); table-layout: auto; text-decoration-color: currentcolor;"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "wbr",
                              children: [],
                              attributes: { hidden: null, dir: "rtl" }
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "mark",
                          attributes: { draggable: "false" },
                          children: [
                            {
                              type: "tag",
                              tag: "bdo",
                              attributes: { draggable: "false", dir: "ltr" },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "text",
                          value: "Tos hukneem ut una biw cemucite."
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "picture",
                      attributes: {
                        dir: "rtl",
                        tabindex: "-902",
                        draggable: "true"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "template",
                          attributes: {
                            contenteditable: "true",
                            hidden: null,
                            dir: "rtl",
                            tabindex: "-169"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "h3",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "em",
                              attributes: { tabindex: "-698" },
                              children: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "data",
                      attributes: { draggable: "false" },
                      children: [
                        {
                          type: "text",
                          value: "Cuemabi alufen muenuna jacu rusomiwus."
                        },
                        {
                          type: "tag",
                          tag: "b",
                          attributes: {
                            dir: "ltr",
                            contenteditable: "",
                            hidden: null,
                            draggable: "false"
                          },
                          children: [
                            { type: "text", value: "Bo notkut ravmid motor." },
                            {
                              type: "tag",
                              tag: "slot",
                              attributes: {
                                dir: "auto",
                                hidden: null,
                                contenteditable: "true",
                                tabindex: "590"
                              },
                              children: []
                            },
                            { type: "text", value: "Wem awjo wutnu zenatij." }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "var",
                          attributes: { dir: "rtl" },
                          children: [
                            { type: "text", value: "Di fo gomu pofofbu je." }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "object",
                          attributes: { contenteditable: "" },
                          children: []
                        }
                      ]
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "h3",
                  attributes: { draggable: "true", dir: "rtl" },
                  children: [
                    {
                      type: "text",
                      value: "Beaco uflul zem zabha iviracnem delab efki."
                    },
                    {
                      type: "tag",
                      tag: "map",
                      attributes: {},
                      children: [
                        {
                          type: "tag",
                          tag: "map",
                          attributes: {
                            draggable: "true",
                            dir: "rtl",
                            hidden: null
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "object",
                              attributes: { contenteditable: "true" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "kbd",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "meta",
                              children: [],
                              attributes: {}
                            },
                            {
                              type: "tag",
                              tag: "datalist",
                              attributes: {
                                contenteditable: "",
                                tabindex: "18",
                                draggable: "false",
                                dir: "auto"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "canvas",
                              attributes: {
                                dir: "ltr",
                                draggable: "false",
                                hidden: null,
                                tabindex: "258",
                                style:
                                  "outline-offset: 641.723vmin; padding-top: 54%; margin-block-start: 28%; scroll-padding-right: -625.9125vw;"
                              },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "span",
                          attributes: {
                            draggable: "false",
                            contenteditable: "",
                            dir: "auto"
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
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "embed",
                              children: [],
                              attributes: {
                                dir: "auto",
                                contenteditable: "true",
                                src: "5",
                                title: "3o7m9mn8rXUM^Ax#R"
                              }
                            },
                            {
                              type: "tag",
                              tag: "area",
                              children: [],
                              attributes: {
                                draggable: "false",
                                shape: "circle",
                                tabindex: "748",
                                dir: "rtl"
                              }
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "map",
                          attributes: { dir: "auto" },
                          children: [
                            {
                              type: "tag",
                              tag: "keygen",
                              children: [],
                              attributes: { hidden: null }
                            },
                            {
                              type: "tag",
                              tag: "video",
                              attributes: {},
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "meter",
                          attributes: { hidden: null },
                          children: [
                            {
                              type: "text",
                              value: "Zunudo hos gi pusdudev seama."
                            },
                            {
                              type: "tag",
                              tag: "template",
                              attributes: { dir: "ltr", tabindex: "599" },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "noscript",
                          attributes: {
                            dir: "auto",
                            draggable: "false",
                            tabindex: "-583"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "embed",
                              children: [],
                              attributes: {
                                src: "kLhTsb1#R&hP^Z6&b0W",
                                title: "BSfFf2h*!&^Hjir["
                              }
                            },
                            {
                              type: "tag",
                              tag: "style",
                              children: [
                                {
                                  type: "text",
                                  value:
                                    "@keyframes 'kak' {\n  to {\n  table-layout: fixed; text-underline-offset: from-font; grid-row: olibi / auto;\n}\n}\n:dir(ltr) { image-orientation: from-image; font-variant-alternates: normal; text-rendering: optimizeSpeed; }\n:fullscreen { margin-inline-end: 264.5286ex; all: initial; outline-color: invert; border-inline-width: thick; }\n::placeholder { border-image:  30% / 499.921pc stretch; scroll-margin-inline-end: 796.1086mm; border-left-color: hsla(-926.9007grad 47% 84% / 6%); }\n:enabled { padding-right: 55.2955pt; justify-self: stretch; grid-template-columns: repeat(77% , 723.5713cm [ jetikbud ]) [ vibhegvi ]; animation-delay: 190.098ms; }\n:first-of-type { margin-block-end: 774.921Q; list-style-position: inside; page-break-after: auto; scroll-margin-right: -513.6556vw; }\n"
                                }
                              ],
                              attributes: {
                                style:
                                  "text-transform: capitalize; text-align-last: end; inset-inline: 182.5509Q; font-optical-sizing: auto; background-clip: content-box;"
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "b",
                      attributes: {
                        hidden: null,
                        tabindex: "-945",
                        draggable: "true"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "textarea",
                          attributes: {
                            dir: "rtl",
                            readonly: null,
                            draggable: "true"
                          },
                          children: [
                            {
                              type: "text",
                              value: "Betkis nuhu zadsiznof bizi."
                            }
                          ]
                        },
                        {
                          type: "text",
                          value: "Hetu fiwve awdunja tiwec fe ishoppan."
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "button",
                      attributes: {
                        disabled: null,
                        draggable: "true",
                        type: "submit",
                        dir: "auto"
                      },
                      children: [
                        {
                          type: "text",
                          value: "Cejijwoh oleowa geresu pun to."
                        }
                      ]
                    }
                  ]
                },
                { type: "text", value: "Ce posilcu boz sa." }
              ]
            },
            {
              type: "tag",
              tag: "wbr",
              children: [],
              attributes: { dir: "ltr" }
            }
          ]
        },
        {
          type: "tag",
          tag: "figure",
          attributes: {
            tabindex: "-521",
            contenteditable: "",
            draggable: "false",
            dir: "auto"
          },
          children: [
            {
              type: "tag",
              tag: "figcaption",
              attributes: { hidden: null },
              children: []
            },
            {
              type: "tag",
              tag: "script",
              attributes: {
                defer: null,
                contenteditable: "false",
                nomodule: null,
                async: null,
                tabindex: "-33"
              },
              children: [
                {
                  type: "tag",
                  tag: "h2",
                  attributes: { hidden: null, tabindex: "-522" },
                  children: []
                },
                {
                  type: "tag",
                  tag: "base",
                  children: [],
                  attributes: {
                    draggable: "true",
                    dir: "ltr",
                    contenteditable: "false"
                  }
                },
                {
                  type: "tag",
                  tag: "noscript",
                  attributes: { dir: "rtl", tabindex: "-804" },
                  children: [
                    {
                      type: "tag",
                      tag: "select",
                      attributes: { contenteditable: "false", tabindex: "799" },
                      children: []
                    },
                    {
                      type: "tag",
                      tag: "template",
                      attributes: {
                        contenteditable: "false",
                        style:
                          "animation-play-state: running; grid-template-areas: 'jukdij'; font-variant-caps: petite-caps;"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "aside",
                          attributes: {
                            dir: "ltr",
                            draggable: "true",
                            contenteditable: "false",
                            tabindex: "45",
                            style:
                              "font-kerning: none; border-bottom-left-radius: 912.8314vw;"
                          },
                          children: [
                            {
                              type: "text",
                              value:
                                "Fozhi tenpagge gu lucufuonu hezir ithozi inu."
                            },
                            {
                              type: "tag",
                              tag: "h6",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "td",
                              attributes: { dir: "auto", rowspan: "862" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "iframe",
                              attributes: {
                                src: "atZ1dK",
                                draggable: "true",
                                tabindex: "220",
                                title: "f]!eK$JMR^9QzW"
                              },
                              children: [
                                {
                                  type: "text",
                                  value:
                                    "Imo hudfojhow togavuvi aba hofatesi ge kun."
                                }
                              ]
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "canvas",
                          attributes: {
                            contenteditable: "true",
                            dir: "auto",
                            hidden: null
                          },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "iframe",
                          attributes: { title: "bOF)!" },
                          children: [
                            { type: "text", value: "Dowvooh zar kacav." }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "h2",
                          attributes: {
                            tabindex: "648",
                            hidden: null,
                            draggable: "false",
                            dir: "auto"
                          },
                          children: []
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "h4",
                      attributes: {
                        style:
                          "column-span: none; hanging-punctuation: first force-end last; border-image-source: none; grid-row: 71% span; isolation: isolate;"
                      },
                      children: [
                        { type: "text", value: "Udawumup zeuhku zebuwen." },
                        {
                          type: "tag",
                          tag: "b",
                          attributes: {
                            draggable: "true",
                            dir: "ltr",
                            hidden: null,
                            tabindex: "91",
                            style:
                              "grid-auto-flow: dense row; max-height: fit-content; border-bottom-style: dotted; animation-iteration-count: 7581320825798656;"
                          },
                          children: [
                            { type: "text", value: "Hico jimez bive unjor." },
                            {
                              type: "tag",
                              tag: "map",
                              attributes: {
                                tabindex: "480",
                                hidden: null,
                                draggable: "true",
                                style:
                                  "border-block-end-width: thick; margin-block-start: -963.2648pt;"
                              },
                              children: []
                            },
                            { type: "text", value: "Kis kam ijbu me ser." },
                            {
                              type: "text",
                              value:
                                "Gafdupwu opa joworo kotcorin nipranas hod."
                            },
                            {
                              type: "tag",
                              tag: "datalist",
                              attributes: {
                                tabindex: "-337",
                                draggable: "true"
                              },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "data",
                          attributes: { hidden: null, contenteditable: "" },
                          children: [
                            {
                              type: "tag",
                              tag: "wbr",
                              children: [],
                              attributes: {}
                            },
                            {
                              type: "tag",
                              tag: "map",
                              attributes: {
                                dir: "ltr",
                                contenteditable: "false",
                                tabindex: "-174"
                              },
                              children: []
                            },
                            {
                              type: "text",
                              value: "Mojlozbiv sibmin itijunij ti."
                            }
                          ]
                        },
                        {
                          type: "text",
                          value: "Hasmunte pakcik ik pijsad kuhu."
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "link",
                      children: [],
                      attributes: {
                        contenteditable: "",
                        draggable: "true",
                        hidden: null,
                        href: "$fGmy"
                      }
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "template",
                  attributes: { hidden: null },
                  children: []
                }
              ]
            },
            {
              type: "tag",
              tag: "progress",
              attributes: {
                draggable: "false",
                contenteditable: "",
                style:
                  "border-inline-end: thin groove; justify-items: last baseline;"
              },
              children: [
                {
                  type: "tag",
                  tag: "object",
                  attributes: {
                    contenteditable: "",
                    data: "qHn*gxhLRdYkD",
                    draggable: "true",
                    tabindex: "686",
                    dir: "ltr"
                  },
                  children: [
                    {
                      type: "tag",
                      tag: "svg",
                      attributes: { draggable: "true", dir: "auto" },
                      children: []
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "noscript",
                  attributes: { style: "column-gap: normal;" },
                  children: [
                    { type: "text", value: "Ezho uzebig." },
                    {
                      type: "tag",
                      tag: "button",
                      attributes: {
                        disabled: null,
                        type: "button",
                        autofocus: null
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "code",
                          attributes: {
                            hidden: null,
                            contenteditable: "true",
                            tabindex: "871",
                            dir: "auto",
                            style:
                              "clear: inline-start; border-block-start-color: MenuText; font-size-adjust: -3115893626241024;"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "sub",
                              attributes: {
                                hidden: null,
                                contenteditable: "true"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "template",
                              attributes: { hidden: null, dir: "rtl" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "map",
                              attributes: {
                                draggable: "true",
                                style: "margin-left: 17%;"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "ins",
                              attributes: {
                                hidden: null,
                                tabindex: "864",
                                dir: "rtl"
                              },
                              children: []
                            },
                            {
                              type: "text",
                              value:
                                "Kaj ri nok asoomagib cuzvuca lafihih otrihto."
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "sup",
                          attributes: {
                            dir: "ltr",
                            tabindex: "181",
                            draggable: "false"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "cite",
                              attributes: {
                                dir: "ltr",
                                contenteditable: "false",
                                draggable: "false"
                              },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "samp",
                          attributes: {},
                          children: [
                            {
                              type: "tag",
                              tag: "area",
                              children: [],
                              attributes: {
                                shape: "poly",
                                draggable: "true",
                                contenteditable: "true"
                              }
                            },
                            {
                              type: "tag",
                              tag: "bdo",
                              attributes: {
                                tabindex: "-255",
                                hidden: null,
                                draggable: "true",
                                contenteditable: ""
                              },
                              children: []
                            },
                            {
                              type: "text",
                              value:
                                "Vuctal fagevi dab hof heksal jan mikwobuj."
                            },
                            {
                              type: "tag",
                              tag: "sub",
                              attributes: {},
                              children: []
                            }
                          ]
                        },
                        {
                          type: "text",
                          value: "Suzaco gihheta ecocep invig ka."
                        },
                        {
                          type: "tag",
                          tag: "canvas",
                          attributes: {
                            contenteditable: "true",
                            hidden: null,
                            dir: "auto"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "b",
                              attributes: {
                                tabindex: "-170",
                                contenteditable: "true",
                                dir: "ltr",
                                draggable: "true"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "bdi",
                              attributes: {
                                contenteditable: "false",
                                dir: "rtl",
                                tabindex: "382",
                                style:
                                  "white-space: normal; animation-delay: 984.967s;"
                              },
                              children: []
                            }
                          ]
                        }
                      ]
                    },
                    { type: "text", value: "Erdog zud podcad je dehim mel." },
                    {
                      type: "tag",
                      tag: "s",
                      attributes: {
                        hidden: null,
                        tabindex: "497",
                        dir: "auto",
                        contenteditable: "true"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "u",
                          attributes: {
                            tabindex: "868",
                            draggable: "false",
                            style:
                              "border-radius: 637.47cm; font-size: x-small; border-image-repeat: round; border-right-style: dashed;"
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
                                  "flex-flow: row-reverse; animation-duration: 12.2151ms; border-start-end-radius: 8%; list-style: none symbols() outside;"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "object",
                              attributes: {
                                dir: "ltr",
                                contenteditable: "true"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "svg",
                              attributes: {
                                contenteditable: "true",
                                style:
                                  "scroll-margin-block: -616.4351pc; border-left-width: -30.7968vw; resize: none;"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "picture",
                              attributes: {
                                dir: "ltr",
                                hidden: null,
                                tabindex: "-121"
                              },
                              children: []
                            },
                            { type: "text", value: "Vap ugute." }
                          ]
                        },
                        { type: "text", value: "Viv fovno li." }
                      ]
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "bdo",
                  attributes: { draggable: "false", hidden: null },
                  children: []
                },
                { type: "text", value: "Piag vafteh hoz." }
              ]
            },
            {
              type: "tag",
              tag: "video",
              attributes: { tabindex: "-960" },
              children: [
                {
                  type: "tag",
                  tag: "figcaption",
                  attributes: { tabindex: "-150", dir: "ltr" },
                  children: [
                    { type: "tag", tag: "small", attributes: {}, children: [] },
                    {
                      type: "tag",
                      tag: "h5",
                      attributes: {
                        hidden: null,
                        dir: "rtl",
                        draggable: "true"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "area",
                          children: [],
                          attributes: { shape: "default" }
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "h5",
                      attributes: {
                        hidden: null,
                        dir: "rtl",
                        tabindex: "227",
                        contenteditable: "false",
                        style:
                          "inset-inline: auto; border-image-outset: 474.8676vw; inset-block-end: 68%;"
                      },
                      children: []
                    },
                    {
                      type: "tag",
                      tag: "td",
                      attributes: { style: "pointer-events: fill;" },
                      children: [
                        {
                          type: "tag",
                          tag: "aside",
                          attributes: {
                            dir: "rtl",
                            tabindex: "775",
                            hidden: null
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "cite",
                              attributes: {
                                draggable: "true",
                                style: "inset-block-start: auto;"
                              },
                              children: []
                            },
                            { type: "text", value: "Hozvede zaumi uho." },
                            {
                              type: "tag",
                              tag: "strong",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "text",
                              value: "Piw apodadu demi tajew giv uho evhumto."
                            }
                          ]
                        },
                        { type: "text", value: "Esozap ki jumwafo." },
                        {
                          type: "tag",
                          tag: "keygen",
                          children: [],
                          attributes: {
                            contenteditable: "true",
                            hidden: null,
                            draggable: "true"
                          }
                        }
                      ]
                    }
                  ]
                },
                { type: "text", value: "Rozipdi dun zidni hos." }
              ]
            }
          ]
        },
        {
          type: "tag",
          tag: "figure",
          attributes: {
            tabindex: "800",
            dir: "ltr",
            contenteditable: "",
            draggable: "false"
          },
          children: [
            {
              type: "tag",
              tag: "code",
              attributes: {
                contenteditable: "false",
                hidden: null,
                draggable: "false",
                tabindex: "368"
              },
              children: [
                {
                  type: "tag",
                  tag: "em",
                  attributes: {
                    hidden: null,
                    tabindex: "-391",
                    draggable: "true",
                    style:
                      "border-inline-width: -941.8573Q; border-inline: -195.3458px inset; grid-template-columns: [ dirocol ] repeat(60% , [ bupo ] -882.8982rem) [ wetpikfa ] repeat(auto-fill , [ deci ] minmax(max-content , 100%) [ tatoaf ]) repeat(41% , [ lonsefluj ] 400.5039ch [ jomjowhu ]); border-right-width: thick;"
                  },
                  children: [
                    {
                      type: "tag",
                      tag: "cite",
                      attributes: { tabindex: "-49", dir: "auto" },
                      children: [
                        {
                          type: "tag",
                          tag: "select",
                          attributes: {
                            disabled: null,
                            tabindex: "-275",
                            multiple: null,
                            contenteditable: "",
                            size: "907"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "optgroup",
                              attributes: {
                                tabindex: "-46",
                                dir: "rtl",
                                contenteditable: "false",
                                hidden: null,
                                draggable: "false",
                                style:
                                  "justify-items: stretch; font-style: oblique;"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "optgroup",
                              attributes: {
                                dir: "ltr",
                                contenteditable: "true",
                                draggable: "false",
                                disabled: null,
                                hidden: null
                              },
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
                              tag: "optgroup",
                              attributes: {
                                dir: "ltr",
                                hidden: null,
                                draggable: "true",
                                disabled: null
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "optgroup",
                              attributes: { dir: "rtl" },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "audio",
                          attributes: { preload: "auto" },
                          children: [
                            {
                              type: "text",
                              value: "Udemom wim hipid vuf nunorec."
                            },
                            {
                              type: "text",
                              value: "Ajub pejidkos bedvudhez usobic ku lit."
                            },
                            {
                              type: "tag",
                              tag: "data",
                              attributes: {},
                              children: []
                            },
                            { type: "text", value: "Lanufgi lo johtefimi wi." },
                            {
                              type: "tag",
                              tag: "s",
                              attributes: {
                                contenteditable: "false",
                                dir: "auto",
                                hidden: null
                              },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "text",
                          value: "Sege vudnoucu askuzpu woh izi daram awe."
                        },
                        { type: "text", value: "Ufejuw woul." },
                        {
                          type: "tag",
                          tag: "slot",
                          attributes: {
                            tabindex: "-494",
                            draggable: "false",
                            dir: "auto",
                            contenteditable: "true"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "bdo",
                              attributes: {
                                contenteditable: "",
                                tabindex: "348",
                                draggable: "true",
                                hidden: null,
                                style:
                                  "mask-position: center bottom; empty-cells: hide; scroll-padding-top: 687.4747vw; border-top-width: medium;"
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
                      attributes: {},
                      children: [
                        {
                          type: "tag",
                          tag: "embed",
                          children: [],
                          attributes: {
                            src: "fufVzZ#LpwApfc4wEW4*",
                            title: "476eX%tW^#XaPmiCHC"
                          }
                        },
                        {
                          type: "text",
                          value: "Dekaci bibuz er ito ebutontu tude rajebi."
                        },
                        {
                          type: "tag",
                          tag: "canvas",
                          attributes: { dir: "ltr", tabindex: "-300" },
                          children: [
                            {
                              type: "text",
                              value: "Ufore jakjutsip ef doru eta."
                            },
                            {
                              type: "tag",
                              tag: "sup",
                              attributes: {
                                tabindex: "-82",
                                draggable: "false",
                                contenteditable: "true",
                                dir: "rtl"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "i",
                              attributes: {
                                dir: "rtl",
                                hidden: null,
                                contenteditable: "false"
                              },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "ruby",
                          attributes: {
                            hidden: null,
                            draggable: "false",
                            style: "border-start-start-radius: 573.5007pt;"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "rt",
                              attributes: { hidden: null, tabindex: "-71" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "rb",
                              attributes: { contenteditable: "true" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "rtc",
                              attributes: {
                                contenteditable: "true",
                                tabindex: "-473",
                                hidden: null,
                                draggable: "false",
                                style:
                                  "mask-origin: fill-box; caption-side: block-start; border-left-style: double;"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "rb",
                              attributes: {
                                contenteditable: "false",
                                hidden: null,
                                style:
                                  "border-block-start-color: hsl(5450899040239616 44% 57%); inset-block-end: 29%; backface-visibility: hidden; break-inside: avoid; scroll-padding-block-start: auto;"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "rt",
                              attributes: {
                                tabindex: "575",
                                contenteditable: "",
                                dir: "rtl"
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
                  tag: "mark",
                  attributes: {},
                  children: [
                    {
                      type: "tag",
                      tag: "dfn",
                      attributes: { hidden: null, dir: "auto" },
                      children: [
                        {
                          type: "tag",
                          tag: "embed",
                          children: [],
                          attributes: { src: "ad1t9edS#YsiXC7HXB", title: "FO" }
                        },
                        {
                          type: "tag",
                          tag: "var",
                          attributes: {},
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "script",
                          attributes: { hidden: null },
                          children: [
                            {
                              type: "tag",
                              tag: "h5",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "q",
                              attributes: {
                                contenteditable: "",
                                hidden: null,
                                tabindex: "903",
                                style:
                                  "justify-items: legacy left; padding-block-end: 64.9854in; grid-auto-columns: minmax(154.3998mm , 12%); scroll-margin-top: 117.2848ex; counter-set: vavvumo;"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "h6",
                              attributes: { dir: "ltr", hidden: null },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "a",
                              attributes: {
                                draggable: "true",
                                hidden: null,
                                dir: "ltr",
                                tabindex: "-890",
                                style:
                                  "flex-flow: row-reverse wrap-reverse; isolation: auto;"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "label",
                              attributes: {
                                style:
                                  "object-fit: fill; background: padding-box center bottom fixed none repeat-x content-box fixed image(rtl url(faz)) rgba(98% / 97%); border-collapse: collapse;"
                              },
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
                        type: "datetime-local",
                        style:
                          "font-family: 'za', 'iv', 'kinozruc'; clear: both; transition-timing-function: linear; font-feature-settings: normal; font-family: fimras, lehofci, ut, cursive, 'fuktu';"
                      }
                    }
                  ]
                },
                { type: "text", value: "Zu johapiwe el igasunlil." },
                {
                  type: "tag",
                  tag: "keygen",
                  children: [],
                  attributes: {
                    contenteditable: "",
                    tabindex: "-795",
                    draggable: "true",
                    dir: "rtl"
                  }
                }
              ]
            },
            {
              type: "tag",
              tag: "h4",
              attributes: {},
              children: [
                {
                  type: "tag",
                  tag: "label",
                  attributes: { dir: "rtl", draggable: "false" },
                  children: [
                    {
                      type: "tag",
                      tag: "select",
                      attributes: {
                        tabindex: "-997",
                        hidden: null,
                        style:
                          "align-content: last baseline; color: ButtonShadow; background-image: none; text-decoration-line: underline overline; border-right-color: ThreeDDarkShadow;"
                      },
                      children: []
                    },
                    {
                      type: "tag",
                      tag: "video",
                      attributes: {
                        draggable: "false",
                        tabindex: "134",
                        preload: "none",
                        contenteditable: "true"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "dfn",
                          attributes: { hidden: null },
                          children: [
                            { type: "text", value: "Zu vuserode." },
                            { type: "text", value: "Jimacli anu buruva ete." },
                            {
                              type: "tag",
                              tag: "iframe",
                              attributes: {
                                draggable: "false",
                                contenteditable: "",
                                tabindex: "-232",
                                title: "7v&lD"
                              },
                              children: [
                                { type: "text", value: "Egtez gek davpul." }
                              ]
                            },
                            {
                              type: "tag",
                              tag: "select",
                              attributes: { autofocus: null, multiple: null },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "text",
                          value: "Jin fuwek juap jokagi wewucela osku."
                        },
                        {
                          type: "tag",
                          tag: "span",
                          attributes: {},
                          children: [
                            { type: "text", value: "Iwumu ozdar re." },
                            {
                              type: "tag",
                              tag: "svg",
                              attributes: {
                                hidden: null,
                                tabindex: "-167",
                                draggable: "false",
                                dir: "auto"
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
                            dir: "auto",
                            hidden: null,
                            contenteditable: "false",
                            tabindex: "-269"
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "bdi",
                  attributes: {
                    hidden: null,
                    draggable: "true",
                    tabindex: "-957"
                  },
                  children: [
                    {
                      type: "tag",
                      tag: "label",
                      attributes: {},
                      children: [
                        {
                          type: "tag",
                          tag: "sup",
                          attributes: {
                            hidden: null,
                            tabindex: "754",
                            style: "font-language-override: normal; top: 12%;"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "video",
                              attributes: {
                                preload: "",
                                contenteditable: "false",
                                dir: "ltr"
                              },
                              children: []
                            },
                            {
                              type: "text",
                              value: "Er lu bodmal kisebnuz mos."
                            },
                            {
                              type: "tag",
                              tag: "script",
                              attributes: { async: null },
                              children: []
                            },
                            {
                              type: "text",
                              value: "Fuv bas lafna ko hepsajop ivoru."
                            }
                          ]
                        },
                        {
                          type: "text",
                          value: "Zelmaic ogpisno uzu rup unaleg tatutse."
                        },
                        {
                          type: "tag",
                          tag: "svg",
                          attributes: {},
                          children: [
                            {
                              type: "tag",
                              tag: "keygen",
                              children: [],
                              attributes: {
                                tabindex: "891",
                                dir: "auto",
                                contenteditable: "false",
                                hidden: null,
                                style:
                                  "border-image: none repeat 8249407778586624  / / 1.2071vw; overflow-wrap: anywhere; block-size: max-content; break-before: region;"
                              }
                            },
                            {
                              type: "tag",
                              tag: "noscript",
                              attributes: {
                                hidden: null,
                                dir: "rtl",
                                tabindex: "-43",
                                draggable: "true"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "output",
                              attributes: { dir: "ltr", hidden: null },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "h1",
                              attributes: {
                                draggable: "false",
                                hidden: null,
                                dir: "ltr",
                                style:
                                  "transition-delay: -3.528s; font-stretch: extra-expanded; transition-duration: 962.2875s; margin-block-end: -480.9165pc;"
                              },
                              children: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "text",
                      value: "Cebub asu wukozu fuzohe voun eloeblew aphu."
                    },
                    {
                      type: "tag",
                      tag: "small",
                      attributes: { contenteditable: "false" },
                      children: [
                        { type: "text", value: "Feozuci lodooc." },
                        {
                          type: "tag",
                          tag: "datalist",
                          attributes: {
                            draggable: "false",
                            tabindex: "251",
                            contenteditable: "true",
                            hidden: null
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "sup",
                              attributes: {
                                tabindex: "221",
                                hidden: null,
                                contenteditable: "",
                                draggable: "true",
                                style:
                                  "border-inline-style: hidden; text-align: center; caption-side: bottom; transition-delay: -137.2387s; padding-top: 126.6493px;"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "cite",
                              attributes: { dir: "rtl", hidden: null },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "map",
                          attributes: {
                            tabindex: "781",
                            hidden: null,
                            draggable: "true",
                            contenteditable: "false"
                          },
                          children: [
                            { type: "text", value: "Bepla imi atces." },
                            {
                              type: "text",
                              value: "Lotpura mu di bikrewu ge ne."
                            },
                            {
                              type: "text",
                              value:
                                "Wa hotokzin kur jad izmuf minvemi bagpigtal."
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "a",
                          attributes: { dir: "rtl" },
                          children: [
                            {
                              type: "tag",
                              tag: "br",
                              children: [],
                              attributes: {
                                draggable: "false",
                                contenteditable: "",
                                tabindex: "-973"
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "text",
                      value: "Goc odowu jacadge fudzor omke powu."
                    },
                    {
                      type: "tag",
                      tag: "small",
                      attributes: { contenteditable: "" },
                      children: [
                        {
                          type: "text",
                          value: "Rummiwi guwizha adoteit acetuetu bercabek li."
                        },
                        {
                          type: "tag",
                          tag: "picture",
                          attributes: {
                            tabindex: "-606",
                            dir: "ltr",
                            hidden: null
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "source",
                              children: [],
                              attributes: {
                                hidden: null,
                                dir: "rtl",
                                contenteditable: "true"
                              }
                            },
                            {
                              type: "tag",
                              tag: "img",
                              children: [],
                              attributes: {
                                crossorigin: "use-credentials",
                                decoding: "auto",
                                tabindex: "101",
                                ismap: null,
                                src: "u*F^[a"
                              }
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "keygen",
                          children: [],
                          attributes: {
                            tabindex: "-979",
                            contenteditable: "true"
                          }
                        },
                        { type: "text", value: "Mejmaggil tevozsi cu." },
                        {
                          type: "tag",
                          tag: "mark",
                          attributes: {
                            contenteditable: "true",
                            dir: "rtl",
                            hidden: null,
                            tabindex: "92"
                          },
                          children: [
                            {
                              type: "text",
                              value: "Hinorsem sa odnaofo bestojcip su nuz."
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
                  attributes: { dir: "auto" },
                  children: [
                    {
                      type: "tag",
                      tag: "picture",
                      attributes: {},
                      children: [
                        {
                          type: "tag",
                          tag: "source",
                          children: [],
                          attributes: {}
                        },
                        {
                          type: "tag",
                          tag: "img",
                          children: [],
                          attributes: {
                            hidden: null,
                            decoding: "auto",
                            dir: "rtl",
                            tabindex: "-613",
                            src: "rZ0pgWo8#d2^b"
                          }
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "picture",
                      attributes: { dir: "ltr" },
                      children: []
                    },
                    {
                      type: "tag",
                      tag: "img",
                      children: [],
                      attributes: { src: "HF" }
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "em",
                  attributes: {
                    draggable: "false",
                    tabindex: "-839",
                    dir: "auto"
                  },
                  children: [
                    {
                      type: "tag",
                      tag: "dfn",
                      attributes: {
                        tabindex: "-427",
                        draggable: "true",
                        contenteditable: "true"
                      },
                      children: [
                        { type: "text", value: "Niphormik futmu." },
                        {
                          type: "tag",
                          tag: "time",
                          attributes: { dir: "ltr", hidden: null },
                          children: [
                            {
                              type: "tag",
                              tag: "audio",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "abbr",
                              attributes: {
                                draggable: "false",
                                contenteditable: "",
                                dir: "ltr",
                                style:
                                  "background-repeat: repeat; transform-origin: center right 370.2686pc; border-block-start-color: currentcolor;"
                              },
                              children: []
                            },
                            { type: "text", value: "Him hescu." }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "ruby",
                          attributes: {
                            hidden: null,
                            tabindex: "953",
                            contenteditable: "",
                            draggable: "false"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "rp",
                              attributes: {
                                dir: "rtl",
                                hidden: null,
                                contenteditable: "",
                                draggable: "false"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "rb",
                              attributes: { contenteditable: "true" },
                              children: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "code",
                      attributes: { tabindex: "414", hidden: null, dir: "ltr" },
                      children: [
                        {
                          type: "tag",
                          tag: "s",
                          attributes: {
                            contenteditable: "true",
                            draggable: "true"
                          },
                          children: []
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "math",
                      attributes: {
                        contenteditable: "",
                        display: "block",
                        hidden: null,
                        draggable: "false",
                        style:
                          "animation-delay: -171.5981ms; perspective-origin: top 269.2785cm right -763.17pt;"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "datalist",
                          attributes: {
                            style:
                              "font-feature-settings: normal; border-start-start-radius: -560.8922vh;"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "option",
                              attributes: {
                                selected: null,
                                hidden: null,
                                style:
                                  "image-rendering: auto; font-synthesis: style weight;"
                              },
                              children: [
                                {
                                  type: "text",
                                  value:
                                    "Woduna pedzugom zaavanin horibwom nuvgidjo."
                                }
                              ]
                            },
                            {
                              type: "tag",
                              tag: "option",
                              attributes: {
                                hidden: null,
                                selected: null,
                                contenteditable: "true"
                              },
                              children: [{ type: "text", value: "Tuih ca." }]
                            },
                            {
                              type: "tag",
                              tag: "option",
                              attributes: {
                                hidden: null,
                                draggable: "true",
                                contenteditable: "true",
                                disabled: null,
                                selected: null
                              },
                              children: [
                                { type: "text", value: "Pumez belceloc." }
                              ]
                            },
                            {
                              type: "tag",
                              tag: "option",
                              attributes: {
                                draggable: "true",
                                selected: null,
                                disabled: null,
                                dir: "auto"
                              },
                              children: [
                                {
                                  type: "text",
                                  value: "Vul tuza cimim zetpodve."
                                }
                              ]
                            },
                            {
                              type: "tag",
                              tag: "slot",
                              attributes: {
                                hidden: null,
                                draggable: "true",
                                dir: "rtl"
                              },
                              children: []
                            }
                          ]
                        }
                      ]
                    },
                    { type: "text", value: "Hon voeni felwo gi hi muw." }
                  ]
                },
                {
                  type: "tag",
                  tag: "dfn",
                  attributes: {
                    draggable: "false",
                    tabindex: "133",
                    contenteditable: "true"
                  },
                  children: [
                    {
                      type: "tag",
                      tag: "span",
                      attributes: { hidden: null, draggable: "false" },
                      children: [
                        {
                          type: "tag",
                          tag: "del",
                          attributes: {
                            contenteditable: "true",
                            dir: "rtl",
                            draggable: "false",
                            tabindex: "-63"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "label",
                              attributes: { contenteditable: "true" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "cite",
                              attributes: { dir: "auto", tabindex: "-825" },
                              children: []
                            },
                            {
                              type: "text",
                              value:
                                "Kiwimwu vuczet cucuwe atobulsa ka ijakika habo."
                            },
                            {
                              type: "tag",
                              tag: "slot",
                              attributes: {
                                hidden: null,
                                draggable: "true",
                                tabindex: "512",
                                contenteditable: ""
                              },
                              children: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "text",
                      value: "Mikcup norlisi lujtigiz povnow culver."
                    }
                  ]
                }
              ]
            },
            {
              type: "tag",
              tag: "mark",
              attributes: {
                dir: "rtl",
                contenteditable: "true",
                draggable: "true",
                tabindex: "644"
              },
              children: [
                { type: "text", value: "Goni ezcazan nul uwipukfin tusoden." },
                { type: "text", value: "Cicutug vifezuges." },
                {
                  type: "tag",
                  tag: "strong",
                  attributes: {
                    dir: "ltr",
                    hidden: null,
                    draggable: "true",
                    contenteditable: ""
                  },
                  children: [
                    {
                      type: "tag",
                      tag: "video",
                      attributes: {},
                      children: [
                        {
                          type: "tag",
                          tag: "ruby",
                          attributes: {},
                          children: [
                            {
                              type: "tag",
                              tag: "rp",
                              attributes: {
                                contenteditable: "true",
                                tabindex: "986",
                                hidden: null,
                                draggable: "true"
                              },
                              children: []
                            },
                            { type: "text", value: "Fo te ba leveuf." }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "time",
                          attributes: {},
                          children: [
                            {
                              type: "tag",
                              tag: "iframe",
                              attributes: {
                                hidden: null,
                                src: "LwkxUaumK#gG",
                                tabindex: "306",
                                title: "euEAHo1zQOX]5X@ox"
                              },
                              children: [
                                {
                                  type: "text",
                                  value:
                                    "Zuwba nopil vedakawi pawiz pisiltig ojojadefa hif."
                                }
                              ]
                            },
                            {
                              type: "tag",
                              tag: "wbr",
                              children: [],
                              attributes: { tabindex: "970", hidden: null }
                            },
                            { type: "text", value: "Let icrosoj vaf pu." },
                            {
                              type: "text",
                              value: "Job soblog ni dehu ohgugini."
                            },
                            {
                              type: "tag",
                              tag: "embed",
                              children: [],
                              attributes: {
                                src: "4ZlTK4FLS0",
                                title: "BD09JmXc4pdzVLqTX^I"
                              }
                            }
                          ]
                        },
                        {
                          type: "text",
                          value: "Ta eku fobnegci dunjuve gebsap."
                        },
                        {
                          type: "tag",
                          tag: "small",
                          attributes: {
                            dir: "rtl",
                            contenteditable: "false",
                            tabindex: "928"
                          },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "data",
                          attributes: { contenteditable: "false" },
                          children: [
                            { type: "text", value: "Jauh opsovah tun." },
                            {
                              type: "text",
                              value: "Lewku vowep ahefa eg uv ufunu fa."
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "u",
                      attributes: { contenteditable: "false" },
                      children: [
                        {
                          type: "tag",
                          tag: "video",
                          attributes: { draggable: "true", tabindex: "-662" },
                          children: [
                            {
                              type: "text",
                              value: "Oco gu moev zuhjo na ojmutdas."
                            },
                            { type: "text", value: "Jooh wip dem cefbon." },
                            {
                              type: "text",
                              value: "Ini ikekub hut sa daseg sos torecfon."
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "audio",
                      attributes: {
                        dir: "auto",
                        draggable: "false",
                        hidden: null,
                        contenteditable: "",
                        style:
                          "scroll-margin-block: -137.5323ex; direction: ltr; background-attachment: scroll; background-blend-mode: normal; padding-block: 46%;"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "picture",
                          attributes: { dir: "auto", contenteditable: "false" },
                          children: [
                            {
                              type: "tag",
                              tag: "source",
                              children: [],
                              attributes: {
                                contenteditable: "",
                                dir: "auto",
                                hidden: null,
                                tabindex: "-358"
                              }
                            },
                            {
                              type: "tag",
                              tag: "img",
                              children: [],
                              attributes: {
                                crossorigin: "anonymous",
                                dir: "auto",
                                ismap: null,
                                draggable: "true",
                                src: "p*biY*"
                              }
                            },
                            {
                              type: "tag",
                              tag: "template",
                              attributes: {
                                draggable: "true",
                                tabindex: "-250"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "img",
                              children: [],
                              attributes: {
                                src: "LT5*d",
                                draggable: "false",
                                hidden: null,
                                style:
                                  "empty-cells: show; list-style: inside none symbols(); font-weight: bolder; text-emphasis-style: none;"
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "iframe",
                      attributes: {
                        contenteditable: "false",
                        draggable: "false",
                        dir: "rtl",
                        tabindex: "-70",
                        title: "nPlc9^dl"
                      },
                      children: [
                        {
                          type: "text",
                          value: "Ragpujuh ibu lohjic raziknuw ebi."
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
                tabindex: "915",
                contenteditable: "",
                dir: "rtl",
                hidden: null
              },
              children: [
                {
                  type: "tag",
                  tag: "keygen",
                  children: [],
                  attributes: { dir: "auto" }
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
