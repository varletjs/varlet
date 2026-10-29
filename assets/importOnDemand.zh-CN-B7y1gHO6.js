import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s}from"./runtime-core.esm-bundler-DUghkl6b.js";var c={components:{}},l={class:`varlet-site-doc`},u={class:`card`},d={id:`jie4shao4`},f={class:`card`},p={id:`zi4dong4yin3ru4`},m={class:`card`},h={id:`shou3dong4yin3ru4`},g={class:`card`},_={id:`shou3dong4yin3ru4he2zi4dong4yin3ru4dui4bi3`};function v(e,c,v,y,b,x){let S=n(`router-link`),C=n(`var-site-code-example`);return r(),a(`div`,l,[c[27]||=i(`h1`,null,`按需引入`,-1),i(`div`,u,[i(`h3`,d,[o(S,{to:`#jie4shao4`},{default:t(()=>[...c[0]||=[s(`#`,-1)]]),_:1}),c[1]||=s(`介绍`,-1)]),c[2]||=i(`p`,null,`按需引入避免了组件的全量导入，可以有效的减少发布包的大小。`,-1)]),i(`div`,f,[i(`h3`,p,[o(S,{to:`#zi4dong4yin3ru4`},{default:t(()=>[...c[3]||=[s(`#`,-1)]]),_:1}),c[4]||=s(`自动引入`,-1)]),c[9]||=i(`p`,null,[s(`通过插件 `),i(`a`,{href:`https://github.com/antfu/unplugin-vue-components`},`unplugin-vue-components`),s(` 和 `),i(`a`,{href:`https://github.com/antfu/unplugin-auto-import`},`unplugin-auto-import`),s(` 实现组件自动按需导入，这也是我们最推荐的方式。`)],-1),c[10]||=i(`h4`,null,`安装插件`,-1),o(C,{"playground-ignore":``},{default:t(()=>[...c[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-meta`},`#`),i(`span`,{class:`bash`},` npm`),s(`
npm i @varlet/import-resolver unplugin-vue-components unplugin-auto-import -D
`),i(`span`,{class:`hljs-meta`},`
#`),i(`span`,{class:`bash`},` yarn`),s(`
yarn add @varlet/import-resolver unplugin-vue-components unplugin-auto-import -D
`),i(`span`,{class:`hljs-meta`},`
#`),i(`span`,{class:`bash`},` pnpm`),s(`
pnpm add @varlet/import-resolver unplugin-vue-components unplugin-auto-import -D
`)])],-1)]]),_:1}),c[11]||=i(`h4`,null,`Vite`,-1),o(C,{"playground-ignore":``},{default:t(()=>[...c[6]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-comment`},`// vite.config.js`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` vue `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@vitejs/plugin-vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` components `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'unplugin-vue-components/vite'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` autoImport `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'unplugin-auto-import/vite'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { VarletImportResolver } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/import-resolver'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { defineConfig } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vite'`),s(`

`),i(`span`,{class:`hljs-keyword`},`export`),s(),i(`span`,{class:`hljs-keyword`},`default`),s(` defineConfig({
  `),i(`span`,{class:`hljs-attr`},`plugins`),s(`: [
    vue(),
    components({
      `),i(`span`,{class:`hljs-attr`},`resolvers`),s(`: [VarletImportResolver()]
    }),
    autoImport({
      `),i(`span`,{class:`hljs-attr`},`resolvers`),s(`: [VarletImportResolver({ `),i(`span`,{class:`hljs-attr`},`autoImport`),s(`: `),i(`span`,{class:`hljs-literal`},`true`),s(` })]
    })
  ]
})
`)])],-1)]]),_:1}),c[12]||=i(`h4`,null,`Vue CLI`,-1),o(C,{"playground-ignore":``},{default:t(()=>[...c[7]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-comment`},`// vue.config.js`),s(`
`),i(`span`,{class:`hljs-keyword`},`const`),s(` Components = `),i(`span`,{class:`hljs-built_in`},`require`),s(`(`),i(`span`,{class:`hljs-string`},`'unplugin-vue-components/webpack'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` AutoImport = `),i(`span`,{class:`hljs-built_in`},`require`),s(`(`),i(`span`,{class:`hljs-string`},`'unplugin-auto-import/webpack'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` { VarletImportResolver } = `),i(`span`,{class:`hljs-built_in`},`require`),s(`(`),i(`span`,{class:`hljs-string`},`'@varlet/import-resolver'`),s(`)

`),i(`span`,{class:`hljs-built_in`},`module`),s(`.exports = {
  `),i(`span`,{class:`hljs-attr`},`configureWebpack`),s(`: {
    `),i(`span`,{class:`hljs-attr`},`plugins`),s(`: [
      Components.default({
        `),i(`span`,{class:`hljs-attr`},`resolvers`),s(`: [VarletImportResolver()]
      }),
      AutoImport.default({
        `),i(`span`,{class:`hljs-attr`},`resolvers`),s(`: [VarletImportResolver({ `),i(`span`,{class:`hljs-attr`},`autoImport`),s(`: `),i(`span`,{class:`hljs-literal`},`true`),s(` })]
      })
    ]
  }
}
`)])],-1)]]),_:1}),c[13]||=i(`h4`,null,`Typescript 配置注意`,-1),c[14]||=i(`p`,null,[s(`为了得到良好的 IDE 语法高亮，请确保上述两个插件生成的类型声明文件被 `),i(`code`,null,`typescript`),s(` 识别，可在 `),i(`code`,null,`tsconfig.json`),s(` 中进行如下配置:`)],-1),o(C,{"playground-ignore":``},{default:t(()=>[...c[8]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[s(`{
  `),i(`span`,{class:`hljs-attr`},`"include"`),s(`: [`),i(`span`,{class:`hljs-string`},`"auto-imports.d.ts"`),s(`, `),i(`span`,{class:`hljs-string`},`"components.d.ts"`),s(`]
}
`)])],-1)]]),_:1})]),i(`div`,m,[i(`h3`,h,[o(S,{to:`#shou3dong4yin3ru4`},{default:t(()=>[...c[15]||=[s(`#`,-1)]]),_:1}),c[16]||=s(`手动引入`,-1)]),c[19]||=i(`p`,null,[s(`每一个组件都是一个 `),i(`code`,null,`Vue插件`),s(`，并由 `),i(`code`,null,`组件逻辑`),s(` 和 `),i(`code`,null,`样式文件`),s(` 组成，手动引入的使用方式如下。`)],-1),o(C,{"playground-ignore":``},{default:t(()=>[...c[17]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-keyword`},`import`),s(` App `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'./App.vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { createApp } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Button } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui/es/button/style/index'`),s(`

createApp(App).use(Button)
`)])],-1)]]),_:1}),c[20]||=i(`p`,null,`或`,-1),o(C,{"playground-ignore":``},{default:t(()=>[...c[18]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Button `),i(`span`,{class:`hljs-keyword`},`as`),s(` VarButton } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui/es/button/style/index'`),s(`
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`说你好`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,g,[i(`h3`,_,[o(S,{to:`#shou3dong4yin3ru4he2zi4dong4yin3ru4dui4bi3`},{default:t(()=>[...c[21]||=[s(`#`,-1)]]),_:1}),c[22]||=s(`手动引入和自动引入对比`,-1)]),c[25]||=i(`h4`,null,`手动引入`,-1),o(C,{"playground-ignore":``},{default:t(()=>[...c[23]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Button `),i(`span`,{class:`hljs-keyword`},`as`),s(` VarButton, Snackbar } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui/es/button/style/index'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui/es/snackbar/style/index'`),s(`

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`handleClick`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  Snackbar(`),i(`span`,{class:`hljs-string`},`'你好!'`),s(`)
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"handleClick"`),s(`>`)]),s(`说你好`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1}),c[26]||=i(`h4`,null,`自动引入`,-1),o(C,{"playground-ignore":``},{default:t(()=>[...c[24]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`handleClick`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  Snackbar(`),i(`span`,{class:`hljs-string`},`'你好!'`),s(`)
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"handleClick"`),s(`>`)]),s(`说你好`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})])])}var y=e(c,[[`render`,v]]);export{y as default};