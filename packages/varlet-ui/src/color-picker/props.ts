import type { PropType, ExtractPropTypes } from 'vue'
import { modes } from './utils/color-utils'

export const colorPickerProps = {
  modelValue: {
    type: [Object, String] as PropType<string | number>,
    default: {},
  },
  modes: {
    type: Array as PropType<string[]>,
    default: () => Object.keys(modes),
    // validator: (v: any) => Array.isArray(v) && v.every((m) => modes.includes(m)),
  },
  mode: {
    type: String,
    default: 'hsl',
    // validator: (v: string) => modes.includes(v),
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
