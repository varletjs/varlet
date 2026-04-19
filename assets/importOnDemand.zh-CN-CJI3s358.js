import{L as e,N as t,W as n,c as r,d as i,g as a,h as o}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as s}from"./_plugin-vue_export-helper-V-yks4gF.js";var c={components:{}},l={class:`varlet-site-doc`},u={class:`card`},d={id:`jie4shao4`},f={class:`card`},p={id:`zi4dong4yin3ru4`},m={class:`card`},h={id:`shou3dong4yin3ru4`},g={class:`card`},_={id:`shou3dong4yin3ru4he2zi4dong4yin3ru4dui4bi3`};function v(s,c,v,y,b,x){let S=e(`router-link`),C=e(`var-site-code-example`);return t(),i(`div`,l,[c[27]||=r(`h1`,null,`按需引入`,-1),r(`div`,u,[r(`h3`,d,[a(S,{to:`#jie4shao4`},{default:n(()=>[...c[0]||=[o(`#`,-1)]]),_:1}),c[1]||=o(`介绍`,-1)]),c[2]||=r(`p`,null,`按需引入避免了组件的全量导入，可以有效的减少发布包的大小。`,-1)]),r(`div`,f,[r(`h3`,p,[a(S,{to:`#zi4dong4yin3ru4`},{default:n(()=>[...c[3]||=[o(`#`,-1)]]),_:1}),c[4]||=o(`自动引入`,-1)]),c[9]||=r(`p`,null,[o(`通过插件 `),r(`a`,{href:`https://github.com/antfu/unplugin-vue-components`},`unplugin-vue-components`),o(` 和 `),r(`a`,{href:`https://github.com/antfu/unplugin-auto-import`},`unplugin-auto-import`),o(` 实现组件自动按需导入，这也是我们最推荐的方式。`)],-1),c[10]||=r(`h4`,null,`安装插件`,-1),a(C,{"playground-ignore":``},{default:n(()=>[...c[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-meta`},`#`),r(`span`,{class:`bash`},` npm`),o(`
npm i @varlet/import-resolver unplugin-vue-components unplugin-auto-import -D
`),r(`span`,{class:`hljs-meta`},`
#`),r(`span`,{class:`bash`},` yarn`),o(`
yarn add @varlet/import-resolver unplugin-vue-components unplugin-auto-import -D
`),r(`span`,{class:`hljs-meta`},`
#`),r(`span`,{class:`bash`},` pnpm`),o(`
pnpm add @varlet/import-resolver unplugin-vue-components unplugin-auto-import -D
`)])],-1)]]),_:1}),c[11]||=r(`h4`,null,`Vite`,-1),a(C,{"playground-ignore":``},{default:n(()=>[...c[6]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-comment`},`// vite.config.js`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` vue `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@vitejs/plugin-vue'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` components `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'unplugin-vue-components/vite'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` autoImport `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'unplugin-auto-import/vite'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { VarletImportResolver } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/import-resolver'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { defineConfig } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vite'`),o(`

`),r(`span`,{class:`hljs-keyword`},`export`),o(),r(`span`,{class:`hljs-keyword`},`default`),o(` defineConfig({
  `),r(`span`,{class:`hljs-attr`},`plugins`),o(`: [
    vue(),
    components({
      `),r(`span`,{class:`hljs-attr`},`resolvers`),o(`: [VarletImportResolver()]
    }),
    autoImport({
      `),r(`span`,{class:`hljs-attr`},`resolvers`),o(`: [VarletImportResolver({ `),r(`span`,{class:`hljs-attr`},`autoImport`),o(`: `),r(`span`,{class:`hljs-literal`},`true`),o(` })]
    })
  ]
})
`)])],-1)]]),_:1}),c[12]||=r(`h4`,null,`Vue CLI`,-1),a(C,{"playground-ignore":``},{default:n(()=>[...c[7]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-comment`},`// vue.config.js`),o(`
`),r(`span`,{class:`hljs-keyword`},`const`),o(` Components = `),r(`span`,{class:`hljs-built_in`},`require`),o(`(`),r(`span`,{class:`hljs-string`},`'unplugin-vue-components/webpack'`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` AutoImport = `),r(`span`,{class:`hljs-built_in`},`require`),o(`(`),r(`span`,{class:`hljs-string`},`'unplugin-auto-import/webpack'`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` { VarletImportResolver } = `),r(`span`,{class:`hljs-built_in`},`require`),o(`(`),r(`span`,{class:`hljs-string`},`'@varlet/import-resolver'`),o(`)

`),r(`span`,{class:`hljs-built_in`},`module`),o(`.exports = {
  `),r(`span`,{class:`hljs-attr`},`configureWebpack`),o(`: {
    `),r(`span`,{class:`hljs-attr`},`plugins`),o(`: [
      Components.default({
        `),r(`span`,{class:`hljs-attr`},`resolvers`),o(`: [VarletImportResolver()]
      }),
      AutoImport.default({
        `),r(`span`,{class:`hljs-attr`},`resolvers`),o(`: [VarletImportResolver({ `),r(`span`,{class:`hljs-attr`},`autoImport`),o(`: `),r(`span`,{class:`hljs-literal`},`true`),o(` })]
      })
    ]
  }
}
`)])],-1)]]),_:1}),c[13]||=r(`h4`,null,`Typescript 配置注意`,-1),c[14]||=r(`p`,null,[o(`为了得到良好的 IDE 语法高亮，请确保上述两个插件生成的类型声明文件被 `),r(`code`,null,`typescript`),o(` 识别，可在 `),r(`code`,null,`tsconfig.json`),o(` 中进行如下配置:`)],-1),a(C,{"playground-ignore":``},{default:n(()=>[...c[8]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[o(`{
  `),r(`span`,{class:`hljs-attr`},`"include"`),o(`: [`),r(`span`,{class:`hljs-string`},`"auto-imports.d.ts"`),o(`, `),r(`span`,{class:`hljs-string`},`"components.d.ts"`),o(`]
}
`)])],-1)]]),_:1})]),r(`div`,m,[r(`h3`,h,[a(S,{to:`#shou3dong4yin3ru4`},{default:n(()=>[...c[15]||=[o(`#`,-1)]]),_:1}),c[16]||=o(`手动引入`,-1)]),c[19]||=r(`p`,null,[o(`每一个组件都是一个 `),r(`code`,null,`Vue插件`),o(`，并由 `),r(`code`,null,`组件逻辑`),o(` 和 `),r(`code`,null,`样式文件`),o(` 组成，手动引入的使用方式如下。`)],-1),a(C,{"playground-ignore":``},{default:n(()=>[...c[17]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-keyword`},`import`),o(` App `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'./App.vue'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { createApp } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Button } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui/es/button/style/index'`),o(`

createApp(App).use(Button)
`)])],-1)]]),_:1}),c[20]||=r(`p`,null,`或`,-1),a(C,{"playground-ignore":``},{default:n(()=>[...c[18]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Button `),r(`span`,{class:`hljs-keyword`},`as`),o(` VarButton } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui/es/button/style/index'`),o(`
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`说你好`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,g,[r(`h3`,_,[a(S,{to:`#shou3dong4yin3ru4he2zi4dong4yin3ru4dui4bi3`},{default:n(()=>[...c[21]||=[o(`#`,-1)]]),_:1}),c[22]||=o(`手动引入和自动引入对比`,-1)]),c[25]||=r(`h4`,null,`手动引入`,-1),a(C,{"playground-ignore":``},{default:n(()=>[...c[23]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Button `),r(`span`,{class:`hljs-keyword`},`as`),o(` VarButton, Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui/es/button/style/index'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui/es/snackbar/style/index'`),o(`

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`handleClick`),o(`(`),r(`span`,{class:`hljs-params`}),o(`) `)]),o(`{
  Snackbar(`),r(`span`,{class:`hljs-string`},`'你好!'`),o(`)
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"handleClick"`),o(`>`)]),o(`说你好`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1}),c[26]||=r(`h4`,null,`自动引入`,-1),a(C,{"playground-ignore":``},{default:n(()=>[...c[24]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`handleClick`),o(`(`),r(`span`,{class:`hljs-params`}),o(`) `)]),o(`{
  Snackbar(`),r(`span`,{class:`hljs-string`},`'你好!'`),o(`)
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"handleClick"`),o(`>`)]),o(`说你好`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})])])}var y=s(c,[[`render`,v]]);export{y as default};