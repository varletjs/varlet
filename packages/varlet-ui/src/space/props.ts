import type { PropType } from 'vue'
import { SpaceAlign, SpaceDirection, SpaceJustify, SpaceSize } from '../../types'

export const sizeValidator = (size: SpaceSize): boolean => {
  if (typeof size === 'string') {
    return ['mini', 'small', 'normal', 'large'].includes(size) || !!size.match(/\d/g)
  }
  if (typeof size === 'number') return true
  return Array.isArray(size) && size.length === 2 && size.every((v) => typeof v === 'number' || typeof v === 'string')
}
const justifyValidator = (justify: string): boolean => {
  return ['start', 'end', 'center', 'space-around', 'space-between'].includes(justify)
}

export const props = {
  align: {
    type: String as PropType<SpaceAlign>,
  },
  size: {
    type: [String, Number, Array] as PropType<SpaceSize>,
    default: 'normal',
    validator: sizeValidator,
  },
  wrap: {
    type: Boolean,
    default: true,
  },
  direction: {
    type: String as PropType<SpaceDirection>,
    default: 'row',
  },
  justify: {
    type: String as PropType<SpaceJustify>,
    default: 'start',
    validator: justifyValidator,
  },
  inline: {
    type: Boolean,
    default: false,
  },
}
