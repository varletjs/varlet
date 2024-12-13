import{_ as o,m as r,p as s,q as n,w as l,Q as a,b as c,e as p}from"./index-PcDaVTK1.js";const i={components:{}},h={class:"varlet-site-doc"},d=s("h1",null,"快速开始",-1),_={class:"card"},u={id:"jie4shao4"},j=s("p",null,"这里为您介绍常见开发模式下接入组件库的最基本方式。",-1),m={class:"card"},g={id:"an1zhuang1"},v=s("h4",null,"CDN",-1),y=s("p",null,[s("code",null,"varlet.js"),a(" 包含组件库的所有样式和逻辑, 引入即可。")],-1),f=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"id"),a("="),s("span",{class:"hljs-string"},'"app"'),a(">")]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"src"),a("="),s("span",{class:"hljs-string"},'"https://cdn.jsdelivr.net/npm/vue"'),a(">")]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"src"),a("="),s("span",{class:"hljs-string"},'"https://cdn.jsdelivr.net/npm/@varlet/ui/umd/varlet.js"'),a(">")]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(">")]),s("span",{class:"javascript"},[a(`
  `),s("span",{class:"hljs-keyword"},"const"),a(` app = Vue.createApp({
    `),s("span",{class:"hljs-attr"},"template"),a(": "),s("span",{class:"hljs-string"},"'<var-button>按钮</var-button>'"),a(`
  })
  app.use(Varlet).mount(`),s("span",{class:"hljs-string"},"'#app'"),a(`)
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`
`)])],-1),b=s("h4",null,"Webpack/Vite",-1),k=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," 通过 npm、yarn 或 pnpm 安装"),a(`
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," npm"),a(`
npm i @varlet/ui -S
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," yarn"),a(`
yarn add @varlet/ui
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," pnpm"),a(`
pnpm add @varlet/ui
`)])],-1),x=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),a(" App "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'./App.vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" Varlet "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(),s("span",{class:"hljs-string"},"'@varlet/ui/es/style'"),a(`

createApp(App).use(Varlet).mount(`),s("span",{class:"hljs-string"},"'#app'"),a(`)
`)])],-1),z={class:"card"},w={id:"zhi1chi2zhuo1mian4duan1"},V=s("p",null,[s("code",null,"Varlet"),a(" 是一个移动端优先的组件库，支持桌面端需要安装一个适配器，详情见"),s("a",{href:"#/zh-CN/browserAdaptation"},"浏览器适配"),a("。")],-1),D={class:"card"},A={id:"xuan3ze2she4ji4xi4tong3"},M=s("p",null,"从 3.x 版本开始，Varlet 同时支持了 Material Design 2 和 Material Design 3 两种设计系统。",-1),N=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// Varlet 默认为 Material Design 2 亮色模式"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { Themes, StyleProvider } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`

`),s("span",{class:"hljs-comment"},"// Material Design 2 暗色模式"),a(`
StyleProvider(Themes.dark)
`),s("span",{class:"hljs-comment"},"// Material Design 3 亮色模式"),a(`
StyleProvider(Themes.md3Light)
`),s("span",{class:"hljs-comment"},"// Material Design 3 暗色模式"),a(`
StyleProvider(Themes.md3Dark)
`)])],-1),C=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-selector-tag"},"body"),a(` {
  `),s("span",{class:"hljs-attribute"},"transition"),a(": background-color ."),s("span",{class:"hljs-number"},"25s"),a(", color ."),s("span",{class:"hljs-number"},"25s"),a(`;
  `),s("span",{class:"hljs-attribute"},"color"),a(": "),s("span",{class:"hljs-built_in"},"var"),a(`(--color-text);
  `),s("span",{class:"hljs-attribute"},"background-color"),a(": "),s("span",{class:"hljs-built_in"},"var"),a(`(--color-body);
}
`)])],-1),S={class:"card"},T={id:"zai4xian4ti3yan4zu3jian4"},P=s("p",null,[a("我们提供了网页版的组件编辑器，方便您对组件库的各个组件进行快速上手、在线编辑、分享给他人或是下载代码包本地运行。 您可以点击网页右上角的 "),s("code",null,"{...}"),a(" 图标或是 "),s("a",{href:"https://varletjs.org/playground"},"这里前往"),a("。")],-1);function $(B,q,E,L,Q,W){const t=c("router-link"),e=c("var-site-code-example");return p(),r("div",h,[d,s("div",_,[s("h3",u,[n(t,{to:"#jie4shao4"},{default:l(()=>[a("#")]),_:1}),a("介绍")]),j]),s("div",m,[s("h3",g,[n(t,{to:"#an1zhuang1"},{default:l(()=>[a("#")]),_:1}),a("安装")]),v,y,n(e,{"playground-ignore":""},{default:l(()=>[f]),_:1}),b,n(e,{"playground-ignore":""},{default:l(()=>[k]),_:1}),n(e,{"playground-ignore":""},{default:l(()=>[x]),_:1})]),s("div",z,[s("h3",w,[n(t,{to:"#zhi1chi2zhuo1mian4duan1"},{default:l(()=>[a("#")]),_:1}),a("支持桌面端")]),V]),s("div",D,[s("h3",A,[n(t,{to:"#xuan3ze2she4ji4xi4tong3"},{default:l(()=>[a("#")]),_:1}),a("选择设计系统")]),M,n(e,{"playground-ignore":""},{default:l(()=>[N]),_:1}),n(e,{"playground-ignore":""},{default:l(()=>[C]),_:1})]),s("div",S,[s("h3",T,[n(t,{to:"#zai4xian4ti3yan4zu3jian4"},{default:l(()=>[a("#")]),_:1}),a("在线体验组件")]),P])])}const G=o(i,[["render",$]]);export{G as default};
