import { VNode, VNodeChild, type PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export type CheckboxGroupValidateTrigger = 'onChange'

export type CheckboxGroupOptionLabelRender = (option: CheckboxGroupOption, checked: boolean) => VNodeChild

export interface CheckboxGroupOption {
  label?: string | VNode | CheckboxGroupOptionLabelRender
  disabled?: boolean
  value?: any
}

export const props = {
  modelValue: {
    type: Array as PropType<Array<any>>,
    default: () => [],
  },
  max: [String, Number],
  options: Array as PropType<Array<CheckboxGroupOption>>,
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal',
  },
  validateTrigger: {
    type: Array as PropType<Array<CheckboxGroupValidateTrigger>>,
    default: () => ['onChange'],
  },
  rules: Array as PropType<Array<(value: any) => any>>,
  onChange: defineListenerProp<(value: Array<any>) => void>(),
  'onUpdate:modelValue': defineListenerProp<(value: Array<any>) => void>(),
}
