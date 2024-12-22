import{_ as o,m as r,p as s,q as l,w as t,Q as a,a1 as h,b as c,e as p}from"./index-Lyg21wbv.js";const d={components:{}},i={class:"varlet-site-doc"},j=s("h1",null,"样式定制",-1),u={class:"card"},_={id:"jie4shao4"},g=s("p",null,[a("通过 StyleProvider 组件可以很容易的挂载样式变量，组件提供了 "),s("code",null,"组件式调用"),a(" 和 "),s("code",null,"函数式调用"),a(" 两种调用方式。")],-1),m={class:"card"},v={id:"zu3jian4shi4diao4yong4"},y=s("p",null,[a("组件式调用范围性的定制组件样式，需要注意是有些使用 "),s("code",null,"teleport"),a(" 传送到 "),s("code",null,"StyleProvider"),a(" 外的元素将不会生效。")],-1),k=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { ref, reactive } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(` state = reactive({
  `),s("span",{class:"hljs-attr"},"score"),a(": "),s("span",{class:"hljs-number"},"5"),a(`,
  `),s("span",{class:"hljs-attr"},"license"),a(": "),s("span",{class:"hljs-literal"},"true"),a(`,
})

`),s("span",{class:"hljs-keyword"},"const"),a(` successTheme = {
  `),s("span",{class:"hljs-string"},"'--rate-primary-color'"),a(": "),s("span",{class:"hljs-string"},"'var(--color-success)'"),a(`,
  `),s("span",{class:"hljs-string"},"'--button-primary-color'"),a(": "),s("span",{class:"hljs-string"},"'var(--color-success)'"),a(`,
  `),s("span",{class:"hljs-string"},"'--switch-handle-active-background'"),a(": "),s("span",{class:"hljs-string"},"'var(--color-success)'"),a(`,
  `),s("span",{class:"hljs-string"},"'--switch-track-active-background'"),a(": "),s("span",{class:"hljs-string"},"'var(--color-success)'"),a(`,
}

`),s("span",{class:"hljs-keyword"},"const"),a(" styleVars = ref("),s("span",{class:"hljs-literal"},"null"),a(`)

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"toggleTheme"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
  styleVars.value = styleVars.value ? `),s("span",{class:"hljs-literal"},"null"),a(` : successTheme
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-style-provider"),a(),s("span",{class:"hljs-attr"},":style-vars"),a("="),s("span",{class:"hljs-string"},'"styleVars"'),a(">")]),a(`
    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-rate"),a(),s("span",{class:"hljs-attr"},"v-model"),a("="),s("span",{class:"hljs-string"},'"state.score"'),a(" />")]),a(`
    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-switch"),a(),s("span",{class:"hljs-attr"},"v-model"),a("="),s("span",{class:"hljs-string"},'"state.license"'),a(" />")]),a(`
    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-button"),a(`
      `),s("span",{class:"hljs-attr"},"style"),a("="),s("span",{class:"hljs-string"},'"margin-top: 10px"'),a(`
      `),s("span",{class:"hljs-attr"},"type"),a("="),s("span",{class:"hljs-string"},'"primary"'),a(`
      `),s("span",{class:"hljs-attr"},"block"),a(`
      @`),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"toggleTheme"'),a(`
    >`)]),a(`
      切换样式变量
    `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-style-provider"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),f={class:"card"},b={id:"han2shu4shi4diao4yong4"},w=s("p",null,[a("函数式的调用直接更新 "),s("code",null,":root"),a(" 上的变量，适合需要全局更新样式的情况。")],-1),V=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { StyleProvider } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`

`),s("span",{class:"hljs-keyword"},"let"),a(" rootStyleVars = "),s("span",{class:"hljs-literal"},"null"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(` darkTheme = {
  `),s("span",{class:"hljs-string"},"'--color-primary'"),a(": "),s("span",{class:"hljs-string"},"'var(--color-info)'"),a(`
}

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"toggleRootTheme"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
  rootStyleVars = rootStyleVars ? `),s("span",{class:"hljs-literal"},"null"),a(` : darkTheme
  StyleProvider(rootStyleVars)
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-button"),a(),s("span",{class:"hljs-attr"},"type"),a("="),s("span",{class:"hljs-string"},'"primary"'),a(),s("span",{class:"hljs-attr"},"block"),a(" @"),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"toggleRootTheme"'),a(">")]),a("切换根节点样式变量"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),S=s("h2",null,"API",-1),x={class:"card"},T={id:"shu3xing4"},N=h("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>style-vars</code></td><td>CSS 变量</td><td><em>Record&lt;string, string&gt;</em></td><td><code>{}</code></td></tr><tr><td><code>tag</code></td><td>自定义标签名</td><td><em>string</em></td><td><code>div</code></td></tr></tbody></table>",1),P={class:"card"},C={id:"cha1cao2"},$=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"插槽名"),s("th",null,"说明"),s("th",null,"参数")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("code",null,"default")]),s("td",null,"组件内容"),s("td",null,[s("code",null,"-")])])])],-1);function z(B,R,q,A,E,I){const n=c("router-link"),e=c("var-site-code-example");return p(),r("div",i,[j,s("div",u,[s("h3",_,[l(n,{to:"#jie4shao4"},{default:t(()=>[a("#")]),_:1}),a("介绍")]),g]),s("div",m,[s("h3",v,[l(n,{to:"#zu3jian4shi4diao4yong4"},{default:t(()=>[a("#")]),_:1}),a("组件式调用")]),y,l(e,null,{default:t(()=>[k]),_:1})]),s("div",f,[s("h3",b,[l(n,{to:"#han2shu4shi4diao4yong4"},{default:t(()=>[a("#")]),_:1}),a("函数式调用")]),w,l(e,null,{default:t(()=>[V]),_:1})]),S,s("div",x,[s("h3",T,[l(n,{to:"#shu3xing4"},{default:t(()=>[a("#")]),_:1}),a("属性")]),N]),s("div",P,[s("h3",C,[l(n,{to:"#cha1cao2"},{default:t(()=>[a("#")]),_:1}),a("插槽")]),$])])}const D=o(d,[["render",z]]);export{D as default};
