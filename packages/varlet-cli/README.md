# @varlet/cli

开箱即用的Vue3组件库快速成型工具，提供了一系列命令和工具去解决组件库开发上的问题

### 特性

- 1.开箱即用的组件库开发环境
- 2.开箱即用的组件库编译工具，支持导出`esm`和`umd`两种模块代码
- 3.基于配置文件的组件库文档站点,支持百度统计和主题定制
- 4.支持`单文件组件(sfc)`和`tsx,jsx`两种风格的组件库编写风格
- 5.开箱即用的代码检查工具
- 6.开箱即用的单元测试工具
- 7.开箱即用的代码发布工具,发布到npm和github,并自动生成更新日志
- 8.支持`typescript`

### 快速开始

虽然提供了一系列命令降低了组件库的开发门槛，但是又带来了新的问题，那就是需要学习这些命令是怎么用的，如何配置的。
为了解决这一问题，@varlet/cli内置了`单文件组件(sfc)`和`tsx, jsx`两种风格的组件库项目模板，可以通过`gen`命令直接生成。
帮助用户直接进入组件本身的开发，这里推荐使用`yarn`作为包管理工具，首先确保安装了`yarn`并且添加到系统环境变量中去，这里不展开介绍`yarn`的安装和配置方法。

```shell
# 安装命令行工具
yarn global add @varlet/cli
# 使用gen命令生成项目
varlet-cli gen 项目名
cd 项目名
yarn
yarn dev
```

然后通过简单修改一些组件库模板的基础信息，就可以开始组件库的开发了，

## 高级定制

### 配置文件

项目根目录下的`varlet.config.js`用来管理整个组件库项目的具体细节，

| 参数 | 说明 | 类型 | 默认值 |
| ----- | -------------- | -------- | ---------- |
| `host` | 开发服务器主机 | _number_ | `localhost` |
| `port` | 开发服务器端口 | _number_ | `8080` |
| `name` | 组件库全名	| _string_ | `Varlet` |
| `namespace` | 组件库命名空间, 会作为组件前缀 | _string_ | `var` |
| `title` | 文档中组件库的标题 | _string_ | `VARLET` |
| `logo` | 文档中组件库的logo | _string_ | `https://varlet.gitee.io/varlet-ui/varlet_icon.png` |
| `defaultLanguage` | 文档默认语言 | _string_ | `zh-CN` |
| `useMobile` | 是否显示右侧手机预览 | _boolean_ | `false` |
| `themes` | 文档主题 | _SiteThemes_ | `-` |
| `highlight` | 文档代码片段样式相关 | _SiteHighlight_ | `-` |
| `analysis` | 文档代码片段样式相关 | _SiteAnalysis_ | `-` |
| `pc` | pc端文档结构配置 | _SitePC_ | `-` |
| `mobile` | mobile端文档结构配置 | _SiteMobile_ | `-` |

#### SiteThemes

主题变量相关, 由于默认的主题变量可能时常修改，以`varlet`官方文档的主题为准

| 参数 |
| ----- |
| `color-primary` |
| `color-link` |
| `color-type` |
| `color-progress` |
| `color-side-bar` |
| `color-side-bar-active-background` |
| `color-app-bar` |
| `color-mobile-cell-hover` |
| `color-mobile-cell-hover-background` |

#### SiteHighlight

代码片段高亮, 基于[highlight.js](https://highlightjs.org/)

| 参数 | 说明 | 类型 | 默认值 |
| ----- | -------------- | -------- | ---------- |
| `style` | 百度统计脚本地址 | _string_ | `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css` |

#### SiteAnalysis

统计埋点相关

| 参数 | 说明 | 类型 | 默认值 |
| ----- | -------------- | -------- | ---------- |
| `baidu` | 百度统计脚本地址 | _string_ | `-` |

#### SitePC, SiteMobile

文档结构部分相关, 示例配置如下

```js
module.exports = {
  pc: {
    redirect: '/home',
    title: {
      'zh-CN': '一个组件库',
    },
    header: {
      i18n: null,
      github: 'https://github.com/haoziqaq/varlet',
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
      i18n: null,
    },
  },
}
```

### 命令相关

#### 启动开发服务器

```shell
varlet-cli dev
```

#### 构建文档站点

```shell
varlet-cli build
```

#### 构建组件库代码

```shell
varlet-cli compile
```

#### 执行所有的单元测试

```shell
varlet-cli test
```

#### 以watch模式执行单元测试

```shell
varlet-cli test -w
```

#### 检查代码

```shell
varlet-cli lint
```

#### 快速创建一个组件文件夹

```shell
varlet-cli create <componentName>
```

#### 生成一个项目模板
```shell
varlet-cli gen <projectName>
```

### babel

对babel进行配置，首先在package.json中指定目标浏览器

```json
{
  "browserslist": [
    "Chrome >= 51",
    "iOS >= 10"
  ]
}
```

创建babel.config,js

```js
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

### git和npm

#### git-hook

husky,lint-staged配合eslint,stylelint,commitlint做commit前的检查,package.json配置如下

```json
{
  "scripts": {
    "prepare": "husky install",
    "commit": "git-cz"
  },
  "config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
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

创建commitlint.config.js

```js
// commitlint.config.sj
module.exports = {
  extends: ['@commitlint/config-conventional'],
}
```

创建.prettierignore

```
// .prettierignore

coverage/**
es/**
umd/**
site/**
public/**
src/*/__tests__/**
*.md
```

### typescript

创建tsconfig.json

```json
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

### 发布代码

使用release-it和conventional-changelog进行代码发布和更新日志的生成, package.json配置如下

```json
{
  "scripts": {
    "genlog": "conventional-changelog -p angular -i CHANGELOG.md -s",
    "genAllLog": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0",
    "release": "yarn compile && release-it"
  },
  "release-it": {
    "git": {
      "changelog": "git log --pretty=format:\"* %s (%h)\" ${from}...${to}",
      "tagName": "v${version}",
      "commitMessage": "chore: release ${version}",
      "requireCleanWorkingDir": false
    },
    "plugins": {
      "@release-it/conventional-changelog": {
        "preset": "angular",
        "infile": "CHANGELOG.md"
      }
    }
  }
}
```

#### 发布前注意

- 1.npm和yarn的仓库源必须指向npm官方镜像
- 2.npm和yarn都必须执行login命令进行用户登录