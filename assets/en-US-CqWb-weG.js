import{_ as i,m as r,p as s,q as n,w as l,Q as a,a1 as o,b as c,e as p}from"./index-XHkyQ4jX.js";const h={components:{}},d={class:"varlet-site-doc"},j=s("h1",null,"Icon",-1),u={class:"card"},m={id:"Intro"},g=s("p",null,[a("Font based icon library, also support web images. Font icons are from "),s("a",{href:"https://materialdesignicons.com/"},"Material Design Icon"),a(".")],-1),_={class:"card"},f={id:"IconSize"},y=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"checkbox-marked-circle"'),a(" />")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"checkbox-marked-circle"'),a(),s("span",{class:"hljs-attr"},":size"),a("="),s("span",{class:"hljs-string"},'"26"'),a("/>")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),b={class:"card"},v={id:"IconColor"},k=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"checkbox-marked-circle"'),a(),s("span",{class:"hljs-attr"},"color"),a("="),s("span",{class:"hljs-string"},'"var(--color-primary)"'),a(" />")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"checkbox-marked-circle"'),a(),s("span",{class:"hljs-attr"},"color"),a("="),s("span",{class:"hljs-string"},'"var(--color-success)"'),a(" />")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),w={class:"card"},I={id:"UseImage"},C=s("p",null,[a("When the name passed in is a URL the "),s("code",null,"img"),a(" tag is displayed in "),s("code",null,"cover"),a(" mode. "),s("code",null,"size"),a(" is the width and height of the image.")],-1),x=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"https://varletjs.org/cat.jpg"'),a(),s("span",{class:"hljs-attr"},":size"),a("="),s("span",{class:"hljs-string"},'"32"'),a(" />")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),S={class:"card"},z={id:"ClickEvent"},V=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { Snackbar } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(` 
    `),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"checkbox-marked-circle"'),a(`
    `),s("span",{class:"hljs-attr"},"color"),a("="),s("span",{class:"hljs-string"},'"var(--color-primary)"'),a(`
    @`),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},`"Snackbar.success('Click success')"`),a(`
  />`)]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),D={class:"card"},E={id:"IconAnimation"},U=s("p",null,[a("When "),s("code",null,"transition (ms)"),a(" is set, and the icon is toggled by its "),s("code",null,"name"),a(", trigger a toggle animation.")],-1),P=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"javascript"},[a(`
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
`)])],-1),F={class:"card"},N={id:"Customiconlibrary(plugindefinition)"},A=s("p",null,[a("Install "),s("code",null,"@varlet/unplugin-icon-builder"),a(" and integrate with the build tool. For more plug-in options, please "),s("a",{href:"https://github.com/varletjs/varlet-iconx/tree/main/packages/varlet-unplugin-icon-builder#options-type-declaration"},"refer here"),a(".")],-1),T=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"},"npm"),a(`
npm i @varlet/unplugin-icon-builder -D
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," yarn"),a(`
yarn add @varlet/unplugin-icon-builder -D
`),s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," pnpm"),a(`
pnpm add @varlet/unplugin-icon-builder -D
`)])],-1),q=s("h4",null,"Vite Configuration",-1),W=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// vite.config.ts"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { defineConfig } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vite'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" icon "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/unplugin-icon-builder/vite'"),a(`

`),s("span",{class:"hljs-keyword"},"export"),a(),s("span",{class:"hljs-keyword"},"default"),a(` defineConfig({
  `),s("span",{class:"hljs-attr"},"plugins"),a(`: [icon()],
})
`)])],-1),$=s("h4",null,"Webpack Configuration",-1),B=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// vite.config.ts"),a(`
`),s("span",{class:"hljs-keyword"},"const"),a(" Icon = "),s("span",{class:"hljs-built_in"},"require"),a("("),s("span",{class:"hljs-string"},"'@varlet/unplugin-icon-builder/webpack'"),a(`)

