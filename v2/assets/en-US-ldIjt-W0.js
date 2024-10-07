import{_ as c,b as l,e as r,m as h,p as t,q as a,w as e,P as s,Z as o}from"./index-vwO9GBzB.js";const i={components:{}},p={class:"varlet-site-doc"},j=t("h1",null,"LoadingBar",-1),g={class:"card"},m={id:"Intro"},_=t("p",null,"Display loading progress at the top of the page.",-1),u={class:"card"},y={id:"BasicUsage"},f=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { ref } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { LoadingBar } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

`),t("span",{class:"hljs-keyword"},"const"),s(" hasCustomStyle = ref("),t("span",{class:"hljs-literal"},"false"),s(`)

`),t("span",{class:"hljs-function"},[t("span",{class:"hljs-keyword"},"function"),s(),t("span",{class:"hljs-title"},"setStyle"),s("("),t("span",{class:"hljs-params"}),s(") ")]),s(`{
  `),t("span",{class:"hljs-keyword"},"if"),s(` (hasCustomStyle.value) {
    LoadingBar.resetDefaultOptions()
  } `),t("span",{class:"hljs-keyword"},"else"),s(` {
    LoadingBar.setDefaultOptions({
      `),t("span",{class:"hljs-attr"},"errorColor"),s(": "),t("span",{class:"hljs-string"},"'#ff8800'"),s(`,
      `),t("span",{class:"hljs-attr"},"color"),s(": "),t("span",{class:"hljs-string"},"'#10afef'"),s(`,
      `),t("span",{class:"hljs-attr"},"height"),s(": "),t("span",{class:"hljs-string"},"'5px'"),s(`,
    })
  }

  hasCustomStyle.value = !hasCustomStyle.value
}

`),t("span",{class:"hljs-comment"},"// mobile only"),s(`
`),t("span",{class:"hljs-comment"},"// LoadingBar.setDefaultOptions({"),s(`
`),t("span",{class:"hljs-comment"},"//   top: '54px'"),s(`
`),t("span",{class:"hljs-comment"},"// })"),s(`
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-space"),s(),t("span",{class:"hljs-attr"},"direction"),s("="),t("span",{class:"hljs-string"},'"column"'),s(),t("span",{class:"hljs-attr"},"size"),s("="),t("span",{class:"hljs-string"},'"large"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"LoadingBar.start()"'),s(">")]),s("Start"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"LoadingBar.finish()"'),s(">")]),s("Finish"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"LoadingBar.error()"'),s(">")]),s("Error"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"setStyle"'),s(">")]),s(`
      {{ hasCustomStyle ? 'Clear Style' : 'Custom Style' }}
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),b=t("h2",null,"API",-1),v={class:"card"},B={id:"Methods"},S=o("<table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>LoadingBar.start</code></td><td>Start loading</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>LoadingBar.finish</code></td><td>Finish loading</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>LoadingBar.error</code></td><td>Loading error</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>LoadingBar.setDefaultOptions</code></td><td>Set default option configuration</td><td><em>options</em></td><td><code>-</code></td></tr><tr><td><code>LoadingBar.resetDefaultOptions</code></td><td>Reset default option configuration</td><td><em>-</em></td><td><code>-</code></td></tr></tbody></table>",1),L={class:"card"},k={id:"LoadingBarOptions"},C=o("<table><thead><tr><th>Option</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>color</code></td><td>LoadingBar color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>errorColor</code></td><td>LoadingBar error color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>height</code></td><td>LoadingBar height</td><td><em>string|number</em></td><td><code>-</code></td></tr><tr><td><code>top</code></td><td>LoadingBar top</td><td><em>string|number</em></td><td><code>-</code></td></tr></tbody></table>",1),w={class:"card"},x={id:"StyleVariables"},D=o('<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--loading-bar-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--loading-bar-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--loading-bar-height</code></td><td><code>3px</code></td></tr></tbody></table>',2);function O(V,U,I,M,N,$){const n=l("router-link"),d=l("var-site-code-example");return r(),h("div",p,[j,t("div",g,[t("h3",m,[a(n,{to:"#Intro"},{default:e(()=>[s("#")]),_:1}),s("Intro")]),_]),t("div",u,[t("h3",y,[a(n,{to:"#BasicUsage"},{default:e(()=>[s("#")]),_:1}),s("Basic Usage")]),a(d,null,{default:e(()=>[f]),_:1})]),b,t("div",v,[t("h3",B,[a(n,{to:"#Methods"},{default:e(()=>[s("#")]),_:1}),s("Methods")]),S]),t("div",L,[t("h3",k,[a(n,{to:"#LoadingBarOptions"},{default:e(()=>[s("#")]),_:1}),s("LoadingBar Options")]),C]),t("div",w,[t("h3",x,[a(n,{to:"#StyleVariables"},{default:e(()=>[s("#")]),_:1}),s("Style Variables")]),D])])}const z=c(i,[["render",O]]);export{z as default};
