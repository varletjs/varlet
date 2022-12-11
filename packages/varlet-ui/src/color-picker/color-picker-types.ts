import type { PropType, ExtractPropTypes } from 'vue'
export const colorPickerProps = {
  modelValue: {
    type: [Object, String] as PropType<string | number>,
    default: {},
  },
  mode: {
    type: String,
  },
  showAlpha: {
    type: Boolean,
    default: true,
  },
  dotSize: {
    type: Number,
    default: 15,
  },
  swatches: {
    type: Array as PropType<string[]>,
  },
  showHistory: {
    type: Boolean,
    default: true,
  },
} as const

export type ColorPickerProps = ExtractPropTypes<typeof colorPickerProps>
