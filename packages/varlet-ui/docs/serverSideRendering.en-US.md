# Server side rendering

### Intro

Here is the basic way to install `Varlet` in `Nuxt`. 

### Create Nuxt project

`Nuxt.js` is a server-side rendering application framework based on `Vue.js`, please go to [Nuxt](https://nuxt.com) for a detailed tutorial.

### Import On Demand

via plugin
[unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) and
[unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)
Realize the automatic on-demand import of components.

```shell
# playground-ignore
# Install the plugin

# npm
npm i unplugin-vue-components unplugin-auto-import -D

#yarn
yarn add unplugin-vue-components unplugin-auto-import -D

#pnpm
pnpm add unplugin-vue-components unplugin-auto-import -D
```

```ts
// nuxt.config.ts
import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
   build: {
     transpile: ['@varlet/ui/es'],
   },
   vite: {
     plugins: [
       components({
         resolvers: [VarletUIResolver()]
       }),
       autoImport({
         resolvers: [VarletUIResolver({ autoImport: true })],
       })
     ]
   }
})
```

### Example Repository

[varlet-install-example/nuxt](https://github.com/varletjs/varlet-install-example/tree/main/nuxt)