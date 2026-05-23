<template>
  <div
    :class="
      classes(
        n(),
        [!plain, formatElevation(elevation, 1)],
        n('$--box'),
        [surface === 'low', n('--surface-low')],
        [cellBordered, n('--cell-bordered')],
        [plain, n('--plain')],
        [showPagination, n('--with-footer')],
        n(`--${size}`),
      )
    "
  >
    <var-loading :loading="loading">
      <div :class="classes(n('container'), n('$--scrollbar'))" :style="mainStyle">
        <table v-if="leafColumns.length" :class="n('table')" :style="tableStyle">
          <colgroup>
            <col
              v-for="(column, index) in leafColumns"
              :key="column.key ?? column.type ?? index"
              :style="getColStyle(column, index)"
            />
          </colgroup>

          <thead>
            <tr v-for="(headerRow, rowIndex) in headerRows" :key="rowIndex" :class="n('header-row')">
              <data-table-header-cell
                v-for="headerCell in headerRow"
                :key="headerCell.key"
                :header-cell="headerCell"
                :style="getHeaderCellStyle(headerCell)"
                :all-current-rows-selected="allCurrentRowsSelected"
                :some-current-rows-selected="someCurrentRowsSelected"
                :has-selectable-rows="!!currentSelectableRows.length"
                :is-selection-column="isSelectionColumn"
                :is-expand-column="isExpandColumn"
                :is-multiple-selection-column="isMultipleSelectionColumn"
                :is-selection-column-selectable="isSelectionColumnSelectable"
                :is-column-sortable="isColumnSortable"
                :get-column-sorter-order="getColumnSorterOrder"
                :is-column-resizable="isColumnResizable"
                :is-last-header-column="isLastHeaderColumn"
                :is-last-left-fixed-column="isLastLeftFixedColumn"
                :is-first-right-fixed-column="isFirstRightFixedColumn"
                :toggle-column-sorter="toggleColumnSorter"
                :toggle-current-selectable-rows="toggleCurrentSelectableRows"
                :start-column-resize="startColumnResize"
              />
            </tr>
          </thead>

          <tbody v-if="bodyRows.length">
            <template v-for="bodyRow in bodyRows" :key="bodyRow.key">
              <tr :class="n('row')" v-bind="getRowProps(bodyRow)">
                <data-table-body-cell
                  v-for="cell in bodyRow.cells"
                  :key="cell.key"
                  :body-row="bodyRow"
                  :cell="cell"
                  :style="getBodyCellStyle(cell)"
                  :tree="tree"
                  :is-selection-column="isSelectionColumn"
                  :is-expand-column="isExpandColumn"
                  :is-multiple-selection-column="isMultipleSelectionColumn"
                  :is-selection-column-selectable="isSelectionColumnSelectable"
                  :is-row-selectable="isRowSelectable"
                  :is-row-key-selected="isRowKeySelected"
                  :is-row-key-indeterminate="isRowKeyIndeterminate"
                  :is-row-expandable="isRowExpandable"
                  :is-last-left-fixed-column="isLastLeftFixedColumn"
                  :is-first-right-fixed-column="isFirstRightFixedColumn"
                  :toggle-row-selection="toggleRowSelection"
                  :toggle-row-expanded="toggleRowExpanded"
                  :toggle-tree-row-expanded="toggleTreeRowExpanded"
                  :render-cell="renderCell"
                  :get-cell-props="getCellProps"
                />
              </tr>

              <tr v-if="bodyRow.expanded" :class="n('expanded-row')">
                <td :class="classes(n('cell'), n('body-cell'), n('expanded-cell'))" :colspan="leafColumns.length">
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

      <template v-if="$slots['loading-description']" #description>
        <slot name="loading-description" />
      </template>
    </var-loading>
  </div>
</template>

<script lang="ts">
import { call, callOrReturn, clamp, floor, isArray, isFunction } from '@varlet/shared'
import { useVModel } from '@varlet/use'
import { computed, defineComponent, type CSSProperties } from 'vue'
import VarLoading from '../loading'
import { t } from '../locale'
import { injectLocaleProvider } from '../locale-provider/provide'
import VarPagination from '../pagination'
import { createNamespace, formatElevation, MaybeVNode } from '../utils/components'
import { toSizeUnit } from '../utils/elements'
import DataTableBodyCellComponent from './DataTableBodyCell.vue'
import DataTableHeaderCellComponent from './DataTableHeaderCell.vue'
import {
  props,
  type DataTableColumn,
  type DataTableColumnAlign,
  type DataTableColumnFixed,
  type DataTableExpandColumn,
  type DataTableFieldColumn,
  type DataTableSelectionColumn,
} from './props'
import { type DataTableBodyCell, type DataTableBodyRow, useBodyRows } from './useBodyRows'
import { useColumnsFixedOffsets } from './useColumnsFixedOffsets'
import { useColumnWidths } from './useColumnWidths'
import { useExpandRow } from './useExpandRow'
import { usePagination } from './usePagination'
import { useSelectionColumn } from './useSelectionColumn'
import { useSorter } from './useSorter'
import { useTreeExpand } from './useTreeExpand'

