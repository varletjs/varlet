import type { PropType, ExtractPropTypes } from 'vue'
import type { ColorPickerColor } from '../../utils/color-utils-types'

export const colorPickerHistoryProps = {
  color: {
    type: Object as PropType<ColorPickerColor>,
  },
} as const

export type ColorPickerHistoryProps = ExtractPropTypes<typeof colorPickerHistoryProps>
