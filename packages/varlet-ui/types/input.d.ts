import { VarComponent } from './varComponent'
import type { BasicAttributes } from './varComponent'

export type InputValidateTriggers = 'onFocus' | 'onBlur' | 'onChange' | 'onClick' | 'onClear' | 'onInput'

export interface InputProps extends BasicAttributes {
  modelValue?: string
  type?: 'text' | 'password' | 'number' | 'tel' | 'email'
  textarea?: boolean
  rows?: string | number
  placeholder?: string
  hint?: boolean
  textColor?: string
  focusColor?: string
  blurColor?: string
  maxlength?: string | number
  disabled?: boolean
  readonly?: boolean
  clearable?: boolean
  resize?: boolean
  autofocus?: boolean
  validateTrigger?: InputValidateTriggers[]
  rules?: Array<(v: string) => any>
  onFocus?: (e: Event) => void
  onBlur?: (e: Event) => void
  onClick?: (e: Event) => void
  onClear?: (value: string) => void
  onInput?: (value: string, e: Event) => void
  onChange?: (value: string, e: Event) => void
  'onUpdate:modelValue'?: (value: string) => void
}

export class Input extends VarComponent {
  $props: InputProps

  focus(): void

  blur(): void

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void
}

export class _InputComponent extends Input {}
