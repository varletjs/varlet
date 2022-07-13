import { VarComponent } from './varComponent'
import type { BasicAttributes } from './varComponent'

export interface ButtonProps extends BasicAttributes {
  type?: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'
  size?: 'normal' | 'mini' | 'small' | 'large'
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
  loadingType?: 'circle' | 'wave' | 'cube' | 'rect' | 'disappear'
  loadingSize?: 'normal' | 'mini' | 'small' | 'large'
  onClick?: (e: Event) => void
  onTouchstart?: (e: Event) => void
}

export class Button extends VarComponent {
  $props: ButtonProps
}

export class _ButtonComponent extends Button {}
