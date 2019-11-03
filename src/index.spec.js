const expect = require("unexpected")
  .clone()
  .use(require("unexpected-snapshot"));

const { html, htmlString } = require("./index");

describe("html", () => {
  it("generates random HTML trees", () => {
    expect(html.first(), "to equal snapshot", {
      type: "tag",
      tag: "html",
      attributes: { dir: "rtl", lang: "Zkm6$TKN2%Q6]l3" },
      children: [
        {
          type: "tag",
          tag: "head",
          attributes: { contenteditable: "" },
          children: [
            {
              type: "tag",
              tag: "title",
              attributes: { hidden: "" },
              children: []
            },
            {
              type: "tag",
              tag: "template",
              attributes: { draggable: "true" },
              children: []
            }
          ]
        },
        {
          type: "tag",
          tag: "body",
          attributes: { contenteditable: "true" },
          children: [
            {
              type: "tag",
              tag: "select",
              attributes: { tabindex: "772" },
              children: []
            },
            {
              type: "tag",
              tag: "audio",
              attributes: { tabindex: "543" },
              children: [
                {
                  type: "tag",
                  tag: "strong",
                  attributes: { tabindex: "-583" },
                  children: []
                }
              ]
            }
          ]
        }
      ]
    });
  });
});

describe("htmlString", () => {
  it("generates random HTML strings", () => {
    expect(htmlString.take(5), "to equal snapshot", [
      '<html draggable="true" lang="l^RkLhTsb1#R&amp;hP^Z6&amp;"><head dir="rtl"><title hidden=""></title></head><body tabindex="451"></body></html>',
      '<html tabindex="-839" lang="&amp;y"><head dir="rtl"><title dir="auto"></title></head><body dir="ltr"></body></html>',
      '<html draggable="false" lang="zIzJ2^HRqcH^ksnQKmF"><head dir="rtl"><title hidden=""></title></head><body tabindex="-148"></body></html>',
      '<html contenteditable="true" lang="LwSweD3Fp7%zpIoUcBI9"><head draggable="false"><title draggable="false"></title><noscript contenteditable="true"><title hidden=""></title></noscript></head><body tabindex="527"><video tabindex="659"></video></body></html>',
      '<html dir="ltr" lang="XLbS"><head hidden=""><title contenteditable="false"></title></head><body hidden=""><section contenteditable=""><datalist contenteditable=""><option tabindex="911"></option></datalist></section><noscript dir="auto"><h4 tabindex="345"></h4></noscript><style draggable="false"><var contenteditable=""><wbr dir="auto"></wbr><span hidden="">Mudifo buw.</span><map tabindex="498"></map></var></style><embed hidden="" src="1phakkt%t#" title="SUXKmQ^!EDC5"></embed><h2 dir="ltr">Cejijwoh oleowa geresu pun to.Ce posilcu boz sa.</h2></body></html>'
    ]);
  });

  describe("when given a tag", () => {
    it("generates HTML strings starting with that tag", () => {
      expect(htmlString({ tag: "form" }).take(5), "to equal snapshot", [
        '<form draggable="true"><br hidden=""></br><progress hidden=""><q hidden=""></q><datalist contenteditable="false">Ginohdo guukalo elrubon racu kisciam.<option tabindex="-738"></option></datalist></progress><code hidden=""><abbr contenteditable="false"></abbr><wbr hidden=""></wbr>Pisug zakiwog.Le jog.<u dir="ltr">Oto si.Onitufuce epeema ge gu lucufuonu hezir ithozi.<s tabindex="860"></s></u></code><ul dir="ltr"></ul></form>',
        '<form novalidate=""></form>',
        '<form method="post"></form>',
        '<form draggable="false"><b dir="ltr"></b><div tabindex="61"><dt hidden=""><table tabindex="245"></table><td tabindex="-837"><bdi tabindex="962"></bdi><section tabindex="-128"></section></td></dt><dt tabindex="-1"><label contenteditable=""></label></dt><dt tabindex="632"><a hidden=""></a></dt><dd hidden=""></dd><dd tabindex="342"><script integrity="wm"></script><time draggable="true"></time></dd></div>Cuuzo zosoba.<s dir="rtl"></s><main dir="auto"></main></form>',
        '<form dir="ltr"><hr hidden=""></hr><svg dir="ltr"><picture contenteditable="true"><template dir="auto"><video dir="auto"><del tabindex="715"></del></video></template><template draggable="false">Botja upanibsa hinhi ti so ulbi mel.<b hidden=""><slot hidden=""><map draggable="true"></map>Roohpi lab lefugor.Badupwu opa joworo kotcorin nipranas hod.<object hidden=""></object></slot></b><article draggable="true"><slot contenteditable="true"></slot></article><blockquote hidden=""><wbr draggable="false"></wbr></blockquote></template><img hidden="" src="fEcpt!Im#)1E2!"></img></picture>Lozbiv sibmin itijunij ti wedwiw.Hez mupi ik pijsad kuhu.<u dir="rtl">Napivu ne orela.<datalist hidden=""><meter tabindex="806"></meter></datalist>Gidjudi cap na kasarmu vabkoz nemperfab fo.</u></svg></form>'
      ]);
    });
  });
});
