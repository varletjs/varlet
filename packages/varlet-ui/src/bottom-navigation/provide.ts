import { type ComputedRef } from 'vue'
import { useChildren } from '@varlet/use'
import { type BottomNavigationItemProvider } from '../bottom-navigation-item/provide'

export interface BottomNavigationProvider {
  active: ComputedRef<number | string | undefined>
  activeColor: ComputedRef<string | undefined>
  inactiveColor: ComputedRef<string | undefined>
  variant: ComputedRef<boolean | undefined>
  onToggle(value: number | string): void
}

export const BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY = Symbol(
  'BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY',
)

export function useBottomNavigationItems() {
  const { childProviders, length, bindChildren } = useChildren<BottomNavigationProvider, BottomNavigationItemProvider>(
    BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY,
  )

  return {
    length,
    bottomNavigationItems: childProviders,
    bindBottomNavigationItem: bindChildren,
  }
}
