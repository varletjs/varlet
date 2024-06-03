import { VarComponent, BasicAttributes, ListenerProp, SetPropsDefaults } from './varComponent'
import { InputSize } from './input'

export declare const inputProps: Record<keyof OtpInputProps, any>

export type OptInputValidateTrigger = 'onFocus' | 'onBlur' | 'onChange' | 'onClick' | 'onInput'

export interface OtpInputProps extends BasicAttributes {
  modelValue?: string | number
  size?: InputSize
  length?: number
  variant?: boolean
  textColor?: string
  focusColor?: string
  blurColor?: string
  disabled?: boolean
  readonly?: boolean
  autofocus?: boolean
  validateTrigger?: OptInputValidateTrigger[]
  rules?: Array<(v: string) => any>
  onFocus?: ListenerProp<(e: Event) => void>
  onBlur?: ListenerProp<(e: Event) => void>
  onClick?: ListenerProp<(e: Event) => void>
  onInput?: ListenerProp<(value: string, e: Event) => void>
  onChange?: ListenerProp<(value: string, e: Event) => void>
  'onUpdate:modelValue'?: ListenerProp<(value: string) => void>
}

export class OtpInput extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<OtpInputProps>

  $props: OtpInputProps

  focus(): void

  blur(): void

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void
}

export class _OtpInputComponent extends OtpInput {}
