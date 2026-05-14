import { VNode, VNodeChild } from 'vue'
import {
  BasicAttributes,
  ListenerProp,
  Rules as SegmentedButtonsRules,
  SetPropsDefaults,
  Size as SegmentedButtonsSize,
  VarComponent,
} from './varComponent'

export declare const segmentedButtonsProps: Record<keyof SegmentedButtonsProps, any>

export type SegmentedButtonsValidateTrigger = 'onClick' | 'onChange'

export type SegmentedButtonsOptionLabelRender = (option: SegmentedButtonsOption, checked: boolean) => VNodeChild

export type SegmentedButtonsOptionCheckmarkRender = (option: SegmentedButtonsOption, checked: boolean) => VNodeChild

export interface SegmentedButtonsOption {
  label?: string | VNode | SegmentedButtonsOptionLabelRender
  checkmark?: boolean | VNode | SegmentedButtonsOptionCheckmarkRender
  value?: any
  disabled?: boolean
  ripple?: boolean

  [key: PropertyKey]: any
}

export { SegmentedButtonsSize }

export interface SegmentedButtonsProps extends BasicAttributes {
  modelValue?: any | any[]
  options?: SegmentedButtonsOption[]
  labelKey?: string
  valueKey?: string
  multiple?: boolean
  size?: SegmentedButtonsSize
  validateTrigger?: SegmentedButtonsValidateTrigger[]
  rules?: SegmentedButtonsRules
  onChange?: ListenerProp<(value: any | any[]) => void>
  'onUpdate:modelValue'?: ListenerProp<(value: any | any[]) => void>
}

export class SegmentedButtons extends VarComponent {
  static setPropsDefaults: SetPropsDefaults<SegmentedButtonsProps>

  $props: SegmentedButtonsProps

  $slots: {
    default(): VNode[]
  }

  validate(): Promise<boolean>

  resetValidation(): void

  reset(): void
}

export class _SegmentedButtonsComponent extends SegmentedButtons {}
