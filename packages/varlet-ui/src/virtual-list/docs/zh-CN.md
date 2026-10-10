# 虚拟列表

### 介绍

用于纵向、单列、固定行高的大数据列表。保留完整列表的滚动高度，只渲染视口内的项目及上下缓冲项目。
组件负责渲染范围和滚动定位，加载、重试与完成状态可通过 `List` 组件实现。

### 基本使用

通过 `items` 提供数据，`item-size` 指定每项实际占用的像素高度，`item-key` 指定唯一且稳定的数据键。
默认使用组件自身的滚动容器，高度为 `300px`。插槽中的 `index` 是原始数据索引，从 `0` 开始。

```html
<script setup>
const items = Array.from({ length: 10000 }, (_, id) => ({ id, label: `列表项 ${id + 1}` }))
</script>

<template>
  <var-virtual-list :items="items" :item-size="50" item-key="id" :height="300">
    <template #default="{ item, index }">
      <var-cell border style="height: 50px">{{ index + 1 }}. {{ item.label }}</var-cell>
    </template>
  </var-virtual-list>
</template>
```

### 滚动定位

`scrollToIndex` 支持顶部、居中、底部和最小移动距离对齐。`scrollToOffset` 的偏移量相对于列表起点，单位为像素。
两个方法均受滚动容器实际可滚动范围限制，不会超出容器边界。

```html
<script setup>
import { ref } from 'vue'

const virtualList = ref()
const items = Array.from({ length: 10000 }, (_, id) => ({ id }))
</script>

<template>
  <var-button @click="virtualList.scrollToIndex(4999, { align: 'center' })">跳转到第 5,000 项</var-button>
  <var-virtual-list ref="virtualList" :items="items" :item-size="50" item-key="id">
    <template #default="{ item }">
      <var-cell style="height: 50px">列表项 {{ item.id + 1 }}</var-cell>
    </template>
  </var-virtual-list>
</template>
```

### 外部滚动容器

`scroll-target` 支持元素、选择器、返回元素的函数或 `'window'`。指定后组件不设置自身高度和滚动条，`height` 仅用于服务端首屏范围估算。
外部元素必须是包住列表的滚动容器。可以在列表前后放置其他内容，组件会计算列表的实际起点。
通过函数返回模板引用，可在容器挂载或替换后重新绑定。无效或尚未挂载的目标不会回退到组件自身。

```html
<script setup>
import { ref } from 'vue'

const scroller = ref()
const items = Array.from({ length: 10000 }, (_, id) => ({ id }))
</script>

<template>
  <div ref="scroller" style="height: 300px; overflow-y: auto">
    <var-cell>列表上方的内容</var-cell>
    <var-virtual-list :items="items" :item-size="50" item-key="id" :scroll-target="() => scroller">
      <template #default="{ item }">
        <var-cell style="height: 50px">列表项 {{ item.id + 1 }}</var-cell>
      </template>
    </var-virtual-list>
  </div>
</template>
```

页面滚动使用 `scroll-target="window"`。传入 `window` 对象时请确保在客户端访问；字符串写法可以直接用于 SSR。

### 与 List 和 PullRefresh 组合

三个组件必须使用同一个滚动容器：外部容器包住 `PullRefresh` 和 `List`，VirtualList 的 `scroll-target` 指向该容器。
避免将一个自身滚动的 VirtualList 直接放进 List，因为 List 的底部检测节点位于内层滚动容器之外。

```html
<script setup>
import { ref } from 'vue'

const scroller = ref()
const items = ref([])
const loading = ref(false)
const finished = ref(false)
const refreshing = ref(false)

function load() {
  setTimeout(() => {
    const start = items.value.length
    items.value.push(...Array.from({ length: 50 }, (_, index) => ({ id: start + index })))
    finished.value = items.value.length >= 500
    loading.value = false
    refreshing.value = false
  }, 500)
}

function refresh() {
  items.value = []
  finished.value = false
  loading.value = true
  scroller.value.scrollTop = 0
  load()
}
</script>

<template>
  <div ref="scroller" style="height: 300px; overflow-y: auto">
    <var-pull-refresh v-model="refreshing" :target="scroller" @refresh="refresh">
      <var-list v-model:loading="loading" :finished="finished" @load="load">
        <var-virtual-list :items="items" :item-size="50" item-key="id" :scroll-target="() => scroller">
          <template #default="{ item }">
            <var-cell style="height: 50px">列表项 {{ item.id + 1 }}</var-cell>
          </template>
        </var-virtual-list>
      </var-list>
    </var-pull-refresh>
  </div>
</template>
```

