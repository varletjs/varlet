import { type PropType } from 'vue'
import { defineListenerProp, pickProps } from '../utils/components'
import { swipeProps } from '../swipe'
import { popupProps } from '../popup'

export const props = {
  show: Boolean,
  imagePreventDefault: Boolean,
  images: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  initialIndex: {
    type: [String, Number],
    default: 0,
  },
  zoom: {
    type: [String, Number],
    default: 2,
  },
  closeable: Boolean,
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
