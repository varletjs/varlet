import{L as e,N as t,W as n,c as r,d as i,g as a,h as o,m as s}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as c}from"./_plugin-vue_export-helper-V-yks4gF.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`Intro`},p={class:`card`},m={id:`BasicUsage`},h={class:`card`},g={id:`CustomFormat`},_={class:`card`},v={id:`ShowMillisecond`},y={class:`card`},b={id:`CustomStyle`},x={class:`card`},S={id:`ManualControl`},C={class:`card`},w={id:`Props`},T={class:`card`},E={id:`Availableformats`},D={class:`card`},O={id:`Events`},k={class:`card`},A={id:`Slots`},j={class:`card`},M={id:`TimeDataStructure`},N={class:`card`},P={id:`Methods`},F={class:`card`},I={id:`StyleVariables`};function L(c,l,L,R,z,B){let V=e(`router-link`),H=e(`var-site-code-example`);return t(),i(`div`,u,[l[44]||=r(`h1`,null,`Countdown`,-1),r(`div`,d,[r(`h3`,f,[a(V,{to:`#Intro`},{default:n(()=>[...l[0]||=[o(`#`,-1)]]),_:1}),l[1]||=o(`Intro`,-1)]),l[2]||=r(`p`,null,`For real-time display of countdown values, support millisecond precision.`,-1)]),r(`div`,p,[r(`h3`,m,[a(V,{to:`#BasicUsage`},{default:n(()=>[...l[3]||=[o(`#`,-1)]]),_:1}),l[4]||=o(`Basic Usage`,-1)]),l[6]||=r(`p`,null,[o(`Use `),r(`code`,null,`time`),o(` to set countdown time(ms).`)],-1),a(H,null,{default:n(()=>[...l[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` time = ref(`),r(`span`,{class:`hljs-number`},`30`),o(` * `),r(`span`,{class:`hljs-number`},`60`),o(` * `),r(`span`,{class:`hljs-number`},`60`),o(` * `),r(`span`,{class:`hljs-number`},`1000`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-countdown`),o(),r(`span`,{class:`hljs-attr`},`:time`),o(`=`),r(`span`,{class:`hljs-string`},`"time"`),o(` />`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,h,[r(`h3`,g,[a(V,{to:`#CustomFormat`},{default:n(()=>[...l[7]||=[o(`#`,-1)]]),_:1}),l[8]||=o(`Custom Format`,-1)]),l[10]||=r(`p`,null,[o(`Use `),r(`code`,null,`format`),o(` to set time text.`)],-1),a(H,null,{default:n(()=>[...l[9]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` time = ref(`),r(`span`,{class:`hljs-number`},`30`),o(` * `),r(`span`,{class:`hljs-number`},`60`),o(` * `),r(`span`,{class:`hljs-number`},`60`),o(` * `),r(`span`,{class:`hljs-number`},`1000`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-countdown`),o(),r(`span`,{class:`hljs-attr`},`:time`),o(`=`),r(`span`,{class:`hljs-string`},`"time"`),o(),r(`span`,{class:`hljs-attr`},`format`),o(`=`),r(`span`,{class:`hljs-string`},`"DD Day, HH:mm:ss"`),o(` />`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,_,[r(`h3`,v,[a(V,{to:`#ShowMillisecond`},{default:n(()=>[...l[11]||=[o(`#`,-1)]]),_:1}),l[12]||=o(`Show Millisecond`,-1)]),l[14]||=r(`p`,null,[o(`Use `),r(`code`,null,`S`),o(` text to show millisecond.`)],-1),a(H,null,{default:n(()=>[...l[13]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` time = ref(`),r(`span`,{class:`hljs-number`},`30`),o(` * `),r(`span`,{class:`hljs-number`},`60`),o(` * `),r(`span`,{class:`hljs-number`},`60`),o(` * `),r(`span`,{class:`hljs-number`},`1000`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-countdown`),o(),r(`span`,{class:`hljs-attr`},`:time`),o(`=`),r(`span`,{class:`hljs-string`},`"time"`),o(),r(`span`,{class:`hljs-attr`},`format`),o(`=`),r(`span`,{class:`hljs-string`},`"HH:mm:ss:SS"`),o(` />`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,y,[r(`h3`,b,[a(V,{to:`#CustomStyle`},{default:n(()=>[...l[15]||=[o(`#`,-1)]]),_:1}),l[16]||=o(`Custom Style`,-1)]),l[18]||=r(`p`,null,[o(`Use `),r(`code`,null,`slot`),o(` to set custom countdown style.`)],-1),a(H,null,{default:n(()=>[...l[17]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-countdown`),o(),r(`span`,{class:`hljs-attr`},`:time`),o(`=`),r(`span`,{class:`hljs-string`},`"108000000"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(` #`),r(`span`,{class:`hljs-attr`},`default`),o(`=`),r(`span`,{class:`hljs-string`},`"{ hours, minutes, seconds }"`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`span`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"countdown-example-block"`),o(`>`)]),o(`{{ hours }}`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`span`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`span`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"countdown-example-colon"`),o(`>`)]),o(`:`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`span`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`span`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"countdown-example-block"`),o(`>`)]),o(`{{ minutes }}`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`span`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`span`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"countdown-example-colon"`),o(`>`)]),o(`:`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`span`),o(`>`)]),o(`
      `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`span`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"countdown-example-block"`),o(`>`)]),o(`{{ seconds }}`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`span`),o(`>`)]),o(`
     `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-countdown`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),r(`span`,{class:`css`},[o(`
`),r(`span`,{class:`hljs-selector-class`},`.countdown-example-block`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`background`),o(`: `),r(`span`,{class:`hljs-built_in`},`var`),o(`(--color-primary);
  `),r(`span`,{class:`hljs-attribute`},`color`),o(`: `),r(`span`,{class:`hljs-built_in`},`var`),o(`(--color-on-primary);
  `),r(`span`,{class:`hljs-attribute`},`width`),o(`: `),r(`span`,{class:`hljs-number`},`30px`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`height`),o(`: `),r(`span`,{class:`hljs-number`},`30px`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`border-radius`),o(`: `),r(`span`,{class:`hljs-number`},`50%`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`padding`),o(`: `),r(`span`,{class:`hljs-number`},`18px`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`display`),o(`: inline-flex;
  `),r(`span`,{class:`hljs-attribute`},`align-items`),o(`: center;
  `),r(`span`,{class:`hljs-attribute`},`justify-content`),o(`: center;
}

