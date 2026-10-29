import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s,m as c}from"./runtime-core.esm-bundler-DUghkl6b.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`Intro`},p={class:`card`},m={id:`BasicUsage`},h={class:`card`},g={id:`OtherStyles`},_={class:`card`},v={id:`ProgressCircle`},y={class:`card`},b={id:`IndeterminateAnimation`},x={class:`card`},S={id:`Props`},C={class:`card`},w={id:`Slots`},T={class:`card`},E={id:`StyleVariables`};function D(e,l,D,O,k,A){let j=n(`router-link`),M=n(`var-site-code-example`);return r(),a(`div`,u,[l[26]||=i(`h1`,null,`Progress`,-1),i(`div`,d,[i(`h3`,f,[o(j,{to:`#Intro`},{default:t(()=>[...l[0]||=[s(`#`,-1)]]),_:1}),l[1]||=s(`Intro`,-1)]),l[2]||=i(`p`,null,`Display the current progress of an operation flow.`,-1)]),i(`div`,p,[i(`h3`,m,[o(j,{to:`#BasicUsage`},{default:t(()=>[...l[3]||=[s(`#`,-1)]]),_:1}),l[4]||=s(`Basic Usage`,-1)]),o(M,null,{default:t(()=>[...l[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref, onMounted, onUnmounted } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` value = ref(`),i(`span`,{class:`hljs-number`},`0`),s(`)
`),i(`span`,{class:`hljs-keyword`},`let`),s(` timer

onMounted(`),i(`span`,{class:`hljs-function`},`() =>`),s(` {
  timer = `),i(`span`,{class:`hljs-built_in`},`window`),s(`.setInterval(`),i(`span`,{class:`hljs-function`},`() =>`),s(` {
    `),i(`span`,{class:`hljs-keyword`},`if`),s(` (value.value >= `),i(`span`,{class:`hljs-number`},`100`),s(`) {
      value.value = `),i(`span`,{class:`hljs-number`},`0`),s(`
      `),i(`span`,{class:`hljs-keyword`},`return`),s(`
    }

    value.value += `),i(`span`,{class:`hljs-number`},`20`),s(`
  }, `),i(`span`,{class:`hljs-number`},`1000`),s(`)
})

