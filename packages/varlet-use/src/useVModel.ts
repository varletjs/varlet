import { isDef } from '@varlet/shared'
import type { UnwrapRef } from 'vue'
import { computed, getCurrentInstance, ref, watch } from 'vue'

export interface UseVModelOptions<T> {
  /**
   * When passive is set to `true`, it will use `watch` to sync with props and ref.
   * Instead of relying on the `v-model` or `.sync` to work.
   *
   * @default true
   */
  passive?: boolean
  /**
   * When eventName is set, it's value will be used to overwrite the emit event name.
   *
   * @default undefined
   */
  eventName?: string
  /**
   * Defining default value for return ref when no value is passed.
   *
   * @default undefined
   */
  defaultValue?: T
}

export function useVModel<P extends Record<string, unknown>, K extends keyof P, Name extends string>(
  props: P,
  key?: K,
  customEmit?: (name: Name, ...args: any[]) => void,
  options: UseVModelOptions<P[K]> = {}
) {
  const { passive = true, eventName, defaultValue } = options

  const vm = getCurrentInstance() // @ts-expect-error mis-alignment with @vue/composition-api
  const _emit = customEmit || vm?.emit || vm?.$emit?.bind(vm) || vm?.proxy?.$emit?.bind(vm?.proxy)

  if (!key) key = 'modelValue' as K

  const getValue = () => (isDef(props[key!]) ? props[key!] : defaultValue)

  let event: string | undefined = eventName
  event = eventName || event || `update:${key!.toString()}`

  if (passive) {
    const initialValue = getValue()
    const proxy = ref<P[K]>(initialValue!)

    watch(
      () => props[key!], // eslint-disable-next-line no-return-assign
      (v) => (proxy.value = v as UnwrapRef<P[K]>),
      { immediate: true }
    )

    watch(proxy, (newValue, oldValue) => {
      if (newValue !== oldValue) _emit(event, newValue)
    })

    return proxy
  }

  return computed<P[K]>({
    get() {
      return getValue()!
    },
    set(value) {
      _emit(event, value)
    },
  })
}
