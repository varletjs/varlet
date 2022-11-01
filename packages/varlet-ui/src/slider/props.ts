import type { PropType } from 'vue'

function labelValidator(label: string) {
  return ['always', 'normal', 'never'].includes(label)
}

export const props = {
  // 当前进度百分比
  modelValue: {
    type: [Number, Array] as PropType<number | Array<number>>,
    default: 0,
  },
  // 步长
  step: {
    type: [Number, String],
    default: 1,
  },
  // 是否开启双滑块模式
  range: {
    type: Boolean,
    default: false,
  },

  labelVisible: {
    type: String,
    default: 'normal',
    validator: labelValidator,
  },

  activeColor: {
    type: String,
  },

  trackColor: {
    type: String,
  },

  thumbColor: {
    type: String,
  },

  labelColor: {
    type: String,
  },

  labelTextColor: {
    type: String,
  },

  trackHeight: {
    type: [String, Number],
  },

  max: {
    type: [String, Number],
    default: 100,
  },

  min: {
    type: [String, Number],
    default: 0,
  },

  thumbSize: {
    type: [String, Number],
  },

  disabled: {
    type: Boolean,
    default: false,
  },
  // 是否只读
  readonly: {
    type: Boolean,
    default: false,
  },

  rules: {
    type: Array as PropType<Array<(v: any) => any>>,
  },

  onChange: {
    type: Function as PropType<(value: number | Array<number>) => void>,
  },

  onStart: {
    type: Function as PropType<() => void>,
  },

  onEnd: {
    type: Function as PropType<(value: number | Array<number>) => void>,
  },

  'onUpdate:modelValue': {
    type: Function as PropType<(value: number | Array<number>) => void>,
  },
}
