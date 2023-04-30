import { useEventListener } from './useEventListener.js'
import { inBrowser } from '@varlet/shared'
import { unref, type Ref } from 'vue'

export type UseClickOutsideTarget = Element | Ref<Element | undefined | null>

export function useClickOutside(target: UseClickOutsideTarget, type: string, listener: EventListener) {
  if (!inBrowser()) {
    return
  }

  const handler = (event: Event) => {
    const element = unref(target)

    if (element && !element.contains(event.target as Node)) {
      listener(event)
    }
  }

  useEventListener(document, type, handler)
}
