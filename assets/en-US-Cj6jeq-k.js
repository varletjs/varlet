import{G as e,L as t,N as n,c as r,d as i,g as a,h as o,m as s}from"./runtime-core.esm-bundler-DxIRHDbJ.js";import{t as c}from"./_plugin-vue_export-helper-BDNMzG2s.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`Intro`},p={class:`card`},m={id:`SingleLineEllipsis`},h={class:`card`},g={id:`MultipleLineEllipsis`},_={class:`card`},v={id:`Two-wayBinding`},y={class:`card`},b={id:`ClickOnTextToExpand`},x={class:`card`},S={id:`OverflowDetection`},C={class:`card`},w={id:`CustomTooltip`},T={class:`card`},E={id:`Props`},D={class:`card`},O={id:`Slots`};function k(c,l,k,A,j,M){let N=t(`router-link`),P=t(`var-site-code-example`);return n(),i(`div`,u,[l[28]||=r(`h1`,null,`Ellipsis`,-1),r(`div`,d,[r(`h3`,f,[a(N,{to:`#Intro`},{default:e(()=>[...l[0]||=[o(`#`,-1)]]),_:1}),l[1]||=o(`Intro`,-1)]),l[2]||=r(`p`,null,`Mainly used to omit single-line text and multi-line text.`,-1)]),r(`div`,p,[r(`h3`,m,[a(N,{to:`#SingleLineEllipsis`},{default:e(()=>[...l[3]||=[o(`#`,-1)]]),_:1}),l[4]||=o(`Single Line Ellipsis`,-1)]),a(P,null,{default:e(()=>[...l[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-ellipsis`),o(),r(`span`,{class:`hljs-attr`},`style`),o(`=`),r(`span`,{class:`hljs-string`},`"max-width: 170px"`),o(`>`)]),o(`
    I want to say english to everyone like, even you still are normal people, you still can work a world champion and no one trust you!
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-ellipsis`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,h,[r(`h3`,g,[a(N,{to:`#MultipleLineEllipsis`},{default:e(()=>[...l[6]||=[o(`#`,-1)]]),_:1}),l[7]||=o(`Multiple Line Ellipsis`,-1)]),a(P,null,{default:e(()=>[...l[8]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-ellipsis`),o(),r(`span`,{class:`hljs-attr`},`style`),o(`=`),r(`span`,{class:`hljs-string`},`"max-width: 170px"`),o(),r(`span`,{class:`hljs-attr`},`:line-clamp`),o(`=`),r(`span`,{class:`hljs-string`},`"3"`),o(`>`)]),o(`
    I want to say english to everyone like, even you still are normal people, you still can work a world champion and no one trust you!
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-ellipsis`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,_,[r(`h3`,v,[a(N,{to:`#Two-wayBinding`},{default:e(()=>[...l[9]||=[o(`#`,-1)]]),_:1}),l[10]||=o(`Two-way Binding`,-1)]),a(P,null,{default:e(()=>[...l[11]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` expand = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-space`),o(),r(`span`,{class:`hljs-attr`},`direction`),o(`=`),r(`span`,{class:`hljs-string`},`"column"`),o(),r(`span`,{class:`hljs-attr`},`size`),o(`=`),r(`span`,{class:`hljs-string`},`"large"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"expand = !expand"`),o(`>`)]),o(`Toggle`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-ellipsis`),o(),r(`span`,{class:`hljs-attr`},`style`),o(`=`),r(`span`,{class:`hljs-string`},`"max-width: 170px"`),o(),r(`span`,{class:`hljs-attr`},`v-model:expand`),o(`=`),r(`span`,{class:`hljs-string`},`"expand"`),o(`>`)]),o(`
      I want to say english to everyone like, even you still are normal people, you still can work a world champion and no one trust you!
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-ellipsis`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-space`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,y,[r(`h3`,b,[a(N,{to:`#ClickOnTextToExpand`},{default:e(()=>[...l[12]||=[o(`#`,-1)]]),_:1}),l[13]||=o(`Click On Text To Expand`,-1)]),a(P,null,{default:e(()=>[...l[14]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-ellipsis`),o(` 
    `),r(`span`,{class:`hljs-attr`},`style`),o(`=`),r(`span`,{class:`hljs-string`},`"max-width: 170px"`),o(` 
    `),r(`span`,{class:`hljs-attr`},`expand-trigger`),o(`=`),r(`span`,{class:`hljs-string`},`"click"`),o(` 
    `),r(`span`,{class:`hljs-attr`},`:line-clamp`),o(`=`),r(`span`,{class:`hljs-string`},`"3"`),o(` 
    `),r(`span`,{class:`hljs-attr`},`:tooltip`),o(`=`),r(`span`,{class:`hljs-string`},`"false"`),o(`
  >`)]),o(`
    I want to say english to everyone like, even you still are normal people, you still can work a world champion and no one trust you!
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-ellipsis`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,x,[r(`h3`,S,[a(N,{to:`#OverflowDetection`},{default:e(()=>[...l[15]||=[o(`#`,-1)]]),_:1}),l[16]||=o(`Overflow Detection`,-1)]),l[18]||=r(`p`,null,[o(`When `),r(`code`,null,`expandable-on-overflow`),o(` is enabled, truncated content can be expanded on click. When `),r(`code`,null,`tooltip-on-overflow`),o(` is enabled, the tooltip is shown only for truncated content.`)],-1),a(P,null,{default:e(()=>[...l[17]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` narrow = ref(`),r(`span`,{class:`hljs-literal`},`true`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"narrow = !narrow"`),o(`>`)]),o(`Toggle Text Container Size`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`

  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`style`),o(`=`),r(`span`,{class:`hljs-string`},`"margin-top: 12px; color: var(--color-on-surface-variant); font-size: 12px"`),o(`>`)]),o(`Single Line Ellipsis`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-ellipsis`),o(`
    `),r(`span`,{class:`hljs-attr`},`expand-trigger`),o(`=`),r(`span`,{class:`hljs-string`},`"click"`),o(`
    `),r(`span`,{class:`hljs-attr`},`expandable-on-overflow`),o(`
    `),r(`span`,{class:`hljs-attr`},`tooltip-on-overflow`),o(`
    `),r(`span`,{class:`hljs-attr`},`:style`),o(`=`),r(`span`,{class:`hljs-string`},`"{ maxWidth: narrow ? '170px' : '340px' }"`),o(`
  >`)]),o(`
    Click to expand only when this text overflows.
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-ellipsis`),o(`>`)]),o(`

  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`style`),o(`=`),r(`span`,{class:`hljs-string`},`"margin-top: 12px; color: var(--color-on-surface-variant); font-size: 12px"`),o(`>`)]),o(`Multiple Line Ellipsis`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-ellipsis`),o(`
    `),r(`span`,{class:`hljs-attr`},`expand-trigger`),o(`=`),r(`span`,{class:`hljs-string`},`"click"`),o(`
    `),r(`span`,{class:`hljs-attr`},`expandable-on-overflow`),o(`
    `),r(`span`,{class:`hljs-attr`},`tooltip-on-overflow`),o(`
    `),r(`span`,{class:`hljs-attr`},`:line-clamp`),o(`=`),r(`span`,{class:`hljs-string`},`"2"`),o(`
    `),r(`span`,{class:`hljs-attr`},`:style`),o(`=`),r(`span`,{class:`hljs-string`},`"{ maxWidth: narrow ? '170px' : '340px' }"`),o(`
  >`)]),o(`
    Only truncated text can be expanded. Click it to view the full content, then click it again to collapse.
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-ellipsis`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,C,[r(`h3`,w,[a(N,{to:`#CustomTooltip`},{default:e(()=>[...l[19]||=[o(`#`,-1)]]),_:1}),l[20]||=o(`Custom Tooltip`,-1)]),a(P,null,{default:e(()=>[...l[21]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-ellipsis`),o(),r(`span`,{class:`hljs-attr`},`style`),o(`=`),r(`span`,{class:`hljs-string`},`"max-width: 50vw"`),o(),r(`span`,{class:`hljs-attr`},`:tooltip`),o(`=`),r(`span`,{class:`hljs-string`},`"{ type: 'primary', sameWidth: false }"`),o(`>`)]),o(`
    I want to say english to everyone like, even you still are normal people, you still can work a world champion and no one trust you!

    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`tooltip-content`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-icon`),o(),r(`span`,{class:`hljs-attr`},`name`),o(`=`),r(`span`,{class:`hljs-string`},`"github"`),o(` />`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-ellipsis`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),l[29]||=r(`h2`,null,`API`,-1),r(`div`,T,[r(`h3`,E,[a(N,{to:`#Props`},{default:e(()=>[...l[22]||=[o(`#`,-1)]]),_:1}),l[23]||=o(`Props`,-1)]),l[24]||=s(`<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:expand</code></td><td>Whether to expand</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>expand-trigger</code></td><td>Expand trigger method, optional value <code>click</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>expandable-on-overflow</code> <em><strong>3.20.7</strong></em></td><td>Allow expansion only if the text is overflowed</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>line-clamp</code></td><td>Maximum number of display lines, see <a href="https://caniuse.com/?search=line-clamp">line-clamp</a> for compatibility</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>tooltip-on-overflow</code> <em><strong>3.20.7</strong></em></td><td>Show the tooltip only when the text is truncated</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>tooltip</code></td><td>Tooltip component props, for deep customization. For more convenience, <code>sameWidth</code> defaults to <code>true</code> here</td><td><em>boolean | TooltipProps</em></td><td><code>true</code></td></tr></tbody></table>`,1)]),r(`div`,D,[r(`h3`,O,[a(N,{to:`#Slots`},{default:e(()=>[...l[25]||=[o(`#`,-1)]]),_:1}),l[26]||=o(`Slots`,-1)]),l[27]||=s(`<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Text content</td><td><code>-</code></td></tr><tr><td><code>tooltip-content</code></td><td>Tooltip content</td><td><code>-</code></td></tr></tbody></table>`,1)])])}var A=c(l,[[`render`,k]]);export{A as default};