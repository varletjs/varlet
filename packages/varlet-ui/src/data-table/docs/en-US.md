# DataTable

### Intro

A higher-level data table component based on `Table`, with built-in column configuration and pagination.

### Basic Usage

```html
<script setup>
const columns = [
  { key: 'name', title: 'Name' },
  { key: 'role', title: 'Role' },
  { key: 'status', title: 'Status' },
]

const data = [
  { id: 1, name: 'Ada', role: 'Admin', status: 'Online' },
  { id: 2, name: 'Linus', role: 'Maintainer', status: 'Offline' },
]
</script>

<template>
  <var-data-table :columns="columns" :data="data" />
</template>
```

### Plain Table

Set `plain` to remove the card-like shadow, background, and radius, and present the table as a pure table surface.

```html
<template>
  <var-data-table :columns="columns" :data="data" :pagination="false" plain />
</template>
```

### Single Column Sorting

Set `column.sorter` to enable sorter interaction on a field column. The component only manages sorter state. You should control `v-model:sorters` and decide how to sort the data yourself.

```html
<script setup>
import { computed, ref } from 'vue'

const rawData = [
  { id: 1, name: 'Ada', role: 'Admin', status: 'Online' },
  { id: 2, name: 'Linus', role: 'Maintainer', status: 'Offline' },
]

const sorters = ref([])

const columns = [
  { key: 'name', title: 'Name', sorter: true },
  { key: 'role', title: 'Role', sorter: true },
  { key: 'status', title: 'Status', sorter: true },
]

const data = computed(() => {
  return sorters.value.reduceRight((rows, sorter) => {
    return [...rows].sort((left, right) => {
      const leftValue = left[sorter.key]
      const rightValue = right[sorter.key]

      if (leftValue === rightValue) {
        return 0
      }

      const result = leftValue > rightValue ? 1 : -1
      return sorter.order === 'asc' ? result : -result
    })
  }, rawData)
})
</script>

<template>
  <var-data-table v-model:sorters="sorters" :columns="columns" :data="data" :pagination="false" />
</template>
```

### Multiple Column Sorting

Set `sort-mode="multiple"` to keep multiple columns active at the same time.

```html
<template>
  <var-data-table
    v-model:sorters="sorters"
    :columns="columns"
    :data="data"
    :pagination="false"
    sort-mode="multiple"
  />
</template>
```

### Cell Bordered

```html
<template>
  <var-data-table :columns="columns" :data="data" cell-bordered />
</template>
```

### Sizes

```html
<template>
  <var-data-table :columns="columns" :data="data" size="small" />
  <var-data-table :columns="columns" :data="data" size="large" />
</template>
```

### Column Options

Use `width`, `minWidth`, `align`, and `titleAlign` to control column width and alignment.

```html
<script setup>
const columns = [
  { key: 'name', title: 'Name', minWidth: 140 },
  { key: 'role', title: 'Role', titleAlign: 'center', align: 'center', width: 120 },
  { key: 'status', title: 'Status', titleAlign: 'right', align: 'right', width: 100 },
]
</script>

<template>
  <var-data-table :columns="columns" :data="data" />
</template>
```

### Custom Props

Use `row-props` and `column.cellProps` to pass native attributes to rows and cells.

```html
<script setup>
const columns = [
  { key: 'name', title: 'Name' },
  { key: 'role', title: 'Role' },
  {
    key: 'status',
    title: 'Status',
    cellProps: ({ row }) => ({
      style: {
        color: row.status === 'Online' ? 'var(--color-success)' : 'var(--color-warning)',
        fontWeight: '600',
      },
    }),
  },
]

const customRowProps = ({ row, rowIndex }) => ({
  style: {
    backgroundColor: rowIndex === 0 ? 'hsla(var(--hsl-primary), 0.08)' : undefined,
  },
  title: row.name,
})
</script>

<template>
  <var-data-table :columns="columns" :data="data" :row-props="customRowProps" />
</template>
```

### Custom Render

Use `column.render` to customize the cell content.

```html
<script setup>
import { h } from 'vue'

const columns = [
  { key: 'name', title: 'Name' },
  {
    key: 'status',
    title: 'Status',
    render: ({ row }) =>
      h(
        'span',
        {
          style: {
            color: row.status === 'Online' ? 'var(--color-success)' : 'var(--color-text-disabled)',
          },
        },
        row.status,
      ),
  },
]

const data = [
  { id: 1, name: 'Ada', status: 'Online' },
  { id: 2, name: 'Linus', status: 'Offline' },
]
</script>

<template>
  <var-data-table :columns="columns" :data="data" />
</template>
```

