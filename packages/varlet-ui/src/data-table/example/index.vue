<script setup>
import { AppType, onThemeChange, watchLang } from '@varlet/cli/client'
import { computed, h, ref, watch } from 'vue'
import { use as useVarletLocale } from '../../locale'
import { t, use } from './locale'

watchLang((lang) => {
  use(lang)
  useVarletLocale(lang)
})
onThemeChange()

const columns = computed(() => [
  { key: 'name', title: t('name') },
  { key: 'role', title: t('role') },
  { key: 'status', title: t('status') },
])

const data = computed(() => [
  { id: 1, name: 'Ada', role: t('admin'), status: t('online') },
  { id: 2, name: 'Linus', role: t('maintainer'), status: t('offline') },
  { id: 3, name: 'Taylor', role: t('designer'), status: t('online') },
  { id: 4, name: 'Evan', role: t('reviewer'), status: t('busy') },
])

const renderStatus = ({ row }) =>
  h(
    'span',
    {
      style: {
        color: row.status === t('online') ? 'var(--color-success)' : 'var(--color-text-disabled)',
      },
    },
    row.status,
  )

const renderColumns = computed(() => [
  { key: 'name', title: t('name') },
  { key: 'status', title: t('status'), render: renderStatus },
])
const surfaceColumns = columns
const sortableColumns = computed(() => [
  { key: 'score', title: t('score'), sorter: true },
  { key: 'tasks', title: t('tasks'), sorter: true },
  { key: 'priority', title: t('priority'), sorter: true },
])

