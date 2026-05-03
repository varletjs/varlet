import{L as e,N as t,W as n,c as r,d as i,g as a,h as o,m as s}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as c}from"./_plugin-vue_export-helper-V-yks4gF.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`jie4shao4`},p={class:`card`},m={id:`ji1ben3shi3yong4`},h={class:`card`},g={id:`jia1zai4shi1bai4`},_={class:`card`},v={id:`ti2shi4wen2zi4`},y={class:`card`},b={id:`zu3he2`},x={class:`card`},S={id:`zhu4yi4`},C={class:`card`},w={id:`shu3xing4`},T={class:`card`},E={id:`fang1fa3`},D={class:`card`},O={id:`shi4jian4`},k={class:`card`},A={id:`cha1cao2`},j={class:`card`},M={id:`yang4shi4bian4liang4`};function N(c,l,N,P,F,I){let L=e(`router-link`),R=e(`var-site-code-example`);return t(),i(`div`,u,[l[36]||=r(`h1`,null,`无限滚动列表`,-1),r(`div`,d,[r(`h3`,f,[a(L,{to:`#jie4shao4`},{default:n(()=>[...l[0]||=[o(`#`,-1)]]),_:1}),l[1]||=o(`介绍`,-1)]),l[2]||=r(`p`,null,`无限滚动加载列表、触底加载，支持手动检查位置并加载。支持自定义加载状态、错误状态、数据加载完成状态。`,-1)]),r(`div`,p,[r(`h3`,m,[a(L,{to:`#ji1ben3shi3yong4`},{default:n(()=>[...l[3]||=[o(`#`,-1)]]),_:1}),l[4]||=o(`基本使用`,-1)]),l[6]||=r(`p`,null,[o(`当检测到滚动容器滚动到底部底部时会触发 `),r(`code`,null,`load`),o(` 事件，并会设置 `),r(`code`,null,`loading`),o(` 为 `),r(`code`,null,`true`),o(`，在加载结束时您需要手动设置 `),r(`code`,null,`loading`),o(` 为 `),r(`code`,null,`false`),o(`，表示加载结束。`)],-1),a(R,null,{default:n(()=>[...l[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
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
      列表项: {{ item }}
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-list`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`

