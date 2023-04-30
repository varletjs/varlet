import type { ComputedRef, Ref } from 'vue'
import { useChildren } from '@varlet/use'
import { type SwipeItemProvider } from '../swipe-item/provide'

export interface SwipeProvider {
  size: Ref<number>
  vertical: ComputedRef<boolean>
}

export const SWIPE_BIND_SWIPE_ITEM_KEY = Symbol('SWIPE_BIND_SWIPE_ITEM_KEY')

export function useSwipeItems() {
  const { childProviders, length, bindChildren } = useChildren<SwipeProvider, SwipeItemProvider>(
    SWIPE_BIND_SWIPE_ITEM_KEY
  )

  return {
    length,
    swipeItems: childProviders,
    bindSwipeItems: bindChildren,
  }
}
