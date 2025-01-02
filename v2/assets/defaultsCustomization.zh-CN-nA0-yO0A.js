import{_ as c,b as o,e as p,m as r,p as s,q as n,w as t,P as a}from"./index-vwO9GBzB.js";const h={components:{}},i={class:"varlet-site-doc"},_=s("h1",null,"默认值定制",-1),d={class:"card"},j={id:"jie4shao4"},m=s("p",null,"组件库提供对组件属性的默认值进行定制的能力。",-1),u={class:"card"},g={id:"ji1ben3yong4fa3"},f=s("p",null,[a("通过组件提供的静态方法 "),s("code",null,"setPropsDefaults"),a(" 对组件的属性定义进行定制。需要注意的是，属性定制只对声明式组件生效，并且定制行为应在组件初始化之前。")],-1),v=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// main.ts"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { Button } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`

Button.setPropsDefaults({
  `),s("span",{class:"hljs-attr"},"type"),a(": "),s("span",{class:"hljs-string"},"'primary'"),a(`,
  `),s("span",{class:"hljs-attr"},"elevation"),a(": "),s("span",{class:"hljs-number"},"10"),a(`
})
`)])],-1),y=s("p",null,"定制之后，下面两种写法将会是等价的。",-1),b=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"<!-- App.vue -->"),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a("Hello"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),x=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"<!-- App.vue -->"),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-button"),a(),s("span",{class:"hljs-attr"},"type"),a("="),s("span",{class:"hljs-string"},'"primary"'),a(),s("span",{class:"hljs-attr"},":elevation"),a("="),s("span",{class:"hljs-string"},'"10"'),a(">")]),a("Hello"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1);function k(B,w,C,N,$,P){const e=o("router-link"),l=o("var-site-code-example");return p(),r("div",i,[_,s("div",d,[s("h3",j,[n(e,{to:"#jie4shao4"},{default:t(()=>[a("#")]),_:1}),a("介绍")]),m]),s("div",u,[s("h3",g,[n(e,{to:"#ji1ben3yong4fa3"},{default:t(()=>[a("#")]),_:1}),a("基本用法")]),f,n(l,{"playground-ignore":""},{default:t(()=>[v]),_:1}),y,n(l,{"playground-ignore":""},{default:t(()=>[b]),_:1}),n(l,{"playground-ignore":""},{default:t(()=>[x]),_:1})])])}const z=c(h,[["render",k]]);export{z as default};
