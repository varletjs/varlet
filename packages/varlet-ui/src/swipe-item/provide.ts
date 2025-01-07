import { type ComputedRef } from 'vue'
import { assert } from '@varlet/shared'
import { useParent } from '@varlet/use'
import { SWIPE_BIND_SWIPE_ITEM_KEY, type SwipeProvider } from '../swipe/provide'

export interface SwipeItemProvider {
  index: ComputedRef<number>
  isFocusing: ComputedRef<boolean>
  setTranslate(x: number): void
}

export function useSwipe() {
  const { bindParent, index, parentProvider } = useParent<SwipeProvider, SwipeItemProvider>(SWIPE_BIND_SWIPE_ITEM_KEY)

  assert(!!bindParent, 'SwipeItem', '<var-swipe-item/> must in <var-swipe/>')

  return {
    index,
    swipe: parentProvider,
    bindSwipe: bindParent,
  }
}
