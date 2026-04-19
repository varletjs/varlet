import{L as e,N as t,W as n,c as r,d as i,g as a,h as o,m as s}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as c}from"./_plugin-vue_export-helper-V-yks4gF.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`Intro`},p={class:`card`},m={id:`BasicUsage`},h={class:`card`},g={id:`SetStateValue`},_={class:`card`},v={id:`ModifyIconAndColor`},y={class:`card`},b={id:`Disabled`},x={class:`card`},S={id:`Readonly`},C={class:`card`},w={id:`RadioGroup`},T={class:`card`},E={id:`OptionsAPI`},D={class:`card`},O={id:`CustomFields`},k={class:`card`},A={id:`VerticalDirection`},j={class:`card`},M={id:`RadioValidation`},N={class:`card`},P={id:`RadioValidateWithZod`},F={class:`card`},I={id:`RadioGroupValidate`},L={class:`card`},R={id:`RadioGroupValidateWithZod`},z={class:`card`},B={id:`Props`},V={class:`card`},H={id:`Methods`},U={class:`card`},W={id:`Events`},G={class:`card`},K={id:`Slots`},q={class:`card`},J={id:`StyleVariables`};function Y(c,l,Y,X,Z,ee){let Q=e(`router-link`),$=e(`var-site-code-example`);return t(),i(`div`,u,[l[60]||=r(`h1`,null,`Radio`,-1),r(`div`,d,[r(`h3`,f,[a(Q,{to:`#Intro`},{default:n(()=>[...l[0]||=[o(`#`,-1)]]),_:1}),l[1]||=o(`Intro`,-1)]),l[2]||=r(`p`,null,`Single selection among multiple options.`,-1)]),r(`div`,p,[r(`h3`,m,[a(Q,{to:`#BasicUsage`},{default:n(()=>[...l[3]||=[o(`#`,-1)]]),_:1}),l[4]||=o(`Basic Usage`,-1)]),a($,null,{default:n(()=>[...l[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` value = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-radio`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value"`),o(`>`)]),o(`Current value: {{ value }}`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-radio`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,h,[r(`h3`,g,[a(Q,{to:`#SetStateValue`},{default:n(()=>[...l[6]||=[o(`#`,-1)]]),_:1}),l[7]||=o(`Set State Value`,-1)]),a($,null,{default:n(()=>[...l[8]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` value = ref(`),r(`span`,{class:`hljs-number`},`0`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-radio`),o(`
    `),r(`span`,{class:`hljs-attr`},`:unchecked-value`),o(`=`),r(`span`,{class:`hljs-string`},`"0"`),o(`
    `),r(`span`,{class:`hljs-attr`},`:checked-value`),o(`=`),r(`span`,{class:`hljs-string`},`"1"`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value"`),o(`
  >`)]),o(`
    Current value: {{ value }}
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-radio`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,_,[r(`h3`,v,[a(Q,{to:`#ModifyIconAndColor`},{default:n(()=>[...l[9]||=[o(`#`,-1)]]),_:1}),l[10]||=o(`Modify Icon And Color`,-1)]),a($,null,{default:n(()=>[...l[11]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` value = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-radio`),o(`
    `),r(`span`,{class:`hljs-attr`},`unchecked-color`),o(`=`),r(`span`,{class:`hljs-string`},`"var(--color-warning)"`),o(` 
    `),r(`span`,{class:`hljs-attr`},`checked-color`),o(`=`),r(`span`,{class:`hljs-string`},`"var(--color-danger)"`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value"`),o(`
  >`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`unchecked-icon`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"heart-half-full"`),o(),r(`span`,{class:`hljs-attr`},`size`),o(`=`),r(`span`,{class:`hljs-string`},`"24px"`),o(`/>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`checked-icon`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"heart"`),o(),r(`span`,{class:`hljs-attr`},`size`),o(`=`),r(`span`,{class:`hljs-string`},`"24px"`),o(`/>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`default`),o(`>`)]),o(`
      Current value: {{ value }}
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-radio`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,y,[r(`h3`,b,[a(Q,{to:`#Disabled`},{default:n(()=>[...l[12]||=[o(`#`,-1)]]),_:1}),l[13]||=o(`Disabled`,-1)]),a($,null,{default:n(()=>[...l[14]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` value = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-radio`),o(),r(`span`,{class:`hljs-attr`},`disabled`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value"`),o(`>`)]),o(`Current value: {{ value }}`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-radio`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,x,[r(`h3`,S,[a(Q,{to:`#Readonly`},{default:n(()=>[...l[15]||=[o(`#`,-1)]]),_:1}),l[16]||=o(`Readonly`,-1)]),a($,null,{default:n(()=>[...l[17]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` value = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-radio`),o(),r(`span`,{class:`hljs-attr`},`readonly`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value"`),o(`>`)]),o(`Current value: {{ value }}`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-radio`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,C,[r(`h3`,w,[a(Q,{to:`#RadioGroup`},{default:n(()=>[...l[18]||=[o(`#`,-1)]]),_:1}),l[19]||=o(`RadioGroup`,-1)]),l[21]||=r(`p`,null,[o(`In the radio group, you must set the `),r(`code`,null,`checked-value`),o(` to identify the `),r(`code`,null,`radio`),o(`, The radio group bind group checked identifiers.`)],-1),a($,null,{default:n(()=>[...l[20]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` value = ref(`),r(`span`,{class:`hljs-number`},`0`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-radio-group`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-radio`),o(),r(`span`,{class:`hljs-attr`},`:checked-value`),o(`=`),r(`span`,{class:`hljs-string`},`"0"`),o(`>`)]),o(`Eat`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-radio`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-radio`),o(),r(`span`,{class:`hljs-attr`},`:checked-value`),o(`=`),r(`span`,{class:`hljs-string`},`"1"`),o(`>`)]),o(`Sleep`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-radio`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-radio-group`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,T,[r(`h3`,E,[a(Q,{to:`#OptionsAPI`},{default:n(()=>[...l[22]||=[o(`#`,-1)]]),_:1}),l[23]||=o(`Options API`,-1)]),l[25]||=r(`p`,null,[o(`Setting child elements via the `),r(`code`,null,`options`),o(` prop.`)],-1),a($,null,{default:n(()=>[...l[24]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` value = ref(`),r(`span`,{class:`hljs-number`},`0`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` options = ref([
  { `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Eat'`),o(`, `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-number`},`0`),o(` },
  { `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Sleep'`),o(`, `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-number`},`1`),o(` },
  { `),r(`span`,{class:`hljs-attr`},`label`),o(`: `),r(`span`,{class:`hljs-string`},`'Game'`),o(`, `),r(`span`,{class:`hljs-attr`},`value`),o(`: `),r(`span`,{class:`hljs-number`},`2`),o(`, `),r(`span`,{class:`hljs-attr`},`disabled`),o(`: `),r(`span`,{class:`hljs-literal`},`true`),o(` },
])
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-radio-group`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options"`),o(` />`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`Current value: {{ value }}`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,D,[r(`h3`,O,[a(Q,{to:`#CustomFields`},{default:n(()=>[...l[26]||=[o(`#`,-1)]]),_:1}),l[27]||=o(`Custom Fields`,-1)]),l[29]||=r(`p`,null,[o(`Customize the format of the data in `),r(`code`,null,`options`),o(` through the `),r(`code`,null,`label-key`),o(` and `),r(`code`,null,`value-key`),o(` attributes.`)],-1),a($,null,{default:n(()=>[...l[28]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` value = ref(`),r(`span`,{class:`hljs-number`},`0`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` options = ref([
  { `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'Eat'`),o(`, `),r(`span`,{class:`hljs-attr`},`id`),o(`: `),r(`span`,{class:`hljs-number`},`0`),o(` },
  { `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'Sleep'`),o(`, `),r(`span`,{class:`hljs-attr`},`id`),o(`: `),r(`span`,{class:`hljs-number`},`1`),o(` },
  { `),r(`span`,{class:`hljs-attr`},`name`),o(`: `),r(`span`,{class:`hljs-string`},`'Game'`),o(`, `),r(`span`,{class:`hljs-attr`},`id`),o(`: `),r(`span`,{class:`hljs-number`},`2`),o(` },
])
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-radio-group`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value"`),o(),r(`span`,{class:`hljs-attr`},`:options`),o(`=`),r(`span`,{class:`hljs-string`},`"options"`),o(),r(`span`,{class:`hljs-attr`},`label-key`),o(`=`),r(`span`,{class:`hljs-string`},`"name"`),o(),r(`span`,{class:`hljs-attr`},`value-key`),o(`=`),r(`span`,{class:`hljs-string`},`"id"`),o(` />`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`Current value: {{ value }}`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,k,[r(`h3`,A,[a(Q,{to:`#VerticalDirection`},{default:n(()=>[...l[30]||=[o(`#`,-1)]]),_:1}),l[31]||=o(`Vertical Direction`,-1)]),a($,null,{default:n(()=>[...l[32]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` value = ref(`),r(`span`,{class:`hljs-number`},`0`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-radio-group`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value"`),o(),r(`span`,{class:`hljs-attr`},`direction`),o(`=`),r(`span`,{class:`hljs-string`},`"vertical"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-radio`),o(),r(`span`,{class:`hljs-attr`},`:checked-value`),o(`=`),r(`span`,{class:`hljs-string`},`"0"`),o(`>`)]),o(`Eat`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-radio`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-radio`),o(),r(`span`,{class:`hljs-attr`},`:checked-value`),o(`=`),r(`span`,{class:`hljs-string`},`"1"`),o(`>`)]),o(`Sleep`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-radio`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-radio-group`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,j,[r(`h3`,M,[a(Q,{to:`#RadioValidation`},{default:n(()=>[...l[33]||=[o(`#`,-1)]]),_:1}),l[34]||=o(`Radio Validation`,-1)]),a($,null,{default:n(()=>[...l[35]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` value = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-radio`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value"`),o(`
    `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"[v => v || 'Please check your choice']"`),o(`
  >`)]),o(`
    Current value: {{ value }}
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-radio`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,N,[r(`h3`,P,[a(Q,{to:`#RadioValidateWithZod`},{default:n(()=>[...l[36]||=[o(`#`,-1)]]),_:1}),l[37]||=o(`Radio Validate With Zod`,-1)]),a($,null,{default:n(()=>[...l[38]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { z } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'zod'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` value = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-radio`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value"`),o(`
    `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"z.boolean().refine((v) => v, 'Please check your choice')"`),o(`
  >`)]),o(`
    Current value: {{ value }}
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-radio`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,F,[r(`h3`,I,[a(Q,{to:`#RadioGroupValidate`},{default:n(()=>[...l[39]||=[o(`#`,-1)]]),_:1}),l[40]||=o(`RadioGroup Validate`,-1)]),a($,null,{default:n(()=>[...l[41]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` value = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-radio-group`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value"`),o(`
    `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"v => v === 0 || 'Please check eat'"`),o(`
  >`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-radio`),o(),r(`span`,{class:`hljs-attr`},`:checked-value`),o(`=`),r(`span`,{class:`hljs-string`},`"0"`),o(`>`)]),o(`Eat`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-radio`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-radio`),o(),r(`span`,{class:`hljs-attr`},`:checked-value`),o(`=`),r(`span`,{class:`hljs-string`},`"1"`),o(`>`)]),o(`Sleep`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-radio`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-radio-group`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,L,[r(`h3`,R,[a(Q,{to:`#RadioGroupValidateWithZod`},{default:n(()=>[...l[42]||=[o(`#`,-1)]]),_:1}),l[43]||=o(`RadioGroup Validate With Zod`,-1)]),a($,null,{default:n(()=>[...l[44]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { z } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'zod'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` value = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-radio-group`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"value"`),o(`
    `),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"z.number().refine((v => v === 0, 'Please check eat'))"`),o(`
  >`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-radio`),o(),r(`span`,{class:`hljs-attr`},`:checked-value`),o(`=`),r(`span`,{class:`hljs-string`},`"0"`),o(`>`)]),o(`Eat`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-radio`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-radio`),o(),r(`span`,{class:`hljs-attr`},`:checked-value`),o(`=`),r(`span`,{class:`hljs-string`},`"1"`),o(`>`)]),o(`Sleep`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-radio`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-radio-group`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),l[61]||=r(`h2`,null,`API`,-1),r(`div`,z,[r(`h3`,B,[a(Q,{to:`#Props`},{default:n(()=>[...l[45]||=[o(`#`,-1)]]),_:1}),l[46]||=o(`Props`,-1)]),l[47]||=s(`<h4>RadioGroup Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The value of the binding</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>direction</code></td><td>The layout direction, optional value is <code>horizontal</code> <code>vertical</code></td><td><em>string</em></td><td><code>horizontal</code></td></tr><tr><td><code>options</code> <em><strong>3.2.14</strong></em></td><td>Specifies options</td><td><em>RadioGroupOption[]</em></td><td><code>[]</code></td></tr><tr><td><code>label-key</code> <em><strong>3.2.14</strong></em></td><td>As the key that uniquely identifies label</td><td><em>string</em></td><td><code>label</code></td></tr><tr><td><code>value-key</code> <em><strong>3.2.14</strong></em></td><td>As the key that uniquely identifies value</td><td><em>string</em></td><td><code>value</code></td></tr><tr><td><code>rules</code></td><td>Validation rules, return <code>true</code> to indicate verification passes, other types of values ​​will be converted into text as user prompts. <a href="#/en-US/zodValidation">Zod validation</a> is supported since <code>3.5.0</code></td><td><em>(v: any) =&gt; any | ZodType | Array&lt;(v: any) =&gt; any | ZodType&gt;</em></td><td><code>-</code></td></tr><tr><td><code>aria-label</code> <em><strong>3.8.5</strong></em></td><td>The label of the radio group</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table><h4>RadioGroupOption</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>label</code></td><td>The text of radio</td><td><em>string | VNode | (option: RadioGroupOption, checked: boolean) =&gt; VNodeChild</em></td><td><code>-</code></td></tr><tr><td><code>value</code></td><td>The value of radio</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable radio</td><td><em>boolean</em></td><td><code>-</code></td></tr></tbody></table><h4>Radio Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The value of the binding</td><td><em>any</em></td><td><code>false</code></td></tr><tr><td><code>checked-value</code></td><td>Checked value</td><td><em>any</em></td><td><code>true</code></td></tr><tr><td><code>unchecked-value</code></td><td>Unchecked value</td><td><em>any</em></td><td><code>false</code></td></tr><tr><td><code>checked-color</code></td><td>Checked color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>unchecked-color</code></td><td>Unchecked color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>icon-size</code></td><td>Icon size</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>readonly</code></td><td>Whether the readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Whether the disabled</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code></td><td>Whether to open ripple</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>rules</code></td><td>Validation rules, return <code>true</code> to indicate verification passes, other types of values ​​will be converted into text as user prompts. <a href="#/en-US/zodValidation">Zod validation</a> is supported since <code>3.5.0</code></td><td><em>((v: string) =&gt; any) | ZodType | Array&lt;((v: string) =&gt; any) | ZodType&gt;</em></td><td><code>-</code></td></tr><tr><td><code>tabindex</code> <em><strong>3.12.2</strong></em></td><td>Consistent with the tabindex property of native input</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table>`,6)]),r(`div`,V,[r(`h3`,H,[a(Q,{to:`#Methods`},{default:n(()=>[...l[48]||=[o(`#`,-1)]]),_:1}),l[49]||=o(`Methods`,-1)]),l[50]||=s(`<h4>RadioGroup Methods</h4><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>validate</code></td><td>Trigger validate</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clear validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clear the value of the binding(set to <code>undefined</code>) and validate messages</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table><h4>Radio Methods</h4><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>validate</code></td><td>Trigger validate</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clear validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clear the value of the binding(set to <code>unchecked-value</code>) and validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>toggle</code></td><td>Toggle the checked state, pass <code>checked-value</code> to check, <code>unchecked-value</code> to uncheck, do not pass or other cases to reverse</td><td><code>value: any</code></td><td><code>-</code></td></tr></tbody></table>`,4)]),r(`div`,U,[r(`h3`,W,[a(Q,{to:`#Events`},{default:n(()=>[...l[51]||=[o(`#`,-1)]]),_:1}),l[52]||=o(`Events`,-1)]),l[53]||=s(`<h4>RadioGroup Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>Triggered on change</td><td><code>value: any</code></td></tr></tbody></table><h4>Radio Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggered on click</td><td><code>e: Event</code></td></tr><tr><td><code>change</code></td><td>Triggered on change</td><td><code>value: any</code></td></tr></tbody></table>`,4)]),r(`div`,G,[r(`h3`,K,[a(Q,{to:`#Slots`},{default:n(()=>[...l[54]||=[o(`#`,-1)]]),_:1}),l[55]||=o(`Slots`,-1)]),l[56]||=s(`<h4>RadioGroup Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Radio Group content</td><td><code>-</code></td></tr></tbody></table><h4>Radio Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>checked-icon</code></td><td>Checked icon</td><td><code>-</code></td></tr><tr><td><code>unchecked-icon</code></td><td>Unchecked icon</td><td><code>-</code></td></tr><tr><td><code>default</code></td><td>Displayed text</td><td><code>-</code></td></tr></tbody></table>`,4)]),r(`div`,q,[r(`h3`,J,[a(Q,{to:`#StyleVariables`},{default:n(()=>[...l[57]||=[o(`#`,-1)]]),_:1}),l[58]||=o(`Style Variables`,-1)]),l[59]||=s(`<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><h4>Radio Variables</h4><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--radio-checked-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--radio-unchecked-color</code></td><td><code>#555</code></td></tr><tr><td><code>--radio-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--radio-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--radio-action-padding</code></td><td><code>6px</code></td></tr><tr><td><code>--radio-icon-size</code></td><td><code>24px</code></td></tr><tr><td><code>--radio-text-color</code></td><td><code>#555</code></td></tr></tbody></table>`,3)])])}var X=c(l,[[`render`,Y]]);export{X as default};