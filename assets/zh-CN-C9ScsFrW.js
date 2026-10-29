import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s,m as c}from"./runtime-core.esm-bundler-DUghkl6b.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`jie4shao4`},p={class:`card`},m={id:`zu3jian4shi4diao4yong4`},h={class:`card`},g={id:`han2shu4shi4diao4yong4`},_={class:`card`},v={id:`shu3xing4`},y={class:`card`},b={id:`cha1cao2`};function x(e,l,x,S,C,w){let T=n(`router-link`),E=n(`var-site-code-example`);return r(),a(`div`,u,[l[16]||=i(`h1`,null,`样式定制`,-1),i(`div`,d,[i(`h3`,f,[o(T,{to:`#jie4shao4`},{default:t(()=>[...l[0]||=[s(`#`,-1)]]),_:1}),l[1]||=s(`介绍`,-1)]),l[2]||=i(`p`,null,[s(`通过 StyleProvider 组件可以很容易的挂载样式变量，组件提供了 `),i(`code`,null,`组件式调用`),s(` 和 `),i(`code`,null,`函数式调用`),s(` 两种调用方式。`)],-1)]),i(`div`,p,[i(`h3`,m,[o(T,{to:`#zu3jian4shi4diao4yong4`},{default:t(()=>[...l[3]||=[s(`#`,-1)]]),_:1}),l[4]||=s(`组件式调用`,-1)]),l[6]||=i(`p`,null,[s(`局部的定制组件样式，需要注意的是使用 `),i(`code`,null,`teleport`),s(` 传送到 `),i(`code`,null,`StyleProvider`),s(` 外的元素将不会生效。`)],-1),o(E,null,{default:t(()=>[...l[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref, reactive } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` state = reactive({
  `),i(`span`,{class:`hljs-attr`},`score`),s(`: `),i(`span`,{class:`hljs-number`},`5`),s(`,
  `),i(`span`,{class:`hljs-attr`},`license`),s(`: `),i(`span`,{class:`hljs-literal`},`true`),s(`,
})

`),i(`span`,{class:`hljs-keyword`},`const`),s(` successTheme = {
  `),i(`span`,{class:`hljs-string`},`'--rate-primary-color'`),s(`: `),i(`span`,{class:`hljs-string`},`'var(--color-success)'`),s(`,
  `),i(`span`,{class:`hljs-string`},`'--button-primary-color'`),s(`: `),i(`span`,{class:`hljs-string`},`'var(--color-success)'`),s(`,
  `),i(`span`,{class:`hljs-string`},`'--switch-handle-active-background'`),s(`: `),i(`span`,{class:`hljs-string`},`'var(--color-success)'`),s(`,
  `),i(`span`,{class:`hljs-string`},`'--switch-track-active-background'`),s(`: `),i(`span`,{class:`hljs-string`},`'var(--color-success)'`),s(`,
}

`),i(`span`,{class:`hljs-keyword`},`const`),s(` styleVars = ref(`),i(`span`,{class:`hljs-literal`},`null`),s(`)

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`toggleTheme`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  styleVars.value = styleVars.value ? `),i(`span`,{class:`hljs-literal`},`null`),s(` : successTheme
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-style-provider`),s(),i(`span`,{class:`hljs-attr`},`:style-vars`),s(`=`),i(`span`,{class:`hljs-string`},`"styleVars"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-rate`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"state.score"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-switch`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"state.license"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(`
      `),i(`span`,{class:`hljs-attr`},`style`),s(`=`),i(`span`,{class:`hljs-string`},`"margin-top: 10px"`),s(`
      `),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(`
      `),i(`span`,{class:`hljs-attr`},`block`),s(`
      @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"toggleTheme"`),s(`
    >`)]),s(`
      切换样式变量
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-style-provider`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,h,[i(`h3`,g,[o(T,{to:`#han2shu4shi4diao4yong4`},{default:t(()=>[...l[7]||=[s(`#`,-1)]]),_:1}),l[8]||=s(`函数式调用`,-1)]),l[9]||=i(`p`,null,[s(`直接更新 `),i(`code`,null,`:root`),s(` 上的样式变量，适合需要全局更新样式的情况，详情见`),i(`a`,{href:`#/zh-CN/themes`},`主题定制`),s(`。`)],-1)]),l[17]||=i(`h2`,null,`API`,-1),i(`div`,_,[i(`h3`,v,[o(T,{to:`#shu3xing4`},{default:t(()=>[...l[10]||=[s(`#`,-1)]]),_:1}),l[11]||=s(`属性`,-1)]),l[12]||=c(`<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>style-vars</code></td><td>CSS 变量</td><td><em>Record&lt;string, string&gt;</em></td><td><code>{}</code></td></tr><tr><td><code>tag</code></td><td>自定义标签名</td><td><em>string</em></td><td><code>div</code></td></tr></tbody></table>`,1)]),i(`div`,y,[i(`h3`,b,[o(T,{to:`#cha1cao2`},{default:t(()=>[...l[13]||=[s(`#`,-1)]]),_:1}),l[14]||=s(`插槽`,-1)]),l[15]||=i(`table`,null,[i(`thead`,null,[i(`tr`,null,[i(`th`,null,`插槽名`),i(`th`,null,`说明`),i(`th`,null,`参数`)])]),i(`tbody`,null,[i(`tr`,null,[i(`td`,null,[i(`code`,null,`default`)]),i(`td`,null,`组件内容`),i(`td`,null,[i(`code`,null,`-`)])])])],-1)])])}var S=e(l,[[`render`,x]]);export{S as default};