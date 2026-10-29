import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s}from"./runtime-core.esm-bundler-DUghkl6b.js";var c={components:{}},l={class:`varlet-site-doc`},u={class:`card`},d={id:`jie4shao4`},f={class:`card`},p={id:`an1zhuang1`},m={class:`card`},h={id:`zhi1chi2zhuo1mian4duan1`},g={class:`card`},_={id:`xuan3ze2she4ji4xi4tong3`},v={class:`card`},y={id:`zai4xian4ti3yan4zu3jian4`};function b(e,c,b,x,S,C){let w=n(`router-link`),T=n(`var-site-code-example`);return r(),a(`div`,l,[c[22]||=i(`h1`,null,`快速开始`,-1),i(`div`,u,[i(`h3`,d,[o(w,{to:`#jie4shao4`},{default:t(()=>[...c[0]||=[s(`#`,-1)]]),_:1}),c[1]||=s(`介绍`,-1)]),c[2]||=i(`p`,null,`这里为您介绍常见开发模式下接入组件库的最基本方式。`,-1)]),i(`div`,f,[i(`h3`,p,[o(w,{to:`#an1zhuang1`},{default:t(()=>[...c[3]||=[s(`#`,-1)]]),_:1}),c[4]||=s(`安装`,-1)]),c[8]||=i(`h4`,null,`CDN`,-1),c[9]||=i(`p`,null,[i(`code`,null,`varlet.js`),s(` 包含组件库的所有样式和逻辑, 引入即可。`)],-1),o(T,{"playground-ignore":``},{default:t(()=>[...c[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`id`),s(`=`),i(`span`,{class:`hljs-string`},`"app"`),s(`>`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`src`),s(`=`),i(`span`,{class:`hljs-string`},`"https://cdn.jsdelivr.net/npm/vue"`),s(`>`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`src`),s(`=`),i(`span`,{class:`hljs-string`},`"https://cdn.jsdelivr.net/npm/@varlet/ui/umd/varlet.js"`),s(`>`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
  `),i(`span`,{class:`hljs-keyword`},`const`),s(` app = Vue.createApp({
    `),i(`span`,{class:`hljs-attr`},`template`),s(`: `),i(`span`,{class:`hljs-string`},`'<var-button>按钮</var-button>'`),s(`
  })
  app.use(Varlet).mount(`),i(`span`,{class:`hljs-string`},`'#app'`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`
`)])],-1)]]),_:1}),c[10]||=i(`h4`,null,`Webpack/Vite`,-1),o(T,{"playground-ignore":``},{default:t(()=>[...c[6]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-meta`},`#`),i(`span`,{class:`bash`},` 通过 npm、yarn 或 pnpm 安装`),s(`
`),i(`span`,{class:`hljs-meta`},`
#`),i(`span`,{class:`bash`},` npm`),s(`
npm i @varlet/ui -S
`),i(`span`,{class:`hljs-meta`},`
#`),i(`span`,{class:`bash`},` yarn`),s(`
yarn add @varlet/ui
`),i(`span`,{class:`hljs-meta`},`
#`),i(`span`,{class:`bash`},` pnpm`),s(`
pnpm add @varlet/ui
`)])],-1)]]),_:1}),o(T,{"playground-ignore":``},{default:t(()=>[...c[7]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-keyword`},`import`),s(` App `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'./App.vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` Varlet `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { createApp } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui/es/style'`),s(`

createApp(App).use(Varlet).mount(`),i(`span`,{class:`hljs-string`},`'#app'`),s(`)
`)])],-1)]]),_:1})]),i(`div`,m,[i(`h3`,h,[o(w,{to:`#zhi1chi2zhuo1mian4duan1`},{default:t(()=>[...c[11]||=[s(`#`,-1)]]),_:1}),c[12]||=s(`支持桌面端`,-1)]),c[13]||=i(`p`,null,[i(`code`,null,`Varlet`),s(` 是一个移动端优先的组件库，支持桌面端需要安装一个适配器，详情见`),i(`a`,{href:`#/zh-CN/browserAdaptation`},`浏览器适配`),s(`。`)],-1)]),i(`div`,g,[i(`h3`,_,[o(w,{to:`#xuan3ze2she4ji4xi4tong3`},{default:t(()=>[...c[14]||=[s(`#`,-1)]]),_:1}),c[15]||=s(`选择设计系统`,-1)]),c[18]||=i(`p`,null,`从 3.x 版本开始，Varlet 同时支持了 Material Design 2 和 Material Design 3 两种设计系统。`,-1),o(T,{"playground-ignore":``},{default:t(()=>[...c[16]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-comment`},`// Varlet 默认为 Material Design 2 亮色模式`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Themes, StyleProvider } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-comment`},`// Material Design 2 暗色模式`),s(`
StyleProvider(Themes.dark)
`),i(`span`,{class:`hljs-comment`},`// Material Design 3 亮色模式`),s(`
StyleProvider(Themes.md3Light)
`),i(`span`,{class:`hljs-comment`},`// Material Design 3 暗色模式`),s(`
StyleProvider(Themes.md3Dark)
`)])],-1)]]),_:1}),o(T,{"playground-ignore":``},{default:t(()=>[...c[17]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-selector-tag`},`body`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`transition`),s(`: background-color .`),i(`span`,{class:`hljs-number`},`25s`),s(`, color .`),i(`span`,{class:`hljs-number`},`25s`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`color`),s(`: `),i(`span`,{class:`hljs-built_in`},`var`),s(`(--color-text);
  `),i(`span`,{class:`hljs-attribute`},`background-color`),s(`: `),i(`span`,{class:`hljs-built_in`},`var`),s(`(--color-body);
  `),i(`span`,{class:`hljs-attribute`},`color`),s(`-scheme: `),i(`span`,{class:`hljs-built_in`},`var`),s(`(--color-scheme);
}
`)])],-1)]]),_:1})]),i(`div`,v,[i(`h3`,y,[o(w,{to:`#zai4xian4ti3yan4zu3jian4`},{default:t(()=>[...c[19]||=[s(`#`,-1)]]),_:1}),c[20]||=s(`在线体验组件`,-1)]),c[21]||=i(`p`,null,[s(`我们提供了网页版的组件编辑器，方便您对组件库的各个组件进行快速上手、在线编辑、分享给他人或是下载代码包本地运行。 您可以点击网页右上角的 `),i(`code`,null,`{...}`),s(` 图标或是 `),i(`a`,{href:`https://varletjs.org/playground`},`这里前往`),s(`。`)],-1)])])}var x=e(c,[[`render`,b]]);export{x as default};