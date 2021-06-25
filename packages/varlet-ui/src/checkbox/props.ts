import type { PropType } from 'vue'

export type ValidateTriggers = 'onChange'

export const props = {
  modelValue: {
    default: false,
  },
  checkedValue: {
    default: true,
  },
  uncheckedValue: {
    default: false,
  },
  checkedColor: {
    type: String,
  },
  uncheckedColor: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  iconSize: {
    type: [String, Number],
  },
  ripple: {
    type: Boolean,
    default: true,
  },
  validateTrigger: {
    type: Array as PropType<Array<ValidateTriggers>>,
    default: ['onChange'],
  },
  rules: {
    type: Array as PropType<Array<(value: any) => any>>,
  },
  onClick: {
    type: Function as PropType<(e: Event) => void>,
  },
  onChange: {
    type: Function as PropType<(value: any) => void>,
  },
  'onUpdate:modelValue': {
    type: Function as PropType<(value: any) => void>,
  },
}
