import { VNode, VNodeChild, type PropType } from 'vue'
import type { ButtonSize } from '../button/props'
import { defineListenerProp } from '../utils/components'

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
  multiple: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  ripple: {
    type: Boolean,
    default: true,
  },
  checkmark: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: 'normal',
  },
  rules: [Array, Function, Object] as PropType<any>,
  onChange: defineListenerProp<(value: any | any[]) => void>(),
  'onUpdate:modelValue': defineListenerProp<(value: any | any[]) => void>(),
}
