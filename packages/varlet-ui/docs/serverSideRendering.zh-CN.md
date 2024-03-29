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
npm i @varlet/import-resolver unplugin-vue-components unplugin-auto-import -D

# yarn
yarn add @varlet/import-resolver unplugin-vue-components unplugin-auto-import -D

# pnpm
pnpm add @varlet/import-resolver unplugin-vue-components unplugin-auto-import -D
```

```ts
// nuxt.config.ts
import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import { VarletImportResolver } from '@varlet/import-resolver'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  vite: {
    ssr: {
      noExternal: ['@varlet/ui']
    },
    plugins: [
      components({
        resolvers: [VarletImportResolver()]
      }),
      autoImport({
        resolvers: [VarletImportResolver({ autoImport: true })],
      })
    ]
  }
})
```

### 示例仓库

[varlet-install-example/nuxt](https://github.com/varletjs/varlet-install-example/tree/main/nuxt)
