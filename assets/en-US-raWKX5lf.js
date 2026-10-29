import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s,m as c}from"./runtime-core.esm-bundler-DUghkl6b.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`Intro`},p={class:`card`},m={id:`BasicUsage`},h={class:`card`},g={id:`CustomizeTotalRating`},_={class:`card`},v={id:`CustomizeRatingIconStyle`},y={class:`card`},b={id:`CustomizeRatingIconWithSlots`},x={class:`card`},S={id:`CustomizeRatingIconSizeAndGap`},C={class:`card`},w={id:`AllowHalfRating`},T={class:`card`},E={id:`DisabledAndReadonly`},D={class:`card`},O={id:`CanBeCleared`},k={class:`card`},A={id:`ListenEvent`},j={class:`card`},M={id:`Validate`},N={class:`card`},P={id:`ValidateWithZod`},F={class:`card`},I={id:`props`},L={class:`card`},R={id:`Slots`},z={class:`card`},B={id:`Events`},V={class:`card`},H={id:`StyleVariables`};function U(e,l,U,W,G,K){let q=n(`router-link`),J=n(`var-site-code-example`);return r(),a(`div`,u,[l[57]||=i(`h1`,null,`Rate`,-1),i(`div`,d,[i(`h3`,f,[o(q,{to:`#Intro`},{default:t(()=>[...l[0]||=[s(`#`,-1)]]),_:1}),l[1]||=s(`Intro`,-1)]),l[2]||=i(`p`,null,`Used to rate things.`,-1)]),i(`div`,p,[i(`h3`,m,[o(q,{to:`#BasicUsage`},{default:t(()=>[...l[3]||=[s(`#`,-1)]]),_:1}),l[4]||=s(`Basic Usage`,-1)]),o(J,null,{default:t(()=>[...l[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` score = ref(`),i(`span`,{class:`hljs-number`},`3`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-rate`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"score"`),s(`/>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-rate`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"score"`),s(),i(`span`,{class:`hljs-attr`},`icon`),s(`=`),i(`span`,{class:`hljs-string`},`"thumb-up"`),s(),i(`span`,{class:`hljs-attr`},`empty-icon`),s(`=`),i(`span`,{class:`hljs-string`},`"thumb-up-outline"`),s(`/>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,h,[i(`h3`,g,[o(q,{to:`#CustomizeTotalRating`},{default:t(()=>[...l[6]||=[s(`#`,-1)]]),_:1}),l[7]||=s(`Customize Total Rating`,-1)]),l[9]||=i(`p`,null,[s(`Set the total rating through the `),i(`code`,null,`count`),s(` attribute.`)],-1),o(J,null,{default:t(()=>[...l[8]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` score = ref(`),i(`span`,{class:`hljs-number`},`3`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-rate`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"score"`),s(),i(`span`,{class:`hljs-attr`},`:count`),s(`=`),i(`span`,{class:`hljs-string`},`"8"`),s(`/>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,_,[i(`h3`,v,[o(q,{to:`#CustomizeRatingIconStyle`},{default:t(()=>[...l[10]||=[s(`#`,-1)]]),_:1}),l[11]||=s(`Customize Rating Icon Style`,-1)]),l[13]||=i(`p`,null,[s(`Set the selected and unselected icons through the `),i(`code`,null,`icon`),s(` and `),i(`code`,null,`empty-icon`),s(` properties. Set the selected and unselected colors through the `),i(`code`,null,`color`),s(` and `),i(`code`,null,`empty-color`),s(` properties.`)],-1),o(J,null,{default:t(()=>[...l[12]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` score = ref(`),i(`span`,{class:`hljs-number`},`3`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-rate`),s(`
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`=`),i(`span`,{class:`hljs-string`},`"heart"`),s(` 
    `),i(`span`,{class:`hljs-attr`},`empty-icon`),s(`=`),i(`span`,{class:`hljs-string`},`"heart-outline"`),s(` 
    `),i(`span`,{class:`hljs-attr`},`color`),s(`=`),i(`span`,{class:`hljs-string`},`"red"`),s(` 
    `),i(`span`,{class:`hljs-attr`},`empty-color`),s(`=`),i(`span`,{class:`hljs-string`},`"red"`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"score"`),s(`
  />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,y,[i(`h3`,b,[o(q,{to:`#CustomizeRatingIconWithSlots`},{default:t(()=>[...l[14]||=[s(`#`,-1)]]),_:1}),l[15]||=s(`Customize Rating Icon With Slots`,-1)]),l[17]||=i(`p`,null,[s(`Use `),i(`code`,null,`icon`),s(`, `),i(`code`,null,`half-icon`),s(`, and `),i(`code`,null,`empty-icon`),s(` slots to customize rating icons.`)],-1),o(J,null,{default:t(()=>[...l[16]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` score = ref(`),i(`span`,{class:`hljs-number`},`3.5`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-rate`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"score"`),s(),i(`span`,{class:`hljs-attr`},`half`),s(),i(`span`,{class:`hljs-attr`},`color`),s(`=`),i(`span`,{class:`hljs-string`},`"red"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`icon`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"heart"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`half-icon`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"heart-half-full"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`empty-icon`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"heart-outline"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-rate`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,x,[i(`h3`,S,[o(q,{to:`#CustomizeRatingIconSizeAndGap`},{default:t(()=>[...l[18]||=[s(`#`,-1)]]),_:1}),l[19]||=s(`Customize Rating Icon Size And Gap`,-1)]),l[21]||=i(`p`,null,[s(`Use the `),i(`code`,null,`size`),s(` property to set the size of the score icon. Set the interval between scores via the `),i(`code`,null,`gap`),s(` property.`)],-1),o(J,null,{default:t(()=>[...l[20]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` score = ref(`),i(`span`,{class:`hljs-number`},`3`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-rate`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"score"`),s(),i(`span`,{class:`hljs-attr`},`:size`),s(`=`),i(`span`,{class:`hljs-string`},`"28"`),s(),i(`span`,{class:`hljs-attr`},`:gap`),s(`=`),i(`span`,{class:`hljs-string`},`"8"`),s(`/>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,C,[i(`h3`,w,[o(q,{to:`#AllowHalfRating`},{default:t(()=>[...l[22]||=[s(`#`,-1)]]),_:1}),l[23]||=s(`Allow Half Rating`,-1)]),l[25]||=i(`p`,null,[s(`The `),i(`code`,null,`half`),s(` attribute is used to set the rating to semi selective, and the `),i(`code`,null,`half-icon`),s(` attribute is used to set the style of semi selective.`)],-1),o(J,null,{default:t(()=>[...l[24]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` score = ref(`),i(`span`,{class:`hljs-number`},`3.5`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-rate`),s(),i(`span`,{class:`hljs-attr`},`half`),s(),i(`span`,{class:`hljs-attr`},`:count`),s(`=`),i(`span`,{class:`hljs-string`},`"8"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"score"`),s(` />`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-rate`),s(`
    `),i(`span`,{class:`hljs-attr`},`half`),s(`
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`=`),i(`span`,{class:`hljs-string`},`"heart"`),s(`
    `),i(`span`,{class:`hljs-attr`},`half-icon`),s(`=`),i(`span`,{class:`hljs-string`},`"heart-half-full"`),s(`
    `),i(`span`,{class:`hljs-attr`},`empty-icon`),s(`=`),i(`span`,{class:`hljs-string`},`"heart-outline"`),s(`
    `),i(`span`,{class:`hljs-attr`},`color`),s(`=`),i(`span`,{class:`hljs-string`},`"red"`),s(`
    `),i(`span`,{class:`hljs-attr`},`:count`),s(`=`),i(`span`,{class:`hljs-string`},`"8"`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"score"`),s(`
  />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,T,[i(`h3`,E,[o(q,{to:`#DisabledAndReadonly`},{default:t(()=>[...l[26]||=[s(`#`,-1)]]),_:1}),l[27]||=s(`Disabled And Readonly`,-1)]),l[29]||=i(`p`,null,[s(`The `),i(`code`,null,`disabled`),s(` property sets the score to the no-click state, and `),i(`code`,null,`disabled-color`),s(` sets the icon color when disabled. The score is set to read-only via the `),i(`code`,null,`readonly`),s(` property.`)],-1),o(J,null,{default:t(()=>[...l[28]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` score = ref(`),i(`span`,{class:`hljs-number`},`3`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-rate`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"score"`),s(),i(`span`,{class:`hljs-attr`},`disabled`),s(`/>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-rate`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"score"`),s(),i(`span`,{class:`hljs-attr`},`readonly`),s(`/>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,D,[i(`h3`,O,[o(q,{to:`#CanBeCleared`},{default:t(()=>[...l[30]||=[s(`#`,-1)]]),_:1}),l[31]||=s(`Can Be Cleared`,-1)]),l[33]||=i(`p`,null,[s(`The `),i(`code`,null,`clearable`),s(` property allows users to clear score.`)],-1),o(J,null,{default:t(()=>[...l[32]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` score = ref(`),i(`span`,{class:`hljs-number`},`3.5`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-rate`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"score"`),s(),i(`span`,{class:`hljs-attr`},`clearable`),s(),i(`span`,{class:`hljs-attr`},`half`),s(`/>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,k,[i(`h3`,A,[o(q,{to:`#ListenEvent`},{default:t(()=>[...l[34]||=[s(`#`,-1)]]),_:1}),l[35]||=s(`Listen Event`,-1)]),l[37]||=i(`p`,null,[s(`Other interaction logic is completed by calling the `),i(`code`,null,`change`),s(` event.`)],-1),o(J,null,{default:t(()=>[...l[36]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Snackbar } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` score = ref(`),i(`span`,{class:`hljs-number`},`3`),s(`)

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`handleChange`),s(`(`),i(`span`,{class:`hljs-params`},`score`),s(`) `)]),s(`{
  Snackbar({
    `),i(`span`,{class:`hljs-attr`},`content`),s(`: `),i(`span`,{class:`hljs-string`},[s("`click "),i(`span`,{class:`hljs-subst`},"${score}"),s("`")]),s(`,
    `),i(`span`,{class:`hljs-attr`},`position`),s(`: `),i(`span`,{class:`hljs-string`},`'top'`),s(`
  })
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-rate`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"score"`),s(` @`),i(`span`,{class:`hljs-attr`},`change`),s(`=`),i(`span`,{class:`hljs-string`},`"handleChange"`),s(`/>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,j,[i(`h3`,M,[o(q,{to:`#Validate`},{default:t(()=>[...l[38]||=[s(`#`,-1)]]),_:1}),l[39]||=s(`Validate`,-1)]),l[41]||=i(`p`,null,[s(`The values are validated by passing in an array of validators. If the validator returns `),i(`code`,null,`true`),s(`, the validation passes. Other values are converted to text as a user prompt.`)],-1),o(J,null,{default:t(()=>[...l[40]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` score = ref(`),i(`span`,{class:`hljs-number`},`3`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-rate`),s(),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"v => v > 2 || 'It has to be greater than 2'"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`"score"`),s(`/>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,N,[i(`h3`,P,[o(q,{to:`#ValidateWithZod`},{default:t(()=>[...l[42]||=[s(`#`,-1)]]),_:1}),l[43]||=s(`Validate With Zod`,-1)]),o(J,null,{default:t(()=>[...l[44]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { z } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'zod'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` score = ref(`),i(`span`,{class:`hljs-number`},`3`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-rate`),s(),i(`span`,{class:`hljs-attr`},`:rules`),s(`=`),i(`span`,{class:`hljs-string`},`"z.number().min(3, 'It has to be greater than 2')"`),s(),i(`span`,{class:`hljs-attr`},`v-model`),s(`=`),i(`span`,{class:`hljs-string`},`'score'`),s(`/>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),l[58]||=i(`h2`,null,`API`,-1),i(`div`,F,[i(`h3`,I,[o(q,{to:`#props`},{default:t(()=>[...l[45]||=[s(`#`,-1)]]),_:1}),l[46]||=s(`props`,-1)]),l[47]||=c(`<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The current rating</td><td><em>number</em></td><td><code>0</code></td></tr><tr><td><code>count</code></td><td>Total rating</td><td><em>number | string</em></td><td><code>5</code></td></tr><tr><td><code>color</code></td><td>The color of the icon when selected</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>The icon style when the entire icon is selected</td><td><em>string</em></td><td><code>star</code></td></tr><tr><td><code>empty-color</code></td><td>The color of the icon when unchecked</td><td><em>string</em></td><td><code>#bdbdbd</code></td></tr><tr><td><code>empty-icon</code></td><td>Style of the icon when unchecked</td><td><em>string</em></td><td><code>star-outline</code></td></tr><tr><td><code>size</code></td><td>Icon size, default unit is <code>px</code></td><td><em>number | string</em></td><td><code>-</code></td></tr><tr><td><code>gap</code></td><td>Icon spacing, default unit is <code>px</code></td><td><em>number | string</em></td><td><code>-</code></td></tr><tr><td><code>half</code></td><td>Whether half selection is allowed</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>half-icon</code></td><td>The half-selected icon style only works if <code>half</code> is <code>true</code></td><td><em>string</em></td><td><code>star-half-full</code></td></tr><tr><td><code>namespace</code></td><td>Icon namespace</td><td><em>string</em></td><td><code>var-icon</code></td></tr><tr><td><code>empty-icon-namespace</code></td><td>Empty icon namespace</td><td><em>string</em></td><td><code>var-icon</code></td></tr><tr><td><code>half-icon-namespace</code></td><td>Half icon namespace</td><td><em>string</em></td><td><code>var-icon</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable rating</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled-color</code></td><td>The color of the icon when disabling grading is only effective when <code>disabled</code> is <code>true</code> and has higher priority than <code>color</code> and <code>empty-color</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>readonly</code></td><td>Whether it is in readonly status. The rating cannot be modified in readonly status.</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>clearable</code></td><td>whether to allow to clear</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code></td><td>Whether to use water ripple</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>rules</code></td><td>Validation rules, return <code>true</code> to indicate verification passes, other types of values ​​will be converted into text as user prompts. <a href="#/en-US/zodValidation">Zod validation</a> is supported since <code>3.5.0</code></td><td><em>((v: number) =&gt; any) | ZodType | Array&lt;((v: number) =&gt; any) | ZodType&gt;</em></td><td><code>-</code></td></tr></tbody></table>`,1)]),i(`div`,L,[i(`h3`,R,[o(q,{to:`#Slots`},{default:t(()=>[...l[48]||=[s(`#`,-1)]]),_:1}),l[49]||=s(`Slots`,-1)]),l[50]||=c(`<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>icon</code> <em><strong>3.19.0</strong></em></td><td>The selected icon</td><td><code>-</code></td></tr><tr><td><code>empty-icon</code> <em><strong>3.19.0</strong></em></td><td>The unchecked icon</td><td><code>-</code></td></tr><tr><td><code>half-icon</code> <em><strong>3.19.0</strong></em></td><td>The half-selected icon</td><td><code>-</code></td></tr></tbody></table>`,1)]),i(`div`,z,[i(`h3`,B,[o(q,{to:`#Events`},{default:t(()=>[...l[51]||=[s(`#`,-1)]]),_:1}),l[52]||=s(`Events`,-1)]),l[53]||=i(`table`,null,[i(`thead`,null,[i(`tr`,null,[i(`th`,null,`Event`),i(`th`,null,`Description`),i(`th`,null,`Arguments`)])]),i(`tbody`,null,[i(`tr`,null,[i(`td`,null,[i(`code`,null,`change`)]),i(`td`,null,`Triggered when the rating changes`),i(`td`,null,[i(`code`,null,`value: number`)])])])],-1)]),i(`div`,V,[i(`h3`,H,[o(q,{to:`#StyleVariables`},{default:t(()=>[...l[54]||=[s(`#`,-1)]]),_:1}),l[55]||=s(`Style Variables`,-1)]),l[56]||=c(`<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--rate-color</code></td><td><code>var(--color-text)</code></td></tr><tr><td><code>--rate-size</code></td><td><code>24px</code></td></tr><tr><td><code>--rate-primary-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--rate-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--rate-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--rate-action-padding</code></td><td><code>4px</code></td></tr></tbody></table>`,2)])])}var W=e(l,[[`render`,U]]);export{W as default};