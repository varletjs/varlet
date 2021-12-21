import type { ComputedRef } from 'vue'
import { useChildren } from '../utils/components'
import { CollapseMenuItemProvider } from '../collapse-menu-item/provide'
import { CollpaseMenuGroupProvider } from '../collapse-menu-group/provide'

export interface CollapseMenuProvider {
  selectedKeys: ComputedRef<Array<string | number>>
  multiple: ComputedRef<boolean>
  accordion: ComputedRef<boolean>
  activeColor: string | undefined
  updateItem: (value: string | number) => void
}

export const COLLAPSE_MENU_BIND_MENU_ITEM_KEY = Symbol('COLLAPSE_MENU_BIND_MENU_ITEM_KEY')
export const COLLAPSE_MENU_BIND_MENU_GROUP_KEY = Symbol('COLLAPSE_MENU_BIND_MENU_GROUP_KEY')

export function useCollapseMenuItem() {
  const { bindChildren, childProviders } = useChildren<CollapseMenuProvider, CollapseMenuItemProvider>(
    COLLAPSE_MENU_BIND_MENU_ITEM_KEY
  )

  return {
    collapseMenuItem: childProviders,
    bindCollapseMenuItem: bindChildren,
  }
}

export function useCollapseMenuGroup() {
  const { bindChildren, childProviders } = useChildren<CollapseMenuProvider, CollpaseMenuGroupProvider>(
    COLLAPSE_MENU_BIND_MENU_GROUP_KEY
  )

  return {
    collapseMenuGroup: childProviders,
    bindCollapseMenuGroup: bindChildren,
  }
}
