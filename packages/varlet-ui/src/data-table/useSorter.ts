import { call } from '@varlet/shared'
import { computed } from 'vue'
import type {
  DataTableColumn,
  DataTableFieldColumn,
  DataTableSortMode,
  DataTableSorter,
  DataTableSorterOrder,
} from './props'

interface UseSorterOptions {
  sorters: () => DataTableSorter[]
  sortMode: () => DataTableSortMode
  onUpdateSorters: () => ((sorters: DataTableSorter[]) => void) | ((sorters: DataTableSorter[]) => void)[] | undefined
}

export function useSorter({ sorters, sortMode, onUpdateSorters }: UseSorterOptions) {
  const activeSorters = computed(() => sorters())

  function isColumnSortable(column: DataTableColumn): column is DataTableFieldColumn {
    return column.type == null && column.sorter === true
  }

  function getColumnSorterOrder(columnKey: string): DataTableSorterOrder | undefined {
    return activeSorters.value.find((sorter) => sorter.key === columnKey)?.order
  }

  function toggleColumnSorter(columnKey: string) {
    const currentOrder = getColumnSorterOrder(columnKey)

    if (sortMode() === 'single') {
      call(
        onUpdateSorters(),
        currentOrder == null
          ? [{ key: columnKey, order: 'asc' as const }]
          : currentOrder === 'asc'
            ? [{ key: columnKey, order: 'desc' as const }]
            : [],
      )
      return
    }

    if (currentOrder == null) {
      call(onUpdateSorters(), [...activeSorters.value, { key: columnKey, order: 'asc' as const }])
      return
    }

    if (currentOrder === 'asc') {
      call(
        onUpdateSorters(),
        activeSorters.value.map((sorter) =>
          sorter.key !== columnKey
            ? sorter
            : {
                ...sorter,
                order: 'desc' as const,
              },
        ),
      )
      return
    }

    call(
      onUpdateSorters(),
      activeSorters.value.filter((sorter) => sorter.key !== columnKey),
    )
  }

  return {
    activeSorters,
    isColumnSortable,
    getColumnSorterOrder,
    toggleColumnSorter,
  }
}
