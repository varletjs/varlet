import { VarComponent, BasicAttributes, SetPropsDefaults } from './varComponent'

export declare const countToProps: Record<keyof CountToProps, any>

export interface CountToProps extends BasicAttributes {}

export class CountTo extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<CountToProps>

  $props: CountToProps
}

export class _CountToComponent extends CountTo {}
