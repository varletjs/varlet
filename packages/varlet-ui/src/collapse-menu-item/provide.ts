import type { ComputedRef } from 'vue'
import { useParent } from '../utils/components'
import { COLLAPSE_MENU_BIND_MENU_ITEM_KEY, CollapseMenuProvider } from '../collapse-menu/provide'

export interface CollapseMenuItemProvider {
  itemKey: ComputedRef<string | number>
}

export function useCollapseMenu() {
  const { bindParent, parentProvider } = useParent<CollapseMenuProvider, CollapseMenuItemProvider>(
    COLLAPSE_MENU_BIND_MENU_ITEM_KEY
  )

  if (!parentProvider || !bindParent) {
    throw Error('no parent')
  }

  return {
    collapseMenu: parentProvider,
    bindCollapseMenu: bindParent,
  }
}
