import{L as e,N as t,W as n,c as r,d as i,g as a,h as o,m as s}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as c}from"./_plugin-vue_export-helper-V-yks4gF.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`Intro`},p={class:`card`},m={id:`BasicUse`},h={class:`card`},g={id:`LoadFail`},_={class:`card`},v={id:`TipText`},y={class:`card`},b={id:`Combine`},x={class:`card`},S={id:`BeCareful`},C={class:`card`},w={id:`Props`},T={class:`card`},E={id:`Methods`},D={class:`card`},O={id:`Events`},k={class:`card`},A={id:`Slots`},j={class:`card`},M={id:`StyleVariables`};function N(c,l,N,P,F,I){let L=e(`router-link`),R=e(`var-site-code-example`);return t(),i(`div`,u,[l[36]||=r(`h1`,null,`List`,-1),r(`div`,d,[r(`h3`,f,[a(L,{to:`#Intro`},{default:n(()=>[...l[0]||=[o(`#`,-1)]]),_:1}),l[1]||=o(`Intro`,-1)]),l[2]||=r(`p`,null,`Unlimited scroll load list, touch bottom load, support manual check position load. Support custom loading state, error state, data loading completed state.`,-1)]),r(`div`,p,[r(`h3`,m,[a(L,{to:`#BasicUse`},{default:n(()=>[...l[3]||=[o(`#`,-1)]]),_:1}),l[4]||=o(`Basic Use`,-1)]),l[6]||=r(`p`,null,[o(`The `),r(`code`,null,`load`),o(` event is emitted when a scroll container is detected scrolling to the bottom, and will be set `),r(`code`,null,`loading`),o(` to `),r(`code`,null,`true`),o(`, you need to manually set `),r(`code`,null,`loading`),o(` to `),r(`code`,null,`false`),o(` at the end of loading, that's the end of the load.`)],-1),a(R,null,{default:n(()=>[...l[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` loading = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` finished = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` list = ref([])
    
