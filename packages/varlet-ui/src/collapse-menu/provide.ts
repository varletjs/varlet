import type { ComputedRef } from 'vue'
import { useChildren } from '../utils/components'
import { CollapseMenuItemProvider } from '../collapse-menu-item/provide'

export interface CollapseMenuProvider {
  selectedKeys: ComputedRef<null | string | number | Array<string | number>>
  multiple: ComputedRef<boolean>
  activeColor: string | undefined
  updateItem: (value: string | number) => void
}

export const COLLAPSE_MENU_BIND_MENU_ITEM_KEY = Symbol('COLLAPSE_MENU_BIND_MENU_ITEM_KEY')

export function useCollapseMenuItem() {
  const { bindChildren, childProviders } = useChildren<CollapseMenuProvider, CollapseMenuItemProvider>(
    COLLAPSE_MENU_BIND_MENU_ITEM_KEY
  )

  return {
    collapseMenuItem: childProviders,
    bindCollapseMenuItem: bindChildren,
  }
}
