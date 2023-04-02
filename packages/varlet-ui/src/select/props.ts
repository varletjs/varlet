import type { PropType } from 'vue'
import { defineListenerProp, pickProps } from '../utils/components'
import { props as inputDecoratorProps } from '../input/inputDecoratorProps'

export function textAlignValidator(textAlign: string) {
  return ['left', 'right', 'center'].includes(textAlign)
}

export type SelectValidateTrigger = 'onFocus' | 'onBlur' | 'onChange' | 'onClick' | 'onClear' | 'onClose'

export const props = {
  modelValue: {
    default: undefined,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  offsetY: {
    type: [String, Number],
    default: 0,
  },
  chip: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  separator: {
    type: String,
    default: ',',
  },
  textAlign: {
    type: String as PropType<'left' | 'right' | 'center'>,
    default: 'left',
    validator: textAlignValidator,
  },
  validateTrigger: {
    type: Array as PropType<Array<SelectValidateTrigger>>,
    default: () => ['onChange', 'onClear', 'onClose'],
  },
  rules: {
    type: Array as PropType<Array<(v: any) => any>>,
  },
  onFocus: defineListenerProp<() => void>(),
  onBlur: defineListenerProp<() => void>(),
  onClose: defineListenerProp<(value: any) => void>(),
  onChange: defineListenerProp<(value: any) => void>(),
  'onUpdate:modelValue': defineListenerProp<(value: any) => void>(),
  // dynamic internal
  ...pickProps(inputDecoratorProps, [
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
    'onClear',
  ]),
}
