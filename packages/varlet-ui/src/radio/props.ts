import { type PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export type RadioValidateTrigger = 'onChange'

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
  disabled: Boolean,
  readonly: Boolean,
  checkedColor: String,
  uncheckedColor: String,
  iconSize: [String, Number],
  ripple: {
    type: Boolean,
    default: true,
  },
  validateTrigger: {
    type: Array as PropType<Array<RadioValidateTrigger>>,
    default: () => ['onChange'],
  },
  rules: [Array, Function, Object] as PropType<any>,
  onClick: defineListenerProp<(e: Event) => void>(),
  onChange: defineListenerProp<(value: any) => void>(),
  'onUpdate:modelValue': defineListenerProp<(value: any) => void>(),
}
