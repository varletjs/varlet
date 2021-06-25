import type { ComputedRef } from 'vue'
import { useAtChildrenCounter, useChildren } from '../utils/components'
import type { TabItemProvider } from '../tab-item/provide'

export interface TabsItemsProvider {
  active: ComputedRef<number | string>
  resize(): void
  resetTransitionHeight(): void
}

export const TABS_ITEMS_BIND_TAB_ITEM_KEY = Symbol('TABS_ITEMS_BIND_TAB_ITEM_KEY')
export const TABS_ITEMS_COUNT_TAB_ITEM_KEY = Symbol('TABS_ITEMS_COUNT_TAB_ITEM_KEY')

export function useTabItem() {
  const { bindChildren, childProviders } = useChildren<TabsItemsProvider, TabItemProvider>(TABS_ITEMS_BIND_TAB_ITEM_KEY)
  const { length } = useAtChildrenCounter(TABS_ITEMS_COUNT_TAB_ITEM_KEY)

  return {
    length,
    tabItemList: childProviders,
    bindTabItem: bindChildren,
  }
}
