# DataTable

### Intro

Data-driven table.

### Basic Usage

```html
<script setup>
import { ref } from 'vue'

const columns = ref([
  { key: 'name', title: 'Name' },
  { key: 'role', title: 'Role' },
  { key: 'status', title: 'Status' },
])

const data = ref([
  { id: 1, name: 'Ada', role: 'Admin', status: 'Online' },
  { id: 2, name: 'Linus', role: 'Maintainer', status: 'Offline' },
  { id: 3, name: 'Taylor', role: 'Designer', status: 'Online' },
  { id: 4, name: 'Evan', role: 'Reviewer', status: 'Busy' },
])
</script>

<template>
  <var-data-table :columns="columns" :data="data" />
</template>
```


### Custom Column Render

```html
<script setup>
import { h, ref } from 'vue'

const columns = ref([
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
])

const data = ref([
  { id: 1, name: 'Ada', role: 'Admin', status: 'Online' },
  { id: 2, name: 'Linus', role: 'Maintainer', status: 'Offline' },
  { id: 3, name: 'Taylor', role: 'Designer', status: 'Online' },
  { id: 4, name: 'Evan', role: 'Reviewer', status: 'Busy' },
])
</script>

<template>
  <var-data-table :columns="columns" :data="data" />
</template>
```


### Frontend Pagination

```html
<script setup>
import { ref } from 'vue'

const columns = ref([
  { key: 'name', title: 'Name' },
  { key: 'role', title: 'Role' },
  { key: 'status', title: 'Status' },
])

const data = ref(
  Array.from({ length: 48 }, (_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    role: index % 2 === 0 ? 'Engineer' : 'Operator',
    status: index % 3 === 0 ? 'Online' : 'Offline',
  })),
)
</script>

<template>
  <var-data-table :columns="columns" :data="data" />
</template>
```

### Remote Pagination

```html
<script setup>
import { ref, watch } from 'vue'

const page = ref(1)
const pageSize = ref(10)
const loading = ref(false)
const data = ref([])
let timer

const columns = ref([
  { key: 'name', title: 'Name' },
  { key: 'role', title: 'Role' },
  { key: 'status', title: 'Status' },
])

const allData = ref(
  Array.from({ length: 48 }, (_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    role: index % 2 === 0 ? 'Engineer' : 'Operator',
    status: index % 3 === 0 ? 'Online' : 'Offline',
  })),
)

watch(
  [page, pageSize],
  ([current, size]) => {
    loading.value = true

    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      const start = (current - 1) * size
      data.value = allData.value.slice(start, start + size)
      loading.value = false
    }, 400)
  },
  { immediate: true },
)
</script>

<template>
  <var-data-table
    v-model:page="page"
    v-model:page-size="pageSize"
    :columns="columns"
    :data="data"
    :loading="loading"
    :total="allData.length"
    remote
  />
</template>
```

### Single Column Sorting

```html
<script setup>
import { computed, ref } from 'vue'

const sorters = ref([])

const columns = ref([
  { key: 'score', title: 'Score', sorter: true },
  { key: 'tasks', title: 'Tasks', sorter: true },
  { key: 'priority', title: 'Priority', sorter: true },
])

const data = computed(() => {
  const data = [
    { id: 1, score: 92, tasks: 16, priority: 2 },
    { id: 2, score: 78, tasks: 24, priority: 3 },
    { id: 3, score: 88, tasks: 12, priority: 1 },
    { id: 4, score: 95, tasks: 18, priority: 2 },
  ]
  const [sorter] = sorters.value

  if (!sorter) {
    return data
  }

  return data.sort((a, b) => {
    const result = a[sorter.key] - b[sorter.key]
    return sorter.order === 'desc' ? -result : result
  })
})
</script>

<template>
  <var-data-table
    v-model:sorters="sorters"
    :columns="columns"
    :data="data"
    :pagination="false"
  />
</template>
```

### Multiple Column Sorting

