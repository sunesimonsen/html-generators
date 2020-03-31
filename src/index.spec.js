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
          children: [{ type: "text", value: "Cuh zeenejom ju bu mahbu." }]
        }
      ]
    });
  });

  it("shrinks towards minimum constraints", () => {
    expect(html, "to shrink towards", {
      type: "tag",
      tag: "html",
      attributes: {
        lang: "((Y(JQK",
        style:
          "border-block-end-color: hsl(967428175560704 , 67% , 21% , 79%); scale: -6963202684354560; border-block-end-color: InactiveCaption;"
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
              children: [
                {
                  type: "text",
                  value: "Wafos ecumoce waccezluj huwsojwa lirhu mi mi."
                }
              ]
            }
          ]
        },
        {
          type: "tag",
          tag: "body",
          attributes: {},
          children: [
            {
              type: "text",
              value: "Dup vigmelcu nubuz kuru cemucite nuwijwaw."
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
      '<html hidden lang="25SSlGlheH#ySk0Wbe)"><head><title dir="ltr" draggable="true" tabindex="612" style="column-rule: none thick #331dd2;">Navvalbu rujbave dolbaw gokim sab.</title></head><body tabindex="927" hidden dir="auto" draggable="false">Cuh zeenejom ju bu mahbu.</body></html>',
      '<html lang="165Sf&amp;AWi^@!UH" style="font-language-override: normal;"><head draggable="true" tabindex="-119" contenteditable="false"><title contenteditable="" draggable="true" style="animation-name: pow, none, none, gewse, tuhdulhak; text-decoration-style: wavy;">Ijicho ajkad mifdej.</title><script src="qMP0">Her jahben mabkuhod nuhir leg liptemdov pa.</script><base contenteditable="" hidden dir="ltr"></base><meta tabindex="-941" contenteditable="true"></meta></head><body tabindex="113" hidden>Hoazpig duw ipaje ewumovecu iro lavub ki.</body></html>',
      "<html hidden dir=\"ltr\" lang=\"rKyn3BW3!1WwQO\"><head dir=\"rtl\"><title draggable=\"false\">Hojizo uw juvza kimsuzceh.</title><base contenteditable=\"false\"></base><title draggable=\"true\">Wundevuj pe zuforre mug.</title><style hidden tabindex=\"628\" contenteditable=\"\" dir=\"rtl\" style=\"font-variant-alternates: annotation(bedinbel); border-inline: #dc437a -499.4973ch; backdrop-filter: drop-shadow(74.1649cm); list-style-position: outside;\">@font-face {\n  font-variation-settings:'fuz' 293640987475968, 'bojiza' -4488097643364352, 'uc' 6052479816957952, 'vicod' -1038489881673728 ; font-variant:normal ; font-family:'waoho' ; font-style:oblique 33.3925rad ; font-stretch:expanded ; font-feature-settings:'wibse' ; src:url(da), url(ez) format('ba'), local('kamoco'), local(jetupum) ; font-weight:bold ; unicode-range:U+af18-e0eb ;\n}\n@charset \"BRF\" ;\n@font-face {\n  font-variation-settings:normal ; font-style:italic ; font-stretch:ultra-expanded ; font-feature-settings:'tettufja' ; unicode-range:U+19cc-1dfe ; font-weight:bold ; src:url(kev) format('ag'), url(votu) format('muz'), url(moanu) format('lesev'), local(mozoglu) ; font-variant:none ;\n}\n:left { scroll-padding-block-start: auto; counter-reset: lauwdeh 90%; overflow-anchor: none; }\n:last-child { inset-inline-start: 8%; grid-template: none; column-rule-color: #54235c; }\n:nth-child(odd) { transform-origin: 861.8583pt right; writing-mode: vertical-lr; background-color: hsla(91.8316grad , 71% , 11% , 3387247466381312); pointer-events: all; }\n:only-child { border-block-start: -854.474mm currentcolor inset; padding: -837.3025pt; border-block-style: dotted; word-break: keep-all; font-optical-sizing: none; }\n:focus { scroll-margin-left: -526.6296vw; text-emphasis-style: 'lerpo'; font-variation-settings: 'ihmi' -4437267431030784, 'ni' -7992929603813376, 'zatossez' -1797424519577600, 'jarek' 8344675337371648; scroll-margin-bottom: -975.6911vw; vertical-align: middle; }\n#biw { text-overflow: clip; box-sizing: border-box; overscroll-behavior-block: auto; border: medium dotted; grid-template-columns: subgrid repeat(auto-fill , [ wawuz ]); }\n</style><template>Kef nej jaj ulbihmu.</template></head><body hidden dir=\"ltr\" contenteditable=\"false\">Tukovrad lo uzlilez sucbija.</body></html>",
      '<html lang="Z"><head draggable="false" tabindex="378" hidden dir="ltr"><title>Huzob dapil pevrunit.</title></head><body draggable="false" contenteditable="false">Idbujsok dulim ikerur fiwpogna pehtika nafid.</body></html>',
      '<html hidden contenteditable="true" tabindex="875" lang="[mSoqd8mzu" style="border-block-end: thin dotted;"><head dir="auto" draggable="true"><title contenteditable="">Saz lul zem zabha iviracnem delab.</title><base dir="rtl" hidden style="text-decoration-skip-ink: auto; mask-origin: fill-box;"></base><template dir="ltr" hidden tabindex="537">Raje tonli subafe fu ju iv.</template><title style="animation-delay: -179.2064s; width: auto; border-bottom: outset currentcolor 634.1442vw;">Vuw rilesgu mam ratohsi.</title></head><body>Cejfi ufe dedbodnin.</body></html>'
    ]);
  });

  describe("when given a tag", () => {
    it("generates HTML strings starting with that tag", () => {
      expect(htmlString({ tag: "form" }).take(5), "to equal snapshot", [
        '<form method="get" novalidate style="background-image: none;"><br contenteditable="" draggable="true" tabindex="-291" dir="rtl"></br><abbr style="visibility: hidden; border-top-right-radius: -818.7872vh;"><math dir="rtl" draggable="false" contenteditable="true" tabindex="-15">Dolbaw gokim sab.</math><label tabindex="927" hidden dir="auto" draggable="false"></label><picture contenteditable="false" draggable="true"><script crossorigin="" hidden integrity="F" draggable="true" style="align-content: normal; scroll-margin-right: -602.3152rem;">Sawtaevo dako wip rij wus hogbimab.</script></picture></abbr><s contenteditable="true" tabindex="-563">Opu dul giimeduj deg bueh pi.<meter draggable="true" contenteditable="">Mechug poh ub umi je.</meter>Vapiz soze wu tumit ede waser wi.<b dir="auto" tabindex="397" hidden contenteditable="true"><i tabindex="-997" draggable="false" dir="auto" hidden><cite hidden tabindex="899" contenteditable="true" dir="rtl" style="border-block-start: dotted rgba(877909908652032) medium; grid-template: subgrid / none;">Ram jeguze ipilip pufwi bop.<canvas style="transform: none; transition-delay: -440.8793s; text-decoration: hsl(933.3097rad 97% 99% / -3702879487524864) underline line-through; inset-block-start: -254.6263px; font-variant: tabular-nums simplified annotation(jetag) no-discretionary-ligatures slashed-zero no-contextual swash(patofcok) ruby unicase diagonal-fractions ordinal no-historical-ligatures stylistic(bedinbel) lining-nums historical-forms ornaments(junbeb) styleset(jem);"></canvas><q draggable="false"></q><script src="g!doNEOZVk1j[">Mek cebuc wocafig.</script></cite>Waoho womtoce fobe.<script style="border-block-end-style: none;">Gibzinef tetu cejtu emofoc obututven nuawo upuge.</script><svg>Do colubet pa lowbokuhi.</svg><small><object data="3rhB%NLK9Cxw%hCd" draggable="false" hidden contenteditable="false" tabindex="91"></object><ins hidden tabindex="83" dir="ltr" draggable="true"></ins><datalist hidden contenteditable="false"></datalist><i></i></small></i>Rak rerudzup ecwemu famhuluj huwsojwa lirhu mi.<meter contenteditable="true"><bdo hidden draggable="true" contenteditable="true"></bdo>Nubuz kuru cemucite nuwijwaw ocu doja nej.<slot draggable="true" style="visibility: visible; word-break: break-all;"><dfn contenteditable="false" hidden draggable="false" dir="rtl"></dfn><strong></strong><del draggable="true" contenteditable="false" hidden tabindex="480">Lezenu bi ba vum.</del>Omiwusleg dejof vop ja pil pevrunit fibzo.</slot></meter><del hidden draggable="true" tabindex="14"><input checked capture type="text"></input><bdi dir="rtl" contenteditable="true" tabindex="-329"><b contenteditable="" dir="ltr"></b>Nirfofbu je di nef.Pekac topuoj ju ziuflul zem zabha iviracnem.</bdi><iframe dir="ltr" title="BnbPx">Husi apparon sinle.</iframe></del><canvas dir="auto">Ha pagah cucammo.<wbr tabindex="918" contenteditable="" draggable="false" hidden></wbr><u draggable="true"><script src="FoL2rNi">Paw rile raufe.</script><object tabindex="116" contenteditable="true" dir="rtl" data="6zh&amp;!93)Ej*2]"></object>Zon zat godfatvo levmot.<code draggable="false" tabindex="-540"></code></u></canvas></b>Ik rawti oh kodav rosoz.</s><datalist><option disabled>Wol katdevdo.</option></datalist>Ralmo bonsirse uwsemi taw.</form>',
        '<form dir="rtl" hidden contenteditable="false" style="text-overflow: \'bopzisa\'; grid-auto-columns: max-content; border-block-start-color: ThreeDLightShadow;"><blockquote tabindex="-519"><article dir="auto" contenteditable="false" tabindex="346"><iframe title="ksnQKmFc^">Haf guzfi cizpe cemet gitanu.</iframe>Jonim piro ge osjetik udwupbi.</article><data dir="ltr" style="justify-self: auto; mask-position: center; border-inline-start: ridge rgb(-4626598502334464 , 60%) thick; scroll-margin-inline-start: 660.4398vw;"><br tabindex="-13" style="border-right-style: inset; animation-fill-mode: none; border-inline-start-color: InfoText; offset-distance: 407.8923vmin;"></br><em tabindex="380" draggable="false" dir="ltr" contenteditable=""><small tabindex="764" style="tab-size: -25.1376vw;"><cite contenteditable="true"></cite><abbr contenteditable="" draggable="false" hidden tabindex="-823"></abbr>Jamol gabfejus sopan mijpibfu cazeceh orjon.<samp draggable="true" dir="auto" hidden tabindex="-215" style="break-inside: auto; mask-position: left 60% top 246.6651vh; inline-size: 456.3775pc ;"></samp><del draggable="false" dir="ltr" hidden></del></small><kbd tabindex="-314" dir="auto" contenteditable="false"></kbd>Nifruzop vorezepof curcooza nuhdo guukalo elrubon.</em></data><a dir="rtl" style="border: hsla(-7829844117159936 , 57% , 31% , 54%) ridge medium; counter-reset: none; min-width: max-content;"><table dir="auto" hidden style="background-clip: content-box; border-block-end: medium #dfa94d;"><tr contenteditable="false" dir="auto" hidden></tr></table><address>Beb cicmohu agamuvoni ufocekepe pagge gu.Acufuonu hezir ithozi inu ik di.</address><wbr contenteditable="false" hidden draggable="true" dir="rtl"></wbr>Jilawo ra docuvpu sutkor egopov.Fud egorawof izu itdu zubu.</a></blockquote>Pebjakun hebit debikeje osaw zaz.Zar kacav uruzoso.Bu pu vafeuw nuro.<th colspan="655" draggable="true" dir="auto" tabindex="964" scope="row"><ins dir="ltr" hidden></ins><var hidden draggable="true" dir="rtl" tabindex="969" style="tab-size: 56%; border-image-width: auto;"><slot></slot><span tabindex="-482" hidden dir="ltr" contenteditable="true" style="overflow-x: hidden; grid-auto-rows: minmax(22% , min-content); border-inline-color: rgb(58%); clear: both;"><wbr tabindex="757" draggable="false"></wbr>Poc du bite roohpi lab lefugor gafdupwu.<audio>Corinali ranas hod tehnes ako.<em></em><svg contenteditable="false" draggable="false">Mo ma el usi mojlozbiv.</svg><progress draggable="true" tabindex="-606"></progress><i draggable="true" tabindex="359" contenteditable="true"></i></audio><input required multiple hidden type="date"></input></span></var><dl contenteditable="false" dir="rtl" hidden tabindex="-593"><script style="font-synthesis: none; unicode-bidi: isolate; break-before: avoid-region; orphans: -99%;">Fezneic kiko misowef lawep zuali.</script><div tabindex="-270" draggable="true" contenteditable="" dir="rtl">Sar ul baztusig.<dt draggable="true" dir="ltr" style="columns: auto;"><cite contenteditable="true" tabindex="-869" draggable="true" dir="ltr"></cite></dt>Lobhoevi duvurgup vodepun uv isose ipzevit iteetde.<dt hidden contenteditable="true"><img draggable="true" tabindex="643" src="LCO@(M!J^b8ziClD"></img><keygen draggable="true"></keygen></dt><bdi hidden><script defer contenteditable="true" integrity="hmJTtMvX" src="NNQxgT10Du[E8jMnjY@" dir="auto">An oz dureb dubtum hoftakew ligzewu.</script><abbr draggable="false" tabindex="149" hidden dir="rtl"></abbr>Evi dab hof.Hesal jan mikwobuj dos igoja.</bdi></div></dl><fieldset disabled draggable="true" contenteditable="true"><legend hidden><q draggable="true" contenteditable="false" hidden style="font-size: larger; margin-top: auto; padding-right: -69.5888mm; background-image: element(#ufo); overflow-y: scroll;"><ins></ins></q></legend><math display="block" contenteditable="false" dir="ltr" tabindex="-119">Osierdog zud.</math>Zarbahe laog kuknu pawpiz lemmam.</fieldset></th></form>',
        '<form autocomplete="on" draggable="false" tabindex="-304" novalidate style="font-variant-east-asian: normal; border-inline-end-style: hidden;"><ul tabindex="487"><template dir="ltr" hidden contenteditable="" tabindex="-25" style="transition-timing-function: linear; margin-inline-start: auto;">Kumnec bebsojla.</template><template hidden contenteditable="true">Jukfa ah.</template><li contenteditable=""><keygen contenteditable="true"></keygen><del tabindex="405" dir="rtl" style="font-kerning: normal; font-weight: bolder;"><h5 dir="ltr" draggable="false" hidden>Ufu bij ro egfi eh tit mulaz.</h5><a contenteditable="" hidden tabindex="688" dir="rtl" style="color-adjust: exact; text-underline-offset: auto;">Apvenog cimfas nobbawoc daomlel lus afemavus ma.</a><blockquote style="unicode-bidi: plaintext; column-rule-color: currentcolor; resize: both;"><picture dir="rtl" hidden contenteditable="true" style="unicode-bidi: embed; scroll-margin-block-end: -749.5329in; inline-size: auto; border-bottom-color: #7c6b83; mask-clip: no-clip, no-clip, no-clip, no-clip, no-clip;"></picture>Du demi.Fugod putuvu ive hosnuzon.</blockquote><abbr contenteditable="true" draggable="false" tabindex="269"></abbr></del>Fo azpiej rozipdi dun zidni hos.Daitgem apoveam busbus zu vefuhim letoifi vi.</li><li>Go mipip dirocol aneahta ve.</li><script integrity="2Gr" nomodule crossorigin="anonymous" dir="ltr" style="scroll-margin-bottom: 471.3263vh; z-index: 87%; column-rule-width: medium;">Pofvi zesonese fabitjom zuhuhu.</script></ul><output tabindex="-186"><map contenteditable="false" tabindex="-780" draggable="true"></map>Fak vizcece.</output><meter>Ugzies fi cainare kawbo udioka agwizhap gineonu.</meter><svg contenteditable="" style="padding-inline: -164.0201ex;">Rizhuwi wim hipid vuf nunorec dujubale idkos.</svg></form>',
        '<form tabindex="255" contenteditable="false" dir="rtl" method="post"><address dir="rtl" tabindex="-822"></address>Gefdej sepapgu palrodtu igapan ge vudnoucu.<h2 contenteditable="false" hidden draggable="false" dir="rtl"><script crossorigin="use-credentials" contenteditable="" tabindex="-859" nomodule>Zez apile evefer dar fu.</script><canvas hidden><q hidden draggable="false">Fuhuvja vugej.Ze zuwhot vutuvan.<s style="grid-row-start: ejdek; white-space: pre-line;"></s><embed draggable="true" src="2" title="uj@0v)^93Z7!b[)T1Pw"></embed>Ila dic ha neh cegwocaw.</q></canvas><video preload="auto" tabindex="185" draggable="true" contenteditable="true" dir="ltr">Hil diw.<dfn>Sefifopi wogpac al jugnozjok.<object><area hidden contenteditable="true"></area></object><samp dir="rtl" tabindex="447"><meter></meter></samp>Buc nu.<keygen draggable="true" contenteditable="false"></keygen></dfn><sup tabindex="-284"></sup><q dir="ltr" hidden>Iwwenket otoepco can hapallad.<br draggable="true" tabindex="-321"></br>Topin pood iftas cumfubmih cicu rej apalov.<input capture inputmode="email" type="radio"></input></q></video><button hidden contenteditable="true" dir="ltr" type="button"><noscript tabindex="-340"><abbr contenteditable="false"><sup contenteditable="" tabindex="505" draggable="false" style="border-block-end-width: -582.2719ch; text-transform: uppercase;"></sup><wbr></wbr><bdo></bdo></abbr><b>Kinozruc ude uj udirifhuv.<bdo dir="ltr" tabindex="-57"></bdo></b><q dir="auto"><canvas tabindex="735" dir="ltr" contenteditable="true"></canvas><br hidden dir="ltr" contenteditable=""></br><canvas hidden draggable="false"></canvas></q></noscript>Ribasrac jivozol dispih jiro sipen.<br tabindex="-828" hidden draggable="false"></br><span tabindex="-59" hidden style="offset-anchor: left bottom; break-after: left; animation-name: \'was\', none, \'iri\';"></span></button>Lut weuta gozdebco tocbo apuivodak.</h2>Jimacli anu buruva ete.</form>',
        '<form hidden contenteditable="" method="get" autocomplete="off">Ben hipub lizaf pulsurap.Noah ridawwek juap jokagi wewucela osku.</form>'
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
