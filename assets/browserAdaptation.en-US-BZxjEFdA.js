import{_ as c,b as l,e as p,m as r,p as s,q as e,w as n,P as t,a1 as i}from"./index-ra5xqBB7.js";const d={components:{}},h={class:"varlet-site-doc"},u=s("h1",null,"Browser Adaptation",-1),m={class:"card"},_={id:"Intro"},j=s("p",null,[t("The component library provides mobile and desktop adaptations, scheme "),s("code",null,"varlet-touch-emulator"),t(" is used for mobile terminal adaptation, scheme "),s("code",null,"varlet-touch-emulator"),t(" is used for mobile terminal adaptation.")],-1),v={class:"card"},f={id:"MobileAdaptation"},w=i("<h4>CSS Unit Adaptation</h4><p>The component library design is based on the <code>375px</code> width design draft. It is recommended to use PostCSS plugin to convert <code>px</code> units into <code>vw</code> units to achieve mobile terminal adaptation. Create <code>postcss.config.js</code> under the <code>Webpack/Vite</code> project root path And do the following configuration <code>375px -&gt; 100vw</code>.</p>",2),b=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," npm"),t(`
npm i postcss-px-to-viewport -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," yarn"),t(`
yarn add postcss-px-to-viewport -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," pnpm"),t(`
pnpm add postcss-px-to-viewport -D
`)])],-1),g=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// postcss.config.js"),t(`
`),s("span",{class:"hljs-built_in"},"module"),t(`.exports = {
  `),s("span",{class:"hljs-attr"},"plugins"),t(`: {
    `),s("span",{class:"hljs-string"},"'postcss-px-to-viewport'"),t(`: {
      `),s("span",{class:"hljs-attr"},"viewportWidth"),t(": "),s("span",{class:"hljs-number"},"375"),t(`,
      `),s("span",{class:"hljs-attr"},"unitPrecision"),t(": "),s("span",{class:"hljs-number"},"6"),t(`,
      `),s("span",{class:"hljs-attr"},"unitToConvert"),t(": "),s("span",{class:"hljs-string"},"'px'"),t(`,
      `),s("span",{class:"hljs-attr"},"viewportUnit"),t(": "),s("span",{class:"hljs-string"},"'vmin'"),t(`,
      `),s("span",{class:"hljs-attr"},"fontViewportUnit"),t(": "),s("span",{class:"hljs-string"},"'vmin'"),t(`,
      `),s("span",{class:"hljs-attr"},"propList"),t(": ["),s("span",{class:"hljs-string"},"'*'"),t(`],
    }
  }
}
`)])],-1),y=s("h4",null,"Theme Unit Adaptation",-1),k=s("p",null,[t("Because the theme is mounted at runtime and is not affected by postcss, the component library provides a utility tool "),s("code",null,"Themes.toViewport"),t(" for adaptation. The theme returned by the function will use the "),s("code",null,"375px -> 100vmin"),t(" rule by default.")],-1),x=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { Themes } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(` viewportTheme = Themes.toViewport(Themes.md3Dark)
`)])],-1),T=s("p",null,"You can also make changes to the conversion rules",-1),A=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { Themes } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(` viewportTheme = Themes.toViewport(Themes.md3Dark, {
  `),s("span",{class:"hljs-comment"},"// defaults 375"),t(`
  `),s("span",{class:"hljs-attr"},"viewportWidth"),t(": "),s("span",{class:"hljs-number"},"750"),t(`,
  `),s("span",{class:"hljs-comment"},"// defaults 'vmin'"),t(`
  `),s("span",{class:"hljs-attr"},"viewportUnit"),t(": "),s("span",{class:"hljs-string"},"'vw'"),t(`,
  `),s("span",{class:"hljs-comment"},"// defaults 6"),t(`
  `),s("span",{class:"hljs-attr"},"unitPrecision"),t(": "),s("span",{class:"hljs-number"},"4"),t(`,
})
`)])],-1),V={class:"card"},D={id:"DesktopAdaptation"},B=s("p",null,[t("Because component library interaction events are developed using "),s("code",null,"touch"),t(" events, "),s("code",null,"mouse"),t(" events on the desktop side are not supported. It is recommended to use "),s("code",null,"@varlet/touch-emulator"),t(" to set "),s("code",null,"touch -> mouse"),t(" for desktop adaptation.")],-1),C=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," npm"),t(`
npm i @varlet/touch-emulator
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," yarn"),t(`
yarn add @varlet/touch-emulator
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," pnpm"),t(`
pnpm add @varlet/touch-emulator
`)])],-1),S=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(),s("span",{class:"hljs-string"},"'@varlet/touch-emulator'"),t(`
`)])],-1);function U(I,N,P,$,M,W){const o=l("router-link"),a=l("var-site-code-example");return p(),r("div",h,[u,s("div",m,[s("h3",_,[e(o,{to:"#Intro"},{default:n(()=>[t("#")]),_:1}),t("Intro")]),j]),s("div",v,[s("h3",f,[e(o,{to:"#MobileAdaptation"},{default:n(()=>[t("#")]),_:1}),t("Mobile Adaptation")]),w,e(a,{"playground-ignore":""},{default:n(()=>[b]),_:1}),e(a,{"playground-ignore":""},{default:n(()=>[g]),_:1}),y,k,e(a,null,{default:n(()=>[x]),_:1}),T,e(a,null,{default:n(()=>[A]),_:1})]),s("div",V,[s("h3",D,[e(o,{to:"#DesktopAdaptation"},{default:n(()=>[t("#")]),_:1}),t("Desktop Adaptation")]),B,e(a,{"playground-ignore":""},{default:n(()=>[C]),_:1}),e(a,{"playground-ignore":""},{default:n(()=>[S]),_:1})])])}const E=c(d,[["render",U]]);export{E as default};
