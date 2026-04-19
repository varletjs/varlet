import{L as e,N as t,W as n,c as r,d as i,g as a,h as o,m as s}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as c}from"./_plugin-vue_export-helper-V-yks4gF.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`Intro`},p={class:`card`},m={id:`BasicUsage`},h={class:`card`},g={id:`NamedTAB`},_={class:`card`},v={id:`ModifyStyle`},y={class:`card`},b={id:`TabDisabled`},x={class:`card`},S={id:`EnableScroll`},C={class:`card`},w={id:`TabVerticalLayout`},T={class:`card`},E={id:`TabsVerticalLayout`},D={class:`card`},O={id:`ViewRelation`},k={class:`card`},A={id:`StickyLayout`},j={class:`card`},M={id:`IndicatorPositionReverse`},N={class:`card`},P={id:`Props`},F={class:`card`},I={id:`Methods`},L={class:`card`},R={id:`Events`},z={class:`card`},B={id:`Slots`},V={class:`card`},H={id:`StyleVariables`};function U(c,l,U,W,G,K){let q=e(`router-link`),J=e(`var-site-code-example`);return t(),i(`div`,u,[l[50]||=r(`h1`,null,`Tabs`,-1),r(`div`,d,[r(`h3`,f,[a(q,{to:`#Intro`},{default:n(()=>[...l[0]||=[o(`#`,-1)]]),_:1}),l[1]||=o(`Intro`,-1)]),l[2]||=r(`p`,null,[o(`Use `),r(`code`,null,`Tabs, Tab`),o(` to switch between tabbed groups and Use `),r(`code`,null,`TabsItems`),o(`, `),r(`code`,null,`TabItem`),o(` to achieve view linkage with Tabs.`)],-1)]),r(`div`,p,[r(`h3`,m,[a(q,{to:`#BasicUsage`},{default:n(()=>[...l[3]||=[o(`#`,-1)]]),_:1}),l[4]||=o(`Basic Usage`,-1)]),a(J,null,{default:n(()=>[...l[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` active = ref(`),r(`span`,{class:`hljs-number`},`0`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tabs`),o(),r(`span`,{class:`hljs-attr`},`v-model:active`),o(`=`),r(`span`,{class:`hljs-string`},`"active"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`Option1`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`Option2`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`Option3`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tabs`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,h,[r(`h3`,g,[a(q,{to:`#NamedTAB`},{default:n(()=>[...l[6]||=[o(`#`,-1)]]),_:1}),l[7]||=o(`Named TAB`,-1)]),l[9]||=r(`p`,null,[o(`The Tabs decide which tab is activated by default by matching the `),r(`code`,null,`active`),o(` to the Tab's `),r(`code`,null,`index`),o(` You can also name a Tab by setting the `),r(`code`,null,`name`),o(` to the Tab, in which case the Tabs will match the name first.`)],-1),a(J,null,{default:n(()=>[...l[8]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` active = ref(`),r(`span`,{class:`hljs-string`},`'Option1'`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tabs`),o(),r(`span`,{class:`hljs-attr`},`v-model:active`),o(`=`),r(`span`,{class:`hljs-string`},`"active"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"Option1"`),o(`>`)]),o(`Option1`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"Option2"`),o(`>`)]),o(`Option2`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"Option3"`),o(`>`)]),o(`Option3`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tabs`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,_,[r(`h3`,v,[a(q,{to:`#ModifyStyle`},{default:n(()=>[...l[10]||=[o(`#`,-1)]]),_:1}),l[11]||=o(`Modify Style`,-1)]),a(J,null,{default:n(()=>[...l[12]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` active = ref(`),r(`span`,{class:`hljs-number`},`0`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tabs`),o(`
    `),r(`span`,{class:`hljs-attr`},`elevation`),o(`
    `),r(`span`,{class:`hljs-attr`},`color`),o(`=`),r(`span`,{class:`hljs-string`},`"var(--color-primary)"`),o(`
    `),r(`span`,{class:`hljs-attr`},`active-color`),o(`=`),r(`span`,{class:`hljs-string`},`"var(--color-on-primary)"`),o(`
    `),r(`span`,{class:`hljs-attr`},`inactive-color`),o(`=`),r(`span`,{class:`hljs-string`},`"var(--button-info-text-color)"`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model:active`),o(`=`),r(`span`,{class:`hljs-string`},`"active"`),o(`
  >`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`Option1`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`Option2`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`Option3`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tabs`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,y,[r(`h3`,b,[a(q,{to:`#TabDisabled`},{default:n(()=>[...l[13]||=[o(`#`,-1)]]),_:1}),l[14]||=o(`Tab Disabled`,-1)]),a(J,null,{default:n(()=>[...l[15]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
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
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`Option1`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`Option2`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(),r(`span`,{class:`hljs-attr`},`disabled`),o(`>`)]),o(`disabled`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tabs`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,x,[r(`h3`,S,[a(q,{to:`#EnableScroll`},{default:n(()=>[...l[16]||=[o(`#`,-1)]]),_:1}),l[17]||=o(`Enable Scroll`,-1)]),l[19]||=r(`p`,null,[o(`Start scrolling automatically when the number of tabs is `),r(`code`,null,`more than four`),o(`. Click the Tab to scroll automatically to the center of the viewport.`)],-1),a(J,null,{default:n(()=>[...l[18]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
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
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`Option1`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`Option2`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`Option3`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`Option4`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`Option5`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`Option6`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`Option7`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`Option8`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tabs`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,C,[r(`h3`,w,[a(q,{to:`#TabVerticalLayout`},{default:n(()=>[...l[20]||=[o(`#`,-1)]]),_:1}),l[21]||=o(`Tab Vertical Layout`,-1)]),a(J,null,{default:n(()=>[...l[22]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
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
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`Option1`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"tabs-example-icon"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"warning"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`Option2`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"tabs-example-icon"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"error"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`Option3`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tabs`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),r(`span`,{class:`css`},[o(`
`),r(`span`,{class:`hljs-selector-class`},`.tabs-example-icon`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`margin-bottom`),o(`: `),r(`span`,{class:`hljs-number`},`5px`),o(`;
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,T,[r(`h3`,E,[a(q,{to:`#TabsVerticalLayout`},{default:n(()=>[...l[23]||=[o(`#`,-1)]]),_:1}),l[24]||=o(`Tabs Vertical Layout`,-1)]),a(J,null,{default:n(()=>[...l[25]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
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
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`Option1`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`Option2`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`Option3`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tabs`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),r(`span`,{class:`css`},[o(`
`),r(`span`,{class:`hljs-selector-class`},`.tabs-example-vertical`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`width`),o(`: `),r(`span`,{class:`hljs-number`},`80px`),o(),r(`span`,{class:`hljs-meta`},`!important`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`height`),o(`: `),r(`span`,{class:`hljs-number`},`120px`),o(),r(`span`,{class:`hljs-meta`},`!important`),o(`;
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,D,[r(`h3`,O,[a(q,{to:`#ViewRelation`},{default:n(()=>[...l[26]||=[o(`#`,-1)]]),_:1}),l[27]||=o(`View Relation`,-1)]),a(J,null,{default:n(()=>[...l[28]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
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
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`Option1`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`Option2`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`Option3`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tabs`),o(`>`)]),o(`

  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tabs-items`),o(),r(`span`,{class:`hljs-attr`},`v-model:active`),o(`=`),r(`span`,{class:`hljs-string`},`"active"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab-item`),o(`>`)]),o(`
      The way she came into the place. I knew right then and there. there was something different about this girl.
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab-item`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab-item`),o(`>`)]),o(`
      The girl was persuasive. the girl I could not trust. The girl was bad. the girl was dangerous. I never know.
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab-item`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab-item`),o(`>`)]),o(`
      She's so dangerous. the girl is so dangerous. Take away my money, throw away my time. You can call me honey. but
      you're no damn good for me.
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab-item`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tabs-items`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,k,[r(`h3`,A,[a(q,{to:`#StickyLayout`},{default:n(()=>[...l[29]||=[o(`#`,-1)]]),_:1}),l[30]||=o(`Sticky Layout`,-1)]),a(J,null,{default:n(()=>[...l[31]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
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
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`Option1`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`Option2`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`Option3`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tabs`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),r(`span`,{class:`css`},[o(`
`),r(`span`,{class:`hljs-selector-class`},`.sticky-example`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`height`),o(`: `),r(`span`,{class:`hljs-number`},`200vh`),o(`;
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,j,[r(`h3`,M,[a(q,{to:`#IndicatorPositionReverse`},{default:n(()=>[...l[32]||=[o(`#`,-1)]]),_:1}),l[33]||=o(`Indicator Position Reverse`,-1)]),a(J,null,{default:n(()=>[...l[34]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
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
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`Option1`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`Option2`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`Option3`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
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
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`Option1`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`Option2`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`Option3`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tab`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-tabs`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),r(`span`,{class:`css`},[o(`
`),r(`span`,{class:`hljs-selector-class`},`.tabs-example-vertical`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`width`),o(`: `),r(`span`,{class:`hljs-number`},`80px`),o(),r(`span`,{class:`hljs-meta`},`!important`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`height`),o(`: `),r(`span`,{class:`hljs-number`},`120px`),o(),r(`span`,{class:`hljs-meta`},`!important`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`margin-top`),o(`: `),r(`span`,{class:`hljs-number`},`20px`),o(`;
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),l[51]||=r(`h2`,null,`API`,-1),r(`div`,N,[r(`h3`,P,[a(q,{to:`#Props`},{default:n(()=>[...l[35]||=[o(`#`,-1)]]),_:1}),l[36]||=o(`Props`,-1)]),l[37]||=s(`<h4>Tabs Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:active</code></td><td>The <code>active</code> tab identifier matches <code>name</code> first, followed by <code>index</code></td><td><em>string</em></td><td><code>index</code></td></tr><tr><td><code>layout-direction</code></td><td>The layout direction of the tabs, optional value of <code>horizontal</code> <code>vertical</code></td><td><em>string</em></td><td><code>horizontal</code></td></tr><tr><td><code>item-direction</code></td><td>The layout direction of the tab, optional value of <code>horizontal</code> <code>vertical</code></td><td><em>string</em></td><td><code>horizontal</code></td></tr><tr><td><code>fixed-bottom</code></td><td>Whether fixed to the bottom of the window, can be used for bottom navigation</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>color</code></td><td>The background color of the tabs</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>active-color</code></td><td>The primary color that the tab is activates</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>inactive-color</code></td><td>The primary color that the tab is not activated</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>disabled-color</code></td><td>The primary color that the tab is disabled</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>indicator-color</code></td><td>The tab activates the color of the indicator</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>indicator-size</code></td><td>Tab activates the size of the indicator</td><td><em>string | number</em></td><td><code>2px</code></td></tr><tr><td><code>elevation</code></td><td>Elevation level, options <code>true</code> <code>false</code> and level of <code>0-24</code></td><td><em>string | number | boolean</em></td><td><code>false</code></td></tr><tr><td><code>sticky</code></td><td>Whether to enable sticky layouts</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>sticky-css-mode</code></td><td>Whether to enable sticky layouts native css sticky mode</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>sticky-z-index</code></td><td>Sticky layouts z-index</td><td><em>number</em></td><td><code>10</code></td></tr><tr><td><code>safe-area</code></td><td>Whether to enable bottom safe area adaptation</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>offset-top</code></td><td>Distance offset top</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>scrollable</code></td><td>Whether to enable scrollable, optional value of <code>auto</code> <code>always</code></td><td><em>string</em></td><td><code>auto</code></td></tr><tr><td><code>indicator-position</code></td><td>The position of the indicator, optional value of <code>normal</code> <code>reverse</code></td><td><em>string</em></td><td><code>normal</code></td></tr></tbody></table><h4>Tab Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>name</code></td><td>Tab&#39;s name</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable tab</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code></td><td>Whether to enable ripple effect</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table><h4>TabsItems Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:active</code></td><td>The identity of the active tab</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>can-swipe</code></td><td>Whether to allow swipe switch</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>animated</code></td><td>Whether to enable content switching animation</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>loop</code></td><td>Whether to allow cycle switching</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table><h4>TabItem Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>name</code></td><td>View&#39;s name</td><td><em>string | number</em></td><td><code>-</code></td></tr></tbody></table>`,8)]),r(`div`,F,[r(`h3`,I,[a(q,{to:`#Methods`},{default:n(()=>[...l[38]||=[o(`#`,-1)]]),_:1}),l[39]||=o(`Methods`,-1)]),l[40]||=s(`<h4>Tabs Methods</h4><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>resize</code></td><td>Call this method to redraw when a tabs changes position size</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>resizeSticky</code></td><td>Call this method to redraw when a tabs sticky layouts changes position size</td><td><code>-</code></td><td><code>Promise&lt;void&gt;</code></td></tr></tbody></table><h4>TabsItems Methods</h4><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>getSwipe</code></td><td>Get the <code>swipe</code> component instance</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>`,4)]),r(`div`,L,[r(`h3`,R,[a(q,{to:`#Events`},{default:n(()=>[...l[41]||=[o(`#`,-1)]]),_:1}),l[42]||=o(`Events`,-1)]),l[43]||=s(`<h4>Tabs Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggered when the tab is clicked, but not when the tab <code>disabled</code> status is <code>true</code></td><td><code>active: string | number</code></td></tr><tr><td><code>change</code></td><td>Triggered when switching tab</td><td><code>active: string | number</code></td></tr></tbody></table><h4>Tab Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggered when the tab is clicked, but not when the tab <code>disabled</code> status is <code>true</code></td><td><code>active: string | number</code> <br> <code>event: Event</code></td></tr></tbody></table>`,4)]),r(`div`,z,[r(`h3`,B,[a(q,{to:`#Slots`},{default:n(()=>[...l[44]||=[o(`#`,-1)]]),_:1}),l[45]||=o(`Slots`,-1)]),l[46]||=s(`<h4>Tabs Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Tabs content</td><td><code>-</code></td></tr></tbody></table><h4>Tab Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Tab&#39;s content</td><td><code>-</code></td></tr></tbody></table><h4>TabsItems Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>TabsItems content</td><td><code>-</code></td></tr></tbody></table><h4>TabItem Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>TabItem&#39;s content</td><td><code>-</code></td></tr></tbody></table>`,8)]),r(`div`,V,[r(`h3`,H,[a(q,{to:`#StyleVariables`},{default:n(()=>[...l[47]||=[o(`#`,-1)]]),_:1}),l[48]||=o(`Style Variables`,-1)]),l[49]||=s(`<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><h4>Tabs Variables</h4><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--tabs-item-horizontal-height</code></td><td><code>44px</code></td></tr><tr><td><code>--tabs-item-vertical-height</code></td><td><code>66px</code></td></tr><tr><td><code>--tabs-radius</code></td><td><code>2px</code></td></tr><tr><td><code>--tabs-padding</code></td><td><code>12px</code></td></tr><tr><td><code>--tabs-indicator-size</code></td><td><code>2px</code></td></tr><tr><td><code>--tabs-indicator-border-radius</code></td><td><code>0</code></td></tr><tr><td><code>--tabs-indicator-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--tabs-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--tabs-indicator-inner-size</code></td><td><code>100%</code></td></tr></tbody></table><h4>Tab Variables</h4><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--tab-padding</code></td><td><code>12px</code></td></tr><tr><td><code>--tab-active-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--tab-inactive-color</code></td><td><code>#646566</code></td></tr><tr><td><code>--tab-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--tab-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--tab-font-weight</code></td><td><code>400</code></td></tr><tr><td><code>--tab-active-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--tab-active-font-weight</code></td><td><code>400</code></td></tr></tbody></table>`,5)])])}var W=c(l,[[`render`,U]]);export{W as default};