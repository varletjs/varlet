import { defineListenerProp, pickProps } from '../utils/components'
import { props as loadingProps } from '../loading/props'
import { SNACKBAR_TYPE, SnackbarType } from './index'
import type { PropType, TeleportProps } from 'vue'
import type { SlotType } from '.'

export function positionValidator(position: string): boolean {
  const validPositions = ['top', 'center', 'bottom']
  return validPositions.includes(position)
}

export function typeValidator(type: SnackbarType): boolean {
  return SNACKBAR_TYPE.includes(type)
}

export const props = {
  type: {
    type: String as PropType<SnackbarType>,
    validator: typeValidator,
  },
  position: {
    type: String,
    default: 'top',
    validator: positionValidator,
  },
  content: {
    type: [String, Function, Object] as PropType<SlotType>,
  },
  contentClass: {
    type: String,
  },
  duration: {
    type: Number,
    default: 3000,
  },
  vertical: {
    type: Boolean,
    default: false,
  },
  loadingType: pickProps(loadingProps, 'type'),
  loadingSize: pickProps(loadingProps, 'size'),
  loadingRadius: pickProps(loadingProps, 'radius'),
  loadingColor: {
    ...pickProps(loadingProps, 'color'),
    default: 'currentColor',
  },
  lockScroll: {
    type: Boolean,
    default: false,
  },
  show: {
    type: Boolean,
    default: false,
  },
  teleport: {
    type: [String, Object] as PropType<TeleportProps['to']>,
    default: 'body',
  },
  forbidClick: {
    type: Boolean,
    default: false,
  },
  onOpen: defineListenerProp<() => void>(),
  onOpened: defineListenerProp<() => void>(),
  onClose: defineListenerProp<() => void>(),
  onClosed: defineListenerProp<() => void>(),
  'onUpdate:show': defineListenerProp<(show: boolean) => void>(),
  _update: {
    type: String,
  },
}
