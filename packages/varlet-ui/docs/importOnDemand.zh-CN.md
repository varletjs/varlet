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
npm i unplugin-vue-components -D
# yarn
yarn add unplugin-vue-components -D
```

```js
// vite.config.js
import vue from '@vitejs/plugin-vue'
import viteComponents from 'unplugin-vue-components/vite'
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    viteComponents({
      resolvers: [VarletUIResolver()],
      dts: true,
    })
  ]
})
```

完成配置之后，所有声明在模板里的组件，无须注册组件，插件会自动引入组件样式和注册组件。

```html
<var-button>默认按钮</var-button>
```

注意函数组件，需要手动引入样式，如`Dialog`。

```js
import { Dialog } from '@varlet/ui'
import '@varlet/ui/es/dialog/style/index.js'

Dialog('Varlet UI UP UP')
```

自定义指令，需要手动注册，如`Ripple`

```js
import { createApp } from 'vue'
import { Ripple } from '@varlet/ui'

createApp().use(Ripple)
```


