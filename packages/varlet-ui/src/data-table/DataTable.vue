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
          <colgroup>
            <col
              v-for="(column, index) in columns"
              :key="column.key ?? column.type ?? index"
              :style="getColStyle(column)"
            />
          </colgroup>

          <thead v-if="columns.length">
            <tr :class="n('header-row')">
              <th
                v-for="column in columns"
                :key="column.key ?? column.type"
                :class="classes(n('cell'), n('header-cell'), [isSelectionColumn(column), n('selection-cell')])"
                :style="getHeaderCellStyle(column)"
              >
                <var-checkbox
                  v-if="isSelectionColumn(column)"
                  :model-value="allCurrentRowsSelected"
                  :indeterminate="someCurrentRowsSelected"
                  :disabled="!currentSelectableRows.length"
                  tabindex="-1"
                  @update:model-value="toggleAllCurrentRows"
                />
                <template v-else>{{ column.title }}</template>
              </th>
            </tr>
          </thead>

          <tbody v-if="currentData.length">
            <tr
              v-for="(row, pageRowIndex) in currentData"
              :key="getRowKey(row, getAbsoluteRowIndex(pageRowIndex))"
              :class="n('row')"
              v-bind="getRowProps(row, pageRowIndex)"
            >
              <td
                v-for="column in columns"
                :key="column.key ?? column.type"
                :class="classes(n('cell'), n('body-cell'), [isSelectionColumn(column), n('selection-cell')])"
                :style="getBodyCellStyle(column)"
                v-bind="getCellProps(row, column, pageRowIndex)"
              >
                <var-checkbox
                  v-if="isSelectionColumn(column)"
                  :model-value="isRowSelected(row, pageRowIndex)"
                  :disabled="!isRowSelectable(row, pageRowIndex, column)"
                  tabindex="-1"
                  @update:model-value="toggleRowSelection(row, pageRowIndex, $event)"
                />
                <MaybeVNode v-else :is="renderCell(row, column, pageRowIndex)" tag="div" />
              </td>
            </tr>
          </tbody>
        </table>

        <div v-if="!currentData.length" :class="n('empty')">
          <slot name="empty">
            {{ resolvedEmptyText }}
          </slot>
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
import { call, callOrReturn, clamp, isFunction, toNumber } from '@varlet/shared'
import { computed, defineComponent, ref, watch } from 'vue'
import VarCheckbox from '../checkbox'
import VarLoading from '../loading'
import { t } from '../locale'
import { injectLocaleProvider } from '../locale-provider/provide'
import VarPagination from '../pagination'
import { createNamespace, formatElevation, MaybeVNode } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import {
  props,
  type DataTableAlign,
  type DataTableColumn,
  type DataTableKey,
  type DataTablePagination,
  type DataTableSelectionColumn,
} from './props'

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
    VarCheckbox,
    VarLoading,
    VarPagination,
    MaybeVNode,
  },
  props,
  setup(props) {
    const { t: pt } = injectLocaleProvider()
    const checkedRowKeys = ref<DataTableKey[]>([...props.checkedRowKeys])
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

    const currentPage = computed(() => clamp(toNumber(props.page) || 1, 1, Number.MAX_SAFE_INTEGER))
    const currentPageSize = computed(() => clamp(toNumber(props.pageSize) || 10, 1, Number.MAX_SAFE_INTEGER))
    const localTotal = computed(() => props.data.length)
    const paginationTotal = computed(() => {
      if (!paginationEnabled.value) {
        return props.data.length
      }

      if (props.remote) {
        return clamp(toNumber(props.total) || 0, 0, Number.MAX_SAFE_INTEGER)
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

      return clamp(currentPage.value, 1, pageCount.value)
    })

    const currentData = computed(() => {
      if (!hasPagination.value || props.remote) {
        return props.data
      }

      const start = (normalizedPage.value - 1) * currentPageSize.value
      const end = start + currentPageSize.value

      return props.data.slice(start, end)
    })

    const resolvedEmptyText = computed(() => (pt ? pt : t)('selectEmptyText'))
    const selectionColumn = computed(() => props.columns.find(isSelectionColumn))
    const checkedRowKeySet = computed(() => new Set(checkedRowKeys.value))
    const currentSelectableRows = computed(() => {
      if (!selectionColumn.value) {
        return []
      }

      return currentData.value
        .map((row, pageRowIndex) => ({
          row,
          pageRowIndex,
          rowIndex: getAbsoluteRowIndex(pageRowIndex),
          key: getRowKey(row, getAbsoluteRowIndex(pageRowIndex)),
        }))
        .filter(({ row, rowIndex, pageRowIndex }) =>
          isRowSelectable(row, pageRowIndex, selectionColumn.value!, rowIndex),
        )
    })
    const allCurrentRowsSelected = computed(
      () =>
        currentSelectableRows.value.length > 0 &&
        currentSelectableRows.value.every(({ key }) => checkedRowKeySet.value.has(key)),
    )
    const someCurrentRowsSelected = computed(
      () =>
        currentSelectableRows.value.some(({ key }) => checkedRowKeySet.value.has(key)) && !allCurrentRowsSelected.value,
    )

    watch(
      () => props.checkedRowKeys,
      (value) => {
        checkedRowKeys.value = [...value]
      },
      { deep: true },
    )

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

    function isSelectionColumn(column: DataTableColumn): column is DataTableSelectionColumn {
      return column.type === 'selection'
    }

    function isRowSelectable(
      row: Record<string, any>,
      pageRowIndex: number,
      column?: DataTableSelectionColumn,
      rowIndex = getAbsoluteRowIndex(pageRowIndex),
    ) {
      if (!column?.selectable) {
        return true
      }

      return column.selectable({
        row,
        rowIndex,
        pageRowIndex,
      })
    }

    function updateCheckedRowKeys(value: DataTableKey[]) {
      checkedRowKeys.value = value
      call(props['onUpdate:checkedRowKeys'], value)
    }

    function isRowSelected(row: Record<string, any>, pageRowIndex: number) {
      return checkedRowKeySet.value.has(getRowKey(row, getAbsoluteRowIndex(pageRowIndex)))
    }

    function toggleRowSelection(row: Record<string, any>, pageRowIndex: number, selected: boolean) {
      const key = getRowKey(row, getAbsoluteRowIndex(pageRowIndex))
      const nextKeys = new Set(checkedRowKeys.value)

      selected ? nextKeys.add(key) : nextKeys.delete(key)

      updateCheckedRowKeys([...nextKeys])
    }

    function toggleAllCurrentRows(selected: boolean) {
      const nextKeys = new Set(checkedRowKeys.value)

      currentSelectableRows.value.forEach(({ key }) => {
        selected ? nextKeys.add(key) : nextKeys.delete(key)
      })

      updateCheckedRowKeys([...nextKeys])
    }

    const renderCell = (row: Record<string, any>, column: DataTableColumn, pageRowIndex: number) => {
      const rowIndex = getAbsoluteRowIndex(pageRowIndex)

      if (isSelectionColumn(column)) {
        return undefined
      }

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

      return callOrReturn(props.rowProps, {
        row,
        rowIndex,
        pageRowIndex,
      })
    }

    const getCellProps = (row: Record<string, any>, column: DataTableColumn, pageRowIndex: number) => {
      if (!column.cellProps) {
        return undefined
      }

      const rowIndex = getAbsoluteRowIndex(pageRowIndex)

      return callOrReturn(column.cellProps, {
        row,
        rowIndex,
        pageRowIndex,
        column,
      })
    }

    const getAlign = (align?: DataTableAlign) => align ?? 'left'

    const getColStyle = (column: DataTableColumn) => ({
      width: column.width != null ? toSizeUnit(column.width) : isSelectionColumn(column) ? '52px' : undefined,
      minWidth: column.minWidth != null ? toSizeUnit(column.minWidth) : isSelectionColumn(column) ? '52px' : undefined,
    })

    const getHeaderCellStyle = (column: DataTableColumn) => ({
      textAlign: getAlign(column.titleAlign ?? column.align),
    })

    const getBodyCellStyle = (column: DataTableColumn) => ({
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
      allCurrentRowsSelected,
      someCurrentRowsSelected,
      getAbsoluteRowIndex,
      getRowKey,
      getRowProps,
      getCellProps,
      isSelectionColumn,
      isRowSelectable,
      isRowSelected,
      toggleAllCurrentRows,
      toggleRowSelection,
      currentSelectableRows,
      renderCell,
      getColStyle,
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
@import '../ripple/ripple';
@import '../form-details/formDetails';
@import '../icon/icon';
@import '../hover-overlay/hoverOverlay';
@import '../checkbox/checkbox';
@import '../loading/loading';
@import '../menu/menu';
@import '../menu-select/menuSelect';
@import '../menu-option/menuOption';
@import '../cell/cell';
@import '../field-decorator/fieldDecorator';
@import '../input/input';
@import '../pagination/pagination';
@import './dataTable';
</style>
