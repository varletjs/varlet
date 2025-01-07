import { VNode, VNodeChild } from 'vue'
import {
  BasicAttributes,
  ListenerProp,
  Direction as RadioGroupDirection,
  Rules as RadioGroupRules,
  SetPropsDefaults,
  VarComponent,
} from './varComponent'

export declare const radioGroupProps: Record<keyof RadioGroupProps, any>

export type RadioGroupValidateTrigger = 'onChange'

export type RadioGroupOptionLabelRender = (option: CheckboxGroupOption, checked: boolean) => VNodeChild

export interface RadioGroupOption {
  label?: string | VNode | RadioGroupOptionLabelRender
  value?: any
  disabled?: boolean

  [key: PropertyKey]: any
}

export { RadioGroupDirection }

export interface RadioGroupProps extends BasicAttributes {
  modelValue?: any
  direction?: RadioGroupDirection
  options?: RadioGroupOption[]
  labelKey?: string
  valueKey?: string
  validateTrigger?: RadioGroupValidateTrigger[]
  rules?: RadioGroupRules
  onChange?: ListenerProp<(value: any) => void>
  'onUpdate:modelValue'?: ListenerProp<(value: any) => void>
}

export class RadioGroup extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<RadioGroupProps>

  $props: RadioGroupProps

  $slots: {
    default(): VNode[]
  }

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void
}

export class _RadioGroupComponent extends RadioGroup {}
