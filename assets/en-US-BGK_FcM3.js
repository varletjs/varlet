import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s,m as c}from"./runtime-core.esm-bundler-DUghkl6b.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`Intro`},p={class:`card`},m={id:`BasicUse`},h={class:`card`},g={id:`LoadFail`},_={class:`card`},v={id:`TipText`},y={class:`card`},b={id:`Combine`},x={class:`card`},S={id:`BeCareful`},C={class:`card`},w={id:`Props`},T={class:`card`},E={id:`Methods`},D={class:`card`},O={id:`Events`},k={class:`card`},A={id:`Slots`},j={class:`card`},M={id:`StyleVariables`};function N(e,l,N,P,F,I){let L=n(`router-link`),R=n(`var-site-code-example`);return r(),a(`div`,u,[l[36]||=i(`h1`,null,`List`,-1),i(`div`,d,[i(`h3`,f,[o(L,{to:`#Intro`},{default:t(()=>[...l[0]||=[s(`#`,-1)]]),_:1}),l[1]||=s(`Intro`,-1)]),l[2]||=i(`p`,null,`Unlimited scroll load list, touch bottom load, support manual check position load. Support custom loading state, error state, data loading completed state.`,-1)]),i(`div`,p,[i(`h3`,m,[o(L,{to:`#BasicUse`},{default:t(()=>[...l[3]||=[s(`#`,-1)]]),_:1}),l[4]||=s(`Basic Use`,-1)]),l[6]||=i(`p`,null,[s(`The `),i(`code`,null,`load`),s(` event is emitted when a scroll container is detected scrolling to the bottom, and will be set `),i(`code`,null,`loading`),s(` to `),i(`code`,null,`true`),s(`, you need to manually set `),i(`code`,null,`loading`),s(` to `),i(`code`,null,`false`),s(` at the end of loading, that's the end of the load.`)],-1),o(R,null,{default:t(()=>[...l[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` loading = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` finished = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` list = ref([])
    
