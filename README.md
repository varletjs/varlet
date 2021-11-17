<div align="center">
  <a href="https://varlet.gitee.io/varlet-ui/">
    <img src="https://varlet.gitee.io/varlet-ui/varlet_icon.png" width="150">
  </a>
  <h1>VARLET</h1>
  <p>基于Vue3的Material design风格移动端组件库</p>
  <p>
    <a href="https://varlet.gitee.io/varlet-ui/">开发文档</a> | <a href="https://github.com/haoziqaq/varlet/blob/dev/README.en-US.md">English</a>
  </p>
  <p>
    <img src="https://img.shields.io/npm/v/@varlet/ui?style=flat-square" alt="version">
    <img src="https://img.shields.io/github/stars/haoziqaq/varlet" alt="ci">
    <img src="https://img.shields.io/badge/vue-v3.2.0%2B-%23407fbc" alt="vue">
    <img src="https://img.shields.io/npm/l/@varlet/ui.svg" alt="licence">
    <img src="https://img.shields.io/codecov/c/github/haoziqaq/varlet" alt="coverage">
    <img src="https://img.badgesize.io/https://unpkg.com/@varlet/ui/umd/varlet.js?compression=gzip&label=gzip" alt="gzip" />
    <img src="https://github.com/haoziqaq/varlet/workflows/CI/badge.svg" alt="ci">
  </p>
</div>

---

### 介绍

Varlet是一个基于`Vue3`开发的Material风格移动端组件库，全面拥抱`Vue3`生态，由社区建立起来的组件库团队进行维护。

### 特性
1. 提供50个高质量通用组件
2. 组件十分轻量
3. 由国人开发，完善的中英文文档和后勤保障
4. 支持按需引入
5. 支持主题定制
6. 支持国际化
7. 支持webstorm，vscode组件属性高亮
8. 支持SSR
9. 支持Typescript
10. 90%以上单元测试覆盖率，提供稳定性保证
11. 支持暗黑模式

### 安装

### CDN
`varlet.js`包含组件库的所有样式和逻辑，引入即可。

```html
<div id="app"></div>
<script src="https://cdn.jsdelivr.net/npm/vue@next"></script>
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
# 通过npm或yarn安装

# npm
npm i @varlet/ui -S

# yarn
yarn add @varlet/ui
```

```js
import App from './App.vue'
import Varlet from '@varlet/ui'
import { createApp } from 'vue'
import '@varlet/ui/es/style.js'

createApp(App).use(Varlet).mount('#app')
```

