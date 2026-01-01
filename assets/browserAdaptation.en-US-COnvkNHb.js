import{b as p,m as i,p as s,q as e,Q as t,w as o,$ as d,e as r,h as m}from"./index-DtCrA0ro.js";const u={components:{}},c={class:"varlet-site-doc"},h={class:"card"},j={id:"Intro"},v={class:"card"},w={id:"MobileAdaptation"},f={class:"card"},b={id:"DesktopAdaptation"};function g(k,n,y,T,x,A){const a=r("router-link"),l=r("var-site-code-example");return m(),i("div",c,[n[23]||(n[23]=s("h1",null,"Browser Adaptation",-1)),s("div",h,[s("h3",j,[e(a,{to:"#Intro"},{default:o(()=>[...n[0]||(n[0]=[t("#",-1)])]),_:1}),n[1]||(n[1]=t("Intro",-1))]),n[2]||(n[2]=s("p",null,[t("The component library provides mobile and desktop adaptations, scheme "),s("code",null,"varlet-touch-emulator"),t(" is used for mobile terminal adaptation, scheme "),s("code",null,"varlet-touch-emulator"),t(" is used for mobile terminal adaptation.")],-1))]),s("div",v,[s("h3",w,[e(a,{to:"#MobileAdaptation"},{default:o(()=>[...n[3]||(n[3]=[t("#",-1)])]),_:1}),n[4]||(n[4]=t("Mobile Adaptation",-1))]),n[11]||(n[11]=d('<h4>CSS Unit Adaptation</h4><p>The component library design is based on the <code>375px</code> width design draft. It is recommended to use <a href="https://github.com/evrone/postcss-px-to-viewport">postcss-px-to-viewport</a> to convert <code>px</code> units into <code>vw</code> units to achieve mobile terminal adaptation. Create <code>postcss.config.js</code> under the <code>Webpack/Vite</code> project root path And do the following configuration <code>375px -&gt; 100vw</code>.</p>',2)),e(l,{"playground-ignore":""},{default:o(()=>[...n[5]||(n[5]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," npm"),t(`
npm i postcss-px-to-viewport -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," yarn"),t(`
yarn add postcss-px-to-viewport -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," pnpm"),t(`
pnpm add postcss-px-to-viewport -D
`)])],-1)])]),_:1}),e(l,{"playground-ignore":""},{default:o(()=>[...n[6]||(n[6]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// postcss.config.js"),t(`
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
`)])],-1)])]),_:1}),n[12]||(n[12]=s("h4",null,"Theme Unit Adaptation (Viewport)",-1)),n[13]||(n[13]=s("p",null,[t("Because the theme is mounted at runtime and is not affected by postcss, the component library provides a utility tool "),s("code",null,"Themes.toViewport"),t(" for adaptation. The theme returned by the function will use the "),s("code",null,"375px -> 100vmin"),t(" rule by default.")],-1)),e(l,null,{default:o(()=>[...n[7]||(n[7]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { Themes } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(` viewportTheme = Themes.toViewport(Themes.md3Dark)
`)])],-1)])]),_:1}),n[14]||(n[14]=s("p",null,"You can also make changes to the conversion rules",-1)),e(l,null,{default:o(()=>[...n[8]||(n[8]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { Themes } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(` viewportTheme = Themes.toViewport(Themes.md3Dark, {
  `),s("span",{class:"hljs-comment"},"// defaults 375"),t(`
  `),s("span",{class:"hljs-attr"},"viewportWidth"),t(": "),s("span",{class:"hljs-number"},"750"),t(`,
  `),s("span",{class:"hljs-comment"},"// defaults 'vmin'"),t(`
  `),s("span",{class:"hljs-attr"},"viewportUnit"),t(": "),s("span",{class:"hljs-string"},"'vw'"),t(`,
  `),s("span",{class:"hljs-comment"},"// defaults 6"),t(`
  `),s("span",{class:"hljs-attr"},"unitPrecision"),t(": "),s("span",{class:"hljs-number"},"4"),t(`,
})
`)])],-1)])]),_:1}),n[15]||(n[15]=s("h4",null,"Theme Unit Adaptation (Rem)",-1)),n[16]||(n[16]=s("p",null,"Similar to the Viewport solution",-1)),e(l,null,{default:o(()=>[...n[9]||(n[9]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { Themes } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(` remTheme = Themes.toRem(Themes.md3Dark)
`)])],-1)])]),_:1}),n[17]||(n[17]=s("p",null,"Or customize",-1)),e(l,null,{default:o(()=>[...n[10]||(n[10]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(" { Themes } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(` viewportTheme = Themes.toRem(Themes.md3Dark, {
  `),s("span",{class:"hljs-comment"},"// defaults 16"),t(`
  `),s("span",{class:"hljs-attr"},"rootFontSize"),t(": "),s("span",{class:"hljs-number"},"32"),t(`,
  `),s("span",{class:"hljs-comment"},"// defaults 6"),t(`
  `),s("span",{class:"hljs-attr"},"unitPrecision"),t(": "),s("span",{class:"hljs-number"},"4"),t(`,
})
`)])],-1)])]),_:1})]),s("div",f,[s("h3",b,[e(a,{to:"#DesktopAdaptation"},{default:o(()=>[...n[18]||(n[18]=[t("#",-1)])]),_:1}),n[19]||(n[19]=t("Desktop Adaptation",-1))]),n[22]||(n[22]=s("p",null,[t("Because component library interaction events are developed using "),s("code",null,"touch"),t(" events, "),s("code",null,"mouse"),t(" events on the desktop side are not supported. It is recommended to use "),s("code",null,"@varlet/touch-emulator"),t(" to set "),s("code",null,"touch -> mouse"),t(" for desktop adaptation.")],-1)),e(l,{"playground-ignore":""},{default:o(()=>[...n[20]||(n[20]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," npm"),t(`
npm i @varlet/touch-emulator
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," yarn"),t(`
yarn add @varlet/touch-emulator
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," pnpm"),t(`
pnpm add @varlet/touch-emulator
`)])],-1)])]),_:1}),e(l,{"playground-ignore":""},{default:o(()=>[...n[21]||(n[21]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(),s("span",{class:"hljs-string"},"'@varlet/touch-emulator'"),t(`
`)])],-1)])]),_:1})])])}const D=p(u,[["render",g]]);export{D as default};
