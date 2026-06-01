# DataTable

### 介绍

数据驱动的表格。

### 基本使用

```html
<script setup>
import { ref } from 'vue'

const columns = ref([
  { key: 'name', title: '姓名' },
  { key: 'role', title: '角色' },
  { key: 'status', title: '状态' },
])

const data = ref([
  { id: 1, name: 'Ada', role: '管理员', status: '在线' },
  { id: 2, name: 'Linus', role: '维护者', status: '离线' },
  { id: 3, name: 'Taylor', role: '设计师', status: '在线' },
  { id: 4, name: 'Evan', role: '评审', status: '忙碌' },
])
</script>

<template>
  <var-data-table :columns="columns" :data="data" />
</template>
```


### 自定义列渲染

```html
<script setup>
import { h, ref } from 'vue'

const columns = ref([
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
])

const data = ref([
  { id: 1, name: 'Ada', role: '管理员', status: '在线' },
  { id: 2, name: 'Linus', role: '维护者', status: '离线' },
  { id: 3, name: 'Taylor', role: '设计师', status: '在线' },
  { id: 4, name: 'Evan', role: '评审', status: '忙碌' },
])
</script>

<template>
  <var-data-table :columns="columns" :data="data" />
</template>
```


### 前端分页

```html
<script setup>
import { ref } from 'vue'

const columns = ref([
  { key: 'name', title: '姓名' },
  { key: 'role', title: '角色' },
  { key: 'status', title: '状态' },
])

const data = ref(
  Array.from({ length: 48 }, (_, index) => ({
    id: index + 1,
    name: `用户 ${index + 1}`,
    role: index % 2 === 0 ? '工程师' : '操作员',
    status: index % 3 === 0 ? '在线' : '离线',
  })),
)
</script>

<template>
  <var-data-table :columns="columns" :data="data" />
</template>
```

### 远程分页

```html
<script setup>
import { ref, watch } from 'vue'

const page = ref(1)
const pageSize = ref(10)
const loading = ref(false)
const data = ref([])
let timer

const columns = ref([
  { key: 'name', title: '姓名' },
  { key: 'role', title: '角色' },
  { key: 'status', title: '状态' },
])

const allData = ref(
  Array.from({ length: 48 }, (_, index) => ({
    id: index + 1,
    name: `用户 ${index + 1}`,
    role: index % 2 === 0 ? '工程师' : '操作员',
    status: index % 3 === 0 ? '在线' : '离线',
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

### 单列排序

```html
<script setup>
import { computed, ref } from 'vue'

const sorters = ref([])

