import { isArray } from '@varlet/shared'
import { computed, type VNodeChild } from 'vue'
import type { DataTableColumn, DataTableSummary, DataTableSummaryCell } from './props'
import { createCellSpanMatrix, resolveSpan } from './span'
import type { DataTableBodyCell } from './useBodyRows'

type DataTableSummaryRecord = Record<string, DataTableSummaryCell>

export interface DataTableFootCell extends DataTableBodyCell {
  value?: VNodeChild
}

interface UseFootRowsOptions {
  columns: () => DataTableColumn[]
  sourceRows: () => Record<string, any>[]
  summary: () => DataTableSummary | undefined
}

export function useFootRows({ columns, sourceRows, summary }: UseFootRowsOptions) {
  const footRows = computed<DataTableFootCell[][]>(() => {
    const summaryGetter = summary()

    if (!summaryGetter) {
      return []
    }

    const summaryResult = summaryGetter({
      data: sourceRows(),
    })
    const summaryRecords: DataTableSummaryRecord[] = isArray(summaryResult) ? summaryResult : [summaryResult]
    const resolvedColumns = columns()
    const rowCount = summaryRecords.length
    const columnCount = resolvedColumns.length
    const matrix = createCellSpanMatrix(rowCount, columnCount)

    return summaryRecords.map((summaryRecord, rowIndex) =>
      resolvedColumns.flatMap((column, columnIndex) => {
        if (matrix.isCovered(rowIndex, columnIndex)) {
          return []
        }

        const key = getColumnSummaryKey(column, columnIndex)
        const summaryCell = summaryRecord[key]
        const maxColSpan = columnCount - columnIndex
        const maxRowSpan = rowCount - rowIndex
        const colSpan = resolveSpan(summaryCell?.colSpan, maxColSpan)
        const rowSpan = resolveSpan(summaryCell?.rowSpan, maxRowSpan)

        if (colSpan === 0 || rowSpan === 0) {
          return []
        }

        matrix.cover(rowIndex, columnIndex, rowSpan, colSpan)

        return [
          {
            key: `${rowIndex}-${key}`,
            columnIndex,
            column,
            value: summaryCell?.value,
            colSpan: colSpan > 1 ? colSpan : undefined,
            rowSpan: rowSpan > 1 ? rowSpan : undefined,
          },
        ]
      }),
    )
  })

  function getColumnSummaryKey(column: DataTableColumn, columnIndex: number) {
    return column.key ?? column.type ?? String(columnIndex)
  }

  return {
    footRows,
  }
}
