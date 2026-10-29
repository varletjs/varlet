import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s,m as c}from"./runtime-core.esm-bundler-DUghkl6b.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`Intro`},p={class:`card`},m={id:`SingleLineEllipsis`},h={class:`card`},g={id:`MultipleLineEllipsis`},_={class:`card`},v={id:`Two-wayBinding`},y={class:`card`},b={id:`ClickOnTextToExpand`},x={class:`card`},S={id:`OverflowDetection`},C={class:`card`},w={id:`CustomTooltip`},T={class:`card`},E={id:`Props`},D={class:`card`},O={id:`Slots`};function k(e,l,k,A,j,M){let N=n(`router-link`),P=n(`var-site-code-example`);return r(),a(`div`,u,[l[28]||=i(`h1`,null,`Ellipsis`,-1),i(`div`,d,[i(`h3`,f,[o(N,{to:`#Intro`},{default:t(()=>[...l[0]||=[s(`#`,-1)]]),_:1}),l[1]||=s(`Intro`,-1)]),l[2]||=i(`p`,null,`Mainly used to omit single-line text and multi-line text.`,-1)]),i(`div`,p,[i(`h3`,m,[o(N,{to:`#SingleLineEllipsis`},{default:t(()=>[...l[3]||=[s(`#`,-1)]]),_:1}),l[4]||=s(`Single Line Ellipsis`,-1)]),o(P,null,{default:t(()=>[...l[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-ellipsis`),s(),i(`span`,{class:`hljs-attr`},`style`),s(`=`),i(`span`,{class:`hljs-string`},`"max-width: 170px"`),s(`>`)]),s(`
    I want to say english to everyone like, even you still are normal people, you still can work a world champion and no one trust you!
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-ellipsis`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,h,[i(`h3`,g,[o(N,{to:`#MultipleLineEllipsis`},{default:t(()=>[...l[6]||=[s(`#`,-1)]]),_:1}),l[7]||=s(`Multiple Line Ellipsis`,-1)]),o(P,null,{default:t(()=>[...l[8]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-ellipsis`),s(),i(`span`,{class:`hljs-attr`},`style`),s(`=`),i(`span`,{class:`hljs-string`},`"max-width: 170px"`),s(),i(`span`,{class:`hljs-attr`},`:line-clamp`),s(`=`),i(`span`,{class:`hljs-string`},`"3"`),s(`>`)]),s(`
    I want to say english to everyone like, even you still are normal people, you still can work a world champion and no one trust you!
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-ellipsis`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,_,[i(`h3`,v,[o(N,{to:`#Two-wayBinding`},{default:t(()=>[...l[9]||=[s(`#`,-1)]]),_:1}),l[10]||=s(`Two-way Binding`,-1)]),o(P,null,{default:t(()=>[...l[11]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` expand = ref(`),i(`span`,{class:`hljs-literal`},`false`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-space`),s(),i(`span`,{class:`hljs-attr`},`direction`),s(`=`),i(`span`,{class:`hljs-string`},`"column"`),s(),i(`span`,{class:`hljs-attr`},`size`),s(`=`),i(`span`,{class:`hljs-string`},`"large"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"expand = !expand"`),s(`>`)]),s(`Toggle`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-ellipsis`),s(),i(`span`,{class:`hljs-attr`},`style`),s(`=`),i(`span`,{class:`hljs-string`},`"max-width: 170px"`),s(),i(`span`,{class:`hljs-attr`},`v-model:expand`),s(`=`),i(`span`,{class:`hljs-string`},`"expand"`),s(`>`)]),s(`
      I want to say english to everyone like, even you still are normal people, you still can work a world champion and no one trust you!
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-ellipsis`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-space`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,y,[i(`h3`,b,[o(N,{to:`#ClickOnTextToExpand`},{default:t(()=>[...l[12]||=[s(`#`,-1)]]),_:1}),l[13]||=s(`Click On Text To Expand`,-1)]),o(P,null,{default:t(()=>[...l[14]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-ellipsis`),s(` 
    `),i(`span`,{class:`hljs-attr`},`style`),s(`=`),i(`span`,{class:`hljs-string`},`"max-width: 170px"`),s(` 
    `),i(`span`,{class:`hljs-attr`},`expand-trigger`),s(`=`),i(`span`,{class:`hljs-string`},`"click"`),s(` 
    `),i(`span`,{class:`hljs-attr`},`:line-clamp`),s(`=`),i(`span`,{class:`hljs-string`},`"3"`),s(` 
    `),i(`span`,{class:`hljs-attr`},`:tooltip`),s(`=`),i(`span`,{class:`hljs-string`},`"false"`),s(`
  >`)]),s(`
    I want to say english to everyone like, even you still are normal people, you still can work a world champion and no one trust you!
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-ellipsis`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,x,[i(`h3`,S,[o(N,{to:`#OverflowDetection`},{default:t(()=>[...l[15]||=[s(`#`,-1)]]),_:1}),l[16]||=s(`Overflow Detection`,-1)]),l[18]||=i(`p`,null,[s(`When `),i(`code`,null,`expandable-on-overflow`),s(` is enabled, truncated content can be expanded on click. When `),i(`code`,null,`tooltip-on-overflow`),s(` is enabled, the tooltip is shown only for truncated content.`)],-1),o(P,null,{default:t(()=>[...l[17]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` narrow = ref(`),i(`span`,{class:`hljs-literal`},`true`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"narrow = !narrow"`),s(`>`)]),s(`Toggle Text Container Size`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`

  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`style`),s(`=`),i(`span`,{class:`hljs-string`},`"margin-top: 12px; color: var(--color-on-surface-variant); font-size: 12px"`),s(`>`)]),s(`Single Line Ellipsis`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-ellipsis`),s(`
    `),i(`span`,{class:`hljs-attr`},`expand-trigger`),s(`=`),i(`span`,{class:`hljs-string`},`"click"`),s(`
    `),i(`span`,{class:`hljs-attr`},`expandable-on-overflow`),s(`
    `),i(`span`,{class:`hljs-attr`},`tooltip-on-overflow`),s(`
    `),i(`span`,{class:`hljs-attr`},`:style`),s(`=`),i(`span`,{class:`hljs-string`},`"{ maxWidth: narrow ? '170px' : '340px' }"`),s(`
  >`)]),s(`
    Click to expand only when this text overflows.
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-ellipsis`),s(`>`)]),s(`

  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`style`),s(`=`),i(`span`,{class:`hljs-string`},`"margin-top: 12px; color: var(--color-on-surface-variant); font-size: 12px"`),s(`>`)]),s(`Multiple Line Ellipsis`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-ellipsis`),s(`
    `),i(`span`,{class:`hljs-attr`},`expand-trigger`),s(`=`),i(`span`,{class:`hljs-string`},`"click"`),s(`
    `),i(`span`,{class:`hljs-attr`},`expandable-on-overflow`),s(`
    `),i(`span`,{class:`hljs-attr`},`tooltip-on-overflow`),s(`
    `),i(`span`,{class:`hljs-attr`},`:line-clamp`),s(`=`),i(`span`,{class:`hljs-string`},`"2"`),s(`
    `),i(`span`,{class:`hljs-attr`},`:style`),s(`=`),i(`span`,{class:`hljs-string`},`"{ maxWidth: narrow ? '170px' : '340px' }"`),s(`
  >`)]),s(`
    Only truncated text can be expanded. Click it to view the full content, then click it again to collapse.
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-ellipsis`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,C,[i(`h3`,w,[o(N,{to:`#CustomTooltip`},{default:t(()=>[...l[19]||=[s(`#`,-1)]]),_:1}),l[20]||=s(`Custom Tooltip`,-1)]),o(P,null,{default:t(()=>[...l[21]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-ellipsis`),s(),i(`span`,{class:`hljs-attr`},`style`),s(`=`),i(`span`,{class:`hljs-string`},`"max-width: 50vw"`),s(),i(`span`,{class:`hljs-attr`},`:tooltip`),s(`=`),i(`span`,{class:`hljs-string`},`"{ type: 'primary', sameWidth: false }"`),s(`>`)]),s(`
    I want to say english to everyone like, even you still are normal people, you still can work a world champion and no one trust you!

    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`tooltip-content`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-icon`),s(),i(`span`,{class:`hljs-attr`},`name`),s(`=`),i(`span`,{class:`hljs-string`},`"github"`),s(` />`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-ellipsis`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),l[29]||=i(`h2`,null,`API`,-1),i(`div`,T,[i(`h3`,E,[o(N,{to:`#Props`},{default:t(()=>[...l[22]||=[s(`#`,-1)]]),_:1}),l[23]||=s(`Props`,-1)]),l[24]||=c(`<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:expand</code></td><td>Whether to expand</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>expand-trigger</code></td><td>Expand trigger method, optional value <code>click</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>expandable-on-overflow</code> <em><strong>3.20.7</strong></em></td><td>Allow expansion only if the text is overflowed</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>line-clamp</code></td><td>Maximum number of display lines, see <a href="https://caniuse.com/?search=line-clamp">line-clamp</a> for compatibility</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>tooltip-on-overflow</code> <em><strong>3.20.7</strong></em></td><td>Show the tooltip only when the text is truncated</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>tooltip</code></td><td>Tooltip component props, for deep customization. For more convenience, <code>sameWidth</code> defaults to <code>true</code> here</td><td><em>boolean | TooltipProps</em></td><td><code>true</code></td></tr></tbody></table>`,1)]),i(`div`,D,[i(`h3`,O,[o(N,{to:`#Slots`},{default:t(()=>[...l[25]||=[s(`#`,-1)]]),_:1}),l[26]||=s(`Slots`,-1)]),l[27]||=c(`<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Text content</td><td><code>-</code></td></tr><tr><td><code>tooltip-content</code></td><td>Tooltip content</td><td><code>-</code></td></tr></tbody></table>`,1)])])}var A=e(l,[[`render`,k]]);export{A as default};