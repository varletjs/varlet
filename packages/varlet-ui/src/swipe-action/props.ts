import { type PropType } from 'vue'
import { type ButtonType } from '../button/props'
import { defineListenerProp } from '../utils/components'

export type SwipeActionSide = 'left' | 'right'

export interface SwipeActionItem {
  key: string | number
  text: string
  type?: ButtonType
  color?: string
  textColor?: string
  disabled?: boolean
}

export const props = {
  leftActions: {
    type: Array as PropType<SwipeActionItem[]>,
    default: () => [],
  },
  rightActions: {
    type: Array as PropType<SwipeActionItem[]>,
    default: () => [],
  },
  disabled: Boolean,
  duration: {
    type: [String, Number],
    default: 300,
  },
  closeOnClickAction: {
    type: Boolean,
    default: true,
  },
  closeOnClickOutside: {
    type: Boolean,
    default: true,
  },
  onOpen: defineListenerProp<(side: SwipeActionSide) => void>(),
  onClose: defineListenerProp<() => void>(),
  onAction: defineListenerProp<(action: SwipeActionItem, side: SwipeActionSide, event: Event) => void>(),
}
