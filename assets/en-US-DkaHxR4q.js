import{b as p,m as r,p as a,q as n,Q as s,w as t,e as o,h as c}from"./index-DtCrA0ro.js";const d={components:{}},h={class:"varlet-site-doc"},j={class:"card"},m={id:"Intro"},u={class:"card"},v={id:"ImportStyle"},g={class:"card"},f={id:"BasicUsage"};function b(y,l,x,_,w,k){const e=o("router-link"),i=o("var-site-code-example");return c(),r("div",h,[l[10]||(l[10]=a("h1",null,"Elevation",-1)),a("div",j,[a("h3",m,[n(e,{to:"#Intro"},{default:t(()=>[...l[0]||(l[0]=[s("#",-1)])]),_:1}),l[1]||(l[1]=s("Intro",-1))]),l[2]||(l[2]=a("p",null,[s("The component library provides a shadow elevation effect based on the "),a("code",null,"Material"),s(" specification to represent the dimensionality of an element.")],-1))]),a("div",u,[a("h3",v,[n(e,{to:"#ImportStyle"},{default:t(()=>[...l[3]||(l[3]=[s("#",-1)])]),_:1}),l[4]||(l[4]=s("Import Style",-1))]),n(i,{"playground-ignore":""},{default:t(()=>[...l[5]||(l[5]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-string"},"'@varlet/ui/es/styles/elevation.css'"),s(`
`)])],-1)])]),_:1})]),a("div",g,[a("h3",f,[n(e,{to:"#BasicUsage"},{default:t(()=>[...l[6]||(l[6]=[s("#",-1)])]),_:1}),l[7]||(l[7]=s("Basic Usage",-1))]),l[9]||(l[9]=a("p",null,[s("Shadows are divided into "),a("code",null,"0-24"),s(" levels, and the higher the level, the higher the altitude.")],-1)),n(i,null,{default:t(()=>[...l[8]||(l[8]=[a("pre",{class:"hljs"},[a("code",null,[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
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
`)])],-1)])]),_:1})])])}const I=p(d,[["render",b]]);export{I as default};
