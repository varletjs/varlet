import { computed, ComputedRef, ref, shallowRef } from 'vue'
import { useResizeObserver } from '@varlet/use'

const MINIMUM_INPUT_WIDTH = 11

export function useCalcInputWidth(filterable: ComputedRef<boolean>) {
  const calculatorRef = shallowRef<HTMLElement>()
  const calculatorWidth = ref(0)

  const inputStyle = computed(() => ({
    minWidth: `${Math.max(calculatorWidth.value, MINIMUM_INPUT_WIDTH)}px`,
  }))

  const resetCalculatorWidth = () => {
    calculatorWidth.value = calculatorRef.value?.getBoundingClientRect().width ?? 0
  }

  useResizeObserver(calculatorRef, resetCalculatorWidth)

  return {
    calculatorRef,
    calculatorWidth,
    inputStyle,
  }
}