### 使用约定

- 仅支持固定行高。行容器高度为 `item-size`，超出内容会被裁剪；需将 Cell、图片和自定义内容约束在该高度内。Cell 的最小高度不能直接视为实际行高。
- `item-key` 可为属性名或 `(item, index) => string | number`，必须返回唯一且稳定的键。原始值数组可使用 `:item-key="item => item"`，不要用索引标识可排序或增删的数据。
- 滚出缓冲范围的项目会卸载。输入内容、选择和展开状态需按数据键存储在外部；稳定 key 不会保存已经卸载的组件状态。未渲染的项目也不能直接被浏览器查找或 Tour 定位。
- 追加数据保留滚动位置。刷新、排序、筛选和头部插入默认保留像素偏移，不自动锚定原项目；需要回到顶部时调用 `scrollToIndex(0)`。自身滚动容器会在数据变短后限制滚动位置，外部容器由浏览器管理。
- 容器尺寸变化、KeepAlive 恢复和 TabItem 激活后会重新计算。选择器目标稍后才插入，或上方内容改变位置但未触发尺寸变化时，请在 `nextTick` 后调用 `resize()`。
- SSR 会渲染一个有限的初始范围，在挂载后测量实际视口。服务端和客户端首次渲染应使用相同的数据及参数。非数字或非 `px` 高度使用 `300px` 作为首屏估算值。
- 虚拟化减少渲染节点，不会删除数据数组中的项目，也不负责请求或缓存数据。

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `items` | 列表数据 | _any[]_ | `[]` |
| `item-size` | 必填，每项占用高度，单位 px，须为有限正数 | _number_ | `-` |
| `item-key` | 必填，唯一键的属性名或获取函数 | _string \| (item, index) => string \| number_ | `-` |
| `height` | 自身滚动容器高度，支持 CSS 长度 | _string \| number_ | `300` |
| `overscan` | 视口上下额外渲染的项目数，向下取整且不小于 0 | _number_ | `5` |
| `scroll-target` | 外部滚动目标，支持 `'window'`、选择器、元素和返回目标的函数 | _string \| HTMLElement \| Window \| (() => HTMLElement \| Window \| null \| undefined)_ | `-` |

### 事件

| 事件名 | 说明 | 参数 |
| --- | --- | --- |
| `range-change` | 渲染范围或可见范围发生变化时触发，挂载时也会触发 | `range: VirtualListRange` |

`VirtualListRange` 的 `start`、`end` 是含缓冲项目的渲染范围，`visibleStart`、`visibleEnd` 是实际可见范围，均为包含端点的原始数据索引。
空列表、隐藏或视口与列表不相交时四个值均为 `-1`。事件不会在范围未变化的每次滚动中重复触发。

### 插槽

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| `default` | 每个列表项的内容 | `item: any`, `index: number` |

### 方法

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| `scrollToIndex` | 滚动到指定数据索引 | `index: number`, `options?: { align?: 'start' \| 'center' \| 'end' \| 'auto', behavior?: 'auto' \| 'smooth' \| 'instant' }` |
| `scrollToOffset` | 滚动到相对于列表起点的偏移 | `offset: number`, `behavior?: 'auto' \| 'smooth' \| 'instant'` |
| `resize` | 重新绑定滚动目标并计算范围 | `-` |

`scrollToIndex` 默认使用 `align: 'start'` 和 `behavior: 'auto'`。`align: 'auto'` 会保持完全可见的项目不动，否则移动最小距离。
