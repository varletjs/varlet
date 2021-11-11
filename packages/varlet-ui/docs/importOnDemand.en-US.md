# Import On Demand

### Intro
The on-demand import avoids the full import of components and can effectively reduce the size of the distribution package.


### Manual Import

Each component is a `Vue plugin` and is composed of `component logic` and `style files`.
It is manually install and used as follows.

```js
import { createApp } from 'vue'
import { Button } from '@varlet/ui'
import '@varlet/ui/es/button/style/index.js'

createApp().use(Button)
```

### Auto Import

All components declared in the template are automatically scanned by the plug-in. 
The [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) will automatically import `component logic` and `style files` and `use components`

```shell
# Install plugin
# npm
npm i babel-plugin-import -D 
# yarn
yarn add babel-plugin-import -D
```

#### Vue Cli
```js
// vue.config.js
const Components = require('unplugin-vue-components/webpack')
const { VarletUIResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  configureWebpack: {
    plugins: [
      Components({
        resolvers: [VarletUIResolver()]
      })
    ]
  }
}
```

#### Vite

```js
// vite.config.js
import vue from '@vitejs/plugin-vue'
import components from 'unplugin-vue-components/vite'
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    components({
      resolvers: [VarletUIResolver()]
    })
  ]
})
```

After completing the configuration, you can use it as follows

```html
<template>
  <var-button>Default Button</var-button>
</template>
```


Note: Components or directive used outside the template cannot be scanned by the plugin and still need to be imported manually. 
For example, the function call method of the component `Snackbar.loading` or `v-ripple`

