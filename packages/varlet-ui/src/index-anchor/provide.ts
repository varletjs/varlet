import type { ComputedRef } from 'vue'
import { useParent } from '@varlet/use'
import { assert } from '@varlet/shared'
import { INDEX_BAR_BIND_INDEX_ANCHOR_KEY, type IndexBarProvider } from '../index-bar/provide'

export interface IndexAnchorProvider {
  index: ComputedRef<number> | null
  name: ComputedRef<string | number | undefined>
  setDisabled: (value: boolean) => void
  getOffsetTop: () => number
}

export function useIndexBar() {
  const { parentProvider, index, bindParent } = useParent<IndexBarProvider, IndexAnchorProvider>(
    INDEX_BAR_BIND_INDEX_ANCHOR_KEY
  )

  assert(!!bindParent, 'IndexAnchor', 'You should use this component in "IndexBar"')

  return {
    index,
    indexBar: parentProvider,
    bindIndexBar: bindParent,
  }
}
