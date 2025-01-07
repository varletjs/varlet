import { ref } from 'vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import HoverOverlay from './HoverOverlay.vue'
import { props as hoverOverlayProps } from './props'

withInstall(HoverOverlay)
withPropsDefaultsSetter(HoverOverlay, hoverOverlayProps)

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

export { hoverOverlayProps }

export const _HoverOverlayComponent = HoverOverlay

export default HoverOverlay
