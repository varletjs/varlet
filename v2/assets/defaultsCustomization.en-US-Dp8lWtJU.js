import{_ as c,b as l,e as p,m as i,p as s,q as a,w as e,P as t}from"./index-vwO9GBzB.js";const r={components:{}},h={class:"varlet-site-doc"},d=s("h1",null,"Defaults Customization",-1),m={class:"card"},u={id:"Intro"},_=s("p",null,"The component library provides the ability to customize the default values of component props.",-1),j={class:"card"},f={id:"BasicUsage"},g=s("p",null,[t("Customize the component's property definition through the static method "),s("code",null,"setPropsDefaults"),t(" provided by the component. It should be noted that attribute customization only takes effect for declarative components, and the customized behavior should be before the component is initialized.")],-1),v=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// main.ts"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Button } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

Button.setPropsDefaults({
  `),s("span",{class:"hljs-attr"},"type"),t(": "),s("span",{class:"hljs-string"},"'primary'"),t(`,
  `),s("span",{class:"hljs-attr"},"elevation"),t(": "),s("span",{class:"hljs-number"},"10"),t(`
})
`)])],-1),b=s("p",null,"After customization, the following two writing methods will be equivalent.",-1),y=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"<!-- App.vue -->"),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t("Hello"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),w=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"<!-- App.vue -->"),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"primary"'),t(),s("span",{class:"hljs-attr"},":elevation"),t("="),s("span",{class:"hljs-string"},'"10"'),t(">")]),t("Hello"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1);function z(B,k,x,C,I,U){const o=l("router-link"),n=l("var-site-code-example");return p(),i("div",h,[d,s("div",m,[s("h3",u,[a(o,{to:"#Intro"},{default:e(()=>[t("#")]),_:1}),t("Intro")]),_]),s("div",j,[s("h3",f,[a(o,{to:"#BasicUsage"},{default:e(()=>[t("#")]),_:1}),t("Basic Usage")]),g,a(n,{"playground-ignore":""},{default:e(()=>[v]),_:1}),b,a(n,{"playground-ignore":""},{default:e(()=>[y]),_:1}),a(n,{"playground-ignore":""},{default:e(()=>[w]),_:1})])])}const A=c(r,[["render",z]]);export{A as default};
