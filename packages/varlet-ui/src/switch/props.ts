import type { PropType } from 'vue'

export const props = {
  modelValue: {
    default: false,
  },
  activeValue: {
    default: true,
  },
  inactiveValue: {
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
  loading: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
  },
  loadingColor: {
    type: String,
  },
  closeColor: {
    type: String,
  },
  size: {
    type: [String, Number],
    default: 20,
  },
  rules: {
    type: Array as PropType<Array<(v: boolean) => any>>,
  },
  ripple: {
    type: Boolean,
    default: true,
  },
  onClick: {
    type: Function as PropType<(event: MouseEvent) => void>,
  },
  onChange: {
    type: Function as PropType<(value: boolean) => void>,
  },
  'onUpdate:modelValue': {
    type: Function as PropType<(value: boolean) => void>,
  },
}
