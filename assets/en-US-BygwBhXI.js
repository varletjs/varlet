import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s,m as c}from"./runtime-core.esm-bundler-DUghkl6b.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`Intro`},p={class:`card`},m={id:`BasicUsage`},h={class:`card`},g={id:`SetStateValue`},_={class:`card`},v={id:`ModifyIconAndColor`},y={class:`card`},b={id:`Disabled`},x={class:`card`},S={id:`Readonly`},C={class:`card`},w={id:`RadioGroup`},T={class:`card`},E={id:`OptionsAPI`},D={class:`card`},O={id:`CustomFields`},k={class:`card`},A={id:`VerticalDirection`},j={class:`card`},M={id:`RadioValidation`},N={class:`card`},P={id:`RadioValidateWithZod`},F={class:`card`},I={id:`RadioGroupValidate`},L={class:`card`},R={id:`RadioGroupValidateWithZod`},z={class:`card`},B={id:`Props`},V={class:`card`},H={id:`Methods`},U={class:`card`},W={id:`Events`},G={class:`card`},K={id:`Slots`},q={class:`card`},J={id:`StyleVariables`};function Y(e,l,Y,X,Z,ee){let Q=n(`router-link`),$=n(`var-site-code-example`);return r(),a(`div`,u,[l[60]||=i(`h1`,null,`Radio`,-1),i(`div`,d,[i(`h3`,f,[o(Q,{to:`#Intro`},{default:t(()=>[...l[0]||=[s(`#`,-1)]]),_:1}),l[1]||=s(`Intro`,-1)]),l[2]||=i(`p`,null,`Single selection among multiple options.`,-1)]),i(`div`,p,[i(`h3`,m,[o(Q,{to:`#BasicUsage`},{default:t(()=>[...l[3]||=[s(`#`,-1)]]),_:1}),l[4]||=s(`Basic Usage`,-1)]),o($,null,{default:t(()=>[...l[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` value = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-radio`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value"`),s(`>`)]),s(`Current value: {{ value }}`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-radio`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,h,[i(`h3`,g,[o(Q,{to:`#SetStateValue`},{default:t(()=>[...l[6]||=[s(`#`,-1)]]),_:1}),l[7]||=s(`Set State Value`,-1)]),o($,null,{default:t(()=>[...l[8]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` value = ref(`),i(`span`,{class:`hljs-number`},`0`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-radio`),s(`
    `),i(`span`,{class:`hljs-attr`},`:unchecked-value`),s(`=`),i(`span`,{class:`hljs-string`},`"0"`),s(`
    `),i(`span`,{class:`hljs-attr`},`:checked-value`),s(`=`),i(`span`,{class:`hljs-string`},`"1"`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value"`),s(`
  >`)]),s(`
    Current value: {{ value }}
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-radio`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,_,[i(`h3`,v,[o(Q,{to:`#ModifyIconAndColor`},{default:t(()=>[...l[9]||=[s(`#`,-1)]]),_:1}),l[10]||=s(`Modify Icon And Color`,-1)]),o($,null,{default:t(()=>[...l[11]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` value = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-radio`),s(`
    `),i(`span`,{class:`hljs-attr`},`unchecked-color`),s(`=`),i(`span`,{class:`hljs-string`},`"var(--color-warning)"`),s(` 
    `),i(`span`,{class:`hljs-attr`},`checked-color`),s(`=`),i(`span`,{class:`hljs-string`},`"var(--color-danger)"`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value"`),s(`
  >`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`unchecked-icon`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"heart-half-full"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`checked-icon`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"heart"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`default`),s(`>`)]),s(`
      Current value: {{ value }}
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-radio`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,y,[i(`h3`,b,[o(Q,{to:`#Disabled`},{default:t(()=>[...l[12]||=[s(`#`,-1)]]),_:1}),l[13]||=s(`Disabled`,-1)]),o($,null,{default:t(()=>[...l[14]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` value = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-radio`),s(),i(`span`,{class:`hljs-attr`},`disabled`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value"`),s(`>`)]),s(`Current value: {{ value }}`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-radio`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,x,[i(`h3`,S,[o(Q,{to:`#Readonly`},{default:t(()=>[...l[15]||=[s(`#`,-1)]]),_:1}),l[16]||=s(`Readonly`,-1)]),o($,null,{default:t(()=>[...l[17]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` value = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-radio`),s(),i(`span`,{class:`hljs-attr`},`readonly`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value"`),s(`>`)]),s(`Current value: {{ value }}`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-radio`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,C,[i(`h3`,w,[o(Q,{to:`#RadioGroup`},{default:t(()=>[...l[18]||=[s(`#`,-1)]]),_:1}),l[19]||=s(`RadioGroup`,-1)]),l[21]||=i(`p`,null,[s(`In the radio group, you must set the `),i(`code`,null,`checked-value`),s(` to identify the `),i(`code`,null,`radio`),s(`, The radio group bind group checked identifiers.`)],-1),o($,null,{default:t(()=>[...l[20]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` value = ref(`),i(`span`,{class:`hljs-number`},`0`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-radio-group`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-radio`),s(),i(`span`,{class:`hljs-attr`},`:checked-value`),s(`=`),i(`span`,{class:`hljs-string`},`"0"`),s(`>`)]),s(`Eat`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-radio`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-radio`),s(),i(`span`,{class:`hljs-attr`},`:checked-value`),s(`=`),i(`span`,{class:`hljs-string`},`"1"`),s(`>`)]),s(`Sleep`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-radio`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-radio-group`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,T,[i(`h3`,E,[o(Q,{to:`#OptionsAPI`},{default:t(()=>[...l[22]||=[s(`#`,-1)]]),_:1}),l[23]||=s(`Options API`,-1)]),l[25]||=i(`p`,null,[s(`Setting child elements via the `),i(`code`,null,`options`),s(` prop.`)],-1),o($,null,{default:t(()=>[...l[24]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` value = ref(`),i(`span`,{class:`hljs-number`},`0`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` options = ref([
  { `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Eat'`),s(`, `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-number`},`0`),s(` },
  { `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Sleep'`),s(`, `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-number`},`1`),s(` },
  { `),i(`span`,{class:`hljs-attr`},`label`),s(`: `),i(`span`,{class:`hljs-string`},`'Game'`),s(`, `),i(`span`,{class:`hljs-attr`},`value`),s(`: `),i(`span`,{class:`hljs-number`},`2`),s(`, `),i(`span`,{class:`hljs-attr`},`disabled`),s(`: `),i(`span`,{class:`hljs-literal`},`true`),s(` },
])
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-radio-group`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options"`),s(` />`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`Current value: {{ value }}`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,D,[i(`h3`,O,[o(Q,{to:`#CustomFields`},{default:t(()=>[...l[26]||=[s(`#`,-1)]]),_:1}),l[27]||=s(`Custom Fields`,-1)]),l[29]||=i(`p`,null,[s(`Customize the format of the data in `),i(`code`,null,`options`),s(` through the `),i(`code`,null,`label-key`),s(` and `),i(`code`,null,`value-key`),s(` attributes.`)],-1),o($,null,{default:t(()=>[...l[28]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` value = ref(`),i(`span`,{class:`hljs-number`},`0`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` options = ref([
  { `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'Eat'`),s(`, `),i(`span`,{class:`hljs-attr`},`id`),s(`: `),i(`span`,{class:`hljs-number`},`0`),s(` },
  { `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'Sleep'`),s(`, `),i(`span`,{class:`hljs-attr`},`id`),s(`: `),i(`span`,{class:`hljs-number`},`1`),s(` },
  { `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'Game'`),s(`, `),i(`span`,{class:`hljs-attr`},`id`),s(`: `),i(`span`,{class:`hljs-number`},`2`),s(` },
])
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-radio-group`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value"`),s(),i(`span`,{class:`hljs-attr`},`:options`),s(`=`),i(`span`,{class:`hljs-string`},`"options"`),s(),i(`span`,{class:`hljs-attr`},`label-key`),s(`=`),i(`span`,{class:`hljs-string`},`"name"`),s(),i(`span`,{class:`hljs-attr`},`value-key`),s(`=`),i(`span`,{class:`hljs-string`},`"id"`),s(` />`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`Current value: {{ value }}`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,k,[i(`h3`,A,[o(Q,{to:`#VerticalDirection`},{default:t(()=>[...l[30]||=[s(`#`,-1)]]),_:1}),l[31]||=s(`Vertical Direction`,-1)]),o($,null,{default:t(()=>[...l[32]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` value = ref(`),i(`span`,{class:`hljs-number`},`0`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-radio-group`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value"`),s(),i(`span`,{class:`hljs-attr`},`direction`),s(`=`),i(`span`,{class:`hljs-string`},`"vertical"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-radio`),s(),i(`span`,{class:`hljs-attr`},`:checked-value`),s(`=`),i(`span`,{class:`hljs-string`},`"0"`),s(`>`)]),s(`Eat`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-radio`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-radio`),s(),i(`span`,{class:`hljs-attr`},`:checked-value`),s(`=`),i(`span`,{class:`hljs-string`},`"1"`),s(`>`)]),s(`Sleep`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-radio`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-radio-group`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,j,[i(`h3`,M,[o(Q,{to:`#RadioValidation`},{default:t(()=>[...l[33]||=[s(`#`,-1)]]),_:1}),l[34]||=s(`Radio Validation`,-1)]),o($,null,{default:t(()=>[...l[35]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` value = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-radio`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value"`),s(`
    `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[v => v || 'Please check your choice']"`),s(`
  >`)]),s(`
    Current value: {{ value }}
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-radio`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,N,[i(`h3`,P,[o(Q,{to:`#RadioValidateWithZod`},{default:t(()=>[...l[36]||=[s(`#`,-1)]]),_:1}),l[37]||=s(`Radio Validate With Zod`,-1)]),o($,null,{default:t(()=>[...l[38]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { z } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'zod'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` value = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-radio`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value"`),s(`
    `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"z.boolean().refine((v) => v, 'Please check your choice')"`),s(`
  >`)]),s(`
    Current value: {{ value }}
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-radio`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,F,[i(`h3`,I,[o(Q,{to:`#RadioGroupValidate`},{default:t(()=>[...l[39]||=[s(`#`,-1)]]),_:1}),l[40]||=s(`RadioGroup Validate`,-1)]),o($,null,{default:t(()=>[...l[41]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` value = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-radio-group`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value"`),s(`
    `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"v => v === 0 || 'Please check eat'"`),s(`
  >`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-radio`),s(),i(`span`,{class:`hljs-attr`},`:checked-value`),s(`=`),i(`span`,{class:`hljs-string`},`"0"`),s(`>`)]),s(`Eat`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-radio`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-radio`),s(),i(`span`,{class:`hljs-attr`},`:checked-value`),s(`=`),i(`span`,{class:`hljs-string`},`"1"`),s(`>`)]),s(`Sleep`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-radio`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-radio-group`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,L,[i(`h3`,R,[o(Q,{to:`#RadioGroupValidateWithZod`},{default:t(()=>[...l[42]||=[s(`#`,-1)]]),_:1}),l[43]||=s(`RadioGroup Validate With Zod`,-1)]),o($,null,{default:t(()=>[...l[44]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { z } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'zod'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` value = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-radio-group`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"value"`),s(`
    `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"z.number().refine((v => v === 0, 'Please check eat'))"`),s(`
  >`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-radio`),s(),i(`span`,{class:`hljs-attr`},`:checked-value`),s(`=`),i(`span`,{class:`hljs-string`},`"0"`),s(`>`)]),s(`Eat`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-radio`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-radio`),s(),i(`span`,{class:`hljs-attr`},`:checked-value`),s(`=`),i(`span`,{class:`hljs-string`},`"1"`),s(`>`)]),s(`Sleep`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-radio`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-radio-group`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),l[61]||=i(`h2`,null,`API`,-1),i(`div`,z,[i(`h3`,B,[o(Q,{to:`#Props`},{default:t(()=>[...l[45]||=[s(`#`,-1)]]),_:1}),l[46]||=s(`Props`,-1)]),l[47]||=c(`<h4>RadioGroup Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The value of the binding</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>direction</code></td><td>The layout direction, optional value is <code>horizontal</code> <code>vertical</code></td><td><em>string</em></td><td><code>horizontal</code></td></tr><tr><td><code>options</code> <em><strong>3.2.14</strong></em></td><td>Specifies options</td><td><em>RadioGroupOption[]</em></td><td><code>[]</code></td></tr><tr><td><code>label-key</code> <em><strong>3.2.14</strong></em></td><td>As the key that uniquely identifies label</td><td><em>string</em></td><td><code>label</code></td></tr><tr><td><code>value-key</code> <em><strong>3.2.14</strong></em></td><td>As the key that uniquely identifies value</td><td><em>string</em></td><td><code>value</code></td></tr><tr><td><code>rules</code></td><td>Validation rules, return <code>true</code> to indicate verification passes, other types of values ​​will be converted into text as user prompts. <a href="#/en-US/zodValidation">Zod validation</a> is supported since <code>3.5.0</code></td><td><em>(v: any) =&gt; any | ZodType | Array&lt;(v: any) =&gt; any | ZodType&gt;</em></td><td><code>-</code></td></tr><tr><td><code>aria-label</code> <em><strong>3.8.5</strong></em></td><td>The label of the radio group</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table><h4>RadioGroupOption</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>label</code></td><td>The text of radio</td><td><em>string | VNode | (option: RadioGroupOption, checked: boolean) =&gt; VNodeChild</em></td><td><code>-</code></td></tr><tr><td><code>value</code></td><td>The value of radio</td><td><em>any</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable radio</td><td><em>boolean</em></td><td><code>-</code></td></tr></tbody></table><h4>Radio Props</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The value of the binding</td><td><em>any</em></td><td><code>false</code></td></tr><tr><td><code>checked-value</code></td><td>Checked value</td><td><em>any</em></td><td><code>true</code></td></tr><tr><td><code>unchecked-value</code></td><td>Unchecked value</td><td><em>any</em></td><td><code>false</code></td></tr><tr><td><code>checked-color</code></td><td>Checked color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>unchecked-color</code></td><td>Unchecked color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>icon-size</code></td><td>Icon size</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>readonly</code></td><td>Whether the readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Whether the disabled</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code></td><td>Whether to open ripple</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>rules</code></td><td>Validation rules, return <code>true</code> to indicate verification passes, other types of values ​​will be converted into text as user prompts. <a href="#/en-US/zodValidation">Zod validation</a> is supported since <code>3.5.0</code></td><td><em>((v: string) =&gt; any) | ZodType | Array&lt;((v: string) =&gt; any) | ZodType&gt;</em></td><td><code>-</code></td></tr><tr><td><code>tabindex</code> <em><strong>3.12.2</strong></em></td><td>Consistent with the tabindex property of native input</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table>`,6)]),i(`div`,V,[i(`h3`,H,[o(Q,{to:`#Methods`},{default:t(()=>[...l[48]||=[s(`#`,-1)]]),_:1}),l[49]||=s(`Methods`,-1)]),l[50]||=c(`<h4>RadioGroup Methods</h4><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>validate</code></td><td>Trigger validate</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clear validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clear the value of the binding(set to <code>undefined</code>) and validate messages</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table><h4>Radio Methods</h4><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>validate</code></td><td>Trigger validate</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clear validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clear the value of the binding(set to <code>unchecked-value</code>) and validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>toggle</code></td><td>Toggle the checked state, pass <code>checked-value</code> to check, <code>unchecked-value</code> to uncheck, do not pass or other cases to reverse</td><td><code>value: any</code></td><td><code>-</code></td></tr></tbody></table>`,4)]),i(`div`,U,[i(`h3`,W,[o(Q,{to:`#Events`},{default:t(()=>[...l[51]||=[s(`#`,-1)]]),_:1}),l[52]||=s(`Events`,-1)]),l[53]||=c(`<h4>RadioGroup Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>Triggered on change</td><td><code>value: any</code></td></tr></tbody></table><h4>Radio Events</h4><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggered on click</td><td><code>e: Event</code></td></tr><tr><td><code>change</code></td><td>Triggered on change</td><td><code>value: any</code></td></tr></tbody></table>`,4)]),i(`div`,G,[i(`h3`,K,[o(Q,{to:`#Slots`},{default:t(()=>[...l[54]||=[s(`#`,-1)]]),_:1}),l[55]||=s(`Slots`,-1)]),l[56]||=c(`<h4>RadioGroup Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Radio Group content</td><td><code>-</code></td></tr></tbody></table><h4>Radio Slots</h4><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>checked-icon</code></td><td>Checked icon</td><td><code>-</code></td></tr><tr><td><code>unchecked-icon</code></td><td>Unchecked icon</td><td><code>-</code></td></tr><tr><td><code>default</code></td><td>Displayed text</td><td><code>-</code></td></tr></tbody></table>`,4)]),i(`div`,q,[i(`h3`,J,[o(Q,{to:`#StyleVariables`},{default:t(()=>[...l[57]||=[s(`#`,-1)]]),_:1}),l[58]||=s(`Style Variables`,-1)]),l[59]||=c(`<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><h4>Radio Variables</h4><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--radio-checked-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--radio-unchecked-color</code></td><td><code>#555</code></td></tr><tr><td><code>--radio-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--radio-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--radio-action-padding</code></td><td><code>6px</code></td></tr><tr><td><code>--radio-icon-size</code></td><td><code>24px</code></td></tr><tr><td><code>--radio-text-color</code></td><td><code>#555</code></td></tr></tbody></table>`,3)])])}var X=e(l,[[`render`,Y]]);export{X as default};