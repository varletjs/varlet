import type { ComputedRef } from 'vue'
import { useAtParentIndex, useParent } from '../utils/components'
import {
  BOTTOMNAVIGATION_BIND_BOTTOMNAVIGATIONITEM_KEY,
  BOTTOMNAVIGATION_COUNT_BOTTOMNAVIGATIONITEM_KEY,
  BottomNavigationProvider,
} from '../bottom-navigation/provide'

export interface BottomNavigationItemProvider {
  name: ComputedRef<number | string | undefined>
  index: ComputedRef<number>
}

export function useBottomNavigation() {
  const { parentProvider, bindParent } = useParent<BottomNavigationProvider, BottomNavigationItemProvider>(
    BOTTOMNAVIGATION_BIND_BOTTOMNAVIGATIONITEM_KEY
  )
  const { index } = useAtParentIndex(BOTTOMNAVIGATION_COUNT_BOTTOMNAVIGATIONITEM_KEY)

  if (!parentProvider || !bindParent || !index) {
    throw Error('<var-bottom-navigation-item/> must in <var-bottom-navigation/>')
  }

  return {
    index,
    bottomNavigation: parentProvider,
    bindBottomNavigation: bindParent,
  }
}
