import{L as e,N as t,W as n,c as r,d as i,g as a,h as o}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as s}from"./_plugin-vue_export-helper-V-yks4gF.js";var c={components:{}},l={class:`varlet-site-doc`},u={class:`card`},d={id:`jie4shao4`},f={class:`card`},p={id:`an1zhuang1`},m={class:`card`},h={id:`zhi1chi2zhuo1mian4duan1`},g={class:`card`},_={id:`xuan3ze2she4ji4xi4tong3`},v={class:`card`},y={id:`zai4xian4ti3yan4zu3jian4`};function b(s,c,b,x,S,C){let w=e(`router-link`),T=e(`var-site-code-example`);return t(),i(`div`,l,[c[22]||=r(`h1`,null,`快速开始`,-1),r(`div`,u,[r(`h3`,d,[a(w,{to:`#jie4shao4`},{default:n(()=>[...c[0]||=[o(`#`,-1)]]),_:1}),c[1]||=o(`介绍`,-1)]),c[2]||=r(`p`,null,`这里为您介绍常见开发模式下接入组件库的最基本方式。`,-1)]),r(`div`,f,[r(`h3`,p,[a(w,{to:`#an1zhuang1`},{default:n(()=>[...c[3]||=[o(`#`,-1)]]),_:1}),c[4]||=o(`安装`,-1)]),c[8]||=r(`h4`,null,`CDN`,-1),c[9]||=r(`p`,null,[r(`code`,null,`varlet.js`),o(` 包含组件库的所有样式和逻辑, 引入即可。`)],-1),a(T,{"playground-ignore":``},{default:n(()=>[...c[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`id`),o(`=`),r(`span`,{class:`hljs-string`},`"app"`),o(`>`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`src`),o(`=`),r(`span`,{class:`hljs-string`},`"https://cdn.jsdelivr.net/npm/vue"`),o(`>`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`src`),o(`=`),r(`span`,{class:`hljs-string`},`"https://cdn.jsdelivr.net/npm/@varlet/ui/umd/varlet.js"`),o(`>`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
  `),r(`span`,{class:`hljs-keyword`},`const`),o(` app = Vue.createApp({
    `),r(`span`,{class:`hljs-attr`},`template`),o(`: `),r(`span`,{class:`hljs-string`},`'<var-button>按钮</var-button>'`),o(`
  })
  app.use(Varlet).mount(`),r(`span`,{class:`hljs-string`},`'#app'`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`
`)])],-1)]]),_:1}),c[10]||=r(`h4`,null,`Webpack/Vite`,-1),a(T,{"playground-ignore":``},{default:n(()=>[...c[6]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-meta`},`#`),r(`span`,{class:`bash`},` 通过 npm、yarn 或 pnpm 安装`),o(`
`),r(`span`,{class:`hljs-meta`},`
#`),r(`span`,{class:`bash`},` npm`),o(`
npm i @varlet/ui -S
`),r(`span`,{class:`hljs-meta`},`
#`),r(`span`,{class:`bash`},` yarn`),o(`
yarn add @varlet/ui
`),r(`span`,{class:`hljs-meta`},`
#`),r(`span`,{class:`bash`},` pnpm`),o(`
pnpm add @varlet/ui
`)])],-1)]]),_:1}),a(T,{"playground-ignore":``},{default:n(()=>[...c[7]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-keyword`},`import`),o(` App `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'./App.vue'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` Varlet `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { createApp } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui/es/style'`),o(`

createApp(App).use(Varlet).mount(`),r(`span`,{class:`hljs-string`},`'#app'`),o(`)
`)])],-1)]]),_:1})]),r(`div`,m,[r(`h3`,h,[a(w,{to:`#zhi1chi2zhuo1mian4duan1`},{default:n(()=>[...c[11]||=[o(`#`,-1)]]),_:1}),c[12]||=o(`支持桌面端`,-1)]),c[13]||=r(`p`,null,[r(`code`,null,`Varlet`),o(` 是一个移动端优先的组件库，支持桌面端需要安装一个适配器，详情见`),r(`a`,{href:`#/zh-CN/browserAdaptation`},`浏览器适配`),o(`。`)],-1)]),r(`div`,g,[r(`h3`,_,[a(w,{to:`#xuan3ze2she4ji4xi4tong3`},{default:n(()=>[...c[14]||=[o(`#`,-1)]]),_:1}),c[15]||=o(`选择设计系统`,-1)]),c[18]||=r(`p`,null,`从 3.x 版本开始，Varlet 同时支持了 Material Design 2 和 Material Design 3 两种设计系统。`,-1),a(T,{"playground-ignore":``},{default:n(()=>[...c[16]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-comment`},`// Varlet 默认为 Material Design 2 亮色模式`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Themes, StyleProvider } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-comment`},`// Material Design 2 暗色模式`),o(`
StyleProvider(Themes.dark)
`),r(`span`,{class:`hljs-comment`},`// Material Design 3 亮色模式`),o(`
StyleProvider(Themes.md3Light)
`),r(`span`,{class:`hljs-comment`},`// Material Design 3 暗色模式`),o(`
StyleProvider(Themes.md3Dark)
`)])],-1)]]),_:1}),a(T,{"playground-ignore":``},{default:n(()=>[...c[17]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-selector-tag`},`body`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`transition`),o(`: background-color .`),r(`span`,{class:`hljs-number`},`25s`),o(`, color .`),r(`span`,{class:`hljs-number`},`25s`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`color`),o(`: `),r(`span`,{class:`hljs-built_in`},`var`),o(`(--color-text);
  `),r(`span`,{class:`hljs-attribute`},`background-color`),o(`: `),r(`span`,{class:`hljs-built_in`},`var`),o(`(--color-body);
  `),r(`span`,{class:`hljs-attribute`},`color`),o(`-scheme: `),r(`span`,{class:`hljs-built_in`},`var`),o(`(--color-scheme);
}
`)])],-1)]]),_:1})]),r(`div`,v,[r(`h3`,y,[a(w,{to:`#zai4xian4ti3yan4zu3jian4`},{default:n(()=>[...c[19]||=[o(`#`,-1)]]),_:1}),c[20]||=o(`在线体验组件`,-1)]),c[21]||=r(`p`,null,[o(`我们提供了网页版的组件编辑器，方便您对组件库的各个组件进行快速上手、在线编辑、分享给他人或是下载代码包本地运行。 您可以点击网页右上角的 `),r(`code`,null,`{...}`),o(` 图标或是 `),r(`a`,{href:`https://varletjs.org/playground`},`这里前往`),o(`。`)],-1)])])}var x=s(c,[[`render`,b]]);export{x as default};