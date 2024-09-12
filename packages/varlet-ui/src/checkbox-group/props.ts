import { VNode, VNodeChild, type PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export type CheckboxGroupValidateTrigger = 'onChange'

export type CheckboxGroupOptionLabelRender = (option: CheckboxGroupOption, checked: boolean) => VNodeChild

export interface CheckboxGroupOption {
  label?: string | VNode | CheckboxGroupOptionLabelRender
  value?: any
  disabled?: boolean

  [key: PropertyKey]: any
}

export const props = {
  modelValue: {
    type: Array as PropType<Array<any>>,
    default: () => [],
  },
  max: [String, Number],
  options: {
    type: Array as PropType<CheckboxGroupOption[]>,
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
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal',
  },
  validateTrigger: {
    type: Array as PropType<Array<CheckboxGroupValidateTrigger>>,
    default: () => ['onChange'],
  },
  rules: [Array, Function, Object] as PropType<any>,
  onChange: defineListenerProp<(value: Array<any>) => void>(),
  'onUpdate:modelValue': defineListenerProp<(value: Array<any>) => void>(),
}
