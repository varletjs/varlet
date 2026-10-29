import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s,m as c}from"./runtime-core.esm-bundler-DUghkl6b.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`Intro`},p={class:`card`},m={id:`BasicUsage`},h={class:`card`},g={id:`Ripple`},_={class:`card`},v={id:`Accordion`},y={class:`card`},b={id:`MenuGroup`},x={class:`card`},S={id:`FieldKeys`},C={class:`card`},w={id:`Disabled`},T={class:`card`},E={id:`DynamicShow`},D={class:`card`},O={id:`Slots`},k={class:`card`},A={id:`CustomIndent`},j={class:`card`},M={id:`CustomRender`},N={class:`card`},P={id:`API`},F={class:`card`},I={id:`Slots`},L={class:`card`},R={id:`Events`},z={class:`card`},B={id:`StyleVariables`};function V(e,l,V,H,U,W){let G=n(`router-link`),K=n(`var-site-code-example`);return r(),a(`div`,u,[l[46]||=i(`h1`,null,`TreeMenu`,-1),i(`div`,d,[i(`h3`,f,[o(G,{to:`#Intro`},{default:t(()=>[...l[0]||=[s(`#`,-1)]]),_:1}),l[1]||=s(`Intro`,-1)]),l[2]||=i(`p`,null,`A multi-level collapsible menu commonly used as a sidebar navigation.`,-1)]),i(`div`,p,[i(`h3`,m,[o(G,{to:`#BasicUsage`},{default:t(()=>[...l[3]||=[s(`#`,-1)]]),_:1}),l[4]||=s(`Basic Usage`,-1)]),o(K,null,{default:t(()=>[...l[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` active = ref(`),i(`span`,{class:`hljs-string`},`'overview'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` options = ref([
  {
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'overview'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Overview'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'home'`),s(`,
  },
  {
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'workspace'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Workspace'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'notebook'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`children`),s(`: [
      {
        `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'projects'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Projects'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'star'`),s(`,
      },
      {
        `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'tasks'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Tasks'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'check'`),s(`,
      },
    ],
  },
  {
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'settings'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Settings'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'cog'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`children`),s(`: [
      {
        `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'profile'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Profile'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'account-circle'`),s(`,
      },
      {
        `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'security'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Security'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'warning'`),s(`,
      },
    ],
  },
])
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tree-menu`),s(),i(`span`,{class:`hljs-attr`},`v-model:active`),s(`=`),i(`span`,{class:`hljs-string`},`"active"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options"`),s(` />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,h,[i(`h3`,g,[o(G,{to:`#Ripple`},{default:t(()=>[...l[6]||=[s(`#`,-1)]]),_:1}),l[7]||=s(`Ripple`,-1)]),o(K,null,{default:t(()=>[...l[8]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` active = ref(`),i(`span`,{class:`hljs-string`},`'overview'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` options = ref([
  {
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'overview'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Overview'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'home'`),s(`,
  },
  {
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'workspace'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Workspace'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'notebook'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`children`),s(`: [
      { `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'projects'`),s(`, `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Projects'`),s(`, `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'star'`),s(` },
      { `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'tasks'`),s(`, `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Tasks'`),s(`, `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'check'`),s(` },
    ],
  },
])
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tree-menu`),s(),i(`span`,{class:`hljs-attr`},`v-model:active`),s(`=`),i(`span`,{class:`hljs-string`},`"active"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options"`),s(),i(`span`,{class:`hljs-attr`},`ripple`),s(` />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,_,[i(`h3`,v,[o(G,{to:`#Accordion`},{default:t(()=>[...l[9]||=[s(`#`,-1)]]),_:1}),l[10]||=s(`Accordion`,-1)]),l[12]||=i(`p`,null,`Only one sibling menu can be expanded.`,-1),o(K,null,{default:t(()=>[...l[11]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` active = ref(`),i(`span`,{class:`hljs-string`},`'projects'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` options = ref([
  {
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'overview'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Overview'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'home'`),s(`,
  },
  {
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'workspace'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Workspace'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'notebook'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`children`),s(`: [
      { `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'projects'`),s(`, `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Projects'`),s(`, `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'star'`),s(` },
      { `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'tasks'`),s(`, `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Tasks'`),s(`, `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'check'`),s(` },
    ],
  },
  {
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'settings'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Settings'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'cog'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`children`),s(`: [
      { `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'profile'`),s(`, `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Profile'`),s(`, `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'account-circle'`),s(` },
      { `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'security'`),s(`, `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Security'`),s(`, `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'warning'`),s(` },
    ],
  },
])
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tree-menu`),s(),i(`span`,{class:`hljs-attr`},`v-model:active`),s(`=`),i(`span`,{class:`hljs-string`},`"active"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options"`),s(),i(`span`,{class:`hljs-attr`},`accordion`),s(` />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,y,[i(`h3`,b,[o(G,{to:`#MenuGroup`},{default:t(()=>[...l[13]||=[s(`#`,-1)]]),_:1}),l[14]||=s(`Menu Group`,-1)]),o(K,null,{default:t(()=>[...l[15]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` active = ref(`),i(`span`,{class:`hljs-string`},`'overview'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` options = ref([
  {
    `),i(`span`,{class:`hljs-attr`},`type`),s(`: `),i(`span`,{class:`hljs-string`},`'group'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'main'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Main'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`children`),s(`: [
      { `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'overview'`),s(`, `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Overview'`),s(`, `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'home'`),s(` },
      { `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'workspace'`),s(`, `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Workspace'`),s(`, `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'notebook'`),s(` },
    ],
  },
  {
    `),i(`span`,{class:`hljs-attr`},`type`),s(`: `),i(`span`,{class:`hljs-string`},`'divider'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'main-divider'`),s(`,
  },
  {
    `),i(`span`,{class:`hljs-attr`},`type`),s(`: `),i(`span`,{class:`hljs-string`},`'group'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'management'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Management'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`children`),s(`: [
      { `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'settings'`),s(`, `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Settings'`),s(`, `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'cog'`),s(` },
      { `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'security'`),s(`, `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Security'`),s(`, `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'warning'`),s(` },
    ],
  },
])
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tree-menu`),s(),i(`span`,{class:`hljs-attr`},`v-model:active`),s(`=`),i(`span`,{class:`hljs-string`},`"active"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options"`),s(` />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,x,[i(`h3`,S,[o(G,{to:`#FieldKeys`},{default:t(()=>[...l[16]||=[s(`#`,-1)]]),_:1}),l[17]||=s(`Field Keys`,-1)]),o(K,null,{default:t(()=>[...l[18]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` active = ref(`),i(`span`,{class:`hljs-string`},`'users'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` options = ref([
  {
    `),i(`span`,{class:`hljs-attr`},`key`),s(`: `),i(`span`,{class:`hljs-string`},`'system'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`title`),s(`: `),i(`span`,{class:`hljs-string`},`'System'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`iconName`),s(`: `),i(`span`,{class:`hljs-string`},`'cog'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`items`),s(`: [
      { `),i(`span`,{class:`hljs-attr`},`key`),s(`: `),i(`span`,{class:`hljs-string`},`'users'`),s(`, `),i(`span`,{class:`hljs-attr`},`title`),s(`: `),i(`span`,{class:`hljs-string`},`'Users'`),s(`, `),i(`span`,{class:`hljs-attr`},`iconName`),s(`: `),i(`span`,{class:`hljs-string`},`'account-circle'`),s(` },
      { `),i(`span`,{class:`hljs-attr`},`key`),s(`: `),i(`span`,{class:`hljs-string`},`'roles'`),s(`, `),i(`span`,{class:`hljs-attr`},`title`),s(`: `),i(`span`,{class:`hljs-string`},`'Roles'`),s(`, `),i(`span`,{class:`hljs-attr`},`iconName`),s(`: `),i(`span`,{class:`hljs-string`},`'information'`),s(` },
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
`)])],-1)]]),_:1})]),i(`div`,C,[i(`h3`,w,[o(G,{to:`#Disabled`},{default:t(()=>[...l[19]||=[s(`#`,-1)]]),_:1}),l[20]||=s(`Disabled`,-1)]),o(K,null,{default:t(()=>[...l[21]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` active = ref(`),i(`span`,{class:`hljs-string`},`'profile'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` options = ref([
  {
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'settings'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Settings'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'cog'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`children`),s(`: [
      { `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'profile'`),s(`, `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Profile'`),s(`, `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'account-circle'`),s(` },
      { `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'security'`),s(`, `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Security'`),s(`, `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'warning'`),s(`, `),i(`span`,{class:`hljs-attr`},`disabled`),s(`: `),i(`span`,{class:`hljs-literal`},`true`),s(` },
    ],
  },
  {
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'archived'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Archived'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'delete'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`disabled`),s(`: `),i(`span`,{class:`hljs-literal`},`true`),s(`,
  },
])
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tree-menu`),s(),i(`span`,{class:`hljs-attr`},`v-model:active`),s(`=`),i(`span`,{class:`hljs-string`},`"active"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options"`),s(` />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,T,[i(`h3`,E,[o(G,{to:`#DynamicShow`},{default:t(()=>[...l[22]||=[s(`#`,-1)]]),_:1}),l[23]||=s(`Dynamic Show`,-1)]),o(K,null,{default:t(()=>[...l[24]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { computed, ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` active = ref(`),i(`span`,{class:`hljs-string`},`'settings'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` showSecurity = ref(`),i(`span`,{class:`hljs-literal`},`true`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` options = computed(`),i(`span`,{class:`hljs-function`},`() =>`),s(` [
  {
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'settings'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Settings'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'cog'`),s(`,
  },
  {
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'security'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Security'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'warning'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`show`),s(`: showSecurity.value,
  },
])
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-switch`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"showSecurity"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(` />`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tree-menu`),s(),i(`span`,{class:`hljs-attr`},`v-model:active`),s(`=`),i(`span`,{class:`hljs-string`},`"active"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options"`),s(` />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,D,[i(`h3`,O,[o(G,{to:`#Slots`},{default:t(()=>[...l[25]||=[s(`#`,-1)]]),_:1}),l[26]||=s(`Slots`,-1)]),o(K,null,{default:t(()=>[...l[27]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` active = ref(`),i(`span`,{class:`hljs-string`},`'overview'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` options = ref([
  {
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'overview'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Overview'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'home'`),s(`,
  },
  {
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'workspace'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Workspace'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'notebook'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`children`),s(`: [
      { `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'projects'`),s(`, `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Projects'`),s(`, `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'star'`),s(` },
      { `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'tasks'`),s(`, `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Tasks'`),s(`, `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'check'`),s(` },
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
`)])],-1)]]),_:1})]),i(`div`,k,[i(`h3`,A,[o(G,{to:`#CustomIndent`},{default:t(()=>[...l[28]||=[s(`#`,-1)]]),_:1}),l[29]||=s(`Custom Indent`,-1)]),o(K,null,{default:t(()=>[...l[30]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` active = ref(`),i(`span`,{class:`hljs-string`},`'projects'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` options = ref([
  {
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'overview'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Overview'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'home'`),s(`,
  },
  {
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'workspace'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Workspace'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'notebook'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`children`),s(`: [
      { `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'projects'`),s(`, `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Projects'`),s(`, `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'star'`),s(` },
      { `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'tasks'`),s(`, `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Tasks'`),s(`, `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'check'`),s(` },
    ],
  },
])
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tree-menu`),s(),i(`span`,{class:`hljs-attr`},`v-model:active`),s(`=`),i(`span`,{class:`hljs-string`},`"active"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options"`),s(),i(`span`,{class:`hljs-attr`},`indent`),s(`=`),i(`span`,{class:`hljs-string`},`"32px"`),s(` />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,j,[i(`h3`,M,[o(G,{to:`#CustomRender`},{default:t(()=>[...l[31]||=[s(`#`,-1)]]),_:1}),l[32]||=s(`Custom Render`,-1)]),o(K,null,{default:t(()=>[...l[33]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Badge `),i(`span`,{class:`hljs-keyword`},`as`),s(` VarBadge, Tooltip `),i(`span`,{class:`hljs-keyword`},`as`),s(` VarTooltip } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { h, ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { RouterLink } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue-router'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` active = ref(`),i(`span`,{class:`hljs-string`},`'tooltip'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` options = ref([
  {
    `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'workspace'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Workspace'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'notebook'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`children`),s(`: [
      {
        `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'custom-label-icon'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-function`},`() =>`),s(`
          h(`),i(`span`,{class:`hljs-string`},`'span'`),s(`, { `),i(`span`,{class:`hljs-attr`},`style`),s(`: { `),i(`span`,{class:`hljs-attr`},`display`),s(`: `),i(`span`,{class:`hljs-string`},`'inline-flex'`),s(`, `),i(`span`,{class:`hljs-attr`},`alignItems`),s(`: `),i(`span`,{class:`hljs-string`},`'center'`),s(` } }, [
            `),i(`span`,{class:`hljs-string`},`'Custom Label Icon'`),s(`,
            h(VarBadge, { `),i(`span`,{class:`hljs-attr`},`style`),s(`: { `),i(`span`,{class:`hljs-attr`},`marginLeft`),s(`: `),i(`span`,{class:`hljs-string`},`'12px'`),s(` }, `),i(`span`,{class:`hljs-attr`},`type`),s(`: `),i(`span`,{class:`hljs-string`},`'primary'`),s(`, `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-number`},`12`),s(` }),
          ]),
        `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-function`},`() =>`),s(` h(VarBadge, { `),i(`span`,{class:`hljs-attr`},`type`),s(`: `),i(`span`,{class:`hljs-string`},`'primary'`),s(`, `),i(`span`,{class:`hljs-attr`},`dot`),s(`: `),i(`span`,{class:`hljs-literal`},`true`),s(` }),
      },
      {
        `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'link'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Link Menu'`),s(`,
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
        `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Tooltip'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'check'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`render`),s(`: `),i(`span`,{class:`hljs-function`},[s(`(`),i(`span`,{class:`hljs-params`},`{ node }`),s(`) =>`)]),s(`
          h(
            VarTooltip,
            { `),i(`span`,{class:`hljs-attr`},`content`),s(`: `),i(`span`,{class:`hljs-string`},`'Tooltip'`),s(`, `),i(`span`,{class:`hljs-attr`},`placement`),s(`: `),i(`span`,{class:`hljs-string`},`'bottom'`),s(`, `),i(`span`,{class:`hljs-attr`},`style`),s(`: { `),i(`span`,{class:`hljs-attr`},`display`),s(`: `),i(`span`,{class:`hljs-string`},`'block'`),s(`, `),i(`span`,{class:`hljs-attr`},`width`),s(`: `),i(`span`,{class:`hljs-string`},`'100%'`),s(` } },
            { `),i(`span`,{class:`hljs-attr`},`default`),s(`: `),i(`span`,{class:`hljs-function`},`() =>`),s(` node },
          ),
      },
      {
        `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-string`},`'router-link'`),s(`,
        `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Router Link'`),s(`,
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
`)])],-1)]]),_:1})]),i(`div`,N,[i(`h3`,P,[o(G,{to:`#API`},{default:t(()=>[...l[34]||=[s(`#`,-1)]]),_:1}),l[35]||=s(`API`,-1)]),l[36]||=c(`<h4>TreeMenu Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:active</code></td><td>Active option value</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>options</code></td><td>Menu options. Selectable or expandable options must provide <code>value</code>, or an equivalent field specified by <code>value-key</code></td><td><em>TreeMenuOption[]</em></td><td><code>[]</code></td></tr><tr><td><code>v-model:expanded-values</code></td><td>Expanded option values</td><td><em>Array&lt;string | number&gt;</em></td><td><code>-</code></td></tr><tr><td><code>value-key</code></td><td>Option value field. Use it to point to the unique value field when options do not use <code>value</code></td><td><em>string</em></td><td><code>&#39;value&#39;</code></td></tr><tr><td><code>label-key</code></td><td>Option label field</td><td><em>string</em></td><td><code>&#39;label&#39;</code></td></tr><tr><td><code>icon-key</code></td><td>Option icon field</td><td><em>string</em></td><td><code>&#39;icon&#39;</code></td></tr><tr><td><code>children-key</code></td><td>Option children field</td><td><em>string</em></td><td><code>&#39;children&#39;</code></td></tr><tr><td><code>accordion</code></td><td>Whether to only allow one sibling option expanded</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>indent</code></td><td>Indent per level</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>ripple</code></td><td>Whether to enable ripple</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>bordered</code></td><td>Whether to show right border</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable the whole menu</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table><h4>TreeMenuOption</h4><table><thead><tr><th>Field</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>type</code></td><td>Option type. <code>group</code> renders a group label and its children. <code>divider</code> renders a divider.</td><td><em>&#39;group&#39; | &#39;divider&#39;</em></td><td><code>-</code></td></tr><tr><td><code>value</code></td><td>Option value. Selectable or expandable options must provide it, or an equivalent field specified by <code>value-key</code>; <code>group</code> and <code>divider</code> can omit it</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>label</code></td><td>Option label</td><td><em>string | VNode | ((option, active) =&gt; VNodeChild)</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>Option icon</td><td><em>string | VNode | ((option, active) =&gt; VNodeChild)</em></td><td><code>-</code></td></tr><tr><td><code>render</code></td><td>Custom option render</td><td><em>({ node }, option, active) =&gt; VNodeChild</em></td><td><code>-</code></td></tr><tr><td><code>namespace</code></td><td>Icon namespace</td><td><em>string</em></td><td><code>var-icon</code></td></tr><tr><td><code>show</code></td><td>Whether to show the option</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>disabled</code></td><td>Whether the option is disabled</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>children</code></td><td>Child options</td><td><em>TreeMenuOption[]</em></td><td><code>-</code></td></tr></tbody></table>`,4)]),i(`div`,F,[i(`h3`,I,[o(G,{to:`#Slots`},{default:t(()=>[...l[37]||=[s(`#`,-1)]]),_:1}),l[38]||=s(`Slots`,-1)]),l[39]||=c(`<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>start</code></td><td>Start content</td><td><code>-</code></td></tr><tr><td><code>end</code></td><td>End content</td><td><code>-</code></td></tr></tbody></table>`,1)]),i(`div`,L,[i(`h3`,R,[o(G,{to:`#Events`},{default:t(()=>[...l[40]||=[s(`#`,-1)]]),_:1}),l[41]||=s(`Events`,-1)]),l[42]||=i(`table`,null,[i(`thead`,null,[i(`tr`,null,[i(`th`,null,`Event`),i(`th`,null,`Description`),i(`th`,null,`Arguments`)])]),i(`tbody`,null,[i(`tr`,null,[i(`td`,null,[i(`code`,null,`change`)]),i(`td`,null,`Triggered when active option changes`),i(`td`,null,[i(`code`,null,`active: string | number, option: TreeMenuOption`)])])])],-1)]),i(`div`,z,[i(`h3`,B,[o(G,{to:`#StyleVariables`},{default:t(()=>[...l[43]||=[s(`#`,-1)]]),_:1}),l[44]||=s(`Style Variables`,-1)]),l[45]||=c(`<p>The following CSS variables are used by the component and can be customized through the <a href="#/en-US/style-provider">StyleProvider</a> component.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--tree-menu-background</code></td><td><code>var(--color-surface-container-high)</code></td></tr><tr><td><code>--tree-menu-border-color</code></td><td><code>var(--color-outline)</code></td></tr><tr><td><code>--tree-menu-item-text-color</code></td><td><code>var(--color-text)</code></td></tr><tr><td><code>--tree-menu-padding</code></td><td><code>8px 0</code></td></tr><tr><td><code>--tree-menu-item-gap</code></td><td><code>0px</code></td></tr><tr><td><code>--tree-menu-item-height</code></td><td><code>40px</code></td></tr><tr><td><code>--tree-menu-item-padding</code></td><td><code>0 16px</code></td></tr><tr><td><code>--tree-menu-item-border-radius</code></td><td><code>0</code></td></tr><tr><td><code>--tree-menu-item-indent</code></td><td><code>16px</code></td></tr><tr><td><code>--tree-menu-item-icon-size</code></td><td><code>22px</code></td></tr><tr><td><code>--tree-menu-item-icon-margin-right</code></td><td><code>24px</code></td></tr><tr><td><code>--tree-menu-item-label-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--tree-menu-item-label-line-height</code></td><td><code>1.5</code></td></tr><tr><td><code>--tree-menu-group-label-height</code></td><td><code>32px</code></td></tr><tr><td><code>--tree-menu-group-label-padding</code></td><td><code>0 16px</code></td></tr><tr><td><code>--tree-menu-group-label-color</code></td><td><code>var(--color-on-surface-variant)</code></td></tr><tr><td><code>--tree-menu-group-label-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--tree-menu-divider-margin</code></td><td><code>8px 0</code></td></tr><tr><td><code>--tree-menu-divider-color</code></td><td><code>rgba(0, 0, 0, 0.12)</code></td></tr><tr><td><code>--tree-menu-item-hover-background</code></td><td><code>rgba(85, 85, 85, 0.06)</code></td></tr><tr><td><code>--tree-menu-item-pressed-background</code></td><td><code>rgba(85, 85, 85, 0.1)</code></td></tr><tr><td><code>--tree-menu-item-active-background</code></td><td><code>hsla(var(--hsl-primary), 0.1)</code></td></tr><tr><td><code>--tree-menu-item-active-text-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--tree-menu-item-disabled-opacity</code></td><td><code>var(--opacity-disabled)</code></td></tr><tr><td><code>--tree-menu-item-indicator-border-radius</code></td><td><code>0</code></td></tr><tr><td><code>--tree-menu-item-indicator-active-transition-duration</code></td><td><code>0ms</code></td></tr><tr><td><code>--tree-menu-expand-icon-color</code></td><td><code>var(--color-on-surface-variant)</code></td></tr><tr><td><code>--tree-menu-expand-icon-size</code></td><td><code>20px</code></td></tr></tbody></table>`,2)])])}var H=e(l,[[`render`,V]]);export{H as default};