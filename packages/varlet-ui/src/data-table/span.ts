import { callOrReturn, clamp, floor, times } from '@varlet/shared'

export type CellSpan<Context> = number | ((context: Context) => number) | undefined

export type CellSpanMatrix = boolean[][]

export interface CellSpanMatrixContext {
  rawMatrix: CellSpanMatrix
  isCovered: (rowIndex: number, columnIndex: number) => boolean
  cover: (rowIndex: number, columnIndex: number, rowSpan: number, colSpan: number) => void
}

export function createCellSpanMatrix(rowCount: number, columnCount: number): CellSpanMatrixContext {
  const rawMatrix = times(rowCount, () => Array(columnCount).fill(false))

  return {
    rawMatrix,
    isCovered: (rowIndex, columnIndex) => rawMatrix[rowIndex][columnIndex],
    cover: (rowIndex, columnIndex, rowSpan, colSpan) => {
      times(rowSpan, (rowOffset) => {
        times(colSpan, (columnOffset) => {
          if (rowOffset === 0 && columnOffset === 0) {
            return
          }

          rawMatrix[rowIndex + rowOffset][columnIndex + columnOffset] = true
        })
      })
    },
  }
}

export function resolveSpan<Context>(span: CellSpan<Context>, maxSpan: number, context?: Context) {
  const resolvedSpan = span == null ? 1 : floor(callOrReturn(span, context as Context))

  if (resolvedSpan <= 0) {
    return 0
  }

  return clamp(resolvedSpan, 1, maxSpan)
}
