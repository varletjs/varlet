import { VarComponent, BasicAttributes, SetPropsDefaults } from '../../types/varComponent'

export declare const alertProps: Record<keyof AlertProps, any>

export interface AlertProps extends BasicAttributes {}

export class Alert extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<AlertProps>

  $props: AlertProps
}

export class _AlertComponent extends Alert {}
