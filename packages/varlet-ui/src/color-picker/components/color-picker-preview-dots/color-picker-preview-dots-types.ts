import type { PropType, ExtractPropTypes } from 'vue'
import type { InitialColor } from '../../utils/color-utils-types'

export const colorBallProps = {
  modelValue: {
    type: Object as PropType<InitialColor>,
    default: {},
  },
} as const

export type ColorBallProps = ExtractPropTypes<typeof colorBallProps>
