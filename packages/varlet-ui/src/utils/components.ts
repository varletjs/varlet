import {
  Comment,
  createApp,
  defineComponent,
  Fragment,
  h,
  onActivated,
  onDeactivated,
  ref,
  type App,
  type Component,
  type ComponentPublicInstance,
  type ExtractPropTypes,
  type Plugin,
  type PropType,
  type Ref,
  type VNode,
} from 'vue'
import {
  createNamespaceFn,
  hasOwn,
  isArray,
  isFunction,
  isPlainObject,
  isString,
  normalizeToArray,
} from '@varlet/shared'
import { useEventListener } from '@varlet/use'
import type { SafeParseReturnType, ZodType } from 'zod'

export type ListenerProp<F> = F | F[]

export interface MountInstance {
  instance: ComponentPublicInstance
  unmount: () => void
}

export type ExtractPublicPropTypes<P> = Partial<ExtractPropTypes<P>>

export function pickProps<T, U extends keyof T>(props: T, propsKey: U): T[U]
export function pickProps<T, U extends keyof T>(props: T, propsKey: U[]): Pick<T, U>
export function pickProps(props: any, propsKey: any): any {
  return isArray(propsKey)
    ? propsKey.reduce((pickedProps: any, key) => {
        pickedProps[key] = props[key]
        return pickedProps
      }, {})
    : props[propsKey]
}

export type ComponentWithInstall<T> = T & Plugin

export function withInstall<T = Component>(component: Component, target?: T): ComponentWithInstall<T> {
  const componentWithInstall = target ?? component

  ;(componentWithInstall as ComponentWithInstall<T>).install = function (app: App) {
    const { name } = component

    if (name) {
      app.component(name, component)
    }
  }

  return componentWithInstall as ComponentWithInstall<T>
}

export function withPropsDefaultsSetter(target: any, props: Record<string, any>) {
  target.setPropsDefaults = function (defaults: Record<string, any>) {
    Object.entries(defaults).forEach(([key, value]) => {
      const prop = props[key]

      if (prop == null) {
        return
      }

      if (isPlainObject(prop)) {
        // e.g. { type: String }
        props[key] = {
          ...prop,
          default: value,
        }
        return
      }

      props[key] = {
        type: prop,
        default: value,
      }
    })
  }
}

export function mount(component: Component): MountInstance {
  const app = createApp(component)
  const host = document.createElement('div')
  document.body.appendChild(host)

  return {
    instance: app.mount(host),
    unmount() {
      app.unmount()
      if (host.parentNode) {
        document.body.removeChild(host)
      }
    },
  }
}

export function mountInstance(
  component: any,
  props: Record<string, any> = {},
  eventListener: Record<string, any> = {},
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

export function flatFragment(vNodes: any) {
  const result: VNode[] = []

  vNodes.forEach((vNode: any) => {
    if (vNode.type === Comment) {
      return
    }

    if (vNode.type === Fragment && isArray(vNode.children)) {
      vNode.children.forEach((item: VNode) => {
        result.push(item)
      })
      return
    }

    result.push(vNode)
  })

  return result
}

export function isZodRule(rule: unknown): rule is ZodType {
  return isPlainObject(rule) && isFunction(rule.safeParseAsync)
}

export function isZodResult(result: unknown): result is SafeParseReturnType<any, any> {
  return isPlainObject(result) && hasOwn(result, 'success')
}

export function useValidation() {
  const errorMessage: Ref<string> = ref('')

  const validate = async (ruleOrRules: any | any[], value: any, apis?: any): Promise<boolean> => {
    const rules = normalizeToArray(ruleOrRules).filter((rule) => isZodRule(rule) || isFunction(rule))

    const results = await Promise.all(
      rules.map((rule) => (isZodRule(rule) ? rule.safeParseAsync(value) : rule(value, apis))),
    )

    resetValidation()

    return !results.some((result) => {
      if (isZodResult(result)) {
        if (result.success === false) {
          errorMessage.value = result.error.issues[0].message
          return true
        }
      } else if (result !== true) {
        errorMessage.value = String(result)
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

export function useRouteListener(listener: () => void) {
  useEventListener(() => window, 'hashchange', listener)
  useEventListener(() => window, 'popstate', listener)
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

export const createNamespace = createNamespaceFn('var')

export function defineListenerProp<F>(fallback?: any) {
  return {
    type: [Function, Array] as PropType<F | F[]>,
    default: fallback,
  }
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

export const MaybeVNode = defineComponent({
  props: {
    is: {
      type: [String, Object] as PropType<string | VNode>,
    },

    tag: {
      type: String,
      default: 'span',
    },
  },
  setup(props) {
    return () => (isString(props.is) ? h(props.tag, props.is) : props.is)
  },
})
