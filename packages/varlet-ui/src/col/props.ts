import type { PropType } from 'vue'
import { ColSizeDescriptor } from './provide'
import { defineListenerProp } from '../utils/components'

function directionValidator(direction: string) {
  return ['row', 'column'].includes(direction)
}

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
  onClick: {
    type: defineListenerProp<(e: Event) => void>(),
  },
}
