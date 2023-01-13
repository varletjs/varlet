# Quickstart

### Intro

Here are the most basic ways to access component libraries in common development patterns.

### Install

#### CDN
`varlet.js` contain all the styles and logic of the component library, and you can import them.

```html
<!-- playground-ignore -->
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

#### Webpack/Vite

```shell
# playground-ignore
# Install with npm, yarn or pnpm

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

### Components Playground

We provide a web version of the component editor,
which is convenient for you to quickly get started with each component of the component library,
edit it online, share it with others, or download the code package to run locally.
You can click the `{...}` icon in the upper right corner of the page or [go here](https://varlet.gitee.io/varlet-ui-playground).