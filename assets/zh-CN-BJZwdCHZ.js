import{L as e,N as t,W as n,c as r,d as i,g as a,h as o,m as s}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as c}from"./_plugin-vue_export-helper-V-yks4gF.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`jie4shao4`},p={class:`card`},m={id:`ji1ben3shi3yong4`},h={class:`card`},g={id:`xiu1gai3biao1ti2`},_={class:`card`},v={id:`jin4yong4xuan3xiang4`},y={class:`card`},b={id:`jin4yong4dian3ji1xuan3xiang4shi2guan1bi4dong4zuo4mian4ban3`},x={class:`card`},S={id:`zi4ding4yi4xuan3xiang4yang4shi4`},C={class:`card`},w={id:`ji1ben3shi3yong4`},T={class:`card`},E={id:`xiu1gai3biao1ti2`},D={class:`card`},O={id:`jin4yong4xuan3xiang4`},k={class:`card`},A={id:`jin4yong4dian3ji1xuan3xiang4shi2guan1bi4dong4zuo4mian4ban3`},j={class:`card`},M={id:`zi4ding4yi4xuan3xiang4yang4shi4`},N={class:`card`},P={id:`shu3xing4`},F={class:`card`},I={id:`shi4jian4`},L={class:`card`},R={id:`fang1fa3`},z={class:`card`},B={id:`ActionSheetOptions`},V={class:`card`},H={id:`ActionSheetAction`},U={class:`card`},W={id:`cha1cao2`},G={class:`card`},K={id:`yang4shi4bian4liang4`};function q(c,l,q,J,Y,X){let Z=e(`router-link`),Q=e(`var-site-code-example`);return t(),i(`div`,u,[l[57]||=r(`h1`,null,`动作面板`,-1),r(`div`,d,[r(`h3`,f,[a(Z,{to:`#jie4shao4`},{default:n(()=>[...l[0]||=[o(`#`,-1)]]),_:1}),l[1]||=o(`介绍`,-1)]),l[2]||=r(`p`,null,[o(`弹出一个动作面板提供用户选择选项的能力。 `),r(`code`,null,`ActionSheet`),o(` 提供了函数式和组件式两种使用方式，两种使用效果和参数并没有本质区别。 函数返回一个 `),r(`code`,null,`Promise`),o(`，选择时返回 `),r(`code`,null,`当前选择的 action`),o(`，点击遮罩层关闭返回 `),r(`code`,null,`close`),o(`。`)],-1)]),l[58]||=r(`h2`,null,`函数调用`,-1),r(`div`,p,[r(`h3`,m,[a(Z,{to:`#ji1ben3shi3yong4`},{default:n(()=>[...l[3]||=[o(`#`,-1)]]),_:1}),l[4]||=o(`基本使用`,-1)]),a(Q,null,{default:n(()=>[...l[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Snackbar, ActionSheet } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-keyword`},`async`),o(),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`createBasic`),o(`(`),r(`span`,{class:`hljs-params`}),o(`) `)]),o(`{
  `),r(`span`,{class:`hljs-keyword`},`const`),o(` action = `),r(`span`,{class:`hljs-keyword`},`await`),o(` ActionSheet({ 
    `),r(`span`,{class:`hljs-attr`},`actions`),o(`: [
      {
        `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'Item 01'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'account-circle'`),o(`,
      },
      {
        `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'Item 02'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'notebook'`),o(`,
      },
      {
        `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'Item 03'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'wifi'`),o(`,
      },
    ] 
  })
  
  action !== `),r(`span`,{class:`hljs-string`},`'close'`),o(` && Snackbar(`),r(`span`,{class:`hljs-string`},[o("`您选择的是:"),r(`span`,{class:`hljs-subst`},"${action.name}"),o("`")]),o(`)
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"createBasic"`),o(`>`)]),o(`基本使用`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,h,[r(`h3`,g,[a(Z,{to:`#xiu1gai3biao1ti2`},{default:n(()=>[...l[6]||=[o(`#`,-1)]]),_:1}),l[7]||=o(`修改标题`,-1)]),a(Q,null,{default:n(()=>[...l[8]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Snackbar, ActionSheet } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-keyword`},`async`),o(),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`handleSelect`),o(`(`),r(`span`,{class:`hljs-params`}),o(`)`)]),o(`{
  `),r(`span`,{class:`hljs-keyword`},`const`),o(` action = `),r(`span`,{class:`hljs-keyword`},`await`),o(` ActionSheet({ 
    `),r(`span`,{class:`hljs-attr`},`actions`),o(`: [
      {
        `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'Item 01'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'account-circle'`),o(`,
      },
      {
        `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'Item 02'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'notebook'`),o(`,
      },
      {
        `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'Item 03'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'wifi'`),o(`,
      },
    ],
    `),r(`span`,{class:`hljs-attr`},`title`),o(`: `),r(`span`,{class:`hljs-string`},`'选择一个你喜欢的吧'`),o(` 
  })
  
  action !== `),r(`span`,{class:`hljs-string`},`'close'`),o(` && Snackbar(`),r(`span`,{class:`hljs-string`},[o("`您选择的是:"),r(`span`,{class:`hljs-subst`},"${action.name}"),o("`")]),o(`)
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"handleSelect"`),o(`>`)]),o(`修改标题`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,_,[r(`h3`,v,[a(Z,{to:`#jin4yong4xuan3xiang4`},{default:n(()=>[...l[9]||=[o(`#`,-1)]]),_:1}),l[10]||=o(`禁用选项`,-1)]),l[12]||=r(`p`,null,[o(`选项传入 `),r(`code`,null,`disabled`),o(` 可以使选项处于禁用状态。`)],-1),a(Q,null,{default:n(()=>[...l[11]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Snackbar, ActionSheet } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-keyword`},`async`),o(),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`handleSelect`),o(`(`),r(`span`,{class:`hljs-params`}),o(`) `)]),o(`{
  `),r(`span`,{class:`hljs-keyword`},`const`),o(` action = `),r(`span`,{class:`hljs-keyword`},`await`),o(` ActionSheet({ 
    `),r(`span`,{class:`hljs-attr`},`actions`),o(`: [
      {
        `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'Item 01'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'account-circle'`),o(`,
      },
      {
        `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'Item 02'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'notebook'`),o(`,
      },
      {
        `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'Item 03'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'wifi'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`disabled`),o(`: `),r(`span`,{class:`hljs-literal`},`true`),o(`,
      },
    ] 
  })
  
  action !== `),r(`span`,{class:`hljs-string`},`'close'`),o(` && Snackbar(`),r(`span`,{class:`hljs-string`},[o("`您选择的是:"),r(`span`,{class:`hljs-subst`},"${action.name}"),o("`")]),o(`)
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"handleSelect"`),o(`>`)]),o(`禁用选项`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,y,[r(`h3`,b,[a(Z,{to:`#jin4yong4dian3ji1xuan3xiang4shi2guan1bi4dong4zuo4mian4ban3`},{default:n(()=>[...l[13]||=[o(`#`,-1)]]),_:1}),l[14]||=o(`禁用点击选项时关闭动作面板`,-1)]),l[16]||=r(`p`,null,[o(`方法传入 `),r(`code`,null,`closeOnClickAction`),o(` 可以禁用在选择选项时 `),r(`code`,null,`ActionSheet`),o(` 自动关闭的行为，用户可以多次选择， 由于 `),r(`code`,null,`Promise`),o(` 只会被 `),r(`code`,null,`resolve`),o(` 一次，所以推荐使用 `),r(`code`,null,`onSelect`),o(` 监听用户选择行为。`)],-1),a(Q,null,{default:n(()=>[...l[15]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Snackbar, ActionSheet } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-keyword`},`async`),o(),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`handleSelect`),o(`(`),r(`span`,{class:`hljs-params`}),o(`)`)]),o(`{
  `),r(`span`,{class:`hljs-keyword`},`await`),o(` ActionSheet({ 
    `),r(`span`,{class:`hljs-attr`},`actions`),o(`: [
      {
        `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'Item 01'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'account-circle'`),o(`,
      },
      {
        `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'Item 02'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'notebook'`),o(`,
      },
      {
        `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'Item 03'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'wifi'`),o(`,
      },
    ], 
    `),r(`span`,{class:`hljs-attr`},`closeOnClickAction`),o(`: `),r(`span`,{class:`hljs-literal`},`false`),o(`,
    `),r(`span`,{class:`hljs-attr`},`onSelect`),o(`: `),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-params`},`action`),o(` =>`)]),o(` Snackbar(`),r(`span`,{class:`hljs-string`},[o("`您选择的是:"),r(`span`,{class:`hljs-subst`},"${action.name}"),o("`")]),o(`), 
  })
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"handleSelect"`),o(`>`)]),o(`禁用关闭动作面板`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,x,[r(`h3`,S,[a(Z,{to:`#zi4ding4yi4xuan3xiang4yang4shi4`},{default:n(()=>[...l[17]||=[o(`#`,-1)]]),_:1}),l[18]||=o(`自定义选项样式`,-1)]),l[20]||=r(`p`,null,[o(`选项提供了可以配置样式的参数，具体选项的参数可选项见 `),r(`code`,null,`Action 的数据结构`),o(`。`)],-1),a(Q,null,{default:n(()=>[...l[19]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Snackbar, ActionSheet } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-keyword`},`async`),o(),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`handleSelect`),o(`(`),r(`span`,{class:`hljs-params`}),o(`) `)]),o(`{
  `),r(`span`,{class:`hljs-keyword`},`const`),o(` action = `),r(`span`,{class:`hljs-keyword`},`await`),o(` ActionSheet({ 
    `),r(`span`,{class:`hljs-attr`},`actions`),o(`: [
      {
        `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'Item 01'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'account-circle'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`color`),o(`: `),r(`span`,{class:`hljs-string`},`'var(--color-success)'`),o(`,
      },
      {
        `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'Item 02'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'notebook'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`color`),o(`: `),r(`span`,{class:`hljs-string`},`'var(--color-warning)'`),o(`,
      },
      {
        `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'Item 03'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'wifi'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`color`),o(`: `),r(`span`,{class:`hljs-string`},`'var(--color-info)'`),o(`,
      },
    ] 
  })
  
  action !== `),r(`span`,{class:`hljs-string`},`'close'`),o(` && Snackbar(`),r(`span`,{class:`hljs-string`},[o("`您选择的是:"),r(`span`,{class:`hljs-subst`},"${action.name}"),o("`")]),o(`)
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"handleSelect"`),o(`>`)]),o(`自定义选项样式`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),l[59]||=r(`h2`,null,`组件调用`,-1),r(`div`,C,[r(`h3`,w,[a(Z,{to:`#ji1ben3shi3yong4`},{default:n(()=>[...l[21]||=[o(`#`,-1)]]),_:1}),l[22]||=o(`基本使用`,-1)]),a(Q,null,{default:n(()=>[...l[23]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` show = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` actions = ref([
  {
    `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'Item 01'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'account-circle'`),o(`,
  },
  {
    `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'Item 02'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'notebook'`),o(`,
  },
  {
    `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'Item 03'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'wifi'`),o(`,
  },
])

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`handleSelect`),o(`(`),r(`span`,{class:`hljs-params`},`action`),o(`)`)]),o(`{
  Snackbar(`),r(`span`,{class:`hljs-string`},[o("`您选择的是:"),r(`span`,{class:`hljs-subst`},"${action.name}"),o("`")]),o(`)
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"warning"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"show = true"`),o(`>`)]),o(`基本使用`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-action-sheet`),o(` 
    `),r(`span`,{class:`hljs-attr`},`:actions`),o(`=`),r(`span`,{class:`hljs-string`},`"actions"`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model:show`),o(`=`),r(`span`,{class:`hljs-string`},`"show"`),o(`
    @`),r(`span`,{class:`hljs-attr`},`select`),o(`=`),r(`span`,{class:`hljs-string`},`"handleSelect"`),o(`
  />`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,T,[r(`h3`,E,[a(Z,{to:`#xiu1gai3biao1ti2`},{default:n(()=>[...l[24]||=[o(`#`,-1)]]),_:1}),l[25]||=o(`修改标题`,-1)]),a(Q,null,{default:n(()=>[...l[26]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` show = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` actions = ref([
  {
    `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'Item 01'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'account-circle'`),o(`,
  },
  {
    `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'Item 02'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'notebook'`),o(`,
  },
  {
    `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'Item 03'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'wifi'`),o(`,
  },
])

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`handleSelect`),o(`(`),r(`span`,{class:`hljs-params`},`action`),o(`)`)]),o(`{
  Snackbar(`),r(`span`,{class:`hljs-string`},[o("`您选择的是:"),r(`span`,{class:`hljs-subst`},"${action.name}"),o("`")]),o(`)
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"warning"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"show = true"`),o(`>`)]),o(`修改标题`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-action-sheet`),o(` 
    `),r(`span`,{class:`hljs-attr`},`title`),o(`=`),r(`span`,{class:`hljs-string`},`"选择一个你喜欢的吧"`),o(`
    `),r(`span`,{class:`hljs-attr`},`:actions`),o(`=`),r(`span`,{class:`hljs-string`},`"actions"`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model:show`),o(`=`),r(`span`,{class:`hljs-string`},`"show"`),o(`
    @`),r(`span`,{class:`hljs-attr`},`select`),o(`=`),r(`span`,{class:`hljs-string`},`"handleSelect"`),o(`
  />`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,D,[r(`h3`,O,[a(Z,{to:`#jin4yong4xuan3xiang4`},{default:n(()=>[...l[27]||=[o(`#`,-1)]]),_:1}),l[28]||=o(`禁用选项`,-1)]),a(Q,null,{default:n(()=>[...l[29]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` show = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` actions = ref([
  {
    `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'Item 01'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'account-circle'`),o(`,
  },
  {
    `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'Item 02'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'notebook'`),o(`,
  },
  {
    `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'Item 03'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'wifi'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`disabled`),o(`: `),r(`span`,{class:`hljs-literal`},`true`),o(`,
  },
])

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`handleSelect`),o(`(`),r(`span`,{class:`hljs-params`},`action`),o(`) `)]),o(`{
  Snackbar(`),r(`span`,{class:`hljs-string`},[o("`您选择的是:"),r(`span`,{class:`hljs-subst`},"${action.name}"),o("`")]),o(`)
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"warning"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"show = true"`),o(`>`)]),o(`禁用选项`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-action-sheet`),o(` 
    `),r(`span`,{class:`hljs-attr`},`:actions`),o(`=`),r(`span`,{class:`hljs-string`},`"actions"`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model:show`),o(`=`),r(`span`,{class:`hljs-string`},`"show"`),o(`
    @`),r(`span`,{class:`hljs-attr`},`select`),o(`=`),r(`span`,{class:`hljs-string`},`"handleSelect"`),o(`
  />`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,k,[r(`h3`,A,[a(Z,{to:`#jin4yong4dian3ji1xuan3xiang4shi2guan1bi4dong4zuo4mian4ban3`},{default:n(()=>[...l[30]||=[o(`#`,-1)]]),_:1}),l[31]||=o(`禁用点击选项时关闭动作面板`,-1)]),a(Q,null,{default:n(()=>[...l[32]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` show = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` actions = ref([
  {
    `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'Item 01'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'account-circle'`),o(`,
  },
  {
    `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'Item 02'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'notebook'`),o(`,
  },
  {
    `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'Item 03'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'wifi'`),o(`,
  },
])

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`handleSelect`),o(`(`),r(`span`,{class:`hljs-params`},`action`),o(`) `)]),o(`{
  Snackbar(`),r(`span`,{class:`hljs-string`},[o("`您选择的是:"),r(`span`,{class:`hljs-subst`},"${action.name}"),o("`")]),o(`)
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"warning"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"show = true"`),o(`>`)]),o(`禁用点击选项时关闭动作面板`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-action-sheet`),o(` 
    `),r(`span`,{class:`hljs-attr`},`:close-on-click-action`),o(`=`),r(`span`,{class:`hljs-string`},`"false"`),o(`
    `),r(`span`,{class:`hljs-attr`},`:actions`),o(`=`),r(`span`,{class:`hljs-string`},`"actions"`),o(` 
    `),r(`span`,{class:`hljs-attr`},`v-model:show`),o(`=`),r(`span`,{class:`hljs-string`},`"show"`),o(` 
    @`),r(`span`,{class:`hljs-attr`},`select`),o(`=`),r(`span`,{class:`hljs-string`},`"handleSelect"`),o(`
  />`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,j,[r(`h3`,M,[a(Z,{to:`#zi4ding4yi4xuan3xiang4yang4shi4`},{default:n(()=>[...l[33]||=[o(`#`,-1)]]),_:1}),l[34]||=o(`自定义选项样式`,-1)]),a(Q,null,{default:n(()=>[...l[35]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` show = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` actions = ref([
  {
    `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'Item 01'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'account-circle'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`color`),o(`: `),r(`span`,{class:`hljs-string`},`'var(--color-success)'`),o(`,
  },
  {
    `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'Item 02'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'notebook'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`color`),o(`: `),r(`span`,{class:`hljs-string`},`'var(--color-warning)'`),o(`,
  },
  {
    `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'Item 03'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'wifi'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`color`),o(`: `),r(`span`,{class:`hljs-string`},`'var(--color-info)'`),o(`,
  },
])

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`handleSelect`),o(`(`),r(`span`,{class:`hljs-params`},`action`),o(`) `)]),o(`{
  Snackbar(`),r(`span`,{class:`hljs-string`},[o("`您选择的是:"),r(`span`,{class:`hljs-subst`},"${action.name}"),o("`")]),o(`)
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"warning"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"show = true"`),o(`>`)]),o(`自定义选项样式`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-action-sheet`),o(` 
    `),r(`span`,{class:`hljs-attr`},`:actions`),o(`=`),r(`span`,{class:`hljs-string`},`"actions"`),o(` 
    `),r(`span`,{class:`hljs-attr`},`v-model:show`),o(`=`),r(`span`,{class:`hljs-string`},`"show"`),o(` 
    @`),r(`span`,{class:`hljs-attr`},`select`),o(`=`),r(`span`,{class:`hljs-string`},`"handleSelect"`),o(`
  />`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),l[60]||=r(`h2`,null,`API`,-1),r(`div`,N,[r(`h3`,P,[a(Z,{to:`#shu3xing4`},{default:n(()=>[...l[36]||=[o(`#`,-1)]]),_:1}),l[37]||=o(`属性`,-1)]),l[38]||=s(`<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>是否显示动作面板</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>actions</code></td><td>选项列表</td><td><em>Actions</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>动作面板标题</td><td><em>string</em></td><td><code>请选择</code></td></tr><tr><td><code>overlay</code></td><td>是否显示遮罩层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlay-class</code></td><td>自定义遮罩层的 class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlay-style</code></td><td>自定义遮罩层的 style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>lock-scroll</code></td><td>是否禁止滚动穿透，禁止时滚动弹出层不会引发 body 的滚动</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-action</code></td><td>是否点击选项时关闭动作面板</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-overlay</code></td><td>是否点击遮罩层关闭动作面板</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-key-escape</code></td><td>是否支持键盘 ESC 关闭动作面板</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>safe-area</code></td><td>是否开启底部安全区适配</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>teleport</code></td><td>动作面板挂载的位置</td><td><em>TeleportProps[&#39;to&#39;] | false</em></td><td><code>body</code></td></tr></tbody></table>`,1)]),r(`div`,F,[r(`h3`,I,[a(Z,{to:`#shi4jian4`},{default:n(()=>[...l[39]||=[o(`#`,-1)]]),_:1}),l[40]||=o(`事件`,-1)]),l[41]||=s(`<table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>select</code></td><td>选择选项时触发</td><td><code>action: Action</code></td></tr><tr><td><code>open</code></td><td>打开动作面板时触发</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>打开动作面板动画结束时触发</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>关闭动作面板时触发</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>关闭动作面板动画结束时触发</td><td><code>-</code></td></tr><tr><td><code>click-overlay</code></td><td>点击遮罩层时触发</td><td><code>-</code></td></tr><tr><td><code>key-escape</code></td><td>点击键盘 ESC 时触发</td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,L,[r(`h3`,R,[a(Z,{to:`#fang1fa3`},{default:n(()=>[...l[42]||=[o(`#`,-1)]]),_:1}),l[43]||=o(`方法`,-1)]),l[44]||=s(`<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>ActionSheet</code></td><td>显示动作面板</td><td><em>options</em></td><td><code>-</code></td></tr><tr><td><code>ActionSheet.close</code></td><td>关闭动作面板</td><td><em>-</em></td><td><code>-</code></td></tr><tr><td><code>ActionSheet.setDefaultOptions</code></td><td>设置默认的选项配置</td><td><em>options</em></td><td><code>-</code></td></tr><tr><td><code>ActionSheet.resetDefaultOptions</code></td><td>重置默认的选项配置</td><td><em>-</em></td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,z,[r(`h3`,B,[a(Z,{to:`#ActionSheetOptions`},{default:n(()=>[...l[45]||=[o(`#`,-1)]]),_:1}),l[46]||=o(`ActionSheet Options`,-1)]),l[47]||=s(`<h4>函数式调用时传入的选项</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>actions</code></td><td>选项列表</td><td><em>Actions</em></td><td><code>[]</code></td></tr><tr><td><code>title</code></td><td>动作面板标题</td><td><em>string</em></td><td><code>请选择</code></td></tr><tr><td><code>overlay</code></td><td>是否显示遮罩层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlayClass</code></td><td>自定义遮罩层的 class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlayStyle</code></td><td>自定义遮罩层的 style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>lockScroll</code></td><td>是否禁止滚动穿透，禁止时滚动弹出层不会引发 body 的滚动</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnClickAction</code></td><td>是否点击选项时关闭动作面板</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnClickOverlay</code></td><td>是否点击遮罩层关闭弹出层</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnKeyEscape</code></td><td>是否支持键盘 ESC 关闭动作面板</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>safe-area</code></td><td>是否开启底部安全区适配</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>onOpen</code></td><td>动作面板开启回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>动作面板开启动画结束回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>动作面板关闭回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>动作面板关闭动画结束回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onSelect</code></td><td>选项选择时回调</td><td><em>(action: Action) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClickOverlay</code></td><td>遮罩层点击回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onKeyEscape</code></td><td>点击键盘 ESC 时触发</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table>`,2)]),r(`div`,V,[r(`h3`,H,[a(Z,{to:`#ActionSheetAction`},{default:n(()=>[...l[48]||=[o(`#`,-1)]]),_:1}),l[49]||=o(`ActionSheet Action`,-1)]),l[50]||=s(`<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>name</code></td><td>选项名称</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>选项文字颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>icon 图标，支持网络图片地址</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>iconSize</code></td><td>图标尺寸</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>namespace</code></td><td>图标命名空间</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>className</code></td><td>选项附加类名</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用选项</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table>`,1)]),r(`div`,U,[r(`h3`,W,[a(Z,{to:`#cha1cao2`},{default:n(()=>[...l[51]||=[o(`#`,-1)]]),_:1}),l[52]||=o(`插槽`,-1)]),l[53]||=s(`<table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>actions</code></td><td>选项列表</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>动作面板标题</td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,G,[r(`h3`,K,[a(Z,{to:`#yang4shi4bian4liang4`},{default:n(()=>[...l[54]||=[o(`#`,-1)]]),_:1}),l[55]||=o(`样式变量`,-1)]),l[56]||=s(`<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--action-sheet-border-radius</code></td><td><code>2px</code></td></tr><tr><td><code>--action-sheet-border-top</code></td><td><code>none</code></td></tr><tr><td><code>--action-sheet-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--action-sheet-title-color</code></td><td><code>#888</code></td></tr><tr><td><code>--action-sheet-title-padding</code></td><td><code>10px 16px</code></td></tr><tr><td><code>--action-sheet-title-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--action-sheet-action-item-height</code></td><td><code>48px</code></td></tr><tr><td><code>--action-sheet-action-item-padding</code></td><td><code>0px 18px</code></td></tr><tr><td><code>--action-sheet-action-item-color</code></td><td><code>#333</code></td></tr><tr><td><code>--action-sheet-action-item-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--action-sheet-icon-margin</code></td><td><code>0 0 20px 0</code></td></tr><tr><td><code>--action-sheet-icon-size</code></td><td><code>24px</code></td></tr></tbody></table>`,2)])])}var J=c(l,[[`render`,q]]);export{J as default};