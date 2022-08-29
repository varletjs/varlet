import { VarComponent, BasicAttributes } from './varComponent'

export type MenuAlignment = 'top' | 'bottom'

export interface MenuProps extends BasicAttributes {
  show?: boolean
  alignment?: MenuAlignment
  offsetX?: string | number
  offsetY?: string | number
  onOpen?: () => void
  onOpened?: () => void
  onClose?: () => void
  onClosed?: () => void
  'onUpdate:show'?: (show: boolean) => void
}

export class Menu extends VarComponent {
  $props: MenuProps

  resize(): void
}

export class _MenuComponent extends Menu {}
