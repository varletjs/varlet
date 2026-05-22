<template>
  <div
    :class="
      classes(
        n(),
        formatElevation(elevation, 1),
        n('$--box'),
        [surface === 'low', n('--surface-low')],
        [cellBordered, n('--cell-bordered')],
        [showPagination, n('--with-footer')],
        n(`--${size}`),
      )
    "
  >
    <var-loading :loading="loading">
      <div
        :class="classes(n('main'), n('$--scrollbar'))"
        :style="{ maxHeight: toSizeUnit(maxHeight), overflow: maxHeight != null ? 'auto' : undefined }"
      >
        <table v-if="columns.length" :class="n('table')" :style="{ tableLayout }">
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
                  :disabled="!isSelectionColumnSelectable(headerCell.column) || !currentSelectableRows.length"
                  tabindex="-1"
                  @update:model-value="toggleAllCurrentRows"
                />
                <template v-else>
                  {{
                    isSelectionColumn(headerCell.column) || isExpandColumn(headerCell.column)
                      ? ''
                      : headerCell.column.title
                  }}
                </template>
              </th>
            </tr>
          </thead>

          <tbody v-if="bodyRows.length">
            <template v-for="bodyRow in bodyRows" :key="bodyRow.key">
              <tr :class="n('row')" v-bind="getRowProps(bodyRow)">
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
                  v-bind="getCellProps(bodyRow, cell.column)"
                  :colspan="cell.colSpan"
                  :rowspan="cell.rowSpan"
                >
                  <var-checkbox
                    v-if="isSelectionColumn(cell.column) && isMultipleSelectionColumn(cell.column)"
                    :model-value="isRowKeySelected(bodyRow.key)"
                    :indeterminate="isRowKeyIndeterminate(bodyRow.key)"
                    :disabled="
                      !isSelectionColumnSelectable(cell.column) ||
                      !isRowSelectable(bodyRow.row, bodyRow.rowIndex, cell.column)
                    "
                    tabindex="-1"
                    @update:model-value="toggleRowSelection(bodyRow, $event)"
                  />
                  <var-radio
                    v-else-if="isSelectionColumn(cell.column)"
                    :model-value="isRowKeySelected(bodyRow.key)"
                    :disabled="
                      !isSelectionColumnSelectable(cell.column) ||
                      !isRowSelectable(bodyRow.row, bodyRow.rowIndex, cell.column)
                    "
                    tabindex="-1"
                    @update:model-value="toggleRowSelection(bodyRow, $event)"
                  />
                  <button
                    v-else-if="isExpandColumn(cell.column)"
                    type="button"
                    tabindex="-1"
                    :class="
                      classes(n('expand-trigger'), [expandedRowKeys.has(bodyRow.key), n('expand-trigger--expanded')])
                    "
                    :disabled="!isRowExpandable(bodyRow, cell.column)"
                    @click="toggleRowExpanded(bodyRow)"
                  >
                    <var-icon :name="expandedRowKeys.has(bodyRow.key) ? 'chevron-down' : 'chevron-right'" />
                  </button>
                  <div
                    v-else-if="tree && cell.treeLevel != null"
                    :class="n('tree-cell')"
                    :style="{ paddingInlineStart: `${cell.treeLevel * 20}px` }"
                  >
                    <button
                      v-if="cell.treeExpandable"
                      type="button"
                      tabindex="-1"
                      :class="classes(n('tree-trigger'), [cell.treeExpanded, n('tree-trigger--expanded')])"
                      @click="toggleTreeRowExpanded(bodyRow)"
                    >
                      <var-icon :name="cell.treeExpanded ? 'chevron-down' : 'chevron-right'" />
                    </button>
                    <span v-else :class="n('tree-indent')" />
                    <maybe-v-node :is="renderCell(bodyRow, cell.column)" tag="div" />
                  </div>
                  <maybe-v-node v-else :is="renderCell(bodyRow, cell.column)" tag="div" />
                </td>
              </tr>

              <tr v-if="bodyRow.expanded" :class="n('expanded-row')">
                <td :class="classes(n('cell'), n('body-cell'), n('expanded-cell'))" :colspan="columns.length">
                  <div :class="n('expanded-content')">
                    <maybe-v-node :is="renderExpandedRow(bodyRow)" tag="div" />
                  </div>
                </td>
              </tr>
            </template>
          </tbody>
        </table>

        <div v-if="!bodyRows.length" :class="n('empty')">
          <slot name="empty">
            {{ (pt ? pt : t)('dataTableEmptyText') }}
          </slot>
        </div>
      </div>

      <div v-if="showPagination" :class="n('footer')">
        <slot name="footer-prefix" />

        <var-pagination
          :current="page"
          :size="pageSize"
          :total="paginationTotal"
          :simple="paginationProps.simple"
          :disabled="paginationProps.disabled"
          :show-size-changer="paginationProps.showSizeChanger"
          :show-quick-jumper="paginationProps.showQuickJumper"
          :max-pager-count="paginationProps.maxPagerCount"
          :size-option="paginationProps.sizeOption"
          :show-total="paginationProps.showTotal"
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
import { call, callOrReturn, clamp, floor, isArray, isFunction } from '@varlet/shared'
import { useVModel } from '@varlet/use'
import { computed, defineComponent, ref, watch, type CSSProperties } from 'vue'
import VarCheckbox from '../checkbox'
import VarIcon from '../icon'
import VarLoading from '../loading'
import { t } from '../locale'
import { injectLocaleProvider } from '../locale-provider/provide'
import VarPagination from '../pagination'
import VarRadio from '../radio'
import { createNamespace, formatElevation, MaybeVNode } from '../utils/components'
import { toPxNum, toSizeUnit } from '../utils/elements'
import {
  props,
  type DataTableColumn,
  type DataTableColumnAlign,
  type DataTableExpandColumn,
  type DataTableSelectionColumn,
} from './props'
import { type DataTableBodyCell, type DataTableBodyRow, useBodyRows } from './useBodyRows'
import { useColumnsFixedOffsets } from './useColumnsFixedOffsets'
import { usePagination } from './usePagination'
import { useSelectionColumn } from './useSelectionColumn'

