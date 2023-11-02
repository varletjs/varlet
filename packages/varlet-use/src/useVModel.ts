import { call } from '@varlet/shared'
import { computed, ref, watch, type Ref, type WritableComputedRef } from 'vue'

export interface UseVModelOptions<P, K extends keyof P> {
  passive?: boolean
  eventName?: string
  defaultValue?: P[K]
  emit?: (event: string, value: P[K]) => void
}

export function useVModel<P extends Record<string, any>, K extends keyof P>(
  props: P,
  key: K,
  options: UseVModelOptions<P, K> = {}
): WritableComputedRef<P[K]> | Ref<P[K]> {
  const { passive = true, eventName, defaultValue, emit } = options
  const event = eventName ?? `onUpdate:${key.toString()}`

  const getValue = () => (props[key] != null ? props[key] : defaultValue)!

  if (!passive) {
    return computed<P[K]>({
      get() {
        return getValue()
      },
      set(value) {
        emit ? emit(event, value) : call(props[event], value)
      },
    })
  }

  const proxy = ref<P[K]>(getValue())

  watch(
    () => props[key],
    () => {
      proxy.value = getValue()
    }
  )

  watch(
    () => proxy.value,
    (newValue: P[K]) => {
      emit ? emit(event, newValue) : call(props[event], newValue)
    }
  )

  return proxy
}
