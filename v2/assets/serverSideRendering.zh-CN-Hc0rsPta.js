import{_ as c,b as o,e as r,m as p,p as s,q as t,w as a,P as n}from"./index-vwO9GBzB.js";const u={components:{}},i={class:"varlet-site-doc"},h=s("h1",null,"服务端渲染",-1),d={class:"card"},m={id:"jie4shao4"},_=s("p",null,[n("这里为您介绍在 "),s("code",null,"Nuxt"),n(" 中引入 "),s("code",null,"Varlet"),n(" 的基本方式。")],-1),j={class:"card"},g={id:"chuang4jian4Nu0xtxiang4mu4"},v=s("p",null,[s("code",null,"Nuxt.js"),n(" 是一个基于 "),s("code",null,"Vue.js"),n(" 的服务端渲染应用框架，详细教程请移步 "),s("a",{href:"https://nuxt.com"},"Nuxt"),n("。")],-1),f={class:"card"},x={id:"an4xu1yin3ru4"},k=s("p",null,[n("通过插件 "),s("a",{href:"https://github.com/antfu/unplugin-vue-components"},"unplugin-vue-components"),n(" 和 "),s("a",{href:"https://github.com/antfu/unplugin-auto-import"},"unplugin-auto-import"),n(" 实现组件自动按需导入。")],-1),y=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," 安装插件"),n(`
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," npm"),n(`
npm i unplugin-vue-components unplugin-auto-import -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," yarn"),n(`
yarn add unplugin-vue-components unplugin-auto-import -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," pnpm"),n(`
pnpm add unplugin-vue-components unplugin-auto-import -D
`)])],-1),w=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// nuxt.config.ts"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" components "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'unplugin-vue-components/vite'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" autoImport "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'unplugin-auto-import/vite'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" { VarletUIResolver } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'unplugin-vue-components/resolvers'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" { defineNuxtConfig } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'nuxt/config'"),n(`

`),s("span",{class:"hljs-keyword"},"export"),n(),s("span",{class:"hljs-keyword"},"default"),n(` defineNuxtConfig({
  `),s("span",{class:"hljs-attr"},"vite"),n(`: {
    `),s("span",{class:"hljs-attr"},"ssr"),n(`: {
      `),s("span",{class:"hljs-attr"},"noExternal"),n(": ["),s("span",{class:"hljs-string"},"'@varlet/ui'"),n(`]
    },
    `),s("span",{class:"hljs-attr"},"plugins"),n(`: [
      components({
        `),s("span",{class:"hljs-attr"},"resolvers"),n(`: [VarletUIResolver()]
      }),
      autoImport({
        `),s("span",{class:"hljs-attr"},"resolvers"),n(": [VarletUIResolver({ "),s("span",{class:"hljs-attr"},"autoImport"),n(": "),s("span",{class:"hljs-literal"},"true"),n(` })],
      })
    ]
  }
})
`)])],-1),N={class:"card"},b={id:"shi4li4cang1ku4"},V=s("p",null,[s("a",{href:"https://github.com/varletjs/varlet-install-example/tree/main/nuxt"},"varlet-install-example/nuxt")],-1);function I(C,R,$,B,D,U){const e=o("router-link"),l=o("var-site-code-example");return r(),p("div",i,[h,s("div",d,[s("h3",m,[t(e,{to:"#jie4shao4"},{default:a(()=>[n("#")]),_:1}),n("介绍")]),_]),s("div",j,[s("h3",g,[t(e,{to:"#chuang4jian4Nu0xtxiang4mu4"},{default:a(()=>[n("#")]),_:1}),n("创建 Nuxt 项目")]),v]),s("div",f,[s("h3",x,[t(e,{to:"#an4xu1yin3ru4"},{default:a(()=>[n("#")]),_:1}),n("按需引入")]),k,t(l,{"playground-ignore":""},{default:a(()=>[y]),_:1}),t(l,null,{default:a(()=>[w]),_:1})]),s("div",N,[s("h3",b,[t(e,{to:"#shi4li4cang1ku4"},{default:a(()=>[n("#")]),_:1}),n("示例仓库")]),V])])}const q=c(u,[["render",I]]);export{q as default};
