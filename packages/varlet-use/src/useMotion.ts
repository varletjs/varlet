import { MotionState, motion } from '@varlet/shared'
import { ref } from 'vue'

export interface UseMotionOptions {
  from: number
  to: number
  duration?: number
  timingFunction?: (v: number) => number
  onFinished?: (value: number) => void
}

export function useMotion(options: UseMotionOptions) {
  const value = ref(options.from)
  const state = ref<MotionState>('pending')
  const { start, reset, pause } = motion({
    ...options,
    frame: ({ value: newValue, done }) => {
      value.value = newValue

      if (done) {
        options.onFinished?.(value.value)
      }
    },
    onStateChange(newState) {
      state.value = newState
    },
  })

  return {
    value,
    state,
    start,
    pause,
    reset: () => {
      value.value = options.from
      reset()
    },
  }
}
