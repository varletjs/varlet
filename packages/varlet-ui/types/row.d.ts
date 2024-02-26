import { VarComponent, BasicAttributes, ListenerProp, SetPropsDefaults } from './varComponent'
import { VNode } from 'vue'

export declare const rowProps: Record<keyof RowProps, any>

export type RowJustify = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'start' | 'end'

export type RowAlign = 'flex-start' | 'center' | 'flex-end' | 'start' | 'end'

export interface RowProps extends BasicAttributes {
  gutter?: string | number | [number | string, number | string]
  justify?: RowJustify
  align?: RowAlign
  onClick?: ListenerProp<(e: Event) => void>
}

export class Row extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<RowProps>

  $props: RowProps

  $slots: {
    default(): VNode[]
  }
}

export class _RowComponent extends Row {}
