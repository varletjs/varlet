import type { PropType } from 'vue'

export type ValidateTriggers = 'onChange'

export function directionValidator(direction: string) {
  return ['horizontal', 'vertical'].includes(direction)
}

export const props = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array] as PropType<any>,
    default: undefined,
  },
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal',
    validator: directionValidator,
  },
  validateTrigger: {
    type: Array as PropType<Array<ValidateTriggers>>,
    default: () => ['onChange'],
  },
  rules: {
    type: Array as PropType<Array<(value: any) => any>>,
  },
  onChange: {
    type: Function as PropType<(value: any) => void>,
  },
  'onUpdate:modelValue': {
    type: Function as PropType<(value: any) => void>,
  },
}
