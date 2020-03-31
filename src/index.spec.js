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
                style: "column-rule: none thick #331dd2;"
              },
              children: [
                { type: "text", value: "Navvalbu rujbave dolbaw gokim sab." }
              ]
            }
          ]
        },
        {
          type: "tag",
          tag: "body",
          attributes: {
            tabindex: "927",
            hidden: null,
            dir: "auto",
            draggable: "false"
          },
          children: []
        }
      ]
    });
  });

  it("shrinks towards minimum constraints", () => {
    expect(html, "to shrink towards", {
      type: "tag",
      tag: "html",
      attributes: { lang: "R3C" },
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
                  value: "Ba vum uwizozeje ga."
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
      '<html hidden lang="25SSlGlheH#ySk0Wbe)"><head><title dir="ltr" draggable="true" tabindex="612" style="column-rule: none thick #331dd2;">Navvalbu rujbave dolbaw gokim sab.</title></head><body tabindex="927" hidden dir="auto" draggable="false"></body></html>',
      '<html contenteditable="false" draggable="true" lang="N9RA)uSOukv7mfb"><head contenteditable=""><title hidden draggable="true" tabindex="358" style="shape-margin: 62%; grid-template: none; border-block-end-style: none; font-language-override: normal; outline-width: thin;">Junla esohogbi dadeip riide rohu jod.</title></head><body tabindex="-872" draggable="false" hidden contenteditable="" style="text-decoration-style: wavy; margin-bottom: 614.8804cm; text-decoration-thickness: from-font;"><base dir="rtl"></base></body></html>',
      '<html lang="@wamLNEJqZitys*mx"><head contenteditable="false"><title tabindex="-267">Je hodpizhir leg liptemdov.</title><base></base><style contenteditable="" draggable="false">:left { border-top: outset medium; font-variant-alternates: normal; list-style: url(guireva) none outside; margin-right: 53%; break-inside: avoid; }\n::slotted(: ipaje ( none ) ::ikotucfow ( luminance ):du ( fill-box, fill-box, no-clip, stroke-box, stroke-box )) { border-top: rgb(49%); border-inline-start: inset midnightblue thin; mask-border-outset: -7319704678957056; letter-spacing: normal; offset: polygon(evenodd , 35% 65%, 67% 728.3352em, 444.9043pt 144.0084ch) view-box 94%; }\n::placeholder { text-orientation: sideways; font-kerning: none; }\ntt { display: table-column; translate: 99% -411.1022in; border-left-color: currentcolor; clear: left; inset-block-start: -254.6263px; }\n:hover { scroll-padding-left: 57%; background-size: 67%; word-spacing: normal; border-image: 4337301782003712 fill / auto; padding-block: 105.64in; }\n:enabled { grid: auto-flow dense min-content / none; justify-items: unsafe left; background-size: contain; font-variant-alternates: annotation(bedinbel); border-inline: #dc437a -499.4973ch; }\n#likizef { min-inline-size: max-content; border-block-style: inset; background-blend-mode: overlay; margin-block: 54%; overscroll-behavior-x: none; }\n:required > ::selection ~ ::selection { padding-block-start: -917.865vh; font-variant-caps: small-caps; grid-column: haucmor; }\n* { text-orientation: mixed; }\n:invalid { border-top-width: medium; border-block-end-color: darkgrey; }\n:optional { color-adjust: exact; transition-delay: 33.3925s; orphans: 11%; grid-column-end:  -51%; mask-border-mode: luminance; }\n:root frameset ~ , + #ku { overscroll-behavior-y: contain; inline-size: 613.826pt ; border-inline-end-style: solid; grid-column-end: 23% cejtu; justify-self: stretch; }\n::backdrop { outline: invert outset 734.3979px; offset: right url(am) 810.7013deg auto -861.2774ex; font-variation-settings: normal; }\n#vec { counter-reset: betjivo; mix-blend-mode: color; text-align-last: auto; page-break-after: avoid; }\n:valid { column-count: auto; border-inline-start: #fd91be ridge; font-weight: bold; box-shadow: 861.5147px inset ; grid-auto-rows: fit-content(74%); }\n</style><style dir="rtl" contenteditable="true" tabindex="390">@charset "JIS_Encoding" ;\n@font-face {\n  font-style:italic ; font-stretch:semi-expanded ; font-family:\'nase\' ; unicode-range:U+8db? ; src:local(duucrak), local(wafos), local(ecwemu), local(pa), url(lujaguuno) ; font-variant:none ; font-variation-settings:\'lirhu\' -3057898527653888 ; font-feature-settings:normal ; font-weight:bold ;\n}\n@charset "JIS_C6229-1984-b" ;\nhgroup { mask-border-repeat: stretch; page-break-inside: auto; quotes: none; }\n:visited { paint-order: stroke fill markers; font-variant-caps: all-small-caps; inset: -834.2174vmin; margin: -127.3283vw; }\n</style><link contenteditable="true" integrity="&amp;fsOZ)fMmUqZvH]UZRC" crossorigin="use-credentials" draggable="true" href="((e$DHhTyumnVICAqRt"></link></head><body dir="rtl" hidden tabindex="-309" draggable="false">Tukovrad lo uzlilez sucbija.<video style="overscroll-behavior: auto; margin-block-end: auto; perspective-origin: bottom 73% right 85%; font-variation-settings: normal; border-width: thin;"><iframe dir="auto" hidden contenteditable="true" tabindex="-358" title="XK">Etuna midbiapo gudbujsok dulim ikerur fiwpogna.</iframe></video><svg hidden dir="rtl" tabindex="240" contenteditable=""></svg><title contenteditable="false" draggable="false" style="overscroll-behavior-inline: none;">Pofofbu je di nef divedo vamfuj ju.</title></body></html>',
      '<html contenteditable="" draggable="false" dir="rtl" tabindex="485" lang="BNI13ecksj0Y"><head style="grid-row-start: hawe; border-inline-start-color: rgb(32% , -7400236884426752); direction: rtl; border-bottom-right-radius: 781.0546mm; mask-origin: fill-box;"><title>Zikdeh ipsej kowba le efju iv.</title><base style="animation-delay: -179.2064s; width: auto; border-bottom: outset currentcolor 634.1442vw;"></base><style draggable="true">@keyframes \'sihzef\' {\n  32% {\n  grid-auto-flow: dense; page-break-after: always; margin: 414.4602Q; quotes: none;\n}\n}\n@font-face {\n  font-feature-settings:normal ; src:url(ruko) format(\'fo\'), url(sisilaw) format(\'ukawuwge\'), url(wibzatzet) ; font-stretch:ultra-expanded ; unicode-range:U+2a0d-d854 ; font-weight:bold ; font-variation-settings:\'invu\' -865617074716672, \'luljis\' -1103477770027008, \'hewli\' 784578641920000, \'hom\' -6901351346864128, \'kosva\' -6003644927311872 ;\n}\n:target { min-height: max-content; margin-block-end: auto; text-decoration-style: dotted; scroll-behavior: smooth; border-image-source: image-set(\'zab\' 204.5446dppx); }\n:read-write { inset-inline-start: auto; place-items: stretch; scroll-padding: -242.3569vmax; grid-template-rows: none; }\n:nth-of-type(even) { scroll-margin-block-start: 79.7213em; inset-inline: -182.0897rem; right: auto; }\noptgroup { overscroll-behavior-block: none; margin-inline: auto; box-sizing: border-box; }\n:first-of-type { border-inline-start-color: Window; flex-basis: available; font-variant-east-asian: normal; height: available; transform-origin: center 10% -487.969ch; }\n:required { mask-origin: view-box; border-block-start-color: #eb333b; overscroll-behavior-inline: auto; text-rendering: auto; padding-block: 15%; }\n:scope { font-optical-sizing: none; background-repeat: repeat-y; border: thick outset hsla(-4757494052159488 99% 16% / -6761476060610560); }\n::after { empty-cells: hide; contain: content; border-top-color: #9b9ef7; font-variant-caps: all-small-caps; background-clip: content-box; }\n:first-of-type { scroll-margin-bottom: 575.5798ch; mask-type: luminance; }\n:hover + :indeterminate { shape-margin: 93%; flex-flow: row-reverse; page-break-after: verso; }\n:lang(mt) { animation-name: si, none, none; animation-play-state: paused; }\n:first { scale: -4006633348792320; object-fit: contain; }\ndatalist { line-height: normal; white-space: break-spaces; hanging-punctuation: none; margin-top: 86%; }\n, { writing-mode: horizontal-tb; justify-items: stretch; mask-position: right; }\n:in-range { scroll-margin-block-end: 796.1086mm; border-right-color: hsla(-926.9007grad 47% 84% / 6%); }\n:enabled { padding-block-start: 55.2955pt; margin-block-end: 48%; font-variant-east-asian: normal; mask: left 65% bottom 601.4996ch / auto url(mamhevi) add luminance repeat-x view-box; }\n:nth-last-child(9n+7 of [ | sutukufek ] ::cap:ebgutir || * . len ::tek:nuhu ( contain )) { border-image: round; inset-inline: auto; text-decoration-style: dotted; scroll-margin-block-end: -635.7857pc; }\n</style><noscript contenteditable="false" draggable="false"><title contenteditable="true">Ifo buw anja tiwec fe ishoppan mijpibfu.</title></noscript></head><body contenteditable="" tabindex="-389" hidden><h6 hidden><ruby><mark contenteditable="true" dir="rtl"><label tabindex="-314" dir="auto" contenteditable="false"></label>Nifruzop vorezepof curcooza nuhdo guukalo elrubon.Dic rekmanam vespuk hibiz.Gij aculadib.</mark><rtc draggable="false" tabindex="-769"><select contenteditable=""></select><rt dir="auto"></rt></rtc><rp draggable="true"></rp><progress tabindex="-680" contenteditable="" dir="auto" hidden>Fozhi tenpagge gu lucufuonu hezir ithozi inu.<ins></ins><template dir="ltr" style="text-decoration-line: none; transition-delay: 704.3871s; animation-play-state: paused;"></template><label tabindex="-252" draggable="true" hidden></label></progress><rt contenteditable="" dir="ltr" hidden><sup draggable="false" hidden></sup><template dir="auto" hidden contenteditable="true"></template><output tabindex="189" draggable="false" contenteditable="false"></output><object contenteditable="true" tabindex="-744" style="scroll-margin-top: 112.3635vmax;"></object><s dir="rtl" contenteditable=""></s></rt></ruby><br contenteditable="true" dir="auto" hidden></br><code style="pointer-events: auto; margin-bottom: 97%;"><progress><object data="4Cb" hidden tabindex="-822" dir="rtl" draggable="true"></object><audio tabindex="-446"></audio>Difitvef zovaez biowituk numewes bu livni gedodnum.<template contenteditable="" draggable="false" hidden></template></progress><slot contenteditable="" hidden dir="rtl" style="overflow-x: hidden; grid-auto-rows: minmax(22% , min-content); border-inline-color: rgb(58%); clear: both;"><wbr tabindex="757" draggable="false"></wbr>Poc du bite roohpi lab lefugor gafdupwu.<audio></audio><input contenteditable="true" disabled checked type="checkbox"></input></slot><u draggable="true" tabindex="-644" dir="rtl" hidden style="grid-column-start: auto; padding-inline-start: 186.5573ex; opacity: -373277654515712; table-layout: fixed;"><label hidden style="scroll-behavior: auto; outline: auto; margin-top: 438.4036Q; border-top-color: hsl(949.5864grad , 65% , 8%); font-variant-east-asian: jis90;"></label></u><small dir="auto"><script integrity="MQRGc1DKS#S" src="Wu]Rv^ApCUIU92rj"></script></small><em hidden contenteditable="false" dir="rtl" tabindex="-413" style="grid-column-start: auto; border-block-end-width: thick; font-variant-ligatures: none;"><iframe src="@WayR5Sj" title="Hrr$fGmyMHyX9kFHsRT(">Bo vizuali rembecam cap.</iframe><bdi></bdi><input type="url" style="border-block-start-color: #95acfa; backface-visibility: hidden;"></input></em></code>Purbu uvi.Pij fabkaofo ufwone gerezuva.</h6><nav dir="rtl" draggable="false" style="text-underline-position: right under;"><strong hidden><ruby draggable="true" hidden tabindex="288" dir="ltr"><rp hidden dir="auto" draggable="false" tabindex="-436"></rp><rt></rt><rb contenteditable="true" dir="rtl" tabindex="696"></rb></ruby><picture draggable="true" contenteditable="" style="mask-type: luminance; outline-style: groove; place-self: stretch normal;"><template draggable="true" hidden contenteditable="true" dir="ltr"></template><template dir="auto" draggable="false"></template><script defer nomodule tabindex="955" contenteditable="true"></script></picture><video style="inset-block: 19%; border-block-start: groove; break-after: right; column-fill: balance-all; columns: auto auto;"><script tabindex="-800" draggable="true" integrity="h6Pns^)FJg78OBd" hidden></script></video></strong></nav></body></html>',
      '<html contenteditable="false" draggable="false" dir="ltr" hidden lang="VTmEA!^%4APrs5wu"><head tabindex="-424" contenteditable="" draggable="true"><title style="content: none;">Teg salug vok novaz acwen.</title><template dir="rtl" hidden contenteditable="false" draggable="false" style="cursor: url(kecim) -864.7749rem 600.713cm cell; offset-anchor: bottom center; border-top-left-radius: -86.2827in;">Liznij raz togamdi zajvu ojdefaz zigvichat dotzarba.</template><base dir="ltr"></base><script tabindex="-943" contenteditable="false"></script></head><body hidden dir="auto" tabindex="-208" draggable="false"></body></html>'
    ]);
  });

  describe("when given a tag", () => {
    it("generates HTML strings starting with that tag", () => {
      expect(htmlString({ tag: "form" }).take(5), "to equal snapshot", [
        '<form method="get" novalidate style="background-image: none;"><br contenteditable="" draggable="true" tabindex="-291" dir="rtl"></br><abbr style="visibility: hidden; border-top-right-radius: -818.7872vh;"><math dir="rtl" draggable="false" contenteditable="true" tabindex="-15"><progress dir="ltr" tabindex="-520" contenteditable="true" hidden><sup draggable="false" hidden dir="auto"><cite contenteditable="false" hidden></cite></sup></progress><object hidden dir="ltr" data="7mf" contenteditable="false"><h2 hidden tabindex="-651" dir="auto"><i draggable="false" dir="auto" hidden contenteditable="false"></i>Pawicna ip riide.<ruby draggable="false" tabindex="-599" hidden></ruby><select size="186" autofocus disabled draggable="false" hidden></select><dfn tabindex="-896"></dfn></h2><h1><a dir="rtl" hidden contenteditable="true" draggable="true"></a></h1><svg contenteditable="" dir="ltr" hidden><object data="ZK0wk"></object><h3 hidden></h3><video contenteditable="" preload="metadata" style="inset-inline-end: 99%; margin-right: 185.3935rem; border-block-color: currentcolor;"></video></svg><ruby dir="auto"><rp hidden dir="auto" tabindex="150" draggable="false" style="backdrop-filter: url(har); line-break: anywhere; border-top: outset medium; font-variant-alternates: normal;"></rp><rt tabindex="-209" contenteditable="true" draggable="false" hidden></rt></ruby></object><select disabled style="width: max-content; list-style: symbols() none; mask: match-source view-box url(movecuaw) top -797.057vw right 0% fill-box repeat-y subtract; overscroll-behavior: none; order: 99%;"><option contenteditable="true" dir="auto" draggable="false" disabled>Dijjeg ukiipi povivho.</option></select><canvas dir="ltr" draggable="true"><video hidden tabindex="-294"><aside draggable="true"></aside></video><td rowspan="209" colspan="671"></td><h5 draggable="true"><samp></samp></h5><video hidden dir="ltr"><base contenteditable="false" draggable="true" tabindex="887" style="mask-border-width: 156.5603rem; animation-timing-function: linear;"></base><a contenteditable="true" draggable="false" style="animation-timing-function: linear; scroll-padding: auto;"></a><keygen contenteditable="" dir="ltr"></keygen></video><meta draggable="false" contenteditable="true" tabindex="700" style="border-end-end-radius: 97%; line-height: -354.0871ch; scroll-margin-block: -202.3582in; grid-column: haucmor;"></meta></canvas></math><label style="border-inline: 429.1919em teal; color-adjust: exact; transition-delay: 33.3925s; orphans: 11%; grid-column-end:  -51%;">Be waldoal.Mo tuibe tupum foctub.<bdo draggable="false" tabindex="-573" hidden dir="ltr"><u contenteditable="" style="animation-delay: -922.0738ms; min-block-size: min-content;"><embed src="tuKiZZz" title="c2E7)uOnF3Q7Q]2EjBs"></embed><s tabindex="562"></s></u><sub hidden draggable="true" tabindex="534"><em contenteditable="false" dir="auto" tabindex="-574" hidden></em>Se gozzod puc cisrerud.Tuccirce waccezluj huwsojwa lirhu mi mi.<textarea contenteditable="" readonly dir="ltr">Aburah ruocevuc tejiz.</textarea></sub><textarea readonly disabled autocomplete="on">Lese ug wajeksog.</textarea>Cuw wiokaivi.</bdo></label><picture style="font-variant-position: sub;"><template draggable="false"><template contenteditable="" dir="ltr" tabindex="-75" draggable="false"><style hidden tabindex="-241" draggable="true" style="transition-delay: -450.5364s; border-right-style: dotted;">@keyframes \'ja\' {\n  from {\n  justify-content: space-around; right: auto; list-style-image: url(runitsa); inset-block: -158.9285vh;\n}\n}\n@keyframes \'afuta\' {\n  35% {\n  mask-mode: luminance; font-synthesis: weight; text-emphasis-position: left under; grid-template-areas: \'joerufiw\';\n}\n}\n@keyframes ciupke {\n  from {\n  mask-border-width: -848.2734px; border-collapse: collapse; border-collapse: separate; border-image-source: none;\n}\n}\n:read-only > :only-of-type { border-inline-start-color: ghostwhite; }\n:indeterminate { text-align: right; line-height: 946.2208em; mask-size: 643.5813em; flex-direction: row-reverse; flex-flow: row; }\n:not([ lam ] ::baporpu:caetzi | holilzab #wo ::zibelre ( none ):gakufki) { border-top-right-radius: 34%; }\n:nth-last-of-type(even) { flex-wrap: wrap-reverse; offset-rotate: auto; mask-composite: intersect; page-break-after: right; }\n:nth-child(odd of [ lu ] ::helkow ( normal ):le:af ::cammoudu:ovaugi) { padding-inline-end: 82%; }\n::first-line { margin-top: 57%; inset: 677.1651vh; border-right-color: rgba(-3176312508252160 , -5413201948704768); left: auto; }\n:dir(rtl) { padding-block: 77%; }\n:enabled { mask-clip: view-box, fill-box, no-clip; }\n:nth-last-of-type(4n+4) { border-end-end-radius: 6%; margin-inline-start: auto; border-right: currentcolor; }\n, { border-image: element(#mojov) fill -6768059607941120 / auto / -637.5339mm stretch; text-transform: full-width; }\n:required { background-attachment: local; scale: none; scroll-padding-block-start: 20%; }\n:target { scroll-padding-block: auto; }\n:active { border-top-style: groove; object-position: -367.6069vmin center; overflow-wrap: anywhere; grid-template-areas: none; padding-block-start: 799.3349pc; }\n:only-child { margin-bottom: auto; grid-column-start:  80%; }\n</style><title dir="rtl">Rak tovaav rosoz kog fafwolzec devdopo pewo.</title><keygen contenteditable="true" draggable="false" dir="ltr"></keygen></template><blockquote tabindex="-960"><hr draggable="true" contenteditable="" dir="auto" hidden></hr>Ruawatas saco ewu defuf ohu.<button tabindex="-591" type="reset"></button></blockquote></template><img hidden dir="rtl" crossorigin="anonymous" src="&amp;zIzJ2^HRqcH^ksnQK"></img><template><h5 dir="rtl" draggable="false" style="transition-property: none; border-image-slice: fill 631759884517376; writing-mode: horizontal-tb; justify-items: stretch; mask-position: right;"><textarea hidden maxlength="441">Daeczeg tik udwupbi ha bicanip.</textarea>Dug sutukufek ic cof dasokiwu.</h5></template><template dir="rtl" tabindex="34" contenteditable="false"><h5 tabindex="780" dir="ltr"><textarea tabindex="-691" readonly cols="683">Sig mol gabfejus sopan mijpibfu.</textarea><cite contenteditable="" tabindex="-389" hidden></cite><abbr tabindex="722"></abbr></h5><iframe draggable="false" dir="rtl" src="cNtlS" hidden title="K">Najlo wonig cob janleaw.</iframe></template></picture></abbr><s contenteditable="true" hidden draggable="true" dir="ltr"><select draggable="false" disabled multiple><script async nomodule draggable="false"><blockquote contenteditable="true" draggable="true" dir="rtl" style="overscroll-behavior-inline: none; flex-basis: content; padding-inline-start: -869.2874px; counter-increment: none; margin-bottom: 79%;"><ol contenteditable="" draggable="false"></ol><hr hidden contenteditable="" draggable="false" tabindex="-402"></hr><dfn hidden draggable="true"></dfn></blockquote><section dir="ltr" tabindex="-110"><fieldset dir="auto" draggable="true" contenteditable="true" hidden style="font-synthesis: weight; transition-duration: 899.9224s;"><legend></legend></fieldset></section><svg tabindex="614" hidden draggable="true" dir="auto"></svg><iframe draggable="false" title="rS9LirdnCqcn(59z7">Onufekzir ithozi inu.</iframe><select><optgroup contenteditable="" tabindex="932" hidden draggable="false" disabled style="font-variant-numeric: normal; font-language-override: normal;"></optgroup><optgroup tabindex="-109" contenteditable="false" dir="ltr" hidden></optgroup><optgroup></optgroup><option hidden selected>Wuavoed wehowdor fuuviit aj ida.</option><optgroup hidden tabindex="-287" disabled dir="rtl"></optgroup></select></script></select><slot hidden contenteditable="">Tazat voohwo sij cav uruzoso cakel hobfeuw.Ed areec hodezfak ikuukonu.Isze ep runifaf.<var contenteditable="false" hidden tabindex="761" dir="rtl"></var></slot><samp contenteditable="false">Hico jimez bive unjor.<map tabindex="480" hidden draggable="true" style="border-block-start-color: InfoBackground; border-image-outset: -2.2237pt;"><iframe hidden contenteditable="false" title="D" style="mask-border-outset: 378.93rem; scroll-margin-block-end: 642.8815ex; backdrop-filter: none; outline-width: 903.1Q; border-bottom-style: ridge;">Tapjow wotkotco.</iframe><a draggable="true" tabindex="-644" dir="rtl" hidden style="grid-column-start: auto; padding-inline-start: 186.5573ex; opacity: -373277654515712; table-layout: fixed;"><h6 dir="rtl" draggable="false" style="border-inline-color: #055727; padding-inline: 23%; empty-cells: hide;"></h6></a><audio draggable="true" hidden contenteditable="" tabindex="-30" preload="none"><u tabindex="-768" dir="rtl" hidden style="shape-outside: inset(39%) margin-box; text-align: center; text-emphasis-color: currentcolor;"></u><blockquote dir="rtl" hidden tabindex="-384"></blockquote></audio></map>Fomunte pakcik ik pijsad kuhu kisak neicfe.Vumi tur la sovi erusu.<datalist draggable="true" contenteditable="false" dir="ltr" hidden style="border-top-left-radius: 5%; backdrop-filter: contrast(-5764419606806528); top: -367.6878cm;"><option tabindex="580" contenteditable="" disabled hidden selected>Radfe ofo ufwone gerezuva.</option><button dir="ltr" tabindex="796" type="button"><s hidden style="mask-type: luminance; counter-reset: none; shape-outside: polygon(476.8984cm 65%, 530.3818in 67%, 615.6919vmin 88%) margin-box; counter-increment: lahtahte -21%; mask-border: 23% fill luminance stretch;"></s><samp></samp><bdo></bdo></button><map hidden dir="auto" tabindex="519"><i hidden></i><button autofocus type="submit" disabled></button><object></object><map hidden></map><option style="inset-block: 19%; border-block-start: groove; break-after: right; column-fill: balance-all; columns: auto auto;">Wegmud dogom.</option></map></datalist></samp><video tabindex="-106"><var draggable="true" contenteditable=""><a hidden>Hojo mordopni feevi dab.<sup hidden></sup><span draggable="false"></span></a><strong hidden></strong><output contenteditable="false" hidden><keygen></keygen><s contenteditable="false" style="padding-inline-start: 156.7738vmin; clip-path: none; border-block: medium; text-decoration-style: dotted;"></s></output></var></video><map dir="rtl" tabindex="-442"></map></s><datalist tabindex="-880" contenteditable="true" hidden><label><object draggable="false" contenteditable="">Uti haudus revpapdo dotzarba.<ins dir="ltr"><param draggable="false"></param><param dir="auto" tabindex="161" hidden draggable="false"></param></ins><keygen tabindex="931" draggable="true"></keygen><a hidden dir="auto" draggable="false" tabindex="141">Fo uz otipu sid.</a></object><keygen tabindex="953" hidden draggable="false" style="font-kerning: auto; background-repeat: repeat-y; animation-fill-mode: backwards; border-end-end-radius: 926.2303cm;"></keygen></label>Dinomnec bebsojla gifpu toukfa ah.<option contenteditable="">Tughof to.</option></datalist>Waikigej puwe bekpiag vafteh hoz.</form>',
        '<form method="get"></form>',
        '<form draggable="true" contenteditable="" style="border-collapse: collapse; shape-outside: none; bottom: auto;"><h4 tabindex="315" contenteditable="false" draggable="false" hidden></h4><svg dir="auto"></svg><slot tabindex="461"><template tabindex="-105" contenteditable="false" dir="rtl"><audio contenteditable="false" preload="none" tabindex="-462" hidden><template contenteditable="true" dir="rtl" tabindex="765"><canvas tabindex="976" dir="auto" draggable="true" hidden style="break-after: recto;"></canvas><math contenteditable="false" hidden tabindex="-799" draggable="true"></math></template><style>@keyframes \'todce\' {\n  from {\n  mask-repeat: repeat-x; border-block-end-style: dashed; font-variation-settings: normal; margin-left: 39%; max-inline-size: 95%;\n}\n}\n:empty { text-underline-offset: auto; overflow-anchor: auto; }\n:last-of-type { all: unset; word-wrap: normal; overflow: auto; counter-increment: none; text-combine-upright: digits; }\n::first-line { box-sizing: border-box; place-items: normal; widows: 69%; }\n:right { margin-top: auto; border-inline-start-color: black; border-inline-start: ridge; will-change: auto; }\n::marker { backface-visibility: hidden; border-inline-style: hidden; border-color: orchid; }\n, { translate: none; inset-inline: 15%; scroll-padding-inline-end: auto; padding-top: 84.4744vh; mask-mode: match-source; }\n:left { column-rule-style: hidden; mask-border-mode: luminance; overflow-y: visible; text-align: center; }\n:only-of-type { pointer-events: visibleStroke; border-inline-end: double; align-self: flex-start; padding-inline-start: 100%; color: rgb(40% / 66%); }\n:checked { margin-right: auto; padding-top: 62%; }\n:nth-of-type(7n+4) { scrollbar-color: light; margin-right: 0%; }\n::after { scroll-padding-inline-end: auto; scroll-padding-bottom: -595.0389vh; transition-duration: 517.3528ms; overflow-block: hidden; }\n:root { scroll-padding-inline-end: auto; }\n</style></audio><audio preload="none" draggable="false"><link dir="rtl" contenteditable="" integrity="#JLV1ehQq" href="dSKYS7Stb9xKVfl"></link>Ureamila wi le aso.<h4 hidden tabindex="-638" contenteditable="true" dir="auto" style="overflow-x: clip;"><input type="search" style="scroll-padding-bottom: 395.3413pt; text-underline-offset: auto; scrollbar-color: rgb(6354183066222592);"></input><u tabindex="-842" style="scroll-margin-bottom: -129.6392pc; touch-action: none; padding: 262.3413cm;"></u>Ikwasfe feopi ceceje it jes esca.<img ismap contenteditable="true" src="5zg%rb2"></img><canvas contenteditable="" draggable="false" hidden dir="rtl"></canvas></h4><h1 hidden dir="ltr" draggable="false"><i dir="rtl" hidden style="animation-direction: normal;"></i></h1></audio><nav draggable="true" style="overflow-wrap: break-word; margin-inline-end: 99%; border-bottom-color: rgba(-1729780785348608 , 6%); scroll-margin: 415.6702px; margin-inline: 8%;"><ins contenteditable="" tabindex="97"><script></script>Nuatge fih.</ins></nav>Pafipfug niz ramdiih polo mecnuf ra.</template><del dir="auto"><figure tabindex="558" draggable="true" dir="ltr" contenteditable="true"><figcaption contenteditable="true" draggable="false">Askuzpu woh izi daram awe wu eh.<small tabindex="-989" draggable="false" contenteditable="false" dir="rtl"></small><audio dir="rtl" draggable="true"></audio></figcaption>Domalol tok.</figure><nav draggable="true" dir="auto" tabindex="254" style="page-break-before: right;"></nav><h2 dir="auto" style="overflow-inline: visible;"><data tabindex="-694" contenteditable="true" hidden draggable="true">Owuzu vutuvan li hura.<em draggable="false"></em></data></h2></del></slot></form>',
        '<form hidden contenteditable="" style="padding-block: 945.5527vmin; scroll-padding-block-start: 81%; scroll-padding-inline-start: auto; width: auto; min-height: fit-content;"><sub><audio dir="auto"></audio>Wo cuevo kuz.Reaha jutsip ef.<label draggable="false" contenteditable="">Sefifopi wogpac al jugnozjok.<object><area hidden contenteditable="true"></area></object><samp dir="rtl" tabindex="447"><meter></meter></samp>Buc nu.<kbd draggable="true" contenteditable="false">Imibi culogme.<sub hidden dir="auto"><em></em><var style="break-before: column; background-image: none; mask-type: alpha; overflow-x: hidden;"></var><script tabindex="71" integrity="A3" src="VYVA$RSaL" style="border-bottom-color: #27819e; text-align: end; padding-inline-start: 12%; page-break-inside: avoid; margin: 658.0355px;"></script></sub></kbd></label></sub>Vijilse dun.<iframe draggable="true" title="We!CZ@FDXfuOw@6">Nunzic saj bokrem mo is febtep.</iframe></form>',
        '<form><header tabindex="-580" draggable="false" dir="rtl" style="border-inline-width: 944.0506pt; border-top-color: rgb(98270705614848 , 13%); font-stretch: normal; backdrop-filter: none;"></header><bdi dir="ltr" tabindex="147" contenteditable="true" draggable="true" style="scroll-padding-inline: auto; font-language-override: \'nusu\'; scroll-padding-block-start: 8%; column-gap: 15%; font-style: normal;"><small draggable="true" tabindex="839">Ci jezrij saz tugi wuhkitnes buwi.</small><button dir="rtl" contenteditable="true" autofocus draggable="false" type="submit" style="scroll-margin: 98.645cm; background-color: currentcolor; overflow-inline: hidden; hyphens: auto;"></button></bdi></form>'
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
