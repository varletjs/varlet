import{_ as c,b as o,e as r,m as h,p as s,q as e,w as l,P as a}from"./index-vwO9GBzB.js";const p={components:{}},i={class:"varlet-site-doc"},d=s("h1",null,"Dark Mode",-1),m={class:"card"},_={id:"Intro"},u=s("p",null,"The first party of the component library provides the theme of dark mode. The advantage of dark mode is that it has higher readability in low light environments.",-1),j={class:"card"},g={id:"ToggleTheme"},b=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { StyleProvider, Themes } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`

`),s("span",{class:"hljs-keyword"},"let"),a(" currentTheme = "),s("span",{class:"hljs-literal"},"null"),a(`

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"toggleTheme"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
  currentTheme = currentTheme ? `),s("span",{class:"hljs-literal"},"null"),a(` : Themes.dark
  StyleProvider(currentTheme)
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-button"),a(),s("span",{class:"hljs-attr"},"block"),a(" @"),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"toggleTheme"'),a(">")]),a("Toggle Theme"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),v=s("p",null,[a("Inject the "),s("code",null,"text color"),a(" and "),s("code",null,"background color"),a(" variables recommended by the component library to control the overall color.")],-1),T=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-selector-tag"},"body"),a(` {
  `),s("span",{class:"hljs-attribute"},"transition"),a(": background-color ."),s("span",{class:"hljs-number"},"25s"),a(", color ."),s("span",{class:"hljs-number"},"25s"),a(`;
  `),s("span",{class:"hljs-attribute"},"color"),a(": "),s("span",{class:"hljs-built_in"},"var"),a(`(--color-text);
  `),s("span",{class:"hljs-attribute"},"background-color"),a(": "),s("span",{class:"hljs-built_in"},"var"),a(`(--color-body);
}
`)])],-1);function f(k,y,x,w,I,$){const n=o("router-link"),t=o("var-site-code-example");return r(),h("div",i,[d,s("div",m,[s("h3",_,[e(n,{to:"#Intro"},{default:l(()=>[a("#")]),_:1}),a("Intro")]),u]),s("div",j,[s("h3",g,[e(n,{to:"#ToggleTheme"},{default:l(()=>[a("#")]),_:1}),a("Toggle Theme")]),e(t,{"playground-ignore":""},{default:l(()=>[b]),_:1}),v,e(t,{"playground-ignore":""},{default:l(()=>[T]),_:1})])])}const N=c(p,[["render",f]]);export{N as default};
