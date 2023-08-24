import { toNumber } from '@varlet/shared'
import { PropType } from 'vue'

export const props = {
  column: {
    type: [String, Number],
    default: 4,
    validator(value: string | number) {
      const val = toNumber(value)
      return val > 0 && val <= 12
    },
  },
  iconSize: {
    type: [String, Number],
    default: 24,
  },
  square: {
    type: Boolean,
    default: false,
  },
  gutter: {
    type: [String, Number],
    default: 0,
  },
  center: {
    type: Boolean,
    default: true,
  },
  border: {
    type: Boolean,
    default: true,
  },
  ripple: {
    type: Boolean,
    default: false,
  },
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'vertical',
    validator(value: string) {
      return ['horizontal', 'vertical'].includes(value)
    },
  },
}
