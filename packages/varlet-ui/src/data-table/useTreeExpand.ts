import { computed, watch, type Ref } from 'vue'
import type { DataTableBodyRow } from './useBodyRows'

interface UseTreeExpandOptions {
  tree: () => boolean
  data: () => Record<string, any>[]
  expandedTreeRowKeys: Ref<Array<string | number>>
  getRowKey: (row: Record<string, any>, rowIndex: number) => string | number
  getTreeChildren: (row: Record<string, any>) => Record<string, any>[]
}

export function useTreeExpand({ tree, data, expandedTreeRowKeys, getRowKey, getTreeChildren }: UseTreeExpandOptions) {
  const expandedTreeRowKeySet = computed(() => new Set(expandedTreeRowKeys.value))
  const collapsedTreeRowKeys = computed(() => {
    if (!tree()) {
      return new Set<string | number>()
    }

    const validKeys = collectExpandableRowKeys(data())
    const collapsedKeys = new Set<string | number>()

    for (const key of validKeys) {
      if (!expandedTreeRowKeySet.value.has(key)) {
        collapsedKeys.add(key)
      }
    }

    return collapsedKeys
  })

  watch(
    [data, tree],
    () => {
      syncExpandedTreeRowKeys()
    },
    { immediate: true },
  )

  function toggleTreeRowExpanded(bodyRow: DataTableBodyRow) {
    if (!tree() || !bodyRow.expandable) {
      return
    }

    const target = new Set(expandedTreeRowKeys.value)

    if (target.has(bodyRow.key)) {
      target.delete(bodyRow.key)
    } else {
      target.add(bodyRow.key)
    }

    expandedTreeRowKeys.value = [...target]
  }

  function syncExpandedTreeRowKeys() {
    if (!tree()) {
      expandedTreeRowKeys.value = []
      return
    }

    const validKeys = collectExpandableRowKeys(data())
    expandedTreeRowKeys.value = expandedTreeRowKeys.value.filter((key) => validKeys.has(key))
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
    expandedTreeRowKeySet,
    toggleTreeRowExpanded,
  }
}
