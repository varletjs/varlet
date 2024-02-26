import {
  getCurrentInstance,
  inject,
  onMounted,
  onBeforeUnmount,
  nextTick,
  computed,
  type ComponentInternalInstance,
  type ComputedRef,
} from 'vue'
import { type UseChildrenBaseProvider } from './useChildren.js'

export function keyInProvides(key: symbol | string) {
  const instance = getCurrentInstance() as any

  return key in instance.provides
}

export function useParent<P, C>(key: symbol | string) {
  if (!keyInProvides(key)) {
    return {
      index: null,
      parentProvider: null,
      bindParent: null,
    }
  }

  const provider = inject<P & UseChildrenBaseProvider<C>>(key) as P & UseChildrenBaseProvider<C>
  const { childInstances, collect, clear, ...parentProvider } = provider
  const childInstance: ComponentInternalInstance = getCurrentInstance() as ComponentInternalInstance
  const index: ComputedRef<number> = computed(() => childInstances.indexOf(childInstance))

  const bindParent = (childProvider: C) => {
    onMounted(() => {
      nextTick().then(() => {
        collect(childInstance, childProvider)
      })
    })
    onBeforeUnmount(() => {
      nextTick().then(() => {
        clear(childInstance, childProvider)
      })
    })
  }

  return {
    index,
    parentProvider,
    bindParent,
  }
}