const columns = ref([
  { key: 'score', title: '评分', sorter: true },
  { key: 'tasks', title: '任务数', sorter: true },
  { key: 'priority', title: '优先级', sorter: true },
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

### 多列排序

```html
<script setup>
import { computed, ref } from 'vue'

const sorters = ref([])

const columns = ref([
  { key: 'score', title: '评分', sorter: true },
  { key: 'tasks', title: '任务数', sorter: true },
  { key: 'priority', title: '优先级', sorter: true },
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

### 列配置

```html
<script setup>
import { ref } from 'vue'

const columns = ref([
  { key: 'name', title: '姓名', minWidth: 96 },
  { key: 'role', title: '角色', titleAlign: 'center', align: 'center', width: 88 },
  { key: 'status', title: '状态', titleAlign: 'right', align: 'right', width: 84 },
])

const data = ref([
  { id: 1, name: 'Ada', role: '管理员', status: '在线' },
  { id: 2, name: 'Linus', role: '维护者', status: '离线' },
  { id: 3, name: 'Taylor', role: '设计师', status: '在线' },
  { id: 4, name: 'Evan', role: '评审', status: '忙碌' },
])
</script>

<template>
  <var-data-table :columns="columns" :data="data" />
</template>
```

### 分组表头

```html
<script setup>
import { ref } from 'vue'

const columns = ref([
  {
    title: '资料',
    children: [
      { key: 'name', title: '姓名' },
      { key: 'role', title: '角色' },
    ],
  },
  {
    title: '状态分组',
    children: [{ key: 'status', title: '状态' }],
  },
])

const data = ref([
  { id: 1, name: 'Ada', role: '管理员', status: '在线' },
  { id: 2, name: 'Linus', role: '维护者', status: '离线' },
  { id: 3, name: 'Taylor', role: '设计师', status: '在线' },
  { id: 4, name: 'Evan', role: '评审', status: '忙碌' },
])
</script>

<template>
  <var-data-table :columns="columns" :data="data" :pagination="false" cell-bordered />
</template>
```

### 自定义行属性

```html
<script setup>
import { ref } from 'vue'

const columns = ref([
  { key: 'name', title: '姓名' },
  { key: 'role', title: '角色' },
  { key: 'status', title: '状态' },
])

const customRowProps = ({ row, rowIndex }) => ({
  style: {
    backgroundColor: rowIndex === 0 ? 'hsla(var(--hsl-primary), 0.08)' : undefined,
  },
  title: row.name,
})

const data = ref([
  { id: 1, name: 'Ada', role: '管理员', status: '在线' },
  { id: 2, name: 'Linus', role: '维护者', status: '离线' },
  { id: 3, name: 'Taylor', role: '设计师', status: '在线' },
  { id: 4, name: 'Evan', role: '评审', status: '忙碌' },
])
</script>

<template>
  <var-data-table :columns="columns" :data="data" :row-props="customRowProps" />
</template>
```

### 行类名

```html
<script setup>
import { ref } from 'vue'

const columns = ref([
  { key: 'name', title: '姓名' },
  { key: 'role', title: '角色' },
  { key: 'status', title: '状态' },
])

const rowClass = ({ row }) => {
  return row.status === '忙碌' ? 'busy-row' : undefined
}

const data = ref([
  { id: 1, name: 'Ada', role: '管理员', status: '在线' },
  { id: 2, name: 'Linus', role: '维护者', status: '离线' },
  { id: 3, name: 'Taylor', role: '设计师', status: '在线' },
  { id: 4, name: 'Evan', role: '评审', status: '忙碌' },
])
</script>

<template>
  <var-data-table :columns="columns" :data="data" :row-class="rowClass" />
</template>

<style>
.busy-row {
  --data-table-body-cell-text-color: var(--color-warning);
}
</style>
```

### 总结栏

```html
<script setup>
import { h, ref } from 'vue'

const columns = ref([
  { key: 'name', title: '姓名' },
  { key: 'score', title: '评分' },
  { key: 'tasks', title: '任务数' },
])

const summary = ({ data }) => ({
  name: {
    value: h('span', { style: { color: 'var(--color-primary)' } }, '合计'),
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

### 单元格合并

```html
<script setup>
import { ref } from 'vue'

const columns = ref([
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
])

const data = ref([
  { id: 1, name: 'Ada', role: '管理员', status: '在线' },
  { id: 2, name: 'Linus', role: '维护者', status: '离线' },
])
</script>

<template>
  <var-data-table :columns="columns" :data="data" :pagination="false" cell-bordered />
</template>
```

### 选择列

```html
<script setup>
import { ref } from 'vue'

const checkedRowKeys = ref([1, 3])

const columns = ref([
  { type: 'selection' },
  { key: 'name', title: '姓名' },
  { key: 'role', title: '角色' },
  { key: 'status', title: '状态' },
])

const data = ref([
  { id: 1, name: 'Ada', role: '管理员', status: '在线' },
  { id: 2, name: 'Linus', role: '维护者', status: '离线' },
  { id: 3, name: 'Taylor', role: '设计师', status: '在线' },
  { id: 4, name: 'Evan', role: '评审', status: '忙碌' },
])
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

const columns = ref([
  { type: 'selection', multiple: false },
  { key: 'name', title: '姓名' },
  { key: 'role', title: '角色' },
  { key: 'status', title: '状态' },
])

const data = ref([
  { id: 1, name: 'Ada', role: '管理员', status: '在线' },
  { id: 2, name: 'Linus', role: '维护者', status: '离线' },
  { id: 3, name: 'Taylor', role: '设计师', status: '在线' },
  { id: 4, name: 'Evan', role: '评审', status: '忙碌' },
])
</script>

<template>
  <var-data-table v-model:checked-row-keys="checkedRowKeys" :columns="columns" :data="data" />
</template>
```

### 树形数据

```html
<script setup>
import { ref } from 'vue'

const checkedRowKeys = ref([12])

const columns = ref([
  { type: 'selection' },
  { key: 'name', title: '姓名' },
  { key: 'role', title: '角色' },
  { key: 'status', title: '状态' },
])

const data = ref([
  {
    id: 1,
    name: '前端',
    role: '团队',
    status: '在线',
    children: [
      { id: 11, name: 'Ada', role: '负责人', status: '在线' },
      { id: 12, name: 'Taylor', role: '工程师', status: '忙碌' },
    ],
  },
  {
    id: 2,
    name: '设计',
    role: '团队',
    status: '离线',
    children: [{ id: 21, name: 'Linus', role: '设计师', status: '离线' }],
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

### 树形非级联

```html
<script setup>
import { ref } from 'vue'

const checkedRowKeys = ref([12])

const columns = ref([
  { type: 'selection' },
  { key: 'name', title: '姓名' },
  { key: 'role', title: '角色' },
  { key: 'status', title: '状态' },
])

const data = ref([
  {
    id: 1,
    name: '前端',
    role: '团队',
    status: '在线',
    children: [
      { id: 11, name: 'Ada', role: '负责人', status: '在线' },
      { id: 12, name: 'Taylor', role: '工程师', status: '忙碌' },
    ],
  },
  {
    id: 2,
    name: '设计',
    role: '团队',
    status: '离线',
    children: [{ id: 21, name: 'Linus', role: '设计师', status: '离线' }],
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

### 树形单选

```html
<script setup>
import { ref } from 'vue'

const checkedRowKeys = ref([21])

const columns = ref([
  { type: 'selection', multiple: false },
  { key: 'name', title: '姓名' },
  { key: 'role', title: '角色' },
  { key: 'status', title: '状态' },
])

const data = ref([
  {
    id: 1,
    name: '前端',
    role: '团队',
    status: '在线',
    children: [
      { id: 11, name: 'Ada', role: '负责人', status: '在线' },
      { id: 12, name: 'Taylor', role: '工程师', status: '忙碌' },
    ],
  },
  {
    id: 2,
    name: '设计',
    role: '团队',
    status: '离线',
    children: [{ id: 21, name: 'Linus', role: '设计师', status: '离线' }],
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

### 展开列

```html
<script setup>
import { h, ref } from 'vue'

const columns = ref([
  {
    type: 'expand',
    expandable: ({ row }) => row.status !== '忙碌',
    renderExpand: ({ row }) => h('div', { style: { padding: '4px 0' } }, `${row.name} 详情`),
  },
  { key: 'name', title: '姓名' },
  { key: 'role', title: '角色' },
  { key: 'status', title: '状态' },
])

const data = ref([
  { id: 1, name: 'Ada', role: '管理员', status: '在线' },
  { id: 2, name: 'Linus', role: '维护者', status: '离线' },
  { id: 3, name: 'Taylor', role: '设计师', status: '在线' },
  { id: 4, name: 'Evan', role: '评审', status: '忙碌' },
])
</script>

<template>
  <var-data-table :columns="columns" :data="data" :pagination="false" />
</template>
```

### 固定表头/列

```html
<script setup>
import { ref } from 'vue'

const columns = ref([
  { key: 'name', title: '姓名', fixed: 'left', width: 104 },
  { key: 'role', title: '角色', width: 126 },
  { key: 'department', title: '部门', width: 120 },
  { key: 'location', title: '城市', width: 120 },
  { key: 'status', title: '状态', fixed: 'right', width: 96 },
])

const data = ref(
  Array.from({ length: 24 }, (_, index) => ({
    id: index + 1,
    name: `用户 ${index + 1}`,
    role: index % 2 === 0 ? 'FE 负责人' : '平台',
    department: index % 2 === 0 ? '体验' : '基础设施',
    location: ['HZ', 'SH', 'SZ'][index % 3],
    status: index % 3 === 0 ? '在线' : index % 3 === 1 ? '离线' : '忙碌',
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

### 可调整列宽

```html
<script setup>
import { ref } from 'vue'

const columns = ref([
  { key: 'name', title: '姓名', width: 180, minWidth: 120, maxWidth: 260, resizable: true },
  { key: 'role', title: '角色', width: 220, minWidth: 160, resizable: true },
  { key: 'status', title: '状态', width: 140, maxWidth: 180, resizable: true },
])

const data = ref([
  { id: 1, name: 'Ada', role: '管理员', status: '在线' },
  { id: 2, name: 'Linus', role: '维护者', status: '离线' },
  { id: 3, name: 'Taylor', role: '设计师', status: '在线' },
  { id: 4, name: 'Evan', role: '评审', status: '忙碌' },
])
</script>

<template>
  <var-data-table :columns="columns" :data="data" :pagination="false" :scroll-x="540" />
</template>
```

### 自定义空内容

```html
<script setup>
import { ref } from 'vue'

const columns = ref([
  { key: 'name', title: '姓名' },
  { key: 'role', title: '角色' },
  { key: 'status', title: '状态' },
])
</script>

<template>
  <var-data-table :columns="columns" :data="[]" :pagination="false">
    <template #empty>
      <div class="custom-empty">
        <var-icon name="information" :size="24" />
        <span>暂无匹配数据</span>
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

### 加载状态

```html
<script setup>
import { ref } from 'vue'

const columns = ref([
  { key: 'name', title: '姓名' },
  { key: 'role', title: '角色' },
  { key: 'status', title: '状态' },
])
</script>

<template>
  <var-data-table :columns="columns" :data="[]" loading />
</template>
```

### 尺寸

```html
<script setup>
import { ref } from 'vue'

const columns = ref([
  { key: 'name', title: '姓名' },
  { key: 'role', title: '角色' },
  { key: 'status', title: '状态' },
])

const data = ref([
  { id: 1, name: 'Ada', role: '管理员', status: '在线' },
  { id: 2, name: 'Linus', role: '维护者', status: '离线' },
  { id: 3, name: 'Taylor', role: '设计师', status: '在线' },
  { id: 4, name: 'Evan', role: '评审', status: '忙碌' },
])
</script>

<template>
  <var-data-table :columns="columns" :data="data" size="small" />
  <var-data-table :columns="columns" :data="data" size="large" />
</template>
```

### 弱背景色

```html
<script setup>
import { ref } from 'vue'

const columns = ref([
  { key: 'name', title: '姓名' },
  { key: 'role', title: '角色' },
  { key: 'status', title: '状态' },
])

const data = ref(
  Array.from({ length: 48 }, (_, index) => ({
    id: index + 1,
    name: `用户 ${index + 1}`,
    role: index % 2 === 0 ? '工程师' : '操作员',
    status: index % 3 === 0 ? '在线' : '离线',
  })),
)
</script>

<template>
  <var-data-table :columns="columns" :data="data" surface="low" />
</template>
```

### 纯表格

```html
<script setup>
import { ref } from 'vue'

const columns = ref([
  { key: 'name', title: '姓名' },
  { key: 'role', title: '角色' },
  { key: 'status', title: '状态' },
])

const data = ref([
  { id: 1, name: 'Ada', role: '管理员', status: '在线' },
  { id: 2, name: 'Linus', role: '维护者', status: '离线' },
  { id: 3, name: 'Taylor', role: '设计师', status: '在线' },
  { id: 4, name: 'Evan', role: '评审', status: '忙碌' },
])
</script>

<template>
  <var-data-table :columns="columns" :data="data" plain />
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `data` | 数据源。前端分页下传全量数据，远程分页下传当前页数据 | _any[]_ | `[]` |
| `columns` | 列配置 | _DataTableColumn[]_ | `[]` |
| `row-key` | 行 key 字段或获取函数 | _string \| ((row, rowIndex) => string \| number)_ | `'id'` |
| `row-props` | 自定义行属性，支持对象或函数 | _object \| (context) => object_ | `-` |
| `row-class` | 自定义行类名，支持字符串、数组、对象或函数 | _string \| array \| object \| (context) => string \| array \| object_ | `-` |
| `summary` | 总结栏渲染函数。返回数组时渲染多行总结栏 | _(context) => Record<string, DataTableSummaryCell> \| Array<Record<string, DataTableSummaryCell>>_ | `-` |
| `loading` | 是否显示加载遮罩 | _boolean_ | `false` |
| `pagination` | 内置分页配置 | _boolean \| DataTablePagination_ | `true` |
| `remote` | 是否启用远程分页模式 | _boolean_ | `false` |
| `v-model:page` | 当前页码 | _number_ | `1` |
| `v-model:page-size` | 当前每页条数 | _number_ | `10` |
| `v-model:checked-row-keys` | 选中行的 key 集合 | _Array<string \| number>_ | `[]` |
| `v-model:expanded-row-keys` | `type: 'expand'` 展开详情行的 key 集合 | _Array<string \| number>_ | `[]` |
| `v-model:expanded-tree-row-keys` | `tree` 模式下展开树节点的 key 集合 | _Array<string \| number>_ | `[]` |
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
| `children` | 子列配置，用于渲染分组表头 | _DataTableColumn[]_ | `-` |
| `sorter` | 字段列是否显示排序交互 | _boolean_ | `false` |
| `multiple` | 选择列是否允许多选，仅对选择列生效 | _boolean_ | `true` |
| `selectable` | 是否允许选择。支持 `boolean` 或 `(context) => boolean`，仅对选择列生效 | _boolean \| (context) => boolean_ | `true` |
| `expandable` | 是否允许展开该行，仅对展开列生效 | _(context) => boolean_ | `-` |
| `renderExpand` | 自定义展开内容，仅对展开列生效 | _(context) => VNodeChild_ | `-` |
| `resizable` | 是否允许通过拖拽调整列宽 | _boolean_ | `false` |
| `width` | 列宽 | _number \| string_ | `-` |
| `minWidth` | 列最小宽度 | _number \| string_ | `-` |
| `maxWidth` | 列最大宽度。开启 `resizable` 时也会作为拖拽的上限 | _number \| string_ | `-` |
| `align` | 内容对齐方式 | _'left' \| 'center' \| 'right'_ | `'left'` |
| `titleAlign` | 表头标题对齐方式 | _'left' \| 'center' \| 'right'_ | `align` |
| `titleColSpan` | 表头列合并数量，设为 `0` 时当前表头不渲染 | _number_ | `1` |
| `colSpan` | 表体单元格列合并数量，支持数字或函数，返回 `0` 时当前单元格不渲染 | _number \| (context) => number_ | `1` |
| `rowSpan` | 表体单元格行合并数量，支持数字或函数，返回 `0` 时当前单元格不渲染 | _number \| (context) => number_ | `1` |
| `cellProps` | 自定义单元格属性，支持对象或函数 | _object \| (context) => object_ | `-` |
| `render` | 自定义单元格渲染 | _(context) => VNodeChild_ | `-` |

#### DataTablePagination

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `simple` | 是否使用简洁分页 | _boolean_ | `false` |
| `disabled` | 是否禁用分页 | _boolean_ | `false` |
| `showSizeChanger` | 是否显示每页条数切换器 | _boolean_ | `false` |
| `showQuickJumper` | 是否显示快速跳转 | _boolean_ | `false` |
| `maxPagerCount` | 最多显示的页码数量 | _number_ | `5` |
| `sizeOption` | 每页条数选项 | _number[]_ | `[10, 20, 50, 100]` |
| `showTotal` | 总数文案渲染函数 | _(total: number, range: [number, number]) => string_ | `-` |

#### DataTableSummaryCell

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 单元格内容 | _VNodeChild_ | `-` |
| `colSpan` | 单元格列合并数量 | _number_ | `1` |
| `rowSpan` | 单元格行合并数量 | _number_ | `1` |

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
