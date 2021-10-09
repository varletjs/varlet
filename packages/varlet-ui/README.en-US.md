<div align="center">
  <a href="https://varlet.gitee.io/varlet-ui/">
    <img src="https://varlet.gitee.io/varlet-ui/varlet_icon.png" width="201">
  </a>
  <h2>VARLET</h2>
  <p>Material design mobile component library for Vue3</p>
  <p>
    <a href="https://varlet.gitee.io/varlet-ui/">Documentation</a>
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

### Intro

Varlet is a Material design mobile component library developed based on `Vue3`, developed and maintained by partners in the community.


### Features
 1. Provide more than 40 high quality general purpose components
 2. Components are very lightweight
 3. Developed by Chinese, complete Chinese and English documentation and logistics support
 4. Support on-demand introduction
 5. Support theme customization
 6. Support internationalization
 7. Support WebStorm, VS Code component syntax highlighting
 8. Support the SSR
 9. Support the Typescript
 10. More than 90 percent unit test coverage, providing stability assurance

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

### Webpack / Vite
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
import '@varlet/ui/es/style.js'

createApp(App).use(Varlet).mount('#app')
```
