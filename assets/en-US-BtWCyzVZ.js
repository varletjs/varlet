import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s,m as c}from"./runtime-core.esm-bundler-DUghkl6b.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`Intro`},p={class:`card`},m={id:`BasicUsage`},h={class:`card`},g={id:`NamedTAB`},_={class:`card`},v={id:`ModifyStyle`},y={class:`card`},b={id:`TabDisabled`},x={class:`card`},S={id:`EnableScroll`},C={class:`card`},w={id:`TabVerticalLayout`},T={class:`card`},E={id:`TabsVerticalLayout`},D={class:`card`},O={id:`ViewRelation`},k={class:`card`},A={id:`StickyLayout`},j={class:`card`},M={id:`IndicatorPositionReverse`},N={class:`card`},P={id:`Props`},F={class:`card`},I={id:`Methods`},L={class:`card`},R={id:`Events`},z={class:`card`},B={id:`Slots`},V={class:`card`},H={id:`StyleVariables`};function U(e,l,U,W,G,K){let q=n(`router-link`),J=n(`var-site-code-example`);return r(),a(`div`,u,[l[50]||=i(`h1`,null,`Tabs`,-1),i(`div`,d,[i(`h3`,f,[o(q,{to:`#Intro`},{default:t(()=>[...l[0]||=[s(`#`,-1)]]),_:1}),l[1]||=s(`Intro`,-1)]),l[2]||=i(`p`,null,[s(`Use `),i(`code`,null,`Tabs, Tab`),s(` to switch between tabbed groups and Use `),i(`code`,null,`TabsItems`),s(`, `),i(`code`,null,`TabItem`),s(` to achieve view linkage with Tabs.`)],-1)]),i(`div`,p,[i(`h3`,m,[o(q,{to:`#BasicUsage`},{default:t(()=>[...l[3]||=[s(`#`,-1)]]),_:1}),l[4]||=s(`Basic Usage`,-1)]),o(J,null,{default:t(()=>[...l[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` active = ref(`),i(`span`,{class:`hljs-number`},`0`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tabs`),s(),i(`span`,{class:`hljs-attr`},`v-model:active`),s(`=`),i(`span`,{class:`hljs-string`},`"active"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`Option1`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`Option2`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`Option3`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tabs`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,h,[i(`h3`,g,[o(q,{to:`#NamedTAB`},{default:t(()=>[...l[6]||=[s(`#`,-1)]]),_:1}),l[7]||=s(`Named TAB`,-1)]),l[9]||=i(`p`,null,[s(`The Tabs decide which tab is activated by default by matching the `),i(`code`,null,`active`),s(` to the Tab's `),i(`code`,null,`index`),s(` You can also name a Tab by setting the `),i(`code`,null,`name`),s(` to the Tab, in which case the Tabs will match the name first.`)],-1),o(J,null,{default:t(()=>[...l[8]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` active = ref(`),i(`span`,{class:`hljs-string`},`'Option1'`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tabs`),s(),i(`span`,{class:`hljs-attr`},`v-model:active`),s(`=`),i(`span`,{class:`hljs-string`},`"active"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"Option1"`),s(`>`)]),s(`Option1`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"Option2"`),s(`>`)]),s(`Option2`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"Option3"`),s(`>`)]),s(`Option3`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tabs`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,_,[i(`h3`,v,[o(q,{to:`#ModifyStyle`},{default:t(()=>[...l[10]||=[s(`#`,-1)]]),_:1}),l[11]||=s(`Modify Style`,-1)]),o(J,null,{default:t(()=>[...l[12]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` active = ref(`),i(`span`,{class:`hljs-number`},`0`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tabs`),s(`
    `),i(`span`,{class:`hljs-attr`},`elevation`),s(`
    `),i(`span`,{class:`hljs-attr`},`color`),s(`=`),i(`span`,{class:`hljs-string`},`"var(--color-primary)"`),s(`
    `),i(`span`,{class:`hljs-attr`},`active-color`),s(`=`),i(`span`,{class:`hljs-string`},`"var(--color-on-primary)"`),s(`
    `),i(`span`,{class:`hljs-attr`},`inactive-color`),s(`=`),i(`span`,{class:`hljs-string`},`"var(--button-info-text-color)"`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model:active`),s(`=`),i(`span`,{class:`hljs-string`},`"active"`),s(`
  >`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`Option1`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`Option2`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`Option3`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tabs`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,y,[i(`h3`,b,[o(q,{to:`#TabDisabled`},{default:t(()=>[...l[13]||=[s(`#`,-1)]]),_:1}),l[14]||=s(`Tab Disabled`,-1)]),o(J,null,{default:t(()=>[...l[15]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
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
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`Option1`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`Option2`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(),i(`span`,{class:`hljs-attr`},`disabled`),s(`>`)]),s(`disabled`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tabs`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,x,[i(`h3`,S,[o(q,{to:`#EnableScroll`},{default:t(()=>[...l[16]||=[s(`#`,-1)]]),_:1}),l[17]||=s(`Enable Scroll`,-1)]),l[19]||=i(`p`,null,[s(`Start scrolling automatically when the number of tabs is `),i(`code`,null,`more than four`),s(`. Click the Tab to scroll automatically to the center of the viewport.`)],-1),o(J,null,{default:t(()=>[...l[18]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
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
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`Option1`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`Option2`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`Option3`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`Option4`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`Option5`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`Option6`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`Option7`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`Option8`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tabs`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,C,[i(`h3`,w,[o(q,{to:`#TabVerticalLayout`},{default:t(()=>[...l[20]||=[s(`#`,-1)]]),_:1}),l[21]||=s(`Tab Vertical Layout`,-1)]),o(J,null,{default:t(()=>[...l[22]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
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
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`Option1`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"tabs-example-icon"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"warning"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`Option2`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"tabs-example-icon"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"error"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`Option3`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tabs`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),i(`span`,{class:`css`},[s(`
`),i(`span`,{class:`hljs-selector-class`},`.tabs-example-icon`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`margin-bottom`),s(`: `),i(`span`,{class:`hljs-number`},`5px`),s(`;
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,T,[i(`h3`,E,[o(q,{to:`#TabsVerticalLayout`},{default:t(()=>[...l[23]||=[s(`#`,-1)]]),_:1}),l[24]||=s(`Tabs Vertical Layout`,-1)]),o(J,null,{default:t(()=>[...l[25]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
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
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`Option1`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`Option2`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`Option3`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tabs`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),i(`span`,{class:`css`},[s(`
`),i(`span`,{class:`hljs-selector-class`},`.tabs-example-vertical`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`width`),s(`: `),i(`span`,{class:`hljs-number`},`80px`),s(),i(`span`,{class:`hljs-meta`},`!important`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`height`),s(`: `),i(`span`,{class:`hljs-number`},`120px`),s(),i(`span`,{class:`hljs-meta`},`!important`),s(`;
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,D,[i(`h3`,O,[o(q,{to:`#ViewRelation`},{default:t(()=>[...l[26]||=[s(`#`,-1)]]),_:1}),l[27]||=s(`View Relation`,-1)]),o(J,null,{default:t(()=>[...l[28]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
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
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`Option1`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`Option2`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`Option3`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tabs`),s(`>`)]),s(`

  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tabs-items`),s(),i(`span`,{class:`hljs-attr`},`v-model:active`),s(`=`),i(`span`,{class:`hljs-string`},`"active"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab-item`),s(`>`)]),s(`
      The way she came into the place. I knew right then and there. there was something different about this girl.
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab-item`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab-item`),s(`>`)]),s(`
      The girl was persuasive. the girl I could not trust. The girl was bad. the girl was dangerous. I never know.
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab-item`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab-item`),s(`>`)]),s(`
      She's so dangerous. the girl is so dangerous. Take away my money, throw away my time. You can call me honey. but
      you're no damn good for me.
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab-item`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tabs-items`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,k,[i(`h3`,A,[o(q,{to:`#StickyLayout`},{default:t(()=>[...l[29]||=[s(`#`,-1)]]),_:1}),l[30]||=s(`Sticky Layout`,-1)]),o(J,null,{default:t(()=>[...l[31]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
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
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`Option1`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`Option2`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`Option3`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tabs`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),i(`span`,{class:`css`},[s(`
`),i(`span`,{class:`hljs-selector-class`},`.sticky-example`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`height`),s(`: `),i(`span`,{class:`hljs-number`},`200vh`),s(`;
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,j,[i(`h3`,M,[o(q,{to:`#IndicatorPositionReverse`},{default:t(()=>[...l[32]||=[s(`#`,-1)]]),_:1}),l[33]||=s(`Indicator Position Reverse`,-1)]),o(J,null,{default:t(()=>[...l[34]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
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
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`Option1`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`Option2`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`Option3`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
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
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`Option1`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`Option2`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`Option3`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tab`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-tabs`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),i(`span`,{class:`css`},[s(`
`),i(`span`,{class:`hljs-selector-class`},`.tabs-example-vertical`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`width`),s(`: `),i(`span`,{class:`hljs-number`},`80px`),s(),i(`span`,{class:`hljs-meta`},`!important`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`height`),s(`: `),i(`span`,{class:`hljs-number`},`120px`),s(),i(`span`,{class:`hljs-meta`},`!important`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`margin-top`),s(`: `),i(`span`,{class:`hljs-number`},`20px`),s(`;
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),l[51]||=i(`h2`,null,`API`,-1),i(`div`,N,[i(`h3`,P,[o(q,{to:`#Props`},{default:t(()=>[...l[35]||=[s(`#`,-1)]]),_:1}),l[36]||=s(`Props`,-1)]),l[37]||=c(`<h4>Tabs Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:active</code></td><td>The <code>active</code> tab identifier matches <code>name</code> first, followed by <code>index</code></td><td><em>string</em></td><td><code>index</code></td></tr><tr><td><code>layout-direction</code></td><td>The layout direction of the tabs, optional value of <code>horizontal</code> <code>vertical</code></td><td><em>string</em></td><td><code>horizontal</code></td></tr><tr><td><code>item-direction</code></td><td>The layout direction of the tab, optional value of <code>horizontal</code> <code>vertical</code></td><td><em>string</em></td><td><code>horizontal</code></td></tr><tr><td><code>fixed-bottom</code></td><td>Whether fixed to the bottom of the window, can be used for bottom navigation</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>color</code></td><td>The background color of the tabs</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>active-color</code></td><td>The primary color that the tab is activates</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>inactive-color</code></td><td>The primary color that the tab is not activated</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>disabled-color</code></td><td>The primary color that the tab is disabled</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>indicator-color</code></td><td>The tab activates the color of the indicator</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>indicator-size</code></td><td>Tab activates the size of the indicator</td><td><em>string | number</em></td><td><code>2px</code></td></tr><tr><td><code>elevation</code></td><td>Elevation level, options <code>true</code> <code>false</code> and level of <code>0-24</code></td><td><em>string | number | boolean</em></td><td><code>false</code></td></tr><tr><td><code>sticky</code></td><td>Whether to enable sticky layouts</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>sticky-css-mode</code></td><td>Whether to enable sticky layouts native css sticky mode</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>sticky-z-index</code></td><td>Sticky layouts z-index</td><td><em>number</em></td><td><code>10</code></td></tr><tr><td><code>safe-area</code></td><td>Whether to enable bottom safe area adaptation</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>offset-top</code></td><td>Distance offset top</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>scrollable</code></td><td>Whether to enable scrollable, optional value of <code>auto</code> <code>always</code></td><td><em>string</em></td><td><code>auto</code></td></tr><tr><td><code>indicator-position</code></td><td>The position of the indicator, optional value of <code>normal</code> <code>reverse</code></td><td><em>string</em></td><td><code>normal</code></td></tr></tbody></table><h4>Tab Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>name</code></td><td>Tab&#39;s name</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable tab</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code></td><td>Whether to enable ripple effect</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table><h4>TabsItems Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:active</code></td><td>The identity of the active tab</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>can-swipe</code></td><td>Whether to allow swipe switch</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>animated</code></td><td>Whether to enable content switching animation</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>loop</code></td><td>Whether to allow cycle switching</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table><h4>TabItem Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>name</code></td><td>View&#39;s name</td><td><em>string | number</em></td><td><code>-</code></td></tr></tbody></table>`,8)]),i(`div`,F,[i(`h3`,I,[o(q,{to:`#Methods`},{default:t(()=>[...l[38]||=[s(`#`,-1)]]),_:1}),l[39]||=s(`Methods`,-1)]),l[40]||=c(`<h4>Tabs Methods</h4><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>resize</code></td><td>Call this method to redraw when a tabs changes position size</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>resizeSticky</code></td><td>Call this method to redraw when a tabs sticky layouts changes position size</td><td><code>-</code></td><td><code>Promise&lt;void&gt;</code></td></tr></tbody></table><h4>TabsItems Methods</h4><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>getSwipe</code></td><td>Get the <code>swipe</code> component instance</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>`,4)]),i(`div`,L,[i(`h3`,R,[o(q,{to:`#Events`},{default:t(()=>[...l[41]||=[s(`#`,-1)]]),_:1}),l[42]||=s(`Events`,-1)]),l[43]||=c(`<h4>Tabs Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggered when the tab is clicked, but not when the tab <code>disabled</code> status is <code>true</code></td><td><code>active: string | number</code></td></tr><tr><td><code>change</code></td><td>Triggered when switching tab</td><td><code>active: string | number</code></td></tr></tbody></table><h4>Tab Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggered when the tab is clicked, but not when the tab <code>disabled</code> status is <code>true</code></td><td><code>active: string | number</code> <br> <code>event: Event</code></td></tr></tbody></table>`,4)]),i(`div`,z,[i(`h3`,B,[o(q,{to:`#Slots`},{default:t(()=>[...l[44]||=[s(`#`,-1)]]),_:1}),l[45]||=s(`Slots`,-1)]),l[46]||=c(`<h4>Tabs Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Tabs content</td><td><code>-</code></td></tr></tbody></table><h4>Tab Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Tab&#39;s content</td><td><code>-</code></td></tr></tbody></table><h4>TabsItems Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>TabsItems content</td><td><code>-</code></td></tr></tbody></table><h4>TabItem Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>TabItem&#39;s content</td><td><code>-</code></td></tr></tbody></table>`,8)]),i(`div`,V,[i(`h3`,H,[o(q,{to:`#StyleVariables`},{default:t(()=>[...l[47]||=[s(`#`,-1)]]),_:1}),l[48]||=s(`Style Variables`,-1)]),l[49]||=c(`<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><h4>Tabs Variables</h4><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--tabs-item-horizontal-height</code></td><td><code>44px</code></td></tr><tr><td><code>--tabs-item-vertical-height</code></td><td><code>66px</code></td></tr><tr><td><code>--tabs-radius</code></td><td><code>2px</code></td></tr><tr><td><code>--tabs-padding</code></td><td><code>12px</code></td></tr><tr><td><code>--tabs-indicator-size</code></td><td><code>2px</code></td></tr><tr><td><code>--tabs-indicator-border-radius</code></td><td><code>0</code></td></tr><tr><td><code>--tabs-indicator-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--tabs-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--tabs-indicator-inner-size</code></td><td><code>100%</code></td></tr></tbody></table><h4>Tab Variables</h4><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--tab-padding</code></td><td><code>12px</code></td></tr><tr><td><code>--tab-active-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--tab-inactive-color</code></td><td><code>#646566</code></td></tr><tr><td><code>--tab-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--tab-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--tab-font-weight</code></td><td><code>400</code></td></tr><tr><td><code>--tab-active-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--tab-active-font-weight</code></td><td><code>400</code></td></tr></tbody></table>`,5)])])}var W=e(l,[[`render`,U]]);export{W as default};