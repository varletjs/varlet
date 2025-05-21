import{_ as i,b as s,e as a,m as r,p as t,q as d,w as o,P as e,Z as n}from"./index-vwO9GBzB.js";const h={components:{}},_={class:"varlet-site-doc"},u=t("h1",null,"组件库快速成型工具",-1),p={class:"card"},g={id:"jie4shao4"},m=t("p",null,[e("开箱即用的 "),t("code",null,"Vue3组件库"),e(" 快速成型工具，提供了一系列命令和工具去解决组件库开发上的问题。")],-1),v={class:"card"},f={id:"te4xing4"},b=n("<ul><li>📦  开箱即用的组件库开发环境</li><li>📦  开箱即用的组件库编译工具，支持导出 <code>esm</code>, <code>cjs</code>, <code>umd</code> 三种模块代码</li><li>🛠️  基于配置文件的组件库文档站点，支持百度统计和主题定制</li><li>🛠️  支持 <code>sfc</code> 和 <code>tsx</code> 两种风格的组件库编写风格</li><li>📦  开箱即用的代码检查工具</li><li>📦  开箱即用的单元测试工具</li><li>📦  开箱即用的代码发布工具,同时发布到 <code>npm</code> 和 <code>github</code>, 并自动生成更新日志</li><li>💪  支持 <code>VSCode</code> 插件开发</li><li>💪  支持 <code>字体图标打包</code></li><li>💪  支持 <code>Typescript</code></li><li>💪  支持 <code>暗黑模式</code></li><li>🌍  支持 <code>国际化</code></li><li>🚀  基于 <code>pnpm</code></li></ul>",1),y={class:"card"},j={id:"kuai4su4kai1shi3"},x=t("p",null,[t("code",null,"@varlet/cli"),e(" 内置了 "),t("code",null,"sfc"),e(" 和 "),t("code",null,"tsx"),e(" 两种风格的组件库项目模板，可以通过 "),t("code",null,"gen"),e(" 命令直接生成。 方便您直接进入组件库开发。")],-1),k=t("pre",{class:"hljs"},[t("code",null,`pnpm add @varlet/cli -g
varlet-cli gen
`)],-1),C=t("h2",null,"高级定制",-1),V={class:"card"},z={id:"pei4zhi4wen2jian4"},w=n('<p>项目根目录下的 <code>varlet.config.mjs</code> 用来管理整个组件库项目的具体细节。 默认配置可查阅 <a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-cli/src/node/config/varlet.default.config.ts">varlet.default.config.ts</a>。 也可以参考 <code>@varlet/ui</code> 的 <a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-ui/varlet.config.mjs">varlet.config.mjs</a>。</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>name</code></td><td>组件库全名，会作为包名</td><td><em>string</em></td><td><code>Varlet</code></td></tr><tr><td><code>namespace</code></td><td>组件库命名空间, 会作为组件前缀</td><td><em>string</em></td><td><code>var</code></td></tr><tr><td><code>host</code></td><td>开发服务器主机</td><td><em>number</em></td><td><code>localhost</code></td></tr><tr><td><code>port</code></td><td>开发服务器端口</td><td><em>number</em></td><td><code>8080</code></td></tr><tr><td><code>title</code></td><td>文档中组件库的标题</td><td><em>string</em></td><td><code>VARLET</code></td></tr><tr><td><code>logo</code></td><td>文档中组件库的logo</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>defaultLanguage</code></td><td>文档默认语言</td><td><em>string</em></td><td><code>zh-CN</code></td></tr><tr><td><code>useMobile</code></td><td>是否显示右侧手机预览</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>lightTheme</code></td><td>亮色模式文档主题</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>darkTheme</code></td><td>暗黑模式文档主题</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>highlight</code></td><td>文档代码片段样式相关</td><td><em>{ style: string }</em></td><td><code>-</code></td></tr><tr><td><code>analysis</code></td><td>文档统计相关</td><td><em>{ baidu: string }</em></td><td><code>-</code></td></tr><tr><td><code>pc</code></td><td>pc 端文档结构配置</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>mobile</code></td><td>mobile 端文档结构配置</td><td><em>Record&lt;string, any&gt;</em></td><td><code>-</code></td></tr><tr><td><code>directives</code></td><td>组件库指令文件夹名称</td><td><em>string[]</em></td><td><code>[]</code></td></tr><tr><td><code>copy</code></td><td>复制文件配置</td><td><em><a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-vite-plugins/src/copy.ts">CopyPath[]</a></em></td><td><code>-</code></td></tr><tr><td><code>icons</code></td><td>字体图标打包相关配置</td><td><em><a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-cli/src/node/config/varlet.config.ts">VarletConfigIcons</a></em></td><td><code>-</code></td></tr><tr><td><code>esbuild</code></td><td>Esbuild 配置</td><td><em><a href="https://github.com/varletjs/varlet/blob/dev/packages/varlet-cli/src/node/config/varlet.config.ts">VarletConfigEsbuild</a></em></td><td><code>-</code></td></tr></tbody></table><h4>Menu</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>doc</code></td><td>文档页面应匹配的文件名称, 必填</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>type</code></td><td>menu 类型, 当 type 为 <code>1</code> 时表示分类 menu, 类型为 <code>2</code> 时 doc 字段匹配 src 下的组件文件, 类型为<code>3</code>时 doc 字段匹配 docs 下的 md 文件</td><td><em>MenuTypes</em></td><td><code>-</code></td></tr><tr><td><code>text</code></td><td>menu 所展示的文字, 当设置国际化时可配置英文展示文字</td><td><em>Record&lt;string, string&gt;</em></td><td><code>-</code></td></tr><tr><td><code>useMobile</code></td><td>是否在当前文档页显示右侧手机预览, 如不填写, 默认取 config 中的 useMobile</td><td><em>boolean</em></td><td><code>-</code></td></tr></tbody></table>',4),N={class:"card"},S={id:"zi4ding4yi4ye4mian4"},R=t("p",null,[e("如果想在组件库中插入其他页面，可以在项目根目录下的创建 "),t("code",null,"pages"),e(" 文件夹编写 vue 组件， 用来生成其他的页面。 目录结构如下：")],-1),T=t("pre",{class:"hljs"},[t("code",null,`|-- varlet-ui
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
`)],-1),M=t("p",null,"生成的路由如下：",-1),q=t("pre",{class:"hljs"},[t("code",null,`/zh-CN/sponsor
/en-US/contributor
/zh-CN/changelog
/en-US/changelog
`)],-1),E={class:"card"},U={id:"ming4ling4xiang1guan1"},$=t("h4",null,"启动开发服务器",-1),B=t("pre",{class:"hljs"},[t("code",null,[e(`varlet-cli dev
`),t("span",{class:"hljs-meta"},"#"),t("span",{class:"bash"}," force mode"),e(`
varlet-cli dev -f
`),t("span",{class:"hljs-meta"},"#"),t("span",{class:"bash"}," draft mode"),e(`
varlet-cli dev -d
`)])],-1),L=t("h4",null,"构建文档站点",-1),O=t("pre",{class:"hljs"},[t("code",null,`varlet-cli build
`)],-1),P=t("h4",null,"预览文档站点",-1),A=t("pre",{class:"hljs"},[t("code",null,`varlet-cli preview
`)],-1),I=t("h4",null,"构建组件库",-1),Z=t("pre",{class:"hljs"},[t("code",null,`varlet-cli compile
`)],-1),D=t("h4",null,"启动 VSCode 插件开发环境",-1),F=t("pre",{class:"hljs"},[t("code",null,`varlet-cli dev:extension
`)],-1),G=t("h4",null,"构建 VSCode 插件",-1),H=t("pre",{class:"hljs"},[t("code",null,`varlet-cli build:extension
`)],-1),J=t("h4",null,"打包字体图标",-1),K=t("pre",{class:"hljs"},[t("code",null,`varlet-cli build:icons
`)],-1),Q=t("h4",null,"执行所有的单元测试",-1),W=t("pre",{class:"hljs"},[t("code",null,`varlet-cli test
`)],-1),X=t("h4",null,"以 watch 模式执行单元测试",-1),Y=t("pre",{class:"hljs"},[t("code",null,`varlet-cli test -w
`)],-1),tt=t("h4",null,"执行所有的单元测试并报告覆盖率",-1),et=t("pre",{class:"hljs"},[t("code",null,`varlet-cli test -cov
`)],-1),dt=t("h4",null,"检查代码",-1),ot=t("pre",{class:"hljs"},[t("code",null,`varlet-cli lint
`)],-1),lt=t("h4",null,"校验提交信息",-1),ct=t("pre",{class:"hljs"},[t("code",null,`varlet-cli commit-lint
`)],-1),st=t("h4",null,"显示检查清单",-1),nt=t("pre",{class:"hljs"},[t("code",null,`varlet-cli checklist
`)],-1),it=t("h4",null,"生成更新日志",-1),at=t("pre",{class:"hljs"},[t("code",null,`varlet-cli changelog
`)],-1),rt=t("h4",null,"发布组件库",-1),ht=t("pre",{class:"hljs"},[t("code",null,`varlet-cli release
`)],-1),_t=t("h4",null,"生成一个项目模板",-1),ut=t("pre",{class:"hljs"},[t("code",null,[e(`varlet-cli gen
`),t("span",{class:"hljs-meta"},`
#`),t("span",{class:"bash"}," Options"),e(`
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
`)])],-1),pt=t("h4",null,"创建组件模板文件",-1),gt=t("pre",{class:"hljs"},[t("code",null,[e(`varlet-cli create
`),t("span",{class:"hljs-meta"},`
#`),t("span",{class:"bash"}," Options"),e(`
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
`)])],-1),mt={class:"card"},vt={id:"fa1bu4qian2zhu4yi4"},ft=t("ul",null,[t("li",null,[e("1."),t("code",null,"npm"),e(" 的仓库源必须指向 "),t("code",null,"npm"),e(" 官方镜像")]),t("li",null,[e("2.执行 "),t("code",null,"npm login"),e(" 进行登录")])],-1),bt={class:"card"},yt={id:"wen4da2"},jt=t("blockquote",null,[t("p",null,"如何解决安装 sharp 失败的问题 ?")],-1),xt=t("ul",null,[t("li",null,"您可以选择更改包含 sharp 和 libvips 二进制文件的镜像站点")],-1),kt=t("pre",{class:"hljs"},[t("code",null,`pnpm config set sharp_binary_host "https://npmmirror.com/mirrors/sharp"
pnpm config set sharp_libvips_binary_host "https://npmmirror.com/mirrors/sharp-libvips"
`)],-1);function Ct(Vt,zt,wt,Nt,St,Rt){const c=s("router-link"),l=s("var-site-code-example");return a(),r("div",_,[u,t("div",p,[t("h3",g,[d(c,{to:"#jie4shao4"},{default:o(()=>[e("#")]),_:1}),e("介绍")]),m]),t("div",v,[t("h3",f,[d(c,{to:"#te4xing4"},{default:o(()=>[e("#")]),_:1}),e("特性")]),b]),t("div",y,[t("h3",j,[d(c,{to:"#kuai4su4kai1shi3"},{default:o(()=>[e("#")]),_:1}),e("快速开始")]),x,d(l,{"playground-ignore":""},{default:o(()=>[k]),_:1})]),C,t("div",V,[t("h3",z,[d(c,{to:"#pei4zhi4wen2jian4"},{default:o(()=>[e("#")]),_:1}),e("配置文件")]),w]),t("div",N,[t("h3",S,[d(c,{to:"#zi4ding4yi4ye4mian4"},{default:o(()=>[e("#")]),_:1}),e("自定义页面")]),R,d(l,{"playground-ignore":""},{default:o(()=>[T]),_:1}),M,d(l,{"playground-ignore":""},{default:o(()=>[q]),_:1})]),t("div",E,[t("h3",U,[d(c,{to:"#ming4ling4xiang1guan1"},{default:o(()=>[e("#")]),_:1}),e("命令相关")]),$,d(l,{"playground-ignore":""},{default:o(()=>[B]),_:1}),L,d(l,{"playground-ignore":""},{default:o(()=>[O]),_:1}),P,d(l,{"playground-ignore":""},{default:o(()=>[A]),_:1}),I,d(l,{"playground-ignore":""},{default:o(()=>[Z]),_:1}),D,d(l,{"playground-ignore":""},{default:o(()=>[F]),_:1}),G,d(l,{"playground-ignore":""},{default:o(()=>[H]),_:1}),J,d(l,{"playground-ignore":""},{default:o(()=>[K]),_:1}),Q,d(l,{"playground-ignore":""},{default:o(()=>[W]),_:1}),X,d(l,{"playground-ignore":""},{default:o(()=>[Y]),_:1}),tt,d(l,{"playground-ignore":""},{default:o(()=>[et]),_:1}),dt,d(l,{"playground-ignore":""},{default:o(()=>[ot]),_:1}),lt,d(l,{"playground-ignore":""},{default:o(()=>[ct]),_:1}),st,d(l,{"playground-ignore":""},{default:o(()=>[nt]),_:1}),it,d(l,{"playground-ignore":""},{default:o(()=>[at]),_:1}),rt,d(l,{"playground-ignore":""},{default:o(()=>[ht]),_:1}),_t,d(l,{"playground-ignore":""},{default:o(()=>[ut]),_:1}),pt,d(l,{"playground-ignore":""},{default:o(()=>[gt]),_:1})]),t("div",mt,[t("h3",vt,[d(c,{to:"#fa1bu4qian2zhu4yi4"},{default:o(()=>[e("#")]),_:1}),e("发布前注意")]),ft]),t("div",bt,[t("h3",yt,[d(c,{to:"#wen4da2"},{default:o(()=>[e("#")]),_:1}),e("问答")]),jt,xt,d(l,null,{default:o(()=>[kt]),_:1})])])}const Mt=i(h,[["render",Ct]]);export{Mt as default};
