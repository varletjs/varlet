import { useChildren } from '@varlet/use'
import { type ComputedRef } from 'vue'
import { type RailNavigationItemProvider } from '../rail-navigation-item/provide'

export interface RailNavigationProvider {
  active: ComputedRef<number | string>
  ripple: ComputedRef<boolean>
  onToggle(active: number | string): void
}

export const RAIL_NAVIGATION_BIND_RAIL_NAVIGATION_ITEM_KEY = Symbol('RAIL_NAVIGATION_BIND_RAIL_NAVIGATION_ITEM_KEY')

export function useRailNavigationItems() {
  const { bindChildren } = useChildren<RailNavigationProvider, RailNavigationItemProvider>(
    RAIL_NAVIGATION_BIND_RAIL_NAVIGATION_ITEM_KEY,
  )

  return {
    bindRailNavigationItem: bindChildren,
  }
}
