import{L as e,N as t,W as n,c as r,d as i,g as a,h as o,m as s}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as c}from"./_plugin-vue_export-helper-V-yks4gF.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`jie4shao4`},p={class:`card`},m={id:`yi2dong4duan1shi4pei4`},h={class:`card`},g={id:`zhuo1mian4duan1shi4pei4`};function _(c,l,_,v,y,b){let x=e(`router-link`),S=e(`var-site-code-example`);return t(),i(`div`,u,[l[23]||=r(`h1`,null,`浏览器适配`,-1),r(`div`,d,[r(`h3`,f,[a(x,{to:`#jie4shao4`},{default:n(()=>[...l[0]||=[o(`#`,-1)]]),_:1}),l[1]||=o(`介绍`,-1)]),l[2]||=r(`p`,null,[o(`组件库提供移动端和桌面端适配方案， 移动端使用 `),r(`a`,{href:`https://github.com/evrone/postcss-px-to-viewport`},`postcss-px-to-viewport`),o(` 方案进行适配， 桌面端使用 `),r(`code`,null,`@varlet/touch-emulator`),o(` 方案进行适配。`)],-1)]),r(`div`,p,[r(`h3`,m,[a(x,{to:`#yi2dong4duan1shi4pei4`},{default:n(()=>[...l[3]||=[o(`#`,-1)]]),_:1}),l[4]||=o(`移动端适配`,-1)]),l[11]||=s(`<h4>CSS 单位适配</h4><p>组件库设计基于 <code>375px</code> 宽度设计稿，推荐使用 postcss 插件将 <code>px</code> 单位转换成 <code>vmin</code> 单位从而实现移动端适配。 在 <code>webpack/vite</code> 项目根路径下创建 <code>postcss.config.js</code> 并做如下配置之后 <code>375px -&gt; 100vmin</code>。</p>`,2),a(S,{"playground-ignore":``},{default:n(()=>[...l[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-meta`},`#`),r(`span`,{class:`bash`},` npm`),o(`
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
`)])],-1)]]),_:1}),l[12]||=r(`h4`,null,`主题包单位适配 (Viewport)`,-1),l[13]||=r(`p`,null,[o(`因为主题包是运行时挂载的，不受 postcss 影响，组件库提供了实用工具 `),r(`code`,null,`Themes.toViewport`),o(` 进行适配，函数返回的主题将默认使用 `),r(`code`,null,`375px -> 100vmin`),o(` 的规则。`)],-1),a(S,null,{default:n(()=>[...l[7]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-keyword`},`import`),o(` { Themes } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` viewportTheme = Themes.toViewport(Themes.md3Dark)
`)])],-1)]]),_:1}),l[14]||=r(`p`,null,`也可以对转换规则进行更改`,-1),a(S,null,{default:n(()=>[...l[8]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-keyword`},`import`),o(` { Themes } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` viewportTheme = Themes.toViewport(Themes.md3Dark, {
  `),r(`span`,{class:`hljs-comment`},`// 默认值为 375`),o(`
  `),r(`span`,{class:`hljs-attr`},`viewportWidth`),o(`: `),r(`span`,{class:`hljs-number`},`750`),o(`,
  `),r(`span`,{class:`hljs-comment`},`// 默认值为 'vmin'`),o(`
  `),r(`span`,{class:`hljs-attr`},`viewportUnit`),o(`: `),r(`span`,{class:`hljs-string`},`'vw'`),o(`,
  `),r(`span`,{class:`hljs-comment`},`// 默认值为 6`),o(`
  `),r(`span`,{class:`hljs-attr`},`unitPrecision`),o(`: `),r(`span`,{class:`hljs-number`},`4`),o(`,
})
`)])],-1)]]),_:1}),l[15]||=r(`h4`,null,`主题包单位适配 (Rem)`,-1),l[16]||=r(`p`,null,[o(`与 `),r(`code`,null,`Viewport`),o(` 方案类似`)],-1),a(S,null,{default:n(()=>[...l[9]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-keyword`},`import`),o(` { Themes } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` remTheme = Themes.toRem(Themes.md3Dark)
`)])],-1)]]),_:1}),l[17]||=r(`p`,null,`也支持自定义`,-1),a(S,null,{default:n(()=>[...l[10]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-keyword`},`import`),o(` { Themes } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` viewportTheme = Themes.toRem(Themes.md3Dark, {
  `),r(`span`,{class:`hljs-comment`},`// 默认值为 16`),o(`
  `),r(`span`,{class:`hljs-attr`},`rootFontSize`),o(`: `),r(`span`,{class:`hljs-number`},`32`),o(`,
  `),r(`span`,{class:`hljs-comment`},`// 默认值为 6`),o(`
  `),r(`span`,{class:`hljs-attr`},`unitPrecision`),o(`: `),r(`span`,{class:`hljs-number`},`4`),o(`,
})
`)])],-1)]]),_:1})]),r(`div`,h,[r(`h3`,g,[a(x,{to:`#zhuo1mian4duan1shi4pei4`},{default:n(()=>[...l[18]||=[o(`#`,-1)]]),_:1}),l[19]||=o(`桌面端适配`,-1)]),l[22]||=r(`p`,null,[o(`由于组件库交互事件使用 `),r(`code`,null,`touch`),o(` 事件进行开发，不支持桌面端的 `),r(`code`,null,`mouse`),o(` 事件， 推荐使用 `),r(`code`,null,`@varlet/touch-emulator`),o(` 将 `),r(`code`,null,`touch -> mouse`),o(` 从而实现桌面端适配。`)],-1),a(S,{"playground-ignore":``},{default:n(()=>[...l[20]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-meta`},`#`),r(`span`,{class:`bash`},` npm`),o(`
npm i @varlet/touch-emulator
`),r(`span`,{class:`hljs-meta`},`#`),r(`span`,{class:`bash`},` yarn`),o(`
yarn add @varlet/touch-emulator
`),r(`span`,{class:`hljs-meta`},`#`),r(`span`,{class:`bash`},` pnpm`),o(`
pnpm add @varlet/touch-emulator
`)])],-1)]]),_:1}),a(S,{"playground-ignore":``},{default:n(()=>[...l[21]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-keyword`},`import`),o(),r(`span`,{class:`hljs-string`},`'@varlet/touch-emulator'`),o(`
`)])],-1)]]),_:1})])])}var v=c(l,[[`render`,_]]);export{v as default};