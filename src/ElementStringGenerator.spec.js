const expect = require("unexpected")
  .clone()
  .use(require("unexpected-snapshot"));

const chanceCache = require("chance-generators/lib/chanceCache");

const ElementStringGenerator = require("./ElementStringGenerator.js");

describe("ElementStringGenerator", () => {
  let generator;

  beforeEach(() => {
    chanceCache.clear();
    generator = new ElementStringGenerator({ tag: "code" });
  });

  it("generates elements of the given type as HTML a string", () => {
    expect(generator.take(3), "to equal snapshot", [
      '<code hidden><small contenteditable="false" draggable="false" dir="auto">Mabuj do lisib.<cite hidden draggable="true" contenteditable="false" tabindex="966"><a draggable="true" hidden contenteditable=""><embed hidden dir="auto" src="H*D%&amp;S1&amp;ygQoMd)y!" title="N9RA)uSOukv7mfb"></embed></a>Gebuwo zoclodevo dako wip.Nedwusres bi dadeip.<bdo dir="ltr" draggable="true"><slot dir="rtl" draggable="false">Hakime ijicho ajkad mifdej fef wijug howeju.</slot>Umi je.Vapiz soze wu tumit ede waser wi.</bdo></cite><picture dir="auto" tabindex="397" hidden contenteditable="true"><template draggable="false" hidden tabindex="-818" contenteditable="true"><embed src="1!%@$D5" tabindex="851" draggable="false" title="%XS"></embed><b><ruby contenteditable=""></ruby>Tugohi ze erosi log.</b><title dir="rtl">Iwmoj solges sataf nuhijoow ru uvake jel.</title></template><source></source><script crossorigin="use-credentials" hidden integrity="ksMv#x2!ZkZ0AOvv7F7s" src="gLaLU7oWfZD6d"><h1>Jem ru.<svg dir="ltr" contenteditable="false" draggable="true"></svg>Wodfuz katji cebuc wocafig dof.</h1><h4 tabindex="657" dir="rtl" hidden><area></area><iframe contenteditable="false" src="mJbh4K7JzmIGWDdT(U$d" title="U*LL@NW">Tub tutvendit opeupu ja la.</iframe><bdo></bdo></h4><img decoding="async" draggable="false" contenteditable="" hidden dir="ltr" src="ZZzU*#c2E7"></img><abbr draggable="true"><strong contenteditable="true" dir="auto"></strong><select required draggable="false" hidden tabindex="505" disabled></select></abbr><h3 dir="ltr"><area hidden draggable="true"></area><textarea autocomplete="off" disabled maxlength="55" draggable="false" rows="888" minlength="351" cols="117" readonly autofocus>Tuccirce waccezluj huwsojwa lirhu mi mi.</textarea>Dod zorhukne rek buzbewru cemucite.<var dir="rtl" tabindex="-902" draggable="true"></var><var tabindex="57"></var></h3></script><img contenteditable="true" tabindex="-584" draggable="true" dir="rtl" src="[HZcNuwE8SYumj^f8*(E"></img><script crossorigin="anonymous" nomodule hidden contenteditable="true" src="J][lBR3CD)9!Q!eI" async><embed src="8N]3]^PR41*4!BsrHp" title="uSpq#"></embed><audio hidden contenteditable="false" dir="rtl" tabindex="476"><iframe tabindex="-755" draggable="false" src="7p%kTb[zSRVDP" contenteditable="" hidden title="zOMH5^DwUM@Z(6kH&amp;!">Cu keti ci.</iframe><section></section><textarea maxlength="974" draggable="false">Feh badil ijpe.</textarea><a dir="rtl" contenteditable="false" hidden></a></audio></script></picture>Ojbeaco uflul zem zabha iviracnem.Jo bief ra kil.</small><button draggable="false" autofocus hidden type="reset" dir="rtl"><object draggable="true"><u contenteditable="" tabindex="843" hidden dir="ltr"><samp tabindex="-491" hidden contenteditable="false" dir="auto"><noscript dir="auto" draggable="true" tabindex="114" contenteditable="true"></noscript><map contenteditable="true"></map><small></small>Saj firu vu fo.</samp><bdo><map tabindex="939" dir="ltr" contenteditable="true"></map><ins hidden draggable="false" dir="ltr" contenteditable="false"></ins><bdi dir="ltr" hidden contenteditable="false"></bdi><sub hidden draggable="false" tabindex="392"></sub></bdo><object draggable="true" hidden><mark draggable="false"></mark>Rak tovaav rosoz kog fafwolzec devdopo pewo.<input contenteditable="true" disabled checked spellcheck="default" capture autofocus multiple draggable="true" tabindex="-462" required type="url"></input></object></u>Sam has ociwowwo sen co.Owidefuf ohu.<datalist draggable="true"><option dir="rtl" tabindex="-537">Kioli nu gi maket tego uzfi cizpe.</option><audio dir="auto" contenteditable="false" preload="none">Nu cesnim piro ge osjetik.</audio><option contenteditable="true" disabled selected hidden draggable="true">Go saan vig.</option></datalist>Hus atuor me cap gub in.</object><dfn draggable="false" tabindex="-336" hidden><output draggable="false"><video tabindex="895" contenteditable="false" preload="" draggable="true"><del draggable="false" dir="rtl" contenteditable="false"></del><samp tabindex="-823" contenteditable="true"></samp></video></output>Jamol gabfejus sopan mijpibfu cazeceh orjon.<iframe draggable="false" dir="rtl" src="cNtlS" hidden tabindex="-847" title="lyU5JhzfA1EK0YSGIsf8">Janleaw aznifru.</iframe><noscript hidden draggable="false" dir="auto" tabindex="637"><map tabindex="313" contenteditable="" dir="auto" draggable="false"><bdo draggable="false" hidden tabindex="-845" contenteditable=""></bdo></map>Tihi cu kisciam vespuk hibiz if.<area draggable="true" tabindex="-52" hidden></area><area></area><picture contenteditable="false" dir="ltr"><source contenteditable=""></source><template dir="auto" tabindex="-589"></template><img src="dFiCCYjq((76tgRE[$$"></img><img tabindex="-943" ismap src="S9LirdnCqcn(5" crossorigin="anonymous" contenteditable="false"></img><img src="q$M&amp;S]MmtDM4K"></img></picture></noscript></dfn><textarea draggable="false" rows="391" readonly autofocus wrap="hard" required spellcheck="true" minlength="477" tabindex="-956" contenteditable="false" hidden cols="35" maxlength="329" autocomplete="off" disabled>Me hocim har uvpupi seprivwu epefud.</textarea><object draggable="true" tabindex="699" contenteditable="" data="$)#I">Baco rod ta zacza uvmo zat.<i contenteditable="" draggable="true" hidden tabindex="771"><iframe draggable="true" hidden src="b" contenteditable="" dir="rtl" title="5sYaGluI]*">Rovefcor fev fakowituk numewes.</iframe><b dir="ltr"><img dir="ltr" decoding="sync" hidden crossorigin="" draggable="false" ismap src="Tn6IJaiSjSYsFPoqKle"></img><label dir="ltr" tabindex="455"></label><video contenteditable="true" hidden></video>Zuzibo dagun pi.<bdi dir="ltr" draggable="false" tabindex="-72"></bdi></b><svg><h1 dir="ltr" draggable="true"></h1><svg contenteditable="false" hidden dir="ltr"></svg><iframe hidden contenteditable="false" draggable="false" dir="auto" tabindex="625" title="T8JfW%OOS86HJVdM">Cig puhez zaako fi.</iframe><h2></h2><video dir="rtl" preload="" hidden></video></svg><s hidden contenteditable=""><canvas tabindex="-629" draggable="false" dir="rtl" hidden></canvas></s></i><textarea disabled contenteditable="false" cols="422" readonly autofocus required autocomplete="on" hidden spellcheck="false" maxlength="592" draggable="false" minlength="359" tabindex="-623" wrap="soft" dir="auto">Wiw teum ec.</textarea>Duni lonfo ukep so.<sub contenteditable="" dir="ltr"><canvas hidden dir="rtl" contenteditable="" draggable="false"><meter dir="auto" draggable="true"></meter><sup dir="ltr" hidden></sup><keygen contenteditable="true" hidden></keygen><svg contenteditable="true" draggable="false"></svg></canvas><keygen></keygen><sub><video></video><label></label><math tabindex="202"></math><ruby></ruby>Vak ufe ezuvaho.</sub><keygen tabindex="-931" hidden dir="auto" draggable="false"></keygen><picture hidden contenteditable="true" draggable="false"><script crossorigin="anonymous" contenteditable="" draggable="false" defer src="WD4" integrity="G7%4#7xG#8BivOWayyU" tabindex="396" hidden async dir="auto"></script><source draggable="true"></source><img draggable="true" tabindex="643" src="LCO@(M!J^b8ziClD" decoding="async" dir="ltr"></img></picture></sub></object></button>Momzor bufbucuz oja pef po.Veami doweg adgargom.<i>Lamdubtum hoftakew ligzewu vodopni feevi dab.<cite hidden>Hesal jan mikwobuj dos igoja.</cite><var tabindex="-226" draggable="true" contenteditable="true"></var><b draggable="true" hidden><del draggable="true" tabindex="-333" hidden dir="auto"></del></b></i></code>',
      '<code dir="auto" draggable="true" tabindex="-333" hidden>Mak zajvu ojdefaz.<canvas tabindex="521" hidden dir="rtl"><slot contenteditable="" draggable="false" hidden dir="ltr"></slot></canvas><slot>Dehim mel imaalisuk oka.</slot></code>',
      '<code tabindex="868" draggable="false"></code>'
    ]);
  });
});
