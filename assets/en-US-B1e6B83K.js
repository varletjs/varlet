import{L as e,N as t,W as n,c as r,d as i,g as a,h as o,m as s}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as c}from"./_plugin-vue_export-helper-V-yks4gF.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`Intro`},p={class:`card`},m={id:`BasicUsage`},h={class:`card`},g={id:`OtherStyles`},_={class:`card`},v={id:`ProgressCircle`},y={class:`card`},b={id:`IndeterminateAnimation`},x={class:`card`},S={id:`Props`},C={class:`card`},w={id:`Slots`},T={class:`card`},E={id:`StyleVariables`};function D(c,l,D,O,k,A){let j=e(`router-link`),M=e(`var-site-code-example`);return t(),i(`div`,u,[l[26]||=r(`h1`,null,`Progress`,-1),r(`div`,d,[r(`h3`,f,[a(j,{to:`#Intro`},{default:n(()=>[...l[0]||=[o(`#`,-1)]]),_:1}),l[1]||=o(`Intro`,-1)]),l[2]||=r(`p`,null,`Display the current progress of an operation flow.`,-1)]),r(`div`,p,[r(`h3`,m,[a(j,{to:`#BasicUsage`},{default:n(()=>[...l[3]||=[o(`#`,-1)]]),_:1}),l[4]||=o(`Basic Usage`,-1)]),a(M,null,{default:n(()=>[...l[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref, onMounted, onUnmounted } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` value = ref(`),r(`span`,{class:`hljs-number`},`0`),o(`)
`),r(`span`,{class:`hljs-keyword`},`let`),o(` timer

onMounted(`),r(`span`,{class:`hljs-function`},`() =>`),o(` {
  timer = `),r(`span`,{class:`hljs-built_in`},`window`),o(`.setInterval(`),r(`span`,{class:`hljs-function`},`() =>`),o(` {
    `),r(`span`,{class:`hljs-keyword`},`if`),o(` (value.value >= `),r(`span`,{class:`hljs-number`},`100`),o(`) {
      value.value = `),r(`span`,{class:`hljs-number`},`0`),o(`
      `),r(`span`,{class:`hljs-keyword`},`return`),o(`
    }

    value.value += `),r(`span`,{class:`hljs-number`},`20`),o(`
  }, `),r(`span`,{class:`hljs-number`},`1000`),o(`)
})

