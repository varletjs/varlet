import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s,m as c}from"./runtime-core.esm-bundler-DUghkl6b.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`jie4shao4`},p={class:`card`},m={id:`ji1ben3shi3yong4`},h={class:`card`},g={id:`jia1zai4shi1bai4`},_={class:`card`},v={id:`ti2shi4wen2zi4`},y={class:`card`},b={id:`zu3he2`},x={class:`card`},S={id:`zhu4yi4`},C={class:`card`},w={id:`shu3xing4`},T={class:`card`},E={id:`fang1fa3`},D={class:`card`},O={id:`shi4jian4`},k={class:`card`},A={id:`cha1cao2`},j={class:`card`},M={id:`yang4shi4bian4liang4`};function N(e,l,N,P,F,I){let L=n(`router-link`),R=n(`var-site-code-example`);return r(),a(`div`,u,[l[36]||=i(`h1`,null,`无限滚动列表`,-1),i(`div`,d,[i(`h3`,f,[o(L,{to:`#jie4shao4`},{default:t(()=>[...l[0]||=[s(`#`,-1)]]),_:1}),l[1]||=s(`介绍`,-1)]),l[2]||=i(`p`,null,`无限滚动加载列表、触底加载，支持手动检查位置并加载。支持自定义加载状态、错误状态、数据加载完成状态。`,-1)]),i(`div`,p,[i(`h3`,m,[o(L,{to:`#ji1ben3shi3yong4`},{default:t(()=>[...l[3]||=[s(`#`,-1)]]),_:1}),l[4]||=s(`基本使用`,-1)]),l[6]||=i(`p`,null,[s(`当检测到滚动容器滚动到底部底部时会触发 `),i(`code`,null,`load`),s(` 事件，并会设置 `),i(`code`,null,`loading`),s(` 为 `),i(`code`,null,`true`),s(`，在加载结束时您需要手动设置 `),i(`code`,null,`loading`),s(` 为 `),i(`code`,null,`false`),s(`，表示加载结束。`)],-1),o(R,null,{default:t(()=>[...l[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
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
      列表项: {{ item }}
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-cell`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-list`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

