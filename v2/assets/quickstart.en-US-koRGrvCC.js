import{_ as c,b as o,e as p,m as r,p as s,q as n,w as t,P as a}from"./index-vwO9GBzB.js";const i={components:{}},h={class:"varlet-site-doc"},d=s("h1",null,"Quick Start",-1),u={class:"card"},_={id:"Intro"},m=s("p",null,"Here are the most basic ways to access component libraries in common development patterns.",-1),j={class:"card"},g={id:"Install"},v=s("h4",null,"CDN",-1),y=s("p",null,[s("code",null,"varlet.js"),a(" contain all the styles and logic of the component library, and you can import them.")],-1),f=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"id"),a("="),s("span",{class:"hljs-string"},'"app"'),a(">")]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"src"),a("="),s("span",{class:"hljs-string"},'"https://cdn.jsdelivr.net/npm/vue"'),a(">")]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"src"),a("="),s("span",{class:"hljs-string"},'"https://cdn.jsdelivr.net/npm/@varlet/ui/umd/varlet.js"'),a(">")]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(">")]),s("span",{class:"javascript"},[a(`
  `),s("span",{class:"hljs-keyword"},"const"),a(` app = Vue.createApp({
    `),s("span",{class:"hljs-attr"},"template"),a(": "),s("span",{class:"hljs-string"},"'<var-button>Button</var-button>'"),a(`
  })
  app.use(Varlet).mount(`),s("span",{class:"hljs-string"},"'#app'"),a(`)
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`
`)])],-1),w=s("h4",null,"Webpack/Vite",-1),k=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," Install with npm, yarn or pnpm"),a(`
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," npm"),a(`
npm i @varlet/ui -S
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," yarn"),a(`
yarn add @varlet/ui
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," pnpm"),a(`
pnpm add @varlet/ui
`)])],-1),b=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),a(" App "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'./App.vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" Varlet "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(),s("span",{class:"hljs-string"},"'@varlet/ui/es/style'"),a(`

createApp(App).use(Varlet).mount(`),s("span",{class:"hljs-string"},"'#app'"),a(`)
`)])],-1),x={class:"card"},I={id:"ComponentsPlayground"},V=s("p",null,[a("We provide a web version of the component editor, which is convenient for you to quickly get started with each component of the component library, edit it online, share it with others, or download the code package to run locally. You can click the "),s("code",null,"{...}"),a(" icon in the upper right corner of the page or "),s("a",{href:"https://varletjs.github.io/varlet/playground"},"go here"),a(".")],-1),A={class:"card"},C={id:"Filepathnote"},B=s("p",null,[a("In "),s("code",null,"@varlet/ui@2.7.0"),a(" and later versions, we recommend using the following file import method with omitting the suffix to be compatible with "),s("code",null,"js"),a(" and "),s("code",null,"mjs")],-1),N=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),a(),s("span",{class:"hljs-string"},"'@varlet/ui/es/style'"),a(`
`)])],-1);function P($,q,F,S,W,D){const e=o("router-link"),l=o("var-site-code-example");return p(),r("div",h,[d,s("div",u,[s("h3",_,[n(e,{to:"#Intro"},{default:t(()=>[a("#")]),_:1}),a("Intro")]),m]),s("div",j,[s("h3",g,[n(e,{to:"#Install"},{default:t(()=>[a("#")]),_:1}),a("Install")]),v,y,n(l,{"playground-ignore":""},{default:t(()=>[f]),_:1}),w,n(l,{"playground-ignore":""},{default:t(()=>[k]),_:1}),n(l,{"playground-ignore":""},{default:t(()=>[b]),_:1})]),s("div",x,[s("h3",I,[n(e,{to:"#ComponentsPlayground"},{default:t(()=>[a("#")]),_:1}),a("Components Playground")]),V]),s("div",A,[s("h3",C,[n(e,{to:"#Filepathnote"},{default:t(()=>[a("#")]),_:1}),a("File path note")]),B,n(l,{"playground-ignore":""},{default:t(()=>[N]),_:1})])])}const H=c(i,[["render",P]]);export{H as default};
