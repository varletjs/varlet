import { useParent } from '@varlet/use'
import { TAB_ITEM_BIND_LIST_KEY, type TabItemProvider } from '../tab-item/provide'

export interface ListProvider {}

export function useTabItem() {
  const { parentProvider, bindParent, index } = useParent<TabItemProvider, ListProvider>(TAB_ITEM_BIND_LIST_KEY)

  return {
    index,
    tabItem: parentProvider,
    bindTabItem: bindParent,
  }
}
