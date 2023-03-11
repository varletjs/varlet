import type { ComputedRef, Ref } from 'vue'
import { useChildren } from '@varlet/use'
import { type IndexAnchorProvider } from '../index-anchor/provide'

export interface IndexBarProvider {
  active: Ref<number | string | undefined>
  sticky: ComputedRef<boolean>
  cssMode: ComputedRef<boolean>
  stickyOffsetTop: ComputedRef<number>
  zIndex: ComputedRef<number | string>
}

export const INDEX_BAR_BIND_INDEX_ANCHOR_KEY = Symbol('INDEX_BAR_BIND_INDEX_ANCHOR_KEY')

export function useIndexAnchors() {
  const { bindChildren, length, childProviders } = useChildren<IndexBarProvider, IndexAnchorProvider>(
    INDEX_BAR_BIND_INDEX_ANCHOR_KEY
  )

  return {
    length,
    indexAnchors: childProviders,
    bindIndexAnchors: bindChildren,
  }
}
