const expect = require("unexpected")
  .clone()
  .use(require("unexpected-snapshot"));

const ElementStringGenerator = require("./ElementStringGenerator.js");

describe("ElementStringGenerator", () => {
  let generator;

  beforeEach(() => {
    generator = new ElementStringGenerator({ tag: "code" });
  });

  it("generates elements of the given type as HTML a string", () => {
    expect(generator.take(3), "to equal snapshot", [
      '<code draggable="true"><noscript tabindex="-528">Doamra fowo soddorgah tahikjed gutgo ni.</noscript><u draggable="false"><br tabindex="923"></br></u><kbd dir="auto">Babtocka kifjelni zaevda ese.<embed hidden="" src="6cDdF9Ci1d" title="!sthFDcTH"></embed></kbd><del draggable="false"><picture dir="ltr"></picture></del></code>',
      '<code hidden=""><video draggable="true">Diim rake pic dubume vabmuvkab zukim irjah.<bdo dir="rtl"></bdo></video><math draggable="false"><h4 hidden=""></h4></math>Wo uhnenu gagesmun kanejub.<dfn draggable="true"></dfn><s hidden="">Lawjogo owubo kak jeoz.<cite contenteditable="false"><img crossorigin="anonymous" src="!n2(OqWyu3RDK"></img></cite><u dir="auto"></u></s></code>',
      '<code tabindex="-230"><canvas contenteditable="true"><output hidden="">Hawfot loz pi nojrorniw.Nu vavulidi wu huraaz.</output><s draggable="true"><svg hidden=""></svg></s>Jot gefalu bupecu.</canvas></code>'
    ]);
  });
});
