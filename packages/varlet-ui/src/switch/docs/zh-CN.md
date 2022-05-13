# 开关

### 介绍

开关选择器。

### 基本使用

```html
<script setup>
import { ref } from 'vue'

const value = ref(true)
</script>

<template>
  <var-switch v-model="value" />
</template>
```

### 不可用

```html
<script setup>
import { ref } from 'vue'

const value = ref(true)
</script>

<template>
  <var-switch v-model="value" disabled />
  <var-switch v-model="value" readonly />
</template>
```

### 自定义颜色

```html
<script setup>
import { ref } from 'vue'

const value = ref(true)
</script>

<template>
  <var-switch v-model="value" :ripple="false" />
  <var-switch v-model="value" color="#ff9f00" close-color="#f5cb90" />
</template>
```

### 不同大小

通过 `size` 属性改变 Switch 大小。

```html
<script setup>
import { ref } from 'vue'

const value = ref(true)
</script>

<template>
  <var-switch v-model="value" size="15" />
  <var-switch v-model="value" />
  <var-switch v-model="value" size="25" />
</template>
```

### 加载状态

```html
<script setup>
import { ref } from 'vue'

const value = ref(true)
</script>

<template>
  <var-switch :model-value="true" loading />
  <var-switch :model-value="true" size="25" loading loading-color="#ff9f00" />
</template>
```

### 值的校验

通过传入一个校验器数组可以对值进行校验，校验器返回 `true` 则为校验通过。
以外的值将转换为文本作为用户提示。

```html
<script setup>
import { ref } from 'vue'

const value = ref(true)
</script>

<template>
  <var-switch v-model="value" :rules="[(v) => v === true || '错误！']"/>
</template>
```

## API

### 属性

| 参数               | 说明 | 类型 | 默认值 |
|------------------| -------------- | -------- | ---------- |
| `v-model`        | 开关选中状态	| _any_ | `false` |
| `active-value`   | 开关打开时的值	| _any_ | `true` |
| `inactive-value` | 开关关闭时的值	| _any_ | `false` |
| `disabled`       | 是否禁用| _boolean_ | `false` |
| `readonly`       | 是否只读 | _boolean_ | `false` |
| `loading`        | 是否为加载状态 | _boolean_ | `false` |
| `ripple`         | 是否启用水波纹 | _boolean_ | `true` |
| `color`          | 打开状态下的颜色 | _string_ | `#2979ff` |
| `loading-color`  | 加载图标的颜色 | _string_ | `#fff` |
| `close-color`    | 关闭状态下的颜色 | _string_ | `#fff` |
| `size`           | switch 的大小 | _string \| number_ | `20px` |
| `rules`          | 校验规则 | _array_  | - |

### 事件

| 事件名 | 说明 | 回调参数 |
| ----- | -------------- | -------- |
| `click` | 点击时触发 | `event: Event` |
| `change` | 开关状态切换时触发 | `value: any` |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制

| 变量名 | 默认值 |
| --- | --- |
| `--switch-track-background` | `#fff` |
| `--switch-track-active-background` | `var(--color-primary)` |
| `--switch-track-error-background` | `var(--color-danger)` |
| `--switch-ripple-color` | `var(--color-primary)` |
| `--switch-handle-background` | `#fff` |
| `--switch-handle-color` | `#fff` |
| `--switch-handle-active-background` | `var(--color-primary)` |
| `--switch-handle-error-background` | `var(--color-danger)` |
