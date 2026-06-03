import { clamp } from '@varlet/shared'
import { computed, onBeforeUnmount, ref, watch, type CSSProperties } from 'vue'
import { toPxNum, toSizeUnit } from '../utils/elements'
import type { DataTableColumn, DataTableExpandColumn, DataTableSelectionColumn } from './props'

const defaultDataTableControlColumnWidth = 52

interface UseColumnSizesOptions {
  columns: () => DataTableColumn[]
  isSelectionColumn: (column: DataTableColumn) => column is DataTableSelectionColumn
  isExpandColumn: (column: DataTableColumn) => column is DataTableExpandColumn
}

export interface DataTableResizableHeaderCell {
  column: DataTableColumn
  columnIndex: number
}

export function useColumnSizes({ columns, isSelectionColumn, isExpandColumn }: UseColumnSizesOptions) {
  const resizedColumnWidths = ref<Record<string, number>>({})
  let stopActiveResize: (() => void) | undefined

  const resolvedColumnWidths = computed(() => {
    return columns().map((column, columnIndex) => {
      return getResolvedColumnWidth(column, columnIndex) ?? 0
    })
  })

  const hasResolvedColumnWidth = computed(() => {
    return columns().some((column, columnIndex) => {
      return getResolvedColumnWidth(column, columnIndex) != null
    })
  })

  const totalResolvedColumnWidth = computed(() => {
    return resolvedColumnWidths.value.reduce((total, width) => total + width, 0)
  })

  watch(
    columns,
    () => {
      const activeColumnIds = new Set(columns().map((column, columnIndex) => getColumnId(column, columnIndex)))
      const nextWidths: Record<string, number> = {}

      Object.entries(resizedColumnWidths.value).forEach(([columnId, width]) => {
        if (activeColumnIds.has(columnId)) {
          nextWidths[columnId] = width
        }
      })

      resizedColumnWidths.value = nextWidths
    },
    { immediate: true },
  )

  onBeforeUnmount(() => {
    stopActiveResize?.()
  })

  function isColumnResizable(column: DataTableColumn) {
    return column.resizable === true
  }

  function getColStyle(column: DataTableColumn, columnIndex: number) {
    const style: CSSProperties = {}
    const resizedWidth = getResizedColumnWidth(column, columnIndex)

    if (resizedWidth != null) {
      style.width = toSizeUnit(resizedWidth)
      style.minWidth = toSizeUnit(resizedWidth)
      style.maxWidth = toSizeUnit(resizedWidth)
      return style
    }

    const resolvedWidth = getResolvedColumnWidth(column, columnIndex)

    if (resolvedWidth != null) {
      style.width = toSizeUnit(resolvedWidth)
    }

    const minWidth = getColumnMinWidth(column)

    if (minWidth != null) {
      style.minWidth = toSizeUnit(minWidth)
    } else if (resolvedWidth != null) {
      style.minWidth = toSizeUnit(resolvedWidth)
    }

    const maxWidth = getColumnMaxWidth(column)

    if (maxWidth != null) {
      style.maxWidth = toSizeUnit(maxWidth)
    }

    return style
  }

  function startColumnResize(event: MouseEvent, headerCell: DataTableResizableHeaderCell) {
    if (!isColumnResizable(headerCell.column)) {
      return
    }

    event.preventDefault()
    event.stopPropagation()

    const headerCellElement = (event.currentTarget as HTMLElement | null)?.closest('th')

    if (!headerCellElement) {
      return
    }

    stopActiveResize?.()

    const startX = event.clientX
    const startWidth = headerCellElement.getBoundingClientRect().width
    const columnId = getColumnId(headerCell.column, headerCell.columnIndex)

    document.addEventListener('mousemove', handlePointerMove)
    document.addEventListener('mouseup', handlePointerUp)
    stopActiveResize = detach

    function handlePointerMove(event: MouseEvent) {
      const nextWidth = getLimitedColumnWidth(headerCell.column, startWidth + event.clientX - startX)

      resizedColumnWidths.value = {
        ...resizedColumnWidths.value,
        [columnId]: nextWidth,
      }
    }

    function handlePointerUp() {
      detach()
    }

    function detach() {
      document.removeEventListener('mousemove', handlePointerMove)
      document.removeEventListener('mouseup', handlePointerUp)
      stopActiveResize = undefined
    }
  }

  function getResizedColumnWidth(column: DataTableColumn, columnIndex: number) {
    return resizedColumnWidths.value[getColumnId(column, columnIndex)]
  }

  function getResolvedColumnWidth(column: DataTableColumn, columnIndex: number) {
    const resizedWidth = getResizedColumnWidth(column, columnIndex)

    if (resizedWidth != null) {
      return resizedWidth
    }

    const preferredWidth =
      column.width ??
      (isSelectionColumn(column) || isExpandColumn(column) ? defaultDataTableControlColumnWidth : undefined)

    if (preferredWidth != null) {
      return getLimitedColumnWidth(column, toPxNum(preferredWidth))
    }

    const minWidth = getColumnMinWidth(column)

    if (minWidth != null) {
      return minWidth
    }
  }

  function getColumnId(column: DataTableColumn, columnIndex: number) {
    return `${column.key ?? column.type ?? 'column'}-${columnIndex}`
  }

  function getColumnMinWidth(column: DataTableColumn) {
    if (column.minWidth == null) {
      return
    }

    const minWidth = toPxNum(column.minWidth)
    const maxWidth = getColumnMaxWidth(column)

    if (maxWidth == null) {
      return minWidth
    }

    return Math.min(minWidth, maxWidth)
  }

  function getColumnMaxWidth(column: DataTableColumn) {
    if (column.maxWidth == null) {
      return
    }

    return toPxNum(column.maxWidth)
  }

  function getLimitedColumnWidth(column: DataTableColumn, width: number) {
    const minWidth = getColumnMinWidth(column) ?? 0
    const maxWidth = getColumnMaxWidth(column) ?? Number.POSITIVE_INFINITY

    return clamp(width, minWidth, maxWidth)
  }

  return {
    hasResolvedColumnWidth,
    resolvedColumnWidths,
    totalResolvedColumnWidth,
    getColStyle,
    isColumnResizable,
    startColumnResize,
  }
}
