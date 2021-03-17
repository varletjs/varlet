import { ComputedRef } from 'vue'
import { useAtChildrenCounter, useChildren } from '../utils/components'
import { IndexAnchorProvider } from '../index-anchor/provide'

export interface IndexBarProvider {
  active: ComputedRef<number | string | undefined>
  sticky: ComputedRef<boolean>
  stickyOffsetTop: ComputedRef<number>
  zIndex: ComputedRef<number | string>
}

export const INDEX_BAR_BIND_INDEX_ANCHOR_KEY = Symbol('INDEX_BAR_BIND_INDEX_ANCHOR_KEY')
export const INDEX_BAR_COUNT_INDEX_ANCHOR_KEY = Symbol('INDEX_BAR_COUNT_INDEX_ANCHOR_KEY')

export function useIndexAnchors() {
  const { bindChildren, childProviders } = useChildren<IndexBarProvider, IndexAnchorProvider>(
    INDEX_BAR_BIND_INDEX_ANCHOR_KEY
  )
  const { length } = useAtChildrenCounter(INDEX_BAR_COUNT_INDEX_ANCHOR_KEY)

  return {
    length,
    indexAnchors: childProviders,
    bindIndexAnchors: bindChildren,
  }
}
