import { VarComponent, BasicAttributes, ListenerProp, SetPropsDefaults } from './varComponent'
import { Placement as PopperPlacement } from '@popperjs/core/lib/enums'
import { TeleportProps, VNode } from 'vue'
import { PositioningStrategy } from '@popperjs/core'

export declare const tooltipProps: Record<keyof TooltipProps, any>

type TooltipNeededPopperPlacement = Exclude<PopperPlacement, 'auto' | 'auto-start' | 'auto-end'>

export type TooltipPlacement = TooltipNeededPopperPlacement

export type TooltipTrigger = 'click' | 'hover'

export type TooltipType = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'

export type TooltipStrategy = PositioningStrategy

export interface TooltipProps extends BasicAttributes {
  show?: boolean
  disabled?: boolean
  content?: string
  color?: string
  type?: TooltipType
  trigger?: TooltipTrigger
  reference?: string
  placement?: TooltipPlacement
  strategy?: TooltipStrategy
  offsetX?: string | number
  offsetY?: string | number
  teleport?: TeleportProps['to'] | false
  sameWidth?: boolean
  closeOnClickReference?: boolean
  onOpen?: ListenerProp<() => void>
  onOpened?: ListenerProp<() => void>
  onClose?: ListenerProp<() => void>
  onClosed?: ListenerProp<() => void>
  'onUpdate:show'?: ListenerProp<(show: boolean) => void>
}

export class Tooltip extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<TooltipProps>

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
