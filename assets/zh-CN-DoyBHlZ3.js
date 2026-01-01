import{b as o,m as d,p as s,q as l,Q as a,w as n,$ as c,e as r,h as i}from"./index-DtCrA0ro.js";const h={components:{}},j={class:"varlet-site-doc"},g={class:"card"},m={id:"jie4shao4"},u={class:"card"},b={id:"ji1ben3shi3yong4"},v={class:"card"},y={id:"bei4jing3tu2lan3jia1zai4"},x={class:"card"},z={id:"nei4lian2shu3xing4"},f={class:"card"},k={id:"cha1jian4"},w={class:"card"},_={id:"cha1jian4xuan3xiang4"};function N($,t,L,V,A,B){const e=r("router-link"),p=r("var-site-code-example");return i(),d("div",j,[t[20]||(t[20]=s("h1",null,"图片懒加载",-1)),s("div",g,[s("h3",m,[l(e,{to:"#jie4shao4"},{default:n(()=>[...t[0]||(t[0]=[a("#",-1)])]),_:1}),t[1]||(t[1]=a("介绍",-1))]),t[2]||(t[2]=s("p",null,"在图片可见时进行加载。",-1))]),s("div",u,[s("h3",b,[l(e,{to:"#ji1ben3shi3yong4"},{default:n(()=>[...t[3]||(t[3]=[a("#",-1)])]),_:1}),t[4]||(t[4]=a("基本使用",-1))]),l(p,null,{default:n(()=>[...t[5]||(t[5]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"img"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"lazy-example-cat"'),a(),s("span",{class:"hljs-attr"},"v-lazy"),a("="),s("span",{class:"hljs-string"},`"'https://varletjs.org/cat.jpg'"`),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"style"),a(">")]),s("span",{class:"css"},[a(`
`),s("span",{class:"hljs-selector-class"},".lazy-example-cat"),a(` {
  `),s("span",{class:"hljs-attribute"},"width"),a(": "),s("span",{class:"hljs-number"},"100%"),a(`;
  `),s("span",{class:"hljs-attribute"},"height"),a(": "),s("span",{class:"hljs-number"},"200px"),a(`;
  `),s("span",{class:"hljs-attribute"},"object-fit"),a(`: cover;
  `),s("span",{class:"hljs-attribute"},"background-size"),a(`: cover;
  `),s("span",{class:"hljs-attribute"},"pointer-events"),a(`: none;
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"style"),a(">")]),a(`
`)])],-1)])]),_:1})]),s("div",v,[s("h3",y,[l(e,{to:"#bei4jing3tu2lan3jia1zai4"},{default:n(()=>[...t[6]||(t[6]=[a("#",-1)])]),_:1}),t[7]||(t[7]=a("背景图懒加载",-1))]),l(p,null,{default:n(()=>[...t[8]||(t[8]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(` 
    `),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"lazy-example-cat"'),a(` 
    `),s("span",{class:"hljs-attr"},"v-lazy:background-image"),a("="),s("span",{class:"hljs-string"},`"'https://varletjs.org/cat.jpg'"`),a(`
  >`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"style"),a(">")]),s("span",{class:"css"},[a(`
`),s("span",{class:"hljs-selector-class"},".lazy-example-cat"),a(` {
  `),s("span",{class:"hljs-attribute"},"width"),a(": "),s("span",{class:"hljs-number"},"100%"),a(`;
  `),s("span",{class:"hljs-attribute"},"height"),a(": "),s("span",{class:"hljs-number"},"200px"),a(`;
  `),s("span",{class:"hljs-attribute"},"object-fit"),a(`: cover;
  `),s("span",{class:"hljs-attribute"},"background-size"),a(`: cover;
  `),s("span",{class:"hljs-attribute"},"pointer-events"),a(`: none;
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"style"),a(">")]),a(`
`)])],-1)])]),_:1})]),s("div",x,[s("h3",z,[l(e,{to:"#nei4lian2shu3xing4"},{default:n(()=>[...t[9]||(t[9]=[a("#",-1)])]),_:1}),t[10]||(t[10]=a("内联属性",-1))]),t[12]||(t[12]=s("p",null,[a("可以通过内联属性修改 "),s("code",null,"loading"),a("、 "),s("code",null,"error"),a(" 图片和"),s("code",null,"加载失败时尝试重新加载的次数"),a("。")],-1)),l(p,null,{default:n(()=>[...t[11]||(t[11]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"img"),a(`
    `),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"lazy-example-cat"'),a(`
    `),s("span",{class:"hljs-attr"},"v-lazy"),a("="),s("span",{class:"hljs-string"},`"'https://varletjs.org/cat.jpg'"`),a(`
    `),s("span",{class:"hljs-attr"},"lazy-loading"),a("="),s("span",{class:"hljs-string"},'"https://xxx.cn/loading.png"'),a(`
    `),s("span",{class:"hljs-attr"},"lazy-error"),a("="),s("span",{class:"hljs-string"},'"https://xxx.cn/error.png"'),a(`
    `),s("span",{class:"hljs-attr"},"lazy-attempt"),a("="),s("span",{class:"hljs-string"},'"3"'),a(`
  >`)]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"style"),a(">")]),s("span",{class:"css"},[a(`
`),s("span",{class:"hljs-selector-class"},".lazy-example-cat"),a(` {
  `),s("span",{class:"hljs-attribute"},"width"),a(": "),s("span",{class:"hljs-number"},"100%"),a(`;
  `),s("span",{class:"hljs-attribute"},"height"),a(": "),s("span",{class:"hljs-number"},"200px"),a(`;
  `),s("span",{class:"hljs-attribute"},"object-fit"),a(`: cover;
  `),s("span",{class:"hljs-attribute"},"background-size"),a(`: cover;
  `),s("span",{class:"hljs-attribute"},"pointer-events"),a(`: none;
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"style"),a(">")]),a(`
`)])],-1)])]),_:1})]),s("div",f,[s("h3",k,[l(e,{to:"#cha1jian4"},{default:n(()=>[...t[13]||(t[13]=[a("#",-1)])]),_:1}),t[14]||(t[14]=a("插件",-1))]),t[16]||(t[16]=s("p",null,[s("code",null,"Lazy"),a(" 提供了在插件注册时传入的选项，可以设置默认的懒加载选项。")],-1)),l(p,{"playground-ignore":""},{default:n(()=>[...t[15]||(t[15]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),a(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { Lazy } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`

createApp().use(Lazy, {
  `),s("span",{class:"hljs-attr"},"loading"),a(": "),s("span",{class:"hljs-string"},"'https://xxx.cn/loading.png'"),a(`,
  `),s("span",{class:"hljs-attr"},"error"),a(": "),s("span",{class:"hljs-string"},"'https://xxx.cn/error.png'"),a(`,
  `),s("span",{class:"hljs-attr"},"attempt"),a(": "),s("span",{class:"hljs-number"},"3"),a(`,
  `),s("span",{class:"hljs-attr"},"throttleWait"),a(": "),s("span",{class:"hljs-number"},"300"),a(`,
  `),s("span",{class:"hljs-attr"},"events"),a(`: [
    `),s("span",{class:"hljs-string"},"'scroll'"),a(`,
    `),s("span",{class:"hljs-string"},"'wheel'"),a(`,
    `),s("span",{class:"hljs-string"},"'mousewheel'"),a(`,
    `),s("span",{class:"hljs-string"},"'resize'"),a(`,
    `),s("span",{class:"hljs-string"},"'animationend'"),a(`,
    `),s("span",{class:"hljs-string"},"'transitionend'"),a(`,
    `),s("span",{class:"hljs-string"},"'touchmove'"),a(`
  ],
  `),s("span",{class:"hljs-function"},[s("span",{class:"hljs-title"},"filter"),a("("),s("span",{class:"hljs-params"},"lazy"),a(")")]),a(` {
    `),s("span",{class:"hljs-comment"},"// 可以访问 lazy 上下文的所有属性,执行一些属性拦截,"),a(`
    `),s("span",{class:"hljs-comment"},"// 比如简单修改所有的图片地址 http -> https"),a(`
    lazy.src.replace(`),s("span",{class:"hljs-string"},"'http://'"),a(", "),s("span",{class:"hljs-string"},"'https://'"),a(`)
  }
})
`)])],-1)])]),_:1})]),t[21]||(t[21]=s("h2",null,"API",-1)),s("div",w,[s("h3",_,[l(e,{to:"#cha1jian4xuan3xiang4"},{default:n(()=>[...t[17]||(t[17]=[a("#",-1)])]),_:1}),t[18]||(t[18]=a("插件选项",-1))]),t[19]||(t[19]=c("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>loading</code></td><td>加载中的图片，尽可能选择加载速度很快的图片</td><td><em>string</em></td><td><code>1像素透明图片</code></td></tr><tr><td><code>error</code></td><td>加载失败显示的图片</td><td><em>string</em></td><td><code>1像素透明图片</code></td></tr><tr><td><code>attempt</code></td><td>加载失败时尝试重新加载的次数</td><td><em>number</em></td><td><code>3</code></td></tr><tr><td><code>throttleWait</code></td><td>节流时间，数值越大事件触发频率越低</td><td><em>number</em></td><td><code>300</code></td></tr><tr><td><code>events</code></td><td>触发可见性检测注册的事件列表</td><td><em>string[]</em></td><td><code>[&#39;scroll&#39;...]</code></td></tr><tr><td><code>filter</code></td><td>属性拦截函数</td><td><em>(lazy: Lazy) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr></tbody></table>",1))])])}const W=o(h,[["render",N]]);export{W as default};
