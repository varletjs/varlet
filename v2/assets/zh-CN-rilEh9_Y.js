import{_ as h,b as d,e as o,m as p,p as a,q as t,w as l,P as s,Z as e}from"./index-vwO9GBzB.js";const i={components:{}},r={class:"varlet-site-doc"},j=a("h1",null,"粘性布局",-1),_={class:"card"},u={id:"jie4shao4"},m=a("p",null,[s("粘性布局默认使用监听容器滚动事件的 "),a("code",null,"scroll"),s(" 模式，如有需要可以切换成基于 "),a("code",null,"css sticky"),s(" 的模式来提升性能。")],-1),b={class:"card"},g={id:"ji1ben3shi3yong4"},f=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"sticky-example"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-sticky"),s(),a("span",{class:"hljs-attr"},":offset-top"),s("="),a("span",{class:"hljs-string"},'"54"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("基本使用"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-sticky"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".sticky-example"),s(` {
  `),a("span",{class:"hljs-attribute"},"min-height"),s(": "),a("span",{class:"hljs-number"},"200vh"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),v={class:"card"},y={id:"ju2bu4xi1ding3"},x=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"sticky-example"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"sticky-example-scroller"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-sticky"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-button"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"success"'),s(">")]),s("局部吸顶"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-sticky"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"sticky-example-block"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".sticky-example"),s(` {
  `),a("span",{class:"hljs-attribute"},"min-height"),s(": "),a("span",{class:"hljs-number"},"200vh"),s(`;
}

`),a("span",{class:"hljs-selector-class"},".sticky-example-scroller"),s(` {
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"200px"),s(`;
  `),a("span",{class:"hljs-attribute"},"overflow"),s(`: auto;
  `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#2979ff"),s(`;
}

`),a("span",{class:"hljs-selector-class"},".sticky-example-block"),s(` {
  `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"600px"),s(`;
  `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#2979ff"),s(`;
  `),a("span",{class:"hljs-attribute"},"opacity"),s(": ."),a("span",{class:"hljs-number"},"5"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),k=a("h2",null,"API",-1),N={class:"card"},w={id:"shu3xing4"},V=e("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>offset-top</code></td><td>吸顶距离</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>z-index</code></td><td>吸顶时的层级</td><td><em>string | number</em></td><td><code>10</code></td></tr><tr><td><code>css-mode</code></td><td>开启原生 <code>css sticky</code> 模式</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>禁用吸顶, 设置为 <code>true</code> 时, 元素会回到文档流中</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table>",1),$={class:"card"},z={id:"fang1fa3"},B=e("<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>resize</code></td><td>触发粘性布局重绘</td><td><code>-</code></td><td><code>Promise&lt;void&gt;</code></td></tr></tbody></table>",1),C={class:"card"},P={id:"shi4jian4"},T=e("<table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>scroll</code></td><td>当滚动容器滚动时触发</td><td><code>offsetTop: number</code> 距离顶部的 px 值 <br> <code>isFixed: boolean</code> 是否吸顶</td></tr></tbody></table>",1),q={class:"card"},A={id:"cha1cao2"},E=a("table",null,[a("thead",null,[a("tr",null,[a("th",null,"插槽名"),a("th",null,"说明"),a("th",null,"参数")])]),a("tbody",null,[a("tr",null,[a("td",null,[a("code",null,"default")]),a("td",null,"粘性布局的内容"),a("td",null,[a("code",null,"-")])])])],-1);function F(I,S,Z,D,G,H){const n=d("router-link"),c=d("var-site-code-example");return o(),p("div",r,[j,a("div",_,[a("h3",u,[t(n,{to:"#jie4shao4"},{default:l(()=>[s("#")]),_:1}),s("介绍")]),m]),a("div",b,[a("h3",g,[t(n,{to:"#ji1ben3shi3yong4"},{default:l(()=>[s("#")]),_:1}),s("基本使用")]),t(c,null,{default:l(()=>[f]),_:1})]),a("div",v,[a("h3",y,[t(n,{to:"#ju2bu4xi1ding3"},{default:l(()=>[s("#")]),_:1}),s("局部吸顶")]),t(c,null,{default:l(()=>[x]),_:1})]),k,a("div",N,[a("h3",w,[t(n,{to:"#shu3xing4"},{default:l(()=>[s("#")]),_:1}),s("属性")]),V]),a("div",$,[a("h3",z,[t(n,{to:"#fang1fa3"},{default:l(()=>[s("#")]),_:1}),s("方法")]),B]),a("div",C,[a("h3",P,[t(n,{to:"#shi4jian4"},{default:l(()=>[s("#")]),_:1}),s("事件")]),T]),a("div",q,[a("h3",A,[t(n,{to:"#cha1cao2"},{default:l(()=>[s("#")]),_:1}),s("插槽")]),E])])}const K=h(i,[["render",F]]);export{K as default};
