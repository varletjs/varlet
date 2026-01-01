import{b as c,m as p,p as s,q as t,Q as l,w as n,$ as r,e as o,h}from"./index-DtCrA0ro.js";const i={components:{}},j={class:"varlet-site-doc"},u={class:"card"},m={id:"jie4shao4"},f={class:"card"},g={id:"ji1ben3shi3yong4"},v={class:"card"},b={id:"zu3he2"},y={class:"card"},k={id:"zhu4yi4"},w={class:"card"},x={id:"shu3xing4"},_={class:"card"},z={id:"shi4jian4"},C={class:"card"},L={id:"cha1cao2"},N={class:"card"},R={id:"yang4shi4bian4liang4"};function T(A,a,I,P,$,V){const e=o("router-link"),d=o("var-site-code-example");return h(),p("div",j,[a[27]||(a[27]=s("h1",null,"下拉刷新",-1)),s("div",u,[s("h3",m,[t(e,{to:"#jie4shao4"},{default:n(()=>[...a[0]||(a[0]=[l("#",-1)])]),_:1}),a[1]||(a[1]=l("介绍",-1))]),a[2]||(a[2]=s("p",null,"用于提供下拉刷新的交互操作。",-1))]),s("div",f,[s("h3",g,[t(e,{to:"#ji1ben3shi3yong4"},{default:n(()=>[...a[3]||(a[3]=[l("#",-1)])]),_:1}),a[4]||(a[4]=l("基本使用",-1))]),a[6]||(a[6]=s("p",null,[l("下拉到刷新位置时松开会触发 "),s("code",null,"refresh"),l(" 事件， 在事件开始时将 "),s("code",null,"v-model"),l(" 设置为 "),s("code",null,"true"),l(" 表示正在加载，完成后将 "),s("code",null,"v-model"),l(" 设置为 "),s("code",null,"false"),l(" 表示加载结束。")],-1)),t(d,null,{default:n(()=>[...a[5]||(a[5]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"script"),l(),s("span",{class:"hljs-attr"},"setup"),l(">")]),s("span",{class:"javascript"},[l(`
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
`)])],-1)])]),_:1})]),s("div",v,[s("h3",b,[t(e,{to:"#zu3he2"},{default:n(()=>[...a[7]||(a[7]=[l("#",-1)])]),_:1}),a[8]||(a[8]=l("组合",-1))]),a[10]||(a[10]=s("p",null,[l("与 "),s("code",null,"List"),l(" 组件结合使用即可实现上拉加载和下拉刷新的功能，需保证 "),s("code",null,"PullRefresh"),l(" 容器高度不为 "),s("code",null,"0"),l("。")],-1)),t(d,null,{default:n(()=>[...a[9]||(a[9]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"script"),l(),s("span",{class:"hljs-attr"},"setup"),l(">")]),s("span",{class:"javascript"},[l(`
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
`)])],-1)])]),_:1})]),s("div",y,[s("h3",k,[t(e,{to:"#zhu4yi4"},{default:n(()=>[...a[11]||(a[11]=[l("#",-1)])]),_:1}),a[12]||(a[12]=l("注意",-1))]),a[14]||(a[14]=s("p",null,[l("当 "),s("code",null,"PullRefresh"),l(" 容器高度为 "),s("code",null,"0"),l(" 时会导致下拉功能失效，所以需保证其子元素高度"),s("strong",null,"不为"),l(),s("code",null,"0"),l(" 或为 "),s("code",null,"PullRefresh"),l(" 容器设置高度:")],-1)),t(d,{"playground-ignore":""},{default:n(()=>[...a[13]||(a[13]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"template"),l(">")]),l(`
  `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-pull-refresh"),l(">")]),l(`
    `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"div"),l(),s("span",{class:"hljs-attr"},"style"),l("="),s("span",{class:"hljs-string"},'"height: 200px"'),l(">")]),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"div"),l(">")]),l(`
  `),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"var-pull-refresh"),l(">")]),l(`

  `),s("span",{class:"hljs-comment"},"<!-- 或 -->"),l(`
  
  `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"var-pull-refresh"),l(),s("span",{class:"hljs-attr"},"style"),l("="),s("span",{class:"hljs-string"},'"height: 200px"'),l(">")]),l(`
    `),s("span",{class:"hljs-tag"},[l("<"),s("span",{class:"hljs-name"},"div"),l(">")]),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"div"),l(">")]),l(`
  `),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"var-pull-refresh"),l(">")]),l(`
`),s("span",{class:"hljs-tag"},[l("</"),s("span",{class:"hljs-name"},"template"),l(">")]),l(`
`)])],-1)])]),_:1})]),a[28]||(a[28]=s("h2",null,"API",-1)),s("div",w,[s("h3",x,[t(e,{to:"#shu3xing4"},{default:n(()=>[...a[15]||(a[15]=[l("#",-1)])]),_:1}),a[16]||(a[16]=l("属性",-1))]),a[17]||(a[17]=r("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>是否处于加载中状态</td><td><em>boolean</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用下拉刷新</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>target</code></td><td>触发滚动的对象，如果为 undefined 会监听距离最近的一个可滚动的祖先节点</td><td><em>string | HTMLElement</em></td><td><code>-</code></td></tr><tr><td><code>animation-duration</code></td><td>加载结束后回到初始位置的动画时长（ms）</td><td><em>string | number</em></td><td><code>300</code></td></tr><tr><td><code>success-duration</code></td><td>成功提示展示时长（ms）</td><td><em>string | number</em></td><td><code>2000</code></td></tr><tr><td><code>bg-color</code></td><td>control 的背景颜色</td><td><em>string</em></td><td><code>#005CAF</code></td></tr><tr><td><code>color</code></td><td>control 的颜色</td><td><em>string</em></td><td><code>#ffffff</code></td></tr><tr><td><code>success-bg-color</code></td><td>成功状态下 control 的背景颜色</td><td><em>string</em></td><td><code>#4CAF50</code></td></tr><tr><td><code>success-color</code></td><td>成功状态下 control 的颜色</td><td><em>string</em></td><td><code>ffffff</code></td></tr></tbody></table>",1))]),s("div",_,[s("h3",z,[t(e,{to:"#shi4jian4"},{default:n(()=>[...a[18]||(a[18]=[l("#",-1)])]),_:1}),a[19]||(a[19]=l("事件",-1))]),a[20]||(a[20]=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"事件名"),s("th",null,"说明"),s("th",null,"回调参数")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("code",null,"refresh")]),s("td",null,"下拉刷新时触发"),s("td",null,[s("code",null,"-")])])])],-1))]),s("div",C,[s("h3",L,[t(e,{to:"#cha1cao2"},{default:n(()=>[...a[21]||(a[21]=[l("#",-1)])]),_:1}),a[22]||(a[22]=l("插槽",-1))]),a[23]||(a[23]=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"名称"),s("th",null,"说明"),s("th",null,"参数")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("code",null,"default")]),s("td",null,"默认插槽"),s("td",null,[s("code",null,"-")])])])],-1))]),s("div",N,[s("h3",R,[t(e,{to:"#yang4shi4bian4liang4"},{default:n(()=>[...a[24]||(a[24]=[l("#",-1)])]),_:1}),a[25]||(a[25]=l("样式变量",-1))]),a[26]||(a[26]=r('<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--pull-refresh-size</code></td><td><code>40px</code></td></tr><tr><td><code>--pull-refresh-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--pull-refresh-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--pull-refresh-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--pull-refresh-icon-size</code></td><td><code>25px</code></td></tr></tbody></table>',2))])])}const E=c(i,[["render",T]]);export{E as default};
