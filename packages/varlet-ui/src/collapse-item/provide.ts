import { useParent } from '@varlet/use'
import { error } from '../utils/logger'
import { COLLAPSE_BIND_COLLAPSE_ITEM_KEY, CollapseProvider } from '../collapse/provide'
import { type ComputedRef } from 'vue'

export interface CollapseItemProvider {
  index: ComputedRef<number>
  name: ComputedRef<string | number | undefined>
  disabled: ComputedRef<boolean>
  init(show: boolean): void
}

export function useCollapse() {
  const { parentProvider, index, bindParent } = useParent<CollapseProvider, CollapseItemProvider>(
    COLLAPSE_BIND_COLLAPSE_ITEM_KEY
  )

  if (!bindParent) {
    error('Collapse', '<var-collapse-item/> must in <var-collapse>')
  }

  return {
    index,
    collapse: parentProvider,
    bindCollapse: bindParent,
  }
}
