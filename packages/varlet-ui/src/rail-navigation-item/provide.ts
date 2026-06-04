import { assert } from '@varlet/shared'
import { useParent } from '@varlet/use'
import { type ComputedRef } from 'vue'
import { RAIL_NAVIGATION_BIND_RAIL_NAVIGATION_ITEM_KEY, type RailNavigationProvider } from '../rail-navigation/provide'

export interface RailNavigationItemProvider {
  disabled: ComputedRef<boolean>
}

export function useRailNavigation() {
  const { parentProvider, index, bindParent } = useParent<RailNavigationProvider, RailNavigationItemProvider>(
    RAIL_NAVIGATION_BIND_RAIL_NAVIGATION_ITEM_KEY,
  )

  assert(!!bindParent, 'RailNavigationItem', '<var-rail-navigation-item/> must in <var-rail-navigation/>')

  return {
    index,
    railNavigation: parentProvider,
    bindRailNavigation: bindParent,
  }
}
