import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s,m as c}from"./runtime-core.esm-bundler-DUghkl6b.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`Intro`},p={class:`card`},m={id:`BasicUsage`},h={class:`card`},g={id:`CustomFormat`},_={class:`card`},v={id:`ShowMillisecond`},y={class:`card`},b={id:`CustomStyle`},x={class:`card`},S={id:`ManualControl`},C={class:`card`},w={id:`Props`},T={class:`card`},E={id:`Availableformats`},D={class:`card`},O={id:`Events`},k={class:`card`},A={id:`Slots`},j={class:`card`},M={id:`TimeDataStructure`},N={class:`card`},P={id:`Methods`},F={class:`card`},I={id:`StyleVariables`};function L(e,l,L,R,z,B){let V=n(`router-link`),H=n(`var-site-code-example`);return r(),a(`div`,u,[l[44]||=i(`h1`,null,`Countdown`,-1),i(`div`,d,[i(`h3`,f,[o(V,{to:`#Intro`},{default:t(()=>[...l[0]||=[s(`#`,-1)]]),_:1}),l[1]||=s(`Intro`,-1)]),l[2]||=i(`p`,null,`For real-time display of countdown values, support millisecond precision.`,-1)]),i(`div`,p,[i(`h3`,m,[o(V,{to:`#BasicUsage`},{default:t(()=>[...l[3]||=[s(`#`,-1)]]),_:1}),l[4]||=s(`Basic Usage`,-1)]),l[6]||=i(`p`,null,[s(`Use `),i(`code`,null,`time`),s(` to set countdown time(ms).`)],-1),o(H,null,{default:t(()=>[...l[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` time = ref(`),i(`span`,{class:`hljs-number`},`30`),s(` * `),i(`span`,{class:`hljs-number`},`60`),s(` * `),i(`span`,{class:`hljs-number`},`60`),s(` * `),i(`span`,{class:`hljs-number`},`1000`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-countdown`),s(),i(`span`,{class:`hljs-attr`},`:time`),s(`=`),i(`span`,{class:`hljs-string`},`"time"`),s(` />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,h,[i(`h3`,g,[o(V,{to:`#CustomFormat`},{default:t(()=>[...l[7]||=[s(`#`,-1)]]),_:1}),l[8]||=s(`Custom Format`,-1)]),l[10]||=i(`p`,null,[s(`Use `),i(`code`,null,`format`),s(` to set time text.`)],-1),o(H,null,{default:t(()=>[...l[9]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` time = ref(`),i(`span`,{class:`hljs-number`},`30`),s(` * `),i(`span`,{class:`hljs-number`},`60`),s(` * `),i(`span`,{class:`hljs-number`},`60`),s(` * `),i(`span`,{class:`hljs-number`},`1000`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-countdown`),s(),i(`span`,{class:`hljs-attr`},`:time`),s(`=`),i(`span`,{class:`hljs-string`},`"time"`),s(),i(`span`,{class:`hljs-attr`},`format`),s(`=`),i(`span`,{class:`hljs-string`},`"DD Day, HH:mm:ss"`),s(` />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,_,[i(`h3`,v,[o(V,{to:`#ShowMillisecond`},{default:t(()=>[...l[11]||=[s(`#`,-1)]]),_:1}),l[12]||=s(`Show Millisecond`,-1)]),l[14]||=i(`p`,null,[s(`Use `),i(`code`,null,`S`),s(` text to show millisecond.`)],-1),o(H,null,{default:t(()=>[...l[13]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` time = ref(`),i(`span`,{class:`hljs-number`},`30`),s(` * `),i(`span`,{class:`hljs-number`},`60`),s(` * `),i(`span`,{class:`hljs-number`},`60`),s(` * `),i(`span`,{class:`hljs-number`},`1000`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-countdown`),s(),i(`span`,{class:`hljs-attr`},`:time`),s(`=`),i(`span`,{class:`hljs-string`},`"time"`),s(),i(`span`,{class:`hljs-attr`},`format`),s(`=`),i(`span`,{class:`hljs-string`},`"HH:mm:ss:SS"`),s(` />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,y,[i(`h3`,b,[o(V,{to:`#CustomStyle`},{default:t(()=>[...l[15]||=[s(`#`,-1)]]),_:1}),l[16]||=s(`Custom Style`,-1)]),l[18]||=i(`p`,null,[s(`Use `),i(`code`,null,`slot`),s(` to set custom countdown style.`)],-1),o(H,null,{default:t(()=>[...l[17]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-countdown`),s(),i(`span`,{class:`hljs-attr`},`:time`),s(`=`),i(`span`,{class:`hljs-string`},`"108000000"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(` #`),i(`span`,{class:`hljs-attr`},`default`),s(`=`),i(`span`,{class:`hljs-string`},`"{ hours, minutes, seconds }"`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`span`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"countdown-example-block"`),s(`>`)]),s(`{{ hours }}`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`span`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`span`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"countdown-example-colon"`),s(`>`)]),s(`:`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`span`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`span`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"countdown-example-block"`),s(`>`)]),s(`{{ minutes }}`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`span`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`span`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"countdown-example-colon"`),s(`>`)]),s(`:`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`span`),s(`>`)]),s(`
      `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`span`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"countdown-example-block"`),s(`>`)]),s(`{{ seconds }}`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`span`),s(`>`)]),s(`
     `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-countdown`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),i(`span`,{class:`css`},[s(`
`),i(`span`,{class:`hljs-selector-class`},`.countdown-example-block`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`background`),s(`: `),i(`span`,{class:`hljs-built_in`},`var`),s(`(--color-primary);
  `),i(`span`,{class:`hljs-attribute`},`color`),s(`: `),i(`span`,{class:`hljs-built_in`},`var`),s(`(--color-on-primary);
  `),i(`span`,{class:`hljs-attribute`},`width`),s(`: `),i(`span`,{class:`hljs-number`},`30px`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`height`),s(`: `),i(`span`,{class:`hljs-number`},`30px`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`border-radius`),s(`: `),i(`span`,{class:`hljs-number`},`50%`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`padding`),s(`: `),i(`span`,{class:`hljs-number`},`18px`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`display`),s(`: inline-flex;
  `),i(`span`,{class:`hljs-attribute`},`align-items`),s(`: center;
  `),i(`span`,{class:`hljs-attribute`},`justify-content`),s(`: center;
}

