import{_ as o,b as c,e as d,m as p,p as a,q as t,w as l,P as s,Z as r}from"./index-vwO9GBzB.js";const h={components:{}},i={class:"varlet-site-doc"},j=a("h1",null,"Progress",-1),g={class:"card"},m={id:"Intro"},u=a("p",null,"Display the current progress of an operation flow.",-1),v={class:"card"},_={id:"BasicUsage"},f=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref, onMounted, onUnmounted } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-number"},"0"),s(`)
`),a("span",{class:"hljs-keyword"},"let"),s(` timer

onMounted(`),a("span",{class:"hljs-function"},"() =>"),s(` {
  timer = `),a("span",{class:"hljs-built_in"},"window"),s(".setInterval("),a("span",{class:"hljs-function"},"() =>"),s(` {
    `),a("span",{class:"hljs-keyword"},"if"),s(" (value.value >= "),a("span",{class:"hljs-number"},"100"),s(`) {
      value.value = `),a("span",{class:"hljs-number"},"0"),s(`
      `),a("span",{class:"hljs-keyword"},"return"),s(`
    }

    value.value += `),a("span",{class:"hljs-number"},"20"),s(`
  }, `),a("span",{class:"hljs-number"},"1000"),s(`)
})

onUnmounted(`),a("span",{class:"hljs-function"},"() =>"),s(` {
  `),a("span",{class:"hljs-built_in"},"window"),s(`.clearInterval(timer)
})  
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"column"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"[12, 12]"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"20"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},":track"),s("="),a("span",{class:"hljs-string"},'"false"'),s(),a("span",{class:"hljs-attr"},"label"),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"100"'),s(),a("span",{class:"hljs-attr"},"label"),s(">")]),s("success"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-progress"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),b={class:"card"},y={id:"OtherStyles"},w=a("p",null,[s("Set the line width, progress bar color and track color through the attributes of "),a("code",null,"type"),s(", "),a("code",null,"line-width"),s(", "),a("code",null,"color"),s(", "),a("code",null,"track-color"),s(".")],-1),k=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"column"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"[12, 12]"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"40"'),s(),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"linear-gradient(131.53deg, #3fecff 0%, #6149f6 100%)"'),s("/>")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"info"'),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"40"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"60"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"80"'),s(),a("span",{class:"hljs-attr"},":line-width"),s("="),a("span",{class:"hljs-string"},'"8"'),s(),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#ff9f00"'),s(),a("span",{class:"hljs-attr"},"track-color"),s("="),a("span",{class:"hljs-string"},'"#f5cb90"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),S={class:"card"},z={id:"ProgressCircle"},P=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref, onMounted, onUnmounted } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" value = ref("),a("span",{class:"hljs-number"},"0"),s(`)
`),a("span",{class:"hljs-keyword"},"let"),s(` timer

onMounted(`),a("span",{class:"hljs-function"},"() =>"),s(` {
  timer = `),a("span",{class:"hljs-built_in"},"window"),s(".setInterval("),a("span",{class:"hljs-function"},"() =>"),s(` {
    `),a("span",{class:"hljs-keyword"},"if"),s(" (value.value >= "),a("span",{class:"hljs-number"},"100"),s(`) {
      value.value = `),a("span",{class:"hljs-number"},"0"),s(`
      `),a("span",{class:"hljs-keyword"},"return"),s(`
    }

    value.value += `),a("span",{class:"hljs-number"},"20"),s(`
  }, `),a("span",{class:"hljs-number"},"1000"),s(`)
})

