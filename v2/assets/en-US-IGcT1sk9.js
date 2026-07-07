import{_ as d,b as c,e as r,m as i,p as l,q as a,w as t,P as s,Z as n}from"./index-vwO9GBzB.js";const h={components:{}},p={class:"varlet-site-doc"},j=l("h1",null,"List",-1),u={class:"card"},m={id:"Intro"},f=l("p",null,"Unlimited scroll load list, touch bottom load, support manual check position load. Support custom loading state, error state, data loading completed state.",-1),g={class:"card"},_={id:"BasicUse"},v=l("p",null,[s("The "),l("code",null,"load"),s(" event is emitted when a scroll container is detected scrolling to the bottom, and will be set "),l("code",null,"loading"),s(" to "),l("code",null,"true"),s(", you need to manually set "),l("code",null,"loading"),s(" to "),l("code",null,"false"),s(" at the end of loading, that's the end of the load.")],-1),b=l("pre",{class:"hljs"},[l("code",null,[l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"script"),s(),l("span",{class:"hljs-attr"},"setup"),s(">")]),l("span",{class:"javascript"},[s(`
`),l("span",{class:"hljs-keyword"},"import"),s(" { ref } "),l("span",{class:"hljs-keyword"},"from"),s(),l("span",{class:"hljs-string"},"'vue'"),s(`

`),l("span",{class:"hljs-keyword"},"const"),s(" loading = ref("),l("span",{class:"hljs-literal"},"false"),s(`)
`),l("span",{class:"hljs-keyword"},"const"),s(" finished = ref("),l("span",{class:"hljs-literal"},"false"),s(`)
`),l("span",{class:"hljs-keyword"},"const"),s(` list = ref([])
    
`),l("span",{class:"hljs-function"},[l("span",{class:"hljs-keyword"},"function"),s(),l("span",{class:"hljs-title"},"load"),s("("),l("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),l("span",{class:"hljs-built_in"},"setTimeout"),s("("),l("span",{class:"hljs-function"},"() =>"),s(` {
    `),l("span",{class:"hljs-keyword"},"for"),s(" ("),l("span",{class:"hljs-keyword"},"let"),s(" i = "),l("span",{class:"hljs-number"},"0"),s("; i < "),l("span",{class:"hljs-number"},"20"),s(`; i++) {
      list.value.push(list.value.length + `),l("span",{class:"hljs-number"},"1"),s(`)
    }

    loading.value = `),l("span",{class:"hljs-literal"},"false"),s(`

    `),l("span",{class:"hljs-keyword"},"if"),s(" (list.value.length >= "),l("span",{class:"hljs-number"},"60"),s(`) {
      finished.value = `),l("span",{class:"hljs-literal"},"true"),s(`
    }
  }, `),l("span",{class:"hljs-number"},"1000"),s(`)
}
`)]),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"var-list"),s(`
    `),l("span",{class:"hljs-attr"},":finished"),s("="),l("span",{class:"hljs-string"},'"finished"'),s(`
    `),l("span",{class:"hljs-attr"},"v-model:loading"),s("="),l("span",{class:"hljs-string"},'"loading"'),s(`
    @`),l("span",{class:"hljs-attr"},"load"),s("="),l("span",{class:"hljs-string"},'"load"'),s(`
  >`)]),s(`
    `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"var-cell"),s(),l("span",{class:"hljs-attr"},":key"),s("="),l("span",{class:"hljs-string"},'"item"'),s(),l("span",{class:"hljs-attr"},"v-for"),s("="),l("span",{class:"hljs-string"},'"item in list"'),s(">")]),s(`
      List Item: {{ item }}
    `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"var-list"),s(">")]),s(`
`),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y={class:"card"},k={id:"LoadFail"},w=l("p",null,[s("You can manually set the error status using "),l("code",null,"v-model:error"),s(", an error message is displayed. Clicking on the error message will help you set the "),l("code",null,"error"),s(" to "),l("code",null,"false"),s(" and trigger the "),l("code",null,"load"),s(" event again.")],-1),x=l("pre",{class:"hljs"},[l("code",null,[l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"script"),s(),l("span",{class:"hljs-attr"},"setup"),s(">")]),l("span",{class:"javascript"},[s(`
`),l("span",{class:"hljs-keyword"},"import"),s(" { ref } "),l("span",{class:"hljs-keyword"},"from"),s(),l("span",{class:"hljs-string"},"'vue'"),s(`

`),l("span",{class:"hljs-keyword"},"const"),s(" loading = ref("),l("span",{class:"hljs-literal"},"false"),s(`)
`),l("span",{class:"hljs-keyword"},"const"),s(" error = ref("),l("span",{class:"hljs-literal"},"false"),s(`)
`),l("span",{class:"hljs-keyword"},"const"),s(` list = ref([])
    
