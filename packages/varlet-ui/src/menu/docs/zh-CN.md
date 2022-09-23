# 菜单

### 介绍
使元素点击时显示一个菜单，通过控制菜单的对齐方式和偏移量自由的控制菜单的显示位置。

### 注意
Menu 是一个 `inline-block` 元素，通过默认插槽点击时显示菜单，如果希望 Menu 独占一行推荐包裹一个 `block` 元素。
Menu 在点击组件范围以外的区域自动关闭，所以不可以使用同一个状态绑定多个 Menu 的 `v-model:show`，否则在触发显示时也同时触发了其他 Menu 对 `v-model:show` 的修改，导致 Menu 无法显示。

### 对齐方式
```html
<script setup>
import { ref } from 'vue'
  
const top = ref(false)
const bottom = ref(false)
</script>

<template>
  <div class="menu-example-block">
    <var-menu v-model:show="top">
      <var-button type="primary" @click="top = true">顶部对齐</var-button>

      <template #menu>
        <div class="menu-example-cell-list">
          <var-cell>菜单项</var-cell>
          <var-cell>菜单项</var-cell>
          <var-cell>菜单项</var-cell>
        </div>
      </template>
    </var-menu>
  </div>

  <div class="menu-example-block-mt">
    <var-menu alignment="bottom" v-model:show="bottom">
      <var-button type="primary" @click="bottom = true">底部对齐</var-button>

      <template #menu>
        <div class="menu-example-cell-list">
          <var-cell>菜单项</var-cell>
          <var-cell>菜单项</var-cell>
          <var-cell>菜单项</var-cell>
        </div>
      </template>
    </var-menu>
  </div>
</template>

<style>
.menu-example-block {
  display: flex;
  justify-content: space-between;
}

.menu-example-block-mt {
  margin-top: 130px;
}

.menu-example-cell-list{
  background: #fff;
}
</style>
```

### 偏移量

```html
<script setup>
import { ref } from 'vue'
  
const offsetX = ref(false)
const offsetX1 = ref(false)
const offsetY = ref(false)
const offsetY1 = ref(false)
</script>

<template>
  <div class="menu-example-block-1">
    <var-menu :offset-x="72" v-model:show="offsetX">
      <var-button type="primary" @click="offsetX = true">右偏移</var-button>

      <template #menu>
        <div class="menu-example-cell-list">
          <var-cell>菜单项</var-cell>
          <var-cell>菜单项</var-cell>
          <var-cell>菜单项</var-cell>
        </div>
      </template>
    </var-menu>

    <var-menu :offset-x="-72" v-model:show="offsetX1">
      <var-button type="primary" @click="offsetX1 = true">左偏移</var-button>

      <template #menu>
        <div class="menu-example-cell-list">
          <var-cell>菜单项</var-cell>
          <var-cell>菜单项</var-cell>
          <var-cell>菜单项</var-cell>
        </div>
      </template>
    </var-menu>
  </div>

  <div class="menu-example-block-2">
    <var-menu :offset-y="36" v-model:show="offsetY">
      <var-button type="primary" @click="offsetY = true">下偏移</var-button>

      <template #menu>
        <div class="menu-example-cell-list">
          <var-cell>菜单项</var-cell>
          <var-cell>菜单项</var-cell>
          <var-cell>菜单项</var-cell>
        </div>
      </template>
    </var-menu>

    <var-menu :offset-y="-36" v-model:show="offsetY1">
      <var-button type="primary" @click="offsetY1 = true">上偏移</var-button>

      <template #menu>
        <div class="menu-example-cell-list">
          <var-cell>菜单项</var-cell>
          <var-cell>菜单项</var-cell>
          <var-cell>菜单项</var-cell>
        </div>
      </template>
    </var-menu>
  </div>
</template>

<style>
.menu-example-block-1 {
  display: flex;
  justify-content: space-between;
}

.menu-example-block-2 {
  display: flex;
  justify-content: space-between;
  margin-top: 130px;
}

.menu-example-cell-list {
  background: #fff;
}
</style>
```

### 注册事件

```html
<script setup>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'
  
const show = ref(false)
</script>

<template>
  <var-menu
    v-model:show="show"
    @open="() => Snackbar.info('open')"
    @opened="() => Snackbar.success('opened')"
    @close="() => Snackbar.warning('close')"
    @closed="() => Snackbar.error('closed')"
  >
    <var-button type="primary" @click="show = true">注册事件</var-button>

    <template #menu>
      <div class="menu-example-cell-list">
        <var-cell>菜单项</var-cell>
        <var-cell>菜单项</var-cell>
        <var-cell>菜单项</var-cell>
      </div>
    </template>
  </var-menu>
</template>

<style>
.menu-example-cell-list {
  background: #fff;
}
</style>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| ------- | --- | --- | --- |
| `v-model:show` | 是否显示菜单 | _string_ | `default` |
| `alignment` | 菜单的对齐方式， 可选值为 `top` `bottom`， 源点为默认插槽的左上角，top 为菜单顶部对齐源点，bottom 为菜单底部对齐 | _string_ | `top` |
| `offset-x` | x 轴偏移量， 相对于菜单对齐后的位置 | _number \| string_ | `0` |
| `offset-y` | y 轴偏移量， 相对于菜单对齐后的位置 | _number \| string_ | `0` |
| `teleport` | 菜单挂载的位置 | _TeleportProps['to']_ | `body` |
| `disabled` | 是否禁用菜单 | _boolean_ | `false` |
| `trigger` | 菜单触发方式，可选值为`click` `hover`，`click`为点击时触发，`hover`为悬停时触发 | _string_ | `click` |
| `placement` | 菜单显示位置，具体可参考 [popper文档](https://popper.js.org/docs/v2/) | _string: cover-top \| cover-top-start \| cover-top-end \| cover-bottom \| cover-bottom-start \| cover-bottom-end \| cover-left \| cover-right \| ..._ | `cover-top-start` |
| `defaultStyle` | 是否启用默认样式 | _boolean_ | `true` |

### 方法
| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
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
