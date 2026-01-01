import{_ as i,b as c,e as r,m as h,p as s,q as n,w as t,P as a,Z as o}from"./index-vwO9GBzB.js";const d={components:{}},p={class:"varlet-site-doc"},m=s("h1",null,"Icon",-1),j={class:"card"},u={id:"Intro"},_=s("p",null,[a("Font based icon library, also support web images. Font icons are from "),s("a",{href:"https://materialdesignicons.com/"},"Material Design Icon"),a(".")],-1),g={class:"card"},y={id:"IconSize"},f=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"checkbox-marked-circle"'),a(" />")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"checkbox-marked-circle"'),a(),s("span",{class:"hljs-attr"},":size"),a("="),s("span",{class:"hljs-string"},'"26"'),a("/>")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),v={class:"card"},b={id:"IconColor"},k=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"checkbox-marked-circle"'),a(),s("span",{class:"hljs-attr"},"color"),a("="),s("span",{class:"hljs-string"},'"var(--color-primary)"'),a(" />")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"checkbox-marked-circle"'),a(),s("span",{class:"hljs-attr"},"color"),a("="),s("span",{class:"hljs-string"},'"var(--color-success)"'),a(" />")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),I={class:"card"},x={id:"UseImage"},S=s("p",null,[a("When the name passed in is a URL the "),s("code",null,"img"),a(" tag is displayed in "),s("code",null,"cover"),a(" mode. "),s("code",null,"size"),a(" is the width and height of the image.")],-1),w=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"https://varletjs.github.io/varlet/cat.jpg"'),a(),s("span",{class:"hljs-attr"},":size"),a("="),s("span",{class:"hljs-string"},'"32"'),a(" />")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),C={class:"card"},z={id:"ClickEvent"},E=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { Snackbar } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(` 
    `),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"checkbox-marked-circle"'),a(`
    `),s("span",{class:"hljs-attr"},"color"),a("="),s("span",{class:"hljs-string"},'"var(--color-primary)"'),a(`
    @`),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},`"() => Snackbar.success('Click success')"`),a(`
  />`)]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),V={class:"card"},P={id:"IconAnimation"},N=s("p",null,[a("When "),s("code",null,"transition (ms)"),a(" is set, and the icon is toggled by its "),s("code",null,"name"),a(", trigger a toggle animation.")],-1),U=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { ref } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`

`),s("span",{class:"hljs-keyword"},"const"),a(" name = ref("),s("span",{class:"hljs-string"},"'information'"),a(`)

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"toggle"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
  name.value = name.value === `),s("span",{class:"hljs-string"},"'information'"),a(` 
    ? `),s("span",{class:"hljs-string"},"'checkbox-marked-circle'"),a(` 
    : `),s("span",{class:"hljs-string"},"'information'"),a(`
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(` 
    `),s("span",{class:"hljs-attr"},"color"),a("="),s("span",{class:"hljs-string"},'"var(--color-primary)"'),a(` 
    `),s("span",{class:"hljs-attr"},":name"),a("="),s("span",{class:"hljs-string"},'"name"'),a(` 
    `),s("span",{class:"hljs-attr"},":transition"),a("="),s("span",{class:"hljs-string"},'"300"'),a(` 
    `),s("span",{class:"hljs-attr"},":size"),a("="),s("span",{class:"hljs-string"},'"30"'),a(` 
    @`),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"toggle"'),a(`
  />`)]),a(`

  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(`
    `),s("span",{class:"hljs-attr"},"color"),a("="),s("span",{class:"hljs-string"},'"var(--color-primary)"'),a(`
    `),s("span",{class:"hljs-attr"},"animation-class"),a("="),s("span",{class:"hljs-string"},'"fade"'),a(`
    `),s("span",{class:"hljs-attr"},":name"),a("="),s("span",{class:"hljs-string"},'"iconName"'),a(`
    `),s("span",{class:"hljs-attr"},":transition"),a("="),s("span",{class:"hljs-string"},'"300"'),a(`
    `),s("span",{class:"hljs-attr"},":size"),a("="),s("span",{class:"hljs-string"},'"30"'),a(`
    @`),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"toggle"'),a(`
  />`)]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"style"),a(">")]),s("span",{class:"css"},[a(`
