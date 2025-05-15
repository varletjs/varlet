import{_ as r,b as c,e as p,m as h,p as a,q as n,w as l,P as s}from"./index-vwO9GBzB.js";const o={components:{}},i={class:"varlet-site-doc"},j=a("h1",null,"Hover",-1),d={class:"card"},u={id:"Intro"},g=a("p",null,"Style binding is performed when the pointer hovers the binding element, and the current hovering state can also be obtained through a function, which supports selective enablement on desktop or mobile.",-1),m={class:"card"},_={id:"StyleBinding"},v=a("p",null,"The style binding is performed when the pointer hovers over the bound element, and the style binding is canceled when the pointer leaves the element.",-1),f=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-paper"),s(`
    `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"paper"'),s(`
    `),a("span",{class:"hljs-attr"},"ripple"),s(`
    `),a("span",{class:"hljs-attr"},":elevation"),s("="),a("span",{class:"hljs-string"},'"2"'),s(`
    `),a("span",{class:"hljs-attr"},":width"),s("="),a("span",{class:"hljs-string"},'"100"'),s(`
    `),a("span",{class:"hljs-attr"},":height"),s("="),a("span",{class:"hljs-string"},'"100"'),s(`
    `),a("span",{class:"hljs-attr"},"v-hover"),s("="),a("span",{class:"hljs-string"},`"{ color: '#fff', background: 'var(--color-primary)' }"`),s(`
  >`)]),s(`
    HOVER
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-paper"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".paper"),s(` {
  `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"cursor"),s(`: pointer;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),b={class:"card"},y={id:"FunctionBinding"},k=a("p",null,"The function is triggered when the pointer hovers and leaves, and carries the current hover state.",-1),w=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" translateY = ref("),a("span",{class:"hljs-string"},"'100%'"),s(`)

`),a("span",{class:"hljs-function"},[a("span",{class:"hljs-keyword"},"function"),s(),a("span",{class:"hljs-title"},"handleHover"),s("("),a("span",{class:"hljs-params"},"hovering"),s(") ")]),s(`{
  translateY.value = hovering ? `),a("span",{class:"hljs-string"},"'0'"),s(" : "),a("span",{class:"hljs-string"},"'100%'"),s(`
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
   `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"image-container"'),s(),a("span",{class:"hljs-attr"},"v-hover"),s("="),a("span",{class:"hljs-string"},'"handleHover"'),s(">")]),s(`
     `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-image"),s(),a("span",{class:"hljs-attr"},"src"),s("="),a("span",{class:"hljs-string"},'"https://varletjs.github.io/varlet/tree.jpeg"'),s(" />")]),s(`
     `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"image-mask"'),s(),a("span",{class:"hljs-attr"},":style"),s("="),a("span",{class:"hljs-string"},'"{ transform: `translateY(${translateY})` }"'),s(">")]),s("HOVER"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
   `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".image-container"),s(` {
  `),a("span",{class:"hljs-attribute"},"position"),s(`: relative;
  `),a("span",{class:"hljs-attribute"},"overflow"),s(`: hidden;
  `),a("span",{class:"hljs-attribute"},"cursor"),s(`: pointer;
  `),a("span",{class:"hljs-attribute"},"border-radius"),s(": "),a("span",{class:"hljs-number"},"6px"),s(`;
}

`),a("span",{class:"hljs-selector-class"},".image-mask"),s(` {
  `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"position"),s(`: absolute;
  `),a("span",{class:"hljs-attribute"},"top"),s(": "),a("span",{class:"hljs-number"},"0"),s(`;
  `),a("span",{class:"hljs-attribute"},"left"),s(": "),a("span",{class:"hljs-number"},"0"),s(`;
  `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"100%"),s(`;
  `),a("span",{class:"hljs-attribute"},"transition"),s(": all "),a("span",{class:"hljs-number"},"0.3s"),s(`;
  `),a("span",{class:"hljs-attribute"},"color"),s(": "),a("span",{class:"hljs-number"},"#fff"),s(`;
  `),a("span",{class:"hljs-attribute"},"background-color"),s(": "),a("span",{class:"hljs-built_in"},"var"),s(`(--color-primary);
  `),a("span",{class:"hljs-attribute"},"font-size"),s(": "),a("span",{class:"hljs-number"},"50px"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),x={class:"card"},E={id:"SelectivelyEnableForDifferentDevices"},B=a("p",null,[s("Considering the differences in "),a("code",null,"hover"),s(" effects on different platforms, the hover command can only be enabled on specific platforms.")],-1),O=a("h4",null,"Only Enabled On Desktop",-1),S=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-paper"),s(),a("span",{class:"hljs-attr"},"v-hover:desktop"),s("="),a("span",{class:"hljs-string"},`"{ color: '#fff' }"`),s('">')]),s("HOVER"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-paper"),s(">")]),s(`
`)])],-1),D=a("h4",null,"Only Enabled On Mobile",-1),H=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-paper"),s(),a("span",{class:"hljs-attr"},"v-hover:mobile"),s("="),a("span",{class:"hljs-string"},`"{ color: '#fff' }"`),s('">')]),s("HOVER"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-paper"),s(">")]),s(`
`)])],-1);function V(F,$,R,Y,C,I){const e=c("router-link"),t=c("var-site-code-example");return p(),h("div",i,[j,a("div",d,[a("h3",u,[n(e,{to:"#Intro"},{default:l(()=>[s("#")]),_:1}),s("Intro")]),g]),a("div",m,[a("h3",_,[n(e,{to:"#StyleBinding"},{default:l(()=>[s("#")]),_:1}),s("Style Binding")]),v,n(t,null,{default:l(()=>[f]),_:1})]),a("div",b,[a("h3",y,[n(e,{to:"#FunctionBinding"},{default:l(()=>[s("#")]),_:1}),s("Function Binding")]),k,n(t,null,{default:l(()=>[w]),_:1})]),a("div",x,[a("h3",E,[n(e,{to:"#SelectivelyEnableForDifferentDevices"},{default:l(()=>[s("#")]),_:1}),s("Selectively Enable For Different Devices")]),B,O,n(t,{"playground-ignore":""},{default:l(()=>[S]),_:1}),D,n(t,{"playground-ignore":""},{default:l(()=>[H]),_:1})])])}const T=r(o,[["render",V]]);export{T as default};
