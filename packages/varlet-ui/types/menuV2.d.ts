import { VarComponent, BasicAttributes } from './varComponent'
import { Placement as PopperPlacement } from '@popperjs/core/lib/enums'
import { TeleportProps } from 'vue'

type NeededPopperPlacement = Exclude<PopperPlacement, 'auto' | 'auto-start' | 'auto-end'>

export type MenuV2Placement =
  | NeededPopperPlacement
  | 'cover-top'
  | 'cover-top-start'
  | 'cover-top-end'
  | 'cover-bottom'
  | 'cover-bottom-start'
  | 'cover-bottom-end'
  | 'cover-left'
  | 'cover-right'

export type MenuV2Trigger = 'click' | 'hover'

export interface MenuV2Props extends BasicAttributes {
  show?: boolean
  disabled?: boolean
  trigger?: MenuV2Trigger
  placement?: MenuV2Placement
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

export class MenuV2 extends VarComponent {
  $props: MenuV2Props

  open(): void

  close(): void

  resize(): void
}

export class _MenuV2Component extends MenuV2 {}
