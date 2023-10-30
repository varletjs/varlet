<div align="center">
  <a href="https://varlet.gitee.io/varlet-ui/#/en-US/index">
    <img src="https://varlet.gitee.io/varlet-ui/logo.svg" width="150">
  </a>
  <h1>VARLET</h1>
  <p>Material design mobile component library for Vue3</p>
  <p>
    <a href="https://varlet-varletjs.vercel.app/#/en-US/index">Documentation(Vercel)</a> |
    <a href="https://varlet.gitee.io/varlet-ui/#/en-US/index">Documentation(Gitee)</a> | 
    <a href="https://github.com/varletjs/varlet/blob/dev/README.zh-CN.md">中文README</a>
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

Varlet is a Material design mobile component library developed based on `Vue3`, developed and maintained by `varletjs` community team.


### Features

- 🚀 &nbsp; Provide 60+ high quality general purpose components
- 🚀 &nbsp; Components are very lightweight
- 💪 &nbsp; Developed by Chinese, complete Chinese and English documentation and logistics support
- 🛠️ &nbsp; Support on-demand introduction
- 🛠️ &nbsp; Support theme customization
- 🌍 &nbsp; Support internationalization
- 💡 &nbsp; Support WebStorm syntax highlighting
- 💪 &nbsp; Support the SSR
- 💡 &nbsp; Support the Typescript
- 💪 &nbsp; Make sure more than 90 percent unit test coverage, providing stability assurance
- 🛠️ &nbsp; Support dark mode
- 🛠️ &nbsp; Provide official VSCode extension

### Install

### CDN
`varlet.js` contain all the styles and logic of the component library, and you can import them.

```html
<div id="app"></div>
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
 <!-- Desktop Adaptation -->
<script src="https://cdn.jsdelivr.net/npm/@varlet/touch-emulator/iife.js"></script>
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
import '@varlet/ui/es/style'

createApp(App).use(Varlet).mount('#app')
```

### Official Ecosystem

The following projects are maintained by the official team for a long time.

| Name | Description |
|------------------------------------------------------------------------------------------------------|--------------------------------------|
| [@varlet/cli](https://github.com/varletjs/varlet/tree/dev/packages/varlet-cli) | `Vue3 component library rapid prototyping tool` |
| [@varlet/touch-emulator](https://github.com/varletjs/varlet/tree/dev/packages/varlet-touch-emulator) | `Desktop adapter, so that the mobile component library can run on the desktop` |
| [@varlet/ui-playground](https://github.com/varletjs/varlet/tree/dev/packages/varlet-ui-playground) | `Varlet component library online editing tool` |
| [varlet-vscode-extension](https://github.com/varletjs/varlet/tree/dev/packages/varlet-vscode-extension) | `Varlet Component Library VSCode Plugin` |
| [vscode-theme-varlet](https://github.com/varletjs/vscode-theme-varlet)  | `Varlet VSCode Theme`   |
| [varlet-app-example](https://github.com/varletjs/varlet-app-template)  | `Varlet component library app template`   |
| [varlet-install-example](https://github.com/varletjs/varlet-install-example)  | `Case collection of Varlet component library and various ecosystem integration` |

### Community Ecosystem

The following projects are maintained by community personnel, welcome to add.

| Name | Description |
|----------------------------------------------------------------|-----------------------------------------|
| [vue-h5-template](https://github.com/sunniejs/vue-h5-template) | `Vue-based mobile template scaffolding, providing mobile presets for Varlet component library` |
| [create-vite-app](https://github.com/ErKeLost/create-vite-app) | `A desktop template scaffolding based on Vue3, providing desktop presets for Varlet component library` |
| [vscode-common-intellisense](https://github.com/Simon-He95/vscode-common-intellisense) | `A VS Code extension that provides better intellisense to Varlet developers` |

### Playground

See [Varlet UI Playground](https://varlet.gitee.io/varlet-ui-playground).

### Contribution

See [Contributing Guide](https://github.com/varletjs/varlet/blob/dev/.github/CONTRIBUTING.md).

### Community

We recommend that [issue](https://github.com/varletjs/varlet/issues) be used for problem feedback, or others:

* Wechat group 

<img style="width: 25%" src="https://cdn.jsdelivr.net/gh/varletjs/varlet-static/community.png" />

* Join the [Discord](https://discord.gg/Dmb8ydBHkw)

### Thanks to contributors

<a href="https://github.com/varletjs/varlet/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=varletjs/varlet" />
</a>

### Thanks to the following sponsors

<a href="https://cdn.jsdelivr.net/gh/varletjs/varlet-static/sponsorkit/sponsors.svg">
  <img src="https://cdn.jsdelivr.net/gh/varletjs/varlet-static/sponsorkit/sponsors.svg">
</a>

### Sponsor this project

Sponsor this project to support our better creation. It is recommended to use afdian to subscribe, and your avatar will appear in this project.

#### Afdian

<a href="https://afdian.net/a/haoziqaq">https://afdian.net/a/haoziqaq</a>

#### Wechat / Alipay

<img style="width: 25%" src="https://cdn.jsdelivr.net/gh/varletjs/varlet-static/wechat.jpg" />
<img style="width: 25%" src="https://cdn.jsdelivr.net/gh/varletjs/varlet-static/alipay.jpg" />
