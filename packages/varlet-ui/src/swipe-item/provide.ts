import type { ComputedRef } from 'vue'
import { useAtParentIndex, useParent } from '../utils/components'
import { SWIPE_BIND_SWIPE_ITEM_KEY, SWIPE_COUNT_SWIPE_ITEM_KEY, SwipeProvider } from '../swipe/provide'

export interface SwipeItemProvider {
  index: ComputedRef<number>
  setTranslate(x: number): void
}

export function useSwipe() {
  const { bindParent, parentProvider } = useParent<SwipeProvider, SwipeItemProvider>(SWIPE_BIND_SWIPE_ITEM_KEY)
  const { index } = useAtParentIndex(SWIPE_COUNT_SWIPE_ITEM_KEY)

  if (!bindParent || !parentProvider || !index) {
    throw Error('<var-swipe-item/> must in <var-swipe/>')
  }

  return {
    index,
    swipe: parentProvider,
    bindSwipe: bindParent,
  }
}
