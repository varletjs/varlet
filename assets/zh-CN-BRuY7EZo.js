import{b as c,m as p,p as s,q as n,Q as l,w as t,$ as d,e as o,h}from"./index-DH7vciNd.js";const i={components:{}},j={class:"varlet-site-doc"},u={class:"card"},g={id:"jie4shao4"},m={class:"card"},v={id:"zu3jian4shi4diao4yong4"},y={class:"card"},k={id:"han2shu4shi4diao4yong4"},f={class:"card"},b={id:"shu3xing4"},w={class:"card"},V={id:"cha1cao2"};function S(x,a,T,_,N,P){const e=o("router-link"),r=o("var-site-code-example");return h(),p("div",j,[a[17]||(a[17]=s("h1",null,"样式定制",-1)),s("div",u,[s("h3",g,[n(e,{to:"#jie4shao4"},{default:t(()=>a[0]||(a[0]=[l("#")])),_:1}),a[1]||(a[1]=l("介绍"))]),a[2]||(a[2]=s("p",null,[l("通过 StyleProvider 组件可以很容易的挂载样式变量，组件提供了 "),s("code",null,"组件式调用"),l(" 和 "),s("code",null,"函数式调用"),l(" 两种调用方式。")],-1))]),s("div",m,[s("h3",v,[n(e,{to:"#zu3jian4shi4diao4yong4"},{default:t(()=>a[3]||(a[3]=[l("#")])),_:1}),a[4]||(a[4]=l("组件式调用"))]),a[6]||(a[6]=s("p",null,[l("组件式调用范围性的定制组件样式，需要注意是有些使用 "),s("code",null,"teleport"),l(" 传送到 "),s("code",null,"StyleProvider"),l(" 外的元素将不会生效。")],-1)),n(r,null,{default:t(()=>a[5]||(a[5]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"script"),l(),s("span",{class:"hljs-attr"},"setup"),l(">")]),s("span",{class:"javascript"},[l(`
`),s("span",{class:"hljs-keyword"},"import"),l(" { ref, reactive } "),s("span",{class:"hljs-keyword"},"from"),l(),s("span",{class:"hljs-string"},"'vue'"),l(`

`),s("span",{class:"hljs-keyword"},"const"),l(` state = reactive({
  `),s("span",{class:"hljs-attr"},"score"),l(": "),s("span",{class:"hljs-number"},"5"),l(`,
  `),s("span",{class:"hljs-attr"},"license"),l(": "),s("span",{class:"hljs-literal"},"true"),l(`,
})

`),s("span",{class:"hljs-keyword"},"const"),l(` successTheme = {
  `),s("span",{class:"hljs-string"},"'--rate-primary-color'"),l(": "),s("span",{class:"hljs-string"},"'var(--color-success)'"),l(`,
  `),s("span",{class:"hljs-string"},"'--button-primary-color'"),l(": "),s("span",{class:"hljs-string"},"'var(--color-success)'"),l(`,
  `),s("span",{class:"hljs-string"},"'--switch-handle-active-background'"),l(": "),s("span",{class:"hljs-string"},"'var(--color-success)'"),l(`,
  `),s("span",{class:"hljs-string"},"'--switch-track-active-background'"),l(": "),s("span",{class:"hljs-string"},"'var(--color-success)'"),l(`,
}

`),s("span",{class:"hljs-keyword"},"const"),l(" styleVars = ref("),s("span",{class:"hljs-literal"},"null"),l(`)

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title"},"toggleTheme"),l("("),s("span",{class:"hljs-params"}),l(") ")]),l(`{
  styleVars.value = styleVars.value ? `),s("span",{class:"hljs-literal"},"null"),l(` : successTheme
}
`)]),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"script"),l(">")]),l(`

`),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"template"),l(">")]),l(`
  `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-style-provider"),l(),s("span",{class:"hljs-attr"},":style-vars"),l("="),s("span",{class:"hljs-string"},'"styleVars"'),l(">")]),l(`
    `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-rate"),l(),s("span",{class:"hljs-attr"},"v-model"),l("="),s("span",{class:"hljs-string"},'"state.score"'),l(" />")]),l(`
    `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-switch"),l(),s("span",{class:"hljs-attr"},"v-model"),l("="),s("span",{class:"hljs-string"},'"state.license"'),l(" />")]),l(`
    `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-button"),l(`
      `),s("span",{class:"hljs-attr"},"style"),l("="),s("span",{class:"hljs-string"},'"margin-top: 10px"'),l(`
      `),s("span",{class:"hljs-attr"},"type"),l("="),s("span",{class:"hljs-string"},'"primary"'),l(`
      `),s("span",{class:"hljs-attr"},"block"),l(`
      @`),s("span",{class:"hljs-attr"},"click"),l("="),s("span",{class:"hljs-string"},'"toggleTheme"'),l(`
    >`)]),l(`
      切换样式变量
    `),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"var-button"),l(">")]),l(`
  `),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"var-style-provider"),l(">")]),l(`
`),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"template"),l(">")]),l(`
`)])],-1)])),_:1})]),s("div",y,[s("h3",k,[n(e,{to:"#han2shu4shi4diao4yong4"},{default:t(()=>a[7]||(a[7]=[l("#")])),_:1}),a[8]||(a[8]=l("函数式调用"))]),a[10]||(a[10]=s("p",null,[l("函数式的调用直接更新 "),s("code",null,":root"),l(" 上的变量，适合需要全局更新样式的情况。")],-1)),n(r,null,{default:t(()=>a[9]||(a[9]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"script"),l(),s("span",{class:"hljs-attr"},"setup"),l(">")]),s("span",{class:"javascript"},[l(`
`),s("span",{class:"hljs-keyword"},"import"),l(" { StyleProvider } "),s("span",{class:"hljs-keyword"},"from"),l(),s("span",{class:"hljs-string"},"'@varlet/ui'"),l(`

`),s("span",{class:"hljs-keyword"},"let"),l(" rootStyleVars = "),s("span",{class:"hljs-literal"},"null"),l(`

`),s("span",{class:"hljs-keyword"},"const"),l(` darkTheme = {
  `),s("span",{class:"hljs-string"},"'--color-primary'"),l(": "),s("span",{class:"hljs-string"},"'var(--color-info)'"),l(`
}

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title"},"toggleRootTheme"),l("("),s("span",{class:"hljs-params"}),l(") ")]),l(`{
  rootStyleVars = rootStyleVars ? `),s("span",{class:"hljs-literal"},"null"),l(` : darkTheme
  StyleProvider(rootStyleVars)
}
`)]),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"script"),l(">")]),l(`

`),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"template"),l(">")]),l(`
  `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-button"),l(),s("span",{class:"hljs-attr"},"type"),l("="),s("span",{class:"hljs-string"},'"primary"'),l(),s("span",{class:"hljs-attr"},"block"),l(" @"),s("span",{class:"hljs-attr"},"click"),l("="),s("span",{class:"hljs-string"},'"toggleRootTheme"'),l(">")]),l("切换根节点样式变量"),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"var-button"),l(">")]),l(`
`),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"template"),l(">")]),l(`
`)])],-1)])),_:1})]),a[18]||(a[18]=s("h2",null,"API",-1)),s("div",f,[s("h3",b,[n(e,{to:"#shu3xing4"},{default:t(()=>a[11]||(a[11]=[l("#")])),_:1}),a[12]||(a[12]=l("属性"))]),a[13]||(a[13]=d("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>style-vars</code></td><td>CSS 变量</td><td><em>Record&lt;string, string&gt;</em></td><td><code>{}</code></td></tr><tr><td><code>tag</code></td><td>自定义标签名</td><td><em>string</em></td><td><code>div</code></td></tr></tbody></table>",1))]),s("div",w,[s("h3",V,[n(e,{to:"#cha1cao2"},{default:t(()=>a[14]||(a[14]=[l("#")])),_:1}),a[15]||(a[15]=l("插槽"))]),a[16]||(a[16]=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"插槽名"),s("th",null,"说明"),s("th",null,"参数")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("code",null,"default")]),s("td",null,"组件内容"),s("td",null,[s("code",null,"-")])])])],-1))])])}const C=c(i,[["render",S]]);export{C as default};
