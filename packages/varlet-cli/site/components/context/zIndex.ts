import context from './index'
import { watch, ref } from 'vue'
import type { Ref } from 'vue'

export function useZIndex(source: any, count: number) {
  const zIndex: Ref<number> = ref(context.zIndex)

  watch(
    source,
    (newValue) => {
      if (newValue) {
        context.zIndex += count
        zIndex.value = context.zIndex
      }
    },
    { immediate: true }
  )

  return { zIndex }
}
