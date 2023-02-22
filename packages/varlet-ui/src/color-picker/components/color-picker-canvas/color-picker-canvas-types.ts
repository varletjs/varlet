import type { PropType, ExtractPropTypes } from 'vue'
import { fromRGBA } from '../../utils/color-utils'
import type { HSV } from '../../utils/color-utils-types'

export const colorPickerPaletteProps = {
  color: {
    type: Object as PropType<HSV>,
    default: () => fromRGBA({ r: 255, g: 0, b: 0, a: 1 }),
  },
  'onUpdate:color': {
    type: Function as PropType<(value: any) => void>,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  height: {
    type: [Number, String],
    default: 150,
  },
  width: {
    type: [Number, String],
    default: 300,
  },
}

export type ColorPickerPaletteProps = ExtractPropTypes<typeof colorPickerPaletteProps>