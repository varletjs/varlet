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
    type: Array as PropType<Array<string | number>>,
    default: [],
  },
  'onUpdate:selectedKeys': {
    type: Function as PropType<(value: Array<string | number>) => void>,
  },
  expandedKeys: {
    type: Array as PropType<Array<string | number>>,
    default: () => [],
  },
  'onUpdate:expandedKeys': {
    type: Function as PropType<(value: Array<string | number>) => void>,
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
  accordion: {
    type: Boolean,
    default: false,
  },
  activeColor: {
    type: String,
    default: '#3a7afe',
  },
  onCollapse: {
    type: Function as PropType<(value: Array<string | number>) => void>,
  },
}
