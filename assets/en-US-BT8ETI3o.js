import{_ as c,m as r,p as t,q as a,w as e,Q as s,a1 as o,b as l,e as i}from"./index-D7J0Ej29.js";const h={components:{}},p={class:"varlet-site-doc"},g=t("h1",null,"LoadingBar",-1),j={class:"card"},m={id:"Intro"},u=t("p",null,"Display loading progress at the top of the page.",-1),_={class:"card"},f={id:"BasicUsage"},y=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
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
`)])],-1),b=t("h2",null,"API",-1),v={class:"card"},B={id:"Methods"},L=o("<table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>LoadingBar.start</code></td><td>Start loading</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>LoadingBar.finish</code></td><td>Finish loading</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>LoadingBar.error</code></td><td>Loading error</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>LoadingBar.setDefaultOptions</code></td><td>Set default option configuration</td><td><em>options: LoadingBarOptions</em></td><td><code>-</code></td></tr><tr><td><code>LoadingBar.resetDefaultOptions</code></td><td>Reset default option configuration</td><td><em>-</em></td><td><code>-</code></td></tr></tbody></table>",1),S={class:"card"},k={id:"LoadingBarOptions"},C=o("<table><thead><tr><th>Option</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>color</code></td><td>LoadingBar color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>errorColor</code></td><td>LoadingBar error color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>height</code></td><td>LoadingBar height</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>top</code></td><td>LoadingBar top</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>finishDelay</code> <em><strong>3.3.13</strong></em></td><td>The delay time of the finish function, which can be used to increase the duration of loading animation</td><td><em>number</em></td><td><code>-</code></td></tr></tbody></table>",1),w={class:"card"},D={id:"StyleVariables"},x=o('<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--loading-bar-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--loading-bar-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--loading-bar-height</code></td><td><code>3px</code></td></tr></tbody></table>',2);function O(V,U,I,M,N,$){const n=l("router-link"),d=l("var-site-code-example");return i(),r("div",p,[g,t("div",j,[t("h3",m,[a(n,{to:"#Intro"},{default:e(()=>[s("#")]),_:1}),s("Intro")]),u]),t("div",_,[t("h3",f,[a(n,{to:"#BasicUsage"},{default:e(()=>[s("#")]),_:1}),s("Basic Usage")]),a(d,null,{default:e(()=>[y]),_:1})]),b,t("div",v,[t("h3",B,[a(n,{to:"#Methods"},{default:e(()=>[s("#")]),_:1}),s("Methods")]),L]),t("div",S,[t("h3",k,[a(n,{to:"#LoadingBarOptions"},{default:e(()=>[s("#")]),_:1}),s("LoadingBar Options")]),C]),t("div",w,[t("h3",D,[a(n,{to:"#StyleVariables"},{default:e(()=>[s("#")]),_:1}),s("Style Variables")]),x])])}const z=c(h,[["render",O]]);export{z as default};
