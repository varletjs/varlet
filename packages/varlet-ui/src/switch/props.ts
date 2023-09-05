import { type PropType } from 'vue'
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
  disabled: Boolean,
  readonly: Boolean,
  loading: Boolean,
  color: String,
  loadingColor: String,
  closeColor: String,
  size: [String, Number],
  rules: Array as PropType<Array<(v: boolean) => any>>,
  ripple: {
    type: Boolean,
    default: true,
  },
  onClick: defineListenerProp<(event: MouseEvent) => void>(),
  onChange: defineListenerProp<(value: boolean) => void>(),
  'onUpdate:modelValue': defineListenerProp<(value: boolean) => void>(),
}
