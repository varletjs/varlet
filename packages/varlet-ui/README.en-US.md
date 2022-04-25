<div align="center">
  <a href="https://varlet-varletjs.vercel.app/#/en-US/home">
    <img src="https://varlet-varletjs.vercel.app/logo.svg" width="150">
  </a>
  <h1>VARLET</h1>
  <p>Material design mobile component library for Vue3</p>
  <p>
    <a href="https://varlet-varletjs.vercel.app/#/en-US/home">Documentation(Vercel)</a> 
    <a href="https://varlet.gitee.io/varlet-ui/#/en-US/home">Documentation(Gitee)</a>
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

### Intro

Varlet is a Material design mobile component library developed based on `Vue3`, developed and maintained by partners in the community.


### Features
- 🚀 Provide 50+ high quality general purpose components
- 🚀 Components are very lightweight
- 💪 Developed by Chinese, complete Chinese and English documentation and logistics support
- 🛠️ Support on-demand introduction
- 🛠️ Support theme customization
- 🌍 Support internationalization
- 💡 Support WebStorm, VS Code component syntax highlighting
- 💪 Support the SSR
- 💡 Support the Typescript
- 💪 Make sure more than 90 percent unit test coverage, providing stability assurance
- 🛠️ Support dark mode

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
# Install with npm or yarn or pnpm

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
import '@varlet/ui/es/style.js'

createApp(App).use(Varlet).mount('#app')
```

### Sponsorship us

We will use the donations to encourage open source contributors, buy them a cup of coffee and milk tea,
purchase infrastructure that is helpful to the project, and promote the project to become better.

<img style="width: 25%" src="https://github.com/varletjs/varlet/blob/dev/sponsor/wechat.png?raw=true" />

### Contributors

<a href="https://github.com/varletjs/varlet/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=haoziqaq/varlet" />
</a>
