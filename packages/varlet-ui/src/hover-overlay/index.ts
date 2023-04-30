import HoverOverlay from './HoverOverlay.vue'
import { ref, type App } from 'vue'

HoverOverlay.install = function (app: App) {
  app.component(HoverOverlay.name, HoverOverlay)
}

export function useHoverOverlay() {
  const hovering = ref(false)

  const handleHovering = (value: boolean) => {
    hovering.value = value
  }

  return {
    hovering,
    handleHovering,
  }
}

export const _HoverOverlayComponent = HoverOverlay

export default HoverOverlay
