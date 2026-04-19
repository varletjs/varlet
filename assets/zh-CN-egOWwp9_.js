import{L as e,N as t,W as n,c as r,d as i,g as a,h as o,m as s}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as c}from"./_plugin-vue_export-helper-V-yks4gF.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`jie4shao4`},p={class:`card`},m={id:`ji1ben3shi3yong4`},h={class:`card`},g={id:`zi4ding4yi4ge2shi0`},_={class:`card`},v={id:`xian3shi4hao2miao3`},y={class:`card`},b={id:`zi4ding4yi4yang4shi4`},x={class:`card`},S={id:`shou3dong4kong4zhi4`},C={class:`card`},w={id:`shu3xing4`},T={class:`card`},E={id:`fo0rma0tge2shi0`},D={class:`card`},O={id:`shi4jian4`},k={class:`card`},A={id:`cha1cao2`},j={class:`card`},M={id:`Ti0me0Da0ta0ge2shi0`},N={class:`card`},P={id:`fang1fa3`},F={class:`card`},I={id:`yang4shi4bian4liang4`};function L(c,l,L,R,z,B){let V=e(`router-link`),H=e(`var-site-code-example`);return t(),i(`div`,u,[l[44]||=r(`h1`,null,`倒计时`,-1),r(`div`,d,[r(`h3`,f,[a(V,{to:`#jie4shao4`},{default:n(()=>[...l[0]||=[o(`#`,-1)]]),_:1}),l[1]||=o(`介绍`,-1)]),l[2]||=r(`p`,null,`用于实时展示倒计时数值，支持毫秒精度。`,-1)]),r(`div`,p,[r(`h3`,m,[a(V,{to:`#ji1ben3shi3yong4`},{default:n(()=>[...l[3]||=[o(`#`,-1)]]),_:1}),l[4]||=o(`基本使用`,-1)]),l[6]||=r(`p`,null,[r(`code`,null,`time`),o(` 属性表示倒计时总时长，单位为毫秒。`)],-1),a(H,null,{default:n(()=>[...l[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` time = ref(`),r(`span`,{class:`hljs-number`},`30`),o(` * `),r(`span`,{class:`hljs-number`},`60`),o(` * `),r(`span`,{class:`hljs-number`},`60`),o(` * `),r(`span`,{class:`hljs-number`},`1000`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-countdown`),o(),r(`span`,{class:`hljs-attr`},`:time`),o(`=`),r(`span`,{class:`hljs-string`},`"time"`),o(` />`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,h,[r(`h3`,g,[a(V,{to:`#zi4ding4yi4ge2shi0`},{default:n(()=>[...l[7]||=[o(`#`,-1)]]),_:1}),l[8]||=o(`自定义格式`,-1)]),l[10]||=r(`p`,null,[o(`通过 `),r(`code`,null,`format`),o(` 属性设置倒计时文本的内容。`)],-1),a(H,null,{default:n(()=>[...l[9]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` time = ref(`),r(`span`,{class:`hljs-number`},`30`),o(` * `),r(`span`,{class:`hljs-number`},`60`),o(` * `),r(`span`,{class:`hljs-number`},`60`),o(` * `),r(`span`,{class:`hljs-number`},`1000`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-countdown`),o(),r(`span`,{class:`hljs-attr`},`:time`),o(`=`),r(`span`,{class:`hljs-string`},`"time"`),o(),r(`span`,{class:`hljs-attr`},`format`),o(`=`),r(`span`,{class:`hljs-string`},`"DD 天 HH 时 mm 分 ss 秒"`),o(` />`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,_,[r(`h3`,v,[a(V,{to:`#xian3shi4hao2miao3`},{default:n(()=>[...l[11]||=[o(`#`,-1)]]),_:1}),l[12]||=o(`显示毫秒`,-1)]),l[14]||=r(`p`,null,[o(`通过 `),r(`code`,null,`S`),o(` 文本显示毫秒。`)],-1),a(H,null,{default:n(()=>[...l[13]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` time = ref(`),r(`span`,{class:`hljs-number`},`30`),o(` * `),r(`span`,{class:`hljs-number`},`60`),o(` * `),r(`span`,{class:`hljs-number`},`60`),o(` * `),r(`span`,{class:`hljs-number`},`1000`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-countdown`),o(),r(`span`,{class:`hljs-attr`},`:time`),o(`=`),r(`span`,{class:`hljs-string`},`"time"`),o(),r(`span`,{class:`hljs-attr`},`format`),o(`=`),r(`span`,{class:`hljs-string`},`"HH:mm:ss:SS"`),o(` />`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,y,[r(`h3`,b,[a(V,{to:`#zi4ding4yi4yang4shi4`},{default:n(()=>[...l[15]||=[o(`#`,-1)]]),_:1}),l[16]||=o(`自定义样式`,-1)]),l[18]||=r(`p`,null,[o(`通过插槽自定义倒计时的样式，`),r(`code`,null,`timeData`),o(` 对象格式见下方表格。`)],-1),a(H,null,{default:n(()=>[...l[17]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
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
`)])],-1)]]),_:1})]),r(`div`,x,[r(`h3`,S,[a(V,{to:`#shou3dong4kong4zhi4`},{default:n(()=>[...l[19]||=[o(`#`,-1)]]),_:1}),l[20]||=o(`手动控制`,-1)]),l[22]||=r(`p`,null,[o(`通过 ref 获取到组件实例后，可以调用 `),r(`code`,null,`start`),o(`、`),r(`code`,null,`pause`),o(`、`),r(`code`,null,`reset`),o(` 方法。`)],-1),a(H,null,{default:n(()=>[...l[21]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
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
    `),r(`span`,{class:`hljs-attr`},`:auto-start`),o(`=`),r(`span`,{class:`hljs-string`},`"false"`),o(`
    `),r(`span`,{class:`hljs-attr`},`format`),o(`=`),r(`span`,{class:`hljs-string`},`"ss : SSS"`),o(`
    @`),r(`span`,{class:`hljs-attr`},`end`),o(`=`),r(`span`,{class:`hljs-string`},`"end"`),o(`
    @`),r(`span`,{class:`hljs-attr`},`change`),o(`=`),r(`span`,{class:`hljs-string`},`"change"`),o(`
  />`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-row`),o(),r(`span`,{class:`hljs-attr`},`justify`),o(`=`),r(`span`,{class:`hljs-string`},`"space-between"`),o(),r(`span`,{class:`hljs-attr`},`align`),o(`=`),r(`span`,{class:`hljs-string`},`"center"`),o(),r(`span`,{class:`hljs-attr`},`style`),o(`=`),r(`span`,{class:`hljs-string`},`"margin-top: 10px"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"countdown.start()"`),o(`>`)]),o(`开始`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"countdown.pause()"`),o(`>`)]),o(`暂停`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"countdown.reset()"`),o(`>`)]),o(`重置`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-row`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),l[45]||=r(`h2`,null,`API`,-1),r(`div`,C,[r(`h3`,w,[a(V,{to:`#shu3xing4`},{default:n(()=>[...l[23]||=[o(`#`,-1)]]),_:1}),l[24]||=o(`属性`,-1)]),l[25]||=s(`<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>time</code></td><td>倒计时时长（ms）</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>format</code></td><td>时间格式</td><td><em>string</em></td><td><code>HH : mm : ss</code></td></tr><tr><td><code>auto-start</code></td><td>是否自动开始倒计时</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table>`,1)]),r(`div`,T,[r(`h3`,E,[a(V,{to:`#fo0rma0tge2shi0`},{default:n(()=>[...l[26]||=[o(`#`,-1)]]),_:1}),l[27]||=o(`format 格式`,-1)]),l[28]||=s(`<table><thead><tr><th>格式</th><th>说明</th></tr></thead><tbody><tr><td><code>DD</code></td><td>天数</td></tr><tr><td><code>HH</code></td><td>小时</td></tr><tr><td><code>mm</code></td><td>分钟</td></tr><tr><td><code>ss</code></td><td>秒数</td></tr><tr><td><code>S</code></td><td>毫秒（1位）</td></tr><tr><td><code>SS</code></td><td>毫秒（2位）</td></tr><tr><td><code>SSS</code></td><td>毫秒（3位）</td></tr></tbody></table>`,1)]),r(`div`,D,[r(`h3`,O,[a(V,{to:`#shi4jian4`},{default:n(()=>[...l[29]||=[o(`#`,-1)]]),_:1}),l[30]||=o(`事件`,-1)]),l[31]||=s(`<table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td><code>end</code></td><td>倒计时结束时触发</td><td><code>-</code></td></tr><tr><td><code>change</code></td><td>倒计时变化时触发</td><td><code>timeData: TimeData</code></td></tr></tbody></table>`,1)]),r(`div`,k,[r(`h3`,A,[a(V,{to:`#cha1cao2`},{default:n(()=>[...l[32]||=[o(`#`,-1)]]),_:1}),l[33]||=o(`插槽`,-1)]),l[34]||=r(`table`,null,[r(`thead`,null,[r(`tr`,null,[r(`th`,null,`名称`),r(`th`,null,`说明`),r(`th`,null,`参数`)])]),r(`tbody`,null,[r(`tr`,null,[r(`td`,null,[r(`code`,null,`default`)]),r(`td`,null,`自定义内容`),r(`td`,null,[r(`code`,null,`timeData: TimeData`)])])])],-1)]),r(`div`,j,[r(`h3`,M,[a(V,{to:`#Ti0me0Da0ta0ge2shi0`},{default:n(()=>[...l[35]||=[o(`#`,-1)]]),_:1}),l[36]||=o(`TimeData 格式`,-1)]),l[37]||=s(`<table><thead><tr><th>名称</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td><code>days</code></td><td>剩余天数</td><td><code>number</code></td></tr><tr><td><code>hours</code></td><td>剩余小时</td><td><code>number</code></td></tr><tr><td><code>minutes</code></td><td>剩余分钟</td><td><code>number</code></td></tr><tr><td><code>seconds</code></td><td>剩余秒数</td><td><code>number</code></td></tr><tr><td><code>milliseconds</code></td><td>剩余毫秒</td><td><code>number</code></td></tr></tbody></table>`,1)]),r(`div`,N,[r(`h3`,P,[a(V,{to:`#fang1fa3`},{default:n(()=>[...l[38]||=[o(`#`,-1)]]),_:1}),l[39]||=o(`方法`,-1)]),l[40]||=s(`<p>通过 ref 可以获取到 CountDown 实例并调用实例方法.</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>start</code></td><td>开始倒计时</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>pause</code></td><td>暂停倒计时</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>重设倒计时，若 <code>auto-start</code> 为 <code>true</code>，重设后会自动开始倒计时</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>`,2)]),r(`div`,F,[r(`h3`,I,[a(V,{to:`#yang4shi4bian4liang4`},{default:n(()=>[...l[41]||=[o(`#`,-1)]]),_:1}),l[42]||=o(`样式变量`,-1)]),l[43]||=s(`<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--countdown-text-color</code></td><td><code>var(--color-text)</code></td></tr><tr><td><code>--countdown-text-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr></tbody></table>`,2)])])}var R=c(l,[[`render`,L]]);export{R as default};