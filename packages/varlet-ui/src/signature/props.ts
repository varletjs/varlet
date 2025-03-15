import { type PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export type SignatureDataUrlType = 'png' | 'jpg'
export interface SignatureSigningData {
  x: number
  y: number
  clientX: number
  clientY: number
}

export const props = {
  lineWidth: {
    type: Number,
    default: 2,
  },
  strokeStyle: {
    type: String,
    default: 'currentColor',
  },
  dataUrlType: {
    type: String as PropType<SignatureDataUrlType>,
    default: 'png',
  },
  onStart: defineListenerProp<() => void>(),
  onEnd: defineListenerProp<() => void>(),
  onSigning: defineListenerProp<(data: SignatureSigningData) => void>(),
}
