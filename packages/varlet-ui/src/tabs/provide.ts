import { ComputedRef } from 'vue'
import { TabProvider } from '../tab/provide'
import { useAtChildrenCounter, useChildren } from '../utils/components'

export interface TabsProvider {
  active: ComputedRef<number | string>
  activeColor: ComputedRef<string | undefined>
  inactiveColor: ComputedRef<string | undefined>
  disabledColor: ComputedRef<string | undefined>
  itemDirection: ComputedRef<string>
  resize(): void
  onTabClick(tabProvider: TabProvider): void
}

export const TABS_BIND_TAB_KEY = Symbol('TABS_BIND_TAB_KEY')
export const TABS_COUNT_TAB_KEY = Symbol('TABS_COUNT_TAB_KEY')

export function useTabList() {
  const { childProviders, bindChildren } = useChildren<TabsProvider, TabProvider>(TABS_BIND_TAB_KEY)
  const { length } = useAtChildrenCounter(TABS_COUNT_TAB_KEY)

  return {
    length,
    tabList: childProviders,
    bindTabList: bindChildren,
  }
}
