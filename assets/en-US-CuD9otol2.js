import{L as e,N as t,W as n,c as r,d as i,g as a,h as o,m as s}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as c}from"./_plugin-vue_export-helper-V-yks4gF.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`Intro`},p={class:`card`},m={id:`BasicUsage`},h={class:`card`},g={id:`Combine`},_={class:`card`},v={id:`Attention`},y={class:`card`},b={id:`Props`},x={class:`card`},S={id:`Events`},C={class:`card`},w={id:`Slots`},T={class:`card`},E={id:`StyleVariables`};function D(c,l,D,O,k,A){let j=e(`router-link`),M=e(`var-site-code-example`);return t(),i(`div`,u,[l[27]||=r(`h1`,null,`PullRefresh`,-1),r(`div`,d,[r(`h3`,f,[a(j,{to:`#Intro`},{default:n(()=>[...l[0]||=[o(`#`,-1)]]),_:1}),l[1]||=o(`Intro`,-1)]),l[2]||=r(`p`,null,`Provides a drop-down refresh interaction.`,-1)]),r(`div`,p,[r(`h3`,m,[a(j,{to:`#BasicUsage`},{default:n(()=>[...l[3]||=[o(`#`,-1)]]),_:1}),l[4]||=o(`Basic Usage`,-1)]),l[6]||=r(`p`,null,[o(`The refresh event will be Emitted when pull refresh, you should set `),r(`code`,null,`v-model`),o(` to `),r(`code`,null,`true`),o(` at the beginning of the event indicates that loading is under way, and setting `),r(`code`,null,`v-model`),o(` to `),r(`code`,null,`false`),o(` after completion indicates that loading is over.`)],-1),a(M,null,{default:n(()=>[...l[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` data1 = `),r(`span`,{class:`hljs-built_in`},`Array`),o(`(`),r(`span`,{class:`hljs-number`},`30`),o(`).fill(`),r(`span`,{class:`hljs-string`},`'List Item'`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` data2 = `),r(`span`,{class:`hljs-built_in`},`Array`),o(`(`),r(`span`,{class:`hljs-number`},`30`),o(`).fill(`),r(`span`,{class:`hljs-string`},`'This is new List Item'`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` isRefresh = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` data = ref(data1)

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`refresh`),o(`(`),r(`span`,{class:`hljs-params`}),o(`) `)]),o(`{
  `),r(`span`,{class:`hljs-built_in`},`setTimeout`),o(`(`),r(`span`,{class:`hljs-function`},`() =>`),o(` {
    data.value = data.value[`),r(`span`,{class:`hljs-number`},`0`),o(`] === `),r(`span`,{class:`hljs-string`},`'List Item'`),o(` ? data2 : data1
    isRefresh.value = `),r(`span`,{class:`hljs-literal`},`false`),o(`
  }, `),r(`span`,{class:`hljs-number`},`2000`),o(`)
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-pull-refresh`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"isRefresh"`),o(` @`),r(`span`,{class:`hljs-attr`},`refresh`),o(`=`),r(`span`,{class:`hljs-string`},`"refresh"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-cell`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-for`),o(`=`),r(`span`,{class:`hljs-string`},`"(item, index) in data"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:key`),o(`=`),r(`span`,{class:`hljs-string`},`"index"`),o(`
      `),r(`span`,{class:`hljs-attr`},`border`),o(`
    >`)]),o(`
      {{ item + ' ' + (index + 1) }}
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-pull-refresh`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,h,[r(`h3`,g,[a(j,{to:`#Combine`},{default:n(()=>[...l[7]||=[o(`#`,-1)]]),_:1}),l[8]||=o(`Combine`,-1)]),l[10]||=r(`p`,null,[o(`Combined with the `),r(`code`,null,`List`),o(` component to implement the function of pull-up loading and pull-down refresh, ensuring the height of the `),r(`code`,null,`PullRefresh`),o(` is not `),r(`code`,null,`0`),o(` .`)],-1),a(M,null,{default:n(()=>[...l[9]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` refreshing = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` loading = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` list = ref([])

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`refresh`),o(`(`),r(`span`,{class:`hljs-params`}),o(`) `)]),o(`{
  `),r(`span`,{class:`hljs-built_in`},`setTimeout`),o(`(`),r(`span`,{class:`hljs-function`},`() =>`),o(` {
    `),r(`span`,{class:`hljs-built_in`},`console`),o(`.log(`),r(`span`,{class:`hljs-string`},`'refresh'`),o(`)
    refreshing.value = `),r(`span`,{class:`hljs-literal`},`false`),o(`
  }, `),r(`span`,{class:`hljs-number`},`2000`),o(`)
}

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`load`),o(`(`),r(`span`,{class:`hljs-params`}),o(`) `)]),o(`{
  `),r(`span`,{class:`hljs-built_in`},`setTimeout`),o(`(`),r(`span`,{class:`hljs-function`},`() =>`),o(` {
    `),r(`span`,{class:`hljs-keyword`},`for`),o(` (`),r(`span`,{class:`hljs-keyword`},`let`),o(` i = `),r(`span`,{class:`hljs-number`},`0`),o(`; i < `),r(`span`,{class:`hljs-number`},`20`),o(`; i++) {
      list.value.push(list.value.length + `),r(`span`,{class:`hljs-number`},`1`),o(`)
    }
    
    loading.value = `),r(`span`,{class:`hljs-literal`},`false`),o(`
  }, `),r(`span`,{class:`hljs-number`},`1000`),o(`)
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-pull-refresh`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"refreshing"`),o(` @`),r(`span`,{class:`hljs-attr`},`refresh`),o(`=`),r(`span`,{class:`hljs-string`},`"refresh"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-list`),o(),r(`span`,{class:`hljs-attr`},`v-model:loading`),o(`=`),r(`span`,{class:`hljs-string`},`"loading"`),o(` @`),r(`span`,{class:`hljs-attr`},`load`),o(`=`),r(`span`,{class:`hljs-string`},`"load"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-cell`),o(),r(`span`,{class:`hljs-attr`},`:key`),o(`=`),r(`span`,{class:`hljs-string`},`"d"`),o(),r(`span`,{class:`hljs-attr`},`v-for`),o(`=`),r(`span`,{class:`hljs-string`},`"d in list"`),o(`>`)]),o(`ListItem {{ d }}`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-list`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-pull-refresh`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,_,[r(`h3`,v,[a(j,{to:`#Attention`},{default:n(()=>[...l[11]||=[o(`#`,-1)]]),_:1}),l[12]||=o(`Attention`,-1)]),l[14]||=r(`p`,null,[o(`When the height of the `),r(`code`,null,`PullRefresh`),o(` is `),r(`code`,null,`0`),o(`, it will be unavailable, so you need to ensure that the height of its child elements is `),r(`strong`,null,`not`),o(),r(`code`,null,`0`),o(` or set height for the `),r(`code`,null,`PullRefresh`),o(`:`)],-1),a(M,{"playground-ignore":``},{default:n(()=>[...l[13]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-pull-refresh`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`style`),o(`=`),r(`span`,{class:`hljs-string`},`"height: 200px"`),o(`>`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-pull-refresh`),o(`>`)]),o(`

  `),r(`span`,{class:`hljs-comment`},`<!-- or -->`),o(`
  
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-pull-refresh`),o(),r(`span`,{class:`hljs-attr`},`style`),o(`=`),r(`span`,{class:`hljs-string`},`"height: 200px"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-pull-refresh`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),l[28]||=r(`h2`,null,`API`,-1),r(`div`,y,[r(`h3`,b,[a(j,{to:`#Props`},{default:n(()=>[...l[15]||=[o(`#`,-1)]]),_:1}),l[16]||=o(`Props`,-1)]),l[17]||=s(`<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>Loading status</td><td><em>boolean</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable pull refresh</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>target</code></td><td>The target to trigger scroll. If it is undefined back top will listen to the nearest scrollable parent.</td><td><em>string | HTMLElement</em></td><td><code>-</code></td></tr><tr><td><code>animation-duration</code></td><td>The duration of the animation to return to the initial position after loading(ms)</td><td><em>string | number</em></td><td><code>300</code></td></tr><tr><td><code>success-duration</code></td><td>Success text display duration(ms)</td><td><em>string | number</em></td><td><code>2000</code></td></tr><tr><td><code>bg-color</code></td><td>BackgroundColor of control</td><td><em>string</em></td><td><code>#005CAF</code></td></tr><tr><td><code>color</code></td><td>Color of control</td><td><em>string</em></td><td><code>#ffffff</code></td></tr><tr><td><code>success-bg-color</code></td><td>BackgroundColor of control when the status is success</td><td><em>string</em></td><td><code>#4CAF50</code></td></tr><tr><td><code>success-color</code></td><td>Color of control when the status is success</td><td><em>string</em></td><td><code>ffffff</code></td></tr></tbody></table>`,1)]),r(`div`,x,[r(`h3`,S,[a(j,{to:`#Events`},{default:n(()=>[...l[18]||=[o(`#`,-1)]]),_:1}),l[19]||=o(`Events`,-1)]),l[20]||=r(`table`,null,[r(`thead`,null,[r(`tr`,null,[r(`th`,null,`Event`),r(`th`,null,`Description`),r(`th`,null,`arguments`)])]),r(`tbody`,null,[r(`tr`,null,[r(`td`,null,[r(`code`,null,`refresh`)]),r(`td`,null,`Emitted after pulling refresh`),r(`td`,null,[r(`code`,null,`-`)])])])],-1)]),r(`div`,C,[r(`h3`,w,[a(j,{to:`#Slots`},{default:n(()=>[...l[21]||=[o(`#`,-1)]]),_:1}),l[22]||=o(`Slots`,-1)]),l[23]||=r(`table`,null,[r(`thead`,null,[r(`tr`,null,[r(`th`,null,`Name`),r(`th`,null,`Description`),r(`th`,null,`SlotProps`)])]),r(`tbody`,null,[r(`tr`,null,[r(`td`,null,[r(`code`,null,`default`)]),r(`td`,null,`Default slot`),r(`td`,null,[r(`code`,null,`-`)])])])],-1)]),r(`div`,T,[r(`h3`,E,[a(j,{to:`#StyleVariables`},{default:n(()=>[...l[24]||=[o(`#`,-1)]]),_:1}),l[25]||=o(`Style Variables`,-1)]),l[26]||=s(`<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--pull-refresh-size</code></td><td><code>40px</code></td></tr><tr><td><code>--pull-refresh-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--pull-refresh-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--pull-refresh-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--pull-refresh-icon-size</code></td><td><code>25px</code></td></tr></tbody></table>`,2)])])}var O=c(l,[[`render`,D]]);export{O as default};