const sortableData = computed(() => {
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

const multipleSortableData = computed(() => {
  const data = [
    { id: 1, score: 92, tasks: 16, priority: 2 },
    { id: 2, score: 78, tasks: 24, priority: 3 },
    { id: 3, score: 88, tasks: 12, priority: 1 },
    { id: 4, score: 95, tasks: 18, priority: 2 },
  ]

  return data.sort((a, b) => {
    for (const sorter of multipleSorters.value) {
      const result = a[sorter.key] - b[sorter.key]

      if (result !== 0) {
        return sorter.order === 'desc' ? -result : result
      }
    }

    return 0
  })
})

const spanColumns = computed(() => [
  {
    key: 'name',
    title: t('identity'),
    titleColSpan: 2,
    rowSpan: ({ rowIndex }) => (rowIndex === 0 ? 2 : 1),
  },
  {
    key: 'role',
    title: t('role'),
    colSpan: ({ rowIndex }) => (rowIndex === 0 ? 2 : 1),
  },
  { key: 'status', title: t('status') },
])

const spanData = computed(() => data.value.slice(0, 2))

const scrollColumns = computed(() => [
  { key: 'name', title: t('name'), fixed: 'left', width: 104 },
  { key: 'role', title: t('role'), width: 126 },
  { key: 'department', title: t('department'), width: 120 },
  { key: 'location', title: t('city'), width: 120 },
  { key: 'status', title: t('status'), fixed: 'right', width: 96 },
])

const scrollData = computed(() =>
  Array.from({ length: 24 }, (_, index) => ({
    id: index + 1,
    name: `${t('user')} ${index + 1}`,
    role: index % 2 === 0 ? `FE ${t('lead')}` : t('platform'),
    department: index % 2 === 0 ? t('experience') : t('infrastructure'),
    location: ['HZ', 'SH', 'SZ'][index % 3],
    status: index % 3 === 0 ? t('online') : index % 3 === 1 ? t('offline') : t('busy'),
  })),
)

const resizableColumns = computed(() => [
  { key: 'name', title: t('name'), width: 180, minWidth: 120, maxWidth: 260, resizable: true },
  { key: 'role', title: t('role'), width: 220, minWidth: 160, resizable: true },
  { key: 'status', title: t('status'), width: 140, maxWidth: 180, resizable: true },
])

const checkedRowKeys = ref([1, 3])
const sorters = ref([])
const multipleSorters = ref([])
const singleCheckedRowKeys = ref([2])
const treeCheckedRowKeys = ref([1, 11, 12])
const treeNonCascadeCheckedRowKeys = ref([12])
const treeSingleCheckedRowKeys = ref([21])
const selectionColumns = computed(() => [
  { type: 'selection' },
  { key: 'name', title: t('name') },
  { key: 'role', title: t('role') },
  { key: 'status', title: t('status') },
])
const singleSelectionColumns = computed(() => [
  { type: 'selection', multiple: false },
  { key: 'name', title: t('name') },
  { key: 'role', title: t('role') },
  { key: 'status', title: t('status') },
])

function renderExpandContent({ row }) {
  return h('div', { style: { padding: '4px 0' } }, `${row.name} ${t('details')}`)
}

const expandColumns = computed(() => [
  {
    type: 'expand',
    expandable: ({ row }) => row.status !== t('busy'),
    renderExpand: renderExpandContent,
  },
  { key: 'name', title: t('name') },
  { key: 'role', title: t('role') },
  { key: 'status', title: t('status') },
])
const treeColumns = computed(() => [
  { type: 'selection' },
  { key: 'name', title: t('name') },
  { key: 'role', title: t('role') },
  { key: 'status', title: t('status') },
])
const treeSingleColumns = computed(() => [
  { type: 'selection', multiple: false },
  { key: 'name', title: t('name') },
  { key: 'role', title: t('role') },
  { key: 'status', title: t('status') },
])
const treeData = computed(() => [
  {
    id: 1,
    name: t('frontend'),
    role: t('team'),
    status: t('online'),
    children: [
      { id: 11, name: 'Ada', role: t('lead'), status: t('online') },
      { id: 12, name: 'Taylor', role: t('engineer'), status: t('busy') },
    ],
  },
  {
    id: 2,
    name: t('design'),
    role: t('team'),
    status: t('offline'),
    children: [{ id: 21, name: 'Linus', role: t('designer'), status: t('offline') }],
  },
])

const selectedRowNames = computed(() =>
  data.value
    .filter((row) => checkedRowKeys.value.includes(row.id))
    .map((row) => row.name)
    .join(', '),
)

const alignedColumns = computed(() => [
  { key: 'name', title: t('name'), minWidth: 96 },
  { key: 'role', title: t('role'), titleAlign: 'center', align: 'center', width: 88 },
  { key: 'status', title: t('status'), titleAlign: 'right', align: 'right', width: 84 },
])
const groupedHeaderColumns = computed(() => [
  {
    title: t('profile'),
    children: [
      { key: 'name', title: t('name'), width: 112 },
      { key: 'role', title: t('role'), width: 112 },
    ],
  },
  {
    title: t('state'),
    children: [{ key: 'status', title: t('status'), width: 96 }],
  },
])

const customRowProps = ({ row, rowIndex }) => ({
  style: {
    backgroundColor: rowIndex === 0 ? 'hsla(var(--hsl-primary), 0.08)' : undefined,
  },
  title: row.name,
})

const customRowClass = ({ row }) => {
  return row.status === t('busy') ? 'data-table-example__row--busy' : undefined
}

const summaryColumns = computed(() => [
  { key: 'name', title: t('name') },
  { key: 'score', title: t('score') },
  { key: 'tasks', title: t('tasks') },
])

const summaryData = computed(() => [
  { id: 1, name: 'Ada', score: 92, tasks: 16 },
  { id: 2, name: 'Linus', score: 78, tasks: 24 },
  { id: 3, name: 'Taylor', score: 88, tasks: 12 },
])

const summary = ({ data }) => ({
  name: {
    value: t('total'),
    colSpan: 2,
  },
  tasks: {
    value: data.reduce((total, row) => total + row.tasks, 0),
  },
})

const manyRows = computed(() =>
  Array.from({ length: 48 }, (_, index) => ({
    id: index + 1,
    name: `${t('user')} ${index + 1}`,
    role: index % 2 === 0 ? t('engineer') : t('operator'),
    status: index % 3 === 0 ? t('online') : t('offline'),
  })),
)

const remotePage = ref(1)
const remotePageSize = ref(10)
const remoteLoading = ref(false)
const remoteData = ref([])
let remoteTimer

watch(
  [remotePage, remotePageSize, manyRows],
  ([page, pageSize]) => {
    remoteLoading.value = true

    if (remoteTimer) {
      clearTimeout(remoteTimer)
    }

    remoteTimer = setTimeout(() => {
      const start = (page - 1) * pageSize
      remoteData.value = manyRows.value.slice(start, start + pageSize)
      remoteLoading.value = false
    }, 400)
  },
  { immediate: true },
)
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-data-table :columns="columns" :data="data" />

  <app-type>{{ t('customRender') }}</app-type>
  <var-data-table :columns="renderColumns" :data="data" />

  <app-type>{{ t('localPagination') }}</app-type>
  <var-data-table :columns="columns" :data="manyRows" />

  <app-type>{{ t('remotePagination') }}</app-type>
  <var-data-table
    v-model:page="remotePage"
    v-model:page-size="remotePageSize"
    :columns="columns"
    :data="remoteData"
    :loading="remoteLoading"
    :total="manyRows.length"
    remote
  />

  <app-type>{{ t('sorter') }}</app-type>
  <var-data-table v-model:sorters="sorters" :columns="sortableColumns" :data="sortableData" :pagination="false" />

  <app-type>{{ t('multipleSorter') }}</app-type>
  <var-data-table
    v-model:sorters="multipleSorters"
    :columns="sortableColumns"
    :data="multipleSortableData"
    :pagination="false"
    sort-mode="multiple"
  />

  <app-type>{{ t('columnOptions') }}</app-type>
  <var-data-table :columns="alignedColumns" :data="data" />

  <app-type>{{ t('groupedHeader') }}</app-type>
  <var-data-table :columns="groupedHeaderColumns" :data="data" :pagination="false" cell-bordered />

  <app-type>{{ t('customProps') }}</app-type>
  <var-data-table :columns="columns" :data="data" :row-props="customRowProps" />

  <app-type>{{ t('rowClass') }}</app-type>
  <var-data-table :columns="columns" :data="data" :row-class="customRowClass" />

  <app-type>{{ t('summary') }}</app-type>
  <var-data-table :columns="summaryColumns" :data="summaryData" :summary="summary" :pagination="false" />

  <app-type>{{ t('spans') }}</app-type>
  <var-data-table :columns="spanColumns" :data="spanData" :pagination="false" cell-bordered />

  <app-type>{{ t('selection') }}</app-type>
  <var-data-table v-model:checked-row-keys="checkedRowKeys" :columns="selectionColumns" :data="data" />
  <div style="margin-top: 8px; color: var(--color-text-secondary); font-size: 14px">
    {{ t('selectedRows') }}: {{ selectedRowNames || '-' }}
  </div>

  <app-type>{{ t('singleSelection') }}</app-type>
  <var-data-table v-model:checked-row-keys="singleCheckedRowKeys" :columns="singleSelectionColumns" :data="data" />

  <app-type>{{ t('tree') }}</app-type>
  <var-data-table
    v-model:checked-row-keys="treeCheckedRowKeys"
    :columns="treeColumns"
    :data="treeData"
    :pagination="false"
    tree
  />

  <app-type>{{ t('treeNonCascade') }}</app-type>
  <var-data-table
    v-model:checked-row-keys="treeNonCascadeCheckedRowKeys"
    :columns="treeColumns"
    :data="treeData"
    :pagination="false"
    :cascade="false"
    tree
  />

  <app-type>{{ t('treeSingleSelection') }}</app-type>
  <var-data-table
    v-model:checked-row-keys="treeSingleCheckedRowKeys"
    :columns="treeSingleColumns"
    :data="treeData"
    :pagination="false"
    tree
  />

  <app-type>{{ t('expand') }}</app-type>
  <var-data-table :columns="expandColumns" :data="data" :pagination="false" />

  <app-type>{{ t('fixedHeaderAndColumns') }}</app-type>
  <var-data-table :columns="scrollColumns" :data="scrollData" :pagination="false" :max-height="320" :scroll-x="566" />

  <app-type>{{ t('resizableColumns') }}</app-type>
  <var-data-table :columns="resizableColumns" :data="data" :pagination="false" :scroll-x="540" />

  <app-type>{{ t('emptyText') }}</app-type>
  <var-data-table :columns="columns" :data="[]" :pagination="false">
    <template #empty>
      <div class="data-table-example__empty">
        <var-icon name="information" :size="24" />
        <span>{{ t('emptyTip') }}</span>
      </div>
    </template>
  </var-data-table>

  <app-type>{{ t('loading') }}</app-type>
  <var-data-table :columns="columns" :data="[]" loading />

  <app-type>{{ t('sizes') }}</app-type>
  <var-data-table :columns="columns" :data="data" size="small" />
  <div style="height: 12px"></div>
  <var-data-table :columns="columns" :data="data" size="large" />

  <app-type>{{ t('surfaceLow') }}</app-type>
  <var-data-table :columns="surfaceColumns" :data="data" surface="low" />

  <app-type>{{ t('plainTable') }}</app-type>
  <var-data-table :columns="columns" :data="data" plain />
</template>

<style scoped>
.data-table-example__empty {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--color-text-secondary);
}

:deep(.data-table-example__row--busy) {
  color: var(--color-warning);
}
</style>
