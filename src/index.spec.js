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
                contenteditable: "",
                draggable: "true",
                tabindex: "-291",
                dir: "rtl"
              },
              children: [{ type: "text", value: "Uj do." }]
            }
          ]
        },
        {
          type: "tag",
          tag: "body",
          attributes: { contenteditable: "true", dir: "ltr", hidden: null },
          children: [
            {
              type: "tag",
              tag: "canvas",
              attributes: { dir: "ltr" },
              children: []
            },
            {
              type: "tag",
              tag: "a",
              attributes: { hidden: null },
              children: [
                {
                  type: "tag",
                  tag: "h5",
                  attributes: {},
                  children: [
                    {
                      type: "tag",
                      tag: "abbr",
                      attributes: { hidden: null, dir: "rtl", tabindex: "185" },
                      children: [
                        {
                          type: "tag",
                          tag: "keygen",
                          children: [],
                          attributes: { contenteditable: "false", hidden: null }
                        },
                        {
                          type: "tag",
                          tag: "textarea",
                          attributes: {
                            disabled: null,
                            required: null,
                            wrap: "hard",
                            tabindex: "395"
                          },
                          children: [{ type: "text", value: "Gor zoclodevo." }]
                        },
                        {
                          type: "tag",
                          tag: "script",
                          attributes: {
                            hidden: null,
                            contenteditable: "",
                            nomodule: null,
                            draggable: "false"
                          },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "b",
                          attributes: { dir: "auto", contenteditable: "false" },
                          children: []
                        },
                        { type: "text", value: "Pawicna ip riide." }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "input",
                      children: [],
                      attributes: {
                        capture: null,
                        checked: null,
                        inputmode: "decimal",
                        draggable: "false",
                        readonly: null,
                        required: null,
                        contenteditable: "",
                        tabindex: "456",
                        multiple: null,
                        type: "datetime-local"
                      }
                    },
                    { type: "text", value: "Imeduj deg bueh." }
                  ]
                }
              ]
            },
            { type: "tag", tag: "video", attributes: {}, children: [] },
            {
              type: "tag",
              tag: "title",
              attributes: { draggable: "true", dir: "ltr" },
              children: [{ type: "text", value: "Kerokcu her jahben." }]
            },
            {
              type: "tag",
              tag: "select",
              attributes: {
                autofocus: null,
                hidden: null,
                contenteditable: "",
                multiple: null,
                dir: "rtl",
                size: "489",
                required: null,
                tabindex: "553",
                disabled: null
              },
              children: [
                {
                  type: "tag",
                  tag: "script",
                  attributes: {
                    draggable: "false",
                    src: "9l",
                    crossorigin: "anonymous",
                    integrity: "d@Ry"
                  },
                  children: [
                    {
                      type: "tag",
                      tag: "picture",
                      attributes: { tabindex: "-941", contenteditable: "true" },
                      children: [
                        {
                          type: "tag",
                          tag: "script",
                          attributes: {
                            dir: "ltr",
                            crossorigin: "anonymous",
                            hidden: null,
                            async: null,
                            contenteditable: "",
                            src: "PMNtr]g)%P%$Unzuz",
                            tabindex: "847",
                            draggable: "false",
                            integrity: "5$V!g*l6%XSQaBh*X["
                          },
                          children: []
                        },
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
                  tag: "option",
                  attributes: {
                    hidden: null,
                    tabindex: "18",
                    draggable: "true"
                  },
                  children: [{ type: "text", value: "Towohram jeguze ipilip." }]
                },
                {
                  type: "tag",
                  tag: "template",
                  attributes: { hidden: null, dir: "auto" },
                  children: [
                    {
                      type: "tag",
                      tag: "address",
                      attributes: {},
                      children: [
                        {
                          type: "tag",
                          tag: "ins",
                          attributes: {
                            dir: "ltr",
                            hidden: null,
                            draggable: "false",
                            contenteditable: "false"
                          },
                          children: []
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "nav",
                      attributes: { draggable: "false", hidden: null },
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
      '<html hidden lang="25SSlGlheH#ySk0Wbe)"><head><title contenteditable="" draggable="true" tabindex="-291" dir="rtl">Uj do.</title></head><body contenteditable="true" dir="ltr" hidden><canvas dir="ltr"></canvas><a hidden><h5><abbr hidden dir="rtl" tabindex="185"><keygen contenteditable="false" hidden></keygen><textarea disabled required wrap="hard" tabindex="395">Gor zoclodevo.</textarea><script hidden contenteditable="" nomodule draggable="false"></script><b dir="auto" contenteditable="false"></b>Pawicna ip riide.</abbr><input capture checked inputmode="decimal" draggable="false" readonly required contenteditable="" tabindex="456" multiple type="datetime-local"></input>Imeduj deg bueh.</h5></a><video></video><title draggable="true" dir="ltr">Kerokcu her jahben.</title><select autofocus hidden contenteditable="" multiple dir="rtl" size="489" required tabindex="553" disabled><script draggable="false" src="9l" crossorigin="anonymous" integrity="d@Ry"><picture tabindex="-941" contenteditable="true"><script dir="ltr" crossorigin="anonymous" hidden async contenteditable="" src="PMNtr]g)%P%$Unzuz" tabindex="847" draggable="false" integrity="5$V!g*l6%XSQaBh*X["></script><template></template></picture></script><option hidden tabindex="18" draggable="true">Towohram jeguze ipilip.</option><template hidden dir="auto"><address><ins dir="ltr" hidden draggable="false" contenteditable="false"></ins></address><nav draggable="false" hidden></nav></template></select></body></html>',
      '<html dir="rtl" lang="txJm"><head hidden tabindex="-615" dir="auto" contenteditable="true"><title draggable="true">Warlihak epcibtof wecuv.</title></head><body contenteditable="true"><img tabindex="286" src="cscc8wANjyM9"></img><abbr dir="auto">Fodumobo miceb cuk maffigra vutuwom.Maglas ka da ura.<ins contenteditable="true" tabindex="-173"><area contenteditable="true" dir="rtl" tabindex="539" shape="poly" hidden></area><progress><q tabindex="128" draggable="false" hidden contenteditable="true"></q>Azifa ga bavec lubet pa lowbokuhi zi.<q draggable="true" hidden tabindex="-777" contenteditable="true"></q></progress></ins></abbr><h3 draggable="false" hidden contenteditable="false" tabindex="238"><mark dir="auto"></mark><input contenteditable="true" type="checkbox" required multiple inputmode="numeric"></input></h3></body></html>',
      '<html lang="yOXp3("><head><title tabindex="143" draggable="false" dir="auto">Cir mu famhuluj huwsojwa lirhu mi mi.</title><base contenteditable="false" draggable="false"></base><base hidden draggable="true" dir="rtl"></base><script hidden contenteditable="true" defer tabindex="-323" dir="ltr"><title contenteditable="false" draggable="true" tabindex="-996" dir="auto">Cuhocuna jati hice ulbihmu.</title><base hidden dir="ltr" contenteditable="false"></base><progress tabindex="418" dir="auto" draggable="false" hidden>Lezenu bi ba vum.Omiwusleg dejof vop ja pil pevrunit fibzo.<small hidden draggable="true" tabindex="14"><q></q><kbd dir="auto" draggable="true" tabindex="-622"></kbd></small><wbr tabindex="492" hidden contenteditable=""></wbr>Upke sej.</progress></script><noscript><title contenteditable="" dir="ltr">Iliufo bu je di.</title><base></base><base draggable="true" dir="rtl"></base></noscript></head><body hidden><audio draggable="true" hidden preload="auto" contenteditable="true"></audio></body></html>',
      '<html lang="7g3Sn"><head draggable="false" contenteditable="true" dir="auto" tabindex="62"><title contenteditable="false">Zibelre jo bief ra kil apparon sinle.</title></head><body dir="auto"><datalist tabindex="-365" contenteditable="true" hidden></datalist><h3 contenteditable="" tabindex="843" hidden dir="ltr"><samp tabindex="-491" hidden contenteditable="false" dir="auto"><noscript dir="auto" draggable="true" tabindex="114" contenteditable="true">Firu vu fo dil.<button tabindex="965" draggable="true" type="button"></button><embed src="Qd!5k963o7m9mn8" dir="rtl" contenteditable="true" tabindex="908" hidden title="RDY8HG"></embed><area shape="circle" draggable="false"></area></noscript><map dir="rtl" tabindex="66"><bdo tabindex="139" dir="auto"></bdo></map><small draggable="false" tabindex="151" hidden>Bewolzec devdopo pewo tisirse uwsemi taw.</small>Dog inu oro wozisa waewu.</samp><bdo contenteditable="false" tabindex="-124"><embed tabindex="-537" contenteditable="false" draggable="false" dir="rtl" src="J2^HRqcH^k" title="KmF"></embed>Zi haf guzfi cizpe cemet gitanu cesnim.<input capture type="email" autofocus required spellcheck="default" checked dir="auto" contenteditable="true"></input>Budwup reha bicanip wahus atuor.<code>Bowebaf tiritoke lijukis.</code></bdo><object draggable="false" data="ki#PK[%I7nFJbLt2" hidden><del tabindex="-823" contenteditable="true"></del>Jamol gabfejus sopan mijpibfu cazeceh orjon.<kbd draggable="true" dir="auto" hidden tabindex="-215"></kbd>Su pun to kawi vikha.</object></h3><meta contenteditable="" hidden tabindex="-590" dir="rtl"></meta></body></html>',
      '<html contenteditable="false" lang="k6(ZHMngO(#42V74W1Z"><head draggable="true" tabindex="670" contenteditable="" dir="auto"><title draggable="true" dir="auto">Duk novelru tihi.</title><title>Rekmanam vespuk.</title><base tabindex="991" contenteditable="" dir="auto"></base></head><body><h6><b draggable="false" tabindex="-769"><math></math><datalist dir="auto" tabindex="-589"><wbr></wbr></datalist></b>Mo oz hanuvoni ufocekepe.</h6><template tabindex="-384" draggable="true" contenteditable=""><section draggable="true" hidden dir="rtl" contenteditable="false"><button tabindex="-748" type="submit"><svg contenteditable="true"></svg><template></template>Ahomoji be cimufvu eci pianevin wuavoed wehowdor.</button><img dir="auto" src="8" decoding="sync" crossorigin="use-credentials" tabindex="160" hidden></img></section><h5 draggable="true" hidden tabindex="-287" dir="rtl"><progress><a tabindex="18" hidden></a></progress></h5><object data="6*mY5f(wm05e0RJz" dir="rtl" tabindex="-45" hidden contenteditable="false"><style></style><noscript><param draggable="false"></param><param draggable="false" contenteditable="false" dir="auto" tabindex="298"></param><param contenteditable="" hidden draggable="true" tabindex="951"></param><div></div></noscript><nav hidden tabindex="965"><video contenteditable="false"></video><footer dir="rtl" draggable="false" hidden></footer><del></del>Fol zapfebozo nib dor re fa kenmez.</nav><math dir="ltr" contenteditable="false" draggable="false"><h4 draggable="true" tabindex="571" contenteditable=""></h4><svg hidden contenteditable="false"></svg><template dir="auto" contenteditable="true" tabindex="-33" draggable="true"></template><base dir="ltr"></base></math><aside draggable="false" contenteditable="" tabindex="-167" dir="ltr">Tuttuco ritnipra cosefiv kuko ako fi veh.<address draggable="true" hidden dir="rtl" tabindex="220"></address><object></object><map tabindex="-174"></map><time draggable="true" tabindex="371" hidden></time></aside></object><link contenteditable="false" hidden crossorigin="anonymous" draggable="true" href="S%6FWu]Rv^ApC"></link><script crossorigin="anonymous" integrity=")LnE@" src="sh#DGRMQAX" dir="ltr" contenteditable=""><h2><output></output></h2><noscript dir="ltr" tabindex="-169" contenteditable="true" draggable="true"><br draggable="false"></br><img decoding="async" draggable="false" dir="rtl" ismap contenteditable="true" src="07HR@#PpNict]ejN" tabindex="51" hidden></img></noscript><p contenteditable="" tabindex="-103" dir="rtl"></p></script></template><video contenteditable="" dir="ltr" hidden tabindex="323"><script contenteditable=""><time hidden><cite hidden></cite><ruby tabindex="-244" hidden dir="auto" draggable="false"></ruby><datalist hidden contenteditable="false"></datalist><cite hidden contenteditable="true" draggable="false"></cite></time></script><embed contenteditable="" dir="ltr" draggable="false" src="]#35gPv2i$WD4y&amp;XG7" title="7xG#8BivOWayyUBT"></embed><input multiple autofocus spellcheck="default" capture tabindex="643" required draggable="false" type="number"></input><iframe draggable="true" src="8ziClDMQsNJSD4O8310" hidden title="8oFa%Vf%(s">Ol date veami doweg.</iframe><button hidden autofocus contenteditable="" draggable="false" disabled type="reset" dir="ltr">Lamdubtum hoftakew ligzewu vodopni feevi dab.<cite hidden>Hesal jan mikwobuj dos igoja.</cite><var tabindex="-226" draggable="true" contenteditable="true"></var><bdi draggable="true" hidden><dfn draggable="true" tabindex="-333" hidden dir="auto"></dfn></bdi></button></video></body></html>'
    ]);
  });

  describe("when given a tag", () => {
    it("generates HTML strings starting with that tag", () => {
      expect(htmlString({ tag: "form" }).take(5), "to equal snapshot", [
        '<form method="get" novalidate></form>',
        "<form></form>",
        '<form method="post" draggable="false" hidden>Be mabuj do lisib valbuunu.De notibaw gokim sab.Nukonokan cuh zeenejom ju bu mahbu wot.<object hidden contenteditable="false" data="UHyheBxXyX1RVu$PIC" dir="auto"><s hidden dir="ltr"><q dir="ltr" draggable="true"><slot dir="rtl" draggable="false">Hakime ijicho ajkad mifdej fef wijug howeju.</slot>Umi je.Vapiz soze wu tumit ede waser wi.</q></s>Ta vej edowa rur va rimhuuw.Tajloewu zuecuaw sajopbed pol harhi.Los vendijjeg ukiipi.</object></form>',
        '<form draggable="true" hidden method="post" novalidate tabindex="-281" dir="ltr">Ohi suzceh egpa muvona to fejuhera.<u hidden dir="auto" tabindex="-810"><b><abbr tabindex="861">Ra ese tic girofod pohakmi haucmor.</abbr><bdi contenteditable="" tabindex="-549"><u draggable="true" contenteditable="false" hidden></u><var>Ura doal.Mo tuibe tupum foctub.</var><ruby draggable="false" tabindex="-573" hidden dir="ltr"><rtc tabindex="906" draggable="true" dir="ltr" hidden></rtc><rp contenteditable="true"></rp></ruby><picture></picture></bdi><ruby hidden dir="rtl" contenteditable="false"><strong><progress contenteditable="true" dir="auto"></progress><area contenteditable="false" dir="auto"></area><strong tabindex="755" contenteditable=""></strong>Pukju ca eceuzoli cicse gozzod puc cisrerud.</strong><rb hidden tabindex="84" dir="auto"><sub hidden contenteditable="" tabindex="581" dir="auto"></sub></rb><rb tabindex="754" contenteditable="true" draggable="false" dir="ltr"><noscript dir="ltr" contenteditable="true" tabindex="-572" hidden></noscript><datalist></datalist></rb><rp><slot></slot><datalist dir="auto" tabindex="556"></datalist><img contenteditable="false" tabindex="-523" decoding="async" crossorigin="" ismap src="H]UZRC%2d^u((e" hidden dir="rtl"></img>Kef nej jaj ulbihmu.</rp></ruby><label hidden dir="ltr" contenteditable="false"><select contenteditable="true"><template tabindex="381" hidden></template><template tabindex="-415" draggable="true" hidden contenteditable=""></template></select><time><meter dir="rtl"></meter><wbr></wbr><output tabindex="-606"></output><var hidden tabindex="-113" dir="auto" contenteditable="true"></var><img decoding="sync" src="DRjJcF36TV07p%kTb[" hidden dir="rtl"></img></time>Riis pitmep wutnu zenatij ti.<svg dir="ltr"><img crossorigin="anonymous" dir="auto" ismap tabindex="172" decoding="sync" src="8mzuz"></img><math></math><br contenteditable="false" draggable="true"></br></svg>Vedo vamfuj.</label><wbr></wbr></b>Aco uflul.<span hidden><label hidden tabindex="30" draggable="false"><input readonly autofocus draggable="false" contenteditable="true" type="reset"></input>Picronzik lelu sejuh hacfe.</label><audio draggable="true">Udusuebu pavuwrin esgu mam.<cite dir="auto" draggable="true" contenteditable="">Firu vu fo dil.<embed hidden draggable="false" src=")Ej*2]*pnCe&amp;21Qd!" title="63"></embed><area contenteditable="true" tabindex="523" shape="circle" hidden></area></cite><sub tabindex="392"><samp dir="rtl" tabindex="66"></samp><label draggable="false" contenteditable="false" dir="rtl"></label><meter></meter><mark tabindex="573" draggable="false" dir="ltr"></mark></sub>Zobewol katdevdo amahi.Bonsirse uwsemi taw pahas ociwowwo sen.</audio>Waewu defuf.Kuhhinla gubojmi.</span><audio preload="none" tabindex="919" hidden>Maket tego uzfi cizpe cemet.<button draggable="false" dir="rtl" type="reset" contenteditable="" autofocus tabindex="-776" hidden><meter draggable="true" hidden><slot hidden tabindex="222" dir="ltr" contenteditable=""></slot>Det iphoc usetumur me cap.<q></q><span tabindex="-122"></span><canvas hidden dir="auto"></canvas></meter><ins dir="ltr"><output draggable="false"></output>Zodenuw gilpe wokhaeku.<iframe title="mZuYb8^Ni8Q">Tiwec fe.</iframe><noscript dir="rtl" hidden draggable="false" tabindex="494"></noscript></ins></button>Mepibfu cazeceh orjon moodoge jan elsajzic lopo.</audio><span draggable="false" dir="ltr" hidden><video preload="none" tabindex="185" contenteditable="true" draggable="false"><progress hidden><ruby dir="ltr" contenteditable="" hidden tabindex="115"></ruby>Zuelru tihi cu kisciam vespuk hibiz if.<time dir="auto" hidden></time>Dib tijuk merohac jejog.<label contenteditable="" dir="rtl"></label></progress><q dir="auto"></q><progress tabindex="798"><ins tabindex="614" hidden draggable="true" dir="auto"></ins></progress><del><track hidden contenteditable="" dir="ltr" draggable="true"></track></del><q>Cozim umamipoz ale zisu divje ib.<small tabindex="932" hidden contenteditable="false" dir="ltr"></small></q></video>Be cimufvu eci pianevin.Imo hudfojhow togavuvi aba hofatesi ge kun.<bdi contenteditable="true" dir="auto" hidden>Zat voohwo sij cav uruzoso.<abbr contenteditable=""></abbr><var dir="ltr" tabindex="1" hidden draggable="true"><u contenteditable="false" dir="auto"></u></var><input hidden readonly dir="auto" inputmode="url" type="url"></input></bdi></span></u><em tabindex="-442" draggable="true"><script contenteditable="" integrity="#g5l"><blockquote hidden contenteditable="false" tabindex="617"><a draggable="true"></a><blockquote draggable="true" dir="ltr" contenteditable="false">Puwep ezoboldag sab tekis kam ijbu.Kaser afavatar.</blockquote><div contenteditable="true" draggable="false" hidden dir="ltr"><dd tabindex="-80" hidden dir="auto"></dd><dd draggable="false" hidden></dd><dd contenteditable="" draggable="false"></dd><dd contenteditable="" dir="auto" draggable="true"></dd></div><data contenteditable="" hidden draggable="true"></data></blockquote><article contenteditable="false" draggable="false"><audio draggable="false" contenteditable="false" hidden preload="none" dir="rtl"><section tabindex="-725" draggable="true"></section><area hidden tabindex="592" shape="default" dir="rtl" draggable="true"></area></audio><progress hidden><select multiple hidden size="181" tabindex="69" dir="rtl" required contenteditable=""></select>Silon te mev kisak neicfe kofil tur.</progress>Fe wep zuali.Gidjudi cap na kasarmu vabkoz nemperfab fo.Vaz wo hu hoezuva tueno ot vofvuktic.</article></script><code hidden></code></em><h4 hidden contenteditable="true" tabindex="871" dir="auto"></h4></form>',
        '<form draggable="false" autocomplete="off" contenteditable="true" tabindex="902"><i hidden><img draggable="true" tabindex="643" src="LCO@(M!J^b8ziClD" decoding="async" dir="ltr"></img><keygen draggable="false" tabindex="718"></keygen></i><h4 draggable="true" contenteditable="false" tabindex="71" hidden><time hidden dir="ltr"><meter>An oz dureb dubtum hoftakew ligzewu.<canvas draggable="false" tabindex="149" hidden dir="rtl">Be seteg salug vok novaz.<svg contenteditable="false"></svg><code hidden dir="auto" tabindex="-265"></code></canvas><canvas draggable="true" contenteditable="true" dir="rtl" hidden><math tabindex="271"></math>Helgouj runij raz togamdi zajvu.<audio draggable="false" tabindex="-20" dir="auto" contenteditable="false"></audio></canvas></meter><b dir="rtl" hidden><slot contenteditable="" draggable="false" hidden dir="ltr"></slot></b><script hidden><h3 contenteditable="true"><math tabindex="397" display="inline" draggable="false"></math><input multiple required capture type="date" checked></input><u></u><math draggable="false"></math><span hidden tabindex="-862"></span></h3></script>Suefe mudlac pauc udikum jatafto.<sub dir="auto" contenteditable="" tabindex="-211"><audio draggable="false" dir="ltr" contenteditable="" hidden preload=""><b draggable="true" tabindex="221" hidden></b></audio><em hidden draggable="true" tabindex="887">Gojube piag vafteh hoz.<math display="block"></math></em></sub></time>Detil dadakes.<map draggable="false" hidden dir="rtl"><textarea minlength="825" tabindex="-660" rows="896" disabled maxlength="637" spellcheck="default" contenteditable="false" draggable="true" required autocomplete="on" autofocus readonly>Wu vaba vatdaom liujzup ladiesa ba uwe.</textarea><bdi hidden contenteditable="false" dir="ltr"></bdi></map>Hoc ribuho.Ud supup.</h4>Ce sec milo jew giv.<a>Hosnuzon vakiugu wafo.<figure contenteditable="true" hidden draggable="true"><figcaption hidden dir="rtl" contenteditable="" draggable="false"><td dir="ltr" contenteditable="" colspan="555" rowspan="733" draggable="false" hidden><h3 hidden tabindex="-202" contenteditable="false" dir="auto"></h3><map dir="rtl" hidden contenteditable="false"></map><a contenteditable="false" dir="auto" hidden tabindex="217"></a></td></figcaption><header hidden><cite contenteditable="" dir="rtl" tabindex="875"><audio></audio><data hidden draggable="true"></data><noscript draggable="false"></noscript></cite>Kot gotpijde.</header><samp draggable="true" contenteditable="true" hidden><wbr hidden contenteditable="false"></wbr><em hidden dir="rtl" draggable="true" tabindex="-566">Huhuel ak podcas ikwasfe feopi ceceje.<abbr dir="auto"></abbr><output tabindex="-371"></output><math display="block" tabindex="-62" dir="rtl"></math>Kiscu wo.</em>Rumatag puzfo gineonu dawe durim.<progress contenteditable="true" tabindex="-792" draggable="false" hidden>Efonuno jatdujub.<sup hidden dir="auto" contenteditable=""></sup><button disabled autofocus type="reset"></button></progress></samp><fieldset><legend dir="ltr" draggable="true" tabindex="452" contenteditable="true"><keygen contenteditable="true"></keygen>As tetef.</legend>Palrodtu igapan ge vudnoucu askuzpu woh izi.<mark contenteditable="" tabindex="29" hidden>Dosulapi hi ijihoac hid zizonon etiugo.<select></select>Kebarfu uvja vugej bo vo igoacohow.<em hidden contenteditable="true" dir="rtl" tabindex="-460"></em></mark><select autofocus dir="ltr" hidden><script src="b[)T1PwU9NuU#Hiq0" draggable="false" dir="ltr" crossorigin="" tabindex="-242" integrity="I" defer hidden nomodule async></script><option tabindex="48" contenteditable="false" dir="auto" disabled hidden>Seufore jakjutsip ef doru eta sammahmis kud.</option></select>Opi wogpac al jugnozjok.</fieldset><button type="button"><area hidden contenteditable="true"></area></button></figure><sup draggable="true" dir="rtl" hidden contenteditable="true"><code>Jajet tu kum.<area shape="default" contenteditable="true" dir="ltr"></area>Me muwwen juozubup we bovedlul damis malomop.<label hidden dir="ltr" draggable="false"><bdo hidden contenteditable="" draggable="false"></bdo>Bok nise dun no cujekicem ani lul.Zicin lo mom fakfaw odbilob cose eni.</label><object data="mk)" dir="ltr"></object></code><meter draggable="true" tabindex="-209" hidden contenteditable="false">Nidudez nusu uceudelu.Udirifhuv juwa pe hurijsi.</meter></sup></a><ol><script tabindex="-201" defer>Hazino nubzo cojiv udu ucieli pe.<blockquote dir="rtl" draggable="false"><meter tabindex="-854" dir="rtl" contenteditable="true" hidden><data></data><template tabindex="527" draggable="false"></template><abbr dir="auto" hidden draggable="true"></abbr><progress hidden contenteditable="false" draggable="false" dir="auto"></progress><select contenteditable="" size="754"></select></meter><template hidden tabindex="614" draggable="true" dir="rtl"><article contenteditable="" tabindex="809"></article><progress contenteditable="false" tabindex="-682" draggable="true"></progress></template><header hidden contenteditable="" draggable="true" tabindex="403">Ah mebeneg hubgek davpul apito noah ridawwek.</header><noscript contenteditable="true" dir="auto"></noscript><meter hidden>Wewucela osku lag ehiiwu ijoz.Va lupwob ho guhdurohe zo cajuj.</meter></blockquote></script><li tabindex="-635" dir="auto">Murlo wugorsah opwo tak.<code hidden dir="ltr" contenteditable=""></code></li><script defer contenteditable="" src="^y!b0" nomodule><h1><var dir="ltr" draggable="false" contenteditable=""></var><input autofocus readonly tabindex="-642" dir="rtl" spellcheck="default" draggable="false" hidden contenteditable="" inputmode="search" multiple type="reset"></input><embed src="5S5vHpDlw%e0q*sSJJ" tabindex="-474" hidden title="("></embed><del dir="rtl" hidden tabindex="963" draggable="true">Jaz tujvoaj kesruwo fub hibmu zej.<cite tabindex="-929" draggable="false"></cite>Mira pecovuz ekeucaolu ozihel sacta.<sup contenteditable="false" tabindex="-944" draggable="false" dir="rtl"></sup></del></h1><object data="1wsrVHX5m)" tabindex="772" hidden dir="rtl" contenteditable="true"></object><h2 contenteditable="true" hidden dir="ltr" tabindex="634"><canvas draggable="true" tabindex="-29" hidden contenteditable="true">Lodooc setohen mohuf ucaefoha fujezso.<dfn draggable="false" tabindex="282"></dfn><wbr tabindex="-419" hidden></wbr><wbr tabindex="-204" dir="ltr" draggable="true"></wbr>Ebe laov maeva.</canvas></h2><textarea readonly minlength="931" spellcheck="default" rows="127" tabindex="532">Las hebehu wa hotokzin.</textarea>Aragde utihos sapci.</script><template hidden draggable="false">Ohodon pom uw.<style tabindex="-462" contenteditable="false"></style><img dir="ltr" crossorigin="" ismap decoding="async" src="X[l@i" tabindex="727"></img></template><script tabindex="907" nomodule src="5" hidden draggable="true" crossorigin=""><video tabindex="-430" hidden draggable="true"><select hidden draggable="true" dir="ltr" disabled autofocus tabindex="817" contenteditable="true" required size="797"><optgroup disabled draggable="false" hidden></optgroup></select><embed tabindex="-51" src="vCwoAET*yF2" title="fs5AvgGy"></embed><template dir="rtl" contenteditable="false" hidden><ruby contenteditable="false" hidden tabindex="-915"></ruby><nav></nav><embed src="P2o0RFpzMDftSpMJ2tUv" contenteditable="true" tabindex="969" title="fmf&amp;(fvFgZSH"></embed><blockquote></blockquote><nav dir="rtl" draggable="true"></nav></template><blockquote draggable="true" tabindex="271" hidden><cite tabindex="-202" contenteditable="true" draggable="false"></cite>Molihil hestasgup bo ducut.<canvas tabindex="438" dir="auto"></canvas></blockquote></video><blockquote hidden><dfn tabindex="-248" contenteditable="" draggable="true" dir="ltr"></dfn><data tabindex="-355">Oh ajuohafe zespec musokev ivoat.<s draggable="false" tabindex="428"></s></data><data hidden contenteditable="true">Pa dewibmew fi gup.<output tabindex="-110" draggable="true" hidden></output>Nirejlat eheazote jugkaw.<mark contenteditable="true"></mark></data></blockquote><embed draggable="false" contenteditable="false" src="I3EGaTv" title="En1ZCqKiF"></embed><object contenteditable="true" tabindex="-161" draggable="true" dir="rtl"></object></script></ol></form>'
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
