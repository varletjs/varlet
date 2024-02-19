# 悬浮动作按钮

### 介绍

悬浮动作按钮组件，按下可显示一组动作按钮。

### 主题色按钮

```html
<script setup>
import { ref } from 'vue'

const type = ref('primary')
</script>

<template>
  <var-select v-model="type">
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

  <var-fab type="primary" :trigger="trigger">
    <var-button type="info" icon-container>
      <var-icon name="account-circle" />
    </var-button>
    <var-button type="success" icon-container>
      <var-icon name="checkbox-marked-circle" />
    </var-button>
    <var-button type="warning" icon-container>
      <var-icon name="bell" />
    </var-button>
    <var-button type="danger" icon-container>
      <var-icon name="delete" />
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

  <var-fab type="primary" :direction="direction">
    <var-button type="info" icon-container>
      <var-icon name="account-circle" />
    </var-button>
    <var-button type="success" icon-container>
      <var-icon name="checkbox-marked-circle" />
    </var-button>
    <var-button type="warning" icon-container>
      <var-icon name="bell" />
    </var-button>
    <var-button type="danger" icon-container>
      <var-icon name="delete" />
    </var-button>
  </var-fab>
</template>
```

### 开启拖拽

```html
<script setup>
import { ref } from 'vue'

const drag = ref(false)
</script>

<template>
  <var-switch v-model="drag" />

  <var-fab :drag="drag" />
</template>
```

### 禁用

```html
<script setup>
import { ref } from 'vue'

const disabled = ref(false)
</script>

<template>
  <var-switch v-model="disabled" />

  <var-fab :disabled="disabled" />
</template>
```

### 触发器显示/隐藏

```html
<script setup>
import { ref } from 'vue'

const show = ref(true)

function toggle() {
  show.value = !show.value
}
</script>

<template>
  <var-button type="primary" @click.stop="toggle">切换</var-button>

  <var-fab :show="show" />
</template>
```

### 动作菜单展开/收起

```html
<script setup>
import { ref } from 'vue'

const active = ref(false)

function toggle() {
  active.value = !active.value
}
</script>

<template>
  <var-button type="primary" @click.stop="toggle">切换</var-button>

  <var-fab v-model:active="active" type="primary">
    <var-button type="info" icon-container>
      <var-icon name="account-circle" />
    </var-button>
    <var-button type="success" icon-container>
      <var-icon name="checkbox-marked-circle" />
    </var-button>
    <var-button type="warning" icon-container>
      <var-icon name="bell" />
    </var-button>
    <var-button type="danger" icon-container>
      <var-icon name="delete" />
    </var-button>
  </var-fab>
</template>
```

### 自定义触发器

```html
<template>
  <var-fab>
    <var-button type="info" icon-container>
      <var-icon name="account-circle" :size="24" />
    </var-button>
    <var-button type="success" icon-container>
      <var-icon name="checkbox-marked-circle" :size="24" />
    </var-button>
    <var-button type="warning" icon-container>
      <var-icon name="bell" :size="24" />
    </var-button>
    <var-button type="danger" icon-container>
      <var-icon name="delete" :size="24" />
    </var-button>

    <template #trigger="{ active }">
      <var-button class="trigger" type="primary" round>
        <var-icon :name="active ? 'heart' : 'heart-half-full'" animation-class="fade" :transition="300" :size="24" />
      </var-button>
    </template>
  </var-fab>
</template>

<style>
.trigger {
  width: 64px !important;
  height: 64px !important;
  border-radius: 8px !important;
}

.fade {
  transition-property: opacity, transform;
  opacity: 0;
  transform: rotate(90deg)
}
</style>
```

## API

### 属性

| 参数              | 说明                                                             | 类型     | 默认值        |
|------------------|----------------------------------------------------------------- |----------|----------------|
| `v-model:active` | 是否激活动作菜单                                                    | _boolean_ | `false`       |
| `show`           | 是否显示触发器 | _boolean_ | `true`    |
| `drag`      | Drag 组件配置，用于深度定制（支持 `direction` `attraction` `boundary`） | _boolean \| DragProps_  | `false`    |
| `type`           | 类型，可选值为 `default` `primary` `info` `success` `warning` `danger` | _string_ | `primary`    |
| `position` | 触发器位置，可选值为 `left-top` `right-top` `left-bottom` `right-bottom` | _string_ | `right-bottom`    |
| `direction` | 动作菜单弹出方向，可选值为 `top` `bottom` `left` `right` | _string_ | `top`    |
| `trigger` | 触发方式 `click` `hover` | _string_ | `click`    |
| `disabled` | 是否禁用 | _boolean_ | `false`    |
| `color` | 触发器颜色 | _string_ | `-`    |
| `inactive-icon` | 未激活时触发器图标 | _string_ | `plus`    |
| `active-icon` | 激活时触发器图标 | _string_ | `window-close`    |
| `inactive-icon-size` | 未激活时触发器图标尺寸 | _string \| number_ | `-` |
| `active-icon-size` | 激活时触发器图标尺寸 | _string \| number_ | `-` |
| `inactive-icon-namespace` | 未激活时触发器图标的命名空间 | _string_ | `var-icon`    |
| `active-icon-namespace` | 激活时触发器图标的命名空间 | _string_ | `var-icon`  |
| `fixed` | 是否使用固定定位，设置为 `false` 可开启绝对定位（绝对定位无法使用拖拽） | _boolean_ | `true` |
| `z-index` | 同 css z-index，用于自定义触发器层级 | _string \| number_ | `90` |
| `top` | 同 css top，用于自定义触发器位置 | _string \| number_ | `-` |
| `bottom` | 同 css bottom，用于自定义触发器位置 | _string \| number_ | `-` |
| `left` | 同 css left，用于自定义触发器位置 | _string \| number_ | `-` |
| `right` | 同 css right，用于自定义触发器位置 | _string \| number_ | `-` |
| `safe-area` | 是否开启底部安全区适配	 | _boolean_ | `false` |
| `teleport` | 组件挂载的元素 | _TeleportProps['to'] \| false_ | `body` |
| `elevation`      | 海拔高度，可选值为 `true`、`false` 和 `0-24` 的等级 | _string \| number \| boolean_ | `true`            |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `click` | 点击触发器时触发，在 `disabled` 状态为 `true` 时不触发 | `active: boolean, event: Event` |
| `open` | 在激活并打开动作菜单时触发 | `-` |
| `opened` | 在激活并打开动作菜单的动画结束时触发 | `-` |
| `close` | 在失活并关闭动作菜单时触发 | `-` |
| `closed` | 在失活并关闭动作菜单的动画结束时触发 | `-` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 动作菜单 |  `-` |
| `trigger` | 触发器 | `{ active: boolean }` |


### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名 | 默认值 |
| --- | --- |
| `--fab-top` | `70px` |
| `--fab-bottom` | `16px` |
| `--fab-left` | `16px` |
| `--fab-right` | `16px` |
| `--fab-trigger-size` | `56px` |
| `--fab-trigger-border-radius` | `50%` |
| `--fab-trigger-inactive-icon-size` | `26px` |
| `--fab-trigger-active-icon-size` | `22px` |
| `--fab-actions-padding` | `10px 0` |
| `--fab-action-margin` | `6px` |
| `--fab-action-size` | `40px` |
| `--fab-action-border-radius` | `50%` |
| `--fab-transition-standard-easing` | `cubic-bezier(0.4, 0, 0.2, 1)` |
