import { type InputHTMLAttributes, type PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export type SwitchValidateTrigger = 'onChange' | 'onLazyChange'

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
  variant: Boolean,
  rules: [Array, Function, Object] as PropType<any>,
  tabindex: String as PropType<InputHTMLAttributes['tabindex']>,
  ripple: {
    type: Boolean,
    default: true,
  },
  buttonElevation: {
    type: [Boolean, String, Number],
    default: true,
  },
  validateTrigger: {
    type: Array as PropType<Array<SwitchValidateTrigger>>,
    default: () => ['onChange', 'onLazyChange'],
  },
  onClick: defineListenerProp<(event: Event) => void>(),
  onBeforeChange: defineListenerProp<(value: any, change: (value: any) => void) => void>(),
  onChange: defineListenerProp<(value: any) => void>(),
  'onUpdate:modelValue': defineListenerProp<(value: any) => void>(),
}
