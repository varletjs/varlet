import { isDef, call } from '@varlet/shared'
import type { UnwrapRef } from 'vue'
import { computed, ref, watch } from 'vue'

export interface UseVModelOptions<T> {
  /**
   * When passive is set to `true`, it will use `watch` to sync with props and ref.
   * Instead of relying on the `v-model` or `.sync` to work.
   *
   * @default true
   */
  passive?: boolean
  /**
   * Defining default value for return ref when no value is passed.
   *
   * @default undefined
   */
  defaultValue?: T
}

export function useVModel<P extends Record<string, any>, K extends keyof P>(
  props: P,
  key: K,
  options: UseVModelOptions<P[K]> = {}
) {
  const { passive = true, defaultValue } = options

  const _callBind = call.bind(props)

  const getValue = () => (isDef(props[key]) ? props[key] : defaultValue)

  const callbackName: string | undefined = `onUpdate:${key.toString()}`

  if (passive) {
    const initialValue = getValue()
    const proxy = ref<P[K]>(initialValue!)

    watch(
      () => props[key],
      // eslint-disable-next-line no-return-assign
      (v) => (proxy.value = v as UnwrapRef<P[K]>),
      { immediate: true }
    )

    watch(proxy, (newValue, oldValue) => {
      if (newValue !== oldValue) _callBind(props[callbackName], newValue)
    })

    return proxy
  }

  return computed<P[K]>({
    get() {
      return getValue()!
    },
    set(value) {
      _callBind(props[callbackName], value)
    },
  })
}
