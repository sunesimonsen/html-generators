const expect = require("unexpected")
  .clone()
  .use(require("unexpected-snapshot"));

const { elementsByTag } = require("./elements");

const ElementStringGenerator = require("./ElementStringGenerator.js");

describe("ElementStringGenerator", () => {
  let generator;

  beforeEach(() => {
    generator = new ElementStringGenerator({ tag: "code" });
  });

  it("generates elements of the given type as HTML a string", () => {
    expect(generator.take(3), "to equal snapshot", [
      '<code hidden=""><u dir="ltr"><mark dir="ltr"></mark></u><datalist dir="ltr"></datalist><slot tabindex="-355"><var dir="auto"><span draggable="true"></span>Lodfostuc moceira cez ejagu sojwaze mewdi.<video contenteditable="true"></video></var><mark hidden=""></mark>Tos hukneem ut una biw cemucite.Up lusohocu doja nej jaj ulbihmu.<i dir="ltr"></i></slot></code>',
      '<code contenteditable="false"><script tabindex="-778"></script><time contenteditable="true"><input capture="" type="color"></input><sup contenteditable=""><meter tabindex="555"><slot dir="ltr"></slot></meter></sup><audio dir="auto"></audio></time>Ir cegbopi pevrunit fibzo wuffob.<svg hidden=""><noscript draggable="true"><meta hidden=""></meta><h4 contenteditable="true"><small tabindex="493"></small>Hecdid mataf munirfof.</h4></noscript><audio tabindex="-345"></audio><style contenteditable="true"></style></svg>Gudi kac topuoj ju ziuflul.</code>',
      '<code hidden=""><label tabindex="512">Delab efki ij vetil ron.<iframe hidden="" title="jCuyA%VSQ"></iframe></label><audio dir="rtl">Pagah cucammo.Ikuwuaz fo orisihzef wipora zecpawki lefi ufe.</audio>Habodnin lawesu osofa ossav etgodfat tiw.Ser noiljis sejmem igrak.</code>'
    ]);
  });
});
