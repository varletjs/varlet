import { isArray, removeItem } from '@varlet/shared'
import {
  computed,
  getCurrentInstance,
  isVNode,
  onUpdated,
  provide,
  reactive,
  type ComponentInternalInstance,
  type ComputedRef,
  type VNode,
} from 'vue'

function flatVNodes(subTree: any) {
  const vNodes: VNode[] = []

  const flat = (subTree: any) => {
    if (subTree?.component) {
      flat(subTree?.component.subTree)
      return
    }

    if (isArray(subTree?.children)) {
      subTree.children.forEach((child: any) => {
        if (isVNode(child)) {
          vNodes.push(child)

          flat(child)
        }
      })
    }
  }

  flat(subTree)

  return vNodes
}

export interface UseChildrenBaseProvider<C> {
  childInstances: ComponentInternalInstance[]

  collect(instance: ComponentInternalInstance, childProvider: C): void

  clear(instance: ComponentInternalInstance, childProvider: C): void
}

export function useChildren<P, C>(key: symbol | string) {
  const parentInstance: ComponentInternalInstance = getCurrentInstance() as ComponentInternalInstance
  const childInstances: ComponentInternalInstance[] = reactive([])
  const childProviders: C[] = []
  const length: ComputedRef<number> = computed(() => childInstances.length)

  const sortInstances = () => {
    const vNodes: any[] = flatVNodes(parentInstance.subTree)
    const pairs = childInstances.map((instance, index) => ({
      instance,
      provider: childProviders[index],
    }))

    pairs.sort((a, b) => vNodes.indexOf(a.instance.vnode) - vNodes.indexOf(b.instance.vnode))

    childInstances.splice(0, childInstances.length, ...pairs.map(({ instance }) => instance))
    childProviders.splice(0, childProviders.length, ...pairs.map(({ provider }) => provider))
  }

  const collect = (childInstance: ComponentInternalInstance, childProvider: C) => {
    childInstances.push(childInstance)
    childProviders.push(childProvider)
    sortInstances()
  }

  const clear = (childInstance: ComponentInternalInstance, childProvider: C) => {
    removeItem(childInstances, childInstance)
    removeItem(childProviders, childProvider)
  }

  const bindChildren = (parentProvider: P) => {
    provide<P & UseChildrenBaseProvider<C>>(key, {
      childInstances,
      collect,
      clear,
      ...parentProvider,
    })
  }

  onUpdated(sortInstances)

  return {
    length,
    childInstances,
    childProviders,
    bindChildren,
  }
}
