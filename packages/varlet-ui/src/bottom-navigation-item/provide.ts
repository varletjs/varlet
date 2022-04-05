import type { ComputedRef } from 'vue'
import { useAtParentIndex, useParent } from '../utils/components'
import {
  BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY,
  BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY,
  BottomNavigationProvider,
} from '../bottom-navigation/provide'

export interface BottomNavigationItemProvider {
  name: ComputedRef<number | string | undefined>
  index: ComputedRef<number>
}

export function useBottomNavigation() {
  const { parentProvider, bindParent } = useParent<BottomNavigationProvider, BottomNavigationItemProvider>(
    BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY
  )
  const { index } = useAtParentIndex(BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY)

  if (!parentProvider || !bindParent || !index) {
    throw Error('<var-bottom-navigation-item/> must in <var-bottom-navigation/>')
  }

  return {
    index,
    bottomNavigation: parentProvider,
    bindBottomNavigation: bindParent,
  }
}
