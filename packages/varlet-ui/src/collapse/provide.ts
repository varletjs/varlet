import type { ComputedRef } from 'vue'
import { useAtChildrenCounter, useChildren } from '../utils/components'
import { CollapseItemProvider } from '../collapse-item/provide'

export interface CollapseProvider {
  active: ComputedRef<number | string | Array<number | string> | undefined | null>
  offset: ComputedRef<boolean>
  updateItem: (value: number | string | undefined, isExpand: boolean) => void
}

export const COLLAPSE_BIND_COLLAPSE_ITEM_KEY = Symbol('COLLAPSE_BIND_COLLAPSE_ITEM_KEY')
export const COLLAPSE_COUNT_COLLAPSE_ITEM_KEY = Symbol('COLLAPSE_COUNT_COLLAPSE_ITEM_KEY')

export function useCollapseItem() {
  const { bindChildren, childProviders } = useChildren<CollapseProvider, CollapseItemProvider>(
    COLLAPSE_BIND_COLLAPSE_ITEM_KEY
  )
  const { length } = useAtChildrenCounter(COLLAPSE_COUNT_COLLAPSE_ITEM_KEY)

  return {
    length,
    collapseItem: childProviders,
    bindCollapseItem: bindChildren,
  }
}
