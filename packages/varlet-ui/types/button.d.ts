import { VarComponent, BasicAttributes, Type as ButtonType, Size as ButtonSize, ListenerProp } from './varComponent'
import { LoadingType, LoadingSize } from './loading'
import { ButtonHTMLAttributes, VNode } from 'vue'

export { ButtonType, ButtonSize }

export declare const buttonProps: Record<string, any>

export interface ButtonProps extends BasicAttributes {
  type?: ButtonType
  nativeType?: ButtonHTMLAttributes['type']
  size?: ButtonSize
  loading?: boolean
  round?: boolean
  block?: boolean
  text?: boolean
  outline?: boolean
  disabled?: boolean
  ripple?: boolean
  autoLoading?: boolean
  color?: string
  textColor?: string
  loadingRadius?: string | number
  loadingType?: LoadingType
  loadingSize?: LoadingSize
  loadingColor?: string
  onClick?: ListenerProp<(e: Event) => void>
  onTouchstart?: ListenerProp<(e: Event) => void>
}

export class Button extends VarComponent {
  $props: ButtonProps

  $slots: {
    default(): VNode[]
  }
}

export class _ButtonComponent extends Button {}
