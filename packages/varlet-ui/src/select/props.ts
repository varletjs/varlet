import type { PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export function textAlignValidator(textAlign: string) {
  return ['left', 'right', 'center'].includes(textAlign)
}

export type SelectValidateTrigger = 'onFocus' | 'onBlur' | 'onChange' | 'onClick' | 'onClear' | 'onClose'

export const props = {
  modelValue: {
    default: undefined,
  },
  placeholder: {
    type: String,
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
  line: {
    type: Boolean,
    default: true,
  },
  hint: {
    type: Boolean,
    default: true,
  },
  textColor: {
    type: String,
  },
  focusColor: {
    type: String,
  },
  blurColor: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  clearable: {
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
  onClick: defineListenerProp<(e: Event) => void>(),
  onClear: defineListenerProp<(value: any) => void>(),
  onClose: defineListenerProp<(value: any) => void>(),
  onChange: defineListenerProp<(value: any) => void>(),
  'onUpdate:modelValue': defineListenerProp<(value: any) => void>(),
}
