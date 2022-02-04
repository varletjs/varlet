import type { PropType } from 'vue'
import { SizeDescriptor } from './provide'

export const props = {
  span: {
    type: [String, Number],
    default: 24,
  },
  offset: {
    type: [String, Number],
    default: 0,
  },
  onClick: {
    type: Function as PropType<(e: Event) => void>,
  },
  xs: {
    type: [Object as SizeDescriptor, Number, String] as PropType<string | number | SizeDescriptor | undefined>,
  },
  sm: {
    type: [Object as SizeDescriptor, Number, String] as PropType<string | number | SizeDescriptor | undefined>,
  },
  md: {
    type: [Object as SizeDescriptor, Number, String] as PropType<string | number | SizeDescriptor | undefined>,
  },
  lg: {
    type: [Object as SizeDescriptor, Number, String] as PropType<string | number | SizeDescriptor | undefined>,
  },
  xl: {
    type: [Object as SizeDescriptor, Number, String] as PropType<string | number | SizeDescriptor | undefined>,
  },
}
