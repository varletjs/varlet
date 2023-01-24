import type { PropType, ExtractPropTypes } from 'vue'
import { modes } from '../../utils/color-utils'
import type { HSVA } from '../../utils/color-utils-types'

export const colorPickerEditProps = {
  mode: {
    type: String,
  },
  modes: {
    type: Array as PropType<string[]>,
    default: () => Object.keys(modes),
    validator: (v: any) => Array.isArray(v) && v.every((m) => Object.keys(modes).includes(m)),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  color: {
    type: Object as PropType<HSVA | null>,
  },
  'onUpdate:color': {
    type: Function as PropType<(value: any) => void>,
  },
} as const

export type ColorPickerEditProps = ExtractPropTypes<typeof colorPickerEditProps>
