import { type ComputedRef } from 'vue'
import { useChildren } from '@varlet/use'
import { CollapseItemProvider } from '../collapse-item/provide'

export interface CollapseProvider {
  offset: ComputedRef<boolean>
  divider: ComputedRef<boolean>
  accordion: ComputedRef<boolean>
  elevation: ComputedRef<boolean | number | string>
  updateItem: (value: number | string, isExpand: boolean) => void
}

export const COLLAPSE_BIND_COLLAPSE_ITEM_KEY = Symbol('COLLAPSE_BIND_COLLAPSE_ITEM_KEY')

export function useCollapseItem() {
  const { childProviders, length, bindChildren } = useChildren<CollapseProvider, CollapseItemProvider>(
    COLLAPSE_BIND_COLLAPSE_ITEM_KEY,
  )

  return {
    length,
    collapseItems: childProviders,
    bindCollapseItems: bindChildren,
  }
}
