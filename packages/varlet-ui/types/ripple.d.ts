import { VarDirective } from './varDirective'

export interface RippleValue {
  color?: string
  disabled?: boolean
}

export interface Ripple extends VarDirective<RippleValue> {}

export class _RippleComponent {}
