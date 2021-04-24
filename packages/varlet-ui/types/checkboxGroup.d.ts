import { VarComponent } from './varComponent'

export type ValidateTriggers = 'onChange'

interface CheckboxGroupProps {
  modelValue?: any[]
  max?: string | number
  direction?: 'horizontal' | 'vertical'
  validateTrigger?: Array<ValidateTriggers>
  rules?: Array<(value: any) => any>
  onChange?: (value: Array<any>) => void
  'onUpdate:modelValue'?: (value: Array<any>) => void
}

export class CheckboxGroup extends VarComponent {
  $props: CheckboxGroupProps

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void

  checkAll(): any

  inverseAll(): any
}
