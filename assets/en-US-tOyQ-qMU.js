import{_ as d,m as r,p as a,q as t,w as e,Q as s,a1 as o,b as c,e as h}from"./index-p72OOaSl.js";const p={components:{}},i={class:"varlet-site-doc"},j=a("h1",null,"Rate",-1),m={class:"card"},u={id:"Intro"},g=a("p",null,"Used to rate things.",-1),_={class:"card"},f={id:"BasicUsage"},v=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" score = ref("),a("span",{class:"hljs-number"},"3"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s("/>")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s(),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"thumb-up"'),s(),a("span",{class:"hljs-attr"},"empty-icon"),s("="),a("span",{class:"hljs-string"},'"thumb-up-outline"'),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y={class:"card"},b={id:"CustomizeTotalRating"},w=a("p",null,[s("Set the total rating through the "),a("code",null,"count"),s(" attribute.")],-1),k=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" score = ref("),a("span",{class:"hljs-number"},"3"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s(),a("span",{class:"hljs-attr"},":count"),s("="),a("span",{class:"hljs-string"},'"8"'),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),S={class:"card"},z={id:"CustomizeRatingIconStyle"},T=a("p",null,[s("Set the selected and unselected icons through the "),a("code",null,"icon"),s(" and "),a("code",null,"empty-icon"),s(" properties. Set the selected and unselected colors through the "),a("code",null,"color"),s(" and "),a("code",null,"empty-color"),s(" properties.")],-1),C=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" score = ref("),a("span",{class:"hljs-number"},"3"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(`
    `),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"heart"'),s(` 
    `),a("span",{class:"hljs-attr"},"empty-icon"),s("="),a("span",{class:"hljs-string"},'"heart-outline"'),s(` 
    `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"red"'),s(` 
    `),a("span",{class:"hljs-attr"},"empty-color"),s("="),a("span",{class:"hljs-string"},'"red"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),I={class:"card"},R={id:"CustomizeRatingIconSizeAndGap"},V=a("p",null,[s("Use the "),a("code",null,"size"),s(" property to set the size of the score icon. Set the interval between scores via the "),a("code",null,"gap"),s(" property.")],-1),x=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" score = ref("),a("span",{class:"hljs-number"},"3"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"28"'),s(),a("span",{class:"hljs-attr"},":gap"),s("="),a("span",{class:"hljs-string"},'"8"'),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),A={class:"card"},B={id:"AllowHalfRating"},E=a("p",null,[s("The "),a("code",null,"half"),s(" attribute is used to set the rating to semi selective, and the "),a("code",null,"half-icon"),s(" attribute is used to set the style of semi selective.")],-1),U=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" score = ref("),a("span",{class:"hljs-number"},"3.5"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},"half"),s(),a("span",{class:"hljs-attr"},":count"),s("="),a("span",{class:"hljs-string"},'"8"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(`
    `),a("span",{class:"hljs-attr"},"half"),s(`
    `),a("span",{class:"hljs-attr"},"icon"),s("="),a("span",{class:"hljs-string"},'"heart"'),s(`
    `),a("span",{class:"hljs-attr"},"half-icon"),s("="),a("span",{class:"hljs-string"},'"heart-half-full"'),s(`
    `),a("span",{class:"hljs-attr"},"empty-icon"),s("="),a("span",{class:"hljs-string"},'"heart-outline"'),s(`
    `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"red"'),s(`
    `),a("span",{class:"hljs-attr"},":count"),s("="),a("span",{class:"hljs-string"},'"8"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),D={class:"card"},W={id:"DisabledAndReadonly"},Z=a("p",null,[s("The "),a("code",null,"disabled"),s(" property sets the score to the no-click state, and "),a("code",null,"disabled-color"),s(" sets the icon color when disabled. The score is set to read-only via the "),a("code",null,"readonly"),s(" property.")],-1),H=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" score = ref("),a("span",{class:"hljs-number"},"3"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s(),a("span",{class:"hljs-attr"},"disabled"),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s(),a("span",{class:"hljs-attr"},"readonly"),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),$={class:"card"},N={id:"CanBeCleared"},G=a("p",null,[s("The "),a("code",null,"clearable"),s(" property allows users to clear score.")],-1),L=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" score = ref("),a("span",{class:"hljs-number"},"3.5"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s(),a("span",{class:"hljs-attr"},"clearable"),s(),a("span",{class:"hljs-attr"},"half"),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),P={class:"card"},O={id:"ListenEvent"},q=a("p",null,[s("Other interaction logic is completed by calling the "),a("code",null,"change"),s(" event.")],-1),Q=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" score = ref("),a("span",{class:"hljs-number"},"3"),s(`)

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleChange"),s("("),a("span",{class:"hljs-params"},"score"),s(") ")]),s(`{
  Snackbar({
    `),a("span",{class:"hljs-attr"},"content"),s(": "),a("span",{class:"hljs-string"},[s("`click "),a("span",{class:"hljs-subst"},"${score}"),s("`")]),s(`,
    `),a("span",{class:"hljs-attr"},"position"),s(": "),a("span",{class:"hljs-string"},"'top'"),s(`
  })
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s(" @"),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"handleChange"'),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),F={class:"card"},J={id:"Validate"},K=a("p",null,[s("The values are validated by passing in an array of validators. If the validator returns "),a("code",null,"true"),s(", the validation passes. Other values are converted to text as a user prompt.")],-1),M=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" score = ref("),a("span",{class:"hljs-number"},"3"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"v => v > 2 || 'It has to be greater than 2'"`),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"score"'),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),X={class:"card"},Y={id:"ValidateWithZod"},ss=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { z } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'zod'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" score = ref("),a("span",{class:"hljs-number"},"3"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-rate"),s(),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"z.number().min(3, 'It has to be greater than 2')"`),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},"'score'"),s("/>")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),as=a("h2",null,"API",-1),ts={class:"card"},es={id:"props"},ls=o('<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The current rating</td><td><em>number</em></td><td><code>0</code></td></tr><tr><td><code>count</code></td><td>Total rating</td><td><em>number | string</em></td><td><code>5</code></td></tr><tr><td><code>color</code></td><td>The color of the icon when selected</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>The icon style when the entire icon is selected</td><td><em>string</em></td><td><code>star</code></td></tr><tr><td><code>empty-color</code></td><td>The color of the icon when unchecked</td><td><em>string</em></td><td><code>#bdbdbd</code></td></tr><tr><td><code>empty-icon</code></td><td>Style of the icon when unchecked</td><td><em>string</em></td><td><code>star-outline</code></td></tr><tr><td><code>size</code></td><td>Icon size, default unit is <code>px</code></td><td><em>number | string</em></td><td><code>-</code></td></tr><tr><td><code>gap</code></td><td>Icon spacing, default unit is <code>px</code></td><td><em>number | string</em></td><td><code>-</code></td></tr><tr><td><code>half</code></td><td>Whether half selection is allowed</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>half-icon</code></td><td>The half-selected icon style only works if <code>half</code> is <code>true</code></td><td><em>string</em></td><td><code>star-half-full</code></td></tr><tr><td><code>namespace</code></td><td>Icon namespace</td><td><em>string</em></td><td><code>var-icon</code></td></tr><tr><td><code>empty-icon-namespace</code></td><td>Empty icon namespace</td><td><em>string</em></td><td><code>var-icon</code></td></tr><tr><td><code>half-icon-namespace</code></td><td>Half icon namespace</td><td><em>string</em></td><td><code>var-icon</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable rating</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled-color</code></td><td>The color of the icon when disabling grading is only effective when <code>disabled</code> is <code>true</code> and has higher priority than <code>color</code> and <code>empty-color</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>readonly</code></td><td>Whether it is in readonly status. The rating cannot be modified in readonly status.</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>clearable</code></td><td>whether to allow to clear</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code></td><td>Whether to use water ripple</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>rules</code></td><td>Validation rules, return <code>true</code> to indicate verification passes, other types of values ​​will be converted into text as user prompts. <a href="#/en-US/zodValidation">Zod validation</a> is supported since <code>3.5.0</code></td><td><em>((v: number) =&gt; any) | ZodType | Array&lt;((v: number) =&gt; any) | ZodType&gt;</em></td><td><code>-</code></td></tr></tbody></table>',1),ns={class:"card"},cs={id:"Events"},os=a("table",null,[a("thead",null,[a("tr",null,[a("th",null,"Event"),a("th",null,"Description"),a("th",null,"Arguments")])]),a("tbody",null,[a("tr",null,[a("td",null,[a("code",null,"change")]),a("td",null,"Triggered when the rating changes"),a("td",null,[a("code",null,"value: number")])])])],-1),ds={class:"card"},rs={id:"StyleVariables"},hs=o('<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--rate-color</code></td><td><code>var(--color-text)</code></td></tr><tr><td><code>--rate-size</code></td><td><code>24px</code></td></tr><tr><td><code>--rate-primary-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--rate-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--rate-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--rate-action-padding</code></td><td><code>4px</code></td></tr></tbody></table>',2);function ps(is,js,ms,us,gs,_s){const l=c("router-link"),n=c("var-site-code-example");return h(),r("div",i,[j,a("div",m,[a("h3",u,[t(l,{to:"#Intro"},{default:e(()=>[s("#")]),_:1}),s("Intro")]),g]),a("div",_,[a("h3",f,[t(l,{to:"#BasicUsage"},{default:e(()=>[s("#")]),_:1}),s("Basic Usage")]),t(n,null,{default:e(()=>[v]),_:1})]),a("div",y,[a("h3",b,[t(l,{to:"#CustomizeTotalRating"},{default:e(()=>[s("#")]),_:1}),s("Customize Total Rating")]),w,t(n,null,{default:e(()=>[k]),_:1})]),a("div",S,[a("h3",z,[t(l,{to:"#CustomizeRatingIconStyle"},{default:e(()=>[s("#")]),_:1}),s("Customize Rating Icon Style")]),T,t(n,null,{default:e(()=>[C]),_:1})]),a("div",I,[a("h3",R,[t(l,{to:"#CustomizeRatingIconSizeAndGap"},{default:e(()=>[s("#")]),_:1}),s("Customize Rating Icon Size And Gap")]),V,t(n,null,{default:e(()=>[x]),_:1})]),a("div",A,[a("h3",B,[t(l,{to:"#AllowHalfRating"},{default:e(()=>[s("#")]),_:1}),s("Allow Half Rating")]),E,t(n,null,{default:e(()=>[U]),_:1})]),a("div",D,[a("h3",W,[t(l,{to:"#DisabledAndReadonly"},{default:e(()=>[s("#")]),_:1}),s("Disabled And Readonly")]),Z,t(n,null,{default:e(()=>[H]),_:1})]),a("div",$,[a("h3",N,[t(l,{to:"#CanBeCleared"},{default:e(()=>[s("#")]),_:1}),s("Can Be Cleared")]),G,t(n,null,{default:e(()=>[L]),_:1})]),a("div",P,[a("h3",O,[t(l,{to:"#ListenEvent"},{default:e(()=>[s("#")]),_:1}),s("Listen Event")]),q,t(n,null,{default:e(()=>[Q]),_:1})]),a("div",F,[a("h3",J,[t(l,{to:"#Validate"},{default:e(()=>[s("#")]),_:1}),s("Validate")]),K,t(n,null,{default:e(()=>[M]),_:1})]),a("div",X,[a("h3",Y,[t(l,{to:"#ValidateWithZod"},{default:e(()=>[s("#")]),_:1}),s("Validate With Zod")]),t(n,null,{default:e(()=>[ss]),_:1})]),as,a("div",ts,[a("h3",es,[t(l,{to:"#props"},{default:e(()=>[s("#")]),_:1}),s("props")]),ls]),a("div",ns,[a("h3",cs,[t(l,{to:"#Events"},{default:e(()=>[s("#")]),_:1}),s("Events")]),os]),a("div",ds,[a("h3",rs,[t(l,{to:"#StyleVariables"},{default:e(()=>[s("#")]),_:1}),s("Style Variables")]),hs])])}const vs=d(p,[["render",ps]]);export{vs as default};
