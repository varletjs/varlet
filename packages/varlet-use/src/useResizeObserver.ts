import { MaybeRefOrGetter, onScopeDispose, unref, watch } from 'vue'
import { isFunction } from '@varlet/shared'

export interface UseResizeObserverOptions {
  /**
   * Sets which box model the observer will observe changes to. Possible values
   * are `content-box` (the default), `border-box` and `device-pixel-content-box`.
   *
   * @default 'content-box'
   */
  box?: ResizeObserverBoxOptions
}

export function useResizeObserver(
  target: MaybeRefOrGetter<Element | null | undefined>,
  callback: ResizeObserverCallback,
  options: UseResizeObserverOptions = {},
) {
  let observer: ResizeObserver | undefined

  const getElement = (target: MaybeRefOrGetter<Element | null | undefined>) =>
    isFunction(target) ? target() : unref(target)

  const cleanup = () => {
    if (observer) {
      observer.disconnect()
      observer = undefined
    }
  }

  const stopWatch = watch(
    () => getElement(target),
    (el) => {
      cleanup()
      if (window) {
        observer = new ResizeObserver(callback)
        if (el) {
          observer!.observe(el, options)
        }
      }
    },
    { immediate: true, flush: 'post' },
  )

  const stop = () => {
    cleanup()
    stopWatch()
  }

  onScopeDispose(stop)

  return {
    stop,
  }
}
