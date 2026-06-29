import{_ as l,b as c,e as p,m as d,p as s,q as a,w as n,P as o,Z as r}from"./index-vwO9GBzB.js";const i={components:{}},h={class:"varlet-site-doc"},u=s("h1",null,"浏览器适配",-1),_={class:"card"},m={id:"jie4shao4"},j=s("p",null,[o("组件库提供移动端和桌面端适配方案， 移动端使用 "),s("code",null,"postcss-px-to-viewport"),o(" 方案进行适配， 桌面端使用 "),s("code",null,"@varlet/touch-emulator"),o(" 方案进行适配。")],-1),v={class:"card"},g={id:"yi2dong4duan1shi4pei4"},x=r("<p>组件库设计基于 <code>375px</code> 宽度设计稿，推荐使用 postcss 插件将 <code>px</code> 单位转换成 <code>vw</code> 单位从而实现移动端适配。 在 <code>Webpack/Vite</code> 项目根路径下创建 <code>postcss.config.js</code> 并做如下配置之后 <code>375px -&gt; 100vw</code>。</p>",1),f=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," npm"),o(`
npm i postcss-px-to-viewport -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," yarn"),o(`
yarn add postcss-px-to-viewport -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," pnpm"),o(`
pnpm add postcss-px-to-viewport -D
`)])],-1),b=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// postcss.config.js"),o(`
`),s("span",{class:"hljs-built_in"},"module"),o(`.exports = {
  `),s("span",{class:"hljs-attr"},"plugins"),o(`: {
    `),s("span",{class:"hljs-string"},"'postcss-px-to-viewport'"),o(`: {
      `),s("span",{class:"hljs-attr"},"viewportWidth"),o(": "),s("span",{class:"hljs-number"},"375"),o(`,
      `),s("span",{class:"hljs-attr"},"unitPrecision"),o(": "),s("span",{class:"hljs-number"},"6"),o(`,
      `),s("span",{class:"hljs-attr"},"unitToConvert"),o(": "),s("span",{class:"hljs-string"},"'px'"),o(`,
      `),s("span",{class:"hljs-attr"},"propList"),o(": ["),s("span",{class:"hljs-string"},"'*'"),o(`],
    }
  }
}
`)])],-1),w={class:"card"},y={id:"zhuo1mian4duan1shi4pei4"},k=s("p",null,[o("由于组件库交互事件使用 "),s("code",null,"touch"),o(" 事件进行开发，不支持桌面端的 "),s("code",null,"mouse"),o(" 事件， 推荐使用 "),s("code",null,"@varlet/touch-emulator"),o(" 将 "),s("code",null,"touch -> mouse"),o(" 从而实现桌面端适配。")],-1),N=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," npm"),o(`
npm i @varlet/touch-emulator
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," yarn"),o(`
yarn add @varlet/touch-emulator
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," pnpm"),o(`
pnpm add @varlet/touch-emulator
`)])],-1),V=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),o(),s("span",{class:"hljs-string"},"'@varlet/touch-emulator'"),o(`
`)])],-1);function C($,z,B,D,P,T){const e=c("router-link"),t=c("var-site-code-example");return p(),d("div",h,[u,s("div",_,[s("h3",m,[a(e,{to:"#jie4shao4"},{default:n(()=>[o("#")]),_:1}),o("介绍")]),j]),s("div",v,[s("h3",g,[a(e,{to:"#yi2dong4duan1shi4pei4"},{default:n(()=>[o("#")]),_:1}),o("移动端适配")]),x,a(t,{"playground-ignore":""},{default:n(()=>[f]),_:1}),a(t,{"playground-ignore":""},{default:n(()=>[b]),_:1})]),s("div",w,[s("h3",y,[a(e,{to:"#zhuo1mian4duan1shi4pei4"},{default:n(()=>[o("#")]),_:1}),o("桌面端适配")]),k,a(t,{"playground-ignore":""},{default:n(()=>[N]),_:1}),a(t,{"playground-ignore":""},{default:n(()=>[V]),_:1})])])}const q=l(i,[["render",C]]);export{q as default};
