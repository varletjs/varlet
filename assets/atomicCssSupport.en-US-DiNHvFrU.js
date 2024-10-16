import{_ as c,m as r,p as s,q as n,w as e,Q as a,b as o,e as p}from"./index-p72OOaSl.js";const i={components:{}},d={class:"varlet-site-doc"},h=s("h1",null,"Atomic CSS support",-1),_={class:"card"},m={id:"Intro"},j=s("p",null,"We've provided common CSS atomization framework presets, made it easier to access the component library's underlying style variables, and standardized page responsiveness breakpoints.",-1),g={class:"card"},u={id:"UnoCSS"},v=s("p",null,[a("Presets detailed definition "),s("a",{href:"https://github.com/varletjs/varlet/blob/main/packages/varlet-preset-unocss/src/index.ts"},"please watch here"),a(".")],-1),f=s("h4",null,"Install",-1),y=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," npm"),a(`
npm i @varlet/preset-unocss -D
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," yarn"),a(`
yarn add @varlet/preset-unocss -D
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," pnpm"),a(`
pnpm add @varlet/preset-unocss -D
`)])],-1),w=s("h4",null,"Configuration",-1),b=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// uno.config.ts"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { defineConfig, presetUno } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'unocss'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { presetVarlet } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/preset-unocss'"),a(`

`),s("span",{class:"hljs-keyword"},"export"),a(),s("span",{class:"hljs-keyword"},"default"),a(` defineConfig({
  `),s("span",{class:"hljs-attr"},"presets"),a(`: [presetUno(), presetVarlet()]
})
`)])],-1),x={class:"card"},k={id:"Tailwindcss"},S=s("p",null,[a("Presets detailed definition "),s("a",{href:"https://github.com/varletjs/varlet/blob/main/packages/varlet-preset-tailwindcss/src/index.ts"},"please watch here"),a(".")],-1),C=s("h4",null,"Install",-1),U=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," npm"),a(`
npm i @varlet/preset-tailwindcss -D
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," yarn"),a(`
yarn add @varlet/preset-tailwindcss -D
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," pnpm"),a(`
pnpm add @varlet/preset-tailwindcss -D
`)])],-1),V=s("h4",null,"Configuration",-1),D=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// tailwind.config.js"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { presetVarlet } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/preset-tailwindcss'"),a(`

`),s("span",{class:"hljs-keyword"},"export"),a(),s("span",{class:"hljs-keyword"},"default"),a(` {
  `),s("span",{class:"hljs-attr"},"content"),a(`: [
    `),s("span",{class:"hljs-string"},"'./index.html'"),a(`,
    `),s("span",{class:"hljs-string"},"'./src/**/*.{vue,js,ts,jsx,tsx}'"),a(`,
  ],
  `),s("span",{class:"hljs-attr"},"presets"),a(`: [presetVarlet()]
}
`)])],-1),I={class:"card"},T={id:"Usage"},$=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"text-on-primary bg-primary text-md"'),a(">")]),a("hello"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"text-on-primary-container bg-primary-container text-lg"'),a(">")]),a("world"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"bg-primary sm:bg-info md:bg-warning lg:bg-danger xl:bg-success"'),a(">")]),a("varlet"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),B=s("p",null,"We also support the HSL variables, which makes the transparency of adjusting the color easier.",-1),N=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"bg-hsl-primary/50 text-hsl-text/70"'),a(">")]),a("hello"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1);function z(P,W,q,A,E,H){const t=o("router-link"),l=o("var-site-code-example");return p(),r("div",d,[h,s("div",_,[s("h3",m,[n(t,{to:"#Intro"},{default:e(()=>[a("#")]),_:1}),a("Intro")]),j]),s("div",g,[s("h3",u,[n(t,{to:"#UnoCSS"},{default:e(()=>[a("#")]),_:1}),a("UnoCSS")]),v,f,n(l,{"playground-ignore":""},{default:e(()=>[y]),_:1}),w,n(l,{"playground-ignore":""},{default:e(()=>[b]),_:1})]),s("div",x,[s("h3",k,[n(t,{to:"#Tailwindcss"},{default:e(()=>[a("#")]),_:1}),a("Tailwindcss")]),S,C,n(l,{"playground-ignore":""},{default:e(()=>[U]),_:1}),V,n(l,{"playground-ignore":""},{default:e(()=>[D]),_:1})]),s("div",I,[s("h3",T,[n(t,{to:"#Usage"},{default:e(()=>[a("#")]),_:1}),a("Usage")]),n(l,{"playground-ignore":""},{default:e(()=>[$]),_:1}),B,n(l,{"playground-ignore":""},{default:e(()=>[N]),_:1})])])}const Q=c(i,[["render",z]]);export{Q as default};
