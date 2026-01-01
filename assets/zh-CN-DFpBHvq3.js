import{b as c,m as i,p as l,q as t,Q as s,w as n,$ as d,e as r,h as p}from"./index-DtCrA0ro.js";const h={components:{}},j={class:"varlet-site-doc"},u={class:"card"},m={id:"jie4shao4"},f={class:"card"},g={id:"ji1ben3shi3yong4"},v={class:"card"},y={id:"jia1zai4shi1bai4"},b={class:"card"},k={id:"ti2shi4wen2zi4"},w={class:"card"},x={id:"zu3he2"},z={class:"card"},_={id:"zhu4yi4"},N={class:"card"},T={id:"shu3xing4"},$={class:"card"},C={id:"fang1fa3"},P={class:"card"},V={id:"shi4jian4"},B={class:"card"},I={id:"cha1cao2"},R={class:"card"},S={id:"yang4shi4bian4liang4"};function q(A,a,E,L,Q,D){const e=r("router-link"),o=r("var-site-code-example");return p(),i("div",j,[a[36]||(a[36]=l("h1",null,"无限滚动列表",-1)),l("div",u,[l("h3",m,[t(e,{to:"#jie4shao4"},{default:n(()=>[...a[0]||(a[0]=[s("#",-1)])]),_:1}),a[1]||(a[1]=s("介绍",-1))]),a[2]||(a[2]=l("p",null,"无限滚动加载列表、触底加载，支持手动检查位置并加载。支持自定义加载状态、错误状态、数据加载完成状态。",-1))]),l("div",f,[l("h3",g,[t(e,{to:"#ji1ben3shi3yong4"},{default:n(()=>[...a[3]||(a[3]=[s("#",-1)])]),_:1}),a[4]||(a[4]=s("基本使用",-1))]),a[6]||(a[6]=l("p",null,[s("当检测到滚动容器滚动到底部底部时会触发 "),l("code",null,"load"),s(" 事件，并会设置 "),l("code",null,"loading"),s(" 为 "),l("code",null,"true"),s("，在加载结束时您需要手动设置 "),l("code",null,"loading"),s(" 为 "),l("code",null,"false"),s("，表示加载结束。")],-1)),t(o,null,{default:n(()=>[...a[5]||(a[5]=[l("pre",{class:"hljs"},[l("code",null,[l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"script"),s(),l("span",{class:"hljs-attr"},"setup"),s(">")]),l("span",{class:"javascript"},[s(`
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
      列表项: {{ item }}
    `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"var-list"),s(">")]),s(`
`),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`

`)])],-1)])]),_:1})]),l("div",v,[l("h3",y,[t(e,{to:"#jia1zai4shi1bai4"},{default:n(()=>[...a[7]||(a[7]=[s("#",-1)])]),_:1}),a[8]||(a[8]=s("加载失败",-1))]),a[10]||(a[10]=l("p",null,[s("您可以使用 "),l("code",null,"v-model:error"),s(" 手动设置错误状态，会展示错误提示，点击错误提示会帮您把 "),l("code",null,"error"),s(" 设置成 "),l("code",null,"false"),s(" 并再次触发 "),l("code",null,"load"),s(" 事件。")],-1)),t(o,null,{default:n(()=>[...a[9]||(a[9]=[l("pre",{class:"hljs"},[l("code",null,[l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"script"),s(),l("span",{class:"hljs-attr"},"setup"),s(">")]),l("span",{class:"javascript"},[s(`
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
      列表项: {{ item }}
    `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"var-list"),s(">")]),s(`
`),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),l("div",b,[l("h3",k,[t(e,{to:"#ti2shi4wen2zi4"},{default:n(()=>[...a[11]||(a[11]=[s("#",-1)])]),_:1}),a[12]||(a[12]=s("提示文字",-1))]),t(o,null,{default:n(()=>[...a[13]||(a[13]=[l("pre",{class:"hljs"},[l("code",null,[l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"script"),s(),l("span",{class:"hljs-attr"},"setup"),s(">")]),l("span",{class:"javascript"},[s(`
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
    `),l("span",{class:"hljs-attr"},"loading-text"),s("="),l("span",{class:"hljs-string"},'"正在努力输出"'),s(`
    `),l("span",{class:"hljs-attr"},"finished-text"),s("="),l("span",{class:"hljs-string"},'"一滴都没有了"'),s(`
    `),l("span",{class:"hljs-attr"},"error-text"),s("="),l("span",{class:"hljs-string"},'"出错了出错了"'),s(`
    `),l("span",{class:"hljs-attr"},":finished"),s("="),l("span",{class:"hljs-string"},'"finished"'),s(`
    `),l("span",{class:"hljs-attr"},"v-model:loading"),s("="),l("span",{class:"hljs-string"},'"loading"'),s(`
    @`),l("span",{class:"hljs-attr"},"load"),s("="),l("span",{class:"hljs-string"},'"load"'),s(`
  >`)]),s(`
    `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"var-cell"),s(),l("span",{class:"hljs-attr"},":key"),s("="),l("span",{class:"hljs-string"},'"item"'),s(),l("span",{class:"hljs-attr"},"v-for"),s("="),l("span",{class:"hljs-string"},'"item in list"'),s(">")]),s(`
      列表项: {{ item }}
    `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"var-list"),s(">")]),s(`
`),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),l("div",w,[l("h3",x,[t(e,{to:"#zu3he2"},{default:n(()=>[...a[14]||(a[14]=[s("#",-1)])]),_:1}),a[15]||(a[15]=s("组合",-1))]),a[17]||(a[17]=l("p",null,[s("与 "),l("code",null,"PullRefresh"),s(" 组件结合使用即可实现上拉加载和下拉刷新的功能，需保证"),l("code",null,"PullRefresh"),s(" 容器高度不为 "),l("code",null,"0"),s("。")],-1)),t(o,null,{default:n(()=>[...a[16]||(a[16]=[l("pre",{class:"hljs"},[l("code",null,[l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"script"),s(),l("span",{class:"hljs-attr"},"setup"),s(">")]),l("span",{class:"javascript"},[s(`
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
`)])],-1)])]),_:1})]),l("div",z,[l("h3",_,[t(e,{to:"#zhu4yi4"},{default:n(()=>[...a[18]||(a[18]=[s("#",-1)])]),_:1}),a[19]||(a[19]=s("注意",-1))]),a[20]||(a[20]=d("<p>我们是通过监听滚动容器的 <code>scroll</code> 事件检测是否触底并执行加载。 滚动容器是指最近的一个 <code>overflow-y</code> 为 <code>auto</code> 或者 <code>scroll</code> 的元素。 当您设置一个元素的 <code>overflow-x</code> 为除了 <code>visible</code> 以外的值时，浏览器为了维护一个 <code>bfc</code> 的结构会使您的 <code>overflow-y</code> 修正为 <code>auto</code>。 这时我们就会误认为这个元素也是一个滚动容器，注意规避。</p>",1))]),a[37]||(a[37]=l("h2",null,"API",-1)),l("div",N,[l("h3",T,[t(e,{to:"#shu3xing4"},{default:n(()=>[...a[21]||(a[21]=[s("#",-1)])]),_:1}),a[22]||(a[22]=s("属性",-1))]),a[23]||(a[23]=d("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:loading</code></td><td>加载状态</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>v-model:error</code></td><td>错误状态</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>immediate-check</code></td><td>是否在组件初始化时立刻检测位置</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>finished</code></td><td>是否加载完毕</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>offset</code></td><td>距离底部的触发距离</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>loading-text</code></td><td>加载状态文字</td><td><em>string</em></td><td><code>加载中</code></td></tr><tr><td><code>finished-text</code></td><td>加载完毕文字</td><td><em>string</em></td><td><code>没有更多了</code></td></tr><tr><td><code>error-text</code></td><td>加载失败文字</td><td><em>string</em></td><td><code>加载失败</code></td></tr></tbody></table>",1))]),l("div",$,[l("h3",C,[t(e,{to:"#fang1fa3"},{default:n(()=>[...a[24]||(a[24]=[s("#",-1)])]),_:1}),a[25]||(a[25]=s("方法",-1))]),a[26]||(a[26]=d("<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>check</code></td><td>触发位置检查, 触底触发 load 事件。</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table>",1))]),l("div",P,[l("h3",V,[t(e,{to:"#shi4jian4"},{default:n(()=>[...a[27]||(a[27]=[s("#",-1)])]),_:1}),a[28]||(a[28]=s("事件",-1))]),a[29]||(a[29]=l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"事件名"),l("th",null,"说明"),l("th",null,"参数")])]),l("tbody",null,[l("tr",null,[l("td",null,[l("code",null,"load")]),l("td",null,"触底时触发"),l("td",null,[l("code",null,"-")])])])],-1))]),l("div",B,[l("h3",I,[t(e,{to:"#cha1cao2"},{default:n(()=>[...a[30]||(a[30]=[s("#",-1)])]),_:1}),a[31]||(a[31]=s("插槽",-1))]),a[32]||(a[32]=d("<table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>列表内容</td><td><code>-</code></td></tr><tr><td><code>loading</code></td><td>加载中内容</td><td><code>-</code></td></tr><tr><td><code>error</code></td><td>加载失败内容</td><td><code>-</code></td></tr><tr><td><code>finished</code></td><td>加载完毕内容</td><td><code>-</code></td></tr></tbody></table>",1))]),l("div",R,[l("h3",S,[t(e,{to:"#yang4shi4bian4liang4"},{default:n(()=>[...a[33]||(a[33]=[s("#",-1)])]),_:1}),a[34]||(a[34]=s("样式变量",-1))]),a[35]||(a[35]=d('<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--list-loading-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-finished-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-error-height</code></td><td><code>50px</code></td></tr><tr><td><code>--list-loading-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-finished-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-error-color</code></td><td><code>#888</code></td></tr><tr><td><code>--list-loading-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--list-finished-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--list-error-font-size</code></td><td><code>var(--font-size-md)</code></td></tr></tbody></table>',2))])])}const G=c(h,[["render",q]]);export{G as default};
