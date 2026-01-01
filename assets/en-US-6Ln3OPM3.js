import{b as i,m as c,p as s,q as a,Q as l,w as n,$ as d,e as r,h as p}from"./index-DtCrA0ro.js";const h={components:{}},u={class:"varlet-site-doc"},j={class:"card"},f={id:"Intro"},m={class:"card"},g={id:"BasicUsage"},v={class:"card"},b={id:"Combine"},y={class:"card"},w={id:"Attention"},k={class:"card"},x={id:"Props"},S={class:"card"},C={id:"Events"},P={class:"card"},T={id:"Slots"},I={class:"card"},_={id:"StyleVariables"};function A(B,t,E,V,L,R){const e=r("router-link"),o=r("var-site-code-example");return p(),c("div",u,[t[27]||(t[27]=s("h1",null,"PullRefresh",-1)),s("div",j,[s("h3",f,[a(e,{to:"#Intro"},{default:n(()=>[...t[0]||(t[0]=[l("#",-1)])]),_:1}),t[1]||(t[1]=l("Intro",-1))]),t[2]||(t[2]=s("p",null,"Provides a drop-down refresh interaction.",-1))]),s("div",m,[s("h3",g,[a(e,{to:"#BasicUsage"},{default:n(()=>[...t[3]||(t[3]=[l("#",-1)])]),_:1}),t[4]||(t[4]=l("Basic Usage",-1))]),t[6]||(t[6]=s("p",null,[l("The refresh event will be Emitted when pull refresh, you should set "),s("code",null,"v-model"),l(" to "),s("code",null,"true"),l(" at the beginning of the event indicates that loading is under way, and setting "),s("code",null,"v-model"),l(" to "),s("code",null,"false"),l(" after completion indicates that loading is over.")],-1)),a(o,null,{default:n(()=>[...t[5]||(t[5]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"script"),l(),s("span",{class:"hljs-attr"},"setup"),l(">")]),s("span",{class:"javascript"},[l(`
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
`)])],-1)])]),_:1})]),s("div",v,[s("h3",b,[a(e,{to:"#Combine"},{default:n(()=>[...t[7]||(t[7]=[l("#",-1)])]),_:1}),t[8]||(t[8]=l("Combine",-1))]),t[10]||(t[10]=s("p",null,[l("Combined with the "),s("code",null,"List"),l(" component to implement the function of pull-up loading and pull-down refresh, ensuring the height of the "),s("code",null,"PullRefresh"),l(" is not "),s("code",null,"0"),l(" .")],-1)),a(o,null,{default:n(()=>[...t[9]||(t[9]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"script"),l(),s("span",{class:"hljs-attr"},"setup"),l(">")]),s("span",{class:"javascript"},[l(`
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
`)])],-1)])]),_:1})]),s("div",y,[s("h3",w,[a(e,{to:"#Attention"},{default:n(()=>[...t[11]||(t[11]=[l("#",-1)])]),_:1}),t[12]||(t[12]=l("Attention",-1))]),t[14]||(t[14]=s("p",null,[l("When the height of the "),s("code",null,"PullRefresh"),l(" is "),s("code",null,"0"),l(", it will be unavailable, so you need to ensure that the height of its child elements is "),s("strong",null,"not"),l(),s("code",null,"0"),l(" or set height for the "),s("code",null,"PullRefresh"),l(":")],-1)),a(o,{"playground-ignore":""},{default:n(()=>[...t[13]||(t[13]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"template"),l(">")]),l(`
  `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-pull-refresh"),l(">")]),l(`
    `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"div"),l(),s("span",{class:"hljs-attr"},"style"),l("="),s("span",{class:"hljs-string"},'"height: 200px"'),l(">")]),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"div"),l(">")]),l(`
  `),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"var-pull-refresh"),l(">")]),l(`

  `),s("span",{class:"hljs-comment"},"<!-- or -->"),l(`
  
  `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-pull-refresh"),l(),s("span",{class:"hljs-attr"},"style"),l("="),s("span",{class:"hljs-string"},'"height: 200px"'),l(">")]),l(`
    `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"div"),l(">")]),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"div"),l(">")]),l(`
  `),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"var-pull-refresh"),l(">")]),l(`
`),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"template"),l(">")]),l(`
`)])],-1)])]),_:1})]),t[28]||(t[28]=s("h2",null,"API",-1)),s("div",k,[s("h3",x,[a(e,{to:"#Props"},{default:n(()=>[...t[15]||(t[15]=[l("#",-1)])]),_:1}),t[16]||(t[16]=l("Props",-1))]),t[17]||(t[17]=d("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>Loading status</td><td><em>boolean</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable pull refresh</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>target</code></td><td>The target to trigger scroll. If it is undefined back top will listen to the nearest scrollable parent.</td><td><em>string | HTMLElement</em></td><td><code>-</code></td></tr><tr><td><code>animation-duration</code></td><td>The duration of the animation to return to the initial position after loading(ms)</td><td><em>string | number</em></td><td><code>300</code></td></tr><tr><td><code>success-duration</code></td><td>Success text display duration(ms)</td><td><em>string | number</em></td><td><code>2000</code></td></tr><tr><td><code>bg-color</code></td><td>BackgroundColor of control</td><td><em>string</em></td><td><code>#005CAF</code></td></tr><tr><td><code>color</code></td><td>Color of control</td><td><em>string</em></td><td><code>#ffffff</code></td></tr><tr><td><code>success-bg-color</code></td><td>BackgroundColor of control when the status is success</td><td><em>string</em></td><td><code>#4CAF50</code></td></tr><tr><td><code>success-color</code></td><td>Color of control when the status is success</td><td><em>string</em></td><td><code>ffffff</code></td></tr></tbody></table>",1))]),s("div",S,[s("h3",C,[a(e,{to:"#Events"},{default:n(()=>[...t[18]||(t[18]=[l("#",-1)])]),_:1}),t[19]||(t[19]=l("Events",-1))]),t[20]||(t[20]=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"Event"),s("th",null,"Description"),s("th",null,"arguments")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("code",null,"refresh")]),s("td",null,"Emitted after pulling refresh"),s("td",null,[s("code",null,"-")])])])],-1))]),s("div",P,[s("h3",T,[a(e,{to:"#Slots"},{default:n(()=>[...t[21]||(t[21]=[l("#",-1)])]),_:1}),t[22]||(t[22]=l("Slots",-1))]),t[23]||(t[23]=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"Name"),s("th",null,"Description"),s("th",null,"SlotProps")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("code",null,"default")]),s("td",null,"Default slot"),s("td",null,[s("code",null,"-")])])])],-1))]),s("div",I,[s("h3",_,[a(e,{to:"#StyleVariables"},{default:n(()=>[...t[24]||(t[24]=[l("#",-1)])]),_:1}),t[25]||(t[25]=l("Style Variables",-1))]),t[26]||(t[26]=d('<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--pull-refresh-size</code></td><td><code>40px</code></td></tr><tr><td><code>--pull-refresh-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--pull-refresh-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--pull-refresh-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--pull-refresh-icon-size</code></td><td><code>25px</code></td></tr></tbody></table>',2))])])}const N=i(h,[["render",A]]);export{N as default};
