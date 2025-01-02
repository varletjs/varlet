import{_ as o,b as d,e as h,m as r,p as a,q as t,w as e,P as s,Z as n}from"./index-vwO9GBzB.js";const p={components:{}},i={class:"varlet-site-doc"},j=a("h1",null,"Checkbox",-1),m={class:"card"},u={id:"Intro"},v=a("p",null,"A group of options for multiple choices.",-1),g={class:"card"},_={id:"BasicUsage"},k=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(">")]),s("Current value: {{ value }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),b={class:"card"},f={id:"SetStateValue"},y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-number"},"0"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox"),s(`
    `),a("span",{class:"hljs-attr"},":unchecked-value"),s("="),a("span",{class:"hljs-string"},'"0"'),s(`
    `),a("span",{class:"hljs-attr"},":checked-value"),s("="),a("span",{class:"hljs-string"},'"1"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(`
  >`)]),s(`
    Current value: {{ value }}
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),x={class:"card"},C={id:"ModifyTheIconAndColor"},w=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox"),s(`
    `),a("span",{class:"hljs-attr"},"unchecked-color"),s("="),a("span",{class:"hljs-string"},'"#e99eb4"'),s(`
    `),a("span",{class:"hljs-attr"},"checked-color"),s("="),a("span",{class:"hljs-string"},'"#f44336"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"unchecked-icon"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"heart-half-full"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"24px"'),s("/>")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"checked-icon"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"heart"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"24px"'),s("/>")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"default"),s(">")]),s(`
      Current value: {{ value }}
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),S={class:"card"},V={id:"Disabled"},T=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox"),s(),a("span",{class:"hljs-attr"},"disabled"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(">")]),s("Current value: {{ value }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),D={class:"card"},A={id:"Readonly"},P=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox"),s(),a("span",{class:"hljs-attr"},"readonly"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(">")]),s("Current value: {{ value }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),I={class:"card"},E={id:"Indeterminate"},G=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`),a("span",{class:"hljs-keyword"},"const"),s(" indeterminate = ref("),a("span",{class:"hljs-literal"},"true"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"[0, 10]"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"v-model:indeterminate"),s("="),a("span",{class:"hljs-string"},'"indeterminate"'),s(">")]),s(`
      Current value: {{ value }}
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"indeterminate = !indeterminate"'),s(">")]),s("Toggle"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),M={class:"card"},z={id:"CheckboxGroup"},U=a("p",null,[s("In the checkbox group, you must set the "),a("code",null,"checked-value"),s(" to identify the "),a("code",null,"checkbox"),s(", The checkbox group collects all checked identifiers.")],-1),B=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` value = ref([])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox-group"),s(),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"group"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox"),s(),a("span",{class:"hljs-attr"},":checked-value"),s("="),a("span",{class:"hljs-string"},'"0"'),s(">")]),s("Eat"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox"),s(),a("span",{class:"hljs-attr"},":checked-value"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("Sleep"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox-group"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"[0, 10]"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(`
      `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(`
      @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"$refs.group.checkAll()"'),s(`
    >`)]),s(`
      Check All
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(`
      `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(`
      @`),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"$refs.group.inverseAll()"'),s(`
    >`)]),s(`
      Inverse All
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s("Current value: {{ value }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),N={class:"card"},$={id:"VerticalDirection"},R=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` value = ref([])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox-group"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"vertical"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox"),s(),a("span",{class:"hljs-attr"},":checked-value"),s("="),a("span",{class:"hljs-string"},'"0"'),s(">")]),s("Eat"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox"),s(),a("span",{class:"hljs-attr"},":checked-value"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("Sleep"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox-group"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),W={class:"card"},q={id:"CheckboxValidation"},H=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` value = ref([])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox"),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(`
    `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[v => v || 'Please check your choices']"`),s(`
  >`)]),s(`
    Current value: {{ value }}
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),Z={class:"card"},F={id:"CheckboxGroupValidate"},J=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(` value = ref([])
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox-group"),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(`
    `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},`"[v => v.length === 2 || 'Please check all']"`),s(`
  >`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox"),s(),a("span",{class:"hljs-attr"},":checked-value"),s("="),a("span",{class:"hljs-string"},'"0"'),s(">")]),s("Eat"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-checkbox"),s(),a("span",{class:"hljs-attr"},":checked-value"),s("="),a("span",{class:"hljs-string"},'"1"'),s(">")]),s("Sleep"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-checkbox-group"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),K=a("h2",null,"API",-1),L={class:"card"},O={id:"Props"},Q=n("<h4>CheckboxGroup Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The value of the binding</td><td><em>any[]</em></td><td><code>[]</code></td></tr><tr><td><code>max</code></td><td>Maximum number of checked</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>direction</code></td><td>The layout direction, optional value is <code>horizontal</code> <code>vertical</code></td><td><em>string</em></td><td><code>horizontal</code></td></tr><tr><td><code>rules</code></td><td>The validation rules, return <code>true</code> to indicate that the validation passed. The remaining values are converted to text as user prompts</td><td><em>Array&lt;(value: any[]) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table><h4>Checkbox Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The value of the binding</td><td><em>any</em></td><td><code>false</code></td></tr><tr><td><code>checked-value</code></td><td>Checked value</td><td><em>any</em></td><td><code>true</code></td></tr><tr><td><code>unchecked-value</code></td><td>Unchecked value</td><td><em>any</em></td><td><code>false</code></td></tr><tr><td><code>checked-color</code></td><td>Checked color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>unchecked-color</code></td><td>Unchecked color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>icon-size</code></td><td>Icon size</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>Whether the disabled</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>readonly</code></td><td>Whether the readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>indeterminate</code></td><td>Whether indeterminate status(style has the highest priority)</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code></td><td>Whether to open ripple</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>rules</code></td><td>The validation rules, return <code>true</code> to indicate that the validation passed. The remaining values are converted to text as user prompts</td><td><em>Array&lt;(value: any) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table>",4),X={class:"card"},Y={id:"Methods"},ss=n("<h4>CheckboxGroup Methods</h4><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>validate</code></td><td>Trigger validate</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clearing validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clear the value of the binding(set to <code>[]</code>) and validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>checkAll</code></td><td>Check all</td><td><code>-</code></td><td><code>value: any</code></td></tr><tr><td><code>inverseAll</code></td><td>Inverse all</td><td><code>-</code></td><td><code>value: any</code></td></tr></tbody></table><h4>Checkbox Methods</h4><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>validate</code></td><td>Trigger validate</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clearing validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clear the value of the binding(set to <code>unchecked-value</code>) and validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>toggle</code></td><td>Toggle the checked state, pass <code>checked-value</code> to check, <code>unchecked-value</code> to uncheck, do not pass or other cases to reverse</td><td><code>value: any</code></td><td><code>-</code></td></tr></tbody></table>",4),as={class:"card"},ts={id:"Events"},es=n("<h4>CheckboxGroup Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>Triggered on change</td><td><code>value: any[]</code></td></tr></tbody></table><h4>Checkbox Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggered on Click</td><td><code>e: Event</code></td></tr><tr><td><code>change</code></td><td>Triggered on change</td><td><code>value: any</code></td></tr></tbody></table>",4),ls={class:"card"},cs={id:"Slots"},ns=n("<h4>CheckboxGroup Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Checkbox Group content</td><td><code>-</code></td></tr></tbody></table><h4>Checkbox Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>checked-icon</code></td><td>Checked icon</td><td><code>-</code></td></tr><tr><td><code>unchecked-icon</code></td><td>Unchecked icon</td><td><code>-</code></td></tr><tr><td><code>indeterminate-icon</code></td><td>Indeterminate icon</td><td><code>-</code></td></tr><tr><td><code>default</code></td><td>Displayed text</td><td><code>-</code></td></tr></tbody></table>",4),ds={class:"card"},os={id:"StyleVariables"},hs=n('<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--checkbox-checked-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--checkbox-unchecked-color</code></td><td><code>#555</code></td></tr><tr><td><code>--checkbox-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--checkbox-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--checkbox-action-padding</code></td><td><code>6px</code></td></tr><tr><td><code>--checkbox-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--checkbox-icon-size</code></td><td><code>24px</code></td></tr></tbody></table>',2);function rs(ps,is,js,ms,us,vs){const l=d("router-link"),c=d("var-site-code-example");return h(),r("div",i,[j,a("div",m,[a("h3",u,[t(l,{to:"#Intro"},{default:e(()=>[s("#")]),_:1}),s("Intro")]),v]),a("div",g,[a("h3",_,[t(l,{to:"#BasicUsage"},{default:e(()=>[s("#")]),_:1}),s("Basic Usage")]),t(c,null,{default:e(()=>[k]),_:1})]),a("div",b,[a("h3",f,[t(l,{to:"#SetStateValue"},{default:e(()=>[s("#")]),_:1}),s("Set State Value")]),t(c,null,{default:e(()=>[y]),_:1})]),a("div",x,[a("h3",C,[t(l,{to:"#ModifyTheIconAndColor"},{default:e(()=>[s("#")]),_:1}),s("Modify The Icon And Color")]),t(c,null,{default:e(()=>[w]),_:1})]),a("div",S,[a("h3",V,[t(l,{to:"#Disabled"},{default:e(()=>[s("#")]),_:1}),s("Disabled")]),t(c,null,{default:e(()=>[T]),_:1})]),a("div",D,[a("h3",A,[t(l,{to:"#Readonly"},{default:e(()=>[s("#")]),_:1}),s("Readonly")]),t(c,null,{default:e(()=>[P]),_:1})]),a("div",I,[a("h3",E,[t(l,{to:"#Indeterminate"},{default:e(()=>[s("#")]),_:1}),s("Indeterminate")]),t(c,null,{default:e(()=>[G]),_:1})]),a("div",M,[a("h3",z,[t(l,{to:"#CheckboxGroup"},{default:e(()=>[s("#")]),_:1}),s("CheckboxGroup")]),U,t(c,null,{default:e(()=>[B]),_:1})]),a("div",N,[a("h3",$,[t(l,{to:"#VerticalDirection"},{default:e(()=>[s("#")]),_:1}),s("Vertical Direction")]),t(c,null,{default:e(()=>[R]),_:1})]),a("div",W,[a("h3",q,[t(l,{to:"#CheckboxValidation"},{default:e(()=>[s("#")]),_:1}),s("Checkbox Validation")]),t(c,null,{default:e(()=>[H]),_:1})]),a("div",Z,[a("h3",F,[t(l,{to:"#CheckboxGroupValidate"},{default:e(()=>[s("#")]),_:1}),s("CheckboxGroup Validate")]),t(c,null,{default:e(()=>[J]),_:1})]),K,a("div",L,[a("h3",O,[t(l,{to:"#Props"},{default:e(()=>[s("#")]),_:1}),s("Props")]),Q]),a("div",X,[a("h3",Y,[t(l,{to:"#Methods"},{default:e(()=>[s("#")]),_:1}),s("Methods")]),ss]),a("div",as,[a("h3",ts,[t(l,{to:"#Events"},{default:e(()=>[s("#")]),_:1}),s("Events")]),es]),a("div",ls,[a("h3",cs,[t(l,{to:"#Slots"},{default:e(()=>[s("#")]),_:1}),s("Slots")]),ns]),a("div",ds,[a("h3",os,[t(l,{to:"#StyleVariables"},{default:e(()=>[s("#")]),_:1}),s("Style Variables")]),hs])])}const _s=o(p,[["render",rs]]);export{_s as default};
