import{L as e,N as t,W as n,c as r,d as i,g as a,h as o,m as s}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as c}from"./_plugin-vue_export-helper-V-yks4gF.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`jie4shao4`},p={class:`card`},m={id:`ji1ben3shi3yong4`},h={class:`card`},g={id:`xiu1gai3biao1ti2`},_={class:`card`},v={id:`yin3cang2an4niu3`},y={class:`card`},b={id:`chu3li3yong4hu4xing2wei2`},x={class:`card`},S={id:`yi4bu4guan1bi4`},C={class:`card`},w={id:`ji1ben3shi3yong4`},T={class:`card`},E={id:`yi4bu4guan1bi4`},D={class:`card`},O={id:`zi4ding4yi4cha1cao2`},k={class:`card`},A={id:`shu3xing4`},j={class:`card`},M={id:`shi4jian4`},N={class:`card`},P={id:`fang1fa3`},F={class:`card`},I={id:`DialogOptions`},L={class:`card`},R={id:`cha1cao2`},z={class:`card`},B={id:`yang4shi4bian4liang4`};function V(c,l,V,H,U,W){let G=e(`router-link`),K=e(`var-site-code-example`);return t(),i(`div`,u,[l[47]||=r(`h1`,null,`对话框`,-1),r(`div`,d,[r(`h3`,f,[a(G,{to:`#jie4shao4`},{default:n(()=>[...l[0]||=[o(`#`,-1)]]),_:1}),l[1]||=o(`介绍`,-1)]),l[2]||=r(`p`,null,[o(`弹出一个对话框展示内容并处理用户交互。 `),r(`code`,null,`Dialog`),o(` 提供了函数式和组件式两种使用方式，两种使用效果和参数并没有本质区别。`)],-1)]),l[48]||=r(`h2`,null,`函数调用`,-1),r(`div`,p,[r(`h3`,m,[a(G,{to:`#ji1ben3shi3yong4`},{default:n(()=>[...l[3]||=[o(`#`,-1)]]),_:1}),l[4]||=o(`基本使用`,-1)]),a(K,null,{default:n(()=>[...l[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Dialog } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"Dialog('兰亭临帖 行书如行云流水')"`),o(`>`)]),o(`基本使用`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,h,[r(`h3`,g,[a(G,{to:`#xiu1gai3biao1ti2`},{default:n(()=>[...l[6]||=[o(`#`,-1)]]),_:1}),l[7]||=o(`修改标题`,-1)]),a(K,null,{default:n(()=>[...l[8]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Dialog } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`modifyTitle`),o(`(`),r(`span`,{class:`hljs-params`}),o(`) `)]),o(`{
  Dialog({
    `),r(`span`,{class:`hljs-attr`},`title`),o(`: `),r(`span`,{class:`hljs-string`},`'兰亭序'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`message`),o(`: `),r(`span`,{class:`hljs-string`},`'兰亭临帖 行书如行云流水'`),o(`,
  })
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"modifyTitle"`),o(`>`)]),o(`修改标题`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,_,[r(`h3`,v,[a(G,{to:`#yin3cang2an4niu3`},{default:n(()=>[...l[9]||=[o(`#`,-1)]]),_:1}),l[10]||=o(`隐藏按钮`,-1)]),a(K,null,{default:n(()=>[...l[11]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Dialog } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`hideButton`),o(`(`),r(`span`,{class:`hljs-params`}),o(`) `)]),o(`{
  Dialog({
    `),r(`span`,{class:`hljs-attr`},`message`),o(`: `),r(`span`,{class:`hljs-string`},`'兰亭临帖 行书如行云流水'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`confirmButton`),o(`: `),r(`span`,{class:`hljs-literal`},`false`),o(`,
    `),r(`span`,{class:`hljs-attr`},`cancelButton`),o(`: `),r(`span`,{class:`hljs-literal`},`false`),o(`,
  })
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"hideButton"`),o(`>`)]),o(`隐藏按钮`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,y,[r(`h3`,b,[a(G,{to:`#chu3li3yong4hu4xing2wei2`},{default:n(()=>[...l[12]||=[o(`#`,-1)]]),_:1}),l[13]||=o(`处理用户行为`,-1)]),l[15]||=r(`p`,null,[o(`可以通过 `),r(`code`,null,`Dialog`),o(` 方法的返回值获取用户行为, 返回值是一个 `),r(`code`,null,`promise`),o(`。 包含 `),r(`code`,null,`confirm(确认)`),o(`、`),r(`code`,null,`cancel(取消)`),o(`、`),r(`code`,null,`close(通过点击遮罩层触发关闭)`),o(` 三种状态。`)],-1),a(K,null,{default:n(()=>[...l[14]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Dialog, Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` actions = {
  `),r(`span`,{class:`hljs-attr`},`confirm`),o(`: `),r(`span`,{class:`hljs-function`},`() =>`),o(` Snackbar.success(`),r(`span`,{class:`hljs-string`},`'confirm'`),o(`),
  `),r(`span`,{class:`hljs-attr`},`cancel`),o(`: `),r(`span`,{class:`hljs-function`},`() =>`),o(` Snackbar.error(`),r(`span`,{class:`hljs-string`},`'cancel'`),o(`),
  `),r(`span`,{class:`hljs-attr`},`close`),o(`: `),r(`span`,{class:`hljs-function`},`() =>`),o(` Snackbar.info(`),r(`span`,{class:`hljs-string`},`'close'`),o(`),
}

