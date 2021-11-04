import type { PropType } from 'vue'

const sizeValidator = (size: TSize): boolean => {
  if (typeof size === 'string') {
    return ['mini', 'small', 'normal', 'large'].includes(size) || !!size.match(/\d/g)
  }
  if (typeof size === 'number') return true
  return Array.isArray(size) && size.every((v) => typeof v === 'number' || typeof v === 'string')
}
const justifyValidator = (justify: string): boolean => {
  return ['start', 'end', 'center', 'space-around', 'space-between'].includes(justify)
}

type TAlign = 'stretch' | 'center' | 'start' | 'end' | 'baseline' | 'initial' | 'inherit'

type TDirection = 'row' | 'column'

type TJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between'

export type TSize = 'mini' | 'small' | 'normal' | 'large' | number | string | [number | string, number | string]

export const props = {
  align: {
    type: String as PropType<TAlign>,
  },
  size: {
    type: [String, Number, Array] as PropType<TSize>,
    default: 'normal',
    validator: sizeValidator,
  },
  wrap: {
    type: Boolean,
    default: true,
  },
  direction: {
    type: String as PropType<TDirection>,
    default: 'row',
  },
  justify: {
    type: String as PropType<TJustify>,
    default: 'start',
    validator: justifyValidator,
  },
  inline: {
    type: Boolean,
    default: false,
  },
}
