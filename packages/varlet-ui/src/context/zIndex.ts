import context from './index'
import { watch, ref, Ref } from 'vue'

export function useZIndex(props: any, state: string, count: number) {
  const zIndex: Ref<number> = ref(context.zIndex)

  watch(() => props[state], (newValue) => {
    if (newValue === true) {
      context.zIndex += count
      zIndex.value = context.zIndex
    }
  }, { immediate: true })

  return { zIndex }
}
