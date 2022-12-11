import type { PropType, ExtractPropTypes } from 'vue'
import { ColorPickerColor } from '../../utils/color-utils-types'

export const colorPickerProps = {
  colorMap: {
    type: Object,
  },
  modelValue: {
    type: Object as PropType<ColorPickerColor>,
  },
  showAlpha: {
    type: Boolean,
    default: true,
  },
  mode: {
    type: String,
  },
} as const

export type ColorPickerProps = ExtractPropTypes<typeof colorPickerProps>
