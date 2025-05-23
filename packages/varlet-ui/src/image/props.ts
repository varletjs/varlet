import { ImgHTMLAttributes, type PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export type ImageFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'

export const props = {
  src: String,
  fit: {
    type: String as PropType<ImageFit>,
    default: 'fill',
  },
  position: {
    type: String,
    default: '50% 50%',
  },
  alt: String,
  title: String,
  referrerpolicy: String as PropType<ImgHTMLAttributes['referrerpolicy']>,
  width: [String, Number],
  height: [String, Number],
  radius: {
    type: [String, Number],
    default: 0,
  },
  loading: String,
  error: String,
  lazy: Boolean,
  ripple: Boolean,
  block: {
    type: Boolean,
    default: true,
  },
  onClick: defineListenerProp<(e: Event) => void>(),
  onLoad: defineListenerProp<(e: Event) => void>(),
  onError: defineListenerProp<(e: Event) => void>(),
}
