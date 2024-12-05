import { VarComponent, BasicAttributes, ListenerProp, SetPropsDefaults } from './varComponent'
import { Placement as PopperPlacement } from '@popperjs/core/lib/enums'
import { TeleportProps, VNode } from 'vue'
import { PositioningStrategy } from '@popperjs/core'

export declare const menuProps: Record<keyof MenuProps, any>

type MenuNeededPopperPlacement = Exclude<PopperPlacement, 'auto' | 'auto-start' | 'auto-end'>

export type MenuPlacement =
  | MenuNeededPopperPlacement
  | 'cover-top'
  | 'cover-top-start'
  | 'cover-top-end'
  | 'cover-bottom'
  | 'cover-bottom-start'
  | 'cover-bottom-end'
  | 'cover-left'
  | 'cover-right'

export type MenuTrigger = 'click' | 'hover' | 'manual'

export type MenuStrategy = PositioningStrategy

export type MenuReference = string | HTMLElement

export interface MenuProps extends BasicAttributes {
  show?: boolean
  disabled?: boolean
  trigger?: MenuTrigger
  reference?: MenuReference
  placement?: MenuPlacement
  strategy?: MenuStrategy
  offsetX?: string | number
  offsetY?: string | number
  teleport?: TeleportProps['to'] | false
  sameWidth?: boolean
  elevation?: boolean | number | string
  defaultStyle?: boolean
  popoverClass?: string
  closeOnClickReference?: boolean
  closeOnKeyEscape?: boolean
  onOpen?: ListenerProp<() => void>
  onOpened?: ListenerProp<() => void>
  onClose?: ListenerProp<() => void>
  onClosed?: ListenerProp<() => void>
  onClickOutside?: ListenerProp<(event: Event) => void>
  'onUpdate:show'?: ListenerProp<(show: boolean) => void>
}

export class Menu extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<MenuProps>

  $props: MenuProps

  $slots: {
    default(): VNode[]
    menu(): VNode[]
  }

  open(): void

  close(): void

  resize(): void

  setReference(reference: MenuReference): void
}

export class _MenuComponent extends Menu {}
