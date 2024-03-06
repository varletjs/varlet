import { type PropType, type TeleportProps } from 'vue'
import { defineListenerProp } from '../utils/components'

export const props = {
  show: Boolean,
  lockScroll: {
    type: Boolean,
    default: true,
  },
  teleport: [String, Object, Boolean] as PropType<TeleportProps['to'] | false>,
  closeOnKeyEscape: {
    type: Boolean,
    default: true,
  },
  onClick: defineListenerProp<() => void>(),
  onKeyEscape: defineListenerProp<() => void>(),
  'onUpdate:show': defineListenerProp<(show: boolean) => void>(),
}
