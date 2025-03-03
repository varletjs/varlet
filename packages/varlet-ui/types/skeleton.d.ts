import { VNode } from 'vue'
import { BasicAttributes, SetPropsDefaults, VarComponent } from './varComponent'

export type SignatureType = 'png' | 'jpg'

export declare const signatureProps: Record<keyof SignatureProps, any>

export interface SignatureProps extends BasicAttributes {
  modelValue?: string
  lineWidth?: number
  strokeStyle?: string
  type?: SignatureType
  unsupportText?: string
  customClass?: string
  height?: number | string
  validateTrigger?: string[]
  rules?: Array<(v: string) => any>
}

export class Signature extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<SignatureProps>

  $props: SignatureProps

  $slots: {
    default(): VNode[]
  }

  clear(): void
  confirm(): void
}

export class _SignatureComponent extends Signature {}