`),l("span",{class:"hljs-function"},[l("span",{class:"hljs-keyword"},"function"),s(),l("span",{class:"hljs-title"},"load"),s("("),l("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),l("span",{class:"hljs-built_in"},"setTimeout"),s("("),l("span",{class:"hljs-function"},"() =>"),s(` {
    `),l("span",{class:"hljs-keyword"},"if"),s(" (list.value.length === "),l("span",{class:"hljs-number"},"40"),s(`) {
      error.value = `),l("span",{class:"hljs-literal"},"true"),s(`
      loading.value = `),l("span",{class:"hljs-literal"},"false"),s(`
      `),l("span",{class:"hljs-keyword"},"return"),s(`
    }

    `),l("span",{class:"hljs-keyword"},"for"),s(" ("),l("span",{class:"hljs-keyword"},"let"),s(" i = "),l("span",{class:"hljs-number"},"0"),s("; i < "),l("span",{class:"hljs-number"},"20"),s(`; i++) {
      list.value.push(list.value.length + `),l("span",{class:"hljs-number"},"1"),s(`)
    }

    loading.value = `),l("span",{class:"hljs-literal"},"false"),s(`
  }, `),l("span",{class:"hljs-number"},"1000"),s(`)
}
`)]),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"var-list"),s(`
    `),l("span",{class:"hljs-attr"},"v-model:error"),s("="),l("span",{class:"hljs-string"},'"error"'),s(`
    `),l("span",{class:"hljs-attr"},"v-model:loading"),s("="),l("span",{class:"hljs-string"},'"loading"'),s(`
    @`),l("span",{class:"hljs-attr"},"load"),s("="),l("span",{class:"hljs-string"},'"load"'),s(`
  >`)]),s(`
    `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"var-cell"),s(),l("span",{class:"hljs-attr"},":key"),s("="),l("span",{class:"hljs-string"},'"item"'),s(),l("span",{class:"hljs-attr"},"v-for"),s("="),l("span",{class:"hljs-string"},'"item in list"'),s(">")]),s(`
      List Item: {{ item }}
    `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"var-list"),s(">")]),s(`
`),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),T={class:"card"},L={id:"TipText"},S=l("pre",{class:"hljs"},[l("code",null,[l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"script"),s(),l("span",{class:"hljs-attr"},"setup"),s(">")]),l("span",{class:"javascript"},[s(`
`),l("span",{class:"hljs-keyword"},"import"),s(" { ref } "),l("span",{class:"hljs-keyword"},"from"),s(),l("span",{class:"hljs-string"},"'vue'"),s(`

`),l("span",{class:"hljs-keyword"},"const"),s(" loading = ref("),l("span",{class:"hljs-literal"},"false"),s(`)
`),l("span",{class:"hljs-keyword"},"const"),s(" finished = ref("),l("span",{class:"hljs-literal"},"false"),s(`)
`),l("span",{class:"hljs-keyword"},"const"),s(` list = ref([])

`),l("span",{class:"hljs-function"},[l("span",{class:"hljs-keyword"},"function"),s(),l("span",{class:"hljs-title"},"load"),s("("),l("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),l("span",{class:"hljs-built_in"},"setTimeout"),s("("),l("span",{class:"hljs-function"},"() =>"),s(` {
    `),l("span",{class:"hljs-keyword"},"for"),s(" ("),l("span",{class:"hljs-keyword"},"let"),s(" i = "),l("span",{class:"hljs-number"},"0"),s("; i < "),l("span",{class:"hljs-number"},"20"),s(`; i++) {
      list.value.push(list.value.length + `),l("span",{class:"hljs-number"},"1"),s(`)
    }

    loading.value = `),l("span",{class:"hljs-literal"},"false"),s(`

    `),l("span",{class:"hljs-keyword"},"if"),s(" (list.value.length >= "),l("span",{class:"hljs-number"},"60"),s(`) {
      finished.value = `),l("span",{class:"hljs-literal"},"true"),s(`
    }
  }, `),l("span",{class:"hljs-number"},"1000"),s(`)
}
`)]),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"var-list"),s(` 
    `),l("span",{class:"hljs-attr"},"loading-text"),s("="),l("span",{class:"hljs-string"},'"loading QAQ"'),s(` 
    `),l("span",{class:"hljs-attr"},"finished-text"),s("="),l("span",{class:"hljs-string"},'"finished ORZ"'),s(` 
    `),l("span",{class:"hljs-attr"},"error-text"),s("="),l("span",{class:"hljs-string"},'"error TNT"'),s(` 
    `),l("span",{class:"hljs-attr"},":finished"),s("="),l("span",{class:"hljs-string"},'"finished"'),s(` 
    `),l("span",{class:"hljs-attr"},"v-model:loading"),s("="),l("span",{class:"hljs-string"},'"loading"'),s(` 
    @`),l("span",{class:"hljs-attr"},"load"),s("="),l("span",{class:"hljs-string"},'"load"'),s(`
  >`)]),s(`
    `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"var-cell"),s(),l("span",{class:"hljs-attr"},":key"),s("="),l("span",{class:"hljs-string"},'"item"'),s(),l("span",{class:"hljs-attr"},"v-for"),s("="),l("span",{class:"hljs-string"},'"item in list"'),s(">")]),s(`
      List Item: {{ item }}
    `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"var-list"),s(">")]),s(`
