import{L as e,N as t,W as n,c as r,d as i,g as a,h as o,m as s}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as c}from"./_plugin-vue_export-helper-V-yks4gF.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`jie4shao4`},p={class:`card`},m={id:`ji1ben3shi3yong4`},h={class:`card`},g={id:`ju4ming2xuan3xiang4ka3`},_={class:`card`},v={id:`xiu1gai3yang4shi4`},y={class:`card`},b={id:`jin4yong4xuan3xiang4`},x={class:`card`},S={id:`kai1qi3gun3dong4`},C={class:`card`},w={id:`xuan3xiang4chui2zhi2bu4ju2`},T={class:`card`},E={id:`rong2qi4chui2zhi2bu4ju2`},D={class:`card`},O={id:`shi4tu2lian2dong4`},k={class:`card`},A={id:`kai1qi3nian2xing4bu4ju2`},j={class:`card`},M={id:`zhi3shi4qi4wei4zhi4fan3zhuan3`},N={class:`card`},P={id:`shu3xing4`},F={class:`card`},I={id:`fang1fa3`},L={class:`card`},R={id:`shi4jian4`},z={class:`card`},B={id:`cha1cao2`},V={class:`card`},H={id:`yang4shi4bian4liang4`};function U(c,l,U,W,G,K){let q=e(`router-link`),J=e(`var-site-code-example`);return t(),i(`div`,u,[l[50]||=r(`h1`,null,`选项卡组`,-1),r(`div`,d,[r(`h3`,f,[a(q,{to:`#jie4shao4`},{default:n(()=>[...l[0]||=[o(`#`,-1)]]),_:1}),l[1]||=o(`介绍`,-1)]),l[2]||=r(`p`,null,[o(`使用 `),r(`code`,null,`Tabs`),o(`、`),r(`code`,null,`Tab`),o(` 实现选项卡组的切换。使用 `),r(`code`,null,`TabsItems`),o(`、`),r(`code`,null,`TabItem`),o(` 实现和选项卡组的视图联动。`)],-1)]),r(`div`,p,[r(`h3`,m,[a(q,{to:`#ji1ben3shi3yong4`},{default:n(()=>[...l[3]||=[o(`#`,-1)]]),_:1}),l[4]||=o(`基本使用`,-1)]),a(J,null,{default:n(()=>[...l[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` active = ref(`),r(`span`,{class:`hljs-number`},`0`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tabs`),o(),r(`span`,{class:`hljs-attr`},`v-model:active`),o(`=`),r(`span`,{class:`hljs-string`},`"active"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`选项1`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`选项2`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`选项3`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tabs`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,h,[r(`h3`,g,[a(q,{to:`#ju4ming2xuan3xiang4ka3`},{default:n(()=>[...l[6]||=[o(`#`,-1)]]),_:1}),l[7]||=o(`具名选项卡`,-1)]),l[9]||=r(`p`,null,[o(`Tabs 默认通过 `),r(`code`,null,`active`),o(` 去匹配 Tab 的 `),r(`code`,null,`index`),o(` 来决定哪个选项卡被激活。 您也可以通过给 Tab 设置 `),r(`code`,null,`name`),o(` 来命名选项卡，这时 Tabs 会优先匹配 `),r(`code`,null,`name`),o(`。`)],-1),a(J,null,{default:n(()=>[...l[8]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` active = ref(`),r(`span`,{class:`hljs-string`},`'选项1'`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tabs`),o(),r(`span`,{class:`hljs-attr`},`v-model:active`),o(`=`),r(`span`,{class:`hljs-string`},`"active"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"选项1"`),o(`>`)]),o(`选项1`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"选项2"`),o(`>`)]),o(`选项2`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"选项3"`),o(`>`)]),o(`选项3`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tabs`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,_,[r(`h3`,v,[a(q,{to:`#xiu1gai3yang4shi4`},{default:n(()=>[...l[10]||=[o(`#`,-1)]]),_:1}),l[11]||=o(`修改样式`,-1)]),a(J,null,{default:n(()=>[...l[12]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` active = ref(`),r(`span`,{class:`hljs-number`},`0`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tabs`),o(`
    `),r(`span`,{class:`hljs-attr`},`elevation`),o(`
    `),r(`span`,{class:`hljs-attr`},`color`),o(`=`),r(`span`,{class:`hljs-string`},`"var(--color-primary)"`),o(`
    `),r(`span`,{class:`hljs-attr`},`active-color`),o(`=`),r(`span`,{class:`hljs-string`},`"var(--color-on-primary)"`),o(`
    `),r(`span`,{class:`hljs-attr`},`inactive-color`),o(`=`),r(`span`,{class:`hljs-string`},`"var(--color-on-info)"`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model:active`),o(`=`),r(`span`,{class:`hljs-string`},`"active"`),o(`
  >`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`选项1`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`选项2`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`选项3`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tabs`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,y,[r(`h3`,b,[a(q,{to:`#jin4yong4xuan3xiang4`},{default:n(()=>[...l[13]||=[o(`#`,-1)]]),_:1}),l[14]||=o(`禁用选项`,-1)]),a(J,null,{default:n(()=>[...l[15]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` active = ref(`),r(`span`,{class:`hljs-number`},`0`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tabs`),o(`
    `),r(`span`,{class:`hljs-attr`},`elevation`),o(`
    `),r(`span`,{class:`hljs-attr`},`color`),o(`=`),r(`span`,{class:`hljs-string`},`"var(--color-primary)"`),o(`
    `),r(`span`,{class:`hljs-attr`},`active-color`),o(`=`),r(`span`,{class:`hljs-string`},`"var(--color-on-primary)"`),o(`
    `),r(`span`,{class:`hljs-attr`},`inactive-color`),o(`=`),r(`span`,{class:`hljs-string`},`"var(--color-on-info)"`),o(`
    `),r(`span`,{class:`hljs-attr`},`disabled-color`),o(`=`),r(`span`,{class:`hljs-string`},`"#aaa"`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model:active`),o(`=`),r(`span`,{class:`hljs-string`},`"active"`),o(`
  >`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`选项1`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`选项2`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(),r(`span`,{class:`hljs-attr`},`disabled`),o(`>`)]),o(`禁用选项`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tabs`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,x,[r(`h3`,S,[a(q,{to:`#kai1qi3gun3dong4`},{default:n(()=>[...l[16]||=[o(`#`,-1)]]),_:1}),l[17]||=o(`开启滚动`,-1)]),l[19]||=r(`p`,null,[o(`在选项卡数量在 `),r(`code`,null,`四个以上`),o(` 时自动开启滚动，点击选项卡自动滚动到视口中央。`)],-1),a(J,null,{default:n(()=>[...l[18]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` active = ref(`),r(`span`,{class:`hljs-number`},`0`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tabs`),o(`
    `),r(`span`,{class:`hljs-attr`},`elevation`),o(`
    `),r(`span`,{class:`hljs-attr`},`color`),o(`=`),r(`span`,{class:`hljs-string`},`"var(--color-primary)"`),o(`
    `),r(`span`,{class:`hljs-attr`},`active-color`),o(`=`),r(`span`,{class:`hljs-string`},`"var(--color-on-primary)"`),o(`
    `),r(`span`,{class:`hljs-attr`},`inactive-color`),o(`=`),r(`span`,{class:`hljs-string`},`"var(--color-on-info)"`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model:active`),o(`=`),r(`span`,{class:`hljs-string`},`"active"`),o(`
  >`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`选项1`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`选项2`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`选项3`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`选项4`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`选项5`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`选项6`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`选项7`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`选项8`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tabs`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,C,[r(`h3`,w,[a(q,{to:`#xuan3xiang4chui2zhi2bu4ju2`},{default:n(()=>[...l[20]||=[o(`#`,-1)]]),_:1}),l[21]||=o(`选项垂直布局`,-1)]),a(J,null,{default:n(()=>[...l[22]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` active = ref(`),r(`span`,{class:`hljs-number`},`0`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tabs`),o(`
    `),r(`span`,{class:`hljs-attr`},`elevation`),o(`
    `),r(`span`,{class:`hljs-attr`},`item-direction`),o(`=`),r(`span`,{class:`hljs-string`},`"vertical"`),o(`
    `),r(`span`,{class:`hljs-attr`},`color`),o(`=`),r(`span`,{class:`hljs-string`},`"var(--color-primary)"`),o(`
    `),r(`span`,{class:`hljs-attr`},`active-color`),o(`=`),r(`span`,{class:`hljs-string`},`"var(--color-on-primary)"`),o(`
    `),r(`span`,{class:`hljs-attr`},`inactive-color`),o(`=`),r(`span`,{class:`hljs-string`},`"var(--color-on-info)"`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model:active`),o(`=`),r(`span`,{class:`hljs-string`},`"active"`),o(`
  >`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"tabs-example-icon"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"information"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`选项1`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"tabs-example-icon"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"warning"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`选项2`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"tabs-example-icon"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"error"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`选项3`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tabs`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),r(`span`,{class:`css`},[o(`
`),r(`span`,{class:`hljs-selector-class`},`.tabs-example-icon`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`margin-bottom`),o(`: `),r(`span`,{class:`hljs-number`},`5px`),o(`;
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,T,[r(`h3`,E,[a(q,{to:`#rong2qi4chui2zhi2bu4ju2`},{default:n(()=>[...l[23]||=[o(`#`,-1)]]),_:1}),l[24]||=o(`容器垂直布局`,-1)]),a(J,null,{default:n(()=>[...l[25]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` active = ref(`),r(`span`,{class:`hljs-number`},`0`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tabs`),o(`
    `),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"tabs-example-vertical"`),o(`
    `),r(`span`,{class:`hljs-attr`},`elevation`),o(`
    `),r(`span`,{class:`hljs-attr`},`layout-direction`),o(`=`),r(`span`,{class:`hljs-string`},`"vertical"`),o(`
    `),r(`span`,{class:`hljs-attr`},`color`),o(`=`),r(`span`,{class:`hljs-string`},`"var(--color-primary)"`),o(`
    `),r(`span`,{class:`hljs-attr`},`active-color`),o(`=`),r(`span`,{class:`hljs-string`},`"var(--color-on-primary)"`),o(`
    `),r(`span`,{class:`hljs-attr`},`inactive-color`),o(`=`),r(`span`,{class:`hljs-string`},`"var(--color-on-info)"`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model:active`),o(`=`),r(`span`,{class:`hljs-string`},`"active"`),o(`
  >`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`选项1`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`选项2`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`选项3`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tabs`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),r(`span`,{class:`css`},[o(`
`),r(`span`,{class:`hljs-selector-class`},`.tabs-example-vertical`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`width`),o(`: `),r(`span`,{class:`hljs-number`},`80px`),o(),r(`span`,{class:`hljs-meta`},`!important`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`height`),o(`: `),r(`span`,{class:`hljs-number`},`120px`),o(),r(`span`,{class:`hljs-meta`},`!important`),o(`;
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,D,[r(`h3`,O,[a(q,{to:`#shi4tu2lian2dong4`},{default:n(()=>[...l[26]||=[o(`#`,-1)]]),_:1}),l[27]||=o(`视图联动`,-1)]),a(J,null,{default:n(()=>[...l[28]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` active = ref(`),r(`span`,{class:`hljs-number`},`0`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tabs`),o(`
    `),r(`span`,{class:`hljs-attr`},`elevation`),o(`
    `),r(`span`,{class:`hljs-attr`},`color`),o(`=`),r(`span`,{class:`hljs-string`},`"var(--color-primary)"`),o(`
    `),r(`span`,{class:`hljs-attr`},`active-color`),o(`=`),r(`span`,{class:`hljs-string`},`"var(--color-on-primary)"`),o(`
    `),r(`span`,{class:`hljs-attr`},`inactive-color`),o(`=`),r(`span`,{class:`hljs-string`},`"var(--color-on-info)"`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model:active`),o(`=`),r(`span`,{class:`hljs-string`},`"active"`),o(`
  >`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`选项1`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`选项2`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`选项3`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tabs`),o(`>`)]),o(`

  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tabs-items`),o(),r(`span`,{class:`hljs-attr`},`v-model:active`),o(`=`),r(`span`,{class:`hljs-string`},`"active"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab-item`),o(`>`)]),o(`
      呜啦啦啦火车笛，随着奔腾的马蹄。 小妹妹吹着口琴，夕阳下美了剪影。 我用子弹写日记，介绍完了风景。
      接下来换介绍我自己。 我虽然是个牛仔，在酒吧只点牛奶。 为什么不喝啤酒，因为啤酒伤身体。
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab-item`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab-item`),o(`>`)]),o(`
      很多人不长眼睛，嚣张都靠武器。 赤手空拳就缩成蚂蚁。 不用麻烦了，不用麻烦了。 不用麻烦，不用麻烦了，不用麻烦了。
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab-item`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab-item`),o(`>`)]),o(`
      你们一起上，我在赶时间。 每天决斗观众都累了，英雄也累了。 不用麻烦了，不用麻烦了。
      副歌不长你们有几个，一起上好了。 正义呼唤我，美女需要我。 牛仔很忙的。
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab-item`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tabs-items`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,k,[r(`h3`,A,[a(q,{to:`#kai1qi3nian2xing4bu4ju2`},{default:n(()=>[...l[29]||=[o(`#`,-1)]]),_:1}),l[30]||=o(`开启粘性布局`,-1)]),a(J,null,{default:n(()=>[...l[31]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` active = ref(`),r(`span`,{class:`hljs-number`},`0`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"sticky-example"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tabs`),o(`
      `),r(`span`,{class:`hljs-attr`},`sticky`),o(`
      `),r(`span`,{class:`hljs-attr`},`elevation`),o(`
      `),r(`span`,{class:`hljs-attr`},`color`),o(`=`),r(`span`,{class:`hljs-string`},`"var(--color-primary)"`),o(`
      `),r(`span`,{class:`hljs-attr`},`active-color`),o(`=`),r(`span`,{class:`hljs-string`},`"var(--color-on-primary)"`),o(`
      `),r(`span`,{class:`hljs-attr`},`inactive-color`),o(`=`),r(`span`,{class:`hljs-string`},`"var(--color-on-info)"`),o(`
      `),r(`span`,{class:`hljs-attr`},`v-model:active`),o(`=`),r(`span`,{class:`hljs-string`},`"active"`),o(`
    >`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`选项1`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`选项2`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`选项3`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tabs`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),r(`span`,{class:`css`},[o(`
`),r(`span`,{class:`hljs-selector-class`},`.sticky-example`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`height`),o(`: `),r(`span`,{class:`hljs-number`},`200vh`),o(`;
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,j,[r(`h3`,M,[a(q,{to:`#zhi3shi4qi4wei4zhi4fan3zhuan3`},{default:n(()=>[...l[32]||=[o(`#`,-1)]]),_:1}),l[33]||=o(`指示器位置反转`,-1)]),a(J,null,{default:n(()=>[...l[34]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` active = ref(`),r(`span`,{class:`hljs-number`},`0`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tabs`),o(`
    `),r(`span`,{class:`hljs-attr`},`elevation`),o(`
    `),r(`span`,{class:`hljs-attr`},`indicator-position`),o(`=`),r(`span`,{class:`hljs-string`},`"reverse"`),o(`
    `),r(`span`,{class:`hljs-attr`},`color`),o(`=`),r(`span`,{class:`hljs-string`},`"var(--color-primary)"`),o(`
    `),r(`span`,{class:`hljs-attr`},`active-color`),o(`=`),r(`span`,{class:`hljs-string`},`"var(--color-on-primary)"`),o(`
    `),r(`span`,{class:`hljs-attr`},`inactive-color`),o(`=`),r(`span`,{class:`hljs-string`},`"var(--color-on-info)"`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model:active`),o(`=`),r(`span`,{class:`hljs-string`},`"active"`),o(`
  >`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`选项1`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`选项2`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`选项3`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tabs`),o(`>`)]),o(`

  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tabs`),o(`
    `),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"tabs-example-vertical"`),o(`
    `),r(`span`,{class:`hljs-attr`},`elevation`),o(`
    `),r(`span`,{class:`hljs-attr`},`indicator-position`),o(`=`),r(`span`,{class:`hljs-string`},`"reverse"`),o(`
    `),r(`span`,{class:`hljs-attr`},`layout-direction`),o(`=`),r(`span`,{class:`hljs-string`},`"vertical"`),o(`
    `),r(`span`,{class:`hljs-attr`},`color`),o(`=`),r(`span`,{class:`hljs-string`},`"var(--color-primary)"`),o(`
    `),r(`span`,{class:`hljs-attr`},`active-color`),o(`=`),r(`span`,{class:`hljs-string`},`"var(--color-on-primary)"`),o(`
    `),r(`span`,{class:`hljs-attr`},`inactive-color`),o(`=`),r(`span`,{class:`hljs-string`},`"var(--color-on-info)"`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model:active`),o(`=`),r(`span`,{class:`hljs-string`},`"active"`),o(`
  >`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`选项1`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`选项2`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`选项3`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tabs`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),r(`span`,{class:`css`},[o(`
`),r(`span`,{class:`hljs-selector-class`},`.tabs-example-vertical`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`width`),o(`: `),r(`span`,{class:`hljs-number`},`80px`),o(),r(`span`,{class:`hljs-meta`},`!important`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`height`),o(`: `),r(`span`,{class:`hljs-number`},`120px`),o(),r(`span`,{class:`hljs-meta`},`!important`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`margin-top`),o(`: `),r(`span`,{class:`hljs-number`},`20px`),o(`;
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),l[51]||=r(`h2`,null,`API`,-1),r(`div`,N,[r(`h3`,P,[a(q,{to:`#shu3xing4`},{default:n(()=>[...l[35]||=[o(`#`,-1)]]),_:1}),l[36]||=o(`属性`,-1)]),l[37]||=s(`<h4>Tabs Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:active</code></td><td>激活的选项卡标识, 优先匹配 name，其次是 index</td><td><em>string</em></td><td><code>default</code></td></tr><tr><td><code>layout-direction</code></td><td>选项卡组的布局方向，可选值为 <code>horizontal</code> <code>vertical</code></td><td><em>string</em></td><td><code>horizontal</code></td></tr><tr><td><code>item-direction</code></td><td>选项卡的布局方向，可选值为 <code>horizontal</code> <code>vertical</code></td><td><em>string</em></td><td><code>horizontal</code></td></tr><tr><td><code>fixed-bottom</code></td><td>是否固定在窗口底部, 可用做底部导航</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>color</code></td><td>选项卡的背景颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>active-color</code></td><td>选项卡激活的主要颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>inactive-color</code></td><td>选项卡未激活的主要颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>disabled-color</code></td><td>选项卡禁用时的主要颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>indicator-color</code></td><td>选项卡激活指示器的颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>indicator-size</code></td><td>选项卡激活指示器的尺寸</td><td><em>string | number</em></td><td><code>2px</code></td></tr><tr><td><code>elevation</code></td><td>海拔高度，可选值为 <code>true</code> <code>false</code> 和 <code>0-24</code> 的等级</td><td><em>string | number | boolean</em></td><td><code>false</code></td></tr><tr><td><code>sticky</code></td><td>是否启用粘性布局</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>sticky-css-mode</code></td><td>是否启用粘性布局的原生 css sticky 模式</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>sticky-z-index</code></td><td>粘性布局的层级</td><td><em>number</em></td><td><code>10</code></td></tr><tr><td><code>safe-area</code></td><td>是否开启底部安全区适配</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>offset-top</code></td><td>吸顶距离</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>scrollable</code></td><td>是否开启滚动，可选值为 <code>auto</code> <code>always</code></td><td><em>string</em></td><td><code>auto</code></td></tr><tr><td><code>indicator-position</code></td><td>选项卡激活指示器的位置，可选值为 <code>normal</code> <code>reverse</code></td><td><em>string</em></td><td><code>normal</code></td></tr></tbody></table><h4>Tab Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>name</code></td><td>选项卡的名字</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用选项卡</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code></td><td>是否启用水波效果</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table><h4>TabsItems Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:active</code></td><td>激活的选项卡的标识</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>can-swipe</code></td><td>是否允许滑动切换</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>animated</code></td><td>是否启用内容切换动画</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>loop</code></td><td>是否允许循环切换</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table><h4>TabItem Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>name</code></td><td>视图的名字</td><td><em>string | number</em></td><td><code>-</code></td></tr></tbody></table>`,8)]),r(`div`,F,[r(`h3`,I,[a(q,{to:`#fang1fa3`},{default:n(()=>[...l[38]||=[o(`#`,-1)]]),_:1}),l[39]||=o(`方法`,-1)]),l[40]||=s(`<h4>Tabs Methods</h4><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>resize</code></td><td>产生位置大小变化时可以调用此方法重绘选项卡组</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>resizeSticky</code></td><td>产生位置大小变化时可以调用此方法重绘粘性布局</td><td><code>-</code></td><td><code>Promise&lt;void&gt;</code></td></tr></tbody></table><h4>TabsItems Methods</h4><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>getSwipe</code></td><td>获取 <code>swipe</code> 组件实例</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>`,4)]),r(`div`,L,[r(`h3`,R,[a(q,{to:`#shi4jian4`},{default:n(()=>[...l[41]||=[o(`#`,-1)]]),_:1}),l[42]||=o(`事件`,-1)]),l[43]||=s(`<h4>Tabs Events</h4><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>click</code></td><td>点击选项卡时触发, 在选项卡 <code>disabled</code> 状态为 <code>true</code> 时不触发</td><td><code>active: string | number</code></td></tr><tr><td><code>change</code></td><td>切换选项卡时触发</td><td><code>active: string | number</code></td></tr></tbody></table><h4>Tab Events</h4><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>click</code></td><td>点击选项卡时触发, 在 <code>disabled</code> 状态为 <code>true</code> 时不触发</td><td><code>active: string | number</code> <br> <code>event: Event</code></td></tr></tbody></table>`,4)]),r(`div`,z,[r(`h3`,B,[a(q,{to:`#cha1cao2`},{default:n(()=>[...l[44]||=[o(`#`,-1)]]),_:1}),l[45]||=o(`插槽`,-1)]),l[46]||=s(`<h4>Tabs Slots</h4><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>选项卡组的内容</td><td><code>-</code></td></tr></tbody></table><h4>Tab Slots</h4><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>选项卡内容</td><td><code>-</code></td></tr></tbody></table><h4>TabsItems Slots</h4><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>视图组的内容</td><td><code>-</code></td></tr></tbody></table><h4>TabItem Slots</h4><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>视图的内容</td><td><code>-</code></td></tr></tbody></table>`,8)]),r(`div`,V,[r(`h3`,H,[a(q,{to:`#yang4shi4bian4liang4`},{default:n(()=>[...l[47]||=[o(`#`,-1)]]),_:1}),l[48]||=o(`样式变量`,-1)]),l[49]||=s(`<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><h4>Tabs Variables</h4><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--tabs-item-horizontal-height</code></td><td><code>44px</code></td></tr><tr><td><code>--tabs-item-vertical-height</code></td><td><code>66px</code></td></tr><tr><td><code>--tabs-radius</code></td><td><code>2px</code></td></tr><tr><td><code>--tabs-padding</code></td><td><code>12px</code></td></tr><tr><td><code>--tabs-indicator-size</code></td><td><code>2px</code></td></tr><tr><td><code>--tabs-indicator-border-radius</code></td><td><code>0</code></td></tr><tr><td><code>--tabs-indicator-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--tabs-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--tabs-indicator-inner-size</code></td><td><code>100%</code></td></tr></tbody></table><h4>Tab Variables</h4><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--tab-padding</code></td><td><code>12px</code></td></tr><tr><td><code>--tab-active-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--tab-inactive-color</code></td><td><code>#646566</code></td></tr><tr><td><code>--tab-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--tab-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--tab-font-weight</code></td><td><code>400</code></td></tr><tr><td><code>--tab-active-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--tab-active-font-weight</code></td><td><code>400</code></td></tr></tbody></table>`,5)])])}var W=c(l,[[`render`,U]]);export{W as default};