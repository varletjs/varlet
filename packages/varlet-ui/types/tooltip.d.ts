import { VarComponent, BasicAttributes, ListenerProp } from './varComponent'
import { Placement as PopperPlacement } from '@popperjs/core/lib/enums'
import { TeleportProps, VNode } from 'vue'

type NeededPopperPlacement = Exclude<PopperPlacement, 'auto' | 'auto-start' | 'auto-end'>

export type TooltipPlacement = NeededPopperPlacement

export type TooltipTrigger = 'click' | 'hover'

export type TooltipType = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'

export interface TooltipProps extends BasicAttributes {
  show?: boolean
  disabled?: boolean
  content?: string
  color?: string
  type?: TooltipType
  trigger?: TooltipTrigger
  placement?: TooltipPlacement
  offsetX?: string | number
  offsetY?: string | number
  teleport?: TeleportProps['to']
  defaultStyle?: boolean
  onOpen?: ListenerProp<() => void>
  onOpened?: ListenerProp<() => void>
  onClose?: ListenerProp<() => void>
  onClosed?: ListenerProp<() => void>
  'onUpdate:show'?: ListenerProp<(show: boolean) => void>
}

export class Tooltip extends VarComponent {
  $props: TooltipProps

  $slots: {
    default(): VNode[]
    content(): VNode[]
  }

  open(): void

  close(): void

  resize(): void
}

export class _TooltipComponent extends Tooltip {}
