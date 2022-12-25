import { PropType, TeleportProps } from 'vue'
import { defineListenerProp } from '../utils/components'

export const props = {
  show: {
    type: Boolean,
    default: false,
  },
  lockScroll: {
    type: Boolean,
    default: true,
  },
  teleport: {
    type: String as PropType<TeleportProps['to']>,
  },
  onClick: defineListenerProp<() => void>(),
  'onUpdate:show': defineListenerProp<(show: boolean) => void>(),
}
