import { type PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export type Range = [number, number]

export const props = {
  current: [Number, String],
  size: {
    type: [Number, String],
    default: 10,
  },
  total: {
    type: [Number, String],
    default: 0,
  },
  elevation: {
    type: [Boolean, Number, String],
    default: true,
  },
  maxPagerCount: {
    type: Number,
    default: 3,
  },
  disabled: Boolean,
  simple: {
    type: Boolean,
    default: true,
  },
  showSizeChanger: {
    type: Boolean,
    default: true,
  },
  showQuickJumper: Boolean,
  sizeOption: {
    type: Array as PropType<Array<number>>,
    default: () => [10, 20, 50, 100],
  },
  showTotal: Function as PropType<(total: number, range: Range) => string>,
  onChange: defineListenerProp<(current: number, size: number) => void>(),
  'onUpdate:current': defineListenerProp<(current: number) => void>(),
  'onUpdate:size': defineListenerProp<(size: number) => void>(),
}
