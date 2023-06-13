import { useEventListener } from './useEventListener'

export function onWindowResize(listener: EventListener) {
  useEventListener(() => window, 'resize', listener, { passive: true })
  useEventListener(() => window, 'orientationchange', listener, { passive: true })
}
