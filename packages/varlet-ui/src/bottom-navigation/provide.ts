import { type ComputedRef } from 'vue'
import { type BottomNavigationItemProvider } from '../bottom-navigation-item/provide'
import { useChildren } from '@varlet/use'

export interface BottomNavigationProvider {
  active: ComputedRef<number | string | undefined>
  activeColor: ComputedRef<string | undefined>
  inactiveColor: ComputedRef<string | undefined>
  onToggle(value: number | string): void
}

export const BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY = Symbol(
  'BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY'
)

export function useBottomNavigationItems() {
  const { childProviders, length, bindChildren } = useChildren<BottomNavigationProvider, BottomNavigationItemProvider>(
    BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY
  )

  return {
    length,
    bottomNavigationItems: childProviders,
    bindBottomNavigationItem: bindChildren,
  }
}