### Subtle Background

Use `surface="low"` for a subtler MD3-style surface layer.

```html
<template>
  <var-data-table :columns="columns" :data="data" surface="low" />
</template>
```

### Cell Spans

Use `rowSpan`, `colSpan`, and `titleColSpan` to merge body and header cells. Returning `0` hides the current cell, which is typically used together with a previous spanning cell.

```html
<script setup>
const columns = [
  {
    key: 'name',
    title: 'Identity',
    titleColSpan: 2,
    rowSpan: ({ rowIndex }) => (rowIndex === 0 ? 2 : 1),
  },
  {
    key: 'role',
    title: 'Role',
    colSpan: ({ rowIndex }) => (rowIndex === 0 ? 2 : 1),
  },
  { key: 'status', title: 'Status' },
]

const data = [
  { id: 1, name: 'Ada', role: 'Admin', status: 'Online' },
  { id: 2, name: 'Linus', role: 'Maintainer', status: 'Offline' },
]
</script>

<template>
  <var-data-table :columns="columns" :data="data" :pagination="false" cell-bordered />
</template>
```

### Selection

Use `type: 'selection'` to render a selection column. Bind `v-model:checked-row-keys` to control the selected rows. Set `multiple: false` for single selection and `selectable` to control whether the whole selection column or specific rows can be selected. In single selection mode, the table uses `radio` instead of `checkbox`.

```html
<script setup>
import { ref } from 'vue'

const checkedRowKeys = ref([1, 3])

const columns = [
  { type: 'selection' },
  { key: 'name', title: 'Name' },
  { key: 'role', title: 'Role' },
]
</script>

<template>
  <var-data-table v-model:checked-row-keys="checkedRowKeys" :columns="columns" :data="data" />
</template>
```

#### Single Selection

```html
<script setup>
import { ref } from 'vue'

const checkedRowKeys = ref([2])

const columns = [
  { type: 'selection', multiple: false },
  { key: 'name', title: 'Name' },
  { key: 'role', title: 'Role' },
]
</script>

<template>
  <var-data-table v-model:checked-row-keys="checkedRowKeys" :columns="columns" :data="data" />
</template>
```

### Tree Data

Set `tree` explicitly to flatten and render hierarchical rows by `children-key`. Tree selection cascades by default: selecting a parent row also affects its children. Pass `:cascade="false"` if you want to keep tree selection non-cascading.

```html
<script setup>
import { ref } from 'vue'

const checkedRowKeys = ref([12])

const columns = [
  { type: 'selection' },
  { key: 'name', title: 'Name' },
  { key: 'role', title: 'Role' },
  { key: 'status', title: 'Status' },
]

const data = [
  {
    id: 1,
    name: 'Frontend',
    role: 'Team',
    status: 'Online',
    nodes: [
      { id: 11, name: 'Ada', role: 'Lead', status: 'Online' },
      { id: 12, name: 'Taylor', role: 'Engineer', status: 'Busy' },
    ],
  },
  {
    id: 2,
    name: 'Design',
    role: 'Team',
    status: 'Offline',
    nodes: [{ id: 21, name: 'Linus', role: 'Designer', status: 'Offline' }],
  },
]
</script>

<template>
  <var-data-table
    v-model:checked-row-keys="checkedRowKeys"
    :columns="columns"
    :data="data"
    :pagination="false"
    tree
    children-key="nodes"
  />
</template>
```

#### Non-Cascading

```html
<template>
  <var-data-table
    v-model:checked-row-keys="checkedRowKeys"
    :columns="columns"
    :data="data"
    :pagination="false"
    :cascade="false"
    tree
    children-key="nodes"
  />
</template>
```

#### Tree Single Selection

Tree single selection is independent from cascading and still keeps only one selected key.

```html
<template>
  <var-data-table
    v-model:checked-row-keys="checkedRowKeys"
    :columns="[
      { type: 'selection', multiple: false },
      { key: 'name', title: 'Name' },
      { key: 'role', title: 'Role' },
      { key: 'status', title: 'Status' },
    ]"
    :data="data"
    :pagination="false"
    tree
    children-key="nodes"
  />
</template>
```

### Expand

Use `type: 'expand'` to render an expand column. Use `renderExpand` to customize expanded content, and `expandable` to control whether a row can be expanded. Expanded content is better suited for focused detail blocks than another table.

