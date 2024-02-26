import { type PropType } from 'vue'
import { defineListenerProp, pickProps } from '../utils/components'
import { iconProps } from '../icon'

export const props = {
  modelValue: {
    type: Number,
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
  emptyIcon: {
    type: String,
    default: 'star-outline',
  },
  halfIcon: {
    type: String,
    default: 'star-half-full',
  },
  namespace: pickProps(iconProps, 'namespace'),
  emptyIconNamespace: pickProps(iconProps, 'namespace'),
  halfIconNamespace: pickProps(iconProps, 'namespace'),
  emptyColor: String,
  size: [String, Number],
  gap: [String, Number],
  half: Boolean,
  disabled: Boolean,
  disabledColor: String,
  readonly: Boolean,
  ripple: {
    type: Boolean,
    default: true,
  },
  clearable: Boolean,
  rules: Array as PropType<Array<(value: number) => any>>,
  onChange: defineListenerProp<(score: number) => void>(),
  'onUpdate:modelValue': defineListenerProp<(score: number) => void>(),
}
