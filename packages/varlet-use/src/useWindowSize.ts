import { inBrowser } from '@varlet/shared'
import { ref } from 'vue'
import { onWindowResize } from './onWindowResize'
import { onSmartMounted } from './onSmartMounted'

export interface UseWindowSizeOptions {
  initialWidth?: number
  initialHeight?: number
}

export function useWindowSize(options: UseWindowSizeOptions = {}) {
  const { initialWidth = 0, initialHeight = 0 } = options
  const width = ref(initialWidth)
  const height = ref(initialHeight)

  const update = () => {
    if (!inBrowser()) {
      return
    }

    width.value = window.innerWidth
    height.value = window.innerHeight
  }

  onSmartMounted(update)
  onWindowResize(update)

  return {
    width,
    height,
  }
}
