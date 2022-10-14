import { VarComponent, BasicAttributes, Type as ButtonType, Size as ButtonSize } from './varComponent'
import { LoadingType, LoadingSize } from './loading'
import { VNode } from 'vue'

export { ButtonType, ButtonSize }

export interface ButtonProps extends BasicAttributes {
  type?: ButtonType
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
  onClick?: (e: Event) => void
  onTouchstart?: (e: Event) => void
}

export class Button extends VarComponent {
  $props: ButtonProps

  $slots: {
    default(): VNode[]
  }
}

export class _ButtonComponent extends Button {}
