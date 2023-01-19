# 服务端渲染

### 介绍

这里为您介绍在 `Nuxt` 中引入 `Varlet` 的基本方式。

### 创建 Nuxt 项目

`Nuxt.js` 是一个基于 `Vue.js` 的服务端渲染应用框架，详细教程请移步 [Nuxt](https://nuxt.com)。

### 按需引入

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

```ts
// nuxt.config.ts
import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  build: {
    transpile: ['@varlet/ui/es'],
  },
  vite: {
    plugins: [
      components({
        resolvers: [VarletUIResolver()]
      }),
      autoImport({
        resolvers: [VarletUIResolver({ autoImport: true })],
      })
    ]
  }
})
```

### 示例仓库

[varlet-nuxt3-example](https://github.com/varletjs/varlet-nuxt3-example)
