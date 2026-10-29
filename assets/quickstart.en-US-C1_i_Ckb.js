import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s}from"./runtime-core.esm-bundler-DUghkl6b.js";var c={components:{}},l={class:`varlet-site-doc`},u={class:`card`},d={id:`Intro`},f={class:`card`},p={id:`Install`},m={class:`card`},h={id:`SupportDesktop`},g={class:`card`},_={id:`Chooseadesignsystem`},v={class:`card`},y={id:`ComponentsPlayground`};function b(e,c,b,x,S,C){let w=n(`router-link`),T=n(`var-site-code-example`);return r(),a(`div`,l,[c[22]||=i(`h1`,null,`Quick Start`,-1),i(`div`,u,[i(`h3`,d,[o(w,{to:`#Intro`},{default:t(()=>[...c[0]||=[s(`#`,-1)]]),_:1}),c[1]||=s(`Intro`,-1)]),c[2]||=i(`p`,null,`Here are the most basic ways to access component libraries in common development patterns.`,-1)]),i(`div`,f,[i(`h3`,p,[o(w,{to:`#Install`},{default:t(()=>[...c[3]||=[s(`#`,-1)]]),_:1}),c[4]||=s(`Install`,-1)]),c[8]||=i(`h4`,null,`CDN`,-1),c[9]||=i(`p`,null,[i(`code`,null,`varlet.js`),s(` contain all the styles and logic of the component library, and you can import them.`)],-1),o(T,{"playground-ignore":``},{default:t(()=>[...c[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`id`),s(`=`),i(`span`,{class:`hljs-string`},`"app"`),s(`>`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`src`),s(`=`),i(`span`,{class:`hljs-string`},`"https://cdn.jsdelivr.net/npm/vue"`),s(`>`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`src`),s(`=`),i(`span`,{class:`hljs-string`},`"https://cdn.jsdelivr.net/npm/@varlet/ui/umd/varlet.js"`),s(`>`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
  `),i(`span`,{class:`hljs-keyword`},`const`),s(` app = Vue.createApp({
    `),i(`span`,{class:`hljs-attr`},`template`),s(`: `),i(`span`,{class:`hljs-string`},`'<var-button>Button</var-button>'`),s(`
  })
  app.use(Varlet).mount(`),i(`span`,{class:`hljs-string`},`'#app'`),s(`)
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`
`)])],-1)]]),_:1}),c[10]||=i(`h4`,null,`Webpack/Vite`,-1),o(T,{"playground-ignore":``},{default:t(()=>[...c[6]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-meta`},`#`),i(`span`,{class:`bash`},` Install with npm, yarn or pnpm`),s(`
`),i(`span`,{class:`hljs-meta`},`
#`),i(`span`,{class:`bash`},` npm`),s(`
npm i @varlet/ui -S
`),i(`span`,{class:`hljs-meta`},`
#`),i(`span`,{class:`bash`},` yarn`),s(`
yarn add @varlet/ui
`),i(`span`,{class:`hljs-meta`},`
#`),i(`span`,{class:`bash`},` pnpm`),s(`
pnpm add @varlet/ui
`)])],-1)]]),_:1}),o(T,{"playground-ignore":``},{default:t(()=>[...c[7]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-keyword`},`import`),s(` App `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'./App.vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` Varlet `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { createApp } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui/es/style'`),s(`

createApp(App).use(Varlet).mount(`),i(`span`,{class:`hljs-string`},`'#app'`),s(`)
`)])],-1)]]),_:1})]),i(`div`,m,[i(`h3`,h,[o(w,{to:`#SupportDesktop`},{default:t(()=>[...c[11]||=[s(`#`,-1)]]),_:1}),c[12]||=s(`Support Desktop`,-1)]),c[13]||=i(`p`,null,[i(`code`,null,`Varlet`),s(` is a mobile-first component library. To support desktop, you need to install an adapter. See `),i(`a`,{href:`#/en-US/browserAdaptation`},`browser adaptation`),s(` for details.`)],-1)]),i(`div`,g,[i(`h3`,_,[o(w,{to:`#Chooseadesignsystem`},{default:t(()=>[...c[14]||=[s(`#`,-1)]]),_:1}),c[15]||=s(`Choose a design system`,-1)]),c[18]||=i(`p`,null,`Starting from version 3.x, Varlet supports both Material Design 2 and Material Design 3 design systems.`,-1),o(T,{"playground-ignore":``},{default:t(()=>[...c[16]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-comment`},`// Varlet defaults to Material Design 2 light mode`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Themes, StyleProvider } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

`),i(`span`,{class:`hljs-comment`},`// Material Design 2 Dark Mode`),s(`
StyleProvider(Themes.dark)
`),i(`span`,{class:`hljs-comment`},`// Material Design 3 Light Mode`),s(`
StyleProvider(Themes.md3Light)
`),i(`span`,{class:`hljs-comment`},`// Material Design 3 Dark Mode`),s(`
StyleProvider(Themes.md3Dark)
`)])],-1)]]),_:1}),o(T,{"playground-ignore":``},{default:t(()=>[...c[17]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-selector-tag`},`body`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`transition`),s(`: background-color .`),i(`span`,{class:`hljs-number`},`25s`),s(`, color .`),i(`span`,{class:`hljs-number`},`25s`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`color`),s(`: `),i(`span`,{class:`hljs-built_in`},`var`),s(`(--color-text);
  `),i(`span`,{class:`hljs-attribute`},`background-color`),s(`: `),i(`span`,{class:`hljs-built_in`},`var`),s(`(--color-body);
  `),i(`span`,{class:`hljs-attribute`},`color`),s(`-scheme: `),i(`span`,{class:`hljs-built_in`},`var`),s(`(--color-scheme);
}
`)])],-1)]]),_:1})]),i(`div`,v,[i(`h3`,y,[o(w,{to:`#ComponentsPlayground`},{default:t(()=>[...c[19]||=[s(`#`,-1)]]),_:1}),c[20]||=s(`Components Playground`,-1)]),c[21]||=i(`p`,null,[s(`We provide a web version of the component editor, which is convenient for you to quickly get started with each component of the component library, edit it online, share it with others, or download the code package to run locally. You can click the `),i(`code`,null,`{...}`),s(` icon in the upper right corner of the page or `),i(`a`,{href:`https://varletjs.org/playground`},`go here`),s(`.`)],-1)])])}var x=e(c,[[`render`,b]]);export{x as default};