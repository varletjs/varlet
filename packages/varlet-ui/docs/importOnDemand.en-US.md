# Import On Demand

### Intro
The on-demand import avoids the full import of components and can effectively reduce the size of the distribution package.


### Install method

```js
import { createApp } from 'vue'
import { Button } from '@varlet/ui'
import '@varlet/ui/es/button/style/index.js'

createApp().use(Button)
```

The logical part and style part of the component are installed as above, but this setup is relatively tedious
Best practices based on `Webpack` and `Vite` build tools are recommended here
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

After the configuration is complete, 
the plugin automatically loads the style files required for the component when it is introduced, 
using the following method

```js
import { createApp } from 'vue'
import { Button } from '@varlet/ui'

createApp().use(Button)
```

### Vite

```shell
# Install plugin
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

After the configuration is completed, all components declared in the template do not need to be registered. 
The plug-in will automatically introduce component styles and registered components.

```html
<var-button>Default Button</var-button>
```

Note that for functional components, you need to manually introduce styles, such as `Dialog`.

```js
import { Dialog } from '@varlet/ui'
import '@varlet/ui/es/dialog/style/index.js'

Dialog('Varlet UI UP UP')
```

Note that for directives, need to be manually registered, such as `Ripple`.

```js
import { createApp } from 'vue'
import { Ripple } from '@varlet/ui'

createApp().use(Ripple)
```

