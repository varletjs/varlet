import type { ComputedRef, Ref } from 'vue'
import { useAtParentIndex, useParent } from '../utils/components'
import {
  INDEX_BAR_BIND_INDEX_ANCHOR_KEY,
  INDEX_BAR_COUNT_INDEX_ANCHOR_KEY,
  IndexBarProvider,
} from '../index-bar/provide'

export interface IndexAnchorProvider {
  index: ComputedRef<number> | null
  name: ComputedRef<string | number | undefined>
  ownTop: Ref<number>
  setOwnTop: () => void
  setDisabled: (value: boolean) => void
}

export function useIndexBar() {
  const { parentProvider, bindParent } = useParent<IndexBarProvider, IndexAnchorProvider>(
    INDEX_BAR_BIND_INDEX_ANCHOR_KEY
  )
  const { index } = useAtParentIndex(INDEX_BAR_COUNT_INDEX_ANCHOR_KEY)

  return {
    index,
    indexBar: parentProvider,
    bindIndexBar: bindParent,
  }
}