`)])],-1)]]),_:1})]),r(`div`,h,[r(`h3`,g,[a(L,{to:`#jia1zai4shi1bai4`},{default:n(()=>[...l[7]||=[o(`#`,-1)]]),_:1}),l[8]||=o(`加载失败`,-1)]),l[10]||=r(`p`,null,[o(`您可以使用 `),r(`code`,null,`v-model:error`),o(` 手动设置错误状态，会展示错误提示，点击错误提示会帮您把 `),r(`code`,null,`error`),o(` 设置成 `),r(`code`,null,`false`),o(` 并再次触发 `),r(`code`,null,`load`),o(` 事件。`)],-1),a(R,null,{default:n(()=>[...l[9]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
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
      列表项: {{ item }}
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-list`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,_,[r(`h3`,v,[a(L,{to:`#ti2shi4wen2zi4`},{default:n(()=>[...l[11]||=[o(`#`,-1)]]),_:1}),l[12]||=o(`提示文字`,-1)]),a(R,null,{default:n(()=>[...l[13]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
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
    `),r(`span`,{class:`hljs-attr`},`loading-text`),o(`=`),r(`span`,{class:`hljs-string`},`"正在努力输出"`),o(`
    `),r(`span`,{class:`hljs-attr`},`finished-text`),o(`=`),r(`span`,{class:`hljs-string`},`"一滴都没有了"`),o(`
    `),r(`span`,{class:`hljs-attr`},`error-text`),o(`=`),r(`span`,{class:`hljs-string`},`"出错了出错了"`),o(`
    `),r(`span`,{class:`hljs-attr`},`:finished`),o(`=`),r(`span`,{class:`hljs-string`},`"finished"`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model:loading`),o(`=`),r(`span`,{class:`hljs-string`},`"loading"`),o(`
    @`),r(`span`,{class:`hljs-attr`},`load`),o(`=`),r(`span`,{class:`hljs-string`},`"load"`),o(`
  >`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-cell`),o(),r(`span`,{class:`hljs-attr`},`:key`),o(`=`),r(`span`,{class:`hljs-string`},`"item"`),o(),r(`span`,{class:`hljs-attr`},`v-for`),o(`=`),r(`span`,{class:`hljs-string`},`"item in list"`),o(`>`)]),o(`
      列表项: {{ item }}
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-list`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,y,[r(`h3`,b,[a(L,{to:`#zu3he2`},{default:n(()=>[...l[14]||=[o(`#`,-1)]]),_:1}),l[15]||=o(`组合`,-1)]),l[17]||=r(`p`,null,[o(`与 `),r(`code`,null,`PullRefresh`),o(` 组件结合使用即可实现上拉加载和下拉刷新的功能，需保证`),r(`code`,null,`PullRefresh`),o(` 容器高度不为 `),r(`code`,null,`0`),o(`。`)],-1),a(R,null,{default:n(()=>[...l[16]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
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
`)])],-1)]]),_:1})]),r(`div`,x,[r(`h3`,S,[a(L,{to:`#zhu4yi4`},{default:n(()=>[...l[18]||=[o(`#`,-1)]]),_:1}),l[19]||=o(`注意`,-1)]),l[20]||=s(`<p>我们是通过监听滚动容器的 <code>scroll</code> 事件检测是否触底并执行加载。 滚动容器是指最近的一个 <code>overflow-y</code> 为 <code>auto</code> 或者 <code>scroll</code> 的元素。 当您设置一个元素的 <code>overflow-x</code> 为除了 <code>visible</code> 以外的值时，浏览器为了维护一个 <code>bfc</code> 的结构会使您的 <code>overflow-y</code> 修正为 <code>auto</code>。 这时我们就会误认为这个元素也是一个滚动容器，注意规避。</p>`,1)]),l[37]||=r(`h2`,null,`API`,-1),r(`div`,C,[r(`h3`,w,[a(L,{to:`#shu3xing4`},{default:n(()=>[...l[21]||=[o(`#`,-1)]]),_:1}),l[22]||=o(`属性`,-1)]),l[23]||=s(`<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:loading</code></td><td>加载状态</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>v-model:error</code></td><td>错误状态</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>immediate-check</code></td><td>是否在组件初始化时立刻检测位置</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>finished</code></td><td>是否加载完毕</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>offset</code></td><td>距离底部的触发距离</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>loading-text</code></td><td>加载状态文字</td><td><em>string</em></td><td><code>加载中</code></td></tr><tr><td><code>finished-text</code></td><td>加载完毕文字</td><td><em>string</em></td><td><code>没有更多了</code></td></tr><tr><td><code>error-text</code></td><td>加载失败文字</td><td><em>string</em></td><td><code>加载失败</code></td></tr></tbody></table>`,1)]),r(`div`,T,[r(`h3`,E,[a(L,{to:`#fang1fa3`},{default:n(()=>[...l[24]||=[o(`#`,-1)]]),_:1}),l[25]||=o(`方法`,-1)]),l[26]||=s(`<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>check</code></td><td>触发位置检查, 触底触发 load 事件。</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,D,[r(`h3`,O,[a(L,{to:`#shi4jian4`},{default:n(()=>[...l[27]||=[o(`#`,-1)]]),_:1}),l[28]||=o(`事件`,-1)]),l[29]||=r(`table`,null,[r(`thead`,null,[r(`tr`,null,[r(`th`,null,`事件名`),r(`th`,null,`说明`),r(`th`,null,`参数`)])]),r(`tbody`,null,[r(`tr`,null,[r(`td`,null,[r(`code`,null,`load`)]),r(`td`,null,`触底时触发`),r(`td`,null,[r(`code`,null,`-`)])])])],-1)]),r(`div`,k,[r(`h3`,A,[a(L,{to:`#cha1cao2`},{default:n(()=>[...l[30]||=[o(`#`,-1)]]),_:1}),l[31]||=o(`插槽`,-1)]),l[32]||=s(`<table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>列表内容</td><td><code>-</code></td></tr><tr><td><code>loading</code></td><td>加载中内容</td><td><code>-</code></td></tr><tr><td><code>error</code></td><td>加载失败内容</td><td><code>-</code></td></tr><tr><td><code>finished</code></td><td>加载完毕内容</td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,j,[r(`h3`,M,[a(L,{to:`#yang4shi4bian4liang4`},{default:n(()=>[...l[33]||=[o(`#`,-1)]]),_:1}),l[34]||=o(`样式变量`,-1)]),l[35]||=s(`<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--list-loading-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-finished-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-error-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-loading-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-finished-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-error-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-loading-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--list-finished-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--list-error-font-size</code></td><td><code>var(--font-size-md)</code></td></tr></tbody></table>`,2)])])}var P=c(l,[[`render`,N]]);export{P as default};