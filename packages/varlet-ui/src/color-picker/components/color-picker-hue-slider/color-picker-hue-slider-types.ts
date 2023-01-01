import type { PropType, ExtractPropTypes } from 'vue'
import type { HSV, HSVA } from '../../utils/color-utils-types'

export const colorPickerHueSliderProps = {
  /* test: {
    type: Object as PropType<{ xxx: xxx }>
  } */
  /**
   * 选择器圆点大小
   */
  color: {
    type: Object as PropType<HSVA | null>,
  },
  modelValue: {
    type: Object as PropType<HSV>,
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
