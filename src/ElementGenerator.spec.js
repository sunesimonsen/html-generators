const expect = require("unexpected")
  .clone()
  .use(require("unexpected-snapshot"));

const { elementsByTag } = require("./elements");

const ElementGenerator = require("./ElementGenerator.js");

describe("ElementGenerator", () => {
  let generator;

  beforeEach(() => {
    generator = new ElementGenerator({ tag: "code" });
  });

  it("generates elements of the given type", () => {
    expect(generator.take(3), "to equal snapshot", [
  {
    type: 'tag',
    tag: 'code',
    attributes: { hidden: '' },
    children: [
      {
        type: 'tag',
        tag: 'small',
        attributes: {},
        children: [ { type: 'text', value: 'Bagohrak ro celel taj sibsof buunu.' }, { type: 'tag', tag: 'script', attributes: { contenteditable: '', src: '^CtnX3x', draggable: 'false' }, children: [] } ]
      },
      {
        type: 'tag',
        tag: 'button',
        attributes: { dir: 'auto', contenteditable: 'false', autofocus: '', tabindex: '727' },
        children: [
          {
            type: 'tag',
            tag: 'cite',
            attributes: {},
            children: [
              {
                type: 'tag',
                tag: 'input',
                children: [],
                attributes: { disabled: '', tabindex: '395', required: '', hidden: '', capture: '', autofocus: '', draggable: 'true', dir: 'ltr', type: 'button', spellcheck: 'true', contenteditable: '', inputmode: 'search' }
              },
              { type: 'text', value: 'Zoclodevo dako wip rij wus hogbimab.' }
            ]
          }
        ]
      },
      { type: 'text', value: 'Bu kivud mis oc.' },
      { type: 'text', value: 'Fuw jocnuf iv adlew ho.' },
      {
        type: 'tag', tag: 'i', attributes: {},
        children: [ { type: 'tag', tag: 'em', attributes: { draggable: 'true', dir: 'rtl' }, children: [] }, { type: 'text', value: 'Hi mechug poh ub umi je hodpizhir.' } ]
      }
    ]
  },
  {
    type: 'tag',
    tag: 'code',
    attributes: {},
    children: [
      { type: 'text', value: 'Avkiwa kofwihep or pufoj guireva.' },
      {
        type: 'tag',
        tag: 'strong',
        attributes: { draggable: 'false', tabindex: '-966', dir: 'rtl', contenteditable: 'false' },
        children: [
          { type: 'text', value: 'Ipuod vonlavub ki nozgo pe los vendijjeg.' },
          { type: 'text', value: 'Miwtitpo pufwi bop uw juvza.' },
          {
            type: 'tag',
            tag: 'script',
            attributes: { hidden: '', tabindex: '-191', nomodule: '', defer: '', integrity: 'xJmBPD*!Z', async: '', crossorigin: 'anonymous', src: 'hpTX]A', contenteditable: '', draggable: 'false' },
            children: [ { type: 'tag', tag: 'meta', children: [], attributes: { hidden: '', contenteditable: 'true', draggable: 'true', dir: 'ltr' } } ]
          },
          {
            type: 'tag',
            tag: 'svg',
            attributes: { tabindex: '-511', dir: 'rtl' },
            children: [
              { type: 'tag', tag: 'article', attributes: { tabindex: '-438', dir: 'auto', contenteditable: '', draggable: 'true' }, children: [] },
              { type: 'text', value: 'Junbeb jem.' },
              { type: 'tag', tag: 'span', attributes: { draggable: 'false' }, children: [] }
            ]
          }
        ]
      },
      { type: 'tag', tag: 'progress', attributes: { tabindex: '457' }, children: [ { type: 'text', value: 'Wodfuz katji cebuc wocafig dof.' } ] },
      {
        type: 'tag',
        tag: 'input',
        children: [],
        attributes: {
          tabindex: '-758', disabled: '', required: '', capture: '', spellcheck: 'default', readonly: '', type: 'hidden', hidden: '', multiple: '', inputmode: 'none', draggable: 'true', contenteditable: '',
          checked: '', dir: 'ltr'
        }
      }
    ]
  },
  { type: 'tag', tag: 'code', attributes: {}, children: [ { type: 'tag', tag: 'samp', attributes: { contenteditable: 'true', tabindex: '-173' }, children: [] } ] }
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
    attributes: { dir: 'auto', contenteditable: '', tabindex: '-374' },
    children: [
      {
        type: 'tag',
        tag: 'figcaption',
        attributes: { tabindex: '801', contenteditable: 'false', draggable: 'true' },
        children: [
          { type: 'text', value: 'Tufjade do colubet pa.' },
          {
            type: 'tag',
            tag: 'map',
            attributes: { dir: 'auto', draggable: 'true', hidden: '' },
            children: [
              { type: 'text', value: 'Lesev egizosde pitkedeb iva uzoli cicse.' },
              { type: 'text', value: 'Zuzodol umnorer fos ecumoce waccezluj.' },
              {
                type: 'tag',
                tag: 'math',
                attributes: { dir: 'ltr', display: 'inline', tabindex: '-482', hidden: '', overflow: 'scroll' },
                children: [
                  { type: 'tag', tag: 'datalist', attributes: { draggable: 'false', dir: 'ltr' }, children: [] },
                  { type: 'tag', tag: 'meta', children: [], attributes: { contenteditable: 'false', hidden: '', dir: 'rtl' } }
                ]
              },
              { type: 'tag', tag: 'wbr', children: [], attributes: { draggable: 'false', dir: 'rtl', hidden: '', contenteditable: '' } }
            ]
          },
          {
            type: 'tag',
            tag: 'object',
            attributes: { tabindex: '-892', contenteditable: 'true', hidden: '', draggable: 'false', dir: 'auto' },
            children: [
              { type: 'text', value: 'Tejiz sewcuh.' },
              {
                type: 'tag',
                tag: 'var',
                attributes: { contenteditable: 'true', hidden: '', dir: 'rtl', tabindex: '-169' },
                children: [ { type: 'tag', tag: 'iframe', attributes: { dir: 'rtl', contenteditable: 'false', src: 'NuwE8' }, children: [] } ]
              }
            ]
          }
        ]
      },
      { type: 'tag', tag: 'svg', attributes: {}, children: [] },
      {
        type: 'tag',
        tag: 'pre',
        attributes: {},
        children: [
          { type: 'tag', tag: 'ins', attributes: {}, children: [] },
          { type: 'tag', tag: 'picture', attributes: { dir: 'auto', hidden: '' }, children: [] },
          { type: 'tag', tag: 'b', attributes: { hidden: '', dir: 'auto' }, children: [ { type: 'text', value: 'Fe cu rusomiwus hegaog.' } ] },
          {
            type: 'tag',
            tag: 'svg',
            attributes: { dir: 'auto' },
            children: [ { type: 'tag', tag: 'nav', attributes: {}, children: [] }, { type: 'tag', tag: 'iframe', attributes: { hidden: '', draggable: 'false' }, children: [] } ]
          }
        ]
      }
    ]
  },
  { type: 'tag', tag: 'figure', attributes: { tabindex: '-590', draggable: 'true' }, children: [] },
  { type: 'tag', tag: 'figure', attributes: { hidden: '', tabindex: '213' }, children: [] },
  {
    type: 'tag',
    tag: 'figure',
    attributes: { contenteditable: 'true', hidden: '', dir: 'rtl' },
    children: [
      {
        type: 'tag',
        tag: 'figcaption',
        attributes: { dir: 'rtl' },
        children: [
          { type: 'tag', tag: 'u', attributes: { dir: 'rtl', contenteditable: 'true', tabindex: '-329' }, children: [ { type: 'text', value: 'Did mataf munirfof af.' } ] },
          { type: 'text', value: 'Ga dil ijpe baporpu.' },
          { type: 'tag', tag: 'sub', attributes: { dir: 'auto', contenteditable: '', hidden: '', draggable: 'false' }, children: [] }
        ]
      },
      { type: 'text', value: 'Repeplil cadfoivi bavliha.' },
      { type: 'tag', tag: 'map', attributes: { dir: 'auto', contenteditable: '', hidden: '' }, children: [] }
    ]
  },
  { type: 'tag', tag: 'figure', attributes: { draggable: 'true' }, children: [ { type: 'tag', tag: 'figcaption', attributes: { hidden: '', dir: 'rtl' }, children: [] } ] }
]);
    });
  });
});
