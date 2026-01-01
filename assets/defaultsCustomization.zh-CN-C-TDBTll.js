import{b as r,m as i,p as s,q as n,Q as a,w as t,e as p,h as d}from"./index-DtCrA0ro.js";const j={components:{}},m={class:"varlet-site-doc"},u={class:"card"},c={id:"jie4shao4"},h={class:"card"},g={id:"ji1ben3yong4fa3"};function f(v,l,y,_,b,x){const o=p("router-link"),e=p("var-site-code-example");return d(),i("div",m,[l[10]||(l[10]=s("h1",null,"默认值定制",-1)),s("div",u,[s("h3",c,[n(o,{to:"#jie4shao4"},{default:t(()=>[...l[0]||(l[0]=[a("#",-1)])]),_:1}),l[1]||(l[1]=a("介绍",-1))]),l[2]||(l[2]=s("p",null,"组件库提供对组件属性的默认值进行定制的能力。",-1))]),s("div",h,[s("h3",g,[n(o,{to:"#ji1ben3yong4fa3"},{default:t(()=>[...l[3]||(l[3]=[a("#",-1)])]),_:1}),l[4]||(l[4]=a("基本用法",-1))]),l[8]||(l[8]=s("p",null,[a("通过组件提供的静态方法 "),s("code",null,"setPropsDefaults"),a(" 对组件的属性定义进行定制。需要注意的是，属性定制只对声明式组件生效，并且定制行为应在组件初始化之前。")],-1)),n(e,{"playground-ignore":""},{default:t(()=>[...l[5]||(l[5]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// main.ts"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { Button } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`

Button.setPropsDefaults({
  `),s("span",{class:"hljs-attr"},"type"),a(": "),s("span",{class:"hljs-string"},"'primary'"),a(`,
  `),s("span",{class:"hljs-attr"},"elevation"),a(": "),s("span",{class:"hljs-number"},"10"),a(`
})
`)])],-1)])]),_:1}),l[9]||(l[9]=s("p",null,"定制之后，下面两种写法将会是等价的。",-1)),n(e,{"playground-ignore":""},{default:t(()=>[...l[6]||(l[6]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"<!-- App.vue -->"),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a("Hello"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1)])]),_:1}),n(e,{"playground-ignore":""},{default:t(()=>[...l[7]||(l[7]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"<!-- App.vue -->"),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-button"),a(),s("span",{class:"hljs-attr"},"type"),a("="),s("span",{class:"hljs-string"},'"primary"'),a(),s("span",{class:"hljs-attr"},":elevation"),a("="),s("span",{class:"hljs-string"},'"10"'),a(">")]),a("Hello"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1)])]),_:1})])])}const B=r(j,[["render",f]]);export{B as default};
