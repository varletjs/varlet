import{t as e}from"./varlet-touch-emulator-BGq692jm.js";import{G as t,L as n,N as r,c as i,d as a,g as o,h as s,m as c}from"./runtime-core.esm-bundler-DUghkl6b.js";var l={components:{}},u={class:`varlet-site-doc`},d={class:`card`},f={id:`Intro`},p={class:`card`},m={id:`BasicUsage`},h={class:`card`},g={id:`BackgroundImageLazyLoad`},_={class:`card`},v={id:`InlineAttributes`},y={class:`card`},b={id:`Plugin`},x={class:`card`},S={id:`PluginOptions`};function C(e,l,C,w,T,E){let D=n(`router-link`),O=n(`var-site-code-example`);return r(),a(`div`,u,[l[20]||=i(`h1`,null,`Lazy`,-1),i(`div`,d,[i(`h3`,f,[o(D,{to:`#Intro`},{default:t(()=>[...l[0]||=[s(`#`,-1)]]),_:1}),l[1]||=s(`Intro`,-1)]),l[2]||=i(`p`,null,`Load when the image is visible.`,-1)]),i(`div`,p,[i(`h3`,m,[o(D,{to:`#BasicUsage`},{default:t(()=>[...l[3]||=[s(`#`,-1)]]),_:1}),l[4]||=s(`Basic Usage`,-1)]),o(O,null,{default:t(()=>[...l[5]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`img`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"lazy-example-cat"`),s(),i(`span`,{class:`hljs-attr`},`v-lazy`),s(`=`),i(`span`,{class:`hljs-string`},`"'https://varletjs.org/cat.jpg'"`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),i(`span`,{class:`css`},[s(`
`),i(`span`,{class:`hljs-selector-class`},`.lazy-example-cat`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`width`),s(`: `),i(`span`,{class:`hljs-number`},`100%`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`height`),s(`: `),i(`span`,{class:`hljs-number`},`200px`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`object-fit`),s(`: cover;
  `),i(`span`,{class:`hljs-attribute`},`background-size`),s(`: cover;
  `),i(`span`,{class:`hljs-attribute`},`pointer-events`),s(`: none;
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,h,[i(`h3`,g,[o(D,{to:`#BackgroundImageLazyLoad`},{default:t(()=>[...l[6]||=[s(`#`,-1)]]),_:1}),l[7]||=s(`Background Image Lazy Load`,-1)]),o(O,null,{default:t(()=>[...l[8]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`div`),s(` 
    `),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"lazy-example-cat"`),s(`
    `),i(`span`,{class:`hljs-attr`},`v-lazy:background-image`),s(`=`),i(`span`,{class:`hljs-string`},`"'https://varletjs.org/cat.jpg'"`),s(`
  >`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`div`),s(`>`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),i(`span`,{class:`css`},[s(`
`),i(`span`,{class:`hljs-selector-class`},`.lazy-example-cat`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`width`),s(`: `),i(`span`,{class:`hljs-number`},`100%`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`height`),s(`: `),i(`span`,{class:`hljs-number`},`200px`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`object-fit`),s(`: cover;
  `),i(`span`,{class:`hljs-attribute`},`background-size`),s(`: cover;
  `),i(`span`,{class:`hljs-attribute`},`pointer-events`),s(`: none;
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,_,[i(`h3`,v,[o(D,{to:`#InlineAttributes`},{default:t(()=>[...l[9]||=[s(`#`,-1)]]),_:1}),l[10]||=s(`Inline Attributes`,-1)]),l[12]||=i(`p`,null,[s(`You can modify the `),i(`code`,null,`loading`),s(`, `),i(`code`,null,`error`),s(` image, and `),i(`code`,null,`reload attempts`),s(` by using inline properties.`)],-1),o(O,null,{default:t(()=>[...l[11]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`
  `),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`img`),s(),i(`span`,{class:`hljs-attr`},`class`),s(`=`),i(`span`,{class:`hljs-string`},`"lazy-example-cat"`),s(` 
    `),i(`span`,{class:`hljs-attr`},`v-lazy`),s(`=`),i(`span`,{class:`hljs-string`},`"'https://varletjs.org/cat.jpg'"`),s(`
    `),i(`span`,{class:`hljs-attr`},`lazy-loading`),s(`=`),i(`span`,{class:`hljs-string`},`"https://xxx.cn/loading.png"`),s(`
    `),i(`span`,{class:`hljs-attr`},`lazy-error`),s(`=`),i(`span`,{class:`hljs-string`},`"https://xxx.cn/error.png"`),s(`
    `),i(`span`,{class:`hljs-attr`},`lazy-attempt`),s(`=`),i(`span`,{class:`hljs-string`},`"3"`),s(`
  >`)]),s(`
`),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`template`),s(`>`)]),s(`

`),i(`span`,{class:`hljs-tag`},[s(`<`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),i(`span`,{class:`css`},[s(`
`),i(`span`,{class:`hljs-selector-class`},`.lazy-example-cat`),s(` {
  `),i(`span`,{class:`hljs-attribute`},`width`),s(`: `),i(`span`,{class:`hljs-number`},`100%`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`height`),s(`: `),i(`span`,{class:`hljs-number`},`200px`),s(`;
  `),i(`span`,{class:`hljs-attribute`},`object-fit`),s(`: cover;
  `),i(`span`,{class:`hljs-attribute`},`background-size`),s(`: cover;
  `),i(`span`,{class:`hljs-attribute`},`pointer-events`),s(`: none;
}
`)]),i(`span`,{class:`hljs-tag`},[s(`</`),i(`span`,{class:`hljs-name`},`style`),s(`>`)]),s(`
`)])],-1)]]),_:1})]),i(`div`,y,[i(`h3`,b,[o(D,{to:`#Plugin`},{default:t(()=>[...l[13]||=[s(`#`,-1)]]),_:1}),l[14]||=s(`Plugin`,-1)]),l[16]||=i(`p`,null,[s(`The option to set the default `),i(`code`,null,`Lazy`),s(` load option is provided, which is passed in at plugin registration.`)],-1),o(O,{"playground-ignore":``},{default:t(()=>[...l[15]||=[i(`pre`,{class:`hljs`},[i(`code`,null,[i(`span`,{class:`hljs-keyword`},`import`),s(` { createApp } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'vue'`),s(`
`),i(`span`,{class:`hljs-keyword`},`import`),s(` { Lazy } `),i(`span`,{class:`hljs-keyword`},`from`),s(),i(`span`,{class:`hljs-string`},`'@varlet/ui'`),s(`

createApp().use(Lazy, {
  `),i(`span`,{class:`hljs-attr`},`loading`),s(`: `),i(`span`,{class:`hljs-string`},`'https://xxx.cn/loading.png'`),s(`,
  `),i(`span`,{class:`hljs-attr`},`error`),s(`: `),i(`span`,{class:`hljs-string`},`'https://xxx.cn/error.png'`),s(`,
  `),i(`span`,{class:`hljs-attr`},`attempt`),s(`: `),i(`span`,{class:`hljs-number`},`3`),s(`,
  `),i(`span`,{class:`hljs-attr`},`throttleWait`),s(`: `),i(`span`,{class:`hljs-number`},`300`),s(`,
  `),i(`span`,{class:`hljs-attr`},`events`),s(`: [
    `),i(`span`,{class:`hljs-string`},`'scroll'`),s(`, 
    `),i(`span`,{class:`hljs-string`},`'wheel'`),s(`, 
    `),i(`span`,{class:`hljs-string`},`'mousewheel'`),s(`, 
    `),i(`span`,{class:`hljs-string`},`'resize'`),s(`,
    `),i(`span`,{class:`hljs-string`},`'animationend'`),s(`,
    `),i(`span`,{class:`hljs-string`},`'transitionend'`),s(`, 
    `),i(`span`,{class:`hljs-string`},`'touchmove'`),s(`
  ],
  `),i(`span`,{class:`hljs-function`},[i(`span`,{class:`hljs-title`},`filter`),s(`(`),i(`span`,{class:`hljs-params`},`lazy`),s(`)`)]),s(` {
    `),i(`span`,{class:`hljs-comment`},`// All properties of the context can be accessed, and some property interceptions can be performed.`),s(`
    `),i(`span`,{class:`hljs-comment`},`// Such as simply modifying all image addresses http-> https`),s(`
    lazy.src.replace(`),i(`span`,{class:`hljs-string`},`'http://'`),s(`, `),i(`span`,{class:`hljs-string`},`'https://'`),s(`)
  }
})
`)])],-1)]]),_:1})]),l[21]||=i(`h2`,null,`API`,-1),i(`div`,x,[i(`h3`,S,[o(D,{to:`#PluginOptions`},{default:t(()=>[...l[17]||=[s(`#`,-1)]]),_:1}),l[18]||=s(`Plugin Options`,-1)]),l[19]||=c(`<table><thead><tr><th>Option</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>loading</code></td><td>Loading images, if possible, select images that load quickly</td><td><em>string</em></td><td><code>Pixel transparent picture</code></td></tr><tr><td><code>error</code></td><td>Load failed to display the picture</td><td><em>string</em></td><td><code>Pixel transparent picture</code></td></tr><tr><td><code>attempt</code></td><td>The number of times a load failed to reload</td><td><em>number</em></td><td><code>3</code></td></tr><tr><td><code>throttleWait</code></td><td>throttle wait time, The higher the value, the lower the trigger frequency</td><td><em>number</em></td><td><code>300</code></td></tr><tr><td><code>events</code></td><td>A list of events that trigger visibility detection registration</td><td><em>string[]</em></td><td><code>[&#39;scroll&#39;...]</code></td></tr><tr><td><code>filter</code></td><td>Attribute interceptor function</td><td><em>(lazy: Lazy) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr></tbody></table>`,1)])])}var w=e(l,[[`render`,C]]);export{w as default};