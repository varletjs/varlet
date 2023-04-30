import type { PropType } from 'vue'
import { ColSizeDescriptor } from './provide'
import { defineListenerProp } from '../utils/components'

function directionValidator(direction: string) {
  return ['row', 'column'].includes(direction)
}

function justifyValidator(justify: string) {
  return ['start', 'end', 'center', 'space-around', 'space-between', 'flex-start', 'flex-end'].includes(justify)
}

function alignValidator(align: string) {
  return ['stretch', 'center', 'start', 'end', 'baseline', 'initial', 'inherit', 'flex-start', 'flex-end'].includes(
    align
  )
}

export type ColAlign =
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'baseline'
  | 'initial'
  | 'inherit'
  | 'flex-start'
  | 'flex-end'

export type ColJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'flex-start' | 'flex-end'

export type ColDirection = 'row' | 'column'

export const props = {
  span: {
    type: [String, Number],
    default: 24,
  },
  offset: {
    type: [String, Number],
    default: 0,
  },
  direction: {
    type: String as PropType<ColDirection>,
    default: 'row',
    validator: directionValidator,
  },
  justify: {
    type: String as PropType<ColJustify>,
    validator: justifyValidator,
  },
  align: {
    type: String as PropType<ColDirection>,
    validator: alignValidator,
  },
  xs: {
    type: [Object as ColSizeDescriptor, Number, String] as PropType<string | number | ColSizeDescriptor | undefined>,
  },
  sm: {
    type: [Object as ColSizeDescriptor, Number, String] as PropType<string | number | ColSizeDescriptor | undefined>,
  },
  md: {
    type: [Object as ColSizeDescriptor, Number, String] as PropType<string | number | ColSizeDescriptor | undefined>,
  },
  lg: {
    type: [Object as ColSizeDescriptor, Number, String] as PropType<string | number | ColSizeDescriptor | undefined>,
  },
  xl: {
    type: [Object as ColSizeDescriptor, Number, String] as PropType<string | number | ColSizeDescriptor | undefined>,
  },
  onClick: defineListenerProp<(e: Event) => void>(),
}
