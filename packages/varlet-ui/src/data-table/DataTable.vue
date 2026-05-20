<template>
  <div
    :class="
      classes(
        n(),
        formatElevation(elevation, 1),
        n('$--box'),
        [cellBordered, n('--cell-bordered')],
        [hasPagination, n('--with-footer')],
        n(`--${size}`),
      )
    "
  >
    <var-loading :loading="loading">
      <div :class="n('main')">
        <table :class="n('table')">
          <thead v-if="columns.length">
            <tr :class="n('header-row')">
              <th
                v-for="column in columns"
                :key="column.key"
                :class="classes(n('cell'), n('header-cell'))"
                :style="getHeaderCellStyle(column)"
              >
                {{ column.title }}
              </th>
            </tr>
          </thead>

          <tbody v-if="currentData.length">
            <tr
              v-for="(row, pageRowIndex) in currentData"
              :key="getRowKey(row, getAbsoluteRowIndex(pageRowIndex))"
              :class="classes(n('row'), [striped, n('row--striped')])"
              v-bind="getRowProps(row, pageRowIndex)"
            >
              <td
                v-for="column in columns"
                :key="column.key"
                :class="classes(n('cell'), n('body-cell'))"
                :style="getBodyCellStyle(column)"
                v-bind="getCellProps(row, column, pageRowIndex)"
              >
                <MaybeVNode :is="renderCell(row, column, pageRowIndex)" tag="div" />
              </td>
            </tr>
          </tbody>
        </table>

        <div v-if="!currentData.length" :class="n('empty')">
          {{ resolvedEmptyText }}
        </div>
      </div>

      <div v-if="hasPagination" :class="n('footer')">
        <slot name="footer-prefix" />

        <var-pagination
          :current="currentPage"
          :size="currentPageSize"
          :total="paginationTotal"
          :simple="normalizedPaginationOptions.simple"
          :disabled="normalizedPaginationOptions.disabled"
          :show-size-changer="normalizedPaginationOptions.showSizeChanger"
          :show-quick-jumper="normalizedPaginationOptions.showQuickJumper"
          :max-pager-count="normalizedPaginationOptions.maxPagerCount"
          :size-option="normalizedPaginationOptions.sizeOption"
          :show-total="normalizedPaginationOptions.showTotal"
          @change="handlePaginationChange"
        />
      </div>

      <template v-if="$slots.loading" #description>
        <slot name="loading" />
      </template>
    </var-loading>
  </div>
</template>

<script lang="ts">
import { call, isFunction, toNumber } from '@varlet/shared'
import { computed, defineComponent, watch } from 'vue'
import VarLoading from '../loading'
import { t } from '../locale'
import { injectLocaleProvider } from '../locale-provider/provide'
import VarPagination from '../pagination'
import { createNamespace, formatElevation, MaybeVNode } from '../utils/components'
import { props, type DataTableAlign, type DataTableColumn, type DataTablePagination } from './props'

const { name, n, classes } = createNamespace('data-table')

type NormalizedPaginationOptions = Required<
  Pick<
    DataTablePagination,
    'simple' | 'disabled' | 'showSizeChanger' | 'showQuickJumper' | 'maxPagerCount' | 'sizeOption'
  >
> &
  Pick<DataTablePagination, 'showTotal'>

