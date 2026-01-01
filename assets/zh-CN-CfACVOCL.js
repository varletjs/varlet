import{b as d,m as c,p as s,q as a,Q as l,w as n,$ as p,e as o,h as i}from"./index-DtCrA0ro.js";const h={components:{}},u={class:"varlet-site-doc"},j={class:"card"},g={id:"jie4shao4"},m={class:"card"},v={id:"zu3jian4shi4diao4yong4"},y={class:"card"},f={id:"han2shu4shi4diao4yong4"},k={class:"card"},b={id:"shu3xing4"},w={class:"card"},x={id:"cha1cao2"};function V(_,t,N,C,S,T){const e=o("router-link"),r=o("var-site-code-example");return i(),c("div",u,[t[16]||(t[16]=s("h1",null,"样式定制",-1)),s("div",j,[s("h3",g,[a(e,{to:"#jie4shao4"},{default:n(()=>[...t[0]||(t[0]=[l("#",-1)])]),_:1}),t[1]||(t[1]=l("介绍",-1))]),t[2]||(t[2]=s("p",null,[l("通过 StyleProvider 组件可以很容易的挂载样式变量，组件提供了 "),s("code",null,"组件式调用"),l(" 和 "),s("code",null,"函数式调用"),l(" 两种调用方式。")],-1))]),s("div",m,[s("h3",v,[a(e,{to:"#zu3jian4shi4diao4yong4"},{default:n(()=>[...t[3]||(t[3]=[l("#",-1)])]),_:1}),t[4]||(t[4]=l("组件式调用",-1))]),t[6]||(t[6]=s("p",null,[l("局部的定制组件样式，需要注意的是使用 "),s("code",null,"teleport"),l(" 传送到 "),s("code",null,"StyleProvider"),l(" 外的元素将不会生效。")],-1)),a(r,null,{default:n(()=>[...t[5]||(t[5]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"script"),l(),s("span",{class:"hljs-attr"},"setup"),l(">")]),s("span",{class:"javascript"},[l(`
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
`)])],-1)])]),_:1})]),s("div",y,[s("h3",f,[a(e,{to:"#han2shu4shi4diao4yong4"},{default:n(()=>[...t[7]||(t[7]=[l("#",-1)])]),_:1}),t[8]||(t[8]=l("函数式调用",-1))]),t[9]||(t[9]=s("p",null,[l("直接更新 "),s("code",null,":root"),l(" 上的样式变量，适合需要全局更新样式的情况，详情见"),s("a",{href:"#/zh-CN/themes"},"主题定制"),l("。")],-1))]),t[17]||(t[17]=s("h2",null,"API",-1)),s("div",k,[s("h3",b,[a(e,{to:"#shu3xing4"},{default:n(()=>[...t[10]||(t[10]=[l("#",-1)])]),_:1}),t[11]||(t[11]=l("属性",-1))]),t[12]||(t[12]=p("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>style-vars</code></td><td>CSS 变量</td><td><em>Record&lt;string, string&gt;</em></td><td><code>{}</code></td></tr><tr><td><code>tag</code></td><td>自定义标签名</td><td><em>string</em></td><td><code>div</code></td></tr></tbody></table>",1))]),s("div",w,[s("h3",x,[a(e,{to:"#cha1cao2"},{default:n(()=>[...t[13]||(t[13]=[l("#",-1)])]),_:1}),t[14]||(t[14]=l("插槽",-1))]),t[15]||(t[15]=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"插槽名"),s("th",null,"说明"),s("th",null,"参数")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("code",null,"default")]),s("td",null,"组件内容"),s("td",null,[s("code",null,"-")])])])],-1))])])}const z=d(h,[["render",V]]);export{z as default};
