import{b as o,m as i,p as s,q as l,Q as a,w as t,e as p,h as d}from"./index-BVOqiAXw.js";const m={components:{}},c={class:"varlet-site-doc"},j={class:"card"},h={id:"Intro"},g={class:"card"},u={id:"UnoCSS"},v={class:"card"},f={id:"Tailwindcss"},y={class:"card"},w={id:"Usage"};function b(x,n,k,S,C,U){const r=p("router-link"),e=p("var-site-code-example");return d(),i("div",c,[n[22]||(n[22]=s("h1",null,"Atomic CSS support",-1)),s("div",j,[s("h3",h,[l(r,{to:"#Intro"},{default:t(()=>n[0]||(n[0]=[a("#")])),_:1}),n[1]||(n[1]=a("Intro"))]),n[2]||(n[2]=s("p",null,"We've provided common CSS atomization framework presets, made it easier to access the component library's underlying style variables, and standardized page responsiveness breakpoints.",-1))]),s("div",g,[s("h3",u,[l(r,{to:"#UnoCSS"},{default:t(()=>n[3]||(n[3]=[a("#")])),_:1}),n[4]||(n[4]=a("UnoCSS"))]),n[7]||(n[7]=s("p",null,[a("Presets detailed definition "),s("a",{href:"https://github.com/varletjs/varlet/blob/main/packages/varlet-preset-unocss/src/index.ts"},"please watch here"),a(".")],-1)),n[8]||(n[8]=s("h4",null,"Install",-1)),l(e,{"playground-ignore":""},{default:t(()=>n[5]||(n[5]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," npm"),a(`
npm i @varlet/preset-unocss -D
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," yarn"),a(`
yarn add @varlet/preset-unocss -D
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," pnpm"),a(`
pnpm add @varlet/preset-unocss -D
`)])],-1)])),_:1}),n[9]||(n[9]=s("h4",null,"Configuration",-1)),l(e,{"playground-ignore":""},{default:t(()=>n[6]||(n[6]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// uno.config.ts"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { defineConfig, presetUno } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'unocss'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { presetVarlet } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/preset-unocss'"),a(`

`),s("span",{class:"hljs-keyword"},"export"),a(),s("span",{class:"hljs-keyword"},"default"),a(` defineConfig({
  `),s("span",{class:"hljs-attr"},"presets"),a(`: [presetUno(), presetVarlet()]
})
`)])],-1)])),_:1})]),s("div",v,[s("h3",f,[l(r,{to:"#Tailwindcss"},{default:t(()=>n[10]||(n[10]=[a("#")])),_:1}),n[11]||(n[11]=a("Tailwindcss"))]),n[14]||(n[14]=s("p",null,[a("Presets detailed definition "),s("a",{href:"https://github.com/varletjs/varlet/blob/main/packages/varlet-preset-tailwindcss/src/index.ts"},"please watch here"),a(".")],-1)),n[15]||(n[15]=s("h4",null,"Install",-1)),l(e,{"playground-ignore":""},{default:t(()=>n[12]||(n[12]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," npm"),a(`
npm i @varlet/preset-tailwindcss -D
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," yarn"),a(`
yarn add @varlet/preset-tailwindcss -D
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," pnpm"),a(`
pnpm add @varlet/preset-tailwindcss -D
`)])],-1)])),_:1}),n[16]||(n[16]=s("h4",null,"Configuration",-1)),l(e,{"playground-ignore":""},{default:t(()=>n[13]||(n[13]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// tailwind.config.js"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { presetVarlet } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/preset-tailwindcss'"),a(`

`),s("span",{class:"hljs-keyword"},"export"),a(),s("span",{class:"hljs-keyword"},"default"),a(` {
  `),s("span",{class:"hljs-attr"},"content"),a(`: [
    `),s("span",{class:"hljs-string"},"'./index.html'"),a(`,
    `),s("span",{class:"hljs-string"},"'./src/**/*.{vue,js,ts,jsx,tsx}'"),a(`,
  ],
  `),s("span",{class:"hljs-attr"},"presets"),a(`: [presetVarlet()]
}
`)])],-1)])),_:1})]),s("div",y,[s("h3",w,[l(r,{to:"#Usage"},{default:t(()=>n[17]||(n[17]=[a("#")])),_:1}),n[18]||(n[18]=a("Usage"))]),l(e,{"playground-ignore":""},{default:t(()=>n[19]||(n[19]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"text-on-primary bg-primary text-md"'),a(">")]),a("hello"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"text-on-primary-container bg-primary-container text-lg"'),a(">")]),a("world"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"bg-primary sm:bg-info md:bg-warning lg:bg-danger xl:bg-success"'),a(">")]),a("varlet"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1)])),_:1}),n[21]||(n[21]=s("p",null,"We also support the HSL variables, which makes the transparency of adjusting the color easier.",-1)),l(e,{"playground-ignore":""},{default:t(()=>n[20]||(n[20]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"bg-hsl-primary/50 text-hsl-text/70"'),a(">")]),a("hello"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1)])),_:1})])])}const D=o(m,[["render",b]]);export{D as default};
