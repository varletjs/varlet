# 提示

### 介绍

当元素点击或悬停时显示一个提示，通过控制弹出位置和偏移量改变提示的显示位置。

### 基本使用

```html
<template>
  <var-tooltip content="Tooltip">
    <var-button type="primary">基本使用</var-button>
  </var-tooltip>
</template>
```

### 内容插槽

```html
<template>
  <var-tooltip>
    <var-button type="primary">内容插槽</var-button>
    
    <template #content>
      <var-icon name="star" />
    </template>
  </var-tooltip>
</template>
```

### 弹出位置

```html
<script setup>
import { ref } from 'vue'

const placement = ref('top')
const placementOptions = [
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'right',
  'right-start',
  'right-end',
  'left',
  'left-start',
  'left-end',
]
</script>

<template>
  <var-select :hint="false" v-model="placement">
    <var-option 
      v-for="(item, index) in placementOptions" 
      :key="index"
      :label="item" 
    />
  </var-select>
  
  <div class="placement-container">
    <var-tooltip content="Tooltip" :placement="placement">
      <var-button type="primary">
        <var-icon name="star" />
      </var-button>
    </var-tooltip>
  </div>
</template>

<style>
.placement-container {
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
```

### 主题色

```html
<template>
  <var-space :size="[54, 10]">
    <var-tooltip type="default" content="Tooltip">
      <var-button type="default">默认</var-button>
    </var-tooltip>
    <var-tooltip type="primary" content="Tooltip">
      <var-button type="primary">主要</var-button>
    </var-tooltip>
    <var-tooltip type="info" content="Tooltip">
      <var-button type="info">信息</var-button>
    </var-tooltip>
    <var-tooltip type="success" content="Tooltip">
      <var-button type="success">成功</var-button>
    </var-tooltip>
    <var-tooltip type="warning" content="Tooltip">
      <var-button type="warning">警告</var-button>
    </var-tooltip>
    <var-tooltip type="danger" content="Tooltip">
      <var-button type="danger">危险</var-button>
    </var-tooltip>
  </var-space>
</template>
```

### 自定义颜色

```html
<template>
  <var-tooltip content="Tooltip" color="#d81b60">
    <var-button type="primary">自定义颜色</var-button>
  </var-tooltip>
</template>
```

### 偏移量

通过 `offset-x` 和 `offset-y` 设置 `Tooltip` 弹出的偏移量

```html
<template>
  <var-tooltip content="Tooltip" :offset-x="64" :offset-y="-10">
    <var-button type="primary">偏移量</var-button>
  </var-tooltip>
</template>
```

### 触发方式

通过 `trigger` 改变 `Tooltip` 显示的触发方式，可选值为 `click` 和 `hover`

```html
<template>
  <var-tooltip content="Tooltip" trigger="hover">
    <var-button type="primary">触发方式</var-button>
  </var-tooltip>
</template>
```

### 注册事件

```html
<script setup>
import { Snackbar } from '@varlet/ui'

const open = () => Snackbar.info('open')
const opened = () => Snackbar.success('opened')
const close = () => Snackbar.warning('close')
const closed = () => Snackbar.error('closed')
</script>

<template>
  <var-tooltip
    content="Tooltip"
    @open="open"
    @opened="opened"
    @close="close"
    @closed="closed"
  >
    <var-button type="primary">注册事件</var-button>
  </var-tooltip>
</template>
```

### 禁用

在 `disabled` 状态下，`Tooltip` 将不再被打开。 

```html
<template>
  <var-tooltip content="Tooltip" disabled>
    <var-button type="primary" disabled>禁用</var-button>
  </var-tooltip>
</template>
```

## API

### 属性

| 参数 | 说明 | 类型             | 默认值       |
| ------- | --- |----------------|-----------|
| `v-model:show` | 是否显示 | _string_       | `false`   |
| `content` | 显示的内容 | _string_    | `-`       |
| `color` | 背景颜色 | _string_       | `-`       |
| `type`  | 类型，可选值为 `default` `primary` `info` `success` `warning` `danger` | _string_  | `default` |
| `placement` | 弹出位置 | _Placement_    | `top`     |
| `offset-x` | x 轴偏移量， 相对于 `Tooltip` 对齐后的位置 | _number \| string_   | `0` |
| `offset-y` | y 轴偏移量， 相对于 `Tooltip` 对齐后的位置 | _number \| string_   | `0` |
| `teleport` | 挂载的位置 | _TeleportProps['to']_ | `body`    |
| `disabled` | 是否禁用 Tooltip | _boolean_      | `false`   |
| `trigger` | 触发方式，可选值为 `click` `hover`, `click` 为点击时触发, `hover` 为悬停时触发 | _string_       | `hover`   |

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

### 方法
| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `open` | 打开 `Tooltip` | `-` | `-` |
| `close` | 关闭 `Tooltip` | `-` | `-` |
| `resize` | `Tooltip` 默认插槽元素产生位置大小变化时可以调用此方法进行重绘 | `-` | `-` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `open` | 打开 `Tooltip` 时触发 | `-` |
| `opened` | 打开 `Tooltip` 动画结束时触发 | `-` |
| `close` | 关闭 `Tooltip` 时触发 | `-` |
| `closed` | 关闭 `Tooltip` 动画结束时触发 | `-` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | `Tooltip` 关联的触发元素 | `-` |
| `content` | `Tooltip` 内容 | `-` |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制

| 变量名 | 默认值 |
| --- | --- |
| `--tooltip-opacity` | `0.9` |
| `--tooltip-border-radius` | `4px` |
| `--tooltip-font-size` | `14px` |
| `--tooltip-padding` | `8px 16px` |
| `--tooltip-default-color` | `#616161` |
| `--tooltip-offset` | `10px` |
| `--tooltip-primary-color` | `var(--color-primary)` |
| `--tooltip-info-color` | `var(--color-info)` |
| `--tooltip-success-color` | `var(--color-success)` |
| `--tooltip-warning-color` | `var(--color-warning)` |
| `--tooltip-danger-color` | `var(--color-danger)` |