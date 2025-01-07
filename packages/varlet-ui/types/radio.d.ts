import { VNode } from 'vue'
import { BasicAttributes, ListenerProp, Rules as RadioRules, SetPropsDefaults, VarComponent } from './varComponent'

export declare const radioProps: Record<keyof RadioProps, any>

export type RadioValidateTrigger = 'onChange'

export interface RadioProps extends BasicAttributes {
  modelValue?: any
  checkedValue?: any
  uncheckedValue?: any
  checkedColor?: string
  uncheckedColor?: string
  disabled?: boolean
  readonly?: boolean
  iconSize?: string | number
  ripple?: boolean
  validateTrigger?: Array<RadioValidateTrigger>
  rules?: RadioRules
  onClick?: ListenerProp<(e: Event) => void>
  onChange?: ListenerProp<(value: any) => void>
  'onUpdate:modelValue'?: ListenerProp<(value: any) => void>
}

export interface RadioData {
  checked: boolean
}

export class Radio extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<RadioProps>

  $props: RadioProps

  $slots: {
    default(data: RadioData): VNode[]
    'checked-icon'(): VNode[]
    'unchecked-icon'(): VNode[]
  }

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void

  toggle(value: any): void
}

export class _RadioComponent extends Radio {}
