import type { PropType } from 'vue'

export const props = {
  modelValue: {
    type: [String, Number],
    default: 0,
  },
  count: {
    type: [String, Number],
    default: 5,
  },
  color: {
    type: String,
  },
  icon: {
    type: String,
    default: 'star',
  },
  emptyColor: {
    type: String,
    default: '#555555',
  },
  emptyIcon: {
    type: String,
    default: 'star-outline',
  },
  size: {
    type: [String, Number],
    default: '24',
  },
  gap: {
    type: [String, Number],
    default: '2',
  },
  half: {
    type: Boolean,
    default: false,
  },
  halfIcon: {
    type: String,
    default: 'star-half-full',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  disabledColor: {
    type: String,
    default: '#bdbdbd',
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  ripple: {
    type: Boolean,
    default: true,
  },
  rules: {
    type: Array as PropType<Array<(value: any) => any>>,
  },
  onChange: {
    type: Function as PropType<(score: number) => void>,
  },
  'onUpdate:modelValue': {
    type: Function as PropType<(score: number) => void>,
  },
}
