import { VarComponent, BasicAttributes, ListenerProp, SetPropsDefaults } from './varComponent'

export declare const switchProps: Record<keyof SwitchProps, any>

export type SwitchValidateTrigger = 'onChange' | 'onLazyChange'

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
  lazyChange?: boolean
  validateTrigger?: Array<SwitchValidateTrigger>
  rules?: Array<(value: any) => any>
  onClick?: ListenerProp<(event: Event) => void>
  onChange?: ListenerProp<(value: any) => void>
  'onUpdate:modelValue'?: ListenerProp<(value: any) => void>
  onBeforeChange?: ListenerProp<(value: any, change: (value: any) => void) => void>
}

export class Switch extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<SwitchProps>

  $props: SwitchProps
}

export class _SwitchComponent extends Switch {}
