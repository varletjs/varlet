import { pickProps } from '../utils/components'
import { props as popupProps } from '../popup/props'
import { PropType } from 'vue'
import { ActionItem } from './index'

export const props = {
  show: {
    type: Boolean,
    default: false,
  },
  actions: {
    type: Array as PropType<ActionItem[]>,
    default: () => [],
  },
  title: {
    type: String,
  },
  closeOnClickAction: {
    type: Boolean,
    default: true,
  },
  onSelect: {
    type: Function as PropType<(actionItem: ActionItem) => void>,
  },
  'onUpdate:show': {
    type: Function as PropType<(show: boolean) => void>,
  },
  ...pickProps(popupProps, [
    'overlay',
    'overlayClass',
    'overlayStyle',
    'lockScroll',
    'closeOnClickOverlay',
    'teleport',
    'onOpen',
    'onClose',
    'onOpened',
    'onClosed',
    'onClickOverlay',
    // internal for function call closes the dialog
    'onRouteChange',
  ]),
}
