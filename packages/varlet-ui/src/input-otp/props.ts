import { PropType } from 'vue'
import { inputProps } from '../input'
import { defineListenerProp, pickProps } from '../utils/components'

export type OptInputValidateTrigger = 'onFocus' | 'onBlur' | 'onChange' | 'onClick' | 'onInput'

export const props = {
  modelValue: {
    type: String,
    default: '',
  },
  length: {
    type: Number,
    default: 6,
  },
  validateTrigger: {
    type: Array as PropType<OptInputValidateTrigger[]>,
    default: () => ['onInput'],
  },
  rules: Array as PropType<Array<(v: string) => any>>,
  onFocus: defineListenerProp<(i: number) => void>(),
  onBlur: defineListenerProp<(i: number) => void>(),
  onClick: defineListenerProp<(i: number) => void>(),
  onInput: defineListenerProp<(value: string) => void>(),
  onChange: defineListenerProp<(value: string) => void>(),
  'onUpdate:modelValue': defineListenerProp<(value: string) => void>(),

  ...pickProps(inputProps, [
    'size',
    'variant',
    'readonly',
    'autofocus',
    'disabled',
    'textColor',
    'focusColor',
    'blurColor',
  ]),
}
