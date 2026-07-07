import{G as e,L as t,N as n,c as r,d as i,g as a,h as o,m as s}from"./runtime-core.esm-bundler-5xw830oL.js";import{t as c}from"./_plugin-vue_export-helper-DAAOZMkq.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`Intro`},p={class:`card`},m={id:`BasicUsage`},h={class:`card`},g={id:`Ripple`},_={class:`card`},v={id:`Accordion`},y={class:`card`},b={id:`MenuGroup`},x={class:`card`},S={id:`FieldKeys`},C={class:`card`},w={id:`Disabled`},T={class:`card`},E={id:`DynamicShow`},D={class:`card`},O={id:`Slots`},k={class:`card`},A={id:`CustomIndent`},j={class:`card`},M={id:`CustomRender`},N={class:`card`},P={id:`API`},F={class:`card`},I={id:`Slots`},L={class:`card`},R={id:`Events`},z={class:`card`},B={id:`StyleVariables`};function V(c,l,V,H,U,W){let G=t(`router-link`),K=t(`var-site-code-example`);return n(),i(`div`,u,[l[46]||=r(`h1`,null,`TreeMenu`,-1),r(`div`,d,[r(`h3`,f,[a(G,{to:`#Intro`},{default:e(()=>[...l[0]||=[o(`#`,-1)]]),_:1}),l[1]||=o(`Intro`,-1)]),l[2]||=r(`p`,null,`A multi-level collapsible menu commonly used as a sidebar navigation.`,-1)]),r(`div`,p,[r(`h3`,m,[a(G,{to:`#BasicUsage`},{default:e(()=>[...l[3]||=[o(`#`,-1)]]),_:1}),l[4]||=o(`Basic Usage`,-1)]),a(K,null,{default:e(()=>[...l[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` active = ref(`),r(`span`,{class:`hljs-string`},`'overview'`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` options = ref([
  {
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'overview'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Overview'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'home'`),o(`,
  },
  {
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'workspace'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Workspace'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'notebook'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`children`),o(`: [
      {
        `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'projects'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Projects'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'star'`),o(`,
      },
      {
        `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'tasks'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Tasks'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'check'`),o(`,
      },
    ],
  },
  {
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'settings'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Settings'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'cog'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`children`),o(`: [
      {
        `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'profile'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Profile'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'account-circle'`),o(`,
      },
      {
        `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'security'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Security'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'warning'`),o(`,
      },
    ],
  },
])
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tree-menu`),o(),r(`span`,{class:`hljs-attr`},`v-model:active`),o(`=`),r(`span`,{class:`hljs-string`},`"active"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options"`),o(` />`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,h,[r(`h3`,g,[a(G,{to:`#Ripple`},{default:e(()=>[...l[6]||=[o(`#`,-1)]]),_:1}),l[7]||=o(`Ripple`,-1)]),a(K,null,{default:e(()=>[...l[8]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` active = ref(`),r(`span`,{class:`hljs-string`},`'overview'`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` options = ref([
  {
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'overview'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Overview'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'home'`),o(`,
  },
  {
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'workspace'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Workspace'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'notebook'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`children`),o(`: [
      { `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'projects'`),o(`, `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Projects'`),o(`, `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'star'`),o(` },
      { `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'tasks'`),o(`, `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Tasks'`),o(`, `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'check'`),o(` },
    ],
  },
])
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tree-menu`),o(),r(`span`,{class:`hljs-attr`},`v-model:active`),o(`=`),r(`span`,{class:`hljs-string`},`"active"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options"`),o(),r(`span`,{class:`hljs-attr`},`ripple`),o(` />`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,_,[r(`h3`,v,[a(G,{to:`#Accordion`},{default:e(()=>[...l[9]||=[o(`#`,-1)]]),_:1}),l[10]||=o(`Accordion`,-1)]),l[12]||=r(`p`,null,`Only one sibling menu can be expanded.`,-1),a(K,null,{default:e(()=>[...l[11]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` active = ref(`),r(`span`,{class:`hljs-string`},`'projects'`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` options = ref([
  {
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'overview'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Overview'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'home'`),o(`,
  },
  {
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'workspace'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Workspace'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'notebook'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`children`),o(`: [
      { `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'projects'`),o(`, `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Projects'`),o(`, `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'star'`),o(` },
      { `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'tasks'`),o(`, `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Tasks'`),o(`, `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'check'`),o(` },
    ],
  },
  {
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'settings'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Settings'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'cog'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`children`),o(`: [
      { `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'profile'`),o(`, `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Profile'`),o(`, `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'account-circle'`),o(` },
      { `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'security'`),o(`, `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Security'`),o(`, `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'warning'`),o(` },
    ],
  },
])
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tree-menu`),o(),r(`span`,{class:`hljs-attr`},`v-model:active`),o(`=`),r(`span`,{class:`hljs-string`},`"active"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options"`),o(),r(`span`,{class:`hljs-attr`},`accordion`),o(` />`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,y,[r(`h3`,b,[a(G,{to:`#MenuGroup`},{default:e(()=>[...l[13]||=[o(`#`,-1)]]),_:1}),l[14]||=o(`Menu Group`,-1)]),a(K,null,{default:e(()=>[...l[15]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` active = ref(`),r(`span`,{class:`hljs-string`},`'overview'`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` options = ref([
  {
    `),r(`span`,{class:`hljs-attr`},`type`),o(`: `),r(`span`,{class:`hljs-string`},`'group'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'main'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Main'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`children`),o(`: [
      { `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'overview'`),o(`, `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Overview'`),o(`, `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'home'`),o(` },
      { `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'workspace'`),o(`, `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Workspace'`),o(`, `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'notebook'`),o(` },
    ],
  },
  {
    `),r(`span`,{class:`hljs-attr`},`type`),o(`: `),r(`span`,{class:`hljs-string`},`'divider'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'main-divider'`),o(`,
  },
  {
    `),r(`span`,{class:`hljs-attr`},`type`),o(`: `),r(`span`,{class:`hljs-string`},`'group'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'management'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Management'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`children`),o(`: [
      { `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'settings'`),o(`, `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Settings'`),o(`, `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'cog'`),o(` },
      { `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'security'`),o(`, `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Security'`),o(`, `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'warning'`),o(` },
    ],
  },
])
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tree-menu`),o(),r(`span`,{class:`hljs-attr`},`v-model:active`),o(`=`),r(`span`,{class:`hljs-string`},`"active"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options"`),o(` />`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,x,[r(`h3`,S,[a(G,{to:`#FieldKeys`},{default:e(()=>[...l[16]||=[o(`#`,-1)]]),_:1}),l[17]||=o(`Field Keys`,-1)]),a(K,null,{default:e(()=>[...l[18]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` active = ref(`),r(`span`,{class:`hljs-string`},`'users'`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` options = ref([
  {
    `),r(`span`,{class:`hljs-attr`},`key`),o(`: `),r(`span`,{class:`hljs-string`},`'system'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`title`),o(`: `),r(`span`,{class:`hljs-string`},`'System'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`iconName`),o(`: `),r(`span`,{class:`hljs-string`},`'cog'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`items`),o(`: [
      { `),r(`span`,{class:`hljs-attr`},`key`),o(`: `),r(`span`,{class:`hljs-string`},`'users'`),o(`, `),r(`span`,{class:`hljs-attr`},`title`),o(`: `),r(`span`,{class:`hljs-string`},`'Users'`),o(`, `),r(`span`,{class:`hljs-attr`},`iconName`),o(`: `),r(`span`,{class:`hljs-string`},`'account-circle'`),o(` },
      { `),r(`span`,{class:`hljs-attr`},`key`),o(`: `),r(`span`,{class:`hljs-string`},`'roles'`),o(`, `),r(`span`,{class:`hljs-attr`},`title`),o(`: `),r(`span`,{class:`hljs-string`},`'Roles'`),o(`, `),r(`span`,{class:`hljs-attr`},`iconName`),o(`: `),r(`span`,{class:`hljs-string`},`'information'`),o(` },
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
`)])],-1)]]),_:1})]),r(`div`,C,[r(`h3`,w,[a(G,{to:`#Disabled`},{default:e(()=>[...l[19]||=[o(`#`,-1)]]),_:1}),l[20]||=o(`Disabled`,-1)]),a(K,null,{default:e(()=>[...l[21]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` active = ref(`),r(`span`,{class:`hljs-string`},`'profile'`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` options = ref([
  {
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'settings'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Settings'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'cog'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`children`),o(`: [
      { `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'profile'`),o(`, `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Profile'`),o(`, `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'account-circle'`),o(` },
      { `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'security'`),o(`, `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Security'`),o(`, `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'warning'`),o(`, `),r(`span`,{class:`hljs-attr`},`disabled`),o(`: `),r(`span`,{class:`hljs-literal`},`true`),o(` },
    ],
  },
  {
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'archived'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Archived'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'delete'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`disabled`),o(`: `),r(`span`,{class:`hljs-literal`},`true`),o(`,
  },
])
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tree-menu`),o(),r(`span`,{class:`hljs-attr`},`v-model:active`),o(`=`),r(`span`,{class:`hljs-string`},`"active"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options"`),o(` />`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,T,[r(`h3`,E,[a(G,{to:`#DynamicShow`},{default:e(()=>[...l[22]||=[o(`#`,-1)]]),_:1}),l[23]||=o(`Dynamic Show`,-1)]),a(K,null,{default:e(()=>[...l[24]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { computed, ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` active = ref(`),r(`span`,{class:`hljs-string`},`'settings'`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` showSecurity = ref(`),r(`span`,{class:`hljs-literal`},`true`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` options = computed(`),r(`span`,{class:`hljs-function`},`() =>`),o(` [
  {
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'settings'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Settings'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'cog'`),o(`,
  },
  {
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'security'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Security'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'warning'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`show`),o(`: showSecurity.value,
  },
])
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-switch`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"showSecurity"`),o(),r(`span`,{class:`hljs-attr`},`variant`),o(` />`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tree-menu`),o(),r(`span`,{class:`hljs-attr`},`v-model:active`),o(`=`),r(`span`,{class:`hljs-string`},`"active"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options"`),o(` />`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,D,[r(`h3`,O,[a(G,{to:`#Slots`},{default:e(()=>[...l[25]||=[o(`#`,-1)]]),_:1}),l[26]||=o(`Slots`,-1)]),a(K,null,{default:e(()=>[...l[27]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` active = ref(`),r(`span`,{class:`hljs-string`},`'overview'`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` options = ref([
  {
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'overview'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Overview'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'home'`),o(`,
  },
  {
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'workspace'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Workspace'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'notebook'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`children`),o(`: [
      { `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'projects'`),o(`, `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Projects'`),o(`, `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'star'`),o(` },
      { `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'tasks'`),o(`, `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Tasks'`),o(`, `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'check'`),o(` },
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
`)])],-1)]]),_:1})]),r(`div`,k,[r(`h3`,A,[a(G,{to:`#CustomIndent`},{default:e(()=>[...l[28]||=[o(`#`,-1)]]),_:1}),l[29]||=o(`Custom Indent`,-1)]),a(K,null,{default:e(()=>[...l[30]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` active = ref(`),r(`span`,{class:`hljs-string`},`'projects'`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` options = ref([
  {
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'overview'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Overview'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'home'`),o(`,
  },
  {
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'workspace'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Workspace'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'notebook'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`children`),o(`: [
      { `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'projects'`),o(`, `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Projects'`),o(`, `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'star'`),o(` },
      { `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'tasks'`),o(`, `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Tasks'`),o(`, `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'check'`),o(` },
    ],
  },
])
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tree-menu`),o(),r(`span`,{class:`hljs-attr`},`v-model:active`),o(`=`),r(`span`,{class:`hljs-string`},`"active"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options"`),o(),r(`span`,{class:`hljs-attr`},`indent`),o(`=`),r(`span`,{class:`hljs-string`},`"32px"`),o(` />`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,j,[r(`h3`,M,[a(G,{to:`#CustomRender`},{default:e(()=>[...l[31]||=[o(`#`,-1)]]),_:1}),l[32]||=o(`Custom Render`,-1)]),a(K,null,{default:e(()=>[...l[33]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Badge `),r(`span`,{class:`hljs-keyword`},`as`),o(` VarBadge, Tooltip `),r(`span`,{class:`hljs-keyword`},`as`),o(` VarTooltip } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { h, ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { RouterLink } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue-router'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` active = ref(`),r(`span`,{class:`hljs-string`},`'tooltip'`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` options = ref([
  {
    `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'workspace'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Workspace'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'notebook'`),o(`,
    `),r(`span`,{class:`hljs-attr`},`children`),o(`: [
      {
        `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'custom-label-icon'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-function`},`() =>`),o(`
          h(`),r(`span`,{class:`hljs-string`},`'span'`),o(`, { `),r(`span`,{class:`hljs-attr`},`style`),o(`: { `),r(`span`,{class:`hljs-attr`},`display`),o(`: `),r(`span`,{class:`hljs-string`},`'inline-flex'`),o(`, `),r(`span`,{class:`hljs-attr`},`alignItems`),o(`: `),r(`span`,{class:`hljs-string`},`'center'`),o(` } }, [
            `),r(`span`,{class:`hljs-string`},`'Custom Label Icon'`),o(`,
            h(VarBadge, { `),r(`span`,{class:`hljs-attr`},`style`),o(`: { `),r(`span`,{class:`hljs-attr`},`marginLeft`),o(`: `),r(`span`,{class:`hljs-string`},`'12px'`),o(` }, `),r(`span`,{class:`hljs-attr`},`type`),o(`: `),r(`span`,{class:`hljs-string`},`'primary'`),o(`, `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-number`},`12`),o(` }),
          ]),
        `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-function`},`() =>`),o(` h(VarBadge, { `),r(`span`,{class:`hljs-attr`},`type`),o(`: `),r(`span`,{class:`hljs-string`},`'primary'`),o(`, `),r(`span`,{class:`hljs-attr`},`dot`),o(`: `),r(`span`,{class:`hljs-literal`},`true`),o(` }),
      },
      {
        `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'link'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Link Menu'`),o(`,
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
        `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Tooltip'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`icon`),o(`: `),r(`span`,{class:`hljs-string`},`'check'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`render`),o(`: `),r(`span`,{class:`hljs-function`},[o(`(`),r(`span`,{class:`hljs-params`},`{ node }`),o(`) =>`)]),o(`
          h(
            VarTooltip,
            { `),r(`span`,{class:`hljs-attr`},`content`),o(`: `),r(`span`,{class:`hljs-string`},`'Tooltip'`),o(`, `),r(`span`,{class:`hljs-attr`},`placement`),o(`: `),r(`span`,{class:`hljs-string`},`'bottom'`),o(`, `),r(`span`,{class:`hljs-attr`},`style`),o(`: { `),r(`span`,{class:`hljs-attr`},`display`),o(`: `),r(`span`,{class:`hljs-string`},`'block'`),o(`, `),r(`span`,{class:`hljs-attr`},`width`),o(`: `),r(`span`,{class:`hljs-string`},`'100%'`),o(` } },
            { `),r(`span`,{class:`hljs-attr`},`default`),o(`: `),r(`span`,{class:`hljs-function`},`() =>`),o(` node },
          ),
      },
      {
        `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-string`},`'router-link'`),o(`,
        `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Router Link'`),o(`,
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
`)])],-1)]]),_:1})]),r(`div`,N,[r(`h3`,P,[a(G,{to:`#API`},{default:e(()=>[...l[34]||=[o(`#`,-1)]]),_:1}),l[35]||=o(`API`,-1)]),l[36]||=s(`<h4>TreeMenu Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:active</code></td><td>Active option value</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>options</code></td><td>Menu options. Selectable or expandable options must provide <code>value</code>, or an equivalent field specified by <code>value-key</code></td><td><em>TreeMenuOption[]</em></td><td><code>[]</code></td></tr><tr><td><code>v-model:expanded-values</code></td><td>Expanded option values</td><td><em>Array&lt;string | number&gt;</em></td><td><code>-</code></td></tr><tr><td><code>value-key</code></td><td>Option value field. Use it to point to the unique value field when options do not use <code>value</code></td><td><em>string</em></td><td><code>&#39;value&#39;</code></td></tr><tr><td><code>label-key</code></td><td>Option label field</td><td><em>string</em></td><td><code>&#39;label&#39;</code></td></tr><tr><td><code>icon-key</code></td><td>Option icon field</td><td><em>string</em></td><td><code>&#39;icon&#39;</code></td></tr><tr><td><code>children-key</code></td><td>Option children field</td><td><em>string</em></td><td><code>&#39;children&#39;</code></td></tr><tr><td><code>accordion</code></td><td>Whether to only allow one sibling option expanded</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>indent</code></td><td>Indent per level</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>ripple</code></td><td>Whether to enable ripple</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>bordered</code></td><td>Whether to show right border</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable the whole menu</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table><h4>TreeMenuOption</h4><table><thead><tr><th>Field</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>type</code></td><td>Option type. <code>group</code> renders a group label and its children. <code>divider</code> renders a divider.</td><td><em>&#39;group&#39; | &#39;divider&#39;</em></td><td><code>-</code></td></tr><tr><td><code>value</code></td><td>Option value. Selectable or expandable options must provide it, or an equivalent field specified by <code>value-key</code>; <code>group</code> and <code>divider</code> can omit it</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>label</code></td><td>Option label</td><td><em>string | VNode | ((option, active) =&gt; VNodeChild)</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>Option icon</td><td><em>string | VNode | ((option, active) =&gt; VNodeChild)</em></td><td><code>-</code></td></tr><tr><td><code>render</code></td><td>Custom option render</td><td><em>({ node }, option, active) =&gt; VNodeChild</em></td><td><code>-</code></td></tr><tr><td><code>namespace</code></td><td>Icon namespace</td><td><em>string</em></td><td><code>var-icon</code></td></tr><tr><td><code>show</code></td><td>Whether to show the option</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>disabled</code></td><td>Whether the option is disabled</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>children</code></td><td>Child options</td><td><em>TreeMenuOption[]</em></td><td><code>-</code></td></tr></tbody></table>`,4)]),r(`div`,F,[r(`h3`,I,[a(G,{to:`#Slots`},{default:e(()=>[...l[37]||=[o(`#`,-1)]]),_:1}),l[38]||=o(`Slots`,-1)]),l[39]||=s(`<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>start</code></td><td>Start content</td><td><code>-</code></td></tr><tr><td><code>end</code></td><td>End content</td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,L,[r(`h3`,R,[a(G,{to:`#Events`},{default:e(()=>[...l[40]||=[o(`#`,-1)]]),_:1}),l[41]||=o(`Events`,-1)]),l[42]||=r(`table`,null,[r(`thead`,null,[r(`tr`,null,[r(`th`,null,`Event`),r(`th`,null,`Description`),r(`th`,null,`Arguments`)])]),r(`tbody`,null,[r(`tr`,null,[r(`td`,null,[r(`code`,null,`change`)]),r(`td`,null,`Triggered when active option changes`),r(`td`,null,[r(`code`,null,`active: string | number, option: TreeMenuOption`)])])])],-1)]),r(`div`,z,[r(`h3`,B,[a(G,{to:`#StyleVariables`},{default:e(()=>[...l[43]||=[o(`#`,-1)]]),_:1}),l[44]||=o(`Style Variables`,-1)]),l[45]||=s(`<p>The following CSS variables are used by the component and can be customized through the <a href="#/en-US/style-provider">StyleProvider</a> component.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--tree-menu-background</code></td><td><code>var(--color-surface-container-high)</code></td></tr><tr><td><code>--tree-menu-border-color</code></td><td><code>var(--color-outline)</code></td></tr><tr><td><code>--tree-menu-item-text-color</code></td><td><code>var(--color-text)</code></td></tr><tr><td><code>--tree-menu-padding</code></td><td><code>8px 0</code></td></tr><tr><td><code>--tree-menu-item-gap</code></td><td><code>0px</code></td></tr><tr><td><code>--tree-menu-item-height</code></td><td><code>40px</code></td></tr><tr><td><code>--tree-menu-item-padding</code></td><td><code>0 16px</code></td></tr><tr><td><code>--tree-menu-item-border-radius</code></td><td><code>0</code></td></tr><tr><td><code>--tree-menu-item-indent</code></td><td><code>16px</code></td></tr><tr><td><code>--tree-menu-item-icon-size</code></td><td><code>22px</code></td></tr><tr><td><code>--tree-menu-item-icon-margin-right</code></td><td><code>24px</code></td></tr><tr><td><code>--tree-menu-item-label-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--tree-menu-item-label-line-height</code></td><td><code>1.5</code></td></tr><tr><td><code>--tree-menu-group-label-height</code></td><td><code>32px</code></td></tr><tr><td><code>--tree-menu-group-label-padding</code></td><td><code>0 16px</code></td></tr><tr><td><code>--tree-menu-group-label-color</code></td><td><code>var(--color-on-surface-variant)</code></td></tr><tr><td><code>--tree-menu-group-label-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--tree-menu-divider-margin</code></td><td><code>8px 0</code></td></tr><tr><td><code>--tree-menu-divider-color</code></td><td><code>rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--tree-menu-item-hover-background</code></td><td><code>rgba(85, 85, 85, 0.06)</code></td></tr><tr><td><code>--tree-menu-item-pressed-background</code></td><td><code>rgba(85, 85, 85, 0.1)</code></td></tr><tr><td><code>--tree-menu-item-active-background</code></td><td><code>hsla(var(--hsl-primary), 0.1)</code></td></tr><tr><td><code>--tree-menu-item-active-text-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--tree-menu-item-disabled-opacity</code></td><td><code>var(--opacity-disabled)</code></td></tr><tr><td><code>--tree-menu-item-indicator-border-radius</code></td><td><code>0</code></td></tr><tr><td><code>--tree-menu-item-indicator-active-transition-duration</code></td><td><code>0ms</code></td></tr><tr><td><code>--tree-menu-expand-icon-color</code></td><td><code>var(--color-on-surface-variant)</code></td></tr><tr><td><code>--tree-menu-expand-icon-size</code></td><td><code>20px</code></td></tr></tbody></table>`,2)])])}var H=c(l,[[`render`,V]]);export{H as default};