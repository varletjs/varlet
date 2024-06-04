import { VNode, VNodeChild, type PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export type ValidateTriggers = 'onChange'

export type RadioGroupOptionLabelRender = (option: RadioGroupOption, checked: boolean) => VNodeChild

export interface RadioGroupOption {
  label?: string | VNode | RadioGroupOptionLabelRender
  value?: any
  disabled?: boolean

  [key: PropertyKey]: any
}

export type RadioGroupDirection = 'horizontal' | 'vertical'

export const props = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array] as PropType<any>,
    default: undefined,
  },
  direction: {
    type: String as PropType<RadioGroupDirection>,
    default: 'horizontal',
  },
  options: Array as PropType<Array<RadioGroupOption>>,
  labelKey: {
    type: String,
    default: 'label',
  },
  valueKey: {
    type: String,
    default: 'value',
  },
  validateTrigger: {
    type: Array as PropType<Array<ValidateTriggers>>,
    default: () => ['onChange'],
  },
  rules: Array as PropType<Array<(value: any) => any>>,
  onChange: defineListenerProp<(value: any) => void>(),
  'onUpdate:modelValue': defineListenerProp<(value: any) => void>(),
}
