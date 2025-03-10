import { type PropType } from 'vue'

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
  type: {
    type: String as PropType<SignatureType>,
    default: 'png',
  },
  unsupportText: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
}
