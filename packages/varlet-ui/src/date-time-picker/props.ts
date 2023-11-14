import { type PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export const props = {
  modelValue: String as PropType<string>,
  active: {
    type: Number,
    default: 0,
  },

  elevation: {
    type: [Boolean, Number, String],
    default: false,
  },
  confirmButtonText: {
    type: String,
    default: 'submit',
  },
  cancelButtonText: {
    type: String,
    default: 'cancel',
  },
  nextStepText: {
    type: String,
    default: 'next',
  },
  prevStepText: {
    type: String,
    default: 'prev',
  },
  onConfirm: defineListenerProp<() => void>(),
  'onUpdate:modelValue': defineListenerProp<(value: string) => void>(),
  onCancel: defineListenerProp<() => void>(),
}
