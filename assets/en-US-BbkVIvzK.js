import{b as c,m as p,p as t,q as l,Q as s,w as n,$ as o,e as r,h as i}from"./index-DtCrA0ro.js";const h={components:{}},j={class:"varlet-site-doc"},m={class:"card"},u={id:"Intro"},g={class:"card"},f={id:"BasicUsage"},v={class:"card"},y={id:"CustomizeTotalRating"},b={class:"card"},w={id:"CustomizeRatingIconStyle"},k={class:"card"},S={id:"CustomizeRatingIconSizeAndGap"},z={class:"card"},T={id:"AllowHalfRating"},C={class:"card"},I={id:"DisabledAndReadonly"},R={class:"card"},V={id:"CanBeCleared"},x={class:"card"},A={id:"ListenEvent"},B={class:"card"},E={id:"Validate"},U={class:"card"},D={id:"ValidateWithZod"},W={class:"card"},Z={id:"props"},$={class:"card"},H={id:"Events"},N={class:"card"},G={id:"StyleVariables"};function L(P,a,O,q,Q,F){const e=r("router-link"),d=r("var-site-code-example");return i(),p("div",j,[a[50]||(a[50]=t("h1",null,"Rate",-1)),t("div",m,[t("h3",u,[l(e,{to:"#Intro"},{default:n(()=>[...a[0]||(a[0]=[s("#",-1)])]),_:1}),a[1]||(a[1]=s("Intro",-1))]),a[2]||(a[2]=t("p",null,"Used to rate things.",-1))]),t("div",g,[t("h3",f,[l(e,{to:"#BasicUsage"},{default:n(()=>[...a[3]||(a[3]=[s("#",-1)])]),_:1}),a[4]||(a[4]=s("Basic Usage",-1))]),l(d,null,{default:n(()=>[...a[5]||(a[5]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" score = ref("),t("span",{class:"hljs-number"},"3"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-rate"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"score"'),s("/>")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-rate"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"score"'),s(),t("span",{class:"hljs-attr"},"icon"),s("="),t("span",{class:"hljs-string"},'"thumb-up"'),s(),t("span",{class:"hljs-attr"},"empty-icon"),s("="),t("span",{class:"hljs-string"},'"thumb-up-outline"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),t("div",v,[t("h3",y,[l(e,{to:"#CustomizeTotalRating"},{default:n(()=>[...a[6]||(a[6]=[s("#",-1)])]),_:1}),a[7]||(a[7]=s("Customize Total Rating",-1))]),a[9]||(a[9]=t("p",null,[s("Set the total rating through the "),t("code",null,"count"),s(" attribute.")],-1)),l(d,null,{default:n(()=>[...a[8]||(a[8]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" score = ref("),t("span",{class:"hljs-number"},"3"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-rate"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"score"'),s(),t("span",{class:"hljs-attr"},":count"),s("="),t("span",{class:"hljs-string"},'"8"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),t("div",b,[t("h3",w,[l(e,{to:"#CustomizeRatingIconStyle"},{default:n(()=>[...a[10]||(a[10]=[s("#",-1)])]),_:1}),a[11]||(a[11]=s("Customize Rating Icon Style",-1))]),a[13]||(a[13]=t("p",null,[s("Set the selected and unselected icons through the "),t("code",null,"icon"),s(" and "),t("code",null,"empty-icon"),s(" properties. Set the selected and unselected colors through the "),t("code",null,"color"),s(" and "),t("code",null,"empty-color"),s(" properties.")],-1)),l(d,null,{default:n(()=>[...a[12]||(a[12]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" score = ref("),t("span",{class:"hljs-number"},"3"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-rate"),s(`
    `),t("span",{class:"hljs-attr"},"icon"),s("="),t("span",{class:"hljs-string"},'"heart"'),s(` 
    `),t("span",{class:"hljs-attr"},"empty-icon"),s("="),t("span",{class:"hljs-string"},'"heart-outline"'),s(` 
    `),t("span",{class:"hljs-attr"},"color"),s("="),t("span",{class:"hljs-string"},'"red"'),s(` 
    `),t("span",{class:"hljs-attr"},"empty-color"),s("="),t("span",{class:"hljs-string"},'"red"'),s(`
    `),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"score"'),s(`
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),t("div",k,[t("h3",S,[l(e,{to:"#CustomizeRatingIconSizeAndGap"},{default:n(()=>[...a[14]||(a[14]=[s("#",-1)])]),_:1}),a[15]||(a[15]=s("Customize Rating Icon Size And Gap",-1))]),a[17]||(a[17]=t("p",null,[s("Use the "),t("code",null,"size"),s(" property to set the size of the score icon. Set the interval between scores via the "),t("code",null,"gap"),s(" property.")],-1)),l(d,null,{default:n(()=>[...a[16]||(a[16]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" score = ref("),t("span",{class:"hljs-number"},"3"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-rate"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"score"'),s(),t("span",{class:"hljs-attr"},":size"),s("="),t("span",{class:"hljs-string"},'"28"'),s(),t("span",{class:"hljs-attr"},":gap"),s("="),t("span",{class:"hljs-string"},'"8"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),t("div",z,[t("h3",T,[l(e,{to:"#AllowHalfRating"},{default:n(()=>[...a[18]||(a[18]=[s("#",-1)])]),_:1}),a[19]||(a[19]=s("Allow Half Rating",-1))]),a[21]||(a[21]=t("p",null,[s("The "),t("code",null,"half"),s(" attribute is used to set the rating to semi selective, and the "),t("code",null,"half-icon"),s(" attribute is used to set the style of semi selective.")],-1)),l(d,null,{default:n(()=>[...a[20]||(a[20]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" score = ref("),t("span",{class:"hljs-number"},"3.5"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-rate"),s(),t("span",{class:"hljs-attr"},"half"),s(),t("span",{class:"hljs-attr"},":count"),s("="),t("span",{class:"hljs-string"},'"8"'),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"score"'),s(" />")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-rate"),s(`
    `),t("span",{class:"hljs-attr"},"half"),s(`
    `),t("span",{class:"hljs-attr"},"icon"),s("="),t("span",{class:"hljs-string"},'"heart"'),s(`
    `),t("span",{class:"hljs-attr"},"half-icon"),s("="),t("span",{class:"hljs-string"},'"heart-half-full"'),s(`
    `),t("span",{class:"hljs-attr"},"empty-icon"),s("="),t("span",{class:"hljs-string"},'"heart-outline"'),s(`
    `),t("span",{class:"hljs-attr"},"color"),s("="),t("span",{class:"hljs-string"},'"red"'),s(`
    `),t("span",{class:"hljs-attr"},":count"),s("="),t("span",{class:"hljs-string"},'"8"'),s(`
    `),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"score"'),s(`
  />`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),t("div",C,[t("h3",I,[l(e,{to:"#DisabledAndReadonly"},{default:n(()=>[...a[22]||(a[22]=[s("#",-1)])]),_:1}),a[23]||(a[23]=s("Disabled And Readonly",-1))]),a[25]||(a[25]=t("p",null,[s("The "),t("code",null,"disabled"),s(" property sets the score to the no-click state, and "),t("code",null,"disabled-color"),s(" sets the icon color when disabled. The score is set to read-only via the "),t("code",null,"readonly"),s(" property.")],-1)),l(d,null,{default:n(()=>[...a[24]||(a[24]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" score = ref("),t("span",{class:"hljs-number"},"3"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-rate"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"score"'),s(),t("span",{class:"hljs-attr"},"disabled"),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-rate"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"score"'),s(),t("span",{class:"hljs-attr"},"readonly"),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),t("div",R,[t("h3",V,[l(e,{to:"#CanBeCleared"},{default:n(()=>[...a[26]||(a[26]=[s("#",-1)])]),_:1}),a[27]||(a[27]=s("Can Be Cleared",-1))]),a[29]||(a[29]=t("p",null,[s("The "),t("code",null,"clearable"),s(" property allows users to clear score.")],-1)),l(d,null,{default:n(()=>[...a[28]||(a[28]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" score = ref("),t("span",{class:"hljs-number"},"3.5"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-rate"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"score"'),s(),t("span",{class:"hljs-attr"},"clearable"),s(),t("span",{class:"hljs-attr"},"half"),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),t("div",x,[t("h3",A,[l(e,{to:"#ListenEvent"},{default:n(()=>[...a[30]||(a[30]=[s("#",-1)])]),_:1}),a[31]||(a[31]=s("Listen Event",-1))]),a[33]||(a[33]=t("p",null,[s("Other interaction logic is completed by calling the "),t("code",null,"change"),s(" event.")],-1)),l(d,null,{default:n(()=>[...a[32]||(a[32]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" score = ref("),t("span",{class:"hljs-number"},"3"),s(`)

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"handleChange"),s("("),t("span",{class:"hljs-params"},"score"),s(") ")]),s(`{
  Snackbar({
    `),t("span",{class:"hljs-attr"},"content"),s(": "),t("span",{class:"hljs-string"},[s("`click "),t("span",{class:"hljs-subst"},"${score}"),s("`")]),s(`,
    `),t("span",{class:"hljs-attr"},"position"),s(": "),t("span",{class:"hljs-string"},"'top'"),s(`
  })
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-rate"),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"score"'),s(" @"),t("span",{class:"hljs-attr"},"change"),s("="),t("span",{class:"hljs-string"},'"handleChange"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),t("div",B,[t("h3",E,[l(e,{to:"#Validate"},{default:n(()=>[...a[34]||(a[34]=[s("#",-1)])]),_:1}),a[35]||(a[35]=s("Validate",-1))]),a[37]||(a[37]=t("p",null,[s("The values are validated by passing in an array of validators. If the validator returns "),t("code",null,"true"),s(", the validation passes. Other values are converted to text as a user prompt.")],-1)),l(d,null,{default:n(()=>[...a[36]||(a[36]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" score = ref("),t("span",{class:"hljs-number"},"3"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-rate"),s(),t("span",{class:"hljs-attr"},":rules"),s("="),t("span",{class:"hljs-string"},`"v => v > 2 || 'It has to be greater than 2'"`),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},'"score"'),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),t("div",U,[t("h3",D,[l(e,{to:"#ValidateWithZod"},{default:n(()=>[...a[38]||(a[38]=[s("#",-1)])]),_:1}),a[39]||(a[39]=s("Validate With Zod",-1))]),l(d,null,{default:n(()=>[...a[40]||(a[40]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { z } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'zod'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" score = ref("),t("span",{class:"hljs-number"},"3"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-rate"),s(),t("span",{class:"hljs-attr"},":rules"),s("="),t("span",{class:"hljs-string"},`"z.number().min(3, 'It has to be greater than 2')"`),s(),t("span",{class:"hljs-attr"},"v-model"),s("="),t("span",{class:"hljs-string"},"'score'"),s("/>")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a[51]||(a[51]=t("h2",null,"API",-1)),t("div",W,[t("h3",Z,[l(e,{to:"#props"},{default:n(()=>[...a[41]||(a[41]=[s("#",-1)])]),_:1}),a[42]||(a[42]=s("props",-1))]),a[43]||(a[43]=o('<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The current rating</td><td><em>number</em></td><td><code>0</code></td></tr><tr><td><code>count</code></td><td>Total rating</td><td><em>number | string</em></td><td><code>5</code></td></tr><tr><td><code>color</code></td><td>The color of the icon when selected</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>The icon style when the entire icon is selected</td><td><em>string</em></td><td><code>star</code></td></tr><tr><td><code>empty-color</code></td><td>The color of the icon when unchecked</td><td><em>string</em></td><td><code>#bdbdbd</code></td></tr><tr><td><code>empty-icon</code></td><td>Style of the icon when unchecked</td><td><em>string</em></td><td><code>star-outline</code></td></tr><tr><td><code>size</code></td><td>Icon size, default unit is <code>px</code></td><td><em>number | string</em></td><td><code>-</code></td></tr><tr><td><code>gap</code></td><td>Icon spacing, default unit is <code>px</code></td><td><em>number | string</em></td><td><code>-</code></td></tr><tr><td><code>half</code></td><td>Whether half selection is allowed</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>half-icon</code></td><td>The half-selected icon style only works if <code>half</code> is <code>true</code></td><td><em>string</em></td><td><code>star-half-full</code></td></tr><tr><td><code>namespace</code></td><td>Icon namespace</td><td><em>string</em></td><td><code>var-icon</code></td></tr><tr><td><code>empty-icon-namespace</code></td><td>Empty icon namespace</td><td><em>string</em></td><td><code>var-icon</code></td></tr><tr><td><code>half-icon-namespace</code></td><td>Half icon namespace</td><td><em>string</em></td><td><code>var-icon</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable rating</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled-color</code></td><td>The color of the icon when disabling grading is only effective when <code>disabled</code> is <code>true</code> and has higher priority than <code>color</code> and <code>empty-color</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>readonly</code></td><td>Whether it is in readonly status. The rating cannot be modified in readonly status.</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>clearable</code></td><td>whether to allow to clear</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code></td><td>Whether to use water ripple</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>rules</code></td><td>Validation rules, return <code>true</code> to indicate verification passes, other types of values ​​will be converted into text as user prompts. <a href="#/en-US/zodValidation">Zod validation</a> is supported since <code>3.5.0</code></td><td><em>((v: number) =&gt; any) | ZodType | Array&lt;((v: number) =&gt; any) | ZodType&gt;</em></td><td><code>-</code></td></tr></tbody></table>',1))]),t("div",$,[t("h3",H,[l(e,{to:"#Events"},{default:n(()=>[...a[44]||(a[44]=[s("#",-1)])]),_:1}),a[45]||(a[45]=s("Events",-1))]),a[46]||(a[46]=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"Event"),t("th",null,"Description"),t("th",null,"Arguments")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("code",null,"change")]),t("td",null,"Triggered when the rating changes"),t("td",null,[t("code",null,"value: number")])])])],-1))]),t("div",N,[t("h3",G,[l(e,{to:"#StyleVariables"},{default:n(()=>[...a[47]||(a[47]=[s("#",-1)])]),_:1}),a[48]||(a[48]=s("Style Variables",-1))]),a[49]||(a[49]=o('<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--rate-color</code></td><td><code>var(--color-text)</code></td></tr><tr><td><code>--rate-size</code></td><td><code>24px</code></td></tr><tr><td><code>--rate-primary-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--rate-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--rate-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--rate-action-padding</code></td><td><code>4px</code></td></tr></tbody></table>',2))])])}const K=c(h,[["render",L]]);export{K as default};
