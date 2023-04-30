import { isArray, isNumber, isString } from '@varlet/shared'
import type { PropType } from 'vue'

export type SpaceAlign = 'stretch' | 'center' | 'start' | 'end' | 'baseline' | 'flex-start' | 'flex-end'

export type SpaceDirection = 'row' | 'column'

export type SpaceJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'flex-start' | 'flex-end'

export type SpaceInternalSize = 'mini' | 'small' | 'normal' | 'large'

export type SpaceSize = SpaceInternalSize | number | string | [number | string, number | string]

export const internalSizeValidator = (size: any) => ['mini', 'small', 'normal', 'large'].includes(size)

export const sizeValidator = (size: any) => {
  return internalSizeValidator(size) || isArray(size) || isNumber(size) || isString(size)
}

const justifyValidator = (justify: string) => {
  return ['start', 'end', 'center', 'space-around', 'space-between', 'flex-start', 'flex-end'].includes(justify)
}

const alignValidator = (align: string) => {
  return ['stretch', 'center', 'start', 'end', 'baseline', 'flex-start', 'flex-end'].includes(align)
}

export const props = {
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
    default: 'flex-start',
    validator: justifyValidator,
  },
  align: {
    type: String as PropType<SpaceAlign>,
    validator: alignValidator,
  },
  inline: {
    type: Boolean,
    default: false,
  },
}
