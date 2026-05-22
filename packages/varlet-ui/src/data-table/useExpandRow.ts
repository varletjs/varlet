import { computed, ref } from 'vue'
import type { DataTableColumn, DataTableExpandColumn } from './props'
import type { DataTableBodyRow } from './useBodyRows'

interface UseExpandRowOptions {
  columns: () => DataTableColumn[]
  isExpandColumn: (column: DataTableColumn) => column is DataTableExpandColumn
}

export function useExpandRow({ columns, isExpandColumn }: UseExpandRowOptions) {
  const expandedRowKeys = ref(new Set<string | number>())

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

    expandedRowKeys.value = target
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
    expandedRowKeys,
    isRowExpandable,
    toggleRowExpanded,
    renderExpandedRow,
  }
}
