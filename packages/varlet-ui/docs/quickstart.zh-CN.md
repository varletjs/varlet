# 快速开始

### 介绍

这里为您介绍常见开发模式下接入组件库的最基本方式。

### 安装

#### CDN

`varlet.js` 包含组件库的所有样式和逻辑, 引入即可。

```html
<!-- playground-ignore -->
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

#### Webpack/Vite

```shell
# playground-ignore
# 通过 npm、yarn 或 pnpm 安装

# npm
npm i @varlet/ui -S

# yarn
yarn add @varlet/ui

# pnpm
pnpm add @varlet/ui
```

```js
// playground-ignore
import App from './App.vue'
import Varlet from '@varlet/ui'
import { createApp } from 'vue'
import '@varlet/ui/es/style'

createApp(App).use(Varlet).mount('#app')
```

### 支持桌面端

`Varlet` 是一个移动端优先的组件库，支持桌面端需要安装一个适配器，详情见[浏览器适配](#/zh-CN/browserAdaptation)。

### 选择设计系统

从 3.x 版本开始，Varlet 同时支持了 Material Design 2 和 Material Design 3 两种设计系统。

```js
// playground-ignore
// Varlet 默认为 Material Design 2 亮色模式
import { Themes, StyleProvider } from '@varlet/ui'

// Material Design 2 暗色模式
StyleProvider(Themes.dark)
// Material Design 3 亮色模式
StyleProvider(Themes.md3Light)
// Material Design 3 暗色模式
StyleProvider(Themes.md3Dark)
```

```css
// playground-ignore
body {
  transition: background-color .25s, color .25s;
  color: var(--color-text);
  background-color: var(--color-body);
}
```

### 在线体验组件

我们提供了网页版的组件编辑器，方便您对组件库的各个组件进行快速上手、在线编辑、分享给他人或是下载代码包本地运行。
您可以点击网页右上角的 `{...}` 图标或是 [这里前往](https://varletjs.org/playground)。