import{L as e,N as t,W as n,c as r,d as i,g as a,h as o,m as s}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as c}from"./_plugin-vue_export-helper-V-yks4gF.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`Intro`},p={class:`card`},m={id:`BasicUsage`},h={class:`card`},g={id:`HideMargin`},_={class:`card`},v={id:`ControlledDivider`},y={class:`card`},b={id:`AccordionMode`},x={class:`card`},S={id:`Disabled`},C={class:`card`},w={id:`CustomContent`},T={class:`card`},E={id:`ToggleAll`},D={class:`card`},O={id:`Props`},k={class:`card`},A={id:`Methods`},j={class:`card`},M={id:`CollapseToggleAllOptions`},N={class:`card`},P={id:`Events`},F={class:`card`},I={id:`Slots`},L={class:`card`},R={id:`StyleVariables`};function z(c,l,z,B,V,H){let U=e(`router-link`),W=e(`var-site-code-example`);return t(),i(`div`,u,[l[47]||=r(`h1`,null,`Collapse`,-1),r(`div`,d,[r(`h3`,f,[a(U,{to:`#Intro`},{default:n(()=>[...l[0]||=[o(`#`,-1)]]),_:1}),l[1]||=o(`Intro`,-1)]),l[2]||=r(`p`,null,`A content area which can be collapsed and expanded.`,-1)]),r(`div`,p,[r(`h3`,m,[a(U,{to:`#BasicUsage`},{default:n(()=>[...l[3]||=[o(`#`,-1)]]),_:1}),l[4]||=o(`Basic Usage`,-1)]),l[6]||=r(`p`,null,[o(`Use `),r(`code`,null,`v-model`),o(` to control the name of active panels. `),r(`code`,null,`value`),o(` is an Array.`)],-1),a(W,null,{default:n(()=>[...l[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` value = ref([`),r(`span`,{class:`hljs-string`},`'1'`),o(`])

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`handleChange`),o(`(`),r(`span`,{class:`hljs-params`},`val`),o(`) `)]),o(`{
  `),r(`span`,{class:`hljs-built_in`},`console`),o(`.log(val)
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-collapse`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value"`),o(` @`),r(`span`,{class:`hljs-attr`},`change`),o(`=`),r(`span`,{class:`hljs-string`},`"handleChange"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-collapse-item`),o(),r(`span`,{class:`hljs-attr`},`title`),o(`=`),r(`span`,{class:`hljs-string`},`"Title"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"1"`),o(`>`)]),o(`Text`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-collapse-item`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-collapse-item`),o(),r(`span`,{class:`hljs-attr`},`title`),o(`=`),r(`span`,{class:`hljs-string`},`"Title"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"2"`),o(`>`)]),o(`Text`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-collapse-item`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-collapse`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,h,[r(`h3`,g,[a(U,{to:`#HideMargin`},{default:n(()=>[...l[7]||=[o(`#`,-1)]]),_:1}),l[8]||=o(`Hide Margin`,-1)]),l[10]||=r(`p`,null,[o(`Use `),r(`code`,null,`offset`),o(` prop to hide the margin.`)],-1),a(W,null,{default:n(()=>[...l[9]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` value = ref([`),r(`span`,{class:`hljs-string`},`'2'`),o(`])
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-collapse`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value"`),o(),r(`span`,{class:`hljs-attr`},`:offset`),o(`=`),r(`span`,{class:`hljs-string`},`"false"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-collapse-item`),o(),r(`span`,{class:`hljs-attr`},`title`),o(`=`),r(`span`,{class:`hljs-string`},`"Title"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"1"`),o(`>`)]),o(`Text`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-collapse-item`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-collapse-item`),o(),r(`span`,{class:`hljs-attr`},`title`),o(`=`),r(`span`,{class:`hljs-string`},`"Title"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"2"`),o(`>`)]),o(`Text`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-collapse-item`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-collapse`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,_,[r(`h3`,v,[a(U,{to:`#ControlledDivider`},{default:n(()=>[...l[11]||=[o(`#`,-1)]]),_:1}),l[12]||=o(`Controlled Divider`,-1)]),l[14]||=r(`p`,null,[o(`Use `),r(`code`,null,`divider`),o(` prop to hide the divider.`)],-1),a(W,null,{default:n(()=>[...l[13]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` value = ref([])
`),r(`span`,{class:`hljs-keyword`},`const`),o(` divider = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"divider = !divider"`),o(`>`)]),o(`
    {{ divider ? 'Hide Divider' : 'Show Divider' }}
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-collapse`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value"`),o(),r(`span`,{class:`hljs-attr`},`:divider`),o(`=`),r(`span`,{class:`hljs-string`},`"divider"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-collapse-item`),o(),r(`span`,{class:`hljs-attr`},`title`),o(`=`),r(`span`,{class:`hljs-string`},`"Title"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"1"`),o(`>`)]),o(`Text`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-collapse-item`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-collapse-item`),o(),r(`span`,{class:`hljs-attr`},`title`),o(`=`),r(`span`,{class:`hljs-string`},`"Title"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"2"`),o(`>`)]),o(`Text`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-collapse-item`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-collapse-item`),o(),r(`span`,{class:`hljs-attr`},`title`),o(`=`),r(`span`,{class:`hljs-string`},`"Title"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"3"`),o(`>`)]),o(`Text`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-collapse-item`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-collapse`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,y,[r(`h3`,b,[a(U,{to:`#AccordionMode`},{default:n(()=>[...l[15]||=[o(`#`,-1)]]),_:1}),l[16]||=o(`Accordion Mode`,-1)]),l[18]||=r(`p`,null,[o(`Use the `),r(`code`,null,`accordion`),o(` property to enable accordion mode. `),r(`code`,null,`value`),o(` can be a string or a number.`)],-1),a(W,null,{default:n(()=>[...l[17]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` value = ref(`),r(`span`,{class:`hljs-string`},`''`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-collapse`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value"`),o(),r(`span`,{class:`hljs-attr`},`accordion`),o(),r(`span`,{class:`hljs-attr`},`:offset`),o(`=`),r(`span`,{class:`hljs-string`},`"false"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-collapse-item`),o(),r(`span`,{class:`hljs-attr`},`title`),o(`=`),r(`span`,{class:`hljs-string`},`"Title"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"1"`),o(`>`)]),o(`Text`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-collapse-item`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-collapse-item`),o(),r(`span`,{class:`hljs-attr`},`title`),o(`=`),r(`span`,{class:`hljs-string`},`"Title"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"2"`),o(`>`)]),o(`Text`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-collapse-item`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-collapse`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,x,[r(`h3`,S,[a(U,{to:`#Disabled`},{default:n(()=>[...l[19]||=[o(`#`,-1)]]),_:1}),l[20]||=o(`Disabled`,-1)]),l[22]||=r(`p`,null,[o(`Use the `),r(`code`,null,`disabled`),o(` prop to disable CollapseItem.`)],-1),a(W,null,{default:n(()=>[...l[21]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` value = ref([`),r(`span`,{class:`hljs-number`},`1`),o(`])
`),r(`span`,{class:`hljs-keyword`},`const`),o(` disabled = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)  
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-space`),o(),r(`span`,{class:`hljs-attr`},`direction`),o(`=`),r(`span`,{class:`hljs-string`},`"column"`),o(),r(`span`,{class:`hljs-attr`},`:size`),o(`=`),r(`span`,{class:`hljs-string`},`"[8, 8]"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"disabled = !disabled"`),o(`>`)]),o(`
      {{ disabled ? 'enable' : 'disable' }}
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
    
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-collapse`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-collapse-item`),o(),r(`span`,{class:`hljs-attr`},`title`),o(`=`),r(`span`,{class:`hljs-string`},`"Title"`),o(),r(`span`,{class:`hljs-attr`},`:name`),o(`=`),r(`span`,{class:`hljs-string`},`"1"`),o(),r(`span`,{class:`hljs-attr`},`:disabled`),o(`=`),r(`span`,{class:`hljs-string`},`"disabled"`),o(`>`)]),o(`
        Text
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-collapse-item`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-collapse-item`),o(),r(`span`,{class:`hljs-attr`},`title`),o(`=`),r(`span`,{class:`hljs-string`},`"Title"`),o(),r(`span`,{class:`hljs-attr`},`:name`),o(`=`),r(`span`,{class:`hljs-string`},`"2"`),o(),r(`span`,{class:`hljs-attr`},`:disabled`),o(`=`),r(`span`,{class:`hljs-string`},`"disabled"`),o(`>`)]),o(`
        Text
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-collapse-item`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-collapse`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-space`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,C,[r(`h3`,w,[a(U,{to:`#CustomContent`},{default:n(()=>[...l[23]||=[o(`#`,-1)]]),_:1}),l[24]||=o(`Custom Content`,-1)]),a(W,null,{default:n(()=>[...l[25]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` value = ref([`),r(`span`,{class:`hljs-string`},`'1'`),o(`])  
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-collapse`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-collapse-item`),o(),r(`span`,{class:`hljs-attr`},`title`),o(`=`),r(`span`,{class:`hljs-string`},`"This is a Title"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"1"`),o(),r(`span`,{class:`hljs-attr`},`icon`),o(`=`),r(`span`,{class:`hljs-string`},`"account-circle"`),o(`>`)]),o(`
      Text
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-collapse-item`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-collapse-item`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"2"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`title`),o(`>`)]),o(`This is a Title`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`icon`),o(`>`)]),o(`^_^`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
      This is a content
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-collapse-item`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-collapse`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,T,[r(`h3`,E,[a(U,{to:`#ToggleAll`},{default:n(()=>[...l[26]||=[o(`#`,-1)]]),_:1}),l[27]||=o(`Toggle All`,-1)]),a(W,null,{default:n(()=>[...l[28]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` collapseRef = ref(`),r(`span`,{class:`hljs-literal`},`null`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` toggleAllValue = ref([`),r(`span`,{class:`hljs-string`},`'2'`),o(`, `),r(`span`,{class:`hljs-string`},`'4'`),o(`])  

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`toggleAll`),o(`(`),r(`span`,{class:`hljs-params`}),o(`) `)]),o(`{
  collapseRef.value.toggleAll({ `),r(`span`,{class:`hljs-attr`},`expand`),o(`: `),r(`span`,{class:`hljs-string`},`'inverse'`),o(` })
}

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`toggleAllSkipDisabled`),o(`(`),r(`span`,{class:`hljs-params`}),o(`) `)]),o(`{
  collapseRef.value.toggleAll({ `),r(`span`,{class:`hljs-attr`},`expand`),o(`: `),r(`span`,{class:`hljs-string`},`'inverse'`),o(`, `),r(`span`,{class:`hljs-attr`},`skipDisabled`),o(`: `),r(`span`,{class:`hljs-literal`},`true`),o(` })
}

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`openAll`),o(`(`),r(`span`,{class:`hljs-params`}),o(`) `)]),o(`{
  collapseRef.value.toggleAll({ `),r(`span`,{class:`hljs-attr`},`expand`),o(`: `),r(`span`,{class:`hljs-literal`},`true`),o(` })
}

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`openAllSkipDisabled`),o(`(`),r(`span`,{class:`hljs-params`}),o(`) `)]),o(`{
  collapseRef.value.toggleAll({ `),r(`span`,{class:`hljs-attr`},`expand`),o(`: `),r(`span`,{class:`hljs-literal`},`true`),o(`, `),r(`span`,{class:`hljs-attr`},`skipDisabled`),o(`: `),r(`span`,{class:`hljs-literal`},`true`),o(` })
}

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`closeAll`),o(`(`),r(`span`,{class:`hljs-params`}),o(`) `)]),o(`{
  collapseRef.value.toggleAll({ `),r(`span`,{class:`hljs-attr`},`expand`),o(`: `),r(`span`,{class:`hljs-literal`},`false`),o(` })
}

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`closeAllSkipDisabled`),o(`(`),r(`span`,{class:`hljs-params`}),o(`) `)]),o(`{
  collapseRef.value.toggleAll({ `),r(`span`,{class:`hljs-attr`},`expand`),o(`: `),r(`span`,{class:`hljs-literal`},`false`),o(`, `),r(`span`,{class:`hljs-attr`},`skipDisabled`),o(`: `),r(`span`,{class:`hljs-literal`},`true`),o(` })
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"toggleAll"`),o(),r(`span`,{class:`hljs-attr`},`style`),o(`=`),r(`span`,{class:`hljs-string`},`"margin: 8px"`),o(`>`)]),o(`Toggle All`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"toggleAllSkipDisabled"`),o(),r(`span`,{class:`hljs-attr`},`style`),o(`=`),r(`span`,{class:`hljs-string`},`"margin: 8px"`),o(`>`)]),o(`
    Toggle All(Skip Disabled)
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"openAll"`),o(),r(`span`,{class:`hljs-attr`},`style`),o(`=`),r(`span`,{class:`hljs-string`},`"margin: 8px"`),o(`>`)]),o(`Open All`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"openAllSkipDisabled"`),o(),r(`span`,{class:`hljs-attr`},`style`),o(`=`),r(`span`,{class:`hljs-string`},`"margin: 8px"`),o(`>`)]),o(`
    Open All(Skip Disabled)
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"closeAll"`),o(),r(`span`,{class:`hljs-attr`},`style`),o(`=`),r(`span`,{class:`hljs-string`},`"margin: 8px"`),o(`>`)]),o(`Close All`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"closeAllSkipDisabled"`),o(),r(`span`,{class:`hljs-attr`},`style`),o(`=`),r(`span`,{class:`hljs-string`},`"margin: 8px"`),o(`>`)]),o(`
    Close All(Skip Disabled)
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`

  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-collapse`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"toggleAllValue"`),o(),r(`span`,{class:`hljs-attr`},`ref`),o(`=`),r(`span`,{class:`hljs-string`},`"collapseRef"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-collapse-item`),o(),r(`span`,{class:`hljs-attr`},`title`),o(`=`),r(`span`,{class:`hljs-string`},`"title"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"1"`),o(`>`)]),o(`This is a content.`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-collapse-item`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-collapse-item`),o(),r(`span`,{class:`hljs-attr`},`title`),o(`=`),r(`span`,{class:`hljs-string`},`"title"`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"2"`),o(`>`)]),o(`This is a content.`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-collapse-item`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-collapse-item`),o(),r(`span`,{class:`hljs-attr`},`title`),o(`=`),r(`span`,{class:`hljs-string`},`"title"`),o(),r(`span`,{class:`hljs-attr`},`disabled`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"3"`),o(`>`)]),o(`This is a content.`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-collapse-item`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-collapse-item`),o(),r(`span`,{class:`hljs-attr`},`title`),o(`=`),r(`span`,{class:`hljs-string`},`"title"`),o(),r(`span`,{class:`hljs-attr`},`disabled`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"4"`),o(`>`)]),o(`This is a content.`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-collapse-item`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-collapse`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),l[48]||=r(`h2`,null,`API`,-1),r(`div`,D,[r(`h3`,O,[a(U,{to:`#Props`},{default:n(()=>[...l[29]||=[o(`#`,-1)]]),_:1}),l[30]||=o(`Props`,-1)]),l[31]||=s(`<h4>Collapse Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>Names of current active panels</td><td>accordion mode： <em>string | number</em> <br> non-accordion mode：<em>string[] | number[]</em></td><td><code>-</code></td></tr><tr><td><code>accordion</code></td><td>Whether to be accordion mode</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>elevation</code></td><td>Elevation level, options <code>true</code> <code>false</code> and level of <code>0-24</code></td><td><em>string | number | boolean</em></td><td><code>true</code></td></tr><tr><td><code>offset</code></td><td>Whether to show margin</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>divider</code></td><td>Whether to show divider</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table><h4>CollapseItem Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>name</code></td><td>Unique identifier, defaults to index value</td><td><em>string | number</em></td><td><code>index</code></td></tr><tr><td><code>title</code></td><td>Title</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>Icon name</td><td><em>string</em></td><td><code>chevron-down</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable collapse</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table>`,4)]),r(`div`,k,[r(`h3`,A,[a(U,{to:`#Methods`},{default:n(()=>[...l[32]||=[o(`#`,-1)]]),_:1}),l[33]||=o(`Methods`,-1)]),l[34]||=s(`<table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>toggleAll</code></td><td>Expand or close all items</td><td><code>options: CollapseToggleAllOptions</code></td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,j,[r(`h3`,M,[a(U,{to:`#CollapseToggleAllOptions`},{default:n(()=>[...l[35]||=[o(`#`,-1)]]),_:1}),l[36]||=o(`CollapseToggleAllOptions`,-1)]),l[37]||=s(`<table><thead><tr><th>Option</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>expand</code></td><td>Set <code>&#39;inverse&#39;</code> to switch the status of all items, including disabled items; set <code>boolean</code> to control the expansion or collapse of all items</td><td><em>&#39;inverse&#39; | boolean</em></td><td><code>-</code></td></tr><tr><td><code>skipDisabled</code></td><td>Skip the disabled item</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table>`,1)]),r(`div`,N,[r(`h3`,P,[a(U,{to:`#Events`},{default:n(()=>[...l[38]||=[o(`#`,-1)]]),_:1}),l[39]||=o(`Events`,-1)]),l[40]||=s(`<h4>Collapse Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>Emitted when active index changed</td><td><code>value</code></td></tr></tbody></table>`,2)]),r(`div`,F,[r(`h3`,I,[a(U,{to:`#Slots`},{default:n(()=>[...l[41]||=[o(`#`,-1)]]),_:1}),l[42]||=o(`Slots`,-1)]),l[43]||=s(`<h4>Collapse Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Content of collapse</td><td><code>-</code></td></tr></tbody></table><h4>CollapseItem Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Content</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>Title</td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>Custom right icon</td><td><code>-</code></td></tr></tbody></table>`,4)]),r(`div`,L,[r(`h3`,R,[a(U,{to:`#StyleVariables`},{default:n(()=>[...l[44]||=[o(`#`,-1)]]),_:1}),l[45]||=o(`Style Variables`,-1)]),l[46]||=s(`<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--collapse-background</code></td><td><code>var(--color-surface-container-highest)</code></td></tr><tr><td><code>--collapse-text-color</code></td><td><code>#232222</code></td></tr><tr><td><code>--collapse-header-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--collapse-header-padding</code></td><td><code>10px 12px</code></td></tr><tr><td><code>--collapse-content-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--collapse-content-padding</code></td><td><code>0 12px 10px</code></td></tr><tr><td><code>--collapse-item-margin-top</code></td><td><code>16px</code></td></tr><tr><td><code>--collapse-disable-color</code></td><td><code>#bdbdbd</code></td></tr><tr><td><code>--collapse-border-top</code></td><td><code>thin solid var(--color-outline)</code></td></tr></tbody></table>`,2)])])}var B=c(l,[[`render`,z]]);export{B as default};