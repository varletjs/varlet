import type { ComputedRef } from 'vue'
import { useAtParentIndex, useParent } from '../utils/components'
import { TABS_BIND_TAB_KEY, TABS_COUNT_TAB_KEY, TabsProvider } from '../tabs/provide'

export interface TabProvider {
  name: ComputedRef<number | string | undefined>
  index: ComputedRef<number>
  disabled: ComputedRef<boolean>
  element: ComputedRef<HTMLElement | null>
}

export function useTabs() {
  const { parentProvider, bindParent } = useParent<TabsProvider, TabProvider>(TABS_BIND_TAB_KEY)
  const { index } = useAtParentIndex(TABS_COUNT_TAB_KEY)

  if (!parentProvider || !bindParent || !index) {
    throw Error('<var-tab/> must in <var-tabs/>')
  }

  return {
    index,
    tabs: parentProvider,
    bindTabs: bindParent,
  }
}
