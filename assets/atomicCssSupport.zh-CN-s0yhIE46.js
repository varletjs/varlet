import{b as o,m as i,p as s,q as n,Q as a,w as t,e as r,h as d}from"./index-BSqpOXW_.js";const j={components:{}},m={class:"varlet-site-doc"},h={class:"card"},c={id:"jie4shao4"},g={class:"card"},u={id:"UnoCSS"},v={class:"card"},f={id:"Tailwindcss"},y={class:"card"},w={id:"shi3yong4fang1shi4"};function b(x,l,k,C,S,V){const p=r("router-link"),e=r("var-site-code-example");return d(),i("div",m,[l[22]||(l[22]=s("h1",null,"原子化 CSS 支持",-1)),s("div",h,[s("h3",c,[n(p,{to:"#jie4shao4"},{default:t(()=>l[0]||(l[0]=[a("#")])),_:1}),l[1]||(l[1]=a("介绍"))]),l[2]||(l[2]=s("p",null,"我们提供了常见的 CSS 原子化框架预设，使访问组件库的基础样式变量更加容易，并且一致化了页面响应式断点。",-1))]),s("div",g,[s("h3",u,[n(p,{to:"#UnoCSS"},{default:t(()=>l[3]||(l[3]=[a("#")])),_:1}),l[4]||(l[4]=a("UnoCSS"))]),l[7]||(l[7]=s("p",null,[a("预设的详细定义"),s("a",{href:"https://github.com/varletjs/varlet/blob/main/packages/varlet-preset-unocss/src/index.ts"},"请看这里"),a("。")],-1)),l[8]||(l[8]=s("h4",null,"安装",-1)),n(e,{"playground-ignore":""},{default:t(()=>l[5]||(l[5]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," npm"),a(`
npm i @varlet/preset-unocss -D
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," yarn"),a(`
yarn add @varlet/preset-unocss -D
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," pnpm"),a(`
pnpm add @varlet/preset-unocss -D
`)])],-1)])),_:1}),l[9]||(l[9]=s("h4",null,"配置",-1)),n(e,{"playground-ignore":""},{default:t(()=>l[6]||(l[6]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// uno.config.ts"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { defineConfig, presetUno } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'unocss'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { presetVarlet } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/preset-unocss'"),a(`

`),s("span",{class:"hljs-keyword"},"export"),a(),s("span",{class:"hljs-keyword"},"default"),a(` defineConfig({
  `),s("span",{class:"hljs-attr"},"presets"),a(`: [presetUno(), presetVarlet()]
})
`)])],-1)])),_:1})]),s("div",v,[s("h3",f,[n(p,{to:"#Tailwindcss"},{default:t(()=>l[10]||(l[10]=[a("#")])),_:1}),l[11]||(l[11]=a("Tailwindcss"))]),l[14]||(l[14]=s("p",null,[a("预设的详细定义"),s("a",{href:"https://github.com/varletjs/varlet/blob/main/packages/varlet-preset-tailwindcss/src/index.ts"},"请看这里"),a("。")],-1)),l[15]||(l[15]=s("h4",null,"安装",-1)),n(e,{"playground-ignore":""},{default:t(()=>l[12]||(l[12]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," npm"),a(`
npm i @varlet/preset-tailwindcss -D
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," yarn"),a(`
yarn add @varlet/preset-tailwindcss -D
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," pnpm"),a(`
pnpm add @varlet/preset-tailwindcss -D
`)])],-1)])),_:1}),l[16]||(l[16]=s("h4",null,"配置",-1)),n(e,{"playground-ignore":""},{default:t(()=>l[13]||(l[13]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// tailwind.config.js"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { presetVarlet } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/preset-tailwindcss'"),a(`

`),s("span",{class:"hljs-keyword"},"export"),a(),s("span",{class:"hljs-keyword"},"default"),a(` {
  `),s("span",{class:"hljs-attr"},"content"),a(`: [
    `),s("span",{class:"hljs-string"},"'./index.html'"),a(`,
    `),s("span",{class:"hljs-string"},"'./src/**/*.{vue,js,ts,jsx,tsx}'"),a(`,
  ],
  `),s("span",{class:"hljs-attr"},"presets"),a(`: [presetVarlet()]
}
`)])],-1)])),_:1})]),s("div",y,[s("h3",w,[n(p,{to:"#shi3yong4fang1shi4"},{default:t(()=>l[17]||(l[17]=[a("#")])),_:1}),l[18]||(l[18]=a("使用方式"))]),n(e,{"playground-ignore":""},{default:t(()=>l[19]||(l[19]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"text-on-primary bg-primary text-md"'),a(">")]),a("hello"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"text-on-primary-container bg-primary-container text-lg"'),a(">")]),a("world"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"bg-primary sm:bg-info md:bg-warning lg:bg-danger xl:bg-success"'),a(">")]),a("varlet"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1)])),_:1}),l[21]||(l[21]=s("p",null,"我们同时也支持了 hsl 变量，这使得调整颜色的透明度变得更加容易。",-1)),n(e,{"playground-ignore":""},{default:t(()=>l[20]||(l[20]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"bg-hsl-primary/50 text-hsl-text/70"'),a(">")]),a("hello"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1)])),_:1})])])}const U=o(j,[["render",b]]);export{U as default};
