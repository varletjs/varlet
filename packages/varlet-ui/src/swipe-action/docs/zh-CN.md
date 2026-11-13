# 滑动操作

### 介绍

滑动列表项以显示左右两侧的操作按钮，适用于删除、编辑和标记已读等场景。

### 基本使用

通过 `right-actions` 设置右侧操作按钮，向左滑动时显示。操作按钮复用 `Button` 的类型和颜色设置。

```html
<script setup>
import { Snackbar } from '@varlet/ui'

const rightActions = [{ key: 'delete', text: '删除', type: 'danger' }]

function handleAction(action, side) {
  Snackbar(action.text)
}
</script>

<template>
  <var-swipe-action :right-actions="rightActions" @action="handleAction">
    <var-cell title="向左滑动显示操作按钮" />
  </var-swipe-action>
</template>
```

### 左右操作

通过 `left-actions` 设置左侧操作按钮，向右滑动时显示。两侧都支持多个按钮。

```html
<script setup>
const leftActions = [{ key: 'read', text: '已读', type: 'primary' }]
const rightActions = [
  { key: 'edit', text: '编辑', type: 'info' },
  { key: 'delete', text: '删除', type: 'danger' },
]
</script>

<template>
  <var-swipe-action :left-actions="leftActions" :right-actions="rightActions">
    <var-cell title="向左或向右滑动" />
  </var-swipe-action>
</template>
```

### 禁用

`disabled` 会禁用滑动和配置的操作按钮，并关闭已展开的操作区域。可以通过操作项的 `disabled` 单独禁用一个按钮。

```html
<script setup>
const rightActions = [{ key: 'delete', text: '删除', type: 'danger' }]
</script>

<template>
  <var-swipe-action disabled :right-actions="rightActions">
    <var-cell title="禁用后无法滑动" />
  </var-swipe-action>
</template>
```

### 点击操作后保持展开

默认点击操作按钮后自动归位。设置 `close-on-click-action` 为 `false` 可以保持展开，例如等待业务操作完成后调用 `close()`。
默认点击或触摸组件外部会归位，可以通过 `close-on-click-outside` 关闭此行为。
展开时点击内容区域只会归位，不会触发内容中的点击操作。

```html
<script setup>
const rightActions = [{ key: 'read', text: '已读', type: 'primary' }]
</script>

<template>
  <var-swipe-action :right-actions="rightActions" :close-on-click-action="false">
    <var-cell title="点击按钮后不会自动归位" />
  </var-swipe-action>
</template>
```

### 自定义操作区域

`left`、`right` 插槽会替换对应侧的操作按钮。组件按操作区域的实际宽度展开，插槽通过 `close` 提供归位方法。
自定义按钮的样式和禁用状态由插槽内容控制。

```html
<template>
  <var-swipe-action>
    <var-cell title="通过插槽自定义操作按钮" />
    <template #right="{ close }">
      <var-button type="danger" :elevation="false" style="height: 100%; border-radius: 0" @click="close">
        删除
      </var-button>
    </template>
  </var-swipe-action>
</template>
```

### 实例方法

使用 `open(side)` 展开操作区域，默认展开右侧；使用 `close()` 归位。
组件会在挂载、窗口尺寸变化和操作区域尺寸变化时更新宽度。手动改变布局后也可以调用 `resize()`。

```html
<script setup>
import { ref } from 'vue'

const swipeAction = ref(null)
const leftActions = [{ key: 'read', text: '已读', type: 'primary' }]
const rightActions = [{ key: 'delete', text: '删除', type: 'danger' }]
</script>

<template>
  <var-swipe-action ref="swipeAction" :left-actions="leftActions" :right-actions="rightActions">
    <var-cell title="通过实例方法控制操作区域" />
  </var-swipe-action>
  <div style="margin-top: 16px">
    <var-space>
      <var-button type="primary" @click="swipeAction.open('left')">展开左侧</var-button>
      <var-button type="primary" @click="swipeAction.open()">展开右侧</var-button>
      <var-button @click="swipeAction.close()">关闭</var-button>
    </var-space>
  </div>
</template>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `left-actions` | 左侧操作按钮 | _SwipeActionItem[]_ | `[]` |
| `right-actions` | 右侧操作按钮 | _SwipeActionItem[]_ | `[]` |
| `disabled` | 是否禁用滑动和配置的操作按钮 | _boolean_ | `false` |
| `duration` | 展开和归位动画的时长，单位毫秒 | _string \| number_ | `300` |
| `close-on-click-action` | 是否在点击操作区域后自动归位 | _boolean_ | `true` |
| `close-on-click-outside` | 是否在点击、触摸或焦点离开组件后自动归位 | _boolean_ | `true` |

### SwipeActionItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `key` | 唯一标识，必填 | _string \| number_ | `-` |
| `text` | 按钮文字，必填 | _string_ | `-` |
| `type` | 按钮类型，可选值为 `default` `primary` `info` `success` `warning` `danger` | _string_ | `default` |
| `color` | 按钮背景颜色 | _string_ | `-` |
| `textColor` | 按钮文字颜色 | _string_ | `-` |
| `disabled` | 是否禁用该按钮 | _boolean_ | `false` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `open` | 开始展开操作区域或切换展开侧时触发，重复展开同一侧不会触发 | `side: 'left' \| 'right'` |
| `close` | 已展开的操作区域开始归位时触发 | `-` |
| `action` | 点击配置的操作按钮时触发 | `action: SwipeActionItem, side: 'left' \| 'right', event: Event` |

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `open` | 展开指定侧，无操作内容或禁用时不会展开 | `side?: 'left' \| 'right'`，默认 `right` | `-` |
| `close` | 归位 | `-` | `-` |
| `resize` | 更新操作区域宽度 | `-` | `-` |

### 插槽

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 列表项内容 | `-` |
| `left` | 自定义左侧操作区域 | `close: () => void` |
| `right` | 自定义右侧操作区域 | `close: () => void` |

### 样式变量

| 变量名 | 默认值 |
| --- | --- |
| `--swipe-action-background` | `var(--color-surface-container-low)` |
| `--swipe-action-action-padding` | `0 20px` |
| `--swipe-action-action-font-size` | `var(--font-size-md)` |
