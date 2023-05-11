import { ComputedRef } from 'vue'
import { useChildren } from '@varlet/use'
import type { TabItemProvider } from '../tab-item/provide'

export interface TabsItemsProvider {
  active: ComputedRef<string | number>
}

export const TABS_ITEMS_BIND_TAB_ITEM_KEY = Symbol('TABS_ITEMS_BIND_TAB_ITEM_KEY')

export function useTabItem() {
  const { bindChildren, childProviders, length } = useChildren<TabsItemsProvider, TabItemProvider>(
    TABS_ITEMS_BIND_TAB_ITEM_KEY
  )

  return {
    length,
    tabItemList: childProviders,
    bindTabItem: bindChildren,
  }
}
