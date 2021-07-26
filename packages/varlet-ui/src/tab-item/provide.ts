import type { ComputedRef } from 'vue'
import { useAtParentIndex, useParent } from '../utils/components'
import { TABS_ITEMS_BIND_TAB_ITEM_KEY, TABS_ITEMS_COUNT_TAB_ITEM_KEY, TabsItemsProvider } from '../tabs-items/provide'

export interface TabItemProvider {
  index: ComputedRef<number>
  name: ComputedRef<string | number | undefined>
  setCurrent: (value: boolean) => void
}

export function useTabsItems() {
  const { parentProvider, bindParent } = useParent<TabsItemsProvider, TabItemProvider>(TABS_ITEMS_BIND_TAB_ITEM_KEY)
  const { index } = useAtParentIndex(TABS_ITEMS_COUNT_TAB_ITEM_KEY)

  if (!parentProvider || !bindParent || !index) {
    throw Error('<var-tab-item/> must in <var-tabs-items/>')
  }

  return {
    index,
    tabsItems: parentProvider,
    bindTabsItems: bindParent,
  }
}
