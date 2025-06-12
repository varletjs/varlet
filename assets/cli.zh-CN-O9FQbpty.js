import{b as a,m as u,p as d,q as l,Q as e,w as o,$ as r,e as i,h as g}from"./index-BvpNkg8r.js";const c={components:{}},m={class:"varlet-site-doc"},p={class:"card"},v={id:"jie4shao4"},f={class:"card"},b={id:"te4xing4"},y={class:"card"},h={id:"kuai4su4kai1shi3"},j={class:"card"},x={id:"pei4zhi4wen2jian4"},k={class:"card"},C={id:"zi4ding4yi4ye4mian4"},V={class:"card"},T={id:"ming4ling4xiang1guan1"},z={class:"card"},w={id:"fa1bu4qian2zhu4yi4"},N={class:"card"},R={id:"wen4da2"};function M(S,t,P,E,L,D){const s=i("router-link"),n=i("var-site-code-example");return g(),u("div",m,[t[65]||(t[65]=d("h1",null,"组件库快速成型工具",-1)),d("div",p,[d("h3",v,[l(s,{to:"#jie4shao4"},{default:o(()=>t[0]||(t[0]=[e("#")])),_:1}),t[1]||(t[1]=e("介绍"))]),t[2]||(t[2]=d("p",null,[e("开箱即用的 "),d("code",null,"Vue3组件库"),e(" 快速成型工具，提供了一系列命令和工具去解决组件库开发上的问题。")],-1))]),d("div",f,[d("h3",b,[l(s,{to:"#te4xing4"},{default:o(()=>t[3]||(t[3]=[e("#")])),_:1}),t[4]||(t[4]=e("特性"))]),t[5]||(t[5]=r("<ul><li>📦  开箱即用的组件库开发环境</li><li>📦  开箱即用的组件库编译工具，支持导出 <code>esm</code>, <code>cjs</code>, <code>umd</code> 三种模块代码</li><li>🛠️  基于配置文件的组件库文档站点，支持百度统计和主题定制</li><li>🛠️  支持 <code>sfc</code> 和 <code>tsx</code> 两种风格的组件库编写风格</li><li>📦  开箱即用的代码检查工具</li><li>📦  开箱即用的单元测试工具</li><li>📦  开箱即用的代码发布工具,同时发布到 <code>npm</code> 和 <code>github</code>, 并自动生成更新日志</li><li>💪  支持 <code>VSCode</code> 插件开发</li><li>💪  支持 <code>字体图标打包</code></li><li>💪  支持 <code>Typescript</code></li><li>💪  支持 <code>多种主题, 包含 Material Design 2、Material Design 3</code></li><li>🌍  支持 <code>国际化</code></li><li>🚀  基于 <code>pnpm</code></li></ul>",1))]),d("div",y,[d("h3",h,[l(s,{to:"#kuai4su4kai1shi3"},{default:o(()=>t[6]||(t[6]=[e("#")])),_:1}),t[7]||(t[7]=e("快速开始"))]),t[9]||(t[9]=d("p",null,[d("code",null,"@varlet/cli"),e(" 内置了 "),d("code",null,"sfc"),e(" 和 "),d("code",null,"tsx"),e(" 两种风格的组件库项目模板，可以通过 "),d("code",null,"gen"),e(" 命令直接生成。 方便您直接进入组件库开发。")],-1)),l(n,{"playground-ignore":""},{default:o(()=>t[8]||(t[8]=[d("pre",{class:"hljs"},[d("code",null,`pnpm add @varlet/cli -g
varlet-cli gen
`)],-1)])),_:1})]),t[66]||(t[66]=d("h2",null,"高级定制",-1)),d("div",j,[d("h3",x,[l(s,{to:"#pei4zhi4wen2jian4"},{default:o(()=>t[10]||(t[10]=[e("#")])),_:1}),t[11]||(t[11]=e("配置文件"))]),t[12]||(t[12]=r('<p>项目根目录下的 <code>varlet.config.mjs</code> 用来管理整个组件库项目的具体细节。 默认配置可查阅 <a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-cli/src/node/config/varlet.default.config.ts">varlet.default.config.ts</a>。 也可以参考 <code>@varlet/ui</code> 的 <a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-ui/varlet.config.mjs">varlet.config.mjs</a>。</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>name</code></td><td>组件库全名，会作为包名</td><td><em>string</em></td><td><code>Varlet</code></td></tr><tr><td><code>namespace</code></td><td>组件库命名空间, 会作为组件前缀</td><td><em>string</em></td><td><code>var</code></td></tr><tr><td><code>host</code></td><td>开发服务器主机</td><td><em>number</em></td><td><code>localhost</code></td></tr><tr><td><code>port</code></td><td>开发服务器端口</td><td><em>number</em></td><td><code>8080</code></td></tr><tr><td><code>proxy</code></td><td>开发服务器代理</td><td><em>Record&lt;string, string | ProxyOptions&gt;</em></td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>文档中组件库的标题</td><td><em>string</em></td><td><code>VARLET</code></td></tr><tr><td><code>logo</code></td><td>文档中组件库的 logo</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>alias</code></td><td>路径别名 (使用相对路径时，根路径为 src 文件夹)</td><td><em>Record&lt;string, string&gt;</em></td><td><code>-</code></td></tr><tr><td><code>defaultLanguage</code></td><td>文档默认语言</td><td><em>string</em></td><td><code>zh-CN</code></td></tr><tr><td><code>defaultLightTheme</code></td><td>默认的亮色主题</td><td><em>string</em></td><td><code>md3LightTheme</code></td></tr><tr><td><code>defaultDarkTheme</code></td><td>默认的暗色主题</td><td><em>string</em></td><td><code>md3DarkTheme</code></td></tr><tr><td><code>useMobile</code></td><td>是否显示右侧手机预览</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>themeKey</code></td><td>主题在本地存储中的 key</td><td><em>string</em></td><td><code>VARLET_THEME</code></td></tr><tr><td><code>lightTheme</code></td><td>md2 亮色模式文档主题</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>darkTheme</code></td><td>md2 暗黑模式文档主题</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>md3LightTheme</code></td><td>md3 亮色模式文档主题</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>md3DarkTheme</code></td><td>md3 暗黑模式文档主题</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>highlight</code></td><td>文档代码片段样式相关</td><td><em>{ style: string }</em></td><td><code>-</code></td></tr><tr><td><code>analysis</code></td><td>文档统计相关</td><td><em>{ baidu: string }</em></td><td><code>-</code></td></tr><tr><td><code>pc</code></td><td>pc 端文档结构配置</td><td><em><a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-cli/src/node/config/varlet.config.ts">VarletConfigPc</a></em></td><td><code>-</code></td></tr><tr><td><code>mobile</code></td><td>mobile 端文档结构配置</td><td><em><a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-cli/src/node/config/varlet.config.ts">VarletConfigMobile</a></em></td><td><code>-</code></td></tr><tr><td><code>bundle</code></td><td>组件库编译的捆绑产物配置</td><td><em>{ external: string[], globals: Record&lt;string, string&gt; }</em></td><td><code>-</code></td></tr><tr><td><code>vitePlugins</code></td><td>vite 插件</td><td><em><a href="https://vite.dev/guide/using-plugins.html">Plugin</a>[]</em> | <code>(plugins: Plugin[]) =&gt; Plugin[])</code></td><td><code>-</code></td></tr><tr><td><code>directives</code></td><td>组件库指令文件夹名称</td><td><em>string[]</em></td><td><code>[]</code></td></tr><tr><td><code>copy</code></td><td>复制文件配置</td><td><em><a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-vite-plugins/src/copy.ts">CopyPath[]</a></em></td><td><code>-</code></td></tr><tr><td><code>icons</code></td><td>字体图标打包相关配置</td><td><em><a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-cli/src/node/config/varlet.config.ts">VarletConfigIcons</a></em></td><td><code>-</code></td></tr><tr><td><code>esbuild</code></td><td>esbuild 配置</td><td><em><a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-cli/src/node/config/varlet.config.ts">VarletConfigEsbuild</a></em></td><td><code>-</code></td></tr><tr><td><code>seo</code></td><td>seo 选项</td><td><em><a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-cli/src/node/config/varlet.config.ts">VarletConfigSeo</a></em></td><td><code> -</code></td></tr></tbody></table><h4>Menu</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>doc</code></td><td>文档页面应匹配的文件名称, 必填</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>type</code></td><td>menu 类型, 当 type 为 <code>1</code> 时表示分类 menu, 类型为 <code>2</code> 时 doc 字段匹配 src 下的组件文件, 类型为<code>3</code>时 doc 字段匹配 docs 下的 md 文件</td><td><em>MenuTypes</em></td><td><code>-</code></td></tr><tr><td><code>text</code></td><td>menu 所展示的文字, 当设置国际化时可配置英文展示文字</td><td><em>Record&lt;string, string&gt;</em></td><td><code>-</code></td></tr><tr><td><code>useMobile</code></td><td>是否在当前文档页显示右侧手机预览, 如不填写, 默认取 config 中的 useMobile</td><td><em>boolean</em></td><td><code>-</code></td></tr></tbody></table>',4))]),d("div",k,[d("h3",C,[l(s,{to:"#zi4ding4yi4ye4mian4"},{default:o(()=>t[13]||(t[13]=[e("#")])),_:1}),t[14]||(t[14]=e("自定义页面"))]),t[17]||(t[17]=d("p",null,[e("如果想在组件库中插入其他页面，可以在项目根目录下的创建 "),d("code",null,"pages"),e(" 文件夹编写 vue 组件， 用来生成其他的页面。 目录结构如下：")],-1)),l(n,{"playground-ignore":""},{default:o(()=>t[15]||(t[15]=[d("pre",{class:"hljs"},[d("code",null,`|-- varlet-ui
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
`)],-1)])),_:1}),t[18]||(t[18]=d("p",null,"生成的路由如下：",-1)),l(n,{"playground-ignore":""},{default:o(()=>t[16]||(t[16]=[d("pre",{class:"hljs"},[d("code",null,`/zh-CN/sponsor
/en-US/contributor
/zh-CN/changelog
/en-US/changelog
`)],-1)])),_:1})]),d("div",V,[d("h3",T,[l(s,{to:"#ming4ling4xiang1guan1"},{default:o(()=>t[19]||(t[19]=[e("#")])),_:1}),t[20]||(t[20]=e("命令相关"))]),t[39]||(t[39]=d("h4",null,"启动开发服务器",-1)),l(n,{"playground-ignore":""},{default:o(()=>t[21]||(t[21]=[d("pre",{class:"hljs"},[d("code",null,[e(`varlet-cli dev
`),d("span",{class:"hljs-meta"},"#"),d("span",{class:"bash"}," force mode"),e(`
varlet-cli dev -f
`),d("span",{class:"hljs-meta"},"#"),d("span",{class:"bash"}," draft mode"),e(`
varlet-cli dev -d
`)])],-1)])),_:1}),t[40]||(t[40]=d("h4",null,"构建文档站点",-1)),l(n,{"playground-ignore":""},{default:o(()=>t[22]||(t[22]=[d("pre",{class:"hljs"},[d("code",null,`varlet-cli build
`)],-1)])),_:1}),t[41]||(t[41]=d("h4",null,"预览文档站点",-1)),l(n,{"playground-ignore":""},{default:o(()=>t[23]||(t[23]=[d("pre",{class:"hljs"},[d("code",null,`varlet-cli preview
`)],-1)])),_:1}),t[42]||(t[42]=d("h4",null,"构建组件库",-1)),l(n,{"playground-ignore":""},{default:o(()=>t[24]||(t[24]=[d("pre",{class:"hljs"},[d("code",null,`varlet-cli compile
`)],-1)])),_:1}),t[43]||(t[43]=d("h4",null,"构建样式变量类型声明文件",-1)),l(n,{"playground-ignore":""},{default:o(()=>t[25]||(t[25]=[d("pre",{class:"hljs"},[d("code",null,`varlet-cli compile:style-vars
`)],-1)])),_:1}),t[44]||(t[44]=d("h4",null,"启动 VSCode 插件开发环境",-1)),l(n,{"playground-ignore":""},{default:o(()=>t[26]||(t[26]=[d("pre",{class:"hljs"},[d("code",null,`varlet-cli dev:extension
`)],-1)])),_:1}),t[45]||(t[45]=d("h4",null,"构建 VSCode 插件",-1)),l(n,{"playground-ignore":""},{default:o(()=>t[27]||(t[27]=[d("pre",{class:"hljs"},[d("code",null,`varlet-cli build:extension
`)],-1)])),_:1}),t[46]||(t[46]=d("h4",null,"打包字体图标",-1)),l(n,{"playground-ignore":""},{default:o(()=>t[28]||(t[28]=[d("pre",{class:"hljs"},[d("code",null,`varlet-cli build:icons -w
varlet-cli build:icons
`)],-1)])),_:1}),t[47]||(t[47]=d("h4",null,"执行所有的单元测试",-1)),l(n,{"playground-ignore":""},{default:o(()=>t[29]||(t[29]=[d("pre",{class:"hljs"},[d("code",null,`varlet-cli test
`)],-1)])),_:1}),t[48]||(t[48]=d("h4",null,"执行单个组件的单元测试",-1)),l(n,{"playground-ignore":""},{default:o(()=>t[30]||(t[30]=[d("pre",{class:"hljs"},[d("code",null,`varlet-cli test -c <componentName>
`)],-1)])),_:1}),t[49]||(t[49]=d("h4",null,"以 watch 模式执行单元测试",-1)),l(n,{"playground-ignore":""},{default:o(()=>t[31]||(t[31]=[d("pre",{class:"hljs"},[d("code",null,`varlet-cli test -w
`)],-1)])),_:1}),t[50]||(t[50]=d("h4",null,"执行所有的单元测试并报告覆盖率",-1)),l(n,{"playground-ignore":""},{default:o(()=>t[32]||(t[32]=[d("pre",{class:"hljs"},[d("code",null,`varlet-cli test -cov
`)],-1)])),_:1}),t[51]||(t[51]=d("h4",null,"校验提交信息",-1)),l(n,{"playground-ignore":""},{default:o(()=>t[33]||(t[33]=[d("pre",{class:"hljs"},[d("code",null,`varlet-cli commit-lint
`)],-1)])),_:1}),t[52]||(t[52]=d("h4",null,"显示检查清单",-1)),l(n,{"playground-ignore":""},{default:o(()=>t[34]||(t[34]=[d("pre",{class:"hljs"},[d("code",null,`varlet-cli checklist
`)],-1)])),_:1}),t[53]||(t[53]=d("h4",null,"生成更新日志",-1)),l(n,{"playground-ignore":""},{default:o(()=>t[35]||(t[35]=[d("pre",{class:"hljs"},[d("code",null,`varlet-cli changelog
`)],-1)])),_:1}),t[54]||(t[54]=d("h4",null,"发布组件库",-1)),l(n,{"playground-ignore":""},{default:o(()=>t[36]||(t[36]=[d("pre",{class:"hljs"},[d("code",null,`varlet-cli release
`)],-1)])),_:1}),t[55]||(t[55]=d("h4",null,"生成一个项目模板",-1)),l(n,{"playground-ignore":""},{default:o(()=>t[37]||(t[37]=[d("pre",{class:"hljs"},[d("code",null,[e(`varlet-cli gen
`),d("span",{class:"hljs-meta"},`
#`),d("span",{class:"bash"}," Options"),e(`
-n
--name
  项目名
-s
--sfc
  生成 sfc 风格的项目模板
-t
--tsx
  生成 tsx 格式项目
-l
--locale
  需要支持国际化
`)])],-1)])),_:1}),t[56]||(t[56]=d("h4",null,"创建组件模板文件",-1)),l(n,{"playground-ignore":""},{default:o(()=>t[38]||(t[38]=[d("pre",{class:"hljs"},[d("code",null,[e(`varlet-cli create
`),d("span",{class:"hljs-meta"},`
#`),d("span",{class:"bash"}," Options"),e(`
-n
--name
  组件名
-s
--sfc
  生成 sfc 风格的组件
-t
--tsx
  生成 tsx 风格的文件
-l
--locale
  需要支持国际化
`)])],-1)])),_:1})]),d("div",z,[d("h3",w,[l(s,{to:"#fa1bu4qian2zhu4yi4"},{default:o(()=>t[57]||(t[57]=[e("#")])),_:1}),t[58]||(t[58]=e("发布前注意"))]),t[59]||(t[59]=d("ol",null,[d("li",null,[d("code",null,"npm"),e(" 的仓库源必须指向 "),d("code",null,"npm"),e(" 官方镜像")]),d("li",null,[e("执行 "),d("code",null,"npm login"),e(" 进行登录")])],-1))]),d("div",N,[d("h3",R,[l(s,{to:"#wen4da2"},{default:o(()=>t[60]||(t[60]=[e("#")])),_:1}),t[61]||(t[61]=e("问答"))]),t[63]||(t[63]=d("h4",null,"如何解决安装 sharp 失败的问题 ?",-1)),t[64]||(t[64]=d("ul",null,[d("li",null,"您可以选择更改包含 sharp 和 libvips 二进制文件的镜像站点")],-1)),l(n,null,{default:o(()=>t[62]||(t[62]=[d("pre",{class:"hljs"},[d("code",null,`pnpm config set sharp_binary_host "https://npmmirror.com/mirrors/sharp"
pnpm config set sharp_libvips_binary_host "https://npmmirror.com/mirrors/sharp-libvips"
`)],-1)])),_:1})])])}const U=a(c,[["render",M]]);export{U as default};
