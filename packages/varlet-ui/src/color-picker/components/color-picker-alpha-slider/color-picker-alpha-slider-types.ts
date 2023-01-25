import type { PropType, ExtractPropTypes } from 'vue'
import type { ColorPickerColor, HSVA } from '../../utils/color-utils-types'

export const colorPickerAlphaSliderProps = {
  color: {
    type: Object as PropType<HSVA>,
    default: { a: 1, h: 0, s: 1, v: 1 },
  },
  'onUpdate:color': {
    type: Function as PropType<(value: any) => void>,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
} as const

export type colorPickerAlphaSliderProps = ExtractPropTypes<typeof colorPickerAlphaSliderProps>
