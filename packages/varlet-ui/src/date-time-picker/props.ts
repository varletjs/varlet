import { type PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export const props = {
  active: {
    type: Number,
    default: 0,
  },
  confirmButtonText: String,
  cancelButtonText: String,
  nextStepText: String,
  prevStepText: String,
  onConfirm: defineListenerProp<() => void>(),
  'onUpdate:modelValue': defineListenerProp<(value: string) => void>(),
  onCancel: defineListenerProp<() => void>(),
}
