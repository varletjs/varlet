import { useChildren } from '@varlet/use'
import { CollapseItemProvider } from '../collapse-item/provide'
import { type ComputedRef } from 'vue'

export interface CollapseProvider {
  active: ComputedRef<number | string | Array<number | string> | undefined | null>
  offset: ComputedRef<boolean>
  elevation: ComputedRef<boolean | number | string>
  updateItem: (value: number | string, isExpand: boolean) => void
}

export const COLLAPSE_BIND_COLLAPSE_ITEM_KEY = Symbol('COLLAPSE_BIND_COLLAPSE_ITEM_KEY')

export function useCollapseItem() {
  const { childProviders, length, bindChildren } = useChildren<CollapseProvider, CollapseItemProvider>(
    COLLAPSE_BIND_COLLAPSE_ITEM_KEY
  )

  return {
    length,
    collapseItem: childProviders,
    bindCollapseItem: bindChildren,
  }
}
