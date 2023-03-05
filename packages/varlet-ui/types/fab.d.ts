import { VNode } from 'vue'
import { VarComponent, BasicAttributes, ListenerProp } from './varComponent'

export type FabPosition = 'left-top' | 'right-top' | 'left-bottom' | 'right-bottom'
export type FabTrigger = 'click' | 'hover'
export type FabDirection = 'top' | 'right' | 'bottom' | 'left'
export type Type = 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'

export declare const fabProps: Record<string, any>
export interface FabProps extends BasicAttributes {
  modelValue?: boolean
  color?: string
  textColor?: string
  icon?: string
  iconSize?: number | string
  type: Type
  trigger?: FabTrigger
  direction?: FabDirection
  position?: FabPosition
  'onUpdate:modelValue'?: ListenerProp<(value: boolean) => void>
}

export class Fab extends VarComponent {
  $props: FabProps

  $slots: {
    default(): VNode[]
    activator(): VNode[]
  }
}

export class _FabComponent extends Fab {}
