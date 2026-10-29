import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s,m as c}from"./runtime-core.esm-bundler-DUghkl6b.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`Intro`},p={class:`card`},m={id:`BasicUsage`},h={class:`card`},g={id:`ModifyTitle`},_={class:`card`},v={id:`ActionDisabled`},y={class:`card`},b={id:`DisableCloseOnClickAction`},x={class:`card`},S={id:`CustomActionStyles`},C={class:`card`},w={id:`BasicUsage`},T={class:`card`},E={id:`ModifyTitle`},D={class:`card`},O={id:`ActionDisabled`},k={class:`card`},A={id:`DisableCloseOnClickAction`},j={class:`card`},M={id:`CustomActionStyles`},N={class:`card`},P={id:`Props`},F={class:`card`},I={id:`Events`},L={class:`card`},R={id:`Methods`},z={class:`card`},B={id:`ActionSheetOptions`},V={class:`card`},H={id:`ActionSheetAction`},U={class:`card`},W={id:`Slots`},G={class:`card`},K={id:`StyleVariables`};function q(e,l,q,J,Y,X){let Z=n(`router-link`),Q=n(`var-site-code-example`);return r(),a(`div`,u,[l[57]||=i(`h1`,null,`ActionSheet`,-1),i(`div`,d,[i(`h3`,f,[o(Z,{to:`#Intro`},{default:t(()=>[...l[0]||=[s(`#`,-1)]]),_:1}),l[1]||=s(`Intro`,-1)]),l[2]||=i(`p`,null,[s(`An action sheet pops up to give the user the ability to select options. `),i(`code`,null,`ActionSheet`),s(` Functional and component use methods are provided, and there is no essential difference between the two effects and parameters. The function returns a `),i(`code`,null,`Promise`),s(`, on selection return `),i(`code`,null,`action`),s(`. Click modal close to return `),i(`code`,null,`close`),s(`.`)],-1)]),l[58]||=i(`h2`,null,`Function Call`,-1),i(`div`,p,[i(`h3`,m,[o(Z,{to:`#BasicUsage`},{default:t(()=>[...l[3]||=[s(`#`,-1)]]),_:1}),l[4]||=s(`Basic Usage`,-1)]),o(Q,null,{default:t(()=>[...l[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Snackbar, ActionSheet } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-keyword`},`async`),s(),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`createBasic`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  `),i(`span`,{class:`hljs-keyword`},`const`),s(` action = `),i(`span`,{class:`hljs-keyword`},`await`),s(` ActionSheet({ 
    `),i(`span`,{class:`hljs-attr`},`actions`),s(`: [
      {
        `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'Item 01'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'account-circle'`),s(`,
      },
      {
        `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'Item 02'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'notebook'`),s(`,
      },
      {
        `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'Item 03'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'wifi'`),s(`,
      },
    ] 
  })
  
  action !== `),i(`span`,{class:`hljs-string`},`'close'`),s(` && Snackbar(`),i(`span`,{class:`hljs-string`},[s("`Your selected is:"),i(`span`,{class:`hljs-subst`},"${action.name}"),s("`")]),s(`)
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"createBasic"`),s(`>`)]),s(`Basic Use`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,h,[i(`h3`,g,[o(Z,{to:`#ModifyTitle`},{default:t(()=>[...l[6]||=[s(`#`,-1)]]),_:1}),l[7]||=s(`Modify Title`,-1)]),o(Q,null,{default:t(()=>[...l[8]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Snackbar, ActionSheet } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-keyword`},`async`),s(),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`handleSelect`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  `),i(`span`,{class:`hljs-keyword`},`const`),s(` action = `),i(`span`,{class:`hljs-keyword`},`await`),s(` ActionSheet({ 
    `),i(`span`,{class:`hljs-attr`},`actions`),s(`: [
      {
        `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'Item 01'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'account-circle'`),s(`,
      },
      {
        `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'Item 02'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'notebook'`),s(`,
      },
      {
        `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'Item 03'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'wifi'`),s(`,
      },
    ], 
    `),i(`span`,{class:`hljs-attr`},`title`),s(`: `),i(`span`,{class:`hljs-string`},`'Choose whichever you like'`),s(`
  })
  
  action !== `),i(`span`,{class:`hljs-string`},`'close'`),s(` && Snackbar(`),i(`span`,{class:`hljs-string`},[s("`Your selected is:"),i(`span`,{class:`hljs-subst`},"${action.name}"),s("`")]),s(`)
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"handleSelect"`),s(`>`)]),s(`Modify Title`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,_,[i(`h3`,v,[o(Z,{to:`#ActionDisabled`},{default:t(()=>[...l[9]||=[s(`#`,-1)]]),_:1}),l[10]||=s(`Action Disabled`,-1)]),l[12]||=i(`p`,null,[s(`The option is passed `),i(`code`,null,`disabled`),s(` to leave the action in the disabled state.`)],-1),o(Q,null,{default:t(()=>[...l[11]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Snackbar, ActionSheet } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-keyword`},`async`),s(),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`handleSelect`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  `),i(`span`,{class:`hljs-keyword`},`const`),s(` action = `),i(`span`,{class:`hljs-keyword`},`await`),s(` ActionSheet({
    `),i(`span`,{class:`hljs-attr`},`actions`),s(`: [
      {
        `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'Item 01'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'account-circle'`),s(`,
      },
      {
        `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'Item 02'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'notebook'`),s(`,
      },
      {
        `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'Item 03'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'wifi'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`disabled`),s(`: `),i(`span`,{class:`hljs-literal`},`true`),s(`,
      },
    ]
  })
  
  action !== `),i(`span`,{class:`hljs-string`},`'close'`),s(` && Snackbar(`),i(`span`,{class:`hljs-string`},[s("`Your selected is:"),i(`span`,{class:`hljs-subst`},"${action.name}"),s("`")]),s(`)
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"handleSelect"`),s(`>`)]),s(`Action Disabled`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,y,[i(`h3`,b,[o(Z,{to:`#DisableCloseOnClickAction`},{default:t(()=>[...l[13]||=[s(`#`,-1)]]),_:1}),l[14]||=s(`Disable Close On Click Action`,-1)]),l[16]||=i(`p`,null,[s(`Passing in `),i(`code`,null,`CloseOnClickAction`),s(` disallows the action of `),i(`code`,null,`ActionSheet`),s(` closing automatically when the option is selected. The user can select the action multiple times. Because `),i(`code`,null,`Promise`),s(` is only resolved once, it is recommended to use `),i(`code`,null,`onSelect`),s(` to listen for the action of the user.`)],-1),o(Q,null,{default:t(()=>[...l[15]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Snackbar, ActionSheet } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-keyword`},`async`),s(),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`handleSelect`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  `),i(`span`,{class:`hljs-keyword`},`await`),s(` ActionSheet({ 
    `),i(`span`,{class:`hljs-attr`},`actions`),s(`: [
      {
        `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'Item 01'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'account-circle'`),s(`,
      },
      {
        `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'Item 02'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'notebook'`),s(`,
      },
      {
        `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'Item 03'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'wifi'`),s(`,
      },
    ], 
    `),i(`span`,{class:`hljs-attr`},`closeOnClickAction`),s(`: `),i(`span`,{class:`hljs-literal`},`false`),s(`,
    `),i(`span`,{class:`hljs-attr`},`onSelect`),s(`: `),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-params`},`action`),s(` =>`)]),s(` Snackbar(`),i(`span`,{class:`hljs-string`},[s("`Your selected is:"),i(`span`,{class:`hljs-subst`},"${action.name}"),s("`")]),s(`), 
  })
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"handleSelect"`),s(`>`)]),s(`Disable Close On Click Action`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,x,[i(`h3`,S,[o(Z,{to:`#CustomActionStyles`},{default:t(()=>[...l[17]||=[s(`#`,-1)]]),_:1}),l[18]||=s(`Custom Action Styles`,-1)]),l[20]||=i(`p`,null,[s(`Options provide parameters to configure the style. See the `),i(`code`,null,`Action`),s(` data structure for options.`)],-1),o(Q,null,{default:t(()=>[...l[19]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Snackbar, ActionSheet } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { h } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` svgIcon = h(`),i(`span`,{class:`hljs-string`},`'svg'`),s(`, { `),i(`span`,{class:`hljs-attr`},`viewBox`),s(`: `),i(`span`,{class:`hljs-string`},`'0 0 24 24'`),s(`, `),i(`span`,{class:`hljs-attr`},`style`),s(`: { `),i(`span`,{class:`hljs-attr`},`width`),s(`: `),i(`span`,{class:`hljs-string`},`'1em'`),s(`, `),i(`span`,{class:`hljs-attr`},`height`),s(`: `),i(`span`,{class:`hljs-string`},`'1em'`),s(` } }, [
  h(`),i(`span`,{class:`hljs-string`},`'path'`),s(`, {
    `),i(`span`,{class:`hljs-attr`},`fill`),s(`: `),i(`span`,{class:`hljs-string`},`'currentColor'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`d`),s(`: `),i(`span`,{class:`hljs-string`},`'M12 2 2 7l10 5 10-5zm0 7.8L6.45 7 12 4.2 17.55 7zm-8 1.7 8 4 8-4v2.2l-8 4-8-4zm0 4 8 4 8-4v2.2l-8 4-8-4z'`),s(`,
  }),
])

`),i(`span`,{class:`hljs-keyword`},`async`),s(),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`handleSelect`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  `),i(`span`,{class:`hljs-keyword`},`const`),s(` action = `),i(`span`,{class:`hljs-keyword`},`await`),s(` ActionSheet({ 
    `),i(`span`,{class:`hljs-attr`},`actions`),s(`: [
      {
        `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'Item 01'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'account-circle'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`color`),s(`: `),i(`span`,{class:`hljs-string`},`'var(--color-success)'`),s(`,
      },
      {
        `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'Item 02'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`icon`),s(`: svgIcon,
        `),i(`span`,{class:`hljs-attr`},`color`),s(`: `),i(`span`,{class:`hljs-string`},`'var(--color-warning)'`),s(`,
      },
      {
        `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'Item 03'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'wifi'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`color`),s(`: `),i(`span`,{class:`hljs-string`},`'var(--color-info)'`),s(`,
      },
    ]
  })
  
  action !== `),i(`span`,{class:`hljs-string`},`'close'`),s(` && Snackbar(`),i(`span`,{class:`hljs-string`},[s("`Your selected is:"),i(`span`,{class:`hljs-subst`},"${action.name}"),s("`")]),s(`)
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"handleSelect"`),s(`>`)]),s(`Custom Action Styles`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),l[59]||=i(`h2`,null,`Component Call`,-1),i(`div`,C,[i(`h3`,w,[o(Z,{to:`#BasicUsage`},{default:t(()=>[...l[21]||=[s(`#`,-1)]]),_:1}),l[22]||=s(`Basic Usage`,-1)]),o(Q,null,{default:t(()=>[...l[23]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Snackbar } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` show = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` actions = ref([
  {
    `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'Item 01'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'account-circle'`),s(`,
  },
  {
    `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'Item 02'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'notebook'`),s(`,
  },
  {
    `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'Item 03'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'wifi'`),s(`,
  },
])

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`handleSelect`),s(`(`),i(`span`,{class:`hljs-params`},`action`),s(`) `)]),s(`{
  Snackbar(`),i(`span`,{class:`hljs-string`},[s("`Your selected is:"),i(`span`,{class:`hljs-subst`},"${action.name}"),s("`")]),s(`)
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"warning"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"show = true"`),s(`>`)]),s(`Basic Usage`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-action-sheet`),s(` 
    `),i(`span`,{class:`hljs-attr`},`:actions`),s(`=`),i(`span`,{class:`hljs-string`},`"actions"`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"show"`),s(`
    @`),i(`span`,{class:`hljs-attr`},`select`),s(`=`),i(`span`,{class:`hljs-string`},`"handleSelect"`),s(`
  />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,T,[i(`h3`,E,[o(Z,{to:`#ModifyTitle`},{default:t(()=>[...l[24]||=[s(`#`,-1)]]),_:1}),l[25]||=s(`Modify Title`,-1)]),o(Q,null,{default:t(()=>[...l[26]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Snackbar } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` show = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` actions = ref([
  {
    `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'Item 01'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'account-circle'`),s(`,
  },
  {
    `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'Item 02'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'notebook'`),s(`,
  },
  {
    `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'Item 03'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'wifi'`),s(`,
  },
])

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`handleSelect`),s(`(`),i(`span`,{class:`hljs-params`},`action`),s(`) `)]),s(`{
  Snackbar(`),i(`span`,{class:`hljs-string`},[s("`Your selected is:"),i(`span`,{class:`hljs-subst`},"${action.name}"),s("`")]),s(`)
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"warning"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"show = true"`),s(`>`)]),s(`Modify Title`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-action-sheet`),s(` 
    `),i(`span`,{class:`hljs-attr`},`title`),s(`=`),i(`span`,{class:`hljs-string`},`"Choose whichever you like"`),s(` 
    `),i(`span`,{class:`hljs-attr`},`:actions`),s(`=`),i(`span`,{class:`hljs-string`},`"actions"`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"show"`),s(`
    @`),i(`span`,{class:`hljs-attr`},`select`),s(`=`),i(`span`,{class:`hljs-string`},`"handleSelect"`),s(`
  />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,D,[i(`h3`,O,[o(Z,{to:`#ActionDisabled`},{default:t(()=>[...l[27]||=[s(`#`,-1)]]),_:1}),l[28]||=s(`Action Disabled`,-1)]),o(Q,null,{default:t(()=>[...l[29]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Snackbar } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` show = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` actions = ref([
  {
    `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'Item 01'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'account-circle'`),s(`,
  },
  {
    `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'Item 02'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'notebook'`),s(`,
  },
  {
    `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'Item 03'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'wifi'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`disabled`),s(`: `),i(`span`,{class:`hljs-literal`},`true`),s(`,
  },
])

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`handleSelect`),s(`(`),i(`span`,{class:`hljs-params`},`action`),s(`) `)]),s(`{
  Snackbar(`),i(`span`,{class:`hljs-string`},[s("`Your selected is:"),i(`span`,{class:`hljs-subst`},"${action.name}"),s("`")]),s(`)
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"warning"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"show = true"`),s(`>`)]),s(`Action Disabled`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-action-sheet`),s(` 
    `),i(`span`,{class:`hljs-attr`},`:actions`),s(`=`),i(`span`,{class:`hljs-string`},`"actions"`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"show"`),s(`
    @`),i(`span`,{class:`hljs-attr`},`select`),s(`=`),i(`span`,{class:`hljs-string`},`"handleSelect"`),s(`
  />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,k,[i(`h3`,A,[o(Z,{to:`#DisableCloseOnClickAction`},{default:t(()=>[...l[30]||=[s(`#`,-1)]]),_:1}),l[31]||=s(`Disable Close On Click Action`,-1)]),o(Q,null,{default:t(()=>[...l[32]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Snackbar } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` show = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` actions = ref([
  {
    `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'Item 01'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'account-circle'`),s(`,
  },
  {
    `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'Item 02'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'notebook'`),s(`,
  },
  {
    `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'Item 03'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'wifi'`),s(`,
  },
])

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`handleSelect`),s(`(`),i(`span`,{class:`hljs-params`},`action`),s(`) `)]),s(`{
  Snackbar(`),i(`span`,{class:`hljs-string`},[s("`Your selected is:"),i(`span`,{class:`hljs-subst`},"${action.name}"),s("`")]),s(`)
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"warning"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"show = true"`),s(`>`)]),s(`Disable close on click action`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-action-sheet`),s(` 
    `),i(`span`,{class:`hljs-attr`},`:close-on-click-action`),s(`=`),i(`span`,{class:`hljs-string`},`"false"`),s(`
    `),i(`span`,{class:`hljs-attr`},`:actions`),s(`=`),i(`span`,{class:`hljs-string`},`"actions"`),s(` 
    `),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"show"`),s(` 
    @`),i(`span`,{class:`hljs-attr`},`select`),s(`=`),i(`span`,{class:`hljs-string`},`"handleSelect"`),s(`
  />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,j,[i(`h3`,M,[o(Z,{to:`#CustomActionStyles`},{default:t(()=>[...l[33]||=[s(`#`,-1)]]),_:1}),l[34]||=s(`Custom Action Styles`,-1)]),o(Q,null,{default:t(()=>[...l[35]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { h, ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Snackbar } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` show = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` svgIcon = h(`),i(`span`,{class:`hljs-string`},`'svg'`),s(`, { `),i(`span`,{class:`hljs-attr`},`viewBox`),s(`: `),i(`span`,{class:`hljs-string`},`'0 0 24 24'`),s(`, `),i(`span`,{class:`hljs-attr`},`style`),s(`: { `),i(`span`,{class:`hljs-attr`},`width`),s(`: `),i(`span`,{class:`hljs-string`},`'1em'`),s(`, `),i(`span`,{class:`hljs-attr`},`height`),s(`: `),i(`span`,{class:`hljs-string`},`'1em'`),s(` } }, [
  h(`),i(`span`,{class:`hljs-string`},`'path'`),s(`, {
    `),i(`span`,{class:`hljs-attr`},`fill`),s(`: `),i(`span`,{class:`hljs-string`},`'currentColor'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`d`),s(`: `),i(`span`,{class:`hljs-string`},`'M12 2 2 7l10 5 10-5zm0 7.8L6.45 7 12 4.2 17.55 7zm-8 1.7 8 4 8-4v2.2l-8 4-8-4zm0 4 8 4 8-4v2.2l-8 4-8-4z'`),s(`,
  }),
])
`),i(`span`,{class:`hljs-keyword`},`const`),s(` actions = ref([
  {
    `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'Item 01'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'account-circle'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`color`),s(`: `),i(`span`,{class:`hljs-string`},`'var(--color-success)'`),s(`,
  },
  {
    `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'Item 02'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: svgIcon,
    `),i(`span`,{class:`hljs-attr`},`color`),s(`: `),i(`span`,{class:`hljs-string`},`'var(--color-warning)'`),s(`,
  },
  {
    `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'Item 03'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'wifi'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`color`),s(`: `),i(`span`,{class:`hljs-string`},`'var(--color-info)'`),s(`,
  },
])

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`handleSelect`),s(`(`),i(`span`,{class:`hljs-params`},`action`),s(`) `)]),s(`{
  Snackbar(`),i(`span`,{class:`hljs-string`},[s("`Your selected is:"),i(`span`,{class:`hljs-subst`},"${action.name}"),s("`")]),s(`)
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"warning"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"show = true"`),s(`>`)]),s(`Custom Action Styles`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-action-sheet`),s(` 
    `),i(`span`,{class:`hljs-attr`},`:actions`),s(`=`),i(`span`,{class:`hljs-string`},`"actions"`),s(` 
    `),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"show"`),s(` 
    @`),i(`span`,{class:`hljs-attr`},`select`),s(`=`),i(`span`,{class:`hljs-string`},`"handleSelect"`),s(`
  />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),l[60]||=i(`h2`,null,`API`,-1),i(`div`,N,[i(`h3`,P,[o(Z,{to:`#Props`},{default:t(()=>[...l[36]||=[s(`#`,-1)]]),_:1}),l[37]||=s(`Props`,-1)]),l[38]||=c(`<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>Whether to display the action sheet</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>actions</code></td><td>Action list</td><td><em>Actions</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>Action sheet title</td><td><em>string</em></td><td><code>Select One</code></td></tr><tr><td><code>overlay</code></td><td>Whether to display the overlay</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlay-class</code></td><td>Custom overlay class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlay-style</code></td><td>Custom overlay style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>lock-scroll</code></td><td>Whether to disable scrolling penetration, scrolling the Dialog when disabled will not cause the body to scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-action</code></td><td>Whether to close the actions sheet when clicking action</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-overlay</code></td><td>Whether to click the overlay to close the action sheet</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-key-escape</code></td><td>Whether to support keyboard ESC to close the action sheet</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>safe-area</code></td><td>Whether to enable bottom safety zone adaptation</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>teleport</code></td><td>The location of the action sheet to mount</td><td><em>TeleportProps[&#39;to&#39;] | false</em></td><td><code>body</code></td></tr></tbody></table>`,1)]),i(`div`,F,[i(`h3`,I,[o(Z,{to:`#Events`},{default:t(()=>[...l[39]||=[s(`#`,-1)]]),_:1}),l[40]||=s(`Events`,-1)]),l[41]||=c(`<table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>select</code></td><td>Triggered when selecting an action sheet</td><td><code>action: Action</code></td></tr><tr><td><code>open</code></td><td>Triggered when opening an action sheet</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>Triggered when an action sheet open-animation ends</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>Triggered when closing an action sheet</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>Triggered when an action sheet close-animation ends</td><td><code>-</code></td></tr><tr><td><code>click-overlay</code></td><td>Triggered when clicking on overlay</td><td><code>-</code></td></tr><tr><td><code>key-escape</code></td><td>Triggered when click keyboard ESC</td><td><code>-</code></td></tr></tbody></table>`,1)]),i(`div`,L,[i(`h3`,R,[o(Z,{to:`#Methods`},{default:t(()=>[...l[42]||=[s(`#`,-1)]]),_:1}),l[43]||=s(`Methods`,-1)]),l[44]||=c(`<table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>ActionSheet</code></td><td>Show action sheet</td><td><em>options | string</em></td><td><code>-</code></td></tr><tr><td><code>ActionSheet.close</code></td><td>Close action sheet</td><td><em>-</em></td><td><code>-</code></td></tr><tr><td><code>ActionSheet.setDefaultOptions</code></td><td>Set default option configuration</td><td><em>options</em></td><td><code>-</code></td></tr><tr><td><code>ActionSheet.resetDefaultOptions</code></td><td>Reset default option configuration</td><td><em>-</em></td><td><code>-</code></td></tr></tbody></table>`,1)]),i(`div`,z,[i(`h3`,B,[o(Z,{to:`#ActionSheetOptions`},{default:t(()=>[...l[45]||=[s(`#`,-1)]]),_:1}),l[46]||=s(`ActionSheet Options`,-1)]),l[47]||=c(`<h4>Options passed in for a functional call</h4><table><thead><tr><th>Option</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>title</code></td><td>Action sheet title</td><td><em>string</em></td><td><code>Select One</code></td></tr><tr><td><code>overlay</code></td><td>Whether to display the overlay</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlayClass</code></td><td>Custom overlay class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlayStyle</code></td><td>Custom overlay style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>lockScroll</code></td><td>Whether to disable scrolling penetration, scrolling the action sheet when disabled will not cause the body to scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnClickAction</code></td><td>Whether to close the actions sheet when clicking action</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnClickOverlay</code></td><td>Whether to click the overlay to close the action sheet</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnKeyEscape</code></td><td>Whether to support keyboard ESC to close the action sheet</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>safe-area</code></td><td>Whether to enable bottom safety zone adaptation</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>onOpen</code></td><td>Action sheet open callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>Action sheet open-animation ends callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>Action sheet close callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>Action sheet close-animation ends callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onSelect</code></td><td>Action sheet click action callback</td><td><em>(action: Action) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClickOverlay</code></td><td>Click overlay callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onKeyEscape</code></td><td>Triggered when click keyboard ESC</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table>`,2)]),i(`div`,V,[i(`h3`,H,[o(Z,{to:`#ActionSheetAction`},{default:t(()=>[...l[48]||=[s(`#`,-1)]]),_:1}),l[49]||=s(`ActionSheet Action`,-1)]),l[50]||=c(`<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>name</code></td><td>Action name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>Action text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>Icon, support network image address, VNode, or render function</td><td><em>string | VNode | () =&gt; VNode</em></td><td><code>-</code></td></tr><tr><td><code>iconSize</code></td><td>Icon size</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>namespace</code></td><td>Icon namespace</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>className</code></td><td>Class name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>Disable or not option</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table>`,1)]),i(`div`,U,[i(`h3`,W,[o(Z,{to:`#Slots`},{default:t(()=>[...l[51]||=[s(`#`,-1)]]),_:1}),l[52]||=s(`Slots`,-1)]),l[53]||=c(`<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>actions</code></td><td>Action list</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>Action sheet title</td><td><code>-</code></td></tr></tbody></table>`,1)]),i(`div`,G,[i(`h3`,K,[o(Z,{to:`#StyleVariables`},{default:t(()=>[...l[54]||=[s(`#`,-1)]]),_:1}),l[55]||=s(`Style Variables`,-1)]),l[56]||=c(`<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--action-sheet-border-radius</code></td><td><code>2px</code></td></tr><tr><td><code>--action-sheet-border-top</code></td><td><code>none</code></td></tr><tr><td><code>--action-sheet-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--action-sheet-title-color</code></td><td><code>#888</code></td></tr><tr><td><code>--action-sheet-title-padding</code></td><td><code>10px 16px</code></td></tr><tr><td><code>--action-sheet-title-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--action-sheet-action-item-height</code></td><td><code>48px</code></td></tr><tr><td><code>--action-sheet-action-item-padding</code></td><td><code>0px 18px</code></td></tr><tr><td><code>--action-sheet-action-item-color</code></td><td><code>#333</code></td></tr><tr><td><code>--action-sheet-action-item-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--action-sheet-icon-margin</code></td><td><code>0 0 20px 0</code></td></tr><tr><td><code>--action-sheet-icon-size</code></td><td><code>24px</code></td></tr></tbody></table>`,2)])])}var J=e(l,[[`render`,q]]);export{J as default};