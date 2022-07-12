import { VarComponent } from './varComponent'
import type { BasicAttributes } from './varComponent'

export interface SwitchProps extends BasicAttributes {
  modelValue?: any
  activeValue?: any
  inactiveValue?: any
  disabled?: boolean
  readonly?: boolean
  loading?: boolean
  ripple?: boolean
  color?: string
  loadingColor?: string
  closeColor?: string
  size?: string | number
  rules?: Array<(value: any) => any>
  onClick?: (event: MouseEvent) => void
  onChange?: (value: boolean) => void
  'onUpdate:modelValue'?: (value: boolean) => void
}

export class Switch extends VarComponent {
  $props: SwitchProps
}

export class _SwitchComponent extends Switch {}
