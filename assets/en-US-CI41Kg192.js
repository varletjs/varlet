import{L as e,N as t,W as n,c as r,d as i,g as a,h as o}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as s}from"./_plugin-vue_export-helper-V-yks4gF.js";var c={components:{}},l={class:`varlet-site-doc`},u={class:`card`},d={id:`Intro`},f={class:`card`},p={id:`StyleBinding`},m={class:`card`},h={id:`FunctionBinding`},g={class:`card`},_={id:`SelectivelyEnableForDifferentDevices`};function v(s,c,v,y,b,x){let S=e(`router-link`),C=e(`var-site-code-example`);return t(),i(`div`,l,[c[18]||=r(`h1`,null,`Hover`,-1),r(`div`,u,[r(`h3`,d,[a(S,{to:`#Intro`},{default:n(()=>[...c[0]||=[o(`#`,-1)]]),_:1}),c[1]||=o(`Intro`,-1)]),c[2]||=r(`p`,null,`Style binding is performed when the pointer hovers the binding element, and the current hovering state can also be obtained through a function, which supports selective enablement on desktop or mobile.`,-1)]),r(`div`,f,[r(`h3`,p,[a(S,{to:`#StyleBinding`},{default:n(()=>[...c[3]||=[o(`#`,-1)]]),_:1}),c[4]||=o(`Style Binding`,-1)]),c[6]||=r(`p`,null,`The style binding is performed when the pointer hovers over the bound element, and the style binding is canceled when the pointer leaves the element.`,-1),a(C,null,{default:n(()=>[...c[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-paper`),o(`
    `),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"paper"`),o(`
    `),r(`span`,{class:`hljs-attr`},`ripple`),o(`
    `),r(`span`,{class:`hljs-attr`},`:elevation`),o(`=`),r(`span`,{class:`hljs-string`},`"2"`),o(`
    `),r(`span`,{class:`hljs-attr`},`:width`),o(`=`),r(`span`,{class:`hljs-string`},`"100"`),o(`
    `),r(`span`,{class:`hljs-attr`},`:height`),o(`=`),r(`span`,{class:`hljs-string`},`"100"`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-hover`),o(`=`),r(`span`,{class:`hljs-string`},`"{ color: 'var(--color-on-primary)', background: ' var(--color-primary)' }"`),o(`
  >`)]),o(`
    HOVER
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-paper`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),r(`span`,{class:`css`},[o(`
`),r(`span`,{class:`hljs-selector-class`},`.paper`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`display`),o(`: flex;
  `),r(`span`,{class:`hljs-attribute`},`align-items`),o(`: center;
  `),r(`span`,{class:`hljs-attribute`},`justify-content`),o(`: center;
  `),r(`span`,{class:`hljs-attribute`},`cursor`),o(`: pointer;
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,m,[r(`h3`,h,[a(S,{to:`#FunctionBinding`},{default:n(()=>[...c[7]||=[o(`#`,-1)]]),_:1}),c[8]||=o(`Function Binding`,-1)]),c[10]||=r(`p`,null,`The function is triggered when the pointer hovers and leaves, and carries the current hover state.`,-1),a(C,null,{default:n(()=>[...c[9]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` translateY = ref(`),r(`span`,{class:`hljs-string`},`'100%'`),o(`)

`),r(`span`,{class:`hljs-function`},[r(`span`,{class:`hljs-keyword`},`function`),o(),r(`span`,{class:`hljs-title`},`handleHover`),o(`(`),r(`span`,{class:`hljs-params`},`hovering`),o(`) `)]),o(`{
  translateY.value = hovering ? `),r(`span`,{class:`hljs-string`},`'0'`),o(` : `),r(`span`,{class:`hljs-string`},`'100%'`),o(`
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
   `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"image-container"`),o(),r(`span`,{class:`hljs-attr`},`v-hover`),o(`=`),r(`span`,{class:`hljs-string`},`"handleHover"`),o(`>`)]),o(`
     `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-image`),o(),r(`span`,{class:`hljs-attr`},`src`),o(`=`),r(`span`,{class:`hljs-string`},`"https://varletjs.org/tree.jpeg"`),o(` />`)]),o(`
     `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"image-mask"`),o(),r(`span`,{class:`hljs-attr`},`:style`),o(`=`),r(`span`,{class:`hljs-string`},'"{ transform: `translateY(${translateY})` }"'),o(`>`)]),o(`HOVER`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
   `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),r(`span`,{class:`css`},[o(`
`),r(`span`,{class:`hljs-selector-class`},`.image-container`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`position`),o(`: relative;
  `),r(`span`,{class:`hljs-attribute`},`overflow`),o(`: hidden;
  `),r(`span`,{class:`hljs-attribute`},`cursor`),o(`: pointer;
  `),r(`span`,{class:`hljs-attribute`},`border-radius`),o(`: `),r(`span`,{class:`hljs-number`},`6px`),o(`;
}

`),r(`span`,{class:`hljs-selector-class`},`.image-mask`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`display`),o(`: flex;
  `),r(`span`,{class:`hljs-attribute`},`align-items`),o(`: center;
  `),r(`span`,{class:`hljs-attribute`},`justify-content`),o(`: center;
  `),r(`span`,{class:`hljs-attribute`},`position`),o(`: absolute;
  `),r(`span`,{class:`hljs-attribute`},`top`),o(`: `),r(`span`,{class:`hljs-number`},`0`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`left`),o(`: `),r(`span`,{class:`hljs-number`},`0`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`width`),o(`: `),r(`span`,{class:`hljs-number`},`100%`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`height`),o(`: `),r(`span`,{class:`hljs-number`},`100%`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`transition`),o(`: all `),r(`span`,{class:`hljs-number`},`0.3s`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`color`),o(`: `),r(`span`,{class:`hljs-built_in`},`var`),o(`(--color-on-primary);
  `),r(`span`,{class:`hljs-attribute`},`background-color`),o(`: `),r(`span`,{class:`hljs-built_in`},`var`),o(`(--color-primary);
  `),r(`span`,{class:`hljs-attribute`},`font-size`),o(`: `),r(`span`,{class:`hljs-number`},`50px`),o(`;
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,g,[r(`h3`,_,[a(S,{to:`#SelectivelyEnableForDifferentDevices`},{default:n(()=>[...c[11]||=[o(`#`,-1)]]),_:1}),c[12]||=o(`Selectively Enable For Different Devices`,-1)]),c[15]||=r(`p`,null,[o(`Considering the differences in `),r(`code`,null,`hover`),o(` effects on different platforms, the hover command can only be enabled on specific platforms.`)],-1),c[16]||=r(`h4`,null,`Only Enabled On Desktop`,-1),a(C,{"playground-ignore":``},{default:n(()=>[...c[13]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-paper`),o(),r(`span`,{class:`hljs-attr`},`v-hover:desktop`),o(`=`),r(`span`,{class:`hljs-string`},`"{ color: '#fff' }"`),o(`">`)]),o(`HOVER`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-paper`),o(`>`)]),o(`
`)])],-1)]]),_:1}),c[17]||=r(`h4`,null,`Only Enabled On Mobile`,-1),a(C,{"playground-ignore":``},{default:n(()=>[...c[14]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-paper`),o(),r(`span`,{class:`hljs-attr`},`v-hover:mobile`),o(`=`),r(`span`,{class:`hljs-string`},`"{ color: '#fff' }"`),o(`">`)]),o(`HOVER`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-paper`),o(`>`)]),o(`
`)])],-1)]]),_:1})])])}var y=s(c,[[`render`,v]]);export{y as default};