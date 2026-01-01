import{b as o,m as i,p as s,q as l,Q as a,w as t,e as p,h as d}from"./index-DtCrA0ro.js";const u={components:{}},j={class:"varlet-site-doc"},h={class:"card"},c={id:"jie4shao4"},m={class:"card"},g={id:"an1zhuang1"},v={class:"card"},y={id:"zhi1chi2zhuo1mian4duan1"},b={class:"card"},f={id:"xuan3ze2she4ji4xi4tong3"},k={class:"card"},x={id:"zai4xian4ti3yan4zu3jian4"};function z(w,n,V,D,A,M){const r=p("router-link"),e=p("var-site-code-example");return d(),i("div",j,[n[22]||(n[22]=s("h1",null,"快速开始",-1)),s("div",h,[s("h3",c,[l(r,{to:"#jie4shao4"},{default:t(()=>[...n[0]||(n[0]=[a("#",-1)])]),_:1}),n[1]||(n[1]=a("介绍",-1))]),n[2]||(n[2]=s("p",null,"这里为您介绍常见开发模式下接入组件库的最基本方式。",-1))]),s("div",m,[s("h3",g,[l(r,{to:"#an1zhuang1"},{default:t(()=>[...n[3]||(n[3]=[a("#",-1)])]),_:1}),n[4]||(n[4]=a("安装",-1))]),n[8]||(n[8]=s("h4",null,"CDN",-1)),n[9]||(n[9]=s("p",null,[s("code",null,"varlet.js"),a(" 包含组件库的所有样式和逻辑, 引入即可。")],-1)),l(e,{"playground-ignore":""},{default:t(()=>[...n[5]||(n[5]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"id"),a("="),s("span",{class:"hljs-string"},'"app"'),a(">")]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"src"),a("="),s("span",{class:"hljs-string"},'"https://cdn.jsdelivr.net/npm/vue"'),a(">")]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"src"),a("="),s("span",{class:"hljs-string"},'"https://cdn.jsdelivr.net/npm/@varlet/ui/umd/varlet.js"'),a(">")]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(">")]),s("span",{class:"javascript"},[a(`
  `),s("span",{class:"hljs-keyword"},"const"),a(` app = Vue.createApp({
    `),s("span",{class:"hljs-attr"},"template"),a(": "),s("span",{class:"hljs-string"},"'<var-button>按钮</var-button>'"),a(`
  })
  app.use(Varlet).mount(`),s("span",{class:"hljs-string"},"'#app'"),a(`)
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`
`)])],-1)])]),_:1}),n[10]||(n[10]=s("h4",null,"Webpack/Vite",-1)),l(e,{"playground-ignore":""},{default:t(()=>[...n[6]||(n[6]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," 通过 npm、yarn 或 pnpm 安装"),a(`
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," npm"),a(`
npm i @varlet/ui -S
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," yarn"),a(`
yarn add @varlet/ui
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," pnpm"),a(`
pnpm add @varlet/ui
`)])],-1)])]),_:1}),l(e,{"playground-ignore":""},{default:t(()=>[...n[7]||(n[7]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),a(" App "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'./App.vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" Varlet "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(),s("span",{class:"hljs-string"},"'@varlet/ui/es/style'"),a(`

createApp(App).use(Varlet).mount(`),s("span",{class:"hljs-string"},"'#app'"),a(`)
`)])],-1)])]),_:1})]),s("div",v,[s("h3",y,[l(r,{to:"#zhi1chi2zhuo1mian4duan1"},{default:t(()=>[...n[11]||(n[11]=[a("#",-1)])]),_:1}),n[12]||(n[12]=a("支持桌面端",-1))]),n[13]||(n[13]=s("p",null,[s("code",null,"Varlet"),a(" 是一个移动端优先的组件库，支持桌面端需要安装一个适配器，详情见"),s("a",{href:"#/zh-CN/browserAdaptation"},"浏览器适配"),a("。")],-1))]),s("div",b,[s("h3",f,[l(r,{to:"#xuan3ze2she4ji4xi4tong3"},{default:t(()=>[...n[14]||(n[14]=[a("#",-1)])]),_:1}),n[15]||(n[15]=a("选择设计系统",-1))]),n[18]||(n[18]=s("p",null,"从 3.x 版本开始，Varlet 同时支持了 Material Design 2 和 Material Design 3 两种设计系统。",-1)),l(e,{"playground-ignore":""},{default:t(()=>[...n[16]||(n[16]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// Varlet 默认为 Material Design 2 亮色模式"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { Themes, StyleProvider } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`

`),s("span",{class:"hljs-comment"},"// Material Design 2 暗色模式"),a(`
StyleProvider(Themes.dark)
`),s("span",{class:"hljs-comment"},"// Material Design 3 亮色模式"),a(`
StyleProvider(Themes.md3Light)
`),s("span",{class:"hljs-comment"},"// Material Design 3 暗色模式"),a(`
StyleProvider(Themes.md3Dark)
`)])],-1)])]),_:1}),l(e,{"playground-ignore":""},{default:t(()=>[...n[17]||(n[17]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-selector-tag"},"body"),a(` {
  `),s("span",{class:"hljs-attribute"},"transition"),a(": background-color ."),s("span",{class:"hljs-number"},"25s"),a(", color ."),s("span",{class:"hljs-number"},"25s"),a(`;
  `),s("span",{class:"hljs-attribute"},"color"),a(": "),s("span",{class:"hljs-built_in"},"var"),a(`(--color-text);
  `),s("span",{class:"hljs-attribute"},"background-color"),a(": "),s("span",{class:"hljs-built_in"},"var"),a(`(--color-body);
  `),s("span",{class:"hljs-attribute"},"color"),a("-scheme: "),s("span",{class:"hljs-built_in"},"var"),a(`(--color-scheme);
}
`)])],-1)])]),_:1})]),s("div",k,[s("h3",x,[l(r,{to:"#zai4xian4ti3yan4zu3jian4"},{default:t(()=>[...n[19]||(n[19]=[a("#",-1)])]),_:1}),n[20]||(n[20]=a("在线体验组件",-1))]),n[21]||(n[21]=s("p",null,[a("我们提供了网页版的组件编辑器，方便您对组件库的各个组件进行快速上手、在线编辑、分享给他人或是下载代码包本地运行。 您可以点击网页右上角的 "),s("code",null,"{...}"),a(" 图标或是 "),s("a",{href:"https://varletjs.org/playground"},"这里前往"),a("。")],-1))])])}const _=o(u,[["render",z]]);export{_ as default};
