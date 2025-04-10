import { isRef, onBeforeUnmount, onDeactivated, unref, watch, type Ref, type WatchStopHandle } from 'vue'
import { inBrowser, isFunction } from '@varlet/shared'
import { onSmartMounted } from './onSmartMounted.js'

export type UseEventListenerTarget = EventTarget | Ref<EventTarget | undefined | null> | (() => EventTarget)

export interface UseEventListenerOptions {
  capture?: boolean
  passive?: boolean
}

export function useEventListener<T extends keyof DocumentEventMap>(
  target: UseEventListenerTarget,
  type: T,
  listener: (event: DocumentEventMap[T]) => void,
  options?: UseEventListenerOptions,
): () => void

export function useEventListener(
  target: UseEventListenerTarget,
  type: string,
  listener: EventListener,
  options?: UseEventListenerOptions,
): () => void

export function useEventListener(
  target: UseEventListenerTarget,
  type: string,
  listener: EventListener,
  options: UseEventListenerOptions = {},
) {
  if (!inBrowser()) {
    return
  }

  const { passive = false, capture = false } = options
  let listening = false
  let cleaned = false

  const getElement = (target: UseEventListenerTarget | null | undefined) =>
    isFunction(target) ? target() : unref(target)

  const add = (target?: UseEventListenerTarget | null) => {
    if (listening || cleaned) {
      return
    }

    const element = getElement(target)

    if (element) {
      element.addEventListener(type, listener, {
        passive,
        capture,
      })

      listening = true
    }
  }

  const remove = (target?: UseEventListenerTarget | null) => {
    if (!listening || cleaned) {
      return
    }

    const element = getElement(target)

    if (element) {
      element.removeEventListener(type, listener, {
        capture,
      })

      listening = false
    }
  }

  let watchStopHandle: WatchStopHandle

  if (isRef(target)) {
    watchStopHandle = watch(
      () => target.value,
      (newValue, oldValue) => {
        remove(oldValue)
        add(newValue)
      },
    )
  }

  const cleanup = () => {
    watchStopHandle?.()
    remove(target)
    cleaned = true
  }

  onSmartMounted(() => {
    add(target)
  })

  onBeforeUnmount(() => {
    remove(target)
  })

  onDeactivated(() => {
    remove(target)
  })

  return cleanup
}
