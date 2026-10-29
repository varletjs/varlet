import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s}from"./runtime-core.esm-bundler-DUghkl6b.js";var c={components:{}},l={class:`varlet-site-doc`},u={class:`card`},d={id:`jie4shao4`},f={class:`card`},p={id:`UnoCSS`},m={class:`card`},h={id:`Tailwindcss`},g={class:`card`},_={id:`shi3yong4fang1shi4`};function v(e,c,v,y,b,x){let S=n(`router-link`),C=n(`var-site-code-example`);return r(),a(`div`,l,[c[27]||=i(`h1`,null,`原子化 CSS 支持`,-1),i(`div`,u,[i(`h3`,d,[o(S,{to:`#jie4shao4`},{default:t(()=>[...c[0]||=[s(`#`,-1)]]),_:1}),c[1]||=s(`介绍`,-1)]),c[2]||=i(`p`,null,`我们提供了常见的 CSS 原子化框架预设，使访问组件库的基础样式变量更加容易，并且一致化了页面响应式断点。`,-1)]),i(`div`,f,[i(`h3`,p,[o(S,{to:`#UnoCSS`},{default:t(()=>[...c[3]||=[s(`#`,-1)]]),_:1}),c[4]||=s(`UnoCSS`,-1)]),c[7]||=i(`h4`,null,`安装`,-1),o(C,{"playground-ignore":``},{default:t(()=>[...c[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-meta`},`#`),i(`span`,{class:`bash`},` npm`),s(`
npm i @varlet/preset-unocss -D
`),i(`span`,{class:`hljs-meta`},`#`),i(`span`,{class:`bash`},` yarn`),s(`
yarn add @varlet/preset-unocss -D
`),i(`span`,{class:`hljs-meta`},`#`),i(`span`,{class:`bash`},` pnpm`),s(`
pnpm add @varlet/preset-unocss -D
`)])],-1)]]),_:1}),c[8]||=i(`h4`,null,`配置`,-1),o(C,{"playground-ignore":``},{default:t(()=>[...c[6]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-comment`},`// uno.config.ts`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { defineConfig, presetUno } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'unocss'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { presetVarlet } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/preset-unocss'`),s(`

`),i(`span`,{class:`hljs-keyword`},`export`),s(),i(`span`,{class:`hljs-keyword`},`default`),s(` defineConfig({
  `),i(`span`,{class:`hljs-attr`},`presets`),s(`: [presetUno(), presetVarlet()]
})
`)])],-1)]]),_:1}),c[9]||=i(`h4`,null,`更多配置`,-1),c[10]||=i(`p`,null,[s(`预设的详细定义`),i(`a`,{href:`https://github.com/varletjs/varlet/blob/main/packages/varlet-preset-unocss/src/index.ts`},`请看这里`),s(`。`)],-1)]),i(`div`,m,[i(`h3`,h,[o(S,{to:`#Tailwindcss`},{default:t(()=>[...c[11]||=[s(`#`,-1)]]),_:1}),c[12]||=s(`Tailwindcss`,-1)]),c[17]||=i(`h4`,null,`安装`,-1),o(C,{"playground-ignore":``},{default:t(()=>[...c[13]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-meta`},`#`),i(`span`,{class:`bash`},` npm`),s(`
npm i @varlet/preset-tailwindcss -D
`),i(`span`,{class:`hljs-meta`},`#`),i(`span`,{class:`bash`},` yarn`),s(`
yarn add @varlet/preset-tailwindcss -D
`),i(`span`,{class:`hljs-meta`},`#`),i(`span`,{class:`bash`},` pnpm`),s(`
pnpm add @varlet/preset-tailwindcss -D
`)])],-1)]]),_:1}),c[18]||=i(`h4`,null,`Tailwindcss V3 配置`,-1),o(C,{"playground-ignore":``},{default:t(()=>[...c[14]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-comment`},`// tailwind.config.js`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { presetVarlet } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/preset-tailwindcss'`),s(`

`),i(`span`,{class:`hljs-keyword`},`export`),s(),i(`span`,{class:`hljs-keyword`},`default`),s(` {
  `),i(`span`,{class:`hljs-attr`},`content`),s(`: [
    `),i(`span`,{class:`hljs-string`},`'./index.html'`),s(`,
    `),i(`span`,{class:`hljs-string`},`'./src/**/*.{vue,js,ts,jsx,tsx}'`),s(`,
  ],
  `),i(`span`,{class:`hljs-attr`},`presets`),s(`: [presetVarlet()]
}
`)])],-1)]]),_:1}),c[19]||=i(`h4`,null,`Tailwindcss V4 配置`,-1),o(C,{"playground-ignore":``},{default:t(()=>[...c[15]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-comment`},`// tailwind.config.js`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { presetVarlet } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/preset-tailwindcss'`),s(`

`),i(`span`,{class:`hljs-keyword`},`export`),s(),i(`span`,{class:`hljs-keyword`},`default`),s(` {
  `),i(`span`,{class:`hljs-attr`},`presets`),s(`: [presetVarlet()]
}
`)])],-1)]]),_:1}),o(C,null,{default:t(()=>[...c[16]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-comment`},`/** src/style.css */`),s(`
`),i(`span`,{class:`hljs-keyword`},`@import`),s(),i(`span`,{class:`hljs-string`},`"tailwindcss"`),s(`;
`),i(`span`,{class:`hljs-keyword`},`@config`),s(),i(`span`,{class:`hljs-string`},`"../tailwind.config.js"`),s(`;
`)])],-1)]]),_:1}),c[20]||=i(`h4`,null,`更多配置`,-1),c[21]||=i(`p`,null,[s(`预设的详细定义`),i(`a`,{href:`https://github.com/varletjs/varlet/blob/main/packages/varlet-preset-tailwindcss/src/index.ts`},`请看这里`),s(`。`)],-1)]),i(`div`,g,[i(`h3`,_,[o(S,{to:`#shi3yong4fang1shi4`},{default:t(()=>[...c[22]||=[s(`#`,-1)]]),_:1}),c[23]||=s(`使用方式`,-1)]),o(C,{"playground-ignore":``},{default:t(()=>[...c[24]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"text-on-primary bg-primary text-md"`),s(`>`)]),s(`hello`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"text-on-primary-container bg-primary-container text-lg"`),s(`>`)]),s(`world`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"bg-primary sm:bg-info md:bg-warning lg:bg-danger xl:bg-success"`),s(`>`)]),s(`varlet`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1}),c[26]||=i(`p`,null,`我们同时也支持了 hsl 变量，这使得调整颜色的透明度变得更加容易。`,-1),o(C,{"playground-ignore":``},{default:t(()=>[...c[25]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"bg-hsl-primary/50 text-hsl-text/70"`),s(`>`)]),s(`hello`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})])])}var y=e(c,[[`render`,v]]);export{y as default};