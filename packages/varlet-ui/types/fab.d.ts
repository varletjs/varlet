import { VNode } from 'vue'
import { VarComponent, BasicAttributes } from './varComponent'
import type { Trigger, Direction, Position } from '../src/fab/props'

export declare const fabProps: Record<string, any>

export interface FabProps extends BasicAttributes {
  trigger?: Trigger
  direction?: Direction
  position?: Position
}

export class Fab extends VarComponent {
  $props: FabProps

  $slots: {
    default(): VNode[]
    activator(): VNode[]
  }
}

export class _FabComponent extends Fab {}
