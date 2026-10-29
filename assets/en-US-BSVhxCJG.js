import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s,m as c}from"./runtime-core.esm-bundler-DUghkl6b.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`Intro`},p={class:`card`},m={id:`BasicUsage`},h={class:`card`},g={id:`Combine`},_={class:`card`},v={id:`Attention`},y={class:`card`},b={id:`Props`},x={class:`card`},S={id:`Events`},C={class:`card`},w={id:`Slots`},T={class:`card`},E={id:`StyleVariables`};function D(e,l,D,O,k,A){let j=n(`router-link`),M=n(`var-site-code-example`);return r(),a(`div`,u,[l[27]||=i(`h1`,null,`PullRefresh`,-1),i(`div`,d,[i(`h3`,f,[o(j,{to:`#Intro`},{default:t(()=>[...l[0]||=[s(`#`,-1)]]),_:1}),l[1]||=s(`Intro`,-1)]),l[2]||=i(`p`,null,`Provides a drop-down refresh interaction.`,-1)]),i(`div`,p,[i(`h3`,m,[o(j,{to:`#BasicUsage`},{default:t(()=>[...l[3]||=[s(`#`,-1)]]),_:1}),l[4]||=s(`Basic Usage`,-1)]),l[6]||=i(`p`,null,[s(`The refresh event will be Emitted when pull refresh, you should set `),i(`code`,null,`v-model`),s(` to `),i(`code`,null,`true`),s(` at the beginning of the event indicates that loading is under way, and setting `),i(`code`,null,`v-model`),s(` to `),i(`code`,null,`false`),s(` after completion indicates that loading is over.`)],-1),o(M,null,{default:t(()=>[...l[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` data1 = `),i(`span`,{class:`hljs-built_in`},`Array`),s(`(`),i(`span`,{class:`hljs-number`},`30`),s(`).fill(`),i(`span`,{class:`hljs-string`},`'List Item'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` data2 = `),i(`span`,{class:`hljs-built_in`},`Array`),s(`(`),i(`span`,{class:`hljs-number`},`30`),s(`).fill(`),i(`span`,{class:`hljs-string`},`'This is new List Item'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` isRefresh = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` data = ref(data1)

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`refresh`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  `),i(`span`,{class:`hljs-built_in`},`setTimeout`),s(`(`),i(`span`,{class:`hljs-function`},`() =>`),s(` {
    data.value = data.value[`),i(`span`,{class:`hljs-number`},`0`),s(`] === `),i(`span`,{class:`hljs-string`},`'List Item'`),s(` ? data2 : data1
    isRefresh.value = `),i(`span`,{class:`hljs-literal`},`false`),s(`
  }, `),i(`span`,{class:`hljs-number`},`2000`),s(`)
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-pull-refresh`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"isRefresh"`),s(` @`),i(`span`,{class:`hljs-attr`},`refresh`),s(`=`),i(`span`,{class:`hljs-string`},`"refresh"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-cell`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-for`),s(`=`),i(`span`,{class:`hljs-string`},`"(item, index) in data"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:key`),s(`=`),i(`span`,{class:`hljs-string`},`"index"`),s(`
      `),i(`span`,{class:`hljs-attr`},`border`),s(`
    >`)]),s(`
      {{ item + ' ' + (index + 1) }}
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-cell`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-pull-refresh`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,h,[i(`h3`,g,[o(j,{to:`#Combine`},{default:t(()=>[...l[7]||=[s(`#`,-1)]]),_:1}),l[8]||=s(`Combine`,-1)]),l[10]||=i(`p`,null,[s(`Combined with the `),i(`code`,null,`List`),s(` component to implement the function of pull-up loading and pull-down refresh, ensuring the height of the `),i(`code`,null,`PullRefresh`),s(` is not `),i(`code`,null,`0`),s(` .`)],-1),o(M,null,{default:t(()=>[...l[9]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` refreshing = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` loading = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` list = ref([])

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`refresh`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  `),i(`span`,{class:`hljs-built_in`},`setTimeout`),s(`(`),i(`span`,{class:`hljs-function`},`() =>`),s(` {
    `),i(`span`,{class:`hljs-built_in`},`console`),s(`.log(`),i(`span`,{class:`hljs-string`},`'refresh'`),s(`)
    refreshing.value = `),i(`span`,{class:`hljs-literal`},`false`),s(`
  }, `),i(`span`,{class:`hljs-number`},`2000`),s(`)
}

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`load`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  `),i(`span`,{class:`hljs-built_in`},`setTimeout`),s(`(`),i(`span`,{class:`hljs-function`},`() =>`),s(` {
    `),i(`span`,{class:`hljs-keyword`},`for`),s(` (`),i(`span`,{class:`hljs-keyword`},`let`),s(` i = `),i(`span`,{class:`hljs-number`},`0`),s(`; i < `),i(`span`,{class:`hljs-number`},`20`),s(`; i++) {
      list.value.push(list.value.length + `),i(`span`,{class:`hljs-number`},`1`),s(`)
    }
    
    loading.value = `),i(`span`,{class:`hljs-literal`},`false`),s(`
  }, `),i(`span`,{class:`hljs-number`},`1000`),s(`)
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-pull-refresh`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"refreshing"`),s(` @`),i(`span`,{class:`hljs-attr`},`refresh`),s(`=`),i(`span`,{class:`hljs-string`},`"refresh"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-list`),s(),i(`span`,{class:`hljs-attr`},`v-model:loading`),s(`=`),i(`span`,{class:`hljs-string`},`"loading"`),s(` @`),i(`span`,{class:`hljs-attr`},`load`),s(`=`),i(`span`,{class:`hljs-string`},`"load"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-cell`),s(),i(`span`,{class:`hljs-attr`},`:key`),s(`=`),i(`span`,{class:`hljs-string`},`"d"`),s(),i(`span`,{class:`hljs-attr`},`v-for`),s(`=`),i(`span`,{class:`hljs-string`},`"d in list"`),s(`>`)]),s(`ListItem {{ d }}`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-cell`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-list`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-pull-refresh`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,_,[i(`h3`,v,[o(j,{to:`#Attention`},{default:t(()=>[...l[11]||=[s(`#`,-1)]]),_:1}),l[12]||=s(`Attention`,-1)]),l[14]||=i(`p`,null,[s(`When the height of the `),i(`code`,null,`PullRefresh`),s(` is `),i(`code`,null,`0`),s(`, it will be unavailable, so you need to ensure that the height of its child elements is `),i(`strong`,null,`not`),s(),i(`code`,null,`0`),s(` or set height for the `),i(`code`,null,`PullRefresh`),s(`:`)],-1),o(M,{"playground-ignore":``},{default:t(()=>[...l[13]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-pull-refresh`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`style`),s(`=`),i(`span`,{class:`hljs-string`},`"height: 200px"`),s(`>`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-pull-refresh`),s(`>`)]),s(`

  `),i(`span`,{class:`hljs-comment`},`<!-- or -->`),s(`
  
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-pull-refresh`),s(),i(`span`,{class:`hljs-attr`},`style`),s(`=`),i(`span`,{class:`hljs-string`},`"height: 200px"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-pull-refresh`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),l[28]||=i(`h2`,null,`API`,-1),i(`div`,y,[i(`h3`,b,[o(j,{to:`#Props`},{default:t(()=>[...l[15]||=[s(`#`,-1)]]),_:1}),l[16]||=s(`Props`,-1)]),l[17]||=c(`<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>Loading status</td><td><em>boolean</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable pull refresh</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>target</code></td><td>The target to trigger scroll. If it is undefined back top will listen to the nearest scrollable parent.</td><td><em>string | HTMLElement</em></td><td><code>-</code></td></tr><tr><td><code>animation-duration</code></td><td>The duration of the animation to return to the initial position after loading(ms)</td><td><em>string | number</em></td><td><code>300</code></td></tr><tr><td><code>success-duration</code></td><td>Success text display duration(ms)</td><td><em>string | number</em></td><td><code>2000</code></td></tr><tr><td><code>bg-color</code></td><td>BackgroundColor of control</td><td><em>string</em></td><td><code>#005CAF</code></td></tr><tr><td><code>color</code></td><td>Color of control</td><td><em>string</em></td><td><code>#ffffff</code></td></tr><tr><td><code>success-bg-color</code></td><td>BackgroundColor of control when the status is success</td><td><em>string</em></td><td><code>#4CAF50</code></td></tr><tr><td><code>success-color</code></td><td>Color of control when the status is success</td><td><em>string</em></td><td><code>ffffff</code></td></tr></tbody></table>`,1)]),i(`div`,x,[i(`h3`,S,[o(j,{to:`#Events`},{default:t(()=>[...l[18]||=[s(`#`,-1)]]),_:1}),l[19]||=s(`Events`,-1)]),l[20]||=i(`table`,null,[i(`thead`,null,[i(`tr`,null,[i(`th`,null,`Event`),i(`th`,null,`Description`),i(`th`,null,`arguments`)])]),i(`tbody`,null,[i(`tr`,null,[i(`td`,null,[i(`code`,null,`refresh`)]),i(`td`,null,`Emitted after pulling refresh`),i(`td`,null,[i(`code`,null,`-`)])])])],-1)]),i(`div`,C,[i(`h3`,w,[o(j,{to:`#Slots`},{default:t(()=>[...l[21]||=[s(`#`,-1)]]),_:1}),l[22]||=s(`Slots`,-1)]),l[23]||=i(`table`,null,[i(`thead`,null,[i(`tr`,null,[i(`th`,null,`Name`),i(`th`,null,`Description`),i(`th`,null,`SlotProps`)])]),i(`tbody`,null,[i(`tr`,null,[i(`td`,null,[i(`code`,null,`default`)]),i(`td`,null,`Default slot`),i(`td`,null,[i(`code`,null,`-`)])])])],-1)]),i(`div`,T,[i(`h3`,E,[o(j,{to:`#StyleVariables`},{default:t(()=>[...l[24]||=[s(`#`,-1)]]),_:1}),l[25]||=s(`Style Variables`,-1)]),l[26]||=c(`<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--pull-refresh-size</code></td><td><code>40px</code></td></tr><tr><td><code>--pull-refresh-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--pull-refresh-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--pull-refresh-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--pull-refresh-icon-size</code></td><td><code>25px</code></td></tr></tbody></table>`,2)])])}var O=e(l,[[`render`,D]]);export{O as default};