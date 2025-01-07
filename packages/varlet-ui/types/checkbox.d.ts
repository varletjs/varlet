import { VNode } from 'vue'
import { BasicAttributes, Rules as CheckboxRules, ListenerProp, SetPropsDefaults, VarComponent } from './varComponent'

export declare const checkboxProps: Record<keyof CheckboxProps, any>

export type CheckboxValidateTrigger = 'onChange'

export interface CheckboxProps extends BasicAttributes {
  modelValue?: any
  checkedValue?: any
  uncheckedValue?: any
  checkedColor?: string
  uncheckedColor?: string
  disabled?: boolean
  readonly?: boolean
  indeterminate?: boolean
  iconSize?: string | number
  ripple?: boolean
  validateTrigger?: Array<CheckboxValidateTrigger>
  rules?: CheckboxRules
  onClick?: ListenerProp<(e: Event) => void>
  onChange?: ListenerProp<(value: any, indeterminate: boolean) => void>
  'onUpdate:modelValue'?: ListenerProp<(value: any) => void>
  'onUpdate:indeterminate'?: ListenerProp<(value: boolean) => void>
}

export interface CheckboxData {
  checked: boolean
}

export class Checkbox extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<CheckboxProps>

  $props: CheckboxProps

  $slots: {
    default(data: CheckboxData): VNode[]
    'checked-icon'(): VNode[]
    'unchecked-icon'(): VNode[]
    'indeterminate-icon'(): VNode[]
  }

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void

  toggle(value: any): void
}

export class _CheckboxComponent extends Checkbox {}
