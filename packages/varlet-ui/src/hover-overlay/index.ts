import HoverOverlay from './HoverOverlay.vue'
import { withInstall } from '../utils/components'
import { ref } from 'vue'

withInstall(HoverOverlay)

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
