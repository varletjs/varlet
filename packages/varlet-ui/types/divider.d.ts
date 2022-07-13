import { VarComponent } from './varComponent'
import type { BasicAttributes } from './varComponent'

export interface DividerProps extends BasicAttributes {
  inset?: boolean | number
  vertical?: boolean
  description?: string
  margin?: string
  dashed?: boolean
}

export class Divider extends VarComponent {
  $props: DividerProps
}

export class _DividerComponent extends Divider {}
