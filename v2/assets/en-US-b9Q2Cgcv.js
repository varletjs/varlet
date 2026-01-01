import{_ as o,b as c,e as r,m as i,p as t,q as a,w as n,P as s,Z as p}from"./index-vwO9GBzB.js";const d={components:{}},h={class:"varlet-site-doc"},j=t("h1",null,"Lazy",-1),g={class:"card"},u={id:"Intro"},m=t("p",null,"Load when the image is visible.",-1),_={class:"card"},b={id:"BasicUsage"},y=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"img"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"lazy-example-cat"'),s(),t("span",{class:"hljs-attr"},"v-lazy"),s("="),t("span",{class:"hljs-string"},`"'https://varletjs.github.io/varlet/cat.jpg'"`),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"style"),s(">")]),t("span",{class:"css"},[s(`
`),t("span",{class:"hljs-selector-class"},".lazy-example-cat"),s(` {
  `),t("span",{class:"hljs-attribute"},"width"),s(": "),t("span",{class:"hljs-number"},"100%"),s(`;
  `),t("span",{class:"hljs-attribute"},"height"),s(": "),t("span",{class:"hljs-number"},"200px"),s(`;
  `),t("span",{class:"hljs-attribute"},"object-fit"),s(`: cover;
  `),t("span",{class:"hljs-attribute"},"background-size"),s(`: cover;
  `),t("span",{class:"hljs-attribute"},"pointer-events"),s(`: none;
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),v={class:"card"},f={id:"BackgroundImageLazyLoad"},x=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"div"),s(` 
    `),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"lazy-example-cat"'),s(`
    `),t("span",{class:"hljs-attr"},"v-lazy:background-image"),s("="),t("span",{class:"hljs-string"},`"'https://varletjs.github.io/varlet/cat.jpg'"`),s(`
  >`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"style"),s(">")]),t("span",{class:"css"},[s(`
`),t("span",{class:"hljs-selector-class"},".lazy-example-cat"),s(` {
  `),t("span",{class:"hljs-attribute"},"width"),s(": "),t("span",{class:"hljs-number"},"100%"),s(`;
  `),t("span",{class:"hljs-attribute"},"height"),s(": "),t("span",{class:"hljs-number"},"200px"),s(`;
  `),t("span",{class:"hljs-attribute"},"object-fit"),s(`: cover;
  `),t("span",{class:"hljs-attribute"},"background-size"),s(`: cover;
  `),t("span",{class:"hljs-attribute"},"pointer-events"),s(`: none;
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),z={class:"card"},k={id:"InlineAttributes"},w=t("p",null,[s("You can modify the "),t("code",null,"loading"),s(", "),t("code",null,"error"),s(" image, and "),t("code",null,"reload attempts"),s(" by using inline properties.")],-1),L=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"img"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"lazy-example-cat"'),s(` 
    `),t("span",{class:"hljs-attr"},"v-lazy"),s("="),t("span",{class:"hljs-string"},`"'https://varletjs.github.io/varlet/cat.jpg'"`),s(`
    `),t("span",{class:"hljs-attr"},"lazy-loading"),s("="),t("span",{class:"hljs-string"},'"https://xxx.cn/loading.png"'),s(`
    `),t("span",{class:"hljs-attr"},"lazy-error"),s("="),t("span",{class:"hljs-string"},'"https://xxx.cn/error.png"'),s(`
    `),t("span",{class:"hljs-attr"},"lazy-attempt"),s("="),t("span",{class:"hljs-string"},'"3"'),s(`
  >`)]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"style"),s(">")]),t("span",{class:"css"},[s(`
