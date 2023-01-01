import type { PropType, ExtractPropTypes } from 'vue'
import { fromRGBA } from '../../utils/color-utils'
import type { HSVA, InitialColor } from '../../utils/color-utils-types'

export const colorPickerPreviewProps = {
  color: {
    type: Object as PropType<HSVA | null>,
    default: () => fromRGBA({ r: 255, g: 0, b: 0, a: 1 }),
  },
  height: {
    type: Number,
    default: 150,
  },
  alpha: {
    type: Boolean,
    default: true,
  },
  width: {
    type: Number,
    default: 300,
  },
} as const

export type ColorPickerPreviewProps = ExtractPropTypes<typeof colorPickerPreviewProps>
