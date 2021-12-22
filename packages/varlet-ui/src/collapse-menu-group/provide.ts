import type { ComputedRef, Ref } from 'vue'
import { useParent } from '../utils/components'
import { COLLAPSE_MENU_BIND_MENU_GROUP_KEY, CollapseMenuProvider } from '../collapse-menu/provide'

export interface CollpaseMenuGroupProvider {
  name: ComputedRef<string | number>
  expanded: Ref<boolean>
}

export function useCollapseMenu() {
  const { bindParent, parentProvider } = useParent<CollapseMenuProvider, CollpaseMenuGroupProvider>(
    COLLAPSE_MENU_BIND_MENU_GROUP_KEY
  )

  if (!parentProvider || !bindParent) {
    throw Error('[Varlet] CollapseMenuGroup: <var-collapse-menu-item/> must in <var-collapse-menu>')
  }

  return {
    collapseMenu: parentProvider,
    bindCollapseMenu: bindParent,
  }
}
