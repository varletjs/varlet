import { VarComponent, BasicAttributes, ListenerProp } from './varComponent'
import { Placement as PopperPlacement } from '@popperjs/core/lib/enums'
import { TeleportProps, VNode } from 'vue'

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
  sameWidth?: boolean
  defaultStyle?: boolean
  onOpen?: ListenerProp<() => void>
  onOpened?: ListenerProp<() => void>
  onClose?: ListenerProp<() => void>
  onClosed?: ListenerProp<() => void>
  'onUpdate:show'?: ListenerProp<(show: boolean) => void>
}

export class Menu extends VarComponent {
  $props: MenuProps

  $slots: {
    default(): VNode[]
    menu(): VNode[]
  }

  open(): void

  close(): void

  resize(): void
}

export class _MenuComponent extends Menu {}
