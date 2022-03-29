import type { ComputedRef } from 'vue'
import type { BottomNavigationItemProvider } from '../bottom-navigation-item/provide'
import { useAtChildrenCounter, useChildren } from '../utils/components'

export interface BottomNavigationProvider {
  active: ComputedRef<number | string | undefined>
  fixed: ComputedRef<boolean>
  border: ComputedRef<boolean>
  zIndex: ComputedRef<number | string>
  activeColor: ComputedRef<string | undefined>
  inactiveColor: ComputedRef<string | undefined>
  onToggle(value: number | string): void
}

export const BOTTOMNAVIGATION_BIND_BOTTOMNAVIGATIONITEM_KEY = Symbol('BOTTOMNAVIGATION_BIND_BOTTOMNAVIGATIONITEM_KEY')
export const BOTTOMNAVIGATIONITEM_INDEX_KEY = Symbol('BOTTOMNAVIGATIONITEM_INDEX_KEY')

export function useBottomNavigationItem() {
  const { childProviders, bindChildren } = useChildren<BottomNavigationProvider, BottomNavigationItemProvider>(
    BOTTOMNAVIGATION_BIND_BOTTOMNAVIGATIONITEM_KEY
  )
  useAtChildrenCounter(BOTTOMNAVIGATIONITEM_INDEX_KEY)

  return {
    bottomNavigationItems: childProviders,
    bindBottomNavigationItem: bindChildren,
  }
}
