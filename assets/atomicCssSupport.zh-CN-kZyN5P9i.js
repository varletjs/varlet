import{_ as o,b as c,e as p,m as r,p as s,q as n,w as l,P as a}from"./index-DG68leR3.js";const h={components:{}},i={class:"varlet-site-doc"},d=s("h1",null,"原子化 CSS 支持",-1),_={class:"card"},j={id:"jie4shao4"},m=s("p",null,"我们提供了常见的 CSS 原子化框架预设，使访问组件库的基础样式变量更加容易，并且一致化了页面响应式断点。",-1),g={class:"card"},u={id:"UnoCSS"},v=s("p",null,[a("预设的详细定义"),s("a",{href:"https://github.com/varletjs/varlet/blob/main/packages/varlet-preset-unocss/src/index.ts"},"请看这里"),a("。")],-1),f=s("h4",null,"安装",-1),y=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," npm"),a(`
npm i @varlet/preset-unocss -D
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," yarn"),a(`
yarn add @varlet/preset-unocss -D
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," pnpm"),a(`
pnpm add @varlet/preset-unocss -D
`)])],-1),w=s("h4",null,"配置",-1),b=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// uno.config.ts"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { defineConfig, presetUno } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'unocss'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { presetVarlet } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/preset-unocss'"),a(`

`),s("span",{class:"hljs-keyword"},"export"),a(),s("span",{class:"hljs-keyword"},"default"),a(` defineConfig({
  `),s("span",{class:"hljs-attr"},"presets"),a(`: [presetUno(), presetVarlet()]
})
`)])],-1),x={class:"card"},k={id:"Tailwindcss"},C=s("p",null,[a("预设的详细定义"),s("a",{href:"https://github.com/varletjs/varlet/blob/main/packages/varlet-preset-tailwindcss/src/index.ts"},"请看这里"),a("。")],-1),S=s("h4",null,"安装",-1),V=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," npm"),a(`
npm i @varlet/preset-tailwindcss -D
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," yarn"),a(`
yarn add @varlet/preset-tailwindcss -D
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," pnpm"),a(`
pnpm add @varlet/preset-tailwindcss -D
`)])],-1),D=s("h4",null,"配置",-1),U=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// tailwind.config.js"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { presetVarlet } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/preset-tailwindcss'"),a(`

`),s("span",{class:"hljs-keyword"},"export"),a(),s("span",{class:"hljs-keyword"},"default"),a(` {
  `),s("span",{class:"hljs-attr"},"content"),a(`: [
    `),s("span",{class:"hljs-string"},"'./index.html'"),a(`,
    `),s("span",{class:"hljs-string"},"'./src/**/*.{vue,js,ts,jsx,tsx}'"),a(`,
  ],
  `),s("span",{class:"hljs-attr"},"presets"),a(`: [presetVarlet()]
}
`)])],-1),N={class:"card"},T={id:"shi3yong4fang1shi4"},$=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"text-on-primary bg-primary text-md"'),a(">")]),a("hello"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"text-on-primary-container bg-primary-container text-lg"'),a(">")]),a("world"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"bg-primary sm:bg-info md:bg-warning lg:bg-danger xl:bg-success"'),a(">")]),a("varlet"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),B=s("p",null,"我们同时也支持了 hsl 变量，这使得调整颜色的透明度变得更加容易。",-1),q=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"bg-hsl-primary/50 text-hsl-text/70"'),a(">")]),a("hello"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1);function z(E,P,A,F,G,H){const e=c("router-link"),t=c("var-site-code-example");return p(),r("div",i,[d,s("div",_,[s("h3",j,[n(e,{to:"#jie4shao4"},{default:l(()=>[a("#")]),_:1}),a("介绍")]),m]),s("div",g,[s("h3",u,[n(e,{to:"#UnoCSS"},{default:l(()=>[a("#")]),_:1}),a("UnoCSS")]),v,f,n(t,{"playground-ignore":""},{default:l(()=>[y]),_:1}),w,n(t,{"playground-ignore":""},{default:l(()=>[b]),_:1})]),s("div",x,[s("h3",k,[n(e,{to:"#Tailwindcss"},{default:l(()=>[a("#")]),_:1}),a("Tailwindcss")]),C,S,n(t,{"playground-ignore":""},{default:l(()=>[V]),_:1}),D,n(t,{"playground-ignore":""},{default:l(()=>[U]),_:1})]),s("div",N,[s("h3",T,[n(e,{to:"#shi3yong4fang1shi4"},{default:l(()=>[a("#")]),_:1}),a("使用方式")]),n(t,{"playground-ignore":""},{default:l(()=>[$]),_:1}),B,n(t,{"playground-ignore":""},{default:l(()=>[q]),_:1})])])}const J=o(h,[["render",z]]);export{J as default};
