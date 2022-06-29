# Varlet Cli

### 介绍

开箱即用的 `Vue3组件库` 快速成型工具，提供了一系列命令和工具去解决组件库开发上的问题

### 特性

- 📦 开箱即用的组件库开发环境
- 📦 开箱即用的组件库编译工具，支持导出 `esm` 和 `umd` 两种模块代码
- 🛠️ 基于配置文件的组件库文档站点，支持百度统计和主题定制
- 🛠️ 支持 `单文件组件(sfc)` 和 `tsx，jsx` 两种风格的组件库编写风格
- 📦 开箱即用的代码检查工具
- 📦 开箱即用的单元测试工具
- 📦 开箱即用的代码发布工具,发布到 npm 和 github, 并自动生成更新日志
- 💪 支持 `Typescript`
- 💪 支持 `暗黑模式`
- 🚀 基于 `pnpm`

### 快速开始

`@varlet/cli` 内置了 `单文件组件(sfc)` 和 `tsx，jsx` 两种风格的组件库项目模板，可以通过 `gen` 命令直接生成。
帮助用户直接进入组件本身的开发，推荐使用 `pnpm` 作为包管理工具。

```shell
# playground-ignore
# 安装命令行工具
pnpm add @varlet/cli -g
# 使用 gen 命令生成项目
varlet-cli gen 项目名
cd 项目名
pnpm install
pnpm dev
```

然后通过简单修改一些组件库模板的基础信息，就可以开始组件库的开发了

## 高级定制

### 配置文件

项目根目录下的 `varlet.config.js` 用来管理整个组件库项目的具体细节

| 参数 | 说明 | 类型 | 默认值 |
| ----- | -------------- | -------- | ---------- |
| `host` | 开发服务器主机 | _number_ | `localhost` |
| `port` | 开发服务器端口 | _number_ | `8080` |
| `name` | 组件库全名	| _string_ | `Varlet` |
| `namespace` | 组件库命名空间, 会作为组件前缀 | _string_ | `var` |
| `title` | 文档中组件库的标题 | _string_ | `VARLET` |
| `logo` | 文档中组件库的logo | _string_ | `-` |
| `defaultLanguage` | 文档默认语言 | _string_ | `zh-CN` |
| `useMobile` | 是否显示右侧手机预览 | _boolean_ | `false` |
| `themes` | 文档主题 | _SiteThemes_ | `-` |
| `darkThemes` | 暗黑模式文档主题 | _SiteThemes_ | `-` |
| `highlight` | 文档代码片段样式相关 | _SiteHighlight_ | `-` |
| `analysis` | 文档统计相关 | _SiteAnalysis_ | `-` |
| `pc` | pc端文档结构配置 | _SitePC_ | `-` |
| `mobile` | mobile端文档结构配置 | _SiteMobile_ | `-` |
| `moduleCompatible` | 模块兼容配置 | _Record<string, string>_ | `-` |

### 模块适配对象

一些外部依赖可能需要进行模块语法的适配，以达到可以正确编译到 `commonjs` 和 `esmodule` 的目的，例如 `dayjs` 的 `esmodule` 写法是

```js
// playground-ignore
import dayjs from 'dayjs/esm'
```

而为了构建 `commonjs` 时的写法是

```js
// playground-ignore
import * as dayjs from 'dayjs'
```

在项目中我们拥抱 `esmodule` 模块使用第一种写法，并做如下配置进行适配

```js
// playground-ignore
// varlet.config.js
module.exports = {
  moduleCompatible: {
    "import dayjs from 'dayjs/esm'\n": "import * as dayjs from 'dayjs'\n"
  }
}
```

### SiteThemes

主题变量相关，由于默认的主题变量可能时常修改，以 `varlet` 官方文档的主题为准

| 参数 |
| ----- |
| `color-body` |
| `color-bar` |
| `color-sub-bar` |
| `color-text` |
| `color-sub-text` |
| `color-border` |
| `color-shadow` |
| `color-introduce-border` |
| `color-primary` |
| `color-link` |
| `color-type` |
| `color-progress` |
| `color-progress-track` |
| `color-side-bar` |
| `color-side-bar-active-background` |
| `color-app-bar` |
| `color-nav-button-hover-background` |
| `color-mobile-cell-hover` |
| `color-pc-language-active` |
| `color-pc-language-active-background` |
| `color-mobile-language-active` |
| `color-mobile-language-active-background` |
| `color-hl-background` |
| `color-hl-code` |
| `color-hl-border` |
| `color-hl-group-a` |
| `color-hl-group-b` |
| `color-hl-group-c` |
| `color-hl-group-d` |
| `color-hl-group-e` |
| `color-hl-group-f` |
| `color-hl-group-g` |
| `color-hl-group-h` |
| `color-hl-group-i` |

