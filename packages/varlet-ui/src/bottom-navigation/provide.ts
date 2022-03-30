import type { ComputedRef } from 'vue'
import type { BottomNavigationItemProvider } from '../bottom-navigation-item/provide'
import { useAtChildrenCounter, useChildren } from '../utils/components'

export interface BottomNavigationProvider {
  active: ComputedRef<number | string | undefined>
  activeColor: ComputedRef<string | undefined>
  inactiveColor: ComputedRef<string | undefined>
  onToggle(value: number | string): void
}

export const BOTTOMNAVIGATION_BIND_BOTTOMNAVIGATIONITEM_KEY = Symbol('BOTTOMNAVIGATION_BIND_BOTTOMNAVIGATIONITEM_KEY')
export const BOTTOMNAVIGATION_COUNT_BOTTOMNAVIGATIONITEM_KEY = Symbol('BOTTOMNAVIGATION_COUNT_BOTTOMNAVIGATIONITEM_KEY')

export function useBottomNavigationItems() {
  const { childProviders, bindChildren } = useChildren<BottomNavigationProvider, BottomNavigationItemProvider>(
    BOTTOMNAVIGATION_BIND_BOTTOMNAVIGATIONITEM_KEY
  )
  const { length } = useAtChildrenCounter(BOTTOMNAVIGATION_COUNT_BOTTOMNAVIGATIONITEM_KEY)

  return {
    length,
    bottomNavigationItems: childProviders,
    bindBottomNavigationItem: bindChildren,
  }
}