```html
<script setup>
import { computed, ref } from 'vue'

const sorters = ref([])

const columns = ref([
  { key: 'score', title: 'Score', sorter: true },
  { key: 'tasks', title: 'Tasks', sorter: true },
  { key: 'priority', title: 'Priority', sorter: true },
])

const data = computed(() => {
  const data = [
    { id: 1, score: 92, tasks: 16, priority: 2 },
    { id: 2, score: 78, tasks: 24, priority: 3 },
    { id: 3, score: 88, tasks: 12, priority: 1 },
    { id: 4, score: 95, tasks: 18, priority: 2 },
  ]

  return data.sort((a, b) => {
    for (const sorter of sorters.value) {
      const result = a[sorter.key] - b[sorter.key]

      if (result !== 0) {
        return sorter.order === 'desc' ? -result : result
      }
    }

    return 0
  })
})
</script>

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

### Column Options

```html
<script setup>
import { ref } from 'vue'

const columns = ref([
  { key: 'name', title: 'Name', minWidth: 96 },
  { key: 'role', title: 'Role', titleAlign: 'center', align: 'center', width: 88 },
  { key: 'status', title: 'Status', titleAlign: 'right', align: 'right', width: 84 },
])

const data = ref([
  { id: 1, name: 'Ada', role: 'Admin', status: 'Online' },
  { id: 2, name: 'Linus', role: 'Maintainer', status: 'Offline' },
  { id: 3, name: 'Taylor', role: 'Designer', status: 'Online' },
  { id: 4, name: 'Evan', role: 'Reviewer', status: 'Busy' },
])
</script>

<template>
  <var-data-table :columns="columns" :data="data" />
</template>
```

### Grouped Header

```html
<script setup>
import { ref } from 'vue'

const columns = ref([
  {
    title: 'Profile',
    children: [
      { key: 'name', title: 'Name', width: 112 },
      { key: 'role', title: 'Role', width: 112 },
    ],
  },
  {
    title: 'State',
    children: [{ key: 'status', title: 'Status', width: 96 }],
  },
])

const data = ref([
  { id: 1, name: 'Ada', role: 'Admin', status: 'Online' },
  { id: 2, name: 'Linus', role: 'Maintainer', status: 'Offline' },
  { id: 3, name: 'Taylor', role: 'Designer', status: 'Online' },
  { id: 4, name: 'Evan', role: 'Reviewer', status: 'Busy' },
])
</script>

<template>
  <var-data-table :columns="columns" :data="data" :pagination="false" cell-bordered />
</template>
```

### Custom Row Props

```html
<script setup>
import { ref } from 'vue'

const columns = ref([
  { key: 'name', title: 'Name' },
  { key: 'role', title: 'Role' },
  { key: 'status', title: 'Status' },
])

const customRowProps = ({ row, rowIndex }) => ({
  style: {
    backgroundColor: rowIndex === 0 ? 'hsla(var(--hsl-primary), 0.08)' : undefined,
  },
  title: row.name,
})

const data = ref([
  { id: 1, name: 'Ada', role: 'Admin', status: 'Online' },
  { id: 2, name: 'Linus', role: 'Maintainer', status: 'Offline' },
  { id: 3, name: 'Taylor', role: 'Designer', status: 'Online' },
  { id: 4, name: 'Evan', role: 'Reviewer', status: 'Busy' },
])
</script>

<template>
  <var-data-table :columns="columns" :data="data" :row-props="customRowProps" />
</template>
```

### Row Class

```html
<script setup>
import { ref } from 'vue'

const columns = ref([
  { key: 'name', title: 'Name' },
  { key: 'role', title: 'Role' },
  { key: 'status', title: 'Status' },
])

const rowClass = ({ row }) => {
  return row.status === 'Busy' ? 'busy-row' : undefined
}

const data = ref([
  { id: 1, name: 'Ada', role: 'Admin', status: 'Online' },
  { id: 2, name: 'Linus', role: 'Maintainer', status: 'Offline' },
  { id: 3, name: 'Taylor', role: 'Designer', status: 'Online' },
  { id: 4, name: 'Evan', role: 'Reviewer', status: 'Busy' },
])
</script>

<template>
  <var-data-table :columns="columns" :data="data" :row-class="rowClass" />
</template>

