import{L as e,N as t,W as n,c as r,d as ee,g as i,h as a,m as o}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as s}from"./_plugin-vue_export-helper-V-yks4gF.js";var c={components:{}},te={class:`varlet-site-doc`},l={class:`card`},u={id:`Intro`},d={class:`card`},f={id:`BasicUsage`},p={class:`card`},m={id:`SetStateValue`},h={class:`card`},g={id:`ModifyTheIconAndColor`},_={class:`card`},v={id:`Disabled`},y={class:`card`},b={id:`Readonly`},x={class:`card`},S={id:`Indeterminate`},C={class:`card`},w={id:`CheckboxGroup`},T={class:`card`},E={id:`OptionsAPI`},D={class:`card`},O={id:`CustomFields`},k={class:`card`},A={id:`VerticalDirection`},j={class:`card`},ne={id:`MaximumNumberOfChecked`},M={class:`card`},N={id:`CheckboxValidation`},P={class:`card`},F={id:`CheckboxValidationWithZod`},I={class:`card`},L={id:`CheckboxGroupValidate`},R={class:`card`},z={id:`CheckboxGroupValidatewithZod`},B={class:`card`},V={id:`Props`},H={class:`card`},U={id:`Methods`},W={class:`card`},G={id:`Events`},K={class:`card`},q={id:`Slots`},J={class:`card`},Y={id:`StyleVariables`};function X(s,c,X,Z,re,ie){let Q=e(`router-link`),$=e(`var-site-code-example`);return t(),ee(`div`,te,[c[67]||=r(`h1`,null,`Checkbox`,-1),r(`div`,l,[r(`h3`,u,[i(Q,{to:`#Intro`},{default:n(()=>[...c[0]||=[a(`#`,-1)]]),_:1}),c[1]||=a(`Intro`,-1)]),c[2]||=r(`p`,null,`A group of options for multiple choices.`,-1)]),r(`div`,d,[r(`h3`,f,[i(Q,{to:`#BasicUsage`},{default:n(()=>[...c[3]||=[a(`#`,-1)]]),_:1}),c[4]||=a(`Basic Usage`,-1)]),i($,null,{default:n(()=>[...c[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` value = ref(`),r(`span`,{class:`hljs-literal`},`false`),a(`)
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-checkbox`),a(),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"value"`),a(`>`)]),a(`Current value: {{ value }}`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-checkbox`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,p,[r(`h3`,m,[i(Q,{to:`#SetStateValue`},{default:n(()=>[...c[6]||=[a(`#`,-1)]]),_:1}),c[7]||=a(`Set State Value`,-1)]),i($,null,{default:n(()=>[...c[8]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` value = ref(`),r(`span`,{class:`hljs-number`},`0`),a(`)
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-checkbox`),a(`
    `),r(`span`,{class:`hljs-attr`},`:unchecked-value`),a(`=`),r(`span`,{class:`hljs-string`},`"0"`),a(`
    `),r(`span`,{class:`hljs-attr`},`:checked-value`),a(`=`),r(`span`,{class:`hljs-string`},`"1"`),a(`
    `),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"value"`),a(`
  >`)]),a(`
    Current value: {{ value }}
  `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-checkbox`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,h,[r(`h3`,g,[i(Q,{to:`#ModifyTheIconAndColor`},{default:n(()=>[...c[9]||=[a(`#`,-1)]]),_:1}),c[10]||=a(`Modify The Icon And Color`,-1)]),i($,null,{default:n(()=>[...c[11]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` value = ref(`),r(`span`,{class:`hljs-literal`},`false`),a(`)
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-checkbox`),a(`
    `),r(`span`,{class:`hljs-attr`},`unchecked-color`),a(`=`),r(`span`,{class:`hljs-string`},`"var(--color-warning)"`),a(` 
    `),r(`span`,{class:`hljs-attr`},`checked-color`),a(`=`),r(`span`,{class:`hljs-string`},`"var(--color-danger)"`),a(`
    `),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"value"`),a(`
  >`)]),a(`
    `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(` #`),r(`span`,{class:`hljs-attr`},`unchecked-icon`),a(`>`)]),a(`
      `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-icon`),a(),r(`span`,{class:`hljs-attr`},`name`),a(`=`),r(`span`,{class:`hljs-string`},`"heart-half-full"`),a(),r(`span`,{class:`hljs-attr`},`size`),a(`=`),r(`span`,{class:`hljs-string`},`"24px"`),a(`/>`)]),a(`
    `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
    `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(` #`),r(`span`,{class:`hljs-attr`},`checked-icon`),a(`>`)]),a(`
      `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-icon`),a(),r(`span`,{class:`hljs-attr`},`name`),a(`=`),r(`span`,{class:`hljs-string`},`"heart"`),a(),r(`span`,{class:`hljs-attr`},`size`),a(`=`),r(`span`,{class:`hljs-string`},`"24px"`),a(`/>`)]),a(`
    `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
    `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(` #`),r(`span`,{class:`hljs-attr`},`default`),a(`>`)]),a(`
      Current value: {{ value }}
    `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-checkbox`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,_,[r(`h3`,v,[i(Q,{to:`#Disabled`},{default:n(()=>[...c[12]||=[a(`#`,-1)]]),_:1}),c[13]||=a(`Disabled`,-1)]),i($,null,{default:n(()=>[...c[14]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` value = ref(`),r(`span`,{class:`hljs-literal`},`false`),a(`)
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-checkbox`),a(),r(`span`,{class:`hljs-attr`},`disabled`),a(),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"value"`),a(`>`)]),a(`Current value: {{ value }}`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-checkbox`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,y,[r(`h3`,b,[i(Q,{to:`#Readonly`},{default:n(()=>[...c[15]||=[a(`#`,-1)]]),_:1}),c[16]||=a(`Readonly`,-1)]),i($,null,{default:n(()=>[...c[17]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` value = ref(`),r(`span`,{class:`hljs-literal`},`false`),a(`)
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-checkbox`),a(),r(`span`,{class:`hljs-attr`},`readonly`),a(),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"value"`),a(`>`)]),a(`Current value: {{ value }}`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-checkbox`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,x,[r(`h3`,S,[i(Q,{to:`#Indeterminate`},{default:n(()=>[...c[18]||=[a(`#`,-1)]]),_:1}),c[19]||=a(`Indeterminate`,-1)]),i($,null,{default:n(()=>[...c[20]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` value = ref(`),r(`span`,{class:`hljs-literal`},`false`),a(`)
`),r(`span`,{class:`hljs-keyword`},`const`),a(` indeterminate = ref(`),r(`span`,{class:`hljs-literal`},`true`),a(`)
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-space`),a(),r(`span`,{class:`hljs-attr`},`:size`),a(`=`),r(`span`,{class:`hljs-string`},`"[0, 10]"`),a(`>`)]),a(`
    `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-checkbox`),a(),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"value"`),a(),r(`span`,{class:`hljs-attr`},`v-model:indeterminate`),a(`=`),r(`span`,{class:`hljs-string`},`"indeterminate"`),a(`>`)]),a(`
      Current value: {{ value }}
    `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-checkbox`),a(`>`)]),a(`
    `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"primary"`),a(` @`),r(`span`,{class:`hljs-attr`},`click`),a(`=`),r(`span`,{class:`hljs-string`},`"indeterminate = !indeterminate"`),a(`>`)]),a(`Toggle`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-space`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,C,[r(`h3`,w,[i(Q,{to:`#CheckboxGroup`},{default:n(()=>[...c[21]||=[a(`#`,-1)]]),_:1}),c[22]||=a(`CheckboxGroup`,-1)]),c[24]||=r(`p`,null,[a(`In the checkbox group, you must set the `),r(`code`,null,`checked-value`),a(` to identify the `),r(`code`,null,`checkbox`),a(`, The checkbox group collects all checked identifiers.`)],-1),i($,null,{default:n(()=>[...c[23]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` value = ref([])
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-checkbox-group`),a(),r(`span`,{class:`hljs-attr`},`ref`),a(`=`),r(`span`,{class:`hljs-string`},`"group"`),a(),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"value"`),a(`>`)]),a(`
    `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-checkbox`),a(),r(`span`,{class:`hljs-attr`},`:checked-value`),a(`=`),r(`span`,{class:`hljs-string`},`"0"`),a(`>`)]),a(`Eat`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-checkbox`),a(`>`)]),a(`
    `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-checkbox`),a(),r(`span`,{class:`hljs-attr`},`:checked-value`),a(`=`),r(`span`,{class:`hljs-string`},`"1"`),a(`>`)]),a(`Sleep`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-checkbox`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-checkbox-group`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-space`),a(),r(`span`,{class:`hljs-attr`},`:size`),a(`=`),r(`span`,{class:`hljs-string`},`"[0, 10]"`),a(`>`)]),a(`
    `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(`
      `),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"primary"`),a(`
      @`),r(`span`,{class:`hljs-attr`},`click`),a(`=`),r(`span`,{class:`hljs-string`},`"$refs.group.checkAll()"`),a(`
    >`)]),a(`
      Check All
    `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
    `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-button`),a(`
      `),r(`span`,{class:`hljs-attr`},`type`),a(`=`),r(`span`,{class:`hljs-string`},`"primary"`),a(`
      @`),r(`span`,{class:`hljs-attr`},`click`),a(`=`),r(`span`,{class:`hljs-string`},`"$refs.group.inverseAll()"`),a(`
    >`)]),a(`
      Inverse All
    `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-button`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-space`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`div`),a(`>`)]),a(`Current value: {{ value }}`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`div`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,T,[r(`h3`,E,[i(Q,{to:`#OptionsAPI`},{default:n(()=>[...c[25]||=[a(`#`,-1)]]),_:1}),c[26]||=a(`Options API`,-1)]),c[28]||=r(`p`,null,[a(`Setting child elements via the `),r(`code`,null,`options`),a(` prop.`)],-1),i($,null,{default:n(()=>[...c[27]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` value = ref([])
`),r(`span`,{class:`hljs-keyword`},`const`),a(` options = ref([
  { `),r(`span`,{class:`hljs-attr`},`label`),a(`: `),r(`span`,{class:`hljs-string`},`'Eat'`),a(`, `),r(`span`,{class:`hljs-attr`},`value`),a(`: `),r(`span`,{class:`hljs-number`},`0`),a(` },
  { `),r(`span`,{class:`hljs-attr`},`label`),a(`: `),r(`span`,{class:`hljs-string`},`'Sleep'`),a(`, `),r(`span`,{class:`hljs-attr`},`value`),a(`: `),r(`span`,{class:`hljs-number`},`1`),a(` },
  { `),r(`span`,{class:`hljs-attr`},`label`),a(`: `),r(`span`,{class:`hljs-string`},`'Game'`),a(`, `),r(`span`,{class:`hljs-attr`},`value`),a(`: `),r(`span`,{class:`hljs-number`},`2`),a(`, `),r(`span`,{class:`hljs-attr`},`disabled`),a(`: `),r(`span`,{class:`hljs-literal`},`true`),a(` },
])
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-checkbox-group`),a(),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"value"`),a(),r(`span`,{class:`hljs-attr`},`:options`),a(`=`),r(`span`,{class:`hljs-string`},`"options"`),a(` />`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`div`),a(`>`)]),a(`Current value: {{ value }}`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`div`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,D,[r(`h3`,O,[i(Q,{to:`#CustomFields`},{default:n(()=>[...c[29]||=[a(`#`,-1)]]),_:1}),c[30]||=a(`Custom Fields`,-1)]),c[32]||=r(`p`,null,[a(`Customize the format of the data in `),r(`code`,null,`options`),a(` through the `),r(`code`,null,`label-key`),a(` and `),r(`code`,null,`value-key`),a(` attributes.`)],-1),i($,null,{default:n(()=>[...c[31]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` value = ref([])
`),r(`span`,{class:`hljs-keyword`},`const`),a(` options = ref([
  { `),r(`span`,{class:`hljs-attr`},`name`),a(`: `),r(`span`,{class:`hljs-string`},`'Eat'`),a(`, `),r(`span`,{class:`hljs-attr`},`id`),a(`: `),r(`span`,{class:`hljs-number`},`0`),a(` },
  { `),r(`span`,{class:`hljs-attr`},`name`),a(`: `),r(`span`,{class:`hljs-string`},`'Sleep'`),a(`, `),r(`span`,{class:`hljs-attr`},`id`),a(`: `),r(`span`,{class:`hljs-number`},`1`),a(` },
  { `),r(`span`,{class:`hljs-attr`},`name`),a(`: `),r(`span`,{class:`hljs-string`},`'Game'`),a(`, `),r(`span`,{class:`hljs-attr`},`id`),a(`: `),r(`span`,{class:`hljs-number`},`2`),a(` },
])
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-checkbox-group`),a(),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"value"`),a(),r(`span`,{class:`hljs-attr`},`:options`),a(`=`),r(`span`,{class:`hljs-string`},`"options"`),a(),r(`span`,{class:`hljs-attr`},`label-key`),a(`=`),r(`span`,{class:`hljs-string`},`"name"`),a(),r(`span`,{class:`hljs-attr`},`value-key`),a(`=`),r(`span`,{class:`hljs-string`},`"id"`),a(` />`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`div`),a(`>`)]),a(`Current value: {{ value }}`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`div`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,k,[r(`h3`,A,[i(Q,{to:`#VerticalDirection`},{default:n(()=>[...c[33]||=[a(`#`,-1)]]),_:1}),c[34]||=a(`Vertical Direction`,-1)]),i($,null,{default:n(()=>[...c[35]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` value = ref([])
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-checkbox-group`),a(),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"value"`),a(),r(`span`,{class:`hljs-attr`},`direction`),a(`=`),r(`span`,{class:`hljs-string`},`"vertical"`),a(`>`)]),a(`
    `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-checkbox`),a(),r(`span`,{class:`hljs-attr`},`:checked-value`),a(`=`),r(`span`,{class:`hljs-string`},`"0"`),a(`>`)]),a(`Eat`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-checkbox`),a(`>`)]),a(`
    `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-checkbox`),a(),r(`span`,{class:`hljs-attr`},`:checked-value`),a(`=`),r(`span`,{class:`hljs-string`},`"1"`),a(`>`)]),a(`Sleep`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-checkbox`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-checkbox-group`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,j,[r(`h3`,ne,[i(Q,{to:`#MaximumNumberOfChecked`},{default:n(()=>[...c[36]||=[a(`#`,-1)]]),_:1}),c[37]||=a(`Maximum Number Of Checked`,-1)]),c[39]||=r(`p`,null,[a(`In a checkbox group, you can limit the maximum number of selections by setting `),r(`code`,null,`max`),a(`.`)],-1),i($,null,{default:n(()=>[...c[38]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` value = ref([])
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-checkbox-group`),a(),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"value"`),a(),r(`span`,{class:`hljs-attr`},`:max`),a(`=`),r(`span`,{class:`hljs-string`},`"1"`),a(`>`)]),a(`
    `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-checkbox`),a(),r(`span`,{class:`hljs-attr`},`:checked-value`),a(`=`),r(`span`,{class:`hljs-string`},`"0"`),a(`>`)]),a(`Eat`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-checkbox`),a(`>`)]),a(`
    `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-checkbox`),a(),r(`span`,{class:`hljs-attr`},`:checked-value`),a(`=`),r(`span`,{class:`hljs-string`},`"1"`),a(`>`)]),a(`Sleep`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-checkbox`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-checkbox-group`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,M,[r(`h3`,N,[i(Q,{to:`#CheckboxValidation`},{default:n(()=>[...c[40]||=[a(`#`,-1)]]),_:1}),c[41]||=a(`Checkbox Validation`,-1)]),i($,null,{default:n(()=>[...c[42]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` value = ref([])
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-checkbox`),a(`
    `),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"value"`),a(`
    `),r(`span`,{class:`hljs-attr`},`:rules`),a(`=`),r(`span`,{class:`hljs-string`},`"v => v || 'Please check your choices'"`),a(`
  >`)]),a(`
    Current value: {{ value }}
  `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-checkbox`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,P,[r(`h3`,F,[i(Q,{to:`#CheckboxValidationWithZod`},{default:n(()=>[...c[43]||=[a(`#`,-1)]]),_:1}),c[44]||=a(`Checkbox Validation With Zod`,-1)]),i($,null,{default:n(()=>[...c[45]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { z } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'zod'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` value = ref([])
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-checkbox`),a(`
    `),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"value"`),a(`
    `),r(`span`,{class:`hljs-attr`},`:rules`),a(`=`),r(`span`,{class:`hljs-string`},`"z.boolean().refine(v => v, 'Please check your choices')"`),a(`
  >`)]),a(`
    Current value: {{ value }}
  `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-checkbox`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,I,[r(`h3`,L,[i(Q,{to:`#CheckboxGroupValidate`},{default:n(()=>[...c[46]||=[a(`#`,-1)]]),_:1}),c[47]||=a(`CheckboxGroup Validate`,-1)]),i($,null,{default:n(()=>[...c[48]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` value = ref([])
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-checkbox-group`),a(`
    `),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"value"`),a(`
    `),r(`span`,{class:`hljs-attr`},`:rules`),a(`=`),r(`span`,{class:`hljs-string`},`"v => v.length === 2 || 'Please check all'"`),a(`
  >`)]),a(`
    `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-checkbox`),a(),r(`span`,{class:`hljs-attr`},`:checked-value`),a(`=`),r(`span`,{class:`hljs-string`},`"0"`),a(`>`)]),a(`Eat`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-checkbox`),a(`>`)]),a(`
    `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-checkbox`),a(),r(`span`,{class:`hljs-attr`},`:checked-value`),a(`=`),r(`span`,{class:`hljs-string`},`"1"`),a(`>`)]),a(`Sleep`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-checkbox`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-checkbox-group`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),r(`div`,R,[r(`h3`,z,[i(Q,{to:`#CheckboxGroupValidatewithZod`},{default:n(()=>[...c[49]||=[a(`#`,-1)]]),_:1}),c[50]||=a(`CheckboxGroup Validate with Zod`,-1)]),i($,null,{default:n(()=>[...c[51]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`script`),a(),r(`span`,{class:`hljs-attr`},`setup`),a(`>`)]),r(`span`,{class:`javascript`},[a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'vue'`),a(`
`),r(`span`,{class:`hljs-keyword`},`import`),a(` { z } `),r(`span`,{class:`hljs-keyword`},`from`),a(),r(`span`,{class:`hljs-string`},`'zod'`),a(`

`),r(`span`,{class:`hljs-keyword`},`const`),a(` value = ref([])
`)]),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`script`),a(`>`)]),a(`

`),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-checkbox-group`),a(`
    `),r(`span`,{class:`hljs-attr`},`v-model`),a(`=`),r(`span`,{class:`hljs-string`},`"value"`),a(`
    `),r(`span`,{class:`hljs-attr`},`:rules`),a(`=`),r(`span`,{class:`hljs-string`},`"z.array(z.number()).length(2, 'Please check all')"`),a(`
  >`)]),a(`
    `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-checkbox`),a(),r(`span`,{class:`hljs-attr`},`:checked-value`),a(`=`),r(`span`,{class:`hljs-string`},`"0"`),a(`>`)]),a(`Eat`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-checkbox`),a(`>`)]),a(`
    `),r(`span`,{class:`hljs-tag`},[a(`<`),r(`span`,{class:`hljs-name`},`var-checkbox`),a(),r(`span`,{class:`hljs-attr`},`:checked-value`),a(`=`),r(`span`,{class:`hljs-string`},`"1"`),a(`>`)]),a(`Sleep`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-checkbox`),a(`>`)]),a(`
  `),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`var-checkbox-group`),a(`>`)]),a(`
`),r(`span`,{class:`hljs-tag`},[a(`</`),r(`span`,{class:`hljs-name`},`template`),a(`>`)]),a(`
`)])],-1)]]),_:1})]),c[68]||=r(`h2`,null,`API`,-1),r(`div`,B,[r(`h3`,V,[i(Q,{to:`#Props`},{default:n(()=>[...c[52]||=[a(`#`,-1)]]),_:1}),c[53]||=a(`Props`,-1)]),c[54]||=o(`<h4>CheckboxGroup Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The value of the binding</td><td><em>any[]</em></td><td><code>[]</code></td></tr><tr><td><code>max</code></td><td>Maximum number of checked</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>direction</code></td><td>The layout direction, optional value is <code>horizontal</code> <code>vertical</code></td><td><em>string</em></td><td><code>horizontal</code></td></tr><tr><td><code>options</code> <em><strong>3.2.11</strong></em></td><td>Specifies options</td><td><em>CheckboxGroupOption[]</em></td><td><code>[]</code></td></tr><tr><td><code>label-key</code> <em><strong>3.2.12</strong></em></td><td>As the key that uniquely identifies label</td><td><em>string</em></td><td><code>label</code></td></tr><tr><td><code>value-key</code> <em><strong>3.2.12</strong></em></td><td>As the key that uniquely identifies value</td><td><em>string</em></td><td><code>value</code></td></tr><tr><td><code>rules</code></td><td>Validation rules, return <code>true</code> to indicate verification passes, other types of values ​​will be converted into text as user prompts. <a href="#/en-US/zodValidation">Zod validation</a> is supported since <code>3.5.0</code></td><td><em>((v: any[]) =&gt; any) | ZodType | Array&lt;((v: any[]) =&gt; any) | ZodType&gt;</em></td><td><code>-</code></td></tr></tbody></table><h4>CheckboxGroupOption</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>label</code></td><td>The text of checkbox</td><td><em>string | VNode | (option: CheckboxGroupOption, checked: boolean) =&gt; VNodeChild</em></td><td><code>-</code></td></tr><tr><td><code>value</code></td><td>The value of checkbox</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable checkbox</td><td><em>boolean</em></td><td><code>-</code></td></tr></tbody></table><h4>Checkbox Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The value of the binding</td><td><em>any</em></td><td><code>false</code></td></tr><tr><td><code>checked-value</code></td><td>Checked value</td><td><em>any</em></td><td><code>true</code></td></tr><tr><td><code>unchecked-value</code></td><td>Unchecked value</td><td><em>any</em></td><td><code>false</code></td></tr><tr><td><code>checked-color</code></td><td>Checked color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>unchecked-color</code></td><td>Unchecked color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>icon-size</code></td><td>Icon size</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>Whether the disabled</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>readonly</code></td><td>Whether the readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>indeterminate</code></td><td>Whether indeterminate status(style has the highest priority)</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code></td><td>Whether to open ripple</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>rules</code></td><td>Validation rules, return <code>true</code> to indicate verification passes, other types of values ​​will be converted into text as user prompts. <a href="#/en-US/zodValidation">Zod validation</a> is supported since <code>3.5.0</code></td><td><em>(v: string) =&gt; any | ZodType | Array&lt;(v: string) =&gt; any | ZodType&gt;</em></td><td><code>-</code></td></tr><tr><td><code>tabindex</code> <em><strong>3.12.2</strong></em></td><td>Consistent with the tabindex property of native input</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table>`,6)]),r(`div`,H,[r(`h3`,U,[i(Q,{to:`#Methods`},{default:n(()=>[...c[55]||=[a(`#`,-1)]]),_:1}),c[56]||=a(`Methods`,-1)]),c[57]||=o(`<h4>CheckboxGroup Methods</h4><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>validate</code></td><td>Trigger validate</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clearing validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clear the value of the binding(set to <code>[]</code>) and validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>checkAll</code></td><td>Check all</td><td><code>-</code></td><td><code>value: any[]</code></td></tr><tr><td><code>inverseAll</code></td><td>Inverse all</td><td><code>-</code></td><td><code>value: any[]</code></td></tr></tbody></table><h4>Checkbox Methods</h4><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>validate</code></td><td>Trigger validate</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clearing validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clear the value of the binding(set to <code>unchecked-value</code>) and validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>toggle</code></td><td>Toggle the checked state, pass <code>checked-value</code> to check, <code>unchecked-value</code> to uncheck, do not pass or other cases to reverse</td><td><code>value?: any</code></td><td><code>-</code></td></tr></tbody></table>`,4)]),r(`div`,W,[r(`h3`,G,[i(Q,{to:`#Events`},{default:n(()=>[...c[58]||=[a(`#`,-1)]]),_:1}),c[59]||=a(`Events`,-1)]),c[60]||=o(`<h4>CheckboxGroup Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>Triggered on change</td><td><code>value: any[]</code></td></tr></tbody></table><h4>Checkbox Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggered on Click</td><td><code>e: Event</code></td></tr><tr><td><code>change</code></td><td>Triggered on change</td><td><code>value: any</code></td></tr></tbody></table>`,4)]),r(`div`,K,[r(`h3`,q,[i(Q,{to:`#Slots`},{default:n(()=>[...c[61]||=[a(`#`,-1)]]),_:1}),c[62]||=a(`Slots`,-1)]),c[63]||=o(`<h4>CheckboxGroup Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Checkbox Group content</td><td><code>-</code></td></tr></tbody></table><h4>Checkbox Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>checked-icon</code></td><td>Checked icon</td><td><code>-</code></td></tr><tr><td><code>unchecked-icon</code></td><td>Unchecked icon</td><td><code>-</code></td></tr><tr><td><code>indeterminate-icon</code></td><td>Indeterminate icon</td><td><code>-</code></td></tr><tr><td><code>default</code></td><td>Displayed text</td><td><code>checked: boolean</code> is checked</td></tr></tbody></table>`,4)]),r(`div`,J,[r(`h3`,Y,[i(Q,{to:`#StyleVariables`},{default:n(()=>[...c[64]||=[a(`#`,-1)]]),_:1}),c[65]||=a(`Style Variables`,-1)]),c[66]||=o(`<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--checkbox-checked-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--checkbox-unchecked-color</code></td><td><code>#555</code></td></tr><tr><td><code>--checkbox-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--checkbox-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--checkbox-action-padding</code></td><td><code>6px</code></td></tr><tr><td><code>--checkbox-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--checkbox-icon-size</code></td><td><code>24px</code></td></tr></tbody></table>`,2)])])}var Z=s(c,[[`render`,X]]);export{Z as default};