`),s("span",{class:"hljs-built_in"},"module"),a(`.exports = {
  `),s("span",{class:"hljs-attr"},"plugins"),a(`: [Icon.default()]
}
`)])],-1),H=s("h4",null,"Vue Cli Configuration",-1),L=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// vite.config.ts"),a(`
`),s("span",{class:"hljs-keyword"},"const"),a(" { defineConfig } = "),s("span",{class:"hljs-built_in"},"require"),a("("),s("span",{class:"hljs-string"},"'@vue/cli-service'"),a(`)
`),s("span",{class:"hljs-keyword"},"const"),a(" Icon = "),s("span",{class:"hljs-built_in"},"require"),a("("),s("span",{class:"hljs-string"},"'@varlet/unplugin-icon-builder/webpack'"),a(`)

`),s("span",{class:"hljs-built_in"},"module"),a(`.exports = defineConfig({
  `),s("span",{class:"hljs-attr"},"transpileDependencies"),a(": "),s("span",{class:"hljs-literal"},"true"),a(`,
  `),s("span",{class:"hljs-attr"},"configureWebpack"),a(`: {
    `),s("span",{class:"hljs-attr"},"plugins"),a(`: [Icon.default()]
  },
})
`)])],-1),M=s("h4",null,"Project Structure",-1),O=s("p",null,[s("code",null,"svg-icons"),a(" will default to the icon library folder.")],-1),Q=s("pre",{class:"hljs"},[s("code",null,`|-- project
   |-- src
     |-- main.ts
   |-- svg-icons
     |-- account-circle.svg
`)],-1),R=s("h4",null,"Import the entry file into the virtual module",-1),G=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// main.ts"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(),s("span",{class:"hljs-string"},"'virtual-icons'"),a(`
`)])],-1),J=s("h4",null,"Using Icons",-1),K=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(),s("span",{class:"hljs-attr"},"namespace"),a("="),s("span",{class:"hljs-string"},'"i"'),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"account-circle"'),a(" />")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),X={class:"card"},Y={id:"Customiconlibrary(manuallydefined)"},Z=s("p",null,[a("First you need to set up your own font and import it into your project. This assumes that a font named "),s("code",null,"i-icons"),a(" is extended.")],-1),ss=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"/* Set font */"),a(`
`),s("span",{class:"hljs-keyword"},"@font-face"),a(` {
  `),s("span",{class:"hljs-attribute"},"font-family"),a(": "),s("span",{class:"hljs-string"},'"i-icons"'),a(`;
  `),s("span",{class:"hljs-attribute"},"src"),a(": "),s("span",{class:"hljs-built_in"},"url"),a("("),s("span",{class:"hljs-string"},'"https://xxx.i-icons.ttf"'),a(") "),s("span",{class:"hljs-built_in"},"format"),a("("),s("span",{class:"hljs-string"},'"truetype"'),a(`);
}

`),s("span",{class:"hljs-comment"},"/* Set namespace */"),a(`
`),s("span",{class:"hljs-selector-class"},".i"),a(` {
  `),s("span",{class:"hljs-attribute"},"font-family"),a(": "),s("span",{class:"hljs-string"},'"i-icons"'),a(`;
}
`),s("span",{class:"hljs-comment"},"/* or */"),a(`
`),s("span",{class:"hljs-selector-class"},".i--set"),a(` {
  `),s("span",{class:"hljs-attribute"},"font-family"),a(": "),s("span",{class:"hljs-string"},'"i-icons"'),a(`;
}
`),s("span",{class:"hljs-comment"},"/* Set the end of the namespace */"),a(`

