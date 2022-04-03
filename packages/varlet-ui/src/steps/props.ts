import type { PropType } from 'vue'

type Direction = 'horizontal' | 'vertical'

function directionValidator(direction: string): boolean {
  return ['horizontal', 'vertical'].includes(direction)
}

export const props = {
  active: {
    type: [String, Number],
    default: 0,
  },
  direction: {
    type: String as PropType<Direction>,
    default: 'horizontal',
    validator: directionValidator,
  },
  activeColor: {
    type: String,
  },
  inactiveColor: {
    type: String,
  },
  onClickStep: {
    type: Function as PropType<(index: number) => void>,
  },
}
