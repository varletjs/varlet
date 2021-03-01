import { PropType } from 'vue'

type Direction = 'horizontal' | 'vertical'

export const props = {
  active: {
    type: [String, Number],
    default: 0,
  },
  direction: {
    type: String as PropType<Direction>,
    default: 'horizontal',
  },
  activeColor: {
    type: String,
  },
  inactiveColor: {
    type: String,
  },
  onChange: {
    type: Function,
  },
}
