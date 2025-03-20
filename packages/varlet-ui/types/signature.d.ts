import { BasicAttributes, ListenerProp, SetPropsDefaults, VarComponent } from './varComponent'

export declare const signatureProps: Record<keyof SignatureProps, any>

export type SignatureDataUrlType = 'png' | 'jpg'

export interface SignatureProps extends BasicAttributes {
  lineWidth?: number
  strokeStyle?: string
  dataUrlType?: SignatureDataUrlType
  onStart?: ListenerProp<() => void>
  onEnd?: ListenerProp<() => void>
  onSigning?: ListenerProp<() => void>
}

export class Signature extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<SignatureProps>

  $props: SignatureProps

  confirm(): string

  reset(): void
}

export class _SignatureComponent extends Signature {}
