# Icon

### Intro

Font based icon library, also support web images.
Font icons are from [Material Design Icon](https://materialdesignicons.com/).

### Icon Size

```html
<template>
  <var-icon name="checkbox-marked-circle" />
  <var-icon name="checkbox-marked-circle" :size="26"/>
</template>
```

### Icon Color

```html
<template>
  <var-icon name="checkbox-marked-circle" color="var(--color-primary)" />
  <var-icon name="checkbox-marked-circle" color="var(--color-success)" />
</template>
```

### Use Image

When the name passed in is a URL the `img` tag is displayed in `cover` mode.
`size` is the width and height of the image.

```html
<template>
  <var-icon name="https://varlet.pages.dev/cat.jpg" :size="32" />
</template>
```

### Click Event

```html
<script setup>
import { Snackbar } from '@varlet/ui'
</script>

<template>
  <var-icon 
    name="checkbox-marked-circle"
    color="var(--color-primary)"
    @click="() => Snackbar.success('Click success')"
  />
</template>
```

### Icon Animation

When `transition (ms)` is set, and the icon is toggled by its `name`, trigger a toggle animation.

```html
<script setup>
import { ref } from 'vue'

const name = ref('information')

function toggle() {
  name.value = name.value === 'information' 
    ? 'checkbox-marked-circle' 
    : 'information'
}
</script>

<template>
  <var-icon 
    color="var(--color-primary)" 
    :name="name" 
    :transition="300" 
    :size="30" 
    @click="toggle"
  />

  <var-icon
    color="var(--color-primary)"
    animation-class="fade"
    :name="iconName"
    :transition="300"
    :size="30"
    @click="toggle"
  />
</template>

<style>
.fade {
  opacity: 0;
  transition-property: opacity;
}
</style>
```

### Custom icon library (plugin definition)

The component library provides two ways to customize the icon library, `plug-in definition` and `manual definition`. This section introduces the `plug-in definition` method.

#### Install plugin

Install `@varlet/unplugin-icon-builder` and integrate with the build tool. For more plug-in options, please [refer here](https://github.com/varletjs/varlet-iconx/tree/main/packages/varlet-unplugin-icon-builder#options-type-declaration).

```shell
# playground-ignore
#npm
npm i @varlet/unplugin-icon-builder -D
# yarn
yarn add @varlet/unplugin-icon-builder -D
# pnpm
pnpm add @varlet/unplugin-icon-builder -D
```

#### Vite Configuration

```ts
// playground-ignore
// vite.config.ts
import { defineConfig } from 'vite'
import icon from '@varlet/unplugin-icon-builder/vite'

export default defineConfig({
   plugins: [icon()],
})
```

#### Webpack Configuration

```ts
// playground-ignore
// vite.config.ts
const Icon = require('@varlet/unplugin-icon-builder/webpack')

module.exports = {
   plugins: [Icon.default()]
}
```

#### Vue Cli Configuration

```ts
// playground-ignore
// vite.config.ts
const { defineConfig } = require('@vue/cli-service')
const Icon = require('@varlet/unplugin-icon-builder/webpack')

module.exports = defineConfig({
   transpileDependencies: true,
   configureWebpack: {
     plugins: [Icon.default()]
   },
})
```

#### Project Structure

`svg-icons` will default to the icon library folder.

```ts
// playground-ignore
|-- project
   |-- src
     |-- main.ts
   |-- svg-icons
     |-- account-circle.svg
```

#### Import the entry file into the virtual module

```ts
// playground-ignore
// main.ts
import 'virtual-icons'
```

#### Using Icons

```html
<!-- playground-ignore -->
<template>
   <var-icon namespace="i" name="account-circle" />
</template>
```

### Custom icon library (manually defined)

First you need to set up your own font and import it into your project. This assumes that a font named `i-icons` is extended.

```css
/* playground-ignore */
/* Set font */
@font-face {
   font-family: "i-icons";
   src: url("https://xxx.i-icons.ttf") format("truetype");
}

/* Set namespace */
.i {
   font-family: "i-icons";
}
/* or */
.i--set {
   font-family: "i-icons";
}
/* Set the end of the namespace */

/* Font name mapping code point */
.i-account-circle::before {
   content: "\F000";
}
```

#### Using icons

```html
<!-- playground-ignore -->
<template>
   <var-icon namespace="i" name="account-circle" />
</template>
```

## API

### Props

| Prop         | Description                                    | Type               | Default    |
| ------------ | ---------------------------------------------- | ------------------ | ---------- |
| `name`       | icon name                                      | _string_           | `-`        |
| `size`       | icon size                                      | _string \| number_ | `-`        |
| `color`      | icon color, Only applies to font icons         | _string_           | `-`        |
| `namespace`  | Icon namespace, extensible custom icon library | _string_           | `var-icon` |
| `animation-class` | Name of the transition animation class |  _string_ | `-` |
| `transition` | Transition animation time(ms)                  | _string \| number_ | `0`        |

### Events

| Event   | Description                          | Arguments      |
| ------- | ------------------------------------ | -------------- |
| `click` | Triggered when you click on the icon | `event: Event` |

### Style Variables

Here are the CSS variables used by the component. Styles can be customized using [StyleProvider](#/en-US/style-provider).

| Variable      | Default |
| ------------- | ------- |
| `--icon-size` | `20px`  |
