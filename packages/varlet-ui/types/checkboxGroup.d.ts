import { VarComponent } from './varComponent'
import type { BasicAttributes } from './varComponent'

export type CheckboxGroupValidateTriggers = 'onChange'

export interface CheckboxGroupProps extends BasicAttributes {
  modelValue?: any[]
  max?: string | number
  direction?: 'horizontal' | 'vertical'
  validateTrigger?: Array<CheckboxGroupValidateTriggers>
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

export class _CheckboxGroupComponent extends CheckboxGroup {}
