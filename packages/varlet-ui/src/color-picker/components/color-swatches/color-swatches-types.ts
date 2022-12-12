import type { PropType, ExtractPropTypes } from 'vue'
import type { ColorPickerColor } from '../../utils/color-utils-types'

export const colorPickerBasicColorProps = {
  color: {
    type: Object as PropType<ColorPickerColor>,
  },
} as const

export type ColorPickerBasicColorProps = ExtractPropTypes<typeof colorPickerBasicColorProps>
