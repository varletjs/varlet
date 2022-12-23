import {
  createApp,
  h,
  getCurrentInstance,
  inject,
  onUnmounted,
  computed,
  provide,
  reactive,
  isVNode,
  onMounted,
  onBeforeUnmount,
  nextTick,
  ref,
  onActivated,
  onDeactivated,
} from 'vue'
import type { Component, VNode, ComputedRef, ComponentInternalInstance, Ref, ComponentPublicInstance } from 'vue'
import { isArray, removeItem } from '@varlet/shared'

export interface MountInstance {
  instance: ComponentPublicInstance
  unmount: () => void
}

export interface ChildrenCounter {
  collect(instance: ComponentInternalInstance): void

  clear(instance: ComponentInternalInstance): void

  instances: ComponentInternalInstance[]
}

export interface BaseParentProvider<C> {
  collect(childProvider: C): void

  clear(childProvider: C): void
}

export function pickProps<T, U extends keyof T>(props: T, propsKey: U): T[U]
export function pickProps<T, U extends keyof T>(props: T, propsKey: U[]): Pick<T, U>
export function pickProps(props: any, propsKey: any): any {
  return Array.isArray(propsKey)
    ? propsKey.reduce((pickedProps: any, key) => {
        pickedProps[key] = props[key]
        return pickedProps
      }, {})
    : props[propsKey]
}

export function mount(component: Component): MountInstance {
  const app = createApp(component)
  const host = document.createElement('div')
  document.body.appendChild(host)

  return {
    instance: app.mount(host),
    unmount() {
      app.unmount()
      document.body.removeChild(host)
    },
  }
}

export function mountInstance(
  component: any,
  props: Record<string, any> = {},
  eventListener: Record<string, any> = {}
): {
  unmountInstance: () => void
} {
  const Host = {
    setup() {
      return () =>
        h(component, {
          ...props,
          ...eventListener,
        })
    },
  }

  const { unmount } = mount(Host)
  return { unmountInstance: unmount }
}

export function flatVNodes(subTree: any) {
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

export function useAtChildrenCounter(key: symbol) {
  const instances: ComponentInternalInstance[] = reactive([])
  const parentInstance: ComponentInternalInstance = getCurrentInstance() as ComponentInternalInstance

  const sortInstances = () => {
    const vNodes: any[] = flatVNodes(parentInstance.subTree)

    instances.sort((a, b) => {
      return vNodes.indexOf(a.vnode) - vNodes.indexOf(b.vnode)
    })
  }

  const collect = (instance: ComponentInternalInstance) => {
    instances.push(instance)
    sortInstances()
  }

  const clear = (instance: ComponentInternalInstance) => {
    removeItem(instances, instance)
  }

  provide<ChildrenCounter>(key, {
    collect,
    clear,
    instances,
  })

  const length: ComputedRef<number> = computed(() => instances.length)

  return {
    length,
  }
}

export function useAtParentIndex(key: symbol) {
  if (!keyInProvides(key)) {
    return { index: null }
  }

  const childrenCounter: ChildrenCounter = inject<ChildrenCounter>(key) as ChildrenCounter

  const { collect, clear, instances } = childrenCounter

  const instance: ComponentInternalInstance = getCurrentInstance() as ComponentInternalInstance

  onMounted(() => {
    nextTick().then(() => collect(instance))
  })
  onUnmounted(() => {
    nextTick().then(() => clear(instance))
  })

  const index = computed(() => instances.indexOf(instance))

  return {
    index,
  }
}

export function useChildren<P, C>(key: symbol) {
  const childProviders: C[] = []

  const collect = (childProvider: C) => {
    childProviders.push(childProvider)
  }

  const clear = (childProvider: C) => {
    removeItem(childProviders, childProvider)
  }

  const bindChildren = (parentProvider: P) => {
    provide<P & BaseParentProvider<C>>(key, {
      collect,
      clear,
      ...parentProvider,
    })
  }

  return {
    childProviders,
    bindChildren,
  }
}

export function useParent<P, C>(key: symbol) {
  if (!keyInProvides(key)) {
    return {
      parentProvider: null,
      bindParent: null,
    }
  }

  const rawParentProvider = inject<P & BaseParentProvider<C>>(key) as P & BaseParentProvider<C>

  const { collect, clear, ...parentProvider } = rawParentProvider

  const bindParent = (childProvider: C) => {
    onMounted(() => collect(childProvider))
    onBeforeUnmount(() => clear(childProvider))
  }

  return {
    parentProvider,
    bindParent,
  }
}

export function keyInProvides(key: symbol) {
  const instance = getCurrentInstance() as any

  return key in instance.provides
}

export function useValidation() {
  const errorMessage: Ref<string> = ref('')

  const validate = async (rules: any, value: any, apis?: any): Promise<boolean> => {
    if (!isArray(rules) || !rules.length) {
      return true
    }

    const resArr = await Promise.all(rules.map((rule) => rule(value, apis)))

    return !resArr.some((res) => {
      if (res !== true) {
        errorMessage.value = String(res)
        return true
      }

      return false
    })
  }

  const resetValidation = () => {
    errorMessage.value = ''
  }

  const validateWithTrigger = async <T>(validateTrigger: T[], trigger: T, rules: any, value: any, apis?: any) => {
    if (validateTrigger.includes(trigger)) {
      ;(await validate(rules, value, apis)) && (errorMessage.value = '')
    }
  }

  return {
    errorMessage,
    validate,
    resetValidation,
    validateWithTrigger,
  }
}

export function useRouteListener(cb: () => void) {
  onMounted(() => {
    window.addEventListener('hashchange', cb)
    window.addEventListener('popstate', cb)
  })
  onUnmounted(() => {
    window.removeEventListener('hashchange', cb)
    window.removeEventListener('popstate', cb)
  })
}

export function useTeleport() {
  const disabled: Ref<boolean> = ref(false)

  onActivated(() => {
    disabled.value = false
  })

  onDeactivated(() => {
    disabled.value = true
  })

  return {
    disabled,
  }
}

export function exposeApis<T = Record<string, any>>(apis: T) {
  const instance = getCurrentInstance()
  if (instance) {
    Object.assign(instance.proxy!, apis)
  }
}

type ClassName = string | undefined | null
type Classes = (ClassName | [any, ClassName, ClassName?])[]

export function createNamespace(name: string) {
  const namespace = `var`
  const componentName = `${namespace}-${name}`

  const createBEM = (suffix?: string): string => {
    if (!suffix) return componentName

    if (suffix[0] === '$') {
      return suffix.replace('$', namespace)
    }

    return suffix.startsWith('--') ? `${componentName}${suffix}` : `${componentName}__${suffix}`
  }

  const classes = (...classes: Classes): any[] => {
    return classes.map((className) => {
      if (isArray(className)) {
        const [condition, truthy, falsy = null] = className
        return condition ? truthy : falsy
      }

      return className
    })
  }

  return {
    n: createBEM,
    classes,
  }
}

export function call<P extends any[], R>(
  fn?: ((...arg: P) => R) | ((...arg: P) => R)[] | null,
  ...args: P
): R | R[] | undefined {
  if (isArray(fn)) {
    return fn.map((f) => f(...args))
  }

  if (fn) {
    return fn(...args)
  }
}