`),r(`span`,{class:`hljs-keyword`},`async`),o(),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`createAction`),o(`(`),r(`span`,{class:`hljs-params`}),o(`) `)]),o(`{
  actions[`),r(`span`,{class:`hljs-keyword`},`await`),o(` Dialog(`),r(`span`,{class:`hljs-string`},`'兰亭临帖 行书如行云流水'`),o(`)]()
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"createAction"`),o(`>`)]),o(`处理用户行为`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,x,[r(`h3`,S,[a(G,{to:`#yi4bu4guan1bi4`},{default:n(()=>[...l[16]||=[o(`#`,-1)]]),_:1}),l[17]||=o(`异步关闭`,-1)]),l[19]||=r(`p`,null,[r(`code`,null,`Dialog`),o(` 可以通过 `),r(`code`,null,`onBeforeClose`),o(` 进行关闭前的拦截，可以从参数中得到用户行为和触发关闭的回调函数。`)],-1),a(K,null,{default:n(()=>[...l[18]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Dialog, Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` actions = {
  `),r(`span`,{class:`hljs-attr`},`confirm`),o(`: `),r(`span`,{class:`hljs-function`},`() =>`),o(` Snackbar.success(`),r(`span`,{class:`hljs-string`},`'confirm'`),o(`),
  `),r(`span`,{class:`hljs-attr`},`cancel`),o(`: `),r(`span`,{class:`hljs-function`},`() =>`),o(` Snackbar.error(`),r(`span`,{class:`hljs-string`},`'cancel'`),o(`),
  `),r(`span`,{class:`hljs-attr`},`close`),o(`: `),r(`span`,{class:`hljs-function`},`() =>`),o(` Snackbar.info(`),r(`span`,{class:`hljs-string`},`'close'`),o(`),
}

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`onBeforeClose`),o(`(`),r(`span`,{class:`hljs-params`},`action, done`),o(`) `)]),o(`{
  Snackbar.loading(`),r(`span`,{class:`hljs-string`},`'正在异步关闭'`),o(`)
  
  `),r(`span`,{class:`hljs-built_in`},`setTimeout`),o(`(`),r(`span`,{class:`hljs-function`},`() =>`),o(` {
    actions[action]()
    done()
  }, `),r(`span`,{class:`hljs-number`},`1000`),o(`)
}

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`createAction`),o(`(`),r(`span`,{class:`hljs-params`}),o(`) `)]),o(`{
  Dialog({
    `),r(`span`,{class:`hljs-attr`},`message`),o(`: `),r(`span`,{class:`hljs-string`},`'兰亭临帖 行书如行云流水'`),o(`,
    onBeforeClose
  })
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"createAction"`),o(`>`)]),o(`异步关闭`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),l[49]||=r(`h2`,null,`组件调用`,-1),r(`div`,C,[r(`h3`,w,[a(G,{to:`#ji1ben3shi3yong4`},{default:n(()=>[...l[20]||=[o(`#`,-1)]]),_:1}),l[21]||=o(`基本使用`,-1)]),a(K,null,{default:n(()=>[...l[22]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`
   
`),r(`span`,{class:`hljs-keyword`},`const`),o(` show = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"warning"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"show = true"`),o(`>`)]),o(`基本使用`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-dialog`),o(`
    `),r(`span`,{class:`hljs-attr`},`title`),o(`=`),r(`span`,{class:`hljs-string`},`"兰亭序"`),o(`
    `),r(`span`,{class:`hljs-attr`},`message`),o(`=`),r(`span`,{class:`hljs-string`},`"兰亭临帖 行书如行云流水"`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model:show`),o(`=`),r(`span`,{class:`hljs-string`},`"show"`),o(`
    @`),r(`span`,{class:`hljs-attr`},`confirm`),o(`=`),r(`span`,{class:`hljs-string`},`"Snackbar.success('confirm')"`),o(`
    @`),r(`span`,{class:`hljs-attr`},`cancel`),o(`=`),r(`span`,{class:`hljs-string`},`"Snackbar.error('cancel')"`),o(`
    @`),r(`span`,{class:`hljs-attr`},`closed`),o(`=`),r(`span`,{class:`hljs-string`},`"Snackbar.info('closed')"`),o(`
  />`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,T,[r(`h3`,E,[a(G,{to:`#yi4bu4guan1bi4`},{default:n(()=>[...l[23]||=[o(`#`,-1)]]),_:1}),l[24]||=o(`异步关闭`,-1)]),a(K,null,{default:n(()=>[...l[25]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` show = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`onBeforeClose`),o(`(`),r(`span`,{class:`hljs-params`},`action, done, { 
  confirmButtonLoading, 
  cancelButtonLoading, 
  confirmButtonDisabled, 
  cancelButtonDisabled 
}`),o(`) `)]),o(`{
  `),r(`span`,{class:`hljs-keyword`},`if`),o(` (action === `),r(`span`,{class:`hljs-string`},`'confirm'`),o(`) {
    confirmButtonLoading.value = `),r(`span`,{class:`hljs-literal`},`true`),o(`
    cancelButtonDisabled.value = `),r(`span`,{class:`hljs-literal`},`true`),o(`
  }

  `),r(`span`,{class:`hljs-keyword`},`if`),o(` (action === `),r(`span`,{class:`hljs-string`},`'cancel'`),o(`) {
    cancelButtonLoading.value = `),r(`span`,{class:`hljs-literal`},`true`),o(`
    confirmButtonDisabled.value = `),r(`span`,{class:`hljs-literal`},`true`),o(`
  }

  `),r(`span`,{class:`hljs-built_in`},`setTimeout`),o(`(`),r(`span`,{class:`hljs-function`},`() =>`),o(` {
    confirmButtonLoading.value = `),r(`span`,{class:`hljs-literal`},`false`),o(`
    cancelButtonLoading.value = `),r(`span`,{class:`hljs-literal`},`false`),o(`
    confirmButtonDisabled.value = `),r(`span`,{class:`hljs-literal`},`false`),o(`
    cancelButtonDisabled.value = `),r(`span`,{class:`hljs-literal`},`false`),o(`

    `),r(`span`,{class:`hljs-keyword`},`if`),o(` (action === `),r(`span`,{class:`hljs-string`},`'confirm'`),o(`) {
      Snackbar.success(`),r(`span`,{class:`hljs-string`},`'confirm'`),o(`)
    }

    `),r(`span`,{class:`hljs-keyword`},`if`),o(` (action === `),r(`span`,{class:`hljs-string`},`'cancel'`),o(`) {
      Snackbar.error(`),r(`span`,{class:`hljs-string`},`'cancel'`),o(`)
    }

    `),r(`span`,{class:`hljs-keyword`},`if`),o(` (action === `),r(`span`,{class:`hljs-string`},`'close'`),o(`) {
      Snackbar.info(`),r(`span`,{class:`hljs-string`},`'close'`),o(`)
    }

    done()
   }, `),r(`span`,{class:`hljs-number`},`1000`),o(`)
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"warning"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"show = true"`),o(`>`)]),o(`异步关闭`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-dialog`),o(`
    `),r(`span`,{class:`hljs-attr`},`title`),o(`=`),r(`span`,{class:`hljs-string`},`"兰亭序"`),o(`
    `),r(`span`,{class:`hljs-attr`},`message`),o(`=`),r(`span`,{class:`hljs-string`},`"兰亭临帖 行书如行云流水"`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model:show`),o(`=`),r(`span`,{class:`hljs-string`},`"show"`),o(`
    @`),r(`span`,{class:`hljs-attr`},`before-close`),o(`=`),r(`span`,{class:`hljs-string`},`"onBeforeClose"`),o(`
  />`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,D,[r(`h3`,O,[a(G,{to:`#zi4ding4yi4cha1cao2`},{default:n(()=>[...l[26]||=[o(`#`,-1)]]),_:1}),l[27]||=o(`自定义插槽`,-1)]),a(K,null,{default:n(()=>[...l[28]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` show = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"warning"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"show = true"`),o(`>`)]),o(`自定义插槽`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-dialog`),o(),r(`span`,{class:`hljs-attr`},`v-model:show`),o(`=`),r(`span`,{class:`hljs-string`},`"show"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`title`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"information"`),o(),r(`span`,{class:`hljs-attr`},`color`),o(`=`),r(`span`,{class:`hljs-string`},`"#2979ff"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`

    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`兰亭临帖 行书如行云流水`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`兰亭临帖 行书如行云流水`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`兰亭临帖 行书如行云流水`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-dialog`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),l[50]||=r(`h2`,null,`API`,-1),r(`div`,k,[r(`h3`,A,[a(G,{to:`#shu3xing4`},{default:n(()=>[...l[29]||=[o(`#`,-1)]]),_:1}),l[30]||=o(`属性`,-1)]),l[31]||=s(`<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>是否显示对话框</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>title</code></td><td>对话框标题</td><td><em>string</em></td><td><code>提示</code></td></tr><tr><td><code>width</code></td><td>对话框宽度</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>message</code></td><td>对话框内容</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>message-align</code></td><td>对话框内容文字对齐方式，可选值 <code>center</code> <code>left</code> <code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td><code>confirm-button</code></td><td>是否显示确认按钮</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cancel-button</code></td><td>是否显示取消按钮</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>confirm-button-text</code></td><td>确认按钮文字</td><td><em>string</em></td><td><code>确认</code></td></tr><tr><td><code>cancel-button-text</code></td><td>取消按钮文字</td><td><em>string</em></td><td><code>取消</code></td></tr><tr><td><code>confirm-button-text-color</code></td><td>确认按钮文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancel-button-text-color</code></td><td>取消按钮文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>confirm-button-color</code></td><td>确认按钮背景颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancel-button-color</code></td><td>取消按钮背景颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>confirm-button-loading</code> <em><strong>3.12.0</strong></em></td><td>确认按钮加载状态</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>cancel-button-loading</code> <em><strong>3.12.0</strong></em></td><td>取消按钮加载状态</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>confirm-button-disabled</code> <em><strong>3.12.0</strong></em></td><td>确认按钮禁用状态</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>cancel-button-disabled</code> <em><strong>3.12.0</strong></em></td><td>取消按钮禁用状态</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>dialog-class</code></td><td>对话框主体区域的 class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>dialog-style</code></td><td>对话框主体区域的 style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>overlay</code></td><td>是否显示遮罩层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlay-class</code></td><td>自定义遮罩层的 class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlay-style</code></td><td>自定义遮罩层的 style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>lock-scroll</code></td><td>是否禁止滚动穿透，禁止时滚动弹出层不会引发 body 的滚动</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-overlay</code></td><td>是否点击遮罩层关闭弹出层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-key-escape</code></td><td>是否支持键盘 ESC 关闭弹窗</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>弹出层挂载的位置</td><td><em>TeleportProps[&#39;to&#39;] | false</em></td><td><code>body</code></td></tr></tbody></table>`,1)]),r(`div`,j,[r(`h3`,M,[a(G,{to:`#shi4jian4`},{default:n(()=>[...l[32]||=[o(`#`,-1)]]),_:1}),l[33]||=o(`事件`,-1)]),l[34]||=s(`<table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>open</code></td><td>打开对话框时触发</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>打开对话框动画结束时触发</td><td><code>-</code></td></tr><tr><td><code>before-close</code></td><td>对话框关闭前触发，会阻止关闭</td><td><code>action: confirm | cancel | close</code> <br> <code>done: Function</code></td></tr><tr><td><code>close</code></td><td>关闭对话框时触发</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>关闭对话框动画结束时触发</td><td><code>-</code></td></tr><tr><td><code>confirm</code></td><td>确认时触发</td><td><code>-</code></td></tr><tr><td><code>cancel</code></td><td>取消时触发</td><td><code>-</code></td></tr><tr><td><code>click-overlay</code></td><td>点击遮罩层时触发</td><td><code>-</code></td></tr><tr><td><code>key-escape</code></td><td>点击键盘 ESC 时触发</td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,N,[r(`h3`,P,[a(G,{to:`#fang1fa3`},{default:n(()=>[...l[35]||=[o(`#`,-1)]]),_:1}),l[36]||=o(`方法`,-1)]),l[37]||=s(`<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>Dialog</code></td><td>显示对话框</td><td><em>options | string</em></td><td><code>-</code></td></tr><tr><td><code>Dialog.close</code></td><td>关闭对话框</td><td><em>-</em></td><td><code>-</code></td></tr><tr><td><code>Dialog.setDefaultOptions</code></td><td>设置默认的选项配置</td><td><em>options</em></td><td><code>-</code></td></tr><tr><td><code>Dialog.resetDefaultOptions</code></td><td>重置默认的选项配置</td><td><em>-</em></td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,F,[r(`h3`,I,[a(G,{to:`#DialogOptions`},{default:n(()=>[...l[38]||=[o(`#`,-1)]]),_:1}),l[39]||=o(`Dialog Options`,-1)]),l[40]||=s(`<h4>函数式调用时传入的选项</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>title</code></td><td>对话框标题</td><td><em>string</em></td><td><code>提示</code></td></tr><tr><td><code>width</code></td><td>对话框宽度</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>message</code></td><td>对话框内容</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>messageAlign</code></td><td>对话框内容文字对齐方式，可选值 <code>center</code> <code>left</code> <code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td><code>confirmButton</code></td><td>是否显示确认按钮</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cancelButton</code></td><td>是否显示取消按钮</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>confirmButtonText</code></td><td>确认按钮文字</td><td><em>string</em></td><td><code>确认</code></td></tr><tr><td><code>cancelButtonText</code></td><td>取消按钮文字</td><td><em>string</em></td><td><code>取消</code></td></tr><tr><td><code>confirmButtonTextColor</code></td><td>确认按钮文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancelButtonTextColor</code></td><td>取消按钮文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>confirmButtonColor</code></td><td>确认按钮背景颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancelButtonColor</code></td><td>取消按钮背景颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>confirmButtonLoading</code> <em><strong>3.12.0</strong></em></td><td>确认按钮加载状态</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>cancelButtonLoading</code> <em><strong>3.12.0</strong></em></td><td>取消按钮加载状态</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>confirmButtonDisabled</code> <em><strong>3.12.0</strong></em></td><td>确认按钮禁用状态</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>cancelButtonDisabled</code> <em><strong>3.12.0</strong></em></td><td>取消按钮禁用状态</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>dialogClass</code></td><td>对话框主体区域的 class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>dialogStyle</code></td><td>对话框主体区域的 style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>overlay</code></td><td>是否显示遮罩层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlayClass</code></td><td>自定义遮罩层的 class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlayStyle</code></td><td>自定义遮罩层的 style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>lockScroll</code></td><td>是否禁止滚动穿透，禁止时滚动弹出层不会引发 body 的滚动</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnClickOverlay</code></td><td>是否点击遮罩层关闭弹出层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnKeyEscape</code></td><td>是否支持键盘 ESC 关闭弹窗</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>onOpen</code></td><td>对话框开启回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>对话框开启动画结束回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onBeforeClose</code></td><td>对话框关闭前回调，会阻止关闭</td><td><em>(action: confirm | cancel | close, done: Function) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>对话框关闭回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>对话框关闭动画结束回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onConfirm</code></td><td>确认回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onCancel</code></td><td>取消回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClickOverlay</code></td><td>遮罩层点击回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onKeyEscape</code></td><td>点击键盘 ESC 时触发</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table>`,2)]),r(`div`,L,[r(`h3`,R,[a(G,{to:`#cha1cao2`},{default:n(()=>[...l[41]||=[o(`#`,-1)]]),_:1}),l[42]||=o(`插槽`,-1)]),l[43]||=s(`<table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>对话框主要内容</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>对话框标题</td><td><code>-</code></td></tr><tr><td><code>actions</code> <em><strong>3.3.3</strong></em></td><td>对话框底部操作区域</td><td><code>slotClass: string</code> 操作容器样式 <br> <code>cancel: () =&gt; void</code> 取消的回调函数 <br> <code>confirm: () =&gt; void</code> 确认的回调函数</td></tr></tbody></table>`,1)]),r(`div`,z,[r(`h3`,B,[a(G,{to:`#yang4shi4bian4liang4`},{default:n(()=>[...l[44]||=[o(`#`,-1)]]),_:1}),l[45]||=o(`样式变量`,-1)]),l[46]||=s(`<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--dialog-width</code></td><td><code>280px</code></td></tr><tr><td><code>--dialog-background</code></td><td><code>var(--color-surface-container-low)</code></td></tr><tr><td><code>--dialog-border-radius</code></td><td><code>3px</code></td></tr><tr><td><code>--dialog-title-padding</code></td><td><code>20px 20px 0</code></td></tr><tr><td><code>--dialog-title-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--dialog-message-color</code></td><td><code>#888</code></td></tr><tr><td><code>--dialog-message-padding</code></td><td><code>12px 20px</code></td></tr><tr><td><code>--dialog-message-line-height</code></td><td><code>24px</code></td></tr><tr><td><code>--dialog-message-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--dialog-actions-padding</code></td><td><code>0 12px 12px</code></td></tr><tr><td><code>--dialog-button-margin-left</code></td><td><code>6px</code></td></tr><tr><td><code>--dialog-title-color</code></td><td><code>#555</code></td></tr><tr><td><code>--dialog-confirm-button-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--dialog-cancel-button-color</code></td><td><code>var(--color-primary)</code></td></tr></tbody></table>`,2)])])}var H=c(l,[[`render`,V]]);export{H as default};