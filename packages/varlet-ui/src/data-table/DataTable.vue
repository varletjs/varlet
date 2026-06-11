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
      <div
        ref="container"
        :class="classes(n('container'), n('$--scrollbar'))"
        :style="containerStyle"
        @scroll="handleContainerScroll"
      >
        <table v-if="columns.length" :class="n('table')" :style="tableStyle">
          <colgroup>
            <col
              v-for="(column, index) in columns"
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
                :should-render-left-fixed-shadow="shouldRenderLeftFixedShadow"
                :should-render-right-fixed-shadow="shouldRenderRightFixedShadow"
                :toggle-column-sorter="toggleColumnSorter"
                :toggle-current-selectable-rows="toggleCurrentSelectableRows"
                :start-column-resize="startColumnResize"
              />
            </tr>
          </thead>

          <tbody v-if="bodyRows.length">
            <template v-for="bodyRow in bodyRows" :key="bodyRow.key">
              <tr :class="classes(n('row'), getRowClass(bodyRow))" v-bind="getRowProps(bodyRow)">
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
                  :should-render-left-fixed-shadow="shouldRenderLeftFixedShadow"
                  :should-render-right-fixed-shadow="shouldRenderRightFixedShadow"
                  :toggle-row-selection="toggleRowSelection"
                  :toggle-row-expanded="toggleRowExpanded"
                  :toggle-tree-row-expanded="toggleTreeRowExpanded"
                  :render-cell="renderCell"
                  :get-cell-props="getCellProps"
                />
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

          <tfoot v-if="footRows.length">
            <tr v-for="(footRow, rowIndex) in footRows" :key="rowIndex" :class="n('summary-row')">
              <td
                v-for="cell in footRow"
                :key="cell.key"
                :class="
                  classes(
                    n('cell'),
                    n('summary-cell'),
                    [cell.column.fixed, n('fixed-cell')],
                    [shouldRenderLeftFixedShadow(cell.columnIndex), n('fixed-cell--shadow-right')],
                    [shouldRenderRightFixedShadow(cell.columnIndex), n('fixed-cell--shadow-left')],
                  )
                "
                :style="getBodyCellStyle(cell)"
                :colspan="cell.colSpan"
                :rowspan="cell.rowSpan"
              >
                <maybe-v-node :is="cell.value" tag="div" />
              </td>
            </tr>
          </tfoot>
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
          var-data-table-cover
          :current="normalizedPage"
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
import { callOrReturn, isArray, isFunction } from '@varlet/shared'
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
  type DataTableExpandColumn,
  type DataTableSelectionColumn,
} from './props'
import { type DataTableBodyCell, type DataTableBodyRow, useBodyRows } from './useBodyRows'
import { useColumnsFixedOffsets } from './useColumnsFixedOffsets'
import { useColumnSizes } from './useColumnSizes'
import { useContainerScroll } from './useContainerScroll'
import { useExpandRow } from './useExpandRow'
import { useFootRows } from './useFootRows'
import { type DataTableHeaderCell, useHeaderRows } from './useHeaderRows'
import { usePagination } from './usePagination'
import { useSelectionColumn } from './useSelectionColumn'
import { useSorter } from './useSorter'
import { useTreeExpand } from './useTreeExpand'

