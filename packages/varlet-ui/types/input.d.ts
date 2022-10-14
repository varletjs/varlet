import { VarComponent, BasicAttributes } from './varComponent'
import { VNode } from 'vue'

export type InputValidateTrigger = 'onFocus' | 'onBlur' | 'onChange' | 'onClick' | 'onClear' | 'onInput'

export type InputType = 'text' | 'password' | 'number' | 'tel' | 'email'

export interface InputProps extends BasicAttributes {
  modelValue?: string
  type?: InputType
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
  validateTrigger?: InputValidateTrigger[]
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

  $slots: {
    'prepend-icon'(): VNode[]
    'append-icon'(): VNode[]
  }

  focus(): void

  blur(): void

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void
}

export class _InputComponent extends Input {}
