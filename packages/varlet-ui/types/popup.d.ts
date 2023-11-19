import { VarComponent, BasicAttributes, ListenerProp, SetPropsDefaults } from './varComponent'
import { VNode, TeleportProps } from 'vue'

export declare const popupProps: Record<keyof PopupProps, any>

export type PopupPosition = 'top' | 'bottom' | 'right' | 'left' | 'center'

export interface PopupProps extends BasicAttributes {
  show?: boolean
  position?: PopupPosition
  overlay?: boolean
  overlayClass?: string
  overlayStyle?: Record<string, any>
  lockScroll?: boolean
  closeOnClickOverlay?: boolean
  defaultStyle?: boolean
  safeArea?: boolean
  safeAreaTop?: boolean
  teleport?: TeleportProps['to'] | false
  onOpen?: ListenerProp<() => void>
  onOpened?: ListenerProp<() => void>
  onClose?: ListenerProp<() => void>
  onClosed?: ListenerProp<() => void>
  onClickOverlay?: ListenerProp<() => void>
  'onUpdate:show'?: ListenerProp<(show: boolean) => void>
}

export class Popup extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<PopupProps>

  $props: PopupProps

  $slots: {
    default(): VNode[]
  }
}

export class _PopupComponent extends Popup {}
