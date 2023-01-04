import type { PropType, ExtractPropTypes } from 'vue'
import { modes } from './utils/color-utils'

export const colorPickerProps = {
  modelValue: {
    type: [Object, String] as PropType<string | number>,
    default: {},
  },
  mode: {
    type: String,
    default: 'hex',
    validator: (v: string) => Object.keys(modes).includes(v),
  },
  modes: {
    type: Array as PropType<string[]>,
    default: () => Object.keys(modes),
    validator: (v: any) => Array.isArray(v) && v.every((m) => Object.keys(modes).includes(m)),
  },
  width: {
    type: [Number, String],
    default: 300,
  },
  canvasHeight: {
    type: [String, Number],
    default: 150,
  },
  sliderLayout: {
    type: Boolean,
    default: true,
  },
  swatchesLayout: {
    type: Boolean,
    default: true,
  },
  canvasLayout: {
    type: Boolean,
    default: true,
  },
  inputLayout: {
    type: Boolean,
    default: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
} as const

export type ColorPickerProps = ExtractPropTypes<typeof colorPickerProps>
