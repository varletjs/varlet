import type { ComputedRef } from 'vue'
import type { BottomNavigationItemProvider } from '../bottom-navigation-item/provide'
import { useAtChildrenCounter, useChildren } from '../utils/components'

export interface BottomNavigationProvider {
  active: ComputedRef<number | string | undefined>
  activeColor: ComputedRef<string | undefined>
  inactiveColor: ComputedRef<string | undefined>
  onToggle(value: number | string): void
}

export const BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY = Symbol(
  'BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY'
)
export const BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY = Symbol(
  'BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY'
)

export function useBottomNavigationItems() {
  const { childProviders, bindChildren } = useChildren<BottomNavigationProvider, BottomNavigationItemProvider>(
    BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY
  )
  const { length } = useAtChildrenCounter(BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY)

  return {
    length,
    bottomNavigationItems: childProviders,
    bindBottomNavigationItem: bindChildren,
  }
}
