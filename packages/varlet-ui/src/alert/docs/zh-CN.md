# 警告

### 介绍

警告组件会向用户显示简短的消息，但不会中断他们的使用。

### 标题

```html
<template>
  <var-alert title="傲慢与偏见" />
</template>
```

### 内容

```html
<template>
  <var-alert message="我也说不准是在什么时间，什么地点，看见你的什么神情，听见你的什么言语，便开始爱上了你。" />
</template>
```

### 类型

```html
<template>
  <var-alert 
    title="傲慢与偏见" 
    message="我也说不准是在什么时间，什么地点，看见你的什么神情，听见你的什么言语，便开始爱上了你。"
  />
  <var-alert 
    title="傲慢与偏见" 
    message="我也说不准是在什么时间，什么地点，看见你的什么神情，听见你的什么言语，便开始爱上了你。"
    type="success"
  />
  <var-alert 
    title="傲慢与偏见" 
    message="我也说不准是在什么时间，什么地点，看见你的什么神情，听见你的什么言语，便开始爱上了你。"
    type="warning"
  />
  <var-alert 
    title="傲慢与偏见" 
    message="我也说不准是在什么时间，什么地点，看见你的什么神情，听见你的什么言语，便开始爱上了你。"
    type="error"
  />
</template>
```

### 变体

```html
<template>
  <var-alert 
    title="傲慢与偏见" 
    message="我也说不准是在什么时间，什么地点，看见你的什么神情，听见你的什么言语，便开始爱上了你。"
  />
  <var-alert 
    title="傲慢与偏见" 
    message="我也说不准是在什么时间，什么地点，看见你的什么神情，听见你的什么言语，便开始爱上了你。"
    variant="outlined"
  />
  <var-alert 
    title="傲慢与偏见" 
    message="我也说不准是在什么时间，什么地点，看见你的什么神情，听见你的什么言语，便开始爱上了你。"
    variant="tonal"
  />
</template>
```

### 自定义图标

```html
<template>
  <var-alert 
    title="傲慢与偏见" 
    message="我也说不准是在什么时间，什么地点，看见你的什么神情，听见你的什么言语，便开始爱上了你。"
  >
    <template #icon>
      <var-icon name="heart" />
    </template>
  </var-alert>
</template>
```

### 允许关闭

```html
<script setup>
import { ref } from 'vue'

const show = ref(true)
</script>

<template>
  <var-alert 
    title="傲慢与偏见" 
    message="我也说不准是在什么时间，什么地点，看见你的什么神情，听见你的什么言语，便开始爱上了你。"
    closeable
    @click="show = false"
  >
    <template #icon>
      <var-icon name="heart" />
    </template>
  </var-alert>
</template>
```

## API

### 属性

| 参数          | 说明 | 类型 | 默认值 |
|-------------| ---- | ---- | ---- |
| `type`      | 类型，可选值为 `info` `success` `warning` `error` | _string_ | `info` |
| `variant`      | 变体，可选值为 `standard` `outlined` `tonal` | _string_ | `standard` |
| `color` | 背景色 | _string_ | `-` |
| `title` | 标题 | _string_ | `-` |
| `message`  | 信息 | _string_ | `-` |
| `elevation`  | 海拔高度，可选值为 `true`、`false` 和 `0-24` 的等级  | _string \| number \| boolean_ | `false`  |
| `closeable` | 是否为可关闭警告 | _boolean_ | `false` |
| `icon-name` | 自定义可关闭警告的图标，必须在 `closeable` 为 `true` 的条件下才能用 | _string_ | `-` |
| `namespace` | 自定义可关闭警告的图标的命名空间 | _string_ | `var-icon` |

### 插槽

| 名称 | 说明 | 参数 |
| ---- | ---- | ----|
| `default` | 警告信息 | `-` |
| `content` | 警告内容 | `-` |
| `title`   | 警告标题 | `-` |
| `icon` | 警告的前置图标 | `-` |
| `close-icon`   | 警告的关闭图标 | `-` |

### 事件

| 事件名 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| `close` | 点击关闭按钮时触发，只有在显示关闭按钮的时候才能使用 | `event: Event`  |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名                         | 默认值 |
|-----------------------------  | ---   |
| `--alert-padding` | `16px` |
| `--alert-border-radius` | `4px` |
| `--alert-icon-margin-right` | `12px` |
| `--alert-close-icon-margin-left` | `12px` |
| `--alert-outlined-color` | `rgba(0, 0, 0, 0.87)` |
| `--alert-standard-color` | `rgba(255, 255, 255, 0.87)` |
| `--alert-error-background` | `var(--color-danger)` |
| `--alert-success-background` | `var(--color-success)` |
| `--alert-warning-background` | `var(--color-warning)` |
| `--alert-info-background` | `var(--color-info)` |
| `--alert-tonal-error-background`| `var(--color-danger-container)` |
| `--alert-tonal-success-background`| `var(--color-success-container)` |
| `--alert-tonal-warning-background`| `var(--color-warning-container)` |
| `--alert-tonal-info-background`| `var(--color-info-container)` |
| `--alert-tonal-error-color`| `var(--color-on-danger)` |
| `--alert-tonal-success-color`| `var(--color-on-success)` |
| `--alert-tonal-warning-color`| `var(--color-on-warning)` |
| `--alert-tonal-info-color`| `var(--color-on-info)` |
| `--alert-message-font-size` | `14px` |
| `--alert-title-font-size` | `16px` |
| `--alert-title-font-weight` | `500` |
| `--alert-title-margin-bottom` | `5px` |
| `--alert-message-line-height`| `18px` |
| `--alert-title-line-height`| `28px` |
