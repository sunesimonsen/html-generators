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
      '<code style="word-break: break-all;">Cujduvtih le votevned esohogbi dadeip riide.Zegcih iwahoil giimeduj deg bueh.<cite style="margin-block-end: 48%; border-style: groove; border-bottom-right-radius: -324.7697ex;"><data hidden>Ip fil.<area shape="default" draggable="true"></area><video tabindex="368"><meter draggable="false" dir="rtl" tabindex="226" contenteditable="true" style="transform: skew(35.5027turn , 351.3803grad);">Pigucinu gehwoivu ipuod vonlavub ki nozgo.<svg></svg>Los vendijjeg ukiipi.<cite dir="rtl" draggable="false" tabindex="-230"></cite></meter>Taf nuhijoow ru uvake jel.<button type="reset"><script></script><b tabindex="-878" dir="auto" contenteditable="false"></b></button><cite hidden dir="auto" tabindex="-810">Wecuv lini kiruen.Ba likizef navgiro waumo ak no ba.<span contenteditable="true" hidden dir="ltr" draggable="true"></span></cite>Ra vutuwom wibse daj.</video><area style="border-block-end-style: none;"></area></data><samp tabindex="704"></samp><audio><iframe draggable="true" contenteditable="" src="U*LL@NWY" title="*V*b#RV*7QYC">Awoazifa ga bavec lubet.</iframe><kbd dir="rtl" style="overscroll-behavior-inline: none; mix-blend-mode: color; text-align-last: auto; page-break-after: avoid;">Lesev egizosde pitkedeb iva uzoli cicse.Zuzodol umnorer fos ecumoce waccezluj.<object tabindex="350" dir="auto" hidden draggable="true" data="BP0Fs^yiGK" style="image-orientation: -887.3935rad; border-bottom-right-radius: 11%; scroll-padding: 75%;">Aburah ruocevuc tejiz.<img decoding="auto" tabindex="-891" draggable="true" src="yum"></img>Hice ulbihmu jadcuw wiokaivi.<meter style="font-variant-position: sub;"></meter></object><wbr draggable="false" hidden tabindex="381" contenteditable="false"></wbr></kbd></audio>Cibfe cu rusomiwus hegaog huzob dapil pevrunit.Pazo wuffob simikis pitmep.</cite><select required disabled multiple></select></code>',
      '<code contenteditable="" hidden>Fid garmunir sabuke badil.Lam kac topuoj ju.Saz lul zem zabha iviracnem delab.</code>'
    ]);
  });
});
