import{b as p,m as c,p as s,q as l,Q as t,w as n,$ as r,e as d,h}from"./index-DtCrA0ro.js";const i={components:{}},j={class:"varlet-site-doc"},m={class:"card"},u={id:"Intro"},v={class:"card"},y={id:"BasicUsage"},g={class:"card"},b={id:"OverlayContent"},f={class:"card"},k={id:"ClickEvent"},w={class:"card"},S={id:"Props"},C={class:"card"},x={id:"Events"},E={class:"card"},O={id:"Slots"},_={class:"card"},P={id:"StyleVariables"};function V(B,a,D,T,I,N){const e=d("router-link"),o=d("var-site-code-example");return h(),c("div",j,[a[24]||(a[24]=s("h1",null,"Overlay",-1)),s("div",m,[s("h3",u,[l(e,{to:"#Intro"},{default:n(()=>[...a[0]||(a[0]=[t("#",-1)])]),_:1}),a[1]||(a[1]=t("Intro",-1))]),a[2]||(a[2]=s("p",null,"Create a mask layer to emphasize specific page elements.",-1))]),s("div",v,[s("h3",y,[l(e,{to:"#BasicUsage"},{default:n(()=>[...a[3]||(a[3]=[t("#",-1)])]),_:1}),a[4]||(a[4]=t("Basic Usage",-1))]),l(o,null,{default:n(()=>[...a[5]||(a[5]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
  
`),s("span",{class:"hljs-keyword"},"const"),t(" show = ref("),s("span",{class:"hljs-literal"},"false"),t(`)
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"primary"'),t(),s("span",{class:"hljs-attr"},"block"),t(" @"),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"show = true"'),t(">")]),t("Show Overlay"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-overlay"),t(),s("span",{class:"hljs-attr"},"v-model:show"),t("="),s("span",{class:"hljs-string"},'"show"'),t(" />")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1)])]),_:1})]),s("div",g,[s("h3",b,[l(e,{to:"#OverlayContent"},{default:n(()=>[...a[6]||(a[6]=[t("#",-1)])]),_:1}),a[7]||(a[7]=t("Overlay Content",-1))]),l(o,null,{default:n(()=>[...a[8]||(a[8]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(" show = ref("),s("span",{class:"hljs-literal"},"false"),t(`)
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"primary"'),t(),s("span",{class:"hljs-attr"},"block"),t(" @"),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"show = true"'),t(">")]),t("Overlay Content"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-overlay"),t(),s("span",{class:"hljs-attr"},"v-model:show"),t("="),s("span",{class:"hljs-string"},'"show"'),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"div"),t(),s("span",{class:"hljs-attr"},"class"),t("="),s("span",{class:"hljs-string"},'"overlay-content"'),t(">")]),t(`
      As he came into the window.
      It was the sound of a crescendo.
      He came into her apartment.
      He left the bloodstains on the carpet.
    `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"div"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-overlay"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"style"),t(">")]),s("span",{class:"css"},[t(`
`),s("span",{class:"hljs-selector-class"},".overlay-content"),t(` {
  `),s("span",{class:"hljs-attribute"},"padding"),t(": "),s("span",{class:"hljs-number"},"24px"),t(`;
  `),s("span",{class:"hljs-attribute"},"width"),t(": "),s("span",{class:"hljs-number"},"312px"),t(`;
  `),s("span",{class:"hljs-attribute"},"border-radius"),t(": "),s("span",{class:"hljs-number"},"28px"),t(`;
}
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"style"),t(">")]),t(`
`)])],-1)])]),_:1})]),s("div",f,[s("h3",k,[l(e,{to:"#ClickEvent"},{default:n(()=>[...a[9]||(a[9]=[t("#",-1)])]),_:1}),a[10]||(a[10]=t("Click Event",-1))]),l(o,null,{default:n(()=>[...a[11]||(a[11]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Snackbar } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(" show = ref("),s("span",{class:"hljs-literal"},"false"),t(`)
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"primary"'),t(),s("span",{class:"hljs-attr"},"block"),t(" @"),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},'"show = true"'),t(">")]),t("Click Overlay"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-overlay"),t(`
    `),s("span",{class:"hljs-attr"},"v-model:show"),t("="),s("span",{class:"hljs-string"},'"show"'),t(`
    @`),s("span",{class:"hljs-attr"},"click"),t("="),s("span",{class:"hljs-string"},`"Snackbar.success('click')"`),t(`
  />`)]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1)])]),_:1})]),a[25]||(a[25]=s("h2",null,"API",-1)),s("div",w,[s("h3",S,[l(e,{to:"#Props"},{default:n(()=>[...a[12]||(a[12]=[t("#",-1)])]),_:1}),a[13]||(a[13]=t("Props",-1))]),a[14]||(a[14]=r("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>Whether to display the Overlay</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>lock-scroll</code></td><td>Whether to disable scrolling penetration, scrolling the Overlay when disabled will not cause the body to scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>The location of the Overlay to mount</td><td><em>TeleportProps[&#39;to&#39;] | false</em></td><td><code>-</code></td></tr><tr><td><code>close-on-key-escape</code></td><td>Whether to support keyboard ESC to close the overlay</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table>",1))]),s("div",C,[s("h3",x,[l(e,{to:"#Events"},{default:n(()=>[...a[15]||(a[15]=[t("#",-1)])]),_:1}),a[16]||(a[16]=t("Events",-1))]),a[17]||(a[17]=r("<table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggered when clicking on overlay</td><td><code>-</code></td></tr><tr><td><code>key-escape</code></td><td>Triggered when click keyboard ESC</td><td><code>-</code></td></tr></tbody></table>",1))]),s("div",E,[s("h3",O,[l(e,{to:"#Slots"},{default:n(()=>[...a[18]||(a[18]=[t("#",-1)])]),_:1}),a[19]||(a[19]=t("Slots",-1))]),a[20]||(a[20]=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"Name"),s("th",null,"Description"),s("th",null,"SlotProps")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("code",null,"default")]),s("td",null,"Default slot"),s("td",null,[s("code",null,"-")])])])],-1))]),s("div",_,[s("h3",P,[l(e,{to:"#StyleVariables"},{default:n(()=>[...a[21]||(a[21]=[t("#",-1)])]),_:1}),a[22]||(a[22]=t("Style Variables",-1))]),a[23]||(a[23]=r('<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--overlay-background-color</code></td><td><code>rgba(0, 0, 0, .6)</code></td></tr></tbody></table>',2))])])}const $=p(i,[["render",V]]);export{$ as default};
