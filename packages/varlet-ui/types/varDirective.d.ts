import type { App } from 'vue'
import { DirectiveBinding } from 'vue'

export class VarDirective<V> {
  static install(app: App): void

  static mounted(el: HTMLElement, binding: DirectiveBinding<V>): void

  static updated(el: HTMLElement, binding: DirectiveBinding<V>): void

  static unmounted(el: HTMLElement, binding: DirectiveBinding<V>): void
}
