import{b as r,m as i,p as s,q as t,Q as n,w as o,$ as d,e as p,h as u}from"./index-BVOqiAXw.js";const c={components:{}},m={class:"varlet-site-doc"},h={class:"card"},j={id:"jie4shao4"},v={class:"card"},w={id:"yi2dong4duan1shi4pei4"},g={class:"card"},f={id:"zhuo1mian4duan1shi4pei4"};function x(y,l,b,k,T,V){const e=p("router-link"),a=p("var-site-code-example");return u(),i("div",m,[l[18]||(l[18]=s("h1",null,"浏览器适配",-1)),s("div",h,[s("h3",j,[t(e,{to:"#jie4shao4"},{default:o(()=>l[0]||(l[0]=[n("#")])),_:1}),l[1]||(l[1]=n("介绍"))]),l[2]||(l[2]=s("p",null,[n("组件库提供移动端和桌面端适配方案， 移动端使用 "),s("a",{href:"https://github.com/evrone/postcss-px-to-viewport"},"postcss-px-to-viewport"),n(" 方案进行适配， 桌面端使用 "),s("code",null,"@varlet/touch-emulator"),n(" 方案进行适配。")],-1))]),s("div",v,[s("h3",w,[t(e,{to:"#yi2dong4duan1shi4pei4"},{default:o(()=>l[3]||(l[3]=[n("#")])),_:1}),l[4]||(l[4]=n("移动端适配"))]),l[9]||(l[9]=d("<h4>CSS 单位适配</h4><p>组件库设计基于 <code>375px</code> 宽度设计稿，推荐使用 postcss 插件将 <code>px</code> 单位转换成 <code>vmin</code> 单位从而实现移动端适配。 在 <code>webpack/vite</code> 项目根路径下创建 <code>postcss.config.js</code> 并做如下配置之后 <code>375px -&gt; 100vmin</code>。</p>",2)),t(a,{"playground-ignore":""},{default:o(()=>l[5]||(l[5]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," npm"),n(`
npm i postcss-px-to-viewport -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," yarn"),n(`
yarn add postcss-px-to-viewport -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," pnpm"),n(`
pnpm add postcss-px-to-viewport -D
`)])],-1)])),_:1}),t(a,{"playground-ignore":""},{default:o(()=>l[6]||(l[6]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// postcss.config.js"),n(`
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
`)])],-1)])),_:1}),l[10]||(l[10]=s("h4",null,"主题包单位适配",-1)),l[11]||(l[11]=s("p",null,[n("因为主题包是运行时挂载的，不受 postcss 影响，组件库提供了实用工具 "),s("code",null,"Themes.toViewport"),n(" 进行适配，函数返回的主题将默认使用 "),s("code",null,"375px -> 100vmin"),n(" 的规则。")],-1)),t(a,null,{default:o(()=>l[7]||(l[7]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),n(" { Themes } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'@varlet/ui'"),n(`

`),s("span",{class:"hljs-keyword"},"const"),n(` viewportTheme = Themes.toViewport(Themes.md3Dark)
`)])],-1)])),_:1}),l[12]||(l[12]=s("p",null,"也可以对转换规则进行更改",-1)),t(a,null,{default:o(()=>l[8]||(l[8]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),n(" { Themes } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'@varlet/ui'"),n(`

`),s("span",{class:"hljs-keyword"},"const"),n(` viewportTheme = Themes.toViewport(Themes.md3Dark, {
  `),s("span",{class:"hljs-comment"},"// 默认值为 375"),n(`
  `),s("span",{class:"hljs-attr"},"viewportWidth"),n(": "),s("span",{class:"hljs-number"},"750"),n(`,
  `),s("span",{class:"hljs-comment"},"// 默认值为 'vmin'"),n(`
  `),s("span",{class:"hljs-attr"},"viewportUnit"),n(": "),s("span",{class:"hljs-string"},"'vw'"),n(`,
  `),s("span",{class:"hljs-comment"},"// 默认值为 6"),n(`
  `),s("span",{class:"hljs-attr"},"unitPrecision"),n(": "),s("span",{class:"hljs-number"},"4"),n(`,
})
`)])],-1)])),_:1})]),s("div",g,[s("h3",f,[t(e,{to:"#zhuo1mian4duan1shi4pei4"},{default:o(()=>l[13]||(l[13]=[n("#")])),_:1}),l[14]||(l[14]=n("桌面端适配"))]),l[17]||(l[17]=s("p",null,[n("由于组件库交互事件使用 "),s("code",null,"touch"),n(" 事件进行开发，不支持桌面端的 "),s("code",null,"mouse"),n(" 事件， 推荐使用 "),s("code",null,"@varlet/touch-emulator"),n(" 将 "),s("code",null,"touch -> mouse"),n(" 从而实现桌面端适配。")],-1)),t(a,{"playground-ignore":""},{default:o(()=>l[15]||(l[15]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," npm"),n(`
npm i @varlet/touch-emulator
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," yarn"),n(`
yarn add @varlet/touch-emulator
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," pnpm"),n(`
pnpm add @varlet/touch-emulator
`)])],-1)])),_:1}),t(a,{"playground-ignore":""},{default:o(()=>l[16]||(l[16]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),n(),s("span",{class:"hljs-string"},"'@varlet/touch-emulator'"),n(`
`)])],-1)])),_:1})])])}const D=r(c,[["render",x]]);export{D as default};
