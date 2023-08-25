import { defineListenerProp } from '../utils/components'
import { type PropType } from 'vue'

export type RefreshStatus = 'default' | 'pulling' | 'loosing' | 'loading' | 'success'

export const props = {
  modelValue: Boolean,
  disabled: Boolean,
  animationDuration: {
    type: [Number, String],
    default: 300,
  },
  successDuration: {
    type: [Number, String],
    default: 2000,
  },
  bgColor: String,
  successBgColor: String,
  color: String,
  successColor: String,
  target: [String, Object] as PropType<string | HTMLElement>,
  onRefresh: defineListenerProp<() => void>(),
  'onUpdate:modelValue': defineListenerProp<(value: boolean) => void>(),
}
