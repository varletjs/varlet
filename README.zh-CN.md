<div align="center">
    <img src="https://varlet.gitee.io/varlet-ui/varlet_block.png" width="200" style="display: block; margin-bottom: 10px;">
    <div style="color: #2979ff; font-size: 32px; margin-top: 10px; text-align: center">VARLET</div>
    <div style="color: #888; font-size: 14px; margin-top: 10px; text-align: center">
      面向Vue3的Material风格移动端组件库
    </div>
</div>

---

### 介绍

Varlet是一个基于`Vue3`开发的Material风格移动端组件库，全面拥抱`Vue3`生态，由社区几个不知天高地厚的小伙伴开发和维护。

### 特性
- 1.提供40多个高质量通用组件
- 2.组件十分轻量
- 3.由国人开发，完善的中英文文档和后勤保障
- 4.支持按需引入
- 5.支持主题定制
- 6.支持国际化
- 7.支持webstorm，vscode组件属性高亮
- 8.支持SSR

### 安装

### CDN
`varlet.js`包含组件库的所有样式和逻辑, 引入即可。

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

### Webpack/Vite
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
import '@varlet/ui/es/style'

createApp(App).use(Varlet).mount('#app')
```