`),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),C={class:"card"},B={id:"Combine"},P=l("p",null,[s("Combined with the "),l("code",null,"PullRefresh"),s(" component to implement the function of pull-up loading and pull-down refresh, ensuring the height of the "),l("code",null,"PullRefresh"),s(" is not "),l("code",null,"0"),s(".")],-1),z=l("pre",{class:"hljs"},[l("code",null,[l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"script"),s(),l("span",{class:"hljs-attr"},"setup"),s(">")]),l("span",{class:"javascript"},[s(`
`),l("span",{class:"hljs-keyword"},"import"),s(" { ref } "),l("span",{class:"hljs-keyword"},"from"),s(),l("span",{class:"hljs-string"},"'vue'"),s(`

`),l("span",{class:"hljs-keyword"},"const"),s(" refreshing = ref("),l("span",{class:"hljs-literal"},"false"),s(`)
`),l("span",{class:"hljs-keyword"},"const"),s(" loading = ref("),l("span",{class:"hljs-literal"},"false"),s(`)
`),l("span",{class:"hljs-keyword"},"const"),s(` list = ref([])

`),l("span",{class:"hljs-function"},[l("span",{class:"hljs-keyword"},"function"),s(),l("span",{class:"hljs-title"},"refresh"),s("("),l("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),l("span",{class:"hljs-built_in"},"setTimeout"),s("("),l("span",{class:"hljs-function"},"() =>"),s(` {
    `),l("span",{class:"hljs-built_in"},"console"),s(".log("),l("span",{class:"hljs-string"},"'refresh'"),s(`)
    refreshing.value = `),l("span",{class:"hljs-literal"},"false"),s(`
  }, `),l("span",{class:"hljs-number"},"2000"),s(`)
}

