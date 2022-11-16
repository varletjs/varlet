# 服务端渲染

### 介绍

这里为您介绍在 `Nuxt` 中引入 `Varlet` 的基本方式。您可以引入整个 `Varlet`，或是根据需要仅引入部分组件。
我们先介绍如何引入完整的 `Varlet`。

### 创建 Nuxt 项目

`Nuxt.js` 是一个基于 `Vue.js` 的服务端渲染应用框架，详细教程请移步 [Nuxt](https://v3.nuxtjs.org/)。

### 转译组件库

```ts
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  build: {
    transpile: ['@varlet/ui', 'dayjs']
  }
})
```

### 完整引入

`Nuxt` 会自动读取 `plugins` 目录下的文件并加载它们。
所以您可以在 `plugins` 目录下新建 `varlet.ts` 并写入以下内容：

```js
// playground-ignore
import { defineNuxtPlugin } from '#app'
import Varlet from '@varlet/ui'
import '@varlet/ui/es/style.js'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Varlet)
})
```

以上代码便完成了 `Varlet` 的引入。需要注意的是，样式文件需要单独引入。

### 按需引入

按需引入避免了组件的全量导入，可以有效的减少发布包的大小。
每一个组件都是一个 `Vue插件`，并由 `组件逻辑` 和 `样式文件` 组成，可按如下方式进行按需引入使用。

```js
// playground-ignore
import { defineNuxtPlugin } from '#app'
import { Button } from '@varlet/ui'
import '@varlet/ui/es/button/style/index.js'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Button)
})
```

### 示例仓库

[varlet-nuxt3-example](https://github.com/varletjs/varlet-nuxt3-example)
