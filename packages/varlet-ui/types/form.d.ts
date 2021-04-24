import { VarComponent } from './varComponent'

interface FormProps {
  disabled?: boolean
  readonly?: boolean
}

export class Form extends VarComponent {
  $props: FormProps

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void
}
