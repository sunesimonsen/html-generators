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
        attributes: { hidden: "" },
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
                  hidden: "",
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
                      hidden: "",
                      contenteditable: ""
                    },
                    children: [
                      {
                        type: "tag",
                        tag: "embed",
                        children: [],
                        attributes: {
                          hidden: "",
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
                  hidden: "",
                  contenteditable: "true"
                },
                children: [
                  {
                    type: "tag",
                    tag: "template",
                    attributes: {
                      draggable: "false",
                      hidden: "",
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
                        children: []
                      }
                    ]
                  },
                  {
                    type: "tag",
                    tag: "source",
                    children: [],
                    attributes: {
                      dir: "rtl",
                      tabindex: "350",
                      draggable: "false",
                      hidden: ""
                    }
                  },
                  {
                    type: "tag",
                    tag: "script",
                    attributes: {
                      defer: "",
                      tabindex: "43",
                      src: "I(u^$B3b(&yFO)Q)[@fv",
                      dir: "rtl",
                      integrity: "txJm",
                      nomodule: ""
                    },
                    children: [
                      { type: "tag", tag: "h6", attributes: {}, children: [] },
                      {
                        type: "tag",
                        tag: "nav",
                        attributes: { hidden: "" },
                        children: [
                          {
                            type: "tag",
                            tag: "br",
                            children: [],
                            attributes: {
                              hidden: "",
                              dir: "auto",
                              tabindex: "-810"
                            }
                          },
                          {
                            type: "tag",
                            tag: "fieldset",
                            attributes: {
                              hidden: "",
                              tabindex: "799",
                              contenteditable: "true",
                              dir: "ltr",
                              disabled: ""
                            },
                            children: [
                              {
                                type: "tag",
                                tag: "legend",
                                attributes: {
                                  contenteditable: "true",
                                  hidden: "",
                                  draggable: "false"
                                },
                                children: []
                              }
                            ]
                          },
                          {
                            type: "tag",
                            tag: "samp",
                            attributes: { draggable: "true", tabindex: "982" },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "br",
                            children: [],
                            attributes: {
                              tabindex: "303",
                              contenteditable: "true"
                            }
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "script",
                        attributes: { hidden: "" },
                        children: [
                          {
                            type: "tag",
                            tag: "nav",
                            attributes: { contenteditable: "true", hidden: "" },
                            children: []
                          },
                          {
                            type: "text",
                            value: "Waumo ak no ba ekvicod hiwa."
                          },
                          {
                            type: "tag",
                            tag: "script",
                            attributes: {
                              src: "sPAl4ibzi",
                              draggable: "true",
                              async: "",
                              defer: "",
                              hidden: "",
                              tabindex: "-40",
                              crossorigin: "use-credentials"
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
                      dir: "ltr",
                      hidden: "",
                      contenteditable: "true",
                      decoding: "async",
                      ismap: "",
                      src: "dT(U$dtBbU*LL"
                    }
                  },
                  {
                    type: "tag",
                    tag: "script",
                    attributes: {
                      defer: "",
                      crossorigin: "anonymous",
                      dir: "auto",
                      tabindex: "576",
                      contenteditable: "true"
                    },
                    children: [
                      {
                        type: "text",
                        value: "Azifa ga bavec lubet pa lowbokuhi zi."
                      },
                      {
                        type: "tag",
                        tag: "select",
                        attributes: {
                          autofocus: "",
                          required: "",
                          size: "867",
                          draggable: "false",
                          contenteditable: "false",
                          dir: "ltr",
                          tabindex: "-680",
                          disabled: ""
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "template",
                            attributes: {
                              draggable: "true",
                              tabindex: "-896",
                              dir: "rtl",
                              hidden: ""
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "option",
                            attributes: {},
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "option",
                            attributes: {
                              disabled: "",
                              contenteditable: "false",
                              dir: "rtl",
                              tabindex: "493",
                              draggable: "true",
                              hidden: ""
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "optgroup",
                            attributes: {},
                            children: []
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "select",
                        attributes: {
                          hidden: "",
                          tabindex: "-931",
                          autofocus: "",
                          dir: "auto",
                          required: "",
                          multiple: ""
                        },
                        children: []
                      }
                    ]
                  }
                ]
              },
              {
                type: "text",
                value: "Norer fos ecumoce waccezluj huwsojwa lirhu mi."
              },
              { type: "text", value: "Ni dod zorhukne." }
            ]
          },
          {
            type: "tag",
            tag: "button",
            attributes: { type: "button" },
            children: [
              {
                type: "tag",
                tag: "var",
                attributes: {},
                children: [
                  { type: "text", value: "Ocevucfof nuwijwaw ocu doja nej." }
                ]
              },
              { type: "text", value: "Cehul remuved cuw." },
              {
                type: "tag",
                tag: "noscript",
                attributes: {
                  draggable: "true",
                  tabindex: "-933",
                  dir: "auto",
                  hidden: ""
                },
                children: [
                  {
                    type: "text",
                    value: "Lilezenu bi ba vum uwizozeje ga jof."
                  },
                  {
                    type: "tag",
                    tag: "img",
                    children: [],
                    attributes: {
                      ismap: "",
                      crossorigin: "use-credentials",
                      src: "J59Mw@8O)P"
                    }
                  },
                  {
                    type: "tag",
                    tag: "label",
                    attributes: {
                      hidden: "",
                      dir: "ltr",
                      tabindex: "-755",
                      contenteditable: "true"
                    },
                    children: [
                      {
                        type: "tag",
                        tag: "code",
                        attributes: {
                          dir: "rtl",
                          draggable: "true",
                          tabindex: "-905",
                          hidden: ""
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "kbd",
                            attributes: { hidden: "" },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "input",
                            children: [],
                            attributes: {
                              multiple: "",
                              spellcheck: "false",
                              type: "hidden",
                              dir: "ltr",
                              autofocus: "",
                              inputmode: "text",
                              checked: "",
                              hidden: "",
                              required: "",
                              readonly: "",
                              contenteditable: "true",
                              capture: ""
                            }
                          }
                        ]
                      },
                      { type: "text", value: "Ci di fo gomu pofofbu." },
                      { type: "text", value: "Kadi nef divedo." }
                    ]
                  }
                ]
              }
            ]
          },
          { type: "text", value: "Civoj ju ziuflul zem." },
          { type: "text", value: "Cadfoivi bavliha lab efki." },
          {
            type: "tag",
            tag: "i",
            attributes: {},
            children: [
              {
                type: "tag",
                tag: "output",
                attributes: { hidden: "", dir: "rtl" },
                children: []
              }
            ]
          }
        ]
      },
      {
        type: "tag",
        tag: "code",
        attributes: { draggable: "false", tabindex: "-565" },
        children: [
          {
            type: "tag",
            tag: "iframe",
            attributes: {
              dir: "auto",
              src: "hqlBs",
              tabindex: "-851",
              title: "7"
            },
            children: []
          },
          {
            type: "tag",
            tag: "picture",
            attributes: {
              tabindex: "-697",
              contenteditable: "false",
              hidden: "",
              dir: "ltr"
            },
            children: [
              {
                type: "tag",
                tag: "img",
                children: [],
                attributes: {
                  src: "QJu!4pn)x0Fo",
                  draggable: "false",
                  hidden: "",
                  dir: "ltr",
                  decoding: "async",
                  ismap: "",
                  tabindex: "-707"
                }
              },
              {
                type: "tag",
                tag: "script",
                attributes: {
                  hidden: "",
                  contenteditable: "true",
                  async: "",
                  tabindex: "-454",
                  dir: "rtl",
                  integrity: "]o",
                  draggable: "false",
                  crossorigin: "use-credentials"
                },
                children: []
              },
              {
                type: "tag",
                tag: "template",
                attributes: { contenteditable: "false" },
                children: []
              },
              {
                type: "tag",
                tag: "template",
                attributes: {
                  contenteditable: "true",
                  draggable: "false",
                  dir: "rtl"
                },
                children: []
              },
              {
                type: "tag",
                tag: "template",
                attributes: {
                  tabindex: "-933",
                  hidden: "",
                  draggable: "false",
                  dir: "auto"
                },
                children: [
                  {
                    type: "tag",
                    tag: "aside",
                    attributes: {
                      hidden: "",
                      draggable: "false",
                      dir: "ltr",
                      contenteditable: "false"
                    },
                    children: [
                      {
                        type: "text",
                        value: "Ijeser noiljis sejmem igrak tovaav."
                      },
                      { type: "text", value: "Zunudo hos gi pusdudev seama." },
                      { type: "text", value: "Wo tisirse uwsemi taw." },
                      {
                        type: "tag",
                        tag: "dfn",
                        attributes: { contenteditable: "", draggable: "false" },
                        children: [
                          {
                            type: "tag",
                            tag: "bdi",
                            attributes: {
                              contenteditable: "false",
                              dir: "auto",
                              tabindex: "911"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "samp",
                            attributes: {},
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "abbr",
                            attributes: {
                              contenteditable: "false",
                              hidden: "",
                              tabindex: "-870",
                              draggable: "false"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "button",
                            attributes: {
                              tabindex: "4",
                              draggable: "true",
                              disabled: "",
                              contenteditable: "",
                              type: "reset"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "input",
                            children: [],
                            attributes: {
                              required: "",
                              type: "date",
                              readonly: "",
                              tabindex: "-176",
                              autofocus: "",
                              hidden: "",
                              spellcheck: "false",
                              multiple: ""
                            }
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
        attributes: {},
        children: [
          {
            type: "tag",
            tag: "embed",
            children: [],
            attributes: { hidden: "", src: "pXMn[", title: "PE@gN]nLw" }
          },
          {
            type: "tag",
            tag: "object",
            attributes: { contenteditable: "true" },
            children: [
              { type: "text", value: "Riczo rikmi fafec legtikbud." },
              {
                type: "tag",
                tag: "iframe",
                attributes: {
                  tabindex: "-254",
                  src: "LbSh",
                  draggable: "false",
                  dir: "rtl",
                  contenteditable: "",
                  title: "Pr1h7r]1S@79)D*Xkp"
                },
                children: []
              },
              {
                type: "tag",
                tag: "cite",
                attributes: { tabindex: "-13" },
                children: []
              },
              {
                type: "text",
                value: "Baf tiritoke lijukis nuhu zadsiznof bizi."
              }
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
          attributes: { hidden: "" },
          children: [
            {
              type: "tag",
              tag: "select",
              attributes: {
                disabled: "",
                contenteditable: "false",
                required: "",
                size: "183",
                tabindex: "-612",
                autofocus: "",
                hidden: ""
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
                      attributes: { dir: "ltr", hidden: "" },
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
                                hidden: ""
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
                          attributes: { hidden: "", title: "[PM" },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "a",
                          attributes: { tabindex: "-966" },
                          children: [
                            {
                              type: "tag",
                              tag: "progress",
                              attributes: {
                                tabindex: "642",
                                hidden: "",
                                draggable: "true",
                                contenteditable: "false"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "dfn",
                              attributes: {
                                tabindex: "-101",
                                draggable: "false",
                                dir: "auto"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "script",
                              attributes: {
                                dir: "ltr",
                                hidden: "",
                                tabindex: "-494"
                              },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "meter",
                          attributes: {
                            dir: "rtl",
                            draggable: "true",
                            hidden: ""
                          },
                          children: [
                            { type: "text", value: "Ukiipi povivho sataf." },
                            {
                              type: "tag",
                              tag: "q",
                              attributes: {
                                tabindex: "370",
                                dir: "ltr",
                                draggable: "false",
                                contenteditable: "false"
                              },
                              children: []
                            },
                            { type: "text", value: "Suzceh egpa muvona to." }
                          ]
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "bdi",
                      attributes: {
                        dir: "auto",
                        contenteditable: "",
                        hidden: "",
                        tabindex: "849"
                      },
                      children: []
                    },
                    {
                      type: "tag",
                      tag: "strong",
                      attributes: { hidden: "", dir: "auto", tabindex: "-810" },
                      children: [
                        {
                          type: "tag",
                          tag: "b",
                          attributes: {},
                          children: [
                            {
                              type: "tag",
                              tag: "abbr",
                              attributes: { tabindex: "861" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "bdi",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "ruby",
                              attributes: {
                                dir: "rtl",
                                tabindex: "770",
                                hidden: "",
                                contenteditable: ""
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "label",
                              attributes: {
                                draggable: "false",
                                contenteditable: "true",
                                tabindex: "700"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "wbr",
                              children: [],
                              attributes: {
                                contenteditable: "",
                                hidden: "",
                                draggable: "true"
                              }
                            }
                          ]
                        },
                        {
                          type: "text",
                          value: "Miceb cuk maffigra vutuwom wibse daj."
                        },
                        {
                          type: "tag",
                          tag: "span",
                          attributes: {},
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "audio",
                          attributes: {},
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "span",
                          attributes: {},
                          children: [
                            {
                              type: "tag",
                              tag: "samp",
                              attributes: {},
                              children: []
                            }
                          ]
                        }
                      ]
                    },
                    { type: "text", value: "Pul nimap." },
                    {
                      type: "tag",
                      tag: "template",
                      attributes: {
                        hidden: "",
                        tabindex: "-626",
                        contenteditable: "true",
                        draggable: "false"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "label",
                          attributes: {
                            draggable: "false",
                            tabindex: "-573",
                            hidden: "",
                            dir: "ltr"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "sub",
                              attributes: {
                                tabindex: "-69",
                                draggable: "true",
                                hidden: "",
                                contenteditable: "true"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "img",
                              children: [],
                              attributes: { src: "Yy" }
                            }
                          ]
                        },
                        { type: "text", value: "Er ag do tubokuhi zi." },
                        {
                          type: "text",
                          value: "Widho ewegi zoglupit jula iva uzoli."
                        },
                        {
                          type: "tag",
                          tag: "style",
                          attributes: { hidden: "", contenteditable: "true" },
                          children: [
                            {
                              type: "tag",
                              tag: "label",
                              attributes: { hidden: "" },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "base",
                          children: [],
                          attributes: {
                            hidden: "",
                            tabindex: "-975",
                            contenteditable: "false"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            { type: "text", value: "Wu wafos ecumoce waccezluj huwsojwa." },
            { type: "text", value: "Rohudi bisa zatossez neem." },
            {
              type: "tag",
              tag: "ruby",
              attributes: { draggable: "false" },
              children: [
                {
                  type: "tag",
                  tag: "video",
                  attributes: {
                    preload: "",
                    contenteditable: "true",
                    dir: "ltr",
                    hidden: "",
                    draggable: "false"
                  },
                  children: [
                    {
                      type: "tag",
                      tag: "rt",
                      attributes: { draggable: "false" },
                      children: [
                        {
                          type: "tag",
                          tag: "input",
                          children: [],
                          attributes: {
                            type: "email",
                            contenteditable: "true",
                            readonly: "",
                            tabindex: "-77",
                            autofocus: "",
                            dir: "auto",
                            multiple: "",
                            draggable: "true",
                            inputmode: "url",
                            capture: "",
                            spellcheck: "false",
                            checked: "",
                            disabled: "",
                            required: ""
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
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "rp",
                  attributes: { tabindex: "381", hidden: "" },
                  children: [
                    {
                      type: "tag",
                      tag: "object",
                      attributes: {},
                      children: []
                    },
                    {
                      type: "text",
                      value:
                        "Rusomiwus hegaog huzob dapil pevrunit fibzo wuffob."
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
                  tag: "textarea",
                  attributes: {
                    maxlength: "512",
                    readonly: "",
                    autocomplete: "off"
                  },
                  children: []
                },
                {
                  type: "tag",
                  tag: "time",
                  attributes: {},
                  children: [
                    {
                      type: "tag",
                      tag: "meter",
                      attributes: {
                        dir: "ltr",
                        contenteditable: "false",
                        hidden: "",
                        tabindex: "-594"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "ruby",
                          attributes: { draggable: "true", tabindex: "-900" },
                          children: [
                            {
                              type: "tag",
                              tag: "rp",
                              attributes: { tabindex: "-101", dir: "ltr" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "rb",
                              attributes: { draggable: "true" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "rb",
                              attributes: {},
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "b",
                          attributes: { tabindex: "-55" },
                          children: [
                            {
                              type: "text",
                              value:
                                "Buzpavuw rilesgu mam ratohsi pem lefi ufe."
                            },
                            {
                              type: "text",
                              value: "Habodnin lawesu osofa ossav etgodfat tiw."
                            },
                            {
                              type: "tag",
                              tag: "wbr",
                              children: [],
                              attributes: { dir: "auto" }
                            },
                            { type: "text", value: "Alilul ropi ik rawti oh." },
                            {
                              type: "tag",
                              tag: "output",
                              attributes: {
                                hidden: "",
                                dir: "auto",
                                draggable: "false"
                              },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "select",
                          attributes: {
                            autofocus: "",
                            disabled: "",
                            multiple: "",
                            tabindex: "-779"
                          },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "slot",
                          attributes: {},
                          children: [
                            {
                              type: "tag",
                              tag: "small",
                              attributes: { tabindex: "110", hidden: "" },
                              children: []
                            }
                          ]
                        }
                      ]
                    },
                    { type: "text", value: "Mit pewo tisirse uwsemi." },
                    { type: "text", value: "Funpahas ociwowwo sen." },
                    {
                      type: "tag",
                      tag: "cite",
                      attributes: {},
                      children: [
                        {
                          type: "tag",
                          tag: "bdi",
                          attributes: {
                            draggable: "true",
                            contenteditable: "false",
                            hidden: "",
                            tabindex: "-124"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "embed",
                              children: [],
                              attributes: {
                                tabindex: "-537",
                                contenteditable: "false",
                                draggable: "false",
                                dir: "rtl",
                                src: "J2^HRqcH^k",
                                title: "KmF"
                              }
                            },
                            {
                              type: "text",
                              value: "Zi haf guzfi cizpe cemet gitanu cesnim."
                            },
                            {
                              type: "tag",
                              tag: "input",
                              children: [],
                              attributes: {
                                capture: "",
                                type: "email",
                                autofocus: "",
                                required: "",
                                spellcheck: "default",
                                checked: "",
                                dir: "auto",
                                contenteditable: "true"
                              }
                            },
                            {
                              type: "text",
                              value: "Budwup reha bicanip wahus atuor."
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
                          tag: "time",
                          attributes: { dir: "rtl", tabindex: "-736" },
                          children: [
                            { type: "text", value: "Lijukis nuhu zadsiznof." },
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
                              tag: "samp",
                              attributes: {
                                dir: "rtl",
                                contenteditable: "false"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "strong",
                              attributes: {
                                tabindex: "-823",
                                contenteditable: "true"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "i",
                              attributes: {
                                draggable: "true",
                                dir: "rtl",
                                contenteditable: "true",
                                tabindex: "720"
                              },
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
                      attributes: { src: "t%t", title: "sSUXKmQ^!EDC5MF" }
                    }
                  ]
                }
              ]
            },
            {
              type: "tag",
              tag: "figcaption",
              attributes: { contenteditable: "false" },
              children: [
                { type: "text", value: "Wohsul owapeg jan elsajzic." },
                {
                  type: "tag",
                  tag: "section",
                  attributes: { contenteditable: "true" },
                  children: [
                    {
                      type: "tag",
                      tag: "q",
                      attributes: {
                        contenteditable: "true",
                        draggable: "true",
                        hidden: ""
                      },
                      children: [
                        { type: "text", value: "Vimciiso zostuz." },
                        {
                          type: "tag",
                          tag: "var",
                          attributes: { tabindex: "-647" },
                          children: [
                            {
                              type: "text",
                              value: "Ohdo guukalo elrubon racu kisciam."
                            },
                            {
                              type: "tag",
                              tag: "area",
                              children: [],
                              attributes: {
                                tabindex: "427",
                                hidden: "",
                                dir: "auto"
                              }
                            },
                            {
                              type: "tag",
                              tag: "output",
                              attributes: { draggable: "true" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "canvas",
                              attributes: {
                                tabindex: "384",
                                contenteditable: "false",
                                hidden: "",
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
                      tag: "i",
                      attributes: {
                        contenteditable: "true",
                        dir: "ltr",
                        tabindex: "-480",
                        hidden: ""
                      },
                      children: [
                        { type: "text", value: "Webne eh sabucic vaoz." },
                        {
                          type: "tag",
                          tag: "small",
                          attributes: {
                            hidden: "",
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
                                hidden: ""
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "wbr",
                              children: [],
                              attributes: { dir: "ltr" }
                            },
                            {
                              type: "tag",
                              tag: "wbr",
                              children: [],
                              attributes: {}
                            },
                            {
                              type: "text",
                              value:
                                "Lucufuonu hezir ithozi inu ik di ovbuhomo."
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
                          tag: "i",
                          attributes: { dir: "auto", tabindex: "-496" },
                          children: []
                        }
                      ]
                    },
                    {
                      type: "text",
                      value: "Vu eci pianevin wuavoed wehowdor fuuviit aj."
                    },
                    {
                      type: "tag",
                      tag: "audio",
                      attributes: { tabindex: "160" },
                      children: [
                        {
                          type: "tag",
                          tag: "script",
                          attributes: {
                            hidden: "",
                            nomodule: "",
                            async: "",
                            integrity: "hu4bOF)!zDUn&3h6",
                            contenteditable: "",
                            dir: "auto"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "svg",
                              attributes: { contenteditable: "true" },
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
                              tag: "b",
                              attributes: {
                                tabindex: "648",
                                hidden: "",
                                draggable: "false",
                                dir: "auto"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "map",
                              attributes: {},
                              children: []
                            }
                          ]
                        },
                        { type: "text", value: "Lizerna uw." },
                        { type: "text", value: "Ed areec hodezfak ikuukonu." },
                        { type: "text", value: "Isze ep runifaf." }
                      ]
                    }
                  ]
                },
                { type: "text", value: "Fol zapfebozo nib dor re fa kenmez." },
                {
                  type: "tag",
                  tag: "embed",
                  children: [],
                  attributes: {
                    contenteditable: "true",
                    src: "S1vWZ4@(5^",
                    title: "3hkrh]QkbKJTpZz"
                  }
                }
              ]
            }
          ]
        },
        {
          type: "tag",
          tag: "figure",
          attributes: { contenteditable: "true", hidden: "", tabindex: "-883" },
          children: []
        },
        {
          type: "tag",
          tag: "figure",
          attributes: {},
          children: [
            {
              type: "tag",
              tag: "h5",
              attributes: { contenteditable: "" },
              children: [
                {
                  type: "tag",
                  tag: "q",
                  attributes: {
                    draggable: "false",
                    dir: "auto",
                    tabindex: "802"
                  },
                  children: [
                    {
                      type: "tag",
                      tag: "map",
                      attributes: { draggable: "true", tabindex: "40" },
                      children: []
                    },
                    {
                      type: "tag",
                      tag: "textarea",
                      attributes: {
                        cols: "745",
                        dir: "auto",
                        minlength: "790",
                        contenteditable: "true",
                        wrap: "hard",
                        draggable: "true",
                        autofocus: "",
                        spellcheck: "true",
                        hidden: "",
                        maxlength: "555",
                        readonly: ""
                      },
                      children: []
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "textarea",
                  attributes: {
                    hidden: "",
                    tabindex: "-841",
                    rows: "174",
                    cols: "961",
                    readonly: "",
                    autocomplete: "on",
                    autofocus: "",
                    contenteditable: "false",
                    dir: "auto",
                    draggable: "true"
                  },
                  children: []
                },
                {
                  type: "tag",
                  tag: "u",
                  attributes: { hidden: "" },
                  children: [
                    {
                      type: "tag",
                      tag: "mark",
                      attributes: { draggable: "true", tabindex: "-606" },
                      children: [
                        {
                          type: "tag",
                          tag: "kbd",
                          attributes: {
                            dir: "rtl",
                            contenteditable: "false",
                            tabindex: "236",
                            draggable: "false"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "picture",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "datalist",
                              attributes: {
                                dir: "rtl",
                                contenteditable: "true"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "math",
                              attributes: { tabindex: "399", hidden: "" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "sup",
                              attributes: {
                                contenteditable: "",
                                dir: "rtl",
                                hidden: ""
                              },
                              children: []
                            }
                          ]
                        },
                        { type: "text", value: "Huna ner misowef." },
                        {
                          type: "tag",
                          tag: "dfn",
                          attributes: { contenteditable: "true" },
                          children: []
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "svg",
                      attributes: { hidden: "", dir: "auto", tabindex: "706" },
                      children: [
                        {
                          type: "tag",
                          tag: "svg",
                          attributes: { contenteditable: "", tabindex: "231" },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "button",
                          attributes: { type: "reset" },
                          children: []
                        }
                      ]
                    }
                  ]
                },
                { type: "text", value: "Ocdi vaul baztusig." }
              ]
            },
            { type: "text", value: "Kofab fo woufwo hu hoezuva." },
            { type: "text", value: "Evu bawvur opmop loun." },
            {
              type: "tag",
              tag: "figcaption",
              attributes: {},
              children: [
                {
                  type: "tag",
                  tag: "h6",
                  attributes: {
                    tabindex: "-739",
                    hidden: "",
                    draggable: "false",
                    contenteditable: "true"
                  },
                  children: [
                    {
                      type: "tag",
                      tag: "time",
                      attributes: {
                        hidden: "",
                        tabindex: "818",
                        draggable: "true",
                        contenteditable: ""
                      },
                      children: [
                        {
                          type: "text",
                          value: "Liselig so tos livpul ajlari."
                        },
                        {
                          type: "tag",
                          tag: "progress",
                          attributes: { draggable: "true" },
                          children: [
                            {
                              type: "tag",
                              tag: "meter",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "script",
                              attributes: {
                                tabindex: "-197",
                                contenteditable: "true"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "math",
                              attributes: { contenteditable: "" },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "input",
                          children: [],
                          attributes: {
                            hidden: "",
                            checked: "",
                            type: "image",
                            disabled: "",
                            required: "",
                            inputmode: "decimal",
                            spellcheck: "true",
                            tabindex: "-823",
                            multiple: ""
                          }
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "strong",
                      attributes: { contenteditable: "false", tabindex: "184" },
                      children: [
                        {
                          type: "tag",
                          tag: "object",
                          attributes: { dir: "auto" },
                          children: [
                            {
                              type: "tag",
                              tag: "b",
                              attributes: {
                                hidden: "",
                                tabindex: "-794",
                                dir: "rtl"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "noscript",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "text",
                              value: "Isehetjo mordopni feevi dab."
                            },
                            {
                              type: "tag",
                              tag: "bdo",
                              attributes: { hidden: "" },
                              children: []
                            },
                            {
                              type: "text",
                              value: "Teg salug vok novaz acwen."
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
            dir: "rtl",
            hidden: "",
            contenteditable: "false",
            draggable: "false"
          },
          children: [
            { type: "tag", tag: "h3", attributes: { dir: "rtl" }, children: [] }
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