onUnmounted(`),r(`span`,{class:`hljs-function`},`() =>`),o(` {
  `),r(`span`,{class:`hljs-built_in`},`window`),o(`.clearInterval(timer)
})  
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-space`),o(),r(`span`,{class:`hljs-attr`},`direction`),o(`=`),r(`span`,{class:`hljs-string`},`"column"`),o(),r(`span`,{class:`hljs-attr`},`:size`),o(`=`),r(`span`,{class:`hljs-string`},`"[12, 12]"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-progress`),o(),r(`span`,{class:`hljs-attr`},`:value`),o(`=`),r(`span`,{class:`hljs-string`},`"20"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-progress`),o(),r(`span`,{class:`hljs-attr`},`:value`),o(`=`),r(`span`,{class:`hljs-string`},`"value"`),o(),r(`span`,{class:`hljs-attr`},`:track`),o(`=`),r(`span`,{class:`hljs-string`},`"false"`),o(),r(`span`,{class:`hljs-attr`},`label`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-progress`),o(),r(`span`,{class:`hljs-attr`},`:value`),o(`=`),r(`span`,{class:`hljs-string`},`"100"`),o(),r(`span`,{class:`hljs-attr`},`label`),o(`>`)]),o(`success`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-progress`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-space`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,h,[r(`h3`,g,[a(j,{to:`#OtherStyles`},{default:n(()=>[...l[6]||=[o(`#`,-1)]]),_:1}),l[7]||=o(`Other Styles`,-1)]),l[9]||=r(`p`,null,[o(`Set the line width, progress bar color and track color through the attributes of `),r(`code`,null,`type`),o(`, `),r(`code`,null,`line-width`),o(`, `),r(`code`,null,`color`),o(`, `),r(`code`,null,`track-color`),o(`.`)],-1),a(M,null,{default:n(()=>[...l[8]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-space`),o(),r(`span`,{class:`hljs-attr`},`direction`),o(`=`),r(`span`,{class:`hljs-string`},`"column"`),o(),r(`span`,{class:`hljs-attr`},`:size`),o(`=`),r(`span`,{class:`hljs-string`},`"[12, 12]"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-progress`),o(),r(`span`,{class:`hljs-attr`},`:value`),o(`=`),r(`span`,{class:`hljs-string`},`"40"`),o(),r(`span`,{class:`hljs-attr`},`color`),o(`=`),r(`span`,{class:`hljs-string`},`"linear-gradient(131.53deg, #3fecff 0%, #6149f6 100%)"`),o(`/>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-progress`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"info"`),o(),r(`span`,{class:`hljs-attr`},`:value`),o(`=`),r(`span`,{class:`hljs-string`},`"40"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-progress`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"success"`),o(),r(`span`,{class:`hljs-attr`},`:value`),o(`=`),r(`span`,{class:`hljs-string`},`"60"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-progress`),o(),r(`span`,{class:`hljs-attr`},`:value`),o(`=`),r(`span`,{class:`hljs-string`},`"80"`),o(),r(`span`,{class:`hljs-attr`},`:line-width`),o(`=`),r(`span`,{class:`hljs-string`},`"8"`),o(),r(`span`,{class:`hljs-attr`},`color`),o(`=`),r(`span`,{class:`hljs-string`},`"#ff9f00"`),o(),r(`span`,{class:`hljs-attr`},`track-color`),o(`=`),r(`span`,{class:`hljs-string`},`"#f5cb90"`),o(` />`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-space`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,_,[r(`h3`,v,[a(j,{to:`#ProgressCircle`},{default:n(()=>[...l[10]||=[o(`#`,-1)]]),_:1}),l[11]||=o(`Progress Circle`,-1)]),a(M,null,{default:n(()=>[...l[12]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref, onMounted, onUnmounted } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` value = ref(`),r(`span`,{class:`hljs-number`},`0`),o(`)
`),r(`span`,{class:`hljs-keyword`},`let`),o(` timer

onMounted(`),r(`span`,{class:`hljs-function`},`() =>`),o(` {
  timer = `),r(`span`,{class:`hljs-built_in`},`window`),o(`.setInterval(`),r(`span`,{class:`hljs-function`},`() =>`),o(` {
    `),r(`span`,{class:`hljs-keyword`},`if`),o(` (value.value >= `),r(`span`,{class:`hljs-number`},`100`),o(`) {
      value.value = `),r(`span`,{class:`hljs-number`},`0`),o(`
      `),r(`span`,{class:`hljs-keyword`},`return`),o(`
    }

    value.value += `),r(`span`,{class:`hljs-number`},`20`),o(`
  }, `),r(`span`,{class:`hljs-number`},`1000`),o(`)
})

onUnmounted(`),r(`span`,{class:`hljs-function`},`() =>`),o(` {
  `),r(`span`,{class:`hljs-built_in`},`window`),o(`.clearInterval(timer)
})  
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-space`),o(),r(`span`,{class:`hljs-attr`},`:size`),o(`=`),r(`span`,{class:`hljs-string`},`"[20, 20]"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-progress`),o(` 
      `),r(`span`,{class:`hljs-attr`},`mode`),o(`=`),r(`span`,{class:`hljs-string`},`"circle"`),o(` 
      `),r(`span`,{class:`hljs-attr`},`:value`),o(`=`),r(`span`,{class:`hljs-string`},`"100"`),o(` 
      `),r(`span`,{class:`hljs-attr`},`:size`),o(`=`),r(`span`,{class:`hljs-string`},`"60"`),o(`  
      `),r(`span`,{class:`hljs-attr`},`:color`),o(`=`),r(`span`,{class:`hljs-string`},`"{
        '0%': '#3fecff',
        '100%': '#6149f6',
      }"`),o(` 
    />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-progress`),o(),r(`span`,{class:`hljs-attr`},`mode`),o(`=`),r(`span`,{class:`hljs-string`},`"circle"`),o(),r(`span`,{class:`hljs-attr`},`:value`),o(`=`),r(`span`,{class:`hljs-string`},`"75"`),o(),r(`span`,{class:`hljs-attr`},`:size`),o(`=`),r(`span`,{class:`hljs-string`},`"60"`),o(),r(`span`,{class:`hljs-attr`},`:track`),o(`=`),r(`span`,{class:`hljs-string`},`"false"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-progress`),o(),r(`span`,{class:`hljs-attr`},`mode`),o(`=`),r(`span`,{class:`hljs-string`},`"circle"`),o(),r(`span`,{class:`hljs-attr`},`label`),o(),r(`span`,{class:`hljs-attr`},`:value`),o(`=`),r(`span`,{class:`hljs-string`},`"value"`),o(),r(`span`,{class:`hljs-attr`},`:line-width`),o(`=`),r(`span`,{class:`hljs-string`},`"5"`),o(),r(`span`,{class:`hljs-attr`},`:size`),o(`=`),r(`span`,{class:`hljs-string`},`"60"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-progress`),o(),r(`span`,{class:`hljs-attr`},`mode`),o(`=`),r(`span`,{class:`hljs-string`},`"circle"`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"success"`),o(),r(`span`,{class:`hljs-attr`},`label`),o(),r(`span`,{class:`hljs-attr`},`:value`),o(`=`),r(`span`,{class:`hljs-string`},`"100"`),o(),r(`span`,{class:`hljs-attr`},`:line-width`),o(`=`),r(`span`,{class:`hljs-string`},`"5"`),o(),r(`span`,{class:`hljs-attr`},`:size`),o(`=`),r(`span`,{class:`hljs-string`},`"60"`),o(`>`)]),o(`
      success
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-progress`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-space`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,y,[r(`h3`,b,[a(j,{to:`#IndeterminateAnimation`},{default:n(()=>[...l[13]||=[o(`#`,-1)]]),_:1}),l[14]||=o(`Indeterminate Animation`,-1)]),l[16]||=r(`p`,null,[o(`Enable indeterminate animation through the `),r(`code`,null,`indeterminate`),o(` attribute when loading progress is unknown.`)],-1),a(M,null,{default:n(()=>[...l[15]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-space`),o(),r(`span`,{class:`hljs-attr`},`direction`),o(`=`),r(`span`,{class:`hljs-string`},`"column"`),o(),r(`span`,{class:`hljs-attr`},`:size`),o(`=`),r(`span`,{class:`hljs-string`},`"[20, 20]"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-progress`),o(),r(`span`,{class:`hljs-attr`},`indeterminate`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-progress`),o(),r(`span`,{class:`hljs-attr`},`indeterminate`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"info"`),o(` />`)]),o(`

    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-space`),o(),r(`span`,{class:`hljs-attr`},`justify`),o(`=`),r(`span`,{class:`hljs-string`},`"space-between"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-progress`),o(),r(`span`,{class:`hljs-attr`},`mode`),o(`=`),r(`span`,{class:`hljs-string`},`"circle"`),o(),r(`span`,{class:`hljs-attr`},`indeterminate`),o(),r(`span`,{class:`hljs-attr`},`:size`),o(`=`),r(`span`,{class:`hljs-string`},`"60"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-progress`),o(),r(`span`,{class:`hljs-attr`},`mode`),o(`=`),r(`span`,{class:`hljs-string`},`"circle"`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"info"`),o(),r(`span`,{class:`hljs-attr`},`indeterminate`),o(),r(`span`,{class:`hljs-attr`},`:size`),o(`=`),r(`span`,{class:`hljs-string`},`"60"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-space`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-space`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),l[27]||=r(`h2`,null,`API`,-1),r(`div`,x,[r(`h3`,S,[a(j,{to:`#Props`},{default:n(()=>[...l[17]||=[o(`#`,-1)]]),_:1}),l[18]||=o(`Props`,-1)]),l[19]||=s(`<table><thead><tr><th>prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>mode</code></td><td>Mode of Progress. Optional value is <code>linear, circle</code></td><td><em>string</em></td><td><code>linear</code></td></tr><tr><td><code>type</code></td><td>Progress type, Can be set to <code>default</code> <code>primary</code> <code>info</code> <code>success</code> <code>warning</code> <code>danger</code></td><td><em>string</em></td><td><code>primary</code></td></tr><tr><td><code>value</code></td><td>Completion value</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>line-width</code></td><td>Width of the progress bar</td><td><em>string | number</em></td><td><code>4</code></td></tr><tr><td><code>color</code></td><td>Color of the progress bar (The circular progress bar sets the gradient color, please use object. Gradient is the same as svg&#39;s linearGradient element)</td><td><em>string | object</em></td><td><code>-</code></td></tr><tr><td><code>track-color</code></td><td>Color of the progress track</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>label</code></td><td>Whether the label is visible or not</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>label-class</code></td><td>Custom label class name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>track</code></td><td>Whether the progress track is visible or not</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>indeterminate</code></td><td>Whether the indeterminate animation is visible or not</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>size</code></td><td>Size of progress (only supports circle progress)</td><td><em>string | number</em></td><td><code>40</code></td></tr><tr><td><code>rotate</code></td><td>Origin of progress (only supports circle progress)</td><td><em>number</em></td><td><code>0</code></td></tr></tbody></table>`,1)]),r(`div`,C,[r(`h3`,w,[a(j,{to:`#Slots`},{default:n(()=>[...l[20]||=[o(`#`,-1)]]),_:1}),l[21]||=o(`Slots`,-1)]),l[22]||=r(`table`,null,[r(`thead`,null,[r(`tr`,null,[r(`th`,null,`Name`),r(`th`,null,`Description`),r(`th`,null,`SlotProps`)])]),r(`tbody`,null,[r(`tr`,null,[r(`td`,null,[r(`code`,null,`default`)]),r(`td`,null,`Custom label`),r(`td`,null,[r(`code`,null,`-`)])])])],-1)]),r(`div`,T,[r(`h3`,E,[a(j,{to:`#StyleVariables`},{default:n(()=>[...l[23]||=[o(`#`,-1)]]),_:1}),l[24]||=o(`Style Variables`,-1)]),l[25]||=s(`<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--progress-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--progress-track-color</code></td><td><code>#d8d8d8</code></td></tr><tr><td><code>--progress-label-color</code></td><td><code>#555</code></td></tr><tr><td><code>--progress-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--progress-default-color</code></td><td><code>#f5f5f5</code></td></tr><tr><td><code>--progress-primary-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--progress-danger-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--progress-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--progress-warning-color</code></td><td><code>var(--color-warning)</code></td></tr><tr><td><code>--progress-info-color</code></td><td><code>var(--color-info)</code></td></tr><tr><td><code>--progress-linear-border-radius</code></td><td><code>0px</code></td></tr></tbody></table>`,2)])])}var O=c(l,[[`render`,D]]);export{O as default};