import { type PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export enum Thumbs {
  First = '1',
  Second = '2',
}

export interface ThumbProps {
  startPosition: number
  currentOffset: number
  percentValue: number
  active: boolean
}

export type ThumbsProps = {
  [Thumbs.First]: ThumbProps
  [Thumbs.Second]: ThumbProps
}

export interface ThumbsListProps {
  value: number | number[]
  enumValue: Thumbs
  text: number
  hovering: boolean
  handleHovering: (value: boolean) => void
}

export type SliderLabel = 'always' | 'normal' | 'never'

export type SliderDirection = 'horizontal' | 'vertical'

export const props = {
  modelValue: {
    type: [Number, Array] as PropType<number | Array<number>>,
    default: 0,
  },
  step: {
    type: [Number, String],
    default: 1,
  },
  range: Boolean,
  labelVisible: {
    type: String as PropType<SliderLabel>,
    default: 'normal',
  },
  activeColor: String,
  trackColor: String,
  thumbColor: String,
  labelColor: String,
  labelTextColor: String,
  trackHeight: [String, Number],
  max: {
    type: [String, Number],
    default: 100,
  },
  min: {
    type: [String, Number],
    default: 0,
  },
  thumbSize: [String, Number],
  disabled: Boolean,
  readonly: Boolean,
  direction: {
    type: String as PropType<SliderDirection>,
    default: 'horizontal',
  },
  rules: Array as PropType<Array<(v: number | Array<number>) => any>>,
  onChange: defineListenerProp<(value: number | Array<number>) => void>(),
  onStart: defineListenerProp<() => void>(),
  onEnd: defineListenerProp<(value: number | Array<number>) => void>(),
  'onUpdate:modelValue': defineListenerProp<(value: number | Array<number>) => void>(),
}
