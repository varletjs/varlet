import type { PropType, ExtractPropTypes } from 'vue'

export const colorPickerProps = {
  modelValue: {
    type: [Object, String] as PropType<string | number>,
    default: {},
  },
  mode: {
    type: String,
    default: 'hex',
  },
  sliderLayout: {
    type: Boolean,
    default: true,
  },
  swatchesLayout: {
    type: Array as PropType<string[]>,
  },
  canvasLayout: {
    type: Boolean,
    default: true,
  },
  inputLayout: {
    type: Boolean,
    default: true,
  },
} as const

export type ColorPickerProps = ExtractPropTypes<typeof colorPickerProps>