`),t("span",{class:"hljs-selector-class"},".lazy-example-cat"),s(` {
  `),t("span",{class:"hljs-attribute"},"width"),s(": "),t("span",{class:"hljs-number"},"100%"),s(`;
  `),t("span",{class:"hljs-attribute"},"height"),s(": "),t("span",{class:"hljs-number"},"200px"),s(`;
  `),t("span",{class:"hljs-attribute"},"object-fit"),s(`: cover;
  `),t("span",{class:"hljs-attribute"},"background-size"),s(`: cover;
  `),t("span",{class:"hljs-attribute"},"pointer-events"),s(`: none;
}
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),I={class:"card"},P={id:"Plugin"},A=t("p",null,[s("The option to set the default "),t("code",null,"Lazy"),s(" load option is provided, which is passed in at plugin registration.")],-1),B=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),s(" { createApp } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { Lazy } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

createApp().use(Lazy, {
  `),t("span",{class:"hljs-attr"},"loading"),s(": "),t("span",{class:"hljs-string"},"'https://xxx.cn/loading.png'"),s(`,
  `),t("span",{class:"hljs-attr"},"error"),s(": "),t("span",{class:"hljs-string"},"'https://xxx.cn/error.png'"),s(`,
  `),t("span",{class:"hljs-attr"},"attempt"),s(": "),t("span",{class:"hljs-number"},"3"),s(`,
  `),t("span",{class:"hljs-attr"},"throttleWait"),s(": "),t("span",{class:"hljs-number"},"300"),s(`,
  `),t("span",{class:"hljs-attr"},"events"),s(`: [
    `),t("span",{class:"hljs-string"},"'scroll'"),s(`, 
    `),t("span",{class:"hljs-string"},"'wheel'"),s(`, 
    `),t("span",{class:"hljs-string"},"'mousewheel'"),s(`, 
    `),t("span",{class:"hljs-string"},"'resize'"),s(`,
    `),t("span",{class:"hljs-string"},"'animationend'"),s(`,
    `),t("span",{class:"hljs-string"},"'transitionend'"),s(`, 
    `),t("span",{class:"hljs-string"},"'touchmove'"),s(`
  ],
  `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"filter"),s("("),t("span",{class:"hljs-params"},"lazy"),s(")")]),s(` {
    `),t("span",{class:"hljs-comment"},"// All properties of the context can be accessed, and some property interceptions can be performed."),s(`
    `),t("span",{class:"hljs-comment"},"// Such as simply modifying all image addresses http-> https"),s(`
    lazy.src.replace(`),t("span",{class:"hljs-string"},"'http://'"),s(", "),t("span",{class:"hljs-string"},"'https://'"),s(`)
  }
})
`)])],-1),T=t("h2",null,"API",-1),N={class:"card"},O={id:"PluginOptions"},U=p("<table><thead><tr><th>Option</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>loading</code></td><td>Loading images, if possible, select images that load quickly</td><td><em>string</em></td><td><code>Pixel transparent picture</code></td></tr><tr><td><code>error</code></td><td>Load failed to display the picture</td><td><em>string</em></td><td><code>Pixel transparent picture</code></td></tr><tr><td><code>attempt</code></td><td>The number of times a load failed to reload</td><td><em>number</em></td><td><code>3</code></td></tr><tr><td><code>throttleWait</code></td><td>throttle wait time, The higher the value, the lower the trigger frequency</td><td><em>number</em></td><td><code>300</code></td></tr><tr><td><code>events</code></td><td>A list of events that trigger visibility detection registration</td><td><em>string[]</em></td><td><code>[&#39;scroll&#39;...]</code></td></tr><tr><td><code>filter</code></td><td>Attribute interceptor function</td><td><em>(lazy: Lazy) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr></tbody></table>",1);function V($,q,S,C,D,W){const l=c("router-link"),e=c("var-site-code-example");return r(),i("div",h,[j,t("div",g,[t("h3",u,[a(l,{to:"#Intro"},{default:n(()=>[s("#")]),_:1}),s("Intro")]),m]),t("div",_,[t("h3",b,[a(l,{to:"#BasicUsage"},{default:n(()=>[s("#")]),_:1}),s("Basic Usage")]),a(e,null,{default:n(()=>[y]),_:1})]),t("div",v,[t("h3",f,[a(l,{to:"#BackgroundImageLazyLoad"},{default:n(()=>[s("#")]),_:1}),s("Background Image Lazy Load")]),a(e,null,{default:n(()=>[x]),_:1})]),t("div",z,[t("h3",k,[a(l,{to:"#InlineAttributes"},{default:n(()=>[s("#")]),_:1}),s("Inline Attributes")]),w,a(e,null,{default:n(()=>[L]),_:1})]),t("div",I,[t("h3",P,[a(l,{to:"#Plugin"},{default:n(()=>[s("#")]),_:1}),s("Plugin")]),A,a(e,{"playground-ignore":""},{default:n(()=>[B]),_:1})]),T,t("div",N,[t("h3",O,[a(l,{to:"#PluginOptions"},{default:n(()=>[s("#")]),_:1}),s("Plugin Options")]),U])])}const Y=o(d,[["render",V]]);export{Y as default};
