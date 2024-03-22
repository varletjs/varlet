# Atomic CSS support

### Intro

We've provided common CSS atomization framework presets, made it easier to access the component library's underlying style variables, and standardized page responsiveness breakpoints.

### UnoCSS

Presets detailed definition [Please watch here](https://github.com/varletjs/varlet/blob/main/packages/varlet-preset-unocss/src/index.ts)

#### Install

```shell
# playground-ignore
# npm
npm i @varlet/preset-unocss -D
# yarn
yarn add @varlet/preset-unocss -D
# pnpm
pnpm add @varlet/preset-unocss -D
```

#### Configuration

```js
// playground-ignore
// uno.config.ts
import { defineConfig, presetUno } from 'unocss'
import { presetVarlet } from '@varlet/preset-unocss'

export default defineConfig({
  presets: [presetUno(), presetVarlet()]
})
```

### Tailwindcss

Presets detailed definition [Please watch here](https://github.com/varletjs/varlet/blob/main/packages/varlet-preset-tailwindcss/src/index.ts)

#### Install

```shell
# playground-ignore
# npm
npm i @varlet/preset-tailwindcss -D
# yarn
yarn add @varlet/preset-tailwindcss -D
# pnpm
pnpm add @varlet/preset-tailwindcss -D
```

#### Configuration

```js
// playground-ignore
// tailwind.config.js
import { presetVarlet } from '@varlet/preset-tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  presets: [presetVarlet()]
}
```

### Usage

```html
<!-- playground-ignore -->
<template>
  <div class="text-on-primary bg-primary text-md">hello</div>
  <div class="text-on-primary-container bg-primary-container text-lg">world</div>
  <div class="bg-primary sm:bg-info md:bg-warning lg:bg-danger xl:bg-success">varlet</div>
</template>
```

