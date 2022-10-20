import { VarComponent, BasicAttributes, Direction as RadioGroupDirection } from './varComponent'
import { VNode } from 'vue'

export type RadioGroupValidateTrigger = 'onChange'

export { RadioGroupDirection }

export interface RadioGroupProps extends BasicAttributes {
  modelValue?: any
  direction?: RadioGroupDirection
  validateTrigger?: Array<RadioGroupValidateTrigger>
  rules?: Array<(value: any) => any>
  onChange?: (value: any) => void
  'onUpdate:modelValue'?: (value: any) => void
}

export class RadioGroup extends VarComponent {
  $props: RadioGroupProps

  $slots: {
    default(): VNode[]
  }

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void
}

export class _RadioGroupComponent extends RadioGroup {}
