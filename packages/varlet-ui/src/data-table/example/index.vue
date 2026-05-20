<script setup lang="ts">
import { AppType, watchLang } from '@varlet/cli/client'
import { computed, h, ref } from 'vue'
import { t, use } from './locale'

watchLang(use)

const columns = [
  { key: 'name', title: 'Name' },
  { key: 'role', title: 'Role' },
  { key: 'status', title: 'Status' },
]

const data = [
  { id: 1, name: 'Ada', role: 'Admin', status: 'Online' },
  { id: 2, name: 'Linus', role: 'Maintainer', status: 'Offline' },
  { id: 3, name: 'Taylor', role: 'Designer', status: 'Online' },
  { id: 4, name: 'Evan', role: 'Reviewer', status: 'Busy' },
]

const renderColumns = [
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

const alignedColumns = [
  { key: 'name', title: 'Name', minWidth: 140 },
  { key: 'role', title: 'Role', titleAlign: 'center', align: 'center', width: 120 },
  { key: 'status', title: 'Status', titleAlign: 'right', align: 'right', width: 100 },
]

const cellPropsColumns = [
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

const manyRows = Array.from({ length: 48 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  role: index % 2 === 0 ? 'Engineer' : 'Operator',
  status: index % 3 === 0 ? 'Online' : 'Offline',
}))

const compactPagedRows = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  name: `Member ${index + 1}`,
  role: index % 2 === 0 ? 'Engineer' : 'Operator',
  status: index % 3 === 0 ? 'Online' : 'Offline',
}))

const remotePage = ref(1)
const remotePageSize = ref(10)

const remoteData = computed(() => {
  const start = (remotePage.value - 1) * remotePageSize.value
  return manyRows.slice(start, start + remotePageSize.value)
})
</script>

<template>
  <app-type>{{ t('basicUsage') }}</app-type>
  <var-data-table :columns="columns" :data="data" />

  <app-type>{{ t('cellBordered') }}</app-type>
  <var-data-table :columns="columns" :data="data" cell-bordered />

  <app-type>{{ t('striped') }}</app-type>
  <var-data-table :columns="columns" :data="data" striped />

  <app-type>{{ t('sizes') }}</app-type>
  <var-data-table :columns="columns" :data="data" size="small" />
  <div style="height: 12px"></div>
  <var-data-table :columns="columns" :data="data" size="large" />

  <app-type>{{ t('columnOptions') }}</app-type>
  <var-data-table :columns="alignedColumns" :data="data" />

  <app-type>{{ t('customProps') }}</app-type>
  <var-data-table
    :columns="cellPropsColumns"
    :data="data"
    :row-props="
      ({ row, rowIndex }) => ({
        style: {
          backgroundColor: rowIndex === 0 ? 'hsla(var(--hsl-primary), 0.08)' : undefined,
        },
        title: row.name,
      })
    "
  />

  <app-type>{{ t('customRender') }}</app-type>
  <var-data-table :columns="renderColumns" :data="data" />

  <app-type>{{ t('compactPagination') }}</app-type>
  <var-data-table
    :columns="columns"
    :data="compactPagedRows"
    :pagination="{
      simple: false,
      showSizeChanger: false,
      showQuickJumper: false,
      maxPagerCount: 2,
    }"
  />

  <app-type>{{ t('localPagination') }}</app-type>
  <var-data-table
    :columns="columns"
    :data="manyRows"
    striped
    :pagination="{
      simple: true,
      showSizeChanger: false,
      showQuickJumper: false,
    }"
  />

  <app-type>{{ t('remotePagination') }}</app-type>
  <var-data-table
    v-model:page="remotePage"
    v-model:page-size="remotePageSize"
    :columns="columns"
    :data="remoteData"
    :total="manyRows.length"
    :pagination="{
      simple: true,
      showSizeChanger: false,
      showQuickJumper: false,
    }"
    remote
  />

  <app-type>{{ t('emptyText') }}</app-type>
  <var-data-table :columns="columns" :data="[]" :pagination="false" :empty-text="t('emptyTip')" />

  <app-type>{{ t('loading') }}</app-type>
  <var-data-table :columns="columns" :data="[]" loading />
</template>
