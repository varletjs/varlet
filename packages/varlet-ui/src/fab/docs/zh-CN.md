# 悬浮动作按钮

### 介绍

悬浮动作按钮组件，用于快捷菜单。

### 显示时动画

```html
<script setup>
import { ref } from 'vue'

const show = ref(true)
</script>

<template>
  <var-fab>
    <var-button type="primary" round v-show="show">
      <var-icon  name="plus" />
    </var-button>
  </var-fab>
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
  <var-fab :position="position">
    <var-button type="primary" round>
      <var-icon name="plus" />
    </var-button>
  </var-fab>
</template>
```

### 触发方式

通过`actions`插槽，自定义弹出菜单项的内容。

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
    <var-button type="primary" round>
      <var-icon name="plus" />
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
    <var-button type="primary" round>
      <var-icon name="plus" />
    </var-button>
    <var-icon name="plus" />
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


### 双向绑定

通过 `v-model` 进行双向绑定,控制动作菜单是否展开和收起。

```html
<script setup>
import { ref } from 'vue'

const unfold = ref(false)
function handleUnfold() {
  unfold.value = !unfold.value
}
</script>

<template>
  <var-fab v-model="unfold">
    <var-button type="primary" round @click.stop="handleUnfold">
      <var-icon v-if="!unfold" name="plus" />
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
| `trigger`        | 触发方式，可选值为 `click` `hover`                                    | _string_ | `click`         |
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
| `--fab-size` |  `56px`|
| `--fab-item-size` |  `40px`|
| `--fab-vertical-spacing` | `80px`|
| `--fab-horizontal-spacing` | `32px`|
| `--fab-transition-standard-easing` | `cubic-bezier(0.4, 0, 0.2, 1)`|
| `--fab-transition-decelerated-easing` | `cubic-bezier(0, 0, 0.2, 1)`|
| `--fab-transition-accelerated-easing` | `cubic-bezier(0.4, 0, 1, 1)`|