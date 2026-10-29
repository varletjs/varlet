import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s,m as c}from"./runtime-core.esm-bundler-DUghkl6b.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`jie4shao4`},p={class:`card`},m={id:`ji1ben3shi3yong4`},h={class:`card`},g={id:`zu3he2`},_={class:`card`},v={id:`zhu4yi4`},y={class:`card`},b={id:`shu3xing4`},x={class:`card`},S={id:`shi4jian4`},C={class:`card`},w={id:`cha1cao2`},T={class:`card`},E={id:`yang4shi4bian4liang4`};function D(e,l,D,O,k,A){let j=n(`router-link`),M=n(`var-site-code-example`);return r(),a(`div`,u,[l[27]||=i(`h1`,null,`下拉刷新`,-1),i(`div`,d,[i(`h3`,f,[o(j,{to:`#jie4shao4`},{default:t(()=>[...l[0]||=[s(`#`,-1)]]),_:1}),l[1]||=s(`介绍`,-1)]),l[2]||=i(`p`,null,`用于提供下拉刷新的交互操作。`,-1)]),i(`div`,p,[i(`h3`,m,[o(j,{to:`#ji1ben3shi3yong4`},{default:t(()=>[...l[3]||=[s(`#`,-1)]]),_:1}),l[4]||=s(`基本使用`,-1)]),l[6]||=i(`p`,null,[s(`下拉到刷新位置时松开会触发 `),i(`code`,null,`refresh`),s(` 事件， 在事件开始时将 `),i(`code`,null,`v-model`),s(` 设置为 `),i(`code`,null,`true`),s(` 表示正在加载，完成后将 `),i(`code`,null,`v-model`),s(` 设置为 `),i(`code`,null,`false`),s(` 表示加载结束。`)],-1),o(M,null,{default:t(()=>[...l[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
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
`)])],-1)]]),_:1})]),i(`div`,h,[i(`h3`,g,[o(j,{to:`#zu3he2`},{default:t(()=>[...l[7]||=[s(`#`,-1)]]),_:1}),l[8]||=s(`组合`,-1)]),l[10]||=i(`p`,null,[s(`与 `),i(`code`,null,`List`),s(` 组件结合使用即可实现上拉加载和下拉刷新的功能，需保证 `),i(`code`,null,`PullRefresh`),s(` 容器高度不为 `),i(`code`,null,`0`),s(`。`)],-1),o(M,null,{default:t(()=>[...l[9]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
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
`)])],-1)]]),_:1})]),i(`div`,_,[i(`h3`,v,[o(j,{to:`#zhu4yi4`},{default:t(()=>[...l[11]||=[s(`#`,-1)]]),_:1}),l[12]||=s(`注意`,-1)]),l[14]||=i(`p`,null,[s(`当 `),i(`code`,null,`PullRefresh`),s(` 容器高度为 `),i(`code`,null,`0`),s(` 时会导致下拉功能失效，所以需保证其子元素高度`),i(`strong`,null,`不为`),s(),i(`code`,null,`0`),s(` 或为 `),i(`code`,null,`PullRefresh`),s(` 容器设置高度:`)],-1),o(M,{"playground-ignore":``},{default:t(()=>[...l[13]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-pull-refresh`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`style`),s(`=`),i(`span`,{class:`hljs-string`},`"height: 200px"`),s(`>`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-pull-refresh`),s(`>`)]),s(`

  `),i(`span`,{class:`hljs-comment`},`<!-- 或 -->`),s(`
  
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-pull-refresh`),s(),i(`span`,{class:`hljs-attr`},`style`),s(`=`),i(`span`,{class:`hljs-string`},`"height: 200px"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-pull-refresh`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),l[28]||=i(`h2`,null,`API`,-1),i(`div`,y,[i(`h3`,b,[o(j,{to:`#shu3xing4`},{default:t(()=>[...l[15]||=[s(`#`,-1)]]),_:1}),l[16]||=s(`属性`,-1)]),l[17]||=c(`<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>是否处于加载中状态</td><td><em>boolean</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用下拉刷新</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>target</code></td><td>触发滚动的对象，如果为 undefined 会监听距离最近的一个可滚动的祖先节点</td><td><em>string | HTMLElement</em></td><td><code>-</code></td></tr><tr><td><code>animation-duration</code></td><td>加载结束后回到初始位置的动画时长（ms）</td><td><em>string | number</em></td><td><code>300</code></td></tr><tr><td><code>success-duration</code></td><td>成功提示展示时长（ms）</td><td><em>string | number</em></td><td><code>2000</code></td></tr><tr><td><code>bg-color</code></td><td>control 的背景颜色</td><td><em>string</em></td><td><code>#005CAF</code></td></tr><tr><td><code>color</code></td><td>control 的颜色</td><td><em>string</em></td><td><code>#ffffff</code></td></tr><tr><td><code>success-bg-color</code></td><td>成功状态下 control 的背景颜色</td><td><em>string</em></td><td><code>#4CAF50</code></td></tr><tr><td><code>success-color</code></td><td>成功状态下 control 的颜色</td><td><em>string</em></td><td><code>ffffff</code></td></tr></tbody></table>`,1)]),i(`div`,x,[i(`h3`,S,[o(j,{to:`#shi4jian4`},{default:t(()=>[...l[18]||=[s(`#`,-1)]]),_:1}),l[19]||=s(`事件`,-1)]),l[20]||=i(`table`,null,[i(`thead`,null,[i(`tr`,null,[i(`th`,null,`事件名`),i(`th`,null,`说明`),i(`th`,null,`回调参数`)])]),i(`tbody`,null,[i(`tr`,null,[i(`td`,null,[i(`code`,null,`refresh`)]),i(`td`,null,`下拉刷新时触发`),i(`td`,null,[i(`code`,null,`-`)])])])],-1)]),i(`div`,C,[i(`h3`,w,[o(j,{to:`#cha1cao2`},{default:t(()=>[...l[21]||=[s(`#`,-1)]]),_:1}),l[22]||=s(`插槽`,-1)]),l[23]||=i(`table`,null,[i(`thead`,null,[i(`tr`,null,[i(`th`,null,`名称`),i(`th`,null,`说明`),i(`th`,null,`参数`)])]),i(`tbody`,null,[i(`tr`,null,[i(`td`,null,[i(`code`,null,`default`)]),i(`td`,null,`默认插槽`),i(`td`,null,[i(`code`,null,`-`)])])])],-1)]),i(`div`,T,[i(`h3`,E,[o(j,{to:`#yang4shi4bian4liang4`},{default:t(()=>[...l[24]||=[s(`#`,-1)]]),_:1}),l[25]||=s(`样式变量`,-1)]),l[26]||=c(`<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--pull-refresh-size</code></td><td><code>40px</code></td></tr><tr><td><code>--pull-refresh-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--pull-refresh-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--pull-refresh-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--pull-refresh-icon-size</code></td><td><code>25px</code></td></tr></tbody></table>`,2)])])}var O=e(l,[[`render`,D]]);export{O as default};