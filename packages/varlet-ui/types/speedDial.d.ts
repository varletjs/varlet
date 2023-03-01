import { VarComponent, BasicAttributes } from './varComponent'
import { VNode } from 'vue'

export declare const speedDialProps: Record<string, any>

export type SpeedDialTrigger = 'click' | 'hover'

export type SpeedDialDirection = 'top' | 'right' | 'bottom' | 'left'

export interface SpeedDialProps extends BasicAttributes {
  trigger?: SpeedDialTrigger
  direction?: SpeedDialDirection
  transition?: string
  fixed?: boolean
  absolute?: boolean
  left?: boolean
  right?: boolean
  top?: boolean
  bottom?: boolean
}

export class SpeedDial extends VarComponent {
  $props: SpeedDialProps

  $slots: {
    default(): VNode[]
    activator(): VNode[]
  }
}

export class _SpeedDialComponent extends SpeedDial {}
