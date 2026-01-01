import{_ as c,b as l,e as p,m as d,p as s,q as e,w as o,P as t,Z as r}from"./index-vwO9GBzB.js";const i={components:{}},h={class:"varlet-site-doc"},u=s("h1",null,"Browser Adaptation",-1),m={class:"card"},_={id:"Intro"},v=s("p",null,[t("The component library provides mobile and desktop adaptations, scheme "),s("code",null,"varlet-touch-emulator"),t(" is used for mobile terminal adaptation, scheme "),s("code",null,"varlet-touch-emulator"),t(" is used for mobile terminal adaptation.")],-1),j={class:"card"},b={id:"MobileAdaptation"},g=r("<p>The component library design is based on the <code>375px</code> width design draft. It is recommended to use PostCSS plugin to convert <code>px</code> units into <code>vw</code> units to achieve mobile terminal adaptation. Create <code>postcss.config.js</code> under the <code>Webpack/Vite</code> project root path And do the following configuration <code>375px -&gt; 100vw</code>.</p>",1),f=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," npm"),t(`
npm i postcss-px-to-viewport -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," yarn"),t(`
yarn add postcss-px-to-viewport -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," pnpm"),t(`
pnpm add postcss-px-to-viewport -D
`)])],-1),x=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// postcss.config.js"),t(`
`),s("span",{class:"hljs-built_in"},"module"),t(`.exports = {
  `),s("span",{class:"hljs-attr"},"plugins"),t(`: {
    `),s("span",{class:"hljs-string"},"'postcss-px-to-viewport'"),t(`: {
      `),s("span",{class:"hljs-attr"},"viewportWidth"),t(": "),s("span",{class:"hljs-number"},"375"),t(`,
      `),s("span",{class:"hljs-attr"},"unitPrecision"),t(": "),s("span",{class:"hljs-number"},"6"),t(`,
      `),s("span",{class:"hljs-attr"},"unitToConvert"),t(": "),s("span",{class:"hljs-string"},"'px'"),t(`,
      `),s("span",{class:"hljs-attr"},"propList"),t(": ["),s("span",{class:"hljs-string"},"'*'"),t(`],
    }
  }
}
`)])],-1),w={class:"card"},k={id:"DesktopAdaptation"},y=s("p",null,[t("Because component library interaction events are developed using "),s("code",null,"touch"),t(" events, "),s("code",null,"mouse"),t(" events on the desktop side are not supported. It is recommended to use "),s("code",null,"@varlet/touch-emulator"),t(" to set "),s("code",null,"touch -> mouse"),t(" for desktop adaptation.")],-1),A=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," npm"),t(`
npm i @varlet/touch-emulator
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," yarn"),t(`
yarn add @varlet/touch-emulator
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," pnpm"),t(`
pnpm add @varlet/touch-emulator
`)])],-1),D=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),t(),s("span",{class:"hljs-string"},"'@varlet/touch-emulator'"),t(`
`)])],-1);function B(C,I,V,N,S,T){const n=l("router-link"),a=l("var-site-code-example");return p(),d("div",h,[u,s("div",m,[s("h3",_,[e(n,{to:"#Intro"},{default:o(()=>[t("#")]),_:1}),t("Intro")]),v]),s("div",j,[s("h3",b,[e(n,{to:"#MobileAdaptation"},{default:o(()=>[t("#")]),_:1}),t("Mobile Adaptation")]),g,e(a,{"playground-ignore":""},{default:o(()=>[f]),_:1}),e(a,{"playground-ignore":""},{default:o(()=>[x]),_:1})]),s("div",w,[s("h3",k,[e(n,{to:"#DesktopAdaptation"},{default:o(()=>[t("#")]),_:1}),t("Desktop Adaptation")]),y,e(a,{"playground-ignore":""},{default:o(()=>[A]),_:1}),e(a,{"playground-ignore":""},{default:o(()=>[D]),_:1})])])}const M=c(i,[["render",B]]);export{M as default};
