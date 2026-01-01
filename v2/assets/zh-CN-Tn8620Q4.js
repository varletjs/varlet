import{_ as h,b as e,e as r,m as d,p as s,q as l,w as t,P as a,Z as o}from"./index-vwO9GBzB.js";const p={components:{}},i={class:"varlet-site-doc"},j=s("h1",null,"遮罩层",-1),u={class:"card"},_={id:"jie4shao4"},m=s("p",null,"创建一个遮罩层，用于强调特定的页面元素。",-1),g={class:"card"},v={id:"ji1ben3shi3yong4"},b=s("p",null,[a("通过 "),s("code",null,"show"),a(" 控制遮罩层显示，点击遮罩时自动将 "),s("code",null,"show"),a(" 设置为 "),s("code",null,"false"),a(" 以关闭遮罩层。")],-1),y=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { ref } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`
  
`),s("span",{class:"hljs-keyword"},"const"),a(" show = ref("),s("span",{class:"hljs-literal"},"false"),a(`)
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-button"),a(),s("span",{class:"hljs-attr"},"type"),a("="),s("span",{class:"hljs-string"},'"primary"'),a(),s("span",{class:"hljs-attr"},"block"),a(" @"),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"show = true"'),a(">")]),a("显示遮罩层"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-overlay"),a(),s("span",{class:"hljs-attr"},"v-model:show"),a("="),s("span",{class:"hljs-string"},'"show"'),a(" />")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),f={class:"card"},k={id:"qian4ru4nei4rong2"},w=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { ref } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(" show = ref("),s("span",{class:"hljs-literal"},"false"),a(`)
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-button"),a(),s("span",{class:"hljs-attr"},"type"),a("="),s("span",{class:"hljs-string"},'"primary"'),a(),s("span",{class:"hljs-attr"},"block"),a(" @"),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"show = true"'),a(">")]),a("嵌入内容"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-overlay"),a(),s("span",{class:"hljs-attr"},"v-model:show"),a("="),s("span",{class:"hljs-string"},'"show"'),a(">")]),a(`
    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"overlay-content"'),a(" @"),s("span",{class:"hljs-attr"},"click.stop"),a(">")]),a(`
      素胚勾勒出青花笔锋浓转淡, 
      瓶身描绘的牡丹一如你初妆, 
      冉冉檀香透过窗心事我了然, 
      宣纸上走笔至此搁一半。
    `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-overlay"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"style"),a(">")]),s("span",{class:"css"},[a(`
`),s("span",{class:"hljs-selector-class"},".overlay-content"),a(` {
  `),s("span",{class:"hljs-attribute"},"padding"),a(": "),s("span",{class:"hljs-number"},"20px"),a(),s("span",{class:"hljs-number"},"24px"),a(`;
  `),s("span",{class:"hljs-attribute"},"width"),a(": "),s("span",{class:"hljs-number"},"250px"),a(`;
  `),s("span",{class:"hljs-attribute"},"background"),a(": "),s("span",{class:"hljs-built_in"},"var"),a(`(--button-default-color);
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"style"),a(">")]),a(`
`)])],-1),x={class:"card"},N={id:"dian3ji1shi4jian4"},C=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { ref } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { Snackbar } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(" show = ref("),s("span",{class:"hljs-literal"},"false"),a(`)
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-button"),a(),s("span",{class:"hljs-attr"},"type"),a("="),s("span",{class:"hljs-string"},'"primary"'),a(),s("span",{class:"hljs-attr"},"block"),a(" @"),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"show = true"'),a(">")]),a("点击遮罩层"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-overlay"),a(`
    `),s("span",{class:"hljs-attr"},"v-model:show"),a("="),s("span",{class:"hljs-string"},'"show"'),a(`
    @`),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},`"Snackbar.success('click')"`),a(`
  />`)]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),P=s("h2",null,"API",-1),S={class:"card"},V={id:"shu3xing4"},$=o("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>是否显示遮罩层</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>lock-scroll</code></td><td>是否禁止滚动穿透，禁止时滚动遮罩层不会引发 body 的滚动</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>遮罩层挂载的位置</td><td><em>TeleportProps[&#39;to&#39;] | false</em></td><td><code>-</code></td></tr></tbody></table>",1),q={class:"card"},B={id:"shi4jian4"},z=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"事件名"),s("th",null,"说明"),s("th",null,"参数")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("code",null,"click")]),s("td",null,"点击遮罩层时触发"),s("td",null,[s("code",null,"-")])])])],-1),T={class:"card"},A={id:"cha1cao2"},E=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"插槽名"),s("th",null,"说明"),s("th",null,"参数")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("code",null,"default")]),s("td",null,"遮罩层内容"),s("td",null,[s("code",null,"-")])])])],-1),I={class:"card"},Z={id:"yang4shi4bian4liang4"},D=o('<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--overlay-background-color</code></td><td><code>rgba(0, 0, 0, .6)</code></td></tr></tbody></table>',2);function F(G,H,J,K,L,M){const n=e("router-link"),c=e("var-site-code-example");return r(),d("div",i,[j,s("div",u,[s("h3",_,[l(n,{to:"#jie4shao4"},{default:t(()=>[a("#")]),_:1}),a("介绍")]),m]),s("div",g,[s("h3",v,[l(n,{to:"#ji1ben3shi3yong4"},{default:t(()=>[a("#")]),_:1}),a("基本使用")]),b,l(c,null,{default:t(()=>[y]),_:1})]),s("div",f,[s("h3",k,[l(n,{to:"#qian4ru4nei4rong2"},{default:t(()=>[a("#")]),_:1}),a("嵌入内容")]),l(c,null,{default:t(()=>[w]),_:1})]),s("div",x,[s("h3",N,[l(n,{to:"#dian3ji1shi4jian4"},{default:t(()=>[a("#")]),_:1}),a("点击事件")]),l(c,null,{default:t(()=>[C]),_:1})]),P,s("div",S,[s("h3",V,[l(n,{to:"#shu3xing4"},{default:t(()=>[a("#")]),_:1}),a("属性")]),$]),s("div",q,[s("h3",B,[l(n,{to:"#shi4jian4"},{default:t(()=>[a("#")]),_:1}),a("事件")]),z]),s("div",T,[s("h3",A,[l(n,{to:"#cha1cao2"},{default:t(()=>[a("#")]),_:1}),a("插槽")]),E]),s("div",I,[s("h3",Z,[l(n,{to:"#yang4shi4bian4liang4"},{default:t(()=>[a("#")]),_:1}),a("样式变量")]),D])])}const Q=h(p,[["render",F]]);export{Q as default};
