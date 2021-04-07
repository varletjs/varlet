# Import On Demand

### 介绍
The on-demand import avoids the full import of components and can effectively reduce the size of the distribution package.
It is recommended to use `Plugin Based Import` or `ES module based manual Import`

### Plugin based import

### Webpack
```shell
# Install plugin
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
# Install plugin
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

After the configuration is complete, and the component is imported as follows, 
the plugin will automatically import the corresponding style file for the component

```html
import { Button } from '@varlet/ui'
```

### ES module based manual import

The ES module is very tree-shaking friendly,
and you can manually import the required component logic and style files directly to implement on-demand introduction.

```html
import { Button } from '@varlet/ui'
import '@varlet/ui/es/button/style'
```
