# 折叠动效

### 介绍

折叠和展开的过渡动画。

### 基本使用

通过布尔值 `expand` 控制内容的折叠和展开。

```html
<script setup>
import { ref } from 'vue'

const expand = ref(true)
</script>

<template>
  <var-switch v-model="expand"></var-switch>
  <var-collapse-transition :expand="expand">
    内容
  </var-collapse-transition>
</template>
```

## API

### 属性

| 参数       | 说明         | 类型        | 默认值    |
| ---------- | ------------ | ----------- | --------- |
| `expand` | 是否展示内容 | *boolean* | `false` |

### 插槽

| 名称        | 说明       | 参数 |
| ----------- | ---------- | ---- |
| `default` | 折叠的内容 | -    |
