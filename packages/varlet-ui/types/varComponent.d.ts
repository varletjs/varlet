import type { App } from 'vue'

export class VarComponent {
  static name: string

  static install(app: App): void
}

export type Type = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'

export type Size = 'normal' | 'mini' | 'small' | 'large'

export type Direction = 'horizontal' | 'vertical'

export type Variant = 'outlined' | 'standard'

export type ListenerProp<F> = F | F[]

export interface BasicAttributes {
  class?: string | Record<string, any>
  style?: string | Record<string, any>
}
