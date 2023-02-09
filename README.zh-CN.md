
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

- 🚀 &nbsp; 提供 50+ 个高质量通用组件
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

### 游乐场

在 [Varlet UI Playground](https://varlet.gitee.io/varlet-ui-playground) 对组件进行在线编辑。

### 贡献

请参考 [Contributing Guide](https://github.com/varletjs/varlet/blob/dev/.github/CONTRIBUTING.md)。

### 在 Cloud IDE 中进行在线开发和调试

在 [Cloud IDE](https://idegithub.com/varletjs/varlet) 对源码进行在线调试。


### 反馈和交流

我们推荐使用`issue`列表进行最直接有效的反馈，也可以下面的方式

* 微信

<img style="width: 25%" src="https://github.com/varletjs/varlet/blob/dev/sponsor/community.png?raw=true" />

* 加入 [Discord](https://discord.gg/Dmb8ydBHkw) 社区交流

### 感谢贡献者们做出的努力

<a href="https://github.com/varletjs/varlet/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=varletjs/varlet" />
</a>
