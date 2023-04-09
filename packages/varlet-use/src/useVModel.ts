import { isFunction } from '@varlet/shared'
import { computed, getCurrentInstance, ref, UnwrapRef, watch } from 'vue'

const isDef = <T = any>(val?: T): val is T => typeof val !== 'undefined'

type CloneFn<F, T = F> = (x: F) => T

function cloneFnJSON<T>(source: T): T {
  return JSON.parse(JSON.stringify(source))
}
export interface UseVModelOptions<T> {
  clone?: boolean | CloneFn<T>
  passive?: boolean
  deep?: boolean
  eventName?: string
  defaultValue?: T
  emit?: (event: string, value: T) => void
}

export function useVModel<P extends Record<string, any>, K extends keyof P>(
  props: P,
  key: K,
  options: UseVModelOptions<P[K]> = {}
) {
  const vm = getCurrentInstance()!
  const { clone = false, passive = true, deep = false, eventName, defaultValue, emit = vm?.emit } = options
  const event = eventName ?? `update:${key.toString()}`

  const cloneFn = (val: P[K]) => (!clone ? val : isFunction(clone) ? clone(val) : cloneFnJSON(val))

  const getValue = () => (isDef(props[key]) ? cloneFn(props[key]) : defaultValue)

  if (!passive) {
    return computed<P[K]>({
      get() {
        return getValue()!
      },
      set(value) {
        emit(event, value)
      },
    })
  }

  const proxy = ref<P[K]>(getValue()!)

  watch(
    () => props[key],
    (v) => {
      proxy.value = cloneFn(v) as UnwrapRef<P[K]>
    }
  )

  watch(
    () => proxy.value,
    (newValue: P[K]) => {
      emit(event, newValue)
    },
    { deep }
  )

  return proxy
}
