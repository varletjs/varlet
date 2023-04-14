import { VarComponent, BasicAttributes, ListenerProp, Variant as InputVariant } from './varComponent'
import { VNode } from 'vue'

export declare const inputProps: Record<string, any>

export type InputValidateTrigger = 'onFocus' | 'onBlur' | 'onChange' | 'onClick' | 'onClear' | 'onInput'

export type InputType = 'text' | 'password' | 'number' | 'tel' | 'email'

export type InputSize = 'small' | 'normal'

export interface InputProps extends BasicAttributes {
  modelValue?: string
  type?: InputType
  size?: InputSize
  variant?: InputVariant
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
  onFocus?: ListenerProp<(e: Event) => void>
  onBlur?: ListenerProp<(e: Event) => void>
  onClick?: ListenerProp<(e: Event) => void>
  onClear?: ListenerProp<(value: string) => void>
  onInput?: ListenerProp<(value: string, e: Event) => void>
  onChange?: ListenerProp<(value: string, e: Event) => void>
  'onUpdate:modelValue'?: ListenerProp<(value: string) => void>
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
