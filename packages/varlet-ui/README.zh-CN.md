
<div align="center">
  <a href="https://varlet.gitee.io/varlet-ui">
    <img src="https://varlet.gitee.io/varlet-ui/logo.svg" width="150">
  </a>
  <h1>VARLET</h1>
  <p>基于 Vue3 的 Material design 风格移动端组件库</p>
  <p>
    <a href="https://varlet-varletjs.vercel.app">文档(Vercel)</a> | 
    <a href="https://varlet.gitee.io/varlet-ui">文档(Gitee)</a> |
    <a href="https://github.com/varletjs/varlet/blob/dev/README.md">ENGLISH README</a>
  </p>
  <p>
    <img src="https://img.shields.io/npm/v/@varlet/ui?style=flat-square" alt="version">
    <img src="https://img.shields.io/github/stars/varletjs/varlet" alt="stars">
    <img src="https://img.shields.io/badge/vue-v3.2.0%2B-%23407fbc" alt="vue">
    <img src="https://img.shields.io/npm/l/@varlet/ui.svg" alt="licence">
    <img src="https://img.shields.io/codecov/c/github/varletjs/varlet" alt="coverage">
    <img src="https://img.badgesize.io/https://unpkg.com/@varlet/ui/umd/varlet.js?compression=gzip&label=gzip" alt="gzip" />
    <img src="https://github.com/varletjs/varlet/workflows/CI/badge.svg" alt="ci">
  </p>
</div>

---

### 介绍

Varlet 是一个基于 `Vue3` 开发的 Material 风格移动端组件库，全面拥抱 `Vue3` 生态，由 `varletjs` 社区团队进行维护。

### 特性

- 🚀 &nbsp; 提供 60+ 个高质量通用组件
- 🚀 &nbsp; 组件十分轻量
- 💪 &nbsp; 由国人开发，完善的中英文文档和后勤保障
- 🛠️ &nbsp; 支持按需引入
- 🛠️ &nbsp; 支持主题定制
- 🌍 &nbsp; 支持国际化
- 💡 &nbsp; 支持 webstorm 组件属性高亮
- 💪 &nbsp; 支持 SSR
- 💡 &nbsp; 支持 Typescript
- 💪 &nbsp; 确保 90% 以上单元测试覆盖率，提供稳定性保证
- 🛠️ &nbsp; 支持暗黑模式
- 🛠️ &nbsp; 提供官方的 VSCode 插件

### 安装

### CDN
`varlet.js` 包含组件库的所有样式和逻辑，引入即可。

```html
<div id="app"></div>
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
 <!-- 桌面端兼容 -->
<script src="https://cdn.jsdelivr.net/npm/@varlet/touch-emulator/iife.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@varlet/ui/umd/varlet.js"></script>
<script>
  const app = Vue.createApp({
    template: '<var-button>按钮</var-button>'
  })
  app.use(Varlet).mount('#app')
</script>
```

### Webpack / Vite
```shell
# 通过 npm 或 yarn 或 pnpm 安装

# npm
npm i @varlet/ui -S

# yarn
yarn add @varlet/ui

# pnpm
pnpm add @varlet/ui
```

```js
import App from './App.vue'
import Varlet from '@varlet/ui'
import { createApp } from 'vue'
import '@varlet/ui/es/style'

createApp(App).use(Varlet).mount('#app')
```

### 官方生态

以下项目由官方团队长期维护。

| 名称                                                                                                   | 描述                       |
|------------------------------------------------------------------------------------------------------|--------------------------|
| [@varlet/cli](https://github.com/varletjs/varlet/tree/dev/packages/varlet-cli)                       | `Vue3 组件库快速成型工具`         |
| [@varlet/touch-emulator](https://github.com/varletjs/varlet/tree/dev/packages/varlet-touch-emulator) | `桌面端适配器，让移动端组件库可以在桌面端运行` |
| [@varlet/ui-playground](https://github.com/varletjs/varlet/tree/dev/packages/varlet-ui-playground)  | `Varlet 组件库在线编辑工具`       |
| [varlet-vscode-extension](https://github.com/varletjs/varlet/tree/dev/packages/varlet-vscode-extension)  | `Varlet 组件库 VSCode 插件`   |
| [vscode-theme-varlet](https://github.com/varletjs/vscode-theme-varlet)  | `Varlet VSCode 主题`   |
| [varlet-app-example](https://github.com/varletjs/varlet-app-template)  | `Varlet 组件库移动端模板`   |
| [varlet-install-example](https://github.com/varletjs/varlet-install-example)  | `Varlet 组件库与各种生态集成的案例集合`   |

### 社区生态

以下项目由社区人员维护，欢迎补充。

| 名称                                                             | 描述                                        |
|----------------------------------------------------------------|-------------------------------------------|
| [vue-h5-template](https://github.com/sunniejs/vue-h5-template) | `基于 Vue 的移动端模板脚手架，提供了 Varlet 组件库的移动端预设`   |
| [create-vite-app](https://github.com/ErKeLost/create-vite-app) | `基于 Vue3 的桌面端模板脚手架，提供了 Varlet 组件库的桌面端预设`  |
| [vscode-common-intellisense](https://github.com/Simon-He95/vscode-common-intellisense) | `为 Varlet 开发人员提供更好的智能感知的 VSCode 扩展` |

### 演练场

在 [Varlet UI Playground](https://varlet.gitee.io/varlet-ui-playground) 对组件进行在线编辑。

### 贡献

请参考 [Contributing Guide](https://github.com/varletjs/varlet/blob/dev/.github/CONTRIBUTING.md)。

### 反馈和交流

我们推荐使用`issue`列表进行最直接有效的反馈，也可以下面的方式

* 微信

<img style="width: 25%" src="https://cdn.jsdelivr.net/gh/varletjs/varlet-static/community.png" />

* 加入 [Discord](https://discord.gg/Dmb8ydBHkw) 社区交流

### 感谢贡献者们做出的努力

<a href="https://github.com/varletjs/varlet/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=varletjs/varlet" />
</a>

### 感谢以下赞助者

<a href="https://cdn.jsdelivr.net/gh/varletjs/varlet-static/sponsorkit/sponsors.svg">
  <img src="https://cdn.jsdelivr.net/gh/varletjs/varlet-static/sponsorkit/sponsors.svg">
</a>

### 赞助本项目

赞助本项目，支持我们更好的创作。推荐使用爱发电进行订阅，您的头像将出现在本项目中。

#### 爱发电

<a href="https://afdian.net/a/haoziqaq">https://afdian.net/a/haoziqaq</a>

#### 微信 / 支付宝

<img style="width: 25%" src="https://cdn.jsdelivr.net/gh/varletjs/varlet-static/wechat.jpg" />
<img style="width: 25%" src="https://cdn.jsdelivr.net/gh/varletjs/varlet-static/alipay.jpg" />