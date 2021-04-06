# 按需引入

## 介绍
按需引入避免了组件的全量导入，可以有效的减少发布包的大小。
这里推荐`基于插件的引入方式`或`基于es模块的手动引入方式`

## 基于插件的引入方式

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

### Vite

```shell
# 安装插件
# npm
npm i vite-plugin-style-import -D 
# yarn
yarn add vite-plugin-style-import -D
```

```js
// vite.config.js
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: '@varlet/ui',
          esModule: true,
          resolveStyle: name => `@varlet/ui/es/${name}/style/index`,
        },
      ]
    })
  ]
})
```

完成配置之后，如下引入组件，插件会自动引入组件对应的样式文件。

```html
import { Button } from '@varlet/ui'
```

## 基于es模块的手动引入方式

es模块对于tree-shaking十分友好，您也可以直接手动引入需要的组件逻辑和样式文件来实现按需引入。

```html
import { Button } from '@varlet/ui'
import '@varlet/ui/es/button/style'
```
