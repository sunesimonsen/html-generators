const chanceCache = require("chance-generators/lib/chanceCache");

const expect = require("../test/expect");
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
                              "border-block-start-color: rgba(90% / -3344265333702656); margin: 70%; text-orientation: mixed;"
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
                            dir: "auto"
                          },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "img",
                          children: [],
                          attributes: {
                            draggable: "true",
                            src: "!%@$D5$V!g*l6%X"
                          }
                        }
                      ]
                    }
                  ]
                },
                { type: "text", value: "Opbed pol." }
              ]
            },
            {
              type: "tag",
              tag: "title",
              attributes: {
                tabindex: "-494",
                contenteditable: "",
                hidden: null
              },
              children: [
                { type: "text", value: "Wohramte su putitpo pufwi bop." }
              ]
            },
            {
              type: "tag",
              tag: "time",
              attributes: {
                style:
                  "transform-origin: bottom; break-inside: avoid-region; text-decoration-line: underline line-through overline; font-variant-ligatures: none; unicode-bidi: bidi-override;"
              },
              children: [
                {
                  type: "tag",
                  tag: "b",
                  attributes: {
                    tabindex: "-209",
                    draggable: "false",
                    hidden: null,
                    dir: "auto"
                  },
                  children: []
                },
                {
                  type: "tag",
                  tag: "input",
                  children: [],
                  attributes: { checked: null, type: "file" }
                },
                {
                  type: "tag",
                  tag: "del",
                  attributes: { hidden: null },
                  children: [
                    {
                      type: "tag",
                      tag: "samp",
                      attributes: {
                        hidden: null,
                        tabindex: "628",
                        contenteditable: "",
                        dir: "rtl",
                        style:
                          "font-language-override: 'ija'; flex-shrink: 1420703647662080; border-block-end: dashed hsla(963.6818grad 84% 59% / -4499071456772096); animation-play-state: running;"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "meter",
                          attributes: { contenteditable: "true", hidden: null },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "math",
                          attributes: {
                            contenteditable: "",
                            tabindex: "-795",
                            overflow: "scroll"
                          },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "del",
                          attributes: {
                            contenteditable: "",
                            dir: "auto",
                            tabindex: "-696"
                          },
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
                      tag: "em",
                      attributes: { dir: "ltr", contenteditable: "true" },
                      children: [
                        {
                          type: "tag",
                          tag: "math",
                          attributes: {
                            tabindex: "-566",
                            hidden: null,
                            draggable: "true",
                            overflow: "truncate",
                            style: "counter-set: da;"
                          },
                          children: []
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "kbd",
                      attributes: {
                        hidden: null,
                        contenteditable: "false",
                        dir: "rtl",
                        tabindex: "473",
                        style:
                          "font-variant-position: sub; font-optical-sizing: auto; mask-repeat: round;"
                      },
                      children: [
                        { type: "text", value: "Tub tutvendit opeupu ja la." },
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
                    },
                    { type: "text", value: "Kedebuw leorusi nase gozzod." }
                  ]
                },
                {
                  type: "tag",
                  tag: "canvas",
                  attributes: {},
                  children: [
                    {
                      type: "text",
                      value: "Rerudzup ecwemu famhuluj huwsojwa."
                    },
                    {
                      type: "tag",
                      tag: "audio",
                      attributes: { tabindex: "330", dir: "rtl" },
                      children: [
                        {
                          type: "tag",
                          tag: "img",
                          children: [],
                          attributes: {
                            crossorigin: "use-credentials",
                            contenteditable: "false",
                            src: ")DBJvg#NqG)7"
                          }
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
                    contenteditable: "true",
                    tabindex: "-630",
                    multiple: null,
                    type: "search"
                  }
                }
              ]
            },
            {
              type: "tag",
              tag: "h1",
              attributes: { tabindex: "737", draggable: "false" },
              children: [
                { type: "text", value: "Selu nob kisog ic." },
                {
                  type: "tag",
                  tag: "label",
                  attributes: {
                    tabindex: "920",
                    hidden: null,
                    dir: "ltr",
                    draggable: "false"
                  },
                  children: [
                    { type: "text", value: "Lezenu bi ba vum." },
                    {
                      type: "text",
                      value: "Omiwusleg dejof vop ja pil pevrunit fibzo."
                    },
                    {
                      type: "tag",
                      tag: "small",
                      attributes: {
                        hidden: null,
                        draggable: "true",
                        tabindex: "14"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "input",
                          children: [],
                          attributes: {
                            checked: null,
                            capture: null,
                            type: "text"
                          }
                        },
                        {
                          type: "tag",
                          tag: "b",
                          attributes: {
                            dir: "rtl",
                            contenteditable: "true",
                            tabindex: "-329"
                          },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "i",
                          attributes: { dir: "ltr" },
                          children: []
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "wbr",
                      children: [],
                      attributes: {
                        contenteditable: "false",
                        draggable: "false",
                        style: "padding-block-start: -176.6776vmin;"
                      }
                    },
                    {
                      type: "text",
                      value: "Vufgeb kegara lelam kac topuoj ju ziuflul."
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "i",
                  attributes: { hidden: null },
                  children: [
                    {
                      type: "tag",
                      tag: "script",
                      attributes: {
                        style: "border-bottom-width: medium; padding: 85%;"
                      },
                      children: [
                        {
                          type: "tag",
                          tag: "blockquote",
                          attributes: { draggable: "true" },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "canvas",
                          attributes: { hidden: null },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "noscript",
                          attributes: {},
                          children: []
                        }
                      ]
                    },
                    {
                      type: "text",
                      value: "Ki ij vetil ron sinle ipsej kowba."
                    }
                  ]
                },
                { type: "text", value: "Hi gah cucammo." },
                {
                  type: "tag",
                  tag: "label",
                  attributes: {
                    tabindex: "918",
                    contenteditable: "",
                    draggable: "false",
                    hidden: null
                  },
                  children: [
                    {
                      type: "text",
                      value: "Orisihzef wipora zecpawki lefi ufe dedbodnin."
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

  it("shrinks towards minimum constraints", () => {
    expect(html, "to shrink towards", {
      type: "tag",
      tag: "html",
      attributes: { lang: "%^8Uzyt9" },
      children: [
        {
          type: "tag",
          tag: "head",
          attributes: {},
          children: [
            {
              type: "tag",
              tag: "title",
              attributes: {},
              children: [
                {
                  type: "text",
                  value: "Nuhu zadsiznof bizi meftuud fogbuw anja."
                }
              ]
            }
          ]
        },
        { type: "tag", tag: "body", attributes: {}, children: [] }
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
      '<html hidden lang="25SSlGlheH#ySk0Wbe)"><head><title dir="ltr" draggable="true" tabindex="612" style="clip: auto;">Apli navvalbu rujbave.</title></head><body hidden contenteditable="" style="font-kerning: auto; border-inline-end-style: groove; right: -149.6883pt; border-left-style: double; margin-block-end: -937.3735vw;"><blockquote contenteditable="false" draggable="true"><meter tabindex="-607"></meter></blockquote><noscript tabindex="-74"><aside style="border-inline-start-width: medium; padding-left: 79%; scrollbar-width: thin; background-size: contain; flex: auto;"><b draggable="true" tabindex="-119" contenteditable="false"><data style="border-block-start-color: rgba(90% / -3344265333702656); margin: 70%; text-orientation: mixed;"></data>Zegcih iwahoil giimeduj deg bueh.Ril dej.<kbd tabindex="-323"></kbd></b><figure draggable="false" dir="ltr" contenteditable=""><figcaption></figcaption>Caku vapiz soze wu tumit ede waser.</figure><picture contenteditable="false"><source dir="rtl"></source><source contenteditable="" draggable="false" dir="rtl" hidden></source><script draggable="false" src="%P" async dir="auto"></script><img draggable="true" src="!%@$D5$V!g*l6%X"></img></picture></aside>Opbed pol.</noscript><title tabindex="-494" contenteditable="" hidden>Wohramte su putitpo pufwi bop.</title><time style="transform-origin: bottom; break-inside: avoid-region; text-decoration-line: underline line-through overline; font-variant-ligatures: none; unicode-bidi: bidi-override;"><b tabindex="-209" draggable="false" hidden dir="auto"></b><input checked type="file"></input><del hidden><samp hidden tabindex="628" contenteditable="" dir="rtl" style="font-language-override: \'ija\'; flex-shrink: 1420703647662080; border-block-end: dashed hsla(963.6818grad 84% 59% / -4499071456772096); animation-play-state: running;"><meter contenteditable="true" hidden></meter><math contenteditable="" tabindex="-795" overflow="scroll"></math><del contenteditable="" dir="auto" tabindex="-696"></del><progress></progress></samp><em dir="ltr" contenteditable="true"><math tabindex="-566" hidden draggable="true" overflow="truncate" style="counter-set: da;"></math></em><kbd hidden contenteditable="false" dir="rtl" tabindex="473" style="font-variant-position: sub; font-optical-sizing: auto; mask-repeat: round;">Tub tutvendit opeupu ja la.Vec lubet.<mark dir="rtl" style="padding-block-start: 257.8857vw; text-decoration: hsla(-435.9309rad , 17% , 42% , 81%); margin-bottom: auto; perspective-origin: left;"></mark><meter draggable="false" dir="ltr" tabindex="-680"></meter><button contenteditable="true" type="button"></button></kbd>Kedebuw leorusi nase gozzod.</del><canvas>Rerudzup ecwemu famhuluj huwsojwa.<audio tabindex="330" dir="rtl"><img crossorigin="use-credentials" contenteditable="false" src=")DBJvg#NqG)7"></img></audio></canvas><input disabled contenteditable="true" tabindex="-630" multiple type="search"></input></time><h1 tabindex="737" draggable="false">Selu nob kisog ic.<label tabindex="920" hidden dir="ltr" draggable="false">Lezenu bi ba vum.Omiwusleg dejof vop ja pil pevrunit fibzo.<small hidden draggable="true" tabindex="14"><input checked capture type="text"></input><b dir="rtl" contenteditable="true" tabindex="-329"></b><i dir="ltr"></i></small><wbr contenteditable="false" draggable="false" style="padding-block-start: -176.6776vmin;"></wbr>Vufgeb kegara lelam kac topuoj ju ziuflul.</label><i hidden><script style="border-bottom-width: medium; padding: 85%;"><blockquote draggable="true"></blockquote><canvas hidden></canvas><noscript></noscript></script>Ki ij vetil ron sinle ipsej kowba.</i>Hi gah cucammo.<label tabindex="918" contenteditable="" draggable="false" hidden>Orisihzef wipora zecpawki lefi ufe dedbodnin.</label></h1></body></html>',
      '<html hidden dir="auto" lang="Ej*2]*pnCe&amp;21Qd"><head dir="ltr" hidden contenteditable="false"><title tabindex="392">Iljispi ik rawti oh.</title><script integrity="6]l3x0s53kcpQ04K#3" hidden crossorigin=""><iframe hidden title="lJqE151aVSZPO0sS">Semiop sam has ociwowwo sen co ewu.</iframe><blockquote contenteditable="false" tabindex="-124"><label draggable="false"><i></i><span></span></label></blockquote><object data="^HRqcH^ksn" tabindex="-165" hidden style="column-rule: darkorchid none; border-radius: 52%; white-space: break-spaces; grid-column: auto / rupekak; quotes: auto;"><section dir="rtl" style="animation-play-state: running; grid-row-start: 55% span; padding-right: 55.2955pt; justify-self: stretch;"><mark style="tab-size: 90%; resize: horizontal;"></mark>Ritudwup reha bicanip.</section></object></script><meta dir="auto" draggable="false"></meta></head><body tabindex="141" hidden draggable="true" contenteditable=""><audio hidden preload="auto" dir="rtl" draggable="true" tabindex="-259">Rekjez zadsiznof bizi meftuud.<object data="Ni8QKuePDWK91phak" contenteditable="" draggable="false"><source dir="rtl" hidden style="place-items: normal; border-block-width: medium; scrollbar-width: auto; background-position: -125.6132mm 72%; color: #90ffe4;"></source><track draggable="true" dir="auto" hidden tabindex="-215" style="bottom: 190.1559vmax; background-blend-mode: saturation; image-orientation: -690.6558grad flip;"></track><track hidden dir="rtl" contenteditable="false"></track><track hidden draggable="true" style="border: thin none #1a645a; flex: none; border-block-width: thick; text-shadow: 900.4747rem ; inset-inline-end: -826.5896px;"></track><ol type="I" tabindex="637" hidden draggable="false" reversed><script></script><script style="margin-right: auto; z-index: auto; list-style-position: outside; grid-row-start: span guukalo;"></script><li></li><template draggable="false"></template><template draggable="true" dir="ltr" contenteditable="false"></template></ol></object></audio>Manam vespuk hibiz if.<aside dir="auto" hidden style="background-blend-mode: hue; border-block-style: solid;"></aside><article draggable="false" tabindex="-769"><samp style="empty-cells: show; clear: inline-end; color: darksalmon;">Dezate muv siwufocek tenpagge.<wbr contenteditable=""></wbr><bdo tabindex="216" dir="rtl" draggable="false">Zisu divje ib.<math display="inline" overflow="truncate" contenteditable="" hidden tabindex="-408"></math><samp hidden></samp>Ufvu eci pianevin wuavoed.<label contenteditable="false" draggable="false" dir="auto" hidden style="padding-bottom: 19%; border-image-source: conic-gradient(from -69.06deg at right -542.7497vh bottom -997.7598vmax , -987.2283deg hsl(-347.1329turn 56% 63%), rgb(82% , -7080007411171328)  82.5332grad,  hsla(7782726480429056 , 76% , 10% , 17%) 6% ,  peachpuff); background-position: center center; mask-type: luminance;"></label></bdo></samp>Uruzoso cakel hobfeuw nuro jevzova oza wu.</article><canvas draggable="false" hidden dir="ltr" tabindex="-984"><style hidden>::before { padding-right: 125.5006vmax; grid-row-end: fafdod; scrollbar-width: thin; scroll-snap-stop: always; }\n</style></canvas></body></html>',
      '<html contenteditable="" draggable="false" hidden lang="Tn6IJaiSjSYsFPoqKle"><head draggable="true" dir="rtl" tabindex="-681"><title dir="auto" draggable="false" hidden>Dagun pi wezaw pi lab lefugor.</title><script nomodule draggable="true" contenteditable="true" dir="auto"></script></head><body draggable="false" dir="auto" tabindex="802"><blockquote draggable="false" hidden style="border-image-width: auto; font-weight: -7919992754405376; margin-top: 300.5884em;"><del hidden style="scroll-margin-bottom: -132.6893Q; backface-visibility: visible; border-image-width: -8631398453739520; padding-top: 23%; content: leader(solid) / \'mo\';"><address dir="auto"><select multiple size="40"></select></address></del><input disabled capture type="range"></input></blockquote><object draggable="false" dir="auto" tabindex="-131" hidden contenteditable="false">Hamin lonfo.Mev kisak neicfe kofil.<h6 draggable="false">Zuali rembecam cap na kasarmu.Baztusig perfab fo woufwo.Ezho uzebig.<iframe tabindex="-931" src="YSp*W9DXWQhzWl" hidden title="x[#E]#35gPv2">Orawite ajaro ko mirli.</iframe></h6><button tabindex="604" dir="auto" type="reset"><ins dir="rtl" contenteditable="true" tabindex="-534" hidden><sub draggable="true" contenteditable="false" tabindex="71" hidden></sub><slot tabindex="-351" dir="ltr" contenteditable=""></slot></ins><u draggable="true"><output draggable="false" dir="rtl"></output></u><meter tabindex="860" contenteditable="false">Gewmicame taz.</meter>Amuhof gijiwo.</button><h6 draggable="true">Nifag eledabte rohe cidjan mikwobuj dos.<sup draggable="false">Tapu ace junvig.<textarea cols="333">Liznij raz togamdi zajvu ojdefaz zigvichat dotzarba.</textarea>Ke kuri mel.<img crossorigin="anonymous" decoding="auto" hidden contenteditable="true" src="&amp;DiN8"></img></sup><ruby tabindex="-790" draggable="true" hidden></ruby>Fahez tutfivon suefe.</h6></object><script src=")fO" hidden defer></script></body></html>',
      '<html draggable="true" dir="ltr" lang="Va" style="mask-composite: intersect; flex-direction: row; font-family: fantasy; border-inline-start-color: hsla(-277393159749632 100% 76%);"><head draggable="true" contenteditable="false" hidden tabindex="-265" style="padding-block: 236.1034pt; min-height: fill-available; border-spacing: 627.9406ex -558.3948in; border-inline-style: groove;"><title contenteditable="true" hidden draggable="true">Efloz ma boso gigebhoz cub.</title><template dir="rtl" contenteditable="true"><canvas contenteditable="false" tabindex="476"><h6 contenteditable="" hidden tabindex="688" dir="rtl" style="break-inside: avoid-region; top: -493.8832vmin;"><q></q><input draggable="false" dir="ltr" inputmode="none" readonly type="button" style="inset-block: auto; font-family: \'usvofgi\', zagba; border-block: currentcolor ridge; border-spacing: 249.3271vw; outline-offset: -588.6255ch;"></input><q></q><template hidden style="transition-timing-function: ease-out; backface-visibility: hidden; vertical-align: text-top; scroll-margin-inline-end: -749.5329in;"></template></h6><img dir="rtl" tabindex="-128" hidden decoding="async" src="Sqh"></img><section draggable="false" dir="ltr"><data tabindex="252"></data><abbr tabindex="180" hidden style="column-rule-width: medium;"></abbr><embed dir="ltr" tabindex="-685" draggable="true" src="pKLl!z2EO4R3LTwhP" title="#QV#4GllIPa8s2"></embed><footer dir="auto" contenteditable="true" hidden draggable="true"></footer><sup hidden tabindex="355" dir="auto"></sup></section></canvas></template><base contenteditable="false" hidden></base></head><body><template tabindex="-449" draggable="false"><br contenteditable="" dir="rtl" tabindex="875"></br><h4 hidden contenteditable="true" tabindex="561"><strong><b style="content: leader(space); scroll-margin-bottom: 650.2614pt; inset-inline-end: 37%; border-image: element(#le);"></b></strong>Zusjofto garuv zisefluj wa seroho.</h4><h1 contenteditable="false" dir="rtl" draggable="false" tabindex="-186"><map contenteditable="false" tabindex="-780" draggable="true"></map>Fak vizcece.</h1>He hugzies.<audio contenteditable=""><canvas hidden dir="ltr"><source draggable="true" hidden contenteditable="false" dir="auto"></source><track></track><table contenteditable="" tabindex="947" dir="auto"></table></canvas><math style="page-break-after: always;">Udemom wim hipid vuf nunorec.<nav draggable="false" contenteditable="" tabindex="787"></nav></math><script nomodule style="columns: auto -590.2375cm; text-decoration-color: skyblue; border-image-width: auto;"><iframe src="Iz" hidden title="CK7hB">Zigef jezig apgu palrodtu.</iframe></script><iframe src="m[LkSocnA%2W8lxG7T" title="$">Uki vokazuko bo raawe wu.</iframe><iframe title="v8^Oi04">Nejpuiji wa domalol tok lovnuz bas kebarfu.</iframe></audio></template><h5 dir="ltr" hidden draggable="false"><code hidden tabindex="808" draggable="true"><textarea autofocus disabled dir="auto" tabindex="-127" required>Zotbuzwih repnaf rajebi juceg zib ivu seufore.</textarea><a hidden dir="ltr" contenteditable="false" draggable="false"><b contenteditable="false" draggable="false" hidden style="transition-property: all; inset-inline: auto; font-variant-numeric: normal; column-rule-style: outset; font-variant-position: sub;"></b><data></data><bdo contenteditable="true" dir="rtl" tabindex="789" hidden></bdo></a>Deal jugnozjok haj sa heulni noji.<keygen draggable="false"></keygen><data></data></code><code><bdi contenteditable="false">Imibi culogme.<sub hidden dir="auto"></sub></bdi><label dir="auto" tabindex="722" draggable="false"></label><object>Vedlul damis.</object><input dir="rtl" autofocus type="button" hidden></input></code>Dod wozucum abmihpa cuan no.<ins hidden contenteditable="false" draggable="true" tabindex="-673"><span tabindex="-319" draggable="false" style="flex-flow: row-reverse wrap-reverse; isolation: auto;">Katepke mih eni hiznar.<br style="grid-template-rows: none; animation-fill-mode: both; inset: 97%; border-collapse: collapse; border-block-end-style: none;"></br><slot contenteditable="false"></slot></span><data></data><sub hidden style="hanging-punctuation: none; border-bottom-style: outset; scroll-padding-left: auto;"><embed src="lCcC)z5O[lJON" tabindex="-762" title="GAw9t0oneLzYtr)9P"></embed><keygen></keygen></sub></ins></h5><h5 contenteditable="false" hidden><wbr tabindex="621" dir="ltr" hidden></wbr></h5><figure contenteditable=""><figcaption tabindex="-870" draggable="true">Pupopih jiro.<pre dir="rtl" draggable="false"><label contenteditable="true" tabindex="298" draggable="true" hidden style="text-decoration-line: underline overline; border-right-color: ThreeDDarkShadow;"></label><sub draggable="false" hidden tabindex="527"></sub><output dir="auto" hidden draggable="true"></output><var contenteditable="false" hidden draggable="false" style="-webkit-line-clamp: none; backface-visibility: hidden;"></var>Cabosu zuvtac wamo cera surbu eho pu.</pre><table dir="ltr" draggable="false" tabindex="-667"><thead tabindex="-907" dir="ltr"></thead></table><var dir="ltr" draggable="false" tabindex="-358" contenteditable="true"></var></figcaption><del><iframe tabindex="563" dir="ltr" title="51u">Apceska po jir.</iframe><object contenteditable="" draggable="false" hidden dir="auto" data="&amp;h"></object>Ehiiwu ijoz dopiop.<figcaption hidden draggable="true" contenteditable="false" tabindex="667">Ohenotub pu ekide zecu mimurlo wugorsah opwo.</figcaption></del></figure></body></html>',
      '<html tabindex="52" lang="IoQ$gvdBXe8i5M"><head><title contenteditable="" draggable="true" tabindex="404" dir="rtl">Nuz mos ze.</title><meta dir="ltr" draggable="false" contenteditable="" style="font: small-caption; flex-flow: row-reverse; font-variant-position: normal; content: normal;"></meta></head><body hidden><output hidden><sup hidden tabindex="-152" contenteditable="false" style="border-spacing: 874.7569ex -31.8459pt; position: static; grid-row-start: 92% amtipras; flex-direction: row;">Tut jaz tujvoaj kesruwo fub.</sup>Namu zej vucjut rimira.<sub draggable="false" dir="auto" contenteditable="" hidden><sup tabindex="-459" hidden dir="auto">Bat ijuukiuzo elweg not ros.</sup>Bublew aphu em dekbiip ih uw pampepdo.<bdi></bdi><var draggable="false" tabindex="251" contenteditable="true" hidden><sup tabindex="221" hidden contenteditable="" draggable="true" style="border-inline-style: hidden; text-align: center; caption-side: bottom; transition-delay: -137.2387s; padding-top: 126.6493px;"></sup><cite dir="rtl" hidden></cite></var><ins tabindex="781" hidden draggable="true" contenteditable="false">Bepla imi atces.Lotpura mu di bikrewu ge ne.Wa hotokzin kur jad izmuf minvemi bagpigtal.</ins></sub></output><h4 dir="rtl"><br draggable="false" contenteditable="" tabindex="-973"></br></h4><math dir="rtl" tabindex="-695" contenteditable="false" draggable="false">Ge fudzor omke.<article contenteditable="false" draggable="true" style="scroll-margin-block-start: 677.9947cm;"></article></math></body></html>'
    ]);
  });

  describe("when given a tag", () => {
    it("generates HTML strings starting with that tag", () => {
      expect(htmlString({ tag: "form" }).take(5), "to equal snapshot", [
        '<form method="get" novalidate style="background-color: hsla(1821526110240768 , 14% , 71% , -7990978635890688);"><time contenteditable="" dir="ltr">Ficow ajedehir pub lef kimri uv okonokan.Uhlog sezsi ju.<cite style="word-break: break-all;">Cujduvtih le votevned esohogbi dadeip riide.Zegcih iwahoil giimeduj deg bueh.<cite style="justify-items: baseline; border-right-style: groove; border-bottom-color: hsl(7978751946129408 16% 32%);"><ins dir="ltr" tabindex="-285" draggable="true" contenteditable=""><area hidden dir="rtl" draggable="true" shape="rect" contenteditable="false"></area>Upeaco kiwaser wi logumem.<progress tabindex="-209" contenteditable="true" draggable="false" hidden></progress><br hidden style="will-change: contents; justify-content: normal; border-top-color: AppWorkspace; unicode-bidi: plaintext; list-style-type: none;"></br><keygen hidden contenteditable="false" dir="auto" tabindex="898"></keygen></ins>Tucfowsib opbed pol harhi.Los vendijjeg ukiipi.</cite><select hidden tabindex="-281" autofocus required style="object-fit: fill; border-inline-width: thick; transform-origin: bottom; break-inside: avoid-region;"><optgroup draggable="false"><template></template><template contenteditable="false"></template><template contenteditable="false" dir="auto"></template></optgroup><script style="mask-repeat: no-repeat; flex: none;"><embed dir="auto" hidden tabindex="-553" src="F7s#T^" title="LU7oWfZD6d"></embed></script><option contenteditable="" draggable="true">Enbebah demzef navgiro waumo ak.</option><template draggable="true"></template><template contenteditable=""></template></select></cite><wbr draggable="true" tabindex="156" hidden contenteditable=""></wbr><area contenteditable="true" hidden shape="default"></area></time>Nosce fobe ca ez nazinef tetu.<code tabindex="934" contenteditable="true" hidden><button type="button"><progress tabindex="-821" draggable="false">La to.</progress><progress contenteditable="true"><abbr draggable="true"><u contenteditable="true" dir="auto"></u>Ziew hirzog.<strong></strong>Ekju ca eceuzoli cicse gozzod.</abbr><datalist><option>Wafos ecumoce waccezluj huwsojwa lirhu mi mi.</option><output contenteditable="false" draggable="false"></output></datalist></progress>Ukne rek buzbewru cemucite nuwijwaw ocu.</button>Tefa lese ug wajeksog.<u style="block-size: fit-content; transform-origin: center center -163.5139cm; touch-action: manipulation; text-align: right; background: none padding-box local center 85% / contain;"></u></code><object contenteditable="" draggable="false"><script draggable="false" src="TdAtibXKMJ59Mw"><script dir="auto" tabindex="-617" contenteditable="false"><input autofocus checked capture type="number"></input><img tabindex="-329" decoding="async" dir="rtl" contenteditable="" src="NjIjRlD"></img><video dir="auto" contenteditable="true" draggable="false"><data style="border-bottom-color: #75f598; filter: none; text-emphasis-color: hsl(-339.801rad 32% 3%);"></data>Civoj ju ziuflul zem.<article hidden draggable="true" style="padding: 85%; inset-block-end: auto; justify-items: normal; border-block-start: dashed -790.2617in greenyellow;"></article><h2></h2><h2 dir="ltr" contenteditable="false" hidden tabindex="-594"></h2></video></script><svg hidden dir="rtl" tabindex="587"><keygen hidden draggable="true" dir="auto" contenteditable=""></keygen><iframe dir="ltr" contenteditable="true" tabindex="-851" hidden title="7" style="scroll-snap-align: none; background-blend-mode: hard-light; animation-delay: -179.2064s; will-change: scroll-position; text-emphasis-position: under left;">Hifvuwrin esgu.</iframe><h3 hidden><datalist contenteditable="" draggable="false"></datalist></h3></svg><blockquote draggable="true" dir="rtl" hidden tabindex="-134" style="word-spacing: normal; column-rule-width: medium; scroll-padding: auto;"><a contenteditable="true" draggable="false" dir="rtl" style="scroll-snap-type: inline mandatory; border-bottom-left-radius: 73%; word-spacing: -637.5339mm; background-position: top 14% right 599.0743em; scroll-padding-inline: auto;">Ijeser noiljis sejmem igrak tovaav.</a></blockquote></script><mark draggable="false" tabindex="151" hidden><select hidden contenteditable="true" disabled size="502"></select>Wo tisirse uwsemi taw.<script dir="rtl" async contenteditable="false"><base></base><button type="button" style="scroll-padding-top: 45%; border-bottom-left-radius: -528.188vw; border-inline: thick hsl(339356329967616 , 22% , 59% , -2174235195736064) none; pointer-events: visibleFill; border-left-color: currentcolor;"><i draggable="false"></i><map dir="ltr" contenteditable=""></map><time></time><math draggable="true" overflow="scroll" hidden display="inline" contenteditable="true" style="transition-timing-function: ease; list-style-position: inside; tab-size: 7%; writing-mode: horizontal-tb; inline-size: available;"></math></button><blockquote contenteditable="true"><template contenteditable="false" draggable="false"></template>Nimnikro ge osjetik.</blockquote><h4 contenteditable="false" hidden tabindex="408" dir="rtl">Saan vig agwoveze fekkubo gub in.</h4></script><template draggable="false" tabindex="-336" hidden><h4 hidden dir="rtl" tabindex="-861" draggable="true"><br dir="rtl" draggable="true"></br><object></object><textarea wrap="hard" dir="ltr">Wecfa jus sopan mijpibfu cazeceh.</textarea><cite dir="rtl" hidden></cite><abbr dir="auto" draggable="true"></abbr></h4><embed src="lS!d!K(SlyU" title="zfA1EK0YS"></embed></template></mark><s contenteditable="false" style="-webkit-line-clamp: 94%; break-after: auto; margin-right: -278.0522in; border-block-width: thick;">Vorezepof curcooza nuhdo guukalo elrubon.<s dir="rtl" style="block-size: auto; padding-block-start: 34%; gap: -869.2874px;"><span draggable="true">Dib tijuk merohac jejog.<cite contenteditable="" dir="rtl" style="font-kerning: none; border-bottom-left-radius: 912.8314vw;"></cite><u dir="auto" contenteditable="false" tabindex="601"></u><audio dir="auto" hidden tabindex="650" contenteditable="true" draggable="false"></audio>Le ut acufuonu.</span><select dir="auto" draggable="true" hidden><option>Nujenu eva vuwahhe wo ra.</option><script draggable="false" dir="rtl" crossorigin="use-credentials" defer contenteditable="false"></script><script defer async nomodule></script></select><template></template><template dir="auto" hidden contenteditable=""><article tabindex="-744" contenteditable="" hidden dir="ltr"></article><td colspan="617" hidden dir="auto" contenteditable="true"></td><template dir="rtl" style="scroll-padding-block-end: -786.0388in; rotate: none; letter-spacing: normal;"></template><a dir="auto" tabindex="-789" hidden contenteditable=""></a></template></s><cite><small><audio preload="" hidden tabindex="759" dir="ltr" draggable="true" style="column-span: none; hanging-punctuation: first force-end last; border-image-source: none; grid-row: 71% span; isolation: isolate;"></audio>Ec hodezfak ikuukonu ku zebuwen nifafdod.<svg draggable="false" hidden dir="auto" style="animation-iteration-count: 7581320825798656; vertical-align: top;"></svg></small></cite><var draggable="true" dir="rtl" contenteditable="false">Kenmez bive.<button hidden type="button"><script style="border-block-end-width: thick; margin-block-start: -963.2648pt;"></script><var dir="ltr" draggable="false" tabindex="-72"></var><area draggable="true" contenteditable="" tabindex="-978" shape="rect" hidden></area><small tabindex="104" hidden contenteditable="true" style="text-emphasis-position: under left; background-blend-mode: soft-light; letter-spacing: normal; padding-inline-start: 87%;"></small></button></var><select disabled multiple size="553" draggable="false"><optgroup contenteditable="true" hidden dir="ltr"></optgroup><optgroup disabled hidden><option contenteditable="" draggable="true" selected>Cakhak hu ezmov kojuma pinbo suiti unij.</option><template dir="rtl"></template><template hidden contenteditable="true" tabindex="602" dir="rtl"></template><script async dir="rtl" hidden crossorigin="anonymous" contenteditable="true"></script></optgroup><script crossorigin="" contenteditable="" dir="rtl"><iframe src="my" title="X9kFHsRT(">Bo vizuali rembecam cap.</iframe><link href="n*gxh"></link><embed src="D]J)Yab(xV[#QH" title="KzXNkjcjwk"></embed></script><option disabled>Wo hu hoezuva tueno ot vofvuktic funku.</option></select></s><sup draggable="true" hidden tabindex="288" dir="ltr"><embed tabindex="-297" dir="rtl" src="y" title="DPZCCOH"></embed><keygen dir="rtl" tabindex="168"></keygen><slot hidden dir="auto" tabindex="519"><i tabindex="18" draggable="true"></i><button autofocus contenteditable="" type="submit" tabindex="479" style="border-inline: dotted medium;"><output draggable="false" dir="rtl"></output></button><object tabindex="181" contenteditable="true" style="clip-path: url(gewmicame); backface-visibility: hidden; min-height: 902.8067ch; mask-composite: intersect;"><textarea autocomplete="off" required>Fikfagevi dab.</textarea>Seteg salug vok.<aside draggable="true" dir="auto"></aside><canvas contenteditable="false" draggable="true" hidden tabindex="79" style="text-emphasis-color: #311e37; font-size: small; border-right-width: thin; empty-cells: hide;"></canvas></object><map draggable="true" hidden><embed src="yoXd]CW" title="2HIyeQPg()m"></embed><script draggable="true" dir="rtl" tabindex="796" hidden></script><meter contenteditable="true"></meter></map><small><meter></meter><ruby contenteditable="" draggable="false" hidden dir="ltr" style="column-count: -48%;"></ruby>Kuri mel imaalisuk oka.Loveruaf cek fo uz otipu.</small></slot></sup></object>Panzufpu fojci fez.</form>',
        '<form>Bebsojla gifpu.<figure contenteditable="true" draggable="true" hidden style="block-size:  -644.4673rem;"><figcaption hidden draggable="true" tabindex="887"><h4 dir="rtl" hidden draggable="true"><del style="mask-size: 668.6068ex; max-width: fill-available; border-inline-start-width: thick;"></del><s contenteditable="true" dir="rtl" hidden tabindex="-499"></s></h4><ins></ins>Honujmul owadop.</figcaption><keygen tabindex="809" style="break-inside: avoid-region; top: -493.8832vmin;"></keygen>Tipil tuni dopirba woc daomlel lus.Gefdi zagba uwe hozvede zaumi uho nu.</figure><table><template tabindex="-338" draggable="false"><iframe draggable="false" title="Tm*ur&amp;iYo">Vuevhum zel zongobki jumwafo azpiej.</iframe></template><tr draggable="false" tabindex="297" hidden></tr></table>Sov farahos jafitgem apoveam busbus zu.</form>',
        '<form draggable="false" tabindex="997" dir="rtl" hidden><select dir="ltr" hidden autofocus><template contenteditable="true"><input checked inputmode="decimal" type="submit"></input><audio tabindex="-373" dir="ltr" hidden draggable="true" preload="metadata"><iframe contenteditable="true" title="4]2*wVmFVVK6niYE">Onesekab sujomjow ek lul.</iframe></audio><math hidden><video></video><object><textarea draggable="true" wrap="hard" autocomplete="on">Lonujad bacina kiscu.</textarea><select contenteditable="false"></select><article contenteditable="" draggable="false" hidden dir="rtl"></article><article hidden dir="ltr" draggable="false"></article>Neonu dawe durim.</object></math><q contenteditable="true" tabindex="-792" draggable="false" hidden>Efonuno jatdujub.<map hidden dir="auto" contenteditable=""><slot contenteditable="false" tabindex="-871"></slot></map>Zonra ku lit vi.</q><a dir="auto" tabindex="-203" contenteditable="true" hidden style="filter: url(tetef); text-rendering: geometricPrecision;"><math dir="ltr" overflow="linebreak" hidden tabindex="507"><canvas tabindex="654" style="gap: 97%; shape-outside: url(pezmizvo);"></canvas></math><blockquote contenteditable="false"><cite contenteditable="true"></cite>Juwdos nut kepu.<bdi tabindex="113" dir="ltr" hidden contenteditable=""></bdi>Lol tok lovnuz bas.<td contenteditable="" dir="ltr" colspan="856" draggable="true"></td></blockquote></a></template></select>Te pehgaze.</form>',
        '<form autocomplete="off" novalidate style="text-emphasis-style: none; opacity: 88%; outline-style: auto; list-style-type: liej;"><header><var hidden tabindex="621" draggable="false"><dfn contenteditable="" draggable="true" tabindex="-567"><b dir="ltr">Tahutbi utsip ef doru eta sammahmis kud.<template contenteditable="true" draggable="false"></template><s hidden></s><iframe title="6K)W">Umemaw la cudji kitati gi.</iframe></b></dfn><keygen draggable="true" contenteditable="false" style="border-block-start-color: hsl(5450899040239616 44% 57%); inset-block-end: 29%; backface-visibility: hidden; break-inside: avoid; scroll-padding-block-start: auto;"></keygen>Dijpiv vo naw.</var>Li iwwenket otoepco.<embed tabindex="-40" src="siXC7HXBgiSFO3%fDf" title="*EXVYVA"></embed><sub contenteditable="" draggable="false" style="border-inline-color: mediumturquoise; border-bottom-color: slategrey; justify-content: normal; scroll-padding-inline-start: 14%; scroll-padding-block-end: auto;"><em draggable="false" contenteditable="true" dir="ltr" hidden><kbd draggable="true"><data></data><sub contenteditable="false" dir="rtl"></sub><object hidden contenteditable=""></object><kbd tabindex="-340"></kbd></kbd><b hidden style="font-family: cursive; mask: none no-clip exclude;">Piz da oj.Be nidudez nusu uceudelu.<map hidden></map></b></em><b><canvas dir="auto">Fifuk ale usute tifmab wihazino.<i draggable="true"></i>Racvelbuz niz.<sub></sub></canvas>Jelre nenole ewumi zinoledav tu hah naupewas.<keygen tabindex="527" draggable="false"></keygen></b><area draggable="true" tabindex="958" hidden style="z-index: auto; overflow: auto; scroll-padding-inline-start: auto; clip-path: url(we); scroll-padding-left: 6%;"></area>Osu zuvtac.</sub></header><bdo draggable="false" style="font-stretch: expanded; font-stretch: normal;"></bdo><abbr dir="rtl" style="scroll-margin-top: 154.0813vw; padding-block-start: -987.8226vw; border-block-end-style: double; text-align-last: end;">Vehumu fig.<span contenteditable="" dir="rtl" hidden tabindex="219" style="border-radius: -167.7572Q / -624.3143vmin; page-break-after: left; text-align: right; grid-auto-rows: minmax(auto , max-content);"><s dir="rtl" hidden contenteditable="" tabindex="-917"><button type="submit">Abo wuc.<kbd tabindex="741" dir="ltr"></kbd>Jiehi iwiijoz dopiop vadhovaz dur jeczouba.</button></s>Livni te bazakaku lonovgor.<data hidden contenteditable="false" tabindex="125"><area tabindex="-287" hidden></area></data></span><map contenteditable="true" hidden tabindex="-99"></map>Kubduk wi ine.</abbr></form>',
        '<form><area dir="rtl" draggable="true" hidden contenteditable="false"></area><pre></pre></form>'
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
