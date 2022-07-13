import { VarComponent } from './varComponent'
import type { BasicAttributes } from './varComponent'

export interface FormProps extends BasicAttributes {
  disabled?: boolean
  readonly?: boolean
}

export class Form extends VarComponent {
  $props: FormProps

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void
}

export class _FormComponent extends Form {}
