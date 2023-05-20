import type { PropType } from 'vue'
import { defineListenerProp, pickProps } from '../utils/components'
import { props as swipeProps } from '../swipe/props'
import { props as popupProps } from '../popup/props'

export const props = {
  show: {
    type: Boolean,
    default: false,
  },
  imagePreventDefault: {
    type: Boolean,
    default: false,
  },
  images: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  current: {
    type: String,
  },
  zoom: {
    type: [String, Number],
    default: 2,
  },
  closeable: {
    type: Boolean,
    default: false,
  },
  'onUpdate:show': defineListenerProp<(show: boolean) => void>(),
  onLongPress: defineListenerProp<(index: number) => void>(),
  ...pickProps(swipeProps, ['loop', 'indicator', 'onChange']),
  ...pickProps(popupProps, [
    'lockScroll',
    'teleport',
    'onOpen',
    'onClose',
    'onOpened',
    'onClosed',
    // internal for function call closes the dialog
    'onRouteChange',
  ]),
}
