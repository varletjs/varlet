import { inBrowser, isFunction } from '@varlet/shared'
import { isRef, onBeforeUnmount, onDeactivated, unref, watch, type Ref, type WatchStopHandle } from 'vue'
import { onSmartMounted } from './onSmartMounted.js'

export type UseResizeObserverTarget = Element | Ref<Element | undefined | null> | (() => Element | undefined | null)

export function useResizeObserver(target: UseResizeObserverTarget, callback: ResizeObserverCallback) {
  if (!inBrowser() || typeof ResizeObserver === 'undefined') {
    return
  }

  let observer: ResizeObserver | undefined
  let observedElement: Element | undefined | null
  let cleaned = false

  const getElement = (target: UseResizeObserverTarget) => (isFunction(target) ? target() : unref(target))

  const observe = (target: UseResizeObserverTarget) => {
    if (cleaned) {
      return
    }

    const element = getElement(target)

    if (!element || element === observedElement) {
      return
    }

    unobserve()

    observer = new ResizeObserver(callback)
    observer.observe(element)
    observedElement = element
  }

  const unobserve = () => {
    observer?.disconnect()
    observer = undefined
    observedElement = undefined
  }

  let watchStopHandle: WatchStopHandle | undefined

  if (isRef(target)) {
    watchStopHandle = watch(
      () => target.value,
      () => observe(target),
    )
  }

  const cleanup = () => {
    watchStopHandle?.()
    unobserve()
    cleaned = true
  }

  onSmartMounted(() => observe(target))
  onBeforeUnmount(unobserve)
  onDeactivated(unobserve)

  return cleanup
}
