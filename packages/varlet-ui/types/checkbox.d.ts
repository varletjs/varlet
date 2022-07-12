import { VarComponent } from './varComponent'
import type { BasicAttributes } from './varComponent'

export type CheckboxValidateTriggers = 'onChange'

export interface CheckboxProps extends BasicAttributes {
  modelValue?: any
  checkedValue?: any
  uncheckedValue?: any
  checkedColor?: string
  uncheckedColor?: string
  disabled?: boolean
  readonly?: boolean
  iconSize?: string | number
  ripple?: boolean
  validateTrigger?: Array<CheckboxValidateTriggers>
  rules?: Array<(value: any) => any>
  onClick?: (e: Event) => void
  onChange?: (value: any) => void
  'onUpdate:modelValue'?: (value: any) => void
}

export class Checkbox extends VarComponent {
  $props: CheckboxProps

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void

  toggle(value: any): void
}

export class _CheckboxComponent extends Checkbox {}
