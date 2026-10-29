import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s,m as c}from"./runtime-core.esm-bundler-DUghkl6b.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`jie4shao4`},p={class:`card`},m={id:`yi2dong4duan1shi4pei4`},h={class:`card`},g={id:`zhuo1mian4duan1shi4pei4`};function _(e,l,_,v,y,b){let x=n(`router-link`),S=n(`var-site-code-example`);return r(),a(`div`,u,[l[23]||=i(`h1`,null,`浏览器适配`,-1),i(`div`,d,[i(`h3`,f,[o(x,{to:`#jie4shao4`},{default:t(()=>[...l[0]||=[s(`#`,-1)]]),_:1}),l[1]||=s(`介绍`,-1)]),l[2]||=i(`p`,null,[s(`组件库提供移动端和桌面端适配方案， 移动端使用 `),i(`a`,{href:`https://github.com/evrone/postcss-px-to-viewport`},`postcss-px-to-viewport`),s(` 方案进行适配， 桌面端使用 `),i(`code`,null,`@varlet/touch-emulator`),s(` 方案进行适配。`)],-1)]),i(`div`,p,[i(`h3`,m,[o(x,{to:`#yi2dong4duan1shi4pei4`},{default:t(()=>[...l[3]||=[s(`#`,-1)]]),_:1}),l[4]||=s(`移动端适配`,-1)]),l[11]||=c(`<h4>CSS 单位适配</h4><p>组件库设计基于 <code>375px</code> 宽度设计稿，推荐使用 postcss 插件将 <code>px</code> 单位转换成 <code>vmin</code> 单位从而实现移动端适配。 在 <code>webpack/vite</code> 项目根路径下创建 <code>postcss.config.js</code> 并做如下配置之后 <code>375px -&gt; 100vmin</code>。</p>`,2),o(S,{"playground-ignore":``},{default:t(()=>[...l[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-meta`},`#`),i(`span`,{class:`bash`},` npm`),s(`
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
`)])],-1)]]),_:1}),l[12]||=i(`h4`,null,`主题包单位适配 (Viewport)`,-1),l[13]||=i(`p`,null,[s(`因为主题包是运行时挂载的，不受 postcss 影响，组件库提供了实用工具 `),i(`code`,null,`Themes.toViewport`),s(` 进行适配，函数返回的主题将默认使用 `),i(`code`,null,`375px -> 100vmin`),s(` 的规则。`)],-1),o(S,null,{default:t(()=>[...l[7]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-keyword`},`import`),s(` { Themes } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` viewportTheme = Themes.toViewport(Themes.md3Dark)
`)])],-1)]]),_:1}),l[14]||=i(`p`,null,`也可以对转换规则进行更改`,-1),o(S,null,{default:t(()=>[...l[8]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-keyword`},`import`),s(` { Themes } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` viewportTheme = Themes.toViewport(Themes.md3Dark, {
  `),i(`span`,{class:`hljs-comment`},`// 默认值为 375`),s(`
  `),i(`span`,{class:`hljs-attr`},`viewportWidth`),s(`: `),i(`span`,{class:`hljs-number`},`750`),s(`,
  `),i(`span`,{class:`hljs-comment`},`// 默认值为 'vmin'`),s(`
  `),i(`span`,{class:`hljs-attr`},`viewportUnit`),s(`: `),i(`span`,{class:`hljs-string`},`'vw'`),s(`,
  `),i(`span`,{class:`hljs-comment`},`// 默认值为 6`),s(`
  `),i(`span`,{class:`hljs-attr`},`unitPrecision`),s(`: `),i(`span`,{class:`hljs-number`},`4`),s(`,
})
`)])],-1)]]),_:1}),l[15]||=i(`h4`,null,`主题包单位适配 (Rem)`,-1),l[16]||=i(`p`,null,[s(`与 `),i(`code`,null,`Viewport`),s(` 方案类似`)],-1),o(S,null,{default:t(()=>[...l[9]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-keyword`},`import`),s(` { Themes } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` remTheme = Themes.toRem(Themes.md3Dark)
`)])],-1)]]),_:1}),l[17]||=i(`p`,null,`也支持自定义`,-1),o(S,null,{default:t(()=>[...l[10]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-keyword`},`import`),s(` { Themes } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` viewportTheme = Themes.toRem(Themes.md3Dark, {
  `),i(`span`,{class:`hljs-comment`},`// 默认值为 16`),s(`
  `),i(`span`,{class:`hljs-attr`},`rootFontSize`),s(`: `),i(`span`,{class:`hljs-number`},`32`),s(`,
  `),i(`span`,{class:`hljs-comment`},`// 默认值为 6`),s(`
  `),i(`span`,{class:`hljs-attr`},`unitPrecision`),s(`: `),i(`span`,{class:`hljs-number`},`4`),s(`,
})
`)])],-1)]]),_:1})]),i(`div`,h,[i(`h3`,g,[o(x,{to:`#zhuo1mian4duan1shi4pei4`},{default:t(()=>[...l[18]||=[s(`#`,-1)]]),_:1}),l[19]||=s(`桌面端适配`,-1)]),l[22]||=i(`p`,null,[s(`由于组件库交互事件使用 `),i(`code`,null,`touch`),s(` 事件进行开发，不支持桌面端的 `),i(`code`,null,`mouse`),s(` 事件， 推荐使用 `),i(`code`,null,`@varlet/touch-emulator`),s(` 将 `),i(`code`,null,`touch -> mouse`),s(` 从而实现桌面端适配。`)],-1),o(S,{"playground-ignore":``},{default:t(()=>[...l[20]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-meta`},`#`),i(`span`,{class:`bash`},` npm`),s(`
npm i @varlet/touch-emulator
`),i(`span`,{class:`hljs-meta`},`#`),i(`span`,{class:`bash`},` yarn`),s(`
yarn add @varlet/touch-emulator
`),i(`span`,{class:`hljs-meta`},`#`),i(`span`,{class:`bash`},` pnpm`),s(`
pnpm add @varlet/touch-emulator
`)])],-1)]]),_:1}),o(S,{"playground-ignore":``},{default:t(()=>[...l[21]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-keyword`},`import`),s(),i(`span`,{class:`hljs-string`},`'@varlet/touch-emulator'`),s(`
`)])],-1)]]),_:1})])])}var v=e(l,[[`render`,_]]);export{v as default};