import { VarComponent, BasicAttributes } from './varComponent'
import { VNode, TeleportProps } from 'vue'

export type PopupPosition = 'top' | 'bottom' | 'right' | 'left' | 'center'

export interface PopupProps extends BasicAttributes {
  show?: boolean
  position?: PopupPosition
  overlay?: boolean
  overlayClass?: string
  overlayStyle?: Record<string, any>
  lockScroll?: boolean
  closeOnClickOverlay?: boolean
  teleport?: TeleportProps['to']
  onOpen?: () => void
  onOpened?: () => void
  onClose?: () => void
  onClosed?: () => void
  onClickOverlay?: () => void
  'onUpdate:show'?: (show: boolean) => void
}

export class Popup extends VarComponent {
  $props: PopupProps

  $slots: {
    default(): VNode[]
  }
}

export class _PopupComponent extends Popup {}
