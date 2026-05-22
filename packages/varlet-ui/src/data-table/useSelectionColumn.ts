import { computed, type Ref } from 'vue'
import type { DataTableColumn, DataTableSelectionColumn } from './props'
import type { DataTableBodyRow, DataTableFlatRow, DataTableTreeRowMeta } from './useBodyRows'

interface DataTableTreeSelectionState {
  checked: boolean
  indeterminate: boolean
  selectable: boolean
}

interface UseColumnSelectionOptions {
  columns: () => DataTableColumn[]
  tree: () => boolean
  cascade: () => boolean
  pagedData: () => Record<string, any>[]
  allFlatRows: () => DataTableFlatRow[]
  treeRowMeta: () => DataTableTreeRowMeta
  checkedRowKeys: Ref<Array<string | number>>
  isSelectionColumn: (column: DataTableColumn) => column is DataTableSelectionColumn
  getTreeChildren: (row: Record<string, any>) => Record<string, any>[]
}

export function useSelectionColumn({
  columns,
  tree,
  cascade,
  pagedData,
  allFlatRows,
  treeRowMeta,
  checkedRowKeys,
  isSelectionColumn,
  getTreeChildren,
}: UseColumnSelectionOptions) {
  const selectionColumn = computed(() => columns().find(isSelectionColumn))

  const cascadeSelectionEnabled = computed(() => {
    return tree() && cascade() && !!selectionColumn.value && isMultipleSelectionColumn(selectionColumn.value)
  })

  const checkedRowKeySet = computed(() => new Set(checkedRowKeys.value))

  const treeSelectionStates = computed(() => {
    const states = new Map<string | number, { checked: boolean; indeterminate: boolean }>()
    const column = selectionColumn.value

    if (!column) {
      return states
    }

    for (const row of pagedData()) {
      visit(row)
    }

    function visit(row: Record<string, any>): DataTableTreeSelectionState {
      const flatRow = treeRowMeta().rowByObject.get(row)

      if (!flatRow) {
        return {
          checked: false,
          indeterminate: false,
          selectable: false,
        }
      }

      const children = getTreeChildren(row)
      const childStates = children.map(visit)
      const selectable = isRowSelectable(row, flatRow.rowIndex, column)
      const selfChecked = checkedRowKeySet.value.has(flatRow.key)

      if (!cascadeSelectionEnabled.value || childStates.length === 0) {
        const state = {
          checked: selfChecked,
          indeterminate: false,
        }

        states.set(flatRow.key, state)

        return {
          ...state,
          selectable,
        }
      }

      const selectableChildren = childStates.filter((childState) => childState.selectable)

      const allChildrenChecked =
        selectableChildren.length > 0 && selectableChildren.every((childState) => childState.checked)

      const someChildrenSelected = selectableChildren.some(
        (childState) => childState.checked || childState.indeterminate,
      )

      const state = {
        checked: selectable ? allChildrenChecked : false,
        indeterminate: !allChildrenChecked && someChildrenSelected,
      }

      states.set(flatRow.key, state)

      return {
        ...state,
        selectable: selectable || selectableChildren.length > 0,
      }
    }

    return states
  })

  const currentSelectableRows = computed(() => {
    const column = selectionColumn.value

    if (!column) {
      return []
    }

    return allFlatRows().filter((flatRow) => isRowSelectable(flatRow.row, flatRow.rowIndex, column))
  })

  const allCurrentRowsSelected = computed(() => {
    return (
      currentSelectableRows.value.length > 0 &&
      currentSelectableRows.value.every((flatRow) => {
        return isRowKeySelected(flatRow.key)
      })
    )
  })

  const someCurrentRowsSelected = computed(() => {
    return (
      currentSelectableRows.value.some(
        (flatRow) => isRowKeySelected(flatRow.key) || isRowKeyIndeterminate(flatRow.key),
      ) && !allCurrentRowsSelected.value
    )
  })

  function isMultipleSelectionColumn(column: DataTableSelectionColumn) {
    return column.multiple !== false
  }

  function isSelectionColumnSelectable(column: DataTableSelectionColumn) {
    return column.selectable !== false
  }

  function isRowSelectable(row: Record<string, any>, rowIndex: number, column?: DataTableSelectionColumn) {
    if (!column?.selectable || column.selectable === true) {
      return true
    }

    return column.selectable({
      row,
      rowIndex,
    })
  }

  function updateCheckedRowKeys(value: Array<string | number>) {
    checkedRowKeys.value = value
  }

  function isRowKeySelected(key: string | number) {
    return treeSelectionStates.value.get(key)?.checked ?? checkedRowKeySet.value.has(key)
  }

  function isRowKeyIndeterminate(key: string | number) {
    return treeSelectionStates.value.get(key)?.indeterminate ?? false
  }

  function toggleRowSelection(bodyRow: DataTableBodyRow, selected: boolean) {
    const column = selectionColumn.value

    if (!column || !isSelectionColumnSelectable(column) || !isRowSelectable(bodyRow.row, bodyRow.rowIndex, column)) {
      return
    }

    if (!isMultipleSelectionColumn(column)) {
      updateCheckedRowKeys(
        selected
          ? [bodyRow.key]
          : checkedRowKeys.value.filter((key) => {
              return key !== bodyRow.key
            }),
      )
      return
    }

    const nextKeys = new Set(checkedRowKeys.value)

    if (cascadeSelectionEnabled.value) {
      for (const key of collectSelectableBranchKeys(bodyRow.row)) {
        if (selected) {
          nextKeys.add(key)
        } else {
          nextKeys.delete(key)
        }
      }

      syncAncestorSelection(nextKeys, bodyRow.key)
    } else if (selected) {
      nextKeys.add(bodyRow.key)
    } else {
      nextKeys.delete(bodyRow.key)
    }

    updateCheckedRowKeys([...nextKeys])
  }

  function toggleAllCurrentRows(selected: boolean) {
    const column = selectionColumn.value

    if (!column || !isSelectionColumnSelectable(column) || !isMultipleSelectionColumn(column)) {
      return
    }

    const nextKeys = new Set(checkedRowKeys.value)

    for (const flatRow of currentSelectableRows.value) {
      if (selected) {
        nextKeys.add(flatRow.key)
      } else {
        nextKeys.delete(flatRow.key)
      }
    }

    updateCheckedRowKeys([...nextKeys])
  }

  function collectSelectableBranchKeys(row: Record<string, any>) {
    const column = selectionColumn.value
    const keys: Array<string | number> = []

    if (!column) {
      return keys
    }

    function visit(currentRow: Record<string, any>) {
      const flatRow = treeRowMeta().rowByObject.get(currentRow)

      if (!flatRow) {
        return
      }

      if (isRowSelectable(currentRow, flatRow.rowIndex, column)) {
        keys.push(flatRow.key)
      }

      for (const child of getTreeChildren(currentRow)) {
        visit(child)
      }
    }

    visit(row)

    return keys
  }

  function shouldAncestorBeChecked(row: Record<string, any>, nextKeys: Set<string | number>): boolean {
    const column = selectionColumn.value
    const flatRow = treeRowMeta().rowByObject.get(row)

    if (!column || !flatRow) {
      return false
    }

    const selectable = isRowSelectable(row, flatRow.rowIndex, column)
    const children = getTreeChildren(row)

    if (!children.length) {
      return selectable ? nextKeys.has(flatRow.key) : true
    }

    return (
      selectable &&
      children.every((child) => {
        return shouldAncestorBeChecked(child, nextKeys)
      })
    )
  }

  function syncAncestorSelection(nextKeys: Set<string | number>, key: string | number) {
    let parentKey = treeRowMeta().parentKeyByChild.get(key)

    while (parentKey != null) {
      const parentRow = treeRowMeta().rowByKey.get(parentKey)

      if (!parentRow) {
        break
      }

      if (shouldAncestorBeChecked(parentRow.row, nextKeys)) {
        nextKeys.add(parentKey)
      } else {
        nextKeys.delete(parentKey)
      }

      parentKey = treeRowMeta().parentKeyByChild.get(parentKey)
    }
  }

  return {
    currentSelectableRows,
    allCurrentRowsSelected,
    someCurrentRowsSelected,
    isMultipleSelectionColumn,
    isSelectionColumnSelectable,
    isRowSelectable,
    isRowKeySelected,
    isRowKeyIndeterminate,
    toggleRowSelection,
    toggleAllCurrentRows,
  }
}
