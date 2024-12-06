import{_ as c,m as p,p as s,q as a,w as t,Q as n,a1 as r,b as l,e as i}from"./index-Dp-m0_HZ.js";const h={components:{}},d={class:"varlet-site-doc"},u=s("h1",null,"浏览器适配",-1),m={class:"card"},_={id:"jie4shao4"},j=s("p",null,[n("组件库提供移动端和桌面端适配方案， 移动端使用 "),s("code",null,"postcss-px-to-viewport"),n(" 方案进行适配， 桌面端使用 "),s("code",null,"@varlet/touch-emulator"),n(" 方案进行适配。")],-1),v={class:"card"},w={id:"yi2dong4duan1shi4pei4"},g=r("<h4>CSS 单位适配</h4><p>组件库设计基于 <code>375px</code> 宽度设计稿，推荐使用 postcss 插件将 <code>px</code> 单位转换成 <code>vmin</code> 单位从而实现移动端适配。 在 <code>webpack/vite</code> 项目根路径下创建 <code>postcss.config.js</code> 并做如下配置之后 <code>375px -&gt; 100vmin</code>。</p>",2),f=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," npm"),n(`
npm i postcss-px-to-viewport -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," yarn"),n(`
yarn add postcss-px-to-viewport -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," pnpm"),n(`
pnpm add postcss-px-to-viewport -D
`)])],-1),x=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// postcss.config.js"),n(`
`),s("span",{class:"hljs-built_in"},"module"),n(`.exports = {
  `),s("span",{class:"hljs-attr"},"plugins"),n(`: {
    `),s("span",{class:"hljs-string"},"'postcss-px-to-viewport'"),n(`: {
      `),s("span",{class:"hljs-attr"},"viewportWidth"),n(": "),s("span",{class:"hljs-number"},"375"),n(`,
      `),s("span",{class:"hljs-attr"},"unitPrecision"),n(": "),s("span",{class:"hljs-number"},"6"),n(`,
      `),s("span",{class:"hljs-attr"},"unitToConvert"),n(": "),s("span",{class:"hljs-string"},"'px'"),n(`,
      `),s("span",{class:"hljs-attr"},"viewportUnit"),n(": "),s("span",{class:"hljs-string"},"'vmin'"),n(`,
      `),s("span",{class:"hljs-attr"},"fontViewportUnit"),n(": "),s("span",{class:"hljs-string"},"'vmin'"),n(`,
      `),s("span",{class:"hljs-attr"},"propList"),n(": ["),s("span",{class:"hljs-string"},"'*'"),n(`],
    }
  }
}
`)])],-1),y=s("h4",null,"主题包单位适配",-1),b=s("p",null,[n("因为主题包是运行时挂载的，不受 postcss 影响，组件库提供了实用工具 "),s("code",null,"Themes.toViewport"),n(" 进行适配，函数返回的主题将默认使用 "),s("code",null,"375px -> 100vmin"),n(" 的规则。")],-1),k=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),n(" { Themes } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'@varlet/ui'"),n(`

`),s("span",{class:"hljs-keyword"},"const"),n(` viewportTheme = Themes.toViewport(Themes.md3Dark)
`)])],-1),T=s("p",null,"也可以对转换规则进行更改",-1),V=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),n(" { Themes } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'@varlet/ui'"),n(`

`),s("span",{class:"hljs-keyword"},"const"),n(` viewportTheme = Themes.toViewport(Themes.md3Dark, {
  `),s("span",{class:"hljs-comment"},"// 默认值为 375"),n(`
  `),s("span",{class:"hljs-attr"},"viewportWidth"),n(": "),s("span",{class:"hljs-number"},"750"),n(`,
  `),s("span",{class:"hljs-comment"},"// 默认值为 'vmin'"),n(`
  `),s("span",{class:"hljs-attr"},"viewportUnit"),n(": "),s("span",{class:"hljs-string"},"'vw'"),n(`,
  `),s("span",{class:"hljs-comment"},"// 默认值为 6"),n(`
  `),s("span",{class:"hljs-attr"},"unitPrecision"),n(": "),s("span",{class:"hljs-number"},"4"),n(`,
})
`)])],-1),C={class:"card"},D={id:"zhuo1mian4duan1shi4pei4"},N=s("p",null,[n("由于组件库交互事件使用 "),s("code",null,"touch"),n(" 事件进行开发，不支持桌面端的 "),s("code",null,"mouse"),n(" 事件， 推荐使用 "),s("code",null,"@varlet/touch-emulator"),n(" 将 "),s("code",null,"touch -> mouse"),n(" 从而实现桌面端适配。")],-1),$=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," npm"),n(`
npm i @varlet/touch-emulator
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," yarn"),n(`
yarn add @varlet/touch-emulator
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," pnpm"),n(`
pnpm add @varlet/touch-emulator
`)])],-1),z=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),n(),s("span",{class:"hljs-string"},"'@varlet/touch-emulator'"),n(`
`)])],-1);function B(S,U,P,W,q,A){const o=l("router-link"),e=l("var-site-code-example");return i(),p("div",d,[u,s("div",m,[s("h3",_,[a(o,{to:"#jie4shao4"},{default:t(()=>[n("#")]),_:1}),n("介绍")]),j]),s("div",v,[s("h3",w,[a(o,{to:"#yi2dong4duan1shi4pei4"},{default:t(()=>[n("#")]),_:1}),n("移动端适配")]),g,a(e,{"playground-ignore":""},{default:t(()=>[f]),_:1}),a(e,{"playground-ignore":""},{default:t(()=>[x]),_:1}),y,b,a(e,null,{default:t(()=>[k]),_:1}),T,a(e,null,{default:t(()=>[V]),_:1})]),s("div",C,[s("h3",D,[a(o,{to:"#zhuo1mian4duan1shi4pei4"},{default:t(()=>[n("#")]),_:1}),n("桌面端适配")]),N,a(e,{"playground-ignore":""},{default:t(()=>[$]),_:1}),a(e,{"playground-ignore":""},{default:t(()=>[z]),_:1})])])}const L=c(h,[["render",B]]);export{L as default};
