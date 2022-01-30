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
    type: [Object, Number, String] as PropType<SizeDescriptor>,
  },
  sm: {
    type: [Object, Number, String] as PropType<SizeDescriptor>,
  },
  md: {
    type: [Object, Number, String] as PropType<SizeDescriptor>,
  },
  lg: {
    type: [Object, Number, String] as PropType<SizeDescriptor>,
  },
  xl: {
    type: [Object, Number, String] as PropType<SizeDescriptor>,
  },
}
