import { computed, nextTick, ref, shallowRef, unref, watch } from 'vue'
import type { MaybeRef } from 'vue'

const MINIMUM_FILTER_WIDTH = 11

export function useSelectFilterSize(value: MaybeRef) {
  const calculatorRef = shallowRef<HTMLElement>()
  const calculatorWidth = ref(0)

  const filterStyle = computed(() => ({
    minWidth: `${Math.max(calculatorWidth.value, MINIMUM_FILTER_WIDTH)}px`,
  }))

  const resize = () => {
    calculatorWidth.value = calculatorRef.value?.getBoundingClientRect().width ?? 0
  }

  watch(
    () => unref(value),
    () => {
      nextTick(resize)
    },
  )

  return {
    calculatorRef,
    filterStyle,
    resize,
  }
}
