import { ref } from 'vue'
import { inBrowser } from '@varlet/shared'
import { onSmartMounted } from './onSmartMounted'
import { onWindowResize } from './onWindowResize'

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
