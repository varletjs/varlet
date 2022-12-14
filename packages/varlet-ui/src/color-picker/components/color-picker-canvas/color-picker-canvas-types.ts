import type { PropType, ExtractPropTypes } from 'vue'
import { fromRGBA } from '../../utils/color-utils'
import type { ColorPickerColor } from '../../utils/color-utils-types'

export const colorPickerPaletteProps = {
  color: {
    type: Object as PropType<ColorPickerColor>,
    default: () => fromRGBA({ r: 255, g: 0, b: 0, a: 1 }),
  },
  height: {
    type: Number,
    default: 150,
  },
  width: {
    type: Number,
    default: 300,
  },
} as const

export type ColorPickerPaletteProps = ExtractPropTypes<typeof colorPickerPaletteProps>
