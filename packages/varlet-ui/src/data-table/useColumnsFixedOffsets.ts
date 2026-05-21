import { computed, type Ref } from 'vue'
import type { DataTableColumn, DataTableColumnFixed } from './props'

export interface UseColumnsFixedOffsetsOptions {
  columns: Ref<DataTableColumn[]>
  columnWidths: Ref<number[]>
}

export function useColumnsFixedOffsets({ columns, columnWidths }: UseColumnsFixedOffsetsOptions) {
  const leftFixedOffsets = computed(() => {
    return buildFixedOffsets('left')
  })

  const rightFixedOffsets = computed(() => {
    return buildFixedOffsets('right')
  })

  function buildFixedOffsets(direction: DataTableColumnFixed) {
    const offsets = Array<number | undefined>(columns.value.length).fill(undefined)
    let offset = 0

    if (direction === 'left') {
      for (let index = 0; index < columns.value.length; index += 1) {
        if (columns.value[index].fixed !== 'left') {
          continue
        }

        offsets[index] = offset
        offset += columnWidths.value[index]
      }

      return offsets
    }

    for (let index = columns.value.length - 1; index >= 0; index -= 1) {
      if (columns.value[index].fixed !== 'right') {
        continue
      }

      offsets[index] = offset
      offset += columnWidths.value[index]
    }

    return offsets
  }

  return {
    leftFixedOffsets,
    rightFixedOffsets,
  }
}
