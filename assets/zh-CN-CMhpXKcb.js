import{b as o,m as p,p as a,q as t,Q as s,w as n,$ as d,e as c,h}from"./index-DtCrA0ro.js";const i={components:{}},j={class:"varlet-site-doc"},g={class:"card"},u={id:"jie4shao4"},m={class:"card"},v={id:"ji1ben3shi3yong4"},f={class:"card"},b={id:"qi2ta1yang4shi4"},y={class:"card"},w={id:"huan2xing2jin4du4tiao2"},k={class:"card"},z={id:"bu4jian4duan4dong4hua4"},x={class:"card"},_={id:"shu3xing4"},N={class:"card"},I={id:"cha1cao2"},$={class:"card"},C={id:"yang4shi4bian4liang4"};function M(U,l,V,q,B,P){const e=c("router-link"),r=c("var-site-code-example");return h(),p("div",j,[l[26]||(l[26]=a("h1",null,"进度条",-1)),a("div",g,[a("h3",u,[t(e,{to:"#jie4shao4"},{default:n(()=>[...l[0]||(l[0]=[s("#",-1)])]),_:1}),l[1]||(l[1]=s("介绍",-1))]),l[2]||(l[2]=a("p",null,"展示操作的当前进度。",-1))]),a("div",m,[a("h3",v,[t(e,{to:"#ji1ben3shi3yong4"},{default:n(()=>[...l[3]||(l[3]=[s("#",-1)])]),_:1}),l[4]||(l[4]=s("基本使用",-1))]),t(r,null,{default:n(()=>[...l[5]||(l[5]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
`)])],-1)])]),_:1})]),a("div",f,[a("h3",b,[t(e,{to:"#qi2ta1yang4shi4"},{default:n(()=>[...l[6]||(l[6]=[s("#",-1)])]),_:1}),l[7]||(l[7]=s("其他样式",-1))]),l[9]||(l[9]=a("p",null,[s("通过 "),a("code",null,"type"),s("、"),a("code",null,"line-width"),s("、"),a("code",null,"color"),s("、"),a("code",null,"track-color"),s(" 属性设置线宽、进度条颜色、轨道颜色。")],-1)),t(r,null,{default:n(()=>[...l[8]||(l[8]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"column"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"[12, 12]"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"40"'),s(),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"linear-gradient(131.53deg, #3fecff 0%, #6149f6 100%)"'),s("/>")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"info"'),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"40"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"60"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},":value"),s("="),a("span",{class:"hljs-string"},'"80"'),s(),a("span",{class:"hljs-attr"},":line-width"),s("="),a("span",{class:"hljs-string"},'"8"'),s(),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#ff9f00"'),s(),a("span",{class:"hljs-attr"},"track-color"),s("="),a("span",{class:"hljs-string"},'"#f5cb90"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",y,[a("h3",w,[t(e,{to:"#huan2xing2jin4du4tiao2"},{default:n(()=>[...l[10]||(l[10]=[s("#",-1)])]),_:1}),l[11]||(l[11]=s("环形进度条",-1))]),t(r,null,{default:n(()=>[...l[12]||(l[12]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
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
`)])],-1)])]),_:1})]),a("div",k,[a("h3",z,[t(e,{to:"#bu4jian4duan4dong4hua4"},{default:n(()=>[...l[13]||(l[13]=[s("#",-1)])]),_:1}),l[14]||(l[14]=s("不间断动画",-1))]),l[16]||(l[16]=a("p",null,[s("当加载进度未知时，通过 "),a("code",null,"indeterminate"),s(" 属性开启不间断动画。")],-1)),t(r,null,{default:n(()=>[...l[15]||(l[15]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"column"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"[20, 20]"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},"indeterminate"),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},"indeterminate"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"info"'),s(" />")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"justify"),s("="),a("span",{class:"hljs-string"},'"space-between"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},"mode"),s("="),a("span",{class:"hljs-string"},'"circle"'),s(),a("span",{class:"hljs-attr"},"indeterminate"),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"60"'),s(" />")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-progress"),s(),a("span",{class:"hljs-attr"},"mode"),s("="),a("span",{class:"hljs-string"},'"circle"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"info"'),s(),a("span",{class:"hljs-attr"},"indeterminate"),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"60"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),l[27]||(l[27]=a("h2",null,"API",-1)),a("div",x,[a("h3",_,[t(e,{to:"#shu3xing4"},{default:n(()=>[...l[17]||(l[17]=[s("#",-1)])]),_:1}),l[18]||(l[18]=s("属性",-1))]),l[19]||(l[19]=d("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>mode</code></td><td><code>progress</code> 的模式，可选值为 <code>linear, circle</code></td><td><em>string</em></td><td><code>linear</code></td></tr><tr><td><code>type</code></td><td>类型，可选值为 <code>default</code> <code>primary</code> <code>info</code> <code>success</code> <code>warning</code> <code>danger</code></td><td><em>string</em></td><td><code>primary</code></td></tr><tr><td><code>value</code></td><td><code>progress</code> 的进度</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>line-width</code></td><td><code>progress</code> 的线宽</td><td><em>string | number</em></td><td><code>4</code></td></tr><tr><td><code>color</code></td><td><code>progress</code> 的颜色 (环形进度条设置渐变色请使用object, 渐变同svg的linearGradient元素)</td><td><em>string | object</em></td><td><code>-</code></td></tr><tr><td><code>track-color</code></td><td><code>progress</code> 轨道的颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>label</code></td><td>是否显示 <code>label</code></td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>label-class</code></td><td>自定义 <code>label</code> 的类名</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>track</code></td><td>是否显示 <code>progress</code> 的轨道</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>indeterminate</code></td><td>是否显示不间断动画</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>size</code></td><td><code>progress</code> 的尺寸（仅支持环形进度条）</td><td><em>string | number</em></td><td><code>40</code></td></tr><tr><td><code>rotate</code></td><td><code>progress</code> 的原点（仅支持环形进度条）</td><td><em>number</em></td><td><code>0</code></td></tr></tbody></table>",1))]),a("div",N,[a("h3",I,[t(e,{to:"#cha1cao2"},{default:n(()=>[...l[20]||(l[20]=[s("#",-1)])]),_:1}),l[21]||(l[21]=s("插槽",-1))]),l[22]||(l[22]=a("table",null,[a("thead",null,[a("tr",null,[a("th",null,"名称"),a("th",null,"说明"),a("th",null,"参数")])]),a("tbody",null,[a("tr",null,[a("td",null,[a("code",null,"default")]),a("td",null,"自定义 label"),a("td",null,[a("code",null,"-")])])])],-1))]),a("div",$,[a("h3",C,[t(e,{to:"#yang4shi4bian4liang4"},{default:n(()=>[...l[23]||(l[23]=[s("#",-1)])]),_:1}),l[24]||(l[24]=s("样式变量",-1))]),l[25]||(l[25]=d('<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--progress-font-size</code></td><td><code>var(--font-size-sm)</code></td></tr><tr><td><code>--progress-track-color</code></td><td><code>#d8d8d8</code></td></tr><tr><td><code>--progress-label-color</code></td><td><code>#555</code></td></tr><tr><td><code>--progress-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--progress-default-color</code></td><td><code>#f5f5f5</code></td></tr><tr><td><code>--progress-primary-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--progress-danger-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--progress-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--progress-warning-color</code></td><td><code>var(--color-warning)</code></td></tr><tr><td><code>--progress-info-color</code></td><td><code>var(--color-info)</code></td></tr><tr><td><code>--progress-linear-border-radius</code></td><td><code>0px</code></td></tr></tbody></table>',2))])])}const A=o(i,[["render",M]]);export{A as default};
