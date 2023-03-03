import { PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export type FabPosition = 'left-top' | 'right-top' | 'left-bottom' | 'right-bottom'
export type FabTrigger = 'click' | 'hover'
export type FabDirection = 'top' | 'right' | 'bottom' | 'left'

export const props = {
  modelValue: {
    type: Boolean,
    default: false,
  },
  direction: {
    type: String as PropType<FabDirection>,
    default: 'top',
    validator: (val: string) => {
      return ['top', 'right', 'bottom', 'left'].includes(val)
    },
  },
  position: {
    type: String as PropType<FabPosition>,
    default: 'right-bottom',
    validator: (val: string) => {
      return ['left-top', 'right-top', 'left-bottom', 'right-bottom'].includes(val)
    },
  },
  trigger: {
    type: String as PropType<FabTrigger>,
    default: 'click',
    validator: (val: string) => {
      return ['click', 'hover'].includes(val)
    },
  },
  'onUpdate:modelValue': defineListenerProp<(value: boolean) => void>(),
}
