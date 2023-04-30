import { removeItem } from '@varlet/shared'
import {
  getCurrentInstance,
  computed,
  provide,
  reactive,
  isVNode,
  type VNode,
  type ComponentInternalInstance,
  type ComputedRef,
} from 'vue'

function flatVNodes(subTree: any) {
  const vNodes: VNode[] = []

  const flat = (subTree: any) => {
    if (subTree?.component) {
      flat(subTree?.component.subTree)
      return
    }

    if (Array.isArray(subTree?.children)) {
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

    childInstances.sort((a, b) => {
      return vNodes.indexOf(a.vnode) - vNodes.indexOf(b.vnode)
    })
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

  return {
    length,
    childProviders,
    bindChildren,
  }
}
