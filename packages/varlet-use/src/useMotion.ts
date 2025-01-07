import { ref } from 'vue'
import { isFunction, motion, MotionState } from '@varlet/shared'

export interface UseMotionOptions {
  from: number | (() => number)
  to: number | (() => number)
  duration?: number | (() => number)
  timingFunction?: (v: number) => number
  onFinished?: (value: number) => void
}

export function useMotion(options: UseMotionOptions) {
  const value = ref(getter(options.from))
  const state = ref<MotionState>('pending')

  let ctx = createMotionContext()

  function getter<T>(value: T | (() => T)) {
    return isFunction(value) ? value() : value
  }

  function reset() {
    ctx.reset()
    value.value = getter(options.from)
    state.value = 'pending'
    ctx = createMotionContext()
  }

  function start() {
    ctx.start()
  }

  function pause() {
    ctx.pause()
  }

  function createMotionContext() {
    return motion({
      from: getter(options.from),
      to: getter(options.to),
      duration: options.duration ? getter(options.duration) : 300,
      timingFunction: options.timingFunction,
      onStateChange(newState) {
        state.value = newState
      },
      frame({ value: newValue, done }) {
        value.value = newValue

        if (done) {
          options.onFinished?.(value.value)
        }
      },
    })
  }

  return {
    value,
    state,
    start,
    pause,
    reset,
  }
}
