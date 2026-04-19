import{L as e,N as t,W as n,c as r,d as i,g as a,h as o,m as s}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as c}from"./_plugin-vue_export-helper-V-yks4gF.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`Intro`},p={class:`card`},m={id:`BasicUsage`},h={class:`card`},g={id:`ModifyTitle`},_={class:`card`},v={id:`HideButton`},y={class:`card`},b={id:`HandlerUserBehavior`},x={class:`card`},S={id:`AsynchronousClosing`},C={class:`card`},w={id:`BasicUsage`},T={class:`card`},E={id:`AsynchronousClosing`},D={class:`card`},O={id:`CustomSlots`},k={class:`card`},A={id:`Props`},j={class:`card`},M={id:`Events`},N={class:`card`},P={id:`Methods`},F={class:`card`},I={id:`DialogOptions`},L={class:`card`},R={id:`Slots`},z={class:`card`},B={id:`StyleVariables`};function V(c,l,V,H,U,W){let G=e(`router-link`),K=e(`var-site-code-example`);return t(),i(`div`,u,[l[47]||=r(`h1`,null,`Dialog`,-1),r(`div`,d,[r(`h3`,f,[a(G,{to:`#Intro`},{default:n(()=>[...l[0]||=[o(`#`,-1)]]),_:1}),l[1]||=o(`Intro`,-1)]),l[2]||=r(`p`,null,[o(`A dialog pops up to display the content and handle the user interaction. `),r(`code`,null,`Dialog`),o(` have provided functional and component usage, and there is no essential difference between the two usage effects and parameters.`)],-1)]),l[48]||=r(`h2`,null,`Function Call`,-1),r(`div`,p,[r(`h3`,m,[a(G,{to:`#BasicUsage`},{default:n(()=>[...l[3]||=[o(`#`,-1)]]),_:1}),l[4]||=o(`Basic Usage`,-1)]),a(K,null,{default:n(()=>[...l[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Dialog } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"Dialog('Don\\'t Wanna See No Blood, Don\\'t Be A Macho Man')"`),o(`>`)]),o(`Basic Use`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,h,[r(`h3`,g,[a(G,{to:`#ModifyTitle`},{default:n(()=>[...l[6]||=[o(`#`,-1)]]),_:1}),l[7]||=o(`Modify Title`,-1)]),a(K,null,{default:n(()=>[...l[8]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Dialog } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`modifyTitle`),o(`(`),r(`span`,{class:`hljs-params`}),o(`) `)]),o(`{
  Dialog({
    `),r(`span`,{class:`hljs-attr`},`title`),o(`: `),r(`span`,{class:`hljs-string`},`'Beat It'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`message`),o(`: `),r(`span`,{class:`hljs-string`},`'Don\\'t Wanna See No Blood, Don\\'t Be A Macho Man'`),o(`,
  })
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"modifyTitle"`),o(`>`)]),o(`Modify Title`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,_,[r(`h3`,v,[a(G,{to:`#HideButton`},{default:n(()=>[...l[9]||=[o(`#`,-1)]]),_:1}),l[10]||=o(`Hide Button`,-1)]),a(K,null,{default:n(()=>[...l[11]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Dialog } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`hideButton`),o(`(`),r(`span`,{class:`hljs-params`}),o(`) `)]),o(`{
  Dialog({
    `),r(`span`,{class:`hljs-attr`},`message`),o(`: `),r(`span`,{class:`hljs-string`},`'Don\\'t Wanna See No Blood, Don\\'t Be A Macho Man'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`confirmButton`),o(`: `),r(`span`,{class:`hljs-literal`},`false`),o(`,
    `),r(`span`,{class:`hljs-attr`},`cancelButton`),o(`: `),r(`span`,{class:`hljs-literal`},`false`),o(`,
  })
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"hideButton"`),o(`>`)]),o(`Hide Button`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,y,[r(`h3`,b,[a(G,{to:`#HandlerUserBehavior`},{default:n(()=>[...l[12]||=[o(`#`,-1)]]),_:1}),l[13]||=o(`Handler User Behavior`,-1)]),l[15]||=r(`p`,null,[o(`You can get user behavior from the method's return value, which is a `),r(`code`,null,`Promise`),o(`. Includes `),r(`code`,null,`confirm`),o(`, `),r(`code`,null,`cancel`),o(`, and `),r(`code`,null,`close(click the overlay to trigger closure)`),o(`.`)],-1),a(K,null,{default:n(()=>[...l[14]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Dialog, Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` actions = {
  `),r(`span`,{class:`hljs-attr`},`confirm`),o(`: `),r(`span`,{class:`hljs-function`},`() =>`),o(` Snackbar.success(`),r(`span`,{class:`hljs-string`},`'confirm'`),o(`),
  `),r(`span`,{class:`hljs-attr`},`cancel`),o(`: `),r(`span`,{class:`hljs-function`},`() =>`),o(` Snackbar.error(`),r(`span`,{class:`hljs-string`},`'cancel'`),o(`),
  `),r(`span`,{class:`hljs-attr`},`close`),o(`: `),r(`span`,{class:`hljs-function`},`() =>`),o(` Snackbar.info(`),r(`span`,{class:`hljs-string`},`'close'`),o(`),
}

