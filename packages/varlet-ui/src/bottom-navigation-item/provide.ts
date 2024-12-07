import { type ComputedRef } from 'vue'
import { useParent } from '@varlet/use'
import { assert } from '@varlet/shared'
import {
  BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY,
  type BottomNavigationProvider,
} from '../bottom-navigation/provide'

export interface BottomNavigationItemProvider {
  name: ComputedRef<number | string | undefined>
  index: ComputedRef<number>
}

export function useBottomNavigation() {
  const { parentProvider, index, bindParent } = useParent<BottomNavigationProvider, BottomNavigationItemProvider>(
    BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY
  )

  assert(!!bindParent, 'BottomNavigationItem', '<var-bottom-navigation-item/> must in <var-bottom-navigation/>')

  return {
    index,
    bottomNavigation: parentProvider,
    bindBottomNavigation: bindParent,
  }
}