`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`load`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  `),i(`span`,{class:`hljs-built_in`},`setTimeout`),s(`(`),i(`span`,{class:`hljs-function`},`() =>`),s(` {
    `),i(`span`,{class:`hljs-keyword`},`for`),s(` (`),i(`span`,{class:`hljs-keyword`},`let`),s(` i = `),i(`span`,{class:`hljs-number`},`0`),s(`; i < `),i(`span`,{class:`hljs-number`},`20`),s(`; i++) {
      list.value.push(list.value.length + `),i(`span`,{class:`hljs-number`},`1`),s(`)
    }

    loading.value = `),i(`span`,{class:`hljs-literal`},`false`),s(`

    `),i(`span`,{class:`hljs-keyword`},`if`),s(` (list.value.length >= `),i(`span`,{class:`hljs-number`},`60`),s(`) {
      finished.value = `),i(`span`,{class:`hljs-literal`},`true`),s(`
    }
  }, `),i(`span`,{class:`hljs-number`},`1000`),s(`)
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-list`),s(`
    `),i(`span`,{class:`hljs-attr`},`:finished`),s(`=`),i(`span`,{class:`hljs-string`},`"finished"`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model:loading`),s(`=`),i(`span`,{class:`hljs-string`},`"loading"`),s(`
    @`),i(`span`,{class:`hljs-attr`},`load`),s(`=`),i(`span`,{class:`hljs-string`},`"load"`),s(`
  >`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-cell`),s(),i(`span`,{class:`hljs-attr`},`:key`),s(`=`),i(`span`,{class:`hljs-string`},`"item"`),s(),i(`span`,{class:`hljs-attr`},`v-for`),s(`=`),i(`span`,{class:`hljs-string`},`"item in list"`),s(`>`)]),s(`
      List Item: {{ item }}
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-cell`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-list`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,h,[i(`h3`,g,[o(L,{to:`#LoadFail`},{default:t(()=>[...l[7]||=[s(`#`,-1)]]),_:1}),l[8]||=s(`Load Fail`,-1)]),l[10]||=i(`p`,null,[s(`You can manually set the error status using `),i(`code`,null,`v-model:error`),s(`, an error message is displayed. Clicking on the error message will help you set the `),i(`code`,null,`error`),s(` to `),i(`code`,null,`false`),s(` and trigger the `),i(`code`,null,`load`),s(` event again.`)],-1),o(R,null,{default:t(()=>[...l[9]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` loading = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` error = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` list = ref([])
    
`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`load`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  `),i(`span`,{class:`hljs-built_in`},`setTimeout`),s(`(`),i(`span`,{class:`hljs-function`},`() =>`),s(` {
    `),i(`span`,{class:`hljs-keyword`},`if`),s(` (list.value.length === `),i(`span`,{class:`hljs-number`},`40`),s(`) {
      error.value = `),i(`span`,{class:`hljs-literal`},`true`),s(`
      loading.value = `),i(`span`,{class:`hljs-literal`},`false`),s(`
      `),i(`span`,{class:`hljs-keyword`},`return`),s(`
    }

    `),i(`span`,{class:`hljs-keyword`},`for`),s(` (`),i(`span`,{class:`hljs-keyword`},`let`),s(` i = `),i(`span`,{class:`hljs-number`},`0`),s(`; i < `),i(`span`,{class:`hljs-number`},`20`),s(`; i++) {
      list.value.push(list.value.length + `),i(`span`,{class:`hljs-number`},`1`),s(`)
    }

    loading.value = `),i(`span`,{class:`hljs-literal`},`false`),s(`
  }, `),i(`span`,{class:`hljs-number`},`1000`),s(`)
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-list`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model:error`),s(`=`),i(`span`,{class:`hljs-string`},`"error"`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model:loading`),s(`=`),i(`span`,{class:`hljs-string`},`"loading"`),s(`
    @`),i(`span`,{class:`hljs-attr`},`load`),s(`=`),i(`span`,{class:`hljs-string`},`"load"`),s(`
  >`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-cell`),s(),i(`span`,{class:`hljs-attr`},`:key`),s(`=`),i(`span`,{class:`hljs-string`},`"item"`),s(),i(`span`,{class:`hljs-attr`},`v-for`),s(`=`),i(`span`,{class:`hljs-string`},`"item in list"`),s(`>`)]),s(`
      List Item: {{ item }}
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-cell`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-list`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,_,[i(`h3`,v,[o(L,{to:`#TipText`},{default:t(()=>[...l[11]||=[s(`#`,-1)]]),_:1}),l[12]||=s(`Tip Text`,-1)]),o(R,null,{default:t(()=>[...l[13]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` loading = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` finished = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` list = ref([])

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`load`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  `),i(`span`,{class:`hljs-built_in`},`setTimeout`),s(`(`),i(`span`,{class:`hljs-function`},`() =>`),s(` {
    `),i(`span`,{class:`hljs-keyword`},`for`),s(` (`),i(`span`,{class:`hljs-keyword`},`let`),s(` i = `),i(`span`,{class:`hljs-number`},`0`),s(`; i < `),i(`span`,{class:`hljs-number`},`20`),s(`; i++) {
      list.value.push(list.value.length + `),i(`span`,{class:`hljs-number`},`1`),s(`)
    }

    loading.value = `),i(`span`,{class:`hljs-literal`},`false`),s(`

    `),i(`span`,{class:`hljs-keyword`},`if`),s(` (list.value.length >= `),i(`span`,{class:`hljs-number`},`60`),s(`) {
      finished.value = `),i(`span`,{class:`hljs-literal`},`true`),s(`
    }
  }, `),i(`span`,{class:`hljs-number`},`1000`),s(`)
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-list`),s(` 
    `),i(`span`,{class:`hljs-attr`},`loading-text`),s(`=`),i(`span`,{class:`hljs-string`},`"loading QAQ"`),s(` 
    `),i(`span`,{class:`hljs-attr`},`finished-text`),s(`=`),i(`span`,{class:`hljs-string`},`"finished ORZ"`),s(` 
    `),i(`span`,{class:`hljs-attr`},`error-text`),s(`=`),i(`span`,{class:`hljs-string`},`"error TNT"`),s(` 
    `),i(`span`,{class:`hljs-attr`},`:finished`),s(`=`),i(`span`,{class:`hljs-string`},`"finished"`),s(` 
    `),i(`span`,{class:`hljs-attr`},`v-model:loading`),s(`=`),i(`span`,{class:`hljs-string`},`"loading"`),s(` 
    @`),i(`span`,{class:`hljs-attr`},`load`),s(`=`),i(`span`,{class:`hljs-string`},`"load"`),s(`
  >`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-cell`),s(),i(`span`,{class:`hljs-attr`},`:key`),s(`=`),i(`span`,{class:`hljs-string`},`"item"`),s(),i(`span`,{class:`hljs-attr`},`v-for`),s(`=`),i(`span`,{class:`hljs-string`},`"item in list"`),s(`>`)]),s(`
      List Item: {{ item }}
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-cell`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-list`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,y,[i(`h3`,b,[o(L,{to:`#Combine`},{default:t(()=>[...l[14]||=[s(`#`,-1)]]),_:1}),l[15]||=s(`Combine`,-1)]),l[17]||=i(`p`,null,[s(`Combined with the `),i(`code`,null,`PullRefresh`),s(` component to implement the function of pull-up loading and pull-down refresh, ensuring the height of the `),i(`code`,null,`PullRefresh`),s(` is not `),i(`code`,null,`0`),s(`.`)],-1),o(R,null,{default:t(()=>[...l[16]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
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
`)])],-1)]]),_:1})]),i(`div`,x,[i(`h3`,S,[o(L,{to:`#BeCareful`},{default:t(()=>[...l[18]||=[s(`#`,-1)]]),_:1}),l[19]||=s(`Be Careful`,-1)]),l[20]||=c(`<p>We detect bottoming by listening for the scroll event of the scroll container and perform the load. A scroll container is the nearest element that <code>overflow-y=&#39;auto&#39;</code> or <code>scroll</code> When you set an element&#39;s <code>overflow-x</code> to a value other than <code>visible</code>, The browser will fix your <code>overflow-y</code> to <code>auto</code> in order to maintain a <code>BFC</code> structure. This can be mistaken for a scroll container, so avoid it.</p>`,1)]),l[37]||=i(`h2`,null,`API`,-1),i(`div`,C,[i(`h3`,w,[o(L,{to:`#Props`},{default:t(()=>[...l[21]||=[s(`#`,-1)]]),_:1}),l[22]||=s(`Props`,-1)]),l[23]||=c(`<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:loading</code></td><td>Loading state</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>v-model:error</code></td><td>Error state</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>immediate-check</code></td><td>Whether the location is detected immediately when the List is initialized</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>finished</code></td><td>Whether the load is complete</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>offset</code></td><td>Trigger distance from the bottom</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>loading-text</code></td><td>Loading text</td><td><em>string</em></td><td><code>Loading</code></td></tr><tr><td><code>finished-text</code></td><td>Finished text</td><td><em>string</em></td><td><code>No more</code></td></tr><tr><td><code>error-text</code></td><td>Error text</td><td><em>string</em></td><td><code>Load fail</code></td></tr></tbody></table>`,1)]),i(`div`,T,[i(`h3`,E,[o(L,{to:`#Methods`},{default:t(()=>[...l[24]||=[s(`#`,-1)]]),_:1}),l[25]||=s(`Methods`,-1)]),l[26]||=c(`<table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>check</code></td><td>Trigger position check, touch bottom trigger load event</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>`,1)]),i(`div`,D,[i(`h3`,O,[o(L,{to:`#Events`},{default:t(()=>[...l[27]||=[s(`#`,-1)]]),_:1}),l[28]||=s(`Events`,-1)]),l[29]||=i(`table`,null,[i(`thead`,null,[i(`tr`,null,[i(`th`,null,`Event`),i(`th`,null,`Description`),i(`th`,null,`Arguments`)])]),i(`tbody`,null,[i(`tr`,null,[i(`td`,null,[i(`code`,null,`load`)]),i(`td`,null,`Triggered when it hit bottom`),i(`td`,null,[i(`code`,null,`-`)])])])],-1)]),i(`div`,k,[i(`h3`,A,[o(L,{to:`#Slots`},{default:t(()=>[...l[30]||=[s(`#`,-1)]]),_:1}),l[31]||=s(`Slots`,-1)]),l[32]||=c(`<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>List content</td><td><code>-</code></td></tr><tr><td><code>loading</code></td><td>Loading content</td><td><code>-</code></td></tr><tr><td><code>error</code></td><td>Error content</td><td><code>-</code></td></tr><tr><td><code>finished</code></td><td>Finished content</td><td><code>-</code></td></tr></tbody></table>`,1)]),i(`div`,j,[i(`h3`,M,[o(L,{to:`#StyleVariables`},{default:t(()=>[...l[33]||=[s(`#`,-1)]]),_:1}),l[34]||=s(`Style Variables`,-1)]),l[35]||=c(`<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--list-loading-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-finished-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-error-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-loading-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-finished-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-error-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-loading-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--list-finished-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--list-error-font-size</code></td><td><code>var(--font-size-md)</code></td></tr></tbody></table>`,2)])])}var P=e(l,[[`render`,N]]);export{P as default};