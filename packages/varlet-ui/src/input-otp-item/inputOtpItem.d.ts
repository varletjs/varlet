import { BasicAttributes, SetPropsDefaults, VarComponent } from '../../types/varComponent'

export declare const inputOtpItemProps: Record<keyof InputOtpItemProps, any>

export interface InputOtpItemProps extends BasicAttributes {}

export class InputOtpItem extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<InputOtpItemProps>

  $props: InputOtpItemProps
}

export class _InputOtpItemComponent extends InputOtpItem {}
