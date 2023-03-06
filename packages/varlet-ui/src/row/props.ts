import type { PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

function justifyValidator(justify: string) {
  return ['flex-start', 'flex-end', 'start', 'end', 'center', 'space-between', 'space-around'].includes(justify)
}

function alignValidator(align: string) {
  return ['flex-start', 'center', 'flex-end', 'start', 'end'].includes(align)
}

export const props = {
  gutter: {
    type: [String, Number],
    default: 0,
  },
  justify: {
    type: String as PropType<'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'start' | 'end'>,
    default: 'flex-start',
    validator: justifyValidator,
  },
  align: {
    type: String as PropType<'flex-start' | 'center' | 'flex-end' | 'start' | 'end'>,
    default: 'flex-start',
    validator: alignValidator,
  },
  onClick: defineListenerProp<(e: Event) => void>(),
}
