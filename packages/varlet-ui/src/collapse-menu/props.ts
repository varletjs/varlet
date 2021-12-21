import type { PropType, h } from 'vue'

export interface Option {
  key: string | number
  label: string | number
  disabled?: boolean
  indent?: string | number
  icon?: typeof h | string
}

export const props = {
  selectedKeys: {
    type: [Array, String, Number] as PropType<null | string | number | Array<string | number>>,
    default: null,
  },
  'onUpdate:selectedKeys': {
    type: Function as PropType<(value: string | number | Array<string | number>) => void>,
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
    default: false,
  },
  expandedKeys: {
    type: Array,
    default: () => [],
  },
  activeColor: {
    type: String,
  },
}
