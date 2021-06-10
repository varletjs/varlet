import { VarComponent } from './varComponent'

export interface MenuProps {
  show?: boolean
  alignment?: 'top' | 'bottom'
  offsetX?: string | number
  offsetY?: string | number
  onOpen?: () => void
  onOpened?: () => void
  onClose?: () => void
  onClosed?: () => void
  'onUpdate:show': (show: boolean) => void
}

export class Menu extends VarComponent {
  $props: MenuProps

  resize(): void
}
