import type { PropType } from 'vue'

export type LoadingType = 'circle' | 'wave' | 'cube' | 'rect' | 'disappear'

export type LoadingSize = 'normal' | 'mini' | 'small' | 'large'

export function typeValidator(type: string): boolean {
  return ['circle', 'wave', 'cube', 'rect', 'disappear'].includes(type)
}

export function sizeValidator(size: string): boolean {
  return ['normal', 'mini', 'small', 'large'].includes(size)
}

export const props = {
  type: {
    type: String as PropType<LoadingType>,
    default: 'circle',
    validator: typeValidator,
  },
  radius: {
    type: [String, Number],
  },
  size: {
    type: String as PropType<LoadingSize>,
    default: 'normal',
    validator: sizeValidator,
  },
  color: {
    type: String,
  },
  description: {
    type: String,
  },
  loading: {
    type: Boolean,
    default: false,
  },
}
