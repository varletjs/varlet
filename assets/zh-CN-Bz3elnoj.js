import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s,m as c}from"./runtime-core.esm-bundler-DUghkl6b.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`jie4shao4`},p={class:`card`},m={id:`ji1ben3shi3yong4`},h={class:`card`},g={id:`chu3li3hui2tiao2han2shu4`},_={class:`card`},v={id:`ji1ben3shi3yong4`},y={class:`card`},b={id:`zhi3ding4chu1shi3wei4zhi4`},x={class:`card`},S={id:`zhan3shi4guan1bi4an4niu3`},C={class:`card`},w={id:`jian1ting1guan1bi4shi4jian4`},T={class:`card`},E={id:`jian1ting1chang2an4shi4jian4`},D={class:`card`},O={id:`zhan3shi4e2wai4cha1cao2`},k={class:`card`},A={id:`shu3xing4`},j={class:`card`},M={id:`shi4jian4`},N={class:`card`},P={id:`fang1fa3`},F={class:`card`},I={id:`cha1cao2`},L={class:`card`},R={id:`ImagePreviewOptions`},z={class:`card`},B={id:`yang4shi4bian4liang4`};function V(e,l,V,H,U,W){let G=n(`router-link`),K=n(`var-site-code-example`);return r(),a(`div`,u,[l[46]||=i(`h1`,null,`图片预览`,-1),i(`div`,d,[i(`h3`,f,[o(G,{to:`#jie4shao4`},{default:t(()=>[...l[0]||=[s(`#`,-1)]]),_:1}),l[1]||=s(`介绍`,-1)]),l[2]||=i(`p`,null,`图片放大预览，支持双击倍数放大，支持函数调用和组件调用两种方式。`,-1)]),l[47]||=i(`h2`,null,`函数调用`,-1),i(`div`,p,[i(`h3`,m,[o(G,{to:`#ji1ben3shi3yong4`},{default:t(()=>[...l[3]||=[s(`#`,-1)]]),_:1}),l[4]||=s(`基本使用`,-1)]),o(K,null,{default:t(()=>[...l[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ImagePreview } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`preview`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  ImagePreview(`),i(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),s(`)
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"preview"`),s(`>`)]),s(`基本使用`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,h,[i(`h3`,g,[o(G,{to:`#chu3li3hui2tiao2han2shu4`},{default:t(()=>[...l[6]||=[s(`#`,-1)]]),_:1}),l[7]||=s(`处理回调函数`,-1)]),o(K,null,{default:t(()=>[...l[8]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ImagePreview, Snackbar } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`preview`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  ImagePreview({
    `),i(`span`,{class:`hljs-attr`},`images`),s(`: [
      `),i(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),s(`,
      `),i(`span`,{class:`hljs-string`},`'https://varletjs.org/cat2.jpg'`),s(`
    ],
    `),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-title`},`onChange`),s(`(`),i(`span`,{class:`hljs-params`},`index`),s(`)`)]),s(` {
      Snackbar(`),i(`span`,{class:`hljs-built_in`},`String`),s(`(index))
    }
  })
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"preview"`),s(`>`)]),s(`处理回调函数`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),l[48]||=i(`h2`,null,`组件调用`,-1),i(`div`,_,[i(`h3`,v,[o(G,{to:`#ji1ben3shi3yong4`},{default:t(()=>[...l[9]||=[s(`#`,-1)]]),_:1}),l[10]||=s(`基本使用`,-1)]),o(K,null,{default:t(()=>[...l[11]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` show = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` images = ref([
  `),i(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),s(`,
  `),i(`span`,{class:`hljs-string`},`'https://varletjs.org/cat2.jpg'`),s(`,
])
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(`
    `),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"warning"`),s(`
    `),i(`span`,{class:`hljs-attr`},`block`),s(`
    @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"show = true"`),s(`
  >`)]),s(`
    基本使用
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-image-preview`),s(),i(`span`,{class:`hljs-attr`},`:images`),s(`=`),i(`span`,{class:`hljs-string`},`"images"`),s(),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"show"`),s(` />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,y,[i(`h3`,b,[o(G,{to:`#zhi3ding4chu1shi3wei4zhi4`},{default:t(()=>[...l[12]||=[s(`#`,-1)]]),_:1}),l[13]||=s(`指定初始位置`,-1)]),o(K,null,{default:t(()=>[...l[14]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` show = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` images = ref([
  `),i(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),s(`,
  `),i(`span`,{class:`hljs-string`},`'https://varletjs.org/cat2.jpg'`),s(`,
])
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(`
    `),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"warning"`),s(`
    `),i(`span`,{class:`hljs-attr`},`block`),s(`
    @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"show = true"`),s(`
  >`)]),s(`
    指定初始位置
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-image-preview`),s(`
    `),i(`span`,{class:`hljs-attr`},`:initial-index`),s(`=`),i(`span`,{class:`hljs-string`},`"1"`),s(`
    `),i(`span`,{class:`hljs-attr`},`:images`),s(`=`),i(`span`,{class:`hljs-string`},`"images"`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"show"`),s(`
  />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,x,[i(`h3`,S,[o(G,{to:`#zhan3shi4guan1bi4an4niu3`},{default:t(()=>[...l[15]||=[s(`#`,-1)]]),_:1}),l[16]||=s(`展示关闭按钮`,-1)]),o(K,null,{default:t(()=>[...l[17]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` show = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` images = ref([
  `),i(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),s(`,
  `),i(`span`,{class:`hljs-string`},`'https://varletjs.org/cat2.jpg'`),s(`,
])
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(`
    `),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"warning"`),s(`
    `),i(`span`,{class:`hljs-attr`},`block`),s(`
    @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"show = true"`),s(`
  >`)]),s(`
    展示关闭按钮
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-image-preview`),s(`
    `),i(`span`,{class:`hljs-attr`},`closeable`),s(`
    `),i(`span`,{class:`hljs-attr`},`:images`),s(`=`),i(`span`,{class:`hljs-string`},`"images"`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"show"`),s(`
  />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,C,[i(`h3`,w,[o(G,{to:`#jian1ting1guan1bi4shi4jian4`},{default:t(()=>[...l[18]||=[s(`#`,-1)]]),_:1}),l[19]||=s(`监听关闭事件`,-1)]),o(K,null,{default:t(()=>[...l[20]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Snackbar } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` show = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` images = ref([
  `),i(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),s(`,
  `),i(`span`,{class:`hljs-string`},`'https://varletjs.org/cat2.jpg'`),s(`,
])
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(`
    `),i(`span`,{class:`hljs-attr`},`block`),s(`
    `),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"warning"`),s(`
    @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"show = true"`),s(`
  >`)]),s(`
    监听关闭事件
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-image-preview`),s(`
    `),i(`span`,{class:`hljs-attr`},`:images`),s(`=`),i(`span`,{class:`hljs-string`},`"images"`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"show"`),s(`
    @`),i(`span`,{class:`hljs-attr`},`close`),s(`=`),i(`span`,{class:`hljs-string`},`"Snackbar('触发了关闭事件。')"`),s(`
  />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,T,[i(`h3`,E,[o(G,{to:`#jian1ting1chang2an4shi4jian4`},{default:t(()=>[...l[21]||=[s(`#`,-1)]]),_:1}),l[22]||=s(`监听长按事件`,-1)]),l[24]||=i(`p`,null,[s(`通过 `),i(`code`,null,`image-prevent-default`),s(` 属性禁止图片默认行为，可自定义 `),i(`code`,null,`long-press`),s(` 事件来实现长按需求。`)],-1),o(K,null,{default:t(()=>[...l[23]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Snackbar } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` show = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` images = ref([
  `),i(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),s(`,
  `),i(`span`,{class:`hljs-string`},`'https://varletjs.org/cat2.jpg'`),s(`,
])
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(`
    `),i(`span`,{class:`hljs-attr`},`block`),s(`
    `),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"warning"`),s(`
    @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"show = true"`),s(`
  >`)]),s(`
    监听长按事件
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-image-preview`),s(`
    `),i(`span`,{class:`hljs-attr`},`image-prevent-default`),s(`
    `),i(`span`,{class:`hljs-attr`},`:images`),s(`=`),i(`span`,{class:`hljs-string`},`"images"`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"show"`),s(`
    @`),i(`span`,{class:`hljs-attr`},`long-press`),s(`=`),i(`span`,{class:`hljs-string`},`"Snackbar('触发了长按事件')"`),s(`
  />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,D,[i(`h3`,O,[o(G,{to:`#zhan3shi4e2wai4cha1cao2`},{default:t(()=>[...l[25]||=[s(`#`,-1)]]),_:1}),l[26]||=s(`展示额外插槽`,-1)]),o(K,null,{default:t(()=>[...l[27]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` show = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` menuShow = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` images = ref([
  `),i(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),s(`,
  `),i(`span`,{class:`hljs-string`},`'https://varletjs.org/cat2.jpg'`),s(`,
])
`),i(`span`,{class:`hljs-keyword`},`const`),s(` actions = [
  {
    `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'操作'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'wrench'`),s(`
  },
  {
    `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'操作'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'wrench'`),s(`
  }
]
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(`
    `),i(`span`,{class:`hljs-attr`},`block`),s(`
    `),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"warning"`),s(` 
    @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"show = true"`),s(`
  >`)]),s(`
    展示额外插槽
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-image-preview`),s(),i(`span`,{class:`hljs-attr`},`:images`),s(`=`),i(`span`,{class:`hljs-string`},`"images"`),s(),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"show"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`extra`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(`
        `),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"menu"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:size`),s(`=`),i(`span`,{class:`hljs-string`},`"22"`),s(`
        `),i(`span`,{class:`hljs-attr`},`color`),s(`=`),i(`span`,{class:`hljs-string`},`"#fff"`),s(`
        @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"menuShow = true"`),s(`
      />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-action-sheet`),s(),i(`span`,{class:`hljs-attr`},`:actions`),s(`=`),i(`span`,{class:`hljs-string`},`"actions"`),s(),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"menuShow"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-image-preview`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),l[49]||=i(`h2`,null,`API`,-1),i(`div`,k,[i(`h3`,A,[o(G,{to:`#shu3xing4`},{default:t(()=>[...l[28]||=[s(`#`,-1)]]),_:1}),l[29]||=s(`属性`,-1)]),l[30]||=c(`<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>是否显示</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>images</code></td><td>需要预览的图片 URL 数组</td><td><em>string[]</em></td><td><code>[]</code></td></tr><tr><td><code>initial-index</code></td><td>图片预览起始的索引</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>zoom</code></td><td>双击放大倍数</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>closeable</code></td><td>是否显示关闭按钮</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>close-on-key-escape</code></td><td>是否支持键盘 ESC 图片预览</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>loop</code></td><td>是否开启循环播放</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>indicator</code></td><td>是否显示分页</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>lock-scroll</code></td><td>锁定滚动</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>弹出层挂载的位置</td><td><em>TeleportProps[&#39;to&#39;] | false</em></td><td><code>body</code></td></tr><tr><td><code>image-prevent-default</code></td><td>是否禁止图片默认行为</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table>`,1)]),i(`div`,j,[i(`h3`,M,[o(G,{to:`#shi4jian4`},{default:t(()=>[...l[31]||=[s(`#`,-1)]]),_:1}),l[32]||=s(`事件`,-1)]),l[33]||=c(`<table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td><code>change</code></td><td>切换图片时的回调函数，回调参数为当前索引</td><td><code>index: number</code> 图片索引</td></tr><tr><td><code>open</code></td><td>打开 image-preview 时触发</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>打开 image-preview 动画结束时触发</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>关闭 image-preview 时触发</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>关闭 image-preview 动画结束时触发</td><td><code>-</code></td></tr><tr><td><code>long-press</code></td><td>长按图片时的回调函数，回调参数为当前索引</td><td><code>index: number</code> 图片索引</td></tr><tr><td><code>key-escape</code></td><td>点击键盘 ESC 时触发</td><td><code>-</code></td></tr></tbody></table>`,1)]),i(`div`,N,[i(`h3`,P,[o(G,{to:`#fang1fa3`},{default:t(()=>[...l[34]||=[s(`#`,-1)]]),_:1}),l[35]||=s(`方法`,-1)]),l[36]||=c(`<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>ImagePreview</code></td><td>显示 image-preview</td><td><em>options | string | string[]</em></td><td><code>-</code></td></tr><tr><td><code>ImagePreview.close</code></td><td>关闭 image-preview</td><td><em>-</em></td><td><code>-</code></td></tr><tr><td><code>ImagePreview.setDefaultOptions</code></td><td>设置默认的选项配置</td><td><em>options</em></td><td><code>-</code></td></tr><tr><td><code>ImagePreview.resetDefaultOptions</code></td><td>重置默认的选项配置</td><td><em>-</em></td><td><code>-</code></td></tr><tr><td><code>prev</code></td><td>上一页</td><td><code>options?: SwipeToOptions</code></td><td><code>-</code></td></tr><tr><td><code>next</code></td><td>下一页</td><td><code>options?: SwipeToOptions</code></td><td><code>-</code></td></tr><tr><td><code>to</code></td><td>跳转到指定下标</td><td><code>index: number, options?: SwipeToOptions</code></td><td><code>-</code></td></tr><tr><td><code>zoom</code></td><td>放大或者缩小图片</td><td><code>ratio: number</code></td><td><code>-</code></td></tr></tbody></table>`,1)]),i(`div`,F,[i(`h3`,I,[o(G,{to:`#cha1cao2`},{default:t(()=>[...l[37]||=[s(`#`,-1)]]),_:1}),l[38]||=s(`插槽`,-1)]),l[39]||=c(`<table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>indicator</code></td><td>分页指示器</td><td><code>index: number</code> 图片索引 <br> <code>length: number</code> 图片总数</td></tr><tr><td><code>close-icon</code></td><td>关闭按钮</td><td><code>-</code></td></tr><tr><td><code>extra</code></td><td>额外插槽</td><td><code>-</code></td></tr></tbody></table>`,1)]),i(`div`,L,[i(`h3`,R,[o(G,{to:`#ImagePreviewOptions`},{default:t(()=>[...l[40]||=[s(`#`,-1)]]),_:1}),l[41]||=s(`ImagePreview Options`,-1)]),l[42]||=c(`<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>images</code></td><td>需要预览的图片 URL 数组或者单个图片的 URL</td><td><em>string[] | string</em></td><td><code>[]</code></td></tr><tr><td><code>initialIndex</code></td><td>图片预览起始的索引</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>zoom</code></td><td>双击放大倍数</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>closeable</code></td><td>是否显示关闭按钮</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>closeOnKeyEscape</code></td><td>是否支持键盘 ESC 关闭图片预览</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>loop</code></td><td>是否开启循环播放</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>indicator</code></td><td>是否显示分页</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>lockScroll</code></td><td>锁定滚动</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>imagePreventDefault</code></td><td>是否禁止图片默认行为</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>onChange</code></td><td>切换图片时的回调函数，回调参数为当前索引</td><td><em>(index: number) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpen</code></td><td>image-preview 开启时候的回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>image-preview 动画结束时候的回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>image-preview 时关闭时候的回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>image-preview 关闭动画结束时候的回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onLongPress</code></td><td>长按图片时的回调函数，回调参数为当前索引</td><td><em>(index: number) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onKeyEscape</code></td><td>点击键盘 ESC 时触发</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table>`,1)]),i(`div`,z,[i(`h3`,B,[o(G,{to:`#yang4shi4bian4liang4`},{default:t(()=>[...l[43]||=[s(`#`,-1)]]),_:1}),l[44]||=s(`样式变量`,-1)]),l[45]||=c(`<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--image-preview-swipe-indicators-text-color</code></td><td><code>#ddd</code></td></tr><tr><td><code>--image-preview-swipe-indicators-padding</code></td><td><code>16px 0</code></td></tr><tr><td><code>--image-preview-zoom-container-background</code></td><td><code>#000</code></td></tr><tr><td><code>--image-preview-close-icon-top</code></td><td><code>8px</code></td></tr><tr><td><code>--image-preview-close-icon-right</code></td><td><code>14px</code></td></tr><tr><td><code>--image-preview-close-icon-size</code></td><td><code>22px</code></td></tr><tr><td><code>--image-preview-close-icon-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--image-preview-extra-top</code></td><td><code>14px</code></td></tr><tr><td><code>--image-preview-extra-left</code></td><td><code>14px</code></td></tr></tbody></table>`,2)])])}var H=e(l,[[`render`,V]]);export{H as default};