# 菜单

### 介绍
使元素点击时显示一个菜单，通过控制菜单的对齐方式和偏移量自由的控制菜单的显示位置。

### 注意
Menu 是一个 `inline-block` 元素，通过默认插槽点击时显示菜单，如果希望 Menu 独占一行推荐包裹一个 `block` 元素。

### 基本使用

Menu 现在默认使用非受控的方式控制, 内置了点击的弹出事件。

```html
<var-menu>
  <var-button type="primary">基本使用</var-button>
  <template #menu>
    <var-cell>菜单项</var-cell>
    <var-cell>菜单项</var-cell>
    <var-cell>菜单项</var-cell>
  </template>
</var-menu>
```

### 弹出位置

```html
<var-menu placement="top">
  <var-button type="primary">弹出位置</var-button>
  <template #menu>
    <var-cell>菜单项</var-cell>
    <var-cell>菜单项</var-cell>
    <var-cell>菜单项</var-cell>
  </template>
</var-menu>
```

### 偏移量

可以用 `offset-x` 和 `offset-y` 来设置 Menu 弹出的偏移量

```html
<var-menu offsetX="36px" offsetY="18px">
  <var-button type="primary">偏移量</var-button>
  <template #menu>
    <var-cell>菜单项</var-cell>
    <var-cell>菜单项</var-cell>
    <var-cell>菜单项</var-cell>
  </template>
</var-menu>
```

### 触发方式

Menu 的 `trigger` 默认为 `click`, 但可以改为用 `hover` 触发

```html
<var-menu trigger="hover">
  <var-button type="primary">触发方式</var-button>
  <template #menu>
    <var-cell>菜单项</var-cell>
    <var-cell>菜单项</var-cell>
    <var-cell>菜单项</var-cell>
  </template>
</var-menu>
```

### 注册事件

Menu 提供了四个在打开与关闭时的钩子

```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

const open = () => Snackbar.info('open')
const opened = () => Snackbar.info('opened')
const close = () => Snackbar.info('close')
const closed = () => Snackbar.info('closed')
</script>

<template>
  <var-menu
    @open="open"
    @opened="opened"
    @close="close"
    @closed="closed"
  >
    <var-button type="primary">注册事件</var-button>
    <template #menu>
      <var-cell>菜单项</var-cell>
      <var-cell>菜单项</var-cell>
      <var-cell>菜单项</var-cell>
    </template>
  </var-menu>
</template>
```

### 禁用

在 `disabled` 状态下，菜单将不再被打开, 如果动态更改 `disabled`, 即使菜单已经打开也会强制关闭。 

```html
<var-menu disabled>
  <var-button type="primary">禁用</var-button>
  <template #menu>
    <var-cell>菜单项</var-cell>
    <var-cell>菜单项</var-cell>
    <var-cell>菜单项</var-cell>
  </template>
</var-menu>
```

### 受控方式

也可以选择 `v-model:show` 的可受控方式来控制 Menu 的显示, 但是 Menu 在点击组件范围以外的区域自动关闭，所以不可以使用同一个状态绑定多个 Menu 的 `v-model:show`，否则在触发显示时也同时触发了其他 Menu 对 `v-model:show` 的修改，导致 Menu 无法显示。

```html
<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <var-menu v-model:show="show">
    <var-button type="primary">受控方式</var-button>
    <template #menu>
      <var-cell>菜单项</var-cell>
      <var-cell>菜单项</var-cell>
      <var-cell>菜单项</var-cell>
    </template>
  </var-menu>
</template>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| ------- | --- | --- | --- |
| `v-model:show` | 是否显示菜单 | _string_ | `default` |
| `placement` | 菜单弹出位置 | _options.placement_ | `cover-top-start` |
| `offset-x` | x 轴偏移量， 相对于菜单对齐后的位置 | _number \| string_ | `0` |
| `offset-y` | y 轴偏移量， 相对于菜单对齐后的位置 | _number \| string_ | `0` |
| `teleport` | 菜单挂载的位置 | _TeleportProps['to']_ | `body` |
| `disabled` | 是否禁用菜单 | _boolean_ | `false` |
| `trigger` | 菜单触发方式，可选值为`click` `hover`，`click`为点击时触发，`hover`为悬停时触发 | _string_ | `click` |
| `defaultStyle` | 是否启用默认样式 | _boolean_ | `true` |

### Placement

| 参数 | 说明 |
| ------- | ------ |
| `top` |顶部中心位置 |
| `top-start` | 顶部左侧位置 |
| `top-end` | 顶部右侧位置 |
| `bottom` | 底部中心位置 |
| `bottom-start` | 底部左侧位置 |
| `bottom-end` | 底部右侧位置 |
| `right` | 右侧中心位置 |
| `right-start` | 右侧上方位置 |
| `right-end` | 右侧下方位置 |
| `left` | 左侧中心位置 |
| `left-start` | 左侧上方位置 |
| `left-end` | 左侧下方位置 |
| `cover-top` | 顶部下方中心位置 |
| `cover-top-start` | 顶部下方左侧位置 |
| `cover-top-end` | 顶部下方右侧位置 |
| `cover-bottom` | 底部上方中心位置 |
| `cover-bottom-start` | 底部上方左侧位置 |
| `cover-bottom-end` | 底部上方右侧位置 |
| `cover-left` | 左侧右方位置 |
| `cover-right` | 右侧左方位置 |

### 方法
| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `open` | 打开 Menu | `-` | `-` |
| `close` | 关闭 Menu | `-` | `-` |
| `resize` | Menu 默认插槽元素产生位置大小变化时可以调用此方法进行重绘 | `-` | `-` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `open` | 打开菜单时触发 | `-` |
| `opened` | 打开菜单动画结束时触发 | `-` |
| `close` | 关闭菜单时触发 | `-` |
| `closed` | 关闭菜单动画结束时触发 | `-` |
| `closed` | 关闭菜单动画结束时触发 | `-` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 菜单关联的触发元素 | `-` |
| `menu` | 菜单内容 | `-` |
