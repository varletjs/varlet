import{L as e,N as t,W as n,c as r,d as i,g as a,h as o,m as s}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as c}from"./_plugin-vue_export-helper-V-yks4gF.js";import{n as l,t as u}from"./ResponsiveObject-Coani5BG.js";var d={components:{BasicExample:l,ObjectExample:u}},f={class:`varlet-site-doc`},p={class:`card`},m={id:`Intro`},h={class:`card`},g={id:`GirdSystem`},_={class:`card`},v={id:`Offset`},y={class:`card`},b={id:`Alignment`},x={class:`card`},S={id:`ResponsiveLayout`},C={class:`varlet-component-preview`},w={class:`varlet-component-preview`},T={class:`card`},E={id:`Props`},D={class:`card`},O={id:`Events`},k={class:`card`},A={id:`Slots`};function j(c,l,u,d,j,M){let N=e(`router-link`),P=e(`var-site-code-example`),F=e(`basic-example`),I=e(`object-example`);return t(),i(`div`,f,[l[29]||=r(`h1`,null,`Layout`,-1),r(`div`,p,[r(`h3`,m,[a(N,{to:`#Intro`},{default:n(()=>[...l[0]||=[o(`#`,-1)]]),_:1}),l[1]||=o(`Intro`,-1)]),l[2]||=r(`p`,null,[o(`The component library provides two auxiliary layout components, `),r(`code`,null,`<var-row/>`),o(` and `),r(`code`,null,`<var-col/>`),o(`, so that you can layout more efficiently.`)],-1)]),r(`div`,h,[r(`h3`,g,[a(N,{to:`#GirdSystem`},{default:n(()=>[...l[3]||=[o(`#`,-1)]]),_:1}),l[4]||=o(`Gird System`,-1)]),a(P,null,{default:n(()=>[...l[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[o("The `"),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-row`),o(`/>`)]),o("` component divides a row into 24 columns of grids (24 copies), `"),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-col`),o(`/>`)]),o("` provides the `span` attribute to set the number of copies of a column, and the `offset` attribute to set a column the number of copies offset,\nThe `gutter` property sets column spacing.\n")])],-1)]]),_:1}),a(P,null,{default:n(()=>[...l[6]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-row`),o(),r(`span`,{class:`hljs-attr`},`:gutter`),o(`=`),r(`span`,{class:`hljs-string`},`"[10, 10]"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-col`),o(),r(`span`,{class:`hljs-attr`},`:span`),o(`=`),r(`span`,{class:`hljs-string`},`"8"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"item"`),o(`>`)]),o(`span: 8`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-col`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-col`),o(),r(`span`,{class:`hljs-attr`},`:span`),o(`=`),r(`span`,{class:`hljs-string`},`"8"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"item"`),o(`>`)]),o(`span: 8`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-col`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-col`),o(),r(`span`,{class:`hljs-attr`},`:span`),o(`=`),r(`span`,{class:`hljs-string`},`"8"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"item"`),o(`>`)]),o(`span: 8`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-col`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-col`),o(),r(`span`,{class:`hljs-attr`},`:span`),o(`=`),r(`span`,{class:`hljs-string`},`"8"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"item"`),o(`>`)]),o(`span: 8`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-col`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-col`),o(),r(`span`,{class:`hljs-attr`},`:span`),o(`=`),r(`span`,{class:`hljs-string`},`"8"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"item"`),o(`>`)]),o(`span: 8`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-col`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-col`),o(),r(`span`,{class:`hljs-attr`},`:span`),o(`=`),r(`span`,{class:`hljs-string`},`"8"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"item"`),o(`>`)]),o(`span: 8`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-col`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-row`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),r(`span`,{class:`css`},[o(`
`),r(`span`,{class:`hljs-selector-class`},`.item`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`display`),o(`: flex;
  `),r(`span`,{class:`hljs-attribute`},`justify-content`),o(`: center;
  `),r(`span`,{class:`hljs-attribute`},`align-items`),o(`: center;
  `),r(`span`,{class:`hljs-attribute`},`width`),o(`: `),r(`span`,{class:`hljs-number`},`100%`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`height`),o(`: `),r(`span`,{class:`hljs-number`},`36px`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`background`),o(`: `),r(`span`,{class:`hljs-number`},`#3a7afe`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`color`),o(`: `),r(`span`,{class:`hljs-number`},`#fff`),o(`;
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,_,[r(`h3`,v,[a(N,{to:`#Offset`},{default:n(()=>[...l[7]||=[o(`#`,-1)]]),_:1}),l[8]||=o(`Offset`,-1)]),a(P,null,{default:n(()=>[...l[9]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-row`),o(),r(`span`,{class:`hljs-attr`},`:gutter`),o(`=`),r(`span`,{class:`hljs-string`},`"[10, 10]"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-col`),o(),r(`span`,{class:`hljs-attr`},`:span`),o(`=`),r(`span`,{class:`hljs-string`},`"16"`),o(),r(`span`,{class:`hljs-attr`},`:offset`),o(`=`),r(`span`,{class:`hljs-string`},`"8"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"item"`),o(`>`)]),o(`offset: 8 span: 16`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-col`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-col`),o(),r(`span`,{class:`hljs-attr`},`:span`),o(`=`),r(`span`,{class:`hljs-string`},`"8"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"item"`),o(`>`)]),o(`span: 8`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-col`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-col`),o(),r(`span`,{class:`hljs-attr`},`:span`),o(`=`),r(`span`,{class:`hljs-string`},`"8"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"item"`),o(`>`)]),o(`span: 8`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-col`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-col`),o(),r(`span`,{class:`hljs-attr`},`:span`),o(`=`),r(`span`,{class:`hljs-string`},`"8"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"item"`),o(`>`)]),o(`span: 8`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-col`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-row`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),r(`span`,{class:`css`},[o(`
`),r(`span`,{class:`hljs-selector-class`},`.item`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`display`),o(`: flex;
  `),r(`span`,{class:`hljs-attribute`},`justify-content`),o(`: center;
  `),r(`span`,{class:`hljs-attribute`},`align-items`),o(`: center;
  `),r(`span`,{class:`hljs-attribute`},`width`),o(`: `),r(`span`,{class:`hljs-number`},`100%`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`height`),o(`: `),r(`span`,{class:`hljs-number`},`36px`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`background`),o(`: `),r(`span`,{class:`hljs-number`},`#3a7afe`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`color`),o(`: `),r(`span`,{class:`hljs-number`},`#fff`),o(`;
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,y,[r(`h3`,b,[a(N,{to:`#Alignment`},{default:n(()=>[...l[10]||=[o(`#`,-1)]]),_:1}),l[11]||=o(`Alignment`,-1)]),l[13]||=r(`p`,null,[o(`The layout component is laid out in `),r(`code`,null,`flex`),o(` by default, using the `),r(`code`,null,`<var-row/>`),o(),r(`code`,null,`justify`),o(` and `),r(`code`,null,`align`),o(` properties to set the alignment of the main and cross axes.`)],-1),a(P,null,{default:n(()=>[...l[12]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-row`),o(),r(`span`,{class:`hljs-attr`},`:gutter`),o(`=`),r(`span`,{class:`hljs-string`},`"[20, 10]"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-col`),o(),r(`span`,{class:`hljs-attr`},`:span`),o(`=`),r(`span`,{class:`hljs-string`},`"8"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"item"`),o(`>`)]),o(`span: 8`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-col`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-col`),o(),r(`span`,{class:`hljs-attr`},`:span`),o(`=`),r(`span`,{class:`hljs-string`},`"8"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"item"`),o(`>`)]),o(`span: 8`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-col`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-row`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-row`),o(),r(`span`,{class:`hljs-attr`},`justify`),o(`=`),r(`span`,{class:`hljs-string`},`"center"`),o(),r(`span`,{class:`hljs-attr`},`:gutter`),o(`=`),r(`span`,{class:`hljs-string`},`"[20, 10]"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-col`),o(),r(`span`,{class:`hljs-attr`},`:span`),o(`=`),r(`span`,{class:`hljs-string`},`"8"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"item"`),o(`>`)]),o(`span: 8`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-col`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-col`),o(),r(`span`,{class:`hljs-attr`},`:span`),o(`=`),r(`span`,{class:`hljs-string`},`"8"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"item"`),o(`>`)]),o(`span: 8`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-col`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-row`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-row`),o(),r(`span`,{class:`hljs-attr`},`justify`),o(`=`),r(`span`,{class:`hljs-string`},`"flex-end"`),o(),r(`span`,{class:`hljs-attr`},`:gutter`),o(`=`),r(`span`,{class:`hljs-string`},`"[20, 10]"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-col`),o(),r(`span`,{class:`hljs-attr`},`:span`),o(`=`),r(`span`,{class:`hljs-string`},`"8"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"item"`),o(`>`)]),o(`span: 8`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-col`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-col`),o(),r(`span`,{class:`hljs-attr`},`:span`),o(`=`),r(`span`,{class:`hljs-string`},`"8"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"item"`),o(`>`)]),o(`span: 8`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-col`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-row`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-row`),o(),r(`span`,{class:`hljs-attr`},`justify`),o(`=`),r(`span`,{class:`hljs-string`},`"space-around"`),o(),r(`span`,{class:`hljs-attr`},`:gutter`),o(`=`),r(`span`,{class:`hljs-string`},`"[20, 10]"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-col`),o(),r(`span`,{class:`hljs-attr`},`:span`),o(`=`),r(`span`,{class:`hljs-string`},`"8"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"item"`),o(`>`)]),o(`span: 8`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-col`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-col`),o(),r(`span`,{class:`hljs-attr`},`:span`),o(`=`),r(`span`,{class:`hljs-string`},`"8"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"item"`),o(`>`)]),o(`span: 8`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-col`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-row`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-row`),o(),r(`span`,{class:`hljs-attr`},`justify`),o(`=`),r(`span`,{class:`hljs-string`},`"space-between"`),o(),r(`span`,{class:`hljs-attr`},`:gutter`),o(`=`),r(`span`,{class:`hljs-string`},`"[20, 10]"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-col`),o(),r(`span`,{class:`hljs-attr`},`:span`),o(`=`),r(`span`,{class:`hljs-string`},`"8"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"item"`),o(`>`)]),o(`span: 8`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-col`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-col`),o(),r(`span`,{class:`hljs-attr`},`:span`),o(`=`),r(`span`,{class:`hljs-string`},`"8"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"item"`),o(`>`)]),o(`span: 8`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-col`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-row`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),r(`span`,{class:`css`},[o(`
`),r(`span`,{class:`hljs-selector-class`},`.item`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`display`),o(`: flex;
  `),r(`span`,{class:`hljs-attribute`},`justify-content`),o(`: center;
  `),r(`span`,{class:`hljs-attribute`},`align-items`),o(`: center;
  `),r(`span`,{class:`hljs-attribute`},`width`),o(`: `),r(`span`,{class:`hljs-number`},`100%`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`height`),o(`: `),r(`span`,{class:`hljs-number`},`36px`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`background`),o(`: `),r(`span`,{class:`hljs-number`},`#3a7afe`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`color`),o(`: `),r(`span`,{class:`hljs-number`},`#fff`),o(`;
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,x,[r(`h3`,S,[a(N,{to:`#ResponsiveLayout`},{default:n(()=>[...l[14]||=[o(`#`,-1)]]),_:1}),l[15]||=o(`Responsive Layout`,-1)]),l[18]||=r(`h4`,null,`Basic Usage`,-1),r(`div`,C,[a(F)]),a(P,null,{default:n(()=>[...l[16]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-row`),o(),r(`span`,{class:`hljs-attr`},`:gutter`),o(`=`),r(`span`,{class:`hljs-string`},`"10"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-col`),o(),r(`span`,{class:`hljs-attr`},`:xs`),o(`=`),r(`span`,{class:`hljs-string`},`"8"`),o(),r(`span`,{class:`hljs-attr`},`:sm`),o(`=`),r(`span`,{class:`hljs-string`},`"6"`),o(),r(`span`,{class:`hljs-attr`},`:md`),o(`=`),r(`span`,{class:`hljs-string`},`"4"`),o(),r(`span`,{class:`hljs-attr`},`:lg`),o(`=`),r(`span`,{class:`hljs-string`},`"3"`),o(),r(`span`,{class:`hljs-attr`},`:xl`),o(`=`),r(`span`,{class:`hljs-string`},`"1"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"item"`),o(`>`)]),o(`1`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-col`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-col`),o(),r(`span`,{class:`hljs-attr`},`:xs`),o(`=`),r(`span`,{class:`hljs-string`},`"4"`),o(),r(`span`,{class:`hljs-attr`},`:sm`),o(`=`),r(`span`,{class:`hljs-string`},`"6"`),o(),r(`span`,{class:`hljs-attr`},`:md`),o(`=`),r(`span`,{class:`hljs-string`},`"8"`),o(),r(`span`,{class:`hljs-attr`},`:lg`),o(`=`),r(`span`,{class:`hljs-string`},`"9"`),o(),r(`span`,{class:`hljs-attr`},`:xl`),o(`=`),r(`span`,{class:`hljs-string`},`"11"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"item"`),o(`>`)]),o(`2`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-col`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-col`),o(),r(`span`,{class:`hljs-attr`},`:xs`),o(`=`),r(`span`,{class:`hljs-string`},`"4"`),o(),r(`span`,{class:`hljs-attr`},`:sm`),o(`=`),r(`span`,{class:`hljs-string`},`"6"`),o(),r(`span`,{class:`hljs-attr`},`:md`),o(`=`),r(`span`,{class:`hljs-string`},`"8"`),o(),r(`span`,{class:`hljs-attr`},`:lg`),o(`=`),r(`span`,{class:`hljs-string`},`"9"`),o(),r(`span`,{class:`hljs-attr`},`:xl`),o(`=`),r(`span`,{class:`hljs-string`},`"11"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"item"`),o(`>`)]),o(`3`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-col`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-col`),o(),r(`span`,{class:`hljs-attr`},`:xs`),o(`=`),r(`span`,{class:`hljs-string`},`"8"`),o(),r(`span`,{class:`hljs-attr`},`:sm`),o(`=`),r(`span`,{class:`hljs-string`},`"6"`),o(),r(`span`,{class:`hljs-attr`},`:md`),o(`=`),r(`span`,{class:`hljs-string`},`"4"`),o(),r(`span`,{class:`hljs-attr`},`:lg`),o(`=`),r(`span`,{class:`hljs-string`},`"3"`),o(),r(`span`,{class:`hljs-attr`},`:xl`),o(`=`),r(`span`,{class:`hljs-string`},`"1"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"item"`),o(`>`)]),o(`4`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-col`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-row`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),r(`span`,{class:`css`},[o(`
`),r(`span`,{class:`hljs-selector-class`},`.item`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`display`),o(`: flex;
  `),r(`span`,{class:`hljs-attribute`},`justify-content`),o(`: center;
  `),r(`span`,{class:`hljs-attribute`},`align-items`),o(`: center;
  `),r(`span`,{class:`hljs-attribute`},`width`),o(`: `),r(`span`,{class:`hljs-number`},`100%`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`height`),o(`: `),r(`span`,{class:`hljs-number`},`36px`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`background`),o(`: `),r(`span`,{class:`hljs-number`},`#3a7afe`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`color`),o(`: `),r(`span`,{class:`hljs-number`},`#fff`),o(`;
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),o(`
`)])],-1)]]),_:1}),l[19]||=r(`h4`,null,`Column Props Object`,-1),r(`div`,w,[a(I)]),a(P,null,{default:n(()=>[...l[17]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-row`),o(),r(`span`,{class:`hljs-attr`},`:gutter`),o(`=`),r(`span`,{class:`hljs-string`},`"10"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-col`),o(`
      `),r(`span`,{class:`hljs-attr`},`:xs`),o(`=`),r(`span`,{class:`hljs-string`},`"{ span: 12, offset: 6 }"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:sm`),o(`=`),r(`span`,{class:`hljs-string`},`"{ span: 6 }"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:md`),o(`=`),r(`span`,{class:`hljs-string`},`"{ span: 4, offset: 4 }"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:lg`),o(`=`),r(`span`,{class:`hljs-string`},`"{ span: 3, offset: 3 }"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:xl`),o(`=`),r(`span`,{class:`hljs-string`},`"{ span: 2, offset: 2 }"`),o(`
    >`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"item"`),o(`>`)]),o(`1`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-col`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-col`),o(`
      `),r(`span`,{class:`hljs-attr`},`:xs`),o(`=`),r(`span`,{class:`hljs-string`},`"{ span: 12, offset: 6 }"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:sm`),o(`=`),r(`span`,{class:`hljs-string`},`"{ span: 6 }"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:md`),o(`=`),r(`span`,{class:`hljs-string`},`"{ span: 4, offset: 4 }"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:lg`),o(`=`),r(`span`,{class:`hljs-string`},`"{ span: 3, offset: 3 }"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:xl`),o(`=`),r(`span`,{class:`hljs-string`},`"{ span: 2, offset: 2 }"`),o(`
    >`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"item"`),o(`>`)]),o(`2`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-col`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-col`),o(`
      `),r(`span`,{class:`hljs-attr`},`:xs`),o(`=`),r(`span`,{class:`hljs-string`},`"{ span: 12, offset: 6 }"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:sm`),o(`=`),r(`span`,{class:`hljs-string`},`"{ span: 6 }"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:md`),o(`=`),r(`span`,{class:`hljs-string`},`"{ span: 4, offset: 4 }"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:lg`),o(`=`),r(`span`,{class:`hljs-string`},`"{ span: 3, offset: 3 }"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:xl`),o(`=`),r(`span`,{class:`hljs-string`},`"{ span: 2, offset: 2 }"`),o(`
    >`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"item"`),o(`>`)]),o(`3`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-col`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-col`),o(`
      `),r(`span`,{class:`hljs-attr`},`:xs`),o(`=`),r(`span`,{class:`hljs-string`},`"{ span: 12, offset: 6 }"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:sm`),o(`=`),r(`span`,{class:`hljs-string`},`"{ span: 6 }"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:md`),o(`=`),r(`span`,{class:`hljs-string`},`"{ span: 4, offset: 4 }"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:lg`),o(`=`),r(`span`,{class:`hljs-string`},`"{ span: 3, offset: 3 }"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:xl`),o(`=`),r(`span`,{class:`hljs-string`},`"{ span: 2, offset: 2 }"`),o(`
    >`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"item"`),o(`>`)]),o(`4`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-col`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-row`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),r(`span`,{class:`css`},[o(`
`),r(`span`,{class:`hljs-selector-class`},`.item`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`display`),o(`: flex;
  `),r(`span`,{class:`hljs-attribute`},`justify-content`),o(`: center;
  `),r(`span`,{class:`hljs-attribute`},`align-items`),o(`: center;
  `),r(`span`,{class:`hljs-attribute`},`width`),o(`: `),r(`span`,{class:`hljs-number`},`100%`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`height`),o(`: `),r(`span`,{class:`hljs-number`},`36px`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`background`),o(`: `),r(`span`,{class:`hljs-number`},`#3a7afe`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`color`),o(`: `),r(`span`,{class:`hljs-number`},`#fff`),o(`;
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),l[30]||=r(`h2`,null,`API`,-1),r(`div`,T,[r(`h3`,E,[a(N,{to:`#Props`},{default:n(()=>[...l[20]||=[o(`#`,-1)]]),_:1}),l[21]||=o(`Props`,-1)]),l[22]||=s(`<h4>Row Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>gutter</code></td><td>Col gutter, default is horizontal spacing. Can be set to [Vertical, Horizontal](Support length unit)</td><td><em>string | number | [string | number, string | number]</em></td><td><code>0</code></td></tr><tr><td><code>justify</code></td><td>Spindle alignment, optional value is <code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code></td><td><em>string</em></td><td><code>flex-start</code></td></tr><tr><td><code>align</code></td><td>Cross axis alignment, optional value is <code>flex-start</code> <code>flex-end</code> <code>center</code></td><td><em>string</em></td><td><code>flex-start</code></td></tr></tbody></table><h4>Col Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>span</code></td><td>Number of grids occupied by columns</td><td><em>string | number</em></td><td><code>24</code></td></tr><tr><td><code>offset</code></td><td>Number of grids for column offsets</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>direction</code></td><td>The optional value of layout direction is <code>row</code> <code>column</code></td><td><em>string</em></td><td><code>row</code></td></tr><tr><td><code>justify</code></td><td>Main axis arrangement, can be set to <code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-around</code> <code>space-between</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>align</code></td><td>Cross axis arrangement, can be set to <code>stretch</code> <code>center</code> <code>flex-start</code> <code>flex-end</code> <code>baseline</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>xs</code></td><td><code>&lt;768px</code> Responsive columns or column props object</td><td><em>string | number | { span?: number | string, offset?: number | string }</em></td><td><code>-</code></td></tr><tr><td><code>sm</code></td><td><code>≥768px</code> Responsive columns or column props object</td><td><em>string | number | { span?: number | string, offset?: number | string }</em></td><td><code>-</code></td></tr><tr><td><code>md</code></td><td><code>≥992px</code> Responsive columns or column props object</td><td><em>string | number | { span?: number | string, offset?: number | string }</em></td><td><code>-</code></td></tr><tr><td><code>lg</code></td><td><code>≥1200px</code> Responsive columns or column props object</td><td><em>string | number | { span?: number | string, offset?: number | string }</em></td><td><code>-</code></td></tr><tr><td><code>xl</code></td><td><code>≥1920px</code> Responsive columns or column props object</td><td><em>string | number | { span?: number | string, offset?: number | string }</em></td><td><code>-</code></td></tr></tbody></table>`,4)]),r(`div`,D,[r(`h3`,O,[a(N,{to:`#Events`},{default:n(()=>[...l[23]||=[o(`#`,-1)]]),_:1}),l[24]||=o(`Events`,-1)]),l[25]||=s(`<h4>Row Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggered when clicking Row</td><td><code>event: Event</code></td></tr></tbody></table><h4>Col Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggered when clicking Col</td><td><code>event: Event</code></td></tr></tbody></table>`,4)]),r(`div`,k,[r(`h3`,A,[a(N,{to:`#Slots`},{default:n(()=>[...l[26]||=[o(`#`,-1)]]),_:1}),l[27]||=o(`Slots`,-1)]),l[28]||=s(`<h4>Row Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Row content</td><td><code>-</code></td></tr></tbody></table><h4>Col Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Col content</td><td><code>-</code></td></tr></tbody></table>`,4)])])}var M=c(d,[[`render`,j]]);export{M as default};