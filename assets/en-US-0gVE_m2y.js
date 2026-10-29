import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s}from"./runtime-core.esm-bundler-DUghkl6b.js";var c={components:{}},l={class:`varlet-site-doc`},u={class:`card`},d={id:`Intro`},f={class:`card`},p={id:`StyleBinding`},m={class:`card`},h={id:`FunctionBinding`},g={class:`card`},_={id:`SelectivelyEnableForDifferentDevices`};function v(e,c,v,y,b,x){let S=n(`router-link`),C=n(`var-site-code-example`);return r(),a(`div`,l,[c[18]||=i(`h1`,null,`Hover`,-1),i(`div`,u,[i(`h3`,d,[o(S,{to:`#Intro`},{default:t(()=>[...c[0]||=[s(`#`,-1)]]),_:1}),c[1]||=s(`Intro`,-1)]),c[2]||=i(`p`,null,`Style binding is performed when the pointer hovers the binding element, and the current hovering state can also be obtained through a function, which supports selective enablement on desktop or mobile.`,-1)]),i(`div`,f,[i(`h3`,p,[o(S,{to:`#StyleBinding`},{default:t(()=>[...c[3]||=[s(`#`,-1)]]),_:1}),c[4]||=s(`Style Binding`,-1)]),c[6]||=i(`p`,null,`The style binding is performed when the pointer hovers over the bound element, and the style binding is canceled when the pointer leaves the element.`,-1),o(C,null,{default:t(()=>[...c[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-paper`),s(`
    `),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"paper"`),s(`
    `),i(`span`,{class:`hljs-attr`},`ripple`),s(`
    `),i(`span`,{class:`hljs-attr`},`:elevation`),s(`=`),i(`span`,{class:`hljs-string`},`"2"`),s(`
    `),i(`span`,{class:`hljs-attr`},`:width`),s(`=`),i(`span`,{class:`hljs-string`},`"100"`),s(`
    `),i(`span`,{class:`hljs-attr`},`:height`),s(`=`),i(`span`,{class:`hljs-string`},`"100"`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-hover`),s(`=`),i(`span`,{class:`hljs-string`},`"{ color: 'var(--color-on-primary)', background: ' var(--color-primary)' }"`),s(`
  >`)]),s(`
    HOVER
  `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-paper`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),i(`span`,{class:`css`},[s(`
`),i(`span`,{class:`hljs-selector-class`},`.paper`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`display`),s(`: flex;
  `),i(`span`,{class:`hljs-attribute`},`align-items`),s(`: center;
  `),i(`span`,{class:`hljs-attribute`},`justify-content`),s(`: center;
  `),i(`span`,{class:`hljs-attribute`},`cursor`),s(`: pointer;
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,m,[i(`h3`,h,[o(S,{to:`#FunctionBinding`},{default:t(()=>[...c[7]||=[s(`#`,-1)]]),_:1}),c[8]||=s(`Function Binding`,-1)]),c[10]||=i(`p`,null,`The function is triggered when the pointer hovers and leaves, and carries the current hover state.`,-1),o(C,null,{default:t(()=>[...c[9]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`script`),s(),i(`span`,{class:`hljs-attr`},`setup`),s(`>`)]),i(`span`,{class:`javascript`},[s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { ref } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`

`),i(`span`,{class:`hljs-keyword`},`const`),s(` translateY = ref(`),i(`span`,{class:`hljs-string`},`'100%'`),s(`)

`),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-keyword`},`function`),s(),i(`span`,{class:`hljs-title`},`handleHover`),s(`(`),i(`span`,{class:`hljs-params`},`hovering`),s(`) `)]),s(`{
  translateY.value = hovering ? `),i(`span`,{class:`hljs-string`},`'0'`),s(` : `),i(`span`,{class:`hljs-string`},`'100%'`),s(`
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`script`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
   `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"image-container"`),s(),i(`span`,{class:`hljs-attr`},`v-hover`),s(`=`),i(`span`,{class:`hljs-string`},`"handleHover"`),s(`>`)]),s(`
     `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-image`),s(),i(`span`,{class:`hljs-attr`},`src`),s(`=`),i(`span`,{class:`hljs-string`},`"https://varletjs.org/tree.jpeg"`),s(` />`)]),s(`
     `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"image-mask"`),s(),i(`span`,{class:`hljs-attr`},`:style`),s(`=`),i(`span`,{class:`hljs-string`},'"{ transform: `translateY(${translateY})` }"'),s(`>`)]),s(`HOVER`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
   `),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),i(`span`,{class:`css`},[s(`
`),i(`span`,{class:`hljs-selector-class`},`.image-container`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`position`),s(`: relative;
  `),i(`span`,{class:`hljs-attribute`},`overflow`),s(`: hidden;
  `),i(`span`,{class:`hljs-attribute`},`cursor`),s(`: pointer;
  `),i(`span`,{class:`hljs-attribute`},`border-radius`),s(`: `),i(`span`,{class:`hljs-number`},`6px`),s(`;
}

`),i(`span`,{class:`hljs-selector-class`},`.image-mask`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`display`),s(`: flex;
  `),i(`span`,{class:`hljs-attribute`},`align-items`),s(`: center;
  `),i(`span`,{class:`hljs-attribute`},`justify-content`),s(`: center;
  `),i(`span`,{class:`hljs-attribute`},`position`),s(`: absolute;
  `),i(`span`,{class:`hljs-attribute`},`top`),s(`: `),i(`span`,{class:`hljs-number`},`0`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`left`),s(`: `),i(`span`,{class:`hljs-number`},`0`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`width`),s(`: `),i(`span`,{class:`hljs-number`},`100%`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`height`),s(`: `),i(`span`,{class:`hljs-number`},`100%`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`transition`),s(`: all `),i(`span`,{class:`hljs-number`},`0.3s`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`color`),s(`: `),i(`span`,{class:`hljs-built_in`},`var`),s(`(--color-on-primary);
  `),i(`span`,{class:`hljs-attribute`},`background-color`),s(`: `),i(`span`,{class:`hljs-built_in`},`var`),s(`(--color-primary);
  `),i(`span`,{class:`hljs-attribute`},`font-size`),s(`: `),i(`span`,{class:`hljs-number`},`50px`),s(`;
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,g,[i(`h3`,_,[o(S,{to:`#SelectivelyEnableForDifferentDevices`},{default:t(()=>[...c[11]||=[s(`#`,-1)]]),_:1}),c[12]||=s(`Selectively Enable For Different Devices`,-1)]),c[15]||=i(`p`,null,[s(`Considering the differences in `),i(`code`,null,`hover`),s(` effects on different platforms, the hover command can only be enabled on specific platforms.`)],-1),c[16]||=i(`h4`,null,`Only Enabled On Desktop`,-1),o(C,{"playground-ignore":``},{default:t(()=>[...c[13]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-paper`),s(),i(`span`,{class:`hljs-attr`},`v-hover:desktop`),s(`=`),i(`span`,{class:`hljs-string`},`"{ color: '#fff' }"`),s(`">`)]),s(`HOVER`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-paper`),s(`>`)]),s(`
`)])],-1)]]),_:1}),c[17]||=i(`h4`,null,`Only Enabled On Mobile`,-1),o(C,{"playground-ignore":``},{default:t(()=>[...c[14]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`var-paper`),s(),i(`span`,{class:`hljs-attr`},`v-hover:mobile`),s(`=`),i(`span`,{class:`hljs-string`},`"{ color: '#fff' }"`),s(`">`)]),s(`HOVER`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`var-paper`),s(`>`)]),s(`
`)])],-1)]]),_:1})])])}var y=e(c,[[`render`,v]]);export{y as default};