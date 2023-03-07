import { VarComponent, BasicAttributes, ListenerProp } from './varComponent'
import { VNode } from 'vue'

export declare const rowProps: Record<string, any>

export type RowJustify = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'start' | 'end'

export type RowAlign = 'flex-start' | 'center' | 'flex-end' | 'start' | 'end'

export interface RowProps extends BasicAttributes {
  gutter?: string | number
  justify?: RowJustify
  align?: RowAlign
  onClick?: ListenerProp<(e: Event) => void>
}

export class Row extends VarComponent {
  $props: RowProps

  $slots: {
    default(): VNode[]
  }
}

export class _RowComponent extends Row {}
