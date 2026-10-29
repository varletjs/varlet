import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s,m as c}from"./runtime-core.esm-bundler-DUghkl6b.js";import{n as l,t as u}from"./ResponsiveObject-DGRFZM2L.js";var d={components:{BasicExample:l,ObjectExample:u}},f={class:`varlet-site-doc`},p={class:`card`},m={id:`Intro`},h={class:`card`},g={id:`GirdSystem`},_={class:`card`},v={id:`Offset`},y={class:`card`},b={id:`Alignment`},x={class:`card`},S={id:`ResponsiveLayout`},C={class:`varlet-component-preview`},w={class:`varlet-component-preview`},T={class:`card`},E={id:`Props`},D={class:`card`},O={id:`Events`},k={class:`card`},A={id:`Slots`};function j(e,l,u,d,j,M){let N=n(`router-link`),P=n(`var-site-code-example`),F=n(`basic-example`),I=n(`object-example`);return r(),a(`div`,f,[l[29]||=i(`h1`,null,`Layout`,-1),i(`div`,p,[i(`h3`,m,[o(N,{to:`#Intro`},{default:t(()=>[...l[0]||=[s(`#`,-1)]]),_:1}),l[1]||=s(`Intro`,-1)]),l[2]||=i(`p`,null,[s(`The component library provides two auxiliary layout components, `),i(`code`,null,`<var-row/>`),s(` and `),i(`code`,null,`<var-col/>`),s(`, so that you can layout more efficiently.`)],-1)]),i(`div`,h,[i(`h3`,g,[o(N,{to:`#GirdSystem`},{default:t(()=>[...l[3]||=[s(`#`,-1)]]),_:1}),l[4]||=s(`Gird System`,-1)]),o(P,null,{default:t(()=>[...l[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[s("The `"),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-row`),s(`/>`)]),s("` component divides a row into 24 columns of grids (24 copies), `"),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-col`),s(`/>`)]),s("` provides the `span` attribute to set the number of copies of a column, and the `offset` attribute to set a column the number of copies offset,\nThe `gutter` property sets column spacing.\n")])],-1)]]),_:1}),o(P,null,{default:t(()=>[...l[6]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-row`),s(),i(`span`,{class:`hljs-attr`},`:gutter`),s(`=`),i(`span`,{class:`hljs-string`},`"[10, 10]"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-col`),s(),i(`span`,{class:`hljs-attr`},`:span`),s(`=`),i(`span`,{class:`hljs-string`},`"8"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"item"`),s(`>`)]),s(`span: 8`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-col`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-col`),s(),i(`span`,{class:`hljs-attr`},`:span`),s(`=`),i(`span`,{class:`hljs-string`},`"8"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"item"`),s(`>`)]),s(`span: 8`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-col`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-col`),s(),i(`span`,{class:`hljs-attr`},`:span`),s(`=`),i(`span`,{class:`hljs-string`},`"8"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"item"`),s(`>`)]),s(`span: 8`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-col`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-col`),s(),i(`span`,{class:`hljs-attr`},`:span`),s(`=`),i(`span`,{class:`hljs-string`},`"8"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"item"`),s(`>`)]),s(`span: 8`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-col`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-col`),s(),i(`span`,{class:`hljs-attr`},`:span`),s(`=`),i(`span`,{class:`hljs-string`},`"8"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"item"`),s(`>`)]),s(`span: 8`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-col`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-col`),s(),i(`span`,{class:`hljs-attr`},`:span`),s(`=`),i(`span`,{class:`hljs-string`},`"8"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"item"`),s(`>`)]),s(`span: 8`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-col`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-row`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),i(`span`,{class:`css`},[s(`
`),i(`span`,{class:`hljs-selector-class`},`.item`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`display`),s(`: flex;
  `),i(`span`,{class:`hljs-attribute`},`justify-content`),s(`: center;
  `),i(`span`,{class:`hljs-attribute`},`align-items`),s(`: center;
  `),i(`span`,{class:`hljs-attribute`},`width`),s(`: `),i(`span`,{class:`hljs-number`},`100%`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`height`),s(`: `),i(`span`,{class:`hljs-number`},`36px`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`background`),s(`: `),i(`span`,{class:`hljs-number`},`#3a7afe`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`color`),s(`: `),i(`span`,{class:`hljs-number`},`#fff`),s(`;
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,_,[i(`h3`,v,[o(N,{to:`#Offset`},{default:t(()=>[...l[7]||=[s(`#`,-1)]]),_:1}),l[8]||=s(`Offset`,-1)]),o(P,null,{default:t(()=>[...l[9]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-row`),s(),i(`span`,{class:`hljs-attr`},`:gutter`),s(`=`),i(`span`,{class:`hljs-string`},`"[10, 10]"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-col`),s(),i(`span`,{class:`hljs-attr`},`:span`),s(`=`),i(`span`,{class:`hljs-string`},`"16"`),s(),i(`span`,{class:`hljs-attr`},`:offset`),s(`=`),i(`span`,{class:`hljs-string`},`"8"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"item"`),s(`>`)]),s(`offset: 8 span: 16`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-col`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-col`),s(),i(`span`,{class:`hljs-attr`},`:span`),s(`=`),i(`span`,{class:`hljs-string`},`"8"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"item"`),s(`>`)]),s(`span: 8`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-col`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-col`),s(),i(`span`,{class:`hljs-attr`},`:span`),s(`=`),i(`span`,{class:`hljs-string`},`"8"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"item"`),s(`>`)]),s(`span: 8`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-col`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-col`),s(),i(`span`,{class:`hljs-attr`},`:span`),s(`=`),i(`span`,{class:`hljs-string`},`"8"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"item"`),s(`>`)]),s(`span: 8`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-col`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-row`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),i(`span`,{class:`css`},[s(`
`),i(`span`,{class:`hljs-selector-class`},`.item`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`display`),s(`: flex;
  `),i(`span`,{class:`hljs-attribute`},`justify-content`),s(`: center;
  `),i(`span`,{class:`hljs-attribute`},`align-items`),s(`: center;
  `),i(`span`,{class:`hljs-attribute`},`width`),s(`: `),i(`span`,{class:`hljs-number`},`100%`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`height`),s(`: `),i(`span`,{class:`hljs-number`},`36px`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`background`),s(`: `),i(`span`,{class:`hljs-number`},`#3a7afe`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`color`),s(`: `),i(`span`,{class:`hljs-number`},`#fff`),s(`;
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,y,[i(`h3`,b,[o(N,{to:`#Alignment`},{default:t(()=>[...l[10]||=[s(`#`,-1)]]),_:1}),l[11]||=s(`Alignment`,-1)]),l[13]||=i(`p`,null,[s(`The layout component is laid out in `),i(`code`,null,`flex`),s(` by default, using the `),i(`code`,null,`<var-row/>`),s(),i(`code`,null,`justify`),s(` and `),i(`code`,null,`align`),s(` properties to set the alignment of the main and cross axes.`)],-1),o(P,null,{default:t(()=>[...l[12]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-row`),s(),i(`span`,{class:`hljs-attr`},`:gutter`),s(`=`),i(`span`,{class:`hljs-string`},`"[20, 10]"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-col`),s(),i(`span`,{class:`hljs-attr`},`:span`),s(`=`),i(`span`,{class:`hljs-string`},`"8"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"item"`),s(`>`)]),s(`span: 8`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-col`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-col`),s(),i(`span`,{class:`hljs-attr`},`:span`),s(`=`),i(`span`,{class:`hljs-string`},`"8"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"item"`),s(`>`)]),s(`span: 8`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-col`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-row`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-row`),s(),i(`span`,{class:`hljs-attr`},`justify`),s(`=`),i(`span`,{class:`hljs-string`},`"center"`),s(),i(`span`,{class:`hljs-attr`},`:gutter`),s(`=`),i(`span`,{class:`hljs-string`},`"[20, 10]"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-col`),s(),i(`span`,{class:`hljs-attr`},`:span`),s(`=`),i(`span`,{class:`hljs-string`},`"8"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"item"`),s(`>`)]),s(`span: 8`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-col`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-col`),s(),i(`span`,{class:`hljs-attr`},`:span`),s(`=`),i(`span`,{class:`hljs-string`},`"8"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"item"`),s(`>`)]),s(`span: 8`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-col`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-row`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-row`),s(),i(`span`,{class:`hljs-attr`},`justify`),s(`=`),i(`span`,{class:`hljs-string`},`"flex-end"`),s(),i(`span`,{class:`hljs-attr`},`:gutter`),s(`=`),i(`span`,{class:`hljs-string`},`"[20, 10]"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-col`),s(),i(`span`,{class:`hljs-attr`},`:span`),s(`=`),i(`span`,{class:`hljs-string`},`"8"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"item"`),s(`>`)]),s(`span: 8`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-col`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-col`),s(),i(`span`,{class:`hljs-attr`},`:span`),s(`=`),i(`span`,{class:`hljs-string`},`"8"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"item"`),s(`>`)]),s(`span: 8`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-col`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-row`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-row`),s(),i(`span`,{class:`hljs-attr`},`justify`),s(`=`),i(`span`,{class:`hljs-string`},`"space-around"`),s(),i(`span`,{class:`hljs-attr`},`:gutter`),s(`=`),i(`span`,{class:`hljs-string`},`"[20, 10]"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-col`),s(),i(`span`,{class:`hljs-attr`},`:span`),s(`=`),i(`span`,{class:`hljs-string`},`"8"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"item"`),s(`>`)]),s(`span: 8`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-col`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-col`),s(),i(`span`,{class:`hljs-attr`},`:span`),s(`=`),i(`span`,{class:`hljs-string`},`"8"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"item"`),s(`>`)]),s(`span: 8`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-col`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-row`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-row`),s(),i(`span`,{class:`hljs-attr`},`justify`),s(`=`),i(`span`,{class:`hljs-string`},`"space-between"`),s(),i(`span`,{class:`hljs-attr`},`:gutter`),s(`=`),i(`span`,{class:`hljs-string`},`"[20, 10]"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-col`),s(),i(`span`,{class:`hljs-attr`},`:span`),s(`=`),i(`span`,{class:`hljs-string`},`"8"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"item"`),s(`>`)]),s(`span: 8`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-col`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-col`),s(),i(`span`,{class:`hljs-attr`},`:span`),s(`=`),i(`span`,{class:`hljs-string`},`"8"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"item"`),s(`>`)]),s(`span: 8`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-col`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-row`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),i(`span`,{class:`css`},[s(`
`),i(`span`,{class:`hljs-selector-class`},`.item`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`display`),s(`: flex;
  `),i(`span`,{class:`hljs-attribute`},`justify-content`),s(`: center;
  `),i(`span`,{class:`hljs-attribute`},`align-items`),s(`: center;
  `),i(`span`,{class:`hljs-attribute`},`width`),s(`: `),i(`span`,{class:`hljs-number`},`100%`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`height`),s(`: `),i(`span`,{class:`hljs-number`},`36px`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`background`),s(`: `),i(`span`,{class:`hljs-number`},`#3a7afe`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`color`),s(`: `),i(`span`,{class:`hljs-number`},`#fff`),s(`;
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,x,[i(`h3`,S,[o(N,{to:`#ResponsiveLayout`},{default:t(()=>[...l[14]||=[s(`#`,-1)]]),_:1}),l[15]||=s(`Responsive Layout`,-1)]),l[18]||=i(`h4`,null,`Basic Usage`,-1),i(`div`,C,[o(F)]),o(P,null,{default:t(()=>[...l[16]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-row`),s(),i(`span`,{class:`hljs-attr`},`:gutter`),s(`=`),i(`span`,{class:`hljs-string`},`"10"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-col`),s(),i(`span`,{class:`hljs-attr`},`:xs`),s(`=`),i(`span`,{class:`hljs-string`},`"8"`),s(),i(`span`,{class:`hljs-attr`},`:sm`),s(`=`),i(`span`,{class:`hljs-string`},`"6"`),s(),i(`span`,{class:`hljs-attr`},`:md`),s(`=`),i(`span`,{class:`hljs-string`},`"4"`),s(),i(`span`,{class:`hljs-attr`},`:lg`),s(`=`),i(`span`,{class:`hljs-string`},`"3"`),s(),i(`span`,{class:`hljs-attr`},`:xl`),s(`=`),i(`span`,{class:`hljs-string`},`"1"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"item"`),s(`>`)]),s(`1`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-col`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-col`),s(),i(`span`,{class:`hljs-attr`},`:xs`),s(`=`),i(`span`,{class:`hljs-string`},`"4"`),s(),i(`span`,{class:`hljs-attr`},`:sm`),s(`=`),i(`span`,{class:`hljs-string`},`"6"`),s(),i(`span`,{class:`hljs-attr`},`:md`),s(`=`),i(`span`,{class:`hljs-string`},`"8"`),s(),i(`span`,{class:`hljs-attr`},`:lg`),s(`=`),i(`span`,{class:`hljs-string`},`"9"`),s(),i(`span`,{class:`hljs-attr`},`:xl`),s(`=`),i(`span`,{class:`hljs-string`},`"11"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"item"`),s(`>`)]),s(`2`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-col`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-col`),s(),i(`span`,{class:`hljs-attr`},`:xs`),s(`=`),i(`span`,{class:`hljs-string`},`"4"`),s(),i(`span`,{class:`hljs-attr`},`:sm`),s(`=`),i(`span`,{class:`hljs-string`},`"6"`),s(),i(`span`,{class:`hljs-attr`},`:md`),s(`=`),i(`span`,{class:`hljs-string`},`"8"`),s(),i(`span`,{class:`hljs-attr`},`:lg`),s(`=`),i(`span`,{class:`hljs-string`},`"9"`),s(),i(`span`,{class:`hljs-attr`},`:xl`),s(`=`),i(`span`,{class:`hljs-string`},`"11"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"item"`),s(`>`)]),s(`3`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-col`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-col`),s(),i(`span`,{class:`hljs-attr`},`:xs`),s(`=`),i(`span`,{class:`hljs-string`},`"8"`),s(),i(`span`,{class:`hljs-attr`},`:sm`),s(`=`),i(`span`,{class:`hljs-string`},`"6"`),s(),i(`span`,{class:`hljs-attr`},`:md`),s(`=`),i(`span`,{class:`hljs-string`},`"4"`),s(),i(`span`,{class:`hljs-attr`},`:lg`),s(`=`),i(`span`,{class:`hljs-string`},`"3"`),s(),i(`span`,{class:`hljs-attr`},`:xl`),s(`=`),i(`span`,{class:`hljs-string`},`"1"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"item"`),s(`>`)]),s(`4`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-col`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-row`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),i(`span`,{class:`css`},[s(`
`),i(`span`,{class:`hljs-selector-class`},`.item`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`display`),s(`: flex;
  `),i(`span`,{class:`hljs-attribute`},`justify-content`),s(`: center;
  `),i(`span`,{class:`hljs-attribute`},`align-items`),s(`: center;
  `),i(`span`,{class:`hljs-attribute`},`width`),s(`: `),i(`span`,{class:`hljs-number`},`100%`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`height`),s(`: `),i(`span`,{class:`hljs-number`},`36px`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`background`),s(`: `),i(`span`,{class:`hljs-number`},`#3a7afe`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`color`),s(`: `),i(`span`,{class:`hljs-number`},`#fff`),s(`;
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),s(`
`)])],-1)]]),_:1}),l[19]||=i(`h4`,null,`Column Props Object`,-1),i(`div`,w,[o(I)]),o(P,null,{default:t(()=>[...l[17]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-row`),s(),i(`span`,{class:`hljs-attr`},`:gutter`),s(`=`),i(`span`,{class:`hljs-string`},`"10"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-col`),s(`
      `),i(`span`,{class:`hljs-attr`},`:xs`),s(`=`),i(`span`,{class:`hljs-string`},`"{ span: 12, offset: 6 }"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:sm`),s(`=`),i(`span`,{class:`hljs-string`},`"{ span: 6 }"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:md`),s(`=`),i(`span`,{class:`hljs-string`},`"{ span: 4, offset: 4 }"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:lg`),s(`=`),i(`span`,{class:`hljs-string`},`"{ span: 3, offset: 3 }"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:xl`),s(`=`),i(`span`,{class:`hljs-string`},`"{ span: 2, offset: 2 }"`),s(`
    >`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"item"`),s(`>`)]),s(`1`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-col`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-col`),s(`
      `),i(`span`,{class:`hljs-attr`},`:xs`),s(`=`),i(`span`,{class:`hljs-string`},`"{ span: 12, offset: 6 }"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:sm`),s(`=`),i(`span`,{class:`hljs-string`},`"{ span: 6 }"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:md`),s(`=`),i(`span`,{class:`hljs-string`},`"{ span: 4, offset: 4 }"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:lg`),s(`=`),i(`span`,{class:`hljs-string`},`"{ span: 3, offset: 3 }"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:xl`),s(`=`),i(`span`,{class:`hljs-string`},`"{ span: 2, offset: 2 }"`),s(`
    >`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"item"`),s(`>`)]),s(`2`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-col`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-col`),s(`
      `),i(`span`,{class:`hljs-attr`},`:xs`),s(`=`),i(`span`,{class:`hljs-string`},`"{ span: 12, offset: 6 }"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:sm`),s(`=`),i(`span`,{class:`hljs-string`},`"{ span: 6 }"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:md`),s(`=`),i(`span`,{class:`hljs-string`},`"{ span: 4, offset: 4 }"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:lg`),s(`=`),i(`span`,{class:`hljs-string`},`"{ span: 3, offset: 3 }"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:xl`),s(`=`),i(`span`,{class:`hljs-string`},`"{ span: 2, offset: 2 }"`),s(`
    >`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"item"`),s(`>`)]),s(`3`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-col`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-col`),s(`
      `),i(`span`,{class:`hljs-attr`},`:xs`),s(`=`),i(`span`,{class:`hljs-string`},`"{ span: 12, offset: 6 }"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:sm`),s(`=`),i(`span`,{class:`hljs-string`},`"{ span: 6 }"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:md`),s(`=`),i(`span`,{class:`hljs-string`},`"{ span: 4, offset: 4 }"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:lg`),s(`=`),i(`span`,{class:`hljs-string`},`"{ span: 3, offset: 3 }"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:xl`),s(`=`),i(`span`,{class:`hljs-string`},`"{ span: 2, offset: 2 }"`),s(`
    >`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"item"`),s(`>`)]),s(`4`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-col`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-row`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),i(`span`,{class:`css`},[s(`
`),i(`span`,{class:`hljs-selector-class`},`.item`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`display`),s(`: flex;
  `),i(`span`,{class:`hljs-attribute`},`justify-content`),s(`: center;
  `),i(`span`,{class:`hljs-attribute`},`align-items`),s(`: center;
  `),i(`span`,{class:`hljs-attribute`},`width`),s(`: `),i(`span`,{class:`hljs-number`},`100%`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`height`),s(`: `),i(`span`,{class:`hljs-number`},`36px`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`background`),s(`: `),i(`span`,{class:`hljs-number`},`#3a7afe`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`color`),s(`: `),i(`span`,{class:`hljs-number`},`#fff`),s(`;
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),l[30]||=i(`h2`,null,`API`,-1),i(`div`,T,[i(`h3`,E,[o(N,{to:`#Props`},{default:t(()=>[...l[20]||=[s(`#`,-1)]]),_:1}),l[21]||=s(`Props`,-1)]),l[22]||=c(`<h4>Row Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>gutter</code></td><td>Col gutter, default is horizontal spacing. Can be set to [Vertical, Horizontal](Support length unit)</td><td><em>string | number | [string | number, string | number]</em></td><td><code>0</code></td></tr><tr><td><code>justify</code></td><td>Spindle alignment, optional value is <code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code></td><td><em>string</em></td><td><code>flex-start</code></td></tr><tr><td><code>align</code></td><td>Cross axis alignment, optional value is <code>flex-start</code> <code>flex-end</code> <code>center</code></td><td><em>string</em></td><td><code>flex-start</code></td></tr></tbody></table><h4>Col Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>span</code></td><td>Number of grids occupied by columns</td><td><em>string | number</em></td><td><code>24</code></td></tr><tr><td><code>offset</code></td><td>Number of grids for column offsets</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>direction</code></td><td>The optional value of layout direction is <code>row</code> <code>column</code></td><td><em>string</em></td><td><code>row</code></td></tr><tr><td><code>justify</code></td><td>Main axis arrangement, can be set to <code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-around</code> <code>space-between</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>align</code></td><td>Cross axis arrangement, can be set to <code>stretch</code> <code>center</code> <code>flex-start</code> <code>flex-end</code> <code>baseline</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>xs</code></td><td><code>&lt;768px</code> Responsive columns or column props object</td><td><em>string | number | { span?: number | string, offset?: number | string }</em></td><td><code>-</code></td></tr><tr><td><code>sm</code></td><td><code>≥768px</code> Responsive columns or column props object</td><td><em>string | number | { span?: number | string, offset?: number | string }</em></td><td><code>-</code></td></tr><tr><td><code>md</code></td><td><code>≥992px</code> Responsive columns or column props object</td><td><em>string | number | { span?: number | string, offset?: number | string }</em></td><td><code>-</code></td></tr><tr><td><code>lg</code></td><td><code>≥1200px</code> Responsive columns or column props object</td><td><em>string | number | { span?: number | string, offset?: number | string }</em></td><td><code>-</code></td></tr><tr><td><code>xl</code></td><td><code>≥1920px</code> Responsive columns or column props object</td><td><em>string | number | { span?: number | string, offset?: number | string }</em></td><td><code>-</code></td></tr></tbody></table>`,4)]),i(`div`,D,[i(`h3`,O,[o(N,{to:`#Events`},{default:t(()=>[...l[23]||=[s(`#`,-1)]]),_:1}),l[24]||=s(`Events`,-1)]),l[25]||=c(`<h4>Row Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggered when clicking Row</td><td><code>event: Event</code></td></tr></tbody></table><h4>Col Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggered when clicking Col</td><td><code>event: Event</code></td></tr></tbody></table>`,4)]),i(`div`,k,[i(`h3`,A,[o(N,{to:`#Slots`},{default:t(()=>[...l[26]||=[s(`#`,-1)]]),_:1}),l[27]||=s(`Slots`,-1)]),l[28]||=c(`<h4>Row Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Row content</td><td><code>-</code></td></tr></tbody></table><h4>Col Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Col content</td><td><code>-</code></td></tr></tbody></table>`,4)])])}var M=e(d,[[`render`,j]]);export{M as default};