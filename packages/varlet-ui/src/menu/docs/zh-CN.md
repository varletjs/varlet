# 菜单

### 介绍
当元素点击时显示一个菜单，通过控制弹出位置和偏移量改变菜单的显示位置。

### 基本使用

```html
<template>
  <var-menu>
    <var-button type="primary">基本使用</var-button>
    
    <template #menu>
      <var-cell>菜单项</var-cell>
      <var-cell>菜单项</var-cell>
      <var-cell>菜单项</var-cell>
    </template>
  </var-menu>
</template>
```

### 弹出位置

```html
<script setup>
import { ref } from 'vue'

const placement = ref('cover-top-start')
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
  'cover-top',
  'cover-top-start',
  'cover-top-end',
  'cover-bottom',
  'cover-bottom-start',
  'cover-bottom-end',
  'cover-left',
  'cover-right',
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
    <var-menu :placement="placement">
      <var-button type="primary">
        <var-icon name="star" />
      </var-button>
      <template #menu>
        <var-cell>菜单项</var-cell>
        <var-cell>菜单项</var-cell>
        <var-cell>菜单项</var-cell>
      </template>
    </var-menu>
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

### 偏移量

可以用 `offset-x` 和 `offset-y` 设置 Menu 弹出的偏移量。

```html
<template>
  <var-menu offset-x="36px" offset-y="18px">
    <var-button type="primary">偏移量</var-button>
    
    <template #menu>
      <var-cell>菜单项</var-cell>
      <var-cell>菜单项</var-cell>
      <var-cell>菜单项</var-cell>
    </template>
  </var-menu>
</template>
```

### 触发方式

通过 `trigger` 改变菜单显示的触发方式，可选值为 `click` 和 `hover`。

```html
<template>
  <var-menu trigger="hover">
    <var-button type="primary">触发方式</var-button>
    
    <template #menu>
      <var-cell>菜单项</var-cell>
      <var-cell>菜单项</var-cell>
      <var-cell>菜单项</var-cell>
    </template>
  </var-menu>
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

在 `disabled` 状态下，菜单将不再被打开。 

```html
<template>
  <var-menu disabled>
    <var-button type="primary" disabled>禁用</var-button>
    
    <template #menu>
      <var-cell>菜单项</var-cell>
      <var-cell>菜单项</var-cell>
      <var-cell>菜单项</var-cell>
    </template>
  </var-menu>
</template>
```

### 双向绑定

通过 `v-model:show` 进行双向绑定控制菜单的显示和隐藏。

```html
<script setup>
import { ref } from 'vue'

const show = ref(false)
const closeMenu = () => { show.value = false }
</script>

<template>
  <var-menu v-model:show="show">
    <var-button type="primary">双向绑定</var-button>
    
    <template #menu>
      <var-cell @click="closeMenu">菜单项</var-cell>
      <var-cell @click="closeMenu">菜单项</var-cell>
      <var-cell @click="closeMenu">菜单项</var-cell>
    </template>
  </var-menu>
</template>
```

### 注意

Menu 是一个 `inline-block` 元素，通过默认插槽点击时显示菜单，如果希望 Menu 独占一行推荐包裹一个 `block` 元素。

## API

### 属性

| 参数              | 说明                                                          | 类型                    | 默认值               |
|-----------------|-------------------------------------------------------------|-----------------------|-------------------|
| `v-model:show`  | 是否显示菜单                                                      | _string_              | `default`         |
| `placement`     | 菜单弹出位置                                                      | _Placement_           | `cover-top-start` |
| `offset-x`      | x 轴偏移量， 相对于菜单对齐后的位置                                         | _number \| string_           | `0` |
| `offset-y`      | y 轴偏移量， 相对于菜单对齐后的位置                                         | _number \| string_           | `0` |
| `teleport`      | 菜单挂载的位置                                                     | _TeleportProps['to']_ | `body`            |
| `disabled`      | 是否禁用菜单                                                      | _boolean_             | `false`           |
| `trigger`       | 菜单触发方式，可选值为 `click` `hover`, `click` 为点击时触发, `hover` 为悬停时触发 | _string_              | `click`           |
| `same-width`    | 是否与触发元素同宽                                                   | _boolean_             | `false`           |
| `default-style` | 是否启用默认样式                                                    | _boolean_             | `true`            |

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
| `cover-top` | 顶部中心位置, 覆盖触发器 |
| `cover-top-start` | 顶部左侧位置, 覆盖触发器 |
| `cover-top-end` | 顶部右侧位置, 覆盖触发器 |
| `cover-bottom` | 底部中心位置, 覆盖触发器 |
| `cover-bottom-start` | 底部左侧位置, 覆盖触发器 |
| `cover-bottom-end` | 底部右侧位置, 覆盖触发器 |
| `cover-left` | 左侧位置, 覆盖触发器 |
| `cover-right` | 右侧位置, 覆盖触发器 |

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

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 菜单关联的触发元素 | `-` |
| `menu` | 菜单内容 | `-` |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制。

| 变量名 | 默认值 |
| --- | --- |
| `--menu-background-color` | `#fff` |