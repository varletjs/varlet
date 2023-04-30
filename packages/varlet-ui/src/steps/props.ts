import type { PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

function directionValidator(direction: string): boolean {
  return ['horizontal', 'vertical'].includes(direction)
}

export const props = {
  active: {
    type: [String, Number],
    default: 0,
  },
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal',
    validator: directionValidator,
  },
  activeColor: {
    type: String,
  },
  inactiveColor: {
    type: String,
  },
  onClickStep: defineListenerProp<(index: number) => void>(),
}
