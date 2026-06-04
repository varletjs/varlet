import { isArray } from '@varlet/shared'
import { computed } from 'vue'
import type { DataTableColumn, DataTableColumnFixed, DataTableFieldColumn } from './props'
import { resolveSpan } from './span'

export interface DataTableHeaderCell {
  key: string
  column: DataTableColumn
  columnIndex: number
  startLeafColumnIndex: number
  endLeafColumnIndex: number
  colSpan?: number
  rowSpan?: number
  fixed?: DataTableColumnFixed
}

interface UseHeaderRowsOptions {
  columns: () => DataTableColumn[]
}

export function useHeaderRows({ columns }: UseHeaderRowsOptions) {
  const normalizedColumns = computed(() => flattenLeafColumns(columns()))

  const headerRows = computed<DataTableHeaderCell[][]>(() => {
    const resolvedColumns = columns()
    const rows: DataTableHeaderCell[][] = []
    const maxDepth = getColumnDepth(resolvedColumns)
    let leafColumnIndex = 0

    visitColumns(resolvedColumns, 0)

    function visitColumns(currentColumns: DataTableColumn[], depth: number) {
      const startColumnIndex = leafColumnIndex
      const endColumnIndex = startColumnIndex + countLeafColumns(currentColumns) - 1
      let hiddenUntilColumnIndex = startColumnIndex
      let visibleColSpan = 0

      currentColumns.forEach((column, columnIndex) => {
        if (!rows[depth]) {
          rows[depth] = []
        }

        if (isGroupColumn(column)) {
          const startLeafColumnIndex = leafColumnIndex
          const colSpan = visitColumns(column.children, depth + 1)
          const endLeafColumnIndex = leafColumnIndex - 1

          if (colSpan === 0) {
            return
          }

          rows[depth].push({
            key: getHeaderCellKey(column, depth, columnIndex),
            column,
            columnIndex: startLeafColumnIndex,
            startLeafColumnIndex,
            endLeafColumnIndex,
            colSpan,
            fixed: resolveHeaderCellFixed(normalizedColumns.value.slice(startLeafColumnIndex, endLeafColumnIndex + 1)),
          })

          visibleColSpan += colSpan
          return
        }

        if (leafColumnIndex < hiddenUntilColumnIndex) {
          leafColumnIndex += 1
          return
        }

        const startLeafColumnIndex = leafColumnIndex
        const maxColSpan = endColumnIndex - startLeafColumnIndex + 1
        const colSpan = resolveSpan(column.titleColSpan, maxColSpan)
        leafColumnIndex += 1

        if (colSpan === 0) {
          return
        }

        if (colSpan > 1) {
          hiddenUntilColumnIndex = startLeafColumnIndex + colSpan
        }

        rows[depth].push({
          key: getHeaderCellKey(column, depth, startLeafColumnIndex),
          column,
          columnIndex: startLeafColumnIndex,
          startLeafColumnIndex,
          endLeafColumnIndex: startLeafColumnIndex + colSpan - 1,
          colSpan: colSpan > 1 ? colSpan : undefined,
          rowSpan: maxDepth - depth > 1 ? maxDepth - depth : undefined,
          fixed: resolveHeaderCellFixed(
            normalizedColumns.value.slice(startLeafColumnIndex, startLeafColumnIndex + colSpan),
          ),
        })

        visibleColSpan += colSpan
      })

      return visibleColSpan
    }

    return rows
  })

  function isGroupColumn(column: DataTableColumn): column is DataTableFieldColumn & { children: DataTableColumn[] } {
    return 'children' in column && isArray(column.children) && column.children.length > 0
  }

  function flattenLeafColumns(columns: DataTableColumn[]): DataTableColumn[] {
    return columns.flatMap((column) => (isGroupColumn(column) ? flattenLeafColumns(column.children) : [column]))
  }

  function countLeafColumns(columns: DataTableColumn[]) {
    return flattenLeafColumns(columns).length
  }

  function getHeaderCellKey(column: DataTableColumn, depth: number, columnIndex: number) {
    return `${column.key ?? column.type ?? 'group'}-header-${depth}-${columnIndex}`
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

  return {
    normalizedColumns,
    headerRows,
    isGroupColumn,
  }
}
