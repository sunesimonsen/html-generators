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
              children: []
            },
            {
              type: "tag",
              tag: "video",
              attributes: {
                contenteditable: "false",
                hidden: null,
                dir: "rtl",
                draggable: "true"
              },
              children: [
                {
                  type: "tag",
                  tag: "embed",
                  children: [],
                  attributes: {
                    hidden: null,
                    dir: "auto",
                    src: "H*D%&S1&ygQoMd)y!",
                    title: "N9RA)uSOukv7mfb"
                  }
                }
              ]
            },
            {
              type: "tag",
              tag: "title",
              attributes: { hidden: null, dir: "ltr" },
              children: [{ type: "text", value: "Woscujduv neclekos junla." }]
            },
            {
              type: "tag",
              tag: "select",
              attributes: {
                multiple: null,
                size: "523",
                disabled: null,
                autofocus: null,
                hidden: null,
                dir: "rtl",
                required: null,
                contenteditable: "",
                draggable: "true"
              },
              children: [
                {
                  type: "tag",
                  tag: "option",
                  attributes: {},
                  children: [
                    { type: "text", value: "Riide rohu jod tuhdulhak retijic." }
                  ]
                },
                {
                  type: "tag",
                  tag: "option",
                  attributes: { dir: "rtl" },
                  children: [{ type: "text", value: "Ehfimif jeofhi." }]
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
      '<html hidden lang="25SSlGlheH#ySk0Wbe)"><head><title contenteditable="" draggable="true" tabindex="-291" dir="rtl">Uj do.</title></head><body contenteditable="true" dir="ltr" hidden><canvas dir="ltr"></canvas><a hidden></a><video contenteditable="false" hidden dir="rtl" draggable="true"><embed hidden dir="auto" src="H*D%&amp;S1&amp;ygQoMd)y!" title="N9RA)uSOukv7mfb"></embed></video><title hidden dir="ltr">Woscujduv neclekos junla.</title><select multiple size="523" disabled autofocus hidden dir="rtl" required contenteditable="" draggable="true"><option>Riide rohu jod tuhdulhak retijic.</option><option dir="rtl">Ehfimif jeofhi.</option></select></body></html>',
      '<html hidden dir="ltr" lang="sZK0wkv]ctT[LEdcuz^U"><head draggable="false" hidden><title dir="rtl" contenteditable="true" hidden>Ruav pa envewi logumem fojdewire guz regduw.</title></head><body tabindex="-349" hidden><section contenteditable="false" hidden tabindex="581" dir="rtl"></section><section hidden tabindex="-549" contenteditable="false" draggable="true">Towohram jeguze ipilip.<abbr hidden dir="auto"><abbr><var tabindex="-385" hidden></var><template dir="rtl"></template><a draggable="true"></a><i hidden tabindex="-615" dir="auto" contenteditable="true"></i><video hidden></video></abbr><area dir="auto" hidden tabindex="-553" draggable="true" contenteditable="false"></area></abbr><form method="post" dir="rtl" autocomplete="off">Cuvbe nibel uhu bebah demzef navgiro.</form></section><h5 contenteditable="true" draggable="false" tabindex="-41"><keygen contenteditable=""></keygen>Mor fune dof jozwom wibse daj ca.</h5><style><section contenteditable="true" dir="auto" tabindex="-346"><h6 tabindex="934" contenteditable="true" hidden><s hidden dir="rtl"></s><audio tabindex="906" preload="" draggable="true"></audio><u contenteditable="true"></u><output></output><strong hidden dir="rtl" contenteditable="false"></strong></h6><u>Tubokuhi zi usilesev egizosde pitkedeb iva.<bdo dir="auto"></bdo></u></section></style></body></html>',
      '<html tabindex="-448" dir="ltr" hidden lang="OXp3(656ig&amp;K"><head><title dir="auto" draggable="false">Ecwemu famhuluj huwsojwa lirhu mi.</title><title contenteditable="true">Dod zorhukne rek buzbewru cemucite.</title></head><body dir="rtl" tabindex="-902" draggable="true"><u><input hidden disabled type="tel" contenteditable="true" required></input></u><svg dir="auto" contenteditable="false" hidden><h5></h5><time><strong><img crossorigin="" decoding="sync" contenteditable="false" draggable="false" ismap dir="auto" tabindex="1000" src="PR41*4!BsrHpjs(uSpq#"></img><sub hidden contenteditable="" dir="auto"></sub></strong><wbr draggable="false" hidden></wbr></time><h1 draggable="false" hidden dir="rtl" contenteditable="true"></h1><title contenteditable="true" dir="auto">Talonmik wem awjo.</title><script nomodule crossorigin="" integrity="[TKzypUQrz" src="IjRlDkZVnnZ" dir="rtl"><noscript contenteditable="" dir="ltr" tabindex="120" draggable="true"><h2 hidden></h2><math></math></noscript><label draggable="false" tabindex="-921" hidden></label><link href="7g3Sn["></link>Peplil cadfoivi bavliha lab efki.Kil apparon.</script></svg><h3 hidden draggable="true"><textarea maxlength="488" disabled hidden tabindex="186" autocomplete="on" minlength="806" rows="55" readonly cols="843" dir="ltr">Uzamiz buzpavuw.</textarea></h3><object hidden draggable="false" tabindex="-187" dir="ltr"><h2 contenteditable="true"><map contenteditable="" draggable="true">Silaw zukosofa ossav etgodfat tiw.Ser noiljis sejmem igrak.Wer av rosoz kog fafwolzec devdopo pewo.Son hijguw hikju inpa bosuc wowwo.</map><output><picture draggable="true" contenteditable="false" hidden tabindex="-124"></picture><b tabindex="-519"></b>Cogu semiewu kioli nu gi.<time contenteditable="true" dir="auto"></time></output><i hidden>Uzfi cizpe cemet gitanu cesnim.</i></h2><object draggable="true" data="y@f" dir="auto"><param draggable="false" hidden></param><param tabindex="-254" draggable="true" dir="auto"></param></object><bdo contenteditable="true" draggable="true"><datalist dir="rtl" hidden draggable="true" contenteditable="">Tiritoke lijukis nuhu.<option disabled tabindex="895" contenteditable="false" selected draggable="true" dir="rtl">Zitig tu.</option><code tabindex="272" contenteditable=""></code><option hidden contenteditable="true" tabindex="-652" draggable="false" dir="auto" disabled>Fe ishoppan.</option>Mepibfu cazeceh orjon moodoge jan elsajzic lopo.</datalist>Neac vubile oza vimciiso zostuz pof.Orcooza nuhdo guukalo elrubon racu kisciam.<picture hidden draggable="false"><source contenteditable="true" tabindex="933" draggable="true" hidden></source><script contenteditable="false" hidden src="D4gEyF" crossorigin="use-credentials" integrity="aiIAvv@v0rRdub^" draggable="true" defer dir="rtl" nomodule async></script><template dir="auto"></template><img src="6tgRE[$$*SI%T]m3]er"></img><img ismap crossorigin="" dir="rtl" hidden tabindex="-36" draggable="false" contenteditable="false" src="7eU)q$M&amp;S]MmtDM4K"></img></picture><sub contenteditable="true" hidden draggable="true" tabindex="537"><svg contenteditable="true"></svg><template></template>Ahomoji be cimufvu eci pianevin wuavoed wehowdor.</sub></bdo><small contenteditable="false" tabindex="-29" draggable="false"></small></object><h2>Ja undej rudah.<button contenteditable="" hidden draggable="false" tabindex="102" disabled dir="auto" type="submit">Cav uruzoso cakel hobfeuw.<canvas contenteditable="false" dir="auto">Udawumup zeuhku zebuwen.Ruge zanumbot bu tatpasa hinhi ti so.<data dir="rtl" hidden></data>Puwep ezoboldag sab tekis kam ijbu.</canvas><b><br hidden tabindex="-671" draggable="false"></br><code contenteditable="false" draggable="false" hidden></code></b><math hidden dir="rtl" overflow="scale" tabindex="339"><picture draggable="true" dir="auto" hidden></picture><script></script><sub></sub></math></button><noscript hidden></noscript><mark tabindex="-337" draggable="true"><ruby draggable="false" tabindex="-72" contenteditable="" hidden><rb draggable="true" contenteditable="false" tabindex="425" dir="rtl"></rb></ruby><button disabled type="reset"><kbd tabindex="592" hidden></kbd><svg dir="rtl"></svg></button>Wedwiw teum ec hamin.<data draggable="true" dir="rtl"><input type="hidden"></input><ruby hidden draggable="true"></ruby></data><meter dir="auto"></meter></mark></h2></body></html>',
      '<html contenteditable="false" dir="auto" lang="HsR"><head><title contenteditable="true">Novali rembecam cap na.</title><base contenteditable="" dir="auto" tabindex="-397" hidden></base></head><body tabindex="-639" draggable="false"><embed hidden contenteditable="" tabindex="940" src="m)ng2XlGr#)nsZW" title="BYbKsT9#@Q4ci&amp;6Z^YSp"></embed><input required autofocus disabled checked capture dir="rtl" hidden spellcheck="true" inputmode="email" type="submit"></input><iframe contenteditable="true" draggable="true" dir="auto" tabindex="-926" title="%4#7xG#8B">Kelok lemse neci vozim ezipub.</iframe></body></html>',
      '<html dir="rtl" contenteditable="true" tabindex="-534" hidden lang="4O8310(Mb8oF"><head tabindex="-197" contenteditable="true" dir="rtl" draggable="true"><title>Joh rindoweg adgargom jat humic.</title></head><body tabindex="112" draggable="true" dir="rtl" contenteditable="true"><textarea autocomplete="off" required spellcheck="false" readonly maxlength="810" hidden>Mi ho nemgate rohe cidjan.</textarea>Niwobuj dos igoja sakle tapu ace.<aside draggable="false" dir="rtl" tabindex="-324"><article dir="auto" draggable="true" tabindex="-333" hidden>Mak zajvu ojdefaz.<cite tabindex="521" hidden dir="rtl"><slot contenteditable="" draggable="false" hidden dir="ltr"></slot></cite><script hidden><h2 contenteditable="true"></h2></script></article></aside><canvas draggable="false"><aside draggable="false"><canvas dir="ltr" contenteditable="true" tabindex="628" draggable="false"><s></s>Uz otipu sid zufpu fojci fez.Udikum jatafto.<audio draggable="true" contenteditable="true" dir="ltr"></audio><abbr tabindex="-984" hidden></abbr></canvas><ins></ins><math></math></aside></canvas></body></html>'
    ]);
  });

  describe("when given a tag", () => {
    it("generates HTML strings starting with that tag", () => {
      expect(htmlString({ tag: "form" }).take(5), "to equal snapshot", [
        '<form method="get" novalidate></form>',
        "<form></form>",
        '<form method="post" draggable="false" hidden>Be mabuj do lisib valbuunu.De notibaw gokim sab.Nukonokan cuh zeenejom ju bu mahbu wot.<object hidden contenteditable="false" data="UHyheBxXyX1RVu$PIC" dir="auto"><s hidden dir="ltr"><q dir="ltr" draggable="true"><slot dir="rtl" draggable="false">Hakime ijicho ajkad mifdej fef wijug howeju.</slot>Umi je.Vapiz soze wu tumit ede waser wi.</q></s>Ta vej edowa rur va rimhuuw.Tajloewu zuecuaw sajopbed pol harhi.Los vendijjeg ukiipi.</object></form>',
        '<form draggable="true" hidden method="post" novalidate tabindex="-281" dir="ltr">Ohi suzceh egpa muvona to fejuhera.<u hidden dir="auto" tabindex="-810"><b><abbr tabindex="861">Ra ese tic girofod pohakmi haucmor.</abbr><bdi contenteditable="" tabindex="-549"><u draggable="true" contenteditable="false" hidden></u><var>Ura doal.Mo tuibe tupum foctub.</var><ruby draggable="false" tabindex="-573" hidden dir="ltr"><rtc tabindex="906" draggable="true" dir="ltr" hidden></rtc><rp contenteditable="true"></rp></ruby><picture></picture></bdi><ruby hidden dir="rtl" contenteditable="false"><strong><progress contenteditable="true" dir="auto"></progress><area contenteditable="false" dir="auto"></area><strong tabindex="755" contenteditable=""></strong>Pukju ca eceuzoli cicse gozzod puc cisrerud.</strong><rb hidden tabindex="84" dir="auto"><sub hidden contenteditable="" tabindex="581" dir="auto"></sub></rb><rb tabindex="754" contenteditable="true" draggable="false" dir="ltr"><noscript dir="ltr" contenteditable="true" tabindex="-572" hidden></noscript><datalist></datalist></rb><rp><slot></slot><datalist dir="auto" tabindex="556"></datalist><img contenteditable="false" tabindex="-523" decoding="async" crossorigin="" ismap src="H]UZRC%2d^u((e" hidden dir="rtl"></img>Kef nej jaj ulbihmu.</rp></ruby><label hidden dir="ltr" contenteditable="false"><select contenteditable="true"><template tabindex="381" hidden></template><template tabindex="-415" draggable="true" hidden contenteditable=""></template></select><time><meter dir="rtl"></meter><wbr></wbr><output tabindex="-606"></output><var hidden tabindex="-113" dir="auto" contenteditable="true"></var><img decoding="sync" src="DRjJcF36TV07p%kTb[" hidden dir="rtl"></img></time>Riis pitmep wutnu zenatij ti.<svg dir="ltr"><img crossorigin="anonymous" dir="auto" ismap tabindex="172" decoding="sync" src="8mzuz"></img><math></math><br contenteditable="false" draggable="true"></br></svg>Vedo vamfuj.</label><wbr></wbr></b>Aco uflul.<span hidden><label hidden tabindex="30" draggable="false"><input readonly autofocus draggable="false" contenteditable="true" type="reset"></input>Picronzik lelu sejuh hacfe.</label><audio draggable="true">Udusuebu pavuwrin esgu mam.<cite dir="auto" draggable="true" contenteditable="">Firu vu fo dil.<embed hidden draggable="false" src=")Ej*2]*pnCe&amp;21Qd!" title="63"></embed><area contenteditable="true" tabindex="523" shape="circle" hidden></area></cite><sub tabindex="392"><samp dir="rtl" tabindex="66"></samp><label draggable="false" contenteditable="false" dir="rtl"></label><meter></meter><mark tabindex="573" draggable="false" dir="ltr"></mark></sub>Zobewol katdevdo amahi.Bonsirse uwsemi taw pahas ociwowwo sen.</audio>Waewu defuf.Kuhhinla gubojmi.</span><audio preload="none" tabindex="919" hidden>Maket tego uzfi cizpe cemet.<button draggable="false" dir="rtl" type="reset" contenteditable="" autofocus tabindex="-776" hidden><output draggable="true" hidden><small hidden tabindex="222" dir="ltr" contenteditable=""></small>Det iphoc usetumur me cap.<s></s><strong tabindex="-122"></strong><canvas hidden dir="auto"></canvas></output><kbd dir="ltr"><progress draggable="false"></progress>Zodenuw gilpe wokhaeku.<i></i><picture contenteditable="false" draggable="false" tabindex="117" dir="rtl"></picture></kbd></button>Mol gabfejus sopan.</audio><span tabindex="422" dir="rtl" hidden contenteditable="">Jonnepodo jajan elsajzic lopo nigacboz sa duudo.Paruzop vorezepof curcooza nuhdo guukalo elrubon racu.<datalist draggable="true" dir="rtl" hidden><option hidden tabindex="427" selected>Nubav luw ubcoma.</option></datalist><sup draggable="false" tabindex="-769"><math></math><datalist dir="auto" tabindex="-589"><wbr></wbr></datalist></sup><iframe contenteditable="false" dir="auto" title="tgRE[$$*SI%T]m3]">Tenpagge gu lucufuonu hezir.</iframe></span></u><em contenteditable="true" hidden draggable="true" tabindex="537"><svg contenteditable="true"><video contenteditable="" dir="auto" tabindex="48" preload="metadata"></video><section dir="auto" contenteditable="false" draggable="true" tabindex="-883"><strong dir="auto" draggable="false" hidden tabindex="-851"><i></i>Navbatho buesiba te tagtaata za uvmo zat.<s contenteditable="" draggable="true" hidden tabindex="771"></s><samp draggable="true" dir="auto"></samp>Ulodisba kel hobfeuw nuro jevzova oza wu.</strong><picture draggable="false" hidden dir="ltr" tabindex="-984"><img decoding="auto" dir="rtl" src=")lnp#g5l5H"></img><template hidden contenteditable=""></template></picture><math overflow="linebreak" display="block" hidden contenteditable="true" draggable="true" tabindex="686"><button type="reset"></button><canvas dir="rtl"></canvas></math></section><svg dir="rtl" hidden></svg><h4 dir="auto" tabindex="-657" hidden><small contenteditable="false">Ohpiij ac kaser afavatar sucomwu.<picture tabindex="-612" draggable="true" dir="ltr" hidden></picture><iframe hidden draggable="true" tabindex="40" src="Gg1e" dir="ltr" title="J#Tqy[Iy3n#6G">Bop um tamoci hu.</iframe></small>Usi mojlozbiv sibmin itijunij.<slot dir="rtl"><select multiple hidden size="181" tabindex="69" dir="rtl" required contenteditable=""></select>Silon te mev kisak neicfe kofil tur.</slot>Fe wep zuali.</h4><script nomodule async dir="ltr" tabindex="51" contenteditable="true" crossorigin="" integrity="n*gxh" hidden src="YkD]J)Yab(xV"><datalist><u hidden></u></datalist><input type="week" draggable="false"></input><iframe tabindex="865" contenteditable="false" title="">Sewekosaj unku uvzanwa mohvitzut et jibeh.</iframe><br dir="rtl" draggable="true" tabindex="449"></br><audio hidden><embed hidden contenteditable="true" draggable="false" src="@(M!J^b8" title="lD"></embed><canvas dir="auto" draggable="false"></canvas></audio></script></svg><template hidden draggable="false" tabindex="-431">Fi rekut secwok mud.<title contenteditable="false" tabindex="184">Gewmicame taz.</title><time><math tabindex="353" dir="ltr" draggable="true" display="inline"><strong draggable="false" tabindex="149" hidden dir="rtl"></strong></math><data><svg draggable="true" contenteditable="" dir="rtl" hidden></svg></data>Teg salug vok novaz acwen.</time><h1 dir="rtl" hidden contenteditable="false" draggable="false"><img hidden draggable="false" src="VN"></img></h1><ins draggable="true" tabindex="-333" hidden dir="auto"></ins></template>Liznij raz togamdi zajvu ojdefaz zigvichat dotzarba.</em><h4 dir="ltr"><b draggable="true" dir="auto"><button hidden dir="rtl" type="reset" tabindex="878" disabled contenteditable="false">Hez tutfivon suefe.Adlacbi uc udikum jatafto fero.<bdi>Jukfa ah.<small contenteditable=""></small></bdi><abbr contenteditable="" draggable="false" dir="ltr"><cite></cite><output draggable="true" dir="rtl" hidden contenteditable="true"></output><slot contenteditable="" draggable="true" dir="rtl" hidden></slot></abbr></button><mark draggable="false" contenteditable="false"></mark><object hidden><a contenteditable="" hidden tabindex="-548" draggable="true"><param></param>Honujmul owadop.</a>Akajubew apvenog cimfas.<cite draggable="true" dir="ltr" tabindex="717" contenteditable="">Usvofgi vus ma.Uwe hozvede.<select draggable="true" disabled contenteditable="false" tabindex="-293" autofocus size="980"></select><label draggable="false" hidden></label></cite></object></b><datalist></datalist></h4></form>',
        '<form><noscript dir="rtl"><object dir="ltr" draggable="false" hidden contenteditable="false"><title dir="auto" hidden tabindex="-461" contenteditable="false">Gobki jumwafo azpiej rozipdi dun zidni.</title></object><em><select draggable="true" size="375" tabindex="554" autofocus multiple disabled></select><dfn hidden tabindex="-202" contenteditable="false" dir="auto"><small tabindex="-449" draggable="false">Fef diiliwac.Wib viseb pofakot gotpijde hahaaso.<ins hidden tabindex="-638" contenteditable="true" dir="auto"></ins><canvas></canvas></small><embed src="pnPA[ymbZbR9RuZM&amp;w5*" tabindex="-853" title="B!In"></embed></dfn>Olfoc ilu wasfe feopi ceceje it.<strong tabindex="-371"><small>Femmocu wo divmat hosuz vo.Kih sujdawe durim.</small>Ek corrocnu favuf nunorec dujubale idkos bedvudhez.</strong></em><bdo draggable="true" hidden>Loakdo gefdej sepapgu palrodtu.<time tabindex="277">Tucidu kuzpuvo fuuko.Vi bot.Lo kuawdos nut kepu kifwadar fu nastip.<select hidden disabled required autofocus draggable="true"><script contenteditable="" src="zZ" crossorigin="anonymous" dir="ltr" defer async hidden></script><option dir="auto" contenteditable="false">Ata howvan li hura utpi mo uha.</option><optgroup tabindex="805" dir="ltr" hidden draggable="false" disabled></optgroup><optgroup tabindex="-635" draggable="true" dir="ltr"></optgroup></select><button contenteditable="true" hidden type="reset" autofocus dir="ltr"><bdi dir="ltr"></bdi></button></time><input disabled contenteditable="" spellcheck="false" multiple inputmode="text" type="text" checked autofocus draggable="false" hidden dir="ltr"></input></bdo></noscript>Jutsip ef.</form>'
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
