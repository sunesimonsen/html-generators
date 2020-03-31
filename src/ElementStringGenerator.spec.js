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
      '<code style="word-break: break-all;">Cujduvtih le votevned esohogbi dadeip riide.Zegcih iwahoil giimeduj deg bueh.<cite style="margin-block-end: 48%; border-style: groove; border-bottom-right-radius: -324.7697ex;"><data hidden>Ip fil.<area shape="default" draggable="true"></area><video tabindex="368"><meter draggable="false" dir="rtl" tabindex="226" contenteditable="true" style="transform: skew(35.5027turn , 351.3803grad);">Pigucinu gehwoivu ipuod vonlavub ki nozgo.<svg>Los vendijjeg ukiipi.</svg>Tiref pen taf nuhijoow ru uvake.<cite></cite></meter>Liov sactolag ihera.<button autofocus draggable="true" hidden type="button"><abbr contenteditable="true"></abbr><strong draggable="true" tabindex="982"></strong><b contenteditable="" dir="rtl" tabindex="127" draggable="false"></b><strong dir="auto"></strong><template>Rofod pohakmi haucmor.</template></button><cite contenteditable="" tabindex="-549"><dfn tabindex="-612" draggable="true" hidden style="mask-border-mode: luminance; border-inline-end: -816.4019ch rgb(31% / 71%) hidden;"></dfn></cite>Pul nimap.</video><area hidden tabindex="934" contenteditable="true" shape="default" draggable="false"></area></data><samp contenteditable="false" draggable="true" tabindex="586"><input required type="week"></input><br dir="ltr" contenteditable="true" hidden draggable="true" style="min-block-size: min-content;"></br><noscript contenteditable="true"><abbr draggable="true"><u contenteditable="true" dir="auto"></u>Ziew hirzog.<strong></strong>Ekju ca eceuzoli cicse gozzod.</abbr><del>Rak rerudzup ecwemu famhuluj huwsojwa lirhu mi.</del></noscript><progress contenteditable="true"><bdo hidden draggable="true" contenteditable="true"></bdo>Nubuz kuru cemucite nuwijwaw ocu doja nej.<slot draggable="true" style="visibility: visible; word-break: break-all;"><dfn contenteditable="false" hidden draggable="false" dir="rtl"></dfn><strong></strong><del draggable="true" contenteditable="false" hidden tabindex="480">Lezenu bi ba vum.</del>Omiwusleg dejof vop ja pil pevrunit fibzo.</slot></progress></samp><audio hidden preload="metadata" tabindex="-981"><noscript draggable="true" dir="rtl"><source></source><source draggable="false" dir="ltr" contenteditable="true" style="border-collapse: collapse; border-collapse: separate; border-image-source: none;"></source><source></source><source contenteditable="false" tabindex="474" draggable="false"></source><th scope="colgroup" style="backdrop-filter: drop-shadow(-442.8193mm); animation-name: lelam;"><address></address></th></noscript>Puojbe conuflul zem zabha iviracnem.<iframe dir="ltr" title="BnbPx">Husi apparon sinle.</iframe></audio>Tonli subafe fu ju.Eca moudu uwuaz.</cite><select tabindex="-723"><script nomodule>Wipora zecpawki lefi.</script><script>Ace bod noaj.</script><script>Mawuwela wibzatzet fat tiw invu wenoh.</script><script integrity="qU" tabindex="-431" nomodule>Fattim sozzehos gi pusdudev seama mowap.</script><optgroup tabindex="-827" draggable="false" disabled><script tabindex="256" src="R&amp;hP^Z6&amp;b0Wl5QB" style="border: thick outset hsla(-4757494052159488 99% 16% / -6761476060610560); scroll-padding-inline-start: 739.7928in; list-style: outside;">Ket semiewu kioli nu.</script><option>Maket tego uzfi cizpe cemet.</option></optgroup></select></code>',
      '<code dir="ltr" contenteditable="true" tabindex="-837" hidden></code>'
    ]);
  });
});
