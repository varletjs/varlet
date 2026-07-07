import{_ as d,b as o,e as h,m as r,p as t,q as a,w as l,P as s,Z as n}from"./index-vwO9GBzB.js";const i={components:{}},p={class:"varlet-site-doc"},j=t("h1",null,"Sticky",-1),m={class:"card"},u={id:"Intro"},_=t("p",null,[s("The sticky layout uses the "),t("code",null,"scroll"),s(" layout mode that listens to container scroll events by default. If necessary, you can switch to the "),t("code",null,"css sticky"),s(" layout mode to improve performance.")],-1),b={class:"card"},y={id:"BasicUse"},g=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"div"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"sticky-example"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-sticky"),s(),t("span",{class:"hljs-attr"},":offset-top"),s("="),t("span",{class:"hljs-string"},'"54"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(">")]),s("Basic Use"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-sticky"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"style"),s(">")]),t("span",{class:"css"},[s(`
`),t("span",{class:"hljs-selector-class"},".sticky-example"),s(` {
  `),t("span",{class:"hljs-attribute"},"min-height"),s(": "),t("span",{class:"hljs-number"},"200vh"),s(`;
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),v={class:"card"},f={id:"LocalSticky"},k=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"div"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"sticky-example"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"div"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"sticky-example-scroller"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-sticky"),s(">")]),s(`
        `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"success"'),s(">")]),s("Local Sticky"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-sticky"),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"div"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"sticky-example-block"'),s(">")]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"style"),s(">")]),t("span",{class:"css"},[s(`
`),t("span",{class:"hljs-selector-class"},".sticky-example"),s(` {
  `),t("span",{class:"hljs-attribute"},"min-height"),s(": "),t("span",{class:"hljs-number"},"200vh"),s(`;
}

`),t("span",{class:"hljs-selector-class"},".sticky-example-scroller"),s(` {
  `),t("span",{class:"hljs-attribute"},"height"),s(": "),t("span",{class:"hljs-number"},"200px"),s(`;
  `),t("span",{class:"hljs-attribute"},"overflow"),s(`: auto;
  `),t("span",{class:"hljs-attribute"},"background"),s(": "),t("span",{class:"hljs-number"},"#2979ff"),s(`;
}

`),t("span",{class:"hljs-selector-class"},".sticky-example-block"),s(` {
  `),t("span",{class:"hljs-attribute"},"width"),s(": "),t("span",{class:"hljs-number"},"100%"),s(`;
  `),t("span",{class:"hljs-attribute"},"height"),s(": "),t("span",{class:"hljs-number"},"600px"),s(`;
  `),t("span",{class:"hljs-attribute"},"background"),s(": "),t("span",{class:"hljs-number"},"#2979ff"),s(`;
  `),t("span",{class:"hljs-attribute"},"opacity"),s(": ."),t("span",{class:"hljs-number"},"5"),s(`;
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),x=t("h2",null,"API",-1),S={class:"card"},w={id:"Props"},P=n("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>offset-top</code></td><td>Sticky offset top</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>z-index</code></td><td>Sticky z-index</td><td><em>string | number</em></td><td><code>10</code></td></tr><tr><td><code>css-mode</code></td><td>Enable native <code>css sticky</code> mode</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Disable sticky, when set to <code>true</code>, the element will return to the document flow</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table>",1),B={class:"card"},D={id:"Methods"},E=n("<table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>resize</code></td><td>Triggered when sticky layout redraw</td><td><code>-</code></td><td><code>Promise&lt;void&gt;</code></td></tr></tbody></table>",1),T={class:"card"},I={id:"Events"},N=n("<table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>scroll</code></td><td>Triggered when the scroll container rolls</td><td><code>offsetTop: number</code> <br> <code>isFixed: boolean</code></td></tr></tbody></table>",1),U={class:"card"},L={id:"Slots"},M=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Description"),t("th",null,"SlotProps")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("code",null,"default")]),t("td",null,"Sticky content"),t("td",null,[t("code",null,"-")])])])],-1);function V($,z,A,C,q,F){const e=o("router-link"),c=o("var-site-code-example");return h(),r("div",p,[j,t("div",m,[t("h3",u,[a(e,{to:"#Intro"},{default:l(()=>[s("#")]),_:1}),s("Intro")]),_]),t("div",b,[t("h3",y,[a(e,{to:"#BasicUse"},{default:l(()=>[s("#")]),_:1}),s("Basic Use")]),a(c,null,{default:l(()=>[g]),_:1})]),t("div",v,[t("h3",f,[a(e,{to:"#LocalSticky"},{default:l(()=>[s("#")]),_:1}),s("Local Sticky")]),a(c,null,{default:l(()=>[k]),_:1})]),x,t("div",S,[t("h3",w,[a(e,{to:"#Props"},{default:l(()=>[s("#")]),_:1}),s("Props")]),P]),t("div",B,[t("h3",D,[a(e,{to:"#Methods"},{default:l(()=>[s("#")]),_:1}),s("Methods")]),E]),t("div",T,[t("h3",I,[a(e,{to:"#Events"},{default:l(()=>[s("#")]),_:1}),s("Events")]),N]),t("div",U,[t("h3",L,[a(e,{to:"#Slots"},{default:l(()=>[s("#")]),_:1}),s("Slots")]),M])])}const Z=d(i,[["render",V]]);export{Z as default};