onUnmounted(`),i(`span`,{class:`hljs-function`},`() =>`),s(` {
  `),i(`span`,{class:`hljs-built_in`},`window`),s(`.clearInterval(timer)
})  
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-space`),s(),i(`span`,{class:`hljs-attr`},`direction`),s(`=`),i(`span`,{class:`hljs-string`},`"column"`),s(),i(`span`,{class:`hljs-attr`},`:size`),s(`=`),i(`span`,{class:`hljs-string`},`"[12, 12]"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-progress`),s(),i(`span`,{class:`hljs-attr`},`:value`),s(`=`),i(`span`,{class:`hljs-string`},`"20"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-progress`),s(),i(`span`,{class:`hljs-attr`},`:value`),s(`=`),i(`span`,{class:`hljs-string`},`"value"`),s(),i(`span`,{class:`hljs-attr`},`:track`),s(`=`),i(`span`,{class:`hljs-string`},`"false"`),s(),i(`span`,{class:`hljs-attr`},`label`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-progress`),s(),i(`span`,{class:`hljs-attr`},`:value`),s(`=`),i(`span`,{class:`hljs-string`},`"100"`),s(),i(`span`,{class:`hljs-attr`},`label`),s(`>`)]),s(`success`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-progress`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,h,[i(`h3`,g,[o(j,{to:`#OtherStyles`},{default:t(()=>[...l[6]||=[s(`#`,-1)]]),_:1}),l[7]||=s(`Other Styles`,-1)]),l[9]||=i(`p`,null,[s(`Set the line width, progress bar color and track color through the attributes of `),i(`code`,null,`type`),s(`, `),i(`code`,null,`line-width`),s(`, `),i(`code`,null,`color`),s(`, `),i(`code`,null,`track-color`),s(`.`)],-1),o(M,null,{default:t(()=>[...l[8]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-space`),s(),i(`span`,{class:`hljs-attr`},`direction`),s(`=`),i(`span`,{class:`hljs-string`},`"column"`),s(),i(`span`,{class:`hljs-attr`},`:size`),s(`=`),i(`span`,{class:`hljs-string`},`"[12, 12]"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-progress`),s(),i(`span`,{class:`hljs-attr`},`:value`),s(`=`),i(`span`,{class:`hljs-string`},`"40"`),s(),i(`span`,{class:`hljs-attr`},`color`),s(`=`),i(`span`,{class:`hljs-string`},`"linear-gradient(131.53deg, #3fecff 0%, #6149f6 100%)"`),s(`/>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-progress`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"info"`),s(),i(`span`,{class:`hljs-attr`},`:value`),s(`=`),i(`span`,{class:`hljs-string`},`"40"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-progress`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"success"`),s(),i(`span`,{class:`hljs-attr`},`:value`),s(`=`),i(`span`,{class:`hljs-string`},`"60"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-progress`),s(),i(`span`,{class:`hljs-attr`},`:value`),s(`=`),i(`span`,{class:`hljs-string`},`"80"`),s(),i(`span`,{class:`hljs-attr`},`:line-width`),s(`=`),i(`span`,{class:`hljs-string`},`"8"`),s(),i(`span`,{class:`hljs-attr`},`color`),s(`=`),i(`span`,{class:`hljs-string`},`"#ff9f00"`),s(),i(`span`,{class:`hljs-attr`},`track-color`),s(`=`),i(`span`,{class:`hljs-string`},`"#f5cb90"`),s(` />`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,_,[i(`h3`,v,[o(j,{to:`#ProgressCircle`},{default:t(()=>[...l[10]||=[s(`#`,-1)]]),_:1}),l[11]||=s(`Progress Circle`,-1)]),o(M,null,{default:t(()=>[...l[12]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref, onMounted, onUnmounted } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` value = ref(`),i(`span`,{class:`hljs-number`},`0`),s(`)
`),i(`span`,{class:`hljs-keyword`},`let`),s(` timer

onMounted(`),i(`span`,{class:`hljs-function`},`() =>`),s(` {
  timer = `),i(`span`,{class:`hljs-built_in`},`window`),s(`.setInterval(`),i(`span`,{class:`hljs-function`},`() =>`),s(` {
    `),i(`span`,{class:`hljs-keyword`},`if`),s(` (value.value >= `),i(`span`,{class:`hljs-number`},`100`),s(`) {
      value.value = `),i(`span`,{class:`hljs-number`},`0`),s(`
      `),i(`span`,{class:`hljs-keyword`},`return`),s(`
    }

    value.value += `),i(`span`,{class:`hljs-number`},`20`),s(`
  }, `),i(`span`,{class:`hljs-number`},`1000`),s(`)
})

onUnmounted(`),i(`span`,{class:`hljs-function`},`() =>`),s(` {
  `),i(`span`,{class:`hljs-built_in`},`window`),s(`.clearInterval(timer)
})  
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-space`),s(),i(`span`,{class:`hljs-attr`},`:size`),s(`=`),i(`span`,{class:`hljs-string`},`"[20, 20]"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-progress`),s(` 
      `),i(`span`,{class:`hljs-attr`},`mode`),s(`=`),i(`span`,{class:`hljs-string`},`"circle"`),s(` 
      `),i(`span`,{class:`hljs-attr`},`:value`),s(`=`),i(`span`,{class:`hljs-string`},`"100"`),s(` 
      `),i(`span`,{class:`hljs-attr`},`:size`),s(`=`),i(`span`,{class:`hljs-string`},`"60"`),s(`  
      `),i(`span`,{class:`hljs-attr`},`:color`),s(`=`),i(`span`,{class:`hljs-string`},`"{
        '0%': '#3fecff',
        '100%': '#6149f6',
      }"`),s(` 
    />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-progress`),s(),i(`span`,{class:`hljs-attr`},`mode`),s(`=`),i(`span`,{class:`hljs-string`},`"circle"`),s(),i(`span`,{class:`hljs-attr`},`:value`),s(`=`),i(`span`,{class:`hljs-string`},`"75"`),s(),i(`span`,{class:`hljs-attr`},`:size`),s(`=`),i(`span`,{class:`hljs-string`},`"60"`),s(),i(`span`,{class:`hljs-attr`},`:track`),s(`=`),i(`span`,{class:`hljs-string`},`"false"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-progress`),s(),i(`span`,{class:`hljs-attr`},`mode`),s(`=`),i(`span`,{class:`hljs-string`},`"circle"`),s(),i(`span`,{class:`hljs-attr`},`label`),s(),i(`span`,{class:`hljs-attr`},`:value`),s(`=`),i(`span`,{class:`hljs-string`},`"value"`),s(),i(`span`,{class:`hljs-attr`},`:line-width`),s(`=`),i(`span`,{class:`hljs-string`},`"5"`),s(),i(`span`,{class:`hljs-attr`},`:size`),s(`=`),i(`span`,{class:`hljs-string`},`"60"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-progress`),s(),i(`span`,{class:`hljs-attr`},`mode`),s(`=`),i(`span`,{class:`hljs-string`},`"circle"`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"success"`),s(),i(`span`,{class:`hljs-attr`},`label`),s(),i(`span`,{class:`hljs-attr`},`:value`),s(`=`),i(`span`,{class:`hljs-string`},`"100"`),s(),i(`span`,{class:`hljs-attr`},`:line-width`),s(`=`),i(`span`,{class:`hljs-string`},`"5"`),s(),i(`span`,{class:`hljs-attr`},`:size`),s(`=`),i(`span`,{class:`hljs-string`},`"60"`),s(`>`)]),s(`
      success
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-progress`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,y,[i(`h3`,b,[o(j,{to:`#IndeterminateAnimation`},{default:t(()=>[...l[13]||=[s(`#`,-1)]]),_:1}),l[14]||=s(`Indeterminate Animation`,-1)]),l[16]||=i(`p`,null,[s(`Enable indeterminate animation through the `),i(`code`,null,`indeterminate`),s(` attribute when loading progress is unknown.`)],-1),o(M,null,{default:t(()=>[...l[15]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-space`),s(),i(`span`,{class:`hljs-attr`},`direction`),s(`=`),i(`span`,{class:`hljs-string`},`"column"`),s(),i(`span`,{class:`hljs-attr`},`:size`),s(`=`),i(`span`,{class:`hljs-string`},`"[20, 20]"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-progress`),s(),i(`span`,{class:`hljs-attr`},`indeterminate`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-progress`),s(),i(`span`,{class:`hljs-attr`},`indeterminate`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"info"`),s(` />`)]),s(`

    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-space`),s(),i(`span`,{class:`hljs-attr`},`justify`),s(`=`),i(`span`,{class:`hljs-string`},`"space-between"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-progress`),s(),i(`span`,{class:`hljs-attr`},`mode`),s(`=`),i(`span`,{class:`hljs-string`},`"circle"`),s(),i(`span`,{class:`hljs-attr`},`indeterminate`),s(),i(`span`,{class:`hljs-attr`},`:size`),s(`=`),i(`span`,{class:`hljs-string`},`"60"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-progress`),s(),i(`span`,{class:`hljs-attr`},`mode`),s(`=`),i(`span`,{class:`hljs-string`},`"circle"`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"info"`),s(),i(`span`,{class:`hljs-attr`},`indeterminate`),s(),i(`span`,{class:`hljs-attr`},`:size`),s(`=`),i(`span`,{class:`hljs-string`},`"60"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),l[27]||=i(`h2`,null,`API`,-1),i(`div`,x,[i(`h3`,S,[o(j,{to:`#Props`},{default:t(()=>[...l[17]||=[s(`#`,-1)]]),_:1}),l[18]||=s(`Props`,-1)]),l[19]||=c(`<table><thead><tr><th>prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>mode</code></td><td>Mode of Progress. Optional value is <code>linear, circle</code></td><td><em>string</em></td><td><code>linear</code></td></tr><tr><td><code>type</code></td><td>Progress type, Can be set to <code>default</code> <code>primary</code> <code>info</code> <code>success</code> <code>warning</code> <code>danger</code></td><td><em>string</em></td><td><code>primary</code></td></tr><tr><td><code>value</code></td><td>Completion value</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>line-width</code></td><td>Width of the progress bar</td><td><em>string | number</em></td><td><code>4</code></td></tr><tr><td><code>color</code></td><td>Color of the progress bar (The circular progress bar sets the gradient color, please use object. Gradient is the same as svg&#39;s linearGradient element)</td><td><em>string | object</em></td><td><code>-</code></td></tr><tr><td><code>track-color</code></td><td>Color of the progress track</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>label</code></td><td>Whether the label is visible or not</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>label-class</code></td><td>Custom label class name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>track</code></td><td>Whether the progress track is visible or not</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>indeterminate</code></td><td>Whether the indeterminate animation is visible or not</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>size</code></td><td>Size of progress (only supports circle progress)</td><td><em>string | number</em></td><td><code>40</code></td></tr><tr><td><code>rotate</code></td><td>Origin of progress (only supports circle progress)</td><td><em>number</em></td><td><code>0</code></td></tr></tbody></table>`,1)]),i(`div`,C,[i(`h3`,w,[o(j,{to:`#Slots`},{default:t(()=>[...l[20]||=[s(`#`,-1)]]),_:1}),l[21]||=s(`Slots`,-1)]),l[22]||=i(`table`,null,[i(`thead`,null,[i(`tr`,null,[i(`th`,null,`Name`),i(`th`,null,`Description`),i(`th`,null,`SlotProps`)])]),i(`tbody`,null,[i(`tr`,null,[i(`td`,null,[i(`code`,null,`default`)]),i(`td`,null,`Custom label`),i(`td`,null,[i(`code`,null,`-`)])])])],-1)]),i(`div`,T,[i(`h3`,E,[o(j,{to:`#StyleVariables`},{default:t(()=>[...l[23]||=[s(`#`,-1)]]),_:1}),l[24]||=s(`Style Variables`,-1)]),l[25]||=c(`<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--progress-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--progress-track-color</code></td><td><code>#d8d8d8</code></td></tr><tr><td><code>--progress-label-color</code></td><td><code>#555</code></td></tr><tr><td><code>--progress-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--progress-default-color</code></td><td><code>#f5f5f5</code></td></tr><tr><td><code>--progress-primary-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--progress-danger-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--progress-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--progress-warning-color</code></td><td><code>var(--color-warning)</code></td></tr><tr><td><code>--progress-info-color</code></td><td><code>var(--color-info)</code></td></tr><tr><td><code>--progress-linear-border-radius</code></td><td><code>0px</code></td></tr></tbody></table>`,2)])])}var O=e(l,[[`render`,D]]);export{O as default};