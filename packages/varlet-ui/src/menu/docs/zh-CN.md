# 菜单

### 介绍
使元素点击时显示一个菜单，通过控制菜单的对齐方式和偏移量自由的控制菜单的显示位置。

### 引入

```js
import { createApp } from 'vue'
import { Menu } from '@varlet/ui'

createApp().use(Menu)
```

### 注意
Menu是一个`inline-block`元素，通过默认插槽点击时显示菜单，如果希望Menu独占一行推荐包裹一个`block`元素。
Menu在点击组件范围以外的区域自动关闭，所以不可以使用同一个状态绑定多个Menu的`v-model:show`，否则在触发显示时也同时触发了其他Menu对`v-model:show`的修改，导致Menu无法显示。

### 对齐方式
```html
<div class="block">
  <var-menu v-model:show="top">
    <var-button type="primary" @click="top = true">顶部对齐</var-button>

    <template #menu>
      <div class="cell-list">
        <var-cell>菜单项</var-cell>
        <var-cell>菜单项</var-cell>
        <var-cell>菜单项</var-cell>
      </div>
    </template>
  </var-menu>
</div>

<div class="block-mt">
  <var-menu alignment="bottom" v-model:show="bottom">
    <var-button type="primary" @click="bottom = true">底部对齐</var-button>

    <template #menu>
      <div class="cell-list">
        <var-cell>菜单项</var-cell>
        <var-cell>菜单项</var-cell>
        <var-cell>菜单项</var-cell>
      </div>
    </template>
  </var-menu>
</div>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const top = ref(false)
    const bottom = ref(false)

    return { 
      top,
      bottom
    }
  }
}
```

```css
.block {
  display: flex;
  justify-content: space-between;
}

.block-mt {
  margin-top: 130px;
}

.cell-list {
  background: #fff;
}
```

### 偏移量

```html
<div class="block-1">
  <var-menu :offset-x="72" v-model:show="offsetX">
    <var-button type="primary" @click="offsetX = true">右偏移</var-button>

    <template #menu>
      <div class="cell-list">
        <var-cell>菜单项</var-cell>
        <var-cell>菜单项</var-cell>
        <var-cell>菜单项</var-cell>
      </div>
    </template>
  </var-menu>

  <var-menu :offset-x="-72" v-model:show="offsetX1">
    <var-button type="primary" @click="offsetX1 = true">左偏移</var-button>

    <template #menu>
      <div class="cell-list">
        <var-cell>菜单项</var-cell>
        <var-cell>菜单项</var-cell>
        <var-cell>菜单项</var-cell>
      </div>
    </template>
  </var-menu>
</div>

<div class="block-2">
  <var-menu :offset-y="36" v-model:show="offsetY">
    <var-button type="primary" @click="offsetY = true">下偏移</var-button>

    <template #menu>
      <div class="cell-list">
        <var-cell>菜单项</var-cell>
        <var-cell>菜单项</var-cell>
        <var-cell>菜单项</var-cell>
      </div>
    </template>
  </var-menu>

  <var-menu :offset-y="-36" v-model:show="offsetY1">
    <var-button type="primary" @click="offsetY1 = true">上偏移</var-button>

    <template #menu>
      <div class="cell-list">
        <var-cell>菜单项</var-cell>
        <var-cell>菜单项</var-cell>
        <var-cell>菜单项</var-cell>
      </div>
    </template>
  </var-menu>
</div>
```


```js
import { ref } from 'vue'

export default {
  setup() {
    const offsetX = ref(false)
    const offsetX1 = ref(false)
    const offsetY = ref(false)
    const offsetY1 = ref(false)

    return {
      offsetX,
      offsetX1,
      offsetY,
      offsetY1
    }
  }
}
```

```css
.block-1 {
  display: flex;
  justify-content: space-between;
}

.block-2 {
  display: flex;
  justify-content: space-between;
  margin-top: 130px;
}
```

### 注册事件

```html
<var-menu
  v-model:show="event"
  @open="() => Snackbar.info('open')"
  @opened="() => Snackbar.success('opened')"
  @close="() => Snackbar.warning('close')"
  @closed="() => Snackbar.error('closed')"
>
  <var-button type="primary" @click="event = true">注册事件</var-button>

  <template #menu>
    <div class="cell-list">
      <var-cell>菜单项</var-cell>
      <var-cell>菜单项</var-cell>
      <var-cell>菜单项</var-cell>
    </div>
  </template>
</var-menu>
```

```js
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

export default {
  setup() {
    const event = ref(false)

    return {
      event,
      Snackbar
    }
  }
}
```

```css
.cell-list {
  background: #fff;
}
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `v-model:show` | 是否显示菜单 | _string_ | `default` |
| `alignment` | 菜单的对齐方式， 可选值为 `top` `bottom`， 源点为默认插槽的左上角，top为菜单顶部对齐源点，bottom为菜单底部对齐 | _string_ | `top` |
| `offset-x` | x轴偏移量， 相对于菜单对齐后的位置 | _number \| string_ | `0` |  
| `offset-y` | y轴偏移量， 相对于菜单对齐后的位置 | _number \| string_ | `0` |
| `teleport` | 菜单挂载的位置 | _TeleportProps['to']_ | `body` |

### 方法
| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| `resize` | Menu默认插槽元素产生位置大小变化时可以调用此方法进行重绘 | `-` | `-` |

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
以下为组件使用的css变量,可以使用[StyleProvider组件](#/zh-CN/style-provider)进行样式定制

| 变量名 | 默认值 |
| --- | --- |
| `--menu-background` | `#fff` |