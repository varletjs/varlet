import type { ComputedRef } from 'vue'
import { useParent } from '../utils/components'
import { COLLAPSE_MENU_BIND_MENU_GROUP_KEY, CollapseMenuProvider } from '../collapse-menu/provide'

export interface CollpaseMenuGroupProvider {
  name: ComputedRef<string | number>
}

export function useCollapseMenu() {
  const { bindParent, parentProvider } = useParent<CollapseMenuProvider, CollpaseMenuGroupProvider>(
    COLLAPSE_MENU_BIND_MENU_GROUP_KEY
  )

  return {
    collapseMenu: parentProvider,
    bindCollapseMenu: bindParent,
  }
}
