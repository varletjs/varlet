import type { PropType } from 'vue'

export type CheckBoxGroupValidateTrigger = 'onChange'

export function directionValidator(direction: string) {
  return ['horizontal', 'vertical'].includes(direction)
}

export const props = {
  modelValue: {
    type: Array as PropType<Array<any>>,
    default: () => [],
  },
  max: {
    type: [String, Number],
  },
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal',
    validator: directionValidator,
  },
  validateTrigger: {
    type: Array as PropType<Array<CheckBoxGroupValidateTrigger>>,
    default: ['onChange'],
  },
  rules: {
    type: Array as PropType<Array<(value: any) => any>>,
  },
  onChange: {
    type: Function as PropType<(value: Array<any>) => void>,
  },
  'onUpdate:modelValue': {
    type: Function as PropType<(value: Array<any>) => void>,
  },
}
