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

### Selection

Use `type: 'selection'` to render a checkbox column. Bind `v-model:checked-row-keys` to control the selected rows.

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

### Pager Pagination

Use `pagination` to configure built-in pager pagination.

```html
<template>
  <var-data-table
    :columns="columns"
    :data="data"
    :pagination="{
      simple: false,
      showSizeChanger: false,
      showQuickJumper: false,
      maxPagerCount: 2,
    }"
  />
</template>
```

### Local Pagination

In local pagination mode, pass the full data set and let the component slice it internally.

```html
<template>
  <var-data-table
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

Set `remote` to stop internal slicing. In this mode, `data` should be the current page data and `total` should be controlled externally.

```html
<script setup>
import { computed, ref } from 'vue'

const allData = Array.from({ length: 40 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
}))

const page = ref(1)
const pageSize = ref(10)

const currentPageData = computed(() => {
  const start = (page.value - 1) * pageSize.value
  return allData.slice(start, start + pageSize.value)
})

const columns = [{ key: 'name', title: 'Name' }]
</script>

<template>
  <var-data-table
    v-model:page="page"
    v-model:page-size="pageSize"
    :columns="columns"
    :data="currentPageData"
    :total="allData.length"
    :pagination="{
      showSizeChanger: false,
      showQuickJumper: false,
    }"
    remote
  />
</template>
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
| `v-model:page` | Current page | _number \| string_ | `1` |
| `v-model:page-size` | Current page size | _number \| string_ | `10` |
| `v-model:checked-row-keys` | Selected row keys | _Array<string \| number>_ | `[]` |
| `total` | Total item count in remote mode | _number \| string_ | `-` |
| `elevation` | Elevation level | _boolean \| number \| string_ | `true` |
| `cell-bordered` | Whether to show cell dividers | _boolean_ | `false` |
| `size` | Table size | _'small' \| 'normal' \| 'large'_ | `'normal'` |

### DataTableColumn

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `type` | Column type. Set to `selection` to render checkboxes | _'selection'_ | `-` |
| `key` | Unique column key | _string_ | `-` |
| `title` | Column title | _string_ | `-` |
| `width` | Column width | _number \| string_ | `-` |
| `minWidth` | Column min width | _number \| string_ | `-` |
| `align` | Body cell align | _'left' \| 'center' \| 'right'_ | `'left'` |
| `titleAlign` | Header title align | _'left' \| 'center' \| 'right'_ | `align` |
| `selectable` | Whether the row can be selected. Only works on selection columns | _`(context) => boolean`_ | `-` |
| `cellProps` | Native cell props, supports object or function | _object \| (context) => object_ | `-` |
| `render` | Custom cell render | _`(context) => VNodeChild`_ | `-` |

### DataTablePagination

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `simple` | Whether to use simple pagination | _boolean_ | `false` |
| `disabled` | Whether to disable pagination | _boolean_ | `false` |
| `showSizeChanger` | Whether to show page size changer | _boolean_ | `true` |
| `showQuickJumper` | Whether to show quick jumper | _boolean_ | `false` |
| `maxPagerCount` | Max pager count | _number_ | `5` |
| `sizeOption` | Page size options | _number[]_ | `[10, 20, 50, 100]` |
| `showTotal` | Total text renderer | _`(total: number, range: [number, number]) => string`_ | `-` |

### Slots

| Name | Description | Parameters |
| --- | --- | --- |
| `empty` | Custom empty content | `-` |
| `loading` | Custom loading content | `-` |
| `footer-prefix` | Content before pagination | `-` |

### Style Variables

| Variable | Default |
| --- | --- |
| `--data-table-background` | `#fff` |
| `--data-table-header-background` | `#fff` |
| `--data-table-header-color` | `rgba(0, 0, 0, 0.6)` |
| `--data-table-row-color` | `#555` |
| `--data-table-border-color` | `var(--color-outline)` |
| `--data-table-hover-background` | `#eee` |
| `--data-table-empty-color` | `var(--color-text-disabled)` |
| `--data-table-border-radius` | `2px` |
| `--data-table-cell-padding` | `0 16px` |
| `--data-table-cell-font-size` | `16px` |
| `--data-table-header-font-size` | `14px` |
| `--data-table-row-height` | `46px` |
| `--data-table-row-height-small` | `40px` |
| `--data-table-row-height-large` | `52px` |
| `--data-table-footer-padding` | `12px 16px` |
| `--data-table-empty-padding` | `48px 16px` |
