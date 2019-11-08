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
      '<code dir="rtl"></code>',
      '<code hidden="">Poco kogoru.</code>',
      '<code draggable="true">Hoh lidzas husama loduluh ramcuzoso.Gif afu ribzubu ijbu tukdeweh owtufbe ecuctu.<script integrity="LbJ"><ins hidden=""><h1 dir="rtl"><a dir="auto"><map draggable="false"></map></a><br hidden=""></br><cite contenteditable="false"><br tabindex="-527"></br>Vi rem fuated fufuji jesuhis nenonkan.</cite><var contenteditable="false"></var></h1><small draggable="false"><canvas tabindex="81"><s draggable="false"></s><data draggable="true"></data><ruby contenteditable="false"></ruby>Miucva hej wocive te ran uk habtupus.</canvas><textarea rows="189"></textarea><dfn draggable="false"><audio preload="auto"></audio><button dir="rtl" type="reset"></button><sub contenteditable=""></sub><label dir="rtl"></label></dfn></small><meta hidden=""></meta></ins><img tabindex="-752" src="l!I5()7W"></img><script tabindex="-928"></script></script><a dir="rtl"><ins tabindex="-398"><svg dir="rtl"><h1 dir="rtl"><bdo dir="ltr"></bdo></h1><object hidden=""><section contenteditable="false"></section><section contenteditable="true"></section><meta draggable="false"></meta><h4 draggable="false"></h4></object>Huujikeg ilcumhu muhnel dormu ucu coh.<h1 draggable="false"><textarea disabled=""></textarea><kbd contenteditable="false"></kbd><u draggable="false"></u></h1><h5 hidden=""><br tabindex="371"></br><math contenteditable="false"></math><ins tabindex="-663"></ins></h5></svg></ins></a></code>'
    ]);
  });
});
