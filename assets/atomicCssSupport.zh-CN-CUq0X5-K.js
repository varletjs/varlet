import{L as e,N as t,W as n,c as r,d as i,g as a,h as o}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as s}from"./_plugin-vue_export-helper-V-yks4gF.js";var c={components:{}},l={class:`varlet-site-doc`},u={class:`card`},d={id:`jie4shao4`},f={class:`card`},p={id:`UnoCSS`},m={class:`card`},h={id:`Tailwindcss`},g={class:`card`},_={id:`shi3yong4fang1shi4`};function v(s,c,v,y,b,x){let S=e(`router-link`),C=e(`var-site-code-example`);return t(),i(`div`,l,[c[27]||=r(`h1`,null,`原子化 CSS 支持`,-1),r(`div`,u,[r(`h3`,d,[a(S,{to:`#jie4shao4`},{default:n(()=>[...c[0]||=[o(`#`,-1)]]),_:1}),c[1]||=o(`介绍`,-1)]),c[2]||=r(`p`,null,`我们提供了常见的 CSS 原子化框架预设，使访问组件库的基础样式变量更加容易，并且一致化了页面响应式断点。`,-1)]),r(`div`,f,[r(`h3`,p,[a(S,{to:`#UnoCSS`},{default:n(()=>[...c[3]||=[o(`#`,-1)]]),_:1}),c[4]||=o(`UnoCSS`,-1)]),c[7]||=r(`h4`,null,`安装`,-1),a(C,{"playground-ignore":``},{default:n(()=>[...c[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-meta`},`#`),r(`span`,{class:`bash`},` npm`),o(`
npm i @varlet/preset-unocss -D
`),r(`span`,{class:`hljs-meta`},`#`),r(`span`,{class:`bash`},` yarn`),o(`
yarn add @varlet/preset-unocss -D
`),r(`span`,{class:`hljs-meta`},`#`),r(`span`,{class:`bash`},` pnpm`),o(`
pnpm add @varlet/preset-unocss -D
`)])],-1)]]),_:1}),c[8]||=r(`h4`,null,`配置`,-1),a(C,{"playground-ignore":``},{default:n(()=>[...c[6]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-comment`},`// uno.config.ts`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { defineConfig, presetUno } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'unocss'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { presetVarlet } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/preset-unocss'`),o(`

`),r(`span`,{class:`hljs-keyword`},`export`),o(),r(`span`,{class:`hljs-keyword`},`default`),o(` defineConfig({
  `),r(`span`,{class:`hljs-attr`},`presets`),o(`: [presetUno(), presetVarlet()]
})
`)])],-1)]]),_:1}),c[9]||=r(`h4`,null,`更多配置`,-1),c[10]||=r(`p`,null,[o(`预设的详细定义`),r(`a`,{href:`https://github.com/varletjs/varlet/blob/main/packages/varlet-preset-unocss/src/index.ts`},`请看这里`),o(`。`)],-1)]),r(`div`,m,[r(`h3`,h,[a(S,{to:`#Tailwindcss`},{default:n(()=>[...c[11]||=[o(`#`,-1)]]),_:1}),c[12]||=o(`Tailwindcss`,-1)]),c[17]||=r(`h4`,null,`安装`,-1),a(C,{"playground-ignore":``},{default:n(()=>[...c[13]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-meta`},`#`),r(`span`,{class:`bash`},` npm`),o(`
npm i @varlet/preset-tailwindcss -D
`),r(`span`,{class:`hljs-meta`},`#`),r(`span`,{class:`bash`},` yarn`),o(`
yarn add @varlet/preset-tailwindcss -D
`),r(`span`,{class:`hljs-meta`},`#`),r(`span`,{class:`bash`},` pnpm`),o(`
pnpm add @varlet/preset-tailwindcss -D
`)])],-1)]]),_:1}),c[18]||=r(`h4`,null,`Tailwindcss V3 配置`,-1),a(C,{"playground-ignore":``},{default:n(()=>[...c[14]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-comment`},`// tailwind.config.js`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { presetVarlet } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/preset-tailwindcss'`),o(`

`),r(`span`,{class:`hljs-keyword`},`export`),o(),r(`span`,{class:`hljs-keyword`},`default`),o(` {
  `),r(`span`,{class:`hljs-attr`},`content`),o(`: [
    `),r(`span`,{class:`hljs-string`},`'./index.html'`),o(`,
    `),r(`span`,{class:`hljs-string`},`'./src/**/*.{vue,js,ts,jsx,tsx}'`),o(`,
  ],
  `),r(`span`,{class:`hljs-attr`},`presets`),o(`: [presetVarlet()]
}
`)])],-1)]]),_:1}),c[19]||=r(`h4`,null,`Tailwindcss V4 配置`,-1),a(C,{"playground-ignore":``},{default:n(()=>[...c[15]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-comment`},`// tailwind.config.js`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { presetVarlet } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/preset-tailwindcss'`),o(`

`),r(`span`,{class:`hljs-keyword`},`export`),o(),r(`span`,{class:`hljs-keyword`},`default`),o(` {
  `),r(`span`,{class:`hljs-attr`},`presets`),o(`: [presetVarlet()]
}
`)])],-1)]]),_:1}),a(C,null,{default:n(()=>[...c[16]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-comment`},`/** src/style.css */`),o(`
`),r(`span`,{class:`hljs-keyword`},`@import`),o(),r(`span`,{class:`hljs-string`},`"tailwindcss"`),o(`;
`),r(`span`,{class:`hljs-keyword`},`@config`),o(),r(`span`,{class:`hljs-string`},`"../tailwind.config.js"`),o(`;
`)])],-1)]]),_:1}),c[20]||=r(`h4`,null,`更多配置`,-1),c[21]||=r(`p`,null,[o(`预设的详细定义`),r(`a`,{href:`https://github.com/varletjs/varlet/blob/main/packages/varlet-preset-tailwindcss/src/index.ts`},`请看这里`),o(`。`)],-1)]),r(`div`,g,[r(`h3`,_,[a(S,{to:`#shi3yong4fang1shi4`},{default:n(()=>[...c[22]||=[o(`#`,-1)]]),_:1}),c[23]||=o(`使用方式`,-1)]),a(C,{"playground-ignore":``},{default:n(()=>[...c[24]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"text-on-primary bg-primary text-md"`),o(`>`)]),o(`hello`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"text-on-primary-container bg-primary-container text-lg"`),o(`>`)]),o(`world`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"bg-primary sm:bg-info md:bg-warning lg:bg-danger xl:bg-success"`),o(`>`)]),o(`varlet`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1}),c[26]||=r(`p`,null,`我们同时也支持了 hsl 变量，这使得调整颜色的透明度变得更加容易。`,-1),a(C,{"playground-ignore":``},{default:n(()=>[...c[25]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"bg-hsl-primary/50 text-hsl-text/70"`),o(`>`)]),o(`hello`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})])])}var y=s(c,[[`render`,v]]);export{y as default};