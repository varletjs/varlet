import { VarComponent, BasicAttributes, ListenerProp, SetPropsDefaults } from './varComponent'
import { VNode } from 'vue'

export declare const checkboxProps: Record<keyof CheckboxProps, any>

export type CheckboxValidateTriggers = 'onChange'

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
  validateTrigger?: Array<CheckboxValidateTriggers>
  rules?: Array<(value: any) => any>
  onClick?: ListenerProp<(e: Event) => void>
  onChange?: ListenerProp<(value: any) => void>
  'onUpdate:modelValue'?: ListenerProp<(value: any) => void>
  'onUpdate:indeterminate'?: ListenerProp<(value: boolean) => void>
}

export class Checkbox extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<CheckboxProps>

  $props: CheckboxProps

  $slots: {
    default(): VNode[]
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