<style scoped>
:deep(.busy-row) {
  color: var(--color-warning);
}
</style>
```

### Summary

```html
<script setup>
import { ref } from 'vue'

const columns = ref([
  { key: 'name', title: 'Name' },
  { key: 'score', title: 'Score' },
  { key: 'tasks', title: 'Tasks' },
])

const summary = ({ data }) => ({
  name: {
    value: 'Total',
    colSpan: 2,
  },
  tasks: {
    value: data.reduce((total, row) => total + row.tasks, 0),
  },
})

const data = ref([
  { id: 1, name: 'Ada', score: 92, tasks: 16 },
  { id: 2, name: 'Linus', score: 78, tasks: 24 },
  { id: 3, name: 'Taylor', score: 88, tasks: 12 },
])
</script>

<template>
  <var-data-table :columns="columns" :data="data" :summary="summary" :pagination="false" />
</template>
```

### Cell Spans

```html
<script setup>
import { ref } from 'vue'

const columns = ref([
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
])

const data = ref([
  { id: 1, name: 'Ada', role: 'Admin', status: 'Online' },
  { id: 2, name: 'Linus', role: 'Maintainer', status: 'Offline' },
])
</script>

<template>
  <var-data-table :columns="columns" :data="data" :pagination="false" cell-bordered />
</template>
```

### Selection

```html
<script setup>
import { ref } from 'vue'

const checkedRowKeys = ref([1, 3])

const columns = ref([
  { type: 'selection' },
  { key: 'name', title: 'Name' },
  { key: 'role', title: 'Role' },
  { key: 'status', title: 'Status' },
])

const data = ref([
  { id: 1, name: 'Ada', role: 'Admin', status: 'Online' },
  { id: 2, name: 'Linus', role: 'Maintainer', status: 'Offline' },
  { id: 3, name: 'Taylor', role: 'Designer', status: 'Online' },
  { id: 4, name: 'Evan', role: 'Reviewer', status: 'Busy' },
])
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

const columns = ref([
  { type: 'selection', multiple: false },
  { key: 'name', title: 'Name' },
  { key: 'role', title: 'Role' },
  { key: 'status', title: 'Status' },
])

const data = ref([
  { id: 1, name: 'Ada', role: 'Admin', status: 'Online' },
  { id: 2, name: 'Linus', role: 'Maintainer', status: 'Offline' },
  { id: 3, name: 'Taylor', role: 'Designer', status: 'Online' },
  { id: 4, name: 'Evan', role: 'Reviewer', status: 'Busy' },
])
</script>

<template>
  <var-data-table v-model:checked-row-keys="checkedRowKeys" :columns="columns" :data="data" />
</template>
```

### Tree Data

```html
<script setup>
import { ref } from 'vue'

const checkedRowKeys = ref([12])

const columns = ref([
  { type: 'selection' },
  { key: 'name', title: 'Name' },
  { key: 'role', title: 'Role' },
  { key: 'status', title: 'Status' },
])

const data = ref([
  {
    id: 1,
    name: 'Frontend',
    role: 'Team',
    status: 'Online',
    children: [
      { id: 11, name: 'Ada', role: 'Lead', status: 'Online' },
      { id: 12, name: 'Taylor', role: 'Engineer', status: 'Busy' },
    ],
  },
  {
    id: 2,
    name: 'Design',
    role: 'Team',
    status: 'Offline',
    children: [{ id: 21, name: 'Linus', role: 'Designer', status: 'Offline' }],
  },
])
</script>

<template>
  <var-data-table
    v-model:checked-row-keys="checkedRowKeys"
    :columns="columns"
    :data="data"
    :pagination="false"
    tree
  />
</template>
```

### Tree Non-Cascade

```html
<script setup>
import { ref } from 'vue'

const checkedRowKeys = ref([12])

const columns = ref([
  { type: 'selection' },
  { key: 'name', title: 'Name' },
  { key: 'role', title: 'Role' },
  { key: 'status', title: 'Status' },
])

