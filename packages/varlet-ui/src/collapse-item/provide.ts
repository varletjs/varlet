import type { ComputedRef } from 'vue'
import { useAtParentIndex, useParent } from '../utils/components'
import {
  COLLAPSE_BIND_COLLAPSE_ITEM_KEY,
  COLLAPSE_COUNT_COLLAPSE_ITEM_KEY,
  CollapseProvider,
} from '../collapse/provide'

export interface CollapseItemProvider {
  index: ComputedRef<number>
  name: ComputedRef<string | number | undefined>
  init(accordion: boolean, show: boolean): void
}

export function useCollapse() {
  const { parentProvider, bindParent } = useParent<CollapseProvider, CollapseItemProvider>(
    COLLAPSE_BIND_COLLAPSE_ITEM_KEY
  )
  const { index } = useAtParentIndex(COLLAPSE_COUNT_COLLAPSE_ITEM_KEY)

  if (!parentProvider || !bindParent || !index) {
    throw Error('[Varlet] Collapse: <var-collapse-item/> must in <var-collapse>')
  }

  return {
    index,
    collapse: parentProvider,
    bindCollapse: bindParent,
  }
}
