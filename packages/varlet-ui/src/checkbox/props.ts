import type { PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export type CheckboxValidateTrigger = 'onChange'

export const props = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array] as PropType<any>,
    default: false,
  },
  checkedValue: {
    type: [String, Number, Boolean, Object, Array] as PropType<any>,
    default: true,
  },
  uncheckedValue: {
    type: [String, Number, Boolean, Object, Array] as PropType<any>,
    default: false,
  },
  checkedColor: String,
  uncheckedColor: String,
  disabled: Boolean,
  readonly: Boolean,
  indeterminate: Boolean,
  iconSize: [String, Number],
  ripple: {
    type: Boolean,
    default: true,
  },
  validateTrigger: {
    type: Array as PropType<Array<CheckboxValidateTrigger>>,
    default: () => ['onChange'],
  },
  rules: [Array, Function, Object] as PropType<any>,
  onClick: defineListenerProp<(e: Event) => void>(),
  onChange: defineListenerProp<(value: any, indeterminate: boolean) => void>(),
  'onUpdate:modelValue': defineListenerProp<(value: any) => void>(),
  'onUpdate:indeterminate': defineListenerProp<(value: boolean) => void>(),
}