`),s("span",{class:"hljs-selector-class"},".fade"),a(` {
  `),s("span",{class:"hljs-attribute"},"opacity"),a(": "),s("span",{class:"hljs-number"},"0"),a(`;
  `),s("span",{class:"hljs-attribute"},"transition-property"),a(`: opacity;
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"style"),a(">")]),a(`
`)])],-1),A={class:"card"},D={id:"CustomIcons"},F=s("p",null,[a("First you need to set up your own font and install it into your project. Let's assume that we extend a font named "),s("code",null,"my-icons"),a(".")],-1),T=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"/* Set the font */"),a(`
`),s("span",{class:"hljs-keyword"},"@font-face"),a(` {
  `),s("span",{class:"hljs-attribute"},"font-family"),a(": "),s("span",{class:"hljs-string"},'"my-icons"'),a(`;
  `),s("span",{class:"hljs-attribute"},"src"),a(": "),s("span",{class:"hljs-built_in"},"url"),a("("),s("span",{class:"hljs-string"},'"https://xxx.my-icons.ttf"'),a(") "),s("span",{class:"hljs-built_in"},"format"),a("("),s("span",{class:"hljs-string"},'"truetype"'),a(`);
}

`),s("span",{class:"hljs-comment"},"/* Set namespace */"),a(`
`),s("span",{class:"hljs-selector-class"},".my-icon"),a(` {
  `),s("span",{class:"hljs-attribute"},"font-family"),a(": "),s("span",{class:"hljs-string"},'"my-icons"'),a(`;
}
`),s("span",{class:"hljs-comment"},"/* OR */"),a(`
`),s("span",{class:"hljs-selector-class"},".my-icon--set"),a(` {
  `),s("span",{class:"hljs-attribute"},"font-family"),a(": "),s("span",{class:"hljs-string"},'"my-icons"'),a(`;
}
`),s("span",{class:"hljs-comment"},"/* Set namespace end */"),a(`

`),s("span",{class:"hljs-comment"},"/* Font names map code points */"),a(`
`),s("span",{class:"hljs-selector-class"},".my-icon-hot"),s("span",{class:"hljs-selector-pseudo"},"::before"),a(` {
  `),s("span",{class:"hljs-attribute"},"content"),a(": "),s("span",{class:"hljs-string"},'"\\F000"'),a(`;
}
`)])],-1),$=s("p",null,[a("Here you have successfully extended your icon library. So "),s("code",null,"my-icon"),a(" is your font "),s("code",null,"namespace"),a(". You can use it this way:")],-1),B=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(),s("span",{class:"hljs-attr"},"namespace"),a("="),s("span",{class:"hljs-string"},'"my-icon"'),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"hot"'),a(" />")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),H=s("h2",null,"API",-1),L={class:"card"},O={id:"Props"},R=o("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>name</code></td><td>icon name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>size</code></td><td>icon size</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>icon color, Only applies to font icons</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>namespace</code></td><td>Icon namespace, extensible custom icon library</td><td><em>string</em></td><td><code>var-icon</code></td></tr><tr><td><code>animation-class</code></td><td>Name of the transition animation class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>transition</code></td><td>Transition animation time(ms)</td><td><em>string | number</em></td><td><code>0</code></td></tr></tbody></table>",1),W={class:"card"},q={id:"Events"},M=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"Event"),s("th",null,"Description"),s("th",null,"Arguments")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("code",null,"click")]),s("td",null,"Triggered when you click on the icon"),s("td",null,[s("code",null,"event: Event")])])])],-1),Y={class:"card"},Z={id:"StyleVariables"},G=o('<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--icon-size</code></td><td><code>20px</code></td></tr></tbody></table>',2);function J(K,Q,X,ss,as,ns){const l=c("router-link"),e=c("var-site-code-example");return r(),h("div",p,[m,s("div",j,[s("h3",u,[n(l,{to:"#Intro"},{default:t(()=>[a("#")]),_:1}),a("Intro")]),_]),s("div",g,[s("h3",y,[n(l,{to:"#IconSize"},{default:t(()=>[a("#")]),_:1}),a("Icon Size")]),n(e,null,{default:t(()=>[f]),_:1})]),s("div",v,[s("h3",b,[n(l,{to:"#IconColor"},{default:t(()=>[a("#")]),_:1}),a("Icon Color")]),n(e,null,{default:t(()=>[k]),_:1})]),s("div",I,[s("h3",x,[n(l,{to:"#UseImage"},{default:t(()=>[a("#")]),_:1}),a("Use Image")]),S,n(e,null,{default:t(()=>[w]),_:1})]),s("div",C,[s("h3",z,[n(l,{to:"#ClickEvent"},{default:t(()=>[a("#")]),_:1}),a("Click Event")]),n(e,null,{default:t(()=>[E]),_:1})]),s("div",V,[s("h3",P,[n(l,{to:"#IconAnimation"},{default:t(()=>[a("#")]),_:1}),a("Icon Animation")]),N,n(e,null,{default:t(()=>[U]),_:1})]),s("div",A,[s("h3",D,[n(l,{to:"#CustomIcons"},{default:t(()=>[a("#")]),_:1}),a("Custom Icons")]),F,n(e,{"playground-ignore":""},{default:t(()=>[T]),_:1}),$,n(e,{"playground-ignore":""},{default:t(()=>[B]),_:1})]),H,s("div",L,[s("h3",O,[n(l,{to:"#Props"},{default:t(()=>[a("#")]),_:1}),a("Props")]),R]),s("div",W,[s("h3",q,[n(l,{to:"#Events"},{default:t(()=>[a("#")]),_:1}),a("Events")]),M]),s("div",Y,[s("h3",Z,[n(l,{to:"#StyleVariables"},{default:t(()=>[a("#")]),_:1}),a("Style Variables")]),G])])}const ls=i(d,[["render",J]]);export{ls as default};
