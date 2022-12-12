import type { PropType, ExtractPropTypes } from 'vue'
import { ColorPickerColor } from '../../utils/color-utils-types'
export const colorPickerEditProps = {
  /* test: {
    type: Object as PropType<{ xxx: xxx }>
  } */
  /**
   * 选择器圆点大小
   */
  showAlpha: {
    type: Boolean,
    default: false,
  },
  mode: {
    type: String,
  },
  color: {
    type: Object as PropType<ColorPickerColor>,
  },
} as const

export type ColorPickerEditProps = ExtractPropTypes<typeof colorPickerEditProps>
