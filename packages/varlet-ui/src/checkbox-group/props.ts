import { type PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export type CheckboxGroupValidateTrigger = 'onChange'

export const props = {
  modelValue: {
    type: Array as PropType<Array<any>>,
    default: () => [],
  },
  max: [String, Number],
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
