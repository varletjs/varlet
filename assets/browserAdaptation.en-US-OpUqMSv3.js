import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s,m as c}from"./runtime-core.esm-bundler-DUghkl6b.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`Intro`},p={class:`card`},m={id:`MobileAdaptation`},h={class:`card`},g={id:`DesktopAdaptation`};function _(e,l,_,v,y,b){let x=n(`router-link`),S=n(`var-site-code-example`);return r(),a(`div`,u,[l[23]||=i(`h1`,null,`Browser Adaptation`,-1),i(`div`,d,[i(`h3`,f,[o(x,{to:`#Intro`},{default:t(()=>[...l[0]||=[s(`#`,-1)]]),_:1}),l[1]||=s(`Intro`,-1)]),l[2]||=i(`p`,null,[s(`The component library provides mobile and desktop adaptations, scheme `),i(`code`,null,`varlet-touch-emulator`),s(` is used for mobile terminal adaptation, scheme `),i(`code`,null,`varlet-touch-emulator`),s(` is used for mobile terminal adaptation.`)],-1)]),i(`div`,p,[i(`h3`,m,[o(x,{to:`#MobileAdaptation`},{default:t(()=>[...l[3]||=[s(`#`,-1)]]),_:1}),l[4]||=s(`Mobile Adaptation`,-1)]),l[11]||=c(`<h4>CSS Unit Adaptation</h4><p>The component library design is based on the <code>375px</code> width design draft. It is recommended to use <a href="https://github.com/evrone/postcss-px-to-viewport">postcss-px-to-viewport</a> to convert <code>px</code> units into <code>vw</code> units to achieve mobile terminal adaptation. Create <code>postcss.config.js</code> under the <code>Webpack/Vite</code> project root path And do the following configuration <code>375px -&gt; 100vw</code>.</p>`,2),o(S,{"playground-ignore":``},{default:t(()=>[...l[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-meta`},`#`),i(`span`,{class:`bash`},` npm`),s(`
npm i postcss-px-to-viewport -D
`),i(`span`,{class:`hljs-meta`},`
#`),i(`span`,{class:`bash`},` yarn`),s(`
yarn add postcss-px-to-viewport -D
`),i(`span`,{class:`hljs-meta`},`
#`),i(`span`,{class:`bash`},` pnpm`),s(`
pnpm add postcss-px-to-viewport -D
`)])],-1)]]),_:1}),o(S,{"playground-ignore":``},{default:t(()=>[...l[6]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-comment`},`// postcss.config.js`),s(`
`),i(`span`,{class:`hljs-built_in`},`module`),s(`.exports = {
  `),i(`span`,{class:`hljs-attr`},`plugins`),s(`: {
    `),i(`span`,{class:`hljs-string`},`'postcss-px-to-viewport'`),s(`: {
      `),i(`span`,{class:`hljs-attr`},`viewportWidth`),s(`: `),i(`span`,{class:`hljs-number`},`375`),s(`,
      `),i(`span`,{class:`hljs-attr`},`unitPrecision`),s(`: `),i(`span`,{class:`hljs-number`},`6`),s(`,
      `),i(`span`,{class:`hljs-attr`},`unitToConvert`),s(`: `),i(`span`,{class:`hljs-string`},`'px'`),s(`,
      `),i(`span`,{class:`hljs-attr`},`viewportUnit`),s(`: `),i(`span`,{class:`hljs-string`},`'vmin'`),s(`,
      `),i(`span`,{class:`hljs-attr`},`fontViewportUnit`),s(`: `),i(`span`,{class:`hljs-string`},`'vmin'`),s(`,
      `),i(`span`,{class:`hljs-attr`},`propList`),s(`: [`),i(`span`,{class:`hljs-string`},`'*'`),s(`],
    }
  }
}
`)])],-1)]]),_:1}),l[12]||=i(`h4`,null,`Theme Unit Adaptation (Viewport)`,-1),l[13]||=i(`p`,null,[s(`Because the theme is mounted at runtime and is not affected by postcss, the component library provides a utility tool `),i(`code`,null,`Themes.toViewport`),s(` for adaptation. The theme returned by the function will use the `),i(`code`,null,`375px -> 100vmin`),s(` rule by default.`)],-1),o(S,null,{default:t(()=>[...l[7]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-keyword`},`import`),s(` { Themes } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` viewportTheme = Themes.toViewport(Themes.md3Dark)
`)])],-1)]]),_:1}),l[14]||=i(`p`,null,`You can also make changes to the conversion rules`,-1),o(S,null,{default:t(()=>[...l[8]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-keyword`},`import`),s(` { Themes } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` viewportTheme = Themes.toViewport(Themes.md3Dark, {
  `),i(`span`,{class:`hljs-comment`},`// defaults 375`),s(`
  `),i(`span`,{class:`hljs-attr`},`viewportWidth`),s(`: `),i(`span`,{class:`hljs-number`},`750`),s(`,
  `),i(`span`,{class:`hljs-comment`},`// defaults 'vmin'`),s(`
  `),i(`span`,{class:`hljs-attr`},`viewportUnit`),s(`: `),i(`span`,{class:`hljs-string`},`'vw'`),s(`,
  `),i(`span`,{class:`hljs-comment`},`// defaults 6`),s(`
  `),i(`span`,{class:`hljs-attr`},`unitPrecision`),s(`: `),i(`span`,{class:`hljs-number`},`4`),s(`,
})
`)])],-1)]]),_:1}),l[15]||=i(`h4`,null,`Theme Unit Adaptation (Rem)`,-1),l[16]||=i(`p`,null,`Similar to the Viewport solution`,-1),o(S,null,{default:t(()=>[...l[9]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-keyword`},`import`),s(` { Themes } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` remTheme = Themes.toRem(Themes.md3Dark)
`)])],-1)]]),_:1}),l[17]||=i(`p`,null,`Or customize`,-1),o(S,null,{default:t(()=>[...l[10]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-keyword`},`import`),s(` { Themes } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` viewportTheme = Themes.toRem(Themes.md3Dark, {
  `),i(`span`,{class:`hljs-comment`},`// defaults 16`),s(`
  `),i(`span`,{class:`hljs-attr`},`rootFontSize`),s(`: `),i(`span`,{class:`hljs-number`},`32`),s(`,
  `),i(`span`,{class:`hljs-comment`},`// defaults 6`),s(`
  `),i(`span`,{class:`hljs-attr`},`unitPrecision`),s(`: `),i(`span`,{class:`hljs-number`},`4`),s(`,
})
`)])],-1)]]),_:1})]),i(`div`,h,[i(`h3`,g,[o(x,{to:`#DesktopAdaptation`},{default:t(()=>[...l[18]||=[s(`#`,-1)]]),_:1}),l[19]||=s(`Desktop Adaptation`,-1)]),l[22]||=i(`p`,null,[s(`Because component library interaction events are developed using `),i(`code`,null,`touch`),s(` events, `),i(`code`,null,`mouse`),s(` events on the desktop side are not supported. It is recommended to use `),i(`code`,null,`@varlet/touch-emulator`),s(` to set `),i(`code`,null,`touch -> mouse`),s(` for desktop adaptation.`)],-1),o(S,{"playground-ignore":``},{default:t(()=>[...l[20]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-meta`},`#`),i(`span`,{class:`bash`},` npm`),s(`
npm i @varlet/touch-emulator
`),i(`span`,{class:`hljs-meta`},`#`),i(`span`,{class:`bash`},` yarn`),s(`
yarn add @varlet/touch-emulator
`),i(`span`,{class:`hljs-meta`},`#`),i(`span`,{class:`bash`},` pnpm`),s(`
pnpm add @varlet/touch-emulator
`)])],-1)]]),_:1}),o(S,{"playground-ignore":``},{default:t(()=>[...l[21]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-keyword`},`import`),s(),i(`span`,{class:`hljs-string`},`'@varlet/touch-emulator'`),s(`
`)])],-1)]]),_:1})])])}var v=e(l,[[`render`,_]]);export{v as default};