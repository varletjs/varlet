import{_ as o,b as c,e as p,m as i,p as a,q as n,w as l,P as s}from"./index-vwO9GBzB.js";const h={components:{}},r={class:"varlet-site-doc"},j=a("h1",null,"海拔效果",-1),d={class:"card"},_={id:"jie4shao4"},u=a("p",null,[s("组件库提供了基于 "),a("code",null,"Material"),s(" 规范的阴影海拔效果，用来表现元素的立体感。")],-1),m={class:"card"},g={id:"yin3ru4yang4shi4"},v=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@varlet/ui/es/styles/elevation.css'"),s(`
`)])],-1),b={class:"card"},x={id:"ji1ben3shi3yong4"},f=a("p",null,[s("阴影程度划分为 "),a("code",null,"0-24"),s(" 个等级，等级越高海拔越高。")],-1),y=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"elevation-example-list"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"[40, 0]"'),s(),a("span",{class:"hljs-attr"},"justify"),s("="),a("span",{class:"hljs-string"},'"space-between"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(`
      `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"elevation-example-item"'),s(`
      `),a("span",{class:"hljs-attr"},":class"),s("="),a("span",{class:"hljs-string"},'"`var-elevation--${e - 1}`"'),s(`
      `),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"e in 25"'),s(`
      `),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"e"'),s(`
    >`)]),s(`
      {{ e - 1 }}
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".elevation-example-list"),s(` {
  `),a("span",{class:"hljs-attribute"},"margin-top"),s(": "),a("span",{class:"hljs-number"},"8px"),s(),a("span",{class:"hljs-meta"},"!important"),s(`;
}

`),a("span",{class:"hljs-selector-class"},".elevation-example-item"),s(` {
  `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100px"),s(`;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"100px"),s(`;
  `),a("span",{class:"hljs-attribute"},"border-radius"),s(": "),a("span",{class:"hljs-number"},"4px"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1);function k(w,$,N,B,C,V){const e=c("router-link"),t=c("var-site-code-example");return p(),i("div",r,[j,a("div",d,[a("h3",_,[n(e,{to:"#jie4shao4"},{default:l(()=>[s("#")]),_:1}),s("介绍")]),u]),a("div",m,[a("h3",g,[n(e,{to:"#yin3ru4yang4shi4"},{default:l(()=>[s("#")]),_:1}),s("引入样式")]),n(t,{"playground-ignore":""},{default:l(()=>[v]),_:1})]),a("div",b,[a("h3",x,[n(e,{to:"#ji1ben3shi3yong4"},{default:l(()=>[s("#")]),_:1}),s("基本使用")]),f,n(t,null,{default:l(()=>[y]),_:1})])])}const q=o(h,[["render",k]]);export{q as default};
