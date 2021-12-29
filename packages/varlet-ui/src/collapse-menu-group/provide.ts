import type { ComputedRef, Ref } from 'vue'
import { useChildren, useParent } from '../utils/components'
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

const COLLAPSE_MENU_GROUP_SELF = Symbol('COLLAPSE_MENU_GROUP_SELF')

export interface collapseMenuGroupParentProvider {
  name: ComputedRef<string | number>
  updateContentHeight: (value: number) => void
}

export interface collapseMenuGroupChildrenProvider {
  name: ComputedRef<string | number>
}

export function useCollapseMenuGroupParent() {
  const { bindParent, parentProvider } = useParent<collapseMenuGroupParentProvider, collapseMenuGroupChildrenProvider>(
    COLLAPSE_MENU_GROUP_SELF
  )

  return {
    bindGroupParent: bindParent,
    groupParent: parentProvider,
  }
}

export function useCollapseMenuGroupChildren() {
  const { bindChildren, childProviders } = useChildren<
    collapseMenuGroupParentProvider,
    collapseMenuGroupChildrenProvider
  >(COLLAPSE_MENU_GROUP_SELF)

  return {
    bindGroupChildren: bindChildren,
    groupChildren: childProviders,
  }
}
