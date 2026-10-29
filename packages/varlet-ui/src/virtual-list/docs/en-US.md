# Virtual List

### Introduction

A vertical, single-column list supporting fixed, known unequal, and measured dynamic heights. It preserves the full scroll height while rendering only items in the viewport and a small buffer above and below it.
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

### Unequal and Dynamic Heights

For known heights, pass `(item, index) => number` to `item-size` to return each row's occupied height in pixels.
With `dynamic`, `item-size` estimates unmeasured rows. Row wrappers grow naturally without a fixed height or clipping.
VirtualList measures rendered rows and uses ResizeObserver to track changes from wrapping text, images, and fonts.
Measurements are cached by `item-key`; cumulative offsets and binary search locate the visible range. Changes above the viewport compensate the scroll position.

```html
<script setup>
const items = Array.from({ length: 10000 }, (_, id) => ({
  id,
  text: 'Content that can wrap naturally. '.repeat(id % 5 + 1),
}))
const estimateSize = (item) => item.text.length > 80 ? 100 : 60
</script>

<template>
  <var-virtual-list :items="items" :item-size="estimateSize" item-key="id" dynamic>
    <template #default="{ item }">
      <div style="padding: 12px; line-height: 24px">{{ item.text }}</div>
    </template>
  </var-virtual-list>
</template>
```

Replacing or deleting an item clears its cached measurement. Container width changes invalidate measurements.
Call `resetMeasurements()` after changing unrendered content or global typography. `resize()` only remeasures rendered rows.
Without ResizeObserver, call `resize()` manually when content sizes change.
Unmeasured rows still use estimates, so distant scroll targets and the scrollbar length adjust as measurements arrive. Smooth scrolling is not recommended in dynamic mode.

### Preserving Position on Prepend

Enable `preserve-scroll-position` to anchor data updates to the first visible item's `item-key` and its pixel offset within that row.
This supports loading earlier messages, including in-place `unshift` / `splice`, with fixed or dynamic heights and all scroll targets.
The default is off, preserving existing pixel-offset behavior. If the anchor is removed, no replacement anchor is chosen. Container limits still apply, and an offscreen list is not pulled into view.

```html
<var-virtual-list :items="messages" :item-size="64" item-key="id" preserve-scroll-position>
  <template #default="{ item }">
    <div style="height: 64px">{{ item.text }}</div>
  </template>
</var-virtual-list>
```

### SSR Viewport Estimate

`height` accepts CSS lengths. The server cannot resolve relative units such as `vh`, `%`, or `rem`; these default to a `300px` viewport estimate. Numbers and `px` values use their specified height.
Set `ssr-height` for an explicit pixel estimate. It takes precedence over `height` and also applies to external and window scrolling.
Server and client use the same estimate on their first render, then measure the real viewport after mounting. An inaccurate estimate can still change the rendered range after mounting.

```html
<var-virtual-list :items="items" :item-size="50" item-key="id" height="50vh" :ssr-height="400">
  <template #default="{ item }">
    <div style="height: 50px">{{ item.label }}</div>
  </template>
</var-virtual-list>
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

- By default, wrappers use the specified heights and clip overflowing content. Size Cells, images, and custom content to fit. Enable `dynamic` for natural content heights and avoid extra vertical spacing outside row wrappers. All heights and estimates must be finite positive numbers.
- `item-key` accepts a property name or `(item, index) => string | number`. Keys must be unique and stable. For primitive arrays, use `:item-key="item => item"`. Avoid index keys for sortable or mutable lists. Missing, invalid, or duplicate keys trigger one development warning per component instance.
- Rows outside the buffer unmount. Store input, selection, and expansion state outside the row, keyed by data identity. Stable keys do not preserve unmounted component state. Unrendered rows are unavailable to browser find and cannot be targeted directly by Tour.
- Appending data preserves the scroll position. Refreshing, sorting, filtering, and prepending retain the pixel offset by default. Enable `preserve-scroll-position` to anchor an item. Call `scrollToIndex(0)` to reset. Owned containers clamp their position after data shrinks; external containers use native browser behavior.
- Container resizing, KeepAlive activation, and TabItem activation trigger recalculation. If a selector target is inserted later, or preceding content moves the list without a size change, call `resize()` after `nextTick`.
- SSR renders a bounded initial range and measures the actual viewport after mounting. Use identical initial data and props on the server and client. Heights other than numbers or `px` values default to a `300px` initial estimate; override it with `ssr-height`.
- Virtualization reduces rendered nodes. It does not remove array items or fetch and cache data.

## API

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `items` | List data | _any[]_ | `[]` |
| `item-size` | Required pixel height or height function; an estimate in dynamic mode, always finite and positive | _number \| (item, index) => number_ | `-` |
| `dynamic` | Measure and cache natural row heights | _boolean_ | `false` |
| `preserve-scroll-position` | Anchor data updates to the first visible row and its inner offset | _boolean_ | `false` |
| `item-key` | Required property name or function returning a unique key | _string \| (item, index) => string \| number_ | `-` |
| `height` | Owned scroll container height; accepts CSS lengths | _string \| number_ | `300` |
| `ssr-height` | Initial SSR viewport estimate in px, overriding height; finite and nonnegative | _number_ | `-` |
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
| `resize` | Rebind the scroll target, remeasure rendered rows, and recalculate the range | `-` |
| `resetMeasurements` | Clear all measured heights and remeasure rendered rows | `-` |

`scrollToIndex` defaults to `align: 'start'` and `behavior: 'auto'`. With `align: 'auto'`, fully visible rows remain in place; otherwise the smallest necessary scroll is applied.
