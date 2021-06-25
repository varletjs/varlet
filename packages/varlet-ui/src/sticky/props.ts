import { isPx, isRem } from '../utils/elements'
import type { PropType } from 'vue'

function offsetTopValidator(offsetTop: string | number): boolean {
  return isPx(offsetTop) || isRem(offsetTop)
}

export const props = {
  offsetTop: {
    type: [String, Number],
    validator: offsetTopValidator,
    default: 0,
  },
  zIndex: {
    type: [String, Number],
    default: 10,
  },
  onScroll: {
    type: Function as PropType<(offsetTop: number, isFixed: boolean) => void>,
  },
}