`)])],-1)]]),_:1})]),i(`div`,h,[i(`h3`,g,[o(L,{to:`#jia1zai4shi1bai4`},{default:t(()=>[...l[7]||=[s(`#`,-1)]]),_:1}),l[8]||=s(`加载失败`,-1)]),l[10]||=i(`p`,null,[s(`您可以使用 `),i(`code`,null,`v-model:error`),s(` 手动设置错误状态，会展示错误提示，点击错误提示会帮您把 `),i(`code`,null,`error`),s(` 设置成 `),i(`code`,null,`false`),s(` 并再次触发 `),i(`code`,null,`load`),s(` 事件。`)],-1),o(R,null,{default:t(()=>[...l[9]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
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
      列表项: {{ item }}
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-cell`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-list`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,_,[i(`h3`,v,[o(L,{to:`#ti2shi4wen2zi4`},{default:t(()=>[...l[11]||=[s(`#`,-1)]]),_:1}),l[12]||=s(`提示文字`,-1)]),o(R,null,{default:t(()=>[...l[13]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
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
    `),i(`span`,{class:`hljs-attr`},`loading-text`),s(`=`),i(`span`,{class:`hljs-string`},`"正在努力输出"`),s(`
    `),i(`span`,{class:`hljs-attr`},`finished-text`),s(`=`),i(`span`,{class:`hljs-string`},`"一滴都没有了"`),s(`
    `),i(`span`,{class:`hljs-attr`},`error-text`),s(`=`),i(`span`,{class:`hljs-string`},`"出错了出错了"`),s(`
    `),i(`span`,{class:`hljs-attr`},`:finished`),s(`=`),i(`span`,{class:`hljs-string`},`"finished"`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model:loading`),s(`=`),i(`span`,{class:`hljs-string`},`"loading"`),s(`
    @`),i(`span`,{class:`hljs-attr`},`load`),s(`=`),i(`span`,{class:`hljs-string`},`"load"`),s(`
  >`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-cell`),s(),i(`span`,{class:`hljs-attr`},`:key`),s(`=`),i(`span`,{class:`hljs-string`},`"item"`),s(),i(`span`,{class:`hljs-attr`},`v-for`),s(`=`),i(`span`,{class:`hljs-string`},`"item in list"`),s(`>`)]),s(`
      列表项: {{ item }}
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-cell`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-list`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,y,[i(`h3`,b,[o(L,{to:`#zu3he2`},{default:t(()=>[...l[14]||=[s(`#`,-1)]]),_:1}),l[15]||=s(`组合`,-1)]),l[17]||=i(`p`,null,[s(`与 `),i(`code`,null,`PullRefresh`),s(` 组件结合使用即可实现上拉加载和下拉刷新的功能，需保证`),i(`code`,null,`PullRefresh`),s(` 容器高度不为 `),i(`code`,null,`0`),s(`。`)],-1),o(R,null,{default:t(()=>[...l[16]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
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
`)])],-1)]]),_:1})]),i(`div`,x,[i(`h3`,S,[o(L,{to:`#zhu4yi4`},{default:t(()=>[...l[18]||=[s(`#`,-1)]]),_:1}),l[19]||=s(`注意`,-1)]),l[20]||=c(`<p>我们是通过监听滚动容器的 <code>scroll</code> 事件检测是否触底并执行加载。 滚动容器是指最近的一个 <code>overflow-y</code> 为 <code>auto</code> 或者 <code>scroll</code> 的元素。 当您设置一个元素的 <code>overflow-x</code> 为除了 <code>visible</code> 以外的值时，浏览器为了维护一个 <code>bfc</code> 的结构会使您的 <code>overflow-y</code> 修正为 <code>auto</code>。 这时我们就会误认为这个元素也是一个滚动容器，注意规避。</p>`,1)]),l[37]||=i(`h2`,null,`API`,-1),i(`div`,C,[i(`h3`,w,[o(L,{to:`#shu3xing4`},{default:t(()=>[...l[21]||=[s(`#`,-1)]]),_:1}),l[22]||=s(`属性`,-1)]),l[23]||=c(`<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:loading</code></td><td>加载状态</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>v-model:error</code></td><td>错误状态</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>immediate-check</code></td><td>是否在组件初始化时立刻检测位置</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>finished</code></td><td>是否加载完毕</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>offset</code></td><td>距离底部的触发距离</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>loading-text</code></td><td>加载状态文字</td><td><em>string</em></td><td><code>加载中</code></td></tr><tr><td><code>finished-text</code></td><td>加载完毕文字</td><td><em>string</em></td><td><code>没有更多了</code></td></tr><tr><td><code>error-text</code></td><td>加载失败文字</td><td><em>string</em></td><td><code>加载失败</code></td></tr></tbody></table>`,1)]),i(`div`,T,[i(`h3`,E,[o(L,{to:`#fang1fa3`},{default:t(()=>[...l[24]||=[s(`#`,-1)]]),_:1}),l[25]||=s(`方法`,-1)]),l[26]||=c(`<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>check</code></td><td>触发位置检查, 触底触发 load 事件。</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>`,1)]),i(`div`,D,[i(`h3`,O,[o(L,{to:`#shi4jian4`},{default:t(()=>[...l[27]||=[s(`#`,-1)]]),_:1}),l[28]||=s(`事件`,-1)]),l[29]||=i(`table`,null,[i(`thead`,null,[i(`tr`,null,[i(`th`,null,`事件名`),i(`th`,null,`说明`),i(`th`,null,`参数`)])]),i(`tbody`,null,[i(`tr`,null,[i(`td`,null,[i(`code`,null,`load`)]),i(`td`,null,`触底时触发`),i(`td`,null,[i(`code`,null,`-`)])])])],-1)]),i(`div`,k,[i(`h3`,A,[o(L,{to:`#cha1cao2`},{default:t(()=>[...l[30]||=[s(`#`,-1)]]),_:1}),l[31]||=s(`插槽`,-1)]),l[32]||=c(`<table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>列表内容</td><td><code>-</code></td></tr><tr><td><code>loading</code></td><td>加载中内容</td><td><code>-</code></td></tr><tr><td><code>error</code></td><td>加载失败内容</td><td><code>-</code></td></tr><tr><td><code>finished</code></td><td>加载完毕内容</td><td><code>-</code></td></tr></tbody></table>`,1)]),i(`div`,j,[i(`h3`,M,[o(L,{to:`#yang4shi4bian4liang4`},{default:t(()=>[...l[33]||=[s(`#`,-1)]]),_:1}),l[34]||=s(`样式变量`,-1)]),l[35]||=c(`<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--list-loading-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-finished-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-error-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-loading-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-finished-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-error-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-loading-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--list-finished-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--list-error-font-size</code></td><td><code>var(--font-size-md)</code></td></tr></tbody></table>`,2)])])}var P=e(l,[[`render`,N]]);export{P as default};