const { name, n, classes } = createNamespace('data-table')

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
    const checkedRowKeys = useVModel(props, 'checkedRowKeys')
    const expandedRowKeys = useVModel(props, 'expandedRowKeys')
    const expandedTreeRowKeys = useVModel(props, 'expandedTreeRowKeys')
    const page = useVModel(props, 'page')
    const pageSize = useVModel(props, 'pageSize')

    const { collapsedTreeRowKeys, toggleTreeRowExpanded } = useTreeExpand({
      tree: () => props.tree,
      data: () => props.data,
      expandedTreeRowKeys,
      getRowKey,
      getTreeChildren,
    })

    const { normalizedColumns: columns, headerRows } = useHeaderRows({
      columns: () => props.columns,
    })

    const {
      hasResolvedColumnWidth,
      resolvedColumnWidths,
      totalResolvedColumnWidth,
      getColStyle,
      isColumnResizable,
      startColumnResize,
    } = useColumnSizes({
      columns: () => columns.value,
      isSelectionColumn,
      isExpandColumn,
    })

    const containerStyle = computed<CSSProperties>(() => {
      const style: CSSProperties = {}

      if (props.maxHeight != null) {
        style.maxHeight = toSizeUnit(props.maxHeight)
        style.overflow = 'auto'
      }

      style.overflowX = 'auto'

      return style
    })

    const tableStyle = computed<CSSProperties>(() => {
      const style: CSSProperties = {
        width: '100%',
        tableLayout: hasResolvedColumnWidth.value ? 'fixed' : props.tableLayout,
      }

      if (props.scrollX != null) {
        style.minWidth = toSizeUnit(props.scrollX)
        return style
      }

      return style
    })

    const { getFixedStyle, isFirstRightFixedColumn, isLastLeftFixedColumn } = useColumnsFixedOffsets({
      columns: () => columns.value,
      resolvedColumnWidths: () => resolvedColumnWidths.value,
    })

    const { getColumnSorterOrder, isColumnSortable, toggleColumnSorter } = useSorter({
      sorters: () => props.sorters,
      sortMode: () => props.sortMode,
      onUpdateSorters: () => props['onUpdate:sorters'],
    })

    const { paginationProps, paginationTotal, showPagination, normalizedPage, pagedData } = usePagination({
      pagination: () => props.pagination,
      remote: () => props.remote,
      loading: () => props.loading,
      page: () => page.value,
      pageSize: () => pageSize.value,
      total: () => props.total,
      data: () => props.data,
      onUpdatePage: () => (nextPage) => {
        page.value = nextPage
      },
    })

    const firstTreeColumnIndex = computed(() =>
      columns.value.findIndex((column) => !isSelectionColumn(column) && !isExpandColumn(column)),
    )

    const { expandedRowKeySet, isRowExpandable, toggleRowExpanded, renderExpandedRow } = useExpandRow({
      columns: () => columns.value,
      expandedRowKeys,
      isExpandColumn,
    })

    const { allFlatRows, treeRowMeta, bodyRows } = useBodyRows({
      collapsedTreeRowKeys,
      expandedRowKeySet,
      firstTreeColumnIndex,
      getRowKey,
      getTreeChildren,
      columns: () => columns.value,
      sourceRows: () => pagedData.value,
      tree: () => props.tree,
    })

    const { footRows } = useFootRows({
      columns: () => columns.value,
      sourceRows: () => pagedData.value,
      summary: () => props.summary,
    })

    const { container, scrollLeft, maxScrollDistance, handleContainerScroll } = useContainerScroll([
      columns,
      bodyRows,
      footRows,
      totalResolvedColumnWidth,
      () => props.scrollX,
    ])

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
      columns: () => columns.value,
      tree: () => props.tree,
      cascade: () => props.cascade,
      pagedData: () => pagedData.value,
      allFlatRows: () => allFlatRows.value,
      treeRowMeta: () => treeRowMeta.value,
    })

    function getRowKey(row: Record<string, any>, rowIndex: number) {
      if (isFunction(props.rowKey)) {
        return props.rowKey({ row, rowIndex })
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

    function getRowClass(bodyRow: DataTableBodyRow) {
      if (!props.rowClass) {
        return
      }

      return callOrReturn(props.rowClass, {
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
      return columnIndex === columns.value.length - 1
    }

    function shouldRenderLeftFixedShadow(columnIndex: number) {
      return scrollLeft.value > 1 && isLastLeftFixedColumn(columnIndex)
    }

    function shouldRenderRightFixedShadow(columnIndex: number) {
      return scrollLeft.value < maxScrollDistance.value - 1 && isFirstRightFixedColumn(columnIndex)
    }

    function getHeaderCellStyle(cell: DataTableHeaderCell): CSSProperties {
      return {
        textAlign: getAlign(cell.column.titleAlign ?? cell.column.align),
        ...getFixedStyle(cell.fixed, cell.startLeafColumnIndex),
        zIndex: cell.fixed ? 3 : 2,
      }
    }

    function getBodyCellStyle(cell: DataTableBodyCell): CSSProperties {
      return {
        textAlign: getAlign(cell.column.align),
        ...getFixedStyle(cell.column.fixed, cell.columnIndex),
        zIndex: cell.column.fixed ? 1 : undefined,
      }
    }

    function handlePaginationChange(nextPage: number, nextPageSize: number) {
      page.value = nextPage
      pageSize.value = nextPageSize
    }

    return {
      pt,
      t,
      container,
      expandedRowKeys,
      containerStyle,
      paginationProps,
      paginationTotal,
      showPagination,
      normalizedPage,
      pageSize,
      tableStyle,
      columns,
      currentSelectableRows,
      allCurrentRowsSelected,
      someCurrentRowsSelected,
      headerRows,
      bodyRows,
      footRows,
      isColumnResizable,
      getRowProps,
      getRowClass,
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
      shouldRenderLeftFixedShadow,
      shouldRenderRightFixedShadow,
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
      handleContainerScroll,
      isLastHeaderColumn,
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
@import '../field-decorator/fieldDecorator';
@import '../input/input';
@import '../pagination/pagination';
@import './dataTable';
</style>
