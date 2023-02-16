import type { PropType, ExtractPropTypes } from 'vue'
import colors from '../../utils/color'
import { parseDefaultColors } from '../../utils/color-utils'

export const colorPickerSwatchesColorProps = {
  color: Object as PropType<null>,
  disabled: Boolean,
  maxHeight: [Number, String],
  'onUpdate:color': {
    type: Function as PropType<(value: any) => void>,
  },
  swatches: {
    type: Array as PropType<string[][]>,
    default: () => parseDefaultColors(colors),
  },
}

export type ColorPickerSwatchesColorProps = ExtractPropTypes<typeof colorPickerSwatchesColorProps>
