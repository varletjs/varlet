import { VarComponent, BasicAttributes, ListenerProp } from './varComponent'
import { Placement as PopperPlacement } from '@popperjs/core/lib/enums'
import { TeleportProps, VNode } from 'vue'
import { PositioningStrategy } from '@popperjs/core'

export declare const menuSelectProps: Record<string, any>

type NeededPopperPlacement = Exclude<PopperPlacement, 'auto' | 'auto-start' | 'auto-end'>

export type MenuSelectPlacement =
  | NeededPopperPlacement
  | 'cover-top'
  | 'cover-top-start'
  | 'cover-top-end'
  | 'cover-bottom'
  | 'cover-bottom-start'
  | 'cover-bottom-end'
  | 'cover-left'
  | 'cover-right'

export type MenuSelectTrigger = 'click' | 'hover'

export type MenuSelectStrategy = PositioningStrategy

export type MenuSelectSize = 'normal' | 'mini' | 'small' | 'large'

export interface MenuSelectProps extends BasicAttributes {
  modelValue?: any
  size?: MenuSelectSize
  multiple?: boolean
  scrollable?: boolean
  closeOnSelect?: boolean
  show?: boolean
  disabled?: boolean
  trigger?: MenuSelectTrigger
  reference?: string
  placement?: MenuSelectPlacement
  strategy?: MenuSelectStrategy
  offsetX?: string | number
  offsetY?: string | number
  teleport?: TeleportProps['to'] | false
  sameWidth?: boolean
  elevation?: boolean | number | string
  defaultStyle?: boolean
  popoverClass?: string
  closeOnClickReference?: boolean
  onOpen?: ListenerProp<() => void>
  onOpened?: ListenerProp<() => void>
  onClose?: ListenerProp<() => void>
  onClosed?: ListenerProp<() => void>
  'onUpdate:modelValue'?: ListenerProp<(value: any) => void>
  'onUpdate:show'?: ListenerProp<(show: boolean) => void>
}

export class MenuSelect extends VarComponent {
  $props: MenuSelectProps

  $slots: {
    default(): VNode[]
    options(): VNode[]
  }

  open(): void

  close(): void

  resize(): void
}

export class _MenuSelectComponent extends MenuSelect {}
