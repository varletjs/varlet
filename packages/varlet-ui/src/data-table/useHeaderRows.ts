import { isArray } from '@varlet/shared'
import { computed } from 'vue'
import type { DataTableColumn, DataTableColumnFixed, DataTableFieldColumn } from './props'
import { resolveSpan } from './span'

export interface DataTableHeaderCell {
  key: string
  column: DataTableColumn
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
    const rawColumns = columns()
    const rows: DataTableHeaderCell[][] = []
    const maxDepth = getColumnsMaxDepth(rawColumns)

    let nextLeafColumnIndex = 0

    buildHeaderRows(rawColumns, 0)

    function buildHeaderRows(columns: DataTableColumn[], rowIndex: number) {
      if (!rows[rowIndex]) {
        rows[rowIndex] = []
      }

      const headerRow = rows[rowIndex]
      const leafRangeStart = nextLeafColumnIndex
      const leafRangeEnd = leafRangeStart + flattenLeafColumns(columns).length - 1
      let coveredUntilLeafColumnIndex = leafRangeStart
      let visibleLeafColSpan = 0

      columns.forEach((column, columnIndex) => {
        if (isGroupColumn(column)) {
          visibleLeafColSpan += buildGroupHeaderCell(headerRow, column, rowIndex, columnIndex)
          return
        }

        const colSpan = buildLeafHeaderCell(headerRow, column, rowIndex, leafRangeEnd, coveredUntilLeafColumnIndex)

        if (colSpan > 1) {
          coveredUntilLeafColumnIndex = nextLeafColumnIndex - 1 + colSpan
        }

        visibleLeafColSpan += colSpan
      })

      return visibleLeafColSpan
    }

    function buildGroupHeaderCell(
      headerRow: DataTableHeaderCell[],
      column: DataTableFieldColumn & { children: DataTableColumn[] },
      rowIndex: number,
      columnIndex: number,
    ) {
      const startLeafColumnIndex = nextLeafColumnIndex
      const colSpan = buildHeaderRows(column.children, rowIndex + 1)
      const endLeafColumnIndex = nextLeafColumnIndex - 1

      if (colSpan === 0) {
        return 0
      }

      headerRow.push({
        key: getHeaderCellKey(column, rowIndex, columnIndex),
        column,
        colSpan,
        startLeafColumnIndex,
        endLeafColumnIndex,
        fixed: resolveHeaderCellFixed(normalizedColumns.value.slice(startLeafColumnIndex, endLeafColumnIndex + 1)),
      })

      return colSpan
    }

    function buildLeafHeaderCell(
      headerRow: DataTableHeaderCell[],
      column: DataTableColumn,
      rowIndex: number,
      leafRangeEnd: number,
      coveredUntilLeafColumnIndex: number,
    ) {
      if (nextLeafColumnIndex < coveredUntilLeafColumnIndex) {
        nextLeafColumnIndex += 1
        return 0
      }

      const startLeafColumnIndex = nextLeafColumnIndex
      const maxColSpan = leafRangeEnd - startLeafColumnIndex + 1
      const colSpan = resolveSpan(column.titleColSpan, maxColSpan)
      nextLeafColumnIndex += 1

      if (colSpan === 0) {
        return 0
      }

      headerRow.push({
        key: getHeaderCellKey(column, rowIndex, startLeafColumnIndex),
        column,
        colSpan: colSpan > 1 ? colSpan : undefined,
        rowSpan: maxDepth - rowIndex > 1 ? maxDepth - rowIndex : undefined,
        startLeafColumnIndex,
        endLeafColumnIndex: startLeafColumnIndex + colSpan - 1,
        fixed: resolveHeaderCellFixed(
          normalizedColumns.value.slice(startLeafColumnIndex, startLeafColumnIndex + colSpan),
        ),
      })

      return colSpan
    }

    return rows
  })

  function isGroupColumn(column: DataTableColumn): column is DataTableFieldColumn & { children: DataTableColumn[] } {
    return 'children' in column && isArray(column.children) && column.children.length > 0
  }

  function flattenLeafColumns(columns: DataTableColumn[]): DataTableColumn[] {
    return columns.flatMap((column) => (isGroupColumn(column) ? flattenLeafColumns(column.children) : [column]))
  }

  function getHeaderCellKey(column: DataTableColumn, depth: number, columnIndex: number) {
    return `${column.key ?? column.type ?? 'group'}-header-${depth}-${columnIndex}`
  }

  function getColumnsMaxDepth(columns: DataTableColumn[]): number {
    if (!columns.length) {
      return 0
    }

    return Math.max(...columns.map((column) => (isGroupColumn(column) ? 1 + getColumnsMaxDepth(column.children) : 1)))
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
