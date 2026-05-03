import{L as e,N as t,W as n,c as r,d as i,g as a,h as o}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as s}from"./_plugin-vue_export-helper-V-yks4gF.js";var c={components:{}},l={class:`varlet-site-doc`},u={class:`card`},d={id:`Intro`},f={class:`card`},p={id:`UnoCSS`},m={class:`card`},h={id:`Tailwindcss`},g={class:`card`},_={id:`MoreOptions`},v={class:`card`},y={id:`Usage`};function b(s,c,b,x,S,C){let w=e(`router-link`),T=e(`var-site-code-example`);return t(),i(`div`,l,[c[28]||=r(`h1`,null,`Atomic CSS support`,-1),r(`div`,u,[r(`h3`,d,[a(w,{to:`#Intro`},{default:n(()=>[...c[0]||=[o(`#`,-1)]]),_:1}),c[1]||=o(`Intro`,-1)]),c[2]||=r(`p`,null,`We've provided common CSS atomization framework presets, made it easier to access the component library's underlying style variables, and standardized page responsiveness breakpoints.`,-1)]),r(`div`,f,[r(`h3`,p,[a(w,{to:`#UnoCSS`},{default:n(()=>[...c[3]||=[o(`#`,-1)]]),_:1}),c[4]||=o(`UnoCSS`,-1)]),c[7]||=r(`h4`,null,`Install`,-1),a(T,{"playground-ignore":``},{default:n(()=>[...c[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-meta`},`#`),r(`span`,{class:`bash`},` npm`),o(`
npm i @varlet/preset-unocss -D
`),r(`span`,{class:`hljs-meta`},`#`),r(`span`,{class:`bash`},` yarn`),o(`
yarn add @varlet/preset-unocss -D
`),r(`span`,{class:`hljs-meta`},`#`),r(`span`,{class:`bash`},` pnpm`),o(`
pnpm add @varlet/preset-unocss -D
`)])],-1)]]),_:1}),c[8]||=r(`h4`,null,`Configuration`,-1),a(T,{"playground-ignore":``},{default:n(()=>[...c[6]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-comment`},`// uno.config.ts`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { defineConfig, presetUno } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'unocss'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { presetVarlet } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/preset-unocss'`),o(`

`),r(`span`,{class:`hljs-keyword`},`export`),o(),r(`span`,{class:`hljs-keyword`},`default`),o(` defineConfig({
  `),r(`span`,{class:`hljs-attr`},`presets`),o(`: [presetUno(), presetVarlet()]
})
`)])],-1)]]),_:1}),c[9]||=r(`h4`,null,`More Options`,-1),c[10]||=r(`p`,null,[o(`Presets detailed definition `),r(`a`,{href:`https://github.com/varletjs/varlet/blob/main/packages/varlet-preset-unocss/src/index.ts`},`please watch here`),o(`.`)],-1)]),r(`div`,m,[r(`h3`,h,[a(w,{to:`#Tailwindcss`},{default:n(()=>[...c[11]||=[o(`#`,-1)]]),_:1}),c[12]||=o(`Tailwindcss`,-1)]),c[17]||=r(`h4`,null,`Install`,-1),a(T,{"playground-ignore":``},{default:n(()=>[...c[13]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-meta`},`#`),r(`span`,{class:`bash`},` npm`),o(`
npm i @varlet/preset-tailwindcss -D
`),r(`span`,{class:`hljs-meta`},`#`),r(`span`,{class:`bash`},` yarn`),o(`
yarn add @varlet/preset-tailwindcss -D
`),r(`span`,{class:`hljs-meta`},`#`),r(`span`,{class:`bash`},` pnpm`),o(`
pnpm add @varlet/preset-tailwindcss -D
`)])],-1)]]),_:1}),c[18]||=r(`h4`,null,`Tailwindcss V3 Configuration`,-1),a(T,{"playground-ignore":``},{default:n(()=>[...c[14]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-comment`},`// tailwind.config.js`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { presetVarlet } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/preset-tailwindcss'`),o(`

`),r(`span`,{class:`hljs-keyword`},`export`),o(),r(`span`,{class:`hljs-keyword`},`default`),o(` {
  `),r(`span`,{class:`hljs-attr`},`content`),o(`: [
    `),r(`span`,{class:`hljs-string`},`'./index.html'`),o(`,
    `),r(`span`,{class:`hljs-string`},`'./src/**/*.{vue,js,ts,jsx,tsx}'`),o(`,
  ],
  `),r(`span`,{class:`hljs-attr`},`presets`),o(`: [presetVarlet()]
}
`)])],-1)]]),_:1}),c[19]||=r(`h4`,null,`Tailwindcss V4 Configuration`,-1),a(T,{"playground-ignore":``},{default:n(()=>[...c[15]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-comment`},`// tailwind.config.js`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { presetVarlet } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/preset-tailwindcss'`),o(`

`),r(`span`,{class:`hljs-keyword`},`export`),o(),r(`span`,{class:`hljs-keyword`},`default`),o(` {
  `),r(`span`,{class:`hljs-attr`},`presets`),o(`: [presetVarlet()]
}
`)])],-1)]]),_:1}),a(T,null,{default:n(()=>[...c[16]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-comment`},`/** src/style.css */`),o(`
`),r(`span`,{class:`hljs-keyword`},`@import`),o(),r(`span`,{class:`hljs-string`},`"tailwindcss"`),o(`;
`),r(`span`,{class:`hljs-keyword`},`@config`),o(),r(`span`,{class:`hljs-string`},`"../tailwind.config.js"`),o(`;
`)])],-1)]]),_:1})]),r(`div`,g,[r(`h3`,_,[a(w,{to:`#MoreOptions`},{default:n(()=>[...c[20]||=[o(`#`,-1)]]),_:1}),c[21]||=o(`More Options`,-1)]),c[22]||=r(`p`,null,[o(`Presets detailed definition `),r(`a`,{href:`https://github.com/varletjs/varlet/blob/main/packages/varlet-preset-tailwindcss/src/index.ts`},`please watch here`),o(`.`)],-1)]),r(`div`,v,[r(`h3`,y,[a(w,{to:`#Usage`},{default:n(()=>[...c[23]||=[o(`#`,-1)]]),_:1}),c[24]||=o(`Usage`,-1)]),a(T,{"playground-ignore":``},{default:n(()=>[...c[25]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"text-on-primary bg-primary text-md"`),o(`>`)]),o(`hello`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"text-on-primary-container bg-primary-container text-lg"`),o(`>`)]),o(`world`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"bg-primary sm:bg-info md:bg-warning lg:bg-danger xl:bg-success"`),o(`>`)]),o(`varlet`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1}),c[27]||=r(`p`,null,`We also support the HSL variables, which makes the transparency of adjusting the color easier.`,-1),a(T,{"playground-ignore":``},{default:n(()=>[...c[26]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"bg-hsl-primary/50 text-hsl-text/70"`),o(`>`)]),o(`hello`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
`)])],-1)]]),_:1})])])}var x=s(c,[[`render`,b]]);export{x as default};