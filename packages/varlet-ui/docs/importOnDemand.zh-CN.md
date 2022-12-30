# 按需引入

### 介绍

按需引入避免了组件的全量导入，可以有效的减少发布包的大小。

### 手动引入

每一个组件都是一个 `Vue插件`，并由 `组件逻辑` 和 `样式文件` 组成，手动引入的使用方式如下。

```js
// playground-ignore
import { createApp } from 'vue'
import { Button } from '@varlet/ui'
import '@varlet/ui/es/button/style/index.js'

createApp().use(Button)
```

或

```html
// playground-ignore
<script setup>
import { Button as VarButton } from '@varlet/ui'
import '@varlet/ui/es/button/style/index.js'
</script>

<template>
  <var-button>说你好</var-button>
</template>
```

### 自动引入

通过插件
[unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) 和 
[unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)
实现组件自动按需导入。 

```shell
# playground-ignore
# 安装插件

# npm
npm i unplugin-vue-components unplugin-auto-import -D

# yarn
yarn add unplugin-vue-components unplugin-auto-import -D

# pnpm
pnpm add unplugin-vue-components unplugin-auto-import -D
```

#### Vue CLI
```js
// playground-ignore
// vue.config.js
const Components = require('unplugin-vue-components/webpack')
const AutoImport = require('unplugin-auto-import/webpack')
const { VarletUIResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  configureWebpack: {
    plugins: [
      Components({
        resolvers: [VarletUIResolver()]
      }),
      AutoImport({
        resolvers: [VarletUIResolver({ autoImport: true })]
      })
    ]
  }
}
```

#### Vite

```js
// playground-ignore
// vite.config.js
import vue from '@vitejs/plugin-vue'
import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    components({
      resolvers: [VarletUIResolver()]
    }),
    autoImport({
      resolvers: [VarletUIResolver({ autoImport: true })]
    })
  ]
})
```

#### Typescript 配置注意

为了得到良好的 IDE 语法高亮，请确保上述两个插件生成的类型声明文件被 `typescript` 识别，可在 `tsconfig.json` 中进行如下配置。 

```json
// playground-ignore
{
  "include": ["auto-imports.d.ts", "components.d.ts"]
}
```

### 手动引入和自动引入对比

手动引入

```html
// playground-ignore
<script setup>
import { Button as VarButton, Snackbar } from '@varlet/ui'
import '@varlet/ui/es/button/style/index.js'
import '@varlet/ui/es/snackbar/style/index.js'

function handleClick() {
  Snackbar('你好!')
}
</script>

<template>
  <var-button @click="handleClick">说你好</var-button>
</template>
```

自动引入

```html
// playground-ignore
<script setup>
function handleClick() {
  Snackbar('你好!')
}
</script>

<template>
  <var-button @click="handleClick">说你好</var-button>
</template>
```