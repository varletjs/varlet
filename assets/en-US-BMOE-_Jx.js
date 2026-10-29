import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s,m as c}from"./runtime-core.esm-bundler-DUghkl6b.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`Intro`},p={class:`card`},m={id:`ComponentCall`},h={class:`card`},g={id:`FunctionCall`},_={class:`card`},v={id:`Props`},y={class:`card`},b={id:`Slots`};function x(e,l,x,S,C,w){let T=n(`router-link`),E=n(`var-site-code-example`);return r(),a(`div`,u,[l[16]||=i(`h1`,null,`Style Provider`,-1),i(`div`,d,[i(`h3`,f,[o(T,{to:`#Intro`},{default:t(()=>[...l[0]||=[s(`#`,-1)]]),_:1}),l[1]||=s(`Intro`,-1)]),l[2]||=i(`p`,null,[s(`Style variables can be easily mounted through the StyleProvider component. The component provides two calling methods: `),i(`code`,null,`component calling`),s(` and `),i(`code`,null,`functional calling`),s(`.`)],-1)]),i(`div`,p,[i(`h3`,m,[o(T,{to:`#ComponentCall`},{default:t(()=>[...l[3]||=[s(`#`,-1)]]),_:1}),l[4]||=s(`Component Call`,-1)]),l[6]||=i(`p`,null,[s(`Component calls can have a scope of custom component styles, Scope contamination is avoided. Note that some elements sent outside the StyleProvider using the `),i(`code`,null,`teleport`),s(` will not work.`)],-1),o(E,null,{default:t(()=>[...l[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref, reactive } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` state = reactive({
  `),i(`span`,{class:`hljs-attr`},`score`),s(`: `),i(`span`,{class:`hljs-number`},`5`),s(`,
  `),i(`span`,{class:`hljs-attr`},`license`),s(`: `),i(`span`,{class:`hljs-literal`},`true`),s(`,
})

`),i(`span`,{class:`hljs-keyword`},`const`),s(` successTheme = {
  `),i(`span`,{class:`hljs-string`},`'--rate-primary-color'`),s(`: `),i(`span`,{class:`hljs-string`},`'var(--color-success)'`),s(`,
  `),i(`span`,{class:`hljs-string`},`'--button-primary-color'`),s(`: `),i(`span`,{class:`hljs-string`},`'var(--color-success)'`),s(`,
  `),i(`span`,{class:`hljs-string`},`'--switch-handle-active-background'`),s(`: `),i(`span`,{class:`hljs-string`},`'var(--color-success)'`),s(`,
  `),i(`span`,{class:`hljs-string`},`'--switch-track-active-background'`),s(`: `),i(`span`,{class:`hljs-string`},`'var(--color-success)'`),s(`,
}

`),i(`span`,{class:`hljs-keyword`},`const`),s(` styleVars = ref(`),i(`span`,{class:`hljs-literal`},`null`),s(`)

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`toggleTheme`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  styleVars.value = styleVars.value ? `),i(`span`,{class:`hljs-literal`},`null`),s(` : successTheme
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-style-provider`),s(),i(`span`,{class:`hljs-attr`},`:style-vars`),s(`=`),i(`span`,{class:`hljs-string`},`"styleVars"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-rate`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"state.score"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-switch`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"state.license"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(` 
      `),i(`span`,{class:`hljs-attr`},`style`),s(`=`),i(`span`,{class:`hljs-string`},`"margin-top: 10px"`),s(` 
      `),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(`
      `),i(`span`,{class:`hljs-attr`},`block`),s(`
      @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"toggleTheme"`),s(`
    >`)]),s(`
      Toggle Theme
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-style-provider`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,h,[i(`h3`,g,[o(T,{to:`#FunctionCall`},{default:t(()=>[...l[7]||=[s(`#`,-1)]]),_:1}),l[8]||=s(`Function Call`,-1)]),l[9]||=i(`p`,null,[s(`A functional call is to update variables directly on `),i(`code`,null,`:root`),s(`, which is suitable for situations where a global update style is required. Details see `),i(`a`,{href:`#/en-US/themes`},`Theme Customization`),s(`.`)],-1)]),l[17]||=i(`h2`,null,`API`,-1),i(`div`,_,[i(`h3`,v,[o(T,{to:`#Props`},{default:t(()=>[...l[10]||=[s(`#`,-1)]]),_:1}),l[11]||=s(`Props`,-1)]),l[12]||=c(`<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>style-vars</code></td><td>CSS variables</td><td><em>Record&lt;string, string&gt;</em></td><td><code>{}</code></td></tr><tr><td><code>tag</code></td><td>Tag name</td><td><em>string</em></td><td><code>div</code></td></tr></tbody></table>`,1)]),i(`div`,y,[i(`h3`,b,[o(T,{to:`#Slots`},{default:t(()=>[...l[13]||=[s(`#`,-1)]]),_:1}),l[14]||=s(`Slots`,-1)]),l[15]||=i(`table`,null,[i(`thead`,null,[i(`tr`,null,[i(`th`,null,`Name`),i(`th`,null,`Description`),i(`th`,null,`SlotProps`)])]),i(`tbody`,null,[i(`tr`,null,[i(`td`,null,[i(`code`,null,`default`)]),i(`td`,null,`Component content`),i(`td`,null,[i(`code`,null,`-`)])])])],-1)])])}var S=e(l,[[`render`,x]]);export{S as default};