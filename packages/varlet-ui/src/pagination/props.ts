import { PropType } from 'vue'

export type Range = [number, number]

export const props = {
  current: {
    type: [Number, String],
  },
  size: {
    type: [Number, String],
    default: 10,
  },
  total: {
    type: [Number, String],
    default: 0,
  },
  maxPagerCount: {
    type: Number,
    default: 3,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  simple: {
    type: Boolean,
    default: true,
  },
  showSizeChanger: {
    type: Boolean,
    default: true,
  },
  showQuickJumper: {
    type: Boolean,
    default: false,
  },
  sizeOption: {
    type: Array as PropType<Array<number>>,
    default: () => [10, 20, 50, 100],
  },
  showTotal: {
    type: Function as PropType<(total: number, range: Range) => string>,
  },
  onChange: {
    type: Function as PropType<(current: number, size: number) => void>,
  },
  'onUpdate:current': {
    type: Function as PropType<(current: number) => void>,
  },
  'onUpdate:size': {
    type: Function as PropType<(size: number) => void>,
  },
}
