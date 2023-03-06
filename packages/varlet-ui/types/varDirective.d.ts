import { App, DirectiveBinding } from 'vue'

export interface VarDirective<V> {
  install(app: App): void

  mounted(el: HTMLElement, binding: DirectiveBinding<V>): void

  updated(el: HTMLElement, binding: DirectiveBinding<V>): void

  unmounted(el: HTMLElement, binding: DirectiveBinding<V>): void
}
