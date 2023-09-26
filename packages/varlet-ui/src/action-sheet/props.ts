import { defineListenerProp, pickProps } from '../utils/components'
import { popupProps } from '../popup'
import { ActionItem } from './index'
import { type PropType } from 'vue'

export const props = {
  show: Boolean,
  title: String,
  actions: {
    type: Array as PropType<ActionItem[]>,
    default: () => [],
  },
  closeOnClickAction: {
    type: Boolean,
    default: true,
  },
  onSelect: defineListenerProp<(actionItem: ActionItem) => void>(),
  'onUpdate:show': defineListenerProp<(show: boolean) => void>(),
  ...pickProps(popupProps, [
    'overlay',
    'overlayClass',
    'overlayStyle',
    'lockScroll',
    'closeOnClickOverlay',
    'safeArea',
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
