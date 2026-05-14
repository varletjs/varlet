import { VNode, VNodeChild, type PropType } from 'vue'
import type { ButtonSize } from '../button/props'
import { defineListenerProp } from '../utils/components'

export type SegmentedButtonsSize = ButtonSize
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

export const props = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array] as PropType<any>,
    default: undefined,
  },
  options: {
    type: Array as PropType<SegmentedButtonsOption[]>,
    default: () => [],
  },
  labelKey: {
    type: String,
    default: 'label',
  },
  valueKey: {
    type: String,
    default: 'value',
  },
  multiple: Boolean,
  size: {
    type: String as PropType<SegmentedButtonsSize>,
    default: 'normal',
  },
  validateTrigger: {
    type: Array as PropType<Array<SegmentedButtonsValidateTrigger>>,
    default: () => ['onChange'],
  },
  rules: [Array, Function, Object] as PropType<any>,
  onChange: defineListenerProp<(value: any | any[]) => void>(),
  'onUpdate:modelValue': defineListenerProp<(value: any | any[]) => void>(),
}
