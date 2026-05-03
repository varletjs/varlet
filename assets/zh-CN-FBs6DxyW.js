import{L as e,N as t,W as n,c as r,d as i,g as a,h as o,m as s}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as c}from"./_plugin-vue_export-helper-V-yks4gF.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`jie4shao4`},p={class:`card`},m={id:`zu3jian4shi4diao4yong4`},h={class:`card`},g={id:`han2shu4shi4diao4yong4`},_={class:`card`},v={id:`shu3xing4`},y={class:`card`},b={id:`cha1cao2`};function x(c,l,x,S,C,w){let T=e(`router-link`),E=e(`var-site-code-example`);return t(),i(`div`,u,[l[16]||=r(`h1`,null,`样式定制`,-1),r(`div`,d,[r(`h3`,f,[a(T,{to:`#jie4shao4`},{default:n(()=>[...l[0]||=[o(`#`,-1)]]),_:1}),l[1]||=o(`介绍`,-1)]),l[2]||=r(`p`,null,[o(`通过 StyleProvider 组件可以很容易的挂载样式变量，组件提供了 `),r(`code`,null,`组件式调用`),o(` 和 `),r(`code`,null,`函数式调用`),o(` 两种调用方式。`)],-1)]),r(`div`,p,[r(`h3`,m,[a(T,{to:`#zu3jian4shi4diao4yong4`},{default:n(()=>[...l[3]||=[o(`#`,-1)]]),_:1}),l[4]||=o(`组件式调用`,-1)]),l[6]||=r(`p`,null,[o(`局部的定制组件样式，需要注意的是使用 `),r(`code`,null,`teleport`),o(` 传送到 `),r(`code`,null,`StyleProvider`),o(` 外的元素将不会生效。`)],-1),a(E,null,{default:n(()=>[...l[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref, reactive } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` state = reactive({
  `),r(`span`,{class:`hljs-attr`},`score`),o(`: `),r(`span`,{class:`hljs-number`},`5`),o(`,
  `),r(`span`,{class:`hljs-attr`},`license`),o(`: `),r(`span`,{class:`hljs-literal`},`true`),o(`,
})

`),r(`span`,{class:`hljs-keyword`},`const`),o(` successTheme = {
  `),r(`span`,{class:`hljs-string`},`'--rate-primary-color'`),o(`: `),r(`span`,{class:`hljs-string`},`'var(--color-success)'`),o(`,
  `),r(`span`,{class:`hljs-string`},`'--button-primary-color'`),o(`: `),r(`span`,{class:`hljs-string`},`'var(--color-success)'`),o(`,
  `),r(`span`,{class:`hljs-string`},`'--switch-handle-active-background'`),o(`: `),r(`span`,{class:`hljs-string`},`'var(--color-success)'`),o(`,
  `),r(`span`,{class:`hljs-string`},`'--switch-track-active-background'`),o(`: `),r(`span`,{class:`hljs-string`},`'var(--color-success)'`),o(`,
}

`),r(`span`,{class:`hljs-keyword`},`const`),o(` styleVars = ref(`),r(`span`,{class:`hljs-literal`},`null`),o(`)

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`toggleTheme`),o(`(`),r(`span`,{class:`hljs-params`}),o(`) `)]),o(`{
  styleVars.value = styleVars.value ? `),r(`span`,{class:`hljs-literal`},`null`),o(` : successTheme
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-style-provider`),o(),r(`span`,{class:`hljs-attr`},`:style-vars`),o(`=`),r(`span`,{class:`hljs-string`},`"styleVars"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-rate`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"state.score"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-switch`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"state.license"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(`
      `),r(`span`,{class:`hljs-attr`},`style`),o(`=`),r(`span`,{class:`hljs-string`},`"margin-top: 10px"`),o(`
      `),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(`
      `),r(`span`,{class:`hljs-attr`},`block`),o(`
      @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"toggleTheme"`),o(`
    >`)]),o(`
      切换样式变量
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-style-provider`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,h,[r(`h3`,g,[a(T,{to:`#han2shu4shi4diao4yong4`},{default:n(()=>[...l[7]||=[o(`#`,-1)]]),_:1}),l[8]||=o(`函数式调用`,-1)]),l[9]||=r(`p`,null,[o(`直接更新 `),r(`code`,null,`:root`),o(` 上的样式变量，适合需要全局更新样式的情况，详情见`),r(`a`,{href:`#/zh-CN/themes`},`主题定制`),o(`。`)],-1)]),l[17]||=r(`h2`,null,`API`,-1),r(`div`,_,[r(`h3`,v,[a(T,{to:`#shu3xing4`},{default:n(()=>[...l[10]||=[o(`#`,-1)]]),_:1}),l[11]||=o(`属性`,-1)]),l[12]||=s(`<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>style-vars</code></td><td>CSS 变量</td><td><em>Record&lt;string, string&gt;</em></td><td><code>{}</code></td></tr><tr><td><code>tag</code></td><td>自定义标签名</td><td><em>string</em></td><td><code>div</code></td></tr></tbody></table>`,1)]),r(`div`,y,[r(`h3`,b,[a(T,{to:`#cha1cao2`},{default:n(()=>[...l[13]||=[o(`#`,-1)]]),_:1}),l[14]||=o(`插槽`,-1)]),l[15]||=r(`table`,null,[r(`thead`,null,[r(`tr`,null,[r(`th`,null,`插槽名`),r(`th`,null,`说明`),r(`th`,null,`参数`)])]),r(`tbody`,null,[r(`tr`,null,[r(`td`,null,[r(`code`,null,`default`)]),r(`td`,null,`组件内容`),r(`td`,null,[r(`code`,null,`-`)])])])],-1)])])}var S=c(l,[[`render`,x]]);export{S as default};