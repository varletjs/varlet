import{_ as o,b as c,e as r,m as h,p as s,q as l,w as n,P as a}from"./index-vwO9GBzB.js";const p={components:{}},i={class:"varlet-site-doc"},d=s("h1",null,"暗黑模式",-1),u={class:"card"},_={id:"jie4shao4"},j=s("p",null,"组件库第一方提供了暗黑模式的主题，暗黑模式的优势在于在弱光环境下具有更高的可读性。",-1),m={class:"card"},g={id:"qie4huan4zhu3ti2"},b=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { StyleProvider, Themes } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`

`),s("span",{class:"hljs-keyword"},"let"),a(" currentTheme = "),s("span",{class:"hljs-literal"},"null"),a(`

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"toggleTheme"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
  currentTheme = currentTheme ? `),s("span",{class:"hljs-literal"},"null"),a(` : Themes.dark
  StyleProvider(currentTheme)
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-button"),a(),s("span",{class:"hljs-attr"},"block"),a(" @"),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"toggleTheme"'),a(">")]),a("切换主题"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),v=s("p",null,[a("注入组件库推荐的 "),s("code",null,"文字颜色"),a(" 和 "),s("code",null,"背景颜色"),a(" 变量来控制整体颜色。")],-1),f=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-selector-tag"},"body"),a(` {
  `),s("span",{class:"hljs-attribute"},"transition"),a(": background-color ."),s("span",{class:"hljs-number"},"25s"),a(", color ."),s("span",{class:"hljs-number"},"25s"),a(`;
  `),s("span",{class:"hljs-attribute"},"color"),a(": "),s("span",{class:"hljs-built_in"},"var"),a(`(--color-text);
  `),s("span",{class:"hljs-attribute"},"background-color"),a(": "),s("span",{class:"hljs-built_in"},"var"),a(`(--color-body);
}
`)])],-1);function k(y,T,x,w,N,$){const e=c("router-link"),t=c("var-site-code-example");return r(),h("div",i,[d,s("div",u,[s("h3",_,[l(e,{to:"#jie4shao4"},{default:n(()=>[a("#")]),_:1}),a("介绍")]),j]),s("div",m,[s("h3",g,[l(e,{to:"#qie4huan4zhu3ti2"},{default:n(()=>[a("#")]),_:1}),a("切换主题")]),l(t,{"playground-ignore":""},{default:n(()=>[b]),_:1}),v,l(t,{"playground-ignore":""},{default:n(()=>[f]),_:1})])])}const z=o(p,[["render",k]]);export{z as default};
