import { VarComponent, BasicAttributes } from './varComponent'
import { VNode } from 'vue'

export interface FormProps extends BasicAttributes {
  disabled?: boolean
  readonly?: boolean
}

export class Form extends VarComponent {
  $props: FormProps

  $slots: {
    default(): VNode[]
  }

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void
}

export class _FormComponent extends Form {}
