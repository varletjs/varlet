import type { PropType } from 'vue'
import { defineListenerProp } from '../utils/components'
import { isNumber, isString } from '@varlet/shared'

function fitValidator(fit: string) {
  return ['fill', 'contain', 'cover', 'none', 'scale-down'].includes(fit)
}

export const internalSizeValidator = (size: any) => ['mini', 'small', 'normal', 'large'].includes(size)

export function sizeValidator(size: any): boolean {
  return internalSizeValidator(size) || isNumber(size) || isString(size)
}

export const props = {
  round: {
    type: Boolean,
    default: true,
  },
  size: {
    type: [String, Number] as PropType<'mini' | 'small' | 'normal' | 'large' | number | string>,
    validator: sizeValidator,
    default: 'normal',
  },
  color: {
    type: String,
  },
  src: {
    type: String,
  },
  fit: {
    type: String as PropType<'fill' | 'contain' | 'cover' | 'none' | 'scale-down'>,
    validator: fitValidator,
    default: 'cover',
  },
  bordered: {
    type: Boolean,
    default: false,
  },
  borderColor: {
    type: String,
  },
  loading: {
    type: String,
  },
  error: {
    type: String,
  },
  lazy: {
    type: Boolean,
    default: false,
  },
  onClick: defineListenerProp<(e: Event) => void>(),
  onLoad: defineListenerProp<(e: Event) => void>(),
  onError: defineListenerProp<(e: Event) => void>(),
}
