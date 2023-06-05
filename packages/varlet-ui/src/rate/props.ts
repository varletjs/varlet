import type { PropType } from 'vue'
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
  color: {
    type: String,
  },
  icon: {
    type: String,
    default: 'star',
  },
  emptyColor: {
    type: String,
  },
  emptyIcon: {
    type: String,
    default: 'star-outline',
  },
  size: {
    type: [String, Number],
  },
  gap: {
    type: [String, Number],
  },
  namespace: {
    type: String,
  },
  half: {
    type: Boolean,
    default: false,
  },
  halfIcon: {
    type: String,
    default: 'star-half-full',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  disabledColor: {
    type: String,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  ripple: {
    type: Boolean,
    default: true,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  rules: {
    type: Array as PropType<Array<(value: any) => any>>,
  },
  onChange: defineListenerProp<(score: number) => void>(),
  'onUpdate:modelValue': defineListenerProp<(score: number) => void>(),
}
