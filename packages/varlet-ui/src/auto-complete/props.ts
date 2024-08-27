import { type InputHTMLAttributes, type PropType, type VNode, type VNodeChild } from 'vue'
import { defineListenerProp, pickProps } from '../utils/components'
import { fieldDecoratorProps } from '../field-decorator'

export type AutoCompleteOptionLabelRender = (option: AutoCompleteOption, checked: boolean) => VNodeChild

export type AutoCompleteOptionLabel = string | VNode | AutoCompleteOptionLabelRender

export type AutoCompleteValidateTrigger = 'onFocus' | 'onBlur' | 'onChange' | 'onClick' | 'onClear' | 'onInput'

export interface AutoCompleteOption {
  label?: AutoCompleteOptionLabel
  value?: any
  disabled?: boolean

  [key: PropertyKey]: any
}

export const props = {
  modelValue: String,
  options: {
    type: Array as PropType<Array<AutoCompleteOption>>,
    default: () => [],
  },
  labelKey: {
    type: String,
    default: 'label',
  },
  valueKey: {
    type: String,
    default: 'value',
  },
  maxlength: [String, Number],
  readonly: Boolean,
  validateTrigger: {
    type: Array as PropType<AutoCompleteValidateTrigger[]>,
    default: () => ['onInput', 'onClear', 'onChange'],
  },
  getShow: Function as PropType<(v: string) => boolean>,
  rules: Array as PropType<Array<(v: string) => any>>,
  enterkeyhint: String as PropType<InputHTMLAttributes['enterKeyHint']>,
  onFocus: defineListenerProp<() => void>(),
  onBlur: defineListenerProp<() => void>(),
  onInput: defineListenerProp<(value: string, e: Event) => void>(),
  onChange: defineListenerProp<(value: string) => void>(),
  onClear: defineListenerProp<(value: string) => void>(),
  'onUpdate:modelValue': defineListenerProp<(value: string) => void>(),
  ...pickProps(fieldDecoratorProps, [
    'size',
    'variant',
    'placeholder',
    'line',
    'hint',
    'textColor',
    'focusColor',
    'blurColor',
    'disabled',
    'clearable',
    'onClick',
  ]),
}
