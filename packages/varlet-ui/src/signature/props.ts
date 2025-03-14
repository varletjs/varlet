import { type PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export type SignatureType = 'png' | 'jpg'

export const props = {
  modelValue: {
    type: String,
    default: '',
  },
  lineWidth: {
    type: Number,
    default: 2,
  },
  strokeStyle: {
    type: String,
    default: '#000',
  },
  dataUrlType: {
    type: String as PropType<SignatureType>,
    default: 'png',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  onStart: defineListenerProp<() => void>(),
  onEnd: defineListenerProp<() => void>(),
  onSigning: defineListenerProp<(payload: { clientX: number; clientY: number }) => void>(),
  onConfirm: defineListenerProp<(canvas: HTMLCanvasElement, dataUrl: string) => void>(),
  onClear: defineListenerProp<() => void>(),
  'onUpdate:modelValue': defineListenerProp<(value: string) => void>(),
}
