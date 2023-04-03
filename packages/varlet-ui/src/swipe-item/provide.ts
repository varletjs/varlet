import { type ComputedRef } from 'vue'
import { useParent } from '@varlet/use'
import { error } from '../utils/logger'
import { type SwipeProvider, SWIPE_BIND_SWIPE_ITEM_KEY } from '../swipe/provide'

export interface SwipeItemProvider {
  index: ComputedRef<number>
  setTranslate(x: number): void
}

export function useSwipe() {
  const { bindParent, index, parentProvider } = useParent<SwipeProvider, SwipeItemProvider>(SWIPE_BIND_SWIPE_ITEM_KEY)

  if (!bindParent) {
    error('SwipeItem', '<var-swipe-item/> must in <var-swipe/>')
  }

  return {
    index,
    swipe: parentProvider,
    bindSwipe: bindParent,
  }
}
