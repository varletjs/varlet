import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s}from"./runtime-core.esm-bundler-DUghkl6b.js";var c={components:{}},l={class:`varlet-site-doc`},u={class:`card`},d={id:`Intro`},f={class:`card`},p={id:`ImportStyle`},m={class:`card`},h={id:`BasicUsage`};function g(e,c,g,_,v,y){let b=n(`router-link`),x=n(`var-site-code-example`);return r(),a(`div`,l,[c[10]||=i(`h1`,null,`Elevation`,-1),i(`div`,u,[i(`h3`,d,[o(b,{to:`#Intro`},{default:t(()=>[...c[0]||=[s(`#`,-1)]]),_:1}),c[1]||=s(`Intro`,-1)]),c[2]||=i(`p`,null,[s(`The component library provides a shadow elevation effect based on the `),i(`code`,null,`Material`),s(` specification to represent the dimensionality of an element.`)],-1)]),i(`div`,f,[i(`h3`,p,[o(b,{to:`#ImportStyle`},{default:t(()=>[...c[3]||=[s(`#`,-1)]]),_:1}),c[4]||=s(`Import Style`,-1)]),o(x,{"playground-ignore":``},{default:t(()=>[...c[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-keyword`},`import`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui/es/styles/elevation.css'`),s(`
`)])],-1)]]),_:1})]),i(`div`,m,[i(`h3`,h,[o(b,{to:`#BasicUsage`},{default:t(()=>[...c[6]||=[s(`#`,-1)]]),_:1}),c[7]||=s(`Basic Usage`,-1)]),c[9]||=i(`p`,null,[s(`Shadows are divided into `),i(`code`,null,`0-24`),s(` levels, and the higher the level, the higher the altitude.`)],-1),o(x,null,{default:t(()=>[...c[8]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-space`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"elevation-example-list"`),s(),i(`span`,{class:`hljs-attr`},`:size`),s(`=`),i(`span`,{class:`hljs-string`},`"[40, 0]"`),s(),i(`span`,{class:`hljs-attr`},`justify`),s(`=`),i(`span`,{class:`hljs-string`},`"space-between"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(`
      `),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"elevation-example-item"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:class`),s(`=`),i(`span`,{class:`hljs-string`},'"`var-elevation--${e - 1}`"'),s(`
      `),i(`span`,{class:`hljs-attr`},`v-for`),s(`=`),i(`span`,{class:`hljs-string`},`"e in 25"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:key`),s(`=`),i(`span`,{class:`hljs-string`},`"e"`),s(`
    >`)]),s(`
      {{ e - 1 }}
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),i(`span`,{class:`css`},[s(`
`),i(`span`,{class:`hljs-selector-class`},`.elevation-example-list`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`padding`),s(`: `),i(`span`,{class:`hljs-number`},`2vmin`),s(),i(`span`,{class:`hljs-number`},`4vmin`),s(`;
}

`),i(`span`,{class:`hljs-selector-class`},`.elevation-example-item`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`display`),s(`: flex;
  `),i(`span`,{class:`hljs-attribute`},`justify-content`),s(`: center;
  `),i(`span`,{class:`hljs-attribute`},`align-items`),s(`: center;
  `),i(`span`,{class:`hljs-attribute`},`width`),s(`: `),i(`span`,{class:`hljs-number`},`24vmin`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`height`),s(`: `),i(`span`,{class:`hljs-number`},`24vmin`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`border-radius`),s(`: `),i(`span`,{class:`hljs-number`},`4px`),s(`;
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),s(`
`)])],-1)]]),_:1})])])}var _=e(c,[[`render`,g]]);export{_ as default};