const data = ref([
  {
    id: 1,
    name: 'Frontend',
    role: 'Team',
    status: 'Online',
    children: [
      { id: 11, name: 'Ada', role: 'Lead', status: 'Online' },
      { id: 12, name: 'Taylor', role: 'Engineer', status: 'Busy' },
    ],
  },
  {
    id: 2,
    name: 'Design',
    role: 'Team',
    status: 'Offline',
    children: [{ id: 21, name: 'Linus', role: 'Designer', status: 'Offline' }],
  },
])
</script>

<template>
  <var-data-table
    v-model:checked-row-keys="checkedRowKeys"
    :columns="columns"
    :data="data"
    :pagination="false"
    :cascade="false"
    tree
  />
</template>
```

### Tree Single Selection

```html
<script setup>
import { ref } from 'vue'

const checkedRowKeys = ref([21])

const columns = ref([
  { type: 'selection', multiple: false },
  { key: 'name', title: 'Name' },
  { key: 'role', title: 'Role' },
  { key: 'status', title: 'Status' },
])

const data = ref([
  {
    id: 1,
    name: 'Frontend',
    role: 'Team',
    status: 'Online',
    children: [
      { id: 11, name: 'Ada', role: 'Lead', status: 'Online' },
      { id: 12, name: 'Taylor', role: 'Engineer', status: 'Busy' },
    ],
  },
  {
    id: 2,
    name: 'Design',
    role: 'Team',
    status: 'Offline',
    children: [{ id: 21, name: 'Linus', role: 'Designer', status: 'Offline' }],
  },
])
</script>

<template>
  <var-data-table
    v-model:checked-row-keys="checkedRowKeys"
    :columns="columns"
    :data="data"
    :pagination="false"
    tree
  />
</template>
```

### Expand

```html
<script setup>
import { h, ref } from 'vue'

const columns = ref([
  {
    type: 'expand',
    expandable: ({ row }) => row.status !== 'Busy',
    renderExpand: ({ row }) => h('div', { style: { padding: '4px 0' } }, `${row.name} Details`),
  },
  { key: 'name', title: 'Name' },
  { key: 'role', title: 'Role' },
  { key: 'status', title: 'Status' },
])

const data = ref([
  { id: 1, name: 'Ada', role: 'Admin', status: 'Online' },
  { id: 2, name: 'Linus', role: 'Maintainer', status: 'Offline' },
  { id: 3, name: 'Taylor', role: 'Designer', status: 'Online' },
  { id: 4, name: 'Evan', role: 'Reviewer', status: 'Busy' },
])
</script>

<template>
  <var-data-table :columns="columns" :data="data" :pagination="false" />
</template>
```

### Fixed Header / Columns

```html
<script setup>
import { ref } from 'vue'

const columns = ref([
  { key: 'name', title: 'Name', fixed: 'left', width: 104 },
  { key: 'role', title: 'Role', width: 126 },
  { key: 'department', title: 'Dept', width: 120 },
  { key: 'location', title: 'City', width: 120 },
  { key: 'status', title: 'Status', fixed: 'right', width: 96 },
])

const data = ref(
  Array.from({ length: 24 }, (_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    role: index % 2 === 0 ? 'FE Lead' : 'Platform',
    department: index % 2 === 0 ? 'Exp' : 'Infra',
    location: ['HZ', 'SH', 'SZ'][index % 3],
    status: index % 3 === 0 ? 'Online' : index % 3 === 1 ? 'Offline' : 'Busy',
  })),
)
</script>

<template>
  <var-data-table
    :columns="columns"
    :data="data"
    :pagination="false"
    :max-height="320"
    :scroll-x="566"
  />
</template>
```

### Resizable Columns

```html
<script setup>
import { ref } from 'vue'

const columns = ref([
  { key: 'name', title: 'Name', width: 180, minWidth: 120, maxWidth: 260, resizable: true },
  { key: 'role', title: 'Role', width: 220, minWidth: 160, resizable: true },
  { key: 'status', title: 'Status', width: 140, maxWidth: 180, resizable: true },
])

const data = ref([
  { id: 1, name: 'Ada', role: 'Admin', status: 'Online' },
  { id: 2, name: 'Linus', role: 'Maintainer', status: 'Offline' },
  { id: 3, name: 'Taylor', role: 'Designer', status: 'Online' },
  { id: 4, name: 'Evan', role: 'Reviewer', status: 'Busy' },
])
</script>

