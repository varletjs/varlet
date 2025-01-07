import { type PropType } from 'vue'
import { popupProps } from '../popup'
import { defineListenerProp, pickProps } from '../utils/components'
import { ActionItem } from './index'

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
    'closeOnKeyEscape',
    'safeArea',
    'teleport',
    'onOpen',
    'onClose',
    'onOpened',
    'onClosed',
    'onClickOverlay',
    // internal for function call closes the dialog
    'onRouteChange',
    'onKeyEscape',
  ]),
}
