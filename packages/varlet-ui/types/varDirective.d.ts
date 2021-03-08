import { App } from 'vue'
import { DirectiveBinding } from '@vue/runtime-core'

export class VarDirective {
  static install(app: App): void

  static mounted(el: HTMLElement, binding: DirectiveBinding)

  static updated(el: HTMLElement, binding: DirectiveBinding)

  static unmounted(el: HTMLElement, binding: DirectiveBinding)
}