<template>
  <var-data-table :columns="columns" :data="data" :pagination="false" :scroll-x="540" />
</template>
```

### Custom Empty Content

```html
<script setup>
import { ref } from 'vue'

const columns = ref([
  { key: 'name', title: 'Name' },
  { key: 'role', title: 'Role' },
  { key: 'status', title: 'Status' },
])
</script>

<template>
  <var-data-table :columns="columns" :data="[]" :pagination="false">
    <template #empty>
      <div class="custom-empty">
        <var-icon name="information" :size="24" />
        <span>No matching data</span>
      </div>
    </template>
  </var-data-table>
</template>

<style scoped>
.custom-empty {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--color-text-secondary);
}
</style>
```

### Loading

```html
<script setup>
import { ref } from 'vue'

const columns = ref([
  { key: 'name', title: 'Name' },
  { key: 'role', title: 'Role' },
  { key: 'status', title: 'Status' },
])
</script>

<template>
  <var-data-table :columns="columns" :data="[]" loading />
</template>
```

### Sizes

```html
<script setup>
import { ref } from 'vue'

const columns = ref([
  { key: 'name', title: 'Name' },
  { key: 'role', title: 'Role' },
  { key: 'status', title: 'Status' },
])

const data = ref([
  { id: 1, name: 'Ada', role: 'Admin', status: 'Online' },
  { id: 2, name: 'Linus', role: 'Maintainer', status: 'Offline' },
  { id: 3, name: 'Taylor', role: 'Designer', status: 'Online' },
  { id: 4, name: 'Evan', role: 'Reviewer', status: 'Busy' },
])
</script>

<template>
  <var-data-table :columns="columns" :data="data" size="small" />
  <var-data-table :columns="columns" :data="data" size="large" />
</template>
```

### Subtle Background

```html
<script setup>
import { ref } from 'vue'

const columns = ref([
  { key: 'name', title: 'Name' },
  { key: 'role', title: 'Role' },
  { key: 'status', title: 'Status' },
])

const data = ref([
  { id: 1, name: 'Ada', role: 'Admin', status: 'Online' },
  { id: 2, name: 'Linus', role: 'Maintainer', status: 'Offline' },
  { id: 3, name: 'Taylor', role: 'Designer', status: 'Online' },
  { id: 4, name: 'Evan', role: 'Reviewer', status: 'Busy' },
])
</script>

<template>
  <var-data-table :columns="columns" :data="data" surface="low" />
</template>
```

### Plain Table

```html
<script setup>
import { ref } from 'vue'

const columns = ref([
  { key: 'name', title: 'Name' },
  { key: 'role', title: 'Role' },
  { key: 'status', title: 'Status' },
])

const data = ref([
  { id: 1, name: 'Ada', role: 'Admin', status: 'Online' },
  { id: 2, name: 'Linus', role: 'Maintainer', status: 'Offline' },
  { id: 3, name: 'Taylor', role: 'Designer', status: 'Online' },
  { id: 4, name: 'Evan', role: 'Reviewer', status: 'Busy' },
])
</script>

<template>
  <var-data-table :columns="columns" :data="data" :pagination="false" plain />
