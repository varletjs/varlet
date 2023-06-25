import { useEventListener } from './useEventListener.js'
import { inBrowser, isFunction } from '@varlet/shared'
import { unref, type Ref } from 'vue'

export type UseClickOutsideTarget = Element | Ref<Element | undefined | null> | (() => Element)

export function useClickOutside(target: UseClickOutsideTarget, type: string, listener: EventListener) {
  if (!inBrowser()) {
    return
  }

  const handler = (event: Event) => {
    const element = isFunction(target) ? target() : unref(target)

    if (element && !element.contains(event.target as Node)) {
      listener(event)
    }
  }

  useEventListener(document, type, handler)
}
