import { useChildren } from '@varlet/use'
import type { ComputedRef } from 'vue'
import type { TabProvider } from '../tab/provide'

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

export function useTabList() {
  const { childProviders, bindChildren, length } = useChildren<TabsProvider, TabProvider>(TABS_BIND_TAB_KEY)

  return {
    length,
    tabList: childProviders,
    bindTabList: bindChildren,
  }
}
