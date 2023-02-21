import { VarDirective } from './varDirective'

export interface RippleValue {
  color?: string
  disabled?: boolean
}

export class Ripple extends VarDirective<RippleValue> {}

export class _RippleComponent extends Ripple {}
