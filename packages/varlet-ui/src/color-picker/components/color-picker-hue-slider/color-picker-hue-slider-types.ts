import type { PropType, ExtractPropTypes } from 'vue'
import type { HSVA } from '../../utils/color-utils-types'

export const colorPickerHueSliderProps = {
  color: {
    type: Object as PropType<HSVA | null>,
  },
  'onUpdate:color': {
    type: Function as PropType<(value: any) => void>,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
} as const

export type ColorPickerHueSliderProps = ExtractPropTypes<typeof colorPickerHueSliderProps>
