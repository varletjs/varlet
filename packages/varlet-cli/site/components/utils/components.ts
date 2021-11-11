import { createApp, h } from 'vue'
import type { Component } from 'vue'

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
