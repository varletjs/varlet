# 按需引入

### 介绍
按需引入避免了组件的全量导入，可以有效的减少发布包的大小。
这里推荐`基于插件的引入方式`或`基于es模块的手动引入方式`

### 基于插件的引入方式


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

### vite-plugin-components

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
import { defineConfig } from 'vite'
import ViteComponents , { VarletUIResolver } from 'vite-plugin-components'

// https://vitejs.dev/config/
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

完成配置之后，如下直接使用组件，插件会自动引入相应组件。

```js
<var-button>默认按钮</var-button>
```

### 基于es模块的手动引入方式

es模块对于tree-shaking十分友好，您也可以直接手动引入需要的组件逻辑和样式文件来实现按需引入。

```javascript
import { Button } from '@varlet/ui'
import '@varlet/ui/es/button/style'
```
