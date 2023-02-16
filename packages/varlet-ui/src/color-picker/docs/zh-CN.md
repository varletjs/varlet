# 颜色选择器
### 介绍

可以在面板中选择颜色

### 基本使用

```html
<template>
  <v-color-picker></v-color-picker>
</template>
```
### 颜色样本选择

显示颜色样本

```html
<template>
  <var-color-picker swatches-layout />
</template>
```

### 切换颜色模式

使用 v-model 来控制显示的颜色

```html
<script setup>
import { ref } from 'vue'

const color = ref('#BFFAFF')
const value = ref('')
const modes = ['rgba', 'hsla', 'hex']
</script>

<template>
  <var-color-picker />
  <var-select placeholder="请选择一个Mode" v-model="value">
    <var-option v-for="item in modes" :key="item" :label="item" />
  </var-select>
</template>
```

### 禁用

使用 `disabled` 属性禁用当前面板。

```html
<script setup>
import { ref } from 'vue'


const disabled = ref(false)  
</script>

<template>
  <var-color-picker :disabled="disabled" />
</template>
```

## API

### 属性

| 参数              | 说明                                         | 类型                   | 默认值      |
| ----------------- | -------------------------------------------- | ---------------------- | ----------- |
| `v-model`         | 颜色选择器值                                 | _string_               | `undefined` |
| `mode`            | 您可以使用 mode 指定用户可以使用哪些输入模式 | _rgba ｜ hsla ｜ hexa_ | `rgba`      |
| `swatches`        | 设置可用的颜色样本以供选择                   | _string[]_             | `undefined` |
| `disabled`        | 禁用颜色选择器                               | _boolean_              | `false`     |
| `swatches-layout` | 是否展示颜色样本                             | _boolean_              | `true`      |
| `canvas-layout`   | 是否展示颜色样本                             | _boolean_              | `false`     |
| `input-layout`    | 是否展示input                                | _boolean_              | `false`     |
| `slider-layout`   | 是否展示slider                               | _boolean_              | `false`     |
| `width`           | 颜色选择器宽度                               | _number ｜ string_     | `300`       |
| `canvas-height`   | 画布高度                                     | _number ｜ string_     | `150`       |
