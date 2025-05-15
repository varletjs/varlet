import{_ as r,b as c,e as h,m as p,p as s,q as l,w as t,P as a,Z as o}from"./index-vwO9GBzB.js";const d={components:{}},i={class:"varlet-site-doc"},j=s("h1",null,"Overlay",-1),u={class:"card"},_={id:"Intro"},m=s("p",null,"Create a mask layer to emphasize specific page elements.",-1),v={class:"card"},g={id:"BasicUsage"},y=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { ref } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`
  
`),s("span",{class:"hljs-keyword"},"const"),a(" show = ref("),s("span",{class:"hljs-literal"},"false"),a(`)
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-button"),a(),s("span",{class:"hljs-attr"},"type"),a("="),s("span",{class:"hljs-string"},'"primary"'),a(),s("span",{class:"hljs-attr"},"block"),a(" @"),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"show = true"'),a(">")]),a("Show Overlay"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-overlay"),a(),s("span",{class:"hljs-attr"},"v-model:show"),a("="),s("span",{class:"hljs-string"},'"show"'),a(" />")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),b={class:"card"},f={id:"OverlayContent"},k=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { ref } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(" show = ref("),s("span",{class:"hljs-literal"},"false"),a(`)
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-button"),a(),s("span",{class:"hljs-attr"},"type"),a("="),s("span",{class:"hljs-string"},'"primary"'),a(),s("span",{class:"hljs-attr"},"block"),a(" @"),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"show = true"'),a(">")]),a("Overlay Content"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-overlay"),a(),s("span",{class:"hljs-attr"},"v-model:show"),a("="),s("span",{class:"hljs-string"},'"show"'),a(">")]),a(`
    `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(),s("span",{class:"hljs-attr"},"class"),a("="),s("span",{class:"hljs-string"},'"overlay-content"'),a(" @"),s("span",{class:"hljs-attr"},"click.stop"),a(">")]),a(`
      As he came into the window.
      It was the sound of a crescendo.
      He came into her apartment.
      He left the bloodstains on the carpet.
    `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-overlay"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"style"),a(">")]),s("span",{class:"css"},[a(`
`),s("span",{class:"hljs-selector-class"},".overlay-content"),a(` {
  `),s("span",{class:"hljs-attribute"},"padding"),a(": "),s("span",{class:"hljs-number"},"20px"),a(),s("span",{class:"hljs-number"},"24px"),a(`;
  `),s("span",{class:"hljs-attribute"},"width"),a(": "),s("span",{class:"hljs-number"},"250px"),a(`;
  `),s("span",{class:"hljs-attribute"},"background"),a(": "),s("span",{class:"hljs-built_in"},"var"),a(`(--button-default-color);
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"style"),a(">")]),a(`
`)])],-1),w={class:"card"},S={id:"ClickEvent"},C=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { ref } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { Snackbar } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(" show = ref("),s("span",{class:"hljs-literal"},"false"),a(`)
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-button"),a(),s("span",{class:"hljs-attr"},"type"),a("="),s("span",{class:"hljs-string"},'"primary"'),a(),s("span",{class:"hljs-attr"},"block"),a(" @"),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"show = true"'),a(">")]),a("Click Overlay"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-overlay"),a(`
    `),s("span",{class:"hljs-attr"},"v-model:show"),a("="),s("span",{class:"hljs-string"},'"show"'),a(`
    @`),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},`"Snackbar.success('click')"`),a(`
  />`)]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),x=s("h2",null,"API",-1),O={class:"card"},P={id:"Props"},E=o("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>Whether to display the Overlay</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>lock-scroll</code></td><td>Whether to disable scrolling penetration, scrolling the Overlay when disabled will not cause the body to scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>The location of the Overlay to mount</td><td><em>TeleportProps[&#39;to&#39;] | false</em></td><td><code>-</code></td></tr></tbody></table>",1),V={class:"card"},B={id:"Events"},D=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"Event"),s("th",null,"Description"),s("th",null,"Arguments")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("code",null,"click")]),s("td",null,"Triggered when clicking on overlay"),s("td",null,[s("code",null,"-")])])])],-1),I={class:"card"},N={id:"Slots"},T=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"Name"),s("th",null,"Description"),s("th",null,"SlotProps")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("code",null,"default")]),s("td",null,"Default slot"),s("td",null,[s("code",null,"-")])])])],-1),U={class:"card"},$={id:"StyleVariables"},A=o('<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--overlay-background-color</code></td><td><code>rgba(0, 0, 0, .6)</code></td></tr></tbody></table>',2);function H(z,W,q,Z,F,G){const n=c("router-link"),e=c("var-site-code-example");return h(),p("div",i,[j,s("div",u,[s("h3",_,[l(n,{to:"#Intro"},{default:t(()=>[a("#")]),_:1}),a("Intro")]),m]),s("div",v,[s("h3",g,[l(n,{to:"#BasicUsage"},{default:t(()=>[a("#")]),_:1}),a("Basic Usage")]),l(e,null,{default:t(()=>[y]),_:1})]),s("div",b,[s("h3",f,[l(n,{to:"#OverlayContent"},{default:t(()=>[a("#")]),_:1}),a("Overlay Content")]),l(e,null,{default:t(()=>[k]),_:1})]),s("div",w,[s("h3",S,[l(n,{to:"#ClickEvent"},{default:t(()=>[a("#")]),_:1}),a("Click Event")]),l(e,null,{default:t(()=>[C]),_:1})]),x,s("div",O,[s("h3",P,[l(n,{to:"#Props"},{default:t(()=>[a("#")]),_:1}),a("Props")]),E]),s("div",V,[s("h3",B,[l(n,{to:"#Events"},{default:t(()=>[a("#")]),_:1}),a("Events")]),D]),s("div",I,[s("h3",N,[l(n,{to:"#Slots"},{default:t(()=>[a("#")]),_:1}),a("Slots")]),T]),s("div",U,[s("h3",$,[l(n,{to:"#StyleVariables"},{default:t(()=>[a("#")]),_:1}),a("Style Variables")]),A])])}const K=r(d,[["render",H]]);export{K as default};
