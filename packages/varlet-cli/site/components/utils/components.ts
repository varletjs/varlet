import { createApp, h, onActivated, onDeactivated, onMounted, onUnmounted, ref, watch, computed } from 'vue'
import type { Component, PropType, Ref, WritableComputedRef } from 'vue'
import { isArray } from '@varlet/shared'

export type ListenerProp<F> = F | F[]

export function defineListenerProp<F>(fallback?: any) {
  return {
    type: [Function, Array] as PropType<F | F[]>,
    default: fallback,
  }
}

export interface MountInstance {
  instance: any
  unmount: () => void
}

export function pickProps(props: any, propsKey: string): any
export function pickProps(props: any, propsKey: string[]): any
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
    }
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
          ...eventListener
        })
    }
  }

  const { unmount } = mount(Host)
  return { unmountInstance: unmount }
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

type ClassName = string | undefined | null
type Classes = (ClassName | [any, ClassName, ClassName?])[]

export function createNamespace(name: string) {
  const namespace = `var-site-${name}`

  const createBEM = (suffix?: string): string => {
    if (!suffix) return namespace

    return suffix.startsWith('--') ? `${namespace}${suffix}` : `${namespace}__${suffix}`
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

export function call<P extends any[], R>(fn?: ((...arg: P) => R) | null, ...arg: P): R | undefined {
  if (fn) return fn(...arg)
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

export function formatElevation(elevation: number | boolean | string, defaultLevel?: number) {
  if (elevation === false) {
    return null
  }

  if (elevation === true && defaultLevel) {
    elevation = defaultLevel
  }

  return `var-elevation--${elevation}`
}

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

