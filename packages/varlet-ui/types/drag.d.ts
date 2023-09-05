import { VarComponent, BasicAttributes } from './varComponent'
import { TeleportProps, VNode } from 'vue'

export type DragDirection = 'x' | 'y' | 'xy'

export type DragAttraction = 'x' | 'y' | 'xy'

export interface DragBoundary {
  top?: number | string
  bottom?: number | string
  left?: number | string
  right?: number | string
}

export declare const dragProps: Record<string, any>

export interface DragProps extends BasicAttributes {
  direction?: DragDirection
  attraction?: DragAttraction
  disabled?: boolean
  boundary?: DragBoundary
  zIndex?: string | number
  teleport?: TeleportProps['to'] | false
  onClick?: ListenerProp<(event: Event) => void>
}

export class Drag extends VarComponent {
  $props: DragProps

  $slots: {
    default(): VNode[]
  }

  resize(): void

  reset(): void
}

export class _DragComponent extends Drag {}
