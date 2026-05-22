import { computed, type CSSProperties } from 'vue'
import type { DataTableColumn, DataTableColumnFixed } from './props'

export interface UseColumnsFixedOffsetsOptions {
  columns: () => DataTableColumn[]
  columnWidths: () => number[]
}

export function useColumnsFixedOffsets({ columns, columnWidths }: UseColumnsFixedOffsetsOptions) {
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
    const resolvedColumnWidths = columnWidths()
    const offsets = Array<number | undefined>(resolvedColumns.length).fill(undefined)
    let offset = 0

    if (direction === 'left') {
      for (let index = 0; index < resolvedColumns.length; index += 1) {
        if (resolvedColumns[index].fixed !== 'left') {
          continue
        }

        offsets[index] = offset
        offset += resolvedColumnWidths[index]
      }

      return offsets
    }

    for (let index = resolvedColumns.length - 1; index >= 0; index -= 1) {
      if (resolvedColumns[index].fixed !== 'right') {
        continue
      }

      offsets[index] = offset
      offset += resolvedColumnWidths[index]
    }

    return offsets
  }

  return {
    getFixedStyle,
    leftFixedOffsets,
    rightFixedOffsets,
  }
}
