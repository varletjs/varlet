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
  customClass: {
    type: String,
    default: '',
  },
  validateTrigger: {
    type: Array as PropType<Array<'onChange'>>,
    default: () => ['onChange'],
  },
  rules: {
    type: [Array, Object] as PropType<Array<(v: any) => any> | object>,
    default: () => [],
  },
  height: {
    type: [Number, String],
    default: 200,
  },
}
