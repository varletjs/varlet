import { ExtractPublicPropTypes, defineListenerProp, pickProps } from '../utils/components'
import { dragProps } from '../drag'
import { iconProps } from '../icon'
import { type ButtonType } from '../button/props'
import { type PropType, type TeleportProps } from 'vue'

export type FabType = ButtonType

export type FabPosition = 'left-top' | 'right-top' | 'left-bottom' | 'right-bottom'

export type FabTrigger = 'click' | 'hover'

export type FabDirection = 'top' | 'right' | 'bottom' | 'left'

export type FabDrag = Pick<ExtractPublicPropTypes<typeof dragProps>, 'direction' | 'attraction' | 'boundary'> | boolean

export const props = {
  active: Boolean,
  show: {
    type: Boolean,
    default: true,
  },
  drag: {
    type: [Object, Boolean] as PropType<FabDrag>,
    default: false,
  },
  type: {
    type: String as PropType<FabType>,
    default: 'primary',
  },
  position: {
    type: String as PropType<FabPosition>,
    default: 'right-bottom',
  },
  direction: {
    type: String as PropType<FabDirection>,
    default: 'top',
  },
  trigger: {
    type: String as PropType<FabTrigger>,
    default: 'click',
  },
  disabled: Boolean,
  color: String,
  inactiveIcon: {
    type: String,
    default: 'plus',
  },
  activeIcon: {
    type: String,
    default: 'window-close',
  },
  inactiveIconSize: pickProps(iconProps, 'size'),
  activeIconSize: pickProps(iconProps, 'size'),
  inactiveIconNamespace: pickProps(iconProps, 'namespace'),
  activeIconNamespace: pickProps(iconProps, 'namespace'),
  fixed: {
    type: Boolean,
    default: true,
  },
  zIndex: {
    type: [Number, String],
    default: 90,
  },
  top: [Number, String],
  bottom: [Number, String],
  left: [Number, String],
  right: [Number, String],
  elevation: {
    type: [Boolean, Number, String],
    default: true,
  },
  safeArea: Boolean,
  teleport: {
    type: [String, Object, Boolean] as PropType<TeleportProps['to'] | false>,
    default: 'body',
  },
  onClick: defineListenerProp<(active: boolean, e: Event) => void>(),
  onOpen: defineListenerProp<() => void>(),
  onOpened: defineListenerProp<() => void>(),
  onClose: defineListenerProp<() => void>(),
  onClosed: defineListenerProp<() => void>(),
  'onUpdate:active': defineListenerProp<(active: boolean) => void>(),
}
