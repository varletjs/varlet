import type { PropType, ExtractPropTypes } from 'vue'
import type { HSV } from '../../utils/color-utils-types'

export const colorPickerAlphaSliderProps = {
  color: {
    type: Object as PropType<HSV>,
    default: { a: 1, h: 0, s: 1, v: 1 },
  },
  dragger: {
    type: Function as PropType<(value: any) => void>,
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
