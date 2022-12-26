import { VarComponent, BasicAttributes, ListenerProp } from './varComponent'

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
  onClick?: ListenerProp<(event: MouseEvent) => void>
  onChange?: ListenerProp<(value: boolean) => void>
  'onUpdate:modelValue'?: ListenerProp<(value: boolean) => void>
}

export class Switch extends VarComponent {
  $props: SwitchProps
}

export class _SwitchComponent extends Switch {}
