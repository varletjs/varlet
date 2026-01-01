import{b as r,m as p,p as t,q as a,Q as s,w as n,$ as o,e as c,h as i}from"./index-DtCrA0ro.js";const h={components:{}},j={class:"varlet-site-doc"},m={class:"card"},u={id:"Intro"},b={class:"card"},y={id:"BasicUse"},g={class:"card"},v={id:"LocalSticky"},f={class:"card"},k={id:"Props"},x={class:"card"},S={id:"Methods"},w={class:"card"},_={id:"Events"},B={class:"card"},P={id:"Slots"};function D(E,l,T,I,N,U){const e=c("router-link"),d=c("var-site-code-example");return i(),p("div",j,[l[21]||(l[21]=t("h1",null,"Sticky",-1)),t("div",m,[t("h3",u,[a(e,{to:"#Intro"},{default:n(()=>[...l[0]||(l[0]=[s("#",-1)])]),_:1}),l[1]||(l[1]=s("Intro",-1))]),l[2]||(l[2]=t("p",null,[s("The sticky layout uses the "),t("code",null,"scroll"),s(" layout mode that listens to container scroll events by default. If necessary, you can switch to the "),t("code",null,"css sticky"),s(" layout mode to improve performance.")],-1))]),t("div",b,[t("h3",y,[a(e,{to:"#BasicUse"},{default:n(()=>[...l[3]||(l[3]=[s("#",-1)])]),_:1}),l[4]||(l[4]=s("Basic Use",-1))]),a(d,null,{default:n(()=>[...l[5]||(l[5]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1)])]),_:1})]),t("div",g,[t("h3",v,[a(e,{to:"#LocalSticky"},{default:n(()=>[...l[6]||(l[6]=[s("#",-1)])]),_:1}),l[7]||(l[7]=s("Local Sticky",-1))]),a(d,null,{default:n(()=>[...l[8]||(l[8]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1)])]),_:1})]),l[22]||(l[22]=t("h2",null,"API",-1)),t("div",f,[t("h3",k,[a(e,{to:"#Props"},{default:n(()=>[...l[9]||(l[9]=[s("#",-1)])]),_:1}),l[10]||(l[10]=s("Props",-1))]),l[11]||(l[11]=o("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>offset-top</code></td><td>Sticky offset top</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>z-index</code></td><td>Sticky z-index</td><td><em>string | number</em></td><td><code>10</code></td></tr><tr><td><code>css-mode</code></td><td>Enable native <code>css sticky</code> mode</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Disable sticky, when set to <code>true</code>, the element will return to the document flow</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table>",1))]),t("div",x,[t("h3",S,[a(e,{to:"#Methods"},{default:n(()=>[...l[12]||(l[12]=[s("#",-1)])]),_:1}),l[13]||(l[13]=s("Methods",-1))]),l[14]||(l[14]=o("<table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>resize</code></td><td>Triggered when sticky layout redraw</td><td><code>-</code></td><td><code>Promise&lt;void&gt;</code></td></tr></tbody></table>",1))]),t("div",w,[t("h3",_,[a(e,{to:"#Events"},{default:n(()=>[...l[15]||(l[15]=[s("#",-1)])]),_:1}),l[16]||(l[16]=s("Events",-1))]),l[17]||(l[17]=o("<table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>scroll</code></td><td>Triggered when the scroll container rolls</td><td><code>offsetTop: number</code> <br> <code>isFixed: boolean</code></td></tr></tbody></table>",1))]),t("div",B,[t("h3",P,[a(e,{to:"#Slots"},{default:n(()=>[...l[18]||(l[18]=[s("#",-1)])]),_:1}),l[19]||(l[19]=s("Slots",-1))]),l[20]||(l[20]=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Description"),t("th",null,"SlotProps")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("code",null,"default")]),t("td",null,"Sticky content"),t("td",null,[t("code",null,"-")])])])],-1))])])}const L=r(h,[["render",D]]);export{L as default};
