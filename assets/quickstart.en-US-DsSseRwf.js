import{_ as r,m as c,p as s,q as n,w as t,Q as a,b as o,e as p}from"./index-p72OOaSl.js";const i={components:{}},d={class:"varlet-site-doc"},h=s("h1",null,"Quick Start",-1),u={class:"card"},m={id:"Intro"},_=s("p",null,"Here are the most basic ways to access component libraries in common development patterns.",-1),j={class:"card"},g={id:"Install"},y=s("h4",null,"CDN",-1),v=s("p",null,[s("code",null,"varlet.js"),a(" contain all the styles and logic of the component library, and you can import them.")],-1),f=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"id"),a("="),s("span",{class:"hljs-string"},'"app"'),a(">")]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"src"),a("="),s("span",{class:"hljs-string"},'"https://cdn.jsdelivr.net/npm/vue"'),a(">")]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"src"),a("="),s("span",{class:"hljs-string"},'"https://cdn.jsdelivr.net/npm/@varlet/ui/umd/varlet.js"'),a(">")]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(">")]),s("span",{class:"javascript"},[a(`
  `),s("span",{class:"hljs-keyword"},"const"),a(` app = Vue.createApp({
    `),s("span",{class:"hljs-attr"},"template"),a(": "),s("span",{class:"hljs-string"},"'<var-button>Button</var-button>'"),a(`
  })
  app.use(Varlet).mount(`),s("span",{class:"hljs-string"},"'#app'"),a(`)
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`
`)])],-1),k=s("h4",null,"Webpack/Vite",-1),b=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," Install with npm, yarn or pnpm"),a(`
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," npm"),a(`
npm i @varlet/ui -S
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," yarn"),a(`
yarn add @varlet/ui
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," pnpm"),a(`
pnpm add @varlet/ui
`)])],-1),w=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),a(" App "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'./App.vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" Varlet "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(),s("span",{class:"hljs-string"},"'@varlet/ui/es/style'"),a(`

createApp(App).use(Varlet).mount(`),s("span",{class:"hljs-string"},"'#app'"),a(`)
`)])],-1),D={class:"card"},S={id:"SupportDesktop"},V=s("p",null,[s("code",null,"Varlet"),a(" is a mobile-first component library. To support desktop, you need to install an adapter. See "),s("a",{href:"#/en-US/browserAdaptation"},"browser adaptation"),a(" for details.")],-1),x={class:"card"},C={id:"Chooseadesignsystem"},M=s("p",null,"Starting from version 3.x, Varlet supports both Material Design 2 and Material Design 3 design systems.",-1),A=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// Varlet defaults to Material Design 2 light mode"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { Themes, StyleProvider } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`

`),s("span",{class:"hljs-comment"},"// Material Design 2 Dark Mode"),a(`
StyleProvider(Themes.dark)
`),s("span",{class:"hljs-comment"},"// Material Design 3 Light Mode"),a(`
StyleProvider(Themes.md3Light)
`),s("span",{class:"hljs-comment"},"// Material Design 3 Dark Mode"),a(`
StyleProvider(Themes.md3Dark)
`)])],-1),I=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-selector-tag"},"body"),a(` {
  `),s("span",{class:"hljs-attribute"},"transition"),a(": background-color ."),s("span",{class:"hljs-number"},"25s"),a(", color ."),s("span",{class:"hljs-number"},"25s"),a(`;
  `),s("span",{class:"hljs-attribute"},"color"),a(": "),s("span",{class:"hljs-built_in"},"var"),a(`(--color-text);
  `),s("span",{class:"hljs-attribute"},"background-color"),a(": "),s("span",{class:"hljs-built_in"},"var"),a(`(--color-body);
}
`)])],-1),P={class:"card"},T={id:"ComponentsPlayground"},B=s("p",null,[a("We provide a web version of the component editor, which is convenient for you to quickly get started with each component of the component library, edit it online, share it with others, or download the code package to run locally. You can click the "),s("code",null,"{...}"),a(" icon in the upper right corner of the page or "),s("a",{href:"https://varletjs.org/playground"},"go here"),a(".")],-1);function N($,q,L,Q,U,W){const e=o("router-link"),l=o("var-site-code-example");return p(),c("div",d,[h,s("div",u,[s("h3",m,[n(e,{to:"#Intro"},{default:t(()=>[a("#")]),_:1}),a("Intro")]),_]),s("div",j,[s("h3",g,[n(e,{to:"#Install"},{default:t(()=>[a("#")]),_:1}),a("Install")]),y,v,n(l,{"playground-ignore":""},{default:t(()=>[f]),_:1}),k,n(l,{"playground-ignore":""},{default:t(()=>[b]),_:1}),n(l,{"playground-ignore":""},{default:t(()=>[w]),_:1})]),s("div",D,[s("h3",S,[n(e,{to:"#SupportDesktop"},{default:t(()=>[a("#")]),_:1}),a("Support Desktop")]),V]),s("div",x,[s("h3",C,[n(e,{to:"#Chooseadesignsystem"},{default:t(()=>[a("#")]),_:1}),a("Choose a design system")]),M,n(l,{"playground-ignore":""},{default:t(()=>[A]),_:1}),n(l,{"playground-ignore":""},{default:t(()=>[I]),_:1})]),s("div",P,[s("h3",T,[n(e,{to:"#ComponentsPlayground"},{default:t(()=>[a("#")]),_:1}),a("Components Playground")]),B])])}const H=r(i,[["render",N]]);export{H as default};
