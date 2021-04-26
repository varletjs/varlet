import { VarComponent } from './varComponent'

interface SwitchProps {
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
  onClick?: (e: Event) => void
  onChange?: (value: boolean) => void
  'onUpdate:modelValue'?: (value: boolean) => void
}

export class Switch extends VarComponent {
  $props: SwitchProps
}
