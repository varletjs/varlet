import { type PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export const props = {
  modelValue: {
    type: [String, Number],
    default: 0,
  },
  count: {
    type: [String, Number],
    default: 5,
  },
  color: String,
  icon: {
    type: String,
    default: 'star',
  },
  emptyColor: String,
  emptyIcon: {
    type: String,
    default: 'star-outline',
  },
  size: [String, Number],
  gap: [String, Number],
  namespace: String,
  half: Boolean,
  halfIcon: {
    type: String,
    default: 'star-half-full',
  },
  disabled: Boolean,
  disabledColor: String,
  readonly: Boolean,
  ripple: {
    type: Boolean,
    default: true,
  },
  clearable: Boolean,
  rules: Array as PropType<Array<(value: any) => any>>,
  onChange: defineListenerProp<(score: number) => void>(),
  'onUpdate:modelValue': defineListenerProp<(score: number) => void>(),
}
