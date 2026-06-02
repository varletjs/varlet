import { computed, type Ref } from 'vue'
import type { DataTableColumn, DataTableExpandColumn } from './props'
import type { DataTableBodyRow } from './useBodyRows'

interface UseExpandRowOptions {
  columns: () => DataTableColumn[]
  expandedRowKeys: Ref<Array<string | number>>
  isExpandColumn: (column: DataTableColumn) => column is DataTableExpandColumn
}

export function useExpandRow({ columns, expandedRowKeys, isExpandColumn }: UseExpandRowOptions) {
  const expandedRowKeySet = computed(() => new Set(expandedRowKeys.value))

  const expandColumn = computed(() => columns().find(isExpandColumn))

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

    const target = new Set(expandedRowKeys.value)

    if (target.has(bodyRow.key)) {
      target.delete(bodyRow.key)
    } else {
      target.add(bodyRow.key)
    }

    expandedRowKeys.value = [...target]
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

  return {
    expandedRowKeySet,
    isRowExpandable,
    toggleRowExpanded,
    renderExpandedRow,
  }
}
