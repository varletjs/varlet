# 按需引入

### 介绍
按需引入避免了组件的全量导入，可以有效的减少发布包的大小。

### 手动引入

每一个组件都是一个 `Vue插件`，并由 `组件逻辑` 和 `样式文件` 组成，如下方式进行手动引入使用。

```js
import { createApp } from 'vue'
import { Button } from '@varlet/ui'
import '@varlet/ui/es/button/style/index.js'

createApp().use(Button)
```

### 自动引入

所有声明在模板中的组件，都会被[unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)插件自动扫描，插件会自动引入`组件逻辑`和`样式文件`并`注册组件`。

```shell
# 安装插件

# npm
npm i unplugin-vue-components -D 

# yarn
yarn add unplugin-vue-components -D

# pnpm
pnpm add babel-plugin-import -D
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


完成配置后如下使用即可

```html
<template>
  <var-button>默认按钮</var-button>
</template>
```

特别注意: 在模板之外调用的函数组件无法被插件扫描，仍需要手动引入样式。例如 `Snackbar` 就是一个函数组件。