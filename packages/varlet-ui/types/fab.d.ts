import { VNode, TeleportProps } from 'vue'
import { VarComponent, BasicAttributes, ListenerProp, Type, SetPropsDefaults } from './varComponent'
import { DragProps } from './drag'

export type FabPosition = 'left-top' | 'right-top' | 'left-bottom' | 'right-bottom'

export type FabTrigger = 'click' | 'hover'

export type FabDirection = 'top' | 'right' | 'bottom' | 'left'

export type FabType = Type

export type FabDrag = boolean | Pick<DragProps, 'attraction' | 'boundary' | 'direction'>

export declare const fabProps: Record<keyof FabProps, any>

export interface FabTriggerData {
  active: boolean
}

export interface FabProps extends BasicAttributes {
  active?: boolean
  show?: boolean
  drag?: FabDrag
  type?: FabType
  fixed?: boolean
  position?: FabPosition
  direction?: FabDirection
  trigger?: FabTrigger
  disabled?: boolean
  color?: string
  inactiveIcon?: string
  activeIcon?: string
  inactiveIconSize?: string | number
  activeIconSize?: string | number
  inactiveIconNamespace?: string
  activeIconNamespace?: string
  zIndex?: string | number
  top?: string | number
  bottom?: string | number
  left?: string | number
  right?: string | number
  safeArea?: boolean
  teleport?: TeleportProps['to'] | false
  elevation?: boolean | number | string
  onClick?: ListenerProp<(active: boolean, e: Event) => void>
  onOpen?: ListenerProp<() => void>
  onOpened?: ListenerProp<() => void>
  onClose?: ListenerProp<() => void>
  onClosed?: ListenerProp<() => void>
  'onUpdate:active'?: ListenerProp<(active: boolean) => void>
}

export class Fab extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<FabProps>

  $props: FabProps

  $slots: {
    default(): VNode[]
    trigger(data: FabTriggerData): VNode[]
  }
}

export class _FabComponent extends Fab {}