`),l("span",{class:"hljs-function"},[l("span",{class:"hljs-keyword"},"function"),s(),l("span",{class:"hljs-title"},"load"),s("("),l("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),l("span",{class:"hljs-built_in"},"setTimeout"),s("("),l("span",{class:"hljs-function"},"() =>"),s(` {
    `),l("span",{class:"hljs-keyword"},"for"),s(" ("),l("span",{class:"hljs-keyword"},"let"),s(" i = "),l("span",{class:"hljs-number"},"0"),s("; i < "),l("span",{class:"hljs-number"},"20"),s(`; i++) {
      list.value.push(list.value.length + `),l("span",{class:"hljs-number"},"1"),s(`)
    }
    
    loading.value = `),l("span",{class:"hljs-literal"},"false"),s(`
  }, `),l("span",{class:"hljs-number"},"1000"),s(`)
}
`)]),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"var-pull-refresh"),s(),l("span",{class:"hljs-attr"},"v-model"),s("="),l("span",{class:"hljs-string"},'"refreshing"'),s(" @"),l("span",{class:"hljs-attr"},"refresh"),s("="),l("span",{class:"hljs-string"},'"refresh"'),s(">")]),s(`
    `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"var-list"),s(),l("span",{class:"hljs-attr"},"v-model:loading"),s("="),l("span",{class:"hljs-string"},'"loading"'),s(" @"),l("span",{class:"hljs-attr"},"load"),s("="),l("span",{class:"hljs-string"},'"load"'),s(">")]),s(`
      `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"var-cell"),s(),l("span",{class:"hljs-attr"},":key"),s("="),l("span",{class:"hljs-string"},'"d"'),s(),l("span",{class:"hljs-attr"},"v-for"),s("="),l("span",{class:"hljs-string"},'"d in list"'),s(">")]),s("ListItem {{ d }}"),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
    `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"var-list"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"var-pull-refresh"),s(">")]),s(`
`),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),E={class:"card"},I={id:"BeCareful"},V=n("<p>We detect bottoming by listening for the scroll event of the scroll container and perform the load. A scroll container is the nearest element that <code>overflow-y=&#39;auto&#39;</code> or <code>scroll</code> When you set an element&#39;s <code>overflow-x</code> to a value other than <code>visible</code>, The browser will fix your <code>overflow-y</code> to <code>auto</code> in order to maintain a <code>BFC</code> structure. This can be mistaken for a scroll container, so avoid it.</p>",1),N=l("h2",null,"API",-1),D={class:"card"},F={id:"Props"},U=n("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:loading</code></td><td>Loading state</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>v-model:error</code></td><td>Error state</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>immediate-check</code></td><td>Whether the location is detected immediately when the List is initialized</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>finished</code></td><td>Whether the load is complete</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>offset</code></td><td>Trigger distance from the bottom</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>loading-text</code></td><td>Loading text</td><td><em>string</em></td><td><code>Loading</code></td></tr><tr><td><code>finished-text</code></td><td>Finished text</td><td><em>string</em></td><td><code>No more</code></td></tr><tr><td><code>error-text</code></td><td>Error text</td><td><em>string</em></td><td><code>Load fail</code></td></tr></tbody></table>",1),A={class:"card"},M={id:"Methods"},R=n("<table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>check</code></td><td>Trigger position check, touch bottom trigger load event</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>",1),W={class:"card"},$={id:"Events"},Q=l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"Event"),l("th",null,"Description"),l("th",null,"Arguments")])]),l("tbody",null,[l("tr",null,[l("td",null,[l("code",null,"load")]),l("td",null,"Triggered when it hit bottom"),l("td",null,[l("code",null,"-")])])])],-1),Z={class:"card"},q={id:"Slots"},H=n("<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>List content</td><td><code>-</code></td></tr><tr><td><code>loading</code></td><td>Loading content</td><td><code>-</code></td></tr><tr><td><code>error</code></td><td>Error content</td><td><code>-</code></td></tr><tr><td><code>finished</code></td><td>Finished content</td><td><code>-</code></td></tr></tbody></table>",1),O={class:"card"},Y={id:"StyleVariables"},G=n('<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--list-loading-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-finished-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-error-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-loading-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-finished-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-error-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-loading-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--list-finished-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--list-error-font-size</code></td><td><code>var(--font-size-md)</code></td></tr></tbody></table>',2);function J(K,X,ss,ls,as,ts){const e=c("router-link"),o=c("var-site-code-example");return r(),i("div",p,[j,l("div",u,[l("h3",m,[a(e,{to:"#Intro"},{default:t(()=>[s("#")]),_:1}),s("Intro")]),f]),l("div",g,[l("h3",_,[a(e,{to:"#BasicUse"},{default:t(()=>[s("#")]),_:1}),s("Basic Use")]),v,a(o,null,{default:t(()=>[b]),_:1})]),l("div",y,[l("h3",k,[a(e,{to:"#LoadFail"},{default:t(()=>[s("#")]),_:1}),s("Load Fail")]),w,a(o,null,{default:t(()=>[x]),_:1})]),l("div",T,[l("h3",L,[a(e,{to:"#TipText"},{default:t(()=>[s("#")]),_:1}),s("Tip Text")]),a(o,null,{default:t(()=>[S]),_:1})]),l("div",C,[l("h3",B,[a(e,{to:"#Combine"},{default:t(()=>[s("#")]),_:1}),s("Combine")]),P,a(o,null,{default:t(()=>[z]),_:1})]),l("div",E,[l("h3",I,[a(e,{to:"#BeCareful"},{default:t(()=>[s("#")]),_:1}),s("Be Careful")]),V]),N,l("div",D,[l("h3",F,[a(e,{to:"#Props"},{default:t(()=>[s("#")]),_:1}),s("Props")]),U]),l("div",A,[l("h3",M,[a(e,{to:"#Methods"},{default:t(()=>[s("#")]),_:1}),s("Methods")]),R]),l("div",W,[l("h3",$,[a(e,{to:"#Events"},{default:t(()=>[s("#")]),_:1}),s("Events")]),Q]),l("div",Z,[l("h3",q,[a(e,{to:"#Slots"},{default:t(()=>[s("#")]),_:1}),s("Slots")]),H]),l("div",O,[l("h3",Y,[a(e,{to:"#StyleVariables"},{default:t(()=>[s("#")]),_:1}),s("Style Variables")]),G])])}const ns=d(h,[["render",J]]);export{ns as default};
