import{b as p,m as c,p as s,q as t,Q as l,w as n,$ as i,e as r,h as d}from"./index-BVOqiAXw.js";const h={components:{}},j={class:"varlet-site-doc"},u={class:"card"},m={id:"Intro"},g={class:"card"},v={id:"ComponentCall"},y={class:"card"},f={id:"FunctionCall"},k={class:"card"},b={id:"Props"},w={class:"card"},S={id:"Slots"};function T(C,a,V,P,x,_){const e=r("router-link"),o=r("var-site-code-example");return d(),c("div",j,[a[17]||(a[17]=s("h1",null,"Style Provider",-1)),s("div",u,[s("h3",m,[t(e,{to:"#Intro"},{default:n(()=>a[0]||(a[0]=[l("#")])),_:1}),a[1]||(a[1]=l("Intro"))]),a[2]||(a[2]=s("p",null,[l("Style variables can be easily mounted through the StyleProvider component. The component provides two calling methods: "),s("code",null,"component calling"),l(" and "),s("code",null,"functional calling"),l(".")],-1))]),s("div",g,[s("h3",v,[t(e,{to:"#ComponentCall"},{default:n(()=>a[3]||(a[3]=[l("#")])),_:1}),a[4]||(a[4]=l("Component Call"))]),a[6]||(a[6]=s("p",null,[l("Component calls can have a scope of custom component styles, Scope contamination is avoided. Note that some elements sent outside the StyleProvider using the "),s("code",null,"teleport"),l(" will not work.")],-1)),t(o,null,{default:n(()=>a[5]||(a[5]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"script"),l(),s("span",{class:"hljs-attr"},"setup"),l(">")]),s("span",{class:"javascript"},[l(`
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
      Toggle Theme
    `),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"var-button"),l(">")]),l(`
  `),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"var-style-provider"),l(">")]),l(`
`),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"template"),l(">")]),l(`
`)])],-1)])),_:1})]),s("div",y,[s("h3",f,[t(e,{to:"#FunctionCall"},{default:n(()=>a[7]||(a[7]=[l("#")])),_:1}),a[8]||(a[8]=l("Function Call"))]),a[10]||(a[10]=s("p",null,[l("A functional call is to update variables directly on "),s("code",null,":root"),l(", which is suitable for situations where a global update style is required.")],-1)),t(o,null,{default:n(()=>a[9]||(a[9]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"script"),l(),s("span",{class:"hljs-attr"},"setup"),l(">")]),s("span",{class:"javascript"},[l(`
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
  `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-button"),l(),s("span",{class:"hljs-attr"},"type"),l("="),s("span",{class:"hljs-string"},'"primary"'),l(),s("span",{class:"hljs-attr"},"block"),l(" @"),s("span",{class:"hljs-attr"},"click"),l("="),s("span",{class:"hljs-string"},'"toggleRootTheme"'),l(">")]),l("Toggle Root Theme"),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"var-button"),l(">")]),l(`
`),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"template"),l(">")]),l(`
`)])],-1)])),_:1})]),a[18]||(a[18]=s("h2",null,"API",-1)),s("div",k,[s("h3",b,[t(e,{to:"#Props"},{default:n(()=>a[11]||(a[11]=[l("#")])),_:1}),a[12]||(a[12]=l("Props"))]),a[13]||(a[13]=i("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>style-vars</code></td><td>CSS variables</td><td><em>Record&lt;string, string&gt;</em></td><td><code>{}</code></td></tr><tr><td><code>tag</code></td><td>Tag name</td><td><em>string</em></td><td><code>div</code></td></tr></tbody></table>",1))]),s("div",w,[s("h3",S,[t(e,{to:"#Slots"},{default:n(()=>a[14]||(a[14]=[l("#")])),_:1}),a[15]||(a[15]=l("Slots"))]),a[16]||(a[16]=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"Name"),s("th",null,"Description"),s("th",null,"SlotProps")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("code",null,"default")]),s("td",null,"Component content"),s("td",null,[s("code",null,"-")])])])],-1))])])}const $=p(h,[["render",T]]);export{$ as default};