`),r(`span`,{class:`hljs-keyword`},`async`),o(),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`createAction`),o(`(`),r(`span`,{class:`hljs-params`}),o(`) `)]),o(`{
  actions[`),r(`span`,{class:`hljs-keyword`},`await`),o(` Dialog(`),r(`span`,{class:`hljs-string`},`'Don\\'t Wanna See No Blood, Don\\'t Be A Macho Man'`),o(`)]()
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"createAction"`),o(`>`)]),o(`Handling user behavior`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,x,[r(`h3`,S,[a(G,{to:`#AsynchronousClosing`},{default:n(()=>[...l[16]||=[o(`#`,-1)]]),_:1}),l[17]||=o(`Asynchronous Closing`,-1)]),l[19]||=r(`p`,null,[o(`You can use `),r(`code`,null,`onBeforeClose`),o(` to intercept before closing, and you can get the user behavior from the parameters, and the callback function that triggers the shutdown.`)],-1),a(K,null,{default:n(()=>[...l[18]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Dialog, Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` actions = {
  `),r(`span`,{class:`hljs-attr`},`confirm`),o(`: `),r(`span`,{class:`hljs-function`},`() =>`),o(` Snackbar.success(`),r(`span`,{class:`hljs-string`},`'confirm'`),o(`),
  `),r(`span`,{class:`hljs-attr`},`cancel`),o(`: `),r(`span`,{class:`hljs-function`},`() =>`),o(` Snackbar.error(`),r(`span`,{class:`hljs-string`},`'cancel'`),o(`),
  `),r(`span`,{class:`hljs-attr`},`close`),o(`: `),r(`span`,{class:`hljs-function`},`() =>`),o(` Snackbar.info(`),r(`span`,{class:`hljs-string`},`'close'`),o(`),
}

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`onBeforeClose`),o(`(`),r(`span`,{class:`hljs-params`},`action, done`),o(`) `)]),o(`{
  Snackbar.loading(`),r(`span`,{class:`hljs-string`},`'Asynchronous shutdown in progress'`),o(`)

  `),r(`span`,{class:`hljs-built_in`},`setTimeout`),o(`(`),r(`span`,{class:`hljs-function`},`() =>`),o(` {
    actions[action]()
    done()
  }, `),r(`span`,{class:`hljs-number`},`1000`),o(`)
}

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`createAction`),o(`(`),r(`span`,{class:`hljs-params`}),o(`) `)]),o(`{
  Dialog({
    `),r(`span`,{class:`hljs-attr`},`message`),o(`: `),r(`span`,{class:`hljs-string`},`'Don\\'t Wanna See No Blood, Don\\'t Be A Macho Man'`),o(`,
    onBeforeClose
  })
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"createAction"`),o(`>`)]),o(`Asynchronous closing`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),l[49]||=r(`h2`,null,`Component Call`,-1),r(`div`,C,[r(`h3`,w,[a(G,{to:`#BasicUsage`},{default:n(()=>[...l[20]||=[o(`#`,-1)]]),_:1}),l[21]||=o(`Basic Usage`,-1)]),a(K,null,{default:n(()=>[...l[22]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`
   
`),r(`span`,{class:`hljs-keyword`},`const`),o(` show = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"warning"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"show = true"`),o(`>`)]),o(`Basic Use`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-dialog`),o(`
    `),r(`span`,{class:`hljs-attr`},`title`),o(`=`),r(`span`,{class:`hljs-string`},`"Beat It"`),o(`
    `),r(`span`,{class:`hljs-attr`},`message`),o(`=`),r(`span`,{class:`hljs-string`},`"Don't Wanna See No Blood, Don't Be A Macho Man"`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model:show`),o(`=`),r(`span`,{class:`hljs-string`},`"show"`),o(`
    @`),r(`span`,{class:`hljs-attr`},`confirm`),o(`=`),r(`span`,{class:`hljs-string`},`"Snackbar.success('confirm')"`),o(`
    @`),r(`span`,{class:`hljs-attr`},`cancel`),o(`=`),r(`span`,{class:`hljs-string`},`"Snackbar.error('cancel')"`),o(`
    @`),r(`span`,{class:`hljs-attr`},`closed`),o(`=`),r(`span`,{class:`hljs-string`},`"Snackbar.info('closed')"`),o(`
  />`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,T,[r(`h3`,E,[a(G,{to:`#AsynchronousClosing`},{default:n(()=>[...l[23]||=[o(`#`,-1)]]),_:1}),l[24]||=o(`Asynchronous Closing`,-1)]),a(K,null,{default:n(()=>[...l[25]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
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
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"warning"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"show = true"`),o(`>`)]),o(`Asynchronous closing`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-dialog`),o(`
    `),r(`span`,{class:`hljs-attr`},`title`),o(`=`),r(`span`,{class:`hljs-string`},`"Beat It"`),o(`
    `),r(`span`,{class:`hljs-attr`},`message`),o(`=`),r(`span`,{class:`hljs-string`},`"Don't Wanna See No Blood, Don't Be A Macho Man"`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model:show`),o(`=`),r(`span`,{class:`hljs-string`},`"show"`),o(`
    @`),r(`span`,{class:`hljs-attr`},`before-close`),o(`=`),r(`span`,{class:`hljs-string`},`"onBeforeClose"`),o(`
  />`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,D,[r(`h3`,O,[a(G,{to:`#CustomSlots`},{default:n(()=>[...l[26]||=[o(`#`,-1)]]),_:1}),l[27]||=o(`Custom Slots`,-1)]),a(K,null,{default:n(()=>[...l[28]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` show = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"warning"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"show = true"`),o(`>`)]),o(`Custom Slots`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-dialog`),o(),r(`span`,{class:`hljs-attr`},`v-model:show`),o(`=`),r(`span`,{class:`hljs-string`},`"show"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`title`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"information"`),o(),r(`span`,{class:`hljs-attr`},`color`),o(`=`),r(`span`,{class:`hljs-string`},`"#2979ff"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`

    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`Don't Wanna See No Blood, Don't Be A Macho Man`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`Don't Wanna See No Blood, Don't Be A Macho Man`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`Don't Wanna See No Blood, Don't Be A Macho Man`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-dialog`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),l[50]||=r(`h2`,null,`API`,-1),r(`div`,k,[r(`h3`,A,[a(G,{to:`#Props`},{default:n(()=>[...l[29]||=[o(`#`,-1)]]),_:1}),l[30]||=o(`Props`,-1)]),l[31]||=s(`<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>Whether to display a Dialog</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>title</code></td><td>Dialog title</td><td><em>string</em></td><td><code>Hint</code></td></tr><tr><td><code>width</code></td><td>Dialog width</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>message</code></td><td>Dialog message content</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>message-align</code></td><td>Dialog message content text alignment, optional values <code>center</code>, <code>left</code>, <code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td><code>confirm-button</code></td><td>Whether to display the confirm button</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cancel-button</code></td><td>Whether to display the cancel button</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>confirm-button-text</code></td><td>Confirm button text</td><td><em>string</em></td><td><code>Confirm</code></td></tr><tr><td><code>cancel-button-text</code></td><td>Cancel button text</td><td><em>string</em></td><td><code>Cancel</code></td></tr><tr><td><code>confirm-button-text-color</code></td><td>Confirm button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancel-button-text-color</code></td><td>Cancel button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>confirm-button-color</code></td><td>Confirm button background color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancel-button-color</code></td><td>Cancel button background color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>confirm-button-loading</code> <em><strong>3.12.0</strong></em></td><td>Confirm button loading state</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>cancel-button-loading</code> <em><strong>3.12.0</strong></em></td><td>Cancel button loading state</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>confirm-button-disabled</code> <em><strong>3.12.0</strong></em></td><td>Confirm button disabled state</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>cancel-button-disabled</code> <em><strong>3.12.0</strong></em></td><td>Cancel button disabled state</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>dialog-class</code></td><td>Dialog body class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>dialog-style</code></td><td>Dialog body style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>overlay</code></td><td>Whether to display the overlay</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlay-class</code></td><td>Custom overlay class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlay-style</code></td><td>Custom overlay style</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>lock-scroll</code></td><td>Whether to disable scrolling penetration, scrolling the Dialog when disabled will not cause the body to scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-overlay</code></td><td>Whether to click the overlay to close the Dialog</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-key-escape</code></td><td>Whether to support keyboard ESC to close the dialog</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>The location of the Dialog to mount</td><td><em>TeleportProps[&#39;to&#39;] | false</em></td><td><code>body</code></td></tr></tbody></table>`,1)]),r(`div`,j,[r(`h3`,M,[a(G,{to:`#Events`},{default:n(()=>[...l[32]||=[o(`#`,-1)]]),_:1}),l[33]||=o(`Events`,-1)]),l[34]||=s(`<table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>open</code></td><td>Triggered when the Dialog is open</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>Triggered when the Dialog open-animation ends</td><td><code>-</code></td></tr><tr><td><code>before-close</code></td><td>Triggering before the Dialog closes prevents closure</td><td><code>action: confirm | cancel | close</code> <br> <code>done: Function</code></td></tr><tr><td><code>close</code></td><td>Triggered when the Dialog is close</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>Triggered when the Dialog close-animation ends</td><td><code>-</code></td></tr><tr><td><code>confirm</code></td><td>Triggered on confirm</td><td><code>-</code></td></tr><tr><td><code>cancel</code></td><td>Triggered on cancel</td><td><code>-</code></td></tr><tr><td><code>click-overlay</code></td><td>Triggered when clicking on overlay</td><td><code>-</code></td></tr><tr><td><code>key-escape</code></td><td>Triggered when click keyboard ESC</td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,N,[r(`h3`,P,[a(G,{to:`#Methods`},{default:n(()=>[...l[35]||=[o(`#`,-1)]]),_:1}),l[36]||=o(`Methods`,-1)]),l[37]||=s(`<table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>Dialog</code></td><td>Show dialog</td><td><em>options | string</em></td><td><code>-</code></td></tr><tr><td><code>Dialog.close</code></td><td>Close dialog</td><td><em>-</em></td><td><code>-</code></td></tr><tr><td><code>Dialog.setDefaultOptions</code></td><td>Set default option configuration</td><td><em>options</em></td><td><code>-</code></td></tr><tr><td><code>Dialog.resetDefaultOptions</code></td><td>Reset default option configuration</td><td><em>-</em></td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,F,[r(`h3`,I,[a(G,{to:`#DialogOptions`},{default:n(()=>[...l[38]||=[o(`#`,-1)]]),_:1}),l[39]||=o(`Dialog Options`,-1)]),l[40]||=s(`<h4>Options passed in for a functional call</h4><table><thead><tr><th>Option</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>title</code></td><td>Dialog title</td><td><em>string</em></td><td><code>Hint</code></td></tr><tr><td><code>width</code></td><td>Dialog width</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>message</code></td><td>Dialog message content</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>messageAlign</code></td><td>Dialog message content text alignment, optional values <code>center</code> <code>left</code> <code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td><code>confirmButton</code></td><td>Whether to display the confirm button</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cancelButton</code></td><td>Whether to display the cancel button</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>confirmButtonText</code></td><td>Confirm button text</td><td><em>string</em></td><td><code>确认</code></td></tr><tr><td><code>cancelButtonText</code></td><td>Cancel button text</td><td><em>string</em></td><td><code>取消</code></td></tr><tr><td><code>confirmButtonTextColor</code></td><td>Confirm button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancelButtonTextColor</code></td><td>Cancel button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>confirmButtonColor</code></td><td>Confirm button background color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancelButtonColor</code></td><td>Cancel button background color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>confirmButtonLoading</code> <em><strong>3.12.0</strong></em></td><td>Confirm button loading state</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>cancelButtonLoading</code> <em><strong>3.12.0</strong></em></td><td>Cancel button loading state</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>confirmButtonDisabled</code> <em><strong>3.12.0</strong></em></td><td>Confirm button disabled state</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>cancelButtonDisabled</code> <em><strong>3.12.0</strong></em></td><td>Cancel button disabled state</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>dialogClass</code></td><td>Dialog body class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>dialogStyle</code></td><td>Dialog body style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>overlay</code></td><td>Whether to display the overlay</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlayClass</code></td><td>Custom overlay class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlayStyle</code></td><td>Custom overlay style</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>lockScroll</code></td><td>Whether to disable scrolling penetration, scrolling the Dialog when disabled will not cause the body to scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnClickOverlay</code></td><td>Whether to click the overlay to close the Dialog</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnKeyEscape</code></td><td>Whether to support keyboard ESC to close the dialog</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>onOpen</code></td><td>Dialog open callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>Dialog open-animation ends callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onBeforeClose</code></td><td>Callbacks prevent closure before the Dialog closes</td><td><em>(action: confirm | cancel | close, done: Function) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>Dialog close callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>Dialog close-animation ends callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onConfirm</code></td><td>Confirm callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onCancel</code></td><td>Cancel callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClickOverlay</code></td><td>Click overlay callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onKeyEscape</code></td><td>Triggered when click keyboard ESC</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table>`,2)]),r(`div`,L,[r(`h3`,R,[a(G,{to:`#Slots`},{default:n(()=>[...l[41]||=[o(`#`,-1)]]),_:1}),l[42]||=o(`Slots`,-1)]),l[43]||=s(`<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Dialog content message</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>Dialog title</td><td><code>-</code></td></tr><tr><td><code>actions</code> <em><strong>3.3.3</strong></em></td><td>Dialog actions</td><td><code>slotClass: string</code> the class of actions container <br> <code>cancel: () =&gt; void</code> cancel callback function <br> <code>confirm: () =&gt; void</code> confirm callback function</td></tr></tbody></table>`,1)]),r(`div`,z,[r(`h3`,B,[a(G,{to:`#StyleVariables`},{default:n(()=>[...l[44]||=[o(`#`,-1)]]),_:1}),l[45]||=o(`Style Variables`,-1)]),l[46]||=s(`<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--dialog-width</code></td><td><code>280px</code></td></tr><tr><td><code>--dialog-background</code></td><td><code>var(--color-surface-container-low)</code></td></tr><tr><td><code>--dialog-border-radius</code></td><td><code>3px</code></td></tr><tr><td><code>--dialog-title-padding</code></td><td><code>20px 20px 0</code></td></tr><tr><td><code>--dialog-title-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--dialog-message-color</code></td><td><code>#888</code></td></tr><tr><td><code>--dialog-message-padding</code></td><td><code>12px 20px</code></td></tr><tr><td><code>--dialog-message-line-height</code></td><td><code>24px</code></td></tr><tr><td><code>--dialog-message-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--dialog-actions-padding</code></td><td><code>0 12px 12px</code></td></tr><tr><td><code>--dialog-button-margin-left</code></td><td><code>6px</code></td></tr><tr><td><code>--dialog-title-color</code></td><td><code>#555</code></td></tr><tr><td><code>--dialog-confirm-button-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--dialog-cancel-button-color</code></td><td><code>var(--color-primary)</code></td></tr></tbody></table>`,2)])])}var H=c(l,[[`render`,V]]);export{H as default};