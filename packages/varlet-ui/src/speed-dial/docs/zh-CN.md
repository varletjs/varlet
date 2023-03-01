# 浮动动作按钮

### 介绍

浮动动作按钮组件，用于快捷菜单。

### 基本用法

```html
<script setup>
import { ref } from 'vue'

const fab = ref(false)
const trigger = ref('click')
const direction = ref('top')
const transition = ref('slide-y-reverse-transition')
const top = ref(false)
const right = ref(true)
const bottom = ref(true)
const left = ref(false)
</script>
<template>
  <var-speed-dial
    v-model="fab"
    absolute
    :bottom="bottom"
    :right="right"
    :top="top"
    :left="left"
    :direction="direction"
    :transition="transition"
    :trigger="trigger"
  >
    <template #activator>
      <var-button type="primary" round size="large">
        <var-icon v-if="!fab" name="plus" />
        <var-icon v-else name="window-close" />
      </var-button>
    </template>
    <var-tooltip content="Tooltip" placement="left">
      <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="mini" />
    </var-tooltip>
    <var-button type="primary" round>
      <var-icon name="check" />
    </var-button>
  </var-speed-dial>
</template>
```

## API

### 属性

#### SpeedDial Props

| 参数              | 说明                                                               | 类型     | 默认值        |
|------------------|-----------------------------------------------------------------   |----------|----------------|
| `v-model`        | active状态                                                         | _boolean_ | `false`        |
| `trigger`        | 触发类型，可选值为 `click` `hover`                                      | _string_ | `click`         |
| `direction`      | 方向类型，可选值为 `top` `right` `bottom` `left`                        | _string_ | `top`           |
| `position`       | 此属性为组合式的，必填其一`absolute`, `fixed` 可选 `top` `right` `bottom` `left` | _boolean_ | `-` |
| `transition`     | 内置动画，可选值为 `slide-y-reverse-transition` `slide-y-transition` `slide-x-reverse-transition` `slide-x-transition` `scale-transition`                                  | _string_ | `slide-y-reverse-transition`    |

### 插槽

#### SpeedDial Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `activator` | 按钮内容 | `-` |


### 样式变量
以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

#### SpeedDial Variables

| 变量名 | 默认值 |
| --- | --- |
| `--speed-dial-padding` | `10px` |
| `--speed-dial-button-margin` | `6px`|
| `--speed-dial-z-index` |  `1`|
| `--speed-dial-size` | `16px`|