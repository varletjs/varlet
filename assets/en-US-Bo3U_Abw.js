import{L as e,N as t,W as n,c as r,d as i,g as a,h as o,m as s}from"./runtime-core.esm-bundler-BYGWF7Zw.js";import{t as c}from"./_plugin-vue_export-helper-V-yks4gF.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`Intro`},p={class:`card`},m={id:`PopupPosition`},h={class:`card`},g={id:`OverlayStyle`},_={class:`card`},v={id:`Event`},y={class:`card`},b={id:`Props`},x={class:`card`},S={id:`Events`},C={class:`card`},w={id:`Slots`},T={class:`card`},E={id:`StyleVariables`};function D(c,l,D,O,k,A){let j=e(`router-link`),M=e(`var-site-code-example`);return t(),i(`div`,u,[l[24]||=r(`h1`,null,`Popup`,-1),r(`div`,d,[r(`h3`,f,[a(j,{to:`#Intro`},{default:n(()=>[...l[0]||=[o(`#`,-1)]]),_:1}),l[1]||=o(`Intro`,-1)]),l[2]||=r(`p`,null,[o(`Create a container that can pop up from top, bottom, left, right and center. `),r(`code`,null,`teleport`),o(` inserts into the end of the `),r(`code`,null,`body`),o(` by default.`)],-1)]),r(`div`,p,[r(`h3`,m,[a(j,{to:`#PopupPosition`},{default:n(()=>[...l[3]||=[o(`#`,-1)]]),_:1}),l[4]||=o(`Popup Position`,-1)]),a(M,null,{default:n(()=>[...l[5]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` center = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` top = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` bottom = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` left = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` right = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-space`),o(),r(`span`,{class:`hljs-attr`},`direction`),o(`=`),r(`span`,{class:`hljs-string`},`"column"`),o(),r(`span`,{class:`hljs-attr`},`:size`),o(`=`),r(`span`,{class:`hljs-string`},`"[10, 0]"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"center = true"`),o(`>`)]),o(`
      Center Popup
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"bottom = true"`),o(`>`)]),o(`
      Below Popup
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"top = true"`),o(`>`)]),o(`
      Above Popup
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"left = true"`),o(`>`)]),o(`
      Left Popup
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"right = true"`),o(`>`)]),o(`
      Right Popup
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-space`),o(`>`)]),o(`

  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-popup`),o(),r(`span`,{class:`hljs-attr`},`v-model:show`),o(`=`),r(`span`,{class:`hljs-string`},`"center"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"popup-example-block"`),o(`>`)]),o(`
      As he came into the window.
      It was the sound of a crescendo.
      He came into her apartment.
      He left the bloodstains on the carpet.
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-popup`),o(`>`)]),o(`

  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-popup`),o(),r(`span`,{class:`hljs-attr`},`position`),o(`=`),r(`span`,{class:`hljs-string`},`"bottom"`),o(),r(`span`,{class:`hljs-attr`},`v-model:show`),o(`=`),r(`span`,{class:`hljs-string`},`"bottom"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"popup-example-block"`),o(`>`)]),o(`
      As he came into the window.
      It was the sound of a crescendo.
      He came into her apartment.
      He left the bloodstains on the carpet.
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-popup`),o(`>`)]),o(`

  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-popup`),o(),r(`span`,{class:`hljs-attr`},`position`),o(`=`),r(`span`,{class:`hljs-string`},`"top"`),o(),r(`span`,{class:`hljs-attr`},`v-model:show`),o(`=`),r(`span`,{class:`hljs-string`},`"top"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"popup-example-block"`),o(`>`)]),o(`
      As he came into the window.
      It was the sound of a crescendo.
      He came into her apartment.
      He left the bloodstains on the carpet.
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-popup`),o(`>`)]),o(`

  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-popup`),o(),r(`span`,{class:`hljs-attr`},`position`),o(`=`),r(`span`,{class:`hljs-string`},`"left"`),o(),r(`span`,{class:`hljs-attr`},`v-model:show`),o(`=`),r(`span`,{class:`hljs-string`},`"left"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"popup-example-block"`),o(`>`)]),o(`
      As he came into the window.
      It was the sound of a crescendo.
      He came into her apartment.
      He left the bloodstains on the carpet.
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-popup`),o(`>`)]),o(`

  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-popup`),o(),r(`span`,{class:`hljs-attr`},`position`),o(`=`),r(`span`,{class:`hljs-string`},`"right"`),o(),r(`span`,{class:`hljs-attr`},`v-model:show`),o(`=`),r(`span`,{class:`hljs-string`},`"right"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"popup-example-block"`),o(`>`)]),o(`
      As he came into the window.
      It was the sound of a crescendo.
      He came into her apartment.
      He left the bloodstains on the carpet.
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-popup`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),r(`span`,{class:`css`},[o(`
`),r(`span`,{class:`hljs-selector-class`},`.popup-example-block`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`padding`),o(`: `),r(`span`,{class:`hljs-number`},`24px`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`width`),o(`: `),r(`span`,{class:`hljs-number`},`280px`),o(`;
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,h,[r(`h3`,g,[a(j,{to:`#OverlayStyle`},{default:n(()=>[...l[6]||=[o(`#`,-1)]]),_:1}),l[7]||=o(`Overlay Style`,-1)]),a(M,null,{default:n(()=>[...l[8]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` overlayClass = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`),r(`span`,{class:`hljs-keyword`},`const`),o(` overlayStyle = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-space`),o(),r(`span`,{class:`hljs-attr`},`direction`),o(`=`),r(`span`,{class:`hljs-string`},`"column"`),o(),r(`span`,{class:`hljs-attr`},`:size`),o(`=`),r(`span`,{class:`hljs-string`},`"[10, 0]"`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"overlayClass = true"`),o(`>`)]),o(`
      Overlay Class
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"overlayStyle = true"`),o(`>`)]),o(`
      Overlay Style
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-space`),o(`>`)]),o(`

  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-popup`),o(`
    `),r(`span`,{class:`hljs-attr`},`overlay-class`),o(`=`),r(`span`,{class:`hljs-string`},`"popup-example-custom-overlay"`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model:show`),o(`=`),r(`span`,{class:`hljs-string`},`"overlayClass"`),o(`
  >`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"popup-example-block"`),o(`>`)]),o(`
      As he came into the window.
      It was the sound of a crescendo.
      He came into her apartment.
      He left the bloodstains on the carpet.
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-popup`),o(`>`)]),o(`

  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-popup`),o(`
    `),r(`span`,{class:`hljs-attr`},`:overlay-style`),o(`=`),r(`span`,{class:`hljs-string`},`"{backgroundColor: 'rgba(0, 0, 0, 0.3)'}"`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model:show`),o(`=`),r(`span`,{class:`hljs-string`},`"overlayStyle"`),o(`
  >`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"popup-example-block"`),o(`>`)]),o(`
      As he came into the window.
      It was the sound of a crescendo.
      He came into her apartment.
      He left the bloodstains on the carpet.
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-popup`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),r(`span`,{class:`css`},[o(`
`),r(`span`,{class:`hljs-selector-class`},`.popup-example-custom-overlay`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`background`),o(`: `),r(`span`,{class:`hljs-built_in`},`rgba`),o(`(`),r(`span`,{class:`hljs-number`},`0`),o(`, `),r(`span`,{class:`hljs-number`},`0`),o(`, `),r(`span`,{class:`hljs-number`},`0`),o(`, `),r(`span`,{class:`hljs-number`},`0.3`),o(`) `),r(`span`,{class:`hljs-meta`},`!important`),o(`;
}

`),r(`span`,{class:`hljs-selector-class`},`.popup-example-block`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`padding`),o(`: `),r(`span`,{class:`hljs-number`},`24px`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`width`),o(`: `),r(`span`,{class:`hljs-number`},`280px`),o(`;
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),r(`div`,_,[r(`h3`,v,[a(j,{to:`#Event`},{default:n(()=>[...l[9]||=[o(`#`,-1)]]),_:1}),l[10]||=o(`Event`,-1)]),a(M,null,{default:n(()=>[...l[11]||=[r(`pre`,{class:`hljs`},[r(`code`,null,[r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`script`),o(),r(`span`,{class:`hljs-attr`},`setup`),o(`>`)]),r(`span`,{class:`javascript`},[o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { ref } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'vue'`),o(`
`),r(`span`,{class:`hljs-keyword`},`import`),o(` { Snackbar } `),r(`span`,{class:`hljs-keyword`},`from`),o(),r(`span`,{class:`hljs-string`},`'@varlet/ui'`),o(`

`),r(`span`,{class:`hljs-keyword`},`const`),o(` event = ref(`),r(`span`,{class:`hljs-literal`},`false`),o(`)
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`script`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-button`),o(),r(`span`,{class:`hljs-attr`},`type`),o(`=`),r(`span`,{class:`hljs-string`},`"primary"`),o(),r(`span`,{class:`hljs-attr`},`block`),o(` @`),r(`span`,{class:`hljs-attr`},`click`),o(`=`),r(`span`,{class:`hljs-string`},`"event = true"`),o(`>`)]),o(`
    Event
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-button`),o(`>`)]),o(`

  `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`var-popup`),o(`
    `),r(`span`,{class:`hljs-attr`},`v-model:show`),o(`=`),r(`span`,{class:`hljs-string`},`"event"`),o(`
    @`),r(`span`,{class:`hljs-attr`},`open`),o(`=`),r(`span`,{class:`hljs-string`},`"Snackbar.info('open')"`),o(`
    @`),r(`span`,{class:`hljs-attr`},`opened`),o(`=`),r(`span`,{class:`hljs-string`},`"Snackbar.success('opened')"`),o(`
    @`),r(`span`,{class:`hljs-attr`},`close`),o(`=`),r(`span`,{class:`hljs-string`},`"Snackbar.warning('close')"`),o(`
    @`),r(`span`,{class:`hljs-attr`},`closed`),o(`=`),r(`span`,{class:`hljs-string`},`"Snackbar.error('closed')"`),o(`
  >`)]),o(`
    `),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`div`),o(),r(`span`,{class:`hljs-attr`},`class`),o(`=`),r(`span`,{class:`hljs-string`},`"popup-example-block"`),o(`>`)]),o(`
      As he came into the window.
      It was the sound of a crescendo.
      He came into her apartment.
      He left the bloodstains on the carpet.
    `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`div`),o(`>`)]),o(`
  `),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`var-popup`),o(`>`)]),o(`
`),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`template`),o(`>`)]),o(`

`),r(`span`,{class:`hljs-tag`},[o(`<`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),r(`span`,{class:`css`},[o(`
`),r(`span`,{class:`hljs-selector-class`},`.popup-example-block`),o(` {
  `),r(`span`,{class:`hljs-attribute`},`padding`),o(`: `),r(`span`,{class:`hljs-number`},`24px`),o(`;
  `),r(`span`,{class:`hljs-attribute`},`width`),o(`: `),r(`span`,{class:`hljs-number`},`280px`),o(`;
}
`)]),r(`span`,{class:`hljs-tag`},[o(`</`),r(`span`,{class:`hljs-name`},`style`),o(`>`)]),o(`
`)])],-1)]]),_:1})]),l[25]||=r(`h2`,null,`API`,-1),r(`div`,y,[r(`h3`,b,[a(j,{to:`#Props`},{default:n(()=>[...l[12]||=[o(`#`,-1)]]),_:1}),l[13]||=o(`Props`,-1)]),l[14]||=s(`<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>Whether to display the Popup</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>position</code></td><td>Popup position with optional value of <code>top</code> <code>bottom</code> <code>right</code> <code>left</code> <code>center</code></td><td><em>string</em></td><td><code>center</code></td></tr><tr><td><code>overlay</code></td><td>Whether to display the overlay</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlay-class</code></td><td>Custom overlay class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlay-style</code></td><td>Custom overlay style</td><td><em>object</em></td><td><code>-</code></td></tr><tr><td><code>default-style</code></td><td>Whether to enable the default style</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>transition</code></td><td>Transition animation name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>lock-scroll</code></td><td>Whether to disable scrolling penetration, scrolling the Popup when disabled will not cause the body to scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-overlay</code></td><td>Whether to click the overlay to close the Popup</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-key-escape</code></td><td>Whether to support keyboard ESC to close the popup</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>The location of the Popup to mount</td><td><em>TeleportProps[&#39;to&#39;] | false</em></td><td><code>body</code></td></tr><tr><td><code>safe-area</code></td><td>Whether to enable bottom safety zone adaptation</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>safe-area-top</code></td><td>Whether to enable top safety zone adaptation</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>z-index</code> <em><strong>3.3.10</strong></em></td><td>The zIndex of element</td><td><em>number</em></td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,x,[r(`h3`,S,[a(j,{to:`#Events`},{default:n(()=>[...l[15]||=[o(`#`,-1)]]),_:1}),l[16]||=o(`Events`,-1)]),l[17]||=s(`<table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>open</code></td><td>Triggered when the Popup is open</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>Triggered when the Popup open-animation ends</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>Triggered when the Popup is close</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>Triggered when the Popup close-animation ends</td><td><code>-</code></td></tr><tr><td><code>click-overlay</code></td><td>Triggered when you click on overlay</td><td><code>-</code></td></tr><tr><td><code>key-escape</code></td><td>Triggered when click keyboard ESC</td><td><code>-</code></td></tr></tbody></table>`,1)]),r(`div`,C,[r(`h3`,w,[a(j,{to:`#Slots`},{default:n(()=>[...l[18]||=[o(`#`,-1)]]),_:1}),l[19]||=o(`Slots`,-1)]),l[20]||=r(`table`,null,[r(`thead`,null,[r(`tr`,null,[r(`th`,null,`Name`),r(`th`,null,`Description`),r(`th`,null,`SlotProps`)])]),r(`tbody`,null,[r(`tr`,null,[r(`td`,null,[r(`code`,null,`default`)]),r(`td`,null,`Popup content`),r(`td`,null,[r(`code`,null,`-`)])])])],-1)]),r(`div`,T,[r(`h3`,E,[a(j,{to:`#StyleVariables`},{default:n(()=>[...l[21]||=[o(`#`,-1)]]),_:1}),l[22]||=o(`Style Variables`,-1)]),l[23]||=s(`<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--popup-overlay-background-color</code></td><td><code>rgba(0, 0, 0, .6)</code></td></tr><tr><td><code>--popup-content-background-color</code></td><td><code>var(--color-surface-container-low)</code></td></tr></tbody></table>`,2)])])}var O=c(l,[[`render`,D]]);export{O as default};