import{L as e,N as t,W as n,c as r,d as i,g as a,h as o,m as s}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as c}from"./_plugin-vue_export-helper-V-yks4gF.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`Intro`},p={class:`card`},m={id:`MobileAdaptation`},h={class:`card`},g={id:`DesktopAdaptation`};function _(c,l,_,v,y,b){let x=e(`router-link`),S=e(`var-site-code-example`);return t(),i(`div`,u,[l[23]||=r(`h1`,null,`Browser Adaptation`,-1),r(`div`,d,[r(`h3`,f,[a(x,{to:`#Intro`},{default:n(()=>[...l[0]||=[o(`#`,-1)]]),_:1}),l[1]||=o(`Intro`,-1)]),l[2]||=r(`p`,null,[o(`The component library provides mobile and desktop adaptations, scheme `),r(`code`,null,`varlet-touch-emulator`),o(` is used for mobile terminal adaptation, scheme `),r(`code`,null,`varlet-touch-emulator`),o(` is used for mobile terminal adaptation.`)],-1)]),r(`div`,p,[r(`h3`,m,[a(x,{to:`#MobileAdaptation`},{default:n(()=>[...l[3]||=[o(`#`,-1)]]),_:1}),l[4]||=o(`Mobile Adaptation`,-1)]),l[11]||=s(`<h4>CSS Unit Adaptation</h4><p>The component library design is based on the <code>375px</code> width design draft. It is recommended to use <a href="https://github.com/evrone/postcss-px-to-viewport">postcss-px-to-viewport</a> to convert <code>px</code> units into <code>vw</code> units to achieve mobile terminal adaptation. Create <code>postcss.config.js</code> under the <code>Webpack/Vite</code> project root path And do the following configuration <code>375px -&gt; 100vw</code>.</p>`,2),a(S,{"playground-ignore":``},{default:n(()=>[...l[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-meta`},`#`),r(`span`,{class:`bash`},` npm`),o(`
npm i postcss-px-to-viewport -D
`),r(`span`,{class:`hljs-meta`},`
#`),r(`span`,{class:`bash`},` yarn`),o(`
yarn add postcss-px-to-viewport -D
`),r(`span`,{class:`hljs-meta`},`
#`),r(`span`,{class:`bash`},` pnpm`),o(`
pnpm add postcss-px-to-viewport -D
`)])],-1)]]),_:1}),a(S,{"playground-ignore":``},{default:n(()=>[...l[6]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-comment`},`// postcss.config.js`),o(`
`),r(`span`,{class:`hljs-built_in`},`module`),o(`.exports = {
  `),r(`span`,{class:`hljs-attr`},`plugins`),o(`: {
    `),r(`span`,{class:`hljs-string`},`'postcss-px-to-viewport'`),o(`: {
      `),r(`span`,{class:`hljs-attr`},`viewportWidth`),o(`: `),r(`span`,{class:`hljs-number`},`375`),o(`,
      `),r(`span`,{class:`hljs-attr`},`unitPrecision`),o(`: `),r(`span`,{class:`hljs-number`},`6`),o(`,
      `),r(`span`,{class:`hljs-attr`},`unitToConvert`),o(`: `),r(`span`,{class:`hljs-string`},`'px'`),o(`,
      `),r(`span`,{class:`hljs-attr`},`viewportUnit`),o(`: `),r(`span`,{class:`hljs-string`},`'vmin'`),o(`,
      `),r(`span`,{class:`hljs-attr`},`fontViewportUnit`),o(`: `),r(`span`,{class:`hljs-string`},`'vmin'`),o(`,
      `),r(`span`,{class:`hljs-attr`},`propList`),o(`: [`),r(`span`,{class:`hljs-string`},`'*'`),o(`],
    }
  }
}
`)])],-1)]]),_:1}),l[12]||=r(`h4`,null,`Theme Unit Adaptation (Viewport)`,-1),l[13]||=r(`p`,null,[o(`Because the theme is mounted at runtime and is not affected by postcss, the component library provides a utility tool `),r(`code`,null,`Themes.toViewport`),o(` for adaptation. The theme returned by the function will use the `),r(`code`,null,`375px -> 100vmin`),o(` rule by default.`)],-1),a(S,null,{default:n(()=>[...l[7]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-keyword`},`import`),o(` { Themes } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` viewportTheme = Themes.toViewport(Themes.md3Dark)
`)])],-1)]]),_:1}),l[14]||=r(`p`,null,`You can also make changes to the conversion rules`,-1),a(S,null,{default:n(()=>[...l[8]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-keyword`},`import`),o(` { Themes } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` viewportTheme = Themes.toViewport(Themes.md3Dark, {
  `),r(`span`,{class:`hljs-comment`},`// defaults 375`),o(`
  `),r(`span`,{class:`hljs-attr`},`viewportWidth`),o(`: `),r(`span`,{class:`hljs-number`},`750`),o(`,
  `),r(`span`,{class:`hljs-comment`},`// defaults 'vmin'`),o(`
  `),r(`span`,{class:`hljs-attr`},`viewportUnit`),o(`: `),r(`span`,{class:`hljs-string`},`'vw'`),o(`,
  `),r(`span`,{class:`hljs-comment`},`// defaults 6`),o(`
  `),r(`span`,{class:`hljs-attr`},`unitPrecision`),o(`: `),r(`span`,{class:`hljs-number`},`4`),o(`,
})
`)])],-1)]]),_:1}),l[15]||=r(`h4`,null,`Theme Unit Adaptation (Rem)`,-1),l[16]||=r(`p`,null,`Similar to the Viewport solution`,-1),a(S,null,{default:n(()=>[...l[9]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-keyword`},`import`),o(` { Themes } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` remTheme = Themes.toRem(Themes.md3Dark)
`)])],-1)]]),_:1}),l[17]||=r(`p`,null,`Or customize`,-1),a(S,null,{default:n(()=>[...l[10]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-keyword`},`import`),o(` { Themes } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` viewportTheme = Themes.toRem(Themes.md3Dark, {
  `),r(`span`,{class:`hljs-comment`},`// defaults 16`),o(`
  `),r(`span`,{class:`hljs-attr`},`rootFontSize`),o(`: `),r(`span`,{class:`hljs-number`},`32`),o(`,
  `),r(`span`,{class:`hljs-comment`},`// defaults 6`),o(`
  `),r(`span`,{class:`hljs-attr`},`unitPrecision`),o(`: `),r(`span`,{class:`hljs-number`},`4`),o(`,
})
`)])],-1)]]),_:1})]),r(`div`,h,[r(`h3`,g,[a(x,{to:`#DesktopAdaptation`},{default:n(()=>[...l[18]||=[o(`#`,-1)]]),_:1}),l[19]||=o(`Desktop Adaptation`,-1)]),l[22]||=r(`p`,null,[o(`Because component library interaction events are developed using `),r(`code`,null,`touch`),o(` events, `),r(`code`,null,`mouse`),o(` events on the desktop side are not supported. It is recommended to use `),r(`code`,null,`@varlet/touch-emulator`),o(` to set `),r(`code`,null,`touch -> mouse`),o(` for desktop adaptation.`)],-1),a(S,{"playground-ignore":``},{default:n(()=>[...l[20]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-meta`},`#`),r(`span`,{class:`bash`},` npm`),o(`
npm i @varlet/touch-emulator
`),r(`span`,{class:`hljs-meta`},`#`),r(`span`,{class:`bash`},` yarn`),o(`
yarn add @varlet/touch-emulator
`),r(`span`,{class:`hljs-meta`},`#`),r(`span`,{class:`bash`},` pnpm`),o(`
pnpm add @varlet/touch-emulator
`)])],-1)]]),_:1}),a(S,{"playground-ignore":``},{default:n(()=>[...l[21]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-keyword`},`import`),o(),r(`span`,{class:`hljs-string`},`'@varlet/touch-emulator'`),o(`
`)])],-1)]]),_:1})])])}var v=c(l,[[`render`,_]]);export{v as default};