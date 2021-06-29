import { VarComponent } from './varComponent'

export type InputValidateTriggers = 'onFocus' | 'onBlur' | 'onChange' | 'onClick' | 'onClear' | 'onInput'

export interface InputProps {
  modelValue?: string | number
  type?: 'text' | 'password'
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
  validateTrigger?: InputValidateTriggers[]
  rules?: Array<(v: string | number) => any>
  onFocus?: (e: Event) => void
  onBlur?: (e: Event) => void
  onClick?: (e: Event) => void
  onClear?: (value: string | number) => void
  onInput?: (value: string | number, e: Event) => void
  onChange?: (value: string | number, e: Event) => void
  'onUpdate:modelValue'?: (value: string | number) => void
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
