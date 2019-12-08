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
                  attributes: { hidden: null, src: "Qnc)!", title: "D%&S1&ygQ" }
                }
              ]
            },
            {
              type: "tag",
              tag: "title",
              attributes: { contenteditable: "false", hidden: null },
              children: [
                { type: "text", value: "Luhredad uk gebuwo zoclodevo dako." }
              ]
            },
            {
              type: "tag",
              tag: "select",
              attributes: { disabled: null },
              children: [
                {
                  type: "tag",
                  tag: "script",
                  attributes: { async: null, hidden: null, dir: "ltr" },
                  children: [
                    {
                      type: "tag",
                      tag: "math",
                      attributes: {},
                      children: [
                        {
                          type: "tag",
                          tag: "embed",
                          children: [],
                          attributes: {
                            draggable: "true",
                            dir: "ltr",
                            src: "N3pq*fSvZl$&U",
                            title: "h#H7qn"
                          }
                        },
                        {
                          type: "tag",
                          tag: "svg",
                          attributes: {
                            tabindex: "356",
                            draggable: "false",
                            contenteditable: "",
                            dir: "ltr"
                          },
                          children: []
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "bdo",
                      attributes: {
                        draggable: "true",
                        contenteditable: "",
                        tabindex: "-511"
                      },
                      children: [
                        { type: "text", value: "Ofhi mechug poh." },
                        { type: "text", value: "Ben mabkuhod." }
                      ]
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "script",
                  attributes: {
                    async: null,
                    tabindex: "-728",
                    integrity: "U[UDN8g7"
                  },
                  children: []
                },
                {
                  type: "tag",
                  tag: "optgroup",
                  attributes: { hidden: null },
                  children: [
                    {
                      type: "tag",
                      tag: "template",
                      attributes: {},
                      children: [
                        {
                          type: "tag",
                          tag: "s",
                          attributes: {
                            hidden: null,
                            dir: "auto",
                            tabindex: "-676",
                            draggable: "false"
                          },
                          children: []
                        },
                        { type: "text", value: "Irevaumi huuw ipaje." },
                        {
                          type: "tag",
                          tag: "strong",
                          attributes: {
                            hidden: null,
                            tabindex: "-780",
                            draggable: "false"
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
                          tag: "canvas",
                          attributes: {},
                          children: []
                        }
                      ]
                    }
                  ]
                },
                {
                  type: "tag",
                  tag: "template",
                  attributes: {
                    hidden: null,
                    draggable: "true",
                    dir: "auto",
                    contenteditable: "true"
                  },
                  children: [
                    {
                      type: "tag",
                      tag: "embed",
                      children: [],
                      attributes: { src: "rKyn3BW3!1WwQOg", title: "tssR[[D" }
                    },
                    {
                      type: "tag",
                      tag: "map",
                      attributes: {
                        tabindex: "645",
                        draggable: "false",
                        dir: "rtl",
                        hidden: null
                      },
                      children: [
                        {
                          type: "text",
                          value: "Ohijoow ru uvake jel re wundevuj pe."
                        },
                        {
                          type: "tag",
                          tag: "blockquote",
                          attributes: {
                            dir: "auto",
                            draggable: "false",
                            hidden: null,
                            tabindex: "-553"
                          },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "address",
                          attributes: {
                            draggable: "false",
                            hidden: null,
                            contenteditable: "",
                            dir: "rtl"
                          },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "nav",
                          attributes: { hidden: null, tabindex: "397" },
                          children: []
                        },
                        {
                          type: "tag",
                          tag: "canvas",
                          attributes: {
                            tabindex: "-438",
                            dir: "auto",
                            contenteditable: "",
                            draggable: "true"
                          },
                          children: []
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "label",
                      attributes: {},
                      children: [
                        { type: "text", value: "Jem ru." },
                        {
                          type: "tag",
                          tag: "svg",
                          attributes: {
                            dir: "ltr",
                            contenteditable: "false",
                            draggable: "true"
                          },
                          children: []
                        },
                        {
                          type: "text",
                          value: "Wodfuz katji cebuc wocafig dof."
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "label",
                      attributes: { tabindex: "657", dir: "rtl", hidden: null },
                      children: [
                        {
                          type: "tag",
                          tag: "area",
                          children: [],
                          attributes: {}
                        },
                        {
                          type: "tag",
                          tag: "iframe",
                          attributes: { contenteditable: "", title: "" },
                          children: [
                            {
                              type: "text",
                              value:
                                "Gibzinef tetu cejtu emofoc obututven nuawo upuge."
                            }
                          ]
                        },
                        {
                          type: "tag",
                          tag: "bdo",
                          attributes: {},
                          children: []
                        }
                      ]
                    },
                    {
                      type: "tag",
                      tag: "link",
                      children: [],
                      attributes: { href: "cgTYyfWx" }
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
      attributes: { lang: "zh&!93)E" },
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
              children: [{ type: "text", value: "Ossav etgodfat tiw." }]
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
      '<html hidden lang="25SSlGlheH#ySk0Wbe)"><head><title contenteditable="" draggable="true" tabindex="-291" dir="rtl">Uj do.</title></head><body contenteditable="true" dir="ltr" hidden><canvas dir="ltr"></canvas><a hidden></a><video contenteditable="false" hidden dir="rtl" draggable="true"><embed hidden src="Qnc)!" title="D%&amp;S1&amp;ygQ"></embed></video><title contenteditable="false" hidden>Luhredad uk gebuwo zoclodevo dako.</title><select disabled><script async hidden dir="ltr"><math><embed draggable="true" dir="ltr" src="N3pq*fSvZl$&amp;U" title="h#H7qn"></embed><svg tabindex="356" draggable="false" contenteditable="" dir="ltr"></svg></math><bdo draggable="true" contenteditable="" tabindex="-511">Ofhi mechug poh.Ben mabkuhod.</bdo></script><script async tabindex="-728" integrity="U[UDN8g7"></script><optgroup hidden><template><s hidden dir="auto" tabindex="-676" draggable="false"></s>Irevaumi huuw ipaje.<strong hidden tabindex="-780" draggable="false"></strong><output></output><canvas></canvas></template></optgroup><template hidden draggable="true" dir="auto" contenteditable="true"><embed src="rKyn3BW3!1WwQOg" title="tssR[[D"></embed><map tabindex="645" draggable="false" dir="rtl" hidden>Ohijoow ru uvake jel re wundevuj pe.<blockquote dir="auto" draggable="false" hidden tabindex="-553"></blockquote><address draggable="false" hidden contenteditable="" dir="rtl"></address><nav hidden tabindex="397"></nav><canvas tabindex="-438" dir="auto" contenteditable="" draggable="true"></canvas></map><label>Jem ru.<svg dir="ltr" contenteditable="false" draggable="true"></svg>Wodfuz katji cebuc wocafig dof.</label><label tabindex="657" dir="rtl" hidden><area></area><iframe contenteditable="" title="">Gibzinef tetu cejtu emofoc obututven nuawo upuge.</iframe><bdo></bdo></label><link href="cgTYyfWx"></link></template></select></body></html>',
      '<html hidden contenteditable="" dir="rtl" draggable="true" lang="zU*#c2E7)uOnF3"><head draggable="false" contenteditable="true" dir="auto"><title dir="rtl" contenteditable="true" tabindex="390">Ca eceuzoli cicse gozzod puc cisrerud epuecwe.</title><template><section>Izi loporo ihmi mi zadup vigmelcu.<h4 dir="auto" tabindex="556">Ocevucfof nuwijwaw ocu doja nej.</h4><td tabindex="-77"><iframe title="f8">Tukovrad lo uzlilez sucbija.</iframe>Vum uwizozeje.Dejof vop ja.<span></span><em draggable="true" dir="auto"></em></td></section>Dutsabi torgudbuj temdu riawjo wutnu.</template><base draggable="true" hidden contenteditable="false" tabindex="493"></base><style dir="rtl"><audio contenteditable="" draggable="false" preload="none"><template tabindex="-822" contenteditable="true" dir="ltr">Lelam kac.<math hidden overflow="scale" display="block" contenteditable=""></math></template><input spellcheck="true" type="checkbox"></input></audio><audio hidden contenteditable="false" preload="none" tabindex="-618"><input type="button"></input><nav><pre tabindex="-868" draggable="true" hidden dir="rtl"></pre></nav></audio><audio contenteditable=""><h2 draggable="true"><output hidden dir="rtl"></output></h2><math hidden tabindex="127" draggable="true"><h6 dir="rtl"></h6><object hidden></object></math><h6 contenteditable=""><del contenteditable="false" hidden></del></h6>Cammoudu uwuaz.</audio></style><style draggable="true"><u hidden contenteditable="false" tabindex="-199" dir="auto">Janful saj firu vu fo dil.</u><blockquote hidden dir="auto"><var hidden draggable="false" dir="ltr" contenteditable="false">Ijeser noiljis sejmem igrak tovaav.Zunudo hos gi pusdudev seama.Wo tisirse uwsemi taw.<data contenteditable="" draggable="false"></data></var>Ruawatas saco ewu defuf ohu.<wbr draggable="true"></wbr>Laket semiewu kioli nu gi.<aside contenteditable="true" dir="auto"><del tabindex="85" dir="auto" contenteditable="" hidden></del>Cemet gitanu cesnim.<cite draggable="false" dir="ltr"></cite></aside></blockquote><keygen></keygen><embed src="3B" title="VME7b"></embed></style></head><body><section><small hidden></small>Wov ukufekku ta ebgutir apehuli ep.<mark draggable="false"><svg contenteditable="false" tabindex="471" draggable="true"><a draggable="true" tabindex="-645" dir="rtl"></a><embed src="mZuYb8^Ni8Q" title="PDWK9"></embed></svg>Fa jus sopan.<slot tabindex="422" dir="rtl" hidden contenteditable="">Jonnepodo jajan elsajzic lopo nigacboz sa duudo.Paruzop vorezepof curcooza nuhdo guukalo elrubon racu.<datalist draggable="true" dir="rtl" hidden></datalist><sup draggable="false" tabindex="520" hidden dir="rtl"></sup><iframe dir="ltr" draggable="true" contenteditable="false" src="C**7" title="zd4gDcJJUQ#u[D4gEyFM">Ne eh sabucic.</iframe></slot></mark></section><abbr dir="auto"></abbr><button type="button">Fozhi tenpagge gu lucufuonu hezir ithozi inu.<map><del tabindex="-810" contenteditable="true"><article></article><div contenteditable="false" hidden></div><h1 tabindex="593" contenteditable="false" dir="rtl" draggable="true"></h1><s draggable="false" tabindex="798" hidden></s></del>Edkugora zadizu itdu.</map><template dir="auto">Te tagtaata za.<blockquote draggable="false" hidden><bdo tabindex="301" contenteditable="false" draggable="false"></bdo></blockquote><nav draggable="true" dir="ltr" hidden><var></var><header dir="rtl"></header><blockquote dir="ltr" draggable="true" contenteditable="false"></blockquote><h3 contenteditable="false" dir="auto"></h3>Cor fev fakowituk.</nav>Uh isze ep runifaf zanumbot bu.</template><math overflow="linebreak" hidden contenteditable="true" display="block" dir="rtl"><meter draggable="true" dir="ltr" contenteditable="false">Puwep ezoboldag sab tekis kam ijbu.Kaser afavatar.</meter>Opa joworo kotcorin nipranas hod tehnes ako.<canvas><address dir="auto"></address><nav draggable="false" tabindex="-72" contenteditable="" hidden></nav></canvas></math></button>Guwismoj zubivsik min.<kbd draggable="true" hidden tabindex="592" contenteditable="false"><progress dir="auto" contenteditable="true" draggable="true"><video draggable="false" dir="rtl"><object draggable="false" dir="auto" hidden tabindex="131" contenteditable="false"></object>Ic kiko misowef lawep.<embed draggable="false" hidden src="PpNict]ejNr*dcVjqH" title="xhLRdYkD]J)Yab(xV[#"></embed></video>Pij fabkaofo ufwone gerezuva.<audio dir="auto" hidden></audio></progress><sub><time hidden></time><code hidden contenteditable="true" tabindex="871" dir="auto"></code><sub dir="rtl" draggable="false"><keygen tabindex="-869" hidden draggable="true" dir="ltr"></keygen></sub><q draggable="false"></q>Lok lemse neci.</sub></kbd></body></html>',
      '<html contenteditable="true" draggable="false" dir="rtl" lang="(M!J^b8ziCl"><head draggable="false" tabindex="718"><title contenteditable="false" hidden draggable="true">Lafihih otrihto juadgar.</title><base contenteditable="" hidden dir="ltr" tabindex="567"></base><link href="Jg78OBdMUi(aSV8M$Rq6"></link><base hidden contenteditable="false" dir="auto"></base><title dir="ltr" draggable="true" contenteditable="false">Vuctal fagevi dab hof heksal jan mikwobuj.</title></head><body><object contenteditable="true">Cotho invig ka ujliznij.<h2>Mak zajvu ojdefaz.<canvas tabindex="521" hidden dir="rtl"><slot contenteditable="" draggable="false" hidden dir="ltr"></slot></canvas><slot>Dehim mel imaalisuk oka.</slot></h2><h2 tabindex="868" draggable="false"></h2><h3 dir="rtl" tabindex="-173" draggable="false"><video hidden tabindex="314" preload="metadata"><template draggable="false"></template><cite contenteditable="true" draggable="true" dir="rtl" tabindex="-232"></cite></video></h3>Dinomnec bebsojla gifpu toukfa ah.</object><aside contenteditable="">Fo ekoav vali efloz ma.<ol draggable="true" contenteditable=""><script><video hidden draggable="true" dir="rtl"></video><aside></aside><base dir="auto"></base><iframe draggable="true" tabindex="-785" dir="auto" title="h6">Nagewhu apvenog cimfas nobbawoc daomlel lus afemavus.</iframe><embed src="bggM)%" title="qU[CXpaisTt5fV)N"></embed></script><li><small hidden draggable="true" contenteditable="" tabindex="599"></small>Rita huvaib jotev omtonu.<bdo hidden draggable="false" dir="ltr" tabindex="-320"></bdo><meter dir="ltr" hidden tabindex="-131" contenteditable="false"></meter><keygen tabindex="342" contenteditable="true" dir="rtl" draggable="false"></keygen></li><li hidden draggable="false"></li></ol>Sov farahos jafitgem apoveam busbus zu.Kodkiv dejto gidviva ta ajmi pocanro.</aside><dfn contenteditable="false" draggable="false"><i hidden contenteditable="true"><script><blockquote contenteditable="true"></blockquote></script><sub><small hidden draggable="true"></small><u tabindex="951" hidden></u><canvas></canvas></sub><keygen tabindex="-165"></keygen>Ene ohocevhu nalniw focwu nosza ta.</i></dfn><article><p>Je agu zi.</p><abbr tabindex="-853" hidden></abbr></article></body></html>',
      '<html lang="PkzNxE5zg%rb2"><head tabindex="-788" hidden><title contenteditable="true">Kih sujdawe durim.</title><noscript contenteditable="true" tabindex="-792" draggable="false" hidden><title tabindex="664" dir="ltr">Miprec dujubale.</title><base dir="auto"></base><base></base></noscript><title dir="ltr" hidden>Iduhuru ramdiih.</title></head><body dir="rtl" tabindex="-822"><picture><source></source></picture><video draggable="false">Noade luwfu sege vudnoucu askuzpu.<span><i>Gevawdos nut kepu kifwadar.Ijnas nonwu eztazo.<template></template>Cofuhuv co emele.</i><svg></svg><q dir="auto" tabindex="232" hidden>Li hura utpi mo uha.<del hidden dir="auto" draggable="false" tabindex="840"></del><svg hidden draggable="false" dir="rtl" contenteditable=""></svg>Hora ha neh cegwocaw irekuzta etbi utsip.</q>Hil diw.</span><code><b tabindex="-464"></b><object draggable="false" tabindex="445" contenteditable="false">Ognoz tiig bi idji kitati gi bubhu.<br></br>Ki semebjet tu kum bircul jak wiiro.<map hidden></map></object><s dir="auto"><strong contenteditable="" tabindex="-665" dir="auto" draggable="true"></strong>Si icike moptevsam odfuf.<a hidden contenteditable="" draggable="false"></a><del contenteditable="true" hidden tabindex="-449" dir="ltr"></del></s>Dun no cujekicem ani.</code><title hidden>Susde bejbokrem mo is febtep la.</title></video></body></html>',
      '<html draggable="false" tabindex="531" contenteditable="false" lang="]PHh"><head dir="auto" contenteditable=""><title>Mabefil iv.</title><base></base></head><body tabindex="-314"><keygen contenteditable="true"></keygen><template dir="rtl" hidden tabindex="532" draggable="true"><sub></sub><iframe draggable="false" hidden title="mQRk]GlU8Kp">Johapiwe el igasunlil foracvel ozoluci pihpegis sipen.</iframe><h5 tabindex="-828" hidden draggable="false"><var><q tabindex="-763" draggable="false"></q>Vidjojaje rubuzvu.Ba kup faosuasu tacpoji balitu wabdiv.<template hidden></template><abbr></abbr></var>Wifamoh eh judju si roubgek davpul apito.We ahridos mijuap jokagi wewucela.</h5><data dir="auto"><u draggable="false"><kbd draggable="false" dir="auto"></kbd><img src="0#Xn"></img><video tabindex="-951"></video>Di tubliliv nate bazakaku lonovgor bekopwo tak.<area tabindex="-43" draggable="false" contenteditable="" dir="auto"></area></u><iframe title="Oth9YbrC^y!b0j(E">Rujas ubivo ze paedico lafna ko.</iframe>Losa vouvu ruanone juwe sizava uwerup.<svg hidden tabindex="-205"><br contenteditable="false"></br><script async crossorigin="use-credentials" integrity="1IN$e0Z" hidden></script><nav></nav><h4></h4></svg></data></template><video dir="ltr" draggable="false" contenteditable="false"><h4 hidden tabindex="807" contenteditable="true" dir="rtl"><label tabindex="-675"></label><canvas tabindex="-659" hidden dir="ltr" draggable="true"><wbr dir="rtl"></wbr><u tabindex="13" draggable="true"></u><object tabindex="395" hidden data=")4Dl@J51wsrVHX5m)P45" dir="rtl"></object></canvas><map><iframe hidden src="DJ%Xa" tabindex="289" contenteditable="true" title="(]KdL4JBVDg3c^e(GQuA">Ri vuif ucaefoha fujezso simzu li ovumoalu.</iframe><noscript draggable="true" contenteditable=""></noscript><progress tabindex="-69" contenteditable="false"></progress>Duebe zojadinib mu di bikrewu.<cite dir="ltr"></cite></map></h4></video><embed src="r$ad1o)" title="XV2E"></embed><button hidden tabindex="271" dir="ltr" type="reset"><strong hidden dir="rtl" tabindex="-78"><abbr tabindex="42"><u hidden></u></abbr>Dompajolu goc.<progress tabindex="851" hidden>Ge fudzor omke.Ajo baedawoz dewitriz miwi.</progress></strong><data contenteditable="true" tabindex="396" draggable="true" dir="auto">Onu ipavagi le.<ruby><rp dir="rtl" tabindex="-247" draggable="true" hidden></rp><rt></rt></ruby><svg hidden><h1 hidden draggable="true" tabindex="418"></h1><canvas contenteditable="false" hidden tabindex="-915"></canvas><h3></h3><title tabindex="-979" contenteditable="true">Mejmaggil tevozsi cu.</title></svg><noscript contenteditable="true" dir="rtl" hidden tabindex="92"><abbr hidden draggable="false"></abbr><ins draggable="true"></ins><samp></samp></noscript>Fo wubestoj.</data></button></body></html>'
    ]);
  });

  describe("when given a tag", () => {
    it("generates HTML strings starting with that tag", () => {
      expect(htmlString({ tag: "form" }).take(5), "to equal snapshot", [
        '<form method="get" novalidate></form>',
        "<form></form>",
        '<form method="post" draggable="false">Be mabuj do lisib valbuunu.De notibaw gokim sab.Nukonokan cuh zeenejom ju bu mahbu wot.<object hidden contenteditable="false" data="UHyheBxXyX1RVu$PIC" dir="auto"><s hidden dir="ltr"><q dir="ltr" draggable="true"><slot dir="rtl" draggable="false">Hakime ijicho ajkad mifdej fef wijug howeju.</slot>Umi je.Vapiz soze wu tumit ede waser wi.</q></s>Ta vej edowa rur va rimhuuw.Tajloewu zuecuaw sajopbed pol harhi.Los vendijjeg ukiipi.</object></form>',
        '<form draggable="true" hidden method="post" novalidate><abbr><var tabindex="-385" hidden><map hidden><br hidden dir="auto" tabindex="-810"></br><em hidden tabindex="628" contenteditable="" dir="rtl"></em><select hidden multiple contenteditable="true" disabled><script dir="auto" async></script><option hidden contenteditable="">Ebri tasuz katji cebuc wocafig.</option><optgroup hidden></optgroup></select><br contenteditable="false" draggable="false" hidden></br></map><noscript hidden draggable="true" dir="ltr"><button contenteditable="" type="button" draggable="false"><abbr dir="auto" contenteditable="" tabindex="-374"></abbr><meter draggable="false" tabindex="-616" hidden dir="auto"></meter><i contenteditable="false" hidden dir="rtl" draggable="false"></i><map hidden contenteditable="false"></map></button></noscript><sup dir="ltr" hidden draggable="true">Bavec lubet.</sup><object dir="rtl"></object>Tubokuhi zi usilesev egizosde pitkedeb iva.</var><template dir="auto"><map dir="auto" hidden draggable="true"></map><progress draggable="true" hidden contenteditable="true" dir="auto"><script defer draggable="true"><svg dir="auto" tabindex="-558" draggable="true"></svg><h6 dir="ltr" contenteditable="true" tabindex="-572" hidden></h6><aside></aside><title>Vigmelcu nubuz kuru cemucite nuwijwaw.</title><script src="$DHhTyumnVICAqRtfA[t"></script></script><br contenteditable="false" draggable="false" tabindex="271"></br><sup><u contenteditable="false" tabindex="480"></u><select></select><time hidden dir="auto"></time>Bi ba vum uwizozeje ga jof vop.<svg></svg></sup><bdi contenteditable=""><label></label><math draggable="false" hidden contenteditable="true" dir="rtl"></math><sub dir="auto" hidden contenteditable="true" tabindex="590"></sub><noscript draggable="false" contenteditable="true"></noscript></bdi>Joerufiw zenatij ti ci di fo.</progress><img dir="auto" src="Soqd8mzuzncgOiNIAp%A" tabindex="330"></img><embed contenteditable="" src="UYgL#l&amp;Beau#7g3S" title="NB&amp;JrT4BNI13ecksj0Y%"></embed><noscript hidden draggable="true"><img decoding="async" src="Px!p"></img>Husi apparon sinle.</noscript></template><a dir="auto"><datalist contenteditable=""><datalist contenteditable="false" hidden><sup></sup></datalist></datalist><wbr contenteditable="" dir="auto"></wbr><u draggable="false">Jugaz mam ratohsi pem lefi.<datalist><option>Zaninaj eto.</option><samp draggable="false" contenteditable="" tabindex="-379" dir="auto"></samp><option tabindex="201" contenteditable="" selected hidden>Hop levmot.</option></datalist>Luljis sejmem igrak tovaav.<sub draggable="false" tabindex="151" hidden>Bewolzec devdopo pewo tisirse uwsemi taw.</sub><picture contenteditable="" draggable="false"><script src="h*" contenteditable="false" crossorigin="use-credentials" async></script><template></template><source tabindex="-839"></source><script></script><template dir="rtl" hidden contenteditable="true" tabindex="-379"></template></picture></u></a><i dir="auto"><i draggable="false"><data dir="rtl" tabindex="-13" draggable="false" hidden><var></var>Jih zi ije tanu cesnim piro ge.<svg contenteditable="" hidden draggable="false" tabindex="527"></svg></data><time><script></script><ins></ins><data draggable="true" contenteditable="false" tabindex="-806"></data>Atuor me cap gub in wuape.<mark dir="auto"></mark></time>Jukis nuhu zadsiznof bizi.<mark hidden dir="rtl" contenteditable="false">Buw anja tiwec fe ishoppan mijpibfu.<canvas contenteditable="" tabindex="-389" hidden></canvas></mark><abbr dir="rtl" hidden><input tabindex="-540" type="date"></input><u tabindex="154" contenteditable="true"></u><map contenteditable="true" dir="rtl"></map></abbr></i><ins draggable="false" dir="ltr" hidden><video preload="none" tabindex="185" contenteditable="true" draggable="false"><nav dir="auto" draggable="true" hidden></nav><slot draggable="false" hidden tabindex="-916"></slot><s></s><var dir="rtl" contenteditable="false" draggable="false"></var><kbd tabindex="829" contenteditable="" draggable="false"></kbd></video>Dic rekmanam vespuk hibiz.Gij aculadib.<bdi draggable="false" tabindex="-769"><math></math><datalist dir="auto" tabindex="-589"></datalist></bdi></ins><time>Si izoipfoz mu hotdeble ut acufuonu.Mi wuitho ran ecilegnu eva.<s dir="ltr" draggable="true" hidden tabindex="-252"></s>Cimufvu eci pianevin.<span dir="auto" draggable="false" hidden tabindex="-851"><i></i>Navbatho buesiba te tagtaata za uvmo zat.<s contenteditable="" draggable="true" hidden tabindex="771"></s><samp draggable="true" dir="auto"></samp>Ulodisba kel hobfeuw nuro jevzova oza wu.</span></time><label draggable="false" hidden dir="ltr" tabindex="-984"><select contenteditable="false"><script async tabindex="454" nomodule defer dir="rtl"></script><optgroup></optgroup><script dir="ltr" draggable="true" contenteditable="true" defer></script></select><code hidden contenteditable="" dir="rtl"></code></label></i><video><dfn></dfn><kbd contenteditable="false" draggable="false"><s></s><u contenteditable="false">Ohpiij ac kaser afavatar sucomwu.<picture tabindex="-612" draggable="true" dir="ltr" hidden></picture><iframe hidden draggable="true" tabindex="40" src="Gg1e" title="lJ#Tq">Gutva raveh ulogihak hu.</iframe></u><area dir="auto" tabindex="-629"></area><select hidden disabled multiple size="439"><optgroup disabled hidden dir="rtl"></optgroup><optgroup draggable="false" dir="auto" tabindex="-131" hidden contenteditable="false"></optgroup><script crossorigin="anonymous" dir="rtl" async nomodule draggable="true"></script><template draggable="true" dir="rtl" hidden tabindex="95"></template></select></kbd><label dir="auto"><ruby draggable="true" contenteditable="" dir="ltr"><canvas tabindex="617" contenteditable="false" dir="ltr"></canvas><rb contenteditable="true"></rb><rp hidden dir="auto" tabindex="706"></rp><rp tabindex="-34" hidden></rp><rb></rb></ruby><output dir="ltr" hidden>Di vaul baztusig perfab fo woufwo hu.</output></label></video></abbr><area dir="auto" shape="circle" draggable="false" tabindex="-497" hidden></area></form>',
        '<form method="post" novalidate autocomplete="off"><datalist hidden contenteditable="true" tabindex="871" dir="auto"></datalist><strong dir="rtl" draggable="false"><keygen tabindex="-869" hidden draggable="true" dir="ltr"></keygen></strong><p draggable="false"></p>Lok lemse neci.<canvas contenteditable="true" draggable="false" dir="rtl"><label><meter draggable="false" tabindex="718">Capeffi rekut secwok mud dogom.Dogewmic rebtazso inegonme.Zenhojo mordopni feevi dab hof heksal jan.<audio tabindex="693" draggable="false" dir="rtl" hidden></audio><data contenteditable="false" draggable="true" hidden tabindex="79"></data></meter>Gihheta ecocep invig ka ujliznij.</label><textarea>Ufo gamdias jo nujdefaz zigvichat.</textarea><h1 tabindex="159" contenteditable="" dir="ltr"></h1></canvas></form>'
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
