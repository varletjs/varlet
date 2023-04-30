import { VarComponent, BasicAttributes, ListenerProp } from './varComponent'
import { VNode } from 'vue'

export declare const colProps: Record<string, any>

export type ColSizeDescriptor = {
  span?: number | string
  offset?: number | string
}

export type ColAlign =
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'baseline'
  | 'initial'
  | 'inherit'
  | 'flex-start'
  | 'flex-end'

export type ColJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'flex-start' | 'flex-end'

export type ColDirection = 'row' | 'column'

export interface ColProps extends BasicAttributes {
  span?: string | number
  offset?: string | number
  direction?: ColDirection
  justify?: ColJustify
  align?: ColAlign
  xs?: string | number | ColSizeDescriptor | undefined
  sm?: string | number | ColSizeDescriptor | undefined
  md?: string | number | ColSizeDescriptor | undefined
  lg?: string | number | ColSizeDescriptor | undefined
  xl?: string | number | ColSizeDescriptor | undefined
  onClick?: ListenerProp<(e: Event) => void>
}

export class Col extends VarComponent {
  $props: ColProps

  $slots: {
    default(): VNode[]
  }
}

export class _ColComponent extends Col {}