`),s("span",{class:"hljs-comment"},"/* Font name mapping code point */"),a(`
`),s("span",{class:"hljs-selector-class"},".i-account-circle"),s("span",{class:"hljs-selector-pseudo"},"::before"),a(` {
  `),s("span",{class:"hljs-attribute"},"content"),a(": "),s("span",{class:"hljs-string"},'"\\F000"'),a(`;
}
`)])],-1),as=s("h4",null,"Using icons",-1),ns=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-icon"),a(),s("span",{class:"hljs-attr"},"namespace"),a("="),s("span",{class:"hljs-string"},'"i"'),a(),s("span",{class:"hljs-attr"},"name"),a("="),s("span",{class:"hljs-string"},'"account-circle"'),a(" />")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),ls=s("h2",null,"API",-1),ts={class:"card"},es={id:"Props"},cs=o("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>name</code></td><td>icon name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>size</code></td><td>icon size</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>color</code></td><td>icon color, Only applies to font icons</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>namespace</code></td><td>Icon namespace, extensible custom icon library</td><td><em>string</em></td><td><code>var-icon</code></td></tr><tr><td><code>animation-class</code></td><td>Name of the transition animation class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>transition</code></td><td>Transition animation time(ms)</td><td><em>string | number</em></td><td><code>0</code></td></tr></tbody></table>",1),os={class:"card"},is={id:"Events"},rs=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"Event"),s("th",null,"Description"),s("th",null,"Arguments")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("code",null,"click")]),s("td",null,"Triggered when you click on the icon"),s("td",null,[s("code",null,"event: Event")])])])],-1),ps={class:"card"},hs={id:"StyleVariables"},ds=o('<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--icon-size</code></td><td><code>20px</code></td></tr></tbody></table>',2);function js(us,ms,gs,_s,fs,ys){const e=c("router-link"),t=c("var-site-code-example");return p(),r("div",d,[j,s("div",u,[s("h3",m,[n(e,{to:"#Intro"},{default:l(()=>[a("#")]),_:1}),a("Intro")]),g]),s("div",_,[s("h3",f,[n(e,{to:"#IconSize"},{default:l(()=>[a("#")]),_:1}),a("Icon Size")]),n(t,null,{default:l(()=>[y]),_:1})]),s("div",b,[s("h3",v,[n(e,{to:"#IconColor"},{default:l(()=>[a("#")]),_:1}),a("Icon Color")]),n(t,null,{default:l(()=>[k]),_:1})]),s("div",w,[s("h3",I,[n(e,{to:"#UseImage"},{default:l(()=>[a("#")]),_:1}),a("Use Image")]),C,n(t,null,{default:l(()=>[x]),_:1})]),s("div",S,[s("h3",z,[n(e,{to:"#ClickEvent"},{default:l(()=>[a("#")]),_:1}),a("Click Event")]),n(t,null,{default:l(()=>[V]),_:1})]),s("div",D,[s("h3",E,[n(e,{to:"#IconAnimation"},{default:l(()=>[a("#")]),_:1}),a("Icon Animation")]),U,n(t,null,{default:l(()=>[P]),_:1})]),s("div",F,[s("h3",N,[n(e,{to:"#Customiconlibrary(plugindefinition)"},{default:l(()=>[a("#")]),_:1}),a("Custom icon library (plugin definition)")]),A,n(t,{"playground-ignore":""},{default:l(()=>[T]),_:1}),q,n(t,{"playground-ignore":""},{default:l(()=>[W]),_:1}),$,n(t,{"playground-ignore":""},{default:l(()=>[B]),_:1}),H,n(t,{"playground-ignore":""},{default:l(()=>[L]),_:1}),M,O,n(t,{"playground-ignore":""},{default:l(()=>[Q]),_:1}),R,n(t,{"playground-ignore":""},{default:l(()=>[G]),_:1}),J,n(t,{"playground-ignore":""},{default:l(()=>[K]),_:1})]),s("div",X,[s("h3",Y,[n(e,{to:"#Customiconlibrary(manuallydefined)"},{default:l(()=>[a("#")]),_:1}),a("Custom icon library (manually defined)")]),Z,n(t,{"playground-ignore":""},{default:l(()=>[ss]),_:1}),as,n(t,{"playground-ignore":""},{default:l(()=>[ns]),_:1})]),ls,s("div",ts,[s("h3",es,[n(e,{to:"#Props"},{default:l(()=>[a("#")]),_:1}),a("Props")]),cs]),s("div",os,[s("h3",is,[n(e,{to:"#Events"},{default:l(()=>[a("#")]),_:1}),a("Events")]),rs]),s("div",ps,[s("h3",hs,[n(e,{to:"#StyleVariables"},{default:l(()=>[a("#")]),_:1}),a("Style Variables")]),ds])])}const vs=i(h,[["render",js]]);export{vs as default};
