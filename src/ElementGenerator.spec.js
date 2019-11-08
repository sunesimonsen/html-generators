const expect = require("unexpected")
  .clone()
  .use(require("unexpected-snapshot"))
  .use(require("magicpen-prism"));

const stringify = require("./stringify");

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
            attributes: { contenteditable: "false" },
            children: [
              { type: "text", value: "Goh bibro." },
              {
                type: "tag",
                tag: "sub",
                attributes: { contenteditable: "" },
                children: [
                  {
                    type: "tag",
                    tag: "data",
                    attributes: { contenteditable: "false" },
                    children: [
                      {
                        type: "tag",
                        tag: "math",
                        attributes: { dir: "ltr" },
                        children: []
                      },
                      {
                        type: "tag",
                        tag: "label",
                        attributes: { tabindex: "966" },
                        children: [
                          {
                            type: "tag",
                            tag: "a",
                            attributes: { draggable: "false" },
                            children: []
                          },
                          { type: "text", value: "Hazekgin uv okonokan." },
                          { type: "text", value: "Uhlog sezsi ju." },
                          {
                            type: "tag",
                            tag: "bdo",
                            attributes: { contenteditable: "" },
                            children: []
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "picture",
                        attributes: { hidden: "" },
                        children: [
                          {
                            type: "tag",
                            tag: "source",
                            children: [],
                            attributes: { contenteditable: "false" }
                          },
                          {
                            type: "tag",
                            tag: "img",
                            children: [],
                            attributes: {
                              decoding: "auto",
                              src: "f&AWi^@!UHyheBxX"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              { type: "text", value: "Tevnedwus hogbimab gatih vudsi gewse." }
            ]
          },
          {
            type: "tag",
            tag: "button",
            attributes: { dir: "auto", type: "button" },
            children: [
              { type: "text", value: "Iv adlew ho." },
              { type: "text", value: "Luh pi hoje fef." },
              {
                type: "tag",
                tag: "strong",
                attributes: { draggable: "false" },
                children: [
                  {
                    type: "text",
                    value: "Wi febenpib ku vapiz soze wu tumit."
                  },
                  { type: "text", value: "Femwaser wi." }
                ]
              }
            ]
          },
          { type: "text", value: "Ta vej edowa rur va rimhuuw." },
          { type: "text", value: "Tajloewu zuecuaw sajopbed pol harhi." },
          {
            type: "tag",
            tag: "i",
            attributes: { contenteditable: "false" },
            children: [
              {
                type: "tag",
                tag: "sup",
                attributes: { draggable: "true" },
                children: [
                  {
                    type: "tag",
                    tag: "del",
                    attributes: { draggable: "false" },
                    children: [
                      {
                        type: "tag",
                        tag: "span",
                        attributes: { draggable: "true" },
                        children: [
                          {
                            type: "text",
                            value: "Ohi suzceh egpa muvona to fejuhera."
                          },
                          {
                            type: "tag",
                            tag: "u",
                            attributes: { hidden: "" },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "dfn",
                            attributes: { dir: "ltr" },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "img",
                            children: [],
                            attributes: { ismap: "", src: "T^gLaL" }
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "q",
                        attributes: { contenteditable: "true" },
                        children: []
                      },
                      {
                        type: "tag",
                        tag: "mark",
                        attributes: { dir: "auto" },
                        children: []
                      },
                      {
                        type: "text",
                        value: "Bedinbel uhu bebah demzef navgiro waumo ak."
                      },
                      {
                        type: "tag",
                        tag: "mark",
                        attributes: { draggable: "true" },
                        children: [
                          {
                            type: "text",
                            value: "Fune dof jozwom wibse daj ca."
                          },
                          { type: "text", value: "Ura doal." },
                          { type: "text", value: "Mo tuibe tupum foctub." },
                          {
                            type: "tag",
                            tag: "samp",
                            attributes: { draggable: "false" },
                            children: []
                          }
                        ]
                      }
                    ]
                  },
                  { type: "text", value: "Lipnu opeupu ja la to veer." },
                  {
                    type: "tag",
                    tag: "video",
                    attributes: { draggable: "false" },
                    children: [
                      {
                        type: "tag",
                        tag: "br",
                        children: [],
                        attributes: { hidden: "" }
                      }
                    ]
                  }
                ]
              },
              {
                type: "tag",
                tag: "em",
                attributes: { hidden: "" },
                children: [
                  {
                    type: "text",
                    value: "Widho ewegi zoglupit jula iva uzoli."
                  },
                  {
                    type: "tag",
                    tag: "strong",
                    attributes: { hidden: "" },
                    children: []
                  },
                  { type: "text", value: "Se gozzod puc cisrerud." },
                  {
                    type: "text",
                    value: "Tuccirce waccezluj huwsojwa lirhu mi mi."
                  },
                  {
                    type: "tag",
                    tag: "object",
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
        type: "tag",
        tag: "code",
        attributes: { contenteditable: "false" },
        children: [
          {
            type: "tag",
            tag: "s",
            attributes: { dir: "ltr" },
            children: [
              { type: "text", value: "Ocevucfof nuwijwaw ocu doja nej." },
              {
                type: "tag",
                tag: "strong",
                attributes: { draggable: "true" },
                children: []
              },
              {
                type: "tag",
                tag: "video",
                attributes: { preload: "none" },
                children: [
                  {
                    type: "tag",
                    tag: "abbr",
                    attributes: { contenteditable: "false" },
                    children: [
                      {
                        type: "tag",
                        tag: "script",
                        attributes: { contenteditable: "true" },
                        children: [
                          {
                            type: "tag",
                            tag: "section",
                            attributes: { contenteditable: "true" },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "textarea",
                            attributes: { autofocus: "" },
                            children: []
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "textarea",
                        attributes: { rows: "842" },
                        children: []
                      },
                      { type: "text", value: "Maba vum." },
                      {
                        type: "tag",
                        tag: "sup",
                        attributes: { hidden: "" },
                        children: [
                          {
                            type: "tag",
                            tag: "output",
                            attributes: { dir: "auto" },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "u",
                            attributes: { dir: "ltr" },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "input",
                            children: [],
                            attributes: { readonly: "", type: "range" }
                          },
                          { type: "text", value: "Dapil pevrunit." },
                          { type: "text", value: "Pazo wuffob simikis pitmep." }
                        ]
                      },
                      { type: "text", value: "Otaovze cu keti ci di." }
                    ]
                  },
                  { type: "text", value: "Wogo ivpo." },
                  {
                    type: "tag",
                    tag: "strong",
                    attributes: { contenteditable: "true" },
                    children: [
                      { type: "text", value: "Je di nef divedo vamfuj ju." }
                    ]
                  },
                  {
                    type: "tag",
                    tag: "dfn",
                    attributes: { contenteditable: "false" },
                    children: [
                      {
                        type: "tag",
                        tag: "code",
                        attributes: { hidden: "" },
                        children: [
                          {
                            type: "tag",
                            tag: "script",
                            attributes: { dir: "ltr" },
                            children: []
                          },
                          {
                            type: "text",
                            value: "Emobavli delab efki ij vetil ron."
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "time",
                        attributes: { hidden: "" },
                        children: [
                          {
                            type: "tag",
                            tag: "br",
                            children: [],
                            attributes: { hidden: "" }
                          },
                          { type: "text", value: "Pu oga fe fu ju." },
                          {
                            type: "tag",
                            tag: "template",
                            attributes: { contenteditable: "false" },
                            children: []
                          }
                        ]
                      },
                      { type: "text", value: "Bir dukuwuaz." }
                    ]
                  },
                  { type: "text", value: "Woori nevgaz mam." }
                ]
              },
              { type: "text", value: "Don difulri ki ciz vu fo." },
              {
                type: "tag",
                tag: "area",
                children: [],
                attributes: { tabindex: "-596" }
              }
            ]
          },
          { type: "text", value: "Ajov ukawuwge zon zat." },
          {
            type: "tag",
            tag: "img",
            children: [],
            attributes: { decoding: "sync", src: "9mn8rXUM^Ax#RDY8" }
          }
        ]
      },
      {
        type: "tag",
        tag: "code",
        attributes: { hidden: "" },
        children: [
          {
            type: "tag",
            tag: "progress",
            attributes: { draggable: "false" },
            children: [
              {
                type: "tag",
                tag: "input",
                children: [],
                attributes: { checked: "", type: "password" }
              }
            ]
          },
          {
            type: "tag",
            tag: "slot",
            attributes: { tabindex: "-624" },
            children: []
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
          attributes: { tabindex: "-628" },
          children: [
            { type: "text", value: "Zunudo hos gi pusdudev seama." },
            {
              type: "tag",
              tag: "figcaption",
              attributes: { dir: "rtl" },
              children: [
                {
                  type: "tag",
                  tag: "abbr",
                  attributes: { contenteditable: "false" },
                  children: [
                    {
                      type: "tag",
                      tag: "data",
                      attributes: { dir: "ltr" },
                      children: [
                        {
                          type: "tag",
                          tag: "u",
                          attributes: { hidden: "" },
                          children: [
                            {
                              type: "tag",
                              tag: "audio",
                              attributes: { preload: "auto" },
                              children: []
                            },
                            { type: "text", value: "Hu gav ihhinla gubojmi." },
                            { type: "text", value: "Ojiponig id si bu zi." }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "time",
                          attributes: { hidden: "" },
                          children: [
                            {
                              type: "text",
                              value: "Uzfi cizpe cemet gitanu cesnim."
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "time",
                          attributes: { draggable: "true" },
                          children: [
                            {
                              type: "tag",
                              tag: "small",
                              attributes: { dir: "auto" },
                              children: []
                            },
                            {
                              type: "text",
                              value:
                                "Jetikbud epireha bicanip wahus atuor me cap."
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "q",
                          attributes: { hidden: "" },
                          children: [{ type: "text", value: "Sok itokelen." }]
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "label",
                      attributes: { dir: "auto" },
                      children: [
                        {
                          type: "tag",
                          tag: "small",
                          attributes: { tabindex: "764" },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "kbd",
                          attributes: { tabindex: "487" },
                          children: [
                            {
                              type: "tag",
                              tag: "canvas",
                              attributes: { contenteditable: "true" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "abbr",
                              attributes: { tabindex: "-526" },
                              children: []
                            },
                            {
                              type: "text",
                              value: "Buw anja tiwec fe ishoppan mijpibfu."
                            },
                            {
                              type: "tag",
                              tag: "samp",
                              attributes: { contenteditable: "" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "datalist",
                              attributes: { hidden: "" },
                              children: []
                            }
                          ]
                        },
                        { type: "text", value: "Jijwoh oleowa." }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "picture",
                      attributes: { draggable: "true" },
                      children: [
                        {
                          type: "tag",
                          tag: "source",
                          children: [],
                          attributes: { contenteditable: "true" }
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "output",
                      attributes: { contenteditable: "false" },
                      children: [
                        {
                          type: "tag",
                          tag: "button",
                          attributes: {
                            contenteditable: "true",
                            type: "submit"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "mark",
                              attributes: { draggable: "true" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "output",
                              attributes: { contenteditable: "false" },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "small",
                          attributes: { tabindex: "-5" },
                          children: []
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "bdi",
                      attributes: { dir: "ltr" },
                      children: [
                        {
                          type: "tag",
                          tag: "br",
                          children: [],
                          attributes: { hidden: "" }
                        },
                        {
                          type: "tag",
                          tag: "s",
                          attributes: { hidden: "" },
                          children: [
                            {
                              type: "tag",
                              tag: "script",
                              attributes: { defer: "" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "sup",
                              attributes: { tabindex: "39" },
                              children: []
                            },
                            {
                              type: "text",
                              value: "Ginohdo guukalo elrubon racu kisciam."
                            },
                            {
                              type: "tag",
                              tag: "q",
                              attributes: { hidden: "" },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "cite",
                          attributes: { hidden: "" },
                          children: [
                            {
                              type: "tag",
                              tag: "kbd",
                              attributes: { tabindex: "21" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "data",
                              attributes: { draggable: "true" },
                              children: []
                            },
                            {
                              type: "text",
                              value: "Ubcoma tijuk merohac jejog jaubi mo oz."
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "var",
                          attributes: { hidden: "" },
                          children: [
                            {
                              type: "tag",
                              tag: "ins",
                              attributes: { tabindex: "945" },
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
                  tag: "progress",
                  attributes: { hidden: "" },
                  children: [
                    {
                      type: "tag",
                      tag: "wbr",
                      children: [],
                      attributes: { dir: "ltr" }
                    },
                    { type: "text", value: "Bazuj tuimsum mi." },
                    {
                      type: "tag",
                      tag: "sup",
                      attributes: { draggable: "false" },
                      children: [
                        {
                          type: "tag",
                          tag: "sub",
                          attributes: { contenteditable: "true" },
                          children: [
                            {
                              type: "text",
                              value: "Wahheho piufvu eci pianevin wuavoed."
                            },
                            {
                              type: "text",
                              value: "Kug vapzadizu itdu zubu zigge kun hebit."
                            },
                            {
                              type: "tag",
                              tag: "area",
                              children: [],
                              attributes: { contenteditable: "" }
                            },
                            {
                              type: "tag",
                              tag: "svg",
                              attributes: { hidden: "" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "embed",
                              children: [],
                              attributes: {
                                draggable: "false",
                                src: "DUn&3h6*mY5f(wm05",
                                title: "JzeTfd@#][Y)H3"
                              }
                            }
                          ]
                        },
                        { type: "text", value: "Lacah asva." },
                        { type: "text", value: "Nu difitvef zovaez biowituk." },
                        {
                          type: "tag",
                          tag: "abbr",
                          attributes: { dir: "rtl" },
                          children: [
                            {
                              type: "tag",
                              tag: "embed",
                              children: [],
                              attributes: {
                                hidden: "",
                                src: "JO)lnp#g5l5H!N4bU6",
                                title: "^&)Tn6"
                              }
                            },
                            {
                              type: "tag",
                              tag: "data",
                              attributes: { contenteditable: "" },
                              children: []
                            },
                            { type: "text", value: "Hinhi ti." },
                            { type: "text", value: "Ake facomi wepzuzibo." },
                            {
                              type: "tag",
                              tag: "script",
                              attributes: { integrity: "rh]" },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "object",
                          attributes: { draggable: "true" },
                          children: [
                            {
                              type: "tag",
                              tag: "i",
                              attributes: { draggable: "true" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "a",
                              attributes: { contenteditable: "" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "audio",
                              attributes: { draggable: "true" },
                              children: []
                            }
                          ]
                        }
                      ]
                    },
                    { type: "text", value: "Gorafava dowsucom." },
                    {
                      type: "tag",
                      tag: "mark",
                      attributes: { hidden: "" },
                      children: [
                        {
                          type: "tag",
                          tag: "script",
                          attributes: { crossorigin: "use-credentials" },
                          children: [
                            {
                              type: "tag",
                              tag: "input",
                              children: [],
                              attributes: { multiple: "", type: "checkbox" }
                            },
                            { type: "text", value: "Fiv kuko ako fi veh." },
                            {
                              type: "tag",
                              tag: "button",
                              attributes: { tabindex: "493", type: "submit" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "blockquote",
                              attributes: { hidden: "" },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "span",
                          attributes: { draggable: "true" },
                          children: [
                            {
                              type: "tag",
                              tag: "keygen",
                              children: [],
                              attributes: { tabindex: "727" }
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "sub",
                          attributes: { tabindex: "-629" },
                          children: [
                            {
                              type: "tag",
                              tag: "wbr",
                              children: [],
                              attributes: { hidden: "" }
                            },
                            {
                              type: "text",
                              value: "Inumog jujlotu fomunte pakcik."
                            },
                            {
                              type: "tag",
                              tag: "mark",
                              attributes: { contenteditable: "false" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "kbd",
                              attributes: { draggable: "false" },
                              children: []
                            }
                          ]
                        },
                        { type: "text", value: "Dapku epki fezneic kiko." },
                        {
                          type: "tag",
                          tag: "meter",
                          attributes: { contenteditable: "true" },
                          children: [
                            {
                              type: "tag",
                              tag: "picture",
                              attributes: { dir: "ltr" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "datalist",
                              attributes: { hidden: "" },
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
                  tag: "ruby",
                  attributes: { hidden: "" },
                  children: [
                    {
                      type: "tag",
                      tag: "rp",
                      attributes: { tabindex: "-585" },
                      children: [
                        {
                          type: "text",
                          value: "Ta gu di vaul baztusig perfab fo."
                        },
                        {
                          type: "text",
                          value: "Vaz wo hu hoezuva tueno ot vofvuktic."
                        },
                        { type: "text", value: "Unku uvzanwa mohvitzut et." },
                        { type: "text", value: "Ro ko mirli hijha." },
                        {
                          type: "tag",
                          tag: "data",
                          attributes: { draggable: "false" },
                          children: [
                            {
                              type: "tag",
                              tag: "progress",
                              attributes: { draggable: "false" },
                              children: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "rt",
                      attributes: { tabindex: "519" },
                      children: [
                        { type: "text", value: "Ri nok asoomagib cuzvuca." },
                        {
                          type: "tag",
                          tag: "bdi",
                          attributes: { draggable: "true" },
                          children: [
                            { type: "text", value: "Rekut secwok mud dogom." }
                          ]
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "rtc",
                      attributes: { hidden: "" },
                      children: [
                        {
                          type: "tag",
                          tag: "object",
                          attributes: { dir: "auto" },
                          children: [
                            {
                              type: "tag",
                              tag: "b",
                              attributes: { hidden: "" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "rt",
                              attributes: { contenteditable: "true" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "rt",
                              attributes: { draggable: "false" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "rt",
                              attributes: { hidden: "" },
                              children: []
                            },
                            {
                              type: "text",
                              value: "Meiwo hetjo mordopni feevi dab."
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "h1",
                  attributes: { hidden: "" },
                  children: [
                    { type: "text", value: "Hesal jan mikwobuj dos igoja." }
                  ]
                }
              ]
            }
          ]
        },
        {
          type: "tag",
          tag: "figure",
          attributes: { tabindex: "192" },
          children: [{ type: "text", value: "Nicot ti sor kigo." }]
        },
        {
          type: "tag",
          tag: "figure",
          attributes: { tabindex: "-662" },
          children: [
            {
              type: "tag",
              tag: "img",
              children: [],
              attributes: { src: "Z3om" }
            },
            { type: "text", value: "Nu keutiled fazosi vic." },
            {
              type: "tag",
              tag: "figcaption",
              attributes: { dir: "ltr" },
              children: [
                {
                  type: "tag",
                  tag: "blockquote",
                  attributes: { contenteditable: "" },
                  children: [
                    {
                      type: "tag",
                      tag: "h2",
                      attributes: { contenteditable: "true" },
                      children: [
                        {
                          type: "tag",
                          tag: "math",
                          attributes: { tabindex: "567" },
                          children: [
                            {
                              type: "tag",
                              tag: "time",
                              attributes: { tabindex: "381" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "h1",
                              attributes: { tabindex: "806" },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "input",
                          children: [],
                          attributes: { tabindex: "81", type: "image" }
                        },
                        {
                          type: "tag",
                          tag: "u",
                          attributes: { contenteditable: "" },
                          children: [
                            {
                              type: "tag",
                              tag: "var",
                              attributes: { tabindex: "487" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "q",
                              attributes: { hidden: "" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "object",
                              attributes: { dir: "rtl" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "svg",
                              attributes: { tabindex: "-666" },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "math",
                          attributes: { hidden: "" },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "span",
                          attributes: { contenteditable: "" },
                          children: [
                            {
                              type: "tag",
                              tag: "small",
                              attributes: { tabindex: "0" },
                              children: []
                            },
                            { type: "text", value: "Lajro ga zapjuk fa jec." },
                            {
                              type: "tag",
                              tag: "embed",
                              children: [],
                              attributes: {
                                tabindex: "62",
                                src: "]q8rTqwmUWN",
                                title: "j6$DHWoA"
                              }
                            },
                            {
                              type: "tag",
                              tag: "template",
                              attributes: { draggable: "true" },
                              children: []
                            },
                            { type: "text", value: "Zuhipi his gigebhoz." }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "keygen",
                  children: [],
                  attributes: { tabindex: "-960" }
                },
                { type: "text", value: "Jiniv fi eh tit." },
                { type: "text", value: "Elaz ocvewaka ew it." }
              ]
            }
          ]
        },
        {
          type: "tag",
          tag: "figure",
          attributes: { tabindex: "495" },
          children: [
            {
              type: "tag",
              tag: "del",
              attributes: { draggable: "false" },
              children: [
                { type: "text", value: "Ba wejjuus afemavus ma pu zotuve." },
                {
                  type: "tag",
                  tag: "i",
                  attributes: { contenteditable: "" },
                  children: [
                    {
                      type: "tag",
                      tag: "audio",
                      attributes: { preload: "none" },
                      children: [
                        {
                          type: "text",
                          value: "Fabdu demi tajew giv uho evhumto."
                        },
                        {
                          type: "tag",
                          tag: "br",
                          children: [],
                          attributes: { draggable: "false" }
                        },
                        {
                          type: "tag",
                          tag: "object",
                          attributes: { tabindex: "558" },
                          children: [
                            {
                              type: "tag",
                              tag: "track",
                              children: [],
                              attributes: { dir: "rtl" }
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "math",
                          attributes: { overflow: "scroll" },
                          children: [
                            {
                              type: "tag",
                              tag: "a",
                              attributes: { draggable: "false" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "article",
                              attributes: { dir: "auto" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "embed",
                              children: [],
                              attributes: {
                                tabindex: "744",
                                src: "hPlYg#QV#4Gll",
                                title: "8s21$]uhoD$"
                              }
                            },
                            {
                              type: "tag",
                              tag: "bdi",
                              attributes: { dir: "ltr" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "section",
                              attributes: { hidden: "" },
                              children: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "meter",
                      attributes: { hidden: "" },
                      children: [
                        {
                          type: "tag",
                          tag: "img",
                          children: [],
                          attributes: {
                            tabindex: "524",
                            src: "!c93ao3(4BYy3l!wI"
                          }
                        }
                      ]
                    },
                    { type: "text", value: "Letoifi vi gab lalak pipcan." }
                  ]
                },
                { type: "text", value: "Ranvi jatpofa zowetpik." },
                { type: "text", value: "Ko deci zusjofto garuv." },
                {
                  type: "tag",
                  tag: "figcaption",
                  attributes: { dir: "auto" },
                  children: [
                    {
                      type: "tag",
                      tag: "data",
                      attributes: { hidden: "" },
                      children: []
                    },
                    {
                      type: "tag",
                      tag: "h3",
                      attributes: { tabindex: "273" },
                      children: [
                        { type: "text", value: "Elpunu focwu nosza." },
                        {
                          type: "tag",
                          tag: "audio",
                          attributes: { dir: "rtl" },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "kbd",
                          attributes: { dir: "auto" },
                          children: [
                            {
                              type: "tag",
                              tag: "var",
                              attributes: { dir: "ltr" },
                              children: []
                            },
                            {
                              type: "text",
                              value: "Jes esca bacina kiscu wo divmat."
                            },
                            {
                              type: "text",
                              value: "Touzfo gineonu dawe durim."
                            },
                            {
                              type: "text",
                              value:
                                "Ek corrocnu favuf nunorec dujubale idkos bedvudhez."
                            },
                            { type: "text", value: "Zonra ku lit vi." }
                          ]
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "canvas",
                      attributes: { dir: "rtl" },
                      children: []
                    }
                  ]
                }
              ]
            },
            {
              type: "tag",
              tag: "figcaption",
              attributes: { draggable: "false" },
              children: [
                { type: "text", value: "Lo johtefimi wi koluwfu sege." }
              ]
            }
          ]
        },
        {
          type: "tag",
          tag: "figure",
          attributes: { hidden: "" },
          children: [
            {
              type: "tag",
              tag: "figcaption",
              attributes: { tabindex: "505" },
              children: [
                {
                  type: "tag",
                  tag: "ins",
                  attributes: { hidden: "" },
                  children: []
                },
                { type: "text", value: "Ram awe." },
                {
                  type: "tag",
                  tag: "ol",
                  attributes: { draggable: "false" },
                  children: [
                    {
                      type: "tag",
                      tag: "li",
                      attributes: { draggable: "true" },
                      children: [
                        {
                          type: "tag",
                          tag: "wbr",
                          children: [],
                          attributes: { tabindex: "880" }
                        },
                        {
                          type: "tag",
                          tag: "strong",
                          attributes: { contenteditable: "" },
                          children: [
                            {
                              type: "tag",
                              tag: "b",
                              attributes: { contenteditable: "false" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "datalist",
                              attributes: { draggable: "false" },
                              children: []
                            },
                            { type: "text", value: "Aluhobzo ko va vez." },
                            {
                              type: "tag",
                              tag: "select",
                              attributes: { contenteditable: "" },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "footer",
                          attributes: { dir: "auto" },
                          children: [
                            {
                              type: "text",
                              value:
                                "Zucowtu bifline ramudik mo uha juwzotbuz reprep."
                            },
                            {
                              type: "tag",
                              tag: "datalist",
                              attributes: { draggable: "true" },
                              children: []
                            },
                            {
                              type: "text",
                              value: "Cag bi juceg zib ivu seufore."
                            },
                            {
                              type: "tag",
                              tag: "h6",
                              attributes: { hidden: "" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "u",
                              attributes: { draggable: "false" },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "text",
                          value: "Siphusi diw eta sammahmis kud sunit homdeal."
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "script",
                      attributes: { defer: "" },
                      children: [
                        {
                          type: "tag",
                          tag: "meta",
                          children: [],
                          attributes: { draggable: "false" }
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "template",
                      attributes: { draggable: "true" },
                      children: [
                        {
                          type: "tag",
                          tag: "h1",
                          attributes: { draggable: "false" },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "meta",
                          children: [],
                          attributes: { contenteditable: "" }
                        },
                        {
                          type: "tag",
                          tag: "iframe",
                          attributes: {
                            draggable: "false",
                            title: "IJUoITHuJ"
                          },
                          children: []
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "li",
                      attributes: { draggable: "true" },
                      children: [
                        { type: "text", value: "Jajet tu kum." },
                        {
                          type: "tag",
                          tag: "area",
                          children: [],
                          attributes: { shape: "rect" }
                        },
                        { type: "text", value: "Culogme muwwen juozubup we." },
                        {
                          type: "tag",
                          tag: "img",
                          children: [],
                          attributes: {
                            contenteditable: "",
                            src: "YsiXC7HXBgiSF"
                          }
                        },
                        {
                          type: "tag",
                          tag: "math",
                          attributes: { overflow: "linebreak" },
                          children: [
                            {
                              type: "tag",
                              tag: "iframe",
                              attributes: {
                                draggable: "false",
                                title: "VA$RSaLVk^iTl"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "h5",
                              attributes: { hidden: "" },
                              children: []
                            }
                          ]
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "template",
                      attributes: { tabindex: "66" },
                      children: [
                        {
                          type: "tag",
                          tag: "link",
                          children: [],
                          attributes: { hidden: "", href: "QDd^j7PpzI" }
                        },
                        {
                          type: "tag",
                          tag: "article",
                          attributes: { hidden: "" },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "meter",
                          attributes: { dir: "auto" },
                          children: [
                            {
                              type: "tag",
                              tag: "s",
                              attributes: { draggable: "false" },
                              children: []
                            },
                            {
                              type: "text",
                              value: "Desajsa vipamo is febtep la sevurev uni."
                            },
                            {
                              type: "tag",
                              tag: "svg",
                              attributes: { hidden: "" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "keygen",
                              children: [],
                              attributes: { tabindex: "-228" }
                            },
                            {
                              type: "tag",
                              tag: "img",
                              children: [],
                              attributes: { tabindex: "964", src: "cpc&CElD" }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                { type: "text", value: "Nidudez nusu uceudelu." },
                {
                  type: "tag",
                  tag: "video",
                  attributes: { tabindex: "981" },
                  children: [
                    {
                      type: "tag",
                      tag: "main",
                      attributes: { tabindex: "-356" },
                      children: [
                        {
                          type: "tag",
                          tag: "data",
                          attributes: { tabindex: "558" },
                          children: [
                            {
                              type: "tag",
                              tag: "object",
                              attributes: { hidden: "" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "keygen",
                              children: [],
                              attributes: { dir: "rtl" }
                            }
                          ]
                        },
                        {
                          type: "text",
                          value:
                            "Ihosones buwi fuinori foracvel ozoluci pihpegis."
                        },
                        {
                          type: "tag",
                          tag: "iframe",
                          attributes: {
                            draggable: "false",
                            title: "KAQ1#%[HEG"
                          },
                          children: []
                        },
                        {
                          type: "text",
                          value: "Aziuc bip igkuna tewbol bovrapte kesrubuz."
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "div",
                      attributes: { hidden: "" },
                      children: [
                        {
                          type: "tag",
                          tag: "dd",
                          attributes: { hidden: "" },
                          children: []
                        },
                        { type: "text", value: "Osu zuvtac." },
                        { type: "text", value: "Cekmac ra surbu eho." },
                        {
                          type: "tag",
                          tag: "h1",
                          attributes: { contenteditable: "true" },
                          children: [
                            { type: "text", value: "Muodju si roubgek." },
                            {
                              type: "tag",
                              tag: "area",
                              children: [],
                              attributes: { tabindex: "-188" }
                            },
                            {
                              type: "text",
                              value:
                                "Nintic relhuh ridawwek juap jokagi wewucela."
                            },
                            {
                              type: "tag",
                              tag: "ruby",
                              attributes: { dir: "auto" },
                              children: []
                            },
                            { type: "text", value: "Duj ru." }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "dd",
                          attributes: { dir: "rtl" },
                          children: [
                            {
                              type: "tag",
                              tag: "time",
                              attributes: { hidden: "" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "template",
                              attributes: { draggable: "true" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "th",
                              attributes: { rowspan: "704", scope: "row" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "bdi",
                              attributes: { dir: "auto" },
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
              tag: "i",
              attributes: { contenteditable: "false" },
              children: [
                {
                  type: "text",
                  value: "Ohenotub pu ekide zecu mimurlo wugorsah opwo."
                }
              ]
            },
            {
              type: "tag",
              tag: "var",
              attributes: { tabindex: "52" },
              children: [
                {
                  type: "tag",
                  tag: "cite",
                  attributes: { contenteditable: "false" },
                  children: [
                    { type: "text", value: "Ebdukpo rujas ubivo ze." },
                    {
                      type: "tag",
                      tag: "s",
                      attributes: { dir: "rtl" },
                      children: []
                    },
                    {
                      type: "text",
                      value: "Sazelaf be zo losa vouvu ruanone juwe."
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "b",
                  attributes: { dir: "rtl" },
                  children: [
                    {
                      type: "tag",
                      tag: "audio",
                      attributes: { preload: "auto" },
                      children: [
                        {
                          type: "tag",
                          tag: "meter",
                          attributes: { contenteditable: "true" },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "meter",
                          attributes: { hidden: "" },
                          children: [
                            {
                              type: "tag",
                              tag: "output",
                              attributes: { tabindex: "-948" },
                              children: []
                            },
                            { type: "text", value: "Ruwova ponamu zej." },
                            {
                              type: "tag",
                              tag: "math",
                              attributes: { overflow: "truncate" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "input",
                              children: [],
                              attributes: { inputmode: "decimal", type: "url" }
                            },
                            {
                              type: "tag",
                              tag: "q",
                              attributes: { hidden: "" },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "noscript",
                          attributes: { draggable: "true" },
                          children: [
                            {
                              type: "tag",
                              tag: "track",
                              children: [],
                              attributes: { dir: "auto" }
                            },
                            {
                              type: "tag",
                              tag: "cite",
                              attributes: { hidden: "" },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "img",
                          children: [],
                          attributes: { src: "N@CrW)ioV(K]E0([MQqt" }
                        },
                        { type: "text", value: "Gafbubet lurmizuse nor ho." }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "audio",
                      attributes: { hidden: "" },
                      children: [
                        {
                          type: "tag",
                          tag: "noscript",
                          attributes: { dir: "rtl" },
                          children: [
                            {
                              type: "tag",
                              tag: "source",
                              children: [],
                              attributes: { draggable: "true" }
                            },
                            {
                              type: "tag",
                              tag: "track",
                              children: [],
                              attributes: { draggable: "true" }
                            },
                            {
                              type: "text",
                              value:
                                "Dufe ozipolo zacuk louge liphuf ucaefoha fujezso."
                            },
                            {
                              type: "tag",
                              tag: "ol",
                              attributes: { hidden: "" },
                              children: []
                            },
                            { type: "text", value: "Zufe izumis nulgenge ebe." }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "sup",
                          attributes: { contenteditable: "true" },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "a",
                          attributes: { tabindex: "507" },
                          children: [
                            {
                              type: "tag",
                              tag: "source",
                              children: [],
                              attributes: { hidden: "" }
                            },
                            {
                              type: "tag",
                              tag: "span",
                              attributes: { hidden: "" },
                              children: []
                            }
                          ]
                        },
                        { type: "text", value: "Puraji mazibmam wuhe ji bas." }
                      ]
                    }
                  ]
                },
                { type: "text", value: "Hotokzin kur jad." },
                {
                  type: "tag",
                  tag: "audio",
                  attributes: { draggable: "false" },
                  children: [
                    {
                      type: "tag",
                      tag: "wbr",
                      children: [],
                      attributes: { hidden: "" }
                    },
                    {
                      type: "tag",
                      tag: "slot",
                      attributes: { contenteditable: "" },
                      children: [
                        {
                          type: "tag",
                          tag: "track",
                          children: [],
                          attributes: { hidden: "" }
                        },
                        {
                          type: "tag",
                          tag: "track",
                          children: [],
                          attributes: { hidden: "" }
                        },
                        {
                          type: "tag",
                          tag: "object",
                          attributes: { contenteditable: "false" },
                          children: [
                            {
                              type: "tag",
                              tag: "cite",
                              attributes: { contenteditable: "false" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "h6",
                              attributes: { contenteditable: "true" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "noscript",
                              attributes: { contenteditable: "false" },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "em",
                          attributes: { tabindex: "344" },
                          children: []
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "output",
                      attributes: { contenteditable: "" },
                      children: []
                    },
                    {
                      type: "tag",
                      tag: "input",
                      children: [],
                      attributes: { hidden: "", type: "hidden" }
                    },
                    {
                      type: "tag",
                      tag: "meter",
                      attributes: { tabindex: "-857" },
                      children: [
                        {
                          type: "tag",
                          tag: "ruby",
                          attributes: { hidden: "" },
                          children: [
                            {
                              type: "tag",
                              tag: "rt",
                              attributes: { contenteditable: "" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "rtc",
                              attributes: { contenteditable: "" },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "u",
                          attributes: { hidden: "" },
                          children: [
                            {
                              type: "tag",
                              tag: "bdo",
                              attributes: { draggable: "true" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "samp",
                              attributes: { tabindex: "-179" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "samp",
                              attributes: { draggable: "false" },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "var",
                              attributes: { contenteditable: "false" },
                              children: []
                            },
                            {
                              type: "text",
                              value: "Koh ari heonuuwo va ra ka."
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "embed",
                          children: [],
                          attributes: {
                            draggable: "false",
                            src: "F2#DSfs5AvgGyYYyfep",
                            title: "[V6X2Uio"
                          }
                        },
                        {
                          type: "tag",
                          tag: "canvas",
                          attributes: { hidden: "" },
                          children: [
                            {
                              type: "text",
                              value: "Ni dudukwar gemag pijoh vudsaf oce wita."
                            },
                            {
                              type: "text",
                              value: "Tauje norsem sa odnaofo bestojcip."
                            },
                            { type: "text", value: "Ogioz wu." },
                            {
                              type: "tag",
                              tag: "textarea",
                              attributes: { hidden: "" },
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
