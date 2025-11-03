import{_ as d,b as o,e as r,m as h,p as t,q as a,w as n,P as s,Z as e}from"./index-vwO9GBzB.js";const p={components:{}},i={class:"varlet-site-doc"},j=t("h1",null,"Countdown",-1),u={class:"card"},m={id:"Intro"},_=t("p",null,"For real-time display of countdown values, support millisecond precision.",-1),g={class:"card"},b={id:"BasicUsage"},f=t("p",null,[s("Use "),t("code",null,"time"),s(" to set countdown time(ms).")],-1),w=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" time = ref("),t("span",{class:"hljs-number"},"30"),s(" * "),t("span",{class:"hljs-number"},"60"),s(" * "),t("span",{class:"hljs-number"},"60"),s(" * "),t("span",{class:"hljs-number"},"1000"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-countdown"),s(),t("span",{class:"hljs-attr"},":time"),s("="),t("span",{class:"hljs-string"},'"time"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y={class:"card"},v={id:"CustomFormat"},S=t("p",null,[s("Use "),t("code",null,"format"),s(" to set time text.")],-1),k=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" time = ref("),t("span",{class:"hljs-number"},"30"),s(" * "),t("span",{class:"hljs-number"},"60"),s(" * "),t("span",{class:"hljs-number"},"60"),s(" * "),t("span",{class:"hljs-number"},"1000"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-countdown"),s(),t("span",{class:"hljs-attr"},":time"),s("="),t("span",{class:"hljs-string"},'"time"'),s(),t("span",{class:"hljs-attr"},"format"),s("="),t("span",{class:"hljs-string"},'"DD Day, HH:mm:ss"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),x={class:"card"},D={id:"ShowMillisecond"},C=t("p",null,[s("Use "),t("code",null,"S"),s(" text to show millisecond.")],-1),M=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" time = ref("),t("span",{class:"hljs-number"},"30"),s(" * "),t("span",{class:"hljs-number"},"60"),s(" * "),t("span",{class:"hljs-number"},"60"),s(" * "),t("span",{class:"hljs-number"},"1000"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-countdown"),s(),t("span",{class:"hljs-attr"},":time"),s("="),t("span",{class:"hljs-string"},'"time"'),s(),t("span",{class:"hljs-attr"},"format"),s("="),t("span",{class:"hljs-string"},'"HH:mm:ss:SS"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),U={class:"card"},H={id:"CustomStyle"},T=t("p",null,[s("Use "),t("code",null,"slot"),s(" to set custom countdown style.")],-1),P=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
  `),t("span",{class:"hljs-attribute"},"background"),s(": "),t("span",{class:"hljs-number"},"#ff9f00"),s(`;
  `),t("span",{class:"hljs-attribute"},"color"),s(`: white;
  `),t("span",{class:"hljs-attribute"},"width"),s(": "),t("span",{class:"hljs-number"},"30px"),s(`;
  `),t("span",{class:"hljs-attribute"},"height"),s(": "),t("span",{class:"hljs-number"},"30px"),s(`;
  `),t("span",{class:"hljs-attribute"},"border-radius"),s(": "),t("span",{class:"hljs-number"},"50%"),s(`;
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
`)])],-1),V={class:"card"},E={id:"ManualControl"},R=t("p",null,[s("Use "),t("code",null,"ref"),s(" to get countdown instance, you can call the "),t("code",null,"start"),s(", "),t("code",null,"pause"),s(", and "),t("code",null,"reset"),s(" methods.")],-1),$=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
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
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"$refs.countdown.start()"'),s(">")]),s("start"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"$refs.countdown.pause()"'),s(">")]),s("pause"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"$refs.countdown.reset()"'),s(">")]),s("reset"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-row"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),B=t("h2",null,"API",-1),N={class:"card"},F={id:"Props"},z=e("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>time</code></td><td>Total time(ms)</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>format</code></td><td>Time format</td><td><em>string</em></td><td><code>HH : mm : ss</code></td></tr><tr><td><code>auto-start</code></td><td>Whether to auto start count down</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table>",1),A={class:"card"},I={id:"Availableformats"},q=e("<table><thead><tr><th>Format</th><th>Description</th></tr></thead><tbody><tr><td><code>DD</code></td><td>Day</td></tr><tr><td><code>HH</code></td><td>Hour</td></tr><tr><td><code>mm</code></td><td>Minute</td></tr><tr><td><code>ss</code></td><td>Second</td></tr><tr><td><code>S</code></td><td>Millisecond, 1-digit</td></tr><tr><td><code>SS</code></td><td>Millisecond, 2-digit</td></tr><tr><td><code>SSS</code></td><td>Millisecond, 3-digit</td></tr></tbody></table>",1),W={class:"card"},Z={id:"Events"},G=e("<table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>end</code></td><td>Emitted after countdown ended</td><td><code>-</code></td></tr><tr><td><code>change</code></td><td>Emitted after countdown changed</td><td><code>timeData: TimeData</code></td></tr></tbody></table>",1),J={class:"card"},K={id:"Slots"},L=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Description"),t("th",null,"SlotProps")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("code",null,"default")]),t("td",null,"Custom content"),t("td",null,[t("code",null,"timeData: TimeData")])])])],-1),O={class:"card"},Q={id:"TimeDataStructure"},X=e("<table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td><code>days</code></td><td>Remain days</td><td><code>number</code></td></tr><tr><td><code>hours</code></td><td>Remain hours</td><td><code>number</code></td></tr><tr><td><code>minutes</code></td><td>Remain minutes</td><td><code>number</code></td></tr><tr><td><code>seconds</code></td><td>Remain seconds</td><td><code>number</code></td></tr><tr><td><code>milliseconds</code></td><td>Remain milliseconds</td><td><code>number</code></td></tr></tbody></table>",1),Y={class:"card"},ss={id:"Methods"},ts=e("<p>Use ref to get CountDown instance and call instance methods.</p><table><thead><tr><th>Method</th><th>Description</th><th>arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>start</code></td><td>Start countdown</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>pause</code></td><td>Pause countdown</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Reset countdown</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>",2),as={class:"card"},ns={id:"StyleVariables"},ls=e('<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--countdown-text-color</code></td><td><code>#555</code></td></tr><tr><td><code>--countdown-text-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr></tbody></table>',2);function es(cs,os,ds,rs,hs,ps){const l=o("router-link"),c=o("var-site-code-example");return r(),h("div",i,[j,t("div",u,[t("h3",m,[a(l,{to:"#Intro"},{default:n(()=>[s("#")]),_:1}),s("Intro")]),_]),t("div",g,[t("h3",b,[a(l,{to:"#BasicUsage"},{default:n(()=>[s("#")]),_:1}),s("Basic Usage")]),f,a(c,null,{default:n(()=>[w]),_:1})]),t("div",y,[t("h3",v,[a(l,{to:"#CustomFormat"},{default:n(()=>[s("#")]),_:1}),s("Custom Format")]),S,a(c,null,{default:n(()=>[k]),_:1})]),t("div",x,[t("h3",D,[a(l,{to:"#ShowMillisecond"},{default:n(()=>[s("#")]),_:1}),s("Show Millisecond")]),C,a(c,null,{default:n(()=>[M]),_:1})]),t("div",U,[t("h3",H,[a(l,{to:"#CustomStyle"},{default:n(()=>[s("#")]),_:1}),s("Custom Style")]),T,a(c,null,{default:n(()=>[P]),_:1})]),t("div",V,[t("h3",E,[a(l,{to:"#ManualControl"},{default:n(()=>[s("#")]),_:1}),s("Manual Control")]),R,a(c,null,{default:n(()=>[$]),_:1})]),B,t("div",N,[t("h3",F,[a(l,{to:"#Props"},{default:n(()=>[s("#")]),_:1}),s("Props")]),z]),t("div",A,[t("h3",I,[a(l,{to:"#Availableformats"},{default:n(()=>[s("#")]),_:1}),s("Available formats")]),q]),t("div",W,[t("h3",Z,[a(l,{to:"#Events"},{default:n(()=>[s("#")]),_:1}),s("Events")]),G]),t("div",J,[t("h3",K,[a(l,{to:"#Slots"},{default:n(()=>[s("#")]),_:1}),s("Slots")]),L]),t("div",O,[t("h3",Q,[a(l,{to:"#TimeDataStructure"},{default:n(()=>[s("#")]),_:1}),s("TimeData Structure")]),X]),t("div",Y,[t("h3",ss,[a(l,{to:"#Methods"},{default:n(()=>[s("#")]),_:1}),s("Methods")]),ts]),t("div",as,[t("h3",ns,[a(l,{to:"#StyleVariables"},{default:n(()=>[s("#")]),_:1}),s("Style Variables")]),ls])])}const js=d(p,[["render",es]]);export{js as default};
