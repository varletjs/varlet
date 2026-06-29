import{G as e,L as t,N as n,c as r,d as i,g as a,h as o,m as s}from"./runtime-core.esm-bundler-5xw830oL.js";import{t as c}from"./_plugin-vue_export-helper-DAAOZMkq.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`jie4shao4`},p={class:`card`},m={id:`ji1ben3shi3yong4`},h={class:`card`},g={id:`shui3bo1wen2`},_={class:`card`},v={id:`shou3feng1qin2`},y={class:`card`},b={id:`cai4dan1fen1zu3`},x={class:`card`},S={id:`zi4duan4ying4she4`},C={class:`card`},w={id:`jin4yong4`},T={class:`card`},E={id:`dong4tai4xian3shi4`},D={class:`card`},O={id:`cha1cao2`},k={class:`card`},A={id:`zi4ding4yi4suo1jin4`},j={class:`card`},M={id:`zi4ding4yi4xuan4ran3`},N={class:`card`},P={id:`API`},F={class:`card`},I={id:`cha1cao2`},L={class:`card`},R={id:`shi4jian4`},z={class:`card`},B={id:`yang4shi4bian4liang4`};function V(c,l,V,H,U,W){let G=t(`router-link`),K=t(`var-site-code-example`);return n(),i(`div`,u,[l[46]||=r(`h1`,null,`TreeMenu 树形菜单`,-1),r(`div`,d,[r(`h3`,f,[a(G,{to:`#jie4shao4`},{default:e(()=>[...l[0]||=[o(`#`,-1)]]),_:1}),l[1]||=o(`介绍`,-1)]),l[2]||=r(`p`,null,`多级折叠菜单，常用作侧边导航栏。`,-1)]),r(`div`,p,[r(`h3`,m,[a(G,{to:`#ji1ben3shi3yong4`},{default:e(()=>[...l[3]||=[o(`#`,-1)]]),_:1}),l[4]||=o(`基本使用`,-1)]),a(K,null,{default:e(()=>[...l[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` active = ref(`),r(`span`,{class:`hljs-string`},`'overview'`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` options = ref([
  {
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'overview'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'概览'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'home'`),o(`,
  },
  {
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'workspace'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'工作台'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'notebook'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`children`),o(`: [
      {
        `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'projects'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'项目'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'star'`),o(`,
      },
      {
        `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'tasks'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'任务'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'check'`),o(`,
      },
    ],
  },
  {
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'settings'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'设置'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'cog'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`children`),o(`: [
      {
        `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'profile'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'个人资料'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'account-circle'`),o(`,
      },
      {
        `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'security'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'安全'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'warning'`),o(`,
      },
    ],
  },
])
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tree-menu`),o(),r(`span`,{class:`hljs-attr`},`v-model:active`),o(`=`),r(`span`,{class:`hljs-string`},`"active"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options"`),o(` />`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,h,[r(`h3`,g,[a(G,{to:`#shui3bo1wen2`},{default:e(()=>[...l[6]||=[o(`#`,-1)]]),_:1}),l[7]||=o(`水波纹`,-1)]),a(K,null,{default:e(()=>[...l[8]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` active = ref(`),r(`span`,{class:`hljs-string`},`'overview'`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` options = ref([
  {
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'overview'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'概览'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'home'`),o(`,
  },
  {
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'workspace'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'工作台'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'notebook'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`children`),o(`: [
      { `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'projects'`),o(`, `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'项目'`),o(`, `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'star'`),o(` },
      { `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'tasks'`),o(`, `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'任务'`),o(`, `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'check'`),o(` },
    ],
  },
])
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tree-menu`),o(),r(`span`,{class:`hljs-attr`},`v-model:active`),o(`=`),r(`span`,{class:`hljs-string`},`"active"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options"`),o(),r(`span`,{class:`hljs-attr`},`ripple`),o(` />`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,_,[r(`h3`,v,[a(G,{to:`#shou3feng1qin2`},{default:e(()=>[...l[9]||=[o(`#`,-1)]]),_:1}),l[10]||=o(`手风琴`,-1)]),l[12]||=r(`p`,null,`同级菜单只允许展开一个。`,-1),a(K,null,{default:e(()=>[...l[11]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` active = ref(`),r(`span`,{class:`hljs-string`},`'projects'`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` options = ref([
  {
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'overview'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'概览'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'home'`),o(`,
  },
  {
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'workspace'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'工作台'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'notebook'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`children`),o(`: [
      { `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'projects'`),o(`, `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'项目'`),o(`, `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'star'`),o(` },
      { `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'tasks'`),o(`, `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'任务'`),o(`, `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'check'`),o(` },
    ],
  },
  {
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'settings'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'设置'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'cog'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`children`),o(`: [
      { `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'profile'`),o(`, `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'个人资料'`),o(`, `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'account-circle'`),o(` },
      { `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'security'`),o(`, `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'安全'`),o(`, `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'warning'`),o(` },
    ],
  },
])
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tree-menu`),o(),r(`span`,{class:`hljs-attr`},`v-model:active`),o(`=`),r(`span`,{class:`hljs-string`},`"active"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options"`),o(),r(`span`,{class:`hljs-attr`},`accordion`),o(` />`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,y,[r(`h3`,b,[a(G,{to:`#cai4dan1fen1zu3`},{default:e(()=>[...l[13]||=[o(`#`,-1)]]),_:1}),l[14]||=o(`菜单分组`,-1)]),a(K,null,{default:e(()=>[...l[15]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` active = ref(`),r(`span`,{class:`hljs-string`},`'overview'`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` options = ref([
  {
    `),r(`span`,{class:`hljs-attr`},`type`),o(`: `),r(`span`,{class:`hljs-string`},`'group'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'main'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'主要'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`children`),o(`: [
      { `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'overview'`),o(`, `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'概览'`),o(`, `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'home'`),o(` },
      { `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'workspace'`),o(`, `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'工作台'`),o(`, `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'notebook'`),o(` },
    ],
  },
  {
    `),r(`span`,{class:`hljs-attr`},`type`),o(`: `),r(`span`,{class:`hljs-string`},`'divider'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'main-divider'`),o(`,
  },
  {
    `),r(`span`,{class:`hljs-attr`},`type`),o(`: `),r(`span`,{class:`hljs-string`},`'group'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'management'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'管理'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`children`),o(`: [
      { `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'settings'`),o(`, `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'设置'`),o(`, `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'cog'`),o(` },
      { `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'security'`),o(`, `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'安全'`),o(`, `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'warning'`),o(` },
    ],
  },
])
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tree-menu`),o(),r(`span`,{class:`hljs-attr`},`v-model:active`),o(`=`),r(`span`,{class:`hljs-string`},`"active"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options"`),o(` />`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,x,[r(`h3`,S,[a(G,{to:`#zi4duan4ying4she4`},{default:e(()=>[...l[16]||=[o(`#`,-1)]]),_:1}),l[17]||=o(`字段映射`,-1)]),a(K,null,{default:e(()=>[...l[18]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` active = ref(`),r(`span`,{class:`hljs-string`},`'users'`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` options = ref([
  {
    `),r(`span`,{class:`hljs-attr`},`key`),o(`: `),r(`span`,{class:`hljs-string`},`'system'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`title`),o(`: `),r(`span`,{class:`hljs-string`},`'系统'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`iconName`),o(`: `),r(`span`,{class:`hljs-string`},`'cog'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`items`),o(`: [
      { `),r(`span`,{class:`hljs-attr`},`key`),o(`: `),r(`span`,{class:`hljs-string`},`'users'`),o(`, `),r(`span`,{class:`hljs-attr`},`title`),o(`: `),r(`span`,{class:`hljs-string`},`'用户'`),o(`, `),r(`span`,{class:`hljs-attr`},`iconName`),o(`: `),r(`span`,{class:`hljs-string`},`'account-circle'`),o(` },
      { `),r(`span`,{class:`hljs-attr`},`key`),o(`: `),r(`span`,{class:`hljs-string`},`'roles'`),o(`, `),r(`span`,{class:`hljs-attr`},`title`),o(`: `),r(`span`,{class:`hljs-string`},`'角色'`),o(`, `),r(`span`,{class:`hljs-attr`},`iconName`),o(`: `),r(`span`,{class:`hljs-string`},`'information'`),o(` },
    ],
  },
])
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tree-menu`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model:active`),o(`=`),r(`span`,{class:`hljs-string`},`"active"`),o(`
    `),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options"`),o(`
    `),r(`span`,{class:`hljs-attr`},`value-key`),o(`=`),r(`span`,{class:`hljs-string`},`"key"`),o(`
    `),r(`span`,{class:`hljs-attr`},`label-key`),o(`=`),r(`span`,{class:`hljs-string`},`"title"`),o(`
    `),r(`span`,{class:`hljs-attr`},`icon-key`),o(`=`),r(`span`,{class:`hljs-string`},`"iconName"`),o(`
    `),r(`span`,{class:`hljs-attr`},`children-key`),o(`=`),r(`span`,{class:`hljs-string`},`"items"`),o(`
  />`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,C,[r(`h3`,w,[a(G,{to:`#jin4yong4`},{default:e(()=>[...l[19]||=[o(`#`,-1)]]),_:1}),l[20]||=o(`禁用`,-1)]),a(K,null,{default:e(()=>[...l[21]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` active = ref(`),r(`span`,{class:`hljs-string`},`'profile'`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` options = ref([
  {
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'settings'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'设置'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'cog'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`children`),o(`: [
      { `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'profile'`),o(`, `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'个人资料'`),o(`, `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'account-circle'`),o(` },
      { `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'security'`),o(`, `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'安全'`),o(`, `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'warning'`),o(`, `),r(`span`,{class:`hljs-attr`},`disabled`),o(`: `),r(`span`,{class:`hljs-literal`},`true`),o(` },
    ],
  },
  {
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'archived'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'归档'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'delete'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`disabled`),o(`: `),r(`span`,{class:`hljs-literal`},`true`),o(`,
  },
])
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tree-menu`),o(),r(`span`,{class:`hljs-attr`},`v-model:active`),o(`=`),r(`span`,{class:`hljs-string`},`"active"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options"`),o(` />`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,T,[r(`h3`,E,[a(G,{to:`#dong4tai4xian3shi4`},{default:e(()=>[...l[22]||=[o(`#`,-1)]]),_:1}),l[23]||=o(`动态显示`,-1)]),a(K,null,{default:e(()=>[...l[24]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { computed, ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` active = ref(`),r(`span`,{class:`hljs-string`},`'settings'`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` showSecurity = ref(`),r(`span`,{class:`hljs-literal`},`true`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` options = computed(`),r(`span`,{class:`hljs-function`},`() =>`),o(` [
  {
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'settings'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'设置'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'cog'`),o(`,
  },
  {
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'security'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'安全'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'warning'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`show`),o(`: showSecurity.value,
  },
])
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-switch`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"showSecurity"`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(` />`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tree-menu`),o(),r(`span`,{class:`hljs-attr`},`v-model:active`),o(`=`),r(`span`,{class:`hljs-string`},`"active"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options"`),o(` />`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,D,[r(`h3`,O,[a(G,{to:`#cha1cao2`},{default:e(()=>[...l[25]||=[o(`#`,-1)]]),_:1}),l[26]||=o(`插槽`,-1)]),a(K,null,{default:e(()=>[...l[27]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` active = ref(`),r(`span`,{class:`hljs-string`},`'overview'`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` options = ref([
  {
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'overview'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'概览'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'home'`),o(`,
  },
  {
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'workspace'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'工作台'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'notebook'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`children`),o(`: [
      { `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'projects'`),o(`, `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'项目'`),o(`, `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'star'`),o(` },
      { `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'tasks'`),o(`, `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'任务'`),o(`, `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'check'`),o(` },
    ],
  },
])
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tree-menu`),o(),r(`span`,{class:`hljs-attr`},`v-model:active`),o(`=`),r(`span`,{class:`hljs-string`},`"active"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`start`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`fab`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"plus"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`

    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`end`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`fab`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"plus"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tree-menu`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,k,[r(`h3`,A,[a(G,{to:`#zi4ding4yi4suo1jin4`},{default:e(()=>[...l[28]||=[o(`#`,-1)]]),_:1}),l[29]||=o(`自定义缩进`,-1)]),a(K,null,{default:e(()=>[...l[30]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` active = ref(`),r(`span`,{class:`hljs-string`},`'projects'`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` options = ref([
  {
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'overview'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'概览'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'home'`),o(`,
  },
  {
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'workspace'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'工作台'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'notebook'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`children`),o(`: [
      { `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'projects'`),o(`, `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'项目'`),o(`, `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'star'`),o(` },
      { `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'tasks'`),o(`, `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'任务'`),o(`, `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'check'`),o(` },
    ],
  },
])
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tree-menu`),o(),r(`span`,{class:`hljs-attr`},`v-model:active`),o(`=`),r(`span`,{class:`hljs-string`},`"active"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options"`),o(),r(`span`,{class:`hljs-attr`},`indent`),o(`=`),r(`span`,{class:`hljs-string`},`"32px"`),o(` />`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,j,[r(`h3`,M,[a(G,{to:`#zi4ding4yi4xuan4ran3`},{default:e(()=>[...l[31]||=[o(`#`,-1)]]),_:1}),l[32]||=o(`自定义渲染`,-1)]),a(K,null,{default:e(()=>[...l[33]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Badge `),r(`span`,{class:`hljs-keyword`},`as`),o(` VarBadge, Tooltip `),r(`span`,{class:`hljs-keyword`},`as`),o(` VarTooltip } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { h, ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { RouterLink } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue-router'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` active = ref(`),r(`span`,{class:`hljs-string`},`'tooltip'`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` options = ref([
  {
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'workspace'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'工作台'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'notebook'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`children`),o(`: [
      {
        `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'custom-label-icon'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-function`},`() =>`),o(`
          h(`),r(`span`,{class:`hljs-string`},`'span'`),o(`, { `),r(`span`,{class:`hljs-attr`},`style`),o(`: { `),r(`span`,{class:`hljs-attr`},`display`),o(`: `),r(`span`,{class:`hljs-string`},`'inline-flex'`),o(`, `),r(`span`,{class:`hljs-attr`},`alignItems`),o(`: `),r(`span`,{class:`hljs-string`},`'center'`),o(` } }, [
            `),r(`span`,{class:`hljs-string`},`'自定义文字图标'`),o(`,
            h(VarBadge, { `),r(`span`,{class:`hljs-attr`},`style`),o(`: { `),r(`span`,{class:`hljs-attr`},`marginLeft`),o(`: `),r(`span`,{class:`hljs-string`},`'12px'`),o(` }, `),r(`span`,{class:`hljs-attr`},`type`),o(`: `),r(`span`,{class:`hljs-string`},`'primary'`),o(`, `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-number`},`12`),o(` }),
          ]),
        `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-function`},`() =>`),o(` h(VarBadge, { `),r(`span`,{class:`hljs-attr`},`type`),o(`: `),r(`span`,{class:`hljs-string`},`'primary'`),o(`, `),r(`span`,{class:`hljs-attr`},`dot`),o(`: `),r(`span`,{class:`hljs-literal`},`true`),o(` }),
      },
      {
        `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'link'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'链接菜单'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'github'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`render`),o(`: `),r(`span`,{class:`hljs-function`},[o(`(`),r(`span`,{class:`hljs-params`},`{ node }`),o(`) =>`)]),o(`
          h(
            `),r(`span`,{class:`hljs-string`},`'a'`),o(`,
            {
              `),r(`span`,{class:`hljs-attr`},`href`),o(`: `),r(`span`,{class:`hljs-string`},`'https://github.com/varletjs/varlet'`),o(`,
              `),r(`span`,{class:`hljs-attr`},`target`),o(`: `),r(`span`,{class:`hljs-string`},`'_blank'`),o(`,
              `),r(`span`,{class:`hljs-attr`},`rel`),o(`: `),r(`span`,{class:`hljs-string`},`'noreferrer'`),o(`,
              `),r(`span`,{class:`hljs-attr`},`style`),o(`: { `),r(`span`,{class:`hljs-attr`},`display`),o(`: `),r(`span`,{class:`hljs-string`},`'block'`),o(`, `),r(`span`,{class:`hljs-attr`},`color`),o(`: `),r(`span`,{class:`hljs-string`},`'inherit'`),o(`, `),r(`span`,{class:`hljs-attr`},`textDecoration`),o(`: `),r(`span`,{class:`hljs-string`},`'none'`),o(` },
            },
            node,
          ),
      },
      {
        `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'tooltip'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'悬浮提示'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'check'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`render`),o(`: `),r(`span`,{class:`hljs-function`},[o(`(`),r(`span`,{class:`hljs-params`},`{ node }`),o(`) =>`)]),o(`
          h(
            VarTooltip,
            { `),r(`span`,{class:`hljs-attr`},`content`),o(`: `),r(`span`,{class:`hljs-string`},`'悬浮提示'`),o(`, `),r(`span`,{class:`hljs-attr`},`placement`),o(`: `),r(`span`,{class:`hljs-string`},`'bottom'`),o(`, `),r(`span`,{class:`hljs-attr`},`style`),o(`: { `),r(`span`,{class:`hljs-attr`},`display`),o(`: `),r(`span`,{class:`hljs-string`},`'block'`),o(`, `),r(`span`,{class:`hljs-attr`},`width`),o(`: `),r(`span`,{class:`hljs-string`},`'100%'`),o(` } },
            { `),r(`span`,{class:`hljs-attr`},`default`),o(`: `),r(`span`,{class:`hljs-function`},`() =>`),o(` node },
          ),
      },
      {
        `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'router-link'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'路由链接'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'bookmark'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`render`),o(`: `),r(`span`,{class:`hljs-function`},[o(`(`),r(`span`,{class:`hljs-params`},`{ node }`),o(`) =>`)]),o(`
          h(
            RouterLink,
            {
              `),r(`span`,{class:`hljs-attr`},`to`),o(`: `),r(`span`,{class:`hljs-string`},`'/button'`),o(`,
              `),r(`span`,{class:`hljs-attr`},`style`),o(`: { `),r(`span`,{class:`hljs-attr`},`display`),o(`: `),r(`span`,{class:`hljs-string`},`'block'`),o(`, `),r(`span`,{class:`hljs-attr`},`color`),o(`: `),r(`span`,{class:`hljs-string`},`'inherit'`),o(`, `),r(`span`,{class:`hljs-attr`},`textDecoration`),o(`: `),r(`span`,{class:`hljs-string`},`'none'`),o(` },
            },
            { `),r(`span`,{class:`hljs-attr`},`default`),o(`: `),r(`span`,{class:`hljs-function`},`() =>`),o(` node },
          ),
      },
    ],
  },
])
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tree-menu`),o(),r(`span`,{class:`hljs-attr`},`v-model:active`),o(`=`),r(`span`,{class:`hljs-string`},`"active"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options"`),o(` />`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,N,[r(`h3`,P,[a(G,{to:`#API`},{default:e(()=>[...l[34]||=[o(`#`,-1)]]),_:1}),l[35]||=o(`API`,-1)]),l[36]||=s(`<h4>TreeMenu Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:active</code></td><td>激活菜单项的值</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>options</code></td><td>菜单选项。可选择或可展开的选项必须提供 <code>value</code>，或提供由 <code>value-key</code> 指定的等价字段</td><td><em>TreeMenuOption[]</em></td><td><code>[]</code></td></tr><tr><td><code>v-model:expanded-values</code></td><td>展开菜单项的值集合</td><td><em>Array&lt;string | number&gt;</em></td><td><code>-</code></td></tr><tr><td><code>value-key</code></td><td>选项值字段。当选项不使用 <code>value</code> 字段时，必须通过该字段指定唯一值来源</td><td><em>string</em></td><td><code>&#39;value&#39;</code></td></tr><tr><td><code>label-key</code></td><td>选项标签字段</td><td><em>string</em></td><td><code>&#39;label&#39;</code></td></tr><tr><td><code>icon-key</code></td><td>选项图标字段</td><td><em>string</em></td><td><code>&#39;icon&#39;</code></td></tr><tr><td><code>children-key</code></td><td>子选项字段</td><td><em>string</em></td><td><code>&#39;children&#39;</code></td></tr><tr><td><code>accordion</code></td><td>是否只允许同级一个选项展开</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>indent</code></td><td>每一级缩进</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>ripple</code></td><td>是否开启水波纹</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>bordered</code></td><td>是否显示右边框</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用整个菜单</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table><h4>TreeMenuOption</h4><table><thead><tr><th>字段</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>type</code></td><td>选项类型。<code>group</code> 渲染分组标题和子选项，<code>divider</code> 渲染分割线。</td><td><em>&#39;group&#39; | &#39;divider&#39;</em></td><td><code>-</code></td></tr><tr><td><code>value</code></td><td>选项值。可选择或可展开的选项必须提供，或提供由 <code>value-key</code> 指定的等价字段；<code>group</code> 和 <code>divider</code> 可省略</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>label</code></td><td>选项标签</td><td><em>string | VNode | ((option, active) =&gt; VNodeChild)</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>选项图标</td><td><em>string | VNode | ((option, active) =&gt; VNodeChild)</em></td><td><code>-</code></td></tr><tr><td><code>render</code></td><td>自定义选项渲染</td><td><em>({ node }, option, active) =&gt; VNodeChild</em></td><td><code>-</code></td></tr><tr><td><code>namespace</code></td><td>图标命名空间</td><td><em>string</em></td><td><code>var-icon</code></td></tr><tr><td><code>show</code></td><td>是否显示当前选项</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用当前选项</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>children</code></td><td>子选项</td><td><em>TreeMenuOption[]</em></td><td><code>-</code></td></tr></tbody></table>`,4)]),r(`div`,F,[r(`h3`,I,[a(G,{to:`#cha1cao2`},{default:e(()=>[...l[37]||=[o(`#`,-1)]]),_:1}),l[38]||=o(`插槽`,-1)]),l[39]||=s(`<table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>start</code></td><td>头部内容</td><td><code>-</code></td></tr><tr><td><code>end</code></td><td>尾部内容</td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,L,[r(`h3`,R,[a(G,{to:`#shi4jian4`},{default:e(()=>[...l[40]||=[o(`#`,-1)]]),_:1}),l[41]||=o(`事件`,-1)]),l[42]||=r(`table`,null,[r(`thead`,null,[r(`tr`,null,[r(`th`,null,`事件名`),r(`th`,null,`说明`),r(`th`,null,`回调参数`)])]),r(`tbody`,null,[r(`tr`,null,[r(`td`,null,[r(`code`,null,`change`)]),r(`td`,null,`激活菜单项变化时触发`),r(`td`,null,[r(`code`,null,`active: string | number, option: TreeMenuOption`)])])])],-1)]),r(`div`,z,[r(`h3`,B,[a(G,{to:`#yang4shi4bian4liang4`},{default:e(()=>[...l[43]||=[o(`#`,-1)]]),_:1}),l[44]||=o(`样式变量`,-1)]),l[45]||=s(`<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--tree-menu-background</code></td><td><code>var(--color-surface-container-high)</code></td></tr><tr><td><code>--tree-menu-border-color</code></td><td><code>var(--color-outline)</code></td></tr><tr><td><code>--tree-menu-item-text-color</code></td><td><code>var(--color-text)</code></td></tr><tr><td><code>--tree-menu-padding</code></td><td><code>8px 0</code></td></tr><tr><td><code>--tree-menu-item-gap</code></td><td><code>0px</code></td></tr><tr><td><code>--tree-menu-item-height</code></td><td><code>40px</code></td></tr><tr><td><code>--tree-menu-item-padding</code></td><td><code>0 16px</code></td></tr><tr><td><code>--tree-menu-item-border-radius</code></td><td><code>0</code></td></tr><tr><td><code>--tree-menu-item-indent</code></td><td><code>16px</code></td></tr><tr><td><code>--tree-menu-item-icon-size</code></td><td><code>22px</code></td></tr><tr><td><code>--tree-menu-item-icon-margin-right</code></td><td><code>24px</code></td></tr><tr><td><code>--tree-menu-item-label-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--tree-menu-item-label-line-height</code></td><td><code>1.5</code></td></tr><tr><td><code>--tree-menu-group-label-height</code></td><td><code>32px</code></td></tr><tr><td><code>--tree-menu-group-label-padding</code></td><td><code>0 16px</code></td></tr><tr><td><code>--tree-menu-group-label-color</code></td><td><code>var(--color-on-surface-variant)</code></td></tr><tr><td><code>--tree-menu-group-label-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--tree-menu-divider-margin</code></td><td><code>8px 0</code></td></tr><tr><td><code>--tree-menu-divider-color</code></td><td><code>rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--tree-menu-item-hover-background</code></td><td><code>rgba(85, 85, 85, 0.06)</code></td></tr><tr><td><code>--tree-menu-item-pressed-background</code></td><td><code>rgba(85, 85, 85, 0.1)</code></td></tr><tr><td><code>--tree-menu-item-active-background</code></td><td><code>hsla(var(--hsl-primary), 0.1)</code></td></tr><tr><td><code>--tree-menu-item-active-text-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--tree-menu-item-disabled-opacity</code></td><td><code>var(--opacity-disabled)</code></td></tr><tr><td><code>--tree-menu-item-indicator-border-radius</code></td><td><code>0</code></td></tr><tr><td><code>--tree-menu-item-indicator-active-transition-duration</code></td><td><code>0ms</code></td></tr><tr><td><code>--tree-menu-expand-icon-color</code></td><td><code>var(--color-on-surface-variant)</code></td></tr><tr><td><code>--tree-menu-expand-icon-size</code></td><td><code>20px</code></td></tr></tbody></table>`,2)])])}var H=c(l,[[`render`,V]]);export{H as default};