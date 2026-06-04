import { normalizeToArray } from '@varlet/shared'
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

    const summaryResult = summaryGetter({ data: sourceRows() })
    const summaryRecords: DataTableSummaryRecord[] = normalizeToArray(summaryResult)
    const resolvedColumns = columns()
    const matrix = createCellSpanMatrix(summaryRecords.length, resolvedColumns.length)

    return summaryRecords.map((summaryRecord, rowIndex) =>
      resolvedColumns.flatMap((column, columnIndex) => {
        if (matrix.isCovered(rowIndex, columnIndex)) {
          return []
        }

        const key = column.key ?? column.type ?? String(columnIndex)
        const summaryCell = summaryRecord[key]
        const maxColSpan = resolvedColumns.length - columnIndex
        const maxRowSpan = summaryRecords.length - rowIndex
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

  return {
    footRows,
  }
}
