import{b as p,m as c,p as t,q as l,Q as s,w as n,$ as e,e as r,h}from"./index-DtCrA0ro.js";const i={components:{}},j={class:"varlet-site-doc"},m={class:"card"},u={id:"jie4shao4"},g={class:"card"},b={id:"ji1ben3shi3yong4"},f={class:"card"},y={id:"zi4ding4yi4ge2shi0"},v={class:"card"},w={id:"xian3shi4hao2miao3"},k={class:"card"},x={id:"zi4ding4yi4yang4shi4"},S={class:"card"},D={id:"shou3dong4kong4zhi4"},z={class:"card"},H={id:"shu3xing4"},N={class:"card"},T={id:"fo0rma0tge2shi0"},C={class:"card"},$={id:"shi4jian4"},V={class:"card"},B={id:"cha1cao2"},P={class:"card"},q={id:"Ti0me0Da0ta0ge2shi0"},A={class:"card"},E={id:"fang1fa3"},I={class:"card"},Q={id:"yang4shi4bian4liang4"};function F(G,a,J,K,L,M){const d=r("router-link"),o=r("var-site-code-example");return h(),c("div",j,[a[44]||(a[44]=t("h1",null,"倒计时",-1)),t("div",m,[t("h3",u,[l(d,{to:"#jie4shao4"},{default:n(()=>[...a[0]||(a[0]=[s("#",-1)])]),_:1}),a[1]||(a[1]=s("介绍",-1))]),a[2]||(a[2]=t("p",null,"用于实时展示倒计时数值，支持毫秒精度。",-1))]),t("div",g,[t("h3",b,[l(d,{to:"#ji1ben3shi3yong4"},{default:n(()=>[...a[3]||(a[3]=[s("#",-1)])]),_:1}),a[4]||(a[4]=s("基本使用",-1))]),a[6]||(a[6]=t("p",null,[t("code",null,"time"),s(" 属性表示倒计时总时长，单位为毫秒。")],-1)),l(o,null,{default:n(()=>[...a[5]||(a[5]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" time = ref("),t("span",{class:"hljs-number"},"30"),s(" * "),t("span",{class:"hljs-number"},"60"),s(" * "),t("span",{class:"hljs-number"},"60"),s(" * "),t("span",{class:"hljs-number"},"1000"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-countdown"),s(),t("span",{class:"hljs-attr"},":time"),s("="),t("span",{class:"hljs-string"},'"time"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),t("div",f,[t("h3",y,[l(d,{to:"#zi4ding4yi4ge2shi0"},{default:n(()=>[...a[7]||(a[7]=[s("#",-1)])]),_:1}),a[8]||(a[8]=s("自定义格式",-1))]),a[10]||(a[10]=t("p",null,[s("通过 "),t("code",null,"format"),s(" 属性设置倒计时文本的内容。")],-1)),l(o,null,{default:n(()=>[...a[9]||(a[9]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" time = ref("),t("span",{class:"hljs-number"},"30"),s(" * "),t("span",{class:"hljs-number"},"60"),s(" * "),t("span",{class:"hljs-number"},"60"),s(" * "),t("span",{class:"hljs-number"},"1000"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-countdown"),s(),t("span",{class:"hljs-attr"},":time"),s("="),t("span",{class:"hljs-string"},'"time"'),s(),t("span",{class:"hljs-attr"},"format"),s("="),t("span",{class:"hljs-string"},'"DD 天 HH 时 mm 分 ss 秒"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),t("div",v,[t("h3",w,[l(d,{to:"#xian3shi4hao2miao3"},{default:n(()=>[...a[11]||(a[11]=[s("#",-1)])]),_:1}),a[12]||(a[12]=s("显示毫秒",-1))]),a[14]||(a[14]=t("p",null,[s("通过 "),t("code",null,"S"),s(" 文本显示毫秒。")],-1)),l(o,null,{default:n(()=>[...a[13]||(a[13]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" time = ref("),t("span",{class:"hljs-number"},"30"),s(" * "),t("span",{class:"hljs-number"},"60"),s(" * "),t("span",{class:"hljs-number"},"60"),s(" * "),t("span",{class:"hljs-number"},"1000"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-countdown"),s(),t("span",{class:"hljs-attr"},":time"),s("="),t("span",{class:"hljs-string"},'"time"'),s(),t("span",{class:"hljs-attr"},"format"),s("="),t("span",{class:"hljs-string"},'"HH:mm:ss:SS"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),t("div",k,[t("h3",x,[l(d,{to:"#zi4ding4yi4yang4shi4"},{default:n(()=>[...a[15]||(a[15]=[s("#",-1)])]),_:1}),a[16]||(a[16]=s("自定义样式",-1))]),a[18]||(a[18]=t("p",null,[s("通过插槽自定义倒计时的样式，"),t("code",null,"timeData"),s(" 对象格式见下方表格。")],-1)),l(o,null,{default:n(()=>[...a[17]||(a[17]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-countdown"),s(),t("span",{class:"hljs-attr"},":time"),s("="),t("span",{class:"hljs-string"},'"108000000"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(" #"),t("span",{class:"hljs-attr"},"default"),s("="),t("span",{class:"hljs-string"},'"{ hours, minutes, seconds }"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"span"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"countdown-example-block"'),s(">")]),s("{{ hours }}"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"span"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"span"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"countdown-example-colon"'),s(">")]),s(":"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"span"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"span"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"countdown-example-block"'),s(">")]),s("{{ minutes }}"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"span"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"span"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"countdown-example-colon"'),s(">")]),s(":"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"span"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"span"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"countdown-example-block"'),s(">")]),s("{{ seconds }}"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"span"),s(">")]),s(`
     `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-countdown"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"style"),s(">")]),t("span",{class:"css"},[s(`
`),t("span",{class:"hljs-selector-class"},".countdown-example-block"),s(` {
  `),t("span",{class:"hljs-attribute"},"background"),s(": "),t("span",{class:"hljs-built_in"},"var"),s(`(--color-primary);
  `),t("span",{class:"hljs-attribute"},"color"),s(": "),t("span",{class:"hljs-built_in"},"var"),s(`(--color-on-primary);
  `),t("span",{class:"hljs-attribute"},"width"),s(": "),t("span",{class:"hljs-number"},"30px"),s(`;
  `),t("span",{class:"hljs-attribute"},"height"),s(": "),t("span",{class:"hljs-number"},"30px"),s(`;
  `),t("span",{class:"hljs-attribute"},"border-radius"),s(": "),t("span",{class:"hljs-number"},"50%"),s(`;
  `),t("span",{class:"hljs-attribute"},"padding"),s(": "),t("span",{class:"hljs-number"},"18px"),s(`;
  `),t("span",{class:"hljs-attribute"},"display"),s(`: inline-flex;
  `),t("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),t("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
}

`),t("span",{class:"hljs-selector-class"},".countdown-example-colon"),s(` {
  `),t("span",{class:"hljs-attribute"},"margin"),s(": "),t("span",{class:"hljs-number"},"0"),s(),t("span",{class:"hljs-number"},"5px"),s(`;
  `),t("span",{class:"hljs-attribute"},"font-size"),s(": "),t("span",{class:"hljs-number"},"18px"),s(`;
  `),t("span",{class:"hljs-attribute"},"font-weight"),s(": "),t("span",{class:"hljs-number"},"500"),s(`;
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1)])]),_:1})]),t("div",S,[t("h3",D,[l(d,{to:"#shou3dong4kong4zhi4"},{default:n(()=>[...a[19]||(a[19]=[s("#",-1)])]),_:1}),a[20]||(a[20]=s("手动控制",-1))]),a[22]||(a[22]=t("p",null,[s("通过 ref 获取到组件实例后，可以调用 "),t("code",null,"start"),s("、"),t("code",null,"pause"),s("、"),t("code",null,"reset"),s(" 方法。")],-1)),l(o,null,{default:n(()=>[...a[21]||(a[21]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Snackbar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" countdown = ref("),t("span",{class:"hljs-literal"},"null"),s(`)

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"end"),s("("),t("span",{class:"hljs-params"}),s(") ")]),s(`{
  Snackbar.info(`),t("span",{class:"hljs-string"},"'end!'"),s(`)
}

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"change"),s("("),t("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),t("span",{class:"hljs-built_in"},"console"),s(".log("),t("span",{class:"hljs-string"},"'change'"),s(`)
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-countdown"),s(`
    `),t("span",{class:"hljs-attr"},"time"),s("="),t("span",{class:"hljs-string"},'"3000"'),s(`
    `),t("span",{class:"hljs-attr"},"ref"),s("="),t("span",{class:"hljs-string"},'"countdown"'),s(`
    `),t("span",{class:"hljs-attr"},":auto-start"),s("="),t("span",{class:"hljs-string"},'"false"'),s(`
    `),t("span",{class:"hljs-attr"},"format"),s("="),t("span",{class:"hljs-string"},'"ss : SSS"'),s(`
    @`),t("span",{class:"hljs-attr"},"end"),s("="),t("span",{class:"hljs-string"},'"end"'),s(`
    @`),t("span",{class:"hljs-attr"},"change"),s("="),t("span",{class:"hljs-string"},'"change"'),s(`
  />`)]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-row"),s(),t("span",{class:"hljs-attr"},"justify"),s("="),t("span",{class:"hljs-string"},'"space-between"'),s(),t("span",{class:"hljs-attr"},"align"),s("="),t("span",{class:"hljs-string"},'"center"'),s(),t("span",{class:"hljs-attr"},"style"),s("="),t("span",{class:"hljs-string"},'"margin-top: 10px"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"countdown.start()"'),s(">")]),s("开始"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"countdown.pause()"'),s(">")]),s("暂停"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"countdown.reset()"'),s(">")]),s("重置"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a[45]||(a[45]=t("h2",null,"API",-1)),t("div",z,[t("h3",H,[l(d,{to:"#shu3xing4"},{default:n(()=>[...a[23]||(a[23]=[s("#",-1)])]),_:1}),a[24]||(a[24]=s("属性",-1))]),a[25]||(a[25]=e("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>time</code></td><td>倒计时时长（ms）</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>format</code></td><td>时间格式</td><td><em>string</em></td><td><code>HH : mm : ss</code></td></tr><tr><td><code>auto-start</code></td><td>是否自动开始倒计时</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table>",1))]),t("div",N,[t("h3",T,[l(d,{to:"#fo0rma0tge2shi0"},{default:n(()=>[...a[26]||(a[26]=[s("#",-1)])]),_:1}),a[27]||(a[27]=s("format 格式",-1))]),a[28]||(a[28]=e("<table><thead><tr><th>格式</th><th>说明</th></tr></thead><tbody><tr><td><code>DD</code></td><td>天数</td></tr><tr><td><code>HH</code></td><td>小时</td></tr><tr><td><code>mm</code></td><td>分钟</td></tr><tr><td><code>ss</code></td><td>秒数</td></tr><tr><td><code>S</code></td><td>毫秒（1位）</td></tr><tr><td><code>SS</code></td><td>毫秒（2位）</td></tr><tr><td><code>SSS</code></td><td>毫秒（3位）</td></tr></tbody></table>",1))]),t("div",C,[t("h3",$,[l(d,{to:"#shi4jian4"},{default:n(()=>[...a[29]||(a[29]=[s("#",-1)])]),_:1}),a[30]||(a[30]=s("事件",-1))]),a[31]||(a[31]=e("<table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td><code>end</code></td><td>倒计时结束时触发</td><td><code>-</code></td></tr><tr><td><code>change</code></td><td>倒计时变化时触发</td><td><code>timeData: TimeData</code></td></tr></tbody></table>",1))]),t("div",V,[t("h3",B,[l(d,{to:"#cha1cao2"},{default:n(()=>[...a[32]||(a[32]=[s("#",-1)])]),_:1}),a[33]||(a[33]=s("插槽",-1))]),a[34]||(a[34]=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"名称"),t("th",null,"说明"),t("th",null,"参数")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("code",null,"default")]),t("td",null,"自定义内容"),t("td",null,[t("code",null,"timeData: TimeData")])])])],-1))]),t("div",P,[t("h3",q,[l(d,{to:"#Ti0me0Da0ta0ge2shi0"},{default:n(()=>[...a[35]||(a[35]=[s("#",-1)])]),_:1}),a[36]||(a[36]=s("TimeData 格式",-1))]),a[37]||(a[37]=e("<table><thead><tr><th>名称</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td><code>days</code></td><td>剩余天数</td><td><code>number</code></td></tr><tr><td><code>hours</code></td><td>剩余小时</td><td><code>number</code></td></tr><tr><td><code>minutes</code></td><td>剩余分钟</td><td><code>number</code></td></tr><tr><td><code>seconds</code></td><td>剩余秒数</td><td><code>number</code></td></tr><tr><td><code>milliseconds</code></td><td>剩余毫秒</td><td><code>number</code></td></tr></tbody></table>",1))]),t("div",A,[t("h3",E,[l(d,{to:"#fang1fa3"},{default:n(()=>[...a[38]||(a[38]=[s("#",-1)])]),_:1}),a[39]||(a[39]=s("方法",-1))]),a[40]||(a[40]=e("<p>通过 ref 可以获取到 CountDown 实例并调用实例方法.</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>start</code></td><td>开始倒计时</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>pause</code></td><td>暂停倒计时</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>重设倒计时，若 <code>auto-start</code> 为 <code>true</code>，重设后会自动开始倒计时</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>",2))]),t("div",I,[t("h3",Q,[l(d,{to:"#yang4shi4bian4liang4"},{default:n(()=>[...a[41]||(a[41]=[s("#",-1)])]),_:1}),a[42]||(a[42]=s("样式变量",-1))]),a[43]||(a[43]=e('<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--countdown-text-color</code></td><td><code>var(--color-text)</code></td></tr><tr><td><code>--countdown-text-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr></tbody></table>',2))])])}const R=p(i,[["render",F]]);export{R as default};