`),r(`span`,{class:`hljs-selector-class`},`.countdown-example-colon`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`margin`),o(`: `),r(`span`,{class:`hljs-number`},`0`),o(),r(`span`,{class:`hljs-number`},`5px`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`font-size`),o(`: `),r(`span`,{class:`hljs-number`},`18px`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`font-weight`),o(`: `),r(`span`,{class:`hljs-number`},`500`),o(`;
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,x,[r(`h3`,S,[a(V,{to:`#ManualControl`},{default:n(()=>[...l[19]||=[o(`#`,-1)]]),_:1}),l[20]||=o(`Manual Control`,-1)]),l[22]||=r(`p`,null,[o(`Use `),r(`code`,null,`ref`),o(` to get countdown instance, you can call the `),r(`code`,null,`start`),o(`, `),r(`code`,null,`pause`),o(`, and `),r(`code`,null,`reset`),o(` methods.`)],-1),a(H,null,{default:n(()=>[...l[21]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` countdown = ref(`),r(`span`,{class:`hljs-literal`},`null`),o(`)

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`end`),o(`(`),r(`span`,{class:`hljs-params`}),o(`) `)]),o(`{
  Snackbar.info(`),r(`span`,{class:`hljs-string`},`'end!'`),o(`)
}

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`change`),o(`(`),r(`span`,{class:`hljs-params`}),o(`) `)]),o(`{
  `),r(`span`,{class:`hljs-built_in`},`console`),o(`.log(`),r(`span`,{class:`hljs-string`},`'change'`),o(`)
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-countdown`),o(`
    `),r(`span`,{class:`hljs-attr`},`time`),o(`=`),r(`span`,{class:`hljs-string`},`"3000"`),o(`
    `),r(`span`,{class:`hljs-attr`},`ref`),o(`=`),r(`span`,{class:`hljs-string`},`"countdown"`),o(`
    `),r(`span`,{class:`hljs-attr`},`format`),o(`=`),r(`span`,{class:`hljs-string`},`"ss : SSS"`),o(`
    `),r(`span`,{class:`hljs-attr`},`:auto-start`),o(`=`),r(`span`,{class:`hljs-string`},`"false"`),o(`
    @`),r(`span`,{class:`hljs-attr`},`end`),o(`=`),r(`span`,{class:`hljs-string`},`"end"`),o(`
    @`),r(`span`,{class:`hljs-attr`},`change`),o(`=`),r(`span`,{class:`hljs-string`},`"change"`),o(`
  />`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-row`),o(),r(`span`,{class:`hljs-attr`},`justify`),o(`=`),r(`span`,{class:`hljs-string`},`"space-between"`),o(),r(`span`,{class:`hljs-attr`},`align`),o(`=`),r(`span`,{class:`hljs-string`},`"center"`),o(),r(`span`,{class:`hljs-attr`},`style`),o(`=`),r(`span`,{class:`hljs-string`},`"margin-top: 10px"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"countdown.start()"`),o(`>`)]),o(`Start`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"countdown.pause()"`),o(`>`)]),o(`Pause`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"countdown.reset()"`),o(`>`)]),o(`Reset`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-row`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),l[45]||=r(`h2`,null,`API`,-1),r(`div`,C,[r(`h3`,w,[a(V,{to:`#Props`},{default:n(()=>[...l[23]||=[o(`#`,-1)]]),_:1}),l[24]||=o(`Props`,-1)]),l[25]||=s(`<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>time</code></td><td>Total time(ms)</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>format</code></td><td>Time format</td><td><em>string</em></td><td><code>HH : mm : ss</code></td></tr><tr><td><code>auto-start</code></td><td>Whether to auto start count down</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table>`,1)]),r(`div`,T,[r(`h3`,E,[a(V,{to:`#Availableformats`},{default:n(()=>[...l[26]||=[o(`#`,-1)]]),_:1}),l[27]||=o(`Available formats`,-1)]),l[28]||=s(`<table><thead><tr><th>Format</th><th>Description</th></tr></thead><tbody><tr><td><code>DD</code></td><td>Day</td></tr><tr><td><code>HH</code></td><td>Hour</td></tr><tr><td><code>mm</code></td><td>Minute</td></tr><tr><td><code>ss</code></td><td>Second</td></tr><tr><td><code>S</code></td><td>Millisecond, 1-digit</td></tr><tr><td><code>SS</code></td><td>Millisecond, 2-digit</td></tr><tr><td><code>SSS</code></td><td>Millisecond, 3-digit</td></tr></tbody></table>`,1)]),r(`div`,D,[r(`h3`,O,[a(V,{to:`#Events`},{default:n(()=>[...l[29]||=[o(`#`,-1)]]),_:1}),l[30]||=o(`Events`,-1)]),l[31]||=s(`<table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>end</code></td><td>Emitted after countdown ended</td><td><code>-</code></td></tr><tr><td><code>change</code></td><td>Emitted after countdown changed</td><td><code>timeData: TimeData</code></td></tr></tbody></table>`,1)]),r(`div`,k,[r(`h3`,A,[a(V,{to:`#Slots`},{default:n(()=>[...l[32]||=[o(`#`,-1)]]),_:1}),l[33]||=o(`Slots`,-1)]),l[34]||=r(`table`,null,[r(`thead`,null,[r(`tr`,null,[r(`th`,null,`Name`),r(`th`,null,`Description`),r(`th`,null,`SlotProps`)])]),r(`tbody`,null,[r(`tr`,null,[r(`td`,null,[r(`code`,null,`default`)]),r(`td`,null,`Custom content`),r(`td`,null,[r(`code`,null,`timeData: TimeData`)])])])],-1)]),r(`div`,j,[r(`h3`,M,[a(V,{to:`#TimeDataStructure`},{default:n(()=>[...l[35]||=[o(`#`,-1)]]),_:1}),l[36]||=o(`TimeData Structure`,-1)]),l[37]||=s(`<table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td><code>days</code></td><td>Remain days</td><td><code>number</code></td></tr><tr><td><code>hours</code></td><td>Remain hours</td><td><code>number</code></td></tr><tr><td><code>minutes</code></td><td>Remain minutes</td><td><code>number</code></td></tr><tr><td><code>seconds</code></td><td>Remain seconds</td><td><code>number</code></td></tr><tr><td><code>milliseconds</code></td><td>Remain milliseconds</td><td><code>number</code></td></tr></tbody></table>`,1)]),r(`div`,N,[r(`h3`,P,[a(V,{to:`#Methods`},{default:n(()=>[...l[38]||=[o(`#`,-1)]]),_:1}),l[39]||=o(`Methods`,-1)]),l[40]||=s(`<p>Use ref to get CountDown instance and call instance methods.</p><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>start</code></td><td>Start countdown</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>pause</code></td><td>Pause countdown</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Reset countdown</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>`,2)]),r(`div`,F,[r(`h3`,I,[a(V,{to:`#StyleVariables`},{default:n(()=>[...l[41]||=[o(`#`,-1)]]),_:1}),l[42]||=o(`Style Variables`,-1)]),l[43]||=s(`<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--countdown-text-color</code></td><td><code>var(--color-text)</code></td></tr><tr><td><code>--countdown-text-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr></tbody></table>`,2)])])}var R=c(l,[[`render`,L]]);export{R as default};