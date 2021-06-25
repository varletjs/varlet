import type { ComputedRef, Ref } from 'vue'
import { useAtChildrenCounter, useChildren } from '../utils/components'
import type { SwipeItemProvider } from '../swipe-item/provide'

export interface SwipeProvider {
  size: Ref<number>
  vertical: ComputedRef<boolean>
}

export const SWIPE_BIND_SWIPE_ITEM_KEY = Symbol('SWIPE_BIND_SWIPE_ITEM_KEY')
export const SWIPE_COUNT_SWIPE_ITEM_KEY = Symbol('SWIPE_COUNT_SWIPE_ITEM_KEY')

export function useSwipeItems() {
  const { childProviders, bindChildren } = useChildren<SwipeProvider, SwipeItemProvider>(SWIPE_BIND_SWIPE_ITEM_KEY)
  const { length } = useAtChildrenCounter(SWIPE_COUNT_SWIPE_ITEM_KEY)

  return {
    length,
    swipeItems: childProviders,
    bindSwipeItems: bindChildren,
  }
}
