# 进度条

### 介绍

展示操作的当前进度。

### 基本使用

通过 `value` 属性设置当前进度。

```html
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const value = ref(0)
const interval = ref(0)

onMounted(() => {
  interval.value = window.setInterval(() => {
    if (value.value >= 100) value.value = 0
    else value.value += 20
  }, 1000)
})

onUnmounted(() => {
  window.clearInterval(interval.value)
})  
</script>

<template>
  <var-space direction="column" :size="[12, 12]">
    <var-progress :value="20" :track="false" />
    <var-progress :value="value" :track="false" />
    <var-progress :value="100" :track="false" />
  </var-space>
</template>
```

### 显示标签

通过 `label` 属性将 label 显示，label 默认为进度的百分比，可以使用插槽插入自定义内容。

```html
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const value = ref(0)
const interval = ref(0)

onMounted(() => {
  interval.value = window.setInterval(() => {
    if (value.value >= 100) value.value = 0
    else value.value += 20
  }, 1000)
})

onUnmounted(() => {
  window.clearInterval(interval.value)
})  
</script>

<template>
  <var-space direction="column" :size="[12, 12]">
    <var-progress label :value="30" />
    <var-progress label :value="value" />
    <var-progress label :value="100">success</var-progress>
  </var-space>
</template>
```

### 自定义样式

通过 `line-width`、`color`、`track-color`、`ripple` 属性设置线宽、进度条颜色、轨道颜色、水波纹加载效果。

```html
<template>
  <var-space direction="column" :size="[12, 12]">
    <var-progress :value="30" line-width="8" color="#ff9f00" />
    <var-progress :value="60" line-width="8" color="#ff9f00" track-color="#f5cb90" />
    <var-progress
      :value="80"
      ripple
      line-width="8"
      color="#ff9f00"
      track-color="#f5cb90"
    />
  </var-space>
</template>
```

### 环形进度条

```html
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const value = ref(0)
const interval = ref(0)

onMounted(() => {
  interval.value = window.setInterval(() => {
    if (value.value >= 100) value.value = 0
    else value.value += 20
  }, 1000)
})

onUnmounted(() => {
  window.clearInterval(interval.value)
})  
</script>

<template>
  <var-space :size="[20, 20]">
    <var-progress mode="circle" :value="30" line-width="5" :size="56" />
    <var-progress mode="circle" label :value="value" line-width="5" :size="56" />
    <var-progress mode="circle" label :value="100" line-width="5" :size="56" />
  </var-space>
</template>
```

### 隐藏轨道

通过 `track` 属性隐藏 track。

```html
<template>
  <var-progress mode="circle" :value="50" :size="56" :track="false" />
</template>
```
## API

### 属性

| 参数  |   说明  | 类型     | 默认值   |
| ----  | --------------- | -------- | -------- |
| `mode`  | `progress` 的模式，可选值为 `linear, circle` | _string_ | `linear` |
| `value` | `progress` 的进度 | _string \| number_ |  `0`  |
| `line-width` | `progress` 的线宽 | _string \| number_ | `4` |
| `color` | `progress` 的颜色 | _string_  | `#005CAF` |
| `track-color`  | `progress` 轨道的颜色 | _string_   | `#d8d8d8` |
| `label` | 是否显示 label | _boolean_ | `false` |
| `track` | 是否显示 `progress` 的轨道 | _boolean_ | `true` |
| `ripple` | 水波纹加载效果（仅支持线性进度条） | _boolean_ | `false` |
| `size` | `progress` 的尺寸（仅支持环形进度条） | _string \| number_ | `40` |
| `rotate` | `progress` 的原点（仅支持环形进度条） | _number_ | `0` |

### 插槽

| 名称 | 说明 | 参数 |
| ----- | -------------- | -------- |
| `default` | 自定义 label | `-` |

### 样式变量
以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制

| 变量名 | 默认值 |
| --- | --- |
| `--progress-font-size` | `var(--font-size-sm)` |
| `--progress-ripple-color` | `#fff` |
| `--progress-track-color` | `#d8d8d8` |
| `--progress-background` | `var(--color-primary)` |
