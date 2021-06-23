# 主题定制

### 介绍
组件库使用`Less`作为css预处理器，并在组件库中定义了许多`Less变量`。
可以通过插件在构建时修改变量来定制主题。

### 通用变量
以下是整个组件库用到的通用变量，每个组件都有一份自己的变量可供替换。

```less
// 文字
@font-size-xs: 10px;
@font-size-sm: 12px;
@font-size-md: 14px;
@font-size-lg: 16px;

// 图标
@icon-size-xs: 16px;
@icon-size-sm: 18px;
@icon-size-md: 20px;
@icon-size-lg: 22px;

//颜色
@color-primary: #2979ff;
@color-info: #00bcd4;
@color-success: #4caf50;
@color-warning: #ff9800;
@color-danger: #f44336;
@color-disabled: #e0e0e0;

// 动画函数
@cubic-bezier: cubic-bezier(0.25, 0.8, 0.5, 1);
```

### 定制方法
首先确保您的构建工具支持`less`，不同的组件引入方式需要不同的定制方法，
以下介绍`全量导入`，`基于插件的引入方式`，`基于es模块的手动引入方式`的定制方法。

### 全量导入

```js
import '@varlet/ui/es/less'
```

### 基于插件的引入方式

```js
// babel.config.js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: '@varlet/ui',
        libraryDirectory: 'es',
        style: name => `${name}/style/less`,
      },
      '@varlet/ui',
    ]
  ]
}
```

### Vue cli
```js
// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'color-primary': '#009688',
        }
      }
    }
  }
}
```

### Vite
Vite不支持`~`语法，需要对`~`进行覆盖。

```js
// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'color-primary': '#009688',
        }
      }
    }
  },
  resolve: {
    alias: [
      { find: /^~/, replacement: '' }
    ],
  }
})
```