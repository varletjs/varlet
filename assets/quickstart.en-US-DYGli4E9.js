import{L as e,N as t,W as n,c as r,d as i,g as a,h as o}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as s}from"./_plugin-vue_export-helper-V-yks4gF.js";var c={components:{}},l={class:`varlet-site-doc`},u={class:`card`},d={id:`Intro`},f={class:`card`},p={id:`Install`},m={class:`card`},h={id:`SupportDesktop`},g={class:`card`},_={id:`Chooseadesignsystem`},v={class:`card`},y={id:`ComponentsPlayground`};function b(s,c,b,x,S,C){let w=e(`router-link`),T=e(`var-site-code-example`);return t(),i(`div`,l,[c[22]||=r(`h1`,null,`Quick Start`,-1),r(`div`,u,[r(`h3`,d,[a(w,{to:`#Intro`},{default:n(()=>[...c[0]||=[o(`#`,-1)]]),_:1}),c[1]||=o(`Intro`,-1)]),c[2]||=r(`p`,null,`Here are the most basic ways to access component libraries in common development patterns.`,-1)]),r(`div`,f,[r(`h3`,p,[a(w,{to:`#Install`},{default:n(()=>[...c[3]||=[o(`#`,-1)]]),_:1}),c[4]||=o(`Install`,-1)]),c[8]||=r(`h4`,null,`CDN`,-1),c[9]||=r(`p`,null,[r(`code`,null,`varlet.js`),o(` contain all the styles and logic of the component library, and you can import them.`)],-1),a(T,{"playground-ignore":``},{default:n(()=>[...c[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`id`),o(`=`),r(`span`,{class:`hljs-string`},`"app"`),o(`>`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`src`),o(`=`),r(`span`,{class:`hljs-string`},`"https://cdn.jsdelivr.net/npm/vue"`),o(`>`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`src`),o(`=`),r(`span`,{class:`hljs-string`},`"https://cdn.jsdelivr.net/npm/@varlet/ui/umd/varlet.js"`),o(`>`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
  `),r(`span`,{class:`hljs-keyword`},`const`),o(` app = Vue.createApp({
    `),r(`span`,{class:`hljs-attr`},`template`),o(`: `),r(`span`,{class:`hljs-string`},`'<var-button>Button</var-button>'`),o(`
  })
  app.use(Varlet).mount(`),r(`span`,{class:`hljs-string`},`'#app'`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`
`)])],-1)]]),_:1}),c[10]||=r(`h4`,null,`Webpack/Vite`,-1),a(T,{"playground-ignore":``},{default:n(()=>[...c[6]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-meta`},`#`),r(`span`,{class:`bash`},` Install with npm, yarn or pnpm`),o(`
`),r(`span`,{class:`hljs-meta`},`
#`),r(`span`,{class:`bash`},` npm`),o(`
npm i @varlet/ui -S
`),r(`span`,{class:`hljs-meta`},`
#`),r(`span`,{class:`bash`},` yarn`),o(`
yarn add @varlet/ui
`),r(`span`,{class:`hljs-meta`},`
#`),r(`span`,{class:`bash`},` pnpm`),o(`
pnpm add @varlet/ui
`)])],-1)]]),_:1}),a(T,{"playground-ignore":``},{default:n(()=>[...c[7]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-keyword`},`import`),o(` App `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'./App.vue'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` Varlet `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { createApp } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui/es/style'`),o(`

createApp(App).use(Varlet).mount(`),r(`span`,{class:`hljs-string`},`'#app'`),o(`)
`)])],-1)]]),_:1})]),r(`div`,m,[r(`h3`,h,[a(w,{to:`#SupportDesktop`},{default:n(()=>[...c[11]||=[o(`#`,-1)]]),_:1}),c[12]||=o(`Support Desktop`,-1)]),c[13]||=r(`p`,null,[r(`code`,null,`Varlet`),o(` is a mobile-first component library. To support desktop, you need to install an adapter. See `),r(`a`,{href:`#/en-US/browserAdaptation`},`browser adaptation`),o(` for details.`)],-1)]),r(`div`,g,[r(`h3`,_,[a(w,{to:`#Chooseadesignsystem`},{default:n(()=>[...c[14]||=[o(`#`,-1)]]),_:1}),c[15]||=o(`Choose a design system`,-1)]),c[18]||=r(`p`,null,`Starting from version 3.x, Varlet supports both Material Design 2 and Material Design 3 design systems.`,-1),a(T,{"playground-ignore":``},{default:n(()=>[...c[16]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-comment`},`// Varlet defaults to Material Design 2 light mode`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Themes, StyleProvider } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-comment`},`// Material Design 2 Dark Mode`),o(`
StyleProvider(Themes.dark)
`),r(`span`,{class:`hljs-comment`},`// Material Design 3 Light Mode`),o(`
StyleProvider(Themes.md3Light)
`),r(`span`,{class:`hljs-comment`},`// Material Design 3 Dark Mode`),o(`
StyleProvider(Themes.md3Dark)
`)])],-1)]]),_:1}),a(T,{"playground-ignore":``},{default:n(()=>[...c[17]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-selector-tag`},`body`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`transition`),o(`: background-color .`),r(`span`,{class:`hljs-number`},`25s`),o(`, color .`),r(`span`,{class:`hljs-number`},`25s`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`color`),o(`: `),r(`span`,{class:`hljs-built_in`},`var`),o(`(--color-text);
  `),r(`span`,{class:`hljs-attribute`},`background-color`),o(`: `),r(`span`,{class:`hljs-built_in`},`var`),o(`(--color-body);
  `),r(`span`,{class:`hljs-attribute`},`color`),o(`-scheme: `),r(`span`,{class:`hljs-built_in`},`var`),o(`(--color-scheme);
}
`)])],-1)]]),_:1})]),r(`div`,v,[r(`h3`,y,[a(w,{to:`#ComponentsPlayground`},{default:n(()=>[...c[19]||=[o(`#`,-1)]]),_:1}),c[20]||=o(`Components Playground`,-1)]),c[21]||=r(`p`,null,[o(`We provide a web version of the component editor, which is convenient for you to quickly get started with each component of the component library, edit it online, share it with others, or download the code package to run locally. You can click the `),r(`code`,null,`{...}`),o(` icon in the upper right corner of the page or `),r(`a`,{href:`https://varletjs.org/playground`},`go here`),o(`.`)],-1)])])}var x=s(c,[[`render`,b]]);export{x as default};