# DataTable

### 介绍

基于 `Table` 的更高阶数据表格组件，内置列配置与分页能力。

### 基本使用

```html
<script setup>
const columns = [
  { key: 'name', title: '姓名' },
  { key: 'role', title: '角色' },
  { key: 'status', title: '状态' },
]

const data = [
  { id: 1, name: 'Ada', role: '管理员', status: '在线' },
  { id: 2, name: 'Linus', role: '维护者', status: '离线' },
]
</script>

<template>
  <var-data-table :columns="columns" :data="data" />
</template>
```

### 纯表格

设置 `plain` 可以一并去掉卡片阴影、背景色和圆角，展示更纯粹的表格形态。

```html
<template>
  <var-data-table :columns="columns" :data="data" :pagination="false" plain />
</template>
```

### 单列排序

给字段列设置 `column.sorter` 后，可以开启排序交互。组件只管理排序状态，你需要通过 `v-model:sorters` 受控这些状态，并自行决定如何排序数据。

```html
<script setup>
import { computed, ref } from 'vue'

const rawData = [
  { id: 1, name: 'Ada', role: '管理员', status: '在线' },
  { id: 2, name: 'Linus', role: '维护者', status: '离线' },
]

const sorters = ref([])

const columns = [
  { key: 'name', title: '姓名', sorter: true },
  { key: 'role', title: '角色', sorter: true },
  { key: 'status', title: '状态', sorter: true },
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

### 多列排序

设置 `sort-mode="multiple"` 后，可以让多个列同时处于非无排序态。

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

### 单元格分割线

```html
<template>
  <var-data-table :columns="columns" :data="data" cell-bordered />
</template>
```

### 尺寸

```html
<template>
  <var-data-table :columns="columns" :data="data" size="small" />
  <var-data-table :columns="columns" :data="data" size="large" />
</template>
```

### 列配置

通过 `width`、`minWidth`、`align` 和 `titleAlign` 调整列宽和对齐方式。

```html
<script setup>
const columns = [
  { key: 'name', title: '姓名', minWidth: 140 },
  { key: 'role', title: '角色', titleAlign: 'center', align: 'center', width: 120 },
  { key: 'status', title: '状态', titleAlign: 'right', align: 'right', width: 100 },
]
</script>

<template>
  <var-data-table :columns="columns" :data="data" />
