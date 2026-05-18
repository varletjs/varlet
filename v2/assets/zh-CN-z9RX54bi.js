import{_ as d,b as c,e as r,m as h,p as s,q as a,w as l,P as t,Z as o}from"./index-vwO9GBzB.js";const i={components:{}},p={class:"varlet-site-doc"},j=s("h1",null,"样式定制",-1),u={class:"card"},m={id:"jie4shao4"},_=s("p",null,[t("组件库通过 "),s("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties"},"css 变量"),t(" 来组织样式，每个组件都有对应的样式变量， 您可以通过 css 文件覆盖的方式直接替换根节点上的样式变量, 或者使用 StyleProvider 组件。")],-1),b={class:"card"},g={id:"ji1ben3yang4shi4bian4liang4"},y=s("p",null,"以下是组件库一些基本的样式变量。",-1),f=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-selector-pseudo"},":root"),t(` {
  --`),s("span",{class:"hljs-attribute"},"font-size"),t("-xs: "),s("span",{class:"hljs-number"},"10px"),t(`;
  --`),s("span",{class:"hljs-attribute"},"font-size"),t("-sm: "),s("span",{class:"hljs-number"},"12px"),t(`;
  --`),s("span",{class:"hljs-attribute"},"font-size"),t("-md: "),s("span",{class:"hljs-number"},"14px"),t(`;
  --`),s("span",{class:"hljs-attribute"},"font-size"),t("-lg: "),s("span",{class:"hljs-number"},"16px"),t(`;
  --`),s("span",{class:"hljs-attribute"},"icon"),t("-size-xs: "),s("span",{class:"hljs-number"},"16px"),t(`;
  --`),s("span",{class:"hljs-attribute"},"icon"),t("-size-sm: "),s("span",{class:"hljs-number"},"18px"),t(`;
  --`),s("span",{class:"hljs-attribute"},"icon"),t("-size-md: "),s("span",{class:"hljs-number"},"20px"),t(`;
  --`),s("span",{class:"hljs-attribute"},"icon"),t("-size-lg: "),s("span",{class:"hljs-number"},"22px"),t(`;
  --`),s("span",{class:"hljs-attribute"},"color"),t("-"),s("span",{class:"hljs-selector-tag"},"body"),t(": "),s("span",{class:"hljs-number"},"#fff"),t(`;
  --`),s("span",{class:"hljs-attribute"},"color"),t("-text: "),s("span",{class:"hljs-number"},"#333"),t(`;
  --`),s("span",{class:"hljs-attribute"},"color"),t("-primary: "),s("span",{class:"hljs-number"},"#3a7afe"),t(`;
  --`),s("span",{class:"hljs-attribute"},"color"),t("-info: "),s("span",{class:"hljs-number"},"#00afef"),t(`;
  --`),s("span",{class:"hljs-attribute"},"color"),t("-success: "),s("span",{class:"hljs-number"},"#00c48f"),t(`;
  --`),s("span",{class:"hljs-attribute"},"color"),t("-warning: "),s("span",{class:"hljs-number"},"#ff9f00"),t(`;
  --`),s("span",{class:"hljs-attribute"},"color"),t("-danger: "),s("span",{class:"hljs-number"},"#f44336"),t(`;
  --`),s("span",{class:"hljs-attribute"},"color"),t("-disabled: "),s("span",{class:"hljs-number"},"#e0e0e0"),t(`;
  --`),s("span",{class:"hljs-attribute"},"color"),t("-text-disabled: "),s("span",{class:"hljs-number"},"#aaa"),t(`;
  --cubic-bezier: `),s("span",{class:"hljs-built_in"},"cubic-bezier"),t("("),s("span",{class:"hljs-number"},"0.25"),t(", "),s("span",{class:"hljs-number"},"0.8"),t(", "),s("span",{class:"hljs-number"},"0.5"),t(", "),s("span",{class:"hljs-number"},"1"),t(`);
}
`)])],-1),v={class:"card"},x={id:"yun4xing2shi2xiu1gai3yang4shi4"},k=s("p",null,[t("可能您有在程序运行时替换样式的需求，比如一键换肤之类的，组件库提供了 StyleProvider 组件来辅助管理样式， 组件提供了 "),s("code",null,"组件式调用"),t(" 和 "),s("code",null,"函数式调用"),t(" 两种调用方式。")],-1),z={class:"card"},w={id:"zu3jian4shi4diao4yong4"},S=s("p",null,[t("组件式调用可以有范围性的定制组件样式，避免了全局污染，需要注意是有些使用 "),s("code",null,"teleport"),t(" 传送到 "),s("code",null,"StyleProvider"),t(" 外的元素将不会生效。")],-1),V=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref, reactive } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(` state = reactive({
  `),s("span",{class:"hljs-attr"},"score"),t(": "),s("span",{class:"hljs-number"},"5"),t(`,
  `),s("span",{class:"hljs-attr"},"license"),t(": "),s("span",{class:"hljs-literal"},"true"),t(`,
})

