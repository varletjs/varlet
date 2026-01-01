import{b as e,m as i,p as s,q as a,Q as n,w as t,e as r,h as u}from"./index-DtCrA0ro.js";const j={components:{}},c={class:"varlet-site-doc"},d={class:"card"},h={id:"jie4shao4"},m={class:"card"},g={id:"zi4dong4yin3ru4"},v={class:"card"},y={id:"shou3dong4yin3ru4"},k={class:"card"},f={id:"shou3dong4yin3ru4he2zi4dong4yin3ru4dui4bi3"};function w(b,l,I,V,x,C){const o=r("router-link"),p=r("var-site-code-example");return u(),i("div",c,[l[27]||(l[27]=s("h1",null,"按需引入",-1)),s("div",d,[s("h3",h,[a(o,{to:"#jie4shao4"},{default:t(()=>[...l[0]||(l[0]=[n("#",-1)])]),_:1}),l[1]||(l[1]=n("介绍",-1))]),l[2]||(l[2]=s("p",null,"按需引入避免了组件的全量导入，可以有效的减少发布包的大小。",-1))]),s("div",m,[s("h3",g,[a(o,{to:"#zi4dong4yin3ru4"},{default:t(()=>[...l[3]||(l[3]=[n("#",-1)])]),_:1}),l[4]||(l[4]=n("自动引入",-1))]),l[9]||(l[9]=s("p",null,[n("通过插件 "),s("a",{href:"https://github.com/antfu/unplugin-vue-components"},"unplugin-vue-components"),n(" 和 "),s("a",{href:"https://github.com/antfu/unplugin-auto-import"},"unplugin-auto-import"),n(" 实现组件自动按需导入，这也是我们最推荐的方式。")],-1)),l[10]||(l[10]=s("h4",null,"安装插件",-1)),a(p,{"playground-ignore":""},{default:t(()=>[...l[5]||(l[5]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," npm"),n(`
npm i @varlet/import-resolver unplugin-vue-components unplugin-auto-import -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," yarn"),n(`
yarn add @varlet/import-resolver unplugin-vue-components unplugin-auto-import -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," pnpm"),n(`
pnpm add @varlet/import-resolver unplugin-vue-components unplugin-auto-import -D
`)])],-1)])]),_:1}),l[11]||(l[11]=s("h4",null,"Vite",-1)),a(p,{"playground-ignore":""},{default:t(()=>[...l[6]||(l[6]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// vite.config.js"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" vue "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'@vitejs/plugin-vue'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" components "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'unplugin-vue-components/vite'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" autoImport "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'unplugin-auto-import/vite'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" { VarletImportResolver } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'@varlet/import-resolver'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" { defineConfig } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'vite'"),n(`

`),s("span",{class:"hljs-keyword"},"export"),n(),s("span",{class:"hljs-keyword"},"default"),n(` defineConfig({
  `),s("span",{class:"hljs-attr"},"plugins"),n(`: [
    vue(),
    components({
      `),s("span",{class:"hljs-attr"},"resolvers"),n(`: [VarletImportResolver()]
    }),
    autoImport({
      `),s("span",{class:"hljs-attr"},"resolvers"),n(": [VarletImportResolver({ "),s("span",{class:"hljs-attr"},"autoImport"),n(": "),s("span",{class:"hljs-literal"},"true"),n(` })]
    })
  ]
})
`)])],-1)])]),_:1}),l[12]||(l[12]=s("h4",null,"Vue CLI",-1)),a(p,{"playground-ignore":""},{default:t(()=>[...l[7]||(l[7]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// vue.config.js"),n(`
`),s("span",{class:"hljs-keyword"},"const"),n(" Components = "),s("span",{class:"hljs-built_in"},"require"),n("("),s("span",{class:"hljs-string"},"'unplugin-vue-components/webpack'"),n(`)
`),s("span",{class:"hljs-keyword"},"const"),n(" AutoImport = "),s("span",{class:"hljs-built_in"},"require"),n("("),s("span",{class:"hljs-string"},"'unplugin-auto-import/webpack'"),n(`)
`),s("span",{class:"hljs-keyword"},"const"),n(" { VarletImportResolver } = "),s("span",{class:"hljs-built_in"},"require"),n("("),s("span",{class:"hljs-string"},"'@varlet/import-resolver'"),n(`)

