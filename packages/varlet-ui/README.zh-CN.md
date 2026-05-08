
<div align="center">
  <a href="https://varletjs.org">
    <img src="https://varletjs.org/logo.svg" width="150">
  </a>
  <h1>VARLET</h1>
  <p>一个 Vue3 组件库，基于 Material Design 2 和 3，支持移动端、桌面端。</p>
  <p>
    <a href="https://varletjs.org">文档</a> | 
    <a href="https://github.com/varletjs/varlet/blob/dev/README.md">ENGLISH README</a>
  </p>
  <p>
    <img src="https://img.shields.io/npm/v/@varlet/ui?style=flat-square" alt="version">
    <img src="https://img.shields.io/github/stars/varletjs/varlet" alt="stars">
    <img src="https://img.shields.io/badge/vue-v3.2.0%2B-%23407fbc" alt="vue">
    <img src="https://img.shields.io/npm/l/@varlet/ui.svg" alt="licence">
    <img src="https://img.shields.io/codecov/c/github/varletjs/varlet" alt="coverage">
  </p>
</div>

---

### 介绍

Varlet 是一个 `Vue3` 组件库，基于 Material Design 2 和 3，支持移动端、桌面端，由 `varletjs` 组织维护。

### 特性

- 🚀 &nbsp; 提供 60+ 个高质量通用组件
- 🚀 &nbsp; 组件十分轻量
- 💪 &nbsp; 由国人开发，完善的中英文文档和后勤保障
- 🛠️ &nbsp; 支持按需引入
- 🛠️ &nbsp; 支持主题定制
- 🌍 &nbsp; 支持国际化
- 💡 &nbsp; 支持 webstorm 组件属性高亮
- 💪 &nbsp; 支持 SSR
- 📦 &nbsp; 支持 [Nuxt Module](https://github.com/varletjs/varlet-nuxt)
- 💡 &nbsp; 支持 Typescript
- 💪 &nbsp; 确保 90% 以上单元测试覆盖率，提供稳定性保证
- 🎨 &nbsp; 同时支持 Material Design 2 和 Material Design 3 两套设计系统
- 🛠️ &nbsp; 支持暗黑模式
- 🔧 &nbsp; 提供官方的 VSCode 插件
- ⌨️ &nbsp; 支持无障碍访问（持续改进中）

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
| [@varlet/import-resolver](https://github.com/varletjs/varlet/tree/dev/packages/varlet-import-resolver)  | [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components) `的一个解析器，用于实现 Varlet 按需引入`   |
| [@varlet/preset-unocss](https://github.com/varletjs/varlet/tree/dev/packages/varlet-preset-unocss)  | `varlet 的` [UnoCss](https://unocss.dev/) `预设` |
| [@varlet/preset-tailwindcss](https://github.com/varletjs/varlet/tree/dev/packages/varlet-preset-tailwindcss)  | `varlet 的` [tailwindcss](https://tailwindcss.com/) `预设` |
| [varlet-theme-builder](https://github.com/varletjs/varlet-theme-builder) | `主题生成器，用于为 varlet material design 3 生成主题变量` | 
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
| [vue3-varlet-mobile](https://github.com/vue-zone/vue3-varlet-mobile) | `基于 Vue 3 和 Varlet 组件库的移动模板` |

### 演练场

在 [Varlet UI Playground](https://varletjs.org/playground) 对组件进行在线编辑。

### 贡献

请参考 [Contributing Guide](https://github.com/varletjs/varlet/blob/dev/.github/CONTRIBUTING.md)。

### 反馈和交流

我们推荐使用 [issue](https://github.com/varletjs/varlet/issues) 列表进行最直接有效的反馈，也可以下面的方式

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

赞助本项目，支持我们更好的创作。

#### 微信 / 支付宝

<img style="width: 25%" src="https://cdn.jsdelivr.net/gh/varletjs/varlet-static/wechat.jpg" />
<img style="width: 25%" src="https://cdn.jsdelivr.net/gh/varletjs/varlet-static/alipay.jpg" />
