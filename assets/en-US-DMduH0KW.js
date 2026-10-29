import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s,m as c}from"./runtime-core.esm-bundler-DUghkl6b.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`Intro`},p={class:`card`},m={id:`BasicUsage`},h={class:`card`},g={id:`HideMargin`},_={class:`card`},v={id:`ControlledDivider`},y={class:`card`},b={id:`AccordionMode`},x={class:`card`},S={id:`Disabled`},C={class:`card`},w={id:`CustomContent`},T={class:`card`},E={id:`ToggleAll`},D={class:`card`},O={id:`Props`},k={class:`card`},A={id:`Methods`},j={class:`card`},M={id:`CollapseToggleAllOptions`},N={class:`card`},P={id:`Events`},F={class:`card`},I={id:`Slots`},L={class:`card`},R={id:`StyleVariables`};function z(e,l,z,B,V,H){let U=n(`router-link`),W=n(`var-site-code-example`);return r(),a(`div`,u,[l[47]||=i(`h1`,null,`Collapse`,-1),i(`div`,d,[i(`h3`,f,[o(U,{to:`#Intro`},{default:t(()=>[...l[0]||=[s(`#`,-1)]]),_:1}),l[1]||=s(`Intro`,-1)]),l[2]||=i(`p`,null,`A content area which can be collapsed and expanded.`,-1)]),i(`div`,p,[i(`h3`,m,[o(U,{to:`#BasicUsage`},{default:t(()=>[...l[3]||=[s(`#`,-1)]]),_:1}),l[4]||=s(`Basic Usage`,-1)]),l[6]||=i(`p`,null,[s(`Use `),i(`code`,null,`v-model`),s(` to control the name of active panels. `),i(`code`,null,`value`),s(` is an Array.`)],-1),o(W,null,{default:t(()=>[...l[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` value = ref([`),i(`span`,{class:`hljs-string`},`'1'`),s(`])

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`handleChange`),s(`(`),i(`span`,{class:`hljs-params`},`val`),s(`) `)]),s(`{
  `),i(`span`,{class:`hljs-built_in`},`console`),s(`.log(val)
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-collapse`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value"`),s(` @`),i(`span`,{class:`hljs-attr`},`change`),s(`=`),i(`span`,{class:`hljs-string`},`"handleChange"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-collapse-item`),s(),i(`span`,{class:`hljs-attr`},`title`),s(`=`),i(`span`,{class:`hljs-string`},`"Title"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"1"`),s(`>`)]),s(`Text`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-collapse-item`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-collapse-item`),s(),i(`span`,{class:`hljs-attr`},`title`),s(`=`),i(`span`,{class:`hljs-string`},`"Title"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"2"`),s(`>`)]),s(`Text`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-collapse-item`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-collapse`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,h,[i(`h3`,g,[o(U,{to:`#HideMargin`},{default:t(()=>[...l[7]||=[s(`#`,-1)]]),_:1}),l[8]||=s(`Hide Margin`,-1)]),l[10]||=i(`p`,null,[s(`Use `),i(`code`,null,`offset`),s(` prop to hide the margin.`)],-1),o(W,null,{default:t(()=>[...l[9]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` value = ref([`),i(`span`,{class:`hljs-string`},`'2'`),s(`])
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-collapse`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value"`),s(),i(`span`,{class:`hljs-attr`},`:offset`),s(`=`),i(`span`,{class:`hljs-string`},`"false"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-collapse-item`),s(),i(`span`,{class:`hljs-attr`},`title`),s(`=`),i(`span`,{class:`hljs-string`},`"Title"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"1"`),s(`>`)]),s(`Text`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-collapse-item`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-collapse-item`),s(),i(`span`,{class:`hljs-attr`},`title`),s(`=`),i(`span`,{class:`hljs-string`},`"Title"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"2"`),s(`>`)]),s(`Text`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-collapse-item`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-collapse`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,_,[i(`h3`,v,[o(U,{to:`#ControlledDivider`},{default:t(()=>[...l[11]||=[s(`#`,-1)]]),_:1}),l[12]||=s(`Controlled Divider`,-1)]),l[14]||=i(`p`,null,[s(`Use `),i(`code`,null,`divider`),s(` prop to hide the divider.`)],-1),o(W,null,{default:t(()=>[...l[13]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` value = ref([])
`),i(`span`,{class:`hljs-keyword`},`const`),s(` divider = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"divider = !divider"`),s(`>`)]),s(`
    {{ divider ? 'Hide Divider' : 'Show Divider' }}
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-collapse`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value"`),s(),i(`span`,{class:`hljs-attr`},`:divider`),s(`=`),i(`span`,{class:`hljs-string`},`"divider"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-collapse-item`),s(),i(`span`,{class:`hljs-attr`},`title`),s(`=`),i(`span`,{class:`hljs-string`},`"Title"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"1"`),s(`>`)]),s(`Text`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-collapse-item`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-collapse-item`),s(),i(`span`,{class:`hljs-attr`},`title`),s(`=`),i(`span`,{class:`hljs-string`},`"Title"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"2"`),s(`>`)]),s(`Text`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-collapse-item`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-collapse-item`),s(),i(`span`,{class:`hljs-attr`},`title`),s(`=`),i(`span`,{class:`hljs-string`},`"Title"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"3"`),s(`>`)]),s(`Text`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-collapse-item`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-collapse`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,y,[i(`h3`,b,[o(U,{to:`#AccordionMode`},{default:t(()=>[...l[15]||=[s(`#`,-1)]]),_:1}),l[16]||=s(`Accordion Mode`,-1)]),l[18]||=i(`p`,null,[s(`Use the `),i(`code`,null,`accordion`),s(` property to enable accordion mode. `),i(`code`,null,`value`),s(` can be a string or a number.`)],-1),o(W,null,{default:t(()=>[...l[17]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` value = ref(`),i(`span`,{class:`hljs-string`},`''`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-collapse`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value"`),s(),i(`span`,{class:`hljs-attr`},`accordion`),s(),i(`span`,{class:`hljs-attr`},`:offset`),s(`=`),i(`span`,{class:`hljs-string`},`"false"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-collapse-item`),s(),i(`span`,{class:`hljs-attr`},`title`),s(`=`),i(`span`,{class:`hljs-string`},`"Title"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"1"`),s(`>`)]),s(`Text`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-collapse-item`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-collapse-item`),s(),i(`span`,{class:`hljs-attr`},`title`),s(`=`),i(`span`,{class:`hljs-string`},`"Title"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"2"`),s(`>`)]),s(`Text`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-collapse-item`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-collapse`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,x,[i(`h3`,S,[o(U,{to:`#Disabled`},{default:t(()=>[...l[19]||=[s(`#`,-1)]]),_:1}),l[20]||=s(`Disabled`,-1)]),l[22]||=i(`p`,null,[s(`Use the `),i(`code`,null,`disabled`),s(` prop to disable CollapseItem.`)],-1),o(W,null,{default:t(()=>[...l[21]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` value = ref([`),i(`span`,{class:`hljs-number`},`1`),s(`])
`),i(`span`,{class:`hljs-keyword`},`const`),s(` disabled = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)  
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-space`),s(),i(`span`,{class:`hljs-attr`},`direction`),s(`=`),i(`span`,{class:`hljs-string`},`"column"`),s(),i(`span`,{class:`hljs-attr`},`:size`),s(`=`),i(`span`,{class:`hljs-string`},`"[8, 8]"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"disabled = !disabled"`),s(`>`)]),s(`
      {{ disabled ? 'enable' : 'disable' }}
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
    
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-collapse`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-collapse-item`),s(),i(`span`,{class:`hljs-attr`},`title`),s(`=`),i(`span`,{class:`hljs-string`},`"Title"`),s(),i(`span`,{class:`hljs-attr`},`:name`),s(`=`),i(`span`,{class:`hljs-string`},`"1"`),s(),i(`span`,{class:`hljs-attr`},`:disabled`),s(`=`),i(`span`,{class:`hljs-string`},`"disabled"`),s(`>`)]),s(`
        Text
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-collapse-item`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-collapse-item`),s(),i(`span`,{class:`hljs-attr`},`title`),s(`=`),i(`span`,{class:`hljs-string`},`"Title"`),s(),i(`span`,{class:`hljs-attr`},`:name`),s(`=`),i(`span`,{class:`hljs-string`},`"2"`),s(),i(`span`,{class:`hljs-attr`},`:disabled`),s(`=`),i(`span`,{class:`hljs-string`},`"disabled"`),s(`>`)]),s(`
        Text
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-collapse-item`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-collapse`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,C,[i(`h3`,w,[o(U,{to:`#CustomContent`},{default:t(()=>[...l[23]||=[s(`#`,-1)]]),_:1}),l[24]||=s(`Custom Content`,-1)]),o(W,null,{default:t(()=>[...l[25]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` value = ref([`),i(`span`,{class:`hljs-string`},`'1'`),s(`])  
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-collapse`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-collapse-item`),s(),i(`span`,{class:`hljs-attr`},`title`),s(`=`),i(`span`,{class:`hljs-string`},`"This is a Title"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"1"`),s(),i(`span`,{class:`hljs-attr`},`icon`),s(`=`),i(`span`,{class:`hljs-string`},`"account-circle"`),s(`>`)]),s(`
      Text
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-collapse-item`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-collapse-item`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"2"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`title`),s(`>`)]),s(`This is a Title`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`icon`),s(`>`)]),s(`^_^`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
      This is a content
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-collapse-item`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-collapse`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,T,[i(`h3`,E,[o(U,{to:`#ToggleAll`},{default:t(()=>[...l[26]||=[s(`#`,-1)]]),_:1}),l[27]||=s(`Toggle All`,-1)]),o(W,null,{default:t(()=>[...l[28]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` collapseRef = ref(`),i(`span`,{class:`hljs-literal`},`null`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` toggleAllValue = ref([`),i(`span`,{class:`hljs-string`},`'2'`),s(`, `),i(`span`,{class:`hljs-string`},`'4'`),s(`])  

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`toggleAll`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  collapseRef.value.toggleAll({ `),i(`span`,{class:`hljs-attr`},`expand`),s(`: `),i(`span`,{class:`hljs-string`},`'inverse'`),s(` })
}

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`toggleAllSkipDisabled`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  collapseRef.value.toggleAll({ `),i(`span`,{class:`hljs-attr`},`expand`),s(`: `),i(`span`,{class:`hljs-string`},`'inverse'`),s(`, `),i(`span`,{class:`hljs-attr`},`skipDisabled`),s(`: `),i(`span`,{class:`hljs-literal`},`true`),s(` })
}

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`openAll`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  collapseRef.value.toggleAll({ `),i(`span`,{class:`hljs-attr`},`expand`),s(`: `),i(`span`,{class:`hljs-literal`},`true`),s(` })
}

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`openAllSkipDisabled`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  collapseRef.value.toggleAll({ `),i(`span`,{class:`hljs-attr`},`expand`),s(`: `),i(`span`,{class:`hljs-literal`},`true`),s(`, `),i(`span`,{class:`hljs-attr`},`skipDisabled`),s(`: `),i(`span`,{class:`hljs-literal`},`true`),s(` })
}

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`closeAll`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  collapseRef.value.toggleAll({ `),i(`span`,{class:`hljs-attr`},`expand`),s(`: `),i(`span`,{class:`hljs-literal`},`false`),s(` })
}

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`closeAllSkipDisabled`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  collapseRef.value.toggleAll({ `),i(`span`,{class:`hljs-attr`},`expand`),s(`: `),i(`span`,{class:`hljs-literal`},`false`),s(`, `),i(`span`,{class:`hljs-attr`},`skipDisabled`),s(`: `),i(`span`,{class:`hljs-literal`},`true`),s(` })
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"toggleAll"`),s(),i(`span`,{class:`hljs-attr`},`style`),s(`=`),i(`span`,{class:`hljs-string`},`"margin: 8px"`),s(`>`)]),s(`Toggle All`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"toggleAllSkipDisabled"`),s(),i(`span`,{class:`hljs-attr`},`style`),s(`=`),i(`span`,{class:`hljs-string`},`"margin: 8px"`),s(`>`)]),s(`
    Toggle All(Skip Disabled)
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"openAll"`),s(),i(`span`,{class:`hljs-attr`},`style`),s(`=`),i(`span`,{class:`hljs-string`},`"margin: 8px"`),s(`>`)]),s(`Open All`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"openAllSkipDisabled"`),s(),i(`span`,{class:`hljs-attr`},`style`),s(`=`),i(`span`,{class:`hljs-string`},`"margin: 8px"`),s(`>`)]),s(`
    Open All(Skip Disabled)
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"closeAll"`),s(),i(`span`,{class:`hljs-attr`},`style`),s(`=`),i(`span`,{class:`hljs-string`},`"margin: 8px"`),s(`>`)]),s(`Close All`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"closeAllSkipDisabled"`),s(),i(`span`,{class:`hljs-attr`},`style`),s(`=`),i(`span`,{class:`hljs-string`},`"margin: 8px"`),s(`>`)]),s(`
    Close All(Skip Disabled)
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`

  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-collapse`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"toggleAllValue"`),s(),i(`span`,{class:`hljs-attr`},`ref`),s(`=`),i(`span`,{class:`hljs-string`},`"collapseRef"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-collapse-item`),s(),i(`span`,{class:`hljs-attr`},`title`),s(`=`),i(`span`,{class:`hljs-string`},`"title"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"1"`),s(`>`)]),s(`This is a content.`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-collapse-item`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-collapse-item`),s(),i(`span`,{class:`hljs-attr`},`title`),s(`=`),i(`span`,{class:`hljs-string`},`"title"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"2"`),s(`>`)]),s(`This is a content.`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-collapse-item`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-collapse-item`),s(),i(`span`,{class:`hljs-attr`},`title`),s(`=`),i(`span`,{class:`hljs-string`},`"title"`),s(),i(`span`,{class:`hljs-attr`},`disabled`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"3"`),s(`>`)]),s(`This is a content.`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-collapse-item`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-collapse-item`),s(),i(`span`,{class:`hljs-attr`},`title`),s(`=`),i(`span`,{class:`hljs-string`},`"title"`),s(),i(`span`,{class:`hljs-attr`},`disabled`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"4"`),s(`>`)]),s(`This is a content.`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-collapse-item`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-collapse`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),l[48]||=i(`h2`,null,`API`,-1),i(`div`,D,[i(`h3`,O,[o(U,{to:`#Props`},{default:t(()=>[...l[29]||=[s(`#`,-1)]]),_:1}),l[30]||=s(`Props`,-1)]),l[31]||=c(`<h4>Collapse Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>Names of current active panels</td><td>accordion mode： <em>string | number</em> <br> non-accordion mode：<em>string[] | number[]</em></td><td><code>-</code></td></tr><tr><td><code>accordion</code></td><td>Whether to be accordion mode</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>elevation</code></td><td>Elevation level, options <code>true</code> <code>false</code> and level of <code>0-24</code></td><td><em>string | number | boolean</em></td><td><code>true</code></td></tr><tr><td><code>offset</code></td><td>Whether to show margin</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>divider</code></td><td>Whether to show divider</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table><h4>CollapseItem Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>name</code></td><td>Unique identifier, defaults to index value</td><td><em>string | number</em></td><td><code>index</code></td></tr><tr><td><code>title</code></td><td>Title</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>Icon name</td><td><em>string</em></td><td><code>chevron-down</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable collapse</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table>`,4)]),i(`div`,k,[i(`h3`,A,[o(U,{to:`#Methods`},{default:t(()=>[...l[32]||=[s(`#`,-1)]]),_:1}),l[33]||=s(`Methods`,-1)]),l[34]||=c(`<table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>toggleAll</code></td><td>Expand or close all items</td><td><code>options: CollapseToggleAllOptions</code></td><td><code>-</code></td></tr></tbody></table>`,1)]),i(`div`,j,[i(`h3`,M,[o(U,{to:`#CollapseToggleAllOptions`},{default:t(()=>[...l[35]||=[s(`#`,-1)]]),_:1}),l[36]||=s(`CollapseToggleAllOptions`,-1)]),l[37]||=c(`<table><thead><tr><th>Option</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>expand</code></td><td>Set <code>&#39;inverse&#39;</code> to switch the status of all items, including disabled items; set <code>boolean</code> to control the expansion or collapse of all items</td><td><em>&#39;inverse&#39; | boolean</em></td><td><code>-</code></td></tr><tr><td><code>skipDisabled</code></td><td>Skip the disabled item</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table>`,1)]),i(`div`,N,[i(`h3`,P,[o(U,{to:`#Events`},{default:t(()=>[...l[38]||=[s(`#`,-1)]]),_:1}),l[39]||=s(`Events`,-1)]),l[40]||=c(`<h4>Collapse Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>Emitted when active index changed</td><td><code>value</code></td></tr></tbody></table>`,2)]),i(`div`,F,[i(`h3`,I,[o(U,{to:`#Slots`},{default:t(()=>[...l[41]||=[s(`#`,-1)]]),_:1}),l[42]||=s(`Slots`,-1)]),l[43]||=c(`<h4>Collapse Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Content of collapse</td><td><code>-</code></td></tr></tbody></table><h4>CollapseItem Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Content</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>Title</td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>Custom right icon</td><td><code>-</code></td></tr></tbody></table>`,4)]),i(`div`,L,[i(`h3`,R,[o(U,{to:`#StyleVariables`},{default:t(()=>[...l[44]||=[s(`#`,-1)]]),_:1}),l[45]||=s(`Style Variables`,-1)]),l[46]||=c(`<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--collapse-background</code></td><td><code>var(--color-surface-container-highest)</code></td></tr><tr><td><code>--collapse-text-color</code></td><td><code>#232222</code></td></tr><tr><td><code>--collapse-header-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--collapse-header-padding</code></td><td><code>10px 12px</code></td></tr><tr><td><code>--collapse-content-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--collapse-content-padding</code></td><td><code>0 12px 10px</code></td></tr><tr><td><code>--collapse-item-margin-top</code></td><td><code>16px</code></td></tr><tr><td><code>--collapse-disable-color</code></td><td><code>#bdbdbd</code></td></tr><tr><td><code>--collapse-border-top</code></td><td><code>thin solid var(--color-outline)</code></td></tr></tbody></table>`,2)])])}var B=e(l,[[`render`,z]]);export{B as default};