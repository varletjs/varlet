import { useChildren, useParent } from '@varlet/use'
import { error } from '../utils/logger'
import { TABS_ITEMS_BIND_TAB_ITEM_KEY, type TabsItemsProvider } from '../tabs-items/provide'
import { type ComputedRef } from 'vue'
import { type ListProvider } from '../list/provide'

export interface TabItemProvider {
  index: ComputedRef<number>
  name: ComputedRef<string | number | undefined>
  current: ComputedRef<boolean>
  setCurrent: (value: boolean) => void
}

export const TAB_ITEM_BIND_LIST_KEY = Symbol('TAB_ITEM_BIND_LIST_KEY')

export function useTabsItems() {
  const { parentProvider, bindParent, index } = useParent<TabsItemsProvider, TabItemProvider>(
    TABS_ITEMS_BIND_TAB_ITEM_KEY
  )

  if (!bindParent) {
    error('TabItem', '<var-tab-item/> must in <var-tabs-items/>')
  }

  return {
    index,
    tabsItems: parentProvider,
    bindTabsItems: bindParent,
  }
}

export function useLists() {
  const { childProviders, bindChildren, length } = useChildren<TabItemProvider, ListProvider>(TAB_ITEM_BIND_LIST_KEY)

  return {
    length,
    lists: childProviders,
    bindLists: bindChildren,
  }
}
