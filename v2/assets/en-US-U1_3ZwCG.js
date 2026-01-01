import{_ as o,b as c,e as i,m as p,p as a,q as e,w as n,P as s}from"./index-vwO9GBzB.js";const r={components:{}},h={class:"varlet-site-doc"},d=a("h1",null,"Elevation",-1),j={class:"card"},_={id:"Intro"},m=a("p",null,[s("The component library provides a shadow elevation effect based on the "),a("code",null,"Material"),s(" specification to represent the dimensionality of an element.")],-1),u={class:"card"},v={id:"ImportStyle"},g=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@varlet/ui/es/styles/elevation.css'"),s(`
`)])],-1),f={class:"card"},b={id:"BasicUsage"},y=a("p",null,[s("Shadows are divided into "),a("code",null,"0-24"),s(" levels, and the higher the level, the higher the altitude.")],-1),x=a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"var-space"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"elevation-example-list"'),s(),a("span",{class:"hljs-attr"},":size"),s("="),a("span",{class:"hljs-string"},'"[40, 0]"'),s(),a("span",{class:"hljs-attr"},"justify"),s("="),a("span",{class:"hljs-string"},'"space-between"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(`
      `),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"elevation-example-item"'),s(`
      `),a("span",{class:"hljs-attr"},":class"),s("="),a("span",{class:"hljs-string"},'"`var-elevation--${e - 1}`"'),s(`
      `),a("span",{class:"hljs-attr"},"v-for"),s("="),a("span",{class:"hljs-string"},'"e in 25"'),s(`
      `),a("span",{class:"hljs-attr"},":key"),s("="),a("span",{class:"hljs-string"},'"e"'),s(`
    >`)]),s(`
      {{ e - 1 }}
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"var-space"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(">")]),a("span",{class:"css"},[s(`
`),a("span",{class:"hljs-selector-class"},".elevation-example-list"),s(` {
  `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"2vmin"),s(),a("span",{class:"hljs-number"},"4vmin"),s(`;
}

`),a("span",{class:"hljs-selector-class"},".elevation-example-item"),s(` {
  `),a("span",{class:"hljs-attribute"},"display"),s(`: flex;
  `),a("span",{class:"hljs-attribute"},"justify-content"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"align-items"),s(`: center;
  `),a("span",{class:"hljs-attribute"},"width"),s(": "),a("span",{class:"hljs-number"},"24vmin"),s(`;
  `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"24vmin"),s(`;
  `),a("span",{class:"hljs-attribute"},"border-radius"),s(": "),a("span",{class:"hljs-number"},"4px"),s(`;
}
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1);function w(k,B,I,S,$,U){const l=c("router-link"),t=c("var-site-code-example");return i(),p("div",h,[d,a("div",j,[a("h3",_,[e(l,{to:"#Intro"},{default:n(()=>[s("#")]),_:1}),s("Intro")]),m]),a("div",u,[a("h3",v,[e(l,{to:"#ImportStyle"},{default:n(()=>[s("#")]),_:1}),s("Import Style")]),e(t,{"playground-ignore":""},{default:n(()=>[g]),_:1})]),a("div",f,[a("h3",b,[e(l,{to:"#BasicUsage"},{default:n(()=>[s("#")]),_:1}),s("Basic Usage")]),y,e(t,null,{default:n(()=>[x]),_:1})])])}const V=o(r,[["render",w]]);export{V as default};
