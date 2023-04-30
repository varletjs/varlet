import type { PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export type ValidateTriggers = 'onChange'

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
  checkedColor: {
    type: String,
  },
  uncheckedColor: {
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
  iconSize: {
    type: [String, Number],
  },
  ripple: {
    type: Boolean,
    default: true,
  },
  validateTrigger: {
    type: Array as PropType<Array<ValidateTriggers>>,
    default: ['onChange'],
  },
  rules: {
    type: Array as PropType<Array<(value: any) => any>>,
  },
  onClick: defineListenerProp<(e: Event) => void>(),
  onChange: defineListenerProp<(value: any) => void>(),
  'onUpdate:modelValue': defineListenerProp<(value: any) => void>(),
}
