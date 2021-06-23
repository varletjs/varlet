import { PropType } from 'vue'
import { pickProps } from '../utils/components'
import { props as swipeProps } from '../swipe/props'
import { props as popupProps } from '../popup/props'

export const props = {
  show: {
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
  'onUpdate:show': {
    type: Function as PropType<(show: boolean) => void>,
  },
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
