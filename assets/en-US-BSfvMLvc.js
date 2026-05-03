import{L as e,N as t,W as n,c as r,d as i,g as a,h as o,m as s}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as c}from"./_plugin-vue_export-helper-V-yks4gF.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`Intro`},p={class:`card`},m={id:`ComponentCall`},h={class:`card`},g={id:`FunctionCall`},_={class:`card`},v={id:`Props`},y={class:`card`},b={id:`Slots`};function x(c,l,x,S,C,w){let T=e(`router-link`),E=e(`var-site-code-example`);return t(),i(`div`,u,[l[16]||=r(`h1`,null,`Style Provider`,-1),r(`div`,d,[r(`h3`,f,[a(T,{to:`#Intro`},{default:n(()=>[...l[0]||=[o(`#`,-1)]]),_:1}),l[1]||=o(`Intro`,-1)]),l[2]||=r(`p`,null,[o(`Style variables can be easily mounted through the StyleProvider component. The component provides two calling methods: `),r(`code`,null,`component calling`),o(` and `),r(`code`,null,`functional calling`),o(`.`)],-1)]),r(`div`,p,[r(`h3`,m,[a(T,{to:`#ComponentCall`},{default:n(()=>[...l[3]||=[o(`#`,-1)]]),_:1}),l[4]||=o(`Component Call`,-1)]),l[6]||=r(`p`,null,[o(`Component calls can have a scope of custom component styles, Scope contamination is avoided. Note that some elements sent outside the StyleProvider using the `),r(`code`,null,`teleport`),o(` will not work.`)],-1),a(E,null,{default:n(()=>[...l[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref, reactive } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` state = reactive({
  `),r(`span`,{class:`hljs-attr`},`score`),o(`: `),r(`span`,{class:`hljs-number`},`5`),o(`,
  `),r(`span`,{class:`hljs-attr`},`license`),o(`: `),r(`span`,{class:`hljs-literal`},`true`),o(`,
})

`),r(`span`,{class:`hljs-keyword`},`const`),o(` successTheme = {
  `),r(`span`,{class:`hljs-string`},`'--rate-primary-color'`),o(`: `),r(`span`,{class:`hljs-string`},`'var(--color-success)'`),o(`,
  `),r(`span`,{class:`hljs-string`},`'--button-primary-color'`),o(`: `),r(`span`,{class:`hljs-string`},`'var(--color-success)'`),o(`,
  `),r(`span`,{class:`hljs-string`},`'--switch-handle-active-background'`),o(`: `),r(`span`,{class:`hljs-string`},`'var(--color-success)'`),o(`,
  `),r(`span`,{class:`hljs-string`},`'--switch-track-active-background'`),o(`: `),r(`span`,{class:`hljs-string`},`'var(--color-success)'`),o(`,
}

`),r(`span`,{class:`hljs-keyword`},`const`),o(` styleVars = ref(`),r(`span`,{class:`hljs-literal`},`null`),o(`)

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`toggleTheme`),o(`(`),r(`span`,{class:`hljs-params`}),o(`) `)]),o(`{
  styleVars.value = styleVars.value ? `),r(`span`,{class:`hljs-literal`},`null`),o(` : successTheme
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-style-provider`),o(),r(`span`,{class:`hljs-attr`},`:style-vars`),o(`=`),r(`span`,{class:`hljs-string`},`"styleVars"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-rate`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"state.score"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-switch`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"state.license"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(` 
      `),r(`span`,{class:`hljs-attr`},`style`),o(`=`),r(`span`,{class:`hljs-string`},`"margin-top: 10px"`),o(` 
      `),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(`
      `),r(`span`,{class:`hljs-attr`},`block`),o(`
      @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"toggleTheme"`),o(`
    >`)]),o(`
      Toggle Theme
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-style-provider`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,h,[r(`h3`,g,[a(T,{to:`#FunctionCall`},{default:n(()=>[...l[7]||=[o(`#`,-1)]]),_:1}),l[8]||=o(`Function Call`,-1)]),l[9]||=r(`p`,null,[o(`A functional call is to update variables directly on `),r(`code`,null,`:root`),o(`, which is suitable for situations where a global update style is required. Details see `),r(`a`,{href:`#/en-US/themes`},`Theme Customization`),o(`.`)],-1)]),l[17]||=r(`h2`,null,`API`,-1),r(`div`,_,[r(`h3`,v,[a(T,{to:`#Props`},{default:n(()=>[...l[10]||=[o(`#`,-1)]]),_:1}),l[11]||=o(`Props`,-1)]),l[12]||=s(`<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>style-vars</code></td><td>CSS variables</td><td><em>Record&lt;string, string&gt;</em></td><td><code>{}</code></td></tr><tr><td><code>tag</code></td><td>Tag name</td><td><em>string</em></td><td><code>div</code></td></tr></tbody></table>`,1)]),r(`div`,y,[r(`h3`,b,[a(T,{to:`#Slots`},{default:n(()=>[...l[13]||=[o(`#`,-1)]]),_:1}),l[14]||=o(`Slots`,-1)]),l[15]||=r(`table`,null,[r(`thead`,null,[r(`tr`,null,[r(`th`,null,`Name`),r(`th`,null,`Description`),r(`th`,null,`SlotProps`)])]),r(`tbody`,null,[r(`tr`,null,[r(`td`,null,[r(`code`,null,`default`)]),r(`td`,null,`Component content`),r(`td`,null,[r(`code`,null,`-`)])])])],-1)])])}var S=c(l,[[`render`,x]]);export{S as default};