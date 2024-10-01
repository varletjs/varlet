import type { Component, Plugin, App } from 'vue'
import { createNamespaceFn } from '@varlet/shared'

export type ComponentWithInstall<T> = T & Plugin

export function withInstall<T = Component>(component: Component, target?: T): ComponentWithInstall<T> {
  const componentWithInstall = target ?? component

    ; (componentWithInstall as ComponentWithInstall<T>).install = function (app: App) {
      const { name } = component

      if (name) {
        app.component(name, component)
      }
    }

  return componentWithInstall as ComponentWithInstall<T>
}

export const createNamespace = createNamespaceFn('va')