</template>
```

## API

### Props

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `data` | Data source. Full data in local mode, current page data in remote mode | _any[]_ | `[]` |
| `columns` | Column definitions | _DataTableColumn[]_ | `[]` |
| `row-key` | Row key field or getter | _string \| ((row, rowIndex) => string \| number)_ | `'id'` |
| `row-props` | Custom row props, supports object or function | _object \| (context) => object_ | `-` |
| `row-class` | Custom row class, supports string, array, object, or function | _string \| array \| object \| (context) => string \| array \| object_ | `-` |
| `summary` | Summary row render function. Return an array to render multiple summary rows | _(context) => Record<string, DataTableSummaryCell> \| Array<Record<string, DataTableSummaryCell>>_ | `-` |
| `loading` | Whether to show loading overlay | _boolean_ | `false` |
| `pagination` | Built-in pagination config | _boolean \| DataTablePagination_ | `true` |
| `remote` | Whether to enable remote pagination mode | _boolean_ | `false` |
| `v-model:page` | Current page | _number_ | `1` |
| `v-model:page-size` | Current page size | _number_ | `10` |
| `v-model:checked-row-keys` | Selected row keys | _Array<string \| number>_ | `[]` |
| `v-model:expanded-row-keys` | Expanded detail row keys for `type: 'expand'` columns | _Array<string \| number>_ | `[]` |
| `v-model:expanded-tree-row-keys` | Expanded tree row keys for `tree` mode | _Array<string \| number>_ | `[]` |
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
| `children` | Child columns used to render a grouped header | _DataTableColumn[]_ | `-` |
| `sorter` | Whether the field column shows sorter interaction | _boolean_ | `false` |
| `multiple` | Whether the selection column allows multiple rows | _boolean_ | `true` |
| `selectable` | Whether selection is enabled. Supports `boolean` or `(context) => boolean` | _boolean \| (context) => boolean_ | `true` |
| `expandable` | Whether the row can be expanded. Only works on expand columns | _(context) => boolean_ | `-` |
| `renderExpand` | Custom expanded content. Only works on expand columns | _(context) => VNodeChild_ | `-` |
| `resizable` | Whether the column width can be resized by dragging | _boolean_ | `false` |
| `width` | Column width | _number \| string_ | `-` |
| `minWidth` | Column min width | _number \| string_ | `-` |
| `maxWidth` | Column max width. Also used as the upper resize limit when `resizable` is enabled | _number \| string_ | `-` |
| `align` | Body cell align | _'left' \| 'center' \| 'right'_ | `'left'` |
| `titleAlign` | Header title align | _'left' \| 'center' \| 'right'_ | `align` |
| `titleColSpan` | Header col span. Set to `0` to hide the current header cell | _number_ | `1` |
| `colSpan` | Body cell col span. Supports a number or function. Return `0` to hide the current cell | _number \| (context) => number_ | `1` |
| `rowSpan` | Body cell row span. Supports a number or function. Return `0` to hide the current cell | _number \| (context) => number_ | `1` |
| `cellProps` | Custom cell props, supports object or function | _object \| (context) => object_ | `-` |
| `render` | Custom cell render | _(context) => VNodeChild_ | `-` |

#### DataTablePagination

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `simple` | Whether to use simple pagination | _boolean_ | `false` |
| `disabled` | Whether to disable pagination | _boolean_ | `false` |
| `showSizeChanger` | Whether to show page size changer | _boolean_ | `false` |
| `showQuickJumper` | Whether to show quick jumper | _boolean_ | `false` |
| `maxPagerCount` | Max pager count | _number_ | `5` |
| `sizeOption` | Page size options | _number[]_ | `[10, 20, 50, 100]` |
| `showTotal` | Total text renderer | _(total: number, range: [number, number]) => string_ | `-` |

#### DataTableSummaryCell

| Prop | Description | Type | Default |
| --- | --- | --- | --- |
| `value` | Cell content | _VNodeChild_ | `-` |
| `colSpan` | Cell col span | _number_ | `1` |
| `rowSpan` | Cell row span | _number_ | `1` |

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
| `--data-table-resize-trigger-color` | `hsla(var(--hsl-on-surface-variant), 0.36)` |
| `--data-table-fixed-shadow-color` | `rgba(0, 0, 0, 0.04)` |
| `--data-table-border-radius` | `2px` |
| `--data-table-cell-padding` | `0 16px` |
| `--data-table-selection-cell-padding` | `0 8px` |
| `--data-table-expand-cell-padding` | `0 8px` |
| `--data-table-cell-font-size` | `16px` |
| `--data-table-header-font-size` | `14px` |
| `--data-table-row-height` | `46px` |
| `--data-table-row-small-height` | `40px` |
| `--data-table-row-large-height` | `52px` |
| `--data-table-footer-padding` | `12px 16px` |
| `--data-table-empty-padding` | `48px 16px` |
