import type { PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export const props = {
  modelValue: {
    default: false,
  },
  activeValue: {
    default: true,
  },
  inactiveValue: {
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
  },
  loadingColor: {
    type: String,
  },
  closeColor: {
    type: String,
  },
  size: {
    type: [String, Number],
  },
  rules: {
    type: Array as PropType<Array<(v: boolean) => any>>,
  },
  ripple: {
    type: Boolean,
    default: true,
  },
  onClick: defineListenerProp<(event: MouseEvent) => void>(),
  onChange: defineListenerProp<(value: boolean) => void>(),
  'onUpdate:modelValue': defineListenerProp<(value: boolean) => void>(),
}
