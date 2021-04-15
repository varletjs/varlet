import { PropType } from 'vue'

type Direction = 'horizontal' | 'vertical'

function directionValidator(mode: string): boolean {
  return ['horizontal', 'vertical'].includes(mode)
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
    type: Function,
  },
}
