# 按需引入

### 介绍
按需引入避免了组件的全量导入，可以有效的减少发布包的大小。
这里分别推荐基于`Webpack`和`Vite`两种构建工具的最佳实践。

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

```html
<var-button>默认按钮</var-button>
```

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
