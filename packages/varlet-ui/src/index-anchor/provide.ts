import type { ComputedRef, Ref } from 'vue'
import { useParent } from '@varlet/use'
import { throwError } from '../utils/logger'
import { INDEX_BAR_BIND_INDEX_ANCHOR_KEY, type IndexBarProvider } from '../index-bar/provide'

export interface IndexAnchorProvider {
  index: ComputedRef<number> | null
  name: ComputedRef<string | number | undefined>
  ownTop: Ref<number>
  setOwnTop: () => void
  setDisabled: (value: boolean) => void
}

export function useIndexBar() {
  const { parentProvider, index, bindParent } = useParent<IndexBarProvider, IndexAnchorProvider>(
    INDEX_BAR_BIND_INDEX_ANCHOR_KEY
  )

  if (!bindParent) {
    throwError('IndexAnchor', 'You should use this component in "IndexBar"')
  }

  return {
    index,
    indexBar: parentProvider,
    bindIndexBar: bindParent,
  }
}
