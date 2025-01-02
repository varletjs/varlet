import{_ as c,m as r,p as t,q as a,w as e,Q as s,a1 as d,b as l,e as h}from"./index-XHkyQ4jX.js";const i={components:{}},p={class:"varlet-site-doc"},j=t("h1",null,"加载条",-1),m={class:"card"},g={id:"jie4shao4"},_=t("p",null,"页面顶部显示加载进度。",-1),u={class:"card"},f={id:"ji1ben3shi3yong4"},y=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
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

`),t("span",{class:"hljs-comment"},"// 移动端案例设置了偏移"),s(`
`),t("span",{class:"hljs-comment"},"// LoadingBar.setDefaultOptions({"),s(`
`),t("span",{class:"hljs-comment"},"//   top: '54px'"),s(`
`),t("span",{class:"hljs-comment"},"// })"),s(`
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-space"),s(),t("span",{class:"hljs-attr"},"direction"),s("="),t("span",{class:"hljs-string"},'"column"'),s(),t("span",{class:"hljs-attr"},"size"),s("="),t("span",{class:"hljs-string"},'"large"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"LoadingBar.start()"'),s(">")]),s("开始"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"LoadingBar.finish()"'),s(">")]),s("结束"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"LoadingBar.error()"'),s(">")]),s("错误"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-button"),s(),t("span",{class:"hljs-attr"},"type"),s("="),t("span",{class:"hljs-string"},'"primary"'),s(),t("span",{class:"hljs-attr"},"block"),s(" @"),t("span",{class:"hljs-attr"},"click"),s("="),t("span",{class:"hljs-string"},'"setStyle"'),s(">")]),s(`
      {{ hasCustomStyle ? '清除样式' : '设置样式' }}
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-button"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),b=t("h2",null,"API",-1),v={class:"card"},k={id:"fang1fa3"},B=d("<table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>LoadingBar.start</code></td><td>开始加载</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>LoadingBar.finish</code></td><td>结束加载</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>LoadingBar.error</code></td><td>加载失败</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>LoadingBar.setDefaultOptions</code></td><td>设置默认的选项配置</td><td><em>options: LoadingBarOptions</em></td><td><code>-</code></td></tr><tr><td><code>LoadingBar.resetDefaultOptions</code></td><td>重置默认的选项配置</td><td><em>-</em></td><td><code>-</code></td></tr></tbody></table>",1),L={class:"card"},C={id:"LoadingBarOptions"},w=d("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>color</code></td><td>加载条颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>errorColor</code></td><td>加载失败时的颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>height</code></td><td>加载条的高度</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>top</code></td><td>加载条距离页面顶部的距离</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>height</code></td><td>加载条的高度</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>finishDelay</code> <em><strong>3.3.13</strong></em></td><td>结束加载的延时时间(单位 ms)，可用于增加加载动画的持续时间</td><td><em>number</em></td><td><code>-</code></td></tr></tbody></table>",1),x={class:"card"},O={id:"yang4shi4bian4liang4"},S=d('<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--loading-bar-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--loading-bar-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--loading-bar-height</code></td><td><code>3px</code></td></tr></tbody></table>',2);function D(N,V,$,z,P,q){const n=l("router-link"),o=l("var-site-code-example");return h(),r("div",p,[j,t("div",m,[t("h3",g,[a(n,{to:"#jie4shao4"},{default:e(()=>[s("#")]),_:1}),s("介绍")]),_]),t("div",u,[t("h3",f,[a(n,{to:"#ji1ben3shi3yong4"},{default:e(()=>[s("#")]),_:1}),s("基本使用")]),a(o,null,{default:e(()=>[y]),_:1})]),b,t("div",v,[t("h3",k,[a(n,{to:"#fang1fa3"},{default:e(()=>[s("#")]),_:1}),s("方法")]),B]),t("div",L,[t("h3",C,[a(n,{to:"#LoadingBarOptions"},{default:e(()=>[s("#")]),_:1}),s("LoadingBar Options")]),w]),t("div",x,[t("h3",O,[a(n,{to:"#yang4shi4bian4liang4"},{default:e(()=>[s("#")]),_:1}),s("样式变量")]),S])])}const E=c(i,[["render",D]]);export{E as default};
