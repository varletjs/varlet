import{_ as r,b as o,e as d,m as i,p as s,q as a,w as e,P as t,Z as c}from"./index-vwO9GBzB.js";const p={components:{}},h={class:"varlet-site-doc"},u=s("h1",null,"Style Provider",-1),j={class:"card"},m={id:"Intro"},b=s("p",null,[t("Component libraries organize styles through "),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"},"CSS variables"),t(". Each component has a corresponding style variable, you can directly replace the style variable on the root node by overriding it with a CSS file. Or use StyleProvider components.")],-1),_={class:"card"},y={id:"BasicStyleVariable"},g=s("p",null,"Here are some basic style variables for the component library",-1),f=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-selector-pseudo"},":root"),t(` {
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
`)])],-1),v={class:"card"},S={id:"ModifyStylesAtRuntime"},k=s("p",null,[t("Maybe you have a need to replace the style while the program is runtime, like a one-click skin change or something. The component library provides a StyleProvider component to assist in managing styles, Component provides' "),s("code",null,"component call"),t(" and "),s("code",null,"function call"),t(" and two invocation modes.")],-1),x={class:"card"},w={id:"ComponentCall"},z=s("p",null,[t("Component calls can have a scope of custom component styles, Scope contamination is avoided. Note that some elements sent outside the StyleProvider using the "),s("code",null,"teleport"),t(" will not work.")],-1),C=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
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
`)])],-1),V={class:"card"},T={id:"FunctionCall"},P=s("p",null,[t("A functional call is to update variables directly on "),s("code",null,":root"),t(", which is suitable for situations where a global update style is required.")],-1),R=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
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
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"primary"'),t(),s("span",{class:"hljs-attr"},"block"),t(" @"),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"toggleRootTheme"'),t(">")]),t("Toggle Root Theme"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),B=s("h2",null,"API",-1),N={class:"card"},A={id:"Props"},D=c("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>style-vars</code></td><td>CSS variables</td><td><em>Record&lt;string, string&gt;</em></td><td><code>{}</code></td></tr><tr><td><code>tag</code></td><td>Tag name</td><td><em>string</em></td><td><code>div</code></td></tr></tbody></table>",1),I={class:"card"},M={id:"Slots"},$=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"Name"),s("th",null,"Description"),s("th",null,"SlotProps")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("code",null,"default")]),s("td",null,"Component content"),s("td",null,[s("code",null,"-")])])])],-1),q={class:"card"},F={id:"StyleVariables"},U=c("<p>The following is a style variable universal in the module library. Please check the style variable table at the bottom of each component document with unique style variables in each component.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--font-size-xs</code></td><td><code>10px</code></td></tr><tr><td><code>--font-size-sm</code></td><td><code>12px</code></td></tr><tr><td><code>--font-size-md</code></td><td><code>14px</code></td></tr><tr><td><code>--font-size-lg</code></td><td><code>16px</code></td></tr><tr><td><code>--icon-size-xs</code></td><td><code>16px</code></td></tr><tr><td><code>--icon-size-sm</code></td><td><code>18px</code></td></tr><tr><td><code>--icon-size-md</code></td><td><code>20px</code></td></tr><tr><td><code>--icon-size-lg</code></td><td><code>22px</code></td></tr><tr><td><code>--color-body</code></td><td><code>#fff</code></td></tr><tr><td><code>--color-text</code></td><td><code>#333</code></td></tr><tr><td><code>--color-primary</code></td><td><code>#3a7afe</code></td></tr><tr><td><code>--color-info</code></td><td><code>#00afef</code></td></tr><tr><td><code>--color-success</code></td><td><code>#00c48f</code></td></tr><tr><td><code>--color-warning</code></td><td><code>#ff9f00</code></td></tr><tr><td><code>--color-danger</code></td><td><code>#f44336</code></td></tr><tr><td><code>--color-disabled</code></td><td><code>#e0e0e0</code></td></tr><tr><td><code>--color-text-disabled</code></td><td><code>#aaa</code></td></tr><tr><td><code>--opacity-disabled</code></td><td><code>0.6</code></td></tr><tr><td><code>--cubic-bezier</code></td><td><code>cubic-bezier(0.25, 0.8, 0.5, 1)</code></td></tr><tr><td><code>--shadow-key-umbra-opacity</code></td><td><code>rgba(0, 0, 0, 0.2)</code></td></tr><tr><td><code>--shadow-key-penumbra-opacity</code></td><td><code>rgba(0, 0, 0, 0.14)</code></td></tr><tr><td><code>--shadow-key-ambient-opacity</code></td><td><code>rgba(0, 0, 0, 0.12)</code></td></tr></tbody></table>",2);function E(H,O,W,Z,G,J){const l=o("router-link"),n=o("var-site-code-example");return d(),i("div",h,[u,s("div",j,[s("h3",m,[a(l,{to:"#Intro"},{default:e(()=>[t("#")]),_:1}),t("Intro")]),b]),s("div",_,[s("h3",y,[a(l,{to:"#BasicStyleVariable"},{default:e(()=>[t("#")]),_:1}),t("Basic Style Variable")]),g,a(n,{"playground-ignore":""},{default:e(()=>[f]),_:1})]),s("div",v,[s("h3",S,[a(l,{to:"#ModifyStylesAtRuntime"},{default:e(()=>[t("#")]),_:1}),t("Modify Styles At Runtime")]),k]),s("div",x,[s("h3",w,[a(l,{to:"#ComponentCall"},{default:e(()=>[t("#")]),_:1}),t("Component Call")]),z,a(n,null,{default:e(()=>[C]),_:1})]),s("div",V,[s("h3",T,[a(l,{to:"#FunctionCall"},{default:e(()=>[t("#")]),_:1}),t("Function Call")]),P,a(n,null,{default:e(()=>[R]),_:1})]),B,s("div",N,[s("h3",A,[a(l,{to:"#Props"},{default:e(()=>[t("#")]),_:1}),t("Props")]),D]),s("div",I,[s("h3",M,[a(l,{to:"#Slots"},{default:e(()=>[t("#")]),_:1}),t("Slots")]),$]),s("div",q,[s("h3",F,[a(l,{to:"#StyleVariables"},{default:e(()=>[t("#")]),_:1}),t("Style Variables")]),U])])}const L=r(p,[["render",E]]);export{L as default};
