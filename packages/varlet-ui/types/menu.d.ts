import { VarComponent, BasicAttributes } from './varComponent'
import { Placement as PopperPlacement } from '@popperjs/core/lib/enums'
import { TeleportProps } from 'vue'

type NeededPopperPlacement = Exclude<PopperPlacement, 'auto' | 'auto-start' | 'auto-end'>

export type MenuPlacement =
  | NeededPopperPlacement
  | 'cover-top'
  | 'cover-top-start'
  | 'cover-top-end'
  | 'cover-bottom'
  | 'cover-bottom-start'
  | 'cover-bottom-end'
  | 'cover-left'
  | 'cover-right'

export type MenuTrigger = 'click' | 'hover'

export interface MenuProps extends BasicAttributes {
  show?: boolean
  disabled?: boolean
  trigger?: MenuTrigger
  placement?: MenuPlacement
  offsetX?: string | number
  offsetY?: string | number
  teleport?: TeleportProps['to']
  defaultStyle?: boolean
  onOpen?: () => void
  onOpened?: () => void
  onClose?: () => void
  onClosed?: () => void
  'onUpdate:show'?: (show: boolean) => void
}

export class Menu extends VarComponent {
  $props: MenuProps

  open(): void

  close(): void

  resize(): void
}

export class _MenuComponent extends Menu {}
