import { VarComponent } from './varComponent'
import { ValidateTriggers } from './checkboxGroup'

interface RadioGroupProps {
  modelValue?: any[]
  direction?: 'horizontal' | 'vertical'
  validateTrigger?: Array<ValidateTriggers>
  rules?: Array<(value: any) => any>
  onChange?: (value: Array<any>) => void
  'onUpdate:modelValue'?: (value: Array<any>) => void
}

export class RadioGroup extends VarComponent {
  $props: RadioGroupProps

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void
}
