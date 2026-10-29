import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s,m as c}from"./runtime-core.esm-bundler-DUghkl6b.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`Intro`},p={class:`card`},m={id:`StandardVariant`},h={class:`card`},g={id:`OutlinedVariant`},_={class:`card`},v={id:`FilledVariant`},y={class:`card`},b={id:`Props`},x={class:`card`},S={id:`Methods`},C={class:`card`},w={id:`Events`},T={class:`card`},E={id:`Slots`},D={class:`card`},O={id:`StyleVariables`};function k(e,l,k,A,j,M){let N=n(`router-link`),P=n(`var-site-code-example`);return r(),a(`div`,u,[l[27]||=i(`h1`,null,`DateInput`,-1),i(`div`,d,[i(`h3`,f,[o(N,{to:`#Intro`},{default:t(()=>[...l[0]||=[s(`#`,-1)]]),_:1}),l[1]||=s(`Intro`,-1)]),l[2]||=i(`p`,null,`Used to input or select dates.`,-1)]),i(`div`,p,[i(`h3`,m,[o(N,{to:`#StandardVariant`},{default:t(()=>[...l[3]||=[s(`#`,-1)]]),_:1}),l[4]||=s(`Standard Variant`,-1)]),o(P,null,{default:t(()=>[...l[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { z } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'zod'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` standardValue = ref(`),i(`span`,{class:`hljs-string`},`'2021-04-08'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` standardValue2 = ref(`),i(`span`,{class:`hljs-string`},`'2021-04'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` standardValue3 = ref(`),i(`span`,{class:`hljs-string`},`'2021'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` standardValue4 = ref(`),i(`span`,{class:`hljs-string`},`'2021-04-08'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` standardValue5 = ref(`),i(`span`,{class:`hljs-string`},`'2021-04-08'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` standardValue6 = ref(`),i(`span`,{class:`hljs-string`},`'2021-04-08'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` standardValue7 = ref(`),i(`span`,{class:`hljs-string`},`''`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` standardValue8 = ref(`),i(`span`,{class:`hljs-string`},`''`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` standardValue9 = ref(`),i(`span`,{class:`hljs-string`},`'2021-04-08'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` standardValue10 = ref([`),i(`span`,{class:`hljs-string`},`'2021-04-08'`),s(`, `),i(`span`,{class:`hljs-string`},`'2021-04-12'`),s(`])
`),i(`span`,{class:`hljs-keyword`},`const`),s(` standardValue11 = ref([`),i(`span`,{class:`hljs-string`},`'2021-04-08'`),s(`, `),i(`span`,{class:`hljs-string`},`'2021-04-20'`),s(`])
`),i(`span`,{class:`hljs-keyword`},`const`),s(` standardValue12 = ref(`),i(`span`,{class:`hljs-number`},`1617811200000`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` standardValue13 = ref(`),i(`span`,{class:`hljs-string`},`'2021/04/08'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` standardValue14 = ref(`),i(`span`,{class:`hljs-string`},`'2021-04-08'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` standardValue15 = ref([`),i(`span`,{class:`hljs-string`},`'2021-04'`),s(`, `),i(`span`,{class:`hljs-string`},`'2021-09'`),s(`])
`),i(`span`,{class:`hljs-keyword`},`const`),s(` standardValue16 = ref([`),i(`span`,{class:`hljs-string`},`'2021'`),s(`, `),i(`span`,{class:`hljs-string`},`'2025'`),s(`])
`),i(`span`,{class:`hljs-keyword`},`const`),s(` standardValue17 = ref(`),i(`span`,{class:`hljs-string`},`'2021-04-08'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` standardValue18 = ref([`),i(`span`,{class:`hljs-string`},`'2021-04-08'`),s(`, `),i(`span`,{class:`hljs-string`},`'2021-04-12'`),s(`])
`),i(`span`,{class:`hljs-keyword`},`const`),s(` standardValue19 = ref(`),i(`span`,{class:`hljs-string`},`'2021-04-09'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` datetimeValue = ref(`),i(`span`,{class:`hljs-string`},`'2021-04-08 12:30:45'`),s(`)

`),i(`span`,{class:`hljs-keyword`},`const`),s(` allowedDates = `),i(`span`,{class:`hljs-function`},[s(`(`),i(`span`,{class:`hljs-params`},`date`),s(`) =>`)]),s(),i(`span`,{class:`hljs-built_in`},`Number`),s(`(date.split(`),i(`span`,{class:`hljs-string`},`'-'`),s(`)[`),i(`span`,{class:`hljs-number`},`2`),s(`]) % `),i(`span`,{class:`hljs-number`},`2`),s(` === `),i(`span`,{class:`hljs-number`},`1`),s(`
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-space`),s(),i(`span`,{class:`hljs-attr`},`direction`),s(`=`),i(`span`,{class:`hljs-string`},`"column"`),s(),i(`span`,{class:`hljs-attr`},`size`),s(`=`),i(`span`,{class:`hljs-string`},`"large"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"standardValue"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Select date"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"standardValue2"`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"month"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Select month"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"standardValue3"`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"year"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Select year"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"standardValue4"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Readonly"`),s(),i(`span`,{class:`hljs-attr`},`readonly`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"standardValue5"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Disabled"`),s(),i(`span`,{class:`hljs-attr`},`disabled`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"standardValue6"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Clearable"`),s(),i(`span`,{class:`hljs-attr`},`clearable`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"standardValue7"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Validate"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[(v) => !!v || 'Please select date']"`),s(`
    />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"standardValue8"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Validate with Zod"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"z.string().min(1, { message: 'Please select date' })"`),s(`
    />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"standardValue9"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Display Icon"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`prepend-icon`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"prepend-icon"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"calendar-month-outline"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`append-icon`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"append-icon"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"heart-outline"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-date-input`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"standardValue10"`),s(),i(`span`,{class:`hljs-attr`},`multiple`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Select multiple dates"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"standardValue11"`),s(),i(`span`,{class:`hljs-attr`},`range`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Select date range"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"standardValue15"`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"month"`),s(),i(`span`,{class:`hljs-attr`},`range`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Select month range"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"standardValue16"`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"year"`),s(),i(`span`,{class:`hljs-attr`},`range`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Select year range"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"standardValue17"`),s(),i(`span`,{class:`hljs-attr`},`min`),s(`=`),i(`span`,{class:`hljs-string`},`"2021-04-05"`),s(),i(`span`,{class:`hljs-attr`},`max`),s(`=`),i(`span`,{class:`hljs-string`},`"2021-04-20"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Min And Max"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"standardValue18"`),s(`
      `),i(`span`,{class:`hljs-attr`},`range`),s(`
      `),i(`span`,{class:`hljs-attr`},`range-separator`),s(`=`),i(`span`,{class:`hljs-string`},`" to "`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Custom Separator"`),s(`
    />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"standardValue19"`),s(),i(`span`,{class:`hljs-attr`},`:allowed-dates`),s(`=`),i(`span`,{class:`hljs-string`},`"allowedDates"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Allowed Dates"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"standardValue12"`),s(),i(`span`,{class:`hljs-attr`},`value-format`),s(`=`),i(`span`,{class:`hljs-string`},`"timestamp"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Timestamp Value"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`extra-message`),s(`>`)]),s(`Current value: {{ standardValue12 }}`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-date-input`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"standardValue13"`),s(),i(`span`,{class:`hljs-attr`},`value-format`),s(`=`),i(`span`,{class:`hljs-string`},`"YYYY/MM/DD"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Custom Value Format"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`extra-message`),s(`>`)]),s(`Current value: {{ standardValue13 }}`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-date-input`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"standardValue14"`),s(),i(`span`,{class:`hljs-attr`},`size`),s(`=`),i(`span`,{class:`hljs-string`},`"small"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Small Size"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"datetimeValue"`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"datetime"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Select datetime"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`extra-message`),s(`>`)]),s(`Current value: {{ datetimeValue }}`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-date-input`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),i(`span`,{class:`css`},[s(`
`),i(`span`,{class:`hljs-selector-class`},`.prepend-icon`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`margin-right`),s(`: `),i(`span`,{class:`hljs-number`},`6px`),s(`;
}

`),i(`span`,{class:`hljs-selector-class`},`.append-icon`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`margin-left`),s(`: `),i(`span`,{class:`hljs-number`},`6px`),s(`;
}

`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,h,[i(`h3`,g,[o(N,{to:`#OutlinedVariant`},{default:t(()=>[...l[6]||=[s(`#`,-1)]]),_:1}),l[7]||=s(`Outlined Variant`,-1)]),o(P,null,{default:t(()=>[...l[8]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { z } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'zod'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` outlinedValue = ref(`),i(`span`,{class:`hljs-string`},`'2021-04-08'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` outlinedValue2 = ref(`),i(`span`,{class:`hljs-string`},`'2021-04'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` outlinedValue3 = ref(`),i(`span`,{class:`hljs-string`},`'2021'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` outlinedValue4 = ref(`),i(`span`,{class:`hljs-string`},`'2021-04-08'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` outlinedValue5 = ref(`),i(`span`,{class:`hljs-string`},`'2021-04-08'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` outlinedValue6 = ref(`),i(`span`,{class:`hljs-string`},`'2021-04-08'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` outlinedValue7 = ref(`),i(`span`,{class:`hljs-string`},`''`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` outlinedValue8 = ref(`),i(`span`,{class:`hljs-string`},`''`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` outlinedValue9 = ref(`),i(`span`,{class:`hljs-string`},`'2021-04-08'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` outlinedValue10 = ref([`),i(`span`,{class:`hljs-string`},`'2021-04-08'`),s(`, `),i(`span`,{class:`hljs-string`},`'2021-04-12'`),s(`])
`),i(`span`,{class:`hljs-keyword`},`const`),s(` outlinedValue11 = ref([`),i(`span`,{class:`hljs-string`},`'2021-04-08'`),s(`, `),i(`span`,{class:`hljs-string`},`'2021-04-20'`),s(`])
`),i(`span`,{class:`hljs-keyword`},`const`),s(` outlinedValue12 = ref(`),i(`span`,{class:`hljs-number`},`1617811200000`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` outlinedValue13 = ref(`),i(`span`,{class:`hljs-string`},`'2021/04/08'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` outlinedValue14 = ref(`),i(`span`,{class:`hljs-string`},`'2021-04-08'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` outlinedValue15 = ref([`),i(`span`,{class:`hljs-string`},`'2021-04'`),s(`, `),i(`span`,{class:`hljs-string`},`'2021-09'`),s(`])
`),i(`span`,{class:`hljs-keyword`},`const`),s(` outlinedValue16 = ref([`),i(`span`,{class:`hljs-string`},`'2021'`),s(`, `),i(`span`,{class:`hljs-string`},`'2025'`),s(`])
`),i(`span`,{class:`hljs-keyword`},`const`),s(` outlinedValue17 = ref(`),i(`span`,{class:`hljs-string`},`'2021-04-08'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` outlinedValue18 = ref([`),i(`span`,{class:`hljs-string`},`'2021-04-08'`),s(`, `),i(`span`,{class:`hljs-string`},`'2021-04-12'`),s(`])
`),i(`span`,{class:`hljs-keyword`},`const`),s(` outlinedValue19 = ref(`),i(`span`,{class:`hljs-string`},`'2021-04-09'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` datetimeNoSecondsValue = ref(`),i(`span`,{class:`hljs-string`},`'2021-04-08 12:30'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` datetimeAllowedTimesValue = ref(`),i(`span`,{class:`hljs-string`},`'2021-04-08 10:00:00'`),s(`)

`),i(`span`,{class:`hljs-keyword`},`const`),s(` allowedDates = `),i(`span`,{class:`hljs-function`},[s(`(`),i(`span`,{class:`hljs-params`},`date`),s(`) =>`)]),s(),i(`span`,{class:`hljs-built_in`},`Number`),s(`(date.split(`),i(`span`,{class:`hljs-string`},`'-'`),s(`)[`),i(`span`,{class:`hljs-number`},`2`),s(`]) % `),i(`span`,{class:`hljs-number`},`2`),s(` === `),i(`span`,{class:`hljs-number`},`1`),s(`
`),i(`span`,{class:`hljs-keyword`},`const`),s(` allowedTimes = `),i(`span`,{class:`hljs-function`},`() =>`),s(` ({
  `),i(`span`,{class:`hljs-attr`},`hours`),s(`: `),i(`span`,{class:`hljs-function`},[s(`(`),i(`span`,{class:`hljs-params`},`hour`),s(`) =>`)]),s(` hour >= `),i(`span`,{class:`hljs-number`},`9`),s(` && hour < `),i(`span`,{class:`hljs-number`},`18`),s(`,
  `),i(`span`,{class:`hljs-attr`},`minutes`),s(`: `),i(`span`,{class:`hljs-function`},[s(`(`),i(`span`,{class:`hljs-params`},`minute`),s(`) =>`)]),s(` minute % `),i(`span`,{class:`hljs-number`},`15`),s(` === `),i(`span`,{class:`hljs-number`},`0`),s(`,
  `),i(`span`,{class:`hljs-attr`},`seconds`),s(`: `),i(`span`,{class:`hljs-function`},[s(`(`),i(`span`,{class:`hljs-params`},`second`),s(`) =>`)]),s(` second === `),i(`span`,{class:`hljs-number`},`0`),s(`,
})
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-space`),s(),i(`span`,{class:`hljs-attr`},`direction`),s(`=`),i(`span`,{class:`hljs-string`},`"column"`),s(),i(`span`,{class:`hljs-attr`},`size`),s(`=`),i(`span`,{class:`hljs-string`},`"large"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"outlinedValue"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Select date"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"outlinedValue2"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"month"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Select month"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"outlinedValue3"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"year"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Select year"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"outlinedValue4"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Readonly"`),s(),i(`span`,{class:`hljs-attr`},`readonly`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"outlinedValue5"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Disabled"`),s(),i(`span`,{class:`hljs-attr`},`disabled`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"outlinedValue6"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Clearable"`),s(),i(`span`,{class:`hljs-attr`},`clearable`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"outlinedValue7"`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Validate"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[(v) => !!v || 'Please select date']"`),s(`
    />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"outlinedValue8"`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Validate with Zod"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"z.string().min(1, { message: 'Please select date' })"`),s(`
    />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"outlinedValue9"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Display Icon"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`prepend-icon`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"prepend-icon"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"calendar-month-outline"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`append-icon`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"append-icon"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"heart-outline"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-date-input`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"outlinedValue10"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(),i(`span`,{class:`hljs-attr`},`multiple`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Select multiple dates"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"outlinedValue11"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(),i(`span`,{class:`hljs-attr`},`range`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Select date range"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"outlinedValue15"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"month"`),s(),i(`span`,{class:`hljs-attr`},`range`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Select month range"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"outlinedValue16"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"year"`),s(),i(`span`,{class:`hljs-attr`},`range`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Select year range"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"outlinedValue17"`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
      `),i(`span`,{class:`hljs-attr`},`min`),s(`=`),i(`span`,{class:`hljs-string`},`"2021-04-05"`),s(`
      `),i(`span`,{class:`hljs-attr`},`max`),s(`=`),i(`span`,{class:`hljs-string`},`"2021-04-20"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Min And Max"`),s(`
    />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"outlinedValue18"`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
      `),i(`span`,{class:`hljs-attr`},`range`),s(`
      `),i(`span`,{class:`hljs-attr`},`range-separator`),s(`=`),i(`span`,{class:`hljs-string`},`" to "`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Custom Separator"`),s(`
    />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"outlinedValue19"`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:allowed-dates`),s(`=`),i(`span`,{class:`hljs-string`},`"allowedDates"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Allowed Dates"`),s(`
    />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"outlinedValue12"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(),i(`span`,{class:`hljs-attr`},`value-format`),s(`=`),i(`span`,{class:`hljs-string`},`"timestamp"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Timestamp Value"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`extra-message`),s(`>`)]),s(`Current value: {{ outlinedValue12 }}`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-date-input`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"outlinedValue13"`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
      `),i(`span`,{class:`hljs-attr`},`value-format`),s(`=`),i(`span`,{class:`hljs-string`},`"YYYY/MM/DD"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Custom Value Format"`),s(`
    >`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`extra-message`),s(`>`)]),s(`Current value: {{ outlinedValue13 }}`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-date-input`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"outlinedValue14"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(),i(`span`,{class:`hljs-attr`},`size`),s(`=`),i(`span`,{class:`hljs-string`},`"small"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Small Size"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"datetimeNoSecondsValue"`),s(`
      `),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"datetime"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:use-seconds`),s(`=`),i(`span`,{class:`hljs-string`},`"false"`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Select datetime to minute"`),s(`
    >`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`extra-message`),s(`>`)]),s(`Current value: {{ datetimeNoSecondsValue }}`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-date-input`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"datetimeAllowedTimesValue"`),s(`
      `),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"datetime"`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"outlined"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:allowed-times`),s(`=`),i(`span`,{class:`hljs-string`},`"allowedTimes"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Allowed times"`),s(`
    >`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`extra-message`),s(`>`)]),s(`Current value: {{ datetimeAllowedTimesValue }}`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-date-input`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),i(`span`,{class:`css`},[s(`
`),i(`span`,{class:`hljs-selector-class`},`.prepend-icon`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`margin-right`),s(`: `),i(`span`,{class:`hljs-number`},`6px`),s(`;
}

`),i(`span`,{class:`hljs-selector-class`},`.append-icon`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`margin-left`),s(`: `),i(`span`,{class:`hljs-number`},`6px`),s(`;
}

`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,_,[i(`h3`,v,[o(N,{to:`#FilledVariant`},{default:t(()=>[...l[9]||=[s(`#`,-1)]]),_:1}),l[10]||=s(`Filled Variant`,-1)]),o(P,null,{default:t(()=>[...l[11]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { z } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'zod'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` filledValue = ref(`),i(`span`,{class:`hljs-string`},`'2021-04-08'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` filledValue2 = ref(`),i(`span`,{class:`hljs-string`},`'2021-04'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` filledValue3 = ref(`),i(`span`,{class:`hljs-string`},`'2021'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` filledValue4 = ref(`),i(`span`,{class:`hljs-string`},`'2021-04-08'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` filledValue5 = ref(`),i(`span`,{class:`hljs-string`},`'2021-04-08'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` filledValue6 = ref(`),i(`span`,{class:`hljs-string`},`'2021-04-08'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` filledValue7 = ref(`),i(`span`,{class:`hljs-string`},`''`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` filledValue8 = ref(`),i(`span`,{class:`hljs-string`},`''`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` filledValue9 = ref(`),i(`span`,{class:`hljs-string`},`'2021-04-08'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` filledValue10 = ref([`),i(`span`,{class:`hljs-string`},`'2021-04-08'`),s(`, `),i(`span`,{class:`hljs-string`},`'2021-04-12'`),s(`])
`),i(`span`,{class:`hljs-keyword`},`const`),s(` filledValue11 = ref([`),i(`span`,{class:`hljs-string`},`'2021-04-08'`),s(`, `),i(`span`,{class:`hljs-string`},`'2021-04-20'`),s(`])
`),i(`span`,{class:`hljs-keyword`},`const`),s(` filledValue12 = ref(`),i(`span`,{class:`hljs-number`},`1617811200000`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` filledValue13 = ref(`),i(`span`,{class:`hljs-string`},`'2021/04/08'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` filledValue14 = ref(`),i(`span`,{class:`hljs-string`},`'2021-04-08'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` filledValue15 = ref([`),i(`span`,{class:`hljs-string`},`'2021-04'`),s(`, `),i(`span`,{class:`hljs-string`},`'2021-09'`),s(`])
`),i(`span`,{class:`hljs-keyword`},`const`),s(` filledValue16 = ref([`),i(`span`,{class:`hljs-string`},`'2021'`),s(`, `),i(`span`,{class:`hljs-string`},`'2025'`),s(`])
`),i(`span`,{class:`hljs-keyword`},`const`),s(` filledValue17 = ref(`),i(`span`,{class:`hljs-string`},`'2021-04-08'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` filledValue18 = ref([`),i(`span`,{class:`hljs-string`},`'2021-04-08'`),s(`, `),i(`span`,{class:`hljs-string`},`'2021-04-12'`),s(`])
`),i(`span`,{class:`hljs-keyword`},`const`),s(` filledValue19 = ref(`),i(`span`,{class:`hljs-string`},`'2021-04-09'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` datetimeMinMaxValue = ref(`),i(`span`,{class:`hljs-string`},`'2021-04-08 12:00:00'`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` datetimeRangeValue = ref([`),i(`span`,{class:`hljs-string`},`'2021-04-08 09:00:00'`),s(`, `),i(`span`,{class:`hljs-string`},`'2021-04-12 18:30:00'`),s(`])

`),i(`span`,{class:`hljs-keyword`},`const`),s(` allowedDates = `),i(`span`,{class:`hljs-function`},[s(`(`),i(`span`,{class:`hljs-params`},`date`),s(`) =>`)]),s(),i(`span`,{class:`hljs-built_in`},`Number`),s(`(date.split(`),i(`span`,{class:`hljs-string`},`'-'`),s(`)[`),i(`span`,{class:`hljs-number`},`2`),s(`]) % `),i(`span`,{class:`hljs-number`},`2`),s(` === `),i(`span`,{class:`hljs-number`},`1`),s(`
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-space`),s(),i(`span`,{class:`hljs-attr`},`direction`),s(`=`),i(`span`,{class:`hljs-string`},`"column"`),s(),i(`span`,{class:`hljs-attr`},`size`),s(`=`),i(`span`,{class:`hljs-string`},`"large"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"filledValue"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Select date"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"filledValue2"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"month"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Select month"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"filledValue3"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"year"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Select year"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"filledValue4"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Readonly"`),s(),i(`span`,{class:`hljs-attr`},`readonly`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"filledValue5"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Disabled"`),s(),i(`span`,{class:`hljs-attr`},`disabled`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"filledValue6"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Clearable"`),s(),i(`span`,{class:`hljs-attr`},`clearable`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"filledValue7"`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Validate"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"[(v) => !!v || 'Please select date']"`),s(`
    />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"filledValue8"`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Validate with Zod"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"z.string().min(1, { message: 'Please select date' })"`),s(`
    />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"filledValue9"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Display Icon"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`prepend-icon`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"prepend-icon"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"calendar-month-outline"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`append-icon`),s(`>`)]),s(`
        `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"append-icon"`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"heart-outline"`),s(` />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-date-input`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"filledValue10"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(),i(`span`,{class:`hljs-attr`},`multiple`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Select multiple dates"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"filledValue11"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(),i(`span`,{class:`hljs-attr`},`range`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Select date range"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"filledValue15"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"month"`),s(),i(`span`,{class:`hljs-attr`},`range`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Select month range"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"filledValue16"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"year"`),s(),i(`span`,{class:`hljs-attr`},`range`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Select year range"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"filledValue17"`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(`
      `),i(`span`,{class:`hljs-attr`},`min`),s(`=`),i(`span`,{class:`hljs-string`},`"2021-04-05"`),s(`
      `),i(`span`,{class:`hljs-attr`},`max`),s(`=`),i(`span`,{class:`hljs-string`},`"2021-04-20"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Min And Max"`),s(`
    />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"filledValue18"`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(`
      `),i(`span`,{class:`hljs-attr`},`range`),s(`
      `),i(`span`,{class:`hljs-attr`},`range-separator`),s(`=`),i(`span`,{class:`hljs-string`},`" to "`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Custom Separator"`),s(`
    />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"filledValue19"`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(`
      `),i(`span`,{class:`hljs-attr`},`:allowed-dates`),s(`=`),i(`span`,{class:`hljs-string`},`"allowedDates"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Allowed Dates"`),s(`
    />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"filledValue12"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(),i(`span`,{class:`hljs-attr`},`value-format`),s(`=`),i(`span`,{class:`hljs-string`},`"timestamp"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Timestamp Value"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`extra-message`),s(`>`)]),s(`Current value: {{ filledValue12 }}`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-date-input`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"filledValue13"`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(`
      `),i(`span`,{class:`hljs-attr`},`value-format`),s(`=`),i(`span`,{class:`hljs-string`},`"YYYY/MM/DD"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Custom Value Format"`),s(`
    >`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`extra-message`),s(`>`)]),s(`Current value: {{ filledValue13 }}`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-date-input`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"filledValue14"`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(),i(`span`,{class:`hljs-attr`},`size`),s(`=`),i(`span`,{class:`hljs-string`},`"small"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Small Size"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(`
      `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"datetimeMinMaxValue"`),s(`
      `),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"datetime"`),s(`
      `),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(`
      `),i(`span`,{class:`hljs-attr`},`min`),s(`=`),i(`span`,{class:`hljs-string`},`"2021-04-08 09:30:00"`),s(`
      `),i(`span`,{class:`hljs-attr`},`max`),s(`=`),i(`span`,{class:`hljs-string`},`"2021-04-20 18:00:00"`),s(`
      `),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Datetime min and max"`),s(`
    >`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`extra-message`),s(`>`)]),s(`Current value: {{ datetimeMinMaxValue }}`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-date-input`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-date-input`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"datetimeRangeValue"`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"datetime"`),s(),i(`span`,{class:`hljs-attr`},`range`),s(),i(`span`,{class:`hljs-attr`},`variant`),s(`=`),i(`span`,{class:`hljs-string`},`"filled"`),s(),i(`span`,{class:`hljs-attr`},`placeholder`),s(`=`),i(`span`,{class:`hljs-string`},`"Select datetime range"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`extra-message`),s(`>`)]),s(`Current value: {{ datetimeRangeValue.join(' ~ ') }}`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-date-input`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),i(`span`,{class:`css`},[s(`
`),i(`span`,{class:`hljs-selector-class`},`.prepend-icon`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`margin-right`),s(`: `),i(`span`,{class:`hljs-number`},`6px`),s(`;
}

`),i(`span`,{class:`hljs-selector-class`},`.append-icon`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`margin-left`),s(`: `),i(`span`,{class:`hljs-number`},`6px`),s(`;
}

`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),l[28]||=i(`h2`,null,`API`,-1),i(`div`,y,[i(`h3`,b,[o(N,{to:`#Props`},{default:t(()=>[...l[12]||=[s(`#`,-1)]]),_:1}),l[13]||=s(`Props`,-1)]),l[14]||=c(`<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>Binding value. Default formats are <code>YYYY-MM-DD</code> / <code>YYYY-MM</code> / <code>YYYY</code> / <code>YYYY-MM-DD HH:mm:ss</code>; datetime uses <code>YYYY-MM-DD HH:mm</code> when <code>use-seconds</code> is <code>false</code>. <code>value-format</code> can change the binding value type</td><td><em>string | number | Date | Array&lt;string | number | Date&gt; | undefined</em></td><td><code>-</code></td></tr><tr><td><code>type</code></td><td>Input type, can be <code>date</code> <code>month</code> <code>year</code> <code>datetime</code></td><td><em>string</em></td><td><code>date</code></td></tr><tr><td><code>format</code></td><td>Input display format</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>value-format</code></td><td>Binding value format, can be <code>timestamp</code> <code>date</code> or a date format string</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>use-seconds</code></td><td>Whether to keep precision to seconds when <code>type</code> is <code>datetime</code></td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>multiple</code></td><td>Whether to enable multiple selection. This prop is not supported when <code>type</code> is <code>datetime</code></td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>range</code></td><td>Whether to enable range selection</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>separator</code></td><td>Separator between multiple dates in the input</td><td><em>string</em></td><td><code>, </code></td></tr><tr><td><code>range-separator</code></td><td>Separator for range display</td><td><em>string</em></td><td><code>~</code></td></tr><tr><td><code>placeholder</code></td><td>Placeholder</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>variant</code></td><td>Input variant, can be <code>standard</code> <code>outlined</code> <code>filled</code></td><td><em>string</em></td><td><code>standard</code></td></tr><tr><td><code>size</code></td><td>Input size, can be <code>normal</code> <code>small</code></td><td><em>string</em></td><td><code>normal</code></td></tr><tr><td><code>line</code></td><td>Whether to show divider</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>hint</code></td><td>Whether to use placeholder as hint</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>text-color</code></td><td>Text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>focus-color</code></td><td>Main color when focused</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>blur-color</code></td><td>Main color when blurred</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>readonly</code></td><td>Whether to be readonly. Input and panel selection are disabled when readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable the input</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>clearable</code></td><td>Whether to show clear icon</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>validate-trigger</code></td><td>Validation trigger timing, can be <code>onFocus</code> <code>onBlur</code> <code>onChange</code> <code>onClick</code> <code>onClear</code> <code>onInput</code></td><td><em>InputValidateTrigger[]</em></td><td><code>[&#39;onInput&#39;, &#39;onClear&#39;, &#39;onChange&#39;]</code></td></tr><tr><td><code>rules</code></td><td>Validation rules. Return <code>true</code> to pass validation, other values are converted into user messages. <a href="#/en-US/zodValidation">Zod validation</a> is supported since <code>3.5.0</code></td><td><em>((v: any) =&gt; any) | ZodType | Array&lt;((v: any) =&gt; any) | ZodType&gt;</em></td><td><code>-</code></td></tr><tr><td><code>allowed-dates</code></td><td>Selectable date filter. The value format follows <code>type</code>: <code>year</code> uses <code>YYYY</code>, <code>month</code> uses <code>YYYY-MM</code>, and <code>date</code> / <code>datetime</code> use <code>YYYY-MM-DD</code></td><td><em>(value: string) =&gt; boolean</em></td><td><code>-</code></td></tr><tr><td><code>allowed-times</code></td><td>Selectable time filter, only works when <code>type</code> is <code>datetime</code></td><td><em>(date: string, position?: &#39;start&#39; | &#39;end&#39;) =&gt; { hours?, minutes?, seconds? }</em></td><td><code>-</code></td></tr><tr><td><code>min</code></td><td>Minimum selectable boundary</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>max</code></td><td>Maximum selectable boundary</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>first-day-of-week</code></td><td>First day of week, starts from Sunday <code>0</code></td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>tabindex</code></td><td>Same as native input tabindex</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table>`,1)]),i(`div`,x,[i(`h3`,S,[o(N,{to:`#Methods`},{default:t(()=>[...l[15]||=[s(`#`,-1)]]),_:1}),l[16]||=s(`Methods`,-1)]),l[17]||=c(`<table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>focus</code></td><td>Focus</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>blur</code></td><td>Blur</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>select</code></td><td>Select all input text</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>validate</code></td><td>Trigger validation</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clear validation message</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clear binding value and validation message</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>`,1)]),i(`div`,C,[i(`h3`,w,[o(N,{to:`#Events`},{default:t(()=>[...l[18]||=[s(`#`,-1)]]),_:1}),l[19]||=s(`Events`,-1)]),l[20]||=c(`<table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>focus</code></td><td>Emitted on focus</td><td><code>event: Event</code></td></tr><tr><td><code>blur</code></td><td>Emitted on blur</td><td><code>event: Event</code></td></tr><tr><td><code>clear</code></td><td>Emitted on clear</td><td><code>value: string</code></td></tr><tr><td><code>change</code></td><td>Emitted when binding value changes</td><td><code>value: string | number | Date | Array&lt;string | number | Date&gt; | undefined</code></td></tr></tbody></table>`,1)]),i(`div`,T,[i(`h3`,E,[o(N,{to:`#Slots`},{default:t(()=>[...l[21]||=[s(`#`,-1)]]),_:1}),l[22]||=s(`Slots`,-1)]),l[23]||=c(`<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>prepend-icon</code></td><td>Prepend icon</td><td><code>-</code></td></tr><tr><td><code>append-icon</code></td><td>Append icon</td><td><code>-</code></td></tr><tr><td><code>clear-icon</code></td><td>Clear icon</td><td><code>clear: (e: Event) =&gt; void</code></td></tr><tr><td><code>extra-message</code></td><td>Extra message</td><td><code>-</code></td></tr></tbody></table>`,1)]),i(`div`,D,[i(`h3`,O,[o(N,{to:`#StyleVariables`},{default:t(()=>[...l[24]||=[s(`#`,-1)]]),_:1}),l[25]||=s(`Style Variables`,-1)]),l[26]||=c(`<p>The following are the css variables used by the component. You can use <a href="#/en-US/style-provider">StyleProvider</a> to customize them.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--date-input-picker-width</code></td><td><code>320px</code></td></tr><tr><td><code>--date-input-time-select-separator-color</code></td><td><code>var(--color-on-surface-variant)</code></td></tr><tr><td><code>--date-input-time-select-border-color</code></td><td><code>var(--color-outline)</code></td></tr><tr><td><code>--date-input-time-select-active-color</code></td><td><code>var(--color-primary)</code></td></tr></tbody></table>`,2)])])}var A=e(l,[[`render`,k]]);export{A as default};