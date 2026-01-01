import{_ as i,b as s,e as r,m as a,p as e,q as o,w as d,P as t,Z as c}from"./index-vwO9GBzB.js";const h={components:{}},u={class:"varlet-site-doc"},p=e("h1",null,"Components Library Tools",-1),m={class:"card"},_={id:"Intro"},g=e("p",null,[t("The out-of-the-box "),e("code",null,"Vue3 component library"),t(" rapid prototyping tool provides a series of commands and tools to solve the problem of component library development.")],-1),f={class:"card"},v={id:"Features"},b=c("<ul><li>📦  Out-of-the-box component library development environment</li><li>📦  An out-of-the-box component library compilation tool that supports exporting <code>esm</code>, <code>cjs</code>, <code>umd</code> module codes</li><li>🛠️  Configuration file-based component library documentation site, support Baidu statistics and theme customization</li><li>🛠️  Supports both <code>sfc</code> and <code>tsx</code> styles for writing component libraries</li><li>📦  Out-of-the-box code inspection tool</li><li>📦  Out-of-the-box unit testing tools</li><li>📦  Out-of-the-box code publishing tool, publishes to both <code>npm</code> and <code>github</code>, and automatically generates changelogs</li><li>💪  Support for <code>VSCode</code> extension development</li><li>💪  Support <code>build svg to web fonts</code></li><li>💪  Support for <code>Typescript</code></li><li>💪  Support <code>Dark Mode</code></li><li>🌍  Support <code>Internationalization</code></li><li>🚀  Based on <code>pnpm</code></li></ul>",1),y={class:"card"},j={id:"Quickstart"},x=e("p",null,[e("code",null,"@varlet/cli"),t(" has built-in "),e("code",null,"sfc"),t(" and "),e("code",null,"tsx"),t(" style component library project templates, which can be generated directly by the "),e("code",null,"gen"),t(" command. It is convenient for you to directly enter the component library development.")],-1),w=e("pre",{class:"hljs"},[e("code",null,`pnpm add @varlet/cli -g
varlet-cli gen
`)],-1),C=e("h2",null,"Advanced customization",-1),T={class:"card"},k={id:"Configurationfile"},S=c('<p>The <code>varlet.config.mjs</code> in the project root directory is used to manage the specific details of the entire component library project. The default configuration can be viewed <a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-cli/src/node/config/varlet.default.config.ts">varlet.default.config.ts</a>. Also refer to <code>@varlet/ui</code> <a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-ui/varlet.config.mjs">varlet.config.mjs</a>.</p><table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>name</code></td><td>The full name of the component library, which will be used as the package name</td><td><em>string</em></td><td><code>Varlet</code></td></tr><tr><td><code>namespace</code></td><td>Component library namespace, which will be used as a component prefix</td><td><em>string</em></td><td><code>var</code></td></tr><tr><td><code>host</code></td><td>Development server host</td><td><em>number</em></td><td><code>localhost</code></td></tr><tr><td><code>port</code></td><td>Development server port</td><td><em>number</em></td><td><code>8080</code></td></tr><tr><td><code>title</code></td><td>The title of the component library in the documentation</td><td><em>string</em></td><td><code>VARLET</code></td></tr><tr><td><code>logo</code></td><td>The logo of the component library in the documentation</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>defaultLanguage</code></td><td>Documentation default language</td><td><em>string</em></td><td><code>zh-CN</code></td></tr><tr><td><code>useMobile</code></td><td>Whether to show the preview of the right mobile phone</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>lightTheme</code></td><td>Light Mode Documentation Theme</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>darkTheme</code></td><td>Dark Mode Documentation Theme</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>highlight</code></td><td>Documentation snippet style related</td><td><em>{ style: string }</em></td><td><code>-</code></td></tr><tr><td><code>analysis</code></td><td>Document statistics related</td><td><em>{ baidu: string }</em></td><td><code>-</code></td></tr><tr><td><code>pc</code></td><td>PC-side document structure configuration</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>mobile</code></td><td>Mobile side document structure configuration</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>directives</code></td><td>Directive folder names</td><td><em>string[]</em></td><td><code>[]</code></td></tr><tr><td><code>copy</code></td><td>Copy file options</td><td><em><a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-vite-plugins/src/copy.ts">CopyPath[]</a></em></td><td><code>-</code></td></tr><tr><td><code>icons</code></td><td>Font icon packaging related configuration</td><td><em><a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-cli/src/node/config/varlet.config.ts">VarletConfigIcons</a></em></td><td><code>-</code></td></tr><tr><td><code>esbuild</code></td><td>Esbuild configuration</td><td><em><a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-cli/src/node/config/varlet.config.ts">VarletConfigEsbuild</a></em></td><td><code>-</code></td></tr></tbody></table><h4>Menu</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>doc</code></td><td>The document page corresponds to the matching file name, required</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>type</code></td><td>The type of menu, when the type is <code>1</code>, it means the category menu, when the type is <code>2</code>, the doc field matches the component file under src, when the type is <code>3</code>, the doc field matches the md file under docs, required</td><td><em>MenuTypes</em></td><td><code>-</code></td></tr><tr><td><code>text</code></td><td>The text displayed in the menu, English display text can be configured when internationalization is set, required</td><td><em>Record&lt;string, string&gt;</em></td><td><code>-</code></td></tr><tr><td><code>useMobile</code></td><td>Whether to display the mobile phone preview on the right side on the current document page, if not filled, the default value is useMobile in config</td><td><em>boolean</em></td><td><code>-</code></td></tr></tbody></table>',4),N={class:"card"},D={id:"Custompages"},V=e("p",null,[t("If you want to insert other pages into the component library, you can create a "),e("code",null,"pages"),t(" folder in the project root directory to write a vue component to generate other pages. The directory structure is as follows:")],-1),z=e("pre",{class:"hljs"},[e("code",null,`|-- varlet-ui
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
      
`)],-1),E=e("p",null,"The resulting route is as follows:",-1),M=e("pre",{class:"hljs"},[e("code",null,`/zh-CN/sponsor
/en-US/contributor
/zh-CN/changelog
/en-US/changelog
`)],-1),B={class:"card"},R={id:"Commandrelated"},A=e("h4",null,"Start the development server",-1),I=e("pre",{class:"hljs"},[e("code",null,[t(`varlet-cli dev
`),e("span",{class:"hljs-meta"},"#"),e("span",{class:"bash"}," force mode"),t(`
varlet-cli dev -f
`),e("span",{class:"hljs-meta"},"#"),e("span",{class:"bash"}," draft mode"),t(`
varlet-cli dev -d
`)])],-1),G=e("h4",null,"Build a documentation site",-1),L=e("pre",{class:"hljs"},[e("code",null,`varlet-cli build
`)],-1),O=e("h4",null,"Preview documentation site",-1),Q=e("pre",{class:"hljs"},[e("code",null,`varlet-cli preview
`)],-1),q=e("h4",null,"Compile component library",-1),P=e("pre",{class:"hljs"},[e("code",null,`varlet-cli compile
`)],-1),U=e("h4",null,"Run VSCode extension development environment",-1),F=e("pre",{class:"hljs"},[e("code",null,`varlet-cli dev:extension
`)],-1),$=e("h4",null,"Build VSCode extension for production",-1),W=e("pre",{class:"hljs"},[e("code",null,`varlet-cli build:extension
`)],-1),H=e("h4",null,"Build svg to web fonts",-1),Y=e("pre",{class:"hljs"},[e("code",null,`varlet-cli build:icons
`)],-1),Z=e("h4",null,"Execute all unit tests",-1),J=e("pre",{class:"hljs"},[e("code",null,`varlet-cli test
`)],-1),K=e("h4",null,"Execute unit tests in watch mode",-1),X=e("pre",{class:"hljs"},[e("code",null,`varlet-cli test -w
`)],-1),ee=e("h4",null,"Execute unit tests and report coverage",-1),te=e("pre",{class:"hljs"},[e("code",null,`varlet-cli test -cov
`)],-1),oe=e("h4",null,"Lint the code",-1),de=e("pre",{class:"hljs"},[e("code",null,`varlet-cli lint
`)],-1),ne=e("h4",null,"Lint git commit message",-1),le=e("pre",{class:"hljs"},[e("code",null,`varlet-cli commit-lint
`)],-1),se=e("h4",null,"Show checklist",-1),ce=e("pre",{class:"hljs"},[e("code",null,`varlet-cli checklist
`)],-1),ie=e("h4",null,"Generate changelog",-1),re=e("pre",{class:"hljs"},[e("code",null,`varlet-cli changelog
`)],-1),ae=e("h4",null,"Release component library",-1),he=e("pre",{class:"hljs"},[e("code",null,`varlet-cli release
`)],-1),ue=e("h4",null,"Generate a project template",-1),pe=e("pre",{class:"hljs"},[e("code",null,[t(`varlet-cli gen
`),e("span",{class:"hljs-meta"},`
#`),e("span",{class:"bash"}," Options"),t(`
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
`)])],-1),me=e("h4",null,"Create a component template file",-1),_e=e("pre",{class:"hljs"},[e("code",null,[t(`varlet-cli create
`),e("span",{class:"hljs-meta"},`
#`),e("span",{class:"bash"}," Options"),t(`
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
`)])],-1),ge={class:"card"},fe={id:"Notebeforepublish"},ve=e("ul",null,[e("li",null,[t("1."),e("code",null,"npm"),t(" repository registry must set to "),e("code",null,"npm"),t(" official mirror")]),e("li",null,[t("2.Execute "),e("code",null,"npm login"),t(" to log in")])],-1),be={class:"card"},ye={id:"Q&A"},je=e("blockquote",null,[e("p",null,"How to solve failure of installing sharp ?")],-1),xe=e("ul",null,[e("li",null,"You can choose to change mirror site which contains binaries for both sharp and libvips.")],-1),we=e("pre",{class:"hljs"},[e("code",null,`pnpm config set sharp_binary_host "https://npmmirror.com/mirrors/sharp"
pnpm config set sharp_libvips_binary_host "https://npmmirror.com/mirrors/sharp-libvips"
`)],-1);function Ce(Te,ke,Se,Ne,De,Ve){const l=s("router-link"),n=s("var-site-code-example");return r(),a("div",u,[p,e("div",m,[e("h3",_,[o(l,{to:"#Intro"},{default:d(()=>[t("#")]),_:1}),t("Intro")]),g]),e("div",f,[e("h3",v,[o(l,{to:"#Features"},{default:d(()=>[t("#")]),_:1}),t("Features")]),b]),e("div",y,[e("h3",j,[o(l,{to:"#Quickstart"},{default:d(()=>[t("#")]),_:1}),t("Quickstart")]),x,o(n,{"playground-ignore":""},{default:d(()=>[w]),_:1})]),C,e("div",T,[e("h3",k,[o(l,{to:"#Configurationfile"},{default:d(()=>[t("#")]),_:1}),t("Configuration file")]),S]),e("div",N,[e("h3",D,[o(l,{to:"#Custompages"},{default:d(()=>[t("#")]),_:1}),t("Custom pages")]),V,o(n,{"playground-ignore":""},{default:d(()=>[z]),_:1}),E,o(n,{"playground-ignore":""},{default:d(()=>[M]),_:1})]),e("div",B,[e("h3",R,[o(l,{to:"#Commandrelated"},{default:d(()=>[t("#")]),_:1}),t("Command related")]),A,o(n,{"playground-ignore":""},{default:d(()=>[I]),_:1}),G,o(n,{"playground-ignore":""},{default:d(()=>[L]),_:1}),O,o(n,{"playground-ignore":""},{default:d(()=>[Q]),_:1}),q,o(n,{"playground-ignore":""},{default:d(()=>[P]),_:1}),U,o(n,{"playground-ignore":""},{default:d(()=>[F]),_:1}),$,o(n,{"playground-ignore":""},{default:d(()=>[W]),_:1}),H,o(n,{"playground-ignore":""},{default:d(()=>[Y]),_:1}),Z,o(n,{"playground-ignore":""},{default:d(()=>[J]),_:1}),K,o(n,{"playground-ignore":""},{default:d(()=>[X]),_:1}),ee,o(n,{"playground-ignore":""},{default:d(()=>[te]),_:1}),oe,o(n,{"playground-ignore":""},{default:d(()=>[de]),_:1}),ne,o(n,{"playground-ignore":""},{default:d(()=>[le]),_:1}),se,o(n,{"playground-ignore":""},{default:d(()=>[ce]),_:1}),ie,o(n,{"playground-ignore":""},{default:d(()=>[re]),_:1}),ae,o(n,{"playground-ignore":""},{default:d(()=>[he]),_:1}),ue,o(n,{"playground-ignore":""},{default:d(()=>[pe]),_:1}),me,o(n,{"playground-ignore":""},{default:d(()=>[_e]),_:1})]),e("div",ge,[e("h3",fe,[o(l,{to:"#Notebeforepublish"},{default:d(()=>[t("#")]),_:1}),t("Note before publish")]),ve]),e("div",be,[e("h3",ye,[o(l,{to:"#Q&A"},{default:d(()=>[t("#")]),_:1}),t("Q & A")]),je,xe,o(n,null,{default:d(()=>[we]),_:1})])])}const Ee=i(h,[["render",Ce]]);export{Ee as default};