```html
<script setup>
import { h } from 'vue'

const columns = [
  {
    type: 'expand',
    expandable: ({ row }) => row.status === 'Online',
    renderExpand: ({ row }) =>
      h('div', { style: { padding: '4px 0', display: 'grid', gap: '12px' } }, [
        h('div', { style: { fontSize: '14px', fontWeight: '600' } }, `${row.name} Details`),
        h('div', { style: { color: 'var(--color-text-secondary)', fontSize: '14px', lineHeight: '1.6' } }, [
          h('div', `Current Role: ${row.role}`),
          h('div', `Current Status: ${row.status}`),
          h('div', `Last Updated: 2026-05-21`),
        ]),
      ]),
  },
  { key: 'name', title: 'Name' },
  { key: 'status', title: 'Status' },
]
</script>

<template>
  <var-data-table :columns="columns" :data="data" :pagination="false" />
</template>
```

### Local Pagination

In local pagination mode, pass the full data set, bind `v-model:page` and `v-model:page-size`, and let the component slice it internally.

```html
<script setup>
import { ref } from 'vue'

const page = ref(1)
const pageSize = ref(10)
</script>

<template>
  <var-data-table
    v-model:page="page"
    v-model:page-size="pageSize"
    :columns="columns"
    :data="data"
    :pagination="{
      showSizeChanger: false,
      showQuickJumper: false,
    }"
  />
</template>
```

### Remote Pagination

Set `remote` to stop internal slicing. In this mode, `data` should be the current page data and `total` should be controlled externally. The following example uses `setTimeout` to simulate an async request and shows `loading` during the request.

```html
<script setup>
import { times } from '@varlet/shared'
import { ref, watch } from 'vue'

const allData = times(40, (index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
}))

const page = ref(1)
const pageSize = ref(10)
const loading = ref(false)
const currentPageData = ref([])
let timer

watch(
  [page, pageSize],
  ([current, size]) => {
    loading.value = true

    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      const start = (current - 1) * size
      currentPageData.value = allData.slice(start, start + size)
      loading.value = false
    }, 400)
  },
  { immediate: true },
)

const columns = [{ key: 'name', title: 'Name' }]
</script>

<template>
  <var-data-table
    v-model:page="page"
    v-model:page-size="pageSize"
    :columns="columns"
    :data="currentPageData"
    :loading="loading"
    :total="allData.length"
    :pagination="{
      showSizeChanger: false,
      showQuickJumper: false,
    }"
    remote
  />
</template>
```

### Sticky Header

Set `max-height` to make the table body scroll internally while keeping the header fixed at the top of the scroll container.

```html
<template>
  <var-data-table :columns="columns" :data="manyRows" :pagination="false" :max-height="320" />
</template>
```

### Fixed Columns

Set `scroll-x` to declare the table width for horizontal scrolling, then use `fixed: 'left' | 'right'` on columns that should stay pinned.

```html
<template>
  <var-data-table :columns="scrollColumns" :data="scrollData" :pagination="false" :scroll-x="566" />
</template>

<script setup>
const scrollColumns = [
  { key: 'name', title: 'Name', fixed: 'left', width: 104 },
  { key: 'role', title: 'Role', width: 126 },
  { key: 'department', title: 'Dept', width: 120 },
  { key: 'location', title: 'City', width: 120 },
  { key: 'status', title: 'Status', fixed: 'right', width: 96 },
]
</script>
```

### Resizable Columns

Set `resizable` to enable drag resizing for a column. `minWidth` and `maxWidth` are used as resize limits.

```html
<template>
  <var-data-table :columns="resizableColumns" :data="data" :pagination="false" :scroll-x="540" />
</template>

<script setup>
const resizableColumns = [
  { key: 'name', title: 'Name', width: 180, minWidth: 120, maxWidth: 260, resizable: true },
  { key: 'role', title: 'Role', width: 220, minWidth: 160, resizable: true },
  { key: 'status', title: 'Status', width: 140, maxWidth: 180, resizable: true },
]
</script>
```

### Empty Text

```html
<template>
  <var-data-table :columns="columns" :data="[]" :pagination="false">
    <template #empty>No Data</template>
  </var-data-table>
</template>
```

### Loading

```html
<template>
  <var-data-table :columns="columns" :data="[]" loading />
</template>
```

### Centered Alignment

