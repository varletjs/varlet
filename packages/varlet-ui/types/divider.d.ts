import { VNode } from 'vue'
import { BasicAttributes, SetPropsDefaults, VarComponent } from './varComponent'

export declare const dividerProps: Record<keyof DividerProps, any>

export interface DividerProps extends BasicAttributes {
  inset?: boolean | number | string
  vertical?: boolean
  description?: string
  margin?: string
  dashed?: boolean
  hairline?: boolean
}

export class Divider extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<DividerProps>

  $props: DividerProps

  $slots: {
    default(): VNode[]
  }
}

export class _DividerComponent extends Divider {}
