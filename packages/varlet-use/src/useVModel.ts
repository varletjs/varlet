import { computed, getCurrentInstance, ref, watch } from 'vue'

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
) {
  const vm = getCurrentInstance()!
  const { passive = true, eventName, defaultValue, emit = vm?.emit } = options
  const event = eventName ?? `update:${key.toString()}`

  const getValue = () => (props[key] != null ? props[key] : defaultValue)!

  if (!passive) {
    return computed<P[K]>({
      get() {
        return getValue()
      },
      set(value) {
        emit(event, value)
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
      emit(event, newValue)
    }
  )

  return proxy
}
