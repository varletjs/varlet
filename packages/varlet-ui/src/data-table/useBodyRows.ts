import { callOrReturn, clamp, floor, times } from '@varlet/shared'
import { computed, type ComputedRef } from 'vue'
import type { DataTableColumn, DataTableColumnCellSpan } from './props'

interface InternalDataTableCellContext {
  row: Record<string, any>
  rowIndex: number
  column: DataTableColumn
}

export interface DataTableBodyCell {
  key: string
  columnIndex: number
  column: DataTableColumn
  treeLevel?: number
  treeExpandable?: boolean
  treeExpanded?: boolean
  colSpan?: number
  rowSpan?: number
}

export interface DataTableFlatRow {
  key: string | number
  row: Record<string, any>
  rowIndex: number
  level: number
  parentKey?: string | number
  expandable: boolean
  treeExpanded: boolean
}

export interface DataTableBodyRow extends DataTableFlatRow {
  expanded: boolean
  cells: DataTableBodyCell[]
}

export interface DataTableTreeRowMeta {
  rowByKey: Map<string | number, DataTableFlatRow>
  rowByObject: Map<Record<string, any>, DataTableFlatRow>
  parentKeyByChild: Map<string | number, string | number>
}

interface UseBodyRowsOptions {
  columns: () => DataTableColumn[]
  sourceRows: () => Record<string, any>[]
  tree: () => boolean
  collapsedTreeRowKeys: ComputedRef<Set<string | number>>
  expandedRowKeySet: ComputedRef<Set<string | number>>
  firstTreeColumnIndex: ComputedRef<number>
  getRowKey: (row: Record<string, any>, rowIndex: number) => string | number
  getTreeChildren: (row: Record<string, any>) => Record<string, any>[]
}

export function useBodyRows({
  columns,
  sourceRows,
  tree,
  collapsedTreeRowKeys,
  expandedRowKeySet,
  firstTreeColumnIndex,
  getRowKey,
  getTreeChildren,
}: UseBodyRowsOptions) {
  const allFlatRows = computed(() => {
    return tree() ? buildTreeFlatRows(sourceRows(), true) : buildRows(sourceRows())
  })

  const visibleFlatRows = computed(() => {
    return tree() ? buildTreeFlatRows(sourceRows(), false) : allFlatRows.value
  })

  const treeRowMeta = computed<DataTableTreeRowMeta>(() => {
    const rowByKey = new Map<string | number, DataTableFlatRow>()
    const rowByObject = new Map<Record<string, any>, DataTableFlatRow>()
    const parentKeyByChild = new Map<string | number, string | number>()

    for (const flatRow of allFlatRows.value) {
      rowByKey.set(flatRow.key, flatRow)
      rowByObject.set(flatRow.row, flatRow)

      if (flatRow.parentKey != null) {
        parentKeyByChild.set(flatRow.key, flatRow.parentKey)
      }
    }

    return {
      rowByKey,
      rowByObject,
      parentKeyByChild,
    }
  })

  const bodyRows = computed(() => {
    const resolvedColumns = columns()
    const rowCount = visibleFlatRows.value.length
    const columnCount = resolvedColumns.length
    const covered = times(rowCount, () => Array(columnCount).fill(false))

    return visibleFlatRows.value.map((flatRow, visibleRowIndex) => {
      const cells: DataTableBodyCell[] = []

      resolvedColumns.forEach((column, columnIndex) => {
        if (covered[visibleRowIndex][columnIndex]) {
          return
        }

        const context = { row: flatRow.row, rowIndex: flatRow.rowIndex, column }
        const maxColSpan = columnCount - columnIndex
        const maxRowSpan = rowCount - visibleRowIndex
        const colSpan = resolveSpan(column.colSpan, context, maxColSpan)
        const rowSpan = resolveSpan(column.rowSpan, context, maxRowSpan)

        if (colSpan === 0 || rowSpan === 0) {
          return
        }

        times(rowSpan, (rowOffset) => {
          times(colSpan, (colOffset) => {
            if (rowOffset === 0 && colOffset === 0) {
              return
            }

            covered[visibleRowIndex + rowOffset][columnIndex + colOffset] = true
          })
        })

        const isTreeColumn = columnIndex === firstTreeColumnIndex.value
        cells.push({
          key: `${column.key ?? column.type ?? columnIndex}-${visibleRowIndex}-${columnIndex}`,
          columnIndex,
          column,
          treeLevel: isTreeColumn ? flatRow.level : undefined,
          treeExpandable: isTreeColumn ? flatRow.expandable : undefined,
          treeExpanded: isTreeColumn ? flatRow.treeExpanded : undefined,
          colSpan: colSpan > 1 ? colSpan : undefined,
          rowSpan: rowSpan > 1 ? rowSpan : undefined,
        })
      })

      return {
        ...flatRow,
        expanded: expandedRowKeySet.value.has(flatRow.key),
        cells,
      }
    })
  })

  function buildRows(sourceRows: Record<string, any>[]): DataTableFlatRow[] {
    return sourceRows.map((row, rowIndex) => ({
      key: getRowKey(row, rowIndex),
      row,
      rowIndex,
      level: 0,
      expandable: false,
      treeExpanded: true,
    }))
  }

  function buildTreeFlatRows(sourceRows: Record<string, any>[], includeCollapsedChildren: boolean): DataTableFlatRow[] {
    const rows: DataTableFlatRow[] = []
    let rowIndex = 0

    function visit(
      source: Record<string, any>[],
      level: number,
      parentKey: string | number | undefined,
      visible: boolean,
    ) {
      for (const row of source) {
        const currentRowIndex = rowIndex
        rowIndex += 1

        const key = getRowKey(row, currentRowIndex)
        const children = getTreeChildren(row)
        const expandable = tree() && children.length > 0
        const treeExpanded = !expandable || !collapsedTreeRowKeys.value.has(key)

        if (includeCollapsedChildren || visible) {
          rows.push({
            key,
            row,
            rowIndex: currentRowIndex,
            level,
            parentKey,
            expandable,
            treeExpanded,
          })
        }

        visit(children, level + 1, key, visible && treeExpanded)
      }
    }

    visit(sourceRows, 0, undefined, true)

    return rows
  }

  function resolveSpan(
    span: DataTableColumnCellSpan | undefined,
    context: InternalDataTableCellContext,
    maxSpan: number,
  ) {
    const resolvedSpan = span == null ? 1 : floor(callOrReturn(span, context))

    if (resolvedSpan <= 0) {
      return 0
    }

    return clamp(resolvedSpan, 1, maxSpan)
  }

  return {
    allFlatRows,
    visibleFlatRows,
    treeRowMeta,
    bodyRows,
  }
}
