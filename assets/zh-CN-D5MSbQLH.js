import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s,m as c}from"./runtime-core.esm-bundler-DUghkl6b.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`jie4shao4`},p={class:`card`},m={id:`ji1ben3shi3yong4`},h={class:`card`},g={id:`shui3bo1wen2`},_={class:`card`},v={id:`shou3feng1qin2`},y={class:`card`},b={id:`cai4dan1fen1zu3`},x={class:`card`},S={id:`zi4duan4ying4she4`},C={class:`card`},w={id:`jin4yong4`},T={class:`card`},E={id:`dong4tai4xian3shi4`},D={class:`card`},O={id:`cha1cao2`},k={class:`card`},A={id:`zi4ding4yi4suo1jin4`},j={class:`card`},M={id:`zi4ding4yi4xuan4ran3`},N={class:`card`},P={id:`API`},F={class:`card`},I={id:`cha1cao2`},L={class:`card`},R={id:`shi4jian4`},z={class:`card`},B={id:`yang4shi4bian4liang4`};function V(e,l,V,H,U,W){let G=n(`router-link`),K=n(`var-site-code-example`);return r(),a(`div`,u,[l[46]||=i(`h1`,null,`TreeMenu 树形菜单`,-1),i(`div`,d,[i(`h3`,f,[o(G,{to:`#jie4shao4`},{default:t(()=>[...l[0]||=[s(`#`,-1)]]),_:1}),l[1]||=s(`介绍`,-1)]),l[2]||=i(`p`,null,`多级折叠菜单，常用作侧边导航栏。`,-1)]),i(`div`,p,[i(`h3`,m,[o(G,{to:`#ji1ben3shi3yong4`},{default:t(()=>[...l[3]||=[s(`#`,-1)]]),_:1}),l[4]||=s(`基本使用`,-1)]),o(K,null,{default:t(()=>[...l[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` active = ref(`),i(`span`,{class:`hljs-string`},`'overview'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` options = ref([
  {
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'overview'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'概览'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'home'`),s(`,
  },
  {
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'workspace'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'工作台'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'notebook'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`children`),s(`: [
      {
        `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'projects'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'项目'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'star'`),s(`,
      },
      {
        `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'tasks'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'任务'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'check'`),s(`,
      },
    ],
  },
  {
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'settings'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'设置'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'cog'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`children`),s(`: [
      {
        `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'profile'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'个人资料'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'account-circle'`),s(`,
      },
      {
        `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'security'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'安全'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'warning'`),s(`,
      },
    ],
  },
])
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tree-menu`),s(),i(`span`,{class:`hljs-attr`},`v-model:active`),s(`=`),i(`span`,{class:`hljs-string`},`"active"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options"`),s(` />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,h,[i(`h3`,g,[o(G,{to:`#shui3bo1wen2`},{default:t(()=>[...l[6]||=[s(`#`,-1)]]),_:1}),l[7]||=s(`水波纹`,-1)]),o(K,null,{default:t(()=>[...l[8]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` active = ref(`),i(`span`,{class:`hljs-string`},`'overview'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` options = ref([
  {
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'overview'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'概览'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'home'`),s(`,
  },
  {
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'workspace'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'工作台'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'notebook'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`children`),s(`: [
      { `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'projects'`),s(`, `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'项目'`),s(`, `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'star'`),s(` },
      { `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'tasks'`),s(`, `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'任务'`),s(`, `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'check'`),s(` },
    ],
  },
])
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tree-menu`),s(),i(`span`,{class:`hljs-attr`},`v-model:active`),s(`=`),i(`span`,{class:`hljs-string`},`"active"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options"`),s(),i(`span`,{class:`hljs-attr`},`ripple`),s(` />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,_,[i(`h3`,v,[o(G,{to:`#shou3feng1qin2`},{default:t(()=>[...l[9]||=[s(`#`,-1)]]),_:1}),l[10]||=s(`手风琴`,-1)]),l[12]||=i(`p`,null,`同级菜单只允许展开一个。`,-1),o(K,null,{default:t(()=>[...l[11]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` active = ref(`),i(`span`,{class:`hljs-string`},`'projects'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` options = ref([
  {
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'overview'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'概览'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'home'`),s(`,
  },
  {
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'workspace'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'工作台'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'notebook'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`children`),s(`: [
      { `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'projects'`),s(`, `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'项目'`),s(`, `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'star'`),s(` },
      { `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'tasks'`),s(`, `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'任务'`),s(`, `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'check'`),s(` },
    ],
  },
  {
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'settings'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'设置'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'cog'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`children`),s(`: [
      { `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'profile'`),s(`, `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'个人资料'`),s(`, `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'account-circle'`),s(` },
      { `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'security'`),s(`, `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'安全'`),s(`, `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'warning'`),s(` },
    ],
  },
])
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tree-menu`),s(),i(`span`,{class:`hljs-attr`},`v-model:active`),s(`=`),i(`span`,{class:`hljs-string`},`"active"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options"`),s(),i(`span`,{class:`hljs-attr`},`accordion`),s(` />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,y,[i(`h3`,b,[o(G,{to:`#cai4dan1fen1zu3`},{default:t(()=>[...l[13]||=[s(`#`,-1)]]),_:1}),l[14]||=s(`菜单分组`,-1)]),o(K,null,{default:t(()=>[...l[15]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` active = ref(`),i(`span`,{class:`hljs-string`},`'overview'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` options = ref([
  {
    `),i(`span`,{class:`hljs-attr`},`type`),s(`: `),i(`span`,{class:`hljs-string`},`'group'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'main'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'主要'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`children`),s(`: [
      { `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'overview'`),s(`, `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'概览'`),s(`, `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'home'`),s(` },
      { `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'workspace'`),s(`, `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'工作台'`),s(`, `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'notebook'`),s(` },
    ],
  },
  {
    `),i(`span`,{class:`hljs-attr`},`type`),s(`: `),i(`span`,{class:`hljs-string`},`'divider'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'main-divider'`),s(`,
  },
  {
    `),i(`span`,{class:`hljs-attr`},`type`),s(`: `),i(`span`,{class:`hljs-string`},`'group'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'management'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'管理'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`children`),s(`: [
      { `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'settings'`),s(`, `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'设置'`),s(`, `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'cog'`),s(` },
      { `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'security'`),s(`, `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'安全'`),s(`, `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'warning'`),s(` },
    ],
  },
])
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tree-menu`),s(),i(`span`,{class:`hljs-attr`},`v-model:active`),s(`=`),i(`span`,{class:`hljs-string`},`"active"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options"`),s(` />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,x,[i(`h3`,S,[o(G,{to:`#zi4duan4ying4she4`},{default:t(()=>[...l[16]||=[s(`#`,-1)]]),_:1}),l[17]||=s(`字段映射`,-1)]),o(K,null,{default:t(()=>[...l[18]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` active = ref(`),i(`span`,{class:`hljs-string`},`'users'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` options = ref([
  {
    `),i(`span`,{class:`hljs-attr`},`key`),s(`: `),i(`span`,{class:`hljs-string`},`'system'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`title`),s(`: `),i(`span`,{class:`hljs-string`},`'系统'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`iconName`),s(`: `),i(`span`,{class:`hljs-string`},`'cog'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`items`),s(`: [
      { `),i(`span`,{class:`hljs-attr`},`key`),s(`: `),i(`span`,{class:`hljs-string`},`'users'`),s(`, `),i(`span`,{class:`hljs-attr`},`title`),s(`: `),i(`span`,{class:`hljs-string`},`'用户'`),s(`, `),i(`span`,{class:`hljs-attr`},`iconName`),s(`: `),i(`span`,{class:`hljs-string`},`'account-circle'`),s(` },
      { `),i(`span`,{class:`hljs-attr`},`key`),s(`: `),i(`span`,{class:`hljs-string`},`'roles'`),s(`, `),i(`span`,{class:`hljs-attr`},`title`),s(`: `),i(`span`,{class:`hljs-string`},`'角色'`),s(`, `),i(`span`,{class:`hljs-attr`},`iconName`),s(`: `),i(`span`,{class:`hljs-string`},`'information'`),s(` },
    ],
  },
])
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tree-menu`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model:active`),s(`=`),i(`span`,{class:`hljs-string`},`"active"`),s(`
    `),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options"`),s(`
    `),i(`span`,{class:`hljs-attr`},`value-key`),s(`=`),i(`span`,{class:`hljs-string`},`"key"`),s(`
    `),i(`span`,{class:`hljs-attr`},`label-key`),s(`=`),i(`span`,{class:`hljs-string`},`"title"`),s(`
    `),i(`span`,{class:`hljs-attr`},`icon-key`),s(`=`),i(`span`,{class:`hljs-string`},`"iconName"`),s(`
    `),i(`span`,{class:`hljs-attr`},`children-key`),s(`=`),i(`span`,{class:`hljs-string`},`"items"`),s(`
  />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,C,[i(`h3`,w,[o(G,{to:`#jin4yong4`},{default:t(()=>[...l[19]||=[s(`#`,-1)]]),_:1}),l[20]||=s(`禁用`,-1)]),o(K,null,{default:t(()=>[...l[21]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` active = ref(`),i(`span`,{class:`hljs-string`},`'profile'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` options = ref([
  {
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'settings'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'设置'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'cog'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`children`),s(`: [
      { `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'profile'`),s(`, `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'个人资料'`),s(`, `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'account-circle'`),s(` },
      { `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'security'`),s(`, `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'安全'`),s(`, `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'warning'`),s(`, `),i(`span`,{class:`hljs-attr`},`disabled`),s(`: `),i(`span`,{class:`hljs-literal`},`true`),s(` },
    ],
  },
  {
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'archived'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'归档'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'delete'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`disabled`),s(`: `),i(`span`,{class:`hljs-literal`},`true`),s(`,
  },
])
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tree-menu`),s(),i(`span`,{class:`hljs-attr`},`v-model:active`),s(`=`),i(`span`,{class:`hljs-string`},`"active"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options"`),s(` />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,T,[i(`h3`,E,[o(G,{to:`#dong4tai4xian3shi4`},{default:t(()=>[...l[22]||=[s(`#`,-1)]]),_:1}),l[23]||=s(`动态显示`,-1)]),o(K,null,{default:t(()=>[...l[24]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { computed, ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` active = ref(`),i(`span`,{class:`hljs-string`},`'settings'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` showSecurity = ref(`),i(`span`,{class:`hljs-literal`},`true`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` options = computed(`),i(`span`,{class:`hljs-function`},`() =>`),s(` [
  {
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'settings'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'设置'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'cog'`),s(`,
  },
  {
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'security'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'安全'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'warning'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`show`),s(`: showSecurity.value,
  },
])
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-switch`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"showSecurity"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(` />`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tree-menu`),s(),i(`span`,{class:`hljs-attr`},`v-model:active`),s(`=`),i(`span`,{class:`hljs-string`},`"active"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options"`),s(` />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,D,[i(`h3`,O,[o(G,{to:`#cha1cao2`},{default:t(()=>[...l[25]||=[s(`#`,-1)]]),_:1}),l[26]||=s(`插槽`,-1)]),o(K,null,{default:t(()=>[...l[27]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` active = ref(`),i(`span`,{class:`hljs-string`},`'overview'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` options = ref([
  {
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'overview'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'概览'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'home'`),s(`,
  },
  {
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'workspace'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'工作台'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'notebook'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`children`),s(`: [
      { `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'projects'`),s(`, `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'项目'`),s(`, `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'star'`),s(` },
      { `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'tasks'`),s(`, `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'任务'`),s(`, `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'check'`),s(` },
    ],
  },
])
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tree-menu`),s(),i(`span`,{class:`hljs-attr`},`v-model:active`),s(`=`),i(`span`,{class:`hljs-string`},`"active"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`start`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`fab`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"plus"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`end`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`fab`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"plus"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tree-menu`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,k,[i(`h3`,A,[o(G,{to:`#zi4ding4yi4suo1jin4`},{default:t(()=>[...l[28]||=[s(`#`,-1)]]),_:1}),l[29]||=s(`自定义缩进`,-1)]),o(K,null,{default:t(()=>[...l[30]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` active = ref(`),i(`span`,{class:`hljs-string`},`'projects'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` options = ref([
  {
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'overview'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'概览'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'home'`),s(`,
  },
  {
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'workspace'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'工作台'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'notebook'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`children`),s(`: [
      { `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'projects'`),s(`, `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'项目'`),s(`, `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'star'`),s(` },
      { `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'tasks'`),s(`, `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'任务'`),s(`, `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'check'`),s(` },
    ],
  },
])
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tree-menu`),s(),i(`span`,{class:`hljs-attr`},`v-model:active`),s(`=`),i(`span`,{class:`hljs-string`},`"active"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options"`),s(),i(`span`,{class:`hljs-attr`},`indent`),s(`=`),i(`span`,{class:`hljs-string`},`"32px"`),s(` />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,j,[i(`h3`,M,[o(G,{to:`#zi4ding4yi4xuan4ran3`},{default:t(()=>[...l[31]||=[s(`#`,-1)]]),_:1}),l[32]||=s(`自定义渲染`,-1)]),o(K,null,{default:t(()=>[...l[33]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Badge `),i(`span`,{class:`hljs-keyword`},`as`),s(` VarBadge, Tooltip `),i(`span`,{class:`hljs-keyword`},`as`),s(` VarTooltip } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { h, ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { RouterLink } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue-router'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` active = ref(`),i(`span`,{class:`hljs-string`},`'tooltip'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` options = ref([
  {
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'workspace'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'工作台'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'notebook'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`children`),s(`: [
      {
        `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'custom-label-icon'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-function`},`() =>`),s(`
          h(`),i(`span`,{class:`hljs-string`},`'span'`),s(`, { `),i(`span`,{class:`hljs-attr`},`style`),s(`: { `),i(`span`,{class:`hljs-attr`},`display`),s(`: `),i(`span`,{class:`hljs-string`},`'inline-flex'`),s(`, `),i(`span`,{class:`hljs-attr`},`alignItems`),s(`: `),i(`span`,{class:`hljs-string`},`'center'`),s(` } }, [
            `),i(`span`,{class:`hljs-string`},`'自定义文字图标'`),s(`,
            h(VarBadge, { `),i(`span`,{class:`hljs-attr`},`style`),s(`: { `),i(`span`,{class:`hljs-attr`},`marginLeft`),s(`: `),i(`span`,{class:`hljs-string`},`'12px'`),s(` }, `),i(`span`,{class:`hljs-attr`},`type`),s(`: `),i(`span`,{class:`hljs-string`},`'primary'`),s(`, `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-number`},`12`),s(` }),
          ]),
        `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-function`},`() =>`),s(` h(VarBadge, { `),i(`span`,{class:`hljs-attr`},`type`),s(`: `),i(`span`,{class:`hljs-string`},`'primary'`),s(`, `),i(`span`,{class:`hljs-attr`},`dot`),s(`: `),i(`span`,{class:`hljs-literal`},`true`),s(` }),
      },
      {
        `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'link'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'链接菜单'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'github'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`render`),s(`: `),i(`span`,{class:`hljs-function`},[s(`(`),i(`span`,{class:`hljs-params`},`{ node }`),s(`) =>`)]),s(`
          h(
            `),i(`span`,{class:`hljs-string`},`'a'`),s(`,
            {
              `),i(`span`,{class:`hljs-attr`},`href`),s(`: `),i(`span`,{class:`hljs-string`},`'https://github.com/varletjs/varlet'`),s(`,
              `),i(`span`,{class:`hljs-attr`},`target`),s(`: `),i(`span`,{class:`hljs-string`},`'_blank'`),s(`,
              `),i(`span`,{class:`hljs-attr`},`rel`),s(`: `),i(`span`,{class:`hljs-string`},`'noreferrer'`),s(`,
              `),i(`span`,{class:`hljs-attr`},`style`),s(`: { `),i(`span`,{class:`hljs-attr`},`display`),s(`: `),i(`span`,{class:`hljs-string`},`'block'`),s(`, `),i(`span`,{class:`hljs-attr`},`color`),s(`: `),i(`span`,{class:`hljs-string`},`'inherit'`),s(`, `),i(`span`,{class:`hljs-attr`},`textDecoration`),s(`: `),i(`span`,{class:`hljs-string`},`'none'`),s(` },
            },
            node,
          ),
      },
      {
        `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'tooltip'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'悬浮提示'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'check'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`render`),s(`: `),i(`span`,{class:`hljs-function`},[s(`(`),i(`span`,{class:`hljs-params`},`{ node }`),s(`) =>`)]),s(`
          h(
            VarTooltip,
            { `),i(`span`,{class:`hljs-attr`},`content`),s(`: `),i(`span`,{class:`hljs-string`},`'悬浮提示'`),s(`, `),i(`span`,{class:`hljs-attr`},`placement`),s(`: `),i(`span`,{class:`hljs-string`},`'bottom'`),s(`, `),i(`span`,{class:`hljs-attr`},`style`),s(`: { `),i(`span`,{class:`hljs-attr`},`display`),s(`: `),i(`span`,{class:`hljs-string`},`'block'`),s(`, `),i(`span`,{class:`hljs-attr`},`width`),s(`: `),i(`span`,{class:`hljs-string`},`'100%'`),s(` } },
            { `),i(`span`,{class:`hljs-attr`},`default`),s(`: `),i(`span`,{class:`hljs-function`},`() =>`),s(` node },
          ),
      },
      {
        `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'router-link'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'路由链接'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'bookmark'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`render`),s(`: `),i(`span`,{class:`hljs-function`},[s(`(`),i(`span`,{class:`hljs-params`},`{ node }`),s(`) =>`)]),s(`
          h(
            RouterLink,
            {
              `),i(`span`,{class:`hljs-attr`},`to`),s(`: `),i(`span`,{class:`hljs-string`},`'/button'`),s(`,
              `),i(`span`,{class:`hljs-attr`},`style`),s(`: { `),i(`span`,{class:`hljs-attr`},`display`),s(`: `),i(`span`,{class:`hljs-string`},`'block'`),s(`, `),i(`span`,{class:`hljs-attr`},`color`),s(`: `),i(`span`,{class:`hljs-string`},`'inherit'`),s(`, `),i(`span`,{class:`hljs-attr`},`textDecoration`),s(`: `),i(`span`,{class:`hljs-string`},`'none'`),s(` },
            },
            { `),i(`span`,{class:`hljs-attr`},`default`),s(`: `),i(`span`,{class:`hljs-function`},`() =>`),s(` node },
          ),
      },
    ],
  },
])
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tree-menu`),s(),i(`span`,{class:`hljs-attr`},`v-model:active`),s(`=`),i(`span`,{class:`hljs-string`},`"active"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options"`),s(` />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,N,[i(`h3`,P,[o(G,{to:`#API`},{default:t(()=>[...l[34]||=[s(`#`,-1)]]),_:1}),l[35]||=s(`API`,-1)]),l[36]||=c(`<h4>TreeMenu Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:active</code></td><td>激活菜单项的值</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>options</code></td><td>菜单选项。可选择或可展开的选项必须提供 <code>value</code>，或提供由 <code>value-key</code> 指定的等价字段</td><td><em>TreeMenuOption[]</em></td><td><code>[]</code></td></tr><tr><td><code>v-model:expanded-values</code></td><td>展开菜单项的值集合</td><td><em>Array&lt;string | number&gt;</em></td><td><code>-</code></td></tr><tr><td><code>value-key</code></td><td>选项值字段。当选项不使用 <code>value</code> 字段时，必须通过该字段指定唯一值来源</td><td><em>string</em></td><td><code>&#39;value&#39;</code></td></tr><tr><td><code>label-key</code></td><td>选项标签字段</td><td><em>string</em></td><td><code>&#39;label&#39;</code></td></tr><tr><td><code>icon-key</code></td><td>选项图标字段</td><td><em>string</em></td><td><code>&#39;icon&#39;</code></td></tr><tr><td><code>children-key</code></td><td>子选项字段</td><td><em>string</em></td><td><code>&#39;children&#39;</code></td></tr><tr><td><code>accordion</code></td><td>是否只允许同级一个选项展开</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>indent</code></td><td>每一级缩进</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>ripple</code></td><td>是否开启水波纹</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>bordered</code></td><td>是否显示右边框</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用整个菜单</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table><h4>TreeMenuOption</h4><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>type</code></td><td>选项类型。<code>group</code> 渲染分组标题和子选项，<code>divider</code> 渲染分割线。</td><td><em>&#39;group&#39; | &#39;divider&#39;</em></td><td><code>-</code></td></tr><tr><td><code>value</code></td><td>选项值。可选择或可展开的选项必须提供，或提供由 <code>value-key</code> 指定的等价字段；<code>group</code> 和 <code>divider</code> 可省略</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>label</code></td><td>选项标签</td><td><em>string | VNode | ((option, active) =&gt; VNodeChild)</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>选项图标</td><td><em>string | VNode | ((option, active) =&gt; VNodeChild)</em></td><td><code>-</code></td></tr><tr><td><code>render</code></td><td>自定义选项渲染</td><td><em>({ node }, option, active) =&gt; VNodeChild</em></td><td><code>-</code></td></tr><tr><td><code>namespace</code></td><td>图标命名空间</td><td><em>string</em></td><td><code>var-icon</code></td></tr><tr><td><code>show</code></td><td>是否显示当前选项</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用当前选项</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>children</code></td><td>子选项</td><td><em>TreeMenuOption[]</em></td><td><code>-</code></td></tr></tbody></table>`,4)]),i(`div`,F,[i(`h3`,I,[o(G,{to:`#cha1cao2`},{default:t(()=>[...l[37]||=[s(`#`,-1)]]),_:1}),l[38]||=s(`插槽`,-1)]),l[39]||=c(`<table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>start</code></td><td>头部内容</td><td><code>-</code></td></tr><tr><td><code>end</code></td><td>尾部内容</td><td><code>-</code></td></tr></tbody></table>`,1)]),i(`div`,L,[i(`h3`,R,[o(G,{to:`#shi4jian4`},{default:t(()=>[...l[40]||=[s(`#`,-1)]]),_:1}),l[41]||=s(`事件`,-1)]),l[42]||=i(`table`,null,[i(`thead`,null,[i(`tr`,null,[i(`th`,null,`事件名`),i(`th`,null,`说明`),i(`th`,null,`回调参数`)])]),i(`tbody`,null,[i(`tr`,null,[i(`td`,null,[i(`code`,null,`change`)]),i(`td`,null,`激活菜单项变化时触发`),i(`td`,null,[i(`code`,null,`active: string | number, option: TreeMenuOption`)])])])],-1)]),i(`div`,z,[i(`h3`,B,[o(G,{to:`#yang4shi4bian4liang4`},{default:t(()=>[...l[43]||=[s(`#`,-1)]]),_:1}),l[44]||=s(`样式变量`,-1)]),l[45]||=c(`<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--tree-menu-background</code></td><td><code>var(--color-surface-container-high)</code></td></tr><tr><td><code>--tree-menu-border-color</code></td><td><code>var(--color-outline)</code></td></tr><tr><td><code>--tree-menu-item-text-color</code></td><td><code>var(--color-text)</code></td></tr><tr><td><code>--tree-menu-padding</code></td><td><code>8px 0</code></td></tr><tr><td><code>--tree-menu-item-gap</code></td><td><code>0px</code></td></tr><tr><td><code>--tree-menu-item-height</code></td><td><code>40px</code></td></tr><tr><td><code>--tree-menu-item-padding</code></td><td><code>0 16px</code></td></tr><tr><td><code>--tree-menu-item-border-radius</code></td><td><code>0</code></td></tr><tr><td><code>--tree-menu-item-indent</code></td><td><code>16px</code></td></tr><tr><td><code>--tree-menu-item-icon-size</code></td><td><code>22px</code></td></tr><tr><td><code>--tree-menu-item-icon-margin-right</code></td><td><code>24px</code></td></tr><tr><td><code>--tree-menu-item-label-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--tree-menu-item-label-line-height</code></td><td><code>1.5</code></td></tr><tr><td><code>--tree-menu-group-label-height</code></td><td><code>32px</code></td></tr><tr><td><code>--tree-menu-group-label-padding</code></td><td><code>0 16px</code></td></tr><tr><td><code>--tree-menu-group-label-color</code></td><td><code>var(--color-on-surface-variant)</code></td></tr><tr><td><code>--tree-menu-group-label-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--tree-menu-divider-margin</code></td><td><code>8px 0</code></td></tr><tr><td><code>--tree-menu-divider-color</code></td><td><code>rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--tree-menu-item-hover-background</code></td><td><code>rgba(85, 85, 85, 0.06)</code></td></tr><tr><td><code>--tree-menu-item-pressed-background</code></td><td><code>rgba(85, 85, 85, 0.1)</code></td></tr><tr><td><code>--tree-menu-item-active-background</code></td><td><code>hsla(var(--hsl-primary), 0.1)</code></td></tr><tr><td><code>--tree-menu-item-active-text-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--tree-menu-item-disabled-opacity</code></td><td><code>var(--opacity-disabled)</code></td></tr><tr><td><code>--tree-menu-item-indicator-border-radius</code></td><td><code>0</code></td></tr><tr><td><code>--tree-menu-item-indicator-active-transition-duration</code></td><td><code>0ms</code></td></tr><tr><td><code>--tree-menu-expand-icon-color</code></td><td><code>var(--color-on-surface-variant)</code></td></tr><tr><td><code>--tree-menu-expand-icon-size</code></td><td><code>20px</code></td></tr></tbody></table>`,2)])])}var H=e(l,[[`render`,V]]);export{H as default};