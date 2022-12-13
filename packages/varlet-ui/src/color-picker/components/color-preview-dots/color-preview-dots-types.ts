import type { PropType, ExtractPropTypes } from 'vue'
import type { ColorPickerColor } from '../../utils/color-utils-types'

export const colorBallProps = {
  modelValue: {
    type: Object as PropType<ColorPickerColor>,
    default: {},
  },
} as const

export type ColorBallProps = ExtractPropTypes<typeof colorBallProps>
