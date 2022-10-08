import type { PropType } from 'vue'
import { ColSizeDescriptor } from './provide'

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
  onClick: {
    type: Function as PropType<(e: Event) => void>,
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
}
