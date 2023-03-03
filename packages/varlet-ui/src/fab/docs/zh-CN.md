# 悬浮动作按钮

### 介绍

悬浮动作按钮组件，用于快捷菜单。

### 基础用法

```html
<script setup>
import { ref } from 'vue'

const isShow = ref(false)
</script>

<template>
  <var-fab>
    <var-button type="primary" round size="large" v-show="!isShow">
      <var-icon  name="plus" />
    </var-button>
  </var-fab>
</template>
```

### 组合用法

```html
<script setup>
import { ref } from 'vue'

const fab = ref(false)
const trigger = ref('click')
const position = ref('right-bottom')
const direction = ref('top')
</script>

<template>
  <var-fab 
    v-model="fab" 
    :position="position" 
    :direction="direction" 
    :trigger="trigger">
    <var-button type="primary" round size="large">
      <var-icon v-if="!fab" name="plus" />
      <var-icon v-else name="window-close" />
    </var-button>
    <template #actions>
      <var-tooltip content="Tooltip" placement="left">
        <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="mini" />
      </var-tooltip>
      <var-button type="primary" round>
        <var-icon name="check" />
      </var-button>
    </template>
  </var-fab>
</template>
```

## API

### 属性

#### Fab Props

| 参数              | 说明                                                               | 类型     | 默认值        |
|------------------|-----------------------------------------------------------------   |----------|----------------|
| `v-model`        | active状态                                                         | _boolean_ | `false`        |
| `trigger`        | 触发类型，可选值为 `click` `hover`                                    | _string_ | `click`         |
| `direction`      | 动作菜单弹出方向，可选值为 `top` `right` `bottom` `left`              | _string_ | `top`           |
| `position`       | 触发器位置，可选值为 `left-top` `right-top` `right-bottom` `left-bottom` | _boolean_ | `right-bottom` |

### 插槽

#### Fab Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 触发器 | `default` |
| `actions` | 菜单内容 | `-` |


### 样式变量
以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

#### Fab Variables

| 变量名 | 默认值 |
| --- | --- |
| `--fab-padding` | `10px` |
| `--fab-button-margin` | `6px`|
| `--fab-z-index` |  `1`|
| `--fab-vertical-spacing` | `80px`|
| `--fab-horizontal-spacing` | `32px`|
| `--fab-transition-standard-easing` | `cubic-bezier(0.4, 0, 0.2, 1)`|
| `--fab-transition-decelerated-easing` | `cubic-bezier(0, 0, 0.2, 1)`|
| `--fab-transition-accelerated-easing` | `cubic-bezier(0.4, 0, 1, 1)`|