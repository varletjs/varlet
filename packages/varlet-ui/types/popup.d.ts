import { VarComponent } from './varComponent'
import type { BasicAttributes } from './varComponent'
import type { TeleportProps } from 'vue'

export interface PopupProps extends BasicAttributes {
  show?: boolean
  position?: 'top' | 'bottom' | 'right' | 'left' | 'center'
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
}

export class _PopupComponent extends Popup {}
