import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s,m as c}from"./runtime-core.esm-bundler-DUghkl6b.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`Intro`},p={class:`card`},m={id:`FunctionCall`},h={class:`card`},g={id:`BasicUse`},_={class:`card`},v={id:`SpecifyInitialPosition`},y={class:`card`},b={id:`DisplayTheCloseButton`},x={class:`card`},S={id:`ListenForCloseEvent`},C={class:`card`},w={id:`ListenForLongPressEvent`},T={class:`card`},E={id:`ShowExtraSlots`},D={class:`card`},O={id:`Props`},k={class:`card`},A={id:`Events`},j={class:`card`},M={id:`Methods`},N={class:`card`},P={id:`Slots`},F={class:`card`},I={id:`ImagePreviewOptions`},L={class:`card`},R={id:`StyleVariables`};function z(e,l,z,B,V,H){let U=n(`router-link`),W=n(`var-site-code-example`);return r(),a(`div`,u,[l[46]||=i(`h1`,null,`ImagePreview`,-1),i(`div`,d,[i(`h3`,f,[o(U,{to:`#Intro`},{default:t(()=>[...l[0]||=[s(`#`,-1)]]),_:1}),l[1]||=s(`Intro`,-1)]),l[2]||=i(`p`,null,`Image-Preview, Support double-click magnification, Support function call and component call two ways.`,-1)]),i(`div`,p,[i(`h3`,m,[o(U,{to:`#FunctionCall`},{default:t(()=>[...l[3]||=[s(`#`,-1)]]),_:1}),l[4]||=s(`Function Call`,-1)]),l[7]||=i(`h4`,null,`Basic Usage`,-1),o(W,null,{default:t(()=>[...l[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ImagePreview } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`preview`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  ImagePreview(`),i(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),s(`)
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"preview"`),s(`>`)]),s(`Basic Use`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1}),l[8]||=i(`h4`,null,`Call Back`,-1),o(W,null,{default:t(()=>[...l[6]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ImagePreview, Snackbar } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`preview`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  ImagePreview({
    `),i(`span`,{class:`hljs-attr`},`images`),s(`: [
      `),i(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),s(`,
      `),i(`span`,{class:`hljs-string`},`'https://varletjs.org/cat2.jpg'`),s(`
    ],
    `),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-title`},`onChange`),s(`(`),i(`span`,{class:`hljs-params`},`index`),s(`)`)]),s(` {
      Snackbar(`),i(`span`,{class:`hljs-built_in`},`String`),s(`(index))
    }
  })
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(),i(`span`,{class:`hljs-attr`},`block`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"preview"`),s(`>`)]),s(`Handle callback function`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),l[47]||=i(`h2`,null,`Component Call`,-1),i(`div`,h,[i(`h3`,g,[o(U,{to:`#BasicUse`},{default:t(()=>[...l[9]||=[s(`#`,-1)]]),_:1}),l[10]||=s(`Basic Use`,-1)]),o(W,null,{default:t(()=>[...l[11]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` show = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` images = ref([
  `),i(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),s(`,
  `),i(`span`,{class:`hljs-string`},`'https://varletjs.org/cat2.jpg'`),s(`,
])
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(`
    `),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"warning"`),s(`
    `),i(`span`,{class:`hljs-attr`},`block`),s(`
    @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"show = true"`),s(`
  >`)]),s(`
    Basic Use
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-image-preview`),s(),i(`span`,{class:`hljs-attr`},`:images`),s(`=`),i(`span`,{class:`hljs-string`},`"images"`),s(),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"show"`),s(` />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,_,[i(`h3`,v,[o(U,{to:`#SpecifyInitialPosition`},{default:t(()=>[...l[12]||=[s(`#`,-1)]]),_:1}),l[13]||=s(`Specify Initial Position`,-1)]),o(W,null,{default:t(()=>[...l[14]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` show = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` images = ref([
  `),i(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),s(`,
  `),i(`span`,{class:`hljs-string`},`'https://varletjs.org/cat2.jpg'`),s(`,
])
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
 `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(` 
    `),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"warning"`),s(` 
    `),i(`span`,{class:`hljs-attr`},`block`),s(`
    @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"show = true"`),s(`
  >`)]),s(`
    Specify initial position
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-image-preview`),s(`
    `),i(`span`,{class:`hljs-attr`},`:initial-index`),s(`=`),i(`span`,{class:`hljs-string`},`"1"`),s(`
    `),i(`span`,{class:`hljs-attr`},`:images`),s(`=`),i(`span`,{class:`hljs-string`},`"images"`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"show"`),s(` 
  />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,y,[i(`h3`,b,[o(U,{to:`#DisplayTheCloseButton`},{default:t(()=>[...l[15]||=[s(`#`,-1)]]),_:1}),l[16]||=s(`Display The Close Button`,-1)]),o(W,null,{default:t(()=>[...l[17]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` show = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` images = ref([
  `),i(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),s(`,
  `),i(`span`,{class:`hljs-string`},`'https://varletjs.org/cat2.jpg'`),s(`,
])
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
   `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(` 
    `),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"warning"`),s(` 
    `),i(`span`,{class:`hljs-attr`},`block`),s(` 
    @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"show = true"`),s(`
  >`)]),s(`
    Display the close button
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-image-preview`),s(`
    `),i(`span`,{class:`hljs-attr`},`closeable`),s(`
    `),i(`span`,{class:`hljs-attr`},`:images`),s(`=`),i(`span`,{class:`hljs-string`},`"images"`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"show"`),s(` 
  />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,x,[i(`h3`,S,[o(U,{to:`#ListenForCloseEvent`},{default:t(()=>[...l[18]||=[s(`#`,-1)]]),_:1}),l[19]||=s(`Listen For Close Event`,-1)]),o(W,null,{default:t(()=>[...l[20]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Snackbar } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` show = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` images = ref([
  `),i(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),s(`,
  `),i(`span`,{class:`hljs-string`},`'https://varletjs.org/cat2.jpg'`),s(`,
])
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(`
    `),i(`span`,{class:`hljs-attr`},`block`),s(`
    `),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"warning"`),s(`
    @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"show = true"`),s(`
  >`)]),s(`
    Listen for close event
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-image-preview`),s(` 
    `),i(`span`,{class:`hljs-attr`},`:images`),s(`=`),i(`span`,{class:`hljs-string`},`"images"`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"show"`),s(`
    @`),i(`span`,{class:`hljs-attr`},`close`),s(`=`),i(`span`,{class:`hljs-string`},`"Snackbar('The shutdown event was triggered.')"`),s(` 
  />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,C,[i(`h3`,w,[o(U,{to:`#ListenForLongPressEvent`},{default:t(()=>[...l[21]||=[s(`#`,-1)]]),_:1}),l[22]||=s(`Listen For Long Press Event`,-1)]),l[24]||=i(`p`,null,[s(`The `),i(`code`,null,`image-prevent-default`),s(` attribute prohibits the default behavior of images, and the `),i(`code`,null,`long-press`),s(` event can be customized to achieve long press requirements.`)],-1),o(W,null,{default:t(()=>[...l[23]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Snackbar } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` show = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` images = ref([
  `),i(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),s(`,
  `),i(`span`,{class:`hljs-string`},`'https://varletjs.org/cat2.jpg'`),s(`,
])
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(`
    `),i(`span`,{class:`hljs-attr`},`block`),s(`
    `),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"warning"`),s(`
    @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"show = true"`),s(`
  >`)]),s(`
    Listen for long press event
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-image-preview`),s(`
    `),i(`span`,{class:`hljs-attr`},`image-prevent-default`),s(`
    `),i(`span`,{class:`hljs-attr`},`:images`),s(`=`),i(`span`,{class:`hljs-string`},`"images"`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"show"`),s(`
    @`),i(`span`,{class:`hljs-attr`},`long-press`),s(`=`),i(`span`,{class:`hljs-string`},`"Snackbar('Long press event is triggered')"`),s(`
  />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,T,[i(`h3`,E,[o(U,{to:`#ShowExtraSlots`},{default:t(()=>[...l[25]||=[s(`#`,-1)]]),_:1}),l[26]||=s(`Show Extra Slots`,-1)]),o(W,null,{default:t(()=>[...l[27]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` show = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` menuShow = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`),i(`span`,{class:`hljs-keyword`},`const`),s(` images = ref([
  `),i(`span`,{class:`hljs-string`},`'https://varletjs.org/cat.jpg'`),s(`,
  `),i(`span`,{class:`hljs-string`},`'https://varletjs.org/cat2.jpg'`),s(`,
])
`),i(`span`,{class:`hljs-keyword`},`const`),s(` actions = [
  {
    `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'operate'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'wrench'`),s(`
  },
  {
    `),i(`span`,{class:`hljs-attr`},`name`),s(`: `),i(`span`,{class:`hljs-string`},`'operate'`),s(`,
    `),i(`span`,{class:`hljs-attr`},`icon`),s(`: `),i(`span`,{class:`hljs-string`},`'wrench'`),s(`
  }
]
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
   `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(`
     `),i(`span`,{class:`hljs-attr`},`block`),s(`
     `),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"warning"`),s(`
     @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"show = true"`),s(`
  >`)]),s(`
    Show extra slots
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-image-preview`),s(),i(`span`,{class:`hljs-attr`},`:images`),s(`=`),i(`span`,{class:`hljs-string`},`"images"`),s(),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"show"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`extra`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(`
        `),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"menu"`),s(`
        `),i(`span`,{class:`hljs-attr`},`:size`),s(`=`),i(`span`,{class:`hljs-string`},`"22"`),s(`
        `),i(`span`,{class:`hljs-attr`},`color`),s(`=`),i(`span`,{class:`hljs-string`},`"#fff"`),s(`
        @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"menuShow = true"`),s(`
      />`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-action-sheet`),s(),i(`span`,{class:`hljs-attr`},`:actions`),s(`=`),i(`span`,{class:`hljs-string`},`"actions"`),s(),i(`span`,{class:`hljs-attr`},`v-model:show`),s(`=`),i(`span`,{class:`hljs-string`},`"menuShow"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-image-preview`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),l[48]||=i(`h2`,null,`API`,-1),i(`div`,D,[i(`h3`,O,[o(U,{to:`#Props`},{default:t(()=>[...l[28]||=[s(`#`,-1)]]),_:1}),l[29]||=s(`Props`,-1)]),l[30]||=c(`<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>Whether or display</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>images</code></td><td>Need to preview the image URL</td><td><em>string[]</em></td><td><code>[]</code></td></tr><tr><td><code>initial-index</code></td><td>Index from which the image preview starts</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>zoom</code></td><td>Double-click to zoom in</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>closeable</code></td><td>Whether to show the close button</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>close-on-key-escape</code></td><td>Whether to support keyboard ESC to close the image-preview</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>loop</code></td><td>Whether to open loop playback</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>indicator</code></td><td>Whether to show paging</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>lock-scroll</code></td><td>Lock scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>The location of the pop-up layer to mount</td><td><em>TeleportProps[&#39;to&#39;] | false</em></td><td><code>body</code></td></tr><tr><td><code>image-prevent-default</code></td><td>Whether to disable the default behavior of images</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table>`,1)]),i(`div`,k,[i(`h3`,A,[o(U,{to:`#Events`},{default:t(()=>[...l[31]||=[s(`#`,-1)]]),_:1}),l[32]||=s(`Events`,-1)]),l[33]||=c(`<table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>change</code></td><td>The callback function when switching images, the callback parameter is the current index</td><td><code>index: number</code> Image indexing</td></tr><tr><td><code>open</code></td><td>Triggered when Image-Preview is turned on</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>Triggered at the end of the open image-preview animation</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>Triggered when Image-Preview is off</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>Triggered when the animation that closes the image-preview ends</td><td><code>-</code></td></tr><tr><td><code>long-press</code></td><td>The callback function when long pressing an image, the callback parameter is the current index</td><td><code>index: number</code> Image indexing</td></tr><tr><td><code>key-escape</code></td><td>Triggered when click keyboard ESC</td><td><code>-</code></td></tr></tbody></table>`,1)]),i(`div`,j,[i(`h3`,M,[o(U,{to:`#Methods`},{default:t(()=>[...l[34]||=[s(`#`,-1)]]),_:1}),l[35]||=s(`Methods`,-1)]),l[36]||=c(`<table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>ImagePreview</code></td><td>Open image-preview</td><td><em>options | string | string[]</em></td><td><code>-</code></td></tr><tr><td><code>ImagePreview.close</code></td><td>Close image-preview</td><td><em>-</em></td><td><code>-</code></td></tr><tr><td><code>ImagePreview.setDefaultOptions</code></td><td>Set default option configuration</td><td><em>options</em></td><td><code>-</code></td></tr><tr><td><code>ImagePreview.resetDefaultOptions</code></td><td>Reset default option configuration</td><td><em>-</em></td><td><code>-</code></td></tr><tr><td><code>prev</code></td><td>Previous page</td><td><code>options?: SwipeToOptions</code></td><td><code>-</code></td></tr><tr><td><code>next</code></td><td>Next page</td><td><code>options?: SwipeToOptions</code></td><td><code>-</code></td></tr><tr><td><code>to</code></td><td>To index page</td><td><code>index: number, options?: SwipeToOptions</code></td><td><code>-</code></td></tr><tr><td><code>zoom</code></td><td>Enlarge or reduce the picture</td><td><code>ratio: number</code></td><td><code>-</code></td></tr></tbody></table>`,1)]),i(`div`,N,[i(`h3`,P,[o(U,{to:`#Slots`},{default:t(()=>[...l[37]||=[s(`#`,-1)]]),_:1}),l[38]||=s(`Slots`,-1)]),l[39]||=c(`<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>indicator</code></td><td>Paging indicator</td><td><code>index: number</code> Image indexing <br> <code>length: number</code> Total number of image</td></tr><tr><td><code>close-icon</code></td><td>Close button</td><td><code>-</code></td></tr><tr><td><code>extra</code></td><td>Extra slots</td><td><code>-</code></td></tr></tbody></table>`,1)]),i(`div`,F,[i(`h3`,I,[o(U,{to:`#ImagePreviewOptions`},{default:t(()=>[...l[40]||=[s(`#`,-1)]]),_:1}),l[41]||=s(`ImagePreview Options`,-1)]),l[42]||=c(`<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>images</code></td><td>The image URL array or the URL of a single image to be previewed</td><td><em>string[] | string</em></td><td><code>[]</code></td></tr><tr><td><code>initialIndex</code></td><td>Index from which the image preview starts</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>zoom</code></td><td>Double-click to zoom in</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>closeable</code></td><td>Whether to show the close button</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>closeOnKeyEscape</code></td><td>Whether to support keyboard ESC to close the image-preview</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>loop</code></td><td>Whether to open loop playback</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>indicator</code></td><td>Whether to show paging</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>lockScroll</code></td><td>Lock scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>imagePreventDefault</code></td><td>Whether to disable the default behavior of images</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>onChange</code></td><td>The callback function when switching images, the callback parameter is the current index</td><td><em>(index: number) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpen</code></td><td>Callback when image-preview is turned on</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>Callback at the end of the animation that opened image-preview</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>Callback when image-preview is closed</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>Callback at the end of the animation that closes the image-preview</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onLongPress</code></td><td>The callback function when long pressing an image, the callback parameter is the current index</td><td><em>(index: number) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onKeyEscape</code></td><td>Triggered when click keyboard ESC</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table>`,1)]),i(`div`,L,[i(`h3`,R,[o(U,{to:`#StyleVariables`},{default:t(()=>[...l[43]||=[s(`#`,-1)]]),_:1}),l[44]||=s(`Style Variables`,-1)]),l[45]||=c(`<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--image-preview-swipe-indicators-text-color</code></td><td><code>#ddd</code></td></tr><tr><td><code>--image-preview-swipe-indicators-padding</code></td><td><code>16px 0</code></td></tr><tr><td><code>--image-preview-zoom-container-background</code></td><td><code>#000</code></td></tr><tr><td><code>--image-preview-close-icon-top</code></td><td><code>8px</code></td></tr><tr><td><code>--image-preview-close-icon-right</code></td><td><code>14px</code></td></tr><tr><td><code>--image-preview-close-icon-size</code></td><td><code>22px</code></td></tr><tr><td><code>--image-preview-close-icon-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--image-preview-extra-top</code></td><td><code>14px</code></td></tr><tr><td><code>--image-preview-extra-left</code></td><td><code>14px</code></td></tr></tbody></table>`,2)])])}var B=e(l,[[`render`,z]]);export{B as default};