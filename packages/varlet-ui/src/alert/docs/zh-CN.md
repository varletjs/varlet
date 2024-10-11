# 警告信息

### 介绍

警告信息组件会向用户显示简短的消息，但不会中断他们的使用。

### 标题

```html
<template>
  <var-alert title="傲慢与偏见" />
</template>
```

### 信息

```html
<template>
  <var-alert message="我也说不准是在什么时间，什么地点，看见你的什么神情，听见你的什么言语，便开始爱上了你。" />
</template>
```

### 类型

```html
<template>
  <var-space direction="column" size="large">
    <var-alert 
      title="傲慢与偏见" 
      message="我也说不准是在什么时间，什么地点，看见你的什么神情，听见你的什么言语，便开始爱上了你。"
    />
    <var-alert 
      type="success"
      title="傲慢与偏见" 
      message="我也说不准是在什么时间，什么地点，看见你的什么神情，听见你的什么言语，便开始爱上了你。"
    />
    <var-alert 
      type="warning"
      title="傲慢与偏见" 
      message="我也说不准是在什么时间，什么地点，看见你的什么神情，听见你的什么言语，便开始爱上了你。"
    />
    <var-alert
      type="danger"
      title="傲慢与偏见" 
      message="我也说不准是在什么时间，什么地点，看见你的什么神情，听见你的什么言语，便开始爱上了你。"
    />
  </var-space>
</template>
```

### 变体

```html
<template>
  <var-space direction="column" size="large">
    <var-alert 
      title="傲慢与偏见" 
      message="我也说不准是在什么时间，什么地点，看见你的什么神情，听见你的什么言语，便开始爱上了你。"
    />
    <var-alert 
      variant="tonal"
      title="傲慢与偏见" 
      message="我也说不准是在什么时间，什么地点，看见你的什么神情，听见你的什么言语，便开始爱上了你。"
    />
    <var-alert 
      variant="outlined"
      title="傲慢与偏见" 
      message="我也说不准是在什么时间，什么地点，看见你的什么神情，听见你的什么言语，便开始爱上了你。"
    />
  </var-space>
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
    @close="show = false"
  />
</template>
```

## API

### 属性

| 参数          | 说明 | 类型 | 默认值 |
|-------------| ---- | ---- | ---- |
| `type`      | 类型，可选值为 `info` `success` `warning` `danger` | _string_ | `info` |
| `variant`      | 变体，可选值为 `standard` `outlined` `tonal` | _string_ | `standard` |
| `color` | 背景色 | _string_ | `-` |
| `title` | 标题 | _string_ | `-` |
| `message`  | 信息 | _string_ | `-` |
| `elevation`  | 海拔高度，可选值为 `true`、`false` 和 `0-24` 的等级  | _string \| number \| boolean_ | `false`  |
| `closeable` | 是否为可关闭警告 | _boolean_ | `false` |

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
| `--alert-icon-size` | `22px` |
| `--alert-icon-margin` | `0 12px 0 0` |
| `--alert-close-icon-size` | `22px` |
| `--alert-close-icon-margin` | `2px 0 0 12px` |
| `--alert-standard-info-text-color` | `var(--color-on-info)` |
| `--alert-standard-danger-text-color` | `var(--color-on-danger)` |
| `--alert-standard-success-text-color` | `var(--color-on-success)` |
| `--alert-standard-warning-text-color` | `var(--color-on-warning)` |
| `--alert-danger-background` | `var(--color-danger)` |
| `--alert-success-background` | `var(--color-success)` |
| `--alert-warning-background` | `var(--color-warning)` |
| `--alert-info-background` | `var(--color-info)` |
| `--alert-tonal-danger-background` | `hsla(var(--hsl-danger), 0.12)` |
| `--alert-tonal-success-background` | `hsla(var(--hsl-success), 0.12)` |
| `--alert-tonal-warning-background` | `hsla(var(--hsl-warning), 0.12)` |
| `--alert-tonal-info-background` | `hsla(var(--hsl-info), 0.12)` |
| `--alert-tonal-danger-text-color` | `var(--color-danger)` |
| `--alert-tonal-success-text-color` | `var(--color-success)` |
| `--alert-tonal-warning-text-color` | `var(--color-warning)` |
| `--alert-tonal-info-text-color` | `var(--color-info)` |
| `--alert-message-font-size` | `14px` |
| `--alert-title-font-size` | `16px` |
| `--alert-title-font-weight` | `500` |
| `--alert-message-margin-top` | `4px` |
| `--alert-message-line-height` | `1.5` |
| `--alert-title-line-height` | `1.5` |
