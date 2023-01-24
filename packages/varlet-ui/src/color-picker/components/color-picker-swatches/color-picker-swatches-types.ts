import type { PropType, ExtractPropTypes } from 'vue'
import type { ColorPickerColor } from '../../utils/color-utils-types'

export const colorPickerBasicColorProps = {
  color: {
    type: Object as PropType<ColorPickerColor>,
  },
  'onUpdate:color': {
    type: Function as PropType<(value: any) => void>,
  },
} as const

export type ColorPickerBasicColorProps = ExtractPropTypes<typeof colorPickerBasicColorProps>
