import{_ as d,b as c,e as r,m as h,p as s,q as t,w as a,P as l,Z as o}from"./index-vwO9GBzB.js";const i={components:{}},p={class:"varlet-site-doc"},u=s("h1",null,"PullRefresh",-1),j={class:"card"},f={id:"Intro"},m=s("p",null,"Provides a drop-down refresh interaction.",-1),g={class:"card"},_={id:"BasicUsage"},v=s("p",null,[l("The refresh event will be Emitted when pull refresh, you should set "),s("code",null,"v-model"),l(" to "),s("code",null,"true"),l(" at the beginning of the event indicates that loading is under way, and setting "),s("code",null,"v-model"),l(" to "),s("code",null,"false"),l(" after completion indicates that loading is over.")],-1),b=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"script"),l(),s("span",{class:"hljs-attr"},"setup"),l(">")]),s("span",{class:"javascript"},[l(`
`),s("span",{class:"hljs-keyword"},"import"),l(" { ref } "),s("span",{class:"hljs-keyword"},"from"),l(),s("span",{class:"hljs-string"},"'vue'"),l(`

`),s("span",{class:"hljs-keyword"},"const"),l(" data1 = "),s("span",{class:"hljs-built_in"},"Array"),l("("),s("span",{class:"hljs-number"},"30"),l(").fill("),s("span",{class:"hljs-string"},"'List Item'"),l(`)
`),s("span",{class:"hljs-keyword"},"const"),l(" data2 = "),s("span",{class:"hljs-built_in"},"Array"),l("("),s("span",{class:"hljs-number"},"30"),l(").fill("),s("span",{class:"hljs-string"},"'This is new List Item'"),l(`)
`),s("span",{class:"hljs-keyword"},"const"),l(" isRefresh = ref("),s("span",{class:"hljs-literal"},"false"),l(`)
`),s("span",{class:"hljs-keyword"},"const"),l(` data = ref(data1)

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title"},"refresh"),l("("),s("span",{class:"hljs-params"}),l(") ")]),l(`{
  `),s("span",{class:"hljs-built_in"},"setTimeout"),l("("),s("span",{class:"hljs-function"},"() =>"),l(` {
    data.value = data.value[`),s("span",{class:"hljs-number"},"0"),l("] === "),s("span",{class:"hljs-string"},"'List Item'"),l(` ? data2 : data1
    isRefresh.value = `),s("span",{class:"hljs-literal"},"false"),l(`
  }, `),s("span",{class:"hljs-number"},"2000"),l(`)
}
`)]),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"script"),l(">")]),l(`

`),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"template"),l(">")]),l(`
  `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-pull-refresh"),l(),s("span",{class:"hljs-attr"},"v-model"),l("="),s("span",{class:"hljs-string"},'"isRefresh"'),l(" @"),s("span",{class:"hljs-attr"},"refresh"),l("="),s("span",{class:"hljs-string"},'"refresh"'),l(">")]),l(`
    `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-cell"),l(`
      `),s("span",{class:"hljs-attr"},"v-for"),l("="),s("span",{class:"hljs-string"},'"(item, index) in data"'),l(`
      `),s("span",{class:"hljs-attr"},":key"),l("="),s("span",{class:"hljs-string"},'"index"'),l(`
      `),s("span",{class:"hljs-attr"},"border"),l(`
    >`)]),l(`
      {{ item + ' ' + (index + 1) }}
    `),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"var-cell"),l(">")]),l(`
  `),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"var-pull-refresh"),l(">")]),l(`
`),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"template"),l(">")]),l(`
`)])],-1),y={class:"card"},w={id:"Combine"},k=s("p",null,[l("Combined with the "),s("code",null,"List"),l(" component to implement the function of pull-up loading and pull-down refresh, ensuring the height of the "),s("code",null,"PullRefresh"),l(" is not "),s("code",null,"0"),l(" .")],-1),x=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"script"),l(),s("span",{class:"hljs-attr"},"setup"),l(">")]),s("span",{class:"javascript"},[l(`
`),s("span",{class:"hljs-keyword"},"import"),l(" { ref } "),s("span",{class:"hljs-keyword"},"from"),l(),s("span",{class:"hljs-string"},"'vue'"),l(`

`),s("span",{class:"hljs-keyword"},"const"),l(" refreshing = ref("),s("span",{class:"hljs-literal"},"false"),l(`)
`),s("span",{class:"hljs-keyword"},"const"),l(" loading = ref("),s("span",{class:"hljs-literal"},"false"),l(`)
`),s("span",{class:"hljs-keyword"},"const"),l(` list = ref([])

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title"},"refresh"),l("("),s("span",{class:"hljs-params"}),l(") ")]),l(`{
  `),s("span",{class:"hljs-built_in"},"setTimeout"),l("("),s("span",{class:"hljs-function"},"() =>"),l(` {
    `),s("span",{class:"hljs-built_in"},"console"),l(".log("),s("span",{class:"hljs-string"},"'refresh'"),l(`)
    refreshing.value = `),s("span",{class:"hljs-literal"},"false"),l(`
  }, `),s("span",{class:"hljs-number"},"2000"),l(`)
}

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),l(),s("span",{class:"hljs-title"},"load"),l("("),s("span",{class:"hljs-params"}),l(") ")]),l(`{
  `),s("span",{class:"hljs-built_in"},"setTimeout"),l("("),s("span",{class:"hljs-function"},"() =>"),l(` {
    `),s("span",{class:"hljs-keyword"},"for"),l(" ("),s("span",{class:"hljs-keyword"},"let"),l(" i = "),s("span",{class:"hljs-number"},"0"),l("; i < "),s("span",{class:"hljs-number"},"20"),l(`; i++) {
      list.value.push(list.value.length + `),s("span",{class:"hljs-number"},"1"),l(`)
    }
    
    loading.value = `),s("span",{class:"hljs-literal"},"false"),l(`
  }, `),s("span",{class:"hljs-number"},"1000"),l(`)
}
`)]),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"script"),l(">")]),l(`

`),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"template"),l(">")]),l(`
  `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-pull-refresh"),l(),s("span",{class:"hljs-attr"},"v-model"),l("="),s("span",{class:"hljs-string"},'"refreshing"'),l(" @"),s("span",{class:"hljs-attr"},"refresh"),l("="),s("span",{class:"hljs-string"},'"refresh"'),l(">")]),l(`
    `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-list"),l(),s("span",{class:"hljs-attr"},"v-model:loading"),l("="),s("span",{class:"hljs-string"},'"loading"'),l(" @"),s("span",{class:"hljs-attr"},"load"),l("="),s("span",{class:"hljs-string"},'"load"'),l(">")]),l(`
      `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-cell"),l(),s("span",{class:"hljs-attr"},":key"),l("="),s("span",{class:"hljs-string"},'"d"'),l(),s("span",{class:"hljs-attr"},"v-for"),l("="),s("span",{class:"hljs-string"},'"d in list"'),l(">")]),l("ListItem {{ d }}"),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"var-cell"),l(">")]),l(`
    `),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"var-list"),l(">")]),l(`
  `),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"var-pull-refresh"),l(">")]),l(`
`),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"template"),l(">")]),l(`
`)])],-1),S={class:"card"},C={id:"Attention"},P=s("p",null,[l("When the height of the "),s("code",null,"PullRefresh"),l(" is "),s("code",null,"0"),l(", it will be unavailable, so you need to ensure that the height of its child elements is "),s("strong",null,"not"),l(),s("code",null,"0"),l(" or set height for the "),s("code",null,"PullRefresh"),l(":")],-1),T=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"template"),l(">")]),l(`
  `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-pull-refresh"),l(">")]),l(`
    `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"div"),l(),s("span",{class:"hljs-attr"},"style"),l("="),s("span",{class:"hljs-string"},'"height: 200px"'),l(">")]),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"div"),l(">")]),l(`
  `),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"var-pull-refresh"),l(">")]),l(`

  `),s("span",{class:"hljs-comment"},"<!-- or -->"),l(`
  
  `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-pull-refresh"),l(),s("span",{class:"hljs-attr"},"style"),l("="),s("span",{class:"hljs-string"},'"height: 200px"'),l(">")]),l(`
    `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"div"),l(">")]),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"div"),l(">")]),l(`
  `),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"var-pull-refresh"),l(">")]),l(`
`),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"template"),l(">")]),l(`
`)])],-1),I=s("h2",null,"API",-1),A={class:"card"},B={id:"Props"},E=o("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>Loading status</td><td><em>boolean</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable pull refresh</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>target</code></td><td>The target to trigger scroll. If it is undefined back top will listen to the nearest scrollable parent.</td><td><em>string | HTMLElement</em></td><td><code>-</code></td></tr><tr><td><code>animation-duration</code></td><td>The duration of the animation to return to the initial position after loading(ms)</td><td><em>string | number</em></td><td><code>300</code></td></tr><tr><td><code>success-duration</code></td><td>Success text display duration(ms)</td><td><em>string | number</em></td><td><code>2000</code></td></tr><tr><td><code>bg-color</code></td><td>BackgroundColor of control</td><td><em>string</em></td><td><code>#005CAF</code></td></tr><tr><td><code>color</code></td><td>Color of control</td><td><em>string</em></td><td><code>#ffffff</code></td></tr><tr><td><code>success-bg-color</code></td><td>BackgroundColor of control when the status is success</td><td><em>string</em></td><td><code>#4CAF50</code></td></tr><tr><td><code>success-color</code></td><td>Color of control when the status is success</td><td><em>string</em></td><td><code>ffffff</code></td></tr></tbody></table>",1),V={class:"card"},L={id:"Events"},R=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"Event"),s("th",null,"Description"),s("th",null,"arguments")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("code",null,"refresh")]),s("td",null,"Emitted after pulling refresh"),s("td",null,[s("code",null,"-")])])])],-1),D={class:"card"},N={id:"Slots"},U=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"Name"),s("th",null,"Description"),s("th",null,"SlotProps")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("code",null,"default")]),s("td",null,"Default slot"),s("td",null,[s("code",null,"-")])])])],-1),$={class:"card"},z={id:"StyleVariables"},F=o('<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--pull-refresh-size</code></td><td><code>40px</code></td></tr><tr><td><code>--pull-refresh-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--pull-refresh-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--pull-refresh-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--pull-refresh-icon-size</code></td><td><code>25px</code></td></tr></tbody></table>',2);function H(W,q,M,Z,G,J){const e=c("router-link"),n=c("var-site-code-example");return r(),h("div",p,[u,s("div",j,[s("h3",f,[t(e,{to:"#Intro"},{default:a(()=>[l("#")]),_:1}),l("Intro")]),m]),s("div",g,[s("h3",_,[t(e,{to:"#BasicUsage"},{default:a(()=>[l("#")]),_:1}),l("Basic Usage")]),v,t(n,null,{default:a(()=>[b]),_:1})]),s("div",y,[s("h3",w,[t(e,{to:"#Combine"},{default:a(()=>[l("#")]),_:1}),l("Combine")]),k,t(n,null,{default:a(()=>[x]),_:1})]),s("div",S,[s("h3",C,[t(e,{to:"#Attention"},{default:a(()=>[l("#")]),_:1}),l("Attention")]),P,t(n,{"playground-ignore":""},{default:a(()=>[T]),_:1})]),I,s("div",A,[s("h3",B,[t(e,{to:"#Props"},{default:a(()=>[l("#")]),_:1}),l("Props")]),E]),s("div",V,[s("h3",L,[t(e,{to:"#Events"},{default:a(()=>[l("#")]),_:1}),l("Events")]),R]),s("div",D,[s("h3",N,[t(e,{to:"#Slots"},{default:a(()=>[l("#")]),_:1}),l("Slots")]),U]),s("div",$,[s("h3",z,[t(e,{to:"#StyleVariables"},{default:a(()=>[l("#")]),_:1}),l("Style Variables")]),F])])}const O=d(i,[["render",H]]);export{O as default};
