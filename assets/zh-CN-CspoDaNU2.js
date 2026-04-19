import{L as e,N as t,W as n,c as r,d as i,g as a,h as o,m as s}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as c}from"./_plugin-vue_export-helper-V-yks4gF.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`jie4shao4`},p={class:`card`},m={id:`ji1ben3shi3yong4`},h={class:`card`},g={id:`chu3li3hui2tiao2han2shu4`},_={class:`card`},v={id:`ji1ben3shi3yong4`},y={class:`card`},b={id:`zhi3ding4chu1shi3wei4zhi4`},x={class:`card`},S={id:`zhan3shi4guan1bi4an4niu3`},C={class:`card`},w={id:`jian1ting1guan1bi4shi4jian4`},T={class:`card`},E={id:`jian1ting1chang2an4shi4jian4`},D={class:`card`},O={id:`zhan3shi4e2wai4cha1cao2`},k={class:`card`},A={id:`shu3xing4`},j={class:`card`},M={id:`shi4jian4`},N={class:`card`},P={id:`fang1fa3`},F={class:`card`},I={id:`cha1cao2`},L={class:`card`},R={id:`ImagePreviewOptions`},z={class:`card`},B={id:`yang4shi4bian4liang4`};function V(c,l,V,H,U,W){let G=e(`router-link`),K=e(`var-site-code-example`);return t(),i(`div`,u,[l[46]||=r(`h1`,null,`图片预览`,-1),r(`div`,d,[r(`h3`,f,[a(G,{to:`#jie4shao4`},{default:n(()=>[...l[0]||=[o(`#`,-1)]]),_:1}),l[1]||=o(`介绍`,-1)]),l[2]||=r(`p`,null,`图片放大预览，支持双击倍数放大，支持函数调用和组件调用两种方式。`,-1)]),l[47]||=r(`h2`,null,`函数调用`,-1),r(`div`,p,[r(`h3`,m,[a(G,{to:`#ji1ben3shi3yong4`},{default:n(()=>[...l[3]||=[o(`#`,-1)]]),_:1}),l[4]||=o(`基本使用`,-1)]),a(K,null,{default:n(()=>[...l[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ImagePreview } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`preview`),o(`(`),r(`span`,{class:`hljs-params`}),o(`) `)]),o(`{
  ImagePreview(`),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),o(`)
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"preview"`),o(`>`)]),o(`基本使用`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,h,[r(`h3`,g,[a(G,{to:`#chu3li3hui2tiao2han2shu4`},{default:n(()=>[...l[6]||=[o(`#`,-1)]]),_:1}),l[7]||=o(`处理回调函数`,-1)]),a(K,null,{default:n(()=>[...l[8]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ImagePreview, Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`preview`),o(`(`),r(`span`,{class:`hljs-params`}),o(`) `)]),o(`{
  ImagePreview({
    `),r(`span`,{class:`hljs-attr`},`images`),o(`: [
      `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),o(`,
      `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat2.jpg'`),o(`
    ],
    `),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-title`},`onChange`),o(`(`),r(`span`,{class:`hljs-params`},`index`),o(`)`)]),o(` {
      Snackbar(`),r(`span`,{class:`hljs-built_in`},`String`),o(`(index))
    }
  })
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"preview"`),o(`>`)]),o(`处理回调函数`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),l[48]||=r(`h2`,null,`组件调用`,-1),r(`div`,_,[r(`h3`,v,[a(G,{to:`#ji1ben3shi3yong4`},{default:n(()=>[...l[9]||=[o(`#`,-1)]]),_:1}),l[10]||=o(`基本使用`,-1)]),a(K,null,{default:n(()=>[...l[11]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` show = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` images = ref([
  `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),o(`,
  `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat2.jpg'`),o(`,
])
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(`
    `),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"warning"`),o(`
    `),r(`span`,{class:`hljs-attr`},`block`),o(`
    @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"show = true"`),o(`
  >`)]),o(`
    基本使用
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-image-preview`),o(),r(`span`,{class:`hljs-attr`},`:images`),o(`=`),r(`span`,{class:`hljs-string`},`"images"`),o(),r(`span`,{class:`hljs-attr`},`v-model:show`),o(`=`),r(`span`,{class:`hljs-string`},`"show"`),o(` />`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,y,[r(`h3`,b,[a(G,{to:`#zhi3ding4chu1shi3wei4zhi4`},{default:n(()=>[...l[12]||=[o(`#`,-1)]]),_:1}),l[13]||=o(`指定初始位置`,-1)]),a(K,null,{default:n(()=>[...l[14]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` show = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` images = ref([
  `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),o(`,
  `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat2.jpg'`),o(`,
])
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(`
    `),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"warning"`),o(`
    `),r(`span`,{class:`hljs-attr`},`block`),o(`
    @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"show = true"`),o(`
  >`)]),o(`
    指定初始位置
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-image-preview`),o(`
    `),r(`span`,{class:`hljs-attr`},`:initial-index`),o(`=`),r(`span`,{class:`hljs-string`},`"1"`),o(`
    `),r(`span`,{class:`hljs-attr`},`:images`),o(`=`),r(`span`,{class:`hljs-string`},`"images"`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model:show`),o(`=`),r(`span`,{class:`hljs-string`},`"show"`),o(`
  />`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,x,[r(`h3`,S,[a(G,{to:`#zhan3shi4guan1bi4an4niu3`},{default:n(()=>[...l[15]||=[o(`#`,-1)]]),_:1}),l[16]||=o(`展示关闭按钮`,-1)]),a(K,null,{default:n(()=>[...l[17]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` show = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` images = ref([
  `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),o(`,
  `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat2.jpg'`),o(`,
])
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(`
    `),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"warning"`),o(`
    `),r(`span`,{class:`hljs-attr`},`block`),o(`
    @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"show = true"`),o(`
  >`)]),o(`
    展示关闭按钮
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-image-preview`),o(`
    `),r(`span`,{class:`hljs-attr`},`closeable`),o(`
    `),r(`span`,{class:`hljs-attr`},`:images`),o(`=`),r(`span`,{class:`hljs-string`},`"images"`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model:show`),o(`=`),r(`span`,{class:`hljs-string`},`"show"`),o(`
  />`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,C,[r(`h3`,w,[a(G,{to:`#jian1ting1guan1bi4shi4jian4`},{default:n(()=>[...l[18]||=[o(`#`,-1)]]),_:1}),l[19]||=o(`监听关闭事件`,-1)]),a(K,null,{default:n(()=>[...l[20]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` show = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` images = ref([
  `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),o(`,
  `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat2.jpg'`),o(`,
])
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(`
    `),r(`span`,{class:`hljs-attr`},`block`),o(`
    `),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"warning"`),o(`
    @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"show = true"`),o(`
  >`)]),o(`
    监听关闭事件
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-image-preview`),o(`
    `),r(`span`,{class:`hljs-attr`},`:images`),o(`=`),r(`span`,{class:`hljs-string`},`"images"`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model:show`),o(`=`),r(`span`,{class:`hljs-string`},`"show"`),o(`
    @`),r(`span`,{class:`hljs-attr`},`close`),o(`=`),r(`span`,{class:`hljs-string`},`"Snackbar('触发了关闭事件。')"`),o(`
  />`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,T,[r(`h3`,E,[a(G,{to:`#jian1ting1chang2an4shi4jian4`},{default:n(()=>[...l[21]||=[o(`#`,-1)]]),_:1}),l[22]||=o(`监听长按事件`,-1)]),l[24]||=r(`p`,null,[o(`通过 `),r(`code`,null,`image-prevent-default`),o(` 属性禁止图片默认行为，可自定义 `),r(`code`,null,`long-press`),o(` 事件来实现长按需求。`)],-1),a(K,null,{default:n(()=>[...l[23]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` show = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` images = ref([
  `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),o(`,
  `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat2.jpg'`),o(`,
])
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(`
    `),r(`span`,{class:`hljs-attr`},`block`),o(`
    `),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"warning"`),o(`
    @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"show = true"`),o(`
  >`)]),o(`
    监听长按事件
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-image-preview`),o(`
    `),r(`span`,{class:`hljs-attr`},`image-prevent-default`),o(`
    `),r(`span`,{class:`hljs-attr`},`:images`),o(`=`),r(`span`,{class:`hljs-string`},`"images"`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model:show`),o(`=`),r(`span`,{class:`hljs-string`},`"show"`),o(`
    @`),r(`span`,{class:`hljs-attr`},`long-press`),o(`=`),r(`span`,{class:`hljs-string`},`"Snackbar('触发了长按事件')"`),o(`
  />`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,D,[r(`h3`,O,[a(G,{to:`#zhan3shi4e2wai4cha1cao2`},{default:n(()=>[...l[25]||=[o(`#`,-1)]]),_:1}),l[26]||=o(`展示额外插槽`,-1)]),a(K,null,{default:n(()=>[...l[27]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` show = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` menuShow = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` images = ref([
  `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),o(`,
  `),r(`span`,{class:`hljs-string`},`'https://varletjs.org/cat2.jpg'`),o(`,
])
`),r(`span`,{class:`hljs-keyword`},`const`),o(` actions = [
  {
    `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'操作'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'wrench'`),o(`
  },
  {
    `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'操作'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'wrench'`),o(`
  }
]
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(`
    `),r(`span`,{class:`hljs-attr`},`block`),o(`
    `),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"warning"`),o(` 
    @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"show = true"`),o(`
  >`)]),o(`
    展示额外插槽
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-image-preview`),o(),r(`span`,{class:`hljs-attr`},`:images`),o(`=`),r(`span`,{class:`hljs-string`},`"images"`),o(),r(`span`,{class:`hljs-attr`},`v-model:show`),o(`=`),r(`span`,{class:`hljs-string`},`"show"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`extra`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(`
        `),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"menu"`),o(`
        `),r(`span`,{class:`hljs-attr`},`:size`),o(`=`),r(`span`,{class:`hljs-string`},`"22"`),o(`
        `),r(`span`,{class:`hljs-attr`},`color`),o(`=`),r(`span`,{class:`hljs-string`},`"#fff"`),o(`
        @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"menuShow = true"`),o(`
      />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-action-sheet`),o(),r(`span`,{class:`hljs-attr`},`:actions`),o(`=`),r(`span`,{class:`hljs-string`},`"actions"`),o(),r(`span`,{class:`hljs-attr`},`v-model:show`),o(`=`),r(`span`,{class:`hljs-string`},`"menuShow"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-image-preview`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),l[49]||=r(`h2`,null,`API`,-1),r(`div`,k,[r(`h3`,A,[a(G,{to:`#shu3xing4`},{default:n(()=>[...l[28]||=[o(`#`,-1)]]),_:1}),l[29]||=o(`属性`,-1)]),l[30]||=s(`<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>是否显示</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>images</code></td><td>需要预览的图片 URL 数组</td><td><em>string[]</em></td><td><code>[]</code></td></tr><tr><td><code>initial-index</code></td><td>图片预览起始的索引</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>zoom</code></td><td>双击放大倍数</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>closeable</code></td><td>是否显示关闭按钮</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>close-on-key-escape</code></td><td>是否支持键盘 ESC 图片预览</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>loop</code></td><td>是否开启循环播放</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>indicator</code></td><td>是否显示分页</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>lock-scroll</code></td><td>锁定滚动</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>弹出层挂载的位置</td><td><em>TeleportProps[&#39;to&#39;] | false</em></td><td><code>body</code></td></tr><tr><td><code>image-prevent-default</code></td><td>是否禁止图片默认行为</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table>`,1)]),r(`div`,j,[r(`h3`,M,[a(G,{to:`#shi4jian4`},{default:n(()=>[...l[31]||=[o(`#`,-1)]]),_:1}),l[32]||=o(`事件`,-1)]),l[33]||=s(`<table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td><code>change</code></td><td>切换图片时的回调函数，回调参数为当前索引</td><td><code>index: number</code> 图片索引</td></tr><tr><td><code>open</code></td><td>打开 image-preview 时触发</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>打开 image-preview 动画结束时触发</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>关闭 image-preview 时触发</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>关闭 image-preview 动画结束时触发</td><td><code>-</code></td></tr><tr><td><code>long-press</code></td><td>长按图片时的回调函数，回调参数为当前索引</td><td><code>index: number</code> 图片索引</td></tr><tr><td><code>key-escape</code></td><td>点击键盘 ESC 时触发</td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,N,[r(`h3`,P,[a(G,{to:`#fang1fa3`},{default:n(()=>[...l[34]||=[o(`#`,-1)]]),_:1}),l[35]||=o(`方法`,-1)]),l[36]||=s(`<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>ImagePreview</code></td><td>显示 image-preview</td><td><em>options | string | string[]</em></td><td><code>-</code></td></tr><tr><td><code>ImagePreview.close</code></td><td>关闭 image-preview</td><td><em>-</em></td><td><code>-</code></td></tr><tr><td><code>ImagePreview.setDefaultOptions</code></td><td>设置默认的选项配置</td><td><em>options</em></td><td><code>-</code></td></tr><tr><td><code>ImagePreview.resetDefaultOptions</code></td><td>重置默认的选项配置</td><td><em>-</em></td><td><code>-</code></td></tr><tr><td><code>prev</code></td><td>上一页</td><td><code>options?: SwipeToOptions</code></td><td><code>-</code></td></tr><tr><td><code>next</code></td><td>下一页</td><td><code>options?: SwipeToOptions</code></td><td><code>-</code></td></tr><tr><td><code>to</code></td><td>跳转到指定下标</td><td><code>index: number, options?: SwipeToOptions</code></td><td><code>-</code></td></tr><tr><td><code>zoom</code></td><td>放大或者缩小图片</td><td><code>ratio: number</code></td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,F,[r(`h3`,I,[a(G,{to:`#cha1cao2`},{default:n(()=>[...l[37]||=[o(`#`,-1)]]),_:1}),l[38]||=o(`插槽`,-1)]),l[39]||=s(`<table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>indicator</code></td><td>分页指示器</td><td><code>index: number</code> 图片索引 <br> <code>length: number</code> 图片总数</td></tr><tr><td><code>close-icon</code></td><td>关闭按钮</td><td><code>-</code></td></tr><tr><td><code>extra</code></td><td>额外插槽</td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,L,[r(`h3`,R,[a(G,{to:`#ImagePreviewOptions`},{default:n(()=>[...l[40]||=[o(`#`,-1)]]),_:1}),l[41]||=o(`ImagePreview Options`,-1)]),l[42]||=s(`<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>images</code></td><td>需要预览的图片 URL 数组或者单个图片的 URL</td><td><em>string[] | string</em></td><td><code>[]</code></td></tr><tr><td><code>initialIndex</code></td><td>图片预览起始的索引</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>zoom</code></td><td>双击放大倍数</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>closeable</code></td><td>是否显示关闭按钮</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>closeOnKeyEscape</code></td><td>是否支持键盘 ESC 关闭图片预览</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>loop</code></td><td>是否开启循环播放</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>indicator</code></td><td>是否显示分页</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>lockScroll</code></td><td>锁定滚动</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>imagePreventDefault</code></td><td>是否禁止图片默认行为</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>onChange</code></td><td>切换图片时的回调函数，回调参数为当前索引</td><td><em>(index: number) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpen</code></td><td>image-preview 开启时候的回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>image-preview 动画结束时候的回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>image-preview 时关闭时候的回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>image-preview 关闭动画结束时候的回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onLongPress</code></td><td>长按图片时的回调函数，回调参数为当前索引</td><td><em>(index: number) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onKeyEscape</code></td><td>点击键盘 ESC 时触发</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,z,[r(`h3`,B,[a(G,{to:`#yang4shi4bian4liang4`},{default:n(()=>[...l[43]||=[o(`#`,-1)]]),_:1}),l[44]||=o(`样式变量`,-1)]),l[45]||=s(`<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--image-preview-swipe-indicators-text-color</code></td><td><code>#ddd</code></td></tr><tr><td><code>--image-preview-swipe-indicators-padding</code></td><td><code>16px 0</code></td></tr><tr><td><code>--image-preview-zoom-container-background</code></td><td><code>#000</code></td></tr><tr><td><code>--image-preview-close-icon-top</code></td><td><code>14px</code></td></tr><tr><td><code>--image-preview-close-icon-right</code></td><td><code>14px</code></td></tr><tr><td><code>--image-preview-close-icon-size</code></td><td><code>22px</code></td></tr><tr><td><code>--image-preview-close-icon-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--image-preview-extra-top</code></td><td><code>14px</code></td></tr><tr><td><code>--image-preview-extra-left</code></td><td><code>14px</code></td></tr></tbody></table>`,2)])])}var H=c(l,[[`render`,V]]);export{H as default};