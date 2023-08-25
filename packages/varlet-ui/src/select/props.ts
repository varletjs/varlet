import { type PropType } from 'vue'
import { defineListenerProp, pickProps } from '../utils/components'
import { props as fieldDecoratorProps } from '../field-decorator/props'

export type SelectValidateTrigger = 'onFocus' | 'onBlur' | 'onChange' | 'onClick' | 'onClear' | 'onClose'

export type SelectTextAlign = 'left' | 'right' | 'center'

export const props = {
  modelValue: {
    default: undefined,
  },
  multiple: Boolean,
  offsetY: {
    type: [String, Number],
    default: 0,
  },
  chip: Boolean,
  readonly: Boolean,
  separator: {
    type: String,
    default: ',',
  },
  textAlign: {
    type: String as PropType<SelectTextAlign>,
    default: 'left',
  },
  validateTrigger: {
    type: Array as PropType<Array<SelectValidateTrigger>>,
    default: () => ['onChange', 'onClear', 'onClose'],
  },
  rules: Array as PropType<Array<(v: any) => any>>,
  onFocus: defineListenerProp<() => void>(),
  onBlur: defineListenerProp<() => void>(),
  onClose: defineListenerProp<(value: any) => void>(),
  onChange: defineListenerProp<(value: any) => void>(),
  onClear: defineListenerProp<(value: any) => void>(),
  'onUpdate:modelValue': defineListenerProp<(value: any) => void>(),
  // dynamic internal
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
