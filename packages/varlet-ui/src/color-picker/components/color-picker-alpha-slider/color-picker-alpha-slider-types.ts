import type { PropType, ExtractPropTypes } from 'vue'
import type { ColorPickerColor, HSVA } from '../../utils/color-utils-types'

export const colorPickerAlphaSliderProps = {
  color: {
    type: Object as PropType<HSVA>,
    default: { a: 1, h: 0, s: 1, v: 1 },
  },
  modelValue: {
    type: Object as PropType<ColorPickerColor>,
    default: {},
  },
  rgba: {
    type: Object,
    default: null,
  },
  height: {
    type: Number,
    default: 15,
  },
  width: {
    type: Number,
    default: 300,
  },
} as const

export type colorPickerAlphaSliderProps = ExtractPropTypes<typeof colorPickerAlphaSliderProps>
