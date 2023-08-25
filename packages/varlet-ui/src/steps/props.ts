import { type PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export type StepsDirection = 'horizontal' | 'vertical'

export const props = {
  active: {
    type: [String, Number],
    default: 0,
  },
  direction: {
    type: String as PropType<StepsDirection>,
    default: 'horizontal',
  },
  activeColor: String,
  inactiveColor: String,
  onClickStep: defineListenerProp<(index: number) => void>(),
}
