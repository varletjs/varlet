# Virtual List

### Introduction

A vertical, single-column list with fixed-height items. It preserves the full scroll height while rendering only items in the viewport and a small buffer above and below it.
VirtualList manages rendering and scroll positioning. Use List for loading, retry, and completion states.

### Basic Usage

Pass data through `items`, set the occupied height of each row in pixels with `item-size`, and provide a unique, stable `item-key`.
By default, the component owns a `300px` scroll container. The slot's `index` is the zero-based index in the original array.

```html
<script setup>
const items = Array.from({ length: 10000 }, (_, id) => ({ id, label: `Item ${id + 1}` }))
</script>

<template>
  <var-virtual-list :items="items" :item-size="50" item-key="id" :height="300">
    <template #default="{ item, index }">
      <var-cell border style="height: 50px">{{ index + 1 }}. {{ item.label }}</var-cell>
    </template>
  </var-virtual-list>
</template>
```

### Scroll Positioning

`scrollToIndex` supports start, center, end, and minimum-distance alignment. `scrollToOffset` accepts a pixel offset relative to the start of the list.
Both methods respect the actual scroll limits of the container.

```html
<script setup>
import { ref } from 'vue'

const virtualList = ref()
const items = Array.from({ length: 10000 }, (_, id) => ({ id }))
</script>

<template>
  <var-button @click="virtualList.scrollToIndex(4999, { align: 'center' })">Go to Item 5,000</var-button>
  <var-virtual-list ref="virtualList" :items="items" :item-size="50" item-key="id">
    <template #default="{ item }">
      <var-cell style="height: 50px">Item {{ item.id + 1 }}</var-cell>
    </template>
  </var-virtual-list>
</template>
```

### External Scroll Container

`scroll-target` accepts an element, a selector, a function returning an element, or `'window'`. In this mode, VirtualList does not set its own height or scrollbar. `height` is only used to estimate the initial server-rendered range.
An external element must be a scrollable ancestor of the list. Other content may appear before or after the list; its origin is measured accordingly.
A function returning a template ref allows rebinding when that container mounts or changes. An invalid or missing target does not fall back to the component's own container.

```html
<script setup>
import { ref } from 'vue'

const scroller = ref()
const items = Array.from({ length: 10000 }, (_, id) => ({ id }))
</script>

<template>
  <div ref="scroller" style="height: 300px; overflow-y: auto">
    <var-cell>Content above the list</var-cell>
    <var-virtual-list :items="items" :item-size="50" item-key="id" :scroll-target="() => scroller">
      <template #default="{ item }">
        <var-cell style="height: 50px">Item {{ item.id + 1 }}</var-cell>
      </template>
    </var-virtual-list>
  </div>
</template>
```

Use `scroll-target="window"` for page scrolling. Access a literal `window` object only on the client; the string form can be used with SSR.

### Combining List and PullRefresh

All three components must use the same scroll container: wrap PullRefresh and List with an external scroll container and point VirtualList's `scroll-target` to it.
Do not place a self-scrolling VirtualList directly inside List: List's bottom detector would be outside that inner scroll container.

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
            <var-cell style="height: 50px">Item {{ item.id + 1 }}</var-cell>
          </template>
        </var-virtual-list>
      </var-list>
    </var-pull-refresh>
  </div>
</template>
```

### Usage Notes

- Only fixed heights are supported. Row wrappers have the specified `item-size` and clip overflowing content. Size Cells, images, and custom content to fit. A Cell's minimum height is not its actual row height.
- `item-key` accepts a property name or `(item, index) => string | number`. Keys must be unique and stable. For primitive arrays, use `:item-key="item => item"`. Avoid index keys for sortable or mutable lists.
- Rows outside the buffer unmount. Store input, selection, and expansion state outside the row, keyed by data identity. Stable keys do not preserve unmounted component state. Unrendered rows are unavailable to browser find and cannot be targeted directly by Tour.
- Appending data preserves the scroll position. Refreshing, sorting, filtering, and prepending retain the pixel offset rather than anchoring an item. Call `scrollToIndex(0)` to reset. Owned containers clamp their position after data shrinks; external containers use native browser behavior.
- Container resizing, KeepAlive activation, and TabItem activation trigger recalculation. If a selector target is inserted later, or preceding content moves the list without a size change, call `resize()` after `nextTick`.
- SSR renders a bounded initial range and measures the actual viewport after mounting. Use identical initial data and props on the server and client. Heights other than numbers or `px` values use a `300px` initial estimate.
- Virtualization reduces rendered nodes. It does not remove array items or fetch and cache data.

## API

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `items` | List data | _any[]_ | `[]` |
| `item-size` | Required occupied row height in px; a finite positive number | _number_ | `-` |
| `item-key` | Required property name or function returning a unique key | _string \| (item, index) => string \| number_ | `-` |
| `height` | Owned scroll container height; accepts CSS lengths | _string \| number_ | `300` |
| `overscan` | Extra rows above and below the viewport, rounded down and clamped to zero | _number_ | `5` |
| `scroll-target` | External scroll target: `'window'`, selector, element, or resolver | _string \| HTMLElement \| Window \| (() => HTMLElement \| Window \| null \| undefined)_ | `-` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| `range-change` | Emitted on mounting and when the rendered or visible range changes | `range: VirtualListRange` |

`VirtualListRange.start` and `end` describe the rendered range including the buffer; `visibleStart` and `visibleEnd` describe the visible range. All values are inclusive indices in the original array.
All four values are `-1` for empty lists, hidden containers, or lists outside the viewport. Scrolling within the same range does not emit duplicate events.

### Slots

| Slot | Description | Arguments |
| --- | --- | --- |
| `default` | Row content | `item: any`, `index: number` |

### Methods

| Method | Description | Arguments |
| --- | --- | --- |
| `scrollToIndex` | Scroll to a data index | `index: number`, `options?: { align?: 'start' \| 'center' \| 'end' \| 'auto', behavior?: 'auto' \| 'smooth' \| 'instant' }` |
| `scrollToOffset` | Scroll to an offset relative to the list origin | `offset: number`, `behavior?: 'auto' \| 'smooth' \| 'instant'` |
| `resize` | Rebind the scroll target and recalculate the range | `-` |

`scrollToIndex` defaults to `align: 'start'` and `behavior: 'auto'`. With `align: 'auto'`, fully visible rows remain in place; otherwise the smallest necessary scroll is applied.
