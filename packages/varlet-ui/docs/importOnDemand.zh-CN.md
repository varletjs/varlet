# 按需引入

### 介绍
按需引入避免了组件的全量导入，可以有效的减少发布包的大小。

### 引入方式

```js
import { createApp } from 'vue'
import { Button } from '@varlet/ui'
import '@varlet/ui/es/button/style/index.js'

createApp().use(Button)
```

但是这样的引入方式是相对繁琐的，
接下来推荐基于`Webpack`和`Vite`两种构建工具的最佳实践。

### Webpack

```shell
# 安装插件
# npm
npm i babel-plugin-import -D 
# yarn
yarn add babel-plugin-import -D
```

```js
// babel.config.js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: '@varlet/ui',
        libraryDirectory: 'es',
        style: true,
      },
      '@varlet/ui',
    ],
  ],
};
```

完成配置之后，在引入组件时插件会自动加载组件所需的样式文件，使用方式如下。

```js
import { createApp } from 'vue'
import { Button } from '@varlet/ui'

createApp().use(Button)
```

### Vite

```shell
# 安装插件
# npm
npm i vite-plugin-components -D
# yarn
yarn add i vite-plugin-components -D
```

```js
// vite.config.js
import vue from '@vitejs/plugin-vue'
import ViteComponents, { VarletUIResolver } from 'vite-plugin-components'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({
      globalComponentsDeclaration: true,
      customComponentResolvers: [VarletUIResolver()]
    })
  ]
})
```

完成配置之后，如下方式直接使用组件，插件会自动引入组件相关的依赖。

```html
<var-button>默认按钮</var-button>
```

需要注意的是，如果您使用的是组件的函数调用方式仍然需要手动引入，如`ImagePreview`

```js
import { createApp } from 'vue'
import { ImagePreview } from '@varlet/ui'
import '@varlet/ui/es/image-preview/style/index.js'

createApp().use(ImagePreview)
```


