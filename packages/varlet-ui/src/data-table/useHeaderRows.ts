import { isArray } from '@varlet/shared'
import { computed } from 'vue'
import type { DataTableColumn, DataTableColumnFixed, DataTableFieldColumn } from './props'
import { createCellSpanMatrix, resolveSpan } from './span'

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

    if (!resolvedColumns.some(isGroupColumn)) {
      const cells: DataTableHeaderCell[] = []
      const matrix = createCellSpanMatrix(1, resolvedColumns.length)

      resolvedColumns.forEach((column, columnIndex) => {
        if (matrix.isCovered(0, columnIndex)) {
          return
        }

        const maxColSpan = resolvedColumns.length - columnIndex
        const colSpan = resolveSpan(column.titleColSpan, maxColSpan)

        if (colSpan === 0) {
          return
        }

        matrix.cover(0, columnIndex, 1, colSpan)
        cells.push({
          key: `${column.key ?? column.type ?? columnIndex}-header-${columnIndex}`,
          column,
          columnIndex,
          startLeafColumnIndex: columnIndex,
          endLeafColumnIndex: columnIndex + colSpan - 1,
          colSpan: colSpan > 1 ? colSpan : undefined,
          fixed: resolveHeaderCellFixed(normalizedColumns.value.slice(columnIndex, columnIndex + colSpan)),
        })
      })

      return [cells]
    }

    const rows: DataTableHeaderCell[][] = []
    const maxDepth = getColumnDepth(resolvedColumns)
    let leafColumnIndex = 0

    function visit(currentColumns: DataTableColumn[], depth: number) {
      currentColumns.forEach((column, columnIndex) => {
        rows[depth] ??= []

        if (isGroupColumn(column)) {
          const childColumns = column.children
          const startLeafColumnIndex = leafColumnIndex
          const leafCount = countLeafColumns(childColumns)
          const endLeafColumnIndex = startLeafColumnIndex + leafCount - 1

          rows[depth].push({
            key: `${column.key ?? 'group'}-header-${depth}-${columnIndex}`,
            column,
            columnIndex: startLeafColumnIndex,
            startLeafColumnIndex,
            endLeafColumnIndex,
            colSpan: leafCount,
            fixed: resolveHeaderCellFixed(normalizedColumns.value.slice(startLeafColumnIndex, endLeafColumnIndex + 1)),
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

    visit(resolvedColumns, 0)

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
