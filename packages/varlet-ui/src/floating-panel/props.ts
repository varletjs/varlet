import { TeleportProps, type PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export const props = {
  anchor: Number,
  anchors: Array as PropType<number[]>,
  contentDraggable: {
    type: Boolean,
    default: true,
  },
  duration: {
    type: [Number, String],
    default: 0.3,
  },
  teleport: {
    type: [String, Object, Boolean] as PropType<TeleportProps['to'] | false>,
    default: false,
  },
  lockScroll: Boolean,
  safeArea: Boolean,
  'onUpdate:anchor': defineListenerProp<(height: number) => void>(),
  onAnchorChange: defineListenerProp<(height: number) => void>(),
}
