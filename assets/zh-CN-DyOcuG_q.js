import{b as i,m as r,p as a,q as t,Q as s,w as n,$ as p,e as o,h}from"./index-DtCrA0ro.js";const c={components:{}},j={class:"varlet-site-doc"},m={class:"card"},g={id:"jie4shao4"},u={class:"card"},x={id:"dan1xing2sheng3lüe4"},v={class:"card"},f={id:"duo1xing2sheng3lüe4"},y={class:"card"},b={id:"shuang1xiang4bang3ding4"},k={class:"card"},w={id:"dian3ji1wen2zi4zhan3kai1"},_={class:"card"},z={id:"zi4ding4yi4To0o0lti0p"},T={class:"card"},N={id:"shu3xing4"},$={class:"card"},V={id:"cha1cao2"};function B(C,l,P,W,q,A){const e=o("router-link"),d=o("var-site-code-example");return h(),r("div",j,[l[24]||(l[24]=a("h1",null,"文本省略",-1)),a("div",m,[a("h3",g,[t(e,{to:"#jie4shao4"},{default:n(()=>[...l[0]||(l[0]=[s("#",-1)])]),_:1}),l[1]||(l[1]=s("介绍",-1))]),l[2]||(l[2]=a("p",null,"主要用于省略单行文字和多行文字。",-1))]),a("div",u,[a("h3",x,[t(e,{to:"#dan1xing2sheng3lüe4"},{default:n(()=>[...l[3]||(l[3]=[s("#",-1)])]),_:1}),l[4]||(l[4]=s("单行省略",-1))]),t(d,null,{default:n(()=>[...l[5]||(l[5]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-ellipsis"),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"max-width: 170px"'),s(">")]),s(`
    其实没有什么事情是不可能的，我都拿到世界冠军了，真的没有什么事情是不可能的。
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-ellipsis"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",v,[a("h3",f,[t(e,{to:"#duo1xing2sheng3lüe4"},{default:n(()=>[...l[6]||(l[6]=[s("#",-1)])]),_:1}),l[7]||(l[7]=s("多行省略",-1))]),t(d,null,{default:n(()=>[...l[8]||(l[8]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-ellipsis"),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"max-width: 170px"'),s(),a("span",{class:"hljs-attr"},":line-clamp"),s("="),a("span",{class:"hljs-string"},'"3"'),s(">")]),s(`
    其实没有什么事情是不可能的，我都拿到世界冠军了，真的没有什么事情是不可能的。
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-ellipsis"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",y,[a("h3",b,[t(e,{to:"#shuang1xiang4bang3ding4"},{default:n(()=>[...l[9]||(l[9]=[s("#",-1)])]),_:1}),l[10]||(l[10]=s("双向绑定",-1))]),t(d,null,{default:n(()=>[...l[11]||(l[11]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" expand = ref("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"direction"),s("="),a("span",{class:"hljs-string"},'"column"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"large"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"expand = !expand"'),s(">")]),s("切换"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-ellipsis"),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"max-width: 170px"'),s(),a("span",{class:"hljs-attr"},"v-model:expand"),s("="),a("span",{class:"hljs-string"},'"expand"'),s(">")]),s(`
      其实没有什么事情是不可能的，我都拿到世界冠军了，真的没有什么事情是不可能的。
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-ellipsis"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",k,[a("h3",w,[t(e,{to:"#dian3ji1wen2zi4zhan3kai1"},{default:n(()=>[...l[12]||(l[12]=[s("#",-1)])]),_:1}),l[13]||(l[13]=s("点击文字展开",-1))]),t(d,null,{default:n(()=>[...l[14]||(l[14]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-ellipsis"),s(` 
    `),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"max-width: 170px"'),s(` 
    `),a("span",{class:"hljs-attr"},"expand-trigger"),s("="),a("span",{class:"hljs-string"},'"click"'),s(` 
    `),a("span",{class:"hljs-attr"},":line-clamp"),s("="),a("span",{class:"hljs-string"},'"3"'),s(` 
    `),a("span",{class:"hljs-attr"},":tooltip"),s("="),a("span",{class:"hljs-string"},'"false"'),s(`
  >`)]),s(`
    其实没有什么事情是不可能的，我都拿到世界冠军了，真的没有什么事情是不可能的。
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-ellipsis"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),a("div",_,[a("h3",z,[t(e,{to:"#zi4ding4yi4To0o0lti0p"},{default:n(()=>[...l[15]||(l[15]=[s("#",-1)])]),_:1}),l[16]||(l[16]=s("自定义 Tooltip",-1))]),t(d,null,{default:n(()=>[...l[17]||(l[17]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-ellipsis"),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"max-width: 170px"'),s(),a("span",{class:"hljs-attr"},":tooltip"),s("="),a("span",{class:"hljs-string"},`"{ type: 'primary', sameWidth: false }"`),s(">")]),s(`
    其实没有什么事情是不可能的，我都拿到世界冠军了，真的没有什么事情是不可能的。

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"tooltip-content"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-icon"),s(),a("span",{class:"hljs-attr"},"name"),s("="),a("span",{class:"hljs-string"},'"github"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-ellipsis"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1)])]),_:1})]),l[25]||(l[25]=a("h2",null,"API",-1)),a("div",T,[a("h3",N,[t(e,{to:"#shu3xing4"},{default:n(()=>[...l[18]||(l[18]=[s("#",-1)])]),_:1}),l[19]||(l[19]=s("属性",-1))]),l[20]||(l[20]=p('<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:expand</code></td><td>是否展开</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>expand-trigger</code></td><td>展开触发方式，可选值 <code>click</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>line-clamp</code></td><td>最大显示行数，兼容性见 <a href="https://caniuse.com/?search=line-clamp">line-clamp</a></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>tooltip</code></td><td>Tooltip 组件配置，用于深度定制。为了更方便使用，<code>sameWidth</code> 在这里默认为 <code>true</code></td><td><em>boolean | TooltipProps</em></td><td><code>true</code></td></tr></tbody></table>',1))]),a("div",$,[a("h3",V,[t(e,{to:"#cha1cao2"},{default:n(()=>[...l[21]||(l[21]=[s("#",-1)])]),_:1}),l[22]||(l[22]=s("插槽",-1))]),l[23]||(l[23]=p("<table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>文字内容</td><td><code>-</code></td></tr><tr><td><code>tooltip-content</code></td><td>Tooltip 的内容</td><td><code>-</code></td></tr></tbody></table>",1))])])}const I=i(c,[["render",B]]);export{I as default};
