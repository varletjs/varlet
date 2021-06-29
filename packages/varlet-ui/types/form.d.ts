import { VarComponent } from './varComponent'

export interface FormProps {
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
