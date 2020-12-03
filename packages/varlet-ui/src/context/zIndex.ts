import context from './index'
import { watch } from 'vue'

export function useZIndex(props: any, state: string, zIndex: number) {
  watch(() => props[state], (newValue) => {
    if (newValue === true) {
      context.zIndex += zIndex
    }
  }, { immediate: true })
}
