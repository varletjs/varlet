# 默认值定制

### 介绍

组件库提供对组件属性的默认值进行定制的能力。

### 基本用法

通过组件提供的静态方法 `setPropsDefaults` 对组件的属性定义进行定制。需要注意的是，属性定制只对声明式组件生效，并且定制行为应在组件初始化之前。

```js
// playground-ignore
// main.ts
import { Button } from '@varlet/ui'

Button.setPropsDefaults({
  type: 'primary',
  elevation: 10
})
```

定制之后，下面两种写法将会是等价的。

```html
<!-- playground-ignore -->
<!-- App.vue -->
<template>
  <var-button>Hello</var-button>
</template>
```

```html
<!-- playground-ignore -->
<!-- App.vue -->
<template>
  <var-button type="primary" :elevation="10">Hello</var-button>
</template>
```