const { name, n, classes } = createNamespace('data-table')

interface DataTableHeaderCell {
  key: string
  column: DataTableColumn
  columnIndex: number
  startLeafColumnIndex: number
  endLeafColumnIndex: number
  colSpan?: number
  rowSpan?: number
  fixed?: DataTableColumnFixed
}

export default defineComponent({
  name,
  components: {
    DataTableBodyCell: DataTableBodyCellComponent,
    DataTableHeaderCell: DataTableHeaderCellComponent,
    VarLoading,
    VarPagination,
    MaybeVNode,
  },
  props,
  setup(props) {
    const { t: pt } = injectLocaleProvider()
    const page = computed(() => props.page)
    const pageSize = computed(() => props.pageSize)
    const checkedRowKeys = useVModel(props, 'checkedRowKeys')
    const mainStyle = computed<CSSProperties>(() => {
      const style: CSSProperties = {}

      if (props.maxHeight != null) {
        style.maxHeight = toSizeUnit(props.maxHeight)
        style.overflow = 'auto'
      }

      if (props.scrollX != null) {
        style.overflowX = 'auto'
      }

      return style
    })
    const tableStyle = computed<CSSProperties>(() => {
      const style: CSSProperties = {
        tableLayout: props.tableLayout,
        minWidth: '100%',
      }

      if (props.scrollX != null) {
        style.width = toSizeUnit(props.scrollX)
      }

      return style
    })

    const { collapsedTreeRowKeys, toggleTreeRowExpanded } = useTreeExpand({
      tree: () => props.tree,
      data: () => props.data,
      getRowKey,
      getTreeChildren,
    })

    const leafColumns = computed(() => flattenLeafColumns(props.columns))

    const { columnWidths, getColStyle, isColumnResizable, startColumnResize } = useColumnWidths({
      columns: () => leafColumns.value,
      isSelectionColumn,
      isExpandColumn,
    })

    const { getFixedStyle, isFirstRightFixedColumn, isLastLeftFixedColumn } = useColumnsFixedOffsets({
      columns: () => leafColumns.value,
      columnWidths: () => columnWidths.value,
    })

    const { getColumnSorterOrder, isColumnSortable, toggleColumnSorter } = useSorter({
      sorters: () => props.sorters,
      sortMode: () => props.sortMode,
      onUpdateSorters: () => props['onUpdate:sorters'],
    })

    const { paginationProps, paginationTotal, showPagination, pagedData } = usePagination({
      pagination: () => props.pagination,
      remote: () => props.remote,
      loading: () => props.loading,
      page: () => props.page,
      pageSize: () => props.pageSize,
      total: () => props.total,
      data: () => props.data,
      onUpdatePage: () => props['onUpdate:page'],
    })

    const firstTreeColumnIndex = computed(() =>
      leafColumns.value.findIndex((column) => !isSelectionColumn(column) && !isExpandColumn(column)),
    )

    const { expandedRowKeys, isRowExpandable, toggleRowExpanded, renderExpandedRow } = useExpandRow({
      columns: () => leafColumns.value,
      isExpandColumn,
    })

    const { allFlatRows, treeRowMeta, bodyRows } = useBodyRows({
      collapsedTreeRowKeys,
      expandedRowKeys,
      firstTreeColumnIndex,
      getRowKey,
      getTreeChildren,
      columns: () => leafColumns.value,
      sourceRows: () => pagedData.value,
      tree: () => props.tree,
    })

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
      toggleCurrentSelectableRows,
    } = useSelectionColumn({
      checkedRowKeys,
      isSelectionColumn,
      getTreeChildren,
      columns: () => leafColumns.value,
      tree: () => props.tree,
      cascade: () => props.cascade,
      pagedData: () => pagedData.value,
      allFlatRows: () => allFlatRows.value,
      treeRowMeta: () => treeRowMeta.value,
    })

    const headerRows = computed<DataTableHeaderCell[][]>(() => {
      if (!props.columns.some(isGroupColumn)) {
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
            column,
            columnIndex,
            startLeafColumnIndex: columnIndex,
            endLeafColumnIndex: columnIndex + colSpan - 1,
            colSpan: colSpan > 1 ? colSpan : undefined,
            fixed: resolveHeaderCellFixed(leafColumns.value.slice(columnIndex, columnIndex + colSpan)),
          })
        })

        return [cells]
      }

      const rows: DataTableHeaderCell[][] = []
      const maxDepth = getColumnDepth(props.columns)
      let leafColumnIndex = 0

      function visit(columns: DataTableColumn[], depth: number) {
        columns.forEach((column, columnIndex) => {
          rows[depth] ??= []

          if (isGroupColumn(column)) {
            const childColumns = column.children
            const startLeafColumnIndex = leafColumnIndex
            const leafCount = countLeafColumns(childColumns)
            leafColumnIndex += leafCount
            const endLeafColumnIndex = leafColumnIndex - 1

            rows[depth].push({
              key: `${column.key ?? column.title}-header-${depth}-${columnIndex}`,
              column,
              columnIndex: startLeafColumnIndex,
              startLeafColumnIndex,
              endLeafColumnIndex,
              colSpan: leafCount,
              fixed: resolveHeaderCellFixed(leafColumns.value.slice(startLeafColumnIndex, endLeafColumnIndex + 1)),
            })

            visit(childColumns, depth + 1)
            return
          }

          const startLeafColumnIndex = leafColumnIndex
          leafColumnIndex += 1

          rows[depth].push({
            key: `${column.key ?? column.type ?? columnIndex}-header-${depth}-${startLeafColumnIndex}`,
            column,
            columnIndex: startLeafColumnIndex,
            startLeafColumnIndex,
            endLeafColumnIndex: startLeafColumnIndex,
            rowSpan: maxDepth - depth > 1 ? maxDepth - depth : undefined,
            fixed: column.fixed,
          })
        })
      }

      visit(props.columns, 0)

      return rows
    })

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

    function isGroupColumn(column: DataTableColumn): column is DataTableFieldColumn & { children: DataTableColumn[] } {
      return 'children' in column && isArray(column.children) && column.children.length > 0
    }

    function flattenLeafColumns(columns: DataTableColumn[]): DataTableColumn[] {
      return columns.flatMap((column) => (isGroupColumn(column) ? flattenLeafColumns(column.children) : [column]))
    }

    function countLeafColumns(columns: DataTableColumn[]) {
      return flattenLeafColumns(columns).length
    }

    function getColumnDepth(columns: DataTableColumn[]): number {
      if (!columns.length) {
        return 0
      }

      return Math.max(...columns.map((column) => (isGroupColumn(column) ? 1 + getColumnDepth(column.children) : 1)))
    }

    function resolveHeaderCellFixed(columns: DataTableColumn[]): DataTableColumnFixed | undefined {
      if (!columns.length) {
        return
      }

      if (columns.every((column) => column.fixed === 'left')) {
        return 'left'
      }

      if (columns.every((column) => column.fixed === 'right')) {
        return 'right'
      }
    }

    function isSelectionColumn(column: DataTableColumn): column is DataTableSelectionColumn {
      return column.type === 'selection'
    }

    function isExpandColumn(column: DataTableColumn): column is DataTableExpandColumn {
      return column.type === 'expand'
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

    function isLastHeaderColumn(columnIndex: number) {
      return columnIndex === leafColumns.value.length - 1
    }

    function getHeaderCellStyle(cell: DataTableHeaderCell): CSSProperties {
      return {
        textAlign: getAlign(cell.column.titleAlign ?? cell.column.align),
        zIndex: cell.fixed ? 3 : undefined,
        ...getFixedStyle(cell.fixed, cell.startLeafColumnIndex),
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
      mainStyle,
      page,
      pageSize,
      paginationProps,
      paginationTotal,
      showPagination,
      tableStyle,
      leafColumns,
      currentSelectableRows,
      allCurrentRowsSelected,
      someCurrentRowsSelected,
      headerRows,
      bodyRows,
      isColumnResizable,
      getRowProps,
      getCellProps,
      isSelectionColumn,
      isExpandColumn,
      isColumnSortable,
      isMultipleSelectionColumn,
      isSelectionColumnSelectable,
      getColumnSorterOrder,
      isRowExpandable,
      isRowKeyIndeterminate,
      isRowKeySelected,
      isRowSelectable,
      toggleColumnSorter,
      toggleCurrentSelectableRows,
      toggleRowExpanded,
      toggleTreeRowExpanded,
      toggleRowSelection,
      renderCell,
      renderExpandedRow,
      getColStyle,
      getHeaderCellStyle,
      getBodyCellStyle,
      handlePaginationChange,
      isLastHeaderColumn,
      isFirstRightFixedColumn,
      isLastLeftFixedColumn,
      startColumnResize,
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