`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`load`),o(`(`),r(`span`,{class:`hljs-params`}),o(`) `)]),o(`{
  `),r(`span`,{class:`hljs-built_in`},`setTimeout`),o(`(`),r(`span`,{class:`hljs-function`},`() =>`),o(` {
    `),r(`span`,{class:`hljs-keyword`},`for`),o(` (`),r(`span`,{class:`hljs-keyword`},`let`),o(` i = `),r(`span`,{class:`hljs-number`},`0`),o(`; i < `),r(`span`,{class:`hljs-number`},`20`),o(`; i++) {
      list.value.push(list.value.length + `),r(`span`,{class:`hljs-number`},`1`),o(`)
    }

    loading.value = `),r(`span`,{class:`hljs-literal`},`false`),o(`

    `),r(`span`,{class:`hljs-keyword`},`if`),o(` (list.value.length >= `),r(`span`,{class:`hljs-number`},`60`),o(`) {
      finished.value = `),r(`span`,{class:`hljs-literal`},`true`),o(`
    }
  }, `),r(`span`,{class:`hljs-number`},`1000`),o(`)
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-list`),o(`
    `),r(`span`,{class:`hljs-attr`},`:finished`),o(`=`),r(`span`,{class:`hljs-string`},`"finished"`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model:loading`),o(`=`),r(`span`,{class:`hljs-string`},`"loading"`),o(`
    @`),r(`span`,{class:`hljs-attr`},`load`),o(`=`),r(`span`,{class:`hljs-string`},`"load"`),o(`
  >`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-cell`),o(),r(`span`,{class:`hljs-attr`},`:key`),o(`=`),r(`span`,{class:`hljs-string`},`"item"`),o(),r(`span`,{class:`hljs-attr`},`v-for`),o(`=`),r(`span`,{class:`hljs-string`},`"item in list"`),o(`>`)]),o(`
      List Item: {{ item }}
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-list`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,h,[r(`h3`,g,[a(L,{to:`#LoadFail`},{default:n(()=>[...l[7]||=[o(`#`,-1)]]),_:1}),l[8]||=o(`Load Fail`,-1)]),l[10]||=r(`p`,null,[o(`You can manually set the error status using `),r(`code`,null,`v-model:error`),o(`, an error message is displayed. Clicking on the error message will help you set the `),r(`code`,null,`error`),o(` to `),r(`code`,null,`false`),o(` and trigger the `),r(`code`,null,`load`),o(` event again.`)],-1),a(R,null,{default:n(()=>[...l[9]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` loading = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` error = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` list = ref([])
    
`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`load`),o(`(`),r(`span`,{class:`hljs-params`}),o(`) `)]),o(`{
  `),r(`span`,{class:`hljs-built_in`},`setTimeout`),o(`(`),r(`span`,{class:`hljs-function`},`() =>`),o(` {
    `),r(`span`,{class:`hljs-keyword`},`if`),o(` (list.value.length === `),r(`span`,{class:`hljs-number`},`40`),o(`) {
      error.value = `),r(`span`,{class:`hljs-literal`},`true`),o(`
      loading.value = `),r(`span`,{class:`hljs-literal`},`false`),o(`
      `),r(`span`,{class:`hljs-keyword`},`return`),o(`
    }

    `),r(`span`,{class:`hljs-keyword`},`for`),o(` (`),r(`span`,{class:`hljs-keyword`},`let`),o(` i = `),r(`span`,{class:`hljs-number`},`0`),o(`; i < `),r(`span`,{class:`hljs-number`},`20`),o(`; i++) {
      list.value.push(list.value.length + `),r(`span`,{class:`hljs-number`},`1`),o(`)
    }

    loading.value = `),r(`span`,{class:`hljs-literal`},`false`),o(`
  }, `),r(`span`,{class:`hljs-number`},`1000`),o(`)
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-list`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model:error`),o(`=`),r(`span`,{class:`hljs-string`},`"error"`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model:loading`),o(`=`),r(`span`,{class:`hljs-string`},`"loading"`),o(`
    @`),r(`span`,{class:`hljs-attr`},`load`),o(`=`),r(`span`,{class:`hljs-string`},`"load"`),o(`
  >`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-cell`),o(),r(`span`,{class:`hljs-attr`},`:key`),o(`=`),r(`span`,{class:`hljs-string`},`"item"`),o(),r(`span`,{class:`hljs-attr`},`v-for`),o(`=`),r(`span`,{class:`hljs-string`},`"item in list"`),o(`>`)]),o(`
      List Item: {{ item }}
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-list`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,_,[r(`h3`,v,[a(L,{to:`#TipText`},{default:n(()=>[...l[11]||=[o(`#`,-1)]]),_:1}),l[12]||=o(`Tip Text`,-1)]),a(R,null,{default:n(()=>[...l[13]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` loading = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` finished = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` list = ref([])

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`load`),o(`(`),r(`span`,{class:`hljs-params`}),o(`) `)]),o(`{
  `),r(`span`,{class:`hljs-built_in`},`setTimeout`),o(`(`),r(`span`,{class:`hljs-function`},`() =>`),o(` {
    `),r(`span`,{class:`hljs-keyword`},`for`),o(` (`),r(`span`,{class:`hljs-keyword`},`let`),o(` i = `),r(`span`,{class:`hljs-number`},`0`),o(`; i < `),r(`span`,{class:`hljs-number`},`20`),o(`; i++) {
      list.value.push(list.value.length + `),r(`span`,{class:`hljs-number`},`1`),o(`)
    }

    loading.value = `),r(`span`,{class:`hljs-literal`},`false`),o(`

    `),r(`span`,{class:`hljs-keyword`},`if`),o(` (list.value.length >= `),r(`span`,{class:`hljs-number`},`60`),o(`) {
      finished.value = `),r(`span`,{class:`hljs-literal`},`true`),o(`
    }
  }, `),r(`span`,{class:`hljs-number`},`1000`),o(`)
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-list`),o(` 
    `),r(`span`,{class:`hljs-attr`},`loading-text`),o(`=`),r(`span`,{class:`hljs-string`},`"loading QAQ"`),o(` 
    `),r(`span`,{class:`hljs-attr`},`finished-text`),o(`=`),r(`span`,{class:`hljs-string`},`"finished ORZ"`),o(` 
    `),r(`span`,{class:`hljs-attr`},`error-text`),o(`=`),r(`span`,{class:`hljs-string`},`"error TNT"`),o(` 
    `),r(`span`,{class:`hljs-attr`},`:finished`),o(`=`),r(`span`,{class:`hljs-string`},`"finished"`),o(` 
    `),r(`span`,{class:`hljs-attr`},`v-model:loading`),o(`=`),r(`span`,{class:`hljs-string`},`"loading"`),o(` 
    @`),r(`span`,{class:`hljs-attr`},`load`),o(`=`),r(`span`,{class:`hljs-string`},`"load"`),o(`
  >`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-cell`),o(),r(`span`,{class:`hljs-attr`},`:key`),o(`=`),r(`span`,{class:`hljs-string`},`"item"`),o(),r(`span`,{class:`hljs-attr`},`v-for`),o(`=`),r(`span`,{class:`hljs-string`},`"item in list"`),o(`>`)]),o(`
      List Item: {{ item }}
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-list`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,y,[r(`h3`,b,[a(L,{to:`#Combine`},{default:n(()=>[...l[14]||=[o(`#`,-1)]]),_:1}),l[15]||=o(`Combine`,-1)]),l[17]||=r(`p`,null,[o(`Combined with the `),r(`code`,null,`PullRefresh`),o(` component to implement the function of pull-up loading and pull-down refresh, ensuring the height of the `),r(`code`,null,`PullRefresh`),o(` is not `),r(`code`,null,`0`),o(`.`)],-1),a(R,null,{default:n(()=>[...l[16]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
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
`)])],-1)]]),_:1})]),r(`div`,x,[r(`h3`,S,[a(L,{to:`#BeCareful`},{default:n(()=>[...l[18]||=[o(`#`,-1)]]),_:1}),l[19]||=o(`Be Careful`,-1)]),l[20]||=s(`<p>We detect bottoming by listening for the scroll event of the scroll container and perform the load. A scroll container is the nearest element that <code>overflow-y=&#39;auto&#39;</code> or <code>scroll</code> When you set an element&#39;s <code>overflow-x</code> to a value other than <code>visible</code>, The browser will fix your <code>overflow-y</code> to <code>auto</code> in order to maintain a <code>BFC</code> structure. This can be mistaken for a scroll container, so avoid it.</p>`,1)]),l[37]||=r(`h2`,null,`API`,-1),r(`div`,C,[r(`h3`,w,[a(L,{to:`#Props`},{default:n(()=>[...l[21]||=[o(`#`,-1)]]),_:1}),l[22]||=o(`Props`,-1)]),l[23]||=s(`<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:loading</code></td><td>Loading state</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>v-model:error</code></td><td>Error state</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>immediate-check</code></td><td>Whether the location is detected immediately when the List is initialized</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>finished</code></td><td>Whether the load is complete</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>offset</code></td><td>Trigger distance from the bottom</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>loading-text</code></td><td>Loading text</td><td><em>string</em></td><td><code>Loading</code></td></tr><tr><td><code>finished-text</code></td><td>Finished text</td><td><em>string</em></td><td><code>No more</code></td></tr><tr><td><code>error-text</code></td><td>Error text</td><td><em>string</em></td><td><code>Load fail</code></td></tr></tbody></table>`,1)]),r(`div`,T,[r(`h3`,E,[a(L,{to:`#Methods`},{default:n(()=>[...l[24]||=[o(`#`,-1)]]),_:1}),l[25]||=o(`Methods`,-1)]),l[26]||=s(`<table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>check</code></td><td>Trigger position check, touch bottom trigger load event</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,D,[r(`h3`,O,[a(L,{to:`#Events`},{default:n(()=>[...l[27]||=[o(`#`,-1)]]),_:1}),l[28]||=o(`Events`,-1)]),l[29]||=r(`table`,null,[r(`thead`,null,[r(`tr`,null,[r(`th`,null,`Event`),r(`th`,null,`Description`),r(`th`,null,`Arguments`)])]),r(`tbody`,null,[r(`tr`,null,[r(`td`,null,[r(`code`,null,`load`)]),r(`td`,null,`Triggered when it hit bottom`),r(`td`,null,[r(`code`,null,`-`)])])])],-1)]),r(`div`,k,[r(`h3`,A,[a(L,{to:`#Slots`},{default:n(()=>[...l[30]||=[o(`#`,-1)]]),_:1}),l[31]||=o(`Slots`,-1)]),l[32]||=s(`<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>List content</td><td><code>-</code></td></tr><tr><td><code>loading</code></td><td>Loading content</td><td><code>-</code></td></tr><tr><td><code>error</code></td><td>Error content</td><td><code>-</code></td></tr><tr><td><code>finished</code></td><td>Finished content</td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,j,[r(`h3`,M,[a(L,{to:`#StyleVariables`},{default:n(()=>[...l[33]||=[o(`#`,-1)]]),_:1}),l[34]||=o(`Style Variables`,-1)]),l[35]||=s(`<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--list-loading-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-finished-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-error-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-loading-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-finished-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-error-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-loading-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--list-finished-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--list-error-font-size</code></td><td><code>var(--font-size-md)</code></td></tr></tbody></table>`,2)])])}var P=c(l,[[`render`,N]]);export{P as default};