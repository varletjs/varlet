# 按钮

### 介绍

按钮组件，用于触发操作。

### 主题色按钮

```html
<template>
  <var-space :size="[10, 10]">
    <var-button>默认按钮</var-button>
    <var-button type="primary">主要按钮</var-button>
    <var-button type="info">信息按钮</var-button>
    <var-button type="success">成功按钮</var-button>
    <var-button type="warning">警告按钮</var-button>
    <var-button type="danger">危险按钮</var-button>
  </var-space>
</template>
```

### 文字按钮

```html
<template>
  <var-space :size="[10, 10]">
    <var-button text outline type="primary">外边框按钮</var-button>
    <var-button text type="primary">纯文字按钮</var-button>
  </var-space>
</template>
```

### 禁用状态

```html
<template>
  <var-space :size="[10, 10]">
    <var-button disabled>禁用状态</var-button>
    <var-button disabled text outline>禁用状态</var-button>
    <var-button disabled text>禁用状态</var-button>
  </var-space>
</template>
```

### 加载状态

```html
<template>
  <var-space :size="[10, 10]">
    <var-button loading type="primary">
      加载状态
    </var-button>
    <var-button loading type="info" loading-type="rect">
      加载状态
    </var-button>
    <var-button loading type="success" loading-type="disappear">
      加载状态
    </var-button>
    <var-button loading type="danger" loading-type="cube">
      加载状态
    </var-button>
    <var-button loading type="warning" loading-type="wave">
      加载状态
    </var-button>
  </var-space>
</template>
```

### 按钮尺寸

```html
<template>
  <var-space align="center" :size="[10, 10]">
    <var-button type="primary">常规按钮</var-button>
    <var-button type="success" size="small">小型按钮</var-button>
    <var-button type="warning" size="mini">迷你按钮</var-button>
    <var-button type="danger" size="large">大型按钮</var-button>
  </var-space>
</template>
```

### 块级按钮

```html
<template>
  <var-button block type="primary">块级按钮</var-button>
</template>
```

### 自定义颜色

```html
<template>
  <var-space :size="[10, 10]">
    <var-button color="#66bb6a" text-color="#fff">背景/文字</var-button>
    <var-button
      color="linear-gradient(to right, #69dbaa, #3a7afe)"
      text-color="#fff"
    >
      使用渐变
    </var-button>
  </var-space>
</template>
```

### 圆形按钮

```html
<template>
  <var-space :size="[10, 10]">
    <var-button type="primary" round>
      <var-icon name="plus" />
    </var-button>
    <var-button type="info" round>
      <var-icon name="information" />
    </var-button>
    <var-button type="success" round>
      <var-icon name="check" />
    </var-button>
    <var-button type="warning" round>
      <var-icon name="warning" />
    </var-button>
    <var-button type="danger" round>
      <var-icon name="window-close" />
    </var-button>
  </var-space>
</template>
```

### 注册事件

```html
<script setup>
import { Snackbar } from '@varlet/ui'

function handleClick() {
  Snackbar.success('点击成功')
}

function handleTouchstart() {
  Snackbar.success('触摸成功')
}

function handleAutoLoadingClick() {   
  return new Promise((resolve) => {
    setTimeout(resolve, 2000)
  })
}
</script>

<template>
  <var-space :size="[10, 10]">
    <var-button type="success" @click="handleClick">点击</var-button>
    <var-button type="success" @touchstart="handleTouchstart">触摸</var-button>
    <var-button
      type="success"
      auto-loading
      @click="handleAutoLoadingClick"
    >
      自动 loading
    </var-button>
  </var-space>
</template>
```

### 主题色按钮组

```html
<template>
  <var-space :size="[10, 10]">
    <var-button-group type="default">
      <var-button>默认按钮</var-button>
      <var-button>默认按钮</var-button>
      <var-button>默认按钮</var-button>
    </var-button-group>
    
    <var-button-group type="primary">
      <var-button type="primary">主要按钮</var-button>
      <var-button type="primary">主要按钮</var-button>
      <var-button type="primary">主要按钮</var-button>
    </var-button-group>
    
    <var-button-group type="info">
      <var-button type="info">信息按钮</var-button>
      <var-button type="info">信息按钮</var-button>
      <var-button type="info">信息按钮</var-button>
    </var-button-group>
    
    <var-button-group type="success">
      <var-button type="success">成功按钮</var-button>
      <var-button type="success">成功按钮</var-button>
      <var-button type="success">成功按钮</var-button>
    </var-button-group>
    
    <var-button-group type="warning">
      <var-button type="warning">警告按钮</var-button>
      <var-button type="warning">警告按钮</var-button>
      <var-button type="warning">警告按钮</var-button>
    </var-button-group>
    
    <var-button-group type="danger">
      <var-button type="danger">危险按钮</var-button>
      <var-button type="danger">危险按钮</var-button>
      <var-button type="danger">危险按钮</var-button>
    </var-button-group>
  </var-space>
</template>
```

### 按钮组尺寸

```html
<template>
  <var-space :size="[10, 10]">
    <var-button-group size="normal" type="primary">
      <var-button>常规按钮</var-button>
      <var-button>常规按钮</var-button>
      <var-button>常规按钮</var-button>
    </var-button-group>
    
    <var-button-group size="small" type="success">
      <var-button>小型按钮</var-button>
      <var-button>小型按钮</var-button>
      <var-button>小型按钮</var-button>
    </var-button-group>
    
    <var-button-group size="mini" type="warning">
      <var-button>迷你按钮</var-button>
      <var-button>迷你按钮</var-button>
      <var-button>迷你按钮</var-button>
    </var-button-group>
    
    <var-button-group size="large" type="danger">
      <var-button>大型按钮</var-button>
      <var-button>大型按钮</var-button>
      <var-button>大型按钮</var-button>
    </var-button-group>
  </var-space>
</template>
```

