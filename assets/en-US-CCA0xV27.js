import{L as e,N as t,W as n,c as r,d as i,g as a,h as o,m as s}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as c}from"./_plugin-vue_export-helper-V-yks4gF.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`Intro`},p={class:`card`},m={id:`BasicUsage`},h={class:`card`},g={id:`Placement`},_={class:`card`},v={id:`Offset`},y={class:`card`},b={id:`SameWidthAsTriggerElement`},x={class:`card`},S={id:`Trigger`},C={class:`card`},w={id:`Events`},T={class:`card`},E={id:`Disabled`},D={class:`card`},O={id:`Two-wayBinding`},k={class:`card`},A={id:`Notice`},j={class:`card`},M={id:`Props`},N={class:`card`},P={id:`Placement`},F={class:`card`},I={id:`Methods`},L={class:`card`},R={id:`Events`},z={class:`card`},B={id:`Slots`},V={class:`card`},H={id:`StyleVariables`};function U(c,l,U,W,G,K){let q=e(`router-link`),J=e(`var-site-code-example`);return t(),i(`div`,u,[l[53]||=r(`h1`,null,`Menu`,-1),r(`div`,d,[r(`h3`,f,[a(q,{to:`#Intro`},{default:n(()=>[...l[0]||=[o(`#`,-1)]]),_:1}),l[1]||=o(`Intro`,-1)]),l[2]||=r(`p`,null,`Displays a menu when the element is clicked, and changes the display position of the menu by controlling the placement and offset.`,-1)]),r(`div`,p,[r(`h3`,m,[a(q,{to:`#BasicUsage`},{default:n(()=>[...l[3]||=[o(`#`,-1)]]),_:1}),l[4]||=o(`Basic Usage`,-1)]),a(J,null,{default:n(()=>[...l[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(`>`)]),o(`Basic Usage`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
    
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`menu`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`Menu Option`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`Menu Option`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`Menu Option`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-menu`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,h,[r(`h3`,g,[a(q,{to:`#Placement`},{default:n(()=>[...l[6]||=[o(`#`,-1)]]),_:1}),l[7]||=o(`Placement`,-1)]),a(J,null,{default:n(()=>[...l[8]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` placement = ref(`),r(`span`,{class:`hljs-string`},`'cover-top-start'`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` placementOptions = [
  `),r(`span`,{class:`hljs-string`},`'top'`),o(`,
  `),r(`span`,{class:`hljs-string`},`'top-start'`),o(`,
  `),r(`span`,{class:`hljs-string`},`'top-end'`),o(`,
  `),r(`span`,{class:`hljs-string`},`'bottom'`),o(`,
  `),r(`span`,{class:`hljs-string`},`'bottom-start'`),o(`,
  `),r(`span`,{class:`hljs-string`},`'bottom-end'`),o(`,
  `),r(`span`,{class:`hljs-string`},`'right'`),o(`,
  `),r(`span`,{class:`hljs-string`},`'right-start'`),o(`,
  `),r(`span`,{class:`hljs-string`},`'right-end'`),o(`,
  `),r(`span`,{class:`hljs-string`},`'left'`),o(`,
  `),r(`span`,{class:`hljs-string`},`'left-start'`),o(`,
  `),r(`span`,{class:`hljs-string`},`'left-end'`),o(`,
  `),r(`span`,{class:`hljs-string`},`'cover-top'`),o(`,
  `),r(`span`,{class:`hljs-string`},`'cover-top-start'`),o(`,
  `),r(`span`,{class:`hljs-string`},`'cover-top-end'`),o(`,
  `),r(`span`,{class:`hljs-string`},`'cover-bottom'`),o(`,
  `),r(`span`,{class:`hljs-string`},`'cover-bottom-start'`),o(`,
  `),r(`span`,{class:`hljs-string`},`'cover-bottom-end'`),o(`,
  `),r(`span`,{class:`hljs-string`},`'cover-left'`),o(`,
  `),r(`span`,{class:`hljs-string`},`'cover-right'`),o(`,
]
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-select`),o(),r(`span`,{class:`hljs-attr`},`:hint`),o(`=`),r(`span`,{class:`hljs-string`},`"false"`),o(),r(`span`,{class:`hljs-attr`},`v-model`),o(`=`),r(`span`,{class:`hljs-string`},`"placement"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-option`),o(` 
      `),r(`span`,{class:`hljs-attr`},`v-for`),o(`=`),r(`span`,{class:`hljs-string`},`"(item, index) in placementOptions"`),o(` 
      `),r(`span`,{class:`hljs-attr`},`:key`),o(`=`),r(`span`,{class:`hljs-string`},`"index"`),o(`
      `),r(`span`,{class:`hljs-attr`},`:label`),o(`=`),r(`span`,{class:`hljs-string`},`"item"`),o(` 
    />`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-select`),o(`>`)]),o(`
  
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"placement-container"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu`),o(),r(`span`,{class:`hljs-attr`},`:placement`),o(`=`),r(`span`,{class:`hljs-string`},`"placement"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"star"`),o(` />`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`menu`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`Menu Option`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`Menu Option`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`
        `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`Menu Option`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-menu`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),r(`span`,{class:`css`},[o(`
`),r(`span`,{class:`hljs-selector-class`},`.placement-container`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`height`),o(`: `),r(`span`,{class:`hljs-number`},`250px`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`display`),o(`: flex;
  `),r(`span`,{class:`hljs-attribute`},`justify-content`),o(`: center;
  `),r(`span`,{class:`hljs-attribute`},`align-items`),o(`: center;
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,_,[r(`h3`,v,[a(q,{to:`#Offset`},{default:n(()=>[...l[9]||=[o(`#`,-1)]]),_:1}),l[10]||=o(`Offset`,-1)]),l[12]||=r(`p`,null,[o(`The offset of the Menu popup can be set with `),r(`code`,null,`offset-x`),o(` and `),r(`code`,null,`offset-y`),o(`.`)],-1),a(J,null,{default:n(()=>[...l[11]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu`),o(),r(`span`,{class:`hljs-attr`},`offset-x`),o(`=`),r(`span`,{class:`hljs-string`},`"36px"`),o(),r(`span`,{class:`hljs-attr`},`offset-y`),o(`=`),r(`span`,{class:`hljs-string`},`"18px"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(`>`)]),o(`Offset`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
    
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`menu`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`Menu Option`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`Menu Option`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`Menu Option`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-menu`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,y,[r(`h3`,b,[a(q,{to:`#SameWidthAsTriggerElement`},{default:n(()=>[...l[13]||=[o(`#`,-1)]]),_:1}),l[14]||=o(`Same Width As Trigger Element`,-1)]),l[16]||=r(`p`,null,[o(`Use `),r(`code`,null,`same-width`),o(` to make the popup menu and trigger the same width.`)],-1),a(J,null,{default:n(()=>[...l[15]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu`),o(),r(`span`,{class:`hljs-attr`},`same-width`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(`>`)]),o(`Same width as trigger element`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
    
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`menu`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`Menu Option`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`Menu Option`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`Menu Option`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-menu`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,x,[r(`h3`,S,[a(q,{to:`#Trigger`},{default:n(()=>[...l[17]||=[o(`#`,-1)]]),_:1}),l[18]||=o(`Trigger`,-1)]),l[20]||=r(`p`,null,[o(`Use `),r(`code`,null,`trigger`),o(` to change the trigger method of menu display, the optional values are `),r(`code`,null,`click`),o(` and `),r(`code`,null,`hover`)],-1),a(J,null,{default:n(()=>[...l[19]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu`),o(),r(`span`,{class:`hljs-attr`},`trigger`),o(`=`),r(`span`,{class:`hljs-string`},`"hover"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(`>`)]),o(`Trigger`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
    
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`menu`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`Menu Option`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`Menu Option`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`Menu Option`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-menu`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,C,[r(`h3`,w,[a(q,{to:`#Events`},{default:n(()=>[...l[21]||=[o(`#`,-1)]]),_:1}),l[22]||=o(`Events`,-1)]),a(J,null,{default:n(()=>[...l[23]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu`),o(`
    @`),r(`span`,{class:`hljs-attr`},`open`),o(`=`),r(`span`,{class:`hljs-string`},`"Snackbar.info('open')"`),o(`
    @`),r(`span`,{class:`hljs-attr`},`opened`),o(`=`),r(`span`,{class:`hljs-string`},`"Snackbar.success('opened')"`),o(`
    @`),r(`span`,{class:`hljs-attr`},`close`),o(`=`),r(`span`,{class:`hljs-string`},`"Snackbar.warning('close')"`),o(`
    @`),r(`span`,{class:`hljs-attr`},`closed`),o(`=`),r(`span`,{class:`hljs-string`},`"Snackbar.error('closed')"`),o(`
  >`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(`>`)]),o(`Events`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
    
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`menu`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`Menu Option`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`Menu Option`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`Menu Option`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-menu`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,T,[r(`h3`,E,[a(q,{to:`#Disabled`},{default:n(()=>[...l[24]||=[o(`#`,-1)]]),_:1}),l[25]||=o(`Disabled`,-1)]),l[27]||=r(`p`,null,[o(`In the `),r(`code`,null,`disabled`),o(` state, the menu will no longer be opened.`)],-1),a(J,null,{default:n(()=>[...l[26]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu`),o(),r(`span`,{class:`hljs-attr`},`disabled`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`disabled`),o(`>`)]),o(`Disabled`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
    
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`menu`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`Menu Option`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`Menu Option`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`Menu Option`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-menu`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,D,[r(`h3`,O,[a(q,{to:`#Two-wayBinding`},{default:n(()=>[...l[28]||=[o(`#`,-1)]]),_:1}),l[29]||=o(`Two-way Binding`,-1)]),l[31]||=r(`p`,null,[o(`Two-way binding control menu show and hide via `),r(`code`,null,`v-model:show`),o(`.`)],-1),a(J,null,{default:n(()=>[...l[30]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` show = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`closeMenu`),o(`(`),r(`span`,{class:`hljs-params`}),o(`) `)]),o(`{ 
  show.value = `),r(`span`,{class:`hljs-literal`},`false`),o(` 
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-menu`),o(),r(`span`,{class:`hljs-attr`},`v-model:show`),o(`=`),r(`span`,{class:`hljs-string`},`"show"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(`>`)]),o(`Two-way binding`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`

    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`menu`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-cell`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"closeMenu"`),o(`>`)]),o(`Menu Option`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-cell`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"closeMenu"`),o(`>`)]),o(`Menu Option`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-cell`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"closeMenu"`),o(`>`)]),o(`Menu Option`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-cell`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-menu`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,k,[r(`h3`,A,[a(q,{to:`#Notice`},{default:n(()=>[...l[32]||=[o(`#`,-1)]]),_:1}),l[33]||=o(`Notice`,-1)]),l[34]||=r(`p`,null,[o(`Menu is an `),r(`code`,null,`inline-block`),o(` element that displays the menu when clicked through the default slot. If you want the Menu to be on its own line, it is recommended to wrap a `),r(`code`,null,`block`),o(` element.`)],-1)]),l[54]||=r(`h2`,null,`API`,-1),r(`div`,j,[r(`h3`,M,[a(q,{to:`#Props`},{default:n(()=>[...l[35]||=[o(`#`,-1)]]),_:1}),l[36]||=o(`Props`,-1)]),l[37]||=s(`<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>Whether to show the menu</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>placement</code></td><td>Menu popup placement</td><td><em>Placement</em></td><td><code>cover-top-start</code></td></tr><tr><td><code>strategy</code></td><td>Menu position strategy, optional value is <code>absolute</code> <code>fixed</code></td><td><em>string</em></td><td><code>absolute</code></td></tr><tr><td><code>offset-x</code></td><td>The x-axis offset, relative to the menu-aligned position</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>offset-y</code></td><td>The y-axis offset, relative to the menu-aligned position</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>teleport</code></td><td>The location of the menu mount</td><td><em>TeleportProps[&#39;to&#39;] | false</em></td><td><code>body</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable the menu</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>trigger</code></td><td>Menu trigger method, optional value is <code>click</code> <code>hover</code> <code>manual</code></td><td><em>string</em></td><td><code>click</code></td></tr><tr><td><code>reference</code></td><td>The associated trigger element selector is used to specify specific child elements as trigger elements</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>reference</code></td><td>The trigger element associated with the menu, the <code>string</code> type is the descendant element selector of the menu component, the <code>HTMLElement</code> type is any specified element node</td><td><em>string | HTMLElement</em></td><td><code>-</code></td></tr><tr><td><code>elevation</code></td><td>Elevation level, options <code>true</code> <code>false</code> and level of <code>0-24</code></td><td><em>string | number | boolean</em></td><td><code>true</code></td></tr><tr><td><code>same-width</code></td><td>Whether to same width as trigger element</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>default-style</code></td><td>Whether to enable default styles</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>popover-class</code></td><td>Class of the popover</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>close-on-click-reference</code></td><td>Whether to close the menu when clicking the reference element</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>close-on-key-escape</code></td><td>Whether to support keyboard ESC to close the menu</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table>`,1)]),r(`div`,N,[r(`h3`,P,[a(q,{to:`#Placement`},{default:n(()=>[...l[38]||=[o(`#`,-1)]]),_:1}),l[39]||=o(`Placement`,-1)]),l[40]||=s(`<table><thead><tr><th>Prop</th><th>Description</th></tr></thead><tbody><tr><td><code>top</code></td><td>Top center position</td></tr><tr><td><code>top-start</code></td><td>Top left position</td></tr><tr><td><code>top-end</code></td><td>Top right position</td></tr><tr><td><code>bottom</code></td><td>Bottom center position</td></tr><tr><td><code>bottom-start</code></td><td>Bottom left position</td></tr><tr><td><code>bottom-end</code></td><td>Bottom right position</td></tr><tr><td><code>right</code></td><td>Right center position</td></tr><tr><td><code>right-start</code></td><td>Top right position</td></tr><tr><td><code>right-end</code></td><td>Bottom right position</td></tr><tr><td><code>left</code></td><td>Left center position</td></tr><tr><td><code>left-start</code></td><td>Top left position</td></tr><tr><td><code>left-end</code></td><td>Bottom left position</td></tr><tr><td><code>cover-top</code></td><td>Top center position, overlay trigger</td></tr><tr><td><code>cover-top-start</code></td><td>Top left position, overlay trigger</td></tr><tr><td><code>cover-top-end</code></td><td>Top right position, overlay trigger</td></tr><tr><td><code>cover-bottom</code></td><td>Bottom center position, overlay trigger</td></tr><tr><td><code>cover-bottom-start</code></td><td>Bottom left position, overlay trigger</td></tr><tr><td><code>cover-bottom-end</code></td><td>Bottom right position, overlay trigger</td></tr><tr><td><code>cover-left</code></td><td>Left center position, overlay trigger</td></tr><tr><td><code>cover-right</code></td><td>Right center position, overlay trigger</td></tr></tbody></table>`,1)]),r(`div`,F,[r(`h3`,I,[a(q,{to:`#Methods`},{default:n(()=>[...l[41]||=[o(`#`,-1)]]),_:1}),l[42]||=o(`Methods`,-1)]),l[43]||=s(`<table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>open</code></td><td>Open Menu</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>Close Menu</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>resize</code></td><td>This method can be called to redraw when the default slot element of Menu changes its position and size</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>setReference</code> <em><strong>3.7.2</strong></em></td><td>Set the trigger element associated with the menu</td><td><code>reference: consistent with the reference of the component attribute</code></td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,L,[r(`h3`,R,[a(q,{to:`#Events`},{default:n(()=>[...l[44]||=[o(`#`,-1)]]),_:1}),l[45]||=o(`Events`,-1)]),l[46]||=s(`<table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>open</code></td><td>Triggered when the menu is opened</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>Triggered when the open menu animation ends</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>Triggered when the menu is closed</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>Triggered when the closing menu animation ends</td><td><code>-</code></td></tr><tr><td><code>click-outside</code></td><td>Triggered when clicking outside the menu</td><td><code>event: Event</code></td></tr></tbody></table>`,1)]),r(`div`,z,[r(`h3`,B,[a(q,{to:`#Slots`},{default:n(()=>[...l[47]||=[o(`#`,-1)]]),_:1}),l[48]||=o(`Slots`,-1)]),l[49]||=s(`<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Menu trigger element</td><td><code>-</code></td></tr><tr><td><code>menu</code></td><td>Menu content</td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,V,[r(`h3`,H,[a(q,{to:`#StyleVariables`},{default:n(()=>[...l[50]||=[o(`#`,-1)]]),_:1}),l[51]||=o(`Style Variables`,-1)]),l[52]||=s(`<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--menu-background-color</code></td><td><code>var(--color-surface-container-high)</code></td></tr><tr><td><code>--menu-border-radius</code></td><td><code>2px</code></td></tr></tbody></table>`,2)])])}var W=c(l,[[`render`,U]]);export{W as default};