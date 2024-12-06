import{_ as r,m as i,p as a,q as t,w as l,Q as s,a1 as o,b as c,e as p}from"./index-Dp-m0_HZ.js";const h={components:{}},d={class:"varlet-site-doc"},u=a("h1",null,"Ripple Directive",-1),j={class:"card"},b={id:"Intro"},_=a("p",null,"When the element is clicked, a water wave spreading effect is generated.",-1),m={class:"card"},g={id:"BasicUsage"},v=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"ripple-example-block var-elevation--2"'),s(),a("span",{class:"hljs-attr"},"v-ripple"),s(">")]),s("click"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".ripple-example-block"),s(` {
  `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"100px"),s(`;
  user-select: none;
  `),a("span",{class:"hljs-attribute"},"cursor"),s(`: pointer;
  -webkit-tap-highlight-`),a("span",{class:"hljs-attribute"},"color"),s(`: transparent;
  `),a("span",{class:"hljs-attribute"},"transition"),s(": background-color "),a("span",{class:"hljs-number"},"0.25s"),s(`;
  `),a("span",{class:"hljs-attribute"},"background-color"),s(": "),a("span",{class:"hljs-built_in"},"var"),s(`(--color-surface-container-highest)
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),f={class:"card"},y={id:"CustomColor"},k=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"ripple-example-block var-elevation--2"'),s(),a("span",{class:"hljs-attr"},"v-ripple"),s("="),a("span",{class:"hljs-string"},`"{ color: 'var(--color-warning)' }"`),s(">")]),s(`
    click
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".ripple-example-block"),s(` {
  `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"100px"),s(`;
  user-select: none;
  `),a("span",{class:"hljs-attribute"},"cursor"),s(`: pointer;
  -webkit-tap-highlight-`),a("span",{class:"hljs-attribute"},"color"),s(`: transparent;
  `),a("span",{class:"hljs-attribute"},"transition"),s(": background-color "),a("span",{class:"hljs-number"},"0.25s"),s(`;
  `),a("span",{class:"hljs-attribute"},"background-color"),s(": "),a("span",{class:"hljs-built_in"},"var"),s(`(--color-surface-container-highest);
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),x={class:"card"},S={id:"DisabledStatus"},C=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"ripple-example-block var-elevation--2"'),s(),a("span",{class:"hljs-attr"},"v-ripple"),s("="),a("span",{class:"hljs-string"},'"{ disabled: true }"'),s(">")]),s(`
    click
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".ripple-example-block"),s(` {
  `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"100px"),s(`;
  user-select: none;
  `),a("span",{class:"hljs-attribute"},"cursor"),s(`: pointer;
  -webkit-tap-highlight-`),a("span",{class:"hljs-attribute"},"color"),s(`: transparent;
  `),a("span",{class:"hljs-attribute"},"transition"),s(": background-color "),a("span",{class:"hljs-number"},"0.25s"),s(`;
  `),a("span",{class:"hljs-attribute"},"background-color"),s(": "),a("span",{class:"hljs-built_in"},"var"),s(`(--color-surface-container-highest);
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),w=a("h2",null,"API",-1),V={class:"card"},D={id:"Options"},B=o("<table><thead><tr><th>Option</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>color</code></td><td>Ripple color</td><td><em>string</em></td><td><code>currentColor</code></td></tr><tr><td><code>disabled</code></td><td>Whether to disable ripple</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table>",1),U={class:"card"},I={id:"StyleVariables"},N=o('<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--ripple-cubic-bezier</code></td><td><code>cubic-bezier(0.68, 0.01, 0.62, 0.6)</code></td></tr><tr><td><code>--ripple-color</code></td><td><code>currentColor</code></td></tr></tbody></table>',2);function O($,z,P,R,T,W){const e=c("router-link"),n=c("var-site-code-example");return p(),i("div",d,[u,a("div",j,[a("h3",b,[t(e,{to:"#Intro"},{default:l(()=>[s("#")]),_:1}),s("Intro")]),_]),a("div",m,[a("h3",g,[t(e,{to:"#BasicUsage"},{default:l(()=>[s("#")]),_:1}),s("Basic Usage")]),t(n,null,{default:l(()=>[v]),_:1})]),a("div",f,[a("h3",y,[t(e,{to:"#CustomColor"},{default:l(()=>[s("#")]),_:1}),s("Custom Color")]),t(n,null,{default:l(()=>[k]),_:1})]),a("div",x,[a("h3",S,[t(e,{to:"#DisabledStatus"},{default:l(()=>[s("#")]),_:1}),s("Disabled Status")]),t(n,null,{default:l(()=>[C]),_:1})]),w,a("div",V,[a("h3",D,[t(e,{to:"#Options"},{default:l(()=>[s("#")]),_:1}),s("Options")]),B]),a("div",U,[a("h3",I,[t(e,{to:"#StyleVariables"},{default:l(()=>[s("#")]),_:1}),s("Style Variables")]),N])])}const A=r(h,[["render",O]]);export{A as default};
