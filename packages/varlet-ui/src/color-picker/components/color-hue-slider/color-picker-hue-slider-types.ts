import type { PropType, ExtractPropTypes } from 'vue'
import type { ColorPickerColor } from '../../utils/color-utils-types'

export const colorPickerHueSliderProps = {
  /* test: {
    type: Object as PropType<{ xxx: xxx }>
  } */
  /**
   * 选择器圆点大小
   */
  color: {
    type: Object,
  },
  modelValue: {
    type: Object as PropType<ColorPickerColor>,
  },
  width: {
    type: Number,
    default: 300,
  },
  height: {
    type: Number,
    default: 15,
  },
} as const

export type ColorPickerHueSliderProps = ExtractPropTypes<typeof colorPickerHueSliderProps>
