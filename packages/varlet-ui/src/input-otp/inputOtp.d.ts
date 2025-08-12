import { BasicAttributes, SetPropsDefaults, VarComponent } from '../../types/varComponent'

export declare const inputOtpProps: Record<keyof InputOtpProps, any>

export interface InputOtpProps extends BasicAttributes {}

export class InputOtp extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<InputOtpProps>

  $props: InputOtpProps
}

export class _InputOtpComponent extends InputOtp {}
