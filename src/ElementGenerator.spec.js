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
                            children: [],
                            attributes: { src: "http://lagjuhera.pe/reakhup" }
                          },
                          {
                            type: "tag",
                            tag: "b",
                            attributes: {
                              contenteditable: "false",
                              draggable: "true",
                              tabindex: "71",
                              dir: "rtl"
                            },
                            children: []
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "cite",
                        attributes: {
                          tabindex: "-438",
                          dir: "auto",
                          contenteditable: "",
                          draggable: "true"
                        },
                        children: []
                      },
                      {
                        type: "text",
                        value: "Enbebah demzef navgiro waumo ak."
                      }
                    ]
                  },
                  {
                    type: "tag",
                    tag: "area",
                    children: [],
                    attributes: { draggable: "true" }
                  }
                ]
              },
              { type: "tag", tag: "samp", attributes: {}, children: [] },
              {
                type: "tag",
                tag: "audio",
                attributes: { preload: "" },
                children: [
                  {
                    type: "tag",
                    tag: "ins",
                    attributes: {
                      contenteditable: "",
                      dir: "auto",
                      tabindex: "-660",
                      draggable: "true"
                    },
                    children: [
                      {
                        type: "tag",
                        tag: "source",
                        children: [],
                        attributes: {
                          dir: "rtl",
                          contenteditable: "",
                          style: "border-block-end-style: none;"
                        }
                      },
                      {
                        type: "tag",
                        tag: "track",
                        children: [],
                        attributes: { tabindex: "704" }
                      },
                      {
                        type: "tag",
                        tag: "track",
                        children: [],
                        attributes: {
                          style:
                            "inset-inline-end: auto; inline-size: min-content; border-inline-end-style: solid; grid-column-end: 23% cejtu;"
                        }
                      },
                      {
                        type: "tag",
                        tag: "track",
                        children: [],
                        attributes: { draggable: "true", hidden: null }
                      },
                      {
                        type: "tag",
                        tag: "track",
                        children: [],
                        attributes: {}
                      }
                    ]
                  },
                  { type: "text", value: "Enotilip am tettufja la to." }
                ]
              },
              { type: "text", value: "Kev kujivo ovamuz gis." },
              { type: "text", value: "Usilesev egizosde pitkedeb iva uzoli." }
            ]
          },
          {
            type: "tag",
            tag: "select",
            attributes: { disabled: null, contenteditable: "false" },
            children: [
              {
                type: "tag",
                tag: "template",
                attributes: {
                  draggable: "true",
                  hidden: null,
                  contenteditable: "true",
                  dir: "auto"
                },
                children: [
                  {
                    type: "tag",
                    tag: "h5",
                    attributes: {
                      hidden: null,
                      tabindex: "-701",
                      contenteditable: "",
                      dir: "rtl"
                    },
                    children: [
                      {
                        type: "text",
                        value: "Sojwaze mewdi bisa zatossez neem ut una."
                      },
                      {
                        type: "tag",
                        tag: "b",
                        attributes: { tabindex: "-528" },
                        children: [
                          { type: "text", value: "Wijwawuz mic jati hice." },
                          {
                            type: "tag",
                            tag: "video",
                            attributes: {
                              dir: "ltr",
                              tabindex: "-411",
                              preload: "metadata",
                              draggable: "false",
                              contenteditable: "",
                              style: "text-indent: 42% hanging each-line;"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "canvas",
                            attributes: {
                              draggable: "false",
                              contenteditable: "",
                              tabindex: "-26",
                              dir: "rtl"
                            },
                            children: []
                          },
                          { type: "text", value: "Fenlezenu bi ba vum." },
                          {
                            type: "text",
                            value: "Omiwusleg dejof vop ja pil pevrunit fibzo."
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "object",
                        attributes: {
                          hidden: null,
                          data: "[zSRVDPGg%1zO",
                          tabindex: "-784"
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "svg",
                            attributes: {
                              tabindex: "492",
                              hidden: null,
                              contenteditable: "",
                              style:
                                "background: fixed repeat-x left bottom none border-box padding-box center 47% / contain ButtonFace; mask-size: 643.5813em; flex-direction: row-reverse;"
                            },
                            children: []
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "img",
                        children: [],
                        attributes: { src: "O" }
                      },
                      {
                        type: "tag",
                        tag: "datalist",
                        attributes: { dir: "rtl", contenteditable: "" },
                        children: [
                          {
                            type: "text",
                            value: "Vamfuj ju ziuflul zem zabha iviracnem."
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: "tag",
                    tag: "video",
                    attributes: { dir: "ltr", contenteditable: "true" },
                    children: [
                      { type: "text", value: "Picronzik lelu sejuh hacfe." },
                      {
                        type: "tag",
                        tag: "h4",
                        attributes: { draggable: "true" },
                        children: [
                          {
                            type: "text",
                            value: "Iv ra uzamiz buzpavuw rilesgu mam."
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "embed",
                        children: [],
                        attributes: {
                          dir: "ltr",
                          draggable: "true",
                          src: "l&JxNRdByHjO",
                          title: "oxY7gskYa4i"
                        }
                      },
                      {
                        type: "tag",
                        tag: "meta",
                        children: [],
                        attributes: { hidden: null, dir: "auto" }
                      },
                      {
                        type: "tag",
                        tag: "ruby",
                        attributes: {
                          hidden: null,
                          tabindex: "991",
                          dir: "ltr",
                          contenteditable: ""
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
                      draggable: "false",
                      dir: "ltr",
                      contenteditable: "false"
                    },
                    children: [
                      {
                        type: "tag",
                        tag: "canvas",
                        attributes: {
                          dir: "auto",
                          tabindex: "452",
                          draggable: "false",
                          hidden: null
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "figure",
                            attributes: {},
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "i",
                            attributes: {
                              draggable: "false",
                              contenteditable: "false",
                              dir: "rtl"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "dfn",
                            attributes: {},
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "h5",
                            attributes: {
                              draggable: "false",
                              tabindex: "151",
                              hidden: null
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "map",
                            attributes: { hidden: null },
                            children: []
                          }
                        ]
                      },
                      { type: "text", value: "Wol katdevdo." },
                      {
                        type: "tag",
                        tag: "dfn",
                        attributes: { draggable: "false" },
                        children: []
                      },
                      {
                        type: "tag",
                        tag: "label",
                        attributes: { dir: "ltr", tabindex: "599" },
                        children: [
                          { type: "text", value: "Miju inpa bosuc wowwo." },
                          {
                            type: "tag",
                            tag: "sub",
                            attributes: {},
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "time",
                            attributes: {
                              hidden: null,
                              style:
                                "border: thick outset hsla(-4757494052159488 99% 16% / -6761476060610560); scroll-padding-inline-start: 739.7928in; list-style: outside;"
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
                tag: "template",
                attributes: { contenteditable: "false" },
                children: [
                  {
                    type: "tag",
                    tag: "nav",
                    attributes: {},
                    children: [
                      {
                        type: "tag",
                        tag: "h6",
                        attributes: {
                          dir: "auto",
                          tabindex: "-587",
                          hidden: null,
                          contenteditable: ""
                        },
                        children: [
                          {
                            type: "text",
                            value: "Go uzfi cizpe cemet gitanu."
                          },
                          {
                            type: "tag",
                            tag: "mark",
                            attributes: {
                              draggable: "true",
                              contenteditable: "true"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "abbr",
                            attributes: {
                              draggable: "true",
                              dir: "ltr",
                              style:
                                "shape-image-threshold: 8036501640183808; place-content: baseline;"
                            },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "iframe",
                            attributes: {
                              hidden: null,
                              draggable: "false",
                              src: "WEcOqsroXLbShz7",
                              title: "WPr",
                              style:
                                "bottom: auto; padding-inline-end: 86%; scroll-margin-inline-start: 660.4398vw; font-variant-alternates: stylistic(cof) historical-forms styleset(dasokiwu) ornaments(kelen) annotation(ep); flex-direction: row-reverse;"
                            },
                            children: [
                              {
                                type: "text",
                                value: "Ehoz favpuwaf bizi meftuud fogbuw."
                              }
                            ]
                          },
                          {
                            type: "tag",
                            tag: "dfn",
                            attributes: { contenteditable: "", hidden: null },
                            children: []
                          }
                        ]
                      },
                      {
                        type: "tag",
                        tag: "th",
                        attributes: {
                          hidden: null,
                          colspan: "263",
                          tabindex: "-874",
                          scope: "rowgroup"
                        },
                        children: [
                          {
                            type: "tag",
                            tag: "mark",
                            attributes: { hidden: null },
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "time",
                            attributes: {},
                            children: []
                          },
                          {
                            type: "tag",
                            tag: "img",
                            children: [],
                            attributes: {
                              decoding: "auto",
                              dir: "ltr",
                              contenteditable: "true",
                              src: "11vTP(JD"
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
                tag: "option",
                attributes: {
                  contenteditable: "",
                  tabindex: "-595",
                  draggable: "true",
                  selected: null,
                  hidden: null
                },
                children: [
                  {
                    type: "text",
                    value: "Konaj wi vikha abugadeh oza vimciiso zostuz."
                  }
                ]
              },
              {
                type: "tag",
                tag: "option",
                attributes: { selected: null },
                children: [{ type: "text", value: "Curcooza nuhdo guukalo." }]
              }
            ]
          }
        ]
      },
      {
        type: "tag",
        tag: "code",
        attributes: {
          contenteditable: "false",
          hidden: null,
          dir: "rtl",
          tabindex: "-650"
        },
        children: [{ type: "text", value: "Wij manam vespuk hibiz." }]
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
                              children: [],
                              attributes: {
                                defer: null,
                                style:
                                  "background-repeat: repeat-x; caption-side: bottom; background: fixed center center / contain local;",
                                src: "http://seufore.su/bijutsip"
                              }
                            },
                            {
                              type: "tag",
                              tag: "tr",
                              attributes: {},
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "tfoot",
                              attributes: {
                                draggable: "true",
                                style:
                                  "border-block-end-color: #e8dd4d; animation-name: 'ona', 'kuno', none, naopiaro; border-top-style: groove; line-break: auto;"
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
                          tag: "slot",
                          attributes: {
                            contenteditable: "",
                            tabindex: "-665",
                            dir: "auto",
                            draggable: "true"
                          },
                          children: [
                            {
                              type: "text",
                              value:
                                "Malomop lunbipod iftas cumfubmih cicu rej."
                            },
                            {
                              type: "tag",
                              tag: "noscript",
                              attributes: { hidden: null, tabindex: "-693" },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "dl",
                          attributes: {
                            contenteditable: "false",
                            dir: "rtl",
                            hidden: null
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "script",
                              children: [
                                { type: "text", value: 'console.log("hello")' }
                              ],
                              attributes: { nomodule: null, tabindex: "-371" }
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "audio",
                          attributes: {
                            draggable: "true",
                            hidden: null,
                            preload: "none",
                            dir: "rtl",
                            style: "text-decoration-skip-ink: none;"
                          },
                          children: [
                            {
                              type: "text",
                              value: "Tala sevurev uni faz burud."
                            },
                            { type: "text", value: "Ga mabefil iv oj." }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "pre",
                  attributes: { draggable: "false" },
                  children: [
                    { type: "tag", tag: "meter", attributes: {}, children: [] },
                    { type: "text", value: "Zifimras eke hof pe." },
                    {
                      type: "tag",
                      tag: "var",
                      attributes: {
                        dir: "rtl",
                        contenteditable: "true",
                        draggable: "true"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "keygen",
                          children: [],
                          attributes: { hidden: null, tabindex: "326" }
                        },
                        {
                          type: "tag",
                          tag: "strong",
                          attributes: {
                            draggable: "true",
                            contenteditable: "false",
                            tabindex: "-711"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "output",
                              attributes: {
                                draggable: "false",
                                tabindex: "-130",
                                dir: "auto",
                                hidden: null
                              },
                              children: []
                            }
                          ]
                        },
                        { type: "text", value: "Jivozol dispih." }
                      ]
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "label",
                  attributes: { draggable: "true" },
                  children: [
                    {
                      type: "tag",
                      tag: "kbd",
                      attributes: { hidden: null },
                      children: [
                        {
                          type: "tag",
                          tag: "output",
                          attributes: {
                            tabindex: "-854",
                            dir: "rtl",
                            contenteditable: "true",
                            hidden: null
                          },
                          children: [{ type: "text", value: "Hib tewbol." }]
                        },
                        {
                          type: "tag",
                          tag: "textarea",
                          attributes: {
                            readonly: null,
                            contenteditable: "",
                            minlength: "529",
                            wrap: "soft",
                            disabled: null,
                            style:
                              "z-index: auto; overflow-block: auto; scroll-padding-block-start: auto; column-rule-color: rgb(4% / 6019413945876480); object-position: left 94% bottom 66%;"
                          },
                          children: [
                            {
                              type: "text",
                              value: "Wocmicek balitu wabdiv cam holfamoh eh."
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "ins",
                          attributes: { tabindex: "-907", dir: "ltr" },
                          children: [
                            {
                              type: "text",
                              value:
                                "Gek davpul apito noah ridawwek juap jokagi."
                            },
                            {
                              type: "tag",
                              tag: "code",
                              attributes: {
                                contenteditable: "false",
                                draggable: "true",
                                tabindex: "840",
                                style:
                                  "box-decoration-break: clone; page-break-inside: auto;"
                              },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "picture",
                          attributes: {
                            contenteditable: "true",
                            hidden: null,
                            dir: "auto",
                            tabindex: "313"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "template",
                              attributes: {
                                tabindex: "-494",
                                draggable: "true",
                                contenteditable: "false",
                                hidden: null
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "template",
                              attributes: {
                                hidden: null,
                                contenteditable: "false",
                                tabindex: "667"
                              },
                              children: []
                            },
                            {
                              type: "tag",
                              tag: "img",
                              children: [],
                              attributes: {
                                dir: "auto",
                                ismap: null,
                                tabindex: "644",
                                src: "A"
                              }
                            },
                            {
                              type: "tag",
                              tag: "img",
                              children: [],
                              attributes: { tabindex: "433", src: "pUB5Bad@4n" }
                            },
                            {
                              type: "tag",
                              tag: "template",
                              attributes: {
                                draggable: "false",
                                hidden: null,
                                tabindex: "472",
                                contenteditable: "false"
                              },
                              children: []
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "object",
                          attributes: {
                            tabindex: "-931",
                            hidden: null,
                            draggable: "true",
                            contenteditable: "false"
                          },
                          children: [
                            {
                              type: "tag",
                              tag: "area",
                              children: [],
                              attributes: { tabindex: "-287", hidden: null }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                { type: "text", value: "Dom dubej ebdukpo rujas ubivo ze." }
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
