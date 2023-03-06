# 悬浮动作按钮

### 介绍

悬浮动作按钮组件，用于快捷菜单。

### 主题色动作按钮

```html
<script setup>
import { ref } from 'vue'

const type = ref('primary')
</script>

<template>
  <var-select :hint="false" v-model="type">
    <var-option label="默认" value="default"/>
    <var-option label="主要" value="primary"/>
    <var-option label="信息" value="info"/>
    <var-option label="成功" value="success"/>
    <var-option label="警告" value="warning"/>
    <var-option label="危险" value="danger"/>
  </var-select>
  <var-fab :type="type" />
</template>
```

### 触发器位置

```html
<script setup>
import { ref } from 'vue'

const position = ref('right-bottom')
</script>

<template>
  <var-radio-group v-model="position">
    <var-radio checked-value="left-top">left-top</var-radio>
    <var-radio checked-value="right-top">right-top</var-radio>
    <var-radio checked-value="left-bottom">left-bottom</var-radio>
    <var-radio checked-value="right-bottom">right-bottom</var-radio>
  </var-radio-group>
  <var-fab :position="position" />
</template>
```

### 触发方式

菜单的内容为默认插槽

```html
<script setup>
import { ref } from 'vue'

const trigger = ref('click')
</script>

<template>
  <var-radio-group v-model="trigger">
    <var-radio checked-value="click">click</var-radio>
    <var-radio checked-value="hover">hover</var-radio>
  </var-radio-group>
  <var-fab :trigger="trigger">
    <var-tooltip content="Tooltip" placement="left">
      <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="mini" />
    </var-tooltip>
    <var-button type="danger" round>
      <var-icon name="check" />
    </var-button>
  </var-fab>
</template>
```

### 动作菜单弹出方向

```html
<script setup>
import { ref } from 'vue'

const direction = ref('top')
</script>

<template>
  <var-radio-group v-model="direction">
    <var-radio checked-value="top">top</var-radio>
    <var-radio checked-value="right">right</var-radio>
    <var-radio checked-value="bottom">bottom</var-radio>
    <var-radio checked-value="left">left</var-radio>
  </var-radio-group>
  <var-fab :direction="direction">
    <var-tooltip content="Tooltip" placement="left">
      <var-avatar src="https://varlet.gitee.io/varlet-ui/cat.jpg" size="mini" />
    </var-tooltip>
    <var-button type="danger" round>
      <var-icon name="check" />
    </var-button>
  </var-fab>
</template>
```

### 自定义触发器

通过 `v-model:active` 进行双向绑定,控制动作菜单是否展开和收起。

```html
<script setup>
import { ref } from 'vue'

const active = ref(false)
function handleActive() {
  active.value = !active.value
}
</script>

<template>
  <var-fab v-model:active="active">
    <template #activator>
      <var-button type="success" round @click.stop="handleActive">
        <var-icon v-if="!active" name="cog-outline" />
        <var-icon v-else name="window-close" />
      </var-button>
    </template>
    
    <var-tooltip content="camera" placement="left">
      <var-button type="warning" round>
        <var-icon name="camera-outline" />
      </var-button>
    </var-tooltip>
    <var-button type="primary" round>
      <var-icon name="phone-outline" />
    </var-button>
  </var-fab>
</template>
```

### 显示时动画

通过 `activator` 插槽，自定义触发器。

```html
<script setup>
import { ref } from 'vue'

const show = ref(true)
</script>

<template>
  <var-fab>
    <template #activator>
      <var-button type="primary" v-show="show" round>
        <var-icon name="plus" />
      </var-button>
    </template>
  </var-fab>
</template>
```

## API

### 属性

#### Fab Props

| 参数              | 说明                                                             | 类型     | 默认值        |
|------------------|----------------------------------------------------------------- |----------|----------------|
| `v-model:active` | 触发器活动状态                                                    | _boolean_ | `false`       |
| `type`           | 同 `Button` 组件，可选值为 `default` `primary` `info` `success` `warning` `danger` | _string_ | `primary`    |
| `color`          | 背景颜色                                                          | _string_ | `-`           |
| `text-color`     | 文字颜色                                                          | _string_ | `-`          |
| `icon`           | 同 `Icon` 组件，图标名称                                           | _string_ | `-`           |
| `icon-size`      | 同 `Icon` 组件，图标尺寸                                           | _string \| number_  | `24px`  |
| `trigger`        | 触发方式，可选值为 `click` `hover`                                 | _string_ | `click`       |
| `direction`      | 动作菜单弹出方向，可选值为 `top` `right` `bottom` `left`            | _string_ | `top`          |
| `position`       | 触发器位置，可选值为 `left-top` `right-top` `right-bottom` `left-bottom` | _boolean_ | `right-bottom`|


### 插槽

#### Fab Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 菜单内容 |  `-` |
| `activator` | 触发器 | `-` |


### 样式变量
以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

#### Fab Variables

| 变量名 | 默认值 |
| --- | --- |
| `--fab-padding` | `10px` |
| `--fab-button-margin` | `6px`|
| `--fab-z-index` |  `1`|
| `--fab-button-size` |  `56px`|
| `--fab-button-item-size` |  `40px`|
| `--fab-vertical-spacing` | `80px`|
| `--fab-horizontal-spacing` | `32px`|
| `--fab-transition-standard-easing` | `cubic-bezier(0.4, 0, 0.2, 1)`|
| `--fab-transition-decelerated-easing` | `cubic-bezier(0, 0, 0.2, 1)`|
| `--fab-transition-accelerated-easing` | `cubic-bezier(0.4, 0, 1, 1)`|