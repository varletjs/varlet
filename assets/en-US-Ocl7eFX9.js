import{b as c,m as i,p as s,q as n,Q as t,w as a,$ as p,e as o,h as d}from"./index-DtCrA0ro.js";const h={components:{}},u={class:"varlet-site-doc"},m={class:"card"},j={id:"Intro"},g={class:"card"},v={id:"ComponentCall"},y={class:"card"},f={id:"FunctionCall"},b={class:"card"},k={id:"Props"},w={class:"card"},C={id:"Slots"};function S(T,l,P,x,V,_){const e=o("router-link"),r=o("var-site-code-example");return d(),i("div",u,[l[16]||(l[16]=s("h1",null,"Style Provider",-1)),s("div",m,[s("h3",j,[n(e,{to:"#Intro"},{default:a(()=>[...l[0]||(l[0]=[t("#",-1)])]),_:1}),l[1]||(l[1]=t("Intro",-1))]),l[2]||(l[2]=s("p",null,[t("Style variables can be easily mounted through the StyleProvider component. The component provides two calling methods: "),s("code",null,"component calling"),t(" and "),s("code",null,"functional calling"),t(".")],-1))]),s("div",g,[s("h3",v,[n(e,{to:"#ComponentCall"},{default:a(()=>[...l[3]||(l[3]=[t("#",-1)])]),_:1}),l[4]||(l[4]=t("Component Call",-1))]),l[6]||(l[6]=s("p",null,[t("Component calls can have a scope of custom component styles, Scope contamination is avoided. Note that some elements sent outside the StyleProvider using the "),s("code",null,"teleport"),t(" will not work.")],-1)),n(r,null,{default:a(()=>[...l[5]||(l[5]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
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
      Toggle Theme
    `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-style-provider"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1)])]),_:1})]),s("div",y,[s("h3",f,[n(e,{to:"#FunctionCall"},{default:a(()=>[...l[7]||(l[7]=[t("#",-1)])]),_:1}),l[8]||(l[8]=t("Function Call",-1))]),l[9]||(l[9]=s("p",null,[t("A functional call is to update variables directly on "),s("code",null,":root"),t(", which is suitable for situations where a global update style is required. Details see "),s("a",{href:"#/en-US/themes"},"Theme Customization"),t(".")],-1))]),l[17]||(l[17]=s("h2",null,"API",-1)),s("div",b,[s("h3",k,[n(e,{to:"#Props"},{default:a(()=>[...l[10]||(l[10]=[t("#",-1)])]),_:1}),l[11]||(l[11]=t("Props",-1))]),l[12]||(l[12]=p("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>style-vars</code></td><td>CSS variables</td><td><em>Record&lt;string, string&gt;</em></td><td><code>{}</code></td></tr><tr><td><code>tag</code></td><td>Tag name</td><td><em>string</em></td><td><code>div</code></td></tr></tbody></table>",1))]),s("div",w,[s("h3",C,[n(e,{to:"#Slots"},{default:a(()=>[...l[13]||(l[13]=[t("#",-1)])]),_:1}),l[14]||(l[14]=t("Slots",-1))]),l[15]||(l[15]=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"Name"),s("th",null,"Description"),s("th",null,"SlotProps")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("code",null,"default")]),s("td",null,"Component content"),s("td",null,[s("code",null,"-")])])])],-1))])])}const $=c(h,[["render",S]]);export{$ as default};
