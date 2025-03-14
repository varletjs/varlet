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
  dataUrlType: {
    type: String as PropType<SignatureType>,
    default: 'png',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
}
