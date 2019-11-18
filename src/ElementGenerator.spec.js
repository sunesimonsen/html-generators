const expect = require("unexpected")
  .clone()
  .use(require("unexpected-snapshot"))
  .use(require("magicpen-prism"));

const stringify = require("./stringify");
const chanceCache = require("chance-generators/lib/chanceCache");

const ElementGenerator = require("./ElementGenerator.js");

function containsElement(html, elementName) {
  if (html.type === "tag") {
    return (
      html.tag === elementName ||
      html.children.some(child => containsElement(child, elementName))
    );
  } else {
    return false;
  }
}

expect.addAssertion(
  "<object> [not] to contain element <string>",
  (expect, html, elementName) => {
    expect.subjectOutput = output => output.code(stringify(html), "html");
    expect.argsOutput[0] = output =>
      output.code(
        stringify({
          type: "tag",
          tag: elementName,
          attributes: [],
          children: []
        }),
        "html"
      );
    expect(containsElement(html, elementName), "[not] to be true");
  }
);

describe("ElementGenerator", () => {
  let generator;

  beforeEach(() => {
    chanceCache.clear();
    generator = new ElementGenerator({ tag: "code" });
  });

  it("generates elements of the given type", () => {
    expect(generator.take(3), "to equal snapshot", [
  {
    type: 'tag',
    tag: 'code',
    attributes: { hidden: null },
    children: [
      {
        type: 'tag',
        tag: 'output',
        attributes: { contenteditable: 'true', dir: 'auto' },
        children: [
          {
            type: 'tag',
            tag: 'q',
            attributes: { dir: 'rtl', contenteditable: '', hidden: null, tabindex: '525' },
            children: []
          },
          { type: 'text', value: 'Mabuj do lisib.' },
          {
            type: 'tag',
            tag: 'sub',
            attributes: { hidden: null, draggable: 'true', contenteditable: 'false', tabindex: '966' },
            children: [
              { type: 'text', value: 'Va ebik vo pe gazziw onokan.' },
              { type: 'text', value: 'Uhlog sezsi ju.' }
            ]
          }
        ]
      }
    ]
  },
  {
    type: 'tag',
    tag: 'code',
    attributes: { style: 'word-break: break-all;' },
    children: [
      { type: 'text', value: 'Cujduvtih le votevned esohogbi dadeip riide.' },
      { type: 'text', value: 'Zegcih iwahoil giimeduj deg bueh.' },
      {
        type: 'tag',
        tag: 'cite',
        attributes: { style: 'justify-items: first baseline; border-right-style: groove; border-bottom-color: hsl(7978751946129408 16% 32% / 338501803442176);' },
        children: [
          {
            type: 'tag',
            tag: 'iframe',
            attributes: { tabindex: '-712', title: ']ct' },
            children: [ { type: 'text', value: 'Je hodpizhir leg liptemdov.' } ]
          },
          {
            type: 'tag',
            tag: 'datalist',
            attributes: {},
            children: [
              { type: 'tag', tag: 'area', children: [], attributes: { tabindex: '-16' } },
              {
                type: 'tag',
                tag: 'option',
                attributes: { dir: 'rtl', draggable: 'true', hidden: null, contenteditable: 'true', tabindex: '838' },
                children: [ { type: 'text', value: 'Om hepazpig duw ipaje ewumovecu iro.' } ]
              },
              {
                type: 'tag',
                tag: 'option',
                attributes: { contenteditable: '', draggable: 'true', selected: null, hidden: null },
                children: [ { type: 'text', value: 'Tugohi ze erosi log.' } ]
              }
            ]
          },
          { type: 'text', value: 'Uze ipilip pufwi.' }
        ]
      },
      {
        type: 'tag',
        tag: 'select',
        attributes: { autofocus: null, contenteditable: '' },
        children: [
          {
            type: 'tag',
            tag: 'optgroup',
            attributes: { draggable: 'false' },
            children: [
              {
                type: 'tag',
                tag: 'template',
                attributes: {},
                children: [
                  {
                    type: 'tag',
                    tag: 'h2',
                    attributes: { dir: 'rtl', tabindex: '-937', hidden: null, contenteditable: 'false' },
                    children: [
                      { type: 'text', value: 'Ihera lihakhup patofcok.' },
                      {
                        type: 'tag',
                        tag: 'ruby',
                        attributes: {
                          contenteditable: 'true',
                          hidden: null,
                          draggable: 'false',
                          style: 'margin-inline: auto; animation-play-state: running; grid-column-start: auto;'
                        },
                        children: []
                      },
                      {
                        type: 'tag',
                        tag: 'br',
                        children: [],
                        attributes: { dir: 'ltr', hidden: null, tabindex: '-38', draggable: 'true' }
                      }
                    ]
                  }
                ]
              },
              {
                type: 'tag',
                tag: 'template',
                attributes: { contenteditable: '', dir: 'ltr' },
                children: [
                  {
                    type: 'tag',
                    tag: 'audio',
                    attributes: {
                      tabindex: '516',
                      hidden: null,
                      contenteditable: '',
                      style: 'font-optical-sizing: auto; font-variant-position: sub; pointer-events: auto; border-top-style: none;'
                    },
                    children: [
                      {
                        type: 'tag',
                        tag: 'base',
                        children: [],
                        attributes: { draggable: 'true', tabindex: '156', hidden: null, contenteditable: '' }
                      }
                    ]
                  },
                  {
                    type: 'tag',
                    tag: 'article',
                    attributes: { contenteditable: '', draggable: 'false' },
                    children: [
                      {
                        type: 'tag',
                        tag: 'mark',
                        attributes: {
                          draggable: 'true',
                          style: 'border-bottom-color: rgb(-6916220410396672 / -8178489324732416); border-block-end: thick; width: fit-content; border-inline-style: solid;'
                        },
                        children: []
                      },
                      { type: 'tag', tag: 's', attributes: {}, children: [] },
                      { type: 'text', value: 'Fite opu la pivvod opbun anoso.' }
                    ]
                  },
                  {
                    type: 'tag',
                    tag: 'header',
                    attributes: {},
                    children: [
                      {
                        type: 'tag',
                        tag: 'u',
                        attributes: { contenteditable: '', style: 'animation-delay: -922.0738ms; mask-size: contain;' },
                        children: []
                      },
                      { type: 'tag', tag: 'strong', attributes: {}, children: [] },
                      {
                        type: 'tag',
                        tag: 'textarea',
                        attributes: {
                          rows: '735', minlength: '804', contenteditable: '', tabindex: '177', maxlength: '751',
                          draggable: 'false'
                        },
                        children: [ { type: 'text', value: 'Lesev egizosde pitkedeb iva uzoli cicse.' } ]
                      },
                      { type: 'text', value: 'Zuzodol umnorer fos ecumoce waccezluj.' }
                    ]
                  }
                ]
              },
              {
                type: 'tag',
                tag: 'template',
                attributes: { tabindex: '754', contenteditable: 'true', draggable: 'false', dir: 'ltr' },
                children: [
                  {
                    type: 'tag',
                    tag: 'h4',
                    attributes: {
                      dir: 'ltr',
                      contenteditable: 'false',
                      style: 'border-bottom: groove #3ccd39 thick; font-size: larger; caret-color: auto; text-align: right;'
                    },
                    children: [ { type: 'tag', tag: 'strong', attributes: {}, children: [] } ]
                  },
                  { type: 'tag', tag: 'datalist', attributes: { contenteditable: 'false', dir: 'auto' }, children: [] },
                  { type: 'tag', tag: 'meta', children: [], attributes: { draggable: 'false' } },
                  {
                    type: 'tag',
                    tag: 'img',
                    children: [],
                    attributes: {
                      src: 'UqZvH]UZRC%',
                      style: 'caption-side: inline-end; transition-delay: -884.2723s; font-language-override: normal; border-block-start: hidden medium; grid-column-start: selu;'
                    }
                  }
                ]
              }
            ]
          },
          {
            type: 'tag',
            tag: 'script',
            attributes: { src: 'j^f8*(', tabindex: '581' },
            children: [
              {
                type: 'tag',
                tag: 'video',
                attributes: { contenteditable: 'false', preload: 'none', tabindex: '986' },
                children: [
                  {
                    type: 'tag',
                    tag: 'aside',
                    attributes: {
                      tabindex: '-273',
                      contenteditable: '',
                      style: 'padding-block: 53%; z-index: 100%; text-overflow: ellipsis; margin-left: auto; page-break-inside: avoid;'
                    },
                    children: [
                      {
                        type: 'tag', tag: 'div', attributes: { dir: 'rtl', contenteditable: '', draggable: 'true' },
                        children: []
                      },
                      { type: 'tag', tag: 'datalist', attributes: {}, children: [] },
                      { type: 'text', value: 'Emeamu itsa motor idbujsok dulim.' },
                      { type: 'text', value: 'Meperufiw zenatij ti ci.' }
                    ]
                  },
                  { type: 'tag', tag: 'h6', attributes: {}, children: [] },
                  {
                    type: 'tag',
                    tag: 'section',
                    attributes: { contenteditable: '', dir: 'ltr' },
                    children: [
                      {
                        type: 'tag',
                        tag: 'svg',
                        attributes: {
                          contenteditable: 'false',
                          draggable: 'true',
                          tabindex: '-278',
                          hidden: null,
                          style: 'border-block-style: double;'
                        },
                        children: []
                      },
                      { type: 'tag', tag: 'picture', attributes: { draggable: 'true', dir: 'rtl' }, children: [] }
                    ]
                  }
                ]
              },
              {
                type: 'tag',
                tag: 'template',
                attributes: { contenteditable: '' },
                children: [
                  {
                    type: 'tag',
                    tag: 'b',
                    attributes: {},
                    children: [
                      { type: 'text', value: 'Guflulto nosba.' },
                      { type: 'tag', tag: 'strong', attributes: { contenteditable: 'false' }, children: [] }
                    ]
                  },
                  {
                    type: 'tag',
                    tag: 'textarea',
                    attributes: {
                      disabled: null, readonly: null, cols: '20', contenteditable: '', dir: 'auto', maxlength: '211',
                      tabindex: '-535', hidden: null, minlength: '233', draggable: 'true', spellcheck: 'default',
                      required: null, autocomplete: 'on'
                    },
                    children: [ { type: 'text', value: 'Paron sinle ipsej kowba le efju.' } ]
                  }
                ]
              }
            ]
          },
          {
            type: 'tag',
            tag: 'option',
            attributes: { contenteditable: 'false' },
            children: [ { type: 'text', value: 'Moudu uwuaz.' } ]
          },
          {
            type: 'tag',
            tag: 'template',
            attributes: { draggable: 'true' },
            children: [
              {
                type: 'tag',
                tag: 'section',
                attributes: { hidden: null, contenteditable: 'false', tabindex: '-199', dir: 'auto' },
                children: [
                  {
                    type: 'tag',
                    tag: 'noscript',
                    attributes: {},
                    children: [
                      { type: 'tag', tag: 'meter', attributes: { contenteditable: '', draggable: 'true' }, children: [] },
                      { type: 'tag', tag: 'form', attributes: {}, children: [] }
                    ]
                  },
                  { type: 'text', value: 'Dil mojov ukawuwge zon zat godfatvo.' },
                  { type: 'tag', tag: 'keygen', children: [], attributes: { tabindex: '-683', dir: 'rtl' } }
                ]
              },
              {
                type: 'tag',
                tag: 'blockquote',
                attributes: { dir: 'rtl', hidden: null, tabindex: '439' },
                children: [
                  {
                    type: 'tag',
                    tag: 'h5',
                    attributes: {
                      draggable: 'false',
                      style: 'border-spacing: 248.476px -766.204pc; transform-box: border-box; max-width: fit-content; counter-increment: none; border-color: rgba(6820775747125248 , 50%);'
                    },
                    children: [
                      { type: 'tag', tag: 'object', attributes: { tabindex: '143' }, children: [] },
                      {
                        type: 'tag',
                        tag: 'button',
                        attributes: { disabled: null, hidden: null, autofocus: null, type: 'submit', dir: 'rtl' },
                        children: []
                      },
                      { type: 'tag', tag: 'samp', attributes: {}, children: [] }
                    ]
                  }
                ]
              },
              { type: 'tag', tag: 'keygen', children: [], attributes: { hidden: null, draggable: 'true' } },
              {
                type: 'tag',
                tag: 'embed',
                children: [],
                attributes: {
                  tabindex: '716', contenteditable: 'true', draggable: 'true', dir: 'auto', src: '^zRq',
                  title: 'v(Tl^RkL'
                }
              }
            ]
          },
          {
            type: 'tag',
            tag: 'template',
            attributes: { contenteditable: 'false' },
            children: [
              { type: 'tag', tag: 'base', children: [], attributes: {} },
              {
                type: 'tag',
                tag: 'textarea',
                attributes: {
                  draggable: 'true', readonly: null, disabled: null, tabindex: '-985', cols: '839', contenteditable: '',
                  required: null, minlength: '838', autocomplete: 'on', rows: '870'
                },
                children: [ { type: 'text', value: 'Laket semiewu kioli nu gi.' } ]
              },
              {
                type: 'tag',
                tag: 'time',
                attributes: { contenteditable: 'true', dir: 'auto' },
                children: [ { type: 'text', value: 'Paz fiecufi.' } ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    type: 'tag',
    tag: 'code',
    attributes: { draggable: 'true', style: 'quotes: auto; border-left-width: thick;' },
    children: [
      { type: 'text', value: 'Nimnikro ge osjetik.' },
      { type: 'text', value: 'Fur mamhevi det iphoc usetumur me.' },
      { type: 'text', value: 'Bowebaf tiritoke lijukis.' },
      {
        type: 'tag',
        tag: 'sup',
        attributes: { dir: 'auto', tabindex: '764', style: 'text-align: right;' },
        children: [
          {
            type: 'tag',
            tag: 'label',
            attributes: { draggable: 'false', contenteditable: 'false' },
            children: [
              { type: 'text', value: 'Ruvebuw anja tiwec fe.' },
              {
                type: 'tag',
                tag: 'sup',
                attributes: { dir: 'rtl', hidden: null, draggable: 'false', tabindex: '494' },
                children: [
                  { type: 'tag', tag: 'input', children: [], attributes: { dir: 'rtl', type: 'submit' } },
                  {
                    type: 'tag',
                    tag: 'meter',
                    attributes: {},
                    children: [
                      { type: 'tag', tag: 'i', attributes: {}, children: [] },
                      {
                        type: 'tag',
                        tag: 'select',
                        attributes: { draggable: 'false', contenteditable: 'true', style: 'mask-type: alpha; grid-row-start: auto;' },
                        children: []
                      },
                      { type: 'tag', tag: 'output', attributes: {}, children: [] },
                      {
                        type: 'tag',
                        tag: 'input',
                        children: [],
                        attributes: {
                          checked: null, inputmode: 'none', disabled: null, type: 'radio', tabindex: '-361', multiple: null,
                          style: 'text-shadow: 900.4747rem hsla(-7445257042001920 , 54% , 96% , 76%); perspective-origin: 66% bottom; padding-block: 85%; width: available; text-indent: hanging each-line 99%;'
                        }
                      },
                      { type: 'tag', tag: 'u', attributes: {}, children: [] }
                    ]
                  },
                  { type: 'text', value: 'Suz siw.' },
                  { type: 'text', value: 'Wo od otzuel.' },
                  { type: 'tag', tag: 'canvas', attributes: { draggable: 'false' }, children: [] }
                ]
              }
            ]
          },
          { type: 'text', value: 'Hipa rekmanam vespuk hibiz if.' }
        ]
      },
      {
        type: 'tag',
        tag: 'audio',
        attributes: {
          draggable: 'true',
          tabindex: '-52',
          hidden: null,
          style: 'animation-play-state: running; grid-template-areas: \'jukdij\'; font-variant-caps: petite-caps;'
        },
        children: [
          { type: 'text', value: 'Beb cicmohu agamuvoni ufocekepe pagge gu.' },
          { type: 'text', value: 'Acufuonu hezir ithozi inu ik di.' },
          {
            type: 'tag',
            tag: 'em',
            attributes: { contenteditable: 'false', hidden: null, draggable: 'true', dir: 'rtl' },
            children: [
              { type: 'text', value: 'Cimufvu eci pianevin.' },
              {
                type: 'tag',
                tag: 'del',
                attributes: { dir: 'auto', draggable: 'false', hidden: null, tabindex: '-851' },
                children: []
              },
              { type: 'text', value: 'Howdor fuuviit aj ida esibaco rod.' }
            ]
          },
          {
            type: 'tag',
            tag: 'em',
            attributes: { dir: 'rtl', style: 'scroll-padding-block-end: -786.0388in; rotate: none; letter-spacing: normal;' },
            children: [
              {
                type: 'tag',
                tag: 'input',
                children: [],
                attributes: {
                  tabindex: '974', draggable: 'false', inputmode: 'numeric', required: null, contenteditable: 'false',
                  checked: null, autofocus: null, hidden: null, spellcheck: 'false', multiple: null, readonly: null,
                  disabled: null, type: 'color', dir: 'rtl'
                }
              },
              { type: 'text', value: 'Bu pu vafeuw nuro.' },
              {
                type: 'tag',
                tag: 'bdo',
                attributes: { hidden: null, dir: 'auto', contenteditable: 'false', tabindex: '-655' },
                children: [
                  { type: 'tag', tag: 'canvas', attributes: { tabindex: '230', dir: 'ltr' }, children: [] },
                  {
                    type: 'tag',
                    tag: 'script',
                    attributes: {
                      defer: null, src: 'g5l5H', hidden: null, tabindex: '761', crossorigin: 'anonymous', draggable: 'false',
                      async: null, nomodule: null, integrity: 'c^&'
                    },
                    children: [
                      {
                        type: 'tag', tag: 'blockquote', attributes: { contenteditable: 'false', tabindex: '-430' },
                        children: []
                      }
                    ]
                  },
                  {
                    type: 'tag',
                    tag: 'kbd',
                    attributes: { contenteditable: '', tabindex: '798' },
                    children: [
                      { type: 'text', value: 'Ezoboldag sab tekis kam ijbu.' },
                      { type: 'tag', tag: 'b', attributes: {}, children: [] },
                      {
                        type: 'tag',
                        tag: 'input',
                        children: [],
                        attributes: { dir: 'ltr', spellcheck: 'true', checked: null, draggable: 'false', type: 'button' }
                      },
                      {
                        type: 'tag',
                        tag: 'output',
                        attributes: { hidden: null, contenteditable: 'false', dir: 'auto', draggable: 'false' },
                        children: []
                      },
                      { type: 'text', value: 'Kotcorin nipranas hod tehnes ako.' }
                    ]
                  },
                  { type: 'tag', tag: 'var', attributes: {}, children: [] },
                  {
                    type: 'tag',
                    tag: 'dfn',
                    attributes: { contenteditable: 'false', draggable: 'false' },
                    children: [
                      { type: 'text', value: 'Be nav movteloz.' },
                      {
                        type: 'tag',
                        tag: 's',
                        attributes: {
                          contenteditable: 'true',
                          draggable: 'true',
                          style: 'font-language-override: normal; mask-mode: match-source; mask-clip: no-clip; scroll-margin-inline: -156.5582Q;'
                        },
                        children: []
                      }
                    ]
                  }
                ]
              },
              {
                type: 'tag',
                tag: 'cite',
                attributes: { draggable: 'true', dir: 'rtl', tabindex: '-632', contenteditable: 'false' },
                children: []
              },
              {
                type: 'tag',
                tag: 'b',
                attributes: { hidden: null, dir: 'rtl', draggable: 'true' },
                children: [
                  { type: 'text', value: 'Sadlez epki fezneic kiko misowef.' },
                  {
                    type: 'tag',
                    tag: 'b',
                    attributes: {
                      contenteditable: 'true',
                      style: 'place-content: last baseline space-around; scroll-margin-block: 688.3409rem; scroll-margin-right: -107.2627px; table-layout: fixed;'
                    },
                    children: [
                      { type: 'tag', tag: 'bdo', attributes: {}, children: [] },
                      { type: 'text', value: 'Ta gu di vaul baztusig perfab fo.' },
                      { type: 'text', value: 'Vaz wo hu hoezuva tueno ot vofvuktic.' }
                    ]
                  },
                  {
                    type: 'tag',
                    tag: 'del',
                    attributes: {
                      hidden: null,
                      style: 'mask-image: none; column-rule-style: outset; text-align: left; word-wrap: break-word; resize: block;'
                    },
                    children: []
                  },
                  {
                    type: 'tag',
                    tag: 'ins',
                    attributes: { dir: 'rtl', draggable: 'false' },
                    children: [
                      { type: 'tag', tag: 'span', attributes: { hidden: null, contenteditable: 'true' }, children: [] },
                      { type: 'tag', tag: 'svg', attributes: { hidden: null, dir: 'rtl' }, children: [] },
                      { type: 'tag', tag: 'keygen', children: [], attributes: { draggable: 'true', style: 'margin-left: 17%;' } },
                      {
                        type: 'tag',
                        tag: 'img',
                        children: [],
                        attributes: { crossorigin: 'anonymous', tabindex: '479', src: 'z', draggable: 'true', decoding: 'sync', dir: 'rtl' }
                      },
                      { type: 'text', value: 'Nok asoomagib cuzvuca lafihih otrihto.' }
                    ]
                  },
                  {
                    type: 'tag',
                    tag: 'math',
                    attributes: {
                      draggable: 'true', dir: 'ltr', tabindex: '860', display: 'inline', overflow: 'elide',
                      style: 'clip-path: url(gewmicame); backface-visibility: hidden; min-height: 902.8067ch; mask-composite: intersect;'
                    },
                    children: [
                      {
                        type: 'tag',
                        tag: 'select',
                        attributes: { hidden: null, multiple: null, required: null, disabled: null },
                        children: []
                      },
                      { type: 'text', value: 'Mordopni feevi dab hof heksal jan.' },
                      { type: 'tag', tag: 'aside', attributes: { hidden: null, dir: 'auto', tabindex: '693' }, children: [] },
                      { type: 'tag', tag: 'cite', attributes: {}, children: [] }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]);
  });

  describe("on a tag with required and ordered content", () => {
    beforeEach(() => {
      generator = new ElementGenerator({ tag: "figure" });
    });

    it("honors the required elements and the order", () => {
      expect(generator.take(5), "to equal snapshot", [
  {
    type: 'tag',
    tag: 'figure',
    attributes: { hidden: null },
    children: [
      {
        type: 'tag',
        tag: 'figcaption',
        attributes: { draggable: 'true', contenteditable: 'true' },
        children: [
          { type: 'text', value: 'Ewegute bibro.' },
          {
            type: 'tag',
            tag: 'abbr',
            attributes: { contenteditable: '' },
            children: [
              { type: 'text', value: 'Ficow ajedehir pub lef kimri uv okonokan.' },
              { type: 'text', value: 'Uhlog sezsi ju.' },
              {
                type: 'tag',
                tag: 'cite',
                attributes: { style: 'word-break: break-all;' },
                children: [
                  { type: 'text', value: 'Cujduvtih le votevned esohogbi dadeip riide.' },
                  { type: 'text', value: 'Zegcih iwahoil giimeduj deg bueh.' },
                  {
                    type: 'tag',
                    tag: 'cite',
                    attributes: { style: 'justify-items: first baseline; border-right-style: groove; border-bottom-color: hsl(7978751946129408 16% 32% / 338501803442176);' },
                    children: [
                      {
                        type: 'tag',
                        tag: 'iframe',
                        attributes: { tabindex: '-712', title: ']ct' },
                        children: [ { type: 'text', value: 'Je hodpizhir leg liptemdov.' } ]
                      },
                      { type: 'tag', tag: 'datalist', attributes: {}, children: [] },
                      { type: 'text', value: 'Envewi logumem fojdewire.' }
                    ]
                  },
                  {
                    type: 'tag',
                    tag: 'select',
                    attributes: { disabled: null, dir: 'ltr' },
                    children: [
                      {
                        type: 'tag',
                        tag: 'script',
                        attributes: { hidden: null, src: 'g*l6%XSQaBh*X', crossorigin: '' },
                        children: []
                      },
                      { type: 'tag', tag: 'template', attributes: { draggable: 'true' }, children: [] },
                      {
                        type: 'tag',
                        tag: 'template',
                        attributes: { tabindex: '-494', contenteditable: '', hidden: null },
                        children: []
                      },
                      {
                        type: 'tag',
                        tag: 'script',
                        attributes: {
                          integrity: 'sR[[DK', src: 'G6zLVQXK@or1KuQb4Vd', crossorigin: 'use-credentials', async: null,
                          draggable: 'false', hidden: null, nomodule: null
                        },
                        children: []
                      },
                      {
                        type: 'tag',
                        tag: 'option',
                        attributes: { selected: null },
                        children: [ { type: 'text', value: 'Ohi suzceh egpa muvona to fejuhera.' } ]
                      }
                    ]
                  }
                ]
              },
              { type: 'tag', tag: 'wbr', children: [], attributes: { hidden: null, dir: 'auto', tabindex: '-810' } },
              {
                type: 'tag',
                tag: 'area',
                children: [],
                attributes: {
                  shape: 'default',
                  contenteditable: '',
                  draggable: 'false',
                  style: 'font-language-override: \'ija\'; flex-shrink: 1420703647662080; border-block-end: dashed hsla(963.6818grad 84% 59% / 3%); border-top-right-radius: -922.3306vmax;'
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    type: 'tag',
    tag: 'figure',
    attributes: { dir: 'rtl', style: 'inset-inline-end: auto; scrollbar-color: dark;' },
    children: [
      {
        type: 'tag',
        tag: 'figcaption',
        attributes: { contenteditable: 'true', hidden: null },
        children: [
          { type: 'text', value: 'Miceb cuk maffigra vutuwom wibse daj.' },
          { type: 'text', value: 'Da ura.' },
          { type: 'tag', tag: 'keygen', children: [], attributes: { contenteditable: 'true', tabindex: '-173' } },
          {
            type: 'tag',
            tag: 'area',
            children: [],
            attributes: {
              draggable: 'true',
              contenteditable: '',
              shape: 'circle',
              style: 'touch-action: pinch-zoom pan-down; border-image-width: -7735945746972672; transform-style: preserve-3d; transform-style: flat;'
            }
          }
        ]
      }
    ]
  },
  {
    type: 'tag',
    tag: 'figure',
    attributes: { draggable: 'false', tabindex: '-573', hidden: null, dir: 'ltr' },
    children: [
      { type: 'tag', tag: 'figcaption', attributes: {}, children: [] },
      {
        type: 'tag',
        tag: 'object',
        attributes: { style: 'overflow-x: hidden; background-repeat: repeat-y; column-rule-style: dashed; scroll-snap-stop: always;' },
        children: []
      },
      {
        type: 'tag',
        tag: 'ul',
        attributes: {
          tabindex: '-282',
          style: 'padding-block-start: 257.8857vw; text-decoration: hsla(-435.9309rad , 17% , 42% , 57%); scroll-margin-top: 151.8491vw; perspective-origin: left center;'
        },
        children: [
          {
            type: 'tag',
            tag: 'template',
            attributes: { dir: 'ltr', hidden: null },
            children: [
              {
                type: 'tag',
                tag: 'nav',
                attributes: {
                  draggable: 'false',
                  hidden: null,
                  style: 'background-blend-mode: normal; transition-timing-function: steps(-82% , jump-none);'
                },
                children: [
                  {
                    type: 'tag',
                    tag: 'pre',
                    attributes: { draggable: 'true', tabindex: '-293', dir: 'ltr', hidden: null },
                    children: [
                      { type: 'tag', tag: 'var', attributes: {}, children: [] },
                      { type: 'tag', tag: 'span', attributes: {}, children: [] },
                      { type: 'text', value: 'Wafos ecumoce waccezluj huwsojwa lirhu mi mi.' },
                      {
                        type: 'tag',
                        tag: 'video',
                        attributes: { contenteditable: 'true', hidden: null, preload: 'metadata' },
                        children: []
                      }
                    ]
                  }
                ]
              },
              {
                type: 'tag',
                tag: 'aside',
                attributes: {
                  dir: 'ltr',
                  hidden: null,
                  style: 'justify-content: normal; font-weight: lighter; scroll-margin-left: -975.6911vw; vertical-align: middle; backface-visibility: visible;'
                },
                children: [
                  {
                    type: 'tag',
                    tag: 'th',
                    attributes: { dir: 'rtl', tabindex: '737', scope: 'auto', draggable: 'true', hidden: null },
                    children: [
                      {
                        type: 'tag',
                        tag: 'img',
                        children: [],
                        attributes: { draggable: 'false', tabindex: '-536', dir: 'ltr', src: 'SYumj^f8*' }
                      },
                      { type: 'text', value: 'Okaivi bi alufen muenuna jacu rusomiwus.' },
                      {
                        type: 'tag',
                        tag: 'em',
                        attributes: { dir: 'ltr', contenteditable: '', hidden: null, draggable: 'false' },
                        children: []
                      },
                      { type: 'text', value: 'Vop ja pil.' },
                      {
                        type: 'tag',
                        tag: 'iframe',
                        attributes: { tabindex: '561', draggable: 'false', dir: 'auto', src: 'jJcF36TV0', title: 'kTb[' },
                        children: [ { type: 'text', value: 'Nawlim ikerur fiwpogna pehtika nafid.' } ]
                      }
                    ]
                  },
                  {
                    type: 'tag',
                    tag: 'audio',
                    attributes: { hidden: null, contenteditable: 'false', tabindex: '474', draggable: 'false' },
                    children: [ { type: 'text', value: 'Feh badil ijpe.' } ]
                  },
                  {
                    type: 'tag',
                    tag: 'q',
                    attributes: {
                      dir: 'rtl',
                      contenteditable: 'false',
                      hidden: null,
                      style: 'text-combine-upright: none; text-transform: uppercase; background-image: none;'
                    },
                    children: [
                      {
                        type: 'tag',
                        tag: 'b',
                        attributes: { draggable: 'true', contenteditable: 'false', tabindex: '-236' },
                        children: []
                      }
                    ]
                  },
                  { type: 'text', value: 'Zabha iviracnem delab efki ij.' },
                  { type: 'text', value: 'Loppa winsin je tonli subafe.' }
                ]
              },
              {
                type: 'tag',
                tag: 'iframe',
                attributes: { draggable: 'true', title: 'gv7me%!fdMbEZ[]i%' },
                children: [ { type: 'text', value: 'Azpavuw rilesgu mam ratohsi pem lefi ufe.' } ]
              },
              {
                type: 'tag',
                tag: 'script',
                attributes: {
                  integrity: '6zh&!93)Ej*2]', contenteditable: '', draggable: 'true', dir: 'rtl', tabindex: '-927',
                  nomodule: null, hidden: null
                },
                children: [
                  {
                    type: 'tag',
                    tag: 'svg',
                    attributes: { dir: 'ltr', hidden: null, contenteditable: 'false' },
                    children: [
                      {
                        type: 'tag',
                        tag: 'textarea',
                        attributes: {
                          minlength: '355', required: null, autofocus: null, autocomplete: 'on', disabled: null,
                          tabindex: '-532',
                          style: 'border-spacing: 248.476px -766.204pc; transform-box: border-box; max-width: fit-content; counter-increment: none; border-color: rgba(6820775747125248 , 50%);'
                        },
                        children: [ { type: 'text', value: 'Azakogzab wol katdevdo amahi wapvimhij uwsemi.' } ]
                      },
                      { type: 'tag', tag: 'h2', attributes: { tabindex: '153' }, children: [] },
                      {
                        type: 'tag',
                        tag: 'script',
                        attributes: { dir: 'auto', crossorigin: 'use-credentials', draggable: 'false', contenteditable: '', async: null },
                        children: []
                      }
                    ]
                  },
                  {
                    type: 'tag',
                    tag: 'article',
                    attributes: {},
                    children: [
                      {
                        type: 'tag',
                        tag: 'aside',
                        attributes: {
                          tabindex: '-236',
                          hidden: null,
                          draggable: 'true',
                          contenteditable: 'false',
                          style: 'scroll-padding-right: 739.7928in;'
                        },
                        children: []
                      },
                      { type: 'text', value: 'Mebket semiewu kioli.' },
                      { type: 'text', value: 'Id si bu.' }
                    ]
                  },
                  {
                    type: 'tag', tag: 'nav', attributes: { dir: 'auto' },
                    children: [ { type: 'text', value: 'Paz fiecufi.' } ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        type: 'tag',
        tag: 'datalist',
        attributes: { draggable: 'true', style: 'quotes: auto; border-left-width: thick;' },
        children: [
          { type: 'text', value: 'Jonim piro ge osjetik udwupbi.' },
          { type: 'text', value: 'Go saan vig.' },
          {
            type: 'tag',
            tag: 'option',
            attributes: {
              contenteditable: 'false', tabindex: '963', dir: 'auto', hidden: null, draggable: 'false',
              style: 'font-stretch: extra-condensed; column-span: all;'
            },
            children: [ { type: 'text', value: 'Webaf tiritoke.' } ]
          },
          {
            type: 'tag',
            tag: 'label',
            attributes: { dir: 'auto', tabindex: '345', hidden: null, contenteditable: 'false' },
            children: [
              {
                type: 'tag',
                tag: 'dfn',
                attributes: { hidden: null, contenteditable: 'true', tabindex: '895' },
                children: [
                  { type: 'tag', tag: 'abbr', attributes: { dir: 'rtl', draggable: 'true' }, children: [] }
                ]
              },
              {
                type: 'tag',
                tag: 'video',
                attributes: { preload: '', draggable: 'false', hidden: null },
                children: [
                  {
                    type: 'tag',
                    tag: 'textarea',
                    attributes: {
                      autofocus: null, maxlength: '250', wrap: 'soft', minlength: '665', disabled: null, draggable: 'true',
                      dir: 'rtl', contenteditable: 'false'
                    },
                    children: [ { type: 'text', value: 'Pibfu cazeceh orjon moodoge.' } ]
                  },
                  { type: 'text', value: 'Ficul fepnajlo.' },
                  {
                    type: 'tag',
                    tag: 'mark',
                    attributes: {
                      draggable: 'true',
                      tabindex: '-76',
                      style: '-webkit-line-clamp: 94%; break-after: auto; margin-right: -278.0522in; border-block-width: thick;'
                    },
                    children: [
                      { type: 'text', value: 'Vorezepof curcooza nuhdo guukalo elrubon.' },
                      {
                        type: 'tag',
                        tag: 's',
                        attributes: { dir: 'rtl', style: 'block-size: auto; padding-block-start: 34%; gap: -869.2874px normal;' },
                        children: []
                      },
                      { type: 'tag', tag: 'cite', attributes: { draggable: 'false', hidden: null }, children: [] },
                      {
                        type: 'tag',
                        tag: 'u',
                        attributes: {
                          hidden: null,
                          tabindex: '-870',
                          style: 'text-decoration: hsla(597.5665deg , 100% , 0% , -8058131623968768);'
                        },
                        children: []
                      },
                      { type: 'tag', tag: 'select', attributes: {}, children: [] }
                    ]
                  },
                  { type: 'text', value: 'Sugmoc miweb le jog.' }
                ]
              }
            ]
          },
          {
            type: 'tag',
            tag: 'option',
            attributes: { contenteditable: '', dir: 'rtl', selected: null, hidden: null },
            children: [ { type: 'text', value: 'Oto si.' } ]
          }
        ]
      }
    ]
  },
  {
    type: 'tag',
    tag: 'figure',
    attributes: { tabindex: '614', hidden: null, draggable: 'true', dir: 'auto' },
    children: []
  },
  {
    type: 'tag',
    tag: 'figure',
    attributes: { draggable: 'false' },
    children: [
      {
        type: 'tag',
        tag: 'figcaption',
        attributes: { contenteditable: '' },
        children: [
          { type: 'tag', tag: 'small', attributes: { contenteditable: 'true', dir: 'auto' }, children: [] },
          {
            type: 'tag',
            tag: 'var',
            attributes: { tabindex: '537', dir: 'rtl', contenteditable: 'false', hidden: null },
            children: [
              {
                type: 'tag',
                tag: 'template',
                attributes: {},
                children: [
                  {
                    type: 'tag',
                    tag: 'noscript',
                    attributes: { contenteditable: '', dir: 'ltr', hidden: null },
                    children: [
                      {
                        type: 'tag',
                        tag: 'img',
                        children: [],
                        attributes: {
                          contenteditable: 'false', ismap: null, crossorigin: 'use-credentials', src: 'WYOP@t2$M7#W',
                          draggable: 'false', hidden: null, dir: 'ltr', tabindex: '160'
                        }
                      },
                      {
                        type: 'tag',
                        tag: 'audio',
                        attributes: { dir: 'auto', hidden: null, tabindex: '189', draggable: 'false', contenteditable: 'false' },
                        children: []
                      },
                      {
                        type: 'tag',
                        tag: 'link',
                        children: [],
                        attributes: {
                          contenteditable: 'false',
                          integrity: 'a8P93LtaovgTy[PUitB',
                          tabindex: '-540',
                          href: 'hu4bOF)!zDUn&3h6',
                          style: 'scrollbar-width: auto; transition: cocu steps(95% , start); vertical-align: text-bottom; quotes: auto;'
                        }
                      },
                      { type: 'tag', tag: 'object', attributes: {}, children: [] }
                    ]
                  }
                ]
              },
              { type: 'text', value: 'Bu pu vafeuw nuro.' },
              { type: 'text', value: 'Huzova oza wu epmoguh isze ep.' },
              {
                type: 'tag',
                tag: 'area',
                children: [],
                attributes: { draggable: 'false', shape: 'rect', hidden: null, dir: 'ltr' }
              },
              {
                type: 'tag',
                tag: 'svg',
                attributes: { contenteditable: 'false', hidden: null, tabindex: '761', dir: 'rtl' },
                children: []
              }
            ]
          },
          {
            type: 'tag',
            tag: 'label',
            attributes: { contenteditable: 'false' },
            children: [
              { type: 'text', value: 'Hico jimez bive unjor.' },
              {
                type: 'tag',
                tag: 'mark',
                attributes: {
                  tabindex: '480',
                  hidden: null,
                  draggable: 'true',
                  style: 'border-block-end-width: thick; margin-block-start: -963.2648pt;'
                },
                children: [
                  { type: 'text', value: 'Kam ijbu me ser afavatar sucomwu.' },
                  {
                    type: 'tag',
                    tag: 'object',
                    attributes: {
                      data: 'JfW%OOS86HJVd', hidden: null, draggable: 'true', tabindex: '439', dir: 'auto',
                      style: 'border-top-left-radius: 16%; grid-template-areas: \'kuko\'; border-inline-end-style: inset;'
                    },
                    children: [
                      { type: 'tag', tag: 'area', children: [], attributes: { shape: 'poly' } },
                      { type: 'text', value: 'Gihak hu ezmov kojuma.' },
                      { type: 'text', value: 'Sikwesu akoun lej tuhas inteum.' },
                      { type: 'tag', tag: 'data', attributes: {}, children: [] }
                    ]
                  }
                ]
              },
              { type: 'text', value: 'Hamin lonfo.' },
              { type: 'text', value: 'Mev kisak neicfe kofil.' },
              {
                type: 'tag',
                tag: 'datalist',
                attributes: { draggable: 'false' },
                children: [
                  { type: 'text', value: 'Ritwul enedag diobta gu di vaul.' },
                  { type: 'text', value: 'Butusig perfab fo woufwo hu hoezuva tueno.' },
                  { type: 'text', value: 'Aru gupmopdep.' },
                  {
                    type: 'tag',
                    tag: 'option',
                    attributes: { selected: null },
                    children: [ { type: 'text', value: 'Muvzanwa mohvitzut et.' } ]
                  }
                ]
              }
            ]
          },
          { type: 'tag', tag: 'wbr', children: [], attributes: { contenteditable: '' } }
        ]
      },
      {
        type: 'tag',
        tag: 'strong',
        attributes: { contenteditable: 'true', dir: 'rtl', tabindex: '696' },
        children: [
          {
            type: 'tag',
            tag: 'datalist',
            attributes: {},
            children: [
              {
                type: 'tag',
                tag: 'q',
                attributes: { draggable: 'false', dir: 'auto' },
                children: [
                  { type: 'tag', tag: 'i', attributes: { tabindex: '18', draggable: 'true' }, children: [] },
                  {
                    type: 'tag',
                    tag: 'button',
                    attributes: {
                      autofocus: null, contenteditable: '', type: 'submit', tabindex: '479', disabled: null, dir: 'ltr',
                      draggable: 'true', style: 'mask-repeat: repeat-x; inset-inline-start: 340.1921in; top: auto;'
                    },
                    children: [
                      {
                        type: 'tag',
                        tag: 'em',
                        attributes: {
                          draggable: 'true',
                          hidden: null,
                          contenteditable: 'false',
                          dir: 'auto',
                          style: 'inset-inline-start: 418.0925in; border-block-start: outset thick hsla(5512271648260096 82% 55% / -8225148561784832); isolation: isolate; border-block-start-style: outset;'
                        },
                        children: []
                      },
                      { type: 'tag', tag: 'slot', attributes: { hidden: null, tabindex: '-794', dir: 'rtl' }, children: [] },
                      { type: 'tag', tag: 'del', attributes: { dir: 'rtl', hidden: null }, children: [] }
                    ]
                  },
                  {
                    type: 'tag',
                    tag: 'object',
                    attributes: { tabindex: '-275' },
                    children: [
                      { type: 'tag', tag: 'ruby', attributes: { hidden: null }, children: [] },
                      { type: 'text', value: 'Dab hof heksal jan.' },
                      {
                        type: 'tag',
                        tag: 'button',
                        attributes: {
                          autofocus: null, draggable: 'true', disabled: null, type: 'button', dir: 'rtl',
                          style: 'border-block-end-width: medium; page-break-before: avoid; margin-inline: auto; break-after: avoid-column; border: medium;'
                        },
                        children: []
                      },
                      { type: 'tag', tag: 'output', attributes: { contenteditable: 'true', dir: 'rtl' }, children: [] },
                      { type: 'text', value: 'Cotho invig ka ujliznij.' }
                    ]
                  },
                  {
                    type: 'tag',
                    tag: 'map',
                    attributes: {},
                    children: [
                      { type: 'tag', tag: 'var', attributes: {}, children: [] },
                      { type: 'tag', tag: 's', attributes: {}, children: [] },
                      { type: 'text', value: 'Keutiled fazosi vic doedo zarbahe laog.' }
                    ]
                  },
                  {
                    type: 'tag',
                    tag: 'small',
                    attributes: { draggable: 'true', dir: 'auto' },
                    children: [
                      { type: 'text', value: 'Terrur afacma.' },
                      {
                        type: 'tag',
                        tag: 'mark',
                        attributes: { style: 'border-right-style: dashed; transition-property: anaeh; text-underline-offset: from-font; hanging-punctuation: none;' },
                        children: []
                      },
                      {
                        type: 'tag',
                        tag: 'object',
                        attributes: { tabindex: '-826', data: 'jfJbLkr)fO5)jG', contenteditable: '', hidden: null, dir: 'auto' },
                        children: []
                      },
                      { type: 'tag', tag: 'code', attributes: { dir: 'ltr', contenteditable: '' }, children: [] },
                      {
                        type: 'tag',
                        tag: 'input',
                        children: [],
                        attributes: {
                          autofocus: null, draggable: 'false', type: 'file', contenteditable: 'false', capture: null,
                          checked: null, dir: 'rtl', hidden: null, disabled: null
                        }
                      }
                    ]
                  }
                ]
              },
              {
                type: 'tag',
                tag: 'option',
                attributes: {
                  contenteditable: '',
                  style: 'column-count: -80%; border-inline-width: medium; padding-block: 236.1034pt; min-height: fill-available;'
                },
                children: [ { type: 'text', value: 'Hef rukfov vali efloz ma boso.' } ]
              },
              {
                type: 'tag',
                tag: 'option',
                attributes: {
                  contenteditable: 'false',
                  dir: 'ltr',
                  draggable: 'false',
                  tabindex: '199',
                  style: 'backface-visibility: visible; flex-grow: -7030367668142080; box-shadow: 688.7142ex inset rgb(49% / -6304162916597760); table-layout: auto; border-top-color: midnightblue;'
                },
                children: [ { type: 'text', value: 'Mulaz ocvewaka ew it tipil tuni.' } ]
              }
            ]
          },
          {
            type: 'tag',
            tag: 'keygen',
            children: [],
            attributes: { contenteditable: 'true', tabindex: '47', draggable: 'true', dir: 'ltr' }
          },
          { type: 'text', value: 'Acba wejjuus afemavus ma pu zotuve.' }
        ]
      },
      { type: 'text', value: 'Te tunawkod.' }
    ]
  }
]);
    });
  });

  describe("with excludedDescendants", function() {
    beforeEach(() => {
      generator = new ElementGenerator({
        excludedDescendants: new Set(["script"])
      });
    });

    it("does not generate that element", function() {
      for (const html of generator.take(100)) {
        expect(html, "not to contain element", "script");
      }
    });
  });
});
