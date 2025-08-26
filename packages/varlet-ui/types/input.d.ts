import { InputHTMLAttributes, VNode } from 'vue'
import {
  BasicAttributes,
  Rules as InputRules,
  Variant as InputVariant,
  ListenerProp,
  SetPropsDefaults,
  VarComponent,
} from './varComponent'

export declare const inputProps: Record<keyof InputProps, any>

export type InputValidateTrigger = 'onFocus' | 'onBlur' | 'onChange' | 'onClick' | 'onClear' | 'onInput'

export type InputType = 'text' | 'password' | 'number' | 'tel' | 'email'

export type InputSize = 'small' | 'normal'

export interface InputProps extends BasicAttributes {
  modelValue?: string
  type?: InputType
  size?: InputSize
  variant?: InputVariant
  textarea?: boolean
  ariaLabel?: string
  rows?: string | number
  placeholder?: string
  hint?: boolean
  line?: boolean
  textColor?: string
  focusColor?: string
  blurColor?: string
  maxlength?: string | number
  disabled?: boolean
  readonly?: boolean
  clearable?: boolean
  resize?: boolean
  autofocus?: boolean
  preventAutoFill?: boolean
  validateTrigger?: InputValidateTrigger[]
  rules?: InputRules
  enterkeyhint?: InputHTMLAttributes['enterKeyHint']
  onFocus?: ListenerProp<(e: Event) => void>
  onBlur?: ListenerProp<(e: Event) => void>
  onClick?: ListenerProp<(e: Event) => void>
  onClear?: ListenerProp<(value: string) => void>
  onInput?: ListenerProp<(value: string, e: Event) => void>
  onChange?: ListenerProp<(value: string, e: Event) => void>
  'onUpdate:modelValue'?: ListenerProp<(value: string) => void>
}

export interface InputClearIconData {
  clear: (e: Event) => void
}

export class Input extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<InputProps>

  $props: InputProps

  $slots: {
    'prepend-icon'(): VNode[]
    'append-icon'(): VNode[]
    'clear-icon'(data: InputClearIconData): VNode[]
    'extra-message'(): VNode[]
  }

  focus(): void

  blur(): void

  select(): void

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void
}

export class _InputComponent extends Input {}
