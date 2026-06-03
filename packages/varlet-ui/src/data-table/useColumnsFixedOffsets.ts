import { computed, type CSSProperties } from 'vue'
import type { DataTableColumn, DataTableColumnFixed } from './props'

export interface UseColumnsFixedOffsetsOptions {
  columns: () => DataTableColumn[]
  resolvedColumnWidths: () => number[]
}

export function useColumnsFixedOffsets({ columns, resolvedColumnWidths }: UseColumnsFixedOffsetsOptions) {
  const lastLeftFixedColumnIndex = computed(() => {
    return findEdgeFixedColumnIndex('left')
  })

  const firstRightFixedColumnIndex = computed(() => {
    return findEdgeFixedColumnIndex('right')
  })

  const leftFixedOffsets = computed(() => {
    return buildFixedOffsets('left')
  })

  const rightFixedOffsets = computed(() => {
    return buildFixedOffsets('right')
  })

  function getFixedStyle(fixed: DataTableColumnFixed | undefined, columnIndex: number): CSSProperties {
    if (fixed === 'left') {
      return {
        left: `${leftFixedOffsets.value[columnIndex] ?? 0}px`,
        position: 'sticky',
        zIndex: 2,
      }
    }

    if (fixed === 'right') {
      return {
        right: `${rightFixedOffsets.value[columnIndex] ?? 0}px`,
        position: 'sticky',
        zIndex: 2,
      }
    }

    return {}
  }

  function buildFixedOffsets(direction: DataTableColumnFixed) {
    const resolvedColumns = columns()
    const widths = resolvedColumnWidths()
    const offsets = Array<number | undefined>(resolvedColumns.length).fill(undefined)
    let offset = 0

    if (direction === 'left') {
      for (let index = 0; index < resolvedColumns.length; index += 1) {
        if (resolvedColumns[index].fixed !== 'left') {
          continue
        }

        offsets[index] = offset
        offset += widths[index]
      }

      return offsets
    }

    for (let index = resolvedColumns.length - 1; index >= 0; index -= 1) {
      if (resolvedColumns[index].fixed !== 'right') {
        continue
      }

      offsets[index] = offset
      offset += widths[index]
    }

    return offsets
  }

  function isLastLeftFixedColumn(columnIndex: number) {
    return lastLeftFixedColumnIndex.value === columnIndex
  }

  function isFirstRightFixedColumn(columnIndex: number) {
    return firstRightFixedColumnIndex.value === columnIndex
  }

  function findEdgeFixedColumnIndex(direction: DataTableColumnFixed) {
    const resolvedColumns = columns()

    if (direction === 'left') {
      for (let index = resolvedColumns.length - 1; index >= 0; index -= 1) {
        if (resolvedColumns[index].fixed === 'left') {
          return index
        }
      }

      return -1
    }

    for (let index = 0; index < resolvedColumns.length; index += 1) {
      if (resolvedColumns[index].fixed === 'right') {
        return index
      }
    }

    return -1
  }

  return {
    getFixedStyle,
    isFirstRightFixedColumn,
    isLastLeftFixedColumn,
    leftFixedOffsets,
    rightFixedOffsets,
  }
}
