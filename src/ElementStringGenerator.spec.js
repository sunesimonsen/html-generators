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
      '<code hidden><output contenteditable="true" dir="auto"><q dir="rtl" contenteditable="" hidden tabindex="525"></q>Mabuj do lisib.<sub hidden draggable="true" contenteditable="false" tabindex="966">Va ebik vo pe gazziw onokan.Uhlog sezsi ju.</sub></output></code>',
      '<code style="word-break: break-all;">Wot cujduvtih le votevned esohogbi dadeip.Pow si gewse iwahoil.</code>',
      '<code dir="rtl" contenteditable="" tabindex="122" draggable="true">Vake kerokcu her jahben.<kbd draggable="true" dir="auto" contenteditable="true" tabindex="-681"><noscript>Temdov pa envewi logumem.<iframe src="O#Ztq" contenteditable="" draggable="false" dir="auto" title="Ntr]g)%P%$U">Ewumovecu iro lavub ki.</iframe></noscript><ruby hidden dir="ltr"></ruby></kbd><iframe draggable="true" title="BW3">Dijjeg ukiipi povivho.</iframe><a dir="ltr" draggable="true"><del tabindex="-385" hidden><h3><sup hidden>Ak epcibtof wecuv lini kiruen.<dfn contenteditable="" dir="rtl" tabindex="127" draggable="false"></dfn><small dir="auto"></small><br></br><ins style="font-weight: bolder; offset: padding-box inset(-838.2541vmax) -499.5142ex 320.3948turn; offset: center center / left;"></ins></sup><picture><template tabindex="-650" dir="ltr"></template><script nomodule contenteditable="true" draggable="false" style="background-repeat: repeat-y; animation-duration: 171.5512s; transform: skew(0); scroll-margin-inline-start: 641.279vw;" src="http://upuge.aq/la"></script><source style="overflow-inline: hidden; order: -23; scroll-padding-left: -478.611ex; inset-inline-start: auto;"></source><source hidden></source></picture>Muz gis susde sev egizosde pitkedeb iva.</h3></del><ins dir="auto"><noscript dir="auto" draggable="false" hidden><canvas><script crossorigin="use-credentials" integrity="gLgr]RB@B$8r(^[" contenteditable="false" nomodule>console.log("hello")</script><h5></h5><svg contenteditable="true"></svg><section></section></canvas><script dir="rtl" integrity="#NqG)7" async nomodule src="http://kuru.zm/hiucite"></script><base dir="rtl" tabindex="-902" draggable="true"></base><script src="http://jek.sl/jadcuw"></script></noscript><ruby draggable="true" tabindex="-933" dir="auto" hidden></ruby><math style="font-variation-settings: \'fenlezenu\' -563973896273920, \'jacu\' 5636723467878400, \'uwizozeje\' -890917628149760, \'og\' -5274117821431808, \'zobjavi\' -428550003884032; right: auto; columns: auto auto;"><math tabindex="-981" overflow="truncate" display="inline"><h1 hidden dir="auto" tabindex="396" draggable="false"></h1></math><math overflow="truncate" tabindex="-66" contenteditable="" dir="rtl"><h2 dir="ltr"></h2><nav contenteditable="false" draggable="false" style="overscroll-behavior-block: none;"></nav></math><nav draggable="false" tabindex="-224" hidden dir="auto" style="print-color-adjust: economy; animation-iteration-count: 620118669262848;">Kac topuoj ju ziuflul zem.<blockquote hidden draggable="true" style="overflow-wrap: anywhere; letter-spacing: -939.0557ch; shape-outside: circle(at left top); border-bottom-left-radius: 59%;"></blockquote></nav></math><math draggable="false" tabindex="587" hidden dir="rtl"><math draggable="true"><datalist tabindex="-365" contenteditable="true" hidden style="border-inline-start-width: thick; background-blend-mode: saturation; background-attachment: scroll; overscroll-behavior-block: auto; border-block-start-width: medium;"></datalist><h3 contenteditable="" hidden draggable="false" tabindex="821"></h3><meta draggable="true" dir="ltr"></meta></math></math></ins>Gihidtoh paw rile.<em contenteditable="" draggable="true">Lawesu osofa ossav etgodfat tiw.<abbr dir="auto"><mark draggable="true" tabindex="578" contenteditable="true" dir="auto"><b draggable="false" contenteditable="false" dir="rtl"></b>Timinofoh zobewol katdevdo.</mark><ins draggable="false"></ins></abbr>Wo tisirse uwsemi taw.<math contenteditable="false" hidden overflow="elide"></math></em><var tabindex="652" draggable="false">Ewu defuf ohu hin cogu semiewu.Ponig id si bu.</var></a><meter dir="auto">Paz fiecufi.</meter></code>'
    ]);
  });
});
