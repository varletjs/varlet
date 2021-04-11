<div align="center">
    <img src="https://cn.vuejs.org/images/logo.png" width="200" style="display: block; margin-bottom: 10px;">
    <div style="color: #2979ff; font-size: 32px; margin-top: 10px; text-align: center">Varlet</div>
    <div style="color: #888; font-size: 14px; margin-top: 10px; text-align: center">
      Material design mobile component library for Vue3
    </div>
</div>

---

### Intro

Varlet is a Material design mobile component library developed based on `Vue3`，Developed and maintained by partners in the community。

### Features
- 1.Provide more than 40 high quality general purpose components
- 2.Components are very lightweight
- 3.Developed by Chinese, complete Chinese and English documentation and logistics support
- 4.Support on-demand introduction
- 5.Support theme customization
- 6.Support internationalization
- 7.Support WebStorm, VS Code component syntax highlighting
- 8.Support the SSR
- 9.Support the Typescript

### Install

### CDN
`varlet.js` contain all the styles and logic of the component library, and you can import them.

```html
<div id="app"></div>
<script src="https://cdn.jsdelivr.net/npm/vue@next"></script>
<script src="https://cdn.jsdelivr.net/npm/@varlet/ui/umd/varlet.js"></script>
<script>
  const app = Vue.createApp({
    template: '<var-button>Button</var-button>'
  })
  app.use(Varlet).mount('#app')
</script>
```

### Webpack/Vite
```shell
# Install with npm or yarn
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
