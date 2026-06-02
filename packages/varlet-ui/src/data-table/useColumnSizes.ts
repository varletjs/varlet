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

  const columnWidths = computed(() => {
    return columns().map((column, columnIndex) => {
      return getResolvedColumnWidth(column, columnIndex) ?? 0
    })
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

    const defaultWidth = getColumnDefaultWidth(column)

    if (defaultWidth != null) {
      style.width = toSizeUnit(getLimitedColumnWidth(column, toPxNum(defaultWidth)))
    }

    const minWidth = getColumnMinWidth(column)

    if (minWidth != null) {
      style.minWidth = toSizeUnit(minWidth)
    } else if (defaultWidth != null) {
      style.minWidth = toSizeUnit(getLimitedColumnWidth(column, toPxNum(defaultWidth)))
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

    const handlePointerMove = (moveEvent: MouseEvent) => {
      const nextWidth = getLimitedColumnWidth(headerCell.column, startWidth + moveEvent.clientX - startX)

      resizedColumnWidths.value = {
        ...resizedColumnWidths.value,
        [columnId]: nextWidth,
      }
    }

    const handlePointerUp = () => {
      detach()
    }

    const detach = () => {
      document.removeEventListener('mousemove', handlePointerMove)
      document.removeEventListener('mouseup', handlePointerUp)
      stopActiveResize = undefined
    }

    document.addEventListener('mousemove', handlePointerMove)
    document.addEventListener('mouseup', handlePointerUp)
    stopActiveResize = detach
  }

  function getResizedColumnWidth(column: DataTableColumn, columnIndex: number) {
    return resizedColumnWidths.value[getColumnId(column, columnIndex)]
  }

  function getResolvedColumnWidth(column: DataTableColumn, columnIndex: number) {
    const resizedWidth = getResizedColumnWidth(column, columnIndex)

    if (resizedWidth != null) {
      return resizedWidth
    }

    const defaultWidth = getColumnDefaultWidth(column)

    if (defaultWidth != null) {
      return getLimitedColumnWidth(column, toPxNum(defaultWidth))
    }

    const minWidth = getColumnMinWidth(column)

    if (minWidth != null) {
      return minWidth
    }
  }

  function getColumnDefaultWidth(column: DataTableColumn) {
    if (column.width != null) {
      return column.width
    }

    if (isSelectionColumn(column) || isExpandColumn(column)) {
      return defaultDataTableControlColumnWidth
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

    return Math.min(Math.max(width, minWidth), maxWidth)
  }

  return {
    columnWidths,
    getColStyle,
    isColumnResizable,
    startColumnResize,
  }
}
