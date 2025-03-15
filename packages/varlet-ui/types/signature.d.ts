import { BasicAttributes, ListenerProp, SetPropsDefaults, VarComponent } from './varComponent'

export declare const signatureProps: Record<keyof SignatureProps, any>

export type SignatureDataUrlType = 'png' | 'jpg'
export interface SignatureSigningData {
  x: number
  y: number
  clientX: number
  clientY: number
}

export interface SignatureProps extends BasicAttributes {
  lineWidth?: number
  strokeStyle?: string
  dataUrlType?: SignatureDataUrlType
  onStart?: ListenerProp<() => void>
  onEnd?: ListenerProp<() => void>
  onSigning?: ListenerProp<(data: SignatureSigningData) => void>
}

export class Signature extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<SignatureProps>

  $props: SignatureProps
}

export class _SignatureComponent extends Signature {}
