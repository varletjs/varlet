import { VarComponent } from './varComponent'

export type RadioGroupValidateTriggers = 'onChange'

export interface RadioGroupProps {
  modelValue?: any[]
  direction?: 'horizontal' | 'vertical'
  validateTrigger?: Array<RadioGroupValidateTriggers>
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
