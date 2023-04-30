# 组件库快速成型工具

### 介绍

开箱即用的 `Vue3组件库` 快速成型工具，提供了一系列命令和工具去解决组件库开发上的问题。

### 特性

- 📦 &nbsp;开箱即用的组件库开发环境
- 📦 &nbsp;开箱即用的组件库编译工具，支持导出 `esm`, `cjs`, `umd` 三种模块代码
- 🛠️ &nbsp;基于配置文件的组件库文档站点，支持百度统计和主题定制
- 🛠️ &nbsp;支持 `sfc` 和 `tsx` 两种风格的组件库编写风格
- 📦 &nbsp;开箱即用的代码检查工具
- 📦 &nbsp;开箱即用的单元测试工具
- 📦 &nbsp;开箱即用的代码发布工具,同时发布到 `npm` 和 `github`, 并自动生成更新日志
- 💪 &nbsp;支持 `VSCode` 插件开发
- 💪 &nbsp;支持 `字体图标打包`
- 💪 &nbsp;支持 `Typescript`
- 💪 &nbsp;支持 `暗黑模式`
- 🌍 &nbsp;支持 `国际化`
- 🚀 &nbsp;基于 `pnpm`

### 快速开始

`@varlet/cli` 内置了 `sfc` 和 `tsx` 两种风格的组件库项目模板，可以通过 `gen` 命令直接生成。
方便您直接进入组件库开发。

```shell
# playground-ignore
pnpm add @varlet/cli -g
varlet-cli gen
```

## 高级定制

### 配置文件

项目根目录下的 `varlet.config.mjs` 用来管理整个组件库项目的具体细节。
默认配置可查阅 [varlet.default.config.ts](https://github.com/varletjs/varlet/blob/dev/packages/varlet-cli/src/node/config/varlet.default.config.ts)。
也可以参考 `@varlet/ui` 的 [varlet.config.mjs](https://github.com/varletjs/varlet/blob/dev/packages/varlet-ui/varlet.config.mjs)。

| 参数 | 说明 | 类型 | 默认值 |
| -- | -------------- | -------- | ---------- |
| `name` | 组件库全名，会作为包名 | _string_ | `Varlet` |
| `namespace` | 组件库命名空间, 会作为组件前缀 | _string_ | `var` |
| `host` | 开发服务器主机 | _number_ | `localhost` |
| `port` | 开发服务器端口 | _number_ | `8080` |
| `title` | 文档中组件库的标题 | _string_ | `VARLET` |
| `logo` | 文档中组件库的logo | _string_ | `-` |
| `defaultLanguage` | 文档默认语言 | _string_ | `zh-CN` |
| `useMobile` | 是否显示右侧手机预览 | _boolean_ | `false` |
| `lightTheme` | 亮色模式文档主题 | _Record<string, any>_ | `-` |
| `darkTheme` | 暗黑模式文档主题 | _Record<string, any>_ | `-` |
| `highlight` | 文档代码片段样式相关 | _{ style: string }_ | `-` |
| `analysis` | 文档统计相关 | _{ baidu: string }_ | `-` |
| `pc` | pc 端文档结构配置 | _Record<string, any>_ | `-` |
| `mobile` | mobile 端文档结构配置 | _Record<string, any>_ | `-` |
| `directives` | 组件库指令文件夹名称 | _string[]_ | `[]` |
| `copy` | 复制文件配置 | _[CopyPath[]](https://github.com/varletjs/varlet/blob/dev/packages/varlet-vite-plugins/src/copy.ts)_ | `-` |
| `icons` | 字体图标打包相关配置 | _[VarletConfigIcons](https://github.com/varletjs/varlet/blob/dev/packages/varlet-cli/src/node/config/varlet.config.ts)_ | `-` |


#### Menu

| 参数 | 说明 | 类型 | 默认值 |
| -- | -------------- | -------- | ---------- |
| `doc` | 文档页面应匹配的文件名称, 必填 | _string_ | `-` |
| `type` | menu 类型, 当 type 为 `1` 时表示分类 menu, 类型为 `2` 时 doc 字段匹配 src 下的组件文件, 类型为`3`时 doc 字段匹配 docs 下的 md 文件 | _MenuTypes_ | `-` |
| `text` | menu 所展示的文字, 当设置国际化时可配置英文展示文字 | _Record<string, string>_ | `-` |
| `useMobile` | 是否在当前文档页显示右侧手机预览, 如不填写, 默认取 config 中的 useMobile | _boolean_ | `-` |

### 自定义页面

如果想在组件库中插入其他页面，可以在项目根目录下的创建 `pages` 文件夹编写 vue 组件， 用来生成其他的页面。
目录结构如下：

```text
// playground-ignore
|-- varlet-ui
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
```

生成的路由如下：

```text
// playground-ignore
/zh-CN/sponsor
/en-US/contributor
/zh-CN/changelog
/en-US/changelog
```

### 命令相关

#### 启动开发服务器

```shell
# playground-ignore
varlet-cli dev
# force mode
varlet-cli dev -f
# draft mode
varlet-cli dev -d
```

#### 构建文档站点

```shell
# playground-ignore
varlet-cli build
```

#### 预览文档站点

```shell
# playground-ignore
varlet-cli preview
```

#### 构建组件库

```shell
# playground-ignore
varlet-cli compile
```

#### 启动 VSCode 插件开发环境

```shell
# playground-ignore
varlet-cli dev:extension
```

#### 构建 VSCode 插件

```shell
# playground-ignore
varlet-cli build:extension
```

#### 打包字体图标

```shell
# playground-ignore
varlet-cli build:icons
```

#### 执行所有的单元测试

```shell
# playground-ignore
varlet-cli test
```

#### 以 watch 模式执行单元测试

```shell
# playground-ignore
varlet-cli test -w
or
varlet-cli test -wa
```

#### 检查代码

```shell
# playground-ignore
varlet-cli lint
```

#### 校验提交信息

```shell
# playground-ignore
varlet-cli commit-lint
```

#### 显示检查清单

```shell
# playground-ignore
varlet-cli checklist
```

#### 生成更新日志

```shell
# playground-ignore
varlet-cli changelog
```

#### 发布组件库

```shell
# playground-ignore
varlet-cli release
```

#### 生成一个项目模板

```shell
# playground-ignore
varlet-cli gen

# Options
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
```

#### 创建组件模板文件

```shell
# playground-ignore
varlet-cli create

# Options
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
```

### 发布前注意

- 1.`npm` 的仓库源必须指向 `npm` 官方镜像
- 2.执行 `npm login` 进行登录