Use centered `align` and `titleAlign` together with `sorter` and `resizable` when you want to verify the relative position of the sort trigger and resize trigger in a centered header layout.

```html
<script setup>
import { computed, ref } from 'vue'

const sorters = ref([])
const rawData = [
  { id: 1, name: 'Ada', role: 'Admin', status: 'Online' },
  { id: 2, name: 'Linus', role: 'Maintainer', status: 'Offline' },
]

function renderExpand({ row }) {
  return `${row.name} Details`
}

const columns = [
  { type: 'selection' },
  { type: 'expand', renderExpand },
  { key: 'name', title: 'Name', width: 170, minWidth: 120, sorter: true, resizable: true, align: 'center', titleAlign: 'center' },
  { key: 'role', title: 'Role', width: 190, minWidth: 140, sorter: true, resizable: true, align: 'center', titleAlign: 'center' },
  { key: 'status', title: 'Status', width: 150, minWidth: 120, sorter: true, resizable: true, align: 'center', titleAlign: 'center' },
]

const data = computed(() => applySorters(rawData, sorters.value))
</script>

<template>
  <var-data-table v-model:sorters="sorters" :columns="columns" :data="data" :pagination="false" :scroll-x="510" />
</template>
```

### Right Alignment

Use right-aligned headers and cells together with `sorter` and `resizable` to verify the trigger layout in a right-aligned case.

```html
<script setup>
import { computed, ref } from 'vue'

const sorters = ref([])
const rawData = [
  { id: 1, name: 'Ada', role: 'Admin', status: 'Online' },
  { id: 2, name: 'Linus', role: 'Maintainer', status: 'Offline' },
]

function renderExpand({ row }) {
  return `${row.name} Details`
}

const columns = [
  { type: 'selection' },
  { type: 'expand', renderExpand },
  { key: 'name', title: 'Name', width: 170, minWidth: 120, sorter: true, resizable: true, align: 'right', titleAlign: 'right' },
  { key: 'role', title: 'Role', width: 190, minWidth: 140, sorter: true, resizable: true, align: 'right', titleAlign: 'right' },
  { key: 'status', title: 'Status', width: 150, minWidth: 120, sorter: true, resizable: true, align: 'right', titleAlign: 'right' },
]

const data = computed(() => applySorters(rawData, sorters.value))
</script>

<template>
  <var-data-table v-model:sorters="sorters" :columns="columns" :data="data" :pagination="false" :scroll-x="510" />
</template>
```

## API

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `data` | Data source. Full data in local mode, current page data in remote mode | _any[]_ | `[]` |
| `columns` | Column definitions | _DataTableColumn[]_ | `[]` |
| `row-key` | Row key field or getter | _string \| ((row, rowIndex) => string \| number)_ | `'id'` |
| `row-props` | Native row props, supports object or function | _object \| (context) => object_ | `-` |
| `loading` | Whether to show loading overlay | _boolean_ | `false` |
| `pagination` | Built-in pagination config | _boolean \| DataTablePagination_ | `true` |
| `remote` | Whether to enable remote pagination mode | _boolean_ | `false` |
| `v-model:page` | Current page | _number_ | `1` |
| `v-model:page-size` | Current page size | _number_ | `10` |
| `v-model:checked-row-keys` | Selected row keys | _Array<string \| number>_ | `[]` |
| `total` | Total item count in remote mode | _number_ | `-` |
| `max-height` | Max height of the table body. When set, the header stays fixed and the body scrolls internally | _number \| string_ | `-` |
| `scroll-x` | Table width used to enable horizontal scrolling. Usually paired with fixed columns | _number \| string_ | `-` |
| `v-model:sorters` | Controlled sorter states | _DataTableSorter[]_ | `[]` |
| `sort-mode` | Sorter mode | _'single' \| 'multiple'_ | `'single'` |
| `plain` | Whether to render as a plain table without card shadow, background, or radius | _boolean_ | `false` |
| `table-layout` | Native `table-layout` value | _'auto' \| 'fixed'_ | `'auto'` |
| `tree` | Whether to explicitly enable tree data mode | _boolean_ | `false` |
| `cascade` | Whether tree selection should cascade | _boolean_ | `true` |
| `children-key` | Child node field name for tree rows | _string_ | `'children'` |
| `elevation` | Elevation level | _boolean \| number \| string_ | `true` |
| `surface` | Subtle background style | _'low'_ | `-` |
| `cell-bordered` | Whether to show cell dividers | _boolean_ | `false` |
| `size` | Table size | _'small' \| 'normal' \| 'large'_ | `'normal'` |

