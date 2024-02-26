import { type PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export type RowJustify = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'start' | 'end'

export type RowAlign = 'flex-start' | 'center' | 'flex-end' | 'start' | 'end'

export type RowGutter = number | string | [number | string, number | string]

export const props = {
  gutter: {
    type: [String, Number, Array] as PropType<RowGutter>,
    default: 0,
  },
  justify: {
    type: String as PropType<RowJustify>,
    default: 'flex-start',
  },
  align: {
    type: String as PropType<RowAlign>,
    default: 'flex-start',
  },
  onClick: defineListenerProp<(e: Event) => void>(),
}
