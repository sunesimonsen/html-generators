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
                style:
                  "column-rule: hidden double double medium thin 884.4036vw hwb(-4665270404644864 12% none / -5724325764136960);"
              },
              children: [
                { type: "text", value: "Pe gazziw onokan cuh zeenejom ju." }
              ]
            }
          ]
        },
        {
          type: "tag",
          tag: "body",
          attributes: { style: "word-break: break-all;" },
          children: [
            {
              type: "text",
              value: "Wot cujduvtih le votevned esohogbi dadeip."
            },
            {
              type: "tag",
              tag: "audio",
              attributes: { dir: "ltr", draggable: "false" },
              children: [
                {
                  type: "tag",
                  tag: "aside",
                  attributes: {
                    contenteditable: "",
                    hidden: null,
                    draggable: "false",
                    style:
                      "grid-template-rows: subgrid; gap: -755.8241vmin; counter-increment: none; clip-path: url(luh); align-content: normal;"
                  },
                  children: [
                    {
                      type: "tag",
                      tag: "del",
                      attributes: {
                        contenteditable: "false",
                        dir: "rtl",
                        tabindex: "-64",
                        hidden: null
                      },
                      children: [
                        { type: "text", value: "Beip fil rencoj wu tumit." },
                        { type: "tag", tag: "q", attributes: {}, children: [] },
                        { type: "text", value: "Gob kofwihep." },
                        {
                          type: "tag",
                          tag: "address",
                          attributes: {
                            style:
                              "overflow-y: hidden; line-height: 13%; overflow-anchor: auto; border-bottom: currentcolor; break-before: all;"
                          },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "var",
                          attributes: {
                            tabindex: "-997",
                            draggable: "false",
                            dir: "auto",
                            hidden: null
                          },
                          children: []
                        }
                      ]
                    },
                    {
                      type: "text",
                      value: "Kewo eviipuod vonlavub ki nozgo pe los."
                    },
                    {
                      type: "tag",
                      tag: "div",
                      attributes: {
                        hidden: null,
                        draggable: "true",
                        contenteditable: "true",
                        dir: "rtl"
                      },
                      children: [
                        { type: "text", value: "Miwtitpo pufwi bop uw juvza." }
                      ]
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "b",
                  attributes: {
                    tabindex: "964",
                    dir: "auto",
                    hidden: null,
                    draggable: "true"
                  },
                  children: [
                    {
                      type: "text",
                      value: "Pa muvona to fejuhera lihakhup patofcok ivbedin."
                    }
                  ]
                },
                { type: "text", value: "Na junbeb jem ru gunavgi wodfuz." }
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
      attributes: {
        lang: "*Xcd0R&]nPQJ^xciZ2wo",
        style:
          "grid-area: span epa / pawij; grid-row-end: amape; page-break-after: right; text-decoration-color: lch(2% 8833203825541120 57.8743grad / none); z-index: auto;"
      },
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
              children: [{ type: "text", value: "Jukdij wogdi juwe jaubi mo." }]
            }
          ]
        },
        {
          type: "tag",
          tag: "body",
          attributes: {
            style: "transition-duration: 595.9787s; break-inside: auto;"
          },
          children: []
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
      '<html hidden lang="25SSlGlheH#ySk0Wbe)"><head><title dir="ltr" draggable="true" tabindex="612" style="column-rule: hidden double double medium thin 884.4036vw hwb(-4665270404644864 12% none / -5724325764136960);">Pe gazziw onokan cuh zeenejom ju.</title></head><body style="word-break: break-all;">Wot cujduvtih le votevned esohogbi dadeip.<audio dir="ltr" draggable="false"><aside contenteditable="" hidden draggable="false" style="grid-template-rows: subgrid; gap: -755.8241vmin; counter-increment: none; clip-path: url(luh); align-content: normal;"><del contenteditable="false" dir="rtl" tabindex="-64" hidden>Beip fil rencoj wu tumit.<q></q>Gob kofwihep.<address style="overflow-y: hidden; line-height: 13%; overflow-anchor: auto; border-bottom: currentcolor; break-before: all;"></address><var tabindex="-997" draggable="false" dir="auto" hidden></var></del>Kewo eviipuod vonlavub ki nozgo pe los.<div hidden draggable="true" contenteditable="true" dir="rtl">Miwtitpo pufwi bop uw juvza.</div></aside><b tabindex="964" dir="auto" hidden draggable="true">Pa muvona to fejuhera lihakhup patofcok ivbedin.</b>Na junbeb jem ru gunavgi wodfuz.</audio></body></html>',
      '<html hidden dir="ltr" lang="3fsbn)f9F"><head contenteditable="" dir="auto" tabindex="-660" draggable="true"><title contenteditable="false" tabindex="-14" style="backface-visibility: visible;">Gibzinef tetu cejtu emofoc obututven nuawo upuge.</title><style>.to { background-repeat: repeat-x; scroll-padding-left: -478.611ex; }\n:lang(pi) { flex-flow: wrap-reverse column-reverse; margin-inline-end: 57%; scroll-margin-inline: 981.0103rem -174.7646cm; font-language-override: normal; }\n:not(* | pitkedeb:oru ( from-image  ) ::adapucrak:udzupduc ( auto ) >:huwsojwa ::kak ( repeat-y ):tos ( auto )) { input-security: auto; tab-size: -127.3283vw; }\n:target { user-select: none; counter-set: none; list-style-type: none; text-overflow: clip; margin-right: auto; }\n, { mix-blend-mode: darken; }\n::slotted(ikdoja | lejaj . jek ::awmonoka:bi ( 970.5722cm )) { perspective: none; user-select: all; mask-border-outset: -563973896273920; }\n#jacu { scroll-margin-inline-end: 999.4354rem; writing-mode: sideways-lr; mask-composite: intersect; place-items: stretch; }\n:indeterminate { box-sizing: border-box; }\n</style><script draggable="false" src="http://fibzo.mt/afuta" defer></script><base dir="rtl" draggable="true" tabindex="-905" hidden></base><style draggable="true" dir="rtl">@keyframes zenatij {\n  to {\n  margin-block-end: 59%;\n}\n}\n@font-face {\n  size-adjust:4% ; font-weight:normal ;\n}\n@charset "GOST_19768-74" ;\n:fullscreen { direction: rtl; animation-timing-function: step-end; border-block: rgb(5516031866961920 -7484676268621824 4472248983355392 1752406123610112 -5683164093612032 / -278809056116736) thick; }\n:last-of-type { perspective: none; border-image-repeat: repeat; padding-block-end: 51%; perspective: -785.656vmax; }\n:hover { font-variant-alternates: normal; clip: auto; border-inline-start-color: hsla(-6849756470968320 89% 59%); }\n:optional { offset-rotate: auto; margin-block-end: 75%; mask-image: image-set(paint(pu) type(\'fe\') 487.8098dpcm); scroll-padding-top: auto; }\n:empty { background-blend-mode: saturation; }\n* { animation: \'fo\' paused 113.5258s reverse step-start -5413201948704768; justify-self: first baseline; quotes: none; }\n:not([ ruko ] ::nin ( none ):osofa ( 482.2413rem ) | * #tiw ::noiljis ( italic ):igrak) { display: contents; border-end-start-radius: 62%; inset-inline-start: auto; mask-border-slice: 75% -4530816952565760 14% 1259020627214336 fill; inset-inline-end: auto; }\n:visited + :future ~ :indeterminate { font-variant-alternates: character-variant(vimhij) stylistic(kigmiop) styleset(pahas) ornaments(ruawatas) historical-forms swash(co); border-block-start: rgba(16% 84% 18% 12% 84% / -4910803924811776) dashed thin; scroll-margin-block-end: -990.736px; empty-cells: show; }\n:focus-visible { text-rendering: geometricPrecision; hyphens: manual; page-break-after: verso; mask-image: none; text-justify: auto; }\n: { border-inline-style: outset; font: small-caption; print-color-adjust: exact; }\ndd { line-break: auto; transition-timing-function: linear; gap: normal 6%; font-variant-alternates: historical-forms swash(riczo) ornaments(nikro); }\n:: + ::backdrop || ::marker { clip-path: url(abfur); shape-outside: border-box; }\n:optional { mask-position: 305.4922pt; }\n:read-write { bottom: auto; mask-type: alpha; scroll-padding-block-start: 14%; border-right-color: hsla(-7466814577573888 , 20% , 2%); border-inline-start-color: #b435d0; }\n</style></head><body tabindex="-825" hidden dir="rtl" contenteditable="true" style="scroll-padding-block-end: 104.0944in; grid-column-start: zodenuw;"><article><q draggable="false" dir="rtl" contenteditable="false" style="text-emphasis-color: #aee523; animation: alternate 440.4052ms none -726.2288ms linear paused backwards infinite; text-orientation: sideways;"><math dir="rtl" display="block" style="scroll-padding-inline: auto; flex-wrap: wrap-reverse;"><h4></h4><video dir="ltr"></video><img src="d!K(SlyU5Jhz"></img><u draggable="true" dir="rtl" tabindex="-76" style="-webkit-line-clamp: -46; accent-color: hsla(-726.3628turn 69% 52%); border-block-style: inset; padding-right: 76%;"></u></math>Ezepofubu coozasiw do guukalo elrubon racu.</q></article><h3 draggable="true" dir="rtl" hidden><span draggable="true">Dib tijuk merohac jejog.<cite contenteditable="" dir="rtl" style="font-synthesis: weight; transition: 758.2367s all 978.3699ms step-start;"><data style="scale: 5418185012543488 -7965198296023040; mix-blend-mode: plus-lighter; text-decoration: from-font dashed rgba(-4964037414617088 2214643028197376 -4975259551793152 4465257900670976 , 58%); scroll-snap-type: none; text-align-last: end;"></data><math></math>Ebuvuwah lawo.Cufvu eci.Sutkor egopov edfoj wudorgav ilaabakes buesiba te.</cite><u draggable="false" tabindex="-540" contenteditable="false" hidden style="column-count: auto;"><sup></sup><progress></progress><slot></slot></u><audio><object data="4Cb" hidden tabindex="-822" dir="rtl" draggable="true"></object><b hidden style="border-inline-end: solid; grid-template-areas: \'areec\'; right: auto;"></b>Oza wu.<svg draggable="false" hidden dir="ltr" tabindex="-984"></svg></audio>Zebuwen nifafdod embotja upanibsa hinhi ti so.</span><select hidden required><script nomodule src="http://fo.bd/dowsucom" defer integrity="pZzP5a*yfM" style="flex-grow: -8409065331884032; scroll-padding: auto; font-variant-alternates: normal; white-space: pre-wrap; overflow-x: scroll;"></script><script defer src="http://tuttuco.tn/sutpo"></script><optgroup></optgroup><script tabindex="-329" contenteditable="true" crossorigin="anonymous" nomodule>console.log("hello")</script><script integrity="O[KWgoD" tabindex="-72" async contenteditable="" hidden>console.log("hello")</script></select><template draggable="true" contenteditable="false" tabindex="425" dir="rtl"><section tabindex="-725" draggable="true"><slot tabindex="405" draggable="false" contenteditable=""></slot><em tabindex="181"></em><embed draggable="true" src="DG" title="AXRhmWCx)D"></embed><datalist contenteditable="" dir="rtl" hidden></datalist><img draggable="true" dir="auto" src="FHsRT(0smAmCcS2AX"></img></section><a tabindex="869" draggable="true" hidden></a></template><template><canvas contenteditable="true" hidden></canvas><embed contenteditable="" dir="ltr" src="V[#QHsMMKzXNkjcjwk0*" title="m)ng2XlGr#)nsZW"></embed><base dir="rtl" draggable="false" contenteditable="false" hidden></base><object tabindex="677" contenteditable="" data="9DXWQhzWl]Sdx[#E]#3" style="column-gap: 40%; position: relative; outline-style: auto;"><section hidden contenteditable="true"></section><aside hidden dir="rtl"></aside><textarea cols="952" hidden>Kaj ri nok asoomagib cuzvuca lafihih otrihto.</textarea><aside dir="ltr" tabindex="181" draggable="false"></aside><embed hidden contenteditable="true" draggable="true" src=")FJg78" title="MUi(aSV"></embed></object><embed hidden dir="ltr" src="!^%4APrs5" title="8!FXX" style="min-inline-size: min-content; mask-image: none; page-break-after: verso; image-rendering: auto;"></embed></template></h3></body></html>',
      '<html lang="xVr"><head dir="rtl"><title contenteditable="false" hidden>Wobuj dos igoja sakle.</title></head><body dir="rtl" style="list-style: symbols() outside none; border-top-left-radius: -619.3503Q; background-attachment: fixed;"><video draggable="false" contenteditable=""><aside contenteditable="false" dir="rtl" tabindex="382" style="visibility: visible; word-wrap: break-word;">Amo cad je dehim mel imaalisuk oka.<keygen tabindex="868" draggable="false" style="border-right-width: thick; counter-reset: kusowsal 85; math-style: normal; math-style: compact;"></keygen><dl contenteditable="false" dir="ltr" hidden draggable="false"></dl><script>console.log("hello")</script></aside><header contenteditable="false" tabindex="122"><table dir="ltr" contenteditable=""><colgroup tabindex="755" contenteditable="true" dir="auto"></colgroup><script draggable="false" dir="ltr" src="http://hughef.mu/ekoav"></script><tfoot draggable="false" tabindex="-482" style="font-stretch: 25%; gap: normal; scroll-behavior: auto; place-self: auto normal;"></tfoot></table></header><img draggable="true" crossorigin="" decoding="sync" dir="rtl" src="K!thlKjl@ys2W"></img><select disabled hidden style="outline: thin; break-after: all; text-underline-position: auto; text-emphasis-color: lab(2870665011003392 -898478347649024 2052444938829824 / 10%);"><template style="border-block-color: #cd586d rgba(51% 74% 39% 35% 46%);"><h6 hidden tabindex="-20" style="user-select: all; scrollbar-color: lch(-5301866875322368 25% none / none) lab(97% 12% 98%); mask-size: cover;"></h6><section tabindex="-338" draggable="false"></section><cite></cite><h2 draggable="false" dir="ltr"></h2><h1></h1></template><script nomodule contenteditable="" src="http://zel.ws/wisvaki"></script><optgroup disabled dir="ltr" hidden tabindex="-131"></optgroup><script draggable="true" tabindex="-161" integrity="8s21$]uhoD$7">console.log("hello")</script></select></video><blockquote hidden draggable="true"><main hidden tabindex="-202" contenteditable="false" dir="auto"><h5><script dir="rtl" hidden async style="font-style: normal; mask-image: paint(hir , stretch); mask-repeat: repeat-y; animation-direction: reverse;" src="http://co.gd/ureamila"></script><code></code></h5><figure dir="rtl" contenteditable="false"><figcaption draggable="false" hidden tabindex="951"></figcaption><fieldset draggable="true" tabindex="832" dir="ltr"><legend hidden></legend></fieldset>Huelpu olfoc ilu.<ol reversed tabindex="131"></ol></figure><textarea minlength="249" cols="272" rows="760" contenteditable="true" required>Pu co femmocu.</textarea><video contenteditable="false"><link href="6tU2K[[skW1ooPzIw"></link><select size="88" hidden dir="auto"></select><noscript tabindex="543" contenteditable="false"></noscript></video></main><a hidden contenteditable="true"></a></blockquote></body></html>',
      '<html lang="!pXhI@EIW3Ove6Li7AH" style="scrollbar-gutter: auto; flex: none; border-inline-style: ridge; place-content: normal;"><head><title tabindex="-560">Cal jikac nukdo gefdej sepapgu.</title></head><body draggable="false" tabindex="166" contenteditable="true" hidden><title draggable="true" contenteditable="true" dir="auto" hidden>No cuvas uzpu woh izi daram.</title>Ifawuku oma.</body></html>',
      '<html hidden dir="auto" draggable="false" lang="AsK89$yMm"><head><title contenteditable="" hidden>Sesalu tazoke cofuhuv co emele.</title></head><body style="column-width: 518.4975vmin; text-emphasis-position: left under; outline-offset: -479.4263Q; text-emphasis-style: \'fak\';"><h3 contenteditable="" dir="rtl"></h3><h4><video tabindex="727" preload="none" hidden contenteditable="true"><svg contenteditable="" tabindex="469">Ivu seufore.<h2 hidden dir="ltr" contenteditable="false" draggable="false"></h2><h5 hidden contenteditable="true"></h5><blockquote contenteditable="false" draggable="false" hidden style="transition-duration: -949.7161s; overscroll-behavior: none; content-visibility: hidden; hyphenate-character: \'idfo\'; transform-style: preserve-3d;"></blockquote></svg>Homdeal jugnozjok haj sa heulni noji.<br draggable="false"></br></video>Cebucki semebjet.<em>Wazfu me.<template hidden dir="auto"><em hidden contenteditable="" draggable="false" dir="ltr"></em><nav></nav><title dir="rtl" contenteditable="true" tabindex="-92">Ciclomop lunbipod iftas cumfubmih cicu.</title></template><template><img hidden crossorigin="" ismap draggable="false" src="Hq7C8H@Q^4Fhx$Ra"></img><section contenteditable="true" draggable="false" dir="ltr" style="offset-path: none; text-decoration-skip-ink: none; transform-style: flat;"></section>Tala sevurev uni faz burud.</template></em><sub contenteditable=""></sub></h4></body></html>'
    ]);
  });

  describe("when given a tag", () => {
    it("generates HTML strings starting with that tag", () => {
      expect(htmlString({ tag: "form" }).take(5), "to equal snapshot", [
        '<form method="get" novalidate style="background-clip: content-box;"><p dir="rtl" contenteditable="" hidden tabindex="525"></p>Mabuj do lisib.<sub hidden draggable="true" contenteditable="false" tabindex="966">Va ebik vo pe gazziw onokan.Uhlog sezsi ju.</sub></form>',
        '<form style="word-break: break-all;">Wot cujduvtih le votevned esohogbi dadeip.Pow si gewse iwahoil.</form>',
        '<form dir="ltr" novalidate draggable="false" tabindex="-318" style="border-top-color: hwb(none none 51% / 27%); filter: none;">Mechug poh ub umi je.</form>',
        '<form autocomplete="off" dir="ltr" tabindex="672" contenteditable="false" draggable="true"><h4 hidden tabindex="90"></h4></form>',
        '<form tabindex="-696"><del hidden style="transform: skewY(0);"><bdo tabindex="-997" draggable="false" dir="auto" hidden><cite hidden tabindex="899" contenteditable="true" dir="rtl" style="border-block-end-width: thick; column-count: 10;"><q></q>Goto vendijjeg ukiipi.</cite>Tiref pen taf nuhijoow ru uvake.<script nomodule>console.log("hello")</script><svg contenteditable="false" dir="auto"><audio><h6></h6><h5 draggable="true"></h5><nav tabindex="-511" dir="rtl"></nav></audio><pre></pre><meta dir="rtl" hidden contenteditable=""></meta></svg><small contenteditable="" dir="rtl" style="width: 59%; shape-image-threshold: -8307614945378304; scroll-padding: auto;"><math contenteditable="false" display="inline" style="border-color: ThreeDDarkShadow rgb(-1197583909257216 -1099393134493696 4396281518620672) hsl(-1291371583373312 69% 5%) InactiveBorder; border-width: -634.268Q thick medium; line-height: 108.7081mm; max-height: fit-content;"></math><del draggable="true" style="border-bottom-left-radius: -816.4019cap; border-block-end-color: currentcolor; overscroll-behavior-x: contain; animation: infinite backwards -478.2128ms ease-out 78.7549s normal none;">Talruw azifa ga bavec lubet pa.<q hidden dir="ltr" tabindex="418"></q><object dir="auto" draggable="false" hidden></object></del><progress dir="auto"><noscript hidden tabindex="-378"></noscript>Kedebuw leorusi nase gozzod.</progress></small></bdo><map><base></base><script nomodule async hidden src="http://owsojwa.kg/rohudi"></script></map><dl dir="ltr" contenteditable="false" style="border-bottom-color: navajowhite; border-top-width: thin; input-security: auto; tab-size: -127.3283vw;"><dt><time dir="rtl" draggable="false" contenteditable="true">Ti hice ulbihmu.Facuwmon mawema me puzlilez sucbija.<audio style="overflow-y: auto; z-index: 83; margin-right: 73%; transform-origin: -741.6812ex right -542.7144vmax; outline-width: medium;"></audio><label contenteditable=""></label><i draggable="false" hidden></i></time><b draggable="false" contenteditable="" tabindex="-28" dir="auto"><strong dir="rtl" draggable="true" tabindex="-905" hidden></strong><br draggable="false" hidden></br>Adieloci tij ti ci di fo gomu.</b><s draggable="false" tabindex="-224" hidden dir="auto" style="print-color-adjust: economy; animation-iteration-count: 620118669262848;">Kac topuoj ju ziuflul zem.<br hidden draggable="true" style="overflow-wrap: anywhere; letter-spacing: -939.0557ch; shape-outside: circle(at left top); border-bottom-left-radius: 59%;"></br></s>Apparon sinle ipsej kowba.Hi gah cucammo.</dt><template tabindex="918" contenteditable="" draggable="false" hidden><button autofocus type="submit" disabled>Toh paw rile raufe dedbodnin.<script integrity="*pnCe&amp;21Qd!5k96" hidden src="http://fat.cx/rujin"></script>Niriljis sejmem igrak tovaav.<datalist draggable="false" tabindex="151" hidden></datalist></button></template><template hidden></template><div><dd hidden dir="ltr" contenteditable="true" tabindex="457"><map hidden tabindex="694"></map><del draggable="true"></del></dd><dd tabindex="-462" dir="auto" hidden contenteditable="true" style="mask-image: paint(sucorobop); resize: vertical; math-style: normal; block-size: auto; scroll-padding-inline-start: -773.5239ex;"><code contenteditable="false"></code><th rowspan="864" contenteditable="false" hidden dir="rtl" scope="rowgroup"></th><figure tabindex="-913" dir="ltr" hidden style="isolation: auto; animation-name: none, go, \'riciz\', none, none; contain: none;"></figure>Ije tanu cesnim piro.<h6 style="empty-cells: hide;"></h6></dd><dt dir="rtl" tabindex="-801" contenteditable="false" style="padding-block-start: 2%; margin-left: -537.8504em; outline-width: -791.7829ic; scroll-margin-block-start: -642.9107vmin; opacity: -7215822481129472;"><script tabindex="-324" style="object-fit: fill;">console.log("hello")</script><sub contenteditable="true" tabindex="-704" hidden dir="auto"></sub><input autofocus type="email"></input><button draggable="false" type="submit"></button></dt></div></dl><cite dir="rtl" tabindex="294" draggable="false">Perop haeku ifo buw.<object contenteditable="true" tabindex="-652" draggable="false">Ig senvifovi.</object><textarea autofocus readonly>Orjon moodoge jan.</textarea><cite contenteditable="" hidden dir="rtl" draggable="false"><b hidden draggable="true" style="block-size: auto; unicode-bidi: embed; mask-mode: luminance; border-block-end: InactiveBorder double medium; scroll-margin-inline: 317.5667rem 384.5531px;">Ufinuh wo od otzuel epa lenpa.<q hidden draggable="true" dir="ltr" contenteditable="true"></q><wbr draggable="false" hidden></wbr><ruby draggable="true" tabindex="-870" hidden contenteditable="" style="border-inline-start-style: outset; scroll-margin-block-start: 995.8683cap; flex-grow: 4813236423622656; border-block-style: solid; min-width: max-content;"></ruby>Dijro baleeh sabucic vaoz hanuvoni ufocekepe pagge.</b><ins contenteditable=""><strong contenteditable="true" dir="auto"></strong><video tabindex="34" draggable="false" contenteditable="true" dir="auto" hidden style="text-align-last: end; clip-path: url(eva); scroll-margin-inline-start: 310.484vmin;"></video><math contenteditable="false" dir="rtl" draggable="true" display="block"></math><wbr dir="auto" contenteditable="false" draggable="true" tabindex="-883"></wbr></ins></cite></cite></del><keygen tabindex="544" hidden></keygen>Povhudfoj wudorgav ilaabakes.</form>'
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
