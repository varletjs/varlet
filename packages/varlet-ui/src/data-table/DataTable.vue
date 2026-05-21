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
      <div :class="classes(n('main'), n('$--scrollbar'))" :style="mainStyle">
        <table v-if="columns.length" :class="n('table')">
          <colgroup>
            <col
              v-for="(column, index) in columns"
              :key="column.key ?? column.type ?? index"
              :style="getColStyle(column)"
            />
          </colgroup>

          <thead>
            <tr :class="n('header-row')">
              <th
                v-for="headerCell in headerCells"
                :key="headerCell.key"
                :class="
                  classes(
                    n('cell'),
                    n('header-cell'),
                    [isSelectionColumn(headerCell.column), n('selection-cell')],
                    [isExpandColumn(headerCell.column), n('expand-cell')],
                    [headerCell.column.fixed, n('fixed-cell')],
                  )
                "
                :style="getHeaderCellStyle(headerCell)"
                :colspan="headerCell.colSpan"
              >
                <var-checkbox
                  v-if="isSelectionColumn(headerCell.column) && isMultipleSelectionColumn(headerCell.column)"
                  :model-value="allCurrentRowsSelected"
                  :indeterminate="someCurrentRowsSelected"
                  :disabled="isSelectionColumnDisabled(headerCell.column) || !currentSelectableRows.length"
                  tabindex="-1"
                  @update:model-value="toggleAllCurrentRows"
                />
                <template v-else>{{
                  isSelectionColumn(headerCell.column) || isExpandColumn(headerCell.column)
                    ? ''
                    : headerCell.column.title
                }}</template>
              </th>
            </tr>
          </thead>

          <tbody v-if="currentData.length">
            <template v-for="bodyRow in bodyRows" :key="bodyRow.key">
              <tr :class="n('row')" v-bind="getRowProps(bodyRow.row, bodyRow.pageRowIndex)">
                <td
                  v-for="cell in bodyRow.cells"
                  :key="cell.key"
                  :class="
                    classes(
                      n('cell'),
                      n('body-cell'),
                      [isSelectionColumn(cell.column), n('selection-cell')],
                      [isExpandColumn(cell.column), n('expand-cell')],
                      [cell.column.fixed, n('fixed-cell')],
                    )
                  "
                  :style="getBodyCellStyle(cell)"
                  v-bind="getCellProps(bodyRow.row, cell.column, bodyRow.pageRowIndex)"
                  :colspan="cell.colSpan"
                  :rowspan="cell.rowSpan"
                >
                  <var-checkbox
                    v-if="isSelectionColumn(cell.column)"
                    :model-value="isRowSelected(bodyRow.row, bodyRow.pageRowIndex)"
                    :disabled="
                      isSelectionColumnDisabled(cell.column) ||
                      isRowSelectionDisabled(bodyRow.row, bodyRow.pageRowIndex, cell.column)
                    "
                    tabindex="-1"
                    @update:model-value="toggleRowSelection(bodyRow.row, bodyRow.pageRowIndex, $event)"
                  />
                  <button
                    v-else-if="isExpandColumn(cell.column)"
                    type="button"
                    :class="
                      classes(n('expand-trigger'), [
                        isRowExpanded(bodyRow.row, bodyRow.pageRowIndex),
                        n('expand-trigger--expanded'),
                      ])
                    "
                    :disabled="!isRowExpandable(bodyRow.row, bodyRow.pageRowIndex, cell.column)"
                    @click="toggleRowExpanded(bodyRow.row, bodyRow.pageRowIndex)"
                  >
                    <var-icon
                      :name="isRowExpanded(bodyRow.row, bodyRow.pageRowIndex) ? 'chevron-down' : 'chevron-right'"
                    />
                  </button>
                  <MaybeVNode v-else :is="renderCell(bodyRow.row, cell.column, bodyRow.pageRowIndex)" tag="div" />
                </td>
              </tr>

              <tr v-if="bodyRow.expanded" :class="n('expanded-row')">
                <td :class="classes(n('cell'), n('body-cell'), n('expanded-cell'))" :colspan="columnCount">
                  <MaybeVNode :is="renderExpandedRow(bodyRow.row, bodyRow.pageRowIndex)" tag="div" />
                </td>
              </tr>
            </template>
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
import { call, callOrReturn, clamp, isFunction } from '@varlet/shared'
import { computed, defineComponent, ref, watch, type CSSProperties } from 'vue'
import VarCheckbox from '../checkbox'
import VarIcon from '../icon'
import VarLoading from '../loading'
import { t } from '../locale'
import { injectLocaleProvider } from '../locale-provider/provide'
import VarPagination from '../pagination'
import { createNamespace, formatElevation, MaybeVNode } from '../utils/components'
import { toPxNum, toSizeUnit } from '../utils/elements'
import {
  props,
  type DataTableAlign,
  type DataTableCellPropsContext,
  type DataTableCellSpan,
  type DataTableColumn,
  type DataTableExpandColumn,
  type DataTableFixed,
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

interface DataTableHeaderCell {
  key: string
  columnIndex: number
  column: DataTableColumn
  colSpan?: number
}

interface DataTableBodyCell {
  key: string
  columnIndex: number
  column: DataTableColumn
  colSpan?: number
  rowSpan?: number
}

interface DataTableBodyRow {
  key: DataTableKey
  row: Record<string, any>
  pageRowIndex: number
  expanded: boolean
  cells: DataTableBodyCell[]
}

export default defineComponent({
  name,
  components: {
    VarCheckbox,
    VarIcon,
    VarLoading,
    VarPagination,
    MaybeVNode,
  },
  props,
  setup(props) {
    const { t: pt } = injectLocaleProvider()
    const checkedRowKeys = ref<DataTableKey[]>([...props.checkedRowKeys])
    const expandedRowKeys = ref(new Set<DataTableKey>())
    const defaultPaginationOptions: NormalizedPaginationOptions = {
      simple: false,
      disabled: false,
      showSizeChanger: true,
      showQuickJumper: false,
      maxPagerCount: 5,
      sizeOption: [10, 20, 50, 100],
      showTotal: undefined,
    }
    const normalizedPaginationOptions = computed<NormalizedPaginationOptions>(() => {
      if (props.pagination === false || props.pagination === true) {
        return defaultPaginationOptions
      }

      return {
        ...defaultPaginationOptions,
        ...props.pagination,
      }
    })

    const currentPage = computed(() => Number(props.page))
    const currentPageSize = computed(() => Number(props.pageSize))
    const columnCount = computed(() => props.columns.length)
    const mainStyle = computed(() => ({
      maxHeight: toSizeUnit(props.maxHeight),
      overflow: props.maxHeight == null ? undefined : 'auto',
    }))
    const columnWidths = computed(() =>
      props.columns.map((column) => {
        if (column.width != null) {
          return toPxNum(column.width)
        }

        if (column.minWidth != null) {
          return toPxNum(column.minWidth)
        }

        if (isSelectionColumn(column) || isExpandColumn(column)) {
          return 52
        }

        return 0
      }),
    )
    const leftFixedOffsets = computed(() => {
      let offset = 0

      return props.columns.map((column, columnIndex) => {
        if (column.fixed !== 'left') {
          return undefined
        }

        const currentOffset = offset
        offset += columnWidths.value[columnIndex]
        return currentOffset
      })
    })
    const rightFixedOffsets = computed(() => {
      let offset = 0
      const result = Array<number | undefined>(props.columns.length).fill(undefined)

      for (let columnIndex = props.columns.length - 1; columnIndex >= 0; columnIndex -= 1) {
        if (props.columns[columnIndex].fixed !== 'right') {
          continue
        }

        result[columnIndex] = offset
        offset += columnWidths.value[columnIndex]
      }

      return result
    })
    const paginationTotal = computed(() => {
      if (props.pagination === false) {
        return props.data.length
      }

      return props.remote ? Number(props.total) : props.data.length
    })
    const hasPagination = computed(() => props.pagination !== false && paginationTotal.value > 0)

    const pageCount = computed(() => {
      if (!hasPagination.value) {
        return 1
      }

      return Math.max(1, Math.ceil(paginationTotal.value / currentPageSize.value))
    })

    const normalizedPage = computed(() =>
      hasPagination.value ? Math.min(Math.max(currentPage.value, 1), pageCount.value) : 1,
    )

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
    const expandColumn = computed(() => props.columns.find(isExpandColumn))
    const checkedRowKeySet = computed(() => new Set(checkedRowKeys.value))
    const currentSelectableRows = computed(() => {
      if (!selectionColumn.value) {
        return []
      }

      return currentData.value
        .map((row, pageRowIndex) => {
          const rowIndex = getAbsoluteRowIndex(pageRowIndex)

          return {
            row,
            pageRowIndex,
            rowIndex,
            key: getRowKey(row, rowIndex),
          }
        })
        .filter(
          ({ row, rowIndex, pageRowIndex }) =>
            !isRowSelectionDisabled(row, pageRowIndex, selectionColumn.value!, rowIndex),
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
      [() => props.pagination, () => props.remote, currentPage, normalizedPage],
      ([pagination, remote, page, normalizedPage]) => {
        if (pagination === false || remote || page === normalizedPage) {
          return
        }

        call(props['onUpdate:page'], normalizedPage)
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

    function isExpandColumn(column: DataTableColumn): column is DataTableExpandColumn {
      return column.type === 'expand'
    }

    function isMultipleSelectionColumn(column: DataTableSelectionColumn) {
      return column.multiple !== false
    }

    function isSelectionColumnDisabled(column: DataTableSelectionColumn) {
      return column.disabled === true
    }

    function isRowExpandable(
      row: Record<string, any>,
      pageRowIndex: number,
      column?: DataTableExpandColumn,
      rowIndex = getAbsoluteRowIndex(pageRowIndex),
    ) {
      if (!column?.expandable) {
        return true
      }

      return column.expandable({ row, rowIndex, pageRowIndex })
    }

    function isRowSelectionDisabled(
      row: Record<string, any>,
      pageRowIndex: number,
      column?: DataTableSelectionColumn,
      rowIndex = getAbsoluteRowIndex(pageRowIndex),
    ) {
      if (!column?.disabled || column.disabled === true) {
        return false
      }

      return column.disabled({ row, rowIndex, pageRowIndex })
    }

    function updateCheckedRowKeys(value: DataTableKey[]) {
      checkedRowKeys.value = value
      call(props['onUpdate:checkedRowKeys'], value)
    }

    function isRowSelected(row: Record<string, any>, pageRowIndex: number) {
      return checkedRowKeySet.value.has(getRowKey(row, getAbsoluteRowIndex(pageRowIndex)))
    }

    function isRowExpanded(row: Record<string, any>, pageRowIndex: number) {
      return expandedRowKeys.value.has(getRowKey(row, getAbsoluteRowIndex(pageRowIndex)))
    }

    function toggleRowSelection(row: Record<string, any>, pageRowIndex: number, selected: boolean) {
      if (!selectionColumn.value || isSelectionColumnDisabled(selectionColumn.value)) {
        return
      }

      if (isRowSelectionDisabled(row, pageRowIndex, selectionColumn.value)) {
        return
      }

      const key = getRowKey(row, getAbsoluteRowIndex(pageRowIndex))

      if (!isMultipleSelectionColumn(selectionColumn.value)) {
        updateCheckedRowKeys(selected ? [key] : checkedRowKeys.value.filter((checkedKey) => checkedKey !== key))
        return
      }

      const nextKeys = new Set(checkedRowKeys.value)

      selected ? nextKeys.add(key) : nextKeys.delete(key)

      updateCheckedRowKeys([...nextKeys])
    }

    function toggleAllCurrentRows(selected: boolean) {
      if (
        !selectionColumn.value ||
        isSelectionColumnDisabled(selectionColumn.value) ||
        !isMultipleSelectionColumn(selectionColumn.value)
      ) {
        return
      }

      const nextKeys = new Set(checkedRowKeys.value)

      currentSelectableRows.value.forEach(({ key }) => {
        selected ? nextKeys.add(key) : nextKeys.delete(key)
      })

      updateCheckedRowKeys([...nextKeys])
    }

    function toggleRowExpanded(row: Record<string, any>, pageRowIndex: number) {
      if (!expandColumn.value || !isRowExpandable(row, pageRowIndex, expandColumn.value)) {
        return
      }

      const key = getRowKey(row, getAbsoluteRowIndex(pageRowIndex))
      const nextExpandedRowKeys = new Set(expandedRowKeys.value)

      if (nextExpandedRowKeys.has(key)) {
        nextExpandedRowKeys.delete(key)
      } else {
        nextExpandedRowKeys.add(key)
      }

      expandedRowKeys.value = nextExpandedRowKeys
    }

    const renderCell = (row: Record<string, any>, column: DataTableColumn, pageRowIndex: number) => {
      const rowIndex = getAbsoluteRowIndex(pageRowIndex)

      if (isSelectionColumn(column)) {
        return undefined
      }

      if (isExpandColumn(column)) {
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

    function renderExpandedRow(row: Record<string, any>, pageRowIndex: number) {
      if (!expandColumn.value) {
        return undefined
      }

      const rowIndex = getAbsoluteRowIndex(pageRowIndex)

      return expandColumn.value.renderExpand({
        row,
        rowIndex,
        pageRowIndex,
        expanded: true,
      })
    }

    const resolveSpan = (span: DataTableCellSpan | undefined, context: DataTableCellPropsContext, maxSpan: number) => {
      const resolvedSpan = span == null ? 1 : Math.trunc(Number(callOrReturn(span, context)))

      if (resolvedSpan <= 0) {
        return 0
      }

      return clamp(resolvedSpan, 1, maxSpan)
    }

    const headerCells = computed<DataTableHeaderCell[]>(() => {
      const result: DataTableHeaderCell[] = []
      let coveredUntil = -1

      props.columns.forEach((column, columnIndex) => {
        if (columnIndex <= coveredUntil) {
          return
        }

        const maxColSpan = props.columns.length - columnIndex
        const colSpan = clamp(Math.trunc(Number(column.titleColSpan ?? 1)), 0, maxColSpan)

        if (colSpan === 0) {
          return
        }

        coveredUntil = columnIndex + colSpan - 1

        result.push({
          key: `${column.key ?? column.type ?? columnIndex}-header-${columnIndex}`,
          columnIndex,
          column,
          colSpan: colSpan > 1 ? colSpan : undefined,
        })
      })

      return result
    })

    const bodyRows = computed<DataTableBodyRow[]>(() => {
      const rowCount = currentData.value.length
      const covered = Array.from({ length: rowCount }, () => Array(columnCount.value).fill(false))

      return currentData.value.map((row, pageRowIndex) => {
        const cells: DataTableBodyCell[] = []
        const rowIndex = getAbsoluteRowIndex(pageRowIndex)
        const key = getRowKey(row, rowIndex)

        props.columns.forEach((column, columnIndex) => {
          if (covered[pageRowIndex][columnIndex]) {
            return
          }

          const context = {
            row,
            rowIndex,
            pageRowIndex,
            column,
          }
          const maxColSpan = columnCount.value - columnIndex
          const maxRowSpan = rowCount - pageRowIndex
          const colSpan = resolveSpan(column.colSpan, context, maxColSpan)
          const rowSpan = resolveSpan(column.rowSpan, context, maxRowSpan)

          if (colSpan === 0 || rowSpan === 0) {
            return
          }

          for (let rowOffset = 0; rowOffset < rowSpan; rowOffset += 1) {
            for (let colOffset = 0; colOffset < colSpan; colOffset += 1) {
              if (rowOffset === 0 && colOffset === 0) {
                continue
              }

              covered[pageRowIndex + rowOffset][columnIndex + colOffset] = true
            }
          }

          cells.push({
            key: `${column.key ?? column.type ?? columnIndex}-${pageRowIndex}-${columnIndex}`,
            columnIndex,
            column,
            colSpan: colSpan > 1 ? colSpan : undefined,
            rowSpan: rowSpan > 1 ? rowSpan : undefined,
          })
        })

        return {
          key,
          row,
          pageRowIndex,
          expanded: expandedRowKeys.value.has(key),
          cells,
        }
      })
    })

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
      width:
        column.width != null
          ? toSizeUnit(column.width)
          : isSelectionColumn(column) || isExpandColumn(column)
            ? '52px'
            : undefined,
      minWidth:
        column.minWidth != null
          ? toSizeUnit(column.minWidth)
          : isSelectionColumn(column) || isExpandColumn(column)
            ? '52px'
            : undefined,
    })

    const getFixedStyle = (fixed: DataTableFixed | undefined, columnIndex: number): CSSProperties | undefined => {
      if (fixed === 'left') {
        return {
          left: `${leftFixedOffsets.value[columnIndex] ?? 0}px`,
          position: 'sticky',
          zIndex: 2,
        }
      }

      if (fixed === 'right') {
        return {
          right: `${rightFixedOffsets.value[columnIndex] ?? 0}px`,
          position: 'sticky',
          zIndex: 2,
        }
      }

      return undefined
    }

    const getHeaderCellStyle = (cell: DataTableHeaderCell): CSSProperties => ({
      textAlign: getAlign(cell.column.titleAlign ?? cell.column.align),
      zIndex: cell.column.fixed ? 3 : undefined,
      ...getFixedStyle(cell.column.fixed, cell.columnIndex),
    })

    const getBodyCellStyle = (cell: DataTableBodyCell): CSSProperties => ({
      textAlign: getAlign(cell.column.align),
      ...getFixedStyle(cell.column.fixed, cell.columnIndex),
    })

    function handlePaginationChange(page: number, pageSize: number) {
      call(props['onUpdate:page'], page)
      call(props['onUpdate:pageSize'], pageSize)
    }

    return {
      currentData,
      currentPage,
      currentPageSize,
      columnCount,
      mainStyle,
      normalizedPaginationOptions,
      paginationTotal,
      resolvedEmptyText,
      hasPagination,
      allCurrentRowsSelected,
      someCurrentRowsSelected,
      headerCells,
      bodyRows,
      getAbsoluteRowIndex,
      getRowKey,
      getRowProps,
      getCellProps,
      isSelectionColumn,
      isExpandColumn,
      isMultipleSelectionColumn,
      isSelectionColumnDisabled,
      isRowSelectionDisabled,
      isRowExpandable,
      isRowExpanded,
      isRowSelected,
      toggleAllCurrentRows,
      toggleRowExpanded,
      toggleRowSelection,
      currentSelectableRows,
      renderCell,
      renderExpandedRow,
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
