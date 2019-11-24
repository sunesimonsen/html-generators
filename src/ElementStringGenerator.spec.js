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
      '<code style="word-break: break-all;">Cujduvtih le votevned esohogbi dadeip riide.Zegcih iwahoil giimeduj deg bueh.<cite style="justify-content: space-around; border-right-color: coral; box-shadow: none;">Rok ugher jahben.</cite><select autofocus hidden contenteditable="" multiple dir="rtl" size="489" required tabindex="553" disabled><option disabled>Temdov pa envewi logumem.</option><template tabindex="-209" contenteditable="true" draggable="false" hidden><cite tabindex="-997" draggable="false" dir="auto" hidden><cite hidden tabindex="899" contenteditable="true" dir="rtl" style="border-block-end-style: outset; orphans: 95%;"></cite>Ri tugohi ze.<script integrity="sR[[DK" src="G6zLVQXK@or1KuQb4Vd" crossorigin="use-credentials" async draggable="false" hidden nomodule><td tabindex="-191" colspan="268" rowspan="485" hidden contenteditable="true" draggable="false"></td><h5 hidden tabindex="-615" dir="auto" contenteditable="true" style="inset-block-start: 754.7462in; place-content: safe center safe left;"></h5><video dir="auto"></video><meta tabindex="914"></meta><h4></h4></script><svg contenteditable="false" draggable="true" tabindex="887" style="margin-bottom: -123.0518px; outline-offset: -928.1155in;"><video preload="none" contenteditable="true" dir="rtl" style="inset-inline: auto; scale: none;"></video><h6 hidden dir="ltr" contenteditable="true" tabindex="-541"></h6></svg><small contenteditable="" hidden draggable="true"><keygen contenteditable=""></keygen>Wocafig dof.</small></cite></template><optgroup disabled dir="rtl" draggable="false"><template draggable="true" style="border-bottom-color: rgb(-6916220410396672 / -8178489324732416); border-block-end: thick; width: fit-content; border-inline-style: solid;"></template><script integrity="JzmIGWDdT("></script><option draggable="true">Rorta obututven nuawo upuge de.</option></optgroup><option style="mask-position: right -229.2068vmax bottom -318.7509vmax;">Votu wiuhimo susde.</option></select></code>',
      '<code hidden><noscript hidden tabindex="-378"><input contenteditable="true" type="checkbox" required multiple inputmode="numeric" style="mask-clip: stroke-box; outline-offset: -574.5442vh;"></input>Adapucrak rerudzup ecwemu famhuluj huwsojwa lirhu mi.Ni dod zorhukne.</noscript>Hizbuzbew ozu.</code>'
    ]);
  });
});
