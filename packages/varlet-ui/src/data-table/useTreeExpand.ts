import { ref, watch } from 'vue'
import type { DataTableBodyRow } from './useBodyRows'

interface UseTreeExpandOptions {
  tree: () => boolean
  data: () => Record<string, any>[]
  getRowKey: (row: Record<string, any>, rowIndex: number) => string | number
  getTreeChildren: (row: Record<string, any>) => Record<string, any>[]
}

export function useTreeExpand({ tree, data, getRowKey, getTreeChildren }: UseTreeExpandOptions) {
  const collapsedTreeRowKeys = ref(new Set<string | number>())

  watch(
    data,
    () => {
      syncCollapsedTreeRowKeys()
    },
    { immediate: true },
  )

  function toggleTreeRowExpanded(bodyRow: DataTableBodyRow) {
    if (!tree() || !bodyRow.expandable) {
      return
    }

    const nextCollapsedRows = new Set(collapsedTreeRowKeys.value)

    if (nextCollapsedRows.has(bodyRow.key)) {
      nextCollapsedRows.delete(bodyRow.key)
    } else {
      nextCollapsedRows.add(bodyRow.key)
    }

    collapsedTreeRowKeys.value = nextCollapsedRows
  }

  function syncCollapsedTreeRowKeys() {
    if (!tree()) {
      collapsedTreeRowKeys.value = new Set()
      return
    }

    const validKeys = collectExpandableRowKeys(data())
    const nextCollapsedKeys = new Set<string | number>()

    for (const key of collapsedTreeRowKeys.value) {
      if (validKeys.has(key)) {
        nextCollapsedKeys.add(key)
      }
    }

    collapsedTreeRowKeys.value = nextCollapsedKeys
  }

  function collectExpandableRowKeys(rows: Record<string, any>[]) {
    const keys = new Set<string | number>()
    let rowIndex = 0

    function visit(source: Record<string, any>[]) {
      for (const row of source) {
        const currentRowIndex = rowIndex
        rowIndex += 1

        const children = getTreeChildren(row)

        if (children.length > 0) {
          keys.add(getRowKey(row, currentRowIndex))
        }

        visit(children)
      }
    }

    visit(rows)

    return keys
  }

  return {
    collapsedTreeRowKeys,
    toggleTreeRowExpanded,
  }
}
