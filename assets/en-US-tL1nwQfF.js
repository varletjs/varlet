import{b as c,m as p,p as t,q as l,Q as s,w as n,$ as o,e as r,h as i}from"./index-DtCrA0ro.js";const h={components:{}},j={class:"varlet-site-doc"},u={class:"card"},m={id:"Intro"},g={class:"card"},b={id:"BasicUsage"},f={class:"card"},w={id:"CustomFormat"},y={class:"card"},v={id:"ShowMillisecond"},S={class:"card"},k={id:"CustomStyle"},x={class:"card"},D={id:"ManualControl"},C={class:"card"},M={id:"Props"},U={class:"card"},H={id:"Availableformats"},T={class:"card"},P={id:"Events"},R={class:"card"},V={id:"Slots"},E={class:"card"},A={id:"TimeDataStructure"},B={class:"card"},N={id:"Methods"},F={class:"card"},$={id:"StyleVariables"};function z(I,a,q,Q,W,G){const e=r("router-link"),d=r("var-site-code-example");return i(),p("div",j,[a[44]||(a[44]=t("h1",null,"Countdown",-1)),t("div",u,[t("h3",m,[l(e,{to:"#Intro"},{default:n(()=>[...a[0]||(a[0]=[s("#",-1)])]),_:1}),a[1]||(a[1]=s("Intro",-1))]),a[2]||(a[2]=t("p",null,"For real-time display of countdown values, support millisecond precision.",-1))]),t("div",g,[t("h3",b,[l(e,{to:"#BasicUsage"},{default:n(()=>[...a[3]||(a[3]=[s("#",-1)])]),_:1}),a[4]||(a[4]=s("Basic Usage",-1))]),a[6]||(a[6]=t("p",null,[s("Use "),t("code",null,"time"),s(" to set countdown time(ms).")],-1)),l(d,null,{default:n(()=>[...a[5]||(a[5]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" time = ref("),t("span",{class:"hljs-number"},"30"),s(" * "),t("span",{class:"hljs-number"},"60"),s(" * "),t("span",{class:"hljs-number"},"60"),s(" * "),t("span",{class:"hljs-number"},"1000"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-countdown"),s(),t("span",{class:"hljs-attr"},":time"),s("="),t("span",{class:"hljs-string"},'"time"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),t("div",f,[t("h3",w,[l(e,{to:"#CustomFormat"},{default:n(()=>[...a[7]||(a[7]=[s("#",-1)])]),_:1}),a[8]||(a[8]=s("Custom Format",-1))]),a[10]||(a[10]=t("p",null,[s("Use "),t("code",null,"format"),s(" to set time text.")],-1)),l(d,null,{default:n(()=>[...a[9]||(a[9]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" time = ref("),t("span",{class:"hljs-number"},"30"),s(" * "),t("span",{class:"hljs-number"},"60"),s(" * "),t("span",{class:"hljs-number"},"60"),s(" * "),t("span",{class:"hljs-number"},"1000"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-countdown"),s(),t("span",{class:"hljs-attr"},":time"),s("="),t("span",{class:"hljs-string"},'"time"'),s(),t("span",{class:"hljs-attr"},"format"),s("="),t("span",{class:"hljs-string"},'"DD Day, HH:mm:ss"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),t("div",y,[t("h3",v,[l(e,{to:"#ShowMillisecond"},{default:n(()=>[...a[11]||(a[11]=[s("#",-1)])]),_:1}),a[12]||(a[12]=s("Show Millisecond",-1))]),a[14]||(a[14]=t("p",null,[s("Use "),t("code",null,"S"),s(" text to show millisecond.")],-1)),l(d,null,{default:n(()=>[...a[13]||(a[13]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" time = ref("),t("span",{class:"hljs-number"},"30"),s(" * "),t("span",{class:"hljs-number"},"60"),s(" * "),t("span",{class:"hljs-number"},"60"),s(" * "),t("span",{class:"hljs-number"},"1000"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-countdown"),s(),t("span",{class:"hljs-attr"},":time"),s("="),t("span",{class:"hljs-string"},'"time"'),s(),t("span",{class:"hljs-attr"},"format"),s("="),t("span",{class:"hljs-string"},'"HH:mm:ss:SS"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),t("div",S,[t("h3",k,[l(e,{to:"#CustomStyle"},{default:n(()=>[...a[15]||(a[15]=[s("#",-1)])]),_:1}),a[16]||(a[16]=s("Custom Style",-1))]),a[18]||(a[18]=t("p",null,[s("Use "),t("code",null,"slot"),s(" to set custom countdown style.")],-1)),l(d,null,{default:n(()=>[...a[17]||(a[17]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1)])]),_:1})]),t("div",x,[t("h3",D,[l(e,{to:"#ManualControl"},{default:n(()=>[...a[19]||(a[19]=[s("#",-1)])]),_:1}),a[20]||(a[20]=s("Manual Control",-1))]),a[22]||(a[22]=t("p",null,[s("Use "),t("code",null,"ref"),s(" to get countdown instance, you can call the "),t("code",null,"start"),s(", "),t("code",null,"pause"),s(", and "),t("code",null,"reset"),s(" methods.")],-1)),l(d,null,{default:n(()=>[...a[21]||(a[21]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
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
    `),t("span",{class:"hljs-attr"},"format"),s("="),t("span",{class:"hljs-string"},'"ss : SSS"'),s(`
    `),t("span",{class:"hljs-attr"},":auto-start"),s("="),t("span",{class:"hljs-string"},'"false"'),s(`
    @`),t("span",{class:"hljs-attr"},"end"),s("="),t("span",{class:"hljs-string"},'"end"'),s(`
    @`),t("span",{class:"hljs-attr"},"change"),s("="),t("span",{class:"hljs-string"},'"change"'),s(`
  />`)]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-row"),s(),t("span",{class:"hljs-attr"},"justify"),s("="),t("span",{class:"hljs-string"},'"space-between"'),s(),t("span",{class:"hljs-attr"},"align"),s("="),t("span",{class:"hljs-string"},'"center"'),s(),t("span",{class:"hljs-attr"},"style"),s("="),t("span",{class:"hljs-string"},'"margin-top: 10px"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"countdown.start()"'),s(">")]),s("Start"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"countdown.pause()"'),s(">")]),s("Pause"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"countdown.reset()"'),s(">")]),s("Reset"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a[45]||(a[45]=t("h2",null,"API",-1)),t("div",C,[t("h3",M,[l(e,{to:"#Props"},{default:n(()=>[...a[23]||(a[23]=[s("#",-1)])]),_:1}),a[24]||(a[24]=s("Props",-1))]),a[25]||(a[25]=o("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>time</code></td><td>Total time(ms)</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>format</code></td><td>Time format</td><td><em>string</em></td><td><code>HH : mm : ss</code></td></tr><tr><td><code>auto-start</code></td><td>Whether to auto start count down</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table>",1))]),t("div",U,[t("h3",H,[l(e,{to:"#Availableformats"},{default:n(()=>[...a[26]||(a[26]=[s("#",-1)])]),_:1}),a[27]||(a[27]=s("Available formats",-1))]),a[28]||(a[28]=o("<table><thead><tr><th>Format</th><th>Description</th></tr></thead><tbody><tr><td><code>DD</code></td><td>Day</td></tr><tr><td><code>HH</code></td><td>Hour</td></tr><tr><td><code>mm</code></td><td>Minute</td></tr><tr><td><code>ss</code></td><td>Second</td></tr><tr><td><code>S</code></td><td>Millisecond, 1-digit</td></tr><tr><td><code>SS</code></td><td>Millisecond, 2-digit</td></tr><tr><td><code>SSS</code></td><td>Millisecond, 3-digit</td></tr></tbody></table>",1))]),t("div",T,[t("h3",P,[l(e,{to:"#Events"},{default:n(()=>[...a[29]||(a[29]=[s("#",-1)])]),_:1}),a[30]||(a[30]=s("Events",-1))]),a[31]||(a[31]=o("<table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>end</code></td><td>Emitted after countdown ended</td><td><code>-</code></td></tr><tr><td><code>change</code></td><td>Emitted after countdown changed</td><td><code>timeData: TimeData</code></td></tr></tbody></table>",1))]),t("div",R,[t("h3",V,[l(e,{to:"#Slots"},{default:n(()=>[...a[32]||(a[32]=[s("#",-1)])]),_:1}),a[33]||(a[33]=s("Slots",-1))]),a[34]||(a[34]=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Description"),t("th",null,"SlotProps")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("code",null,"default")]),t("td",null,"Custom content"),t("td",null,[t("code",null,"timeData: TimeData")])])])],-1))]),t("div",E,[t("h3",A,[l(e,{to:"#TimeDataStructure"},{default:n(()=>[...a[35]||(a[35]=[s("#",-1)])]),_:1}),a[36]||(a[36]=s("TimeData Structure",-1))]),a[37]||(a[37]=o("<table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td><code>days</code></td><td>Remain days</td><td><code>number</code></td></tr><tr><td><code>hours</code></td><td>Remain hours</td><td><code>number</code></td></tr><tr><td><code>minutes</code></td><td>Remain minutes</td><td><code>number</code></td></tr><tr><td><code>seconds</code></td><td>Remain seconds</td><td><code>number</code></td></tr><tr><td><code>milliseconds</code></td><td>Remain milliseconds</td><td><code>number</code></td></tr></tbody></table>",1))]),t("div",B,[t("h3",N,[l(e,{to:"#Methods"},{default:n(()=>[...a[38]||(a[38]=[s("#",-1)])]),_:1}),a[39]||(a[39]=s("Methods",-1))]),a[40]||(a[40]=o("<p>Use ref to get CountDown instance and call instance methods.</p><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>start</code></td><td>Start countdown</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>pause</code></td><td>Pause countdown</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Reset countdown</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>",2))]),t("div",F,[t("h3",$,[l(e,{to:"#StyleVariables"},{default:n(()=>[...a[41]||(a[41]=[s("#",-1)])]),_:1}),a[42]||(a[42]=s("Style Variables",-1))]),a[43]||(a[43]=o('<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--countdown-text-color</code></td><td><code>var(--color-text)</code></td></tr><tr><td><code>--countdown-text-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr></tbody></table>',2))])])}const K=c(h,[["render",z]]);export{K as default};
