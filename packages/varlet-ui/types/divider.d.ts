import { VarComponent, BasicAttributes } from './varComponent'
import { VNode } from 'vue'

export declare const dividerProps: Record<string, any>

export interface DividerProps extends BasicAttributes {
  inset?: boolean | number
  vertical?: boolean
  description?: string
  margin?: string
  dashed?: boolean
  hairline?: boolean
}

export class Divider extends VarComponent {
  $props: DividerProps

  $slots: {
    default(): VNode[]
  }
}

export class _DividerComponent extends Divider {}