`),s("span",{class:"hljs-keyword"},"const"),t(` successTheme = {
  `),s("span",{class:"hljs-string"},"'--rate-primary-color'"),t(": "),s("span",{class:"hljs-string"},"'var(--color-success)'"),t(`,
  `),s("span",{class:"hljs-string"},"'--button-primary-color'"),t(": "),s("span",{class:"hljs-string"},"'var(--color-success)'"),t(`,
  `),s("span",{class:"hljs-string"},"'--switch-handle-active-background'"),t(": "),s("span",{class:"hljs-string"},"'var(--color-success)'"),t(`,
  `),s("span",{class:"hljs-string"},"'--switch-track-active-background'"),t(": "),s("span",{class:"hljs-string"},"'var(--color-success)'"),t(`,
}

`),s("span",{class:"hljs-keyword"},"const"),t(" styleVars = ref("),s("span",{class:"hljs-literal"},"null"),t(`)

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),t(),s("span",{class:"hljs-title"},"toggleTheme"),t("("),s("span",{class:"hljs-params"}),t(") ")]),t(`{
  styleVars.value = styleVars.value ? `),s("span",{class:"hljs-literal"},"null"),t(` : successTheme
}
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-style-provider"),t(),s("span",{class:"hljs-attr"},":style-vars"),t("="),s("span",{class:"hljs-string"},'"styleVars"'),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-rate"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"state.score"'),t(" />")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-switch"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"state.license"'),t(" />")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(`
      `),s("span",{class:"hljs-attr"},"style"),t("="),s("span",{class:"hljs-string"},'"margin-top: 10px"'),t(`
      `),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"primary"'),t(`
      `),s("span",{class:"hljs-attr"},"block"),t(`
      @`),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"toggleTheme"'),t(`
    >`)]),t(`
      切换样式变量
    `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-style-provider"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),T={class:"card"},C={id:"han2shu4shi4diao4yong4"},P=s("p",null,[t("函数式的调用是直接更新 "),s("code",null,":root"),t(" 上的变量，适合需要全局更新样式的情况。")],-1),N=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { StyleProvider } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

`),s("span",{class:"hljs-keyword"},"let"),t(" rootStyleVars = "),s("span",{class:"hljs-literal"},"null"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(` darkTheme = {
  `),s("span",{class:"hljs-string"},"'--color-primary'"),t(": "),s("span",{class:"hljs-string"},"'#3f51b5'"),t(`
}

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),t(),s("span",{class:"hljs-title"},"toggleRootTheme"),t("("),s("span",{class:"hljs-params"}),t(") ")]),t(`{
  rootStyleVars = rootStyleVars ? `),s("span",{class:"hljs-literal"},"null"),t(` : darkTheme
  StyleProvider(rootStyleVars)
}
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"primary"'),t(),s("span",{class:"hljs-attr"},"block"),t(" @"),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"toggleRootTheme"'),t(">")]),t("切换根节点样式变量"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),$=s("h2",null,"API",-1),B={class:"card"},R={id:"shu3xing4"},q=o("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>style-vars</code></td><td>CSS 变量</td><td><em>Record&lt;string, string&gt;</em></td><td><code>{}</code></td></tr><tr><td><code>tag</code></td><td>自定义标签名</td><td><em>string</em></td><td><code>div</code></td></tr></tbody></table>",1),A={class:"card"},E={id:"cha1cao2"},I=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"插槽名"),s("th",null,"说明"),s("th",null,"参数")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("code",null,"default")]),s("td",null,"组件内容"),s("td",null,[s("code",null,"-")])])])],-1),U={class:"card"},W={id:"yang4shi4bian4liang4"},Z=o("<p>以下为组件库通用的样式变量，各组件独有的样式变量请查询各组件文档底部的样式变量表格。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--font-size-xs</code></td><td><code>10px</code></td></tr><tr><td><code>--font-size-sm</code></td><td><code>12px</code></td></tr><tr><td><code>--font-size-md</code></td><td><code>14px</code></td></tr><tr><td><code>--font-size-lg</code></td><td><code>16px</code></td></tr><tr><td><code>--icon-size-xs</code></td><td><code>16px</code></td></tr><tr><td><code>--icon-size-sm</code></td><td><code>18px</code></td></tr><tr><td><code>--icon-size-md</code></td><td><code>20px</code></td></tr><tr><td><code>--icon-size-lg</code></td><td><code>22px</code></td></tr><tr><td><code>--color-body</code></td><td><code>#fff</code></td></tr><tr><td><code>--color-text</code></td><td><code>#333</code></td></tr><tr><td><code>--color-primary</code></td><td><code>#3a7afe</code></td></tr><tr><td><code>--color-info</code></td><td><code>#00afef</code></td></tr><tr><td><code>--color-success</code></td><td><code>#00c48f</code></td></tr><tr><td><code>--color-warning</code></td><td><code>#ff9f00</code></td></tr><tr><td><code>--color-danger</code></td><td><code>#f44336</code></td></tr><tr><td><code>--color-disabled</code></td><td><code>#e0e0e0</code></td></tr><tr><td><code>--color-text-disabled</code></td><td><code>#aaa</code></td></tr><tr><td><code>--opacity-disabled</code></td><td><code>0.6</code></td></tr><tr><td><code>--cubic-bezier</code></td><td><code>cubic-bezier(0.25, 0.8, 0.5, 1)</code></td></tr><tr><td><code>--shadow-key-umbra-opacity</code></td><td><code>rgba(0, 0, 0, 0.2)</code></td></tr><tr><td><code>--shadow-key-penumbra-opacity</code></td><td><code>rgba(0, 0, 0, 0.14)</code></td></tr><tr><td><code>--shadow-key-ambient-opacity</code></td><td><code>rgba(0, 0, 0, 0.12)</code></td></tr></tbody></table>",2);function D(F,G,H,J,K,L){const e=c("router-link"),n=c("var-site-code-example");return r(),h("div",p,[j,s("div",u,[s("h3",m,[a(e,{to:"#jie4shao4"},{default:l(()=>[t("#")]),_:1}),t("介绍")]),_]),s("div",b,[s("h3",g,[a(e,{to:"#ji1ben3yang4shi4bian4liang4"},{default:l(()=>[t("#")]),_:1}),t("基本样式变量")]),y,a(n,{"playground-ignore":""},{default:l(()=>[f]),_:1})]),s("div",v,[s("h3",x,[a(e,{to:"#yun4xing2shi2xiu1gai3yang4shi4"},{default:l(()=>[t("#")]),_:1}),t("运行时修改样式")]),k]),s("div",z,[s("h3",w,[a(e,{to:"#zu3jian4shi4diao4yong4"},{default:l(()=>[t("#")]),_:1}),t("组件式调用")]),S,a(n,null,{default:l(()=>[V]),_:1})]),s("div",T,[s("h3",C,[a(e,{to:"#han2shu4shi4diao4yong4"},{default:l(()=>[t("#")]),_:1}),t("函数式调用")]),P,a(n,null,{default:l(()=>[N]),_:1})]),$,s("div",B,[s("h3",R,[a(e,{to:"#shu3xing4"},{default:l(()=>[t("#")]),_:1}),t("属性")]),q]),s("div",A,[s("h3",E,[a(e,{to:"#cha1cao2"},{default:l(()=>[t("#")]),_:1}),t("插槽")]),I]),s("div",U,[s("h3",W,[a(e,{to:"#yang4shi4bian4liang4"},{default:l(()=>[t("#")]),_:1}),t("样式变量")]),Z])])}const O=d(i,[["render",D]]);export{O as default};