### SiteHighlight

代码片段高亮，基于[highlight.js](https://highlightjs.org/)

| 参数 | 说明 | 类型 | 默认值 |
| ----- | -------------- | -------- | ---------- |
| `style` | highlight的css地址 | _string_ | `-` |

### SiteAnalysis

统计埋点相关

| 参数 | 说明 | 类型 | 默认值 |
| ----- | -------------- | -------- | ---------- |
| `baidu` | 百度统计脚本地址 | _string_ | `-` |

### SitePC, SiteMobile

文档结构部分相关，示例配置如下

```js
// playground-ignore
module.exports = {
  pc: {
    redirect: '/home',
    title: {
      'zh-CN': '一个组件库',
    },
    header: {
      darkMode: null,
      versions: null,
      i18n: null,
      github: 'https://github.com/varletjs/varlet',
    },
    menu: [
      {
        text: {
          'zh-CN': '开发指南',
        },
        // 侧边栏菜单目录
        type: 1,
      },
      {
        text: {
          'zh-CN': '基本介绍',
        },
        doc: 'home',
        // 索引项目根目录下的md文档
        type: 3,
      },
      {
        text: {
          'zh-CN': '基础组件',
        },
        type: 1,
      },
      {
        text: {
          'zh-CN': 'Button 按钮',
        },
        doc: 'button',
        // 索引组件根目录下的md文档
        type: 2,
      },
    ],
  },
  mobile: {
    redirect: '/home',
    title: {
      'zh-CN': '一个组件库',
    },
    header: {
      darkMode: null,
      i18n: null,
      playground: null,
      github: 'https://github.com/varletjs/varlet',
    },
  },
}
```

### 命令相关

#### 启动开发服务器

```shell
# playground-ignore
varlet-cli dev
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

#### 构建组件库代码

```shell
# playground-ignore
varlet-cli compile
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
varlet-cli gen <projectName>
```

#### 创建组件模板文件

```shell
# playground-ignore
varlet-cli create <componentName>
```

### Babel

对 `babel` 进行配置，首先在 `package.json` 中指定目标浏览器

```json
// playground-ignore
{
  "browserslist": [
    "Chrome >= 51",
    "iOS >= 10"
  ]
}
```

创建 `babel.config,js`

```js
// playground-ignore
// babel.config.js
module.exports = {
  presets: [
    [
      '@varlet/cli/preset',
      {
        loose: process.env.NODE_ENV === 'compile',
      },
    ],
  ],
}
```

### Git 和 Npm

#### Git-hook

`simple-git-hooks`，`lint-staged` 配合 `eslint`，`stylelint`，`varlet-cli commit-lint` 做commit前的检查，`package.json` 配置如下

```json
// playground-ignore
{
  "simple-git-hooks": {
    "pre-commit": "pnpm exec lint-staged --allow-empty --concurrent false",
    "commit-msg": "npx --no-install varlet-cli commit-lint $1"
  },
  "lint-staged": {
    "*.{ts,tsx,js,vue,less}": "prettier --write",
    "*.{ts,tsx,js,vue}": "eslint --fix",
    "*.{vue,css,less}": "stylelint --fix"
  },
  "eslintConfig": {
    "root": true,
    "ignorePatterns": [
      "es/**",
      "umd/**",
      "site/**",
      "public/**",
      "src/*/__tests__/**",
      ".varlet/**"
    ],
    "extends": [
      "@varlet"
    ]
  },
  "stylelint": {
    "extends": [
      "@varlet/stylelint-config"
    ],
    "ignoreFiles": [
      "es/**",
      "umd/**",
      "site/**",
      "coverage/**",
      "public/**",
      "highlight/**"
    ]
  }
}
```

挂载钩子

```shell
# playground-ignore
npx simple-git-hooks
```

创建 `.prettierignore`

```text
// playground-ignore
// .prettierignore
coverage/**
es/**
umd/**
site/**
public/**
src/*/__tests__/**
*.md
```

### Typescript

创建 `tsconfig.json`

```json
// playground-ignore
{
  "compilerOptions": {
    "strict": true,
    "downlevelIteration": true,
    "declaration": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowJs": true,
    "lib": ["esnext", "dom"],
    "allowSyntheticDefaultImports": true,
    "jsx": "preserve"
  }
}
```

### 发布前注意

- 1.`npm` 的仓库源必须指向 `npm` 官方镜像
- 2.执行 `npm login` 进行登录