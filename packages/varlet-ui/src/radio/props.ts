import type { PropType } from 'vue'

export type ValidateTrigger = 'onChange'

export const props = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array] as PropType<any>,
    default: false,
  },
  checkedValue: {
    type: [String, Number, Boolean, Object, Array] as PropType<any>,
    default: true,
  },
  uncheckedValue: {
    type: [String, Number, Boolean, Object, Array] as PropType<any>,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  checkedColor: {
    type: String,
  },
  uncheckedColor: {
    type: String,
  },
  iconSize: {
    type: [String, Number],
  },
  ripple: {
    type: Boolean,
    default: true,
  },
  validateTrigger: {
    type: Array as PropType<Array<ValidateTrigger>>,
    default: () => ['onChange'],
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
