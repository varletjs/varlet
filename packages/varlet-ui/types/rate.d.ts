import { VarComponent, BasicAttributes, ListenerProp } from './varComponent'

export declare const rateProps: Record<string, any>

export interface RateProps extends BasicAttributes {
  modelValue?: string | number
  count?: string | number
  color?: string
  emptyColor?: string
  disabledColor?: string
  icon?: string
  emptyIcon?: string
  halfIcon?: string
  namespace?: string
  emptyIconNamespace?: string
  halfIconNamespace?: string
  size?: string | number
  gap?: string | number
  half?: boolean
  disabled?: boolean
  readonly?: boolean
  clearable?: boolean
  ripple?: boolean
  rules?: Array<(value: any) => any>
  onChange?: ListenerProp<(value: string | number) => void>
  'onUpdate:modelValue'?: ListenerProp<(value: string | number) => void>
}

export class Rate extends VarComponent {
  $props: RateProps
}

export class _RateComponent extends Rate {}