</template>
```

### 属性透传

通过 `row-props` 和 `column.cellProps` 向行和单元格透传原生属性。

```html
<script setup>
const columns = [
  { key: 'name', title: '姓名' },
  { key: 'role', title: '角色' },
  {
    key: 'status',
    title: '状态',
    cellProps: ({ row }) => ({
      style: {
        color: row.status === '在线' ? 'var(--color-success)' : 'var(--color-warning)',
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

### 自定义渲染

通过 `column.render` 自定义单元格内容。

```html
<script setup>
import { h } from 'vue'

const columns = [
  { key: 'name', title: '姓名' },
  {
    key: 'status',
    title: '状态',
    render: ({ row }) =>
      h(
        'span',
        {
          style: {
            color: row.status === '在线' ? 'var(--color-success)' : 'var(--color-text-disabled)',
          },
        },
        row.status,
      ),
  },
]

const data = [
  { id: 1, name: 'Ada', status: '在线' },
  { id: 2, name: 'Linus', status: '离线' },
]
</script>

<template>
  <var-data-table :columns="columns" :data="data" />
</template>
```

### 弱背景色

通过 `surface="low"` 使用更接近 MD3 的弱背景层级。

```html
<template>
  <var-data-table :columns="columns" :data="data" surface="low" />
</template>
```

### 单元格合并

通过 `rowSpan`、`colSpan` 和 `titleColSpan` 控制表体与表头合并。返回 `0` 时当前单元格不渲染，通常配合前一个单元格的跨行或跨列使用。

```html
<script setup>
const columns = [
  {
    key: 'name',
    title: '身份',
    titleColSpan: 2,
    rowSpan: ({ rowIndex }) => (rowIndex === 0 ? 2 : 1),
  },
  {
    key: 'role',
    title: '角色',
    colSpan: ({ rowIndex }) => (rowIndex === 0 ? 2 : 1),
  },
  { key: 'status', title: '状态' },
]

const data = [
  { id: 1, name: 'Ada', role: '管理员', status: '在线' },
  { id: 2, name: 'Linus', role: '维护者', status: '离线' },
]
</script>

<template>
  <var-data-table :columns="columns" :data="data" :pagination="false" cell-bordered />
</template>
```

### 选择列

通过 `type: 'selection'` 渲染选择列，并使用 `v-model:checked-row-keys` 控制选中行。设置 `multiple: false` 可切换为单选，设置 `selectable` 可控制整列或指定行是否可选。单选模式下会使用 `radio`，而不是 `checkbox`。

```html
<script setup>
import { ref } from 'vue'

const checkedRowKeys = ref([1, 3])

const columns = [
  { type: 'selection' },
  { key: 'name', title: '姓名' },
  { key: 'role', title: '角色' },
]
</script>

<template>
  <var-data-table v-model:checked-row-keys="checkedRowKeys" :columns="columns" :data="data" />
</template>
```

#### 单选

```html
<script setup>
import { ref } from 'vue'

const checkedRowKeys = ref([2])

const columns = [
  { type: 'selection', multiple: false },
  { key: 'name', title: '姓名' },
  { key: 'role', title: '角色' },
]
</script>

<template>
  <var-data-table v-model:checked-row-keys="checkedRowKeys" :columns="columns" :data="data" />
</template>
```

### 树形数据

显式设置 `tree` 后，表格会按照 `children-key` 扁平化渲染树形结构。树形多选默认开启级联，勾选父节点会联动子节点；如果你想改成非级联模式，可以传 `:cascade="false"`。

```html
<script setup>
import { ref } from 'vue'

const checkedRowKeys = ref([12])

const columns = [
  { type: 'selection' },
  { key: 'name', title: '名称' },
  { key: 'role', title: '角色' },
  { key: 'status', title: '状态' },
]

const data = [
  {
    id: 1,
    name: 'Frontend',
    role: 'Team',
    status: '在线',
    nodes: [
      { id: 11, name: 'Ada', role: 'Lead', status: '在线' },
      { id: 12, name: 'Taylor', role: 'Engineer', status: '忙碌' },
    ],
  },
  {
    id: 2,
    name: 'Design',
    role: 'Team',
    status: '离线',
    nodes: [{ id: 21, name: 'Linus', role: 'Designer', status: '离线' }],
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

#### 非级联

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

#### 树形单选

树形单选与级联无关，仍然只保留一个选中 key。

```html
<template>
  <var-data-table
    v-model:checked-row-keys="checkedRowKeys"
    :columns="[
      { type: 'selection', multiple: false },
      { key: 'name', title: '名称' },
      { key: 'role', title: '角色' },
      { key: 'status', title: '状态' },
    ]"
    :data="data"
    :pagination="false"
    tree
    children-key="nodes"
  />
</template>
```

### 展开列

通过 `type: 'expand'` 渲染展开列，使用 `renderExpand` 自定义展开内容，`expandable` 可按行控制是否允许展开。展开区域更适合展示聚焦的详情块，而不是再嵌一层表格。

```html
<script setup>
import { h } from 'vue'

const columns = [
  {
    type: 'expand',
    expandable: ({ row }) => row.status === '在线',
    renderExpand: ({ row }) =>
      h('div', { style: { padding: '4px 0', display: 'grid', gap: '12px' } }, [
        h('div', { style: { fontSize: '14px', fontWeight: '600' } }, `${row.name} 详情`),
        h('div', { style: { color: 'var(--color-text-secondary)', fontSize: '14px', lineHeight: '1.6' } }, [
          h('div', `当前角色：${row.role}`),
          h('div', `当前状态：${row.status}`),
          h('div', '最近更新时间：2026-05-21'),
        ]),
      ]),
  },
  { key: 'name', title: '姓名' },
  { key: 'status', title: '状态' },
]
</script>

<template>
  <var-data-table :columns="columns" :data="data" :pagination="false" />
</template>
```

### 本地分页

本地分页模式下传入全量数据，并绑定 `v-model:page` / `v-model:page-size`，由组件内部切片。

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

### 远程分页

设置 `remote` 后组件不再切片数据。此时 `data` 应为当前页数据，`total` 由外部控制。下面示例通过 `setTimeout` 模拟异步请求，并配合 `loading` 展示加载状态。

```html
<script setup>
import { times } from '@varlet/shared'
import { ref, watch } from 'vue'

const allData = times(40, (index) => ({
  id: index + 1,
  name: `用户 ${index + 1}`,
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

const columns = [{ key: 'name', title: '姓名' }]
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

### 固定表头

设置 `max-height` 后，表格主体会在内部滚动，表头会固定在滚动容器顶部。

```html
<template>
  <var-data-table :columns="columns" :data="manyRows" :pagination="false" :max-height="320" />
</template>
```

### 固定列

设置 `scroll-x` 用来声明表格的横向滚动宽度，再通过 `fixed: 'left' | 'right'` 固定需要钉住的列。

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

### 可调整列宽

设置 `resizable` 可以开启列拖拽调整宽度。`minWidth` 和 `maxWidth` 会作为拖拽时的宽度边界。

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

### 空态文案

```html
<template>
  <var-data-table :columns="columns" :data="[]" :pagination="false">
    <template #empty>暂无数据</template>
  </var-data-table>
</template>
```

### 加载状态

```html
<template>
  <var-data-table :columns="columns" :data="[]" loading />
</template>
```

### 居中对齐

当你需要检查居中表头下排序按钮和列宽拖拽触发区的相对位置时，可以同时设置居中的 `align`、`titleAlign`，并开启 `sorter` 和 `resizable`。

```html
<script setup>
import { computed, ref } from 'vue'

const sorters = ref([])
const rawData = [
  { id: 1, name: 'Ada', role: '管理员', status: '在线' },
  { id: 2, name: 'Linus', role: '维护者', status: '离线' },
]

function renderExpand({ row }) {
  return `${row.name} 详情`
}

const columns = [
  { type: 'selection' },
  { type: 'expand', renderExpand },
  { key: 'name', title: '姓名', width: 170, minWidth: 120, sorter: true, resizable: true, align: 'center', titleAlign: 'center' },
  { key: 'role', title: '角色', width: 190, minWidth: 140, sorter: true, resizable: true, align: 'center', titleAlign: 'center' },
  { key: 'status', title: '状态', width: 150, minWidth: 120, sorter: true, resizable: true, align: 'center', titleAlign: 'center' },
]

const data = computed(() => applySorters(rawData, sorters.value))
</script>

<template>
  <var-data-table v-model:sorters="sorters" :columns="columns" :data="data" :pagination="false" :scroll-x="510" />
</template>
```

### 右对齐

当你需要检查右对齐表头和单元格下排序按钮、列宽拖拽触发区的布局时，可以同时设置 `align`、`titleAlign` 为 `right`，并开启 `sorter` 和 `resizable`。

```html
<script setup>
import { computed, ref } from 'vue'

const sorters = ref([])
const rawData = [
  { id: 1, name: 'Ada', role: '管理员', status: '在线' },
  { id: 2, name: 'Linus', role: '维护者', status: '离线' },
]

function renderExpand({ row }) {
  return `${row.name} 详情`
}

const columns = [
  { type: 'selection' },
  { type: 'expand', renderExpand },
  { key: 'name', title: '姓名', width: 170, minWidth: 120, sorter: true, resizable: true, align: 'right', titleAlign: 'right' },
  { key: 'role', title: '角色', width: 190, minWidth: 140, sorter: true, resizable: true, align: 'right', titleAlign: 'right' },
  { key: 'status', title: '状态', width: 150, minWidth: 120, sorter: true, resizable: true, align: 'right', titleAlign: 'right' },
]

const data = computed(() => applySorters(rawData, sorters.value))
</script>

<template>
  <var-data-table v-model:sorters="sorters" :columns="columns" :data="data" :pagination="false" :scroll-x="510" />
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `data` | 数据源。本地分页下传全量数据，远程分页下传当前页数据 | _any[]_ | `[]` |
| `columns` | 列配置 | _DataTableColumn[]_ | `[]` |
| `row-key` | 行 key 字段或获取函数 | _string \| ((row, rowIndex) => string \| number)_ | `'id'` |
| `row-props` | 行属性透传，支持对象或函数 | _object \| (context) => object_ | `-` |
| `loading` | 是否显示加载遮罩 | _boolean_ | `false` |
| `pagination` | 内置分页配置 | _boolean \| DataTablePagination_ | `true` |
| `remote` | 是否启用远程分页模式 | _boolean_ | `false` |
| `v-model:page` | 当前页码 | _number_ | `1` |
| `v-model:page-size` | 当前每页条数 | _number_ | `10` |
| `v-model:checked-row-keys` | 选中行的 key 集合 | _Array<string \| number>_ | `[]` |
| `total` | 远程分页总条数 | _number_ | `-` |
| `max-height` | 表格主体最大高度。设置后表头固定，内容区域内部滚动 | _number \| string_ | `-` |
| `scroll-x` | 用于开启横向滚动的表格宽度，通常和固定列一起使用 | _number \| string_ | `-` |
| `v-model:sorters` | 受控排序状态集合 | _DataTableSorter[]_ | `[]` |
| `sort-mode` | 排序器模式 | _'single' \| 'multiple'_ | `'single'` |
| `plain` | 是否以纯表格形态渲染，不带卡片阴影、背景色和圆角 | _boolean_ | `false` |
| `table-layout` | 原生 `table-layout` 布局方式 | _'auto' \| 'fixed'_ | `'auto'` |
| `tree` | 是否显式开启树形数据 | _boolean_ | `false` |
| `cascade` | 树形选择是否开启级联 | _boolean_ | `true` |
| `children-key` | 树形子节点字段名 | _string_ | `'children'` |
| `elevation` | 海拔层级 | _boolean \| number \| string_ | `true` |
| `surface` | 弱背景色风格 | _'low'_ | `-` |
| `cell-bordered` | 是否显示单元格分割线 | _boolean_ | `false` |
| `size` | 表格尺寸 | _'small' \| 'normal' \| 'large'_ | `'normal'` |

#### DataTableColumn

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `type` | 列类型。支持 `selection` 和 `expand` | _'selection' \| 'expand'_ | `-` |
| `key` | 列唯一 key | _string_ | `-` |
| `title` | 列标题 | _string_ | `-` |
| `sorter` | 字段列是否显示排序交互 | _boolean_ | `false` |
| `multiple` | 选择列是否允许多选，仅对选择列生效 | _boolean_ | `true` |
| `selectable` | 是否允许选择。支持 `boolean` 或 `(context) => boolean`，仅对选择列生效 | _boolean \| `(context) => boolean`_ | `true` |
| `expandable` | 是否允许展开该行，仅对展开列生效 | _`(context) => boolean`_ | `-` |
| `renderExpand` | 自定义展开内容，仅对展开列生效 | _`(context) => VNodeChild`_ | `-` |
| `resizable` | 是否允许通过拖拽调整列宽 | _boolean_ | `false` |
| `width` | 列宽 | _number \| string_ | `-` |
| `minWidth` | 列最小宽度 | _number \| string_ | `-` |
| `maxWidth` | 列最大宽度。开启 `resizable` 时也会作为拖拽的上限 | _number \| string_ | `-` |
| `align` | 内容对齐方式 | _'left' \| 'center' \| 'right'_ | `'left'` |
| `titleAlign` | 表头标题对齐方式 | _'left' \| 'center' \| 'right'_ | `align` |
| `titleColSpan` | 表头列合并数量，设为 `0` 时当前表头不渲染 | _number_ | `1` |
| `colSpan` | 表体单元格列合并数量，支持数字或函数，返回 `0` 时当前单元格不渲染 | _number \| `(context) => number`_ | `1` |
| `rowSpan` | 表体单元格行合并数量，支持数字或函数，返回 `0` 时当前单元格不渲染 | _number \| `(context) => number`_ | `1` |
| `cellProps` | 单元格属性透传，支持对象或函数 | _object \| (context) => object_ | `-` |
| `render` | 自定义单元格渲染 | _`(context) => VNodeChild`_ | `-` |

#### DataTablePagination

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `simple` | 是否使用简洁分页 | _boolean_ | `false` |
| `disabled` | 是否禁用分页 | _boolean_ | `false` |
| `showSizeChanger` | 是否显示每页条数切换器 | _boolean_ | `true` |
| `showQuickJumper` | 是否显示快速跳转 | _boolean_ | `false` |
| `maxPagerCount` | 最多显示的页码数量 | _number_ | `5` |
| `sizeOption` | 每页条数选项 | _number[]_ | `[10, 20, 50, 100]` |
| `showTotal` | 总数文案渲染函数 | _`(total: number, range: [number, number]) => string`_ | `-` |

#### DataTableSorter

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `key` | 对应列 key | _string_ | `-` |
| `order` | 排序方向 | _'asc' \| 'desc'_ | `-` |

### Slots

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| `empty` | 自定义空态内容 | `-` |
| `loading-description` | 自定义加载描述 | `-` |
| `footer-prefix` | 分页前置内容 | `-` |

### 样式变量

| 变量名 | 默认值 |
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
