import { VarComponent, BasicAttributes, ListenerProp, SetPropsDefaults } from './varComponent'
import { VNode } from 'vue'

export declare const colProps: Record<keyof ColProps, any>

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

export type ColBreakpoint = string | number | ColSizeDescriptor

export interface ColProps extends BasicAttributes {
  span?: string | number
  offset?: string | number
  direction?: ColDirection
  justify?: ColJustify
  align?: ColAlign
  xs?: ColBreakpoint
  sm?: ColBreakpoint
  md?: ColBreakpoint
  lg?: ColBreakpoint
  xl?: ColBreakpoint
  onClick?: ListenerProp<(e: Event) => void>
}

export class Col extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<ColProps>

  $props: ColProps

  $slots: {
    default(): VNode[]
  }
}

export class _ColComponent extends Col {}
