const expect = require("unexpected")
  .clone()
  .use(require("unexpected-snapshot"));

const chanceCache = require("chance-generators/lib/chanceCache");

const { html, htmlString } = require("./index");

describe("html", () => {
  beforeEach(() => {
    chanceCache.clear();
  });

  it("generates random HTML trees", () => {
    expect(html.first(), "to equal snapshot", {
      type: "tag",
      tag: "html",
      attributes: { hidden: "", lang: "25SSlGlheH#ySk0Wbe)" },
      children: [
        {
          type: "tag",
          tag: "head",
          attributes: { tabindex: "-618" },
          children: [
            {
              type: "tag",
              tag: "title",
              attributes: { draggable: "true" },
              children: []
            }
          ]
        },
        { type: "tag", tag: "body", attributes: { dir: "ltr" }, children: [] }
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
      '<html hidden="" lang="25SSlGlheH#ySk0Wbe)"><head tabindex="-618"><title draggable="true"></title></head><body dir="ltr"></body></html>',
      '<html tabindex="-233" lang="T"><head contenteditable="false"><title contenteditable="false"></title><link integrity="bhrYrGYj" href="cm^CtnX3xF"></link></head><body draggable="true"></body></html>',
      '<html tabindex="450" lang="&amp;S1&amp;ygQo"><head hidden=""><title draggable="true"></title></head><body draggable="true"></body></html>',
      '<html tabindex="-74" lang="5Dovab8o00165Sf&amp;AWi^"><head contenteditable="true"><title hidden=""></title></head><body dir="auto"><iframe tabindex="561" title="KcM0FibGhoc%VJxP"></iframe><video dir="rtl"><object data="vZ"></object></video></body></html>',
      '<html hidden="" lang="Uh#H7qnE%$Ny7j%A"><head draggable="true"><title dir="ltr"></title></head><body draggable="true"></body></html>'
    ]);
  });

  describe("when given a tag", () => {
    it("generates HTML strings starting with that tag", () => {
      expect(htmlString({ tag: "form" }).take(5), "to equal snapshot", [
        '<form method="post"><noscript draggable="true"></noscript></form>',
        '<form hidden=""><br hidden=""></br><abbr draggable="true"></abbr><s draggable="false"></s><datalist dir="auto"></datalist>Apli navvalbu rujbave.</form>',
        '<form autocomplete="on"><address dir="rtl"><meter hidden=""><textarea readonly=""></textarea></meter>Gib ejjitluh jahfab.</address><h6 hidden="">Wot cujduvtih le votevned esohogbi dadeip.Pow si gewse iwahoil.</h6>Mu kudlewje bueh pi hoje fef.</form>',
        '<form tabindex="404"></form>',
        '<form draggable="false"><kbd contenteditable="">Hodpizhir leg liptemdov pa.<mark tabindex="326"></mark>Agedawmem fojdewire.Azpig duw ipaje.</kbd></form>'
      ]);
    });
  });
});
