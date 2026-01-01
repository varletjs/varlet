import{b as r,m as i,p as s,q as a,Q as t,w as l,e as p,h as d}from"./index-DtCrA0ro.js";const m={components:{}},u={class:"varlet-site-doc"},c={class:"card"},h={id:"Intro"},j={class:"card"},f={id:"BasicUsage"};function g(v,n,b,y,_,w){const o=p("router-link"),e=p("var-site-code-example");return d(),i("div",u,[n[10]||(n[10]=s("h1",null,"Defaults Customization",-1)),s("div",c,[s("h3",h,[a(o,{to:"#Intro"},{default:l(()=>[...n[0]||(n[0]=[t("#",-1)])]),_:1}),n[1]||(n[1]=t("Intro",-1))]),n[2]||(n[2]=s("p",null,"The component library provides the ability to customize the default values of component props.",-1))]),s("div",j,[s("h3",f,[a(o,{to:"#BasicUsage"},{default:l(()=>[...n[3]||(n[3]=[t("#",-1)])]),_:1}),n[4]||(n[4]=t("Basic Usage",-1))]),n[8]||(n[8]=s("p",null,[t("Customize the component's property definition through the static method "),s("code",null,"setPropsDefaults"),t(" provided by the component. It should be noted that attribute customization only takes effect for declarative components, and the customized behavior should be before the component is initialized.")],-1)),a(e,{"playground-ignore":""},{default:l(()=>[...n[5]||(n[5]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// main.ts"),t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { Button } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'@varlet/ui'"),t(`

Button.setPropsDefaults({
  `),s("span",{class:"hljs-attr"},"type"),t(": "),s("span",{class:"hljs-string"},"'primary'"),t(`,
  `),s("span",{class:"hljs-attr"},"elevation"),t(": "),s("span",{class:"hljs-number"},"10"),t(`
})
`)])],-1)])]),_:1}),n[9]||(n[9]=s("p",null,"After customization, the following two writing methods will be equivalent.",-1)),a(e,{"playground-ignore":""},{default:l(()=>[...n[6]||(n[6]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"<!-- App.vue -->"),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t("Hello"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1)])]),_:1}),a(e,{"playground-ignore":""},{default:l(()=>[...n[7]||(n[7]=[s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"<!-- App.vue -->"),t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-button"),t(),s("span",{class:"hljs-attr"},"type"),t("="),s("span",{class:"hljs-string"},'"primary"'),t(),s("span",{class:"hljs-attr"},":elevation"),t("="),s("span",{class:"hljs-string"},'"10"'),t(">")]),t("Hello"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-button"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1)])]),_:1})])])}const B=r(m,[["render",g]]);export{B as default};
