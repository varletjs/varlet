import { VarDirective } from './varDirective'

export interface RippleValue {
  color?: string
  disabled?: boolean
}

export interface IRipple extends VarDirective<RippleValue> {}

export declare const Ripple: IRipple

export declare const _RippleComponent: IRipple