### 文字按钮组

```html
<template>
  <var-space :size="[10, 10]">
    <var-button-group mode="text">
      <var-button>文字按钮</var-button>
      <var-button>文字按钮</var-button>
      <var-button>文字按钮</var-button>
    </var-button-group>
    
    <var-button-group type="primary" mode="outline">
      <var-button>外边框按钮</var-button>
      <var-button>外边框按钮</var-button>
      <var-button>外边框按钮</var-button>
    </var-button-group>
  </var-space>
</template>
```

### 自定义按钮组颜色

```html
<template>
  <var-button-group type="primary" color="linear-gradient(to right, #69dbaa, #3a7afe)">
    <var-button>自定义按钮组颜色</var-button>
    <var-button>自定义按钮组颜色</var-button>
    <var-button>自定义按钮组颜色</var-button>
  </var-button-group>
</template>
```

### 按钮组竖直排列

```html
<template>
  <var-button-group type="primary" mode="outline" vertical>
    <var-button>主要按钮</var-button>
    <var-button>主要按钮</var-button>
    <var-button>主要按钮</var-button>
  </var-button-group>
</template>
```

## API

### 属性

| 参数               | 说明                                                              | 类型        | 默认值            |
|------------------|-----------------------------------------------------------------|-----------|----------------|
| `type`           | 类型，可选值为 `default` `primary` `info` `success` `warning` `danger` | _string_  | `default`      |
| `native-type`    | 原生类型，可选值为 `button` `submit` `reset`                             | _string_  | `button`       |
| `size`           | 尺寸，可选值为 `normal` `mini` `small` `large`                         | _string_  | `normal`       |
| `loading`        | 加载状态                                                            | _boolean_ | `false`        |
| `loading-radius` | loading 的半径，只作用于 `loading-type="circle"` 时                      | _string \ | number_        | `-` |
| `loading-type`   | loading 的类型，可选值为 `circle` `wave` `cube` `rect` `disappear`      | _string_  | `circle`       |
| `loading-size`   | loading 的尺寸，可选值为 `large` `normal` `small` `mini`                | _string_  | `normal`       |
| `loading-color`  | loading 的颜色                                                     | _string_  | `currentColor` |
| `auto-loading`   | 自动 loading 模式，方便处理异步任务                                          | _boolean_ | `false`        |
| `round`          | 是否是圆形按钮                                                         | _boolean_ | `false`        |
| `block`          | 是否是块级元素                                                         | _boolean_ | `false`        |
| `text`           | 是否是文字按钮                                                         | _boolean_ | `false`        |
| `outline`        | 是否使用外边框                                                         | _boolean_ | `false`        |
| `disabled`       | 禁用状态                                                            | _boolean_ | `false`        |
| `ripple`         | 是否使用水波纹                                                         | _boolean_ | `true`         |
| `text-color`     | 文字颜色                                                            | _string_  | `-`            |
| `color`          | 背景颜色                                                            | _string_  | `-`            |

## 按钮组API

### 属性

| 参数           | 说明                                                              | 类型        | 默认值       |
|--------------|-----------------------------------------------------------------|-----------|-----------|
| `type`       | 类型，可选值为 `default` `primary` `info` `success` `warning` `danger` | _string_  | `default` |
| `size`       | 尺寸，可选值为 `normal` `mini` `small` `large`                         | _string_  | `normal`  |
| `mode`       | 模式，可选值为 `text` `outline`                                        | _string_  | `-`       |
| `vertical`   | 是否竖直排列                                                          | _boolean_ | `false`   |
| `elevation`  | 卡片阴影程度等级                                               | _string \ | number_  | `2`     |
| `color`      | 背景颜色                                                            | _string_  | `-`       |


### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击按钮时触发，在 `loading` 或 `disabled` 状态为 `true` 时不触发 | `event: Event` |
| `touchstart` | 触摸手指压下按钮时触发，在 `loading` 或 `disabled` 状态为 `true` 时不触发 | `event: Event` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 按钮内容 | `-` |

### 样式变量
以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名 | 默认值 |
| --- | --- |
| `--button-default-color` | `#f5f5f5` |
| `--button-primary-color` | `var(--color-primary)`|
| `--button-danger-color` |  `var(--color-danger)`|
| `--button-success-color` | `var(--color-success)`|
| `--button-warning-color` |  `var(--color-warning)`|
| `--button-info-color` | `var(--color-info)`|
| `--button-disabled-color` | `var(--color-disabled)`|
| `--button-disabled-text-color` | `var(--color-text-disabled)` |
| `--button-border-radius` | `4px` |
| `--button-mini-padding` | `0 9px` |
| `--button-small-padding` | `0 11px` |
| `--button-normal-padding` | `0 15px` |
| `--button-large-padding` | `0 22px` |
| `--button-round-padding` | `6px` |
| `--button-mini-height` | `20px` |
| `--button-small-height` | `28px` |
| `--button-normal-height` | `36px` |
| `--button-large-height` | `44px` |
| `--button-mini-font-size` | `var(--font-size-xs)` |
| `--button-small-font-size` | `var(--font-size-sm)` |
| `--button-normal-font-size` | `var(--font-size-md)` |
| `--button-large-font-size` | `var(--font-size-lg)` |