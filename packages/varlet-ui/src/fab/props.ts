import { defineListenerProp } from '../utils/components'
import { typeValidator, type ButtonType } from '../button/props'
import { type PropType, type TeleportProps } from 'vue'

export type FabType = ButtonType

export type FabPosition = 'left-top' | 'right-top' | 'left-bottom' | 'right-bottom'

export type FabTrigger = 'click' | 'hover'

export type FabDirection = 'top' | 'right' | 'bottom' | 'left'

export function positionValidator(position: string) {
  return ['left-top', 'right-top', 'left-bottom', 'right-bottom'].includes(position)
}

export function directionValidator(direction: string) {
  return ['top', 'right', 'bottom', 'left'].includes(direction)
}

export function triggerValidator(trigger: string) {
  return ['click', 'hover'].includes(trigger)
}

export const props = {
  active: {
    type: Boolean,
    default: false,
  },
  show: {
    type: Boolean,
    default: true,
  },
  type: {
    type: String as PropType<FabType>,
    default: 'primary',
    validator: typeValidator,
  },
  position: {
    type: String as PropType<FabPosition>,
    default: 'right-bottom',
    validator: positionValidator,
  },
  direction: {
    type: String as PropType<FabDirection>,
    default: 'top',
    validator: directionValidator,
  },
  trigger: {
    type: String as PropType<FabTrigger>,
    default: 'click',
    validator: triggerValidator,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
  },
  inactiveIcon: {
    type: String,
    default: 'plus',
  },
  activeIcon: {
    type: String,
    default: 'window-close',
  },
  inactiveIconSize: {
    type: [Number, String],
  },
  activeIconSize: {
    type: [Number, String],
  },
  fixed: {
    type: Boolean,
    default: true,
  },
  zIndex: {
    type: [Number, String],
    default: 90,
  },
  top: {
    type: [Number, String],
  },
  bottom: {
    type: [Number, String],
  },
  left: {
    type: [Number, String],
  },
  right: {
    type: [Number, String],
  },
  elevation: {
    type: [Number, String, Boolean],
    default: true,
  },
  safeArea: {
    type: Boolean,
    default: false,
  },
  teleport: {
    type: String as PropType<TeleportProps['to']>,
  },
  onClick: defineListenerProp<(active: boolean, e: Event) => void>(),
  onOpen: defineListenerProp<() => void>(),
  onOpened: defineListenerProp<() => void>(),
  onClose: defineListenerProp<() => void>(),
  onClosed: defineListenerProp<() => void>(),
  'onUpdate:active': defineListenerProp<(active: boolean) => void>(),
}
