import { VarComponent } from './varComponent'
import type { BasicAttributes } from './varComponent'

export type RadioValidateTriggers = 'onChange'

export interface RadioProps extends BasicAttributes {
  modelValue?: any
  checkedValue?: any
  uncheckedValue?: any
  checkedColor?: string
  uncheckedColor?: string
  disabled?: boolean
  readonly?: boolean
  iconSize?: string | number
  ripple?: boolean
  validateTrigger?: Array<RadioValidateTriggers>
  rules?: Array<(value: any) => any>
  onClick?: (e: Event) => void
  onChange?: (value: any) => void
  'onUpdate:modelValue'?: (value: any) => void
}

export class Radio extends VarComponent {
  $props: RadioProps

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void

  toggle(value: any): void
}

export class _RadioComponent extends Radio {}
