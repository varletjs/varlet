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

### 单元格分割线

```html
<template>
  <var-data-table :columns="columns" :data="data" cell-bordered />
</template>
```

### 斑马纹

```html
<template>
  <var-data-table :columns="columns" :data="data" striped />
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
</script>

<template>
  <var-data-table
    :columns="columns"
    :data="data"
    :row-props="({ row, rowIndex }) => ({
      style: {
        backgroundColor: rowIndex === 0 ? 'hsla(var(--hsl-primary), 0.08)' : undefined,
      },
      title: row.name,
    })"
  />
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

### 页码分页

通过 `pagination` 配置内置页码分页。

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

### 本地分页

本地分页模式下传入全量数据，由组件内部切片。

```html
<template>
  <var-data-table
    :columns="columns"
    :data="data"
    :pagination="{
      simple: true,
      showSizeChanger: false,
      showQuickJumper: false,
    }"
  />
</template>
```

### 远程分页

设置 `remote` 后组件不再切片数据。此时 `data` 应为当前页数据，`total` 由外部控制。

```html
<script setup>
import { computed, ref } from 'vue'

const allData = Array.from({ length: 40 }, (_, index) => ({
  id: index + 1,
  name: `用户 ${index + 1}`,
}))

const page = ref(1)
const pageSize = ref(10)

const currentPageData = computed(() => {
  const start = (page.value - 1) * pageSize.value
  return allData.slice(start, start + pageSize.value)
})

const columns = [{ key: 'name', title: '姓名' }]
</script>

<template>
  <var-data-table
    v-model:page="page"
    v-model:page-size="pageSize"
    :columns="columns"
    :data="currentPageData"
    :total="allData.length"
    remote
  />
</template>
```

### 空态文案

```html
<template>
  <var-data-table :columns="columns" :data="[]" :pagination="false" empty-text="暂无数据" />
</template>
```

### 加载状态

```html
<template>
  <var-data-table :columns="columns" :data="[]" loading />
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `data` | 数据源。本地分页下传全量数据，远程分页下传当前页数据 | _any[]_ | `[]` |
| `columns` | 列配置 | _DataTableColumn[]_ | `[]` |
| `row-key` | 行 key 字段或获取函数 | _string \| ((row, rowIndex) => string \| number)_ | `'id'` |
| `row-props` | 行属性透传，支持对象或函数 | _DataTableRowProps_ | `-` |
| `loading` | 是否显示加载遮罩 | _boolean_ | `false` |
| `pagination` | 内置分页配置 | _boolean \| DataTablePagination_ | `true` |
| `remote` | 是否启用远程分页模式 | _boolean_ | `false` |
| `v-model:page` | 当前页码 | _number \| string_ | `1` |
| `v-model:page-size` | 当前每页条数 | _number \| string_ | `10` |
| `total` | 远程分页总条数 | _number \| string_ | `-` |
| `elevation` | 海拔层级 | _boolean \| number \| string_ | `true` |
| `striped` | 是否显示斑马纹 | _boolean_ | `false` |
| `cell-bordered` | 是否显示外边框和单元格分割线 | _boolean_ | `false` |
| `size` | 表格尺寸 | _'small' \| 'normal' \| 'large'_ | `'normal'` |
| `empty-text` | 空数据文案 | _string_ | `Locale.selectEmptyText` |

### DataTableColumn

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `key` | 列唯一 key | _string_ | `-` |
| `title` | 列标题 | _string_ | `-` |
| `width` | 列宽 | _number \| string_ | `-` |
| `minWidth` | 列最小宽度 | _number \| string_ | `-` |
| `align` | 内容对齐方式 | _'left' \| 'center' \| 'right'_ | `'left'` |
| `titleAlign` | 表头标题对齐方式 | _'left' \| 'center' \| 'right'_ | `align` |
| `cellProps` | 单元格属性透传，支持对象或函数 | _DataTableCellProps_ | `-` |
| `render` | 自定义单元格渲染 | _`(context) => VNodeChild`_ | `-` |

### DataTableRowProps

`DataTableRowProps = HTMLAttributes \| ((context: { row, rowIndex, pageRowIndex }) => HTMLAttributes \| undefined)`

### DataTableCellProps

`DataTableCellProps = HTMLAttributes \| ((context: { row, rowIndex, pageRowIndex, column }) => HTMLAttributes \| undefined)`

### DataTablePagination

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `simple` | 是否使用简洁分页 | _boolean_ | `false` |
| `disabled` | 是否禁用分页 | _boolean_ | `false` |
| `showSizeChanger` | 是否显示每页条数切换器 | _boolean_ | `true` |
| `showQuickJumper` | 是否显示快速跳转 | _boolean_ | `false` |
| `maxPagerCount` | 最多显示的页码数量 | _number_ | `5` |
| `sizeOption` | 每页条数选项 | _number[]_ | `[10, 20, 50, 100]` |
| `showTotal` | 总数文案渲染函数 | _`(total: number, range: [number, number]) => string`_ | `-` |

### Slots

| 名称 | 说明 | 参数 |
| --- | --- | --- |
| `loading` | 自定义加载内容 | `-` |
| `footer-prefix` | 分页前置内容 | `-` |

### 样式变量

| 变量名 | 默认值 |
| --- | --- |
| `--data-table-background` | `#fff` |
| `--data-table-header-background` | `#fff` |
| `--data-table-header-color` | `rgba(0, 0, 0, 0.6)` |
| `--data-table-row-color` | `#555` |
| `--data-table-border-color` | `var(--color-outline)` |
| `--data-table-hover-background` | `#eee` |
| `--data-table-striped-background` | `#fff` |
| `--data-table-empty-color` | `var(--color-text-disabled)` |
| `--data-table-border-radius` | `2px` |
| `--data-table-cell-padding` | `0 16px` |
| `--data-table-cell-min-width` | `120px` |
| `--data-table-cell-font-size` | `16px` |
| `--data-table-header-font-size` | `14px` |
| `--data-table-row-height` | `46px` |
| `--data-table-row-height-small` | `40px` |
| `--data-table-row-height-large` | `52px` |
| `--data-table-footer-padding` | `12px 16px` |
| `--data-table-empty-padding` | `48px 16px` |
