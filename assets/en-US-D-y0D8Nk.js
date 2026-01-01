import{b as p,m as i,p as t,q as l,Q as s,w as n,$ as d,e as o,h as c}from"./index-DtCrA0ro.js";const h={components:{}},j={class:"varlet-site-doc"},g={class:"card"},m={id:"Intro"},u={class:"card"},b={id:"BasicUsage"},y={class:"card"},v={id:"BackgroundImageLazyLoad"},f={class:"card"},x={id:"InlineAttributes"},z={class:"card"},k={id:"Plugin"},w={class:"card"},L={id:"PluginOptions"};function I(A,a,B,P,_,T){const e=o("router-link"),r=o("var-site-code-example");return c(),i("div",j,[a[20]||(a[20]=t("h1",null,"Lazy",-1)),t("div",g,[t("h3",m,[l(e,{to:"#Intro"},{default:n(()=>[...a[0]||(a[0]=[s("#",-1)])]),_:1}),a[1]||(a[1]=s("Intro",-1))]),a[2]||(a[2]=t("p",null,"Load when the image is visible.",-1))]),t("div",u,[t("h3",b,[l(e,{to:"#BasicUsage"},{default:n(()=>[...a[3]||(a[3]=[s("#",-1)])]),_:1}),a[4]||(a[4]=s("Basic Usage",-1))]),l(r,null,{default:n(()=>[...a[5]||(a[5]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"img"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"lazy-example-cat"'),s(),t("span",{class:"hljs-attr"},"v-lazy"),s("="),t("span",{class:"hljs-string"},`"'https://varletjs.org/cat.jpg'"`),s(">")]),s(`
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
`)])],-1)])]),_:1})]),t("div",y,[t("h3",v,[l(e,{to:"#BackgroundImageLazyLoad"},{default:n(()=>[...a[6]||(a[6]=[s("#",-1)])]),_:1}),a[7]||(a[7]=s("Background Image Lazy Load",-1))]),l(r,null,{default:n(()=>[...a[8]||(a[8]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"div"),s(` 
    `),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"lazy-example-cat"'),s(`
    `),t("span",{class:"hljs-attr"},"v-lazy:background-image"),s("="),t("span",{class:"hljs-string"},`"'https://varletjs.org/cat.jpg'"`),s(`
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
`)])],-1)])]),_:1})]),t("div",f,[t("h3",x,[l(e,{to:"#InlineAttributes"},{default:n(()=>[...a[9]||(a[9]=[s("#",-1)])]),_:1}),a[10]||(a[10]=s("Inline Attributes",-1))]),a[12]||(a[12]=t("p",null,[s("You can modify the "),t("code",null,"loading"),s(", "),t("code",null,"error"),s(" image, and "),t("code",null,"reload attempts"),s(" by using inline properties.")],-1)),l(r,null,{default:n(()=>[...a[11]||(a[11]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"img"),s(),t("span",{class:"hljs-attr"},"class"),s("="),t("span",{class:"hljs-string"},'"lazy-example-cat"'),s(` 
    `),t("span",{class:"hljs-attr"},"v-lazy"),s("="),t("span",{class:"hljs-string"},`"'https://varletjs.org/cat.jpg'"`),s(`
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
`)])],-1)])]),_:1})]),t("div",z,[t("h3",k,[l(e,{to:"#Plugin"},{default:n(()=>[...a[13]||(a[13]=[s("#",-1)])]),_:1}),a[14]||(a[14]=s("Plugin",-1))]),a[16]||(a[16]=t("p",null,[s("The option to set the default "),t("code",null,"Lazy"),s(" load option is provided, which is passed in at plugin registration.")],-1)),l(r,{"playground-ignore":""},{default:n(()=>[...a[15]||(a[15]=[t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-keyword"},"import"),s(" { createApp } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
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
`)])],-1)])]),_:1})]),a[21]||(a[21]=t("h2",null,"API",-1)),t("div",w,[t("h3",L,[l(e,{to:"#PluginOptions"},{default:n(()=>[...a[17]||(a[17]=[s("#",-1)])]),_:1}),a[18]||(a[18]=s("Plugin Options",-1))]),a[19]||(a[19]=d("<table><thead><tr><th>Option</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>loading</code></td><td>Loading images, if possible, select images that load quickly</td><td><em>string</em></td><td><code>Pixel transparent picture</code></td></tr><tr><td><code>error</code></td><td>Load failed to display the picture</td><td><em>string</em></td><td><code>Pixel transparent picture</code></td></tr><tr><td><code>attempt</code></td><td>The number of times a load failed to reload</td><td><em>number</em></td><td><code>3</code></td></tr><tr><td><code>throttleWait</code></td><td>throttle wait time, The higher the value, the lower the trigger frequency</td><td><em>number</em></td><td><code>300</code></td></tr><tr><td><code>events</code></td><td>A list of events that trigger visibility detection registration</td><td><em>string[]</em></td><td><code>[&#39;scroll&#39;...]</code></td></tr><tr><td><code>filter</code></td><td>Attribute interceptor function</td><td><em>(lazy: Lazy) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr></tbody></table>",1))])])}const N=p(h,[["render",I]]);export{N as default};
