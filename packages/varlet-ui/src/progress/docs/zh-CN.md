# 进度条

### 介绍

展示操作的当前进度。

### 基本使用

```html
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const value = ref(0)
let timer

onMounted(() => {
  timer = window.setInterval(() => {
    if (value.value >= 100) {
      value.value = 0
      return
    }

    value.value += 20
  }, 1000)
})

onUnmounted(() => {
  window.clearInterval(timer)
})  
</script>

<template>
  <var-space direction="column" :size="[12, 12]">
    <var-progress :value="20" />
    <var-progress :value="value" :track="false" label />
    <var-progress :value="100" label>success</var-progress>
  </var-space>
</template>
```

### 其他样式

通过 `type`、`line-width`、`color`、`track-color` 属性设置线宽、进度条颜色、轨道颜色。

```html
<template>
  <var-space direction="column" :size="[12, 12]">
    <var-progress :value="40" color="linear-gradient(131.53deg, #3fecff 0%, #6149f6 100%)"/>
    <var-progress type="info" :value="40" />
    <var-progress type="success" :value="60" />
    <var-progress :value="80" :line-width="8" color="#ff9f00" track-color="#f5cb90" />
  </var-space>
</template>
```

### 环形进度条

```html
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const value = ref(0)
let timer

onMounted(() => {
  timer = window.setInterval(() => {
    if (value.value >= 100) {
      value.value = 0
      return
    }

    value.value += 20
  }, 1000)
})

onUnmounted(() => {
  window.clearInterval(timer)
})  
</script>

<template>
  <var-space :size="[20, 20]">
    <var-progress 
      mode="circle" 
      :value="100" 
      :size="60"  
      :color="{
        '0%': '#3fecff',
        '100%': '#6149f6',
      }" 
    />
    <var-progress mode="circle" :value="75" :size="60" :track="false" />
    <var-progress mode="circle" label :value="value" :line-width="5" :size="60" />
    <var-progress mode="circle" type="success" label :value="100" :line-width="5" :size="60">
      success
    </var-progress>
  </var-space>
</template>
```

### 不间断动画

当加载进度未知时，通过 `indeterminate` 属性开启不间断动画。

```html
<template>
  <var-space direction="column" :size="[20, 20]">
    <var-progress indeterminate />
    <var-progress indeterminate type="info" />

    <var-space justify="space-between">
      <var-progress mode="circle" indeterminate :size="60" />
      <var-progress mode="circle" type="info" indeterminate :size="60" />
    </var-space>
  </var-space>
</template>
```

## API

### 属性

| 参数            | 说明                                                              | 类型       | 默认值       |
|---------------|-----------------------------------------------------------------|----------|-----------|
| `mode`        | `progress` 的模式，可选值为 `linear, circle`                            | _string_ | `linear`  |
| `type`        | 类型，可选值为 `default` `primary` `info` `success` `warning` `danger` | _string_ | `primary`      |
| `value`       | `progress` 的进度                                                  | _string \| number_   |  `0`  |
| `line-width`  | `progress` 的线宽                                                  | _string \| number_   | `4` |
| `color`       | `progress` 的颜色 (环形进度条设置渐变色请使用object, 渐变同svg的linearGradient元素)                                                  | _string \| object_ | `-` |
| `track-color` | `progress` 轨道的颜色                                                | _string_ | `-` |
| `label`       | 是否显示 `label`                                                    | _boolean_ | `false`   |
| `label-class` | 自定义 `label` 的类名                                                 | _string_ | `-`       |
| `track`       | 是否显示 `progress` 的轨道                                             | _boolean_ | `true`    |
| `indeterminate` | 是否显示不间断动画                                                        | _boolean_ | `false` |
| `size`        | `progress` 的尺寸（仅支持环形进度条）                                        | _string \| number_   | `40` |
| `rotate`      | `progress` 的原点（仅支持环形进度条）                                        | _number_ | `0`       |

### 插槽

| 名称 | 说明 | 参数 |
| ----- | -------------- | -------- |
| `default` | 自定义 label | `-` |

### 样式变量
以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名 | 默认值 |
| --- | --- |
| `--progress-font-size` | `var(--font-size-sm)` |
| `--progress-track-color` | `#d8d8d8` |
| `--progress-label-color` | `#555` |
| `--progress-background` | `var(--color-primary)` |
| `--progress-default-color` | `#f5f5f5` |
| `--progress-primary-color` | `var(--color-primary)`|
| `--progress-danger-color` |  `var(--color-danger)`|
| `--progress-success-color` | `var(--color-success)`|
| `--progress-warning-color` |  `var(--color-warning)`|
| `--progress-info-color` | `var(--color-info)`|
| `--progress-linear-border-radius` | `0px`|
