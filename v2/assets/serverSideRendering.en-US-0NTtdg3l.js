import{_ as r,b as l,e as p,m as c,p as s,q as t,w as e,P as n}from"./index-vwO9GBzB.js";const i={components:{}},u={class:"varlet-site-doc"},d=s("h1",null,"Server-Side Rendering",-1),h={class:"card"},m={id:"Intro"},_=s("p",null,[n("Here is the basic way to install "),s("code",null,"Varlet"),n(" in "),s("code",null,"Nuxt"),n(".")],-1),j={class:"card"},g={id:"CreateNuxtproject"},v=s("p",null,[s("code",null,"Nuxt.js"),n(" is a server-side rendering application framework based on "),s("code",null,"Vue.js"),n(", please go to "),s("a",{href:"https://nuxt.com"},"Nuxt"),n(" for a detailed tutorial.")],-1),f={class:"card"},x={id:"ImportOnDemand"},y=s("p",null,[n("via plugin "),s("a",{href:"https://github.com/antfu/unplugin-vue-components"},"unplugin-vue-components"),n(" and "),s("a",{href:"https://github.com/antfu/unplugin-auto-import"},"unplugin-auto-import"),n(" Realize the automatic on-demand import of components.")],-1),k=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," Install the plugin"),n(`
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," npm"),n(`
npm i unplugin-vue-components unplugin-auto-import -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"},"yarn"),n(`
yarn add unplugin-vue-components unplugin-auto-import -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"},"pnpm"),n(`
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
`)])],-1),I={class:"card"},N={id:"ExampleRepository"},b=s("p",null,[s("a",{href:"https://github.com/varletjs/varlet-install-example/tree/main/nuxt"},"varlet-install-example/nuxt")],-1);function R(V,C,D,E,S,U){const a=l("router-link"),o=l("var-site-code-example");return p(),c("div",u,[d,s("div",h,[s("h3",m,[t(a,{to:"#Intro"},{default:e(()=>[n("#")]),_:1}),n("Intro")]),_]),s("div",j,[s("h3",g,[t(a,{to:"#CreateNuxtproject"},{default:e(()=>[n("#")]),_:1}),n("Create Nuxt project")]),v]),s("div",f,[s("h3",x,[t(a,{to:"#ImportOnDemand"},{default:e(()=>[n("#")]),_:1}),n("Import On Demand")]),y,t(o,{"playground-ignore":""},{default:e(()=>[k]),_:1}),t(o,null,{default:e(()=>[w]),_:1})]),s("div",I,[s("h3",N,[t(a,{to:"#ExampleRepository"},{default:e(()=>[n("#")]),_:1}),n("Example Repository")]),b])])}const B=r(i,[["render",R]]);export{B as default};
