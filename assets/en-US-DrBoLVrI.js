import{L as e,N as t,W as n,c as r,d as i,g as a,h as o}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as s}from"./_plugin-vue_export-helper-V-yks4gF.js";var c={components:{}},l={class:`varlet-site-doc`},u={class:`card`},d={id:`Intro`},f={class:`card`},p={id:`ImportStyle`},m={class:`card`},h={id:`BasicUsage`};function g(s,c,g,_,v,y){let b=e(`router-link`),x=e(`var-site-code-example`);return t(),i(`div`,l,[c[10]||=r(`h1`,null,`Elevation`,-1),r(`div`,u,[r(`h3`,d,[a(b,{to:`#Intro`},{default:n(()=>[...c[0]||=[o(`#`,-1)]]),_:1}),c[1]||=o(`Intro`,-1)]),c[2]||=r(`p`,null,[o(`The component library provides a shadow elevation effect based on the `),r(`code`,null,`Material`),o(` specification to represent the dimensionality of an element.`)],-1)]),r(`div`,f,[r(`h3`,p,[a(b,{to:`#ImportStyle`},{default:n(()=>[...c[3]||=[o(`#`,-1)]]),_:1}),c[4]||=o(`Import Style`,-1)]),a(x,{"playground-ignore":``},{default:n(()=>[...c[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-keyword`},`import`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui/es/styles/elevation.css'`),o(`
`)])],-1)]]),_:1})]),r(`div`,m,[r(`h3`,h,[a(b,{to:`#BasicUsage`},{default:n(()=>[...c[6]||=[o(`#`,-1)]]),_:1}),c[7]||=o(`Basic Usage`,-1)]),c[9]||=r(`p`,null,[o(`Shadows are divided into `),r(`code`,null,`0-24`),o(` levels, and the higher the level, the higher the altitude.`)],-1),a(x,null,{default:n(()=>[...c[8]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-space`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"elevation-example-list"`),o(),r(`span`,{class:`hljs-attr`},`:size`),o(`=`),r(`span`,{class:`hljs-string`},`"[40, 0]"`),o(),r(`span`,{class:`hljs-attr`},`justify`),o(`=`),r(`span`,{class:`hljs-string`},`"space-between"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(`
      `),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"elevation-example-item"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:class`),o(`=`),r(`span`,{class:`hljs-string`},'"`var-elevation--${e - 1}`"'),o(`
      `),r(`span`,{class:`hljs-attr`},`v-for`),o(`=`),r(`span`,{class:`hljs-string`},`"e in 25"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:key`),o(`=`),r(`span`,{class:`hljs-string`},`"e"`),o(`
    >`)]),o(`
      {{ e - 1 }}
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-space`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),r(`span`,{class:`css`},[o(`
`),r(`span`,{class:`hljs-selector-class`},`.elevation-example-list`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`padding`),o(`: `),r(`span`,{class:`hljs-number`},`2vmin`),o(),r(`span`,{class:`hljs-number`},`4vmin`),o(`;
}

`),r(`span`,{class:`hljs-selector-class`},`.elevation-example-item`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`display`),o(`: flex;
  `),r(`span`,{class:`hljs-attribute`},`justify-content`),o(`: center;
  `),r(`span`,{class:`hljs-attribute`},`align-items`),o(`: center;
  `),r(`span`,{class:`hljs-attribute`},`width`),o(`: `),r(`span`,{class:`hljs-number`},`24vmin`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`height`),o(`: `),r(`span`,{class:`hljs-number`},`24vmin`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`border-radius`),o(`: `),r(`span`,{class:`hljs-number`},`4px`),o(`;
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),o(`
`)])],-1)]]),_:1})])])}var _=s(c,[[`render`,g]]);export{_ as default};