const { HtmlValidate } = require("html-validate");
const htmlValidator = new HtmlValidate();

const expect = require("unexpected")
  .clone()
  .use(require("unexpected-snapshot"))
  .use(require("unexpected-check"))
  .addAssertion("<string> to be valid html", (expect, html) => {
    expect.errorMode = "bubble";
    const validationResult = htmlValidator.validateString(html);
    if (!validationResult.valid) {
      const messages = validationResult.results.map(({ messages }) => messages);
      expect.fail("Invalid: {0}", messages);
    }
  });

const chanceCache = require("chance-generators/lib/chanceCache");

const { html, htmlString } = require("./index");

describe("html", () => {
  beforeEach(() => {
    chanceCache.clear();
  });

  it("generates random HTML trees", () => {
    expect(html.first(), "to equal snapshot", {
      type: "tag",
      tag: "html",
      attributes: { hidden: null, lang: "25SSlGlheH#ySk0Wbe)" },
      children: [
        {
          type: "tag",
          tag: "head",
          attributes: {},
          children: [
            {
              type: "tag",
              tag: "title",
              attributes: {
                dir: "ltr",
                draggable: "true",
                tabindex: "612",
                style: "clip: auto;"
              },
              children: [{ type: "text", value: "Apli navvalbu rujbave." }]
            }
          ]
        },
        {
          type: "tag",
          tag: "body",
          attributes: {
            hidden: null,
            contenteditable: "",
            style:
              "font-kerning: auto; border-inline-end-style: groove; right: -149.6883pt; border-left-style: double; margin-block-end: -937.3735vw;"
          },
          children: [
            {
              type: "tag",
              tag: "blockquote",
              attributes: { contenteditable: "false", draggable: "true" },
              children: [
                {
                  type: "tag",
                  tag: "meter",
                  attributes: { tabindex: "-607" },
                  children: []
                }
              ]
            },
            {
              type: "tag",
              tag: "noscript",
              attributes: { tabindex: "-74" },
              children: [
                {
                  type: "tag",
                  tag: "aside",
                  attributes: {
                    style:
                      "border-inline-start-width: medium; padding-left: 79%; scrollbar-width: thin; background-size: contain; flex: auto;"
                  },
                  children: [
                    {
                      type: "tag",
                      tag: "b",
                      attributes: {
                        draggable: "true",
                        tabindex: "-119",
                        contenteditable: "false"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "data",
                          attributes: {
                            style:
                              "border-block-start-color: rgba(90% / 48%); column-rule-color: #8231b0; padding-block-end: 14%;"
                          },
                          children: []
                        },
                        {
                          type: "text",
                          value: "Zegcih iwahoil giimeduj deg bueh."
                        },
                        { type: "text", value: "Ril dej." },
                        {
                          type: "tag",
                          tag: "kbd",
                          attributes: { tabindex: "-323" },
                          children: []
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "figure",
                      attributes: {
                        draggable: "false",
                        dir: "ltr",
                        contenteditable: ""
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "figcaption",
                          attributes: {},
                          children: []
                        },
                        {
                          type: "text",
                          value: "Caku vapiz soze wu tumit ede waser."
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "picture",
                      attributes: { contenteditable: "false" },
                      children: [
                        {
                          type: "tag",
                          tag: "source",
                          children: [],
                          attributes: { dir: "rtl" }
                        },
                        {
                          type: "tag",
                          tag: "source",
                          children: [],
                          attributes: {
                            contenteditable: "",
                            draggable: "false",
                            dir: "rtl",
                            hidden: null
                          }
                        },
                        {
                          type: "tag",
                          tag: "script",
                          attributes: {
                            draggable: "false",
                            src: "%P",
                            async: null,
                            dir: "auto",
                            integrity: "zuzZ1!%@$D5$V",
                            crossorigin: "",
                            nomodule: null
                          },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "img",
                          children: [],
                          attributes: {
                            src: "vlwOJZHW]qn0brKyn3BW",
                            crossorigin: "use-credentials",
                            tabindex: "658",
                            hidden: null,
                            contenteditable: "true",
                            dir: "rtl",
                            decoding: "sync"
                          }
                        }
                      ]
                    }
                  ]
                },
                { type: "text", value: "Heuze ipilip pufwi bop." }
              ]
            },
            {
              type: "tag",
              tag: "title",
              attributes: {
                style:
                  "transform-origin: bottom; break-inside: avoid-region; text-decoration-line: underline line-through overline; font-variant-ligatures: none; unicode-bidi: bidi-override;"
              },
              children: [
                {
                  type: "text",
                  value: "Jeguki re wundevuj pe zuforre mug ocipogoc."
                }
              ]
            },
            {
              type: "tag",
              tag: "time",
              attributes: { dir: "rtl", hidden: null, contenteditable: "" },
              children: [
                {
                  type: "tag",
                  tag: "object",
                  attributes: { data: "c8wANj", dir: "rtl", hidden: null },
                  children: [
                    {
                      type: "text",
                      value: "Fodumobo miceb cuk maffigra vutuwom."
                    },
                    {
                      type: "tag",
                      tag: "label",
                      attributes: { hidden: null, draggable: "false" },
                      children: []
                    },
                    {
                      type: "tag",
                      tag: "area",
                      children: [],
                      attributes: {
                        contenteditable: "",
                        shape: "rect",
                        dir: "ltr",
                        tabindex: "980",
                        style:
                          "animation: running; scroll-margin-top: -53.0565mm; border-inline-style: solid;"
                      }
                    },
                    {
                      type: "tag",
                      tag: "ins",
                      attributes: { hidden: null, dir: "rtl" },
                      children: []
                    }
                  ]
                },
                { type: "text", value: "Tupum foctub tutvendit." },
                {
                  type: "tag",
                  tag: "button",
                  attributes: {
                    disabled: null,
                    type: "submit",
                    hidden: null,
                    dir: "ltr"
                  },
                  children: []
                }
              ]
            },
            {
              type: "tag",
              tag: "h1",
              attributes: {
                contenteditable: "true",
                style: "border-block-end: floralwhite thin;"
              },
              children: [
                { type: "text", value: "Azrazi usilesev." },
                {
                  type: "tag",
                  tag: "del",
                  attributes: {
                    draggable: "false",
                    hidden: null,
                    contenteditable: "false",
                    tabindex: "238"
                  },
                  children: [
                    {
                      type: "tag",
                      tag: "mark",
                      attributes: {
                        contenteditable: "false",
                        dir: "auto",
                        tabindex: "-574",
                        hidden: null
                      },
                      children: []
                    },
                    {
                      type: "tag",
                      tag: "embed",
                      children: [],
                      attributes: {
                        contenteditable: "",
                        dir: "auto",
                        src: "56ig&K[e]OeG2$Oz0i)",
                        title: "9T#h!gFZqfD8%0",
                        style:
                          "border-block-color: rgba(1464668166029312 , 6541722049839104); flex-grow: 6851956031094784; scroll-padding-block: auto;"
                      }
                    },
                    {
                      type: "tag",
                      tag: "bdi",
                      attributes: {
                        tabindex: "-708",
                        hidden: null,
                        dir: "rtl",
                        draggable: "false"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "datalist",
                          attributes: {},
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "bdo",
                          attributes: {
                            contenteditable: "false",
                            draggable: "false"
                          },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "datalist",
                          attributes: {
                            draggable: "true",
                            contenteditable: "",
                            tabindex: "-869"
                          },
                          children: []
                        }
                      ]
                    },
                    {
                      type: "text",
                      value: "Uzbewru cemucite nuwijwaw ocu doja nej jaj."
                    },
                    {
                      type: "tag",
                      tag: "textarea",
                      attributes: {
                        tabindex: "-823",
                        spellcheck: "false",
                        autofocus: null,
                        maxlength: "417",
                        contenteditable: "true",
                        autocomplete: "off",
                        draggable: "false",
                        required: null,
                        hidden: null,
                        minlength: "418",
                        cols: "933",
                        rows: "866",
                        dir: "ltr",
                        readonly: null,
                        disabled: null,
                        style: "font-style: italic;"
                      },
                      children: [
                        {
                          type: "text",
                          value: "Udezek enunafe cu rusomiwus hegaog huzob."
                        }
                      ]
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "bdo",
                  attributes: {
                    dir: "ltr",
                    style:
                      "image-orientation: -47.5786turn; scroll-padding-inline-end: 704.363vmax; list-style: outside 'pazo' none; min-width: min-content;"
                  },
                  children: [
                    {
                      type: "tag",
                      tag: "br",
                      children: [],
                      attributes: {
                        draggable: "false",
                        contenteditable: "true"
                      }
                    },
                    { type: "text", value: "Joerufiw zenatij ti ci di fo." },
                    {
                      type: "tag",
                      tag: "picture",
                      attributes: {
                        contenteditable: "false",
                        tabindex: "474",
                        draggable: "false"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "script",
                          attributes: {
                            draggable: "true",
                            contenteditable: "true"
                          },
                          children: []
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "input",
                      children: [],
                      attributes: {
                        spellcheck: "true",
                        autofocus: null,
                        dir: "ltr",
                        type: "url"
                      }
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "iframe",
                  attributes: { title: "" },
                  children: [
                    {
                      type: "text",
                      value: "Uflul zem zabha iviracnem delab efki."
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
                      tag: "h4",
                      attributes: { hidden: null, draggable: "true" },
                      children: []
                    },
                    {
                      type: "tag",
                      tag: "label",
                      attributes: { dir: "rtl" },
                      children: [
                        {
                          type: "tag",
                          tag: "object",
                          attributes: { contenteditable: "true" },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "mark",
                          attributes: {},
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "picture",
                          attributes: {},
                          children: []
                        },
                        { type: "text", value: "Eca moudu uwuaz." },
                        { type: "text", value: "Woori nevgaz mam." }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "h5",
                      attributes: {
                        dir: "auto",
                        draggable: "true",
                        contenteditable: ""
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "map",
                          attributes: {
                            contenteditable: "",
                            draggable: "true"
                          },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "output",
                          attributes: {},
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "i",
                          attributes: {
                            contenteditable: "true",
                            hidden: null,
                            tabindex: "412"
                          },
                          children: []
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "map",
                      attributes: {
                        tabindex: "-933",
                        hidden: null,
                        draggable: "false",
                        dir: "auto"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "h1",
                          attributes: {
                            hidden: null,
                            draggable: "false",
                            dir: "ltr",
                            contenteditable: "false"
                          },
                          children: []
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "math",
                      attributes: { display: "block" },
                      children: []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    });
  });
});

describe("htmlString", () => {
  beforeEach(() => {
    chanceCache.clear();
  });

  it("generates random HTML strings", () => {
    expect(htmlString.take(5), "to equal snapshot", [
      '<html hidden lang="25SSlGlheH#ySk0Wbe)"><head><title dir="ltr" draggable="true" tabindex="612" style="clip: auto;">Apli navvalbu rujbave.</title></head><body hidden contenteditable="" style="font-kerning: auto; border-inline-end-style: groove; right: -149.6883pt; border-left-style: double; margin-block-end: -937.3735vw;"><blockquote contenteditable="false" draggable="true"><meter tabindex="-607"></meter></blockquote><noscript tabindex="-74"><aside style="border-inline-start-width: medium; padding-left: 79%; scrollbar-width: thin; background-size: contain; flex: auto;"><b draggable="true" tabindex="-119" contenteditable="false"><data style="border-block-start-color: rgba(90% / 48%); column-rule-color: #8231b0; padding-block-end: 14%;"></data>Zegcih iwahoil giimeduj deg bueh.Ril dej.<kbd tabindex="-323"></kbd></b><figure draggable="false" dir="ltr" contenteditable=""><figcaption></figcaption>Caku vapiz soze wu tumit ede waser.</figure><picture contenteditable="false"><source dir="rtl"></source><source contenteditable="" draggable="false" dir="rtl" hidden></source><script draggable="false" src="%P" async dir="auto" integrity="zuzZ1!%@$D5$V" crossorigin="" nomodule></script><img src="vlwOJZHW]qn0brKyn3BW" crossorigin="use-credentials" tabindex="658" hidden contenteditable="true" dir="rtl" decoding="sync"></img></picture></aside>Heuze ipilip pufwi bop.</noscript><title style="transform-origin: bottom; break-inside: avoid-region; text-decoration-line: underline line-through overline; font-variant-ligatures: none; unicode-bidi: bidi-override;">Jeguki re wundevuj pe zuforre mug ocipogoc.</title><time dir="rtl" hidden contenteditable=""><object data="c8wANj" dir="rtl" hidden>Fodumobo miceb cuk maffigra vutuwom.<label hidden draggable="false"></label><area contenteditable="" shape="rect" dir="ltr" tabindex="980" style="animation: running; scroll-margin-top: -53.0565mm; border-inline-style: solid;"></area><ins hidden dir="rtl"></ins></object>Tupum foctub tutvendit.<button disabled type="submit" hidden dir="ltr"></button></time><h1 contenteditable="true" style="border-block-end: floralwhite thin;">Azrazi usilesev.<del draggable="false" hidden contenteditable="false" tabindex="238"><mark contenteditable="false" dir="auto" tabindex="-574" hidden></mark><embed contenteditable="" dir="auto" src="56ig&amp;K[e]OeG2$Oz0i)" title="9T#h!gFZqfD8%0" style="border-block-color: rgba(1464668166029312 , 6541722049839104); flex-grow: 6851956031094784; scroll-padding-block: auto;"></embed><bdi tabindex="-708" hidden dir="rtl" draggable="false"><datalist></datalist><bdo contenteditable="false" draggable="false"></bdo><datalist draggable="true" contenteditable="" tabindex="-869"></datalist></bdi>Uzbewru cemucite nuwijwaw ocu doja nej jaj.<textarea tabindex="-823" spellcheck="false" autofocus maxlength="417" contenteditable="true" autocomplete="off" draggable="false" required hidden minlength="418" cols="933" rows="866" dir="ltr" readonly disabled style="font-style: italic;">Udezek enunafe cu rusomiwus hegaog huzob.</textarea></del><bdo dir="ltr" style="image-orientation: -47.5786turn; scroll-padding-inline-end: 704.363vmax; list-style: outside \'pazo\' none; min-width: min-content;"><br draggable="false" contenteditable="true"></br>Joerufiw zenatij ti ci di fo.<picture contenteditable="false" tabindex="474" draggable="false"><script draggable="true" contenteditable="true"></script></picture><input spellcheck="true" autofocus dir="ltr" type="url"></input></bdo><iframe title="">Uflul zem zabha iviracnem delab efki.</iframe><template><h4 hidden draggable="true"></h4><label dir="rtl"><object contenteditable="true"></object><mark></mark><picture></picture>Eca moudu uwuaz.Woori nevgaz mam.</label><h5 dir="auto" draggable="true" contenteditable=""><map contenteditable="" draggable="true"></map><output></output><i contenteditable="true" hidden tabindex="412"></i></h5><map tabindex="-933" hidden draggable="false" dir="auto"><h1 hidden draggable="false" dir="ltr" contenteditable="false"></h1></map><math display="block"></math></template></h1></body></html>',
      '<html lang="XUM^Ax#RDY8HG0B%I"><head draggable="true" contenteditable="true"><title dir="auto" draggable="true" tabindex="731" contenteditable="false" style="scroll-margin-inline: 757.2583Q;">Sozzehos gi pusdudev seama mowap.</title></head><body hidden draggable="false"><textarea maxlength="919" draggable="false" required cols="923" dir="auto" autocomplete="off" readonly minlength="152" spellcheck="default" contenteditable="true" tabindex="68" disabled rows="77" hidden autofocus style="scroll-padding-top: 45%; border-bottom-left-radius: -528.188vw; border-inline: thick hsl(339356329967616 , 22% , 59% , 40%) dashed; background-clip: content-box; counter-increment: bojmiewu -31%;">Olibi hapakoh sepbe guzfi.</textarea><h4 tabindex="299" contenteditable="" style="quotes: auto; border-left-width: thick;">Nimnikro ge osjetik.Fur mamhevi det iphoc usetumur me.Bowebaf tiritoke lijukis.<sup dir="auto" tabindex="764" style="text-align: right;"><label draggable="false" contenteditable="false">Ruvebuw anja tiwec fe.<sup dir="rtl" hidden draggable="false" tabindex="494"></sup></label>Lomaj wac zec jijwoh oleowa geresu pun.</sup><audio><bdo hidden draggable="true" style="border: thin none #1a645a; flex: none; border-block-width: thick; text-shadow: 900.4747rem hsla(-7445257042001920 , 54% , 96% , 76%); perspective-origin: 66% bottom;"><var hidden contenteditable="false" tabindex="180" dir="rtl"></var><map contenteditable=""></map>Duk novelru tihi.<area></area></bdo>Rekmanam vespuk.<ins tabindex="991" contenteditable="" dir="auto" style="font: status-bar; touch-action: manipulation; background-repeat: repeat;"><track hidden draggable="true"></track><bdi></bdi></ins></audio></h4><hr draggable="true" tabindex="-354"></hr><embed dir="ltr" hidden contenteditable="false" src="FiCCYjq((76tgRE[$$*S" tabindex="614" title="]er"></embed></body></html>',
      '<html hidden contenteditable="" dir="ltr" draggable="true" lang="qcn"><head><title>Wuitho ran ecilegnu eva vuwahhe.</title><base></base><script defer contenteditable="false" tabindex="61" integrity="MR^9QzWYOP@t2$M7#W" nomodule async dir="auto" style="border-image-source: image-set(\'ora\' 618.6114dppx); resize: both; border-image-source: conic-gradient(from 743.6871grad at top right , snow -997.7598turn , 84% , -987.2283deg hsl(-347.1329turn 56% 63% / -4326993935990784)); flex-wrap: wrap; align-self: stretch;"><article tabindex="754" dir="auto" hidden draggable="false" style="scrollbar-width: auto; transition: cocu steps(95% , start); vertical-align: text-bottom; quotes: auto;"></article><embed tabindex="-372" dir="auto" contenteditable="false" src="aGluI]" title="H@mM69Zw"></embed><article><blockquote tabindex="-760" dir="rtl" draggable="false" hidden><s contenteditable="false"></s><datalist draggable="false"></datalist></blockquote><u tabindex="-777" contenteditable="false"><a draggable="true" dir="rtl" contenteditable="false"></a><br dir="rtl" contenteditable="true"></br>Mezfa vepu jorezo.<video contenteditable="" hidden dir="ltr" draggable="false" preload="metadata" style="image-rendering: crisp-edges;"></video>Roohpi lab lefugor.</u>Badupwu opa joworo kotcorin nipranas hod.<s tabindex="-337" draggable="true"><area shape="poly"></area>Gihak hu ezmov kojuma.Sikwesu akoun lej tuhas inteum.<data></data></s></article><img src="sh#DGRMQAX" style="opacity: -3384039796899840;"></img></script><script tabindex="237" draggable="true" defer async contenteditable="" dir="auto" nomodule hidden integrity="my" crossorigin="anonymous"><article contenteditable="true" style="animation-play-state: paused; place-content: last baseline space-around;"><span>Di vaul baztusig perfab fo woufwo hu.Vo ojopeevu bawvur opmop loun uv isose.Tis vit iteetde behlok lemse neci.<bdo contenteditable="true" draggable="false" dir="rtl"></bdo><canvas draggable="false" hidden dir="rtl" tabindex="-380"></canvas></span><svg dir="auto" draggable="false"><nav hidden contenteditable="true" draggable="false" dir="rtl" style="transform: none;"></nav><script dir="rtl" src="xgT10Du[E8j" style="overflow-x: auto;"></script><svg draggable="false" contenteditable="true" tabindex="-256"></svg><a contenteditable="" hidden></a></svg><data></data>Punaf gijiwo hetjo mordopni feevi.</article><img tabindex="-178" src="rSpOVrt"></img><object contenteditable="true" draggable="false" data="GFG11Zb]zj8hS1"><audio draggable="true" hidden><param dir="rtl" contenteditable="true"></param><param tabindex="-581" draggable="true"></param><em contenteditable="" draggable="false" hidden dir="rtl" style="grid-auto-columns: fit-content(0%); direction: ltr; outline-color: invert;"></em><output tabindex="152" dir="auto"></output></audio>Erdog zud podcad je dehim mel.<output hidden tabindex="497" dir="auto" contenteditable="true"><u tabindex="868" draggable="false" style="border-radius: 637.47cm / -194.0396ch; border-inline-style: hidden; padding-block-end: -307.8006vw; white-space: pre-wrap;"></u>Fivonfo efeokuve na huro miomnec bebsojla gifpu.</output><footer contenteditable="true" draggable="true" hidden style="block-size: border-box -644.4673rem;"><keygen contenteditable="true"></keygen><del tabindex="405" dir="rtl" style="flex-flow: column-reverse nowrap; perspective-origin: 1% top;"></del>Boso gigebhoz.Ublaro egfi eh.</footer><h2 hidden><picture hidden></picture><label></label></h2></object><style hidden dir="rtl" draggable="true">::after { animation-play-state: running; text-indent: each-line 50% hanging; orphans: -23%; text-emphasis-color: hsla(2052444938829824 , 89% , 6% , 331609421119488); text-decoration-line: none; }\n:right + ::slotted(bazocuc | * #om : : nelus lowercase ) : gi none )) { scroll-padding-inline-end: -469.9072pc; animation-direction: normal; border-block: currentcolor ridge; border-spacing: 249.3271vw -236.1207rem; }\n:checked { border-bottom-color: hsl(4947362413805568 , 6% , 65% , 53%); }\n:last-child { text-emphasis-position: left over; }\n:enabled { width: content-box 75%; inset-inline-end: auto; mask-repeat: repeat-y; }\n#onde ~ :focus :in-range { gap: normal 886.1517in; border-top: thin inset rgb(100% , 3088657518952448); scroll-padding-block-start: auto; }\n</style></script><script nomodule integrity="1P5nWdnxO3[t*Nd1m" draggable="true" defer hidden dir="auto" crossorigin="use-credentials" tabindex="-818" contenteditable=""><h1 hidden draggable="false" style="border-block-end: ridge hsla(-692519012663296 56% 0% / 24%) medium; page-break-inside: avoid; word-wrap: normal; border-block-end-style: hidden;"><ruby hidden tabindex="355" dir="auto"><rp></rp><slot></slot><rtc hidden dir="ltr" draggable="false" contenteditable=""></rtc></ruby><noscript tabindex="722" contenteditable="false"><ruby style="border-inline: -195.3458px inset; grid-template-columns: [ canro ] repeat(6% , [ viseb ] minmax(50% , 7%) [ ve ]) [ ureamila ] repeat(auto-fill , [ mec ] minmax(-874.9156px , auto) [ usutato ]) [ garuv ] repeat(39% , [ onesekab ] minmax(171.6203vmax , 27%) [ ohocevhu ]) [ nalniw ]; grid-template-columns: [ cas ] repeat(50% , [ zozaho ] -202.328vh [ nubjaja ]) [ he ] repeat(auto-fit , [ ugzies ] -687.2364pt [ cainare ]) [ kawbo ] repeat(55% , [ rumatag ] minmax(49% , auto) [ foganne ]) [ sujdawe ]; font-variant-alternates: normal;"></ruby>Rizhuwi wim hipid vuf nunorec dujubale idkos.Gavud huruzib diih polo mecnuf ra.</noscript></h1><blockquote dir="auto"><figure draggable="false" contenteditable=""><template dir="auto" contenteditable="true"></template>Tucidu kuzpuvo fuuko.<figcaption style="padding: 9%;"></figcaption></figure><h5>Dosulapi hi ijihoac hid zizonon etiugo.<select style="overflow: visible; column-span: none; overflow-y: visible; background-repeat: repeat;"></select>Uvja vugej bo vo igoacohow bifline ramudik.<em style="place-items: normal left legacy; shape-outside: image-set(\'zotbuzwih\' 628.2381x); justify-items: stretch;"></em></h5><template draggable="false" contenteditable="" hidden dir="ltr"><audio draggable="true" dir="ltr" tabindex="-730"></audio></template></blockquote><object><section dir="rtl" hidden><svg draggable="true" tabindex="488"></svg></section><output tabindex="-879" contenteditable="true" style="padding-block-end: -835.5859in; text-overflow: ellipsis; grid-column-start: span fo;"><output tabindex="473" draggable="false"></output><q draggable="true" contenteditable="" tabindex="-604"></q><math dir="ltr"></math>Tati gi bubhu.<span></span></output><h6 dir="rtl">Mujodij subvoul.<em></em></h6><link hidden href="2E$^X0tS"></link>Ozubupco can hapallad.</object></script></head><body draggable="true" tabindex="-321"><h5></h5><q contenteditable="" hidden tabindex="903" style="justify-items: legacy left; padding-block-end: 64.9854in; grid-auto-columns: minmax(154.3998mm , 12%); scroll-margin-top: 117.2848ex; counter-set: vavvumo -85%;"><svg draggable="false" dir="rtl" contenteditable="false"><blockquote><h4></h4>Zez bi.</blockquote><iframe draggable="false" hidden contenteditable="true" title="hY!SNA!qQ]PH">Hapizla bu.</iframe><script tabindex="836" dir="rtl" hidden contenteditable="false"><textarea maxlength="541" spellcheck="true" readonly cols="478" rows="532" contenteditable="" draggable="false">Juwa pe hurijsi nap giusute tifmab wihazino.</textarea></script><iframe hidden draggable="false" title="e6YuI#c*)l(">Elili gis.</iframe><h4 dir="rtl" draggable="false"><label contenteditable="true" tabindex="298" draggable="true" hidden style="text-decoration-line: underline overline; border-right-color: ThreeDDarkShadow;"></label><sub draggable="false" hidden tabindex="527"></sub><output dir="auto" hidden draggable="true"></output><var contenteditable="false" hidden draggable="false" style="-webkit-line-clamp: none; backface-visibility: hidden;"></var>Cabosu zuvtac wamo cera surbu eho pu.</h4></svg></q><h6 dir="ltr" draggable="false" tabindex="-667">Odjuki hipub lizaf pulsurap.</h6><a draggable="false" contenteditable="" dir="auto">Mijuap jokagi wewucela osku lag ehiiwu.<svg draggable="false" hidden></svg></a><label></label></body></html>',
      '<html draggable="false" dir="auto" lang=""><head><title contenteditable="" hidden draggable="true" style="scroll-margin-block: 268.6795Q; z-index: auto; border-block-start: double currentcolor;">Goze es ru wejilo.</title></head><body hidden contenteditable="true" draggable="true" dir="ltr"></body></html>',
      '<html hidden contenteditable="false" draggable="false" dir="ltr" lang="0IoQ$gvd"><head draggable="false" tabindex="-242" contenteditable="false"><title draggable="true" dir="ltr" hidden>Pezeljof uvsa luj ji je pejlibjop ivoru.</title><base hidden draggable="true" tabindex="-152" contenteditable="false" style="border-spacing: 874.7569ex 206.5836pt; grid-row-start: 35% uzu; border-top: double violet medium; block-size: fit-content;"></base><base dir="ltr"></base><noscript><title hidden tabindex="-147" draggable="false" contenteditable="true">Tet ojeniw var bip.</title></noscript><noscript draggable="true" style="transition-property: none; justify-content: unsafe left; image-rendering: pixelated;"><title draggable="true" tabindex="-561" dir="auto">Vuuzruk uca pukozi.</title><base dir="rtl" tabindex="-73"></base><link href="o962^A*Z)DM([)4Dl@J5"></link><template dir="rtl"><article draggable="false" tabindex="-377" contenteditable="true" dir="ltr">Me pu dufe ozipolo zacuk louge.<cite draggable="true" dir="auto" style="text-shadow: 11.9158vmax rgba(-8305899378573312 , -8358341931696128); transition-property: none; border-image: space none fill 1140755355664384 / 300811330519040 / 517.5525vmax; caption-side: top; empty-cells: show;"></cite><samp tabindex="781" hidden draggable="true" contenteditable="false"></samp></article><script draggable="true" async></script><nav tabindex="507"></nav></template></noscript></head><body tabindex="774" hidden contenteditable="true" draggable="false"></body></html>'
    ]);
  });

  describe("when given a tag", () => {
    it("generates HTML strings starting with that tag", () => {
      expect(htmlString({ tag: "form" }).take(5), "to equal snapshot", [
        '<form method="get" novalidate style="background-color: hsla(1821526110240768 , 14% , 71% , 2%);"></form>',
        '<form autocomplete="off" novalidate method="get" dir="rtl" contenteditable="true" hidden tabindex="-432"><br contenteditable="true" hidden></br>Enfic ozi kahono pub lef.<dfn hidden dir="rtl" tabindex="185"><u contenteditable="false" hidden><img draggable="false" src="b]F5" style="align-content: normal; scroll-padding-block-start: auto;"></img>Asoojduv neclekos junla esohogbi dadeip riide.<del draggable="false" tabindex="-599" hidden></del></u><u tabindex="-872" draggable="false" hidden contenteditable="" style="text-emphasis-color: InfoBackground; column-span: all; border-bottom-color: GrayText;">Mat kadril dej.</u><time tabindex="-323"><img decoding="async" hidden src="Edcuz^UrYkNKH[OrRXf4"></img><datalist hidden><wbr draggable="false" style="scroll-padding-left: auto; column-rule-width: medium; border-inline-end-width: medium; animation-timing-function: step-end;"></wbr><option tabindex="-645" dir="ltr">Ovakod rur va rimhuuw.</option></datalist>Tajloewu zuecuaw sajopbed pol harhi.</time>Los vendijjeg ukiipi.Tiref pen taf nuhijoow ru uvake.</dfn></form>',
        '<form method="get"><mark tabindex="671" draggable="true" contenteditable=""><embed hidden dir="ltr" src="^gLaLU7oWfZD6d$$zc" title="GQXcyIlO[v!R" style="animation-play-state: running; scroll-padding-bottom: auto;"></embed><samp draggable="true"><del contenteditable="false" tabindex="138" dir="ltr" hidden><embed src="FZ" title="m^lGsrOg" style="transform: none; min-inline-size: fill-available; inset-inline: auto; orphans: 11%;"></embed><input inputmode="none" multiple autofocus contenteditable="" draggable="true" required type="text"></input><keygen contenteditable="true" dir="auto" tabindex="-346"></keygen>Cotub bo pumvapop enotilip.Ruwluz gagga.</del><progress contenteditable="" style="overflow-x: hidden; background-repeat: repeat-y; column-rule-style: dashed; scroll-snap-stop: always;"></progress>Jivotu wiuhimo susde sev.</samp><samp draggable="false" hidden contenteditable="false" tabindex="238"><mark contenteditable="false" dir="auto" tabindex="-574" hidden></mark><embed contenteditable="" dir="auto" src="56ig&amp;K[e]OeG2$Oz0i)" title="9T#h!gFZqfD8%0" style="border-block-color: rgba(1464668166029312 , 6541722049839104); flex-grow: 6851956031094784; scroll-padding-block: auto;"></embed><bdi tabindex="-708" hidden dir="rtl" draggable="false"><datalist><option contenteditable="" tabindex="400" hidden draggable="true" disabled>Nubuz kuru cemucite nuwijwaw ocu doja nej.</option><bdo draggable="true" style="white-space: pre; word-break: break-all;"></bdo></datalist><bdo><strong hidden dir="ltr" contenteditable="false"></strong></bdo><datalist hidden draggable="true"><option hidden disabled tabindex="-393" contenteditable="false" dir="auto">Maba vum.</option><option disabled selected tabindex="757" draggable="true" dir="ltr" hidden>Og huzob dapil.</option>Kutunaaki bi torgudbuj temdu riawjo wutnu.<img tabindex="-329" decoding="async" dir="rtl" contenteditable="" draggable="true" crossorigin="" src="IjRlDkZVnnZ"></img><option selected draggable="true" disabled tabindex="-40" hidden contenteditable="">Di nef divedo vamfuj.</option></datalist></bdi>Et saz.<textarea disabled autocomplete="on" required>Zibelre jo bief ra kil apparon sinle.</textarea></samp></mark><sup dir="auto">Ha pagah cucammo.<wbr tabindex="918" contenteditable="" draggable="false" hidden></wbr><u draggable="true"><script src="vgRLl&amp;JxNRdBy" hidden style="background-origin: padding-box; word-spacing: normal; column-rule-width: medium;"><embed draggable="false" hidden src="3)Ej*2]*pnCe&amp;21Qd!" title="63"></embed><object></object><picture><script async nomodule hidden draggable="false" crossorigin="anonymous" integrity="UwN3GLQrA%CCNOe^qU" style="transform-box: border-box; max-width: fit-content; counter-increment: none;"></script></picture><math display="inline"><object data="kcpQ04K#3zh8NiC!" contenteditable="" hidden tabindex="397"></object><script async></script></math></script><object tabindex="543" hidden contenteditable="" dir="rtl"><textarea spellcheck="false" disabled>Zisa waewu defuf ohu hin cogu.</textarea><data contenteditable="true" draggable="false" dir="auto"><iframe hidden title="Fc^xA5QuUq">Ula ecufi kak golelta ences.</iframe><time draggable="true" tabindex="-497" dir="auto" style="border-inline-end-color: hsl(8036501640183808 , 76% , 37% , -4129896901115904);"></time><data draggable="true" dir="auto" tabindex="867"></data><time dir="rtl" tabindex="-595"></time>Vig agwoveze fekkubo gub in.</data><label draggable="false" tabindex="-336" hidden><abbr draggable="false"></abbr><progress tabindex="780" dir="ltr"></progress></label><picture tabindex="-485" hidden><script defer crossorigin="anonymous" hidden draggable="false" dir="ltr"></script></picture></object>Oma pecmolwec fe ishoppan mijpibfu cazeceh.<code dir="rtl" hidden><ruby><mark contenteditable="true" dir="rtl"></mark><rtc draggable="true" dir="auto" style="vertical-align: super; align-content: space-between; flex: none; border-block-width: thick;"></rtc><rp contenteditable="true" hidden draggable="true" dir="ltr"></rp><progress hidden draggable="false" dir="auto" tabindex="637"></progress><rt draggable="true" tabindex="670" contenteditable="" dir="auto"></rt></ruby><br contenteditable="" draggable="true" dir="ltr" tabindex="731" style="border-block-start-width: thick; font-variant-caps: titling-caps; scroll-margin-inline-start: -51.5716vh; tab-size: 69%; grid-auto-rows: min-content;"></br><code hidden contenteditable="" dir="rtl" draggable="true"></code>Kisciam vespuk hibiz if owcub zabi sugmoc.Rohac jejog jaubi mo.</code></u></sup></form>',
        '<form><slot tabindex="-401" contenteditable="false" draggable="false"><bdo style="scroll-margin-block: 652.4114mm; scroll-margin-left: -884.3147Q; vertical-align: super; text-decoration-style: dotted; text-underline-position: left under;"><mark tabindex="537" dir="rtl" contenteditable="false" hidden><template><noscript contenteditable="" dir="ltr" hidden></noscript></template>Cufvu eci.Sutkor egopov edfoj wudorgav ilaabakes buesiba te.<area hidden shape="rect" contenteditable="true" tabindex="780" draggable="true"></area><svg contenteditable="true" draggable="true" dir="rtl" style="resize: none; scroll-margin-bottom: 874.457em; padding: 6%; transition: cocu steps(95% , start); vertical-align: text-bottom;">Asva jioka fitvef.<input dir="auto" multiple disabled draggable="true" checked type="text" readonly capture spellcheck="false" autofocus contenteditable="false" tabindex="-760"></input><audio dir="auto" draggable="true" preload="" tabindex="-868" hidden></audio><svg tabindex="-185" dir="auto" style="border-image-repeat: space; grid-auto-flow: dense row; max-height: fit-content; border-bottom-style: dotted;"></svg></svg></mark><button type="submit" disabled hidden contenteditable="true" autofocus dir="ltr" tabindex="686">Ake facomi wepzuzibo.Feunbi gojzaw pi lab.<progress contenteditable="false" dir="rtl" hidden tabindex="-690">Comwuoro kotcorin nipranas hod tehnes.<bdo></bdo><br hidden contenteditable=""></br><area dir="rtl" shape="rect" hidden style="overflow-wrap: normal; background-size: cover; animation-iteration-count: infinite;"></area></progress></button></bdo>Guwismoj zubivsik min.<del draggable="true" hidden tabindex="592" contenteditable="false"><h4 hidden tabindex="716"><datalist>Pijsad kuhu kisak neicfe.<option hidden draggable="true" selected>Felawep zuali rembecam cap na kasarmu vabkoz.</option></datalist><math tabindex="532" draggable="true" dir="ltr" display="block" overflow="scroll" contenteditable=""><pre tabindex="979" contenteditable="true" hidden dir="auto" style="border-top-color: #d4b45e; text-align-last: justify; margin-block-start: auto;"></pre><code></code><picture tabindex="827" draggable="false" dir="rtl"></picture>Unku uvzanwa mohvitzut et.<embed contenteditable="" dir="rtl" src="DPZCCOHS" title="GqbfRSmXVT4"></embed></math><sup draggable="false"><time draggable="false"></time><i hidden dir="auto"></i><button tabindex="-898" contenteditable="" type="reset" disabled dir="auto" autofocus hidden></button></sup></h4></del></slot>Lafihih otrihto juadgar.<video dir="ltr" hidden draggable="false" contenteditable="true" preload=""><ins hidden tabindex="-794" dir="rtl"><track tabindex="-255" hidden draggable="true" contenteditable=""></track></ins><span tabindex="-767" dir="ltr" draggable="true" hidden>Be seteg salug vok novaz.<svg contenteditable="false" style="page-break-before: avoid; margin-inline: auto; break-after: avoid-column; border: medium;">Cotho invig ka ujliznij.<h2><u></u><s></s>Keutiled fazosi vic doedo zarbahe laog.</h2><h2 draggable="true" dir="auto">Terrur afacma.<mark style="border-right-style: dashed; transition-property: anaeh; text-underline-offset: from-font; hanging-punctuation: none;"></mark><object tabindex="-826" data="jfJbLkr)fO5)jG" contenteditable="" hidden dir="auto"></object><data dir="ltr" contenteditable=""></data><ins dir="auto" contenteditable="" tabindex="-211"></ins></h2><h3 contenteditable="true" draggable="true" hidden style="block-size: border-box -644.4673rem;"><mark contenteditable="true"></mark><datalist draggable="true" tabindex="-654" contenteditable="true" dir="rtl"></datalist>Weubefi agzod teh hoz.Ublaro egfi eh.</h3>Nujmulaz ocvewaka ew.</svg><data><strong draggable="false" hidden>Vatdaom liujzup.Gi vus ma pu zotuve ho.</strong><q hidden style="transition-timing-function: ease-out; backface-visibility: hidden; vertical-align: text-top; scroll-margin-inline-end: -749.5329in;">Apodadu demi tajew giv uho evhumto uv.<object tabindex="-320" draggable="false" hidden contenteditable="false"></object></q><keygen contenteditable="false" draggable="false" style="unicode-bidi: embed; hanging-punctuation: last; counter-set: none; font-synthesis: style weight; inset-block: 30%;"></keygen>Vasov farahos.<b tabindex="800" dir="ltr" contenteditable="" draggable="false"><picture hidden tabindex="-202" contenteditable="false" dir="auto"></picture><iframe tabindex="-842" title="L]jBCHV15">Marba lalak.</iframe><meter tabindex="-104" dir="ltr"></meter><a contenteditable="false" draggable="false"></a></b></data></span><area dir="auto" draggable="true" tabindex="785" contenteditable="false"></area><bdo tabindex="-122" draggable="false" dir="rtl"></bdo>Su usutato garuv zisefluj.</video><u style="animation-duration: 171.6203s; margin-left: 395.3413pt; top: 565.1639vw; background-clip: border-box;">Cas ikwasfe feopi ceceje it jes.<sup draggable="true" hidden>Borudiwe mog.<textarea readonly cols="609" rows="349" required hidden dir="ltr" autofocus maxlength="22" minlength="720">Rimdevwi wim.</textarea>Nu favuf nunorec dujubale idkos.<embed hidden contenteditable="false" tabindex="-871" src="HP[35" title="" style="cursor: url(reacvi) 644.2064mm -239.16cm , nesw-resize; gap: -592.4671em -425.7241mm; scroll-margin-inline: 514.9638px;"></embed><iframe hidden title="VDo^%N" style="padding-block-start: 80%; border-inline: inset; flex-basis: auto;">Fifgewot no cuvas.</iframe></sup>Uki vokazuko bo raawe wu.<kbd><time dir="ltr"><i>Nastip wunuz bas kebarfu uvja vugej bo.</i>Zuwhot vutuvan li.<bdo draggable="true">Ma za javjuwzot uzwiheme nafdic ha.<video></video></bdo>Sah wo cuevo.</time>Izta etbi utsip.<embed src="qSKi2g" title="X#9e$(QbMZFgx^GI5kS"></embed><textarea cols="384" draggable="true">Siumemaw la cudji.</textarea><label draggable="true" dir="rtl" hidden contenteditable="true">Bubhu dej nifmeb mujodij subvoul.</label></kbd><map><input multiple autofocus readonly type="text" checked required></input></map></u><textarea>Huc ire.</textarea></form>',
        '<form><picture><script contenteditable="true" tabindex="-888" src="LVk^iTl#m1Vi" draggable="false" defer nomodule async dir="rtl" crossorigin=""><link hidden href="pzI18We!CZ@FDXfuO"></link><article draggable="false" dir="rtl" contenteditable="false"><bdi dir="rtl" draggable="true" style="row-gap: normal; transition: -949.1045s; object-fit: contain; min-inline-size: -318.7917mm; background-size: contain;"><bdi dir="rtl" hidden></bdi><picture contenteditable="" tabindex="505" draggable="false" style="border-block-end-style: none; border-left-style: none;"></picture></bdi><nav draggable="true"></nav><h3 hidden style="hanging-punctuation: none; border-bottom-style: outset; scroll-padding-left: auto;"><embed src="lCcC)z5O[lJON" tabindex="-762" draggable="false" title="Aw9t0oneLzYtr)9PO" style="margin-inline-start: 999.4277pc; border-image-outset: 5706185508388864; hanging-punctuation: none;"></embed><keygen hidden tabindex="326"></keygen></h3>Webu rugun wemibzo cojiv udu.<progress draggable="false" hidden><map hidden></map><cite dir="auto" draggable="true"></cite><kbd hidden tabindex="476" dir="auto" draggable="true" style="align-content: last baseline; scroll-snap-stop: normal; text-emphasis-color: rgba(31% / 25%); grid-auto-columns: min-content; visibility: hidden;"></kbd></progress></article><meter hidden contenteditable="false" draggable="true" tabindex="872"></meter></script><template dir="rtl" draggable="true" tabindex="210"><video style="place-items: stretch left legacy;"></video><link href="48W74$!ZThgDK1fu"></link><sub contenteditable="" tabindex="809">Agoca moh.Jit fig kiegtez.<em><q contenteditable="false" tabindex="-454" draggable="false"></q></em>Relhuh ridawwek.</sub><embed contenteditable="false" dir="ltr" src="DxhanL" title=""></embed></template></picture>Subeos oc deeveawu muluvad piopwob ho.</form>'
      ]);
    });
  });

  it.skip("only generates valid HTML", () => {
    expect(
      html => {
        expect(html, "to be valid html");
      },
      "to be valid for all",
      htmlString
    );
  });
});
