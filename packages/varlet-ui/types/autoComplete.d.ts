import { VNode, VNodeChild, type InputHTMLAttributes } from 'vue'
import {
  Rules as AutoCompleteRules,
  Variant as AutoCompleteVariant,
  BasicAttributes,
  ListenerProp,
  SetPropsDefaults,
  VarComponent,
} from './varComponent'

export declare const autoComponentProps: Record<keyof AutoCompleteProps, any>

export type AutoCompleteOptionLabelRender = (option: AutoCompleteOption, checked: boolean) => VNodeChild

export type AutoCompleteOptionLabel = string | VNode | AutoCompleteOptionLabelRender

export type AutoCompleteValidateTrigger = 'onFocus' | 'onBlur' | 'onChange' | 'onClick' | 'onClear' | 'onInput'

export type AutoCompleteSize = 'small' | 'normal'

export interface AutoCompleteOption {
  label?: AutoCompleteOptionLabel
  value?: any
  disabled?: boolean

  [key: PropertyKey]: any
}

export interface AutoCompleteProps extends BasicAttributes {
  modelValue?: string
  labelKey?: string
  valueKey?: string
  options?: AutoCompleteOption[]
  line?: boolean
  size?: AutoCompleteSize
  variant?: AutoCompleteVariant
  placeholder?: string
  hint?: boolean
  textColor?: string
  focusColor?: string
  blurColor?: string
  maxlength?: string | number
  disabled?: boolean
  readonly?: boolean
  clearable?: boolean
  validateTrigger?: AutoCompleteValidateTrigger[]
  getShow?: (v: string) => boolean
  rules?: AutoCompleteRules
  enterkeyhint?: InputHTMLAttributes['enterKeyHint']
  onFocus?: ListenerProp<() => void>
  onBlur?: ListenerProp<() => void>
  onClick?: ListenerProp<(e: Event) => void>
  onClear?: ListenerProp<(value: string) => void>
  onChange?: ListenerProp<(value: string, e: Event) => void>
  'onUpdate:modelValue'?: ListenerProp<(value: string) => void>
}

export interface AutoCompleteClearIconData {
  clear: (e: Event) => void
}

export class AutoComplete extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<AutoCompleteProps>

  $props: AutoCompleteProps

  $slots: {
    'prepend-icon'(): VNode[]
    'append-icon'(): VNode[]
    'clear-icon'(data: AutoCompleteClearIconData): VNode[]
    'extra-message'(): VNode[]
  }

  focus(): void

  blur(): void

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void
}

export class _AutoCompleteComponent extends AutoComplete {}
