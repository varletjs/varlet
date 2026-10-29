import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s,m as c}from"./runtime-core.esm-bundler-DUghkl6b.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`Intro`},p={class:`card`},m={id:`BasicUsage`},h={class:`card`},g={id:`ModifyTitle`},_={class:`card`},v={id:`HideButton`},y={class:`card`},b={id:`CustomActionButtons`},x={class:`card`},S={id:`HandlerUserBehavior`},C={class:`card`},w={id:`AsynchronousClosing`},T={class:`card`},E={id:`BasicUsage`},D={class:`card`},O={id:`CustomActionButtons`},k={class:`card`},A={id:`AsynchronousClosing`},j={class:`card`},M={id:`CustomSlots`},N={class:`card`},P={id:`Props`},F={class:`card`},I={id:`Events`},L={class:`card`},R={id:`Methods`},z={class:`card`},B={id:`DialogOptions`},V={class:`card`},H={id:`Slots`},U={class:`card`},W={id:`StyleVariables`};function G(e,l,G,K,q,J){let Y=n(`router-link`),X=n(`var-site-code-example`);return r(),a(`div`,u,[l[53]||=i(`h1`,null,`Dialog`,-1),i(`div`,d,[i(`h3`,f,[o(Y,{to:`#Intro`},{default:t(()=>[...l[0]||=[s(`#`,-1)]]),_:1}),l[1]||=s(`Intro`,-1)]),l[2]||=i(`p`,null,[s(`A dialog pops up to display the content and handle the user interaction. `),i(`code`,null,`Dialog`),s(` have provided functional and component usage, and there is no essential difference between the two usage effects and parameters.`)],-1)]),l[54]||=i(`h2`,null,`Function Call`,-1),i(`div`,p,[i(`h3`,m,[o(Y,{to:`#BasicUsage`},{default:t(()=>[...l[3]||=[s(`#`,-1)]]),_:1}),l[4]||=s(`Basic Usage`,-1)]),o(X,null,{default:t(()=>[...l[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Dialog } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"Dialog('Don\\'t Wanna See No Blood, Don\\'t Be A Macho Man')"`),s(`>`)]),s(`Basic Use`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,h,[i(`h3`,g,[o(Y,{to:`#ModifyTitle`},{default:t(()=>[...l[6]||=[s(`#`,-1)]]),_:1}),l[7]||=s(`Modify Title`,-1)]),o(X,null,{default:t(()=>[...l[8]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Dialog } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`modifyTitle`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  Dialog({
    `),i(`span`,{class:`hljs-attr`},`title`),s(`: `),i(`span`,{class:`hljs-string`},`'Beat It'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`message`),s(`: `),i(`span`,{class:`hljs-string`},`'Don\\'t Wanna See No Blood, Don\\'t Be A Macho Man'`),s(`,
  })
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"modifyTitle"`),s(`>`)]),s(`Modify Title`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,_,[i(`h3`,v,[o(Y,{to:`#HideButton`},{default:t(()=>[...l[9]||=[s(`#`,-1)]]),_:1}),l[10]||=s(`Hide Button`,-1)]),o(X,null,{default:t(()=>[...l[11]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Dialog } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`hideButton`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  Dialog({
    `),i(`span`,{class:`hljs-attr`},`message`),s(`: `),i(`span`,{class:`hljs-string`},`'Don\\'t Wanna See No Blood, Don\\'t Be A Macho Man'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`confirmButton`),s(`: `),i(`span`,{class:`hljs-literal`},`false`),s(`,
    `),i(`span`,{class:`hljs-attr`},`cancelButton`),s(`: `),i(`span`,{class:`hljs-literal`},`false`),s(`,
  })
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"hideButton"`),s(`>`)]),s(`Hide Button`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,y,[i(`h3`,b,[o(Y,{to:`#CustomActionButtons`},{default:t(()=>[...l[12]||=[s(`#`,-1)]]),_:1}),l[13]||=s(`Custom Action Buttons`,-1)]),o(X,null,{default:t(()=>[...l[14]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Dialog } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`customActionButtons`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  Dialog({
    `),i(`span`,{class:`hljs-attr`},`message`),s(`: `),i(`span`,{class:`hljs-string`},`'Don\\'t Wanna See No Blood, Don\\'t Be A Macho Man'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`confirmButtonProps`),s(`: {
      `),i(`span`,{class:`hljs-attr`},`type`),s(`: `),i(`span`,{class:`hljs-string`},`'primary'`),s(`,
      `),i(`span`,{class:`hljs-attr`},`text`),s(`: `),i(`span`,{class:`hljs-literal`},`false`),s(`,
    },
    `),i(`span`,{class:`hljs-attr`},`cancelButtonProps`),s(`: {
      `),i(`span`,{class:`hljs-attr`},`type`),s(`: `),i(`span`,{class:`hljs-string`},`'primary'`),s(`,
      `),i(`span`,{class:`hljs-attr`},`outline`),s(`: `),i(`span`,{class:`hljs-literal`},`true`),s(`,
    },
  })
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"customActionButtons"`),s(`>`)]),s(`Custom Action Buttons`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,x,[i(`h3`,S,[o(Y,{to:`#HandlerUserBehavior`},{default:t(()=>[...l[15]||=[s(`#`,-1)]]),_:1}),l[16]||=s(`Handler User Behavior`,-1)]),l[18]||=i(`p`,null,[s(`You can get user behavior from the method's return value, which is a `),i(`code`,null,`Promise`),s(`. Includes `),i(`code`,null,`confirm`),s(`, `),i(`code`,null,`cancel`),s(`, and `),i(`code`,null,`close(click the overlay to trigger closure)`),s(`.`)],-1),o(X,null,{default:t(()=>[...l[17]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Dialog, Snackbar } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` actions = {
  `),i(`span`,{class:`hljs-attr`},`confirm`),s(`: `),i(`span`,{class:`hljs-function`},`() =>`),s(` Snackbar.success(`),i(`span`,{class:`hljs-string`},`'confirm'`),s(`),
  `),i(`span`,{class:`hljs-attr`},`cancel`),s(`: `),i(`span`,{class:`hljs-function`},`() =>`),s(` Snackbar.error(`),i(`span`,{class:`hljs-string`},`'cancel'`),s(`),
  `),i(`span`,{class:`hljs-attr`},`close`),s(`: `),i(`span`,{class:`hljs-function`},`() =>`),s(` Snackbar.info(`),i(`span`,{class:`hljs-string`},`'close'`),s(`),
}

`),i(`span`,{class:`hljs-keyword`},`async`),s(),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`createAction`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  actions[`),i(`span`,{class:`hljs-keyword`},`await`),s(` Dialog(`),i(`span`,{class:`hljs-string`},`'Don\\'t Wanna See No Blood, Don\\'t Be A Macho Man'`),s(`)]()
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"createAction"`),s(`>`)]),s(`Handling user behavior`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,C,[i(`h3`,w,[o(Y,{to:`#AsynchronousClosing`},{default:t(()=>[...l[19]||=[s(`#`,-1)]]),_:1}),l[20]||=s(`Asynchronous Closing`,-1)]),l[22]||=i(`p`,null,[s(`You can use `),i(`code`,null,`onBeforeClose`),s(` to intercept before closing, and you can get the user behavior from the parameters, and the callback function that triggers the shutdown.`)],-1),o(X,null,{default:t(()=>[...l[21]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Dialog, Snackbar } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` actions = {
  `),i(`span`,{class:`hljs-attr`},`confirm`),s(`: `),i(`span`,{class:`hljs-function`},`() =>`),s(` Snackbar.success(`),i(`span`,{class:`hljs-string`},`'confirm'`),s(`),
  `),i(`span`,{class:`hljs-attr`},`cancel`),s(`: `),i(`span`,{class:`hljs-function`},`() =>`),s(` Snackbar.error(`),i(`span`,{class:`hljs-string`},`'cancel'`),s(`),
  `),i(`span`,{class:`hljs-attr`},`close`),s(`: `),i(`span`,{class:`hljs-function`},`() =>`),s(` Snackbar.info(`),i(`span`,{class:`hljs-string`},`'close'`),s(`),
}

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`onBeforeClose`),s(`(`),i(`span`,{class:`hljs-params`},`action, done`),s(`) `)]),s(`{
  Snackbar.loading(`),i(`span`,{class:`hljs-string`},`'Asynchronous shutdown in progress'`),s(`)

  `),i(`span`,{class:`hljs-built_in`},`setTimeout`),s(`(`),i(`span`,{class:`hljs-function`},`() =>`),s(` {
    actions[action]()
    done()
  }, `),i(`span`,{class:`hljs-number`},`1000`),s(`)
}

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`createAction`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  Dialog({
    `),i(`span`,{class:`hljs-attr`},`message`),s(`: `),i(`span`,{class:`hljs-string`},`'Don\\'t Wanna See No Blood, Don\\'t Be A Macho Man'`),s(`,
    onBeforeClose
  })
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"createAction"`),s(`>`)]),s(`Asynchronous closing`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),l[55]||=i(`h2`,null,`Component Call`,-1),i(`div`,T,[i(`h3`,E,[o(Y,{to:`#BasicUsage`},{default:t(()=>[...l[23]||=[s(`#`,-1)]]),_:1}),l[24]||=s(`Basic Usage`,-1)]),o(X,null,{default:t(()=>[...l[25]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Snackbar } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`
   
`),i(`span`,{class:`hljs-keyword`},`const`),s(` show = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"warning"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"show = true"`),s(`>`)]),s(`Basic Use`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-dialog`),s(`
    `),i(`span`,{class:`hljs-attr`},`title`),s(`=`),i(`span`,{class:`hljs-string`},`"Beat It"`),s(`
    `),i(`span`,{class:`hljs-attr`},`message`),s(`=`),i(`span`,{class:`hljs-string`},`"Don't Wanna See No Blood, Don't Be A Macho Man"`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"show"`),s(`
    @`),i(`span`,{class:`hljs-attr`},`confirm`),s(`=`),i(`span`,{class:`hljs-string`},`"Snackbar.success('confirm')"`),s(`
    @`),i(`span`,{class:`hljs-attr`},`cancel`),s(`=`),i(`span`,{class:`hljs-string`},`"Snackbar.error('cancel')"`),s(`
    @`),i(`span`,{class:`hljs-attr`},`closed`),s(`=`),i(`span`,{class:`hljs-string`},`"Snackbar.info('closed')"`),s(`
  />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,D,[i(`h3`,O,[o(Y,{to:`#CustomActionButtons`},{default:t(()=>[...l[26]||=[s(`#`,-1)]]),_:1}),l[27]||=s(`Custom Action Buttons`,-1)]),o(X,null,{default:t(()=>[...l[28]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` show = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"warning"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"show = true"`),s(`>`)]),s(`Custom Action Buttons`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-dialog`),s(`
    `),i(`span`,{class:`hljs-attr`},`title`),s(`=`),i(`span`,{class:`hljs-string`},`"Beat It"`),s(`
    `),i(`span`,{class:`hljs-attr`},`message`),s(`=`),i(`span`,{class:`hljs-string`},`"Don't Wanna See No Blood, Don't Be A Macho Man"`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"show"`),s(`
    `),i(`span`,{class:`hljs-attr`},`:confirm-button-props`),s(`=`),i(`span`,{class:`hljs-string`},`"{ type: 'primary', text: false }"`),s(`
    `),i(`span`,{class:`hljs-attr`},`:cancel-button-props`),s(`=`),i(`span`,{class:`hljs-string`},`"{ type: 'primary', outline: true }"`),s(`
  />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,k,[i(`h3`,A,[o(Y,{to:`#AsynchronousClosing`},{default:t(()=>[...l[29]||=[s(`#`,-1)]]),_:1}),l[30]||=s(`Asynchronous Closing`,-1)]),o(X,null,{default:t(()=>[...l[31]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Snackbar } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` show = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`onBeforeClose`),s(`(`),i(`span`,{class:`hljs-params`},`action, done, { 
  confirmButtonLoading, 
  cancelButtonLoading, 
  confirmButtonDisabled, 
  cancelButtonDisabled 
}`),s(`) `)]),s(`{
  `),i(`span`,{class:`hljs-keyword`},`if`),s(` (action === `),i(`span`,{class:`hljs-string`},`'confirm'`),s(`) {
    confirmButtonLoading.value = `),i(`span`,{class:`hljs-literal`},`true`),s(`
    cancelButtonDisabled.value = `),i(`span`,{class:`hljs-literal`},`true`),s(`
  }

  `),i(`span`,{class:`hljs-keyword`},`if`),s(` (action === `),i(`span`,{class:`hljs-string`},`'cancel'`),s(`) {
    cancelButtonLoading.value = `),i(`span`,{class:`hljs-literal`},`true`),s(`
    confirmButtonDisabled.value = `),i(`span`,{class:`hljs-literal`},`true`),s(`
  }

  `),i(`span`,{class:`hljs-built_in`},`setTimeout`),s(`(`),i(`span`,{class:`hljs-function`},`() =>`),s(` {
    confirmButtonLoading.value = `),i(`span`,{class:`hljs-literal`},`false`),s(`
    cancelButtonLoading.value = `),i(`span`,{class:`hljs-literal`},`false`),s(`
    confirmButtonDisabled.value = `),i(`span`,{class:`hljs-literal`},`false`),s(`
    cancelButtonDisabled.value = `),i(`span`,{class:`hljs-literal`},`false`),s(`

    `),i(`span`,{class:`hljs-keyword`},`if`),s(` (action === `),i(`span`,{class:`hljs-string`},`'confirm'`),s(`) {
      Snackbar.success(`),i(`span`,{class:`hljs-string`},`'confirm'`),s(`)
    }

    `),i(`span`,{class:`hljs-keyword`},`if`),s(` (action === `),i(`span`,{class:`hljs-string`},`'cancel'`),s(`) {
      Snackbar.error(`),i(`span`,{class:`hljs-string`},`'cancel'`),s(`)
    }

    `),i(`span`,{class:`hljs-keyword`},`if`),s(` (action === `),i(`span`,{class:`hljs-string`},`'close'`),s(`) {
      Snackbar.info(`),i(`span`,{class:`hljs-string`},`'close'`),s(`)
    }

    done()
   }, `),i(`span`,{class:`hljs-number`},`1000`),s(`)
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"warning"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"show = true"`),s(`>`)]),s(`Asynchronous closing`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-dialog`),s(`
    `),i(`span`,{class:`hljs-attr`},`title`),s(`=`),i(`span`,{class:`hljs-string`},`"Beat It"`),s(`
    `),i(`span`,{class:`hljs-attr`},`message`),s(`=`),i(`span`,{class:`hljs-string`},`"Don't Wanna See No Blood, Don't Be A Macho Man"`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"show"`),s(`
    @`),i(`span`,{class:`hljs-attr`},`before-close`),s(`=`),i(`span`,{class:`hljs-string`},`"onBeforeClose"`),s(`
  />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,j,[i(`h3`,M,[o(Y,{to:`#CustomSlots`},{default:t(()=>[...l[32]||=[s(`#`,-1)]]),_:1}),l[33]||=s(`Custom Slots`,-1)]),o(X,null,{default:t(()=>[...l[34]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` show = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"warning"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"show = true"`),s(`>`)]),s(`Custom Slots`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-dialog`),s(),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"show"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`title`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"information"`),s(),i(`span`,{class:`hljs-attr`},`color`),s(`=`),i(`span`,{class:`hljs-string`},`"#2979ff"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-cell`),s(`>`)]),s(`Don't Wanna See No Blood, Don't Be A Macho Man`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-cell`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-cell`),s(`>`)]),s(`Don't Wanna See No Blood, Don't Be A Macho Man`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-cell`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-cell`),s(`>`)]),s(`Don't Wanna See No Blood, Don't Be A Macho Man`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-cell`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-dialog`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),l[56]||=i(`h2`,null,`API`,-1),i(`div`,N,[i(`h3`,P,[o(Y,{to:`#Props`},{default:t(()=>[...l[35]||=[s(`#`,-1)]]),_:1}),l[36]||=s(`Props`,-1)]),l[37]||=c(`<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>Whether to display a Dialog</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>title</code></td><td>Dialog title</td><td><em>string</em></td><td><code>Hint</code></td></tr><tr><td><code>width</code></td><td>Dialog width</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>message</code></td><td>Dialog message content</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>message-align</code></td><td>Dialog message content text alignment, optional values <code>center</code>, <code>left</code>, <code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td><code>confirm-button</code></td><td>Whether to display the confirm button</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cancel-button</code></td><td>Whether to display the cancel button</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>confirm-button-text</code></td><td>Confirm button text</td><td><em>string</em></td><td><code>Confirm</code></td></tr><tr><td><code>cancel-button-text</code></td><td>Cancel button text</td><td><em>string</em></td><td><code>Cancel</code></td></tr><tr><td><code>confirm-button-text-color</code></td><td>Confirm button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancel-button-text-color</code></td><td>Cancel button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>confirm-button-color</code></td><td>Confirm button background color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancel-button-color</code></td><td>Cancel button background color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>confirm-button-props</code> <em><strong>3.18.0</strong></em></td><td>Confirm button props</td><td><em><a href="/#/en-US/button#Props">ButtonProps</a></em></td><td><code>-</code></td></tr><tr><td><code>cancel-button-props</code> <em><strong>3.18.0</strong></em></td><td>Cancel button props</td><td><em><a href="/#/en-US/button#Props">ButtonProps</a></em></td><td><code>-</code></td></tr><tr><td><code>confirm-button-loading</code> <em><strong>3.12.0</strong></em></td><td>Confirm button loading state</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>cancel-button-loading</code> <em><strong>3.12.0</strong></em></td><td>Cancel button loading state</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>confirm-button-disabled</code> <em><strong>3.12.0</strong></em></td><td>Confirm button disabled state</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>cancel-button-disabled</code> <em><strong>3.12.0</strong></em></td><td>Cancel button disabled state</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>dialog-class</code></td><td>Dialog body class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>dialog-style</code></td><td>Dialog body style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>overlay</code></td><td>Whether to display the overlay</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlay-class</code></td><td>Custom overlay class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlay-style</code></td><td>Custom overlay style</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>lock-scroll</code></td><td>Whether to disable scrolling penetration, scrolling the Dialog when disabled will not cause the body to scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-overlay</code></td><td>Whether to click the overlay to close the Dialog</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-key-escape</code></td><td>Whether to support keyboard ESC to close the dialog</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>The location of the Dialog to mount</td><td><em>TeleportProps[&#39;to&#39;] | false</em></td><td><code>body</code></td></tr></tbody></table>`,1)]),i(`div`,F,[i(`h3`,I,[o(Y,{to:`#Events`},{default:t(()=>[...l[38]||=[s(`#`,-1)]]),_:1}),l[39]||=s(`Events`,-1)]),l[40]||=c(`<table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>open</code></td><td>Triggered when the Dialog is open</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>Triggered when the Dialog open-animation ends</td><td><code>-</code></td></tr><tr><td><code>before-close</code></td><td>Triggering before the Dialog closes prevents closure</td><td><code>action: confirm | cancel | close</code> <br> <code>done: Function</code> <br> <code>refs: DialogBeforeCloseRefs</code></td></tr><tr><td><code>close</code></td><td>Triggered when the Dialog is close</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>Triggered when the Dialog close-animation ends</td><td><code>-</code></td></tr><tr><td><code>confirm</code></td><td>Triggered on confirm</td><td><code>-</code></td></tr><tr><td><code>cancel</code></td><td>Triggered on cancel</td><td><code>-</code></td></tr><tr><td><code>click-overlay</code></td><td>Triggered when clicking on overlay</td><td><code>-</code></td></tr><tr><td><code>key-escape</code></td><td>Triggered when click keyboard ESC</td><td><code>-</code></td></tr></tbody></table>`,1)]),i(`div`,L,[i(`h3`,R,[o(Y,{to:`#Methods`},{default:t(()=>[...l[41]||=[s(`#`,-1)]]),_:1}),l[42]||=s(`Methods`,-1)]),l[43]||=c(`<table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>Dialog</code></td><td>Show dialog</td><td><em>options | string</em></td><td><code>-</code></td></tr><tr><td><code>Dialog.close</code></td><td>Close dialog</td><td><em>-</em></td><td><code>-</code></td></tr><tr><td><code>Dialog.setDefaultOptions</code></td><td>Set default option configuration</td><td><em>options</em></td><td><code>-</code></td></tr><tr><td><code>Dialog.resetDefaultOptions</code></td><td>Reset default option configuration</td><td><em>-</em></td><td><code>-</code></td></tr></tbody></table>`,1)]),i(`div`,z,[i(`h3`,B,[o(Y,{to:`#DialogOptions`},{default:t(()=>[...l[44]||=[s(`#`,-1)]]),_:1}),l[45]||=s(`Dialog Options`,-1)]),l[46]||=c(`<h4>Options passed in for a functional call</h4><table><thead><tr><th>Option</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>title</code></td><td>Dialog title</td><td><em>string</em></td><td><code>Hint</code></td></tr><tr><td><code>width</code></td><td>Dialog width</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>message</code></td><td>Dialog message content</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>messageAlign</code></td><td>Dialog message content text alignment, optional values <code>center</code> <code>left</code> <code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td><code>confirmButton</code></td><td>Whether to display the confirm button</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cancelButton</code></td><td>Whether to display the cancel button</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>confirmButtonText</code></td><td>Confirm button text</td><td><em>string</em></td><td><code>确认</code></td></tr><tr><td><code>cancelButtonText</code></td><td>Cancel button text</td><td><em>string</em></td><td><code>取消</code></td></tr><tr><td><code>confirmButtonTextColor</code></td><td>Confirm button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancelButtonTextColor</code></td><td>Cancel button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>confirmButtonColor</code></td><td>Confirm button background color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancelButtonColor</code></td><td>Cancel button background color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>confirmButtonProps</code> <em><strong>3.18.0</strong></em></td><td>Confirm button props</td><td><em><a href="/#/en-US/button#Props">ButtonProps</a></em></td><td><code>-</code></td></tr><tr><td><code>cancelButtonProps</code> <em><strong>3.18.0</strong></em></td><td>Cancel button props</td><td><em><a href="/#/en-US/button#Props">ButtonProps</a></em></td><td><code>-</code></td></tr><tr><td><code>confirmButtonLoading</code> <em><strong>3.12.0</strong></em></td><td>Confirm button loading state</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>cancelButtonLoading</code> <em><strong>3.12.0</strong></em></td><td>Cancel button loading state</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>confirmButtonDisabled</code> <em><strong>3.12.0</strong></em></td><td>Confirm button disabled state</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>cancelButtonDisabled</code> <em><strong>3.12.0</strong></em></td><td>Cancel button disabled state</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>dialogClass</code></td><td>Dialog body class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>dialogStyle</code></td><td>Dialog body style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>overlay</code></td><td>Whether to display the overlay</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlayClass</code></td><td>Custom overlay class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlayStyle</code></td><td>Custom overlay style</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>lockScroll</code></td><td>Whether to disable scrolling penetration, scrolling the Dialog when disabled will not cause the body to scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnClickOverlay</code></td><td>Whether to click the overlay to close the Dialog</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnKeyEscape</code></td><td>Whether to support keyboard ESC to close the dialog</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>onOpen</code></td><td>Dialog open callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>Dialog open-animation ends callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onBeforeClose</code></td><td>Callbacks prevent closure before the Dialog closes</td><td><em>(action: confirm | cancel | close, done: Function, refs: DialogBeforeCloseRefs) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>Dialog close callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>Dialog close-animation ends callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onConfirm</code></td><td>Confirm callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onCancel</code></td><td>Cancel callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClickOverlay</code></td><td>Click overlay callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onKeyEscape</code></td><td>Triggered when click keyboard ESC</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table>`,2)]),i(`div`,V,[i(`h3`,H,[o(Y,{to:`#Slots`},{default:t(()=>[...l[47]||=[s(`#`,-1)]]),_:1}),l[48]||=s(`Slots`,-1)]),l[49]||=c(`<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Dialog content message</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>Dialog title</td><td><code>-</code></td></tr><tr><td><code>actions</code> <em><strong>3.3.3</strong></em></td><td>Dialog actions</td><td><code>slotClass: string</code> the class of actions container <br> <code>cancel: () =&gt; void</code> cancel callback function <br> <code>confirm: () =&gt; void</code> confirm callback function</td></tr></tbody></table>`,1)]),i(`div`,U,[i(`h3`,W,[o(Y,{to:`#StyleVariables`},{default:t(()=>[...l[50]||=[s(`#`,-1)]]),_:1}),l[51]||=s(`Style Variables`,-1)]),l[52]||=c(`<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--dialog-width</code></td><td><code>280px</code></td></tr><tr><td><code>--dialog-background</code></td><td><code>var(--color-surface-container-low)</code></td></tr><tr><td><code>--dialog-border-radius</code></td><td><code>3px</code></td></tr><tr><td><code>--dialog-title-padding</code></td><td><code>20px 20px 0</code></td></tr><tr><td><code>--dialog-title-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--dialog-message-color</code></td><td><code>#888</code></td></tr><tr><td><code>--dialog-message-padding</code></td><td><code>12px 20px</code></td></tr><tr><td><code>--dialog-message-line-height</code></td><td><code>24px</code></td></tr><tr><td><code>--dialog-message-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--dialog-actions-padding</code></td><td><code>0 12px 12px</code></td></tr><tr><td><code>--dialog-button-margin-left</code></td><td><code>6px</code></td></tr><tr><td><code>--dialog-title-color</code></td><td><code>#555</code></td></tr><tr><td><code>--dialog-confirm-button-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--dialog-cancel-button-color</code></td><td><code>var(--color-primary)</code></td></tr></tbody></table>`,2)])])}var K=e(l,[[`render`,G]]);export{K as default};