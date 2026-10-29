import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s,m as c}from"./runtime-core.esm-bundler-DUghkl6b.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`jie4shao4`},p={class:`card`},m={id:`ji1ben3shi3yong4`},h={class:`card`},g={id:`ju4ming2xuan3xiang4ka3`},_={class:`card`},v={id:`xiu1gai3yang4shi4`},y={class:`card`},b={id:`jin4yong4xuan3xiang4`},x={class:`card`},S={id:`kai1qi3gun3dong4`},C={class:`card`},w={id:`xuan3xiang4chui2zhi2bu4ju2`},T={class:`card`},E={id:`rong2qi4chui2zhi2bu4ju2`},D={class:`card`},O={id:`shi4tu2lian2dong4`},k={class:`card`},A={id:`kai1qi3nian2xing4bu4ju2`},j={class:`card`},M={id:`zhi3shi4qi4wei4zhi4fan3zhuan3`},N={class:`card`},P={id:`shu3xing4`},F={class:`card`},I={id:`fang1fa3`},L={class:`card`},R={id:`shi4jian4`},z={class:`card`},B={id:`cha1cao2`},V={class:`card`},H={id:`yang4shi4bian4liang4`};function U(e,l,U,W,G,K){let q=n(`router-link`),J=n(`var-site-code-example`);return r(),a(`div`,u,[l[50]||=i(`h1`,null,`选项卡组`,-1),i(`div`,d,[i(`h3`,f,[o(q,{to:`#jie4shao4`},{default:t(()=>[...l[0]||=[s(`#`,-1)]]),_:1}),l[1]||=s(`介绍`,-1)]),l[2]||=i(`p`,null,[s(`使用 `),i(`code`,null,`Tabs`),s(`、`),i(`code`,null,`Tab`),s(` 实现选项卡组的切换。使用 `),i(`code`,null,`TabsItems`),s(`、`),i(`code`,null,`TabItem`),s(` 实现和选项卡组的视图联动。`)],-1)]),i(`div`,p,[i(`h3`,m,[o(q,{to:`#ji1ben3shi3yong4`},{default:t(()=>[...l[3]||=[s(`#`,-1)]]),_:1}),l[4]||=s(`基本使用`,-1)]),o(J,null,{default:t(()=>[...l[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` active = ref(`),i(`span`,{class:`hljs-number`},`0`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tabs`),s(),i(`span`,{class:`hljs-attr`},`v-model:active`),s(`=`),i(`span`,{class:`hljs-string`},`"active"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`选项1`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`选项2`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`选项3`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tabs`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,h,[i(`h3`,g,[o(q,{to:`#ju4ming2xuan3xiang4ka3`},{default:t(()=>[...l[6]||=[s(`#`,-1)]]),_:1}),l[7]||=s(`具名选项卡`,-1)]),l[9]||=i(`p`,null,[s(`Tabs 默认通过 `),i(`code`,null,`active`),s(` 去匹配 Tab 的 `),i(`code`,null,`index`),s(` 来决定哪个选项卡被激活。 您也可以通过给 Tab 设置 `),i(`code`,null,`name`),s(` 来命名选项卡，这时 Tabs 会优先匹配 `),i(`code`,null,`name`),s(`。`)],-1),o(J,null,{default:t(()=>[...l[8]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` active = ref(`),i(`span`,{class:`hljs-string`},`'选项1'`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tabs`),s(),i(`span`,{class:`hljs-attr`},`v-model:active`),s(`=`),i(`span`,{class:`hljs-string`},`"active"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"选项1"`),s(`>`)]),s(`选项1`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"选项2"`),s(`>`)]),s(`选项2`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"选项3"`),s(`>`)]),s(`选项3`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tabs`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,_,[i(`h3`,v,[o(q,{to:`#xiu1gai3yang4shi4`},{default:t(()=>[...l[10]||=[s(`#`,-1)]]),_:1}),l[11]||=s(`修改样式`,-1)]),o(J,null,{default:t(()=>[...l[12]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` active = ref(`),i(`span`,{class:`hljs-number`},`0`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tabs`),s(`
    `),i(`span`,{class:`hljs-attr`},`elevation`),s(`
    `),i(`span`,{class:`hljs-attr`},`color`),s(`=`),i(`span`,{class:`hljs-string`},`"var(--color-primary)"`),s(`
    `),i(`span`,{class:`hljs-attr`},`active-color`),s(`=`),i(`span`,{class:`hljs-string`},`"var(--color-on-primary)"`),s(`
    `),i(`span`,{class:`hljs-attr`},`inactive-color`),s(`=`),i(`span`,{class:`hljs-string`},`"var(--color-on-info)"`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model:active`),s(`=`),i(`span`,{class:`hljs-string`},`"active"`),s(`
  >`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`选项1`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`选项2`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`选项3`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tabs`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,y,[i(`h3`,b,[o(q,{to:`#jin4yong4xuan3xiang4`},{default:t(()=>[...l[13]||=[s(`#`,-1)]]),_:1}),l[14]||=s(`禁用选项`,-1)]),o(J,null,{default:t(()=>[...l[15]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` active = ref(`),i(`span`,{class:`hljs-number`},`0`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tabs`),s(`
    `),i(`span`,{class:`hljs-attr`},`elevation`),s(`
    `),i(`span`,{class:`hljs-attr`},`color`),s(`=`),i(`span`,{class:`hljs-string`},`"var(--color-primary)"`),s(`
    `),i(`span`,{class:`hljs-attr`},`active-color`),s(`=`),i(`span`,{class:`hljs-string`},`"var(--color-on-primary)"`),s(`
    `),i(`span`,{class:`hljs-attr`},`inactive-color`),s(`=`),i(`span`,{class:`hljs-string`},`"var(--color-on-info)"`),s(`
    `),i(`span`,{class:`hljs-attr`},`disabled-color`),s(`=`),i(`span`,{class:`hljs-string`},`"#aaa"`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model:active`),s(`=`),i(`span`,{class:`hljs-string`},`"active"`),s(`
  >`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`选项1`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`选项2`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(),i(`span`,{class:`hljs-attr`},`disabled`),s(`>`)]),s(`禁用选项`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tabs`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,x,[i(`h3`,S,[o(q,{to:`#kai1qi3gun3dong4`},{default:t(()=>[...l[16]||=[s(`#`,-1)]]),_:1}),l[17]||=s(`开启滚动`,-1)]),l[19]||=i(`p`,null,[s(`在选项卡数量在 `),i(`code`,null,`四个以上`),s(` 时自动开启滚动，点击选项卡自动滚动到视口中央。`)],-1),o(J,null,{default:t(()=>[...l[18]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` active = ref(`),i(`span`,{class:`hljs-number`},`0`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tabs`),s(`
    `),i(`span`,{class:`hljs-attr`},`elevation`),s(`
    `),i(`span`,{class:`hljs-attr`},`color`),s(`=`),i(`span`,{class:`hljs-string`},`"var(--color-primary)"`),s(`
    `),i(`span`,{class:`hljs-attr`},`active-color`),s(`=`),i(`span`,{class:`hljs-string`},`"var(--color-on-primary)"`),s(`
    `),i(`span`,{class:`hljs-attr`},`inactive-color`),s(`=`),i(`span`,{class:`hljs-string`},`"var(--color-on-info)"`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model:active`),s(`=`),i(`span`,{class:`hljs-string`},`"active"`),s(`
  >`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`选项1`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`选项2`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`选项3`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`选项4`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`选项5`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`选项6`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`选项7`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`选项8`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tabs`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,C,[i(`h3`,w,[o(q,{to:`#xuan3xiang4chui2zhi2bu4ju2`},{default:t(()=>[...l[20]||=[s(`#`,-1)]]),_:1}),l[21]||=s(`选项垂直布局`,-1)]),o(J,null,{default:t(()=>[...l[22]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` active = ref(`),i(`span`,{class:`hljs-number`},`0`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tabs`),s(`
    `),i(`span`,{class:`hljs-attr`},`elevation`),s(`
    `),i(`span`,{class:`hljs-attr`},`item-direction`),s(`=`),i(`span`,{class:`hljs-string`},`"vertical"`),s(`
    `),i(`span`,{class:`hljs-attr`},`color`),s(`=`),i(`span`,{class:`hljs-string`},`"var(--color-primary)"`),s(`
    `),i(`span`,{class:`hljs-attr`},`active-color`),s(`=`),i(`span`,{class:`hljs-string`},`"var(--color-on-primary)"`),s(`
    `),i(`span`,{class:`hljs-attr`},`inactive-color`),s(`=`),i(`span`,{class:`hljs-string`},`"var(--color-on-info)"`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model:active`),s(`=`),i(`span`,{class:`hljs-string`},`"active"`),s(`
  >`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"tabs-example-icon"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"information"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`选项1`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"tabs-example-icon"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"warning"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`选项2`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"tabs-example-icon"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"error"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`选项3`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tabs`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),i(`span`,{class:`css`},[s(`
`),i(`span`,{class:`hljs-selector-class`},`.tabs-example-icon`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`margin-bottom`),s(`: `),i(`span`,{class:`hljs-number`},`5px`),s(`;
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,T,[i(`h3`,E,[o(q,{to:`#rong2qi4chui2zhi2bu4ju2`},{default:t(()=>[...l[23]||=[s(`#`,-1)]]),_:1}),l[24]||=s(`容器垂直布局`,-1)]),o(J,null,{default:t(()=>[...l[25]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` active = ref(`),i(`span`,{class:`hljs-number`},`0`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tabs`),s(`
    `),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"tabs-example-vertical"`),s(`
    `),i(`span`,{class:`hljs-attr`},`elevation`),s(`
    `),i(`span`,{class:`hljs-attr`},`layout-direction`),s(`=`),i(`span`,{class:`hljs-string`},`"vertical"`),s(`
    `),i(`span`,{class:`hljs-attr`},`color`),s(`=`),i(`span`,{class:`hljs-string`},`"var(--color-primary)"`),s(`
    `),i(`span`,{class:`hljs-attr`},`active-color`),s(`=`),i(`span`,{class:`hljs-string`},`"var(--color-on-primary)"`),s(`
    `),i(`span`,{class:`hljs-attr`},`inactive-color`),s(`=`),i(`span`,{class:`hljs-string`},`"var(--color-on-info)"`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model:active`),s(`=`),i(`span`,{class:`hljs-string`},`"active"`),s(`
  >`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`选项1`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`选项2`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`选项3`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tabs`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),i(`span`,{class:`css`},[s(`
`),i(`span`,{class:`hljs-selector-class`},`.tabs-example-vertical`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`width`),s(`: `),i(`span`,{class:`hljs-number`},`80px`),s(),i(`span`,{class:`hljs-meta`},`!important`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`height`),s(`: `),i(`span`,{class:`hljs-number`},`120px`),s(),i(`span`,{class:`hljs-meta`},`!important`),s(`;
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,D,[i(`h3`,O,[o(q,{to:`#shi4tu2lian2dong4`},{default:t(()=>[...l[26]||=[s(`#`,-1)]]),_:1}),l[27]||=s(`视图联动`,-1)]),o(J,null,{default:t(()=>[...l[28]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` active = ref(`),i(`span`,{class:`hljs-number`},`0`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tabs`),s(`
    `),i(`span`,{class:`hljs-attr`},`elevation`),s(`
    `),i(`span`,{class:`hljs-attr`},`color`),s(`=`),i(`span`,{class:`hljs-string`},`"var(--color-primary)"`),s(`
    `),i(`span`,{class:`hljs-attr`},`active-color`),s(`=`),i(`span`,{class:`hljs-string`},`"var(--color-on-primary)"`),s(`
    `),i(`span`,{class:`hljs-attr`},`inactive-color`),s(`=`),i(`span`,{class:`hljs-string`},`"var(--color-on-info)"`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model:active`),s(`=`),i(`span`,{class:`hljs-string`},`"active"`),s(`
  >`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`选项1`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`选项2`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`选项3`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tabs`),s(`>`)]),s(`

  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tabs-items`),s(),i(`span`,{class:`hljs-attr`},`v-model:active`),s(`=`),i(`span`,{class:`hljs-string`},`"active"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab-item`),s(`>`)]),s(`
      呜啦啦啦火车笛，随着奔腾的马蹄。 小妹妹吹着口琴，夕阳下美了剪影。 我用子弹写日记，介绍完了风景。
      接下来换介绍我自己。 我虽然是个牛仔，在酒吧只点牛奶。 为什么不喝啤酒，因为啤酒伤身体。
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab-item`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab-item`),s(`>`)]),s(`
      很多人不长眼睛，嚣张都靠武器。 赤手空拳就缩成蚂蚁。 不用麻烦了，不用麻烦了。 不用麻烦，不用麻烦了，不用麻烦了。
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab-item`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab-item`),s(`>`)]),s(`
      你们一起上，我在赶时间。 每天决斗观众都累了，英雄也累了。 不用麻烦了，不用麻烦了。
      副歌不长你们有几个，一起上好了。 正义呼唤我，美女需要我。 牛仔很忙的。
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab-item`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tabs-items`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,k,[i(`h3`,A,[o(q,{to:`#kai1qi3nian2xing4bu4ju2`},{default:t(()=>[...l[29]||=[s(`#`,-1)]]),_:1}),l[30]||=s(`开启粘性布局`,-1)]),o(J,null,{default:t(()=>[...l[31]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` active = ref(`),i(`span`,{class:`hljs-number`},`0`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"sticky-example"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tabs`),s(`
      `),i(`span`,{class:`hljs-attr`},`sticky`),s(`
      `),i(`span`,{class:`hljs-attr`},`elevation`),s(`
      `),i(`span`,{class:`hljs-attr`},`color`),s(`=`),i(`span`,{class:`hljs-string`},`"var(--color-primary)"`),s(`
      `),i(`span`,{class:`hljs-attr`},`active-color`),s(`=`),i(`span`,{class:`hljs-string`},`"var(--color-on-primary)"`),s(`
      `),i(`span`,{class:`hljs-attr`},`inactive-color`),s(`=`),i(`span`,{class:`hljs-string`},`"var(--color-on-info)"`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model:active`),s(`=`),i(`span`,{class:`hljs-string`},`"active"`),s(`
    >`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`选项1`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`选项2`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`选项3`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tabs`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),i(`span`,{class:`css`},[s(`
`),i(`span`,{class:`hljs-selector-class`},`.sticky-example`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`height`),s(`: `),i(`span`,{class:`hljs-number`},`200vh`),s(`;
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,j,[i(`h3`,M,[o(q,{to:`#zhi3shi4qi4wei4zhi4fan3zhuan3`},{default:t(()=>[...l[32]||=[s(`#`,-1)]]),_:1}),l[33]||=s(`指示器位置反转`,-1)]),o(J,null,{default:t(()=>[...l[34]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` active = ref(`),i(`span`,{class:`hljs-number`},`0`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tabs`),s(`
    `),i(`span`,{class:`hljs-attr`},`elevation`),s(`
    `),i(`span`,{class:`hljs-attr`},`indicator-position`),s(`=`),i(`span`,{class:`hljs-string`},`"reverse"`),s(`
    `),i(`span`,{class:`hljs-attr`},`color`),s(`=`),i(`span`,{class:`hljs-string`},`"var(--color-primary)"`),s(`
    `),i(`span`,{class:`hljs-attr`},`active-color`),s(`=`),i(`span`,{class:`hljs-string`},`"var(--color-on-primary)"`),s(`
    `),i(`span`,{class:`hljs-attr`},`inactive-color`),s(`=`),i(`span`,{class:`hljs-string`},`"var(--color-on-info)"`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model:active`),s(`=`),i(`span`,{class:`hljs-string`},`"active"`),s(`
  >`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`选项1`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`选项2`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`选项3`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tabs`),s(`>`)]),s(`

  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tabs`),s(`
    `),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"tabs-example-vertical"`),s(`
    `),i(`span`,{class:`hljs-attr`},`elevation`),s(`
    `),i(`span`,{class:`hljs-attr`},`indicator-position`),s(`=`),i(`span`,{class:`hljs-string`},`"reverse"`),s(`
    `),i(`span`,{class:`hljs-attr`},`layout-direction`),s(`=`),i(`span`,{class:`hljs-string`},`"vertical"`),s(`
    `),i(`span`,{class:`hljs-attr`},`color`),s(`=`),i(`span`,{class:`hljs-string`},`"var(--color-primary)"`),s(`
    `),i(`span`,{class:`hljs-attr`},`active-color`),s(`=`),i(`span`,{class:`hljs-string`},`"var(--color-on-primary)"`),s(`
    `),i(`span`,{class:`hljs-attr`},`inactive-color`),s(`=`),i(`span`,{class:`hljs-string`},`"var(--color-on-info)"`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model:active`),s(`=`),i(`span`,{class:`hljs-string`},`"active"`),s(`
  >`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`选项1`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`选项2`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`选项3`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tabs`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),i(`span`,{class:`css`},[s(`
`),i(`span`,{class:`hljs-selector-class`},`.tabs-example-vertical`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`width`),s(`: `),i(`span`,{class:`hljs-number`},`80px`),s(),i(`span`,{class:`hljs-meta`},`!important`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`height`),s(`: `),i(`span`,{class:`hljs-number`},`120px`),s(),i(`span`,{class:`hljs-meta`},`!important`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`margin-top`),s(`: `),i(`span`,{class:`hljs-number`},`20px`),s(`;
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),l[51]||=i(`h2`,null,`API`,-1),i(`div`,N,[i(`h3`,P,[o(q,{to:`#shu3xing4`},{default:t(()=>[...l[35]||=[s(`#`,-1)]]),_:1}),l[36]||=s(`属性`,-1)]),l[37]||=c(`<h4>Tabs Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:active</code></td><td>激活的选项卡标识, 优先匹配 name，其次是 index</td><td><em>string</em></td><td><code>default</code></td></tr><tr><td><code>layout-direction</code></td><td>选项卡组的布局方向，可选值为 <code>horizontal</code> <code>vertical</code></td><td><em>string</em></td><td><code>horizontal</code></td></tr><tr><td><code>item-direction</code></td><td>选项卡的布局方向，可选值为 <code>horizontal</code> <code>vertical</code></td><td><em>string</em></td><td><code>horizontal</code></td></tr><tr><td><code>fixed-bottom</code></td><td>是否固定在窗口底部, 可用做底部导航</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>color</code></td><td>选项卡的背景颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>active-color</code></td><td>选项卡激活的主要颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>inactive-color</code></td><td>选项卡未激活的主要颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>disabled-color</code></td><td>选项卡禁用时的主要颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>indicator-color</code></td><td>选项卡激活指示器的颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>indicator-size</code></td><td>选项卡激活指示器的尺寸</td><td><em>string | number</em></td><td><code>2px</code></td></tr><tr><td><code>elevation</code></td><td>海拔高度，可选值为 <code>true</code> <code>false</code> 和 <code>0-24</code> 的等级</td><td><em>string | number | boolean</em></td><td><code>false</code></td></tr><tr><td><code>sticky</code></td><td>是否启用粘性布局</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>sticky-css-mode</code></td><td>是否启用粘性布局的原生 css sticky 模式</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>sticky-z-index</code></td><td>粘性布局的层级</td><td><em>number</em></td><td><code>10</code></td></tr><tr><td><code>safe-area</code></td><td>是否开启底部安全区适配</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>offset-top</code></td><td>吸顶距离</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>scrollable</code></td><td>是否开启滚动，可选值为 <code>auto</code> <code>always</code></td><td><em>string</em></td><td><code>auto</code></td></tr><tr><td><code>indicator-position</code></td><td>选项卡激活指示器的位置，可选值为 <code>normal</code> <code>reverse</code></td><td><em>string</em></td><td><code>normal</code></td></tr></tbody></table><h4>Tab Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>name</code></td><td>选项卡的名字</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用选项卡</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code></td><td>是否启用水波效果</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table><h4>TabsItems Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:active</code></td><td>激活的选项卡的标识</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>can-swipe</code></td><td>是否允许滑动切换</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>animated</code></td><td>是否启用内容切换动画</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>loop</code></td><td>是否允许循环切换</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table><h4>TabItem Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>name</code></td><td>视图的名字</td><td><em>string | number</em></td><td><code>-</code></td></tr></tbody></table>`,8)]),i(`div`,F,[i(`h3`,I,[o(q,{to:`#fang1fa3`},{default:t(()=>[...l[38]||=[s(`#`,-1)]]),_:1}),l[39]||=s(`方法`,-1)]),l[40]||=c(`<h4>Tabs Methods</h4><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>resize</code></td><td>产生位置大小变化时可以调用此方法重绘选项卡组</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>resizeSticky</code></td><td>产生位置大小变化时可以调用此方法重绘粘性布局</td><td><code>-</code></td><td><code>Promise&lt;void&gt;</code></td></tr></tbody></table><h4>TabsItems Methods</h4><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>getSwipe</code></td><td>获取 <code>swipe</code> 组件实例</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>`,4)]),i(`div`,L,[i(`h3`,R,[o(q,{to:`#shi4jian4`},{default:t(()=>[...l[41]||=[s(`#`,-1)]]),_:1}),l[42]||=s(`事件`,-1)]),l[43]||=c(`<h4>Tabs Events</h4><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>click</code></td><td>点击选项卡时触发, 在选项卡 <code>disabled</code> 状态为 <code>true</code> 时不触发</td><td><code>active: string | number</code></td></tr><tr><td><code>change</code></td><td>切换选项卡时触发</td><td><code>active: string | number</code></td></tr></tbody></table><h4>Tab Events</h4><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>click</code></td><td>点击选项卡时触发, 在 <code>disabled</code> 状态为 <code>true</code> 时不触发</td><td><code>active: string | number</code> <br> <code>event: Event</code></td></tr></tbody></table>`,4)]),i(`div`,z,[i(`h3`,B,[o(q,{to:`#cha1cao2`},{default:t(()=>[...l[44]||=[s(`#`,-1)]]),_:1}),l[45]||=s(`插槽`,-1)]),l[46]||=c(`<h4>Tabs Slots</h4><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>选项卡组的内容</td><td><code>-</code></td></tr></tbody></table><h4>Tab Slots</h4><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>选项卡内容</td><td><code>-</code></td></tr></tbody></table><h4>TabsItems Slots</h4><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>视图组的内容</td><td><code>-</code></td></tr></tbody></table><h4>TabItem Slots</h4><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>视图的内容</td><td><code>-</code></td></tr></tbody></table>`,8)]),i(`div`,V,[i(`h3`,H,[o(q,{to:`#yang4shi4bian4liang4`},{default:t(()=>[...l[47]||=[s(`#`,-1)]]),_:1}),l[48]||=s(`样式变量`,-1)]),l[49]||=c(`<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><h4>Tabs Variables</h4><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--tabs-item-horizontal-height</code></td><td><code>44px</code></td></tr><tr><td><code>--tabs-item-vertical-height</code></td><td><code>66px</code></td></tr><tr><td><code>--tabs-radius</code></td><td><code>2px</code></td></tr><tr><td><code>--tabs-padding</code></td><td><code>12px</code></td></tr><tr><td><code>--tabs-indicator-size</code></td><td><code>2px</code></td></tr><tr><td><code>--tabs-indicator-border-radius</code></td><td><code>0</code></td></tr><tr><td><code>--tabs-indicator-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--tabs-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--tabs-indicator-inner-size</code></td><td><code>100%</code></td></tr></tbody></table><h4>Tab Variables</h4><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--tab-padding</code></td><td><code>12px</code></td></tr><tr><td><code>--tab-active-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--tab-inactive-color</code></td><td><code>#646566</code></td></tr><tr><td><code>--tab-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--tab-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--tab-font-weight</code></td><td><code>400</code></td></tr><tr><td><code>--tab-active-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--tab-active-font-weight</code></td><td><code>400</code></td></tr></tbody></table>`,5)])])}var W=e(l,[[`render`,U]]);export{W as default};