const { name, n, classes } = createNamespace('data-table')
const defaultDataTableControlColumnWidth = 52

interface DataTableHeaderCell {
  key: string
  columnIndex: number
  column: DataTableColumn
  colSpan?: number
}

export default defineComponent({
  name,
  components: {
    VarCheckbox,
    VarIcon,
    VarLoading,
    VarPagination,
    VarRadio,
    MaybeVNode,
  },
  props,
  setup(props) {
    const { t: pt } = injectLocaleProvider()
    const page = computed(() => props.page)
    const pageSize = computed(() => props.pageSize)
    const checkedRowKeys = useVModel(props, 'checkedRowKeys')
    const expandedRowKeys = ref(new Set<string | number>())
    const collapsedTreeRowKeys = ref(new Set<string | number>())

    const columnWidths = computed(() => {
      return props.columns.map((column) => {
        const resolvedWidth = getColumnDefaultWidth(column)

        if (resolvedWidth != null) {
          return toPxNum(resolvedWidth)
        }

        if (column.minWidth != null) {
          return toPxNum(column.minWidth)
        }

        return 0
      })
    })

    const { getFixedStyle } = useColumnsFixedOffsets({
      columns: () => props.columns,
      columnWidths: () => columnWidths.value,
    })

    const { paginationProps, paginationTotal, showPagination, pagedData } = usePagination({
      pagination: () => props.pagination,
      remote: () => props.remote,
      page: () => props.page,
      pageSize: () => props.pageSize,
      total: () => props.total,
      data: () => props.data,
      onUpdatePage: () => props['onUpdate:page'],
    })

    const firstTreeColumnIndex = computed(() => {
      return props.columns.findIndex((column) => !isSelectionColumn(column) && !isExpandColumn(column))
    })

    const { allFlatRows, treeRowMeta, bodyRows, syncCollapsedTreeRowKeys } = useBodyRows({
      columns: () => props.columns,
      sourceRows: () => pagedData.value,
      tree: () => props.tree,
      collapsedTreeRowKeys,
      expandedRowKeys,
      firstTreeColumnIndex,
      getRowKey,
      getTreeChildren,
    })

    const expandColumn = computed(() => props.columns.find(isExpandColumn))
    const {
      currentSelectableRows,
      allCurrentRowsSelected,
      someCurrentRowsSelected,
      isMultipleSelectionColumn,
      isSelectionColumnSelectable,
      isRowSelectable,
      isRowKeySelected,
      isRowKeyIndeterminate,
      toggleRowSelection,
      toggleAllCurrentRows,
    } = useSelectionColumn({
      columns: () => props.columns,
      tree: () => props.tree,
      cascade: () => props.cascade,
      pagedData: () => pagedData.value,
      allFlatRows: () => allFlatRows.value,
      treeRowMeta: () => treeRowMeta.value,
      checkedRowKeys,
      isSelectionColumn,
      getTreeChildren,
    })

    const headerCells = computed<DataTableHeaderCell[]>(() => {
      const cells: DataTableHeaderCell[] = []
      let coveredUntil = -1

      props.columns.forEach((column, columnIndex) => {
        if (columnIndex <= coveredUntil) {
          return
        }

        const maxColSpan = props.columns.length - columnIndex
        const colSpan = clamp(floor(column.titleColSpan ?? 1), 0, maxColSpan)

        if (colSpan === 0) {
          return
        }

        coveredUntil = columnIndex + colSpan - 1
        cells.push({
          key: `${column.key ?? column.type ?? columnIndex}-header-${columnIndex}`,
          columnIndex,
          column,
          colSpan: colSpan > 1 ? colSpan : undefined,
        })
      })

      return cells
    })

    watch(
      () => props.data,
      () => {
        syncCollapsedTreeRowKeys()
      },
      { immediate: true },
    )

    function getRowKey(row: Record<string, any>, rowIndex: number) {
      if (isFunction(props.rowKey)) {
        return props.rowKey(row, rowIndex)
      }

      return row[props.rowKey] ?? rowIndex
    }

    function getTreeChildren(row: Record<string, any>) {
      const children = row[props.childrenKey]
      return isArray(children) ? children : []
    }

    function isSelectionColumn(column: DataTableColumn): column is DataTableSelectionColumn {
      return column.type === 'selection'
    }

    function isExpandColumn(column: DataTableColumn): column is DataTableExpandColumn {
      return column.type === 'expand'
    }

    function isRowExpandable(bodyRow: DataTableBodyRow, column?: DataTableExpandColumn) {
      if (!column?.expandable) {
        return true
      }

      return column.expandable({
        row: bodyRow.row,
        rowIndex: bodyRow.rowIndex,
      })
    }

    function toggleRowExpanded(bodyRow: DataTableBodyRow) {
      const column = expandColumn.value

      if (!column || !isRowExpandable(bodyRow, column)) {
        return
      }

      const nextExpandedRows = new Set(expandedRowKeys.value)

      if (nextExpandedRows.has(bodyRow.key)) {
        nextExpandedRows.delete(bodyRow.key)
      } else {
        nextExpandedRows.add(bodyRow.key)
      }

      expandedRowKeys.value = nextExpandedRows
    }

    function toggleTreeRowExpanded(bodyRow: DataTableBodyRow) {
      if (!props.tree || !bodyRow.expandable) {
        return
      }

      const nextCollapsedRows = new Set(collapsedTreeRowKeys.value)

      if (nextCollapsedRows.has(bodyRow.key)) {
        nextCollapsedRows.delete(bodyRow.key)
      } else {
        nextCollapsedRows.add(bodyRow.key)
      }

      collapsedTreeRowKeys.value = nextCollapsedRows
    }

    function renderCell(bodyRow: DataTableBodyRow, column: DataTableColumn) {
      if (isSelectionColumn(column) || isExpandColumn(column)) {
        return
      }

      if (column.render) {
        return column.render({
          row: bodyRow.row,
          rowIndex: bodyRow.rowIndex,
        })
      }

      return bodyRow.row[column.key]
    }

    function renderExpandedRow(bodyRow: DataTableBodyRow) {
      const column = expandColumn.value

      if (!column) {
        return
      }

      return column.renderExpand({
        row: bodyRow.row,
        rowIndex: bodyRow.rowIndex,
      })
    }

    function getRowProps(bodyRow: DataTableBodyRow) {
      if (!props.rowProps) {
        return
      }

      return callOrReturn(props.rowProps, {
        row: bodyRow.row,
        rowIndex: bodyRow.rowIndex,
      })
    }

    function getCellProps(bodyRow: DataTableBodyRow, column: DataTableColumn) {
      if (!column.cellProps) {
        return
      }

      return callOrReturn(column.cellProps, {
        row: bodyRow.row,
        rowIndex: bodyRow.rowIndex,
      })
    }

    function getAlign(align?: DataTableColumnAlign) {
      return align ?? 'left'
    }

    function getColumnDefaultWidth(column: DataTableColumn) {
      if (column.width != null) {
        return column.width
      }

      if (isSelectionColumn(column) || isExpandColumn(column)) {
        return defaultDataTableControlColumnWidth
      }
    }

    function getColStyle(column: DataTableColumn) {
      const style: CSSProperties = {}
      const resolvedWidth = getColumnDefaultWidth(column)

      if (resolvedWidth != null) {
        style.width = toSizeUnit(resolvedWidth)
      }

      if (column.minWidth != null) {
        style.minWidth = toSizeUnit(column.minWidth)
      } else if (resolvedWidth != null) {
        style.minWidth = toSizeUnit(resolvedWidth)
      }

      return style
    }

    function getHeaderCellStyle(cell: DataTableHeaderCell): CSSProperties {
      return {
        textAlign: getAlign(cell.column.titleAlign ?? cell.column.align),
        zIndex: cell.column.fixed ? 3 : undefined,
        ...getFixedStyle(cell.column.fixed, cell.columnIndex),
      }
    }

    function getBodyCellStyle(cell: DataTableBodyCell): CSSProperties {
      return {
        textAlign: getAlign(cell.column.align),
        ...getFixedStyle(cell.column.fixed, cell.columnIndex),
      }
    }

    function handlePaginationChange(page: number, pageSize: number) {
      call(props['onUpdate:page'], page)
      call(props['onUpdate:pageSize'], pageSize)
    }

    return {
      pt,
      t,
      expandedRowKeys,
      page,
      pageSize,
      paginationProps,
      paginationTotal,
      showPagination,
      currentSelectableRows,
      allCurrentRowsSelected,
      someCurrentRowsSelected,
      headerCells,
      bodyRows,
      getRowProps,
      getCellProps,
      isSelectionColumn,
      isExpandColumn,
      isMultipleSelectionColumn,
      isSelectionColumnSelectable,
      isRowExpandable,
      isRowKeyIndeterminate,
      isRowKeySelected,
      isRowSelectable,
      toggleAllCurrentRows,
      toggleRowExpanded,
      toggleTreeRowExpanded,
      toggleRowSelection,
      renderCell,
      renderExpandedRow,
      getColStyle,
      getHeaderCellStyle,
      getBodyCellStyle,
      handlePaginationChange,
      n,
      classes,
      formatElevation,
      toSizeUnit,
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
@import '../radio/radio';
@import '../cell/cell';
@import '../field-decorator/fieldDecorator';
@import '../input/input';
@import '../pagination/pagination';
@import './dataTable';
</style>
