import { assert } from '@varlet/shared'
import { useParent } from '@varlet/use'
import { RAIL_NAVIGATION_BIND_RAIL_NAVIGATION_ITEM_KEY, type RailNavigationProvider } from '../rail-navigation/provide'

export function useRailNavigation() {
  const { parentProvider, index, bindParent } = useParent<RailNavigationProvider, null>(
    RAIL_NAVIGATION_BIND_RAIL_NAVIGATION_ITEM_KEY,
  )

  assert(!!bindParent, 'RailNavigationItem', '<var-rail-navigation-item/> must in <var-rail-navigation/>')

  return {
    index,
    railNavigation: parentProvider,
    bindRailNavigation: bindParent,
  }
}