`),i(`span`,{class:`hljs-selector-class`},`.countdown-example-colon`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`margin`),s(`: `),i(`span`,{class:`hljs-number`},`0`),s(),i(`span`,{class:`hljs-number`},`5px`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`font-size`),s(`: `),i(`span`,{class:`hljs-number`},`18px`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`font-weight`),s(`: `),i(`span`,{class:`hljs-number`},`500`),s(`;
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,x,[i(`h3`,S,[o(V,{to:`#ManualControl`},{default:t(()=>[...l[19]||=[s(`#`,-1)]]),_:1}),l[20]||=s(`Manual Control`,-1)]),l[22]||=i(`p`,null,[s(`Use `),i(`code`,null,`ref`),s(` to get countdown instance, you can call the `),i(`code`,null,`start`),s(`, `),i(`code`,null,`pause`),s(`, and `),i(`code`,null,`reset`),s(` methods.`)],-1),o(H,null,{default:t(()=>[...l[21]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Snackbar } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` countdown = ref(`),i(`span`,{class:`hljs-literal`},`null`),s(`)

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`end`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  Snackbar.info(`),i(`span`,{class:`hljs-string`},`'end!'`),s(`)
}

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`change`),s(`(`),i(`span`,{class:`hljs-params`}),s(`) `)]),s(`{
  `),i(`span`,{class:`hljs-built_in`},`console`),s(`.log(`),i(`span`,{class:`hljs-string`},`'change'`),s(`)
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-countdown`),s(`
    `),i(`span`,{class:`hljs-attr`},`time`),s(`=`),i(`span`,{class:`hljs-string`},`"3000"`),s(`
    `),i(`span`,{class:`hljs-attr`},`ref`),s(`=`),i(`span`,{class:`hljs-string`},`"countdown"`),s(`
    `),i(`span`,{class:`hljs-attr`},`format`),s(`=`),i(`span`,{class:`hljs-string`},`"ss : SSS"`),s(`
    `),i(`span`,{class:`hljs-attr`},`:auto-start`),s(`=`),i(`span`,{class:`hljs-string`},`"false"`),s(`
    @`),i(`span`,{class:`hljs-attr`},`end`),s(`=`),i(`span`,{class:`hljs-string`},`"end"`),s(`
    @`),i(`span`,{class:`hljs-attr`},`change`),s(`=`),i(`span`,{class:`hljs-string`},`"change"`),s(`
  />`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-row`),s(),i(`span`,{class:`hljs-attr`},`justify`),s(`=`),i(`span`,{class:`hljs-string`},`"space-between"`),s(),i(`span`,{class:`hljs-attr`},`align`),s(`=`),i(`span`,{class:`hljs-string`},`"center"`),s(),i(`span`,{class:`hljs-attr`},`style`),s(`=`),i(`span`,{class:`hljs-string`},`"margin-top: 10px"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"countdown.start()"`),s(`>`)]),s(`Start`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"countdown.pause()"`),s(`>`)]),s(`Pause`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"countdown.reset()"`),s(`>`)]),s(`Reset`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-row`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),l[45]||=i(`h2`,null,`API`,-1),i(`div`,C,[i(`h3`,w,[o(V,{to:`#Props`},{default:t(()=>[...l[23]||=[s(`#`,-1)]]),_:1}),l[24]||=s(`Props`,-1)]),l[25]||=c(`<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>time</code></td><td>Total time(ms)</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>format</code></td><td>Time format</td><td><em>string</em></td><td><code>HH : mm : ss</code></td></tr><tr><td><code>auto-start</code></td><td>Whether to auto start count down</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table>`,1)]),i(`div`,T,[i(`h3`,E,[o(V,{to:`#Availableformats`},{default:t(()=>[...l[26]||=[s(`#`,-1)]]),_:1}),l[27]||=s(`Available formats`,-1)]),l[28]||=c(`<table><thead><tr><th>Format</th><th>Description</th></tr></thead><tbody><tr><td><code>DD</code></td><td>Day</td></tr><tr><td><code>HH</code></td><td>Hour</td></tr><tr><td><code>mm</code></td><td>Minute</td></tr><tr><td><code>ss</code></td><td>Second</td></tr><tr><td><code>S</code></td><td>Millisecond, 1-digit</td></tr><tr><td><code>SS</code></td><td>Millisecond, 2-digit</td></tr><tr><td><code>SSS</code></td><td>Millisecond, 3-digit</td></tr></tbody></table>`,1)]),i(`div`,D,[i(`h3`,O,[o(V,{to:`#Events`},{default:t(()=>[...l[29]||=[s(`#`,-1)]]),_:1}),l[30]||=s(`Events`,-1)]),l[31]||=c(`<table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>end</code></td><td>Emitted after countdown ended</td><td><code>-</code></td></tr><tr><td><code>change</code></td><td>Emitted after countdown changed</td><td><code>timeData: TimeData</code></td></tr></tbody></table>`,1)]),i(`div`,k,[i(`h3`,A,[o(V,{to:`#Slots`},{default:t(()=>[...l[32]||=[s(`#`,-1)]]),_:1}),l[33]||=s(`Slots`,-1)]),l[34]||=i(`table`,null,[i(`thead`,null,[i(`tr`,null,[i(`th`,null,`Name`),i(`th`,null,`Description`),i(`th`,null,`SlotProps`)])]),i(`tbody`,null,[i(`tr`,null,[i(`td`,null,[i(`code`,null,`default`)]),i(`td`,null,`Custom content`),i(`td`,null,[i(`code`,null,`timeData: TimeData`)])])])],-1)]),i(`div`,j,[i(`h3`,M,[o(V,{to:`#TimeDataStructure`},{default:t(()=>[...l[35]||=[s(`#`,-1)]]),_:1}),l[36]||=s(`TimeData Structure`,-1)]),l[37]||=c(`<table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td><code>days</code></td><td>Remain days</td><td><code>number</code></td></tr><tr><td><code>hours</code></td><td>Remain hours</td><td><code>number</code></td></tr><tr><td><code>minutes</code></td><td>Remain minutes</td><td><code>number</code></td></tr><tr><td><code>seconds</code></td><td>Remain seconds</td><td><code>number</code></td></tr><tr><td><code>milliseconds</code></td><td>Remain milliseconds</td><td><code>number</code></td></tr></tbody></table>`,1)]),i(`div`,N,[i(`h3`,P,[o(V,{to:`#Methods`},{default:t(()=>[...l[38]||=[s(`#`,-1)]]),_:1}),l[39]||=s(`Methods`,-1)]),l[40]||=c(`<p>Use ref to get CountDown instance and call instance methods.</p><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>start</code></td><td>Start countdown</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>pause</code></td><td>Pause countdown</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Reset countdown</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>`,2)]),i(`div`,F,[i(`h3`,I,[o(V,{to:`#StyleVariables`},{default:t(()=>[...l[41]||=[s(`#`,-1)]]),_:1}),l[42]||=s(`Style Variables`,-1)]),l[43]||=c(`<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--countdown-text-color</code></td><td><code>var(--color-text)</code></td></tr><tr><td><code>--countdown-text-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr></tbody></table>`,2)])])}var R=e(l,[[`render`,L]]);export{R as default};