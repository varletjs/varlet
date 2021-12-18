import type { PropType } from 'vue'

export interface Option {
  key: string | number
  label: string | number
  disabled?: boolean
  indent?: string | number
  icon?: () => void | string
}

export const props = {
  modelValue: {
    type: [Array, String, Number] as PropType<null | string | number | Array<string | number>>,
    default: null,
  },
  'onUpdate:modelValue': {
    type: Function,
  },
  options: {
    type: Array as PropType<Array<Option>>,
    default: () => [],
  },
  indent: {
    type: [String, Number] as PropType<null | string | number>,
    default: 0,
  },
  multiple: {
    type: Boolean,
    default: true,
  },
  expandedKeys: {
    type: Array,
    default: () => [],
  },
}
