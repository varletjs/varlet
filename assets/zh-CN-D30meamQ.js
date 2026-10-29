import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s,m as c}from"./runtime-core.esm-bundler-DUghkl6b.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`jie4shao4`},p={class:`card`},m={id:`ji1ben3shi3yong4`},h={class:`card`},g={id:`xiu1gai3biao1ti2`},_={class:`card`},v={id:`jin4yong4xuan3xiang4`},y={class:`card`},b={id:`jin4yong4dian3ji1xuan3xiang4shi2guan1bi4dong4zuo4mian4ban3`},x={class:`card`},S={id:`zi4ding4yi4xuan3xiang4yang4shi4`},C={class:`card`},w={id:`ji1ben3shi3yong4`},T={class:`card`},E={id:`xiu1gai3biao1ti2`},D={class:`card`},O={id:`jin4yong4xuan3xiang4`},k={class:`card`},A={id:`jin4yong4dian3ji1xuan3xiang4shi2guan1bi4dong4zuo4mian4ban3`},j={class:`card`},M={id:`zi4ding4yi4xuan3xiang4yang4shi4`},N={class:`card`},P={id:`shu3xing4`},F={class:`card`},I={id:`shi4jian4`},L={class:`card`},R={id:`fang1fa3`},z={class:`card`},B={id:`ActionSheetOptions`},V={class:`card`},H={id:`ActionSheetAction`},U={class:`card`},W={id:`cha1cao2`},G={class:`card`},K={id:`yang4shi4bian4liang4`};function q(e,l,q,J,Y,X){let Z=n(`router-link`),Q=n(`var-site-code-example`);return r(),a(`div`,u,[l[57]||=i(`h1`,null,`动作面板`,-1),i(`div`,d,[i(`h3`,f,[o(Z,{to:`#jie4shao4`},{default:t(()=>[...l[0]||=[s(`#`,-1)]]),_:1}),l[1]||=s(`介绍`,-1)]),l[2]||=i(`p`,null,[s(`弹出一个动作面板提供用户选择选项的能力。 `),i(`code`,null,`ActionSheet`),s(` 提供了函数式和组件式两种使用方式，两种使用效果和参数并没有本质区别。 函数返回一个 `),i(`code`,null,`Promise`),s(`，选择时返回 `),i(`code`,null,`当前选择的 action`),s(`，点击遮罩层关闭返回 `),i(`code`,null,`close`),s(`。`)],-1)]),l[58]||=i(`h2`,null,`函数调用`,-1),i(`div`,p,[i(`h3`,m,[o(Z,{to:`#ji1ben3shi3yong4`},{default:t(()=>[...l[3]||=[s(`#`,-1)]]),_:1}),l[4]||=s(`基本使用`,-1)]),o(Q,null,{default:t(()=>[...l[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
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
  
  action !== `),i(`span`,{class:`hljs-string`},`'close'`),s(` && Snackbar(`),i(`span`,{class:`hljs-string`},[s("`您选择的是:"),i(`span`,{class:`hljs-subst`},"${action.name}"),s("`")]),s(`)
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"createBasic"`),s(`>`)]),s(`基本使用`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,h,[i(`h3`,g,[o(Z,{to:`#xiu1gai3biao1ti2`},{default:t(()=>[...l[6]||=[s(`#`,-1)]]),_:1}),l[7]||=s(`修改标题`,-1)]),o(Q,null,{default:t(()=>[...l[8]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Snackbar, ActionSheet } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-keyword`},`async`),s(),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`handleSelect`),s(`(`),i(`span`,{class:`hljs-params`}),s(`)`)]),s(`{
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
    `),i(`span`,{class:`hljs-attr`},`title`),s(`: `),i(`span`,{class:`hljs-string`},`'选择一个你喜欢的吧'`),s(` 
  })
  
  action !== `),i(`span`,{class:`hljs-string`},`'close'`),s(` && Snackbar(`),i(`span`,{class:`hljs-string`},[s("`您选择的是:"),i(`span`,{class:`hljs-subst`},"${action.name}"),s("`")]),s(`)
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"handleSelect"`),s(`>`)]),s(`修改标题`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,_,[i(`h3`,v,[o(Z,{to:`#jin4yong4xuan3xiang4`},{default:t(()=>[...l[9]||=[s(`#`,-1)]]),_:1}),l[10]||=s(`禁用选项`,-1)]),l[12]||=i(`p`,null,[s(`选项传入 `),i(`code`,null,`disabled`),s(` 可以使选项处于禁用状态。`)],-1),o(Q,null,{default:t(()=>[...l[11]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
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
  
  action !== `),i(`span`,{class:`hljs-string`},`'close'`),s(` && Snackbar(`),i(`span`,{class:`hljs-string`},[s("`您选择的是:"),i(`span`,{class:`hljs-subst`},"${action.name}"),s("`")]),s(`)
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"handleSelect"`),s(`>`)]),s(`禁用选项`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,y,[i(`h3`,b,[o(Z,{to:`#jin4yong4dian3ji1xuan3xiang4shi2guan1bi4dong4zuo4mian4ban3`},{default:t(()=>[...l[13]||=[s(`#`,-1)]]),_:1}),l[14]||=s(`禁用点击选项时关闭动作面板`,-1)]),l[16]||=i(`p`,null,[s(`方法传入 `),i(`code`,null,`closeOnClickAction`),s(` 可以禁用在选择选项时 `),i(`code`,null,`ActionSheet`),s(` 自动关闭的行为，用户可以多次选择， 由于 `),i(`code`,null,`Promise`),s(` 只会被 `),i(`code`,null,`resolve`),s(` 一次，所以推荐使用 `),i(`code`,null,`onSelect`),s(` 监听用户选择行为。`)],-1),o(Q,null,{default:t(()=>[...l[15]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Snackbar, ActionSheet } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-keyword`},`async`),s(),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`handleSelect`),s(`(`),i(`span`,{class:`hljs-params`}),s(`)`)]),s(`{
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
    `),i(`span`,{class:`hljs-attr`},`onSelect`),s(`: `),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-params`},`action`),s(` =>`)]),s(` Snackbar(`),i(`span`,{class:`hljs-string`},[s("`您选择的是:"),i(`span`,{class:`hljs-subst`},"${action.name}"),s("`")]),s(`), 
  })
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"handleSelect"`),s(`>`)]),s(`禁用关闭动作面板`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,x,[i(`h3`,S,[o(Z,{to:`#zi4ding4yi4xuan3xiang4yang4shi4`},{default:t(()=>[...l[17]||=[s(`#`,-1)]]),_:1}),l[18]||=s(`自定义选项样式`,-1)]),l[20]||=i(`p`,null,[s(`选项提供了可以配置样式的参数，具体选项的参数可选项见 `),i(`code`,null,`Action 的数据结构`),s(`。`)],-1),o(Q,null,{default:t(()=>[...l[19]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
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
  
  action !== `),i(`span`,{class:`hljs-string`},`'close'`),s(` && Snackbar(`),i(`span`,{class:`hljs-string`},[s("`您选择的是:"),i(`span`,{class:`hljs-subst`},"${action.name}"),s("`")]),s(`)
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"handleSelect"`),s(`>`)]),s(`自定义选项样式`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),l[59]||=i(`h2`,null,`组件调用`,-1),i(`div`,C,[i(`h3`,w,[o(Z,{to:`#ji1ben3shi3yong4`},{default:t(()=>[...l[21]||=[s(`#`,-1)]]),_:1}),l[22]||=s(`基本使用`,-1)]),o(Q,null,{default:t(()=>[...l[23]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
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

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`handleSelect`),s(`(`),i(`span`,{class:`hljs-params`},`action`),s(`)`)]),s(`{
  Snackbar(`),i(`span`,{class:`hljs-string`},[s("`您选择的是:"),i(`span`,{class:`hljs-subst`},"${action.name}"),s("`")]),s(`)
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"warning"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"show = true"`),s(`>`)]),s(`基本使用`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-action-sheet`),s(` 
    `),i(`span`,{class:`hljs-attr`},`:actions`),s(`=`),i(`span`,{class:`hljs-string`},`"actions"`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"show"`),s(`
    @`),i(`span`,{class:`hljs-attr`},`select`),s(`=`),i(`span`,{class:`hljs-string`},`"handleSelect"`),s(`
  />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,T,[i(`h3`,E,[o(Z,{to:`#xiu1gai3biao1ti2`},{default:t(()=>[...l[24]||=[s(`#`,-1)]]),_:1}),l[25]||=s(`修改标题`,-1)]),o(Q,null,{default:t(()=>[...l[26]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
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

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`handleSelect`),s(`(`),i(`span`,{class:`hljs-params`},`action`),s(`)`)]),s(`{
  Snackbar(`),i(`span`,{class:`hljs-string`},[s("`您选择的是:"),i(`span`,{class:`hljs-subst`},"${action.name}"),s("`")]),s(`)
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"warning"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"show = true"`),s(`>`)]),s(`修改标题`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-action-sheet`),s(` 
    `),i(`span`,{class:`hljs-attr`},`title`),s(`=`),i(`span`,{class:`hljs-string`},`"选择一个你喜欢的吧"`),s(`
    `),i(`span`,{class:`hljs-attr`},`:actions`),s(`=`),i(`span`,{class:`hljs-string`},`"actions"`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"show"`),s(`
    @`),i(`span`,{class:`hljs-attr`},`select`),s(`=`),i(`span`,{class:`hljs-string`},`"handleSelect"`),s(`
  />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,D,[i(`h3`,O,[o(Z,{to:`#jin4yong4xuan3xiang4`},{default:t(()=>[...l[27]||=[s(`#`,-1)]]),_:1}),l[28]||=s(`禁用选项`,-1)]),o(Q,null,{default:t(()=>[...l[29]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
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
  Snackbar(`),i(`span`,{class:`hljs-string`},[s("`您选择的是:"),i(`span`,{class:`hljs-subst`},"${action.name}"),s("`")]),s(`)
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"warning"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"show = true"`),s(`>`)]),s(`禁用选项`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-action-sheet`),s(` 
    `),i(`span`,{class:`hljs-attr`},`:actions`),s(`=`),i(`span`,{class:`hljs-string`},`"actions"`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"show"`),s(`
    @`),i(`span`,{class:`hljs-attr`},`select`),s(`=`),i(`span`,{class:`hljs-string`},`"handleSelect"`),s(`
  />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,k,[i(`h3`,A,[o(Z,{to:`#jin4yong4dian3ji1xuan3xiang4shi2guan1bi4dong4zuo4mian4ban3`},{default:t(()=>[...l[30]||=[s(`#`,-1)]]),_:1}),l[31]||=s(`禁用点击选项时关闭动作面板`,-1)]),o(Q,null,{default:t(()=>[...l[32]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
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
  Snackbar(`),i(`span`,{class:`hljs-string`},[s("`您选择的是:"),i(`span`,{class:`hljs-subst`},"${action.name}"),s("`")]),s(`)
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"warning"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"show = true"`),s(`>`)]),s(`禁用点击选项时关闭动作面板`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-action-sheet`),s(` 
    `),i(`span`,{class:`hljs-attr`},`:close-on-click-action`),s(`=`),i(`span`,{class:`hljs-string`},`"false"`),s(`
    `),i(`span`,{class:`hljs-attr`},`:actions`),s(`=`),i(`span`,{class:`hljs-string`},`"actions"`),s(` 
    `),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"show"`),s(` 
    @`),i(`span`,{class:`hljs-attr`},`select`),s(`=`),i(`span`,{class:`hljs-string`},`"handleSelect"`),s(`
  />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,j,[i(`h3`,M,[o(Z,{to:`#zi4ding4yi4xuan3xiang4yang4shi4`},{default:t(()=>[...l[33]||=[s(`#`,-1)]]),_:1}),l[34]||=s(`自定义选项样式`,-1)]),o(Q,null,{default:t(()=>[...l[35]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
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
  Snackbar(`),i(`span`,{class:`hljs-string`},[s("`您选择的是:"),i(`span`,{class:`hljs-subst`},"${action.name}"),s("`")]),s(`)
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"warning"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"show = true"`),s(`>`)]),s(`自定义选项样式`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-action-sheet`),s(` 
    `),i(`span`,{class:`hljs-attr`},`:actions`),s(`=`),i(`span`,{class:`hljs-string`},`"actions"`),s(` 
    `),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"show"`),s(` 
    @`),i(`span`,{class:`hljs-attr`},`select`),s(`=`),i(`span`,{class:`hljs-string`},`"handleSelect"`),s(`
  />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),l[60]||=i(`h2`,null,`API`,-1),i(`div`,N,[i(`h3`,P,[o(Z,{to:`#shu3xing4`},{default:t(()=>[...l[36]||=[s(`#`,-1)]]),_:1}),l[37]||=s(`属性`,-1)]),l[38]||=c(`<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>是否显示动作面板</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>actions</code></td><td>选项列表</td><td><em>Actions</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>动作面板标题</td><td><em>string</em></td><td><code>请选择</code></td></tr><tr><td><code>overlay</code></td><td>是否显示遮罩层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlay-class</code></td><td>自定义遮罩层的 class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlay-style</code></td><td>自定义遮罩层的 style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>lock-scroll</code></td><td>是否禁止滚动穿透，禁止时滚动弹出层不会引发 body 的滚动</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-action</code></td><td>是否点击选项时关闭动作面板</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-overlay</code></td><td>是否点击遮罩层关闭动作面板</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-key-escape</code></td><td>是否支持键盘 ESC 关闭动作面板</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>safe-area</code></td><td>是否开启底部安全区适配</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>teleport</code></td><td>动作面板挂载的位置</td><td><em>TeleportProps[&#39;to&#39;] | false</em></td><td><code>body</code></td></tr></tbody></table>`,1)]),i(`div`,F,[i(`h3`,I,[o(Z,{to:`#shi4jian4`},{default:t(()=>[...l[39]||=[s(`#`,-1)]]),_:1}),l[40]||=s(`事件`,-1)]),l[41]||=c(`<table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>select</code></td><td>选择选项时触发</td><td><code>action: Action</code></td></tr><tr><td><code>open</code></td><td>打开动作面板时触发</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>打开动作面板动画结束时触发</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>关闭动作面板时触发</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>关闭动作面板动画结束时触发</td><td><code>-</code></td></tr><tr><td><code>click-overlay</code></td><td>点击遮罩层时触发</td><td><code>-</code></td></tr><tr><td><code>key-escape</code></td><td>点击键盘 ESC 时触发</td><td><code>-</code></td></tr></tbody></table>`,1)]),i(`div`,L,[i(`h3`,R,[o(Z,{to:`#fang1fa3`},{default:t(()=>[...l[42]||=[s(`#`,-1)]]),_:1}),l[43]||=s(`方法`,-1)]),l[44]||=c(`<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>ActionSheet</code></td><td>显示动作面板</td><td><em>options</em></td><td><code>-</code></td></tr><tr><td><code>ActionSheet.close</code></td><td>关闭动作面板</td><td><em>-</em></td><td><code>-</code></td></tr><tr><td><code>ActionSheet.setDefaultOptions</code></td><td>设置默认的选项配置</td><td><em>options</em></td><td><code>-</code></td></tr><tr><td><code>ActionSheet.resetDefaultOptions</code></td><td>重置默认的选项配置</td><td><em>-</em></td><td><code>-</code></td></tr></tbody></table>`,1)]),i(`div`,z,[i(`h3`,B,[o(Z,{to:`#ActionSheetOptions`},{default:t(()=>[...l[45]||=[s(`#`,-1)]]),_:1}),l[46]||=s(`ActionSheet Options`,-1)]),l[47]||=c(`<h4>函数式调用时传入的选项</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>actions</code></td><td>选项列表</td><td><em>Actions</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>动作面板标题</td><td><em>string</em></td><td><code>请选择</code></td></tr><tr><td><code>overlay</code></td><td>是否显示遮罩层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlayClass</code></td><td>自定义遮罩层的 class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlayStyle</code></td><td>自定义遮罩层的 style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>lockScroll</code></td><td>是否禁止滚动穿透，禁止时滚动弹出层不会引发 body 的滚动</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnClickAction</code></td><td>是否点击选项时关闭动作面板</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnClickOverlay</code></td><td>是否点击遮罩层关闭弹出层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnKeyEscape</code></td><td>是否支持键盘 ESC 关闭动作面板</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>safe-area</code></td><td>是否开启底部安全区适配</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>onOpen</code></td><td>动作面板开启回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>动作面板开启动画结束回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>动作面板关闭回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>动作面板关闭动画结束回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onSelect</code></td><td>选项选择时回调</td><td><em>(action: Action) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClickOverlay</code></td><td>遮罩层点击回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onKeyEscape</code></td><td>点击键盘 ESC 时触发</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table>`,2)]),i(`div`,V,[i(`h3`,H,[o(Z,{to:`#ActionSheetAction`},{default:t(()=>[...l[48]||=[s(`#`,-1)]]),_:1}),l[49]||=s(`ActionSheet Action`,-1)]),l[50]||=c(`<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>name</code></td><td>选项名称</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>选项文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>icon 图标，支持网络图片地址、VNode 或渲染函数</td><td><em>string | VNode | () =&gt; VNode</em></td><td><code>-</code></td></tr><tr><td><code>iconSize</code></td><td>图标尺寸</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>namespace</code></td><td>图标命名空间</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>className</code></td><td>选项附加类名</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用选项</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table>`,1)]),i(`div`,U,[i(`h3`,W,[o(Z,{to:`#cha1cao2`},{default:t(()=>[...l[51]||=[s(`#`,-1)]]),_:1}),l[52]||=s(`插槽`,-1)]),l[53]||=c(`<table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>actions</code></td><td>选项列表</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>动作面板标题</td><td><code>-</code></td></tr></tbody></table>`,1)]),i(`div`,G,[i(`h3`,K,[o(Z,{to:`#yang4shi4bian4liang4`},{default:t(()=>[...l[54]||=[s(`#`,-1)]]),_:1}),l[55]||=s(`样式变量`,-1)]),l[56]||=c(`<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--action-sheet-border-radius</code></td><td><code>2px</code></td></tr><tr><td><code>--action-sheet-border-top</code></td><td><code>none</code></td></tr><tr><td><code>--action-sheet-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--action-sheet-title-color</code></td><td><code>#888</code></td></tr><tr><td><code>--action-sheet-title-padding</code></td><td><code>10px 16px</code></td></tr><tr><td><code>--action-sheet-title-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--action-sheet-action-item-height</code></td><td><code>48px</code></td></tr><tr><td><code>--action-sheet-action-item-padding</code></td><td><code>0px 18px</code></td></tr><tr><td><code>--action-sheet-action-item-color</code></td><td><code>#333</code></td></tr><tr><td><code>--action-sheet-action-item-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--action-sheet-icon-margin</code></td><td><code>0 0 20px 0</code></td></tr><tr><td><code>--action-sheet-icon-size</code></td><td><code>24px</code></td></tr></tbody></table>`,2)])])}var J=e(l,[[`render`,q]]);export{J as default};