`),s("span",{class:"hljs-built_in"},"module"),n(`.exports = {
  `),s("span",{class:"hljs-attr"},"configureWebpack"),n(`: {
    `),s("span",{class:"hljs-attr"},"plugins"),n(`: [
      Components.default({
        `),s("span",{class:"hljs-attr"},"resolvers"),n(`: [VarletImportResolver()]
      }),
      AutoImport.default({
        `),s("span",{class:"hljs-attr"},"resolvers"),n(": [VarletImportResolver({ "),s("span",{class:"hljs-attr"},"autoImport"),n(": "),s("span",{class:"hljs-literal"},"true"),n(` })]
      })
    ]
  }
}
`)])],-1)])]),_:1}),l[13]||(l[13]=s("h4",null,"Typescript 配置注意",-1)),l[14]||(l[14]=s("p",null,[n("为了得到良好的 IDE 语法高亮，请确保上述两个插件生成的类型声明文件被 "),s("code",null,"typescript"),n(" 识别，可在 "),s("code",null,"tsconfig.json"),n(" 中进行如下配置:")],-1)),a(p,{"playground-ignore":""},{default:t(()=>[...l[8]||(l[8]=[s("pre",{class:"hljs"},[s("code",null,[n(`{
  `),s("span",{class:"hljs-attr"},'"include"'),n(": ["),s("span",{class:"hljs-string"},'"auto-imports.d.ts"'),n(", "),s("span",{class:"hljs-string"},'"components.d.ts"'),n(`]
}
`)])],-1)])]),_:1})]),s("div",v,[s("h3",y,[a(o,{to:"#shou3dong4yin3ru4"},{default:t(()=>[...l[15]||(l[15]=[n("#",-1)])]),_:1}),l[16]||(l[16]=n("手动引入",-1))]),l[19]||(l[19]=s("p",null,[n("每一个组件都是一个 "),s("code",null,"Vue插件"),n("，并由 "),s("code",null,"组件逻辑"),n(" 和 "),s("code",null,"样式文件"),n(" 组成，手动引入的使用方式如下。")],-1)),a(p,{"playground-ignore":""},{default:t(()=>[...l[17]||(l[17]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),n(" App "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'./App.vue'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'vue'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" { Button } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'@varlet/ui'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(),s("span",{class:"hljs-string"},"'@varlet/ui/es/button/style/index'"),n(`

createApp(App).use(Button)
`)])],-1)])]),_:1}),l[20]||(l[20]=s("p",null,"或",-1)),a(p,{"playground-ignore":""},{default:t(()=>[...l[18]||(l[18]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"script"),n(),s("span",{class:"hljs-attr"},"setup"),n(">")]),s("span",{class:"javascript"},[n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" { Button "),s("span",{class:"hljs-keyword"},"as"),n(" VarButton } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'@varlet/ui'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(),s("span",{class:"hljs-string"},"'@varlet/ui/es/button/style/index'"),n(`
`)]),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"script"),n(">")]),n(`

`),s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"template"),n(">")]),n(`
  `),s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"var-button"),n(">")]),n("说你好"),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"var-button"),n(">")]),n(`
`),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"template"),n(">")]),n(`
`)])],-1)])]),_:1})]),s("div",k,[s("h3",f,[a(o,{to:"#shou3dong4yin3ru4he2zi4dong4yin3ru4dui4bi3"},{default:t(()=>[...l[21]||(l[21]=[n("#",-1)])]),_:1}),l[22]||(l[22]=n("手动引入和自动引入对比",-1))]),l[25]||(l[25]=s("h4",null,"手动引入",-1)),a(p,{"playground-ignore":""},{default:t(()=>[...l[23]||(l[23]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"script"),n(),s("span",{class:"hljs-attr"},"setup"),n(">")]),s("span",{class:"javascript"},[n(`
`),s("span",{class:"hljs-keyword"},"import"),n(" { Button "),s("span",{class:"hljs-keyword"},"as"),n(" VarButton, Snackbar } "),s("span",{class:"hljs-keyword"},"from"),n(),s("span",{class:"hljs-string"},"'@varlet/ui'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(),s("span",{class:"hljs-string"},"'@varlet/ui/es/button/style/index'"),n(`
`),s("span",{class:"hljs-keyword"},"import"),n(),s("span",{class:"hljs-string"},"'@varlet/ui/es/snackbar/style/index'"),n(`

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),n(),s("span",{class:"hljs-title"},"handleClick"),n("("),s("span",{class:"hljs-params"}),n(") ")]),n(`{
  Snackbar(`),s("span",{class:"hljs-string"},"'你好!'"),n(`)
}
`)]),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"script"),n(">")]),n(`

`),s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"template"),n(">")]),n(`
  `),s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"var-button"),n(" @"),s("span",{class:"hljs-attr"},"click"),n("="),s("span",{class:"hljs-string"},'"handleClick"'),n(">")]),n("说你好"),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"var-button"),n(">")]),n(`
`),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"template"),n(">")]),n(`
`)])],-1)])]),_:1}),l[26]||(l[26]=s("h4",null,"自动引入",-1)),a(p,{"playground-ignore":""},{default:t(()=>[...l[24]||(l[24]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"script"),n(),s("span",{class:"hljs-attr"},"setup"),n(">")]),s("span",{class:"javascript"},[n(`
`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),n(),s("span",{class:"hljs-title"},"handleClick"),n("("),s("span",{class:"hljs-params"}),n(") ")]),n(`{
  Snackbar(`),s("span",{class:"hljs-string"},"'你好!'"),n(`)
}
`)]),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"script"),n(">")]),n(`

`),s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"template"),n(">")]),n(`
  `),s("span",{class:"hljs-tag"},[n("<"),s("span",{class:"hljs-name"},"var-button"),n(" @"),s("span",{class:"hljs-attr"},"click"),n("="),s("span",{class:"hljs-string"},'"handleClick"'),n(">")]),n("说你好"),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"var-button"),n(">")]),n(`
`),s("span",{class:"hljs-tag"},[n("</"),s("span",{class:"hljs-name"},"template"),n(">")]),n(`
`)])],-1)])]),_:1})])])}const A=e(j,[["render",w]]);export{A as default};