onUnmounted(`),a("span",{class:"hljs-function"},"() =>"),s(` {
  `),a("span",{class:"hljs-built_in"},"window"),s(`.clearInterval(timer)
})  
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"[20, 20]"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(` 
      `),a("span",{class:"hljs-attr"},"mode"),s("="),a("span",{class:"hljs-string"},'"circle"'),s(` 
      `),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"100"'),s(` 
      `),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"60"'),s(`  
      `),a("span",{class:"hljs-attr"},":color"),s("="),a("span",{class:"hljs-string"},`"{
        '0%': '#3fecff',
        '100%': '#6149f6',
      }"`),s(` 
    />`)]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},"mode"),s("="),a("span",{class:"hljs-string"},'"circle"'),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"75"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"60"'),s(),a("span",{class:"hljs-attr"},":track"),s("="),a("span",{class:"hljs-string"},'"false"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},"mode"),s("="),a("span",{class:"hljs-string"},'"circle"'),s(),a("span",{class:"hljs-attr"},"label"),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"value"'),s(),a("span",{class:"hljs-attr"},":line-width"),s("="),a("span",{class:"hljs-string"},'"5"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"60"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},"mode"),s("="),a("span",{class:"hljs-string"},'"circle"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(),a("span",{class:"hljs-attr"},"label"),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"100"'),s(),a("span",{class:"hljs-attr"},":line-width"),s("="),a("span",{class:"hljs-string"},'"5"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"60"'),s(">")]),s(`
      success
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-progress"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),C={class:"card"},I={id:"IndeterminateAnimation"},U=a("p",null,[s("Enable indeterminate animation through the "),a("code",null,"indeterminate"),s(" attribute when loading progress is unknown.")],-1),x=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"column"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"[20, 20]"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},"indeterminate"),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},"indeterminate"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"info"'),s(" />")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"justify"),s("="),a("span",{class:"hljs-string"},'"space-between"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},"mode"),s("="),a("span",{class:"hljs-string"},'"circle"'),s(),a("span",{class:"hljs-attr"},"indeterminate"),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"60"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},"mode"),s("="),a("span",{class:"hljs-string"},'"circle"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"info"'),s(),a("span",{class:"hljs-attr"},"indeterminate"),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"60"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),V=a("h2",null,"API",-1),B={class:"card"},D={id:"Props"},M=r("<table><thead><tr><th>prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>mode</code></td><td>Mode of Progress. Optional value is <code>linear, circle</code></td><td><em>string</em></td><td><code>linear</code></td></tr><tr><td><code>type</code></td><td>Progress type, Can be set to <code>default</code> <code>primary</code> <code>info</code> <code>success</code> <code>warning</code> <code>danger</code></td><td><em>string</em></td><td><code>primary</code></td></tr><tr><td><code>value</code></td><td>Completion value</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>line-width</code></td><td>Width of the progress bar</td><td><em>string | number</em></td><td><code>4</code></td></tr><tr><td><code>color</code></td><td>Color of the progress bar (The circular progress bar sets the gradient color, please use object. Gradient is the same as svg&#39;s linearGradient element)</td><td><em>string | object</em></td><td><code>-</code></td></tr><tr><td><code>track-color</code></td><td>Color of the progress track</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>label</code></td><td>Whether the label is visible or not</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>label-class</code></td><td>Custom label class name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>track</code></td><td>Whether the progress track is visible or not</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>indeterminate</code></td><td>Whether the indeterminate animation is visible or not</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>size</code></td><td>Size of progress (only supports circle progress)</td><td><em>string | number</em></td><td><code>40</code></td></tr><tr><td><code>rotate</code></td><td>Origin of progress (only supports circle progress)</td><td><em>number</em></td><td><code>0</code></td></tr></tbody></table>",1),N={class:"card"},O={id:"Slots"},A=a("table",null,[a("thead",null,[a("tr",null,[a("th",null,"Name"),a("th",null,"Description"),a("th",null,"SlotProps")])]),a("tbody",null,[a("tr",null,[a("td",null,[a("code",null,"default")]),a("td",null,"Custom label"),a("td",null,[a("code",null,"-")])])])],-1),W={class:"card"},$={id:"StyleVariables"},T=r('<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--progress-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--progress-ripple-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--progress-track-color</code></td><td><code>#d8d8d8</code></td></tr><tr><td><code>--progress-label-color</code></td><td><code>#555</code></td></tr><tr><td><code>--progress-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--progress-default-color</code></td><td><code>#f5f5f5</code></td></tr><tr><td><code>--progress-primary-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--progress-danger-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--progress-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--progress-warning-color</code></td><td><code>var(--color-warning)</code></td></tr><tr><td><code>--progress-info-color</code></td><td><code>var(--color-info)</code></td></tr><tr><td><code>--progress-linear-border-radius</code></td><td><code>0px</code></td></tr></tbody></table>',2);function E(G,q,H,Z,F,J){const e=c("router-link"),n=c("var-site-code-example");return d(),p("div",i,[j,a("div",g,[a("h3",m,[t(e,{to:"#Intro"},{default:l(()=>[s("#")]),_:1}),s("Intro")]),u]),a("div",v,[a("h3",_,[t(e,{to:"#BasicUsage"},{default:l(()=>[s("#")]),_:1}),s("Basic Usage")]),t(n,null,{default:l(()=>[f]),_:1})]),a("div",b,[a("h3",y,[t(e,{to:"#OtherStyles"},{default:l(()=>[s("#")]),_:1}),s("Other Styles")]),w,t(n,null,{default:l(()=>[k]),_:1})]),a("div",S,[a("h3",z,[t(e,{to:"#ProgressCircle"},{default:l(()=>[s("#")]),_:1}),s("Progress Circle")]),t(n,null,{default:l(()=>[P]),_:1})]),a("div",C,[a("h3",I,[t(e,{to:"#IndeterminateAnimation"},{default:l(()=>[s("#")]),_:1}),s("Indeterminate Animation")]),U,t(n,null,{default:l(()=>[x]),_:1})]),V,a("div",B,[a("h3",D,[t(e,{to:"#Props"},{default:l(()=>[s("#")]),_:1}),s("Props")]),M]),a("div",N,[a("h3",O,[t(e,{to:"#Slots"},{default:l(()=>[s("#")]),_:1}),s("Slots")]),A]),a("div",W,[a("h3",$,[t(e,{to:"#StyleVariables"},{default:l(()=>[s("#")]),_:1}),s("Style Variables")]),T])])}const L=o(h,[["render",E]]);export{L as default};
