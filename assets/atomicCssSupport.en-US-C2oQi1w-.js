import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s}from"./runtime-core.esm-bundler-DUghkl6b.js";var c={components:{}},l={class:`varlet-site-doc`},u={class:`card`},d={id:`Intro`},f={class:`card`},p={id:`UnoCSS`},m={class:`card`},h={id:`Tailwindcss`},g={class:`card`},_={id:`MoreOptions`},v={class:`card`},y={id:`Usage`};function b(e,c,b,x,S,C){let w=n(`router-link`),T=n(`var-site-code-example`);return r(),a(`div`,l,[c[28]||=i(`h1`,null,`Atomic CSS support`,-1),i(`div`,u,[i(`h3`,d,[o(w,{to:`#Intro`},{default:t(()=>[...c[0]||=[s(`#`,-1)]]),_:1}),c[1]||=s(`Intro`,-1)]),c[2]||=i(`p`,null,`We've provided common CSS atomization framework presets, made it easier to access the component library's underlying style variables, and standardized page responsiveness breakpoints.`,-1)]),i(`div`,f,[i(`h3`,p,[o(w,{to:`#UnoCSS`},{default:t(()=>[...c[3]||=[s(`#`,-1)]]),_:1}),c[4]||=s(`UnoCSS`,-1)]),c[7]||=i(`h4`,null,`Install`,-1),o(T,{"playground-ignore":``},{default:t(()=>[...c[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-meta`},`#`),i(`span`,{class:`bash`},` npm`),s(`
npm i @varlet/preset-unocss -D
`),i(`span`,{class:`hljs-meta`},`#`),i(`span`,{class:`bash`},` yarn`),s(`
yarn add @varlet/preset-unocss -D
`),i(`span`,{class:`hljs-meta`},`#`),i(`span`,{class:`bash`},` pnpm`),s(`
pnpm add @varlet/preset-unocss -D
`)])],-1)]]),_:1}),c[8]||=i(`h4`,null,`Configuration`,-1),o(T,{"playground-ignore":``},{default:t(()=>[...c[6]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-comment`},`// uno.config.ts`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { defineConfig, presetUno } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'unocss'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { presetVarlet } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/preset-unocss'`),s(`

`),i(`span`,{class:`hljs-keyword`},`export`),s(),i(`span`,{class:`hljs-keyword`},`default`),s(` defineConfig({
  `),i(`span`,{class:`hljs-attr`},`presets`),s(`: [presetUno(), presetVarlet()]
})
`)])],-1)]]),_:1}),c[9]||=i(`h4`,null,`More Options`,-1),c[10]||=i(`p`,null,[s(`Presets detailed definition `),i(`a`,{href:`https://github.com/varletjs/varlet/blob/main/packages/varlet-preset-unocss/src/index.ts`},`please watch here`),s(`.`)],-1)]),i(`div`,m,[i(`h3`,h,[o(w,{to:`#Tailwindcss`},{default:t(()=>[...c[11]||=[s(`#`,-1)]]),_:1}),c[12]||=s(`Tailwindcss`,-1)]),c[17]||=i(`h4`,null,`Install`,-1),o(T,{"playground-ignore":``},{default:t(()=>[...c[13]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-meta`},`#`),i(`span`,{class:`bash`},` npm`),s(`
npm i @varlet/preset-tailwindcss -D
`),i(`span`,{class:`hljs-meta`},`#`),i(`span`,{class:`bash`},` yarn`),s(`
yarn add @varlet/preset-tailwindcss -D
`),i(`span`,{class:`hljs-meta`},`#`),i(`span`,{class:`bash`},` pnpm`),s(`
pnpm add @varlet/preset-tailwindcss -D
`)])],-1)]]),_:1}),c[18]||=i(`h4`,null,`Tailwindcss V3 Configuration`,-1),o(T,{"playground-ignore":``},{default:t(()=>[...c[14]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-comment`},`// tailwind.config.js`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { presetVarlet } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/preset-tailwindcss'`),s(`

`),i(`span`,{class:`hljs-keyword`},`export`),s(),i(`span`,{class:`hljs-keyword`},`default`),s(` {
  `),i(`span`,{class:`hljs-attr`},`content`),s(`: [
    `),i(`span`,{class:`hljs-string`},`'./index.html'`),s(`,
    `),i(`span`,{class:`hljs-string`},`'./src/**/*.{vue,js,ts,jsx,tsx}'`),s(`,
  ],
  `),i(`span`,{class:`hljs-attr`},`presets`),s(`: [presetVarlet()]
}
`)])],-1)]]),_:1}),c[19]||=i(`h4`,null,`Tailwindcss V4 Configuration`,-1),o(T,{"playground-ignore":``},{default:t(()=>[...c[15]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-comment`},`// tailwind.config.js`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { presetVarlet } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/preset-tailwindcss'`),s(`

`),i(`span`,{class:`hljs-keyword`},`export`),s(),i(`span`,{class:`hljs-keyword`},`default`),s(` {
  `),i(`span`,{class:`hljs-attr`},`presets`),s(`: [presetVarlet()]
}
`)])],-1)]]),_:1}),o(T,null,{default:t(()=>[...c[16]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-comment`},`/** src/style.css */`),s(`
`),i(`span`,{class:`hljs-keyword`},`@import`),s(),i(`span`,{class:`hljs-string`},`"tailwindcss"`),s(`;
`),i(`span`,{class:`hljs-keyword`},`@config`),s(),i(`span`,{class:`hljs-string`},`"../tailwind.config.js"`),s(`;
`)])],-1)]]),_:1})]),i(`div`,g,[i(`h3`,_,[o(w,{to:`#MoreOptions`},{default:t(()=>[...c[20]||=[s(`#`,-1)]]),_:1}),c[21]||=s(`More Options`,-1)]),c[22]||=i(`p`,null,[s(`Presets detailed definition `),i(`a`,{href:`https://github.com/varletjs/varlet/blob/main/packages/varlet-preset-tailwindcss/src/index.ts`},`please watch here`),s(`.`)],-1)]),i(`div`,v,[i(`h3`,y,[o(w,{to:`#Usage`},{default:t(()=>[...c[23]||=[s(`#`,-1)]]),_:1}),c[24]||=s(`Usage`,-1)]),o(T,{"playground-ignore":``},{default:t(()=>[...c[25]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"text-on-primary bg-primary text-md"`),s(`>`)]),s(`hello`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"text-on-primary-container bg-primary-container text-lg"`),s(`>`)]),s(`world`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"bg-primary sm:bg-info md:bg-warning lg:bg-danger xl:bg-success"`),s(`>`)]),s(`varlet`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1}),c[27]||=i(`p`,null,`We also support the HSL variables, which makes the transparency of adjusting the color easier.`,-1),o(T,{"playground-ignore":``},{default:t(()=>[...c[26]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"bg-hsl-primary/50 text-hsl-text/70"`),s(`>`)]),s(`hello`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
`)])],-1)]]),_:1})])])}var x=e(c,[[`render`,b]]);export{x as default};