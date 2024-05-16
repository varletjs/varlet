# 图标

### 介绍

基于字体的图标库，也支持网络图片。
字体图标来自 [Material Design Icon](https://materialdesignicons.com/)。

### 图标尺寸

```html
<template>
  <var-icon name="checkbox-marked-circle" />
  <var-icon name="checkbox-marked-circle" :size="26"/>
</template>
```

### 图标颜色

```html
<template>
  <var-icon name="checkbox-marked-circle" color="var(--color-primary)" />
  <var-icon name="checkbox-marked-circle" color="var(--color-success)" />
</template>
```

### 使用图片

当传入的 `name` 是一个网络地址时，将会使用 `img` 标签以 `cover` 模式显示，`size` 为图片的宽高。

```html
<template>
  <var-icon name="https://varlet.pages.dev/cat.jpg" :size="32" />
</template>
```

### 点击事件

```html
<script setup>
import { Snackbar } from '@varlet/ui'
</script>

<template>
  <var-icon 
    name="checkbox-marked-circle"
    color="var(--color-primary)"
    @click="() => Snackbar.success('点击成功')"
  />
</template>
```

### 图标切换动画

当设置了 `transition(ms)` 并通过图标的 `name` 切换图标时，可以触发切换动画。

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

### 自定义图标库 (插件定义)

安装 `@varlet/unplugin-icon-builder`，并与构建工具集成，更多的插件选项请[参考这里](https://github.com/varletjs/varlet-iconx/tree/main/packages/varlet-unplugin-icon-builder#options-type-declaration)。

```shell
# playground-ignore
# npm
npm i @varlet/unplugin-icon-builder -D
# yarn
yarn add @varlet/unplugin-icon-builder -D
# pnpm
pnpm add @varlet/unplugin-icon-builder -D
```

#### Vite 配置

```ts
// playground-ignore
// vite.config.ts
import { defineConfig } from 'vite'
import icon from '@varlet/unplugin-icon-builder/vite'

export default defineConfig({
  plugins: [icon()],
})
```

#### Webpack 配置

```ts
// playground-ignore
// vite.config.ts
const Icon = require('@varlet/unplugin-icon-builder/webpack')

module.exports = {
  plugins: [Icon.default()]
}
```

#### Vue Cli 配置

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

#### 项目结构

`svg-icons` 将作为默认的图标库文件夹。

```ts
// playground-ignore
|-- project
  |-- src
    |-- main.ts
  |-- svg-icons
    |-- account-circle.svg
```

#### 入口文件导入虚拟模块

```ts
// playground-ignore
// main.ts
import 'virtual-icons'
```

#### 使用图标

```html
<!-- playground-ignore -->
<template>
  <var-icon namespace="i" name="account-circle" />
</template>
```

### 自定义图标库 (手动定义)

首先您需要设置您自己的字体，并引入到您的项目。这里假设扩展一个名为 `i-icons` 的字体。

```css
/* playground-ignore */
/* 设置字体 */
@font-face {
  font-family: "i-icons";
  src: url("https://xxx.i-icons.ttf") format("truetype");
}

/* 设置命名空间 */
.i {
  font-family: "i-icons";
}
/* 或 */
.i--set {
  font-family: "i-icons";
}
/* 设置命名空间结束 */

/* 字体名称映射码点 */
.i-account-circle::before {
  content: "\F000";
}
```

#### 使用图标

```html
<!-- playground-ignore -->
<template>
  <var-icon namespace="i" name="account-circle" />
</template>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `name` | 图标名称 | _string_ | `-` |
| `size` | 尺寸 | _string \| number_ | `-` |
| `color` | 图标颜色, 只适用于字体图标 | _string_ | `-` |
| `namespace` | 图标的命名空间, 可扩展自定义图标库 |  _string_ | `var-icon` |
| `animation-class` | 过渡动画类名 |  _string_ | `-` |
| `transition` | 过渡动画时间（ms） |  _string \| number_ | `0` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击图标时触发 | `event: Event` |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名 | 默认值 |
| --- | --- |
| `--icon-size` | `20px` |
