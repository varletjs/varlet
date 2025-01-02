import{_ as i,m as r,p as t,q as o,w as d,Q as e,a1 as c,b as s,e as a}from"./index-XHkyQ4jX.js";const h={components:{}},u={class:"varlet-site-doc"},p=t("h1",null,"Components Library Tools",-1),m={class:"card"},g={id:"Intro"},_=t("p",null,[e("The out-of-the-box "),t("code",null,"Vue3 component library"),e(" rapid prototyping tool provides a series of commands and tools to solve the problem of component library development.")],-1),f={class:"card"},v={id:"Features"},b=c("<ul><li>📦  Out-of-the-box component library development environment</li><li>📦  An out-of-the-box component library compilation tool that supports exporting <code>esm</code>, <code>cjs</code>, <code>umd</code> module codes</li><li>🛠️  Configuration file-based component library documentation site, support Baidu statistics and theme customization</li><li>🛠️  Supports both <code>sfc</code> and <code>tsx</code> styles for writing component libraries</li><li>📦  Out-of-the-box code inspection tool</li><li>📦  Out-of-the-box unit testing tools</li><li>📦  Out-of-the-box code publishing tool, publishes to both <code>npm</code> and <code>github</code>, and automatically generates changelogs</li><li>💪  Support for <code>VSCode</code> extension development</li><li>💪  Support <code>build svg to web fonts</code></li><li>💪  Support for <code>Typescript</code></li><li>💪  Support <code>Various themes, including Material Design 2, Material Design 3</code></li><li>🌍  Support <code>Internationalization</code></li><li>🚀  Based on <code>pnpm</code></li></ul>",1),y={class:"card"},j={id:"Quickstart"},x=t("p",null,[t("code",null,"@varlet/cli"),e(" has built-in "),t("code",null,"sfc"),e(" and "),t("code",null,"tsx"),e(" style component library project templates, which can be generated directly by the "),t("code",null,"gen"),e(" command. It is convenient for you to directly enter the component library development.")],-1),C=t("pre",{class:"hljs"},[t("code",null,`pnpm add @varlet/cli -g
varlet-cli gen
`)],-1),T=t("h2",null,"Advanced customization",-1),w={class:"card"},k={id:"Configurationfile"},S=c('<p>The <code>varlet.config.mjs</code> in the project root directory is used to manage the specific details of the entire component library project. The default configuration can be viewed <a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-cli/src/node/config/varlet.default.config.ts">varlet.default.config.ts</a>. Also refer to <code>@varlet/ui</code> <a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-ui/varlet.config.mjs">varlet.config.mjs</a>.</p><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>name</code></td><td>The full name of the component library, which will be used as the package name</td><td><em>string</em></td><td><code>Varlet</code></td></tr><tr><td><code>namespace</code></td><td>Component library namespace, will be used as component prefix</td><td><em>string</em></td><td><code>var</code></td></tr><tr><td><code>host</code></td><td>Development server host</td><td><em>number</em></td><td><code>localhost</code></td></tr><tr><td><code>port</code></td><td>Development server port</td><td><em>number</em></td><td><code>8080</code></td></tr><tr><td><code>proxy</code></td><td>Development server proxy</td><td><em>Record&lt;string, string | ProxyOptions&gt;</em></td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>The title of the component library in the document</td><td><em>string</em></td><td><code>VARLET</code></td></tr><tr><td><code>logo</code></td><td>The logo of the component library in the document</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>alias</code></td><td>Path alias (root is src folder when use relative path)</td><td><em>Record&lt;string, string&gt;</em></td><td><code>-</code></td></tr><tr><td><code>defaultLanguage</code></td><td>Document default language</td><td><em>string</em></td><td><code>zh-CN</code></td></tr><tr><td><code>defaultLightTheme</code></td><td>The default light theme</td><td><em>string</em></td><td><code>md3LightTheme</code></td></tr><tr><td><code>defaultDarkTheme</code></td><td>The default dark theme</td><td><em>string</em></td><td><code>md3DarkTheme</code></td></tr><tr><td><code>useMobile</code></td><td>Whether to display the mobile phone preview on the right</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>themeKey</code></td><td>The key of the theme in local storage</td><td><em>string</em></td><td><code>VARLET_THEME</code></td></tr><tr><td><code>lightTheme</code></td><td>md2 light mode document theme</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>darkTheme</code></td><td>md2 dark mode document theme</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>md3LightTheme</code></td><td>md3 light mode document theme</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>md3DarkTheme</code></td><td>md3 dark mode document theme</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>highlight</code></td><td>Document code snippet style related</td><td><em>{ style: string }</em></td><td><code>-</code></td></tr><tr><td><code>analysis</code></td><td>Document statistics related</td><td><em>{ baidu: string }</em></td><td><code>-</code></td></tr><tr><td><code>pc</code></td><td>PC side document structure configuration</td><td><em><a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-cli/src/node/config/varlet.config.ts">VarletConfigPc</a></em></td><td><code>-</code></td></tr><tr><td><code>mobile</code></td><td>Mobile document structure configuration</td><td><em><a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-cli/src/node/config/varlet.config.ts">VarletConfigMobile</a></em></td><td><code>-</code></td></tr><tr><td><code>bundle</code></td><td>Bundle output options</td><td><em>{ external: string[], globals: Record&lt;string, string&gt; }</em></td><td><code>-</code></td></tr><tr><td><code>vitePlugins</code></td><td>vite plugins</td><td><em><a href="https://vite.dev/guide/using-plugins.html">Plugin</a>[]</em> | <code>(plugins: Plugin[]) =&gt; Plugin[])</code></td><td><code>-</code></td></tr><tr><td><code>directives</code></td><td>Component library directive folder name</td><td><em>string[]</em></td><td><code>[]</code></td></tr><tr><td><code>copy</code></td><td>Copy file configuration</td><td><em><a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-vite-plugins/src/copy.ts">CopyPath[]</a></em></td><td><code>- </code></td></tr><tr><td><code>icons</code></td><td>Font icon packaging related configurations</td><td>_<a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-cli/src/node/config/varlet.config.ts">VarletConfigIcons</a> _</td><td><code>-</code></td></tr><tr><td><code>esbuild</code></td><td>esbuild configuration</td><td><em><a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-cli/src/node/config/varlet.config.ts">VarletConfigEsbuild</a></em></td><td><code> -</code></td></tr><tr><td><code>seo</code></td><td>seo options</td><td><em><a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-cli/src/node/config/varlet.config.ts">VarletConfigSeo</a></em></td><td><code> -</code></td></tr></tbody></table><h4>Menu</h4><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>doc</code></td><td>The document page corresponds to the matching file name, required</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>type</code></td><td>The type of menu, when the type is <code>1</code>, it means the category menu, when the type is <code>2</code>, the doc field matches the component file under src, when the type is <code>3</code>, the doc field matches the md file under docs, required</td><td><em>MenuTypes</em></td><td><code>-</code></td></tr><tr><td><code>text</code></td><td>The text displayed in the menu, English display text can be configured when internationalization is set, required</td><td><em>Record&lt;string, string&gt;</em></td><td><code>-</code></td></tr><tr><td><code>useMobile</code></td><td>Whether to display the mobile phone preview on the right side on the current document page, if not filled, the default value is useMobile in config</td><td><em>boolean</em></td><td><code>-</code></td></tr></tbody></table>',4),V={class:"card"},D={id:"Custompages"},N=t("p",null,[e("If you want to insert other pages into the component library, you can create a "),t("code",null,"pages"),e(" folder in the project root directory to write a vue component to generate other pages. The directory structure is as follows:")],-1),E=t("pre",{class:"hljs"},[t("code",null,`|-- varlet-ui
  |-- src
  |-- docs
  |-- pages
    |-- sponsor
      |-- index.vue
    |-- contributor
      |-- locale
        |-- en-US.ts
      |-- index.vue
    |-- changelog
      |-- locale
        |-- zh-CN.ts
        |-- en-US.ts
      |-- index.vue
      
`)],-1),P=t("p",null,"The resulting route is as follows:",-1),R=t("pre",{class:"hljs"},[t("code",null,`/zh-CN/sponsor
/en-US/contributor
/zh-CN/changelog
/en-US/changelog
`)],-1),z={class:"card"},M={id:"Commandrelated"},B=t("h4",null,"Start the development server",-1),L=t("pre",{class:"hljs"},[t("code",null,[e(`varlet-cli dev
`),t("span",{class:"hljs-meta"},"#"),t("span",{class:"bash"}," force mode"),e(`
varlet-cli dev -f
`),t("span",{class:"hljs-meta"},"#"),t("span",{class:"bash"}," draft mode"),e(`
varlet-cli dev -d
`)])],-1),A=t("h4",null,"Build a documentation site",-1),I=t("pre",{class:"hljs"},[t("code",null,`varlet-cli build
`)],-1),O=t("h4",null,"Preview documentation site",-1),Q=t("pre",{class:"hljs"},[t("code",null,`varlet-cli preview
`)],-1),G=t("h4",null,"Compile component library",-1),U=t("pre",{class:"hljs"},[t("code",null,`varlet-cli compile
`)],-1),q=t("h4",null,"Compile style vars types declaration file",-1),F=t("pre",{class:"hljs"},[t("code",null,`varlet-cli compile:style-vars
`)],-1),$=t("h4",null,"Run VSCode extension development environment",-1),H=t("pre",{class:"hljs"},[t("code",null,`varlet-cli dev:extension
`)],-1),W=t("h4",null,"Build VSCode extension for production",-1),K=t("pre",{class:"hljs"},[t("code",null,`varlet-cli build:extension
`)],-1),Y=t("h4",null,"Build svg to web fonts",-1),J=t("pre",{class:"hljs"},[t("code",null,`varlet-cli build:icons -w
varlet-cli build:icons
`)],-1),X=t("h4",null,"Execute all unit tests",-1),Z=t("pre",{class:"hljs"},[t("code",null,`varlet-cli test
`)],-1),tt=t("h4",null,"Execute a unit test",-1),et=t("pre",{class:"hljs"},[t("code",null,`varlet-cli test -c <componentName>
`)],-1),ot=t("h4",null,"Execute unit tests in watch mode",-1),dt=t("pre",{class:"hljs"},[t("code",null,`varlet-cli test -w
`)],-1),nt=t("h4",null,"Execute unit tests and report coverage",-1),lt=t("pre",{class:"hljs"},[t("code",null,`varlet-cli test -cov
`)],-1),st=t("h4",null,"Lint the code",-1),ct=t("pre",{class:"hljs"},[t("code",null,`varlet-cli lint
`)],-1),it=t("h4",null,"Lint git commit message",-1),rt=t("pre",{class:"hljs"},[t("code",null,`varlet-cli commit-lint
`)],-1),at=t("h4",null,"Show checklist",-1),ht=t("pre",{class:"hljs"},[t("code",null,`varlet-cli checklist
`)],-1),ut=t("h4",null,"Generate changelog",-1),pt=t("pre",{class:"hljs"},[t("code",null,`varlet-cli changelog
`)],-1),mt=t("h4",null,"Release component library",-1),gt=t("pre",{class:"hljs"},[t("code",null,`varlet-cli release
`)],-1),_t=t("h4",null,"Generate a project template",-1),ft=t("pre",{class:"hljs"},[t("code",null,[e(`varlet-cli gen
`),t("span",{class:"hljs-meta"},`
#`),t("span",{class:"bash"}," Options"),e(`
-n
--name
  project name
-s
--sfc
  Generate sfc-style project templates
-t
--tsx
  Generate tsx-style project templates
-l
--locale
  Need to support internationalization
`)])],-1),vt=t("h4",null,"Create a component template file",-1),bt=t("pre",{class:"hljs"},[t("code",null,[e(`varlet-cli create
`),t("span",{class:"hljs-meta"},`
#`),t("span",{class:"bash"}," Options"),e(`
-n
--name
  project name
-s
--sfc
  Generate sfc-style component
-t
--tsx
  Generate tsx-style component
-l
--locale
  Need to support internationalization
`)])],-1),yt={class:"card"},jt={id:"Notebeforepublish"},xt=t("ol",null,[t("li",null,[t("code",null,"npm"),e(" repository registry must set to "),t("code",null,"npm"),e(" official mirror")]),t("li",null,[e("Execute "),t("code",null,"npm login"),e(" to log in")])],-1),Ct={class:"card"},Tt={id:"Q&A"},wt=t("h4",null,"How to solve failure of installing sharp ?",-1),kt=t("ul",null,[t("li",null,"You can choose to change mirror site which contains binaries for both sharp and libvips.")],-1),St=t("pre",{class:"hljs"},[t("code",null,`pnpm config set sharp_binary_host "https://npmmirror.com/mirrors/sharp"
pnpm config set sharp_libvips_binary_host "https://npmmirror.com/mirrors/sharp-libvips"
`)],-1);function Vt(Dt,Nt,Et,Pt,Rt,zt){const l=s("router-link"),n=s("var-site-code-example");return a(),r("div",u,[p,t("div",m,[t("h3",g,[o(l,{to:"#Intro"},{default:d(()=>[e("#")]),_:1}),e("Intro")]),_]),t("div",f,[t("h3",v,[o(l,{to:"#Features"},{default:d(()=>[e("#")]),_:1}),e("Features")]),b]),t("div",y,[t("h3",j,[o(l,{to:"#Quickstart"},{default:d(()=>[e("#")]),_:1}),e("Quickstart")]),x,o(n,{"playground-ignore":""},{default:d(()=>[C]),_:1})]),T,t("div",w,[t("h3",k,[o(l,{to:"#Configurationfile"},{default:d(()=>[e("#")]),_:1}),e("Configuration file")]),S]),t("div",V,[t("h3",D,[o(l,{to:"#Custompages"},{default:d(()=>[e("#")]),_:1}),e("Custom pages")]),N,o(n,{"playground-ignore":""},{default:d(()=>[E]),_:1}),P,o(n,{"playground-ignore":""},{default:d(()=>[R]),_:1})]),t("div",z,[t("h3",M,[o(l,{to:"#Commandrelated"},{default:d(()=>[e("#")]),_:1}),e("Command related")]),B,o(n,{"playground-ignore":""},{default:d(()=>[L]),_:1}),A,o(n,{"playground-ignore":""},{default:d(()=>[I]),_:1}),O,o(n,{"playground-ignore":""},{default:d(()=>[Q]),_:1}),G,o(n,{"playground-ignore":""},{default:d(()=>[U]),_:1}),q,o(n,{"playground-ignore":""},{default:d(()=>[F]),_:1}),$,o(n,{"playground-ignore":""},{default:d(()=>[H]),_:1}),W,o(n,{"playground-ignore":""},{default:d(()=>[K]),_:1}),Y,o(n,{"playground-ignore":""},{default:d(()=>[J]),_:1}),X,o(n,{"playground-ignore":""},{default:d(()=>[Z]),_:1}),tt,o(n,{"playground-ignore":""},{default:d(()=>[et]),_:1}),ot,o(n,{"playground-ignore":""},{default:d(()=>[dt]),_:1}),nt,o(n,{"playground-ignore":""},{default:d(()=>[lt]),_:1}),st,o(n,{"playground-ignore":""},{default:d(()=>[ct]),_:1}),it,o(n,{"playground-ignore":""},{default:d(()=>[rt]),_:1}),at,o(n,{"playground-ignore":""},{default:d(()=>[ht]),_:1}),ut,o(n,{"playground-ignore":""},{default:d(()=>[pt]),_:1}),mt,o(n,{"playground-ignore":""},{default:d(()=>[gt]),_:1}),_t,o(n,{"playground-ignore":""},{default:d(()=>[ft]),_:1}),vt,o(n,{"playground-ignore":""},{default:d(()=>[bt]),_:1})]),t("div",yt,[t("h3",jt,[o(l,{to:"#Notebeforepublish"},{default:d(()=>[e("#")]),_:1}),e("Note before publish")]),xt]),t("div",Ct,[t("h3",Tt,[o(l,{to:"#Q&A"},{default:d(()=>[e("#")]),_:1}),e("Q & A")]),wt,kt,o(n,null,{default:d(()=>[St]),_:1})])])}const Bt=i(h,[["render",Vt]]);export{Bt as default};
