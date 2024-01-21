import { type PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export type ValidateTrigger = 'onChange' | 'onLazyChange'

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
  lazyChange: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  loading: Boolean,
  color: String,
  loadingColor: String,
  closeColor: String,
  size: [String, Number],
  rules: Array as PropType<Array<(v: any) => any>>,
  ripple: {
    type: Boolean,
    default: true,
  },
  validateTrigger: {
    type: Array as PropType<Array<ValidateTrigger>>,
    default: () => ['onChange', 'onLazyChange'],
  },
  onClick: defineListenerProp<(event: Event) => void>(),
  onBeforeChange: defineListenerProp<(value: any, change: (value: any) => void) => void>(),
  onChange: defineListenerProp<(value: any) => void>(),
  'onUpdate:modelValue': defineListenerProp<(value: any) => void>(),
}