#### DataTableColumn

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `type` | Column type. Supports `selection` and `expand` | _'selection' \| 'expand'_ | `-` |
| `key` | Unique column key | _string_ | `-` |
| `title` | Column title | _string_ | `-` |
| `sorter` | Whether the field column shows sorter interaction | _boolean_ | `false` |
| `multiple` | Whether the selection column allows multiple rows | _boolean_ | `true` |
| `selectable` | Whether selection is enabled. Supports `boolean` or `(context) => boolean` | _boolean \| `(context) => boolean`_ | `true` |
| `expandable` | Whether the row can be expanded. Only works on expand columns | _`(context) => boolean`_ | `-` |
| `renderExpand` | Custom expanded content. Only works on expand columns | _`(context) => VNodeChild`_ | `-` |
| `resizable` | Whether the column width can be resized by dragging | _boolean_ | `false` |
| `width` | Column width | _number \| string_ | `-` |
| `minWidth` | Column min width | _number \| string_ | `-` |
| `maxWidth` | Column max width. Also used as the upper resize limit when `resizable` is enabled | _number \| string_ | `-` |
| `align` | Body cell align | _'left' \| 'center' \| 'right'_ | `'left'` |
| `titleAlign` | Header title align | _'left' \| 'center' \| 'right'_ | `align` |
| `titleColSpan` | Header col span. Set to `0` to hide the current header cell | _number_ | `1` |
| `colSpan` | Body cell col span. Supports a number or function. Return `0` to hide the current cell | _number \| `(context) => number`_ | `1` |
| `rowSpan` | Body cell row span. Supports a number or function. Return `0` to hide the current cell | _number \| `(context) => number`_ | `1` |
| `cellProps` | Native cell props, supports object or function | _object \| (context) => object_ | `-` |
| `render` | Custom cell render | _`(context) => VNodeChild`_ | `-` |

#### DataTablePagination

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `simple` | Whether to use simple pagination | _boolean_ | `false` |
| `disabled` | Whether to disable pagination | _boolean_ | `false` |
| `showSizeChanger` | Whether to show page size changer | _boolean_ | `true` |
| `showQuickJumper` | Whether to show quick jumper | _boolean_ | `false` |
| `maxPagerCount` | Max pager count | _number_ | `5` |
| `sizeOption` | Page size options | _number[]_ | `[10, 20, 50, 100]` |
| `showTotal` | Total text renderer | _`(total: number, range: [number, number]) => string`_ | `-` |

#### DataTableSorter

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `key` | Target column key | _string_ | `-` |
| `order` | Sort order | _'asc' \| 'desc'_ | `-` |

### Slots

| Name | Description | Parameters |
| --- | --- | --- |
| `empty` | Custom empty content | `-` |
| `loading-description` | Custom loading description | `-` |
| `footer-prefix` | Content before pagination | `-` |

### Style Variables

| Variable | Default |
| --- | --- |
| `--data-table-background` | `#fff` |
| `--data-table-header-cell-background` | `#fff` |
| `--data-table-surface-low-background` | `var(--color-surface-container-highest)` |
| `--data-table-header-cell-text-color` | `rgba(0, 0, 0, 0.6)` |
| `--data-table-body-cell-text-color` | `#555` |
| `--data-table-border-color` | `var(--color-outline)` |
| `--data-table-row-hover-background` | `#f5f5f5` |
| `--data-table-surface-low-row-hover-background` | `var(--color-surface-container-highest)` |
| `--data-table-plain-row-hover-background` | `hsla(var(--hsl-on-surface), 0.04)` |
| `--data-table-sort-trigger-color` | `hsla(var(--hsl-on-surface), 0.42)` |
| `--data-table-sort-trigger-active-color` | `var(--color-primary)` |
| `--data-table-sort-trigger-hover-background` | `hsla(var(--hsl-primary), 0.08)` |
| `--data-table-empty-text-color` | `var(--color-text-disabled)` |
| `--data-table-border-radius` | `2px` |
| `--data-table-cell-padding` | `0 16px` |
| `--data-table-cell-font-size` | `16px` |
| `--data-table-header-font-size` | `14px` |
| `--data-table-row-height` | `46px` |
| `--data-table-row-small-height` | `40px` |
| `--data-table-row-large-height` | `52px` |
| `--data-table-footer-padding` | `12px 16px` |
| `--data-table-empty-padding` | `48px 16px` |