export default defineComponent({
  name,
  components: {
    VarLoading,
    VarPagination,
    MaybeVNode,
  },
  props,
  setup(props) {
    const { t: pt } = injectLocaleProvider()
    const defaultPaginationOptions: NormalizedPaginationOptions = {
      simple: false,
      disabled: false,
      showSizeChanger: true,
      showQuickJumper: false,
      maxPagerCount: 5,
      sizeOption: [10, 20, 50, 100],
      showTotal: undefined,
    }

    const paginationEnabled = computed(() => props.pagination !== false)

    const normalizedPaginationOptions = computed<NormalizedPaginationOptions>(() => {
      if (props.pagination === false) {
        return defaultPaginationOptions
      }

      if (props.pagination === true) {
        return defaultPaginationOptions
      }

      return {
        ...defaultPaginationOptions,
        ...props.pagination,
      }
    })

    const currentPage = computed(() => Math.max(1, toNumber(props.page) || 1))
    const currentPageSize = computed(() => Math.max(1, toNumber(props.pageSize) || 10))
    const localTotal = computed(() => props.data.length)
    const paginationTotal = computed(() => {
      if (!paginationEnabled.value) {
        return props.data.length
      }

      if (props.remote) {
        return Math.max(0, toNumber(props.total) || 0)
      }

      return localTotal.value
    })

    const hasPagination = computed(() => paginationEnabled.value && paginationTotal.value > 0)

    const pageCount = computed(() => {
      if (!hasPagination.value) {
        return 1
      }

      return Math.max(1, Math.ceil(paginationTotal.value / currentPageSize.value))
    })

    const normalizedPage = computed(() => {
      if (!hasPagination.value) {
        return 1
      }

      return Math.min(currentPage.value, pageCount.value)
    })

    const currentData = computed(() => {
      if (!hasPagination.value || props.remote) {
        return props.data
      }

      const start = (normalizedPage.value - 1) * currentPageSize.value
      const end = start + currentPageSize.value

      return props.data.slice(start, end)
    })

    const resolvedEmptyText = computed(() => props.emptyText || (pt ? pt : t)('selectEmptyText'))

    watch(
      [hasPagination, () => props.remote, currentPage, normalizedPage],
      ([paginationEnabled, remote, page, clampedPage]) => {
        if (!paginationEnabled || remote || page === clampedPage) {
          return
        }

        call(props['onUpdate:page'], clampedPage)
      },
      { immediate: true },
    )

    const getAbsoluteRowIndex = (pageRowIndex: number) => {
      if (!hasPagination.value || props.remote) {
        return pageRowIndex
      }

      return (normalizedPage.value - 1) * currentPageSize.value + pageRowIndex
    }

    const getRowKey = (row: Record<string, any>, rowIndex: number) => {
      if (isFunction(props.rowKey)) {
        return props.rowKey(row, rowIndex)
      }

      return row[props.rowKey] ?? rowIndex
    }

    const renderCell = (row: Record<string, any>, column: DataTableColumn, pageRowIndex: number) => {
      const rowIndex = getAbsoluteRowIndex(pageRowIndex)

      if (column.render) {
        return column.render({
          row,
          rowIndex,
          pageRowIndex,
          column,
        })
      }

      return row[column.key]
    }

    const getRowProps = (row: Record<string, any>, pageRowIndex: number) => {
      if (!props.rowProps) {
        return undefined
      }

      const rowIndex = getAbsoluteRowIndex(pageRowIndex)

      if (isFunction(props.rowProps)) {
        return props.rowProps({
          row,
          rowIndex,
          pageRowIndex,
        })
      }

      return props.rowProps
    }

    const getCellProps = (row: Record<string, any>, column: DataTableColumn, pageRowIndex: number) => {
      if (!column.cellProps) {
        return undefined
      }

      const rowIndex = getAbsoluteRowIndex(pageRowIndex)

      if (isFunction(column.cellProps)) {
        return column.cellProps({
          row,
          rowIndex,
          pageRowIndex,
          column,
        })
      }

      return column.cellProps
    }

    const getAlign = (align?: DataTableAlign) => align ?? 'left'

    const getHeaderCellStyle = (column: DataTableColumn) => ({
      width: column.width != null ? toSizeUnit(column.width) : undefined,
      minWidth: column.minWidth != null ? toSizeUnit(column.minWidth) : undefined,
      textAlign: getAlign(column.titleAlign ?? column.align),
    })

    const getBodyCellStyle = (column: DataTableColumn) => ({
      width: column.width != null ? toSizeUnit(column.width) : undefined,
      minWidth: column.minWidth != null ? toSizeUnit(column.minWidth) : undefined,
      textAlign: getAlign(column.align),
    })

    function handlePaginationChange(page: number, pageSize: number) {
      call(props['onUpdate:page'], page)
      call(props['onUpdate:pageSize'], pageSize)
    }

    return {
      currentData,
      currentPage,
      currentPageSize,
      normalizedPaginationOptions,
      paginationTotal,
      resolvedEmptyText,
      hasPagination,
      getAbsoluteRowIndex,
      getRowKey,
      getRowProps,
      getCellProps,
      renderCell,
      getHeaderCellStyle,
      getBodyCellStyle,
      handlePaginationChange,
      n,
      classes,
      formatElevation,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import './dataTable';
</style>
