import type { PropType, ExtractPropTypes } from 'vue'
import type { HSV } from '../../utils/color-utils-types'

export const colorPickerHueSliderProps = {
  color: {
    type: Object as PropType<HSV | null>,
  },
  'onUpdate:color': {
    type: Function as PropType<(value: any) => void>,
  },
  dragger: {
    type: Function as PropType<(value: any) => void>,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
} as const

export type ColorPickerHueSliderProps = ExtractPropTypes<typeof colorPickerHueSliderProps>
