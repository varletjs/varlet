import { VarComponent } from './varComponent'

export interface PopupProps {
  show?: boolean
  position?: 'top' | 'bottom' | 'right' | 'left' | 'center'
  overlay?: boolean
  overlayClass?: string
  overlayStyle?: Record<string, any>
  lockScroll?: boolean
  closeOnClickOverlay?: boolean
  teleport?: any
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
