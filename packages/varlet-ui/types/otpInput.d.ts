import { VNode } from 'vue'
import {
  BasicAttributes,
  ListenerProp,
  Rules as OtpInputRules,
  SetPropsDefaults,
  VarComponent,
  Variant as OtpInputVariant,
} from './varComponent'

export declare const otpInputProps: Record<keyof OtpInputProps, any>

export type OtpInputType = 'digit' | 'text' | 'alphanumeric'

export type OtpInputValidateTrigger =
  | 'onFocus'
  | 'onBlur'
  | 'onChange'
  | 'onClick'
  | 'onClear'
  | 'onInput'
  | 'onComplete'

export type OtpInputSource = 'input' | 'delete' | 'paste'

export interface OtpInputProps extends BasicAttributes {
  modelValue?: string
  length?: string | number
  type?: OtpInputType
  variant?: OtpInputVariant
  mask?: boolean
  maskSymbol?: string
  cellHeight?: string | number
  cellMaxWidth?: string | number
  textColor?: string
  focusColor?: string
  blurColor?: string
  disabled?: boolean
  readonly?: boolean
  autofocus?: boolean
  gutter?: string | number
  validateTrigger?: OtpInputValidateTrigger[]
  rules?: OtpInputRules
  autoBlur?: boolean
  allowPaste?: boolean
  pasteTransform?: (value: string) => string
  onPaste?: ListenerProp<(value: string, e: ClipboardEvent) => void>
  onComplete?: ListenerProp<(value: string) => void>
  'onUpdate:modelValue'?: ListenerProp<(value: string) => void>
}

export interface OtpInputSeparatorData {
  index: number
}

export class OtpInput extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<OtpInputProps>

  $props: OtpInputProps

  $slots: {
    separator(data: OtpInputSeparatorData): VNode[]
  }

  focus(index?: number): void

  blur(): void

  clear(): void

  validate(): Promise<boolean>

  resetValidation(): void
}

export class _OtpInputComponent extends OtpInput {}
