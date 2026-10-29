import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s,m as c}from"./runtime-core.esm-bundler-DUghkl6b.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`jie4shao4`},p={class:`card`},m={id:`ji1ben3shi3yong4`},h={class:`card`},g={id:`zi4ding4yi4ge2shi0`},_={class:`card`},v={id:`xian3shi4hao2miao3`},y={class:`card`},b={id:`zi4ding4yi4yang4shi4`},x={class:`card`},S={id:`shou3dong4kong4zhi4`},C={class:`card`},w={id:`shu3xing4`},T={class:`card`},E={id:`fo0rma0tge2shi0`},D={class:`card`},O={id:`shi4jian4`},k={class:`card`},A={id:`cha1cao2`},j={class:`card`},M={id:`Ti0me0Da0ta0ge2shi0`},N={class:`card`},P={id:`fang1fa3`},F={class:`card`},I={id:`yang4shi4bian4liang4`};function L(e,l,L,R,z,B){let V=n(`router-link`),H=n(`var-site-code-example`);return r(),a(`div`,u,[l[44]||=i(`h1`,null,`倒计时`,-1),i(`div`,d,[i(`h3`,f,[o(V,{to:`#jie4shao4`},{default:t(()=>[...l[0]||=[s(`#`,-1)]]),_:1}),l[1]||=s(`介绍`,-1)]),l[2]||=i(`p`,null,`用于实时展示倒计时数值，支持毫秒精度。`,-1)]),i(`div`,p,[i(`h3`,m,[o(V,{to:`#ji1ben3shi3yong4`},{default:t(()=>[...l[3]||=[s(`#`,-1)]]),_:1}),l[4]||=s(`基本使用`,-1)]),l[6]||=i(`p`,null,[i(`code`,null,`time`),s(` 属性表示倒计时总时长，单位为毫秒。`)],-1),o(H,null,{default:t(()=>[...l[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` time = ref(`),i(`span`,{class:`hljs-number`},`30`),s(` * `),i(`span`,{class:`hljs-number`},`60`),s(` * `),i(`span`,{class:`hljs-number`},`60`),s(` * `),i(`span`,{class:`hljs-number`},`1000`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-countdown`),s(),i(`span`,{class:`hljs-attr`},`:time`),s(`=`),i(`span`,{class:`hljs-string`},`"time"`),s(` />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,h,[i(`h3`,g,[o(V,{to:`#zi4ding4yi4ge2shi0`},{default:t(()=>[...l[7]||=[s(`#`,-1)]]),_:1}),l[8]||=s(`自定义格式`,-1)]),l[10]||=i(`p`,null,[s(`通过 `),i(`code`,null,`format`),s(` 属性设置倒计时文本的内容。`)],-1),o(H,null,{default:t(()=>[...l[9]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` time = ref(`),i(`span`,{class:`hljs-number`},`30`),s(` * `),i(`span`,{class:`hljs-number`},`60`),s(` * `),i(`span`,{class:`hljs-number`},`60`),s(` * `),i(`span`,{class:`hljs-number`},`1000`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-countdown`),s(),i(`span`,{class:`hljs-attr`},`:time`),s(`=`),i(`span`,{class:`hljs-string`},`"time"`),s(),i(`span`,{class:`hljs-attr`},`format`),s(`=`),i(`span`,{class:`hljs-string`},`"DD 天 HH 时 mm 分 ss 秒"`),s(` />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,_,[i(`h3`,v,[o(V,{to:`#xian3shi4hao2miao3`},{default:t(()=>[...l[11]||=[s(`#`,-1)]]),_:1}),l[12]||=s(`显示毫秒`,-1)]),l[14]||=i(`p`,null,[s(`通过 `),i(`code`,null,`S`),s(` 文本显示毫秒。`)],-1),o(H,null,{default:t(()=>[...l[13]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` time = ref(`),i(`span`,{class:`hljs-number`},`30`),s(` * `),i(`span`,{class:`hljs-number`},`60`),s(` * `),i(`span`,{class:`hljs-number`},`60`),s(` * `),i(`span`,{class:`hljs-number`},`1000`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-countdown`),s(),i(`span`,{class:`hljs-attr`},`:time`),s(`=`),i(`span`,{class:`hljs-string`},`"time"`),s(),i(`span`,{class:`hljs-attr`},`format`),s(`=`),i(`span`,{class:`hljs-string`},`"HH:mm:ss:SS"`),s(` />`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,y,[i(`h3`,b,[o(V,{to:`#zi4ding4yi4yang4shi4`},{default:t(()=>[...l[15]||=[s(`#`,-1)]]),_:1}),l[16]||=s(`自定义样式`,-1)]),l[18]||=i(`p`,null,[s(`通过插槽自定义倒计时的样式，`),i(`code`,null,`timeData`),s(` 对象格式见下方表格。`)],-1),o(H,null,{default:t(()=>[...l[17]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
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
`)])],-1)]]),_:1})]),i(`div`,x,[i(`h3`,S,[o(V,{to:`#shou3dong4kong4zhi4`},{default:t(()=>[...l[19]||=[s(`#`,-1)]]),_:1}),l[20]||=s(`手动控制`,-1)]),l[22]||=i(`p`,null,[s(`通过 ref 获取到组件实例后，可以调用 `),i(`code`,null,`start`),s(`、`),i(`code`,null,`pause`),s(`、`),i(`code`,null,`reset`),s(` 方法。`)],-1),o(H,null,{default:t(()=>[...l[21]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
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
    `),i(`span`,{class:`hljs-attr`},`:auto-start`),s(`=`),i(`span`,{class:`hljs-string`},`"false"`),s(`
    `),i(`span`,{class:`hljs-attr`},`format`),s(`=`),i(`span`,{class:`hljs-string`},`"ss : SSS"`),s(`
    @`),i(`span`,{class:`hljs-attr`},`end`),s(`=`),i(`span`,{class:`hljs-string`},`"end"`),s(`
    @`),i(`span`,{class:`hljs-attr`},`change`),s(`=`),i(`span`,{class:`hljs-string`},`"change"`),s(`
  />`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-row`),s(),i(`span`,{class:`hljs-attr`},`justify`),s(`=`),i(`span`,{class:`hljs-string`},`"space-between"`),s(),i(`span`,{class:`hljs-attr`},`align`),s(`=`),i(`span`,{class:`hljs-string`},`"center"`),s(),i(`span`,{class:`hljs-attr`},`style`),s(`=`),i(`span`,{class:`hljs-string`},`"margin-top: 10px"`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(),i(`span`,{class:`hljs-attr`},`type`),s(`=`),i(`span`,{class:`hljs-string`},`"primary"`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"countdown.start()"`),s(`>`)]),s(`开始`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"countdown.pause()"`),s(`>`)]),s(`暂停`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
    `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-button`),s(` @`),i(`span`,{class:`hljs-attr`},`click`),s(`=`),i(`span`,{class:`hljs-string`},`"countdown.reset()"`),s(`>`)]),s(`重置`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-button`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-row`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),l[45]||=i(`h2`,null,`API`,-1),i(`div`,C,[i(`h3`,w,[o(V,{to:`#shu3xing4`},{default:t(()=>[...l[23]||=[s(`#`,-1)]]),_:1}),l[24]||=s(`属性`,-1)]),l[25]||=c(`<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>time</code></td><td>倒计时时长（ms）</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>format</code></td><td>时间格式</td><td><em>string</em></td><td><code>HH : mm : ss</code></td></tr><tr><td><code>auto-start</code></td><td>是否自动开始倒计时</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table>`,1)]),i(`div`,T,[i(`h3`,E,[o(V,{to:`#fo0rma0tge2shi0`},{default:t(()=>[...l[26]||=[s(`#`,-1)]]),_:1}),l[27]||=s(`format 格式`,-1)]),l[28]||=c(`<table><thead><tr><th>格式</th><th>说明</th></tr></thead><tbody><tr><td><code>DD</code></td><td>天数</td></tr><tr><td><code>HH</code></td><td>小时</td></tr><tr><td><code>mm</code></td><td>分钟</td></tr><tr><td><code>ss</code></td><td>秒数</td></tr><tr><td><code>S</code></td><td>毫秒（1位）</td></tr><tr><td><code>SS</code></td><td>毫秒（2位）</td></tr><tr><td><code>SSS</code></td><td>毫秒（3位）</td></tr></tbody></table>`,1)]),i(`div`,D,[i(`h3`,O,[o(V,{to:`#shi4jian4`},{default:t(()=>[...l[29]||=[s(`#`,-1)]]),_:1}),l[30]||=s(`事件`,-1)]),l[31]||=c(`<table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td><code>end</code></td><td>倒计时结束时触发</td><td><code>-</code></td></tr><tr><td><code>change</code></td><td>倒计时变化时触发</td><td><code>timeData: TimeData</code></td></tr></tbody></table>`,1)]),i(`div`,k,[i(`h3`,A,[o(V,{to:`#cha1cao2`},{default:t(()=>[...l[32]||=[s(`#`,-1)]]),_:1}),l[33]||=s(`插槽`,-1)]),l[34]||=i(`table`,null,[i(`thead`,null,[i(`tr`,null,[i(`th`,null,`名称`),i(`th`,null,`说明`),i(`th`,null,`参数`)])]),i(`tbody`,null,[i(`tr`,null,[i(`td`,null,[i(`code`,null,`default`)]),i(`td`,null,`自定义内容`),i(`td`,null,[i(`code`,null,`timeData: TimeData`)])])])],-1)]),i(`div`,j,[i(`h3`,M,[o(V,{to:`#Ti0me0Da0ta0ge2shi0`},{default:t(()=>[...l[35]||=[s(`#`,-1)]]),_:1}),l[36]||=s(`TimeData 格式`,-1)]),l[37]||=c(`<table><thead><tr><th>名称</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td><code>days</code></td><td>剩余天数</td><td><code>number</code></td></tr><tr><td><code>hours</code></td><td>剩余小时</td><td><code>number</code></td></tr><tr><td><code>minutes</code></td><td>剩余分钟</td><td><code>number</code></td></tr><tr><td><code>seconds</code></td><td>剩余秒数</td><td><code>number</code></td></tr><tr><td><code>milliseconds</code></td><td>剩余毫秒</td><td><code>number</code></td></tr></tbody></table>`,1)]),i(`div`,N,[i(`h3`,P,[o(V,{to:`#fang1fa3`},{default:t(()=>[...l[38]||=[s(`#`,-1)]]),_:1}),l[39]||=s(`方法`,-1)]),l[40]||=c(`<p>通过 ref 可以获取到 CountDown 实例并调用实例方法.</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>start</code></td><td>开始倒计时</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>pause</code></td><td>暂停倒计时</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>重设倒计时，若 <code>auto-start</code> 为 <code>true</code>，重设后会自动开始倒计时</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>`,2)]),i(`div`,F,[i(`h3`,I,[o(V,{to:`#yang4shi4bian4liang4`},{default:t(()=>[...l[41]||=[s(`#`,-1)]]),_:1}),l[42]||=s(`样式变量`,-1)]),l[43]||=c(`<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--countdown-text-color</code></td><td><code>var(--color-text)</code></td></tr><tr><td><code>--countdown-text-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr></tbody></table>`,2)])])}var R=e(l,[[`render`,L]]);export{R as default};