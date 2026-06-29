import{G as e,L as t,N as n,c as r,d as i,g as a,h as o,m as s}from"./runtime-core.esm-bundler-5xw830oL.js";import{t as c}from"./_plugin-vue_export-helper-DAAOZMkq.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`Intro`},p={class:`card`},m={id:`BasicUsage`},h={class:`card`},g={id:`CustomizeTotalRating`},_={class:`card`},v={id:`CustomizeRatingIconStyle`},y={class:`card`},b={id:`CustomizeRatingIconWithSlots`},x={class:`card`},S={id:`CustomizeRatingIconSizeAndGap`},C={class:`card`},w={id:`AllowHalfRating`},T={class:`card`},E={id:`DisabledAndReadonly`},D={class:`card`},O={id:`CanBeCleared`},k={class:`card`},A={id:`ListenEvent`},j={class:`card`},M={id:`Validate`},N={class:`card`},P={id:`ValidateWithZod`},F={class:`card`},I={id:`props`},L={class:`card`},R={id:`Slots`},z={class:`card`},B={id:`Events`},V={class:`card`},H={id:`StyleVariables`};function U(c,l,U,W,G,K){let q=t(`router-link`),J=t(`var-site-code-example`);return n(),i(`div`,u,[l[57]||=r(`h1`,null,`Rate`,-1),r(`div`,d,[r(`h3`,f,[a(q,{to:`#Intro`},{default:e(()=>[...l[0]||=[o(`#`,-1)]]),_:1}),l[1]||=o(`Intro`,-1)]),l[2]||=r(`p`,null,`Used to rate things.`,-1)]),r(`div`,p,[r(`h3`,m,[a(q,{to:`#BasicUsage`},{default:e(()=>[...l[3]||=[o(`#`,-1)]]),_:1}),l[4]||=o(`Basic Usage`,-1)]),a(J,null,{default:e(()=>[...l[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` score = ref(`),r(`span`,{class:`hljs-number`},`3`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-rate`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"score"`),o(`/>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-rate`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"score"`),o(),r(`span`,{class:`hljs-attr`},`icon`),o(`=`),r(`span`,{class:`hljs-string`},`"thumb-up"`),o(),r(`span`,{class:`hljs-attr`},`empty-icon`),o(`=`),r(`span`,{class:`hljs-string`},`"thumb-up-outline"`),o(`/>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,h,[r(`h3`,g,[a(q,{to:`#CustomizeTotalRating`},{default:e(()=>[...l[6]||=[o(`#`,-1)]]),_:1}),l[7]||=o(`Customize Total Rating`,-1)]),l[9]||=r(`p`,null,[o(`Set the total rating through the `),r(`code`,null,`count`),o(` attribute.`)],-1),a(J,null,{default:e(()=>[...l[8]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` score = ref(`),r(`span`,{class:`hljs-number`},`3`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-rate`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"score"`),o(),r(`span`,{class:`hljs-attr`},`:count`),o(`=`),r(`span`,{class:`hljs-string`},`"8"`),o(`/>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,_,[r(`h3`,v,[a(q,{to:`#CustomizeRatingIconStyle`},{default:e(()=>[...l[10]||=[o(`#`,-1)]]),_:1}),l[11]||=o(`Customize Rating Icon Style`,-1)]),l[13]||=r(`p`,null,[o(`Set the selected and unselected icons through the `),r(`code`,null,`icon`),o(` and `),r(`code`,null,`empty-icon`),o(` properties. Set the selected and unselected colors through the `),r(`code`,null,`color`),o(` and `),r(`code`,null,`empty-color`),o(` properties.`)],-1),a(J,null,{default:e(()=>[...l[12]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` score = ref(`),r(`span`,{class:`hljs-number`},`3`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-rate`),o(`
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`=`),r(`span`,{class:`hljs-string`},`"heart"`),o(` 
    `),r(`span`,{class:`hljs-attr`},`empty-icon`),o(`=`),r(`span`,{class:`hljs-string`},`"heart-outline"`),o(` 
    `),r(`span`,{class:`hljs-attr`},`color`),o(`=`),r(`span`,{class:`hljs-string`},`"red"`),o(` 
    `),r(`span`,{class:`hljs-attr`},`empty-color`),o(`=`),r(`span`,{class:`hljs-string`},`"red"`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"score"`),o(`
  />`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,y,[r(`h3`,b,[a(q,{to:`#CustomizeRatingIconWithSlots`},{default:e(()=>[...l[14]||=[o(`#`,-1)]]),_:1}),l[15]||=o(`Customize Rating Icon With Slots`,-1)]),l[17]||=r(`p`,null,[o(`Use `),r(`code`,null,`icon`),o(`, `),r(`code`,null,`half-icon`),o(`, and `),r(`code`,null,`empty-icon`),o(` slots to customize rating icons.`)],-1),a(J,null,{default:e(()=>[...l[16]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` score = ref(`),r(`span`,{class:`hljs-number`},`3.5`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-rate`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"score"`),o(),r(`span`,{class:`hljs-attr`},`half`),o(),r(`span`,{class:`hljs-attr`},`color`),o(`=`),r(`span`,{class:`hljs-string`},`"red"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`icon`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"heart"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`half-icon`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"heart-half-full"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`empty-icon`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"heart-outline"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-rate`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,x,[r(`h3`,S,[a(q,{to:`#CustomizeRatingIconSizeAndGap`},{default:e(()=>[...l[18]||=[o(`#`,-1)]]),_:1}),l[19]||=o(`Customize Rating Icon Size And Gap`,-1)]),l[21]||=r(`p`,null,[o(`Use the `),r(`code`,null,`size`),o(` property to set the size of the score icon. Set the interval between scores via the `),r(`code`,null,`gap`),o(` property.`)],-1),a(J,null,{default:e(()=>[...l[20]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` score = ref(`),r(`span`,{class:`hljs-number`},`3`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-rate`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"score"`),o(),r(`span`,{class:`hljs-attr`},`:size`),o(`=`),r(`span`,{class:`hljs-string`},`"28"`),o(),r(`span`,{class:`hljs-attr`},`:gap`),o(`=`),r(`span`,{class:`hljs-string`},`"8"`),o(`/>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,C,[r(`h3`,w,[a(q,{to:`#AllowHalfRating`},{default:e(()=>[...l[22]||=[o(`#`,-1)]]),_:1}),l[23]||=o(`Allow Half Rating`,-1)]),l[25]||=r(`p`,null,[o(`The `),r(`code`,null,`half`),o(` attribute is used to set the rating to semi selective, and the `),r(`code`,null,`half-icon`),o(` attribute is used to set the style of semi selective.`)],-1),a(J,null,{default:e(()=>[...l[24]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` score = ref(`),r(`span`,{class:`hljs-number`},`3.5`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-rate`),o(),r(`span`,{class:`hljs-attr`},`half`),o(),r(`span`,{class:`hljs-attr`},`:count`),o(`=`),r(`span`,{class:`hljs-string`},`"8"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"score"`),o(` />`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-rate`),o(`
    `),r(`span`,{class:`hljs-attr`},`half`),o(`
    `),r(`span`,{class:`hljs-attr`},`icon`),o(`=`),r(`span`,{class:`hljs-string`},`"heart"`),o(`
    `),r(`span`,{class:`hljs-attr`},`half-icon`),o(`=`),r(`span`,{class:`hljs-string`},`"heart-half-full"`),o(`
    `),r(`span`,{class:`hljs-attr`},`empty-icon`),o(`=`),r(`span`,{class:`hljs-string`},`"heart-outline"`),o(`
    `),r(`span`,{class:`hljs-attr`},`color`),o(`=`),r(`span`,{class:`hljs-string`},`"red"`),o(`
    `),r(`span`,{class:`hljs-attr`},`:count`),o(`=`),r(`span`,{class:`hljs-string`},`"8"`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"score"`),o(`
  />`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,T,[r(`h3`,E,[a(q,{to:`#DisabledAndReadonly`},{default:e(()=>[...l[26]||=[o(`#`,-1)]]),_:1}),l[27]||=o(`Disabled And Readonly`,-1)]),l[29]||=r(`p`,null,[o(`The `),r(`code`,null,`disabled`),o(` property sets the score to the no-click state, and `),r(`code`,null,`disabled-color`),o(` sets the icon color when disabled. The score is set to read-only via the `),r(`code`,null,`readonly`),o(` property.`)],-1),a(J,null,{default:e(()=>[...l[28]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` score = ref(`),r(`span`,{class:`hljs-number`},`3`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-rate`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"score"`),o(),r(`span`,{class:`hljs-attr`},`disabled`),o(`/>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-rate`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"score"`),o(),r(`span`,{class:`hljs-attr`},`readonly`),o(`/>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,D,[r(`h3`,O,[a(q,{to:`#CanBeCleared`},{default:e(()=>[...l[30]||=[o(`#`,-1)]]),_:1}),l[31]||=o(`Can Be Cleared`,-1)]),l[33]||=r(`p`,null,[o(`The `),r(`code`,null,`clearable`),o(` property allows users to clear score.`)],-1),a(J,null,{default:e(()=>[...l[32]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` score = ref(`),r(`span`,{class:`hljs-number`},`3.5`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-rate`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"score"`),o(),r(`span`,{class:`hljs-attr`},`clearable`),o(),r(`span`,{class:`hljs-attr`},`half`),o(`/>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,k,[r(`h3`,A,[a(q,{to:`#ListenEvent`},{default:e(()=>[...l[34]||=[o(`#`,-1)]]),_:1}),l[35]||=o(`Listen Event`,-1)]),l[37]||=r(`p`,null,[o(`Other interaction logic is completed by calling the `),r(`code`,null,`change`),o(` event.`)],-1),a(J,null,{default:e(()=>[...l[36]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` score = ref(`),r(`span`,{class:`hljs-number`},`3`),o(`)

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`handleChange`),o(`(`),r(`span`,{class:`hljs-params`},`score`),o(`) `)]),o(`{
  Snackbar({
    `),r(`span`,{class:`hljs-attr`},`content`),o(`: `),r(`span`,{class:`hljs-string`},[o("`click "),r(`span`,{class:`hljs-subst`},"${score}"),o("`")]),o(`,
    `),r(`span`,{class:`hljs-attr`},`position`),o(`: `),r(`span`,{class:`hljs-string`},`'top'`),o(`
  })
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-rate`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"score"`),o(` @`),r(`span`,{class:`hljs-attr`},`change`),o(`=`),r(`span`,{class:`hljs-string`},`"handleChange"`),o(`/>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,j,[r(`h3`,M,[a(q,{to:`#Validate`},{default:e(()=>[...l[38]||=[o(`#`,-1)]]),_:1}),l[39]||=o(`Validate`,-1)]),l[41]||=r(`p`,null,[o(`The values are validated by passing in an array of validators. If the validator returns `),r(`code`,null,`true`),o(`, the validation passes. Other values are converted to text as a user prompt.`)],-1),a(J,null,{default:e(()=>[...l[40]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` score = ref(`),r(`span`,{class:`hljs-number`},`3`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-rate`),o(),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"v => v > 2 || 'It has to be greater than 2'"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"score"`),o(`/>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,N,[r(`h3`,P,[a(q,{to:`#ValidateWithZod`},{default:e(()=>[...l[42]||=[o(`#`,-1)]]),_:1}),l[43]||=o(`Validate With Zod`,-1)]),a(J,null,{default:e(()=>[...l[44]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { z } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'zod'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` score = ref(`),r(`span`,{class:`hljs-number`},`3`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-rate`),o(),r(`span`,{class:`hljs-attr`},`:rules`),o(`=`),r(`span`,{class:`hljs-string`},`"z.number().min(3, 'It has to be greater than 2')"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`'score'`),o(`/>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),l[58]||=r(`h2`,null,`API`,-1),r(`div`,F,[r(`h3`,I,[a(q,{to:`#props`},{default:e(()=>[...l[45]||=[o(`#`,-1)]]),_:1}),l[46]||=o(`props`,-1)]),l[47]||=s(`<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>The current rating</td><td><em>number</em></td><td><code>0</code></td></tr><tr><td><code>count</code></td><td>Total rating</td><td><em>number | string</em></td><td><code>5</code></td></tr><tr><td><code>color</code></td><td>The color of the icon when selected</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>The icon style when the entire icon is selected</td><td><em>string</em></td><td><code>star</code></td></tr><tr><td><code>empty-color</code></td><td>The color of the icon when unchecked</td><td><em>string</em></td><td><code>#bdbdbd</code></td></tr><tr><td><code>empty-icon</code></td><td>Style of the icon when unchecked</td><td><em>string</em></td><td><code>star-outline</code></td></tr><tr><td><code>size</code></td><td>Icon size, default unit is <code>px</code></td><td><em>number | string</em></td><td><code>-</code></td></tr><tr><td><code>gap</code></td><td>Icon spacing, default unit is <code>px</code></td><td><em>number | string</em></td><td><code>-</code></td></tr><tr><td><code>half</code></td><td>Whether half selection is allowed</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>half-icon</code></td><td>The half-selected icon style only works if <code>half</code> is <code>true</code></td><td><em>string</em></td><td><code>star-half-full</code></td></tr><tr><td><code>namespace</code></td><td>Icon namespace</td><td><em>string</em></td><td><code>var-icon</code></td></tr><tr><td><code>empty-icon-namespace</code></td><td>Empty icon namespace</td><td><em>string</em></td><td><code>var-icon</code></td></tr><tr><td><code>half-icon-namespace</code></td><td>Half icon namespace</td><td><em>string</em></td><td><code>var-icon</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable rating</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled-color</code></td><td>The color of the icon when disabling grading is only effective when <code>disabled</code> is <code>true</code> and has higher priority than <code>color</code> and <code>empty-color</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>readonly</code></td><td>Whether it is in readonly status. The rating cannot be modified in readonly status.</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>clearable</code></td><td>whether to allow to clear</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code></td><td>Whether to use water ripple</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>rules</code></td><td>Validation rules, return <code>true</code> to indicate verification passes, other types of values ​​will be converted into text as user prompts. <a href="#/en-US/zodValidation">Zod validation</a> is supported since <code>3.5.0</code></td><td><em>((v: number) =&gt; any) | ZodType | Array&lt;((v: number) =&gt; any) | ZodType&gt;</em></td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,L,[r(`h3`,R,[a(q,{to:`#Slots`},{default:e(()=>[...l[48]||=[o(`#`,-1)]]),_:1}),l[49]||=o(`Slots`,-1)]),l[50]||=s(`<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>icon</code> <em><strong>3.19.0</strong></em></td><td>The selected icon</td><td><code>-</code></td></tr><tr><td><code>empty-icon</code> <em><strong>3.19.0</strong></em></td><td>The unchecked icon</td><td><code>-</code></td></tr><tr><td><code>half-icon</code> <em><strong>3.19.0</strong></em></td><td>The half-selected icon</td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,z,[r(`h3`,B,[a(q,{to:`#Events`},{default:e(()=>[...l[51]||=[o(`#`,-1)]]),_:1}),l[52]||=o(`Events`,-1)]),l[53]||=r(`table`,null,[r(`thead`,null,[r(`tr`,null,[r(`th`,null,`Event`),r(`th`,null,`Description`),r(`th`,null,`Arguments`)])]),r(`tbody`,null,[r(`tr`,null,[r(`td`,null,[r(`code`,null,`change`)]),r(`td`,null,`Triggered when the rating changes`),r(`td`,null,[r(`code`,null,`value: number`)])])])],-1)]),r(`div`,V,[r(`h3`,H,[a(q,{to:`#StyleVariables`},{default:e(()=>[...l[54]||=[o(`#`,-1)]]),_:1}),l[55]||=o(`Style Variables`,-1)]),l[56]||=s(`<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--rate-color</code></td><td><code>var(--color-text)</code></td></tr><tr><td><code>--rate-size</code></td><td><code>24px</code></td></tr><tr><td><code>--rate-primary-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--rate-disabled-color</code></td><td><code>var(--color-text-disabled)</code></td></tr><tr><td><code>--rate-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--rate-action-padding</code></td><td><code>4px</code></td></tr></tbody></table>`,2)])])}var W=c(l,[[`render`,U]]);export{W as default};