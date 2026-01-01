import{_ as o,b as d,e as h,m as r,p as a,q as t,w as n,P as s,Z as e}from"./index-vwO9GBzB.js";const p={components:{}},i={class:"varlet-site-doc"},j=a("h1",null,"倒计时",-1),m={class:"card"},u={id:"jie4shao4"},_=a("p",null,"用于实时展示倒计时数值，支持毫秒精度。",-1),g={class:"card"},b={id:"ji1ben3shi3yong4"},f=a("p",null,[a("code",null,"time"),s(" 属性表示倒计时总时长，单位为毫秒。")],-1),y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" time = ref("),a("span",{class:"hljs-number"},"30"),s(" * "),a("span",{class:"hljs-number"},"60"),s(" * "),a("span",{class:"hljs-number"},"60"),s(" * "),a("span",{class:"hljs-number"},"1000"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-countdown"),s(),a("span",{class:"hljs-attr"},":time"),s("="),a("span",{class:"hljs-string"},'"time"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),w={class:"card"},v={id:"zi4ding4yi4ge2shi0"},k=a("p",null,[s("通过 "),a("code",null,"format"),s(" 属性设置倒计时文本的内容。")],-1),x=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" time = ref("),a("span",{class:"hljs-number"},"30"),s(" * "),a("span",{class:"hljs-number"},"60"),s(" * "),a("span",{class:"hljs-number"},"60"),s(" * "),a("span",{class:"hljs-number"},"1000"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-countdown"),s(),a("span",{class:"hljs-attr"},":time"),s("="),a("span",{class:"hljs-string"},'"time"'),s(),a("span",{class:"hljs-attr"},"format"),s("="),a("span",{class:"hljs-string"},'"DD 天 HH 时 mm 分 ss 秒"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),S={class:"card"},D={id:"xian3shi4hao2miao3"},z=a("p",null,[s("通过 "),a("code",null,"S"),s(" 文本显示毫秒。")],-1),H=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" time = ref("),a("span",{class:"hljs-number"},"30"),s(" * "),a("span",{class:"hljs-number"},"60"),s(" * "),a("span",{class:"hljs-number"},"60"),s(" * "),a("span",{class:"hljs-number"},"1000"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-countdown"),s(),a("span",{class:"hljs-attr"},":time"),s("="),a("span",{class:"hljs-string"},'"time"'),s(),a("span",{class:"hljs-attr"},"format"),s("="),a("span",{class:"hljs-string"},'"HH:mm:ss:SS"'),s(" />")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),$={class:"card"},N={id:"zi4ding4yi4yang4shi4"},T=a("p",null,[s("通过插槽自定义倒计时的样式，"),a("code",null,"timeData"),s(" 对象格式见下方表格。")],-1),C=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-countdown"),s(),a("span",{class:"hljs-attr"},":time"),s("="),a("span",{class:"hljs-string"},'"108000000"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"default"),s("="),a("span",{class:"hljs-string"},'"{ hours, minutes, seconds }"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"countdown-example-block"'),s(">")]),s("{{ hours }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"countdown-example-colon"'),s(">")]),s(":"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"countdown-example-block"'),s(">")]),s("{{ minutes }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"countdown-example-colon"'),s(">")]),s(":"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"span"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"countdown-example-block"'),s(">")]),s("{{ seconds }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"span"),s(">")]),s(`
     `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-countdown"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".countdown-example-block"),s(` {
  `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#ff9f00"),s(`;
  `),a("span",{class:"hljs-attribute"},"color"),s(`: white;
  `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"30px"),s(`;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"30px"),s(`;
  `),a("span",{class:"hljs-attribute"},"border-radius"),s(": "),a("span",{class:"hljs-number"},"50%"),s(`;
  `),a("span",{class:"hljs-attribute"},"display"),s(`: inline-flex;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
}

`),a("span",{class:"hljs-selector-class"},".countdown-example-colon"),s(` {
  `),a("span",{class:"hljs-attribute"},"margin"),s(": "),a("span",{class:"hljs-number"},"0"),s(),a("span",{class:"hljs-number"},"5px"),s(`;
  `),a("span",{class:"hljs-attribute"},"font-size"),s(": "),a("span",{class:"hljs-number"},"18px"),s(`;
  `),a("span",{class:"hljs-attribute"},"font-weight"),s(": "),a("span",{class:"hljs-number"},"500"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),V={class:"card"},B={id:"shou3dong4kong4zhi4"},P=a("p",null,[s("通过 ref 获取到组件实例后，可以调用 "),a("code",null,"start"),s("、"),a("code",null,"pause"),s("、"),a("code",null,"reset"),s(" 方法。")],-1),q=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" countdown = ref("),a("span",{class:"hljs-literal"},"null"),s(`)

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"end"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  Snackbar.info(`),a("span",{class:"hljs-string"},"'end!'"),s(`)
}

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"change"),s("("),a("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),a("span",{class:"hljs-built_in"},"console"),s(".log("),a("span",{class:"hljs-string"},"'change'"),s(`)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-countdown"),s(`
    `),a("span",{class:"hljs-attr"},"time"),s("="),a("span",{class:"hljs-string"},'"3000"'),s(`
    `),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"countdown"'),s(`
    `),a("span",{class:"hljs-attr"},":auto-start"),s("="),a("span",{class:"hljs-string"},'"false"'),s(`
    `),a("span",{class:"hljs-attr"},"format"),s("="),a("span",{class:"hljs-string"},'"ss : SSS"'),s(`
    @`),a("span",{class:"hljs-attr"},"end"),s("="),a("span",{class:"hljs-string"},'"end"'),s(`
    @`),a("span",{class:"hljs-attr"},"change"),s("="),a("span",{class:"hljs-string"},'"change"'),s(`
  />`)]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-row"),s(),a("span",{class:"hljs-attr"},"justify"),s("="),a("span",{class:"hljs-string"},'"space-between"'),s(),a("span",{class:"hljs-attr"},"align"),s("="),a("span",{class:"hljs-string"},'"center"'),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"margin-top: 10px"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"$refs.countdown.start()"'),s(">")]),s("开始"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"$refs.countdown.pause()"'),s(">")]),s("暂停"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"$refs.countdown.reset()"'),s(">")]),s("重置"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),A=a("h2",null,"API",-1),E={class:"card"},I={id:"shu3xing4"},Z=e("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>time</code></td><td>倒计时时长（ms）</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>format</code></td><td>时间格式</td><td><em>string</em></td><td><code>HH : mm : ss</code></td></tr><tr><td><code>auto-start</code></td><td>是否自动开始倒计时</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table>",1),F={class:"card"},G={id:"fo0rma0tge2shi0"},J=e("<table><thead><tr><th>格式</th><th>说明</th></tr></thead><tbody><tr><td><code>DD</code></td><td>天数</td></tr><tr><td><code>HH</code></td><td>小时</td></tr><tr><td><code>mm</code></td><td>分钟</td></tr><tr><td><code>ss</code></td><td>秒数</td></tr><tr><td><code>S</code></td><td>毫秒（1位）</td></tr><tr><td><code>SS</code></td><td>毫秒（2位）</td></tr><tr><td><code>SSS</code></td><td>毫秒（3位）</td></tr></tbody></table>",1),K={class:"card"},L={id:"shi4jian4"},M=e("<table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td><code>end</code></td><td>倒计时结束时触发</td><td><code>-</code></td></tr><tr><td><code>change</code></td><td>倒计时变化时触发</td><td><code>timeData: TimeData</code></td></tr></tbody></table>",1),O={class:"card"},Q={id:"cha1cao2"},R=a("table",null,[a("thead",null,[a("tr",null,[a("th",null,"名称"),a("th",null,"说明"),a("th",null,"参数")])]),a("tbody",null,[a("tr",null,[a("td",null,[a("code",null,"default")]),a("td",null,"自定义内容"),a("td",null,[a("code",null,"timeData: TimeData")])])])],-1),U={class:"card"},W={id:"Ti0me0Da0ta0ge2shi0"},X=e("<table><thead><tr><th>名称</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td><code>days</code></td><td>剩余天数</td><td><code>number</code></td></tr><tr><td><code>hours</code></td><td>剩余小时</td><td><code>number</code></td></tr><tr><td><code>minutes</code></td><td>剩余分钟</td><td><code>number</code></td></tr><tr><td><code>seconds</code></td><td>剩余秒数</td><td><code>number</code></td></tr><tr><td><code>milliseconds</code></td><td>剩余毫秒</td><td><code>number</code></td></tr></tbody></table>",1),Y={class:"card"},ss={id:"fang1fa3"},as=e("<p>通过 ref 可以获取到 CountDown 实例并调用实例方法.</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>start</code></td><td>开始倒计时</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>pause</code></td><td>暂停倒计时</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>重设倒计时，若 <code>auto-start</code> 为 <code>true</code>，重设后会自动开始倒计时</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>",2),ts={class:"card"},ns={id:"yang4shi4bian4liang4"},ls=e('<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--countdown-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--countdown-text-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr></tbody></table>',2);function es(cs,ds,os,hs,rs,ps){const l=d("router-link"),c=d("var-site-code-example");return h(),r("div",i,[j,a("div",m,[a("h3",u,[t(l,{to:"#jie4shao4"},{default:n(()=>[s("#")]),_:1}),s("介绍")]),_]),a("div",g,[a("h3",b,[t(l,{to:"#ji1ben3shi3yong4"},{default:n(()=>[s("#")]),_:1}),s("基本使用")]),f,t(c,null,{default:n(()=>[y]),_:1})]),a("div",w,[a("h3",v,[t(l,{to:"#zi4ding4yi4ge2shi0"},{default:n(()=>[s("#")]),_:1}),s("自定义格式")]),k,t(c,null,{default:n(()=>[x]),_:1})]),a("div",S,[a("h3",D,[t(l,{to:"#xian3shi4hao2miao3"},{default:n(()=>[s("#")]),_:1}),s("显示毫秒")]),z,t(c,null,{default:n(()=>[H]),_:1})]),a("div",$,[a("h3",N,[t(l,{to:"#zi4ding4yi4yang4shi4"},{default:n(()=>[s("#")]),_:1}),s("自定义样式")]),T,t(c,null,{default:n(()=>[C]),_:1})]),a("div",V,[a("h3",B,[t(l,{to:"#shou3dong4kong4zhi4"},{default:n(()=>[s("#")]),_:1}),s("手动控制")]),P,t(c,null,{default:n(()=>[q]),_:1})]),A,a("div",E,[a("h3",I,[t(l,{to:"#shu3xing4"},{default:n(()=>[s("#")]),_:1}),s("属性")]),Z]),a("div",F,[a("h3",G,[t(l,{to:"#fo0rma0tge2shi0"},{default:n(()=>[s("#")]),_:1}),s("format 格式")]),J]),a("div",K,[a("h3",L,[t(l,{to:"#shi4jian4"},{default:n(()=>[s("#")]),_:1}),s("事件")]),M]),a("div",O,[a("h3",Q,[t(l,{to:"#cha1cao2"},{default:n(()=>[s("#")]),_:1}),s("插槽")]),R]),a("div",U,[a("h3",W,[t(l,{to:"#Ti0me0Da0ta0ge2shi0"},{default:n(()=>[s("#")]),_:1}),s("TimeData 格式")]),X]),a("div",Y,[a("h3",ss,[t(l,{to:"#fang1fa3"},{default:n(()=>[s("#")]),_:1}),s("方法")]),as]),a("div",ts,[a("h3",ns,[t(l,{to:"#yang4shi4bian4liang4"},{default:n(()=>[s("#")]),_:1}),s("样式变量")]),ls])])}const js=o(p,[["render",es]]);export{js as default};
