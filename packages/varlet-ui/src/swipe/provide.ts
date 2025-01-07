import type { ComputedRef, Ref } from 'vue'
import { useChildren, useParent } from '@varlet/use'
import { type SwipeItemProvider } from '../swipe-item/provide'

export interface SwipeProvider {
  size: Ref<number>
  currentIndex: Ref<number>
  vertical: ComputedRef<boolean>
}

export interface SwipeResizeListenerProvider {
  onResize(): void
}

export const SWIPE_BIND_SWIPE_ITEM_KEY = Symbol('SWIPE_BIND_SWIPE_ITEM_KEY')

export const SWIPE_RESIZE_DISPATCHER_BIND_SWIPE_RESIZE_LISTENER_KEY = Symbol(
  'SWIPE_RESIZE_DISPATCHER_BIND_SWIPE_RESIZE_LISTENER_KEY',
)

export function useSwipeItems() {
  const { childProviders, length, bindChildren } = useChildren<SwipeProvider, SwipeItemProvider>(
    SWIPE_BIND_SWIPE_ITEM_KEY,
  )

  return {
    length,
    swipeItems: childProviders,
    bindSwipeItems: bindChildren,
  }
}

export function useSwipeResizeListeners() {
  const { childProviders, bindChildren } = useChildren<null, SwipeResizeListenerProvider>(
    SWIPE_RESIZE_DISPATCHER_BIND_SWIPE_RESIZE_LISTENER_KEY,
  )

  return {
    swipeResizeListeners: childProviders,
    bindSwipeResizeListeners: bindChildren,
  }
}

export function useSwipeResizeDispatcher() {
  const { parentProvider, bindParent } = useParent<null, SwipeResizeListenerProvider>(
    SWIPE_RESIZE_DISPATCHER_BIND_SWIPE_RESIZE_LISTENER_KEY,
  )

  return {
    swipeResizeDispatcher: parentProvider,
    bindSwipeResizeDispatcher: bindParent,
  }
}
