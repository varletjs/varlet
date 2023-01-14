import type { App } from 'vue'
import { DirectiveBinding } from 'vue'

export class VarDirective {
  static install(app: App): void

  static mounted(el: HTMLElement, binding: DirectiveBinding): void

  static updated(el: HTMLElement, binding: DirectiveBinding): void

  static unmounted(el: HTMLElement, binding: DirectiveBinding): void
}
