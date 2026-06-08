import { useChildren } from '@varlet/use'
import { type ComputedRef } from 'vue'

export interface RailNavigationProvider {
  active: ComputedRef<number | string>
  ripple: ComputedRef<boolean>
  onToggle(value: number | string): void
}

export const RAIL_NAVIGATION_BIND_RAIL_NAVIGATION_ITEM_KEY = Symbol('RAIL_NAVIGATION_BIND_RAIL_NAVIGATION_ITEM_KEY')

export function useRailNavigationItems() {
  const { bindChildren } = useChildren<RailNavigationProvider, null>(RAIL_NAVIGATION_BIND_RAIL_NAVIGATION_ITEM_KEY)

  return {
    bindRailNavigationItem: bindChildren,
  }
}
