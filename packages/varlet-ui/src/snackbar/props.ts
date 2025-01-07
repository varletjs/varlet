import { type PropType, type TeleportProps } from 'vue'
import type { SlotType } from '.'
import { loadingProps } from '../loading'
import { defineListenerProp, pickProps } from '../utils/components'
import { SnackbarType } from './index'

export type SnackbarPosition = 'top' | 'center' | 'bottom'

export const props = {
  type: String as PropType<SnackbarType>,
  position: {
    type: String as PropType<SnackbarPosition>,
    default: 'top',
  },
  content: [String, Function, Object] as PropType<SlotType>,
  contentClass: String,
  duration: {
    type: Number,
    default: 3000,
  },
  elevation: {
    type: [Boolean, String, Number],
    default: true,
  },
  vertical: Boolean,
  loadingType: pickProps(loadingProps, 'type'),
  loadingSize: pickProps(loadingProps, 'size'),
  loadingRadius: pickProps(loadingProps, 'radius'),
  loadingColor: {
    ...pickProps(loadingProps, 'color'),
    default: 'currentColor',
  },
  lockScroll: Boolean,
  show: Boolean,
  teleport: {
    type: [String, Object, Boolean] as PropType<TeleportProps['to'] | false>,
    default: 'body',
  },
  forbidClick: Boolean,
  onOpen: defineListenerProp<() => void>(),
  onOpened: defineListenerProp<() => void>(),
  onClose: defineListenerProp<() => void>(),
  onClosed: defineListenerProp<() => void>(),
  'onUpdate:show': defineListenerProp<(show: boolean) => void>(),
  _update: String,
}
