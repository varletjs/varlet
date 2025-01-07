import { type PropType } from 'vue'
import { popupProps } from '../popup'
import { swipeProps } from '../swipe'
import { defineListenerProp, pickProps } from '../utils/components'

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
    'closeOnKeyEscape',
    'onOpen',
    'onClose',
    'onOpened',
    'onClosed',
    'onKeyEscape',
    // internal for function call closes the dialog
    'onRouteChange